// src/generator/readmeGenerator.js
import fs from 'fs';
import path from 'path';

function generateFileTree(dir, depth = 0, maxDepth = 2) {
  if (depth > maxDepth) return '';

  const indent = '│  '.repeat(depth);
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries
    .filter(entry => !entry.name.startsWith('.') && entry.name !== 'node_modules')
    .map(entry => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return `${indent}📁 ${entry.name}\n${generateFileTree(fullPath, depth + 1, maxDepth)}`;
      } else {
        return `${indent}📄 ${entry.name}`;
      }
    })
    .join('\n');
}

function generateTechBadges(dependencies) {
  const badgeMap = {
    react: 'React-61DAFB?logo=react&logoColor=white',
    express: 'Express-000000?logo=express&logoColor=white',
    mongodb: 'MongoDB-47A248?logo=mongodb&logoColor=white',
    mysql: 'MySQL-4479A1?logo=mysql&logoColor=white',
    node: 'Node.js-339933?logo=nodedotjs&logoColor=white',
    typescript: 'TypeScript-3178C6?logo=typescript&logoColor=white',
    javascript: 'JavaScript-F7DF1E?logo=javascript&logoColor=black',
  };

  return dependencies
    .filter(dep => badgeMap[dep.toLowerCase()])
    .map(dep => `![${dep}](https://img.shields.io/badge/${badgeMap[dep.toLowerCase()]}&style=flat)`)
    .join(' ');
}

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

## \ud83d\udcc1 Project Structure

\`\`\`
${fileTree}
\`\`\`

## Contributing \ud83d\udee0\ufe0f

Contributions are welcome! Feel free to fork this project and submit pull requests to enhance functionality or fix bugs.

---

<p align="center">
  \ud83d\ude80 Powered by <a href="https://www.npmjs.com/package/readme-md-ai">readme-md-ai</a>
</p>
`;
}

function professionalTemplate(name, description, dir, techBadges) {
  const fileTree = generateFileTree(dir);

  return `# ${name} \ud83c\udfe8

**${name}** — ${description || 'Short description about this project.'}

${techBadges}

## Features \ud83e\udda6

| **Module**                  | **Description**                                                                 | **Module**              | **Description**                                |
|-----------------------------|----------------------------------------------------------------------------------|--------------------------|------------------------------------------------|
| **Authentication**          | Handles login, signup, password reset, and logout operations.                   | **User Management**      | Manages user profiles and roles.               |
| **Database Connectivity**   | Establishes and manages the connection to the database.                         | **Admin Panel**          | Provides admin-level access and operations.    |
| **API Layer**               | Facilitates data communication through REST or GraphQL APIs.                    | **User Interface**       | Offers command-line or graphical interactions. |
| **Error Handling**          | Ensures application stability with proper error reporting.                      | **Logging**              | Tracks system activities for audit/debugging.  |

## \ud83d\udcc1 Project Structure

\`\`\`
${fileTree}
\`\`\`

## User Interface

This application features a command-line or web-based interface that guides users through available features in an intuitive and user-friendly manner.

## Demo Screenshots

> Add screenshots here by replacing the image links below.

| **Interface**         | **Preview** |
|-----------------------|-------------|
| **Login Page**        | ![Login](./assets/login.png) |
| **Dashboard**         | ![Dashboard](./assets/dashboard.png) |
| **Settings Panel**    | ![Settings](./assets/settings.png) |
| **Report View**       | ![Reports](./assets/reports.png) |

## Contributing \ud83d\udee0\ufe0f

Contributions are welcome!  
Feel free to fork the repository, create a new branch, and open a pull request.

Suggestions for features, improvements, and bug fixes are highly appreciated.

---

<p align="center">
  Made with \u2764\ufe0f by [Your Name]  
  \u2022 [GitHub](https://github.com/your-username)  
  \u2022 [LinkedIn](https://linkedin.com/in/your-profile)  
  \u2022 [Portfolio](https://yourportfolio.com)
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-blue?style=flat-square&logo=javascript" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/Tool-Git-orange?style=flat-square&logo=git" alt="Git Badge">
  <img src="https://img.shields.io/badge/Project-Open%20Source-brightgreen?style=flat-square" alt="Open Source Badge">
</p>

<p align="center">
  \ud83d\ude80 Powered by <a href="https://www.npmjs.com/package/readme-md-ai">readme-md-ai</a>
</p>
`;
}

function modernTemplate(name, description, dir, techBadges) {
  const fileTree = generateFileTree(dir);

  return `# \ud83d\ude80 ${name}

[![npm version](https://img.shields.io/npm/v/${name}.svg)](https://www.npmjs.com/package/${name})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> \u2728 ${description || 'AI-powered, open-source project template.'}

${techBadges}

## Key Features

\u2705 Zero config setup  
\u2705 Interactive CLI-based generation  
\u2705 Supports multiple templates  
\u2705 Open-source friendly  

## \ud83d\udcc1 Project Structure

\`\`\`
${fileTree}
\`\`\`

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

## Contributing

Pull requests are welcome. Feel free to suggest new features, enhancements, or report issues.

---

<p align="center">
  \ud83e\udde0 Built for developers by developers.
</p>

<p align="center">
  \ud83d\ude80 Powered by <a href="https://www.npmjs.com/package/readme-md-ai">readme-md-ai</a>
</p>
`;
}

export { generateFileTree };
