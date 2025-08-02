import { generateFileTree } from '../fileTreeGenerator.js';
import { generateTechBadges } from '../techBadgeGenerator.js';

/**
 * Generates a professional README.md with badges, structure, and more.
 */
export function generateProfessionalReadme(metadata, dir) {
  const {
    name = 'Project Title',
    description = '_No description provided._',
    version = '1.0.0',
    author = 'Anonymous',
    license = 'MIT',
    dependencies = {},
    email = '',
    github = '',
  } = metadata;

  const badges = generateTechBadges(dependencies);
  const fileTree = generateFileTree(dir);

  return `# 📘 ${name}

${badges.join(' ')}

---

## 📝 Description

${description}

---

## 📂 Project Structure

\`\`\`
${fileTree}
\`\`\`

---

## 🚀 Getting Started

Install the dependencies:

\`\`\`bash
npm install
\`\`\`

Run the project:

\`\`\`bash
npm start
\`\`\`

---

## 📦 Version

\`${version}\`

---

## 👤 Author

**${author}**

${email ? `📧 Email: ${email}` : ''}
${github ? `🐙 GitHub: [${github}](https://github.com/${github})` : ''}

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check the [issues page](../../issues).

---

## 🧾 License

This project is licensed under the **${license}** license.

---

## 🙌 Acknowledgements

Thanks to all contributors and open-source packages that make this possible.
`;
}
