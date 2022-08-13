# eslint-config

## Installation

```sh
yarn add -D somq14/eslint-config#<tag>
```

or for yarn v2

```sh
yarn add -D @somq14/eslint-config@somq14/eslint-config#<tag>
```

and install peer dependencies

```sh
yarn add -D prettier eslint typescript
```

## Configuration

```yml
# .eslintrc.yml
root: true
extends:
  - "@somq14/eslint-config"
```

## Usage

```sh
yarn prettier --ignore-path .gitignore --ignore-unknown --write \"**/*\"
```

```sh
yarn eslint --ignore-path .gitignore --max-warnings 0 \"**/*.{js,jsx,cjs,mjs,ts,tsx}\"
```
