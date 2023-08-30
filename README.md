# EvoGym - World's Greatest Gym (Demo Project)

![preview](docs/preview.png)
  
A sample gym promotional application containing a lightning-fast 1-page site along with a functional contact form. This website demonstrates how to use a popular and novel front-end stack, [hosted on CloudFlare](https://demo-evogym.pages.dev/).

## Technologies Used

![React](https://img.shields.io/badge/frontend-react-61DBFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/frontend-ts-blue?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/frontend-tailwind-00C4C4?style=flat&logo=tailwindcss)
![ESLint](https://img.shields.io/badge/linter-eslint-4B32C3?style=flat&logo=eslint)
![Prettier](https://img.shields.io/badge/formatter-prettier-F8BC45?style=flat&logo=prettier)
![Vite](https://img.shields.io/badge/build-vite-A855F7?style=flat&logo=vite)

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Vite](https://vitejs.dev/) to build the project for development or production

## Setup

### Installation
1. Run `git clone https://github.com/deezee30/demo-evogym.git`
2. Navigate to repository with `cd demo-evogym`
3. Run `npm install` to install all of the project's dependencies

### Development
Run the local development server with `npm run dev`

### Production
Build the project for production with `npm run build`

### Expanding the ESLint configuration

For a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

All code licensed under [MIT License](https://choosealicense.com/licenses/mit/). See [LICENSE.txt](LICENSE.txt) for further details.