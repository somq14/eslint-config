# eslint-config

## Installation

```sh
yarn add -D somq14/eslint-config#<tag>
```

or for yarn v2

```sh
yarn add @somq14/eslint-config@somq14/eslint-config#<tag>
```

and install peer dependencies

```sh
yarn add -D prettier eslint typescript
```

## Configuration

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: ["@somq14/eslint-config"],
  ignorePatterns: ["dist", "coverage"],
};
```

```gitignore
# .prettierignore
.yarn/
dist/
coverage/
```

## Usage

```sh
yarn prettier --ignore-unknown --write '**/*'
```

```sh
yarn eslint --max-warnings 0 '**/*.{js,jsx,ts,tsx}'
```
