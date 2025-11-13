# Изучаем JavaScript

### Сводный материал по [javaScript](https://learn.javascript.ru/ "Учебное пособие")

Демонстрация [мини проектов](https://vikneo.github.io/javascript/)

<hr>

## Документирование в JavaScript

### Устанавливаем <b>JSDoc</b>

Выполните установку JSDoc одним из следующих способов:

* Глобально: <code>sudo npm install -g jsdoc</code>
* Локально: <code>npm install -D jsdoc</code>

### Добавление комментариев

* Каждый комментарий должен оборачиваться <code>/** */</code>;
* Для добавления описания напишите его в комментарии;
* Для указания дополнительной информации нужно использовать специальные теги:
    * <code>@param</code> - Описывает входной параметр функции;
    * <code>@returns</code> - Описывает возвращаемое значение функции;
    * <code>@example</code> - Предоставляет пример использования кода;
    * <code>@typedef</code> - Позволяет определить новый тип данных;
* Пример использования тегов:
    ```html
    /**
    * Конструктор для создания книги
    * @constructor
    * @param {string} title - Название книги
    * @param {string} author - Автор книги
    */
    function Book(title, author) {
    this.title = title;
    this.author = author;
    }
    ```

### Генерация документации

* Для генерации документации выполните одну из следующих команд в зависимости от того, как вы установили <code>JSDoc</code>:
    * Глобально: <code>jsdoc index.js</code>
    * Локально:  <code>./node_modules/.bin/jsdoc <path_to_your_js_file></code>
* После этого в проекте появится каталог <code>out</code>, содержащий сгенерированную документацию. Чтобы просмотреть её, откройте файл <code>out/index.html</code>.

<hr>

* Основная документация по [JSDoc](http://jsdoc.app/index.html "Официальная документация JSDoc")
* Ссылка на JSDoc в [Wiki](https://ru.wikipedia.org/wiki/JSDoc#%D0%A2%D0%B5%D0%B3%D0%B8_JSDoc)

<hr>
