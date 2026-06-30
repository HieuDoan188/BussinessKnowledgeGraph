/**
 * Business OS Handbook — Markdown to PDF Converter
 * Usage:
 *   node convert.mjs                          # Convert all README.md files
 *   node convert.mjs --domain 06-finance      # Convert one domain folder
 *   node convert.mjs --file docs/03-strategy/S01.../README.md  # Single file
 *   node convert.mjs --merge                  # Merge all into one PDF
 *   node convert.mjs --domain 04-marketing --merge  # Merge one domain
 */

import { mdToPdf } from 'md-to-pdf';
import { glob } from 'glob';
import { readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, resolve, relative, basename } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT   = resolve(__dir, '../..');          // BussinessKnowledgeGraph/
const DOCS   = join(ROOT, 'docs');
const OUTPUT = join(ROOT, 'output', 'pdf');
const CSS    = join(__dir, 'pdf.css');

/* ── CLI args ─────────────────────────────────────────────── */
const args    = process.argv.slice(2);
const getArg  = (flag) => { const i = args.indexOf(flag); return i !== -1 ? args[i + 1] : null; };
const hasFlag = (flag) => args.includes(flag);

const domainFilter = getArg('--domain');   // e.g. "06-finance"
const singleFile   = getArg('--file');     // relative or absolute path
const mergeMode    = hasFlag('--merge');   // combine into single PDF

/* ── CSS content ───────────────────────────────────────────── */
const cssContent = readFileSync(CSS, 'utf8');

/* ── PDF config passed to md-to-pdf ───────────────────────── */
const pdfConfig = {
  css: cssContent,
  pdf_options: {
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '22mm', left: '18mm', right: '18mm' },
    displayHeaderFooter: true,
    headerTemplate: `<div style="width:100%;font-size:8px;color:#94a3b8;padding:0 18mm;
      display:flex;justify-content:space-between;align-items:center;">
      <span style="font-weight:600;color:#0f4c75;">Business Operating System Handbook</span>
      <span></span>
    </div>`,
    footerTemplate: `<div style="width:100%;font-size:8px;color:#94a3b8;padding:0 18mm;
      display:flex;justify-content:space-between;align-items:center;">
      <span class="title"></span>
      <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
    </div>`,
  },
  launch_options: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
};

/* ── Helpers ───────────────────────────────────────────────── */
function log(symbol, msg, color = 'white') {
  console.log(chalk[color](`${symbol} ${msg}`));
}

function outPath(mdFile) {
  // Mirror docs/ structure inside output/pdf/
  const rel = relative(DOCS, mdFile);           // e.g. "06-finance/FI01.../README.md"
  const parts = rel.split(/[/\\]/);
  const domain = parts[0];                       // "06-finance"
  const module = parts[1];                       // "FI01-..."
  const pdfName = `${module}.pdf`;
  const dir = join(OUTPUT, domain);
  mkdirSync(dir, { recursive: true });
  return join(dir, pdfName);
}

async function convertFile(mdPath) {
  const dest = outPath(mdPath);
  const label = relative(ROOT, mdPath).replace(/\\/g, '/');
  try {
    log('⟳', label, 'cyan');
    const result = await mdToPdf({ path: mdPath }, pdfConfig);
    if (!result?.filename) {
      // Write buffer manually when no filename provided
      const { writeFileSync } = await import('fs');
      writeFileSync(dest, result.content);
    }
    log('✔', `${relative(ROOT, dest).replace(/\\/g, '/')}`, 'green');
    return { ok: true, src: mdPath, dest };
  } catch (err) {
    log('✘', `${label} — ${err.message}`, 'red');
    return { ok: false, src: mdPath, error: err.message };
  }
}

async function convertSingle(filePath) {
  const abs = resolve(filePath);
  if (!existsSync(abs)) {
    log('✘', `File not found: ${filePath}`, 'red');
    process.exit(1);
  }
  const r = await convertFile(abs);
  printSummary([r]);
}

async function convertDomain(domain) {
  const pattern = join(DOCS, `${domain}/**/README.md`).replace(/\\/g, '/');
  const files   = await glob(pattern);
  if (!files.length) {
    log('✘', `No README.md found in domain: ${domain}`, 'red');
    process.exit(1);
  }
  log('📂', `Domain ${domain} — ${files.length} modules`, 'yellow');
  const results = await runSequential(files);
  printSummary(results);
}

async function convertAll() {
  const pattern = join(DOCS, '**/README.md').replace(/\\/g, '/');
  const files   = await glob(pattern);
  log('📚', `Found ${files.length} modules`, 'yellow');
  const results = await runSequential(files);
  printSummary(results);
}

/* Run files one by one to avoid Chromium memory issues */
async function runSequential(files) {
  const results = [];
  for (const f of files.sort()) {
    results.push(await convertFile(f));
  }
  return results;
}

function printSummary(results) {
  const ok   = results.filter(r => r.ok).length;
  const fail = results.filter(r => !r.ok).length;
  console.log('\n' + '─'.repeat(60));
  log('📊', `Done — ${ok} converted, ${fail} failed`, fail > 0 ? 'yellow' : 'green');
  if (fail > 0) {
    results.filter(r => !r.ok).forEach(r => {
      log('  ✘', `${relative(ROOT, r.src).replace(/\\/g, '/')} — ${r.error}`, 'red');
    });
  }
  log('📁', `Output: ${relative(ROOT, OUTPUT).replace(/\\/g, '/')}`, 'cyan');
}

/* ── Merge mode: concatenate markdown then convert ─────────── */
async function mergeAndConvert(files, outputName) {
  const { writeFileSync, unlinkSync } = await import('fs');
  mkdirSync(OUTPUT, { recursive: true });

  // Combine all markdown with page break separators
  const combined = files.sort().map(f => {
    const content = readFileSync(f, 'utf8')
      .replace(/^---[\s\S]+?---\n/, '')   // strip YAML frontmatter
      .trim();
    return content;
  }).join('\n\n<div class="page-break"></div>\n\n');

  const tmpFile = join(__dir, '_merged_tmp.md');
  writeFileSync(tmpFile, combined, 'utf8');

  const dest = join(OUTPUT, outputName);
  log('⟳', `Merging ${files.length} files → ${outputName}`, 'cyan');

  try {
    const result = await mdToPdf({ path: tmpFile }, {
      ...pdfConfig,
      dest,
    });
    if (!result?.filename) {
      const { writeFileSync: wf } = await import('fs');
      wf(dest, result.content);
    }
    log('✔', `${relative(ROOT, dest).replace(/\\/g, '/')}`, 'green');
  } finally {
    try { unlinkSync(tmpFile); } catch {}
  }
}

/* ── Entry point ───────────────────────────────────────────── */
async function main() {
  console.log(chalk.bold.blue('\n📖 Business OS Handbook — PDF Converter\n'));
  mkdirSync(OUTPUT, { recursive: true });

  if (singleFile) {
    await convertSingle(singleFile);

  } else if (domainFilter && mergeMode) {
    const pattern = join(DOCS, `${domainFilter}/**/README.md`).replace(/\\/g, '/');
    const files   = await glob(pattern);
    await mergeAndConvert(files, `${domainFilter}.pdf`);

  } else if (domainFilter) {
    await convertDomain(domainFilter);

  } else if (mergeMode) {
    const pattern = join(DOCS, '**/README.md').replace(/\\/g, '/');
    const files   = await glob(pattern);
    await mergeAndConvert(files, 'BusinessOS-Handbook-Complete.pdf');

  } else {
    await convertAll();
  }
}

main().catch(err => {
  console.error(chalk.red('Fatal error:'), err);
  process.exit(1);
});
