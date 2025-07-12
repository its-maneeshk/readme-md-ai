function generateReadmeContent(metadata) {
  return `# ${metadata.name}

${metadata.description}

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`bash
npm start
\`\`\`

## Scripts

${Object.entries(metadata.scripts)
  .map(([key, val]) => `- \`${key}\`: ${val}`)
  .join('\n')}

## License

${metadata.license}
`;
}

module.exports = { generateReadmeContent };
