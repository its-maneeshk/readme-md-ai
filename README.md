
# 🧠 readme-md-ai

[![npm version](https://img.shields.io/npm/v/readme-md-ai?color=blue&style=flat-square)](https://www.npmjs.com/package/readme-md-ai)
[![license](https://img.shields.io/npm/l/readme-md-ai?style=flat-square)](LICENSE)

> Effortlessly generate professional `README.md` files from your project's `package.json` in seconds — perfect for Node.js developers.

---

## 📦 Installation

### Option 1: Use with `npx` (no install needed)

```bash
npx readme-md-ai --dir .
```

### Option 2: Install globally

```bash
npm install -g readme-md-ai
readme-md-ai --dir .
```

---

## 🚀 Usage

In any Node.js project that has a `package.json`, run:

```bash
readme-md-ai --dir .
```

It will generate a clean `README.md` based on:

- Project name
- Description
- Scripts
- License

---

## ⚙️ Options

| Option        | Description                       | Default |
|---------------|-----------------------------------|---------|
| `--dir <path>`| Target project directory          | `.`     |

---

## 📄 Example Output

Example `README.md` generated:

```markdown
# my-cool-project

A tool that does awesome things.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

## Scripts

- `start`: node index.js
- `test`: jest

## License

MIT
```
---
```

## 🔮 Coming Soon (v2+)

- 🧠 AI-powered README enhancement using OpenAI
- 📚 Custom section templates
- 📝 GitHub action integration
- 🌐 Multi-language support

---

## 🤝 Contributing

1. Fork the repo
2. Clone it locally
3. Run `npm install`
4. Build your feature
5. Submit a PR 🚀

---

## 🛡 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Manish Kumar Patel**  
💻 GitHub: https://github.com/its-maneeshk  
🌐 Portfolio: https://manishpatel.com.np  
📬 LinkedIn: https://www.linkedin.com/in/itsmaneeshk/

---

> Built with ❤️ for developers who want to write less and ship faster.
