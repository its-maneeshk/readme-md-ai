# 📘 readme-md-ai

> ⚡ **A blazing fast, zero-config CLI tool to generate high-quality `README.md` files using OpenAI — right from your project's metadata.**

![npm version](https://img.shields.io/npm/v/readme-md-ai)
![npm downloads](https://img.shields.io/npm/dt/readme-md-ai)
![license](https://img.shields.io/npm/l/readme-md-ai)
![issues](https://img.shields.io/github/issues/its-maneeshk/readme-md-ai)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

---

## 🚀 Why use `readme-md-ai`?

- ✨ Instantly create clean, professional `README.md` files
- 🤖 Powered by **OpenAI** for intelligent content generation
- 📦 Auto-analyzes your project's `package.json` & metadata
- 💬 Interactive CLI prompts (powered by `inquirer`)
- 🎨 Offers **multiple README templates**: Minimal, Professional, and AI-style
- 🛠️ No boilerplate, no fuss — just install and run

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g readme-md-ai
```

> Or install locally:

```bash
npm install readme-md-ai --save-dev
```

---

## ⚙️ Usage

To generate a `README.md` for the current project:

```bash
readme-md-ai --dir .
```

It will:
- Analyze your project metadata from `package.json`
- Ask you to choose a template
- Generate a ready-to-use `README.md` file in your project

---

## 🧰 CLI Options

| Option       | Description                         | Default |
|--------------|-------------------------------------|---------|
| `--dir` or `-d` | Directory to scan                 | `.`     |

> Example:

```bash
readme-md-ai --dir ./my-project
```

---

## 🧠 How It Works

1. Scans the given directory for `package.json`
2. Extracts project name, description, scripts, and license
3. Prompts you to select one of the available README templates:
   - Minimal
   - Professional
   - Modern AI-style
4. Generates a clean, well-structured `README.md` using OpenAI and your metadata

---

## 📥 Contributing

We welcome contributions!  
Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) and our [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) for details.


---

## 🛠️ Built With

- `commander`
- `inquirer`
- `chalk`
- `axios`
- `dotenv`
- `openai`

---

## 🐛 Reporting Issues

Have a bug or idea? Open an issue:  
👉 [GitHub Issues](https://github.com/its-maneeshk/readme-md-ai/issues)

---

## 👤 Author

**Manish Kumar Patel**  
GitHub: [@its-maneeshk](https://github.com/its-maneeshk)  
npm: [readme-md-ai](https://www.npmjs.com/package/readme-md-ai)

---

## ⭐️ Star on GitHub

If you found this helpful, consider starring the repo:  
👉 https://github.com/its-maneeshk/readme-md-ai

---

## 📄 License

Licensed under the [MIT License](LICENSE).
