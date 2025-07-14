// src/analyzer/projectAnalyzer.js
import fs from 'fs';
import path from 'path';

export function analyzeProject(dir) {
  const pkgPath = path.join(dir, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    throw new Error('package.json not found in the target directory.');
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  // Detect common folders in the project
  const commonDirs = ['src', 'routes', 'controllers', 'utils', 'pages'];
  const presentDirs = commonDirs.filter(folder =>
    fs.existsSync(path.join(dir, folder))
  );

  return {
    name: pkg.name || 'Project Name',
    description: pkg.description || 'Short project description.',
    scripts: pkg.scripts || {},
    license: pkg.license || 'MIT',
    author: pkg.author || '',
    repository: pkg.repository?.url || '',
    dependencies: Object.keys(pkg.dependencies || {}),
    devDependencies: Object.keys(pkg.devDependencies || {}),
    folders: presentDirs,
  };
}
