#!/usr/bin/env node

import { program } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';
import generateReadme from '../src/index.js';

// __dirname workaround for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .name('readme-md-ai')
  .description('Generate a professional README.md file from project metadata')
  .version('1.0.0')
  .option('-d, --dir <path>', 'Target project directory', '.');

program.parse();
const options = program.opts();

const targetDir = path.resolve(process.cwd(), options.dir);
generateReadme(targetDir);
