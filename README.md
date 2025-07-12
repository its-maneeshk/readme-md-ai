# 📘 readme-md-ai

> ⚡ A fast and easy CLI tool to auto-generate professional `README.md` files using OpenAI, directly from your project metadata.

![npm version](https://img.shields.io/npm/v/readme-md-ai)
![npm downloads](https://img.shields.io/npm/dt/readme-md-ai)
![license](https://img.shields.io/npm/l/readme-md-ai)
![issues](https://img.shields.io/github/issues/its-maneeshk/readme-md-ai)

---

## 🚀 Features

- ✨ Generate beautiful, informative `README.md` files instantly
- 🤖 Powered by OpenAI for high-quality content
- 🧠 Auto-analyzes your project folder and metadata
- 💻 Interactive prompts for customization
- 📝 Supports CommonJS and modern JavaScript projects
- 🛠️ Easily extensible

---

## 📦 Installation

Install globally using npm:

```bash
npm install -g readme-md-ai
```

---

## ⚙️ Usage

```bash
readme-md-ai --dir .
```

### 🧾 Options

| Option       | Description                         | Default |
|--------------|-------------------------------------|---------|
| `--dir`      | Project directory to scan           | `.`     |
| `--force`    | Overwrite existing README.md        | `false` |
| `--debug`    | Enable debug logs                   | `false` |

---

## 🎯 Example

```bash
readme-md-ai --dir ./my-project
```

Generates a high-quality `README.md` in `./my-project` using intelligent analysis + prompts.

---

## 📂 Directory Structure

```
readme-md-ai/
├── bin/
│   └── cli.js          # CLI entry point
├── src/
│   ├── index.js        # CLI logic
│   ├── analyzer/       # Project analyzer
│   └── generator/      # README generator
├── package.json
├── README.md
```

---

## 🧠 How It Works

1. Analyzes your codebase (`package.json`, main files)
2. Asks you smart questions via CLI (using `inquirer`)
3. Uses OpenAI to generate meaningful sections:
   - Project description
   - Installation instructions
   - Usage examples
   - License info
4. Outputs a clean, professional `README.md`

---

## 🛠️ Dependencies

- axios
- chalk
- commander
- dotenv
- inquirer
- openai

---

## 📥 Contributing

Contributions, issues, and feature requests are welcome!

```bash
git clone https://github.com/its-maneeshk/readme-md-ai.git
cd readme-md-ai
npm install
```

Create a feature branch and submit a PR 🚀

---

## 🐛 Reporting Issues

Found a bug or need help? Open an issue:  
👉 https://github.com/its-maneeshk/readme-md-ai/issues

---

## 📃 License

This project is licensed under the **MIT License**.  
See `LICENSE` for details.

---

## 💬 Author

Created with ❤️ by **Manish Kumar Patel**  
GitHub: https://github.com/its-maneeshk  
NPM: https://www.npmjs.com/package/readme-md-ai

---

## 🌟 Star This Project

If you find this useful, please consider giving it a ⭐️ on GitHub!

https://github.com/its-maneeshk/readme-md-ai
