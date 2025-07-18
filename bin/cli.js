#!/usr/bin/env node

// CLI entry point for readme-md-ai

import { program } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';
import generateReadme from '../src/index.js';

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup CLI commands
program
  .name('readme-md-ai')
  .description('🧠 Generate a professional README.md file from your project metadata')
  .version('1.2.1')
  .option('-d, --dir <path>', 'Target project directory', '.');

program.on('--help', () => {
  console.log('');
  console.log('📦 Examples:');
  console.log('  $ readme-md-ai --dir .');
  console.log('  $ npx readme-md-ai --dir ./my-project');
  console.log('');
  console.log('📘 Docs & Guide:');
  console.log('👉 https://github.com/its-maneeshk/readme-md-ai');
});

// Parse arguments
program.parse();
const options = program.opts();

// Resolve and pass target directory
const targetDir = path.resolve(process.cwd(), options.dir);
generateReadme(targetDir);
