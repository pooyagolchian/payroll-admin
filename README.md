# Payroll Admin Panel - React + TypeScript + Vite + MUI

- Login
- Register
- Payment history
- Add Employees
- Add allowance and deduction to salary
- Fake token for authorization and router

---

### SOLID

Regarding the `S` for `SOLID` I just tried to keep each function(component as a function as well)
just be responsible for a single task. That's why I just created a separate component for every part
and also keep it simple stupid.

### Prettier

Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of the formatting for you.
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by adding a pre-commit hook. For more detail check package.json, husky section.

---

### Dependencies

- Node.js (version)
- React.js (version)
- Vite
- Tailwind CSS
- MUI
- Typescript

---

# React + TypeScript + Vite Documents

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
