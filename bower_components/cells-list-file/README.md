# cells-list-file

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-cells-files.s3.amazonaws.com/cells/bbva-catalog/index.html) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)

List of file items.

Example:

```html
<cells-list-file list='[{
  "id": "example2",
  "text": "File name",
  "icon": "coronita:pdf",
  "subText": "230kb",
  "message": {"type":"info", "icon":"coronita:info","text":"Helpful text that sits below the field", "iconSize": "16"},
  "classList": "exampleClass"
}]'></cells-list-file>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

### Custom Properties

| Custom Property                             | Selector                                                            | CSS Property                                      | Value                                                   |
| ------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------- |
| --cells-fontDefault                         | :host                                                               | font-family                                       | sans-serif                                              |
| --cells-list-file-color-bodycopy--theme     | .media__icon                                                        | color                                             | --bbva-dark-medium-blue                                 |
| --cells-list-file-color-bodycopy--theme     | .media__actionicon                                                  | color                                             | --bbva-dark-medium-blue                                 |
| --cells-list-file-icon-info-size            | .media__actionicon                                                  | width                                             | 1.5625rem                                               |
| --cells-list-file-icon-info-margin-left     | .media__actionicon                                                  | margin-left                                       | 0.125rem                                                |
| --cells-text-size-xxxxl                     | .media__actionicon                                                  | font-size                                         | 1.5rem                                                  |
| --cells-list-file-color-bodycopy--theme     | .body__text                                                         | color                                             | --bbva-dark-medium-blue                                 |
| --cells-list-file-color-body-subtext--theme | .body__sub-text                                                     | color                                             | --bbva-500                                              |
| --bbva-white                                | :host(.on-dark)                                                     | --cells-list-file-color-bodycopy--theme           | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
| --bbva-white                                | :host(.on-dark)                                                     | --cells-list-file-color-body-subtext--theme       | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
| --cells-list-file-item-separator-color      | .container-items-with-separator:not(:last-of-type)                  | border-bottom                                     | 1px solid --bbva-300                                    |
| --cells-list-file-color-bodycopy--theme     | .checkbox-selectable-item > --cells-checkbox-left-label:            | color                                             | --bbva-600                                              |
| --cells-list-file-color-bodycopy--theme     | .checkbox-selectable-item > --cells-checkbox-left-additional-label: | color                                             | --bbva-500                                              |
| --cells-list-file-color-bodycopy--theme     | .checkbox-selectable-item                                           | --cells-checkbox-left-icon-color                  | --bbva-dark-medium-blue                                 |
| --cells-list-file-word-break                | .body__text                                                         | word-break                                        | break-word                                              |
| --bbva-white                                | .checkbox-selectable-item                                           | --cells-checkbox-button-checkbox-background-color | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |

### @apply

| Mixins                                           | Selector                                                            | Value |
| ------------------------------------------------ | ------------------------------------------------------------------- | ----- |
| --cells-list-file                                | :host                                                               | {}    |
| --cells-list-file-container                      | .list-file-container                                                | {}    |
| --cells-list-file-margin-left                    | .list-file-margin-left                                              | {}    |
| --cells-list-file-margin                         | .list-file-margin                                                   | {}    |
| --cells-list-file-media                          | .media                                                              | {}    |
| --cells-list-file-media-icon                     | .media__icon                                                        | {}    |
| --cells-list-file-media-action-icon              | .media__actionicon                                                  | {}    |
| --cells-list-file-body                           | .body                                                               | {}    |
| --cells-fontDefaultMedium                        | .body__text                                                         | {}    |
| --cells-list-file-bodycopy-text                  | .body__text                                                         | {}    |
| --cells-fontDefaultLightItalic                   | .body__sub-text                                                     | {}    |
| --cells-list-file-body-sub-text                  | .body__sub-text                                                     | {}    |
| --cells-list-file-on-dark                        | :host(.on-dark)                                                     | {}    |
| --cells-list-file-message                        | .list-file__message                                                 | {}    |
| --cells-list-file-gutter                         | :host(.h-gutter)                                                    | {}    |
| --cells-list-file-row-gap-bottom-l               | :host(.row-gap-bottom-l)                                            | {}    |
| --cells-list-file-row-gap-bottom-m               | :host(.row-gap-bottom-m)                                            | {}    |
| --cells-list-file-row-gap-top-xxl                | :host(.row-gap-top-xxl)                                             | {}    |
| --cells-list-file-item-separator                 | .container-items-with-separator                                     | {}    |
| --cells-list-file-item-separator-not-last-type   | .container-items-with-separator:not(:last-of-type)                  | {}    |
| --cells-list-file-checkbox-left-label            | .checkbox-selectable-item > --cells-checkbox-left-label:            | {}    |
| --cells-list-file-checkbox-left-additional-label | .checkbox-selectable-item > --cells-checkbox-left-additional-label: | {}    |
| --cells-list-file-checkbox-selectable-item       | .checkbox-selectable-item                                           | {}    |
| --cells-list-file-body-break-word                | :host(.body-break-word)                                             | {}    |
| --cells-list-file-body-break-word-text           | :host(.body-break-word) .body__text                                 | {}    |
