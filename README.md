# Шаблонная [`Webpack`](https://webpack.js.org/)-сборка [`React`](https://react.dev/)-[`SPA`](https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5)-приложения на [`TypeScript`](https://www.typescriptlang.org/)

## Описание

Этот проект представляет собой шаблонную сборку для разработки приложений на `React` с использованием `TypeScript` и `Webpack`. Включает в себя конфигурации для: линтинга, форматирования кода, поддержки [`SCSS`](https://sass-lang.com/), согласованных коммитов, деплоя на [`GitHub`](https://github.com/) и автоматической генерации фавиконов.

Основные модули и пакеты проекта:

- [`React`](https://react.dev/): мощная библиотека для создания интерактивных пользовательских интерфейсов;
- [`TypeScript`](https://www.typescriptlang.org/): язык программирования, расширяющий возможности `JavaScript`, добавляя типизацию кода для максимальной безопасности разработки;
- [`Webpack`](https://webpack.js.org/): модульный бандлер для `JavaScript` приложений;
- [`Babel`](https://babeljs.io/): транспайлер для преобразования современного `JavaScript` в совместимый с более старыми браузерами;
- `Sass (SCSS)`: препроцессор `CSS`, добавляющий возможности удобного написания стилей, такие, как: переменные, вложенные правила и миксины;
- [`ESlint`](https://eslint.org/): инструмент для анализа кода на предмет соответствия [`ECMAScript`](https://ru.wikipedia.org/wiki/ECMAScript)-стандартам его написания;
- `@typescript-eslint`: набор инструментов для интеграции `TypeScript` с `ESLint`;
- [`Prettier`](https://prettier.io/): инструмент для форматирования кода;
- [`Stylelint`](https://stylelint.io/): линтер для стилей;
- `webpack-dev-server`: локальный сервер для разработки с поддержкой "горячей" перезагрузки;
- `mini-css-extract-plugin`: плагин для извлечения `CSS` в отдельные файлы;
- `html-webpack-plugin`: плагин для генерации `HTML`-файлов;
- `favicons-webpack-plugin`: плагин для генерации фавиконов.

## Структура проекта

- [`.husky`](.husky): папка для хранения хуков [`Husky`](https://github.com/typicode/husky), которые помогают автоматизировать задачи при работе с [`Git`](https://git-scm.com/);
- [`public`](public): папка для статических файлов, таких, как `index.html`, которые будут использоваться в приложении;
- [`src`](src): основная папка с исходным кодом приложения;
  - [`assets`](src\assets): папка для хранения статических ресурсов, таких, как: изображения, шрифты и т.д.;
  - [`components`](src\components): папка для хранения `React`-компонентов;
  - [`pages`](src\pages): папка для хранения страниц приложения;
  - [`services`](src\services): папка для хранения сервисов, таких как [`API`](https://education.yandex.ru/journal/chto-takoe-api)-запросы;
  - [`utils`](src\utils): папка для хранения утилитарных функций и хелперов;
  - [`custom.d.tsx`](src\custom.d.tsx): файл для пользовательских типов `TypeScript`;
  - [`index.tsx`](src\index.tsx): главный файл входа в приложение.
- [`.env`](.env): файл для хранения переменных окружения;
- [`.gitignore`](.gitignore): файл для указания файлов и папок, которые должны быть проигнорированы системой контроля версий `Git`;
- [`.prettierignore`](.prettierignore): определяет файлы и папки, которые должны быть проигнорированы `Prettier`;
- [`.stylelintignore`](.stylelintignore): файл для указания файлов и папок, которые должны быть проигнорированы `Stylelint`;
- [`eslint.config.mjs`](eslint.config.mjs): определяет правила и настройки для `ESLint`;
- [`package.json`](package.json): Содержит метаданные проекта, список зависимостей последних версий и скрипты для выполнения различных задач;
- [`postcss.config.mjs`](postcss.config.mjs): Конфигурационный файл для [`PostCSS`](https://postcss.org/);
- [`prettier.config.mjs`](prettier.config.mjs): конфигурационный файл для `Prettier`;
- [`stylelint.config.mjs`](stylelint.config.mjs): конфигурационный файл для `Stylelint`;
- [`tsconfig.json`](tsconfig.json): конфигурационный файл для `TypeScript`;
- [`webpack.config.mjs`](webpack.config.mjs): определяет конфигурацию для сборки проекта с помощью `Webpack`.

## Скрипты

- `start`: Запуск сервера разработки:

```
 npm run start
```

- `eslint`: Запуск `ESLint` для проверки кода:

```
 npm run eslint
```

- `stylelint`: Запуск `Stylelint` для проверки стилей:

```
 npm run stylelint
```

- `format`: Форматирование кода с помощью `Prettier`:

```
 npm run format
```

- `check`: Запуск всех проверок (`ESLint`, `Stylelint` и `Prettier`):

```
 npm run check
```

- `build`: Сборка проекта для продакшена:

```
 npm run build
```

- `deploy`: Проверка, сборка и деплой проекта:

```
 npm run deploy
```

## Конфигурация `Webpack`

Конфигурация Webpack находится в файле [`webpack.config.mjs`](webpack.config.mjs). Основные моменты:

- `entry`: Точка входа в приложение;
- `output`: Настройки выходных файлов;
- `module`: Правила для обработки различных типов файлов;
- `plugins`: Плагины для расширения функциональности `Webpack`.

## Линтинг и форматирование

- `ESLint`: Конфигурация находится в файле [`eslint.config.mjs`](eslint.config.mjs);
- `Stylelint`: Конфигурация находится в файле [`stylelint.config.mjs`](stylelint.config.mjs);
- `Prettier`: Конфигурация находится в файле [`prettier.config.mjs`](prettier.config.mjs).

## Поддержка `SCSS`

Для поддержки `SCSS` используется `sass-loader` и `style-loader`. Конфигурация находится в файле `webpack.config.mjs`.

## Автоматическая генерация фавиконов

Используется плагин `favicons-webpack-plugin` для автоматической генерации фавиконов. Конфигурация находится в файле `webpack.config.mjs`.
