/**
 * Generates a minimal README.md content from metadata.
 */
export function generateMinimalReadme(metadata) {
  const {
    name,
    description,
    version,
    author,
    license,
    scripts = {},
  } = metadata;

  return `# ${name || 'Project Title'}

${description || '_No description provided._'}

## 🚀 Getting Started

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Run the project:

\`\`\`bash
${scripts.start ? 'npm start' : 'node index.js'}
\`\`\`

## 📦 Version

\`${version || '1.0.0'}\`

## 👤 Author

${author || 'Anonymous'}

## 📄 License

Licensed under the ${license || 'MIT'} License.
`;
}
