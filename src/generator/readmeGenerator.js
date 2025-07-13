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
npx ${name}
# OR
npm install -g ${name}
\`\`\`

## Usage

\`\`\`bash
${name} --dir .
\`\`\`

## Contributing 🛠️

Contributions are welcome! Feel free to fork this project and submit pull requests to enhance functionality or fix bugs.

---

<p align="center">
  🚀 Powered by [readme-md-ai](https://www.npmjs.com/package/readme-md-ai)
</p>
`;
}

function professionalTemplate(name, description) {
  return `# ${name} 🏨

**${name}** — ${description || 'Short description about this project.'}

## Features 🪶

| **Module**                  | **Description**                                                                 | **Module**              | **Description**                                |
|-----------------------------|----------------------------------------------------------------------------------|--------------------------|------------------------------------------------|
| **Authentication**          | Handles login, signup, password reset, and logout operations.                   | **User Management**      | Manages user profiles and roles.               |
| **Database Connectivity**   | Establishes and manages the connection to the database.                         | **Admin Panel**          | Provides admin-level access and operations.    |
| **API Layer**               | Facilitates data communication through REST or GraphQL APIs.                    | **User Interface**       | Offers command-line or graphical interactions. |
| **Error Handling**          | Ensures application stability with proper error reporting.                      | **Logging**              | Tracks system activities for audit/debugging.  |

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

## Contributing 🛠️

Contributions are welcome!  
Feel free to fork the repository, create a new branch, and open a pull request.

Suggestions for features, improvements, and bug fixes are highly appreciated.

---

<p align="center">
  Made with ❤️ by [Your Name]  
  • [GitHub](https://github.com/your-username)  
  • [LinkedIn](https://linkedin.com/in/your-profile)  
  • [Portfolio](https://yourportfolio.com)
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-blue?style=flat-square&logo=javascript" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/Tool-Git-orange?style=flat-square&logo=git" alt="Git Badge">
  <img src="https://img.shields.io/badge/Project-Open%20Source-brightgreen?style=flat-square" alt="Open Source Badge">
</p>

<p align="center">
  🚀 Powered by [readme-md-ai](https://www.npmjs.com/package/readme-md-ai)
</p>
`;
}

function modernTemplate(name, description) {
  return `# 🚀 ${name}

[![npm version](https://img.shields.io/npm/v/${name}.svg)](https://www.npmjs.com/package/${name})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> ✨ ${description || 'AI-powered, open-source project template.'}

## Key Features

✅ Zero config setup  
✅ Interactive CLI-based generation  
✅ Supports multiple templates  
✅ Open-source friendly  

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
  🧠 Built for developers by developers.
</p>

<p align="center">
  🚀 Powered by [readme-md-ai](https://www.npmjs.com/package/readme-md-ai)
</p>
`;
}
