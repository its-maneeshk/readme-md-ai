# 📘 readme-md-ai

> ⚡ A blazing fast, zero-config CLI tool to generate high-quality `README.md` files using OpenAI — right from your project metadata.

![npm version](https://img.shields.io/npm/v/readme-md-ai)
![npm downloads](https://img.shields.io/npm/dt/readme-md-ai)
![license](https://img.shields.io/npm/l/readme-md-ai)
![issues](https://img.shields.io/github/issues/its-maneeshk/readme-md-ai)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

---

## 🚀 Why use `readme-md-ai`?

- ✨ Instantly create clean, professional `README.md` files
- 🤖 **Powered by OpenAI GPT models** (supports GPT-3.5, GPT-4 fallback)
- 📦 Auto-analyzes your `package.json` metadata
- 💬 Interactive CLI prompts (powered by `inquirer`)
- 🎨 Offers **multiple README templates**:
  - Minimal
  - Professional
  - AI-enhanced (Modern AI-style)
- 🛠️ No boilerplate, no setup — just install and run

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g readme-md-ai
```

Or install locally:

```bash
npm install readme-md-ai --save-dev
```

---

## ⚙️ Usage

To generate a `README.md` for your project:

```bash
readme-md-ai --dir .
```

The CLI will:

1. Scan your project’s `package.json`
2. Ask you to pick a template
3. For **AI-style templates**, it will:
   - Prompt for your OpenAI API key
   - Use GPT to generate a project introduction and combine it with metadata
   - Fallback to GPT-3.5 if GPT-4 fails (and notify you)

---

## 🧠 How AI Templates Work

If you choose the **Modern AI-style** template:

- You'll be prompted to enter your [OpenAI API key](https://platform.openai.com/account/api-keys)
- The tool uses `gpt-4` by default
- If quota or access fails, it automatically falls back to `gpt-3.5-turbo` and notifies you
- The generated `README.md` will include a personalized project intro, version info, author, license, and more

> 💡 **Your API key is never saved or shared**. It is used only once to generate your README content during the session.

---

## 📥 Where to Get an API Key

1. Sign in or create a free OpenAI account: https://platform.openai.com/
2. Go to [API Keys](https://platform.openai.com/account/api-keys)
3. Click **+ Create new secret key**
4. Copy and paste the key into the CLI when prompted

---

## 🧰 CLI Options

| Option         | Description                      | Default |
|----------------|----------------------------------|---------|
| `--dir` or `-d` | Directory to scan for package.json | `.`     |

Example:

```bash
readme-md-ai --dir ./my-project
```

---

## 🔄 Fallback Handling

If GPT-4 access fails (e.g., quota exceeded or unavailable model), the tool will:

- Automatically fallback to `gpt-3.5-turbo`
- Inform you with a clear warning message
- Still generate a complete AI-enhanced README

If **both fail**, a descriptive error will guide you to check your API key or plan.

---
## 📥 Contributing

We welcome contributions!  
Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) and our [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) for details.

## 🛠️ Built With

- `commander`
- `inquirer`
- `chalk`
- `axios`
- `dotenv`
- `openai`

---

## 🐛 Reporting Issues

Found a bug or have an idea? Open an issue here:  
👉 [GitHub Issues](https://github.com/its-maneeshk/readme-md-ai/issues)

---

## 👤 Author

**Manish Kumar Patel**  
GitHub: [@its-maneeshk](https://github.com/its-maneeshk)  
npm: [readme-md-ai](https://www.npmjs.com/package/readme-md-ai)

---

## ⭐️ Show Some Love

If you found this useful, please consider starring the repo 💫  
👉 [Star on GitHub](https://github.com/its-maneeshk/readme-md-ai)

---

## 📄 License

Licensed under the [MIT License](LICENSE).