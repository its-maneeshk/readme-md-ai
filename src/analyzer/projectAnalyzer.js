import fs from 'fs';
import path from 'path';

/**
 * Analyze package.json for project metadata
 */
export function analyzeProject(dir) {
  const pkgPath = path.join(dir, 'package.json');

  if (!fs.existsSync(pkgPath)) {
    throw new Error('package.json not found in the target directory.');
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  return {
    name: pkg.name || 'Project Name',
    description: pkg.description || 'Project Description',
    scripts: pkg.scripts || {},
    license: pkg.license || 'MIT',
  };
}
