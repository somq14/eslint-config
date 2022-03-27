# eslint-config

## Installation

```
yarn add -D prettier eslint typescript somq14/eslint-config#<tag>
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

```sh
# .prettierignore
.yarn/
dist/
coverage/
```

## Usage

```
yarn prettier --ignore-unknown --write '**/*'
```

```
yarn eslint --max-warnings 0 '**/*.{js,jsx,ts,tsx}'
```
