# Contributing to readme-md-ai

Thank you for your interest in contributing to **readme-md-ai**! Your help is greatly appreciated. This guide will walk you through setting up, modifying, and contributing to the project.

---

## 🛠 Setting up the environment

This project uses `npm`. Ensure you have Node.js (v16 or higher) and npm installed.

To set up the repository, run:

```bash
npm install
```

---

## ✏️ Modifying or Adding Code

Feel free to explore and enhance the codebase. Most source code is located in:

- `src/`: Core logic
- `bin/cli.js`: CLI entry point

To add a new feature or fix a bug:

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/my-feature
```

3. Make your changes.
4. Test your changes.
5. Commit with a meaningful message:

```bash
git commit -m "feat: added support for XYZ"
```

6. Push the branch:

```bash
git push --set-upstream origin feature/my-feature
```

7. Open a Pull Request on GitHub.

---

## 📁 Adding and Running Examples

You can add demos in the `examples/` folder:

```js
#!/usr/bin/env node
// examples/my-example.js
console.log("Run custom example here");
```

Make it executable and run:

```bash
chmod +x examples/my-example.js
node examples/my-example.js
```

---

## 🔗 Using the Repository from Source

To test the local version in another project:

```bash
# In readme-md-ai repo
npm link

# In your test project
npm link readme-md-ai
```

Unlink when done:

```bash
npm unlink readme-md-ai
```

---

## ✅ Running Tests

This project does not yet include unit tests. You are welcome to contribute tests!

---

## 🧹 Linting and Formatting

This project uses Prettier and ESLint.

```bash
npm run lint    # To lint the code
npm run format  # To auto-fix formatting issues
```

---

## 🙌 Need Help?

Create an issue or start a discussion on GitHub if you're unsure about something. We welcome all contributions, big or small!

---

## ❤️ Thank You!

Your time and effort to contribute is highly valued. Let's build something awesome together!
