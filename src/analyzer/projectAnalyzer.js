import fs from 'fs';
import path from 'path';

/**
 * Analyzes the project to extract metadata from package.json.
 */
export function analyzeProject(dir) {
  const packageJsonPath = path.join(dir, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    throw new Error('package.json not found in target directory.');
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  const {
    name = '',
    version = '',
    description = '',
    author = '',
    license = 'MIT',
    scripts = {},
    dependencies = {},
    devDependencies = {},
    keywords = [],
    repository = {},
  } = packageJson;

  return {
    name,
    version,
    description,
    author,
    license,
    scripts,
    dependencies,
    devDependencies,
    keywords,
    repository,
  };
}
