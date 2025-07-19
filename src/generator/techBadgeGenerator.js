const badgeMap = {
  react: 'https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square',
  'react-dom': 'https://img.shields.io/badge/-ReactDOM-61DAFB?logo=react&logoColor=white&style=flat-square',
  next: 'https://img.shields.io/badge/-Next.js-000?logo=next.js&logoColor=white&style=flat-square',
  vue: 'https://img.shields.io/badge/-Vue-42b883?logo=vue.js&logoColor=white&style=flat-square',
  node: 'https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat-square',
  express: 'https://img.shields.io/badge/-Express-000?logo=express&logoColor=white&style=flat-square',
  typescript: 'https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square',
  javascript: 'https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square',
  tailwindcss: 'https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square',
  mongodb: 'https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square',
  firebase: 'https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=black&style=flat-square',
};

/**
 * Returns an array of badge markdown strings based on detected dependencies.
 */
export function generateTechBadges(dependencies) {
  if (!dependencies) return [];

  return Object.keys(dependencies)
    .filter((dep) => badgeMap[dep.toLowerCase()])
    .map((dep) => `![${dep}](${badgeMap[dep.toLowerCase()]})`);
}
