import fs from 'fs';
import path from 'path';

/**
 * Recursively builds a file tree from the target directory.
 */
export function generateFileTree(dir, prefix = '') {
  if (!fs.existsSync(dir)) return '';

  const files = fs.readdirSync(dir).filter(
    (file) => !file.startsWith('.') && file !== 'node_modules'
  );

  return files
    .map((file, index) => {
      const fullPath = path.join(dir, file);
      const isLast = index === files.length - 1;
      const pointer = isLast ? '└── ' : '├── ';

      if (fs.statSync(fullPath).isDirectory()) {
        const nestedTree = generateFileTree(fullPath, prefix + (isLast ? '    ' : '│   '));
        return `${prefix}${pointer}${file}/\n${nestedTree}`;
      } else {
        return `${prefix}${pointer}${file}`;
      }
    })
    .join('\n');
}
