// src/generator/readmeGenerator.js
import fs from 'fs';
import path from 'path';

/**
 * Recursively generate a tree structure of files and folders.
 */
function generateFileTree(dir, depth = 0, maxDepth = 2) {
  if (depth > maxDepth) return '';

  const indent = '│  '.repeat(depth);
  let output = '';

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries
      .filter(entry => !entry.name.startsWith('.') && entry.name !== 'node_modules')
      .forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          output += `${indent}📁 ${entry.name}\n${generateFileTree(fullPath, depth + 1, maxDepth)}`;
        } else {
          output += `${indent}📄 ${entry.name}\n`;
        }
      });

    return output;
  } catch (err) {
    return `${indent}⚠️ Failed to read directory\n`;
  }
}

/**
 * Generate shields.io technology badges based on project dependencies.
 */
function generateTechBadges(dependencies) {
  const badgeMap = {
    react: 'React-61DAFB?logo=react&logoColor=white',
    redux: 'Redux-764ABC?logo=redux&logoColor=white',
    express: 'Express-000000?logo=express&logoColor=white',
    mongodb: 'MongoDB-47A248?logo=mongodb&logoColor=white',
    mysql: 'MySQL-4479A1?logo=mysql&logoColor=white',
    node: 'Node.js-339933?logo=nodedotjs&logoColor=white',
    typescript: 'TypeScript-3178C6?logo=typescript&logoColor=white',
    javascript: 'JavaScript-F7DF1E?logo=javascript&logoColor=black',
    tailwindcss: 'TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white',
    prisma: 'Prisma-2D3748?logo=prisma&logoColor=white',
    vite: 'Vite-646CFF?logo=vite&logoColor=white',
  };

  return dependencies
    .map(dep => dep.toLowerCase())
    .filter(dep => badgeMap[dep])
    .map(dep => `![${dep}](https://img.shields.io/badge/${badgeMap[dep]}&style=flat)`)
    .join(' ');
}

/**
 * Generate README content based on selected template type.
 */
export function generateReadmeContent(metadata, templateType = 'Minimal', dir = process.cwd()) {
  const { name, description, dependencies } = metadata;
  const techBadges = generateTechBadges(dependencies || []);

  switch (templateType) {
    case 'Professional':
      return professionalTemplate(name, description, dir, techBadges);
    case 'Modern AI-Style':
      return modernTemplate(name, description, dir, techBadges);
    case 'Minimal':
    default:
      return minimalTemplate(name, description, dir, techBadges);
  }
}

/**
 * Minimal README template
 */
function minimalTemplate(name, description, dir, techBadges) {
  const fileTree = generateFileTree(dir);
  return `# ${name}

${description || 'Short project description.'}

${techBadges}

## Installation

\`\`\`bash
npx ${name}
# OR
npm install -g ${name}
\`\`\`

## Usage

\`\`\`bash
${name} --dir .
\`\`\`

## 📁 Project Structure

\`\`\`
${fileTree}
\`\`\`

## 🛠️ Contributing

Contributions are welcome!  
Fork the repo and open a PR with your enhancements or bugfixes.

---

<p align="center">
  🚀 Powered by <a href="https://www.npmjs.com/package/readme-md-ai">readme-md-ai</a>
</p>
`;
}

/**
 * Professional README template
 */
function professionalTemplate(name, description, dir, techBadges) {
  const fileTree = generateFileTree(dir);

  return `# ${name} 🏢

**${name}** — ${description || 'Short description about this project.'}

${techBadges}

## Features 🧩

| **Module**              | **Description**                                                     |
|-------------------------|----------------------------------------------------------------------|
| **Authentication**      | Login, signup, and secure password handling                          |
| **API Layer**           | RESTful APIs with error handling                                     |
| **Database Integration**| MongoDB / MySQL / Prisma support                                     |
| **Admin Interface**     | Admin routes and controls                                            |
| **Frontend Support**    | React, Vite, Tailwind-based UI                                       |
| **CLI Interface**       | CLI input with prompts                                               |

## 📁 Project Structure

\`\`\`
${fileTree}
\`\`\`

## Demo Screenshots

| **Screen**     | **Preview**                       |
|----------------|-----------------------------------|
| Login Page     | ![Login](./assets/login.png)      |
| Dashboard      | ![Dashboard](./assets/dashboard.png) |

## 🙌 Contributing

1. Fork this repo
2. Create a new branch
3. Push your changes and open a pull request

---

<p align="center">
  Made with ❤️ by [Your Name]
</p>

<p align="center">
  🚀 Powered by <a href="https://www.npmjs.com/package/readme-md-ai">readme-md-ai</a>
</p>
`;
}

/**
 * Modern AI-style README template
 */
function modernTemplate(name, description, dir, techBadges) {
  const fileTree = generateFileTree(dir);

  return `# 🚀 ${name}

[![npm version](https://img.shields.io/npm/v/${name}.svg)](https://www.npmjs.com/package/${name})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> ✨ ${description || 'AI-powered, open-source project template.'}

${techBadges}

## ✨ Key Features

✅ Zero config  
✅ Interactive CLI  
✅ Professional Templates  
✅ Developer Friendly

## 📁 Project Structure

\`\`\`
${fileTree}
\`\`\`

## 🛠️ Installation

\`\`\`bash
npx ${name}
# OR
npm install -g ${name}
\`\`\`

## ▶️ Usage

\`\`\`bash
${name} --dir .
\`\`\`

## 🙌 Contributing

Pull requests welcome!  
Ideas, issues, features? Raise an issue or open a PR.

---

<p align="center">
  🧠 AI-crafted by <a href="https://www.npmjs.com/package/readme-md-ai">readme-md-ai</a>
</p>
`;
}

// Export all generator functions
export { generateFileTree };
