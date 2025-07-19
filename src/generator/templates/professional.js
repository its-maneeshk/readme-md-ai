import { generateFileTree } from '../fileTreeGenerator.js';
import { generateTechBadges } from '../techBadgeGenerator.js';

/**
 * Generates a professional README.md with badges, structure, and tree.
 */
export function generateProfessionalReadme(metadata, dir) {
  const {
    name,
    description,
    version,
    author,
    license,
    dependencies = {},
  } = metadata;

  const badges = generateTechBadges(dependencies);
  const fileTree = generateFileTree(dir);

  return `# ${name || 'Project Title'}

${badges.join(' ')}

## 📝 Description

${description || '_No description provided._'}

## 📁 Project Structure

\`\`\`
${fileTree}
\`\`\`

## 🚀 Getting Started

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Start the project:

\`\`\`bash
npm start
\`\`\`

## 📦 Version

\`${version || '1.0.0'}\`

## 👤 Author

${author || 'Anonymous'}

## 🧾 License

This project is licensed under the ${license || 'MIT'} License.
`;
}
