
# 📘 readme-md-ai

> ⚡ A blazing fast, zero-config CLI tool to generate high-quality `README.md` files using OpenAI or OpenRouter — right from your project metadata.

![npm version](https://img.shields.io/npm/v/readme-md-ai)
![npm downloads](https://img.shields.io/npm/dt/readme-md-ai)
![license](https://img.shields.io/npm/l/readme-md-ai)
![issues](https://img.shields.io/github/issues/its-maneeshk/readme-md-ai)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

---

## 🚀 Why use `readme-md-ai`?

- ✨ Instantly create clean, professional `README.md` files
- 🤖 **Powered by OpenAI or OpenRouter models** (supports GPT-3.5, GPT-4, Mixtral, LLaMA-3, and more)
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
   - Prompt for your API key (OpenAI or OpenRouter)
   - Use your selected model (default: `mistralai/mixtral-8x7b-instruct`)
   - Fallback to `gpt-3.5-turbo` if the selected model fails (with warning)

---

## 🧠 How AI Templates Work

If you choose the **Modern AI-style** template:

- You'll be prompted to enter your OpenAI or OpenRouter API key
- The tool attempts to use the model specified with `--model`
- If that model is unavailable or fails, it automatically falls back to `gpt-3.5-turbo`
- The generated `README.md` will include a personalized project intro, version info, author, license, and more

> 💡 **Your API key is never saved or shared**. It is used only once to generate your README content during the session.

---

## 🧠 Supported Models (Free + Paid)

| Provider    | Model Name                        | Model ID                                 | Free |
|-------------|----------------------------------|-------------------------------------------|------|
| OpenAI      | GPT-3.5 Turbo                    | `gpt-3.5-turbo`                           | ❌   |
| OpenAI      | GPT-4                            | `gpt-4`                                   | ❌   |
| OpenRouter  | Mixtral 8x7B Instruct            | `mistralai/mixtral-8x7b-instruct`         | ✅   |
| OpenRouter  | Hermes 2 Mixtral 8x7B DPO        | `nousresearch/nous-hermes-2-mixtral-8x7b-dpo` | ❌ |
| OpenRouter  | Noromaid Mixtral 8x7B Instruct   | `neversleep/noromaid-mixtral-8x7b-instruct` | ✅  |
| OpenRouter  | LLaMA-3 70B Instruct             | `meta-llama/llama-3-70b-instruct`         | ✅   |

Use the `--model` flag to select your preferred model.

---

## 📥 Where to Get an API Key

### OpenAI

1. Sign in or create an account: https://platform.openai.com/
2. Go to [API Keys](https://platform.openai.com/account/api-keys)
3. Click **+ Create new secret key**
4. Copy and paste the key into the CLI when prompted

### OpenRouter

1. Visit [OpenRouter.ai](https://openrouter.ai)
2. Sign in and go to [API Keys](https://openrouter.ai/keys)
3. Copy your universal API key

---

## 🧰 CLI Options

| Option         | Description                                      | Default                             |
|----------------|--------------------------------------------------|-------------------------------------|
| `--dir, -d`    | Directory to scan for package.json               | `.`                                 |
| `--model, -m`  | Model ID to use (e.g., `mistralai/...`)          | `mistralai/mixtral-8x7b-instruct`   |
| `--apiKey, -k` | Your API key (OpenAI or OpenRouter)              | `null` (prompted if not provided)   |
| `--template, -t` | Template type (Minimal, Professional, AI-style) | `Prompted`                          |

Example:

```bash
readme-md-ai --dir ./my-project --model mistralai/mixtral-8x7b-instruct
```

---

## 🔄 Fallback Handling

If the selected model fails (e.g., invalid ID, quota exceeded):

- Automatically fallback to `gpt-3.5-turbo`
- Inform you with a clear warning message
- Still generate a complete AI-enhanced README

If **both fail**, a descriptive error will guide you to check your API key or plan.

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

We value your feedback!  
If you encounter any issues, have feature suggestions, or just want to ask a question — feel free to open a GitHub issue:

👉 [Open an Issue](https://github.com/its-maneeshk/readme-md-ai/issues)

> 💡 Your input helps improve this project for everyone. Don't hesitate!

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
