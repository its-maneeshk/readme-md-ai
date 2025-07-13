/**
 * Select and generate README content based on the chosen template.
 */
export function generateReadmeContent(metadata, templateType = 'Minimal') {
  const { name, description } = metadata;

  switch (templateType) {
    case 'Professional':
      return professionalTemplate(name, description);
    case 'Modern AI-Style':
      return modernTemplate(name, description);
    case 'Minimal':
    default:
      return minimalTemplate(name, description);
  }
}

function minimalTemplate(name, description) {
  return `# ${name}

${description || 'Short project description.'}

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`bash
npm start
\`\`\`
`;
}

function professionalTemplate(name, description) {
  return `# ${name} 🏨

**${name}** — ${description || 'Professional-grade app.'}

## Features 🪶

| Module | Description |
|--------|-------------|
| Auth   | Handles login/signup |
| API    | RESTful backend |

## User Interface

CLI-based or Web-based interface (based on project type).

## Contributing 🛂

Fork → Code → PR

---

<p align="center">
  Made with ❤️ by [Your Name]
</p>
`;
}

function modernTemplate(name, description) {
  return `# 🚀 ${name}

[![npm version](https://img.shields.io/npm/v/${name}.svg)](https://www.npmjs.com/package/${name})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> ✨ ${description || 'AI-powered, open-source project.'}

## Features

✅ Zero config  
✅ CLI Powered  
✅ Open Source Friendly

## Contributing

Pull Requests welcome. Let’s build something amazing!
`;
}
