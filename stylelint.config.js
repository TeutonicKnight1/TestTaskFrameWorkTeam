module.exports = {
    extends: [
      'stylelint-config-standard-scss', // Подключение стандартной конфигурации для SCSS
    ],
    plugins: ['stylelint-scss'], // Подключение плагина SCSS
    rules: {
      // Здесь можно настроить свои правила для SCSS
      'indentation': 2, // Два пробела для отступов
      'string-quotes': 'single', // Одинарные кавычки для строк
      'block-no-empty': true, // Запрещены пустые блоки
      'color-no-invalid-hex': true, // Запрещены неверные HEX цвета
      'declaration-block-trailing-semicolon': 'always', // Обязательные точки с запятой в декларациях
      'selector-class-pattern': '^[a-z][a-z0-9_-]+$' // Нейминг классов в формате lower-case-hyphenated
    },
  };
  