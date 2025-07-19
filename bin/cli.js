#!/usr/bin/env node

import { program } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';
import run from '../src/run.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .name('readme-md-ai')
  .description('🧠 Generate a professional README.md file from your project metadata')
  .version('2.0.0')
  .option('-d, --dir <path>', 'Target project directory', '.')
  .option('-m, --model <model>', 'OpenAI model to use (e.g., gpt-4, gpt-4o)', 'gpt-3.5-turbo')
  .option('-k, --apiKey <key>', 'OpenAI API key (required for AI template)')
  .option('-t, --template <type>', 'Template type (Minimal | Professional | Modern AI-Style)');

program.parse();
const options = program.opts();

const targetDir = path.resolve(process.cwd(), options.dir);

run({
  dir: targetDir,
  templateType: options.template || null,
  apiKey: options.apiKey || null,
  model: options.model || 'gpt-3.5-turbo',
});
