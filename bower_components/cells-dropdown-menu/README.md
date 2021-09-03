![cells-dropdown-menu screenshot](cells-dropdown-menu.png)

# cells-dropdown-menu

![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)

[Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)

This component uses `cells-dropdown-layer` to show a list of selectable items which can be checked. It works as a select component, and expects an array of items to build the list.

```html
<cells-dropdown-menu placeholder="Default text" items='[...]'></cells-dropdown-layer>
```

```javascript
[{
  'name': 'Lorem ipsum',
  'value': 'loremipsum'
}, {
  'name': 'Lorem ipsum 2',
  'value': 'loremipsum2',
  'icon': 'coronita:creditcard'
},{
  'name': 'Lorem ipsum 3',
  'value': 'loremipsum3',
  'icon': 'coronita:creditcard',
  'disabled': true
}]
```

The menu can be set as required (which will show an error if no option is checked) or disabled. You can limit the amount of visible options at once with the 'maxItemsShown' property.

You can use the 'selected' property to set the currently selected item by index, as well as the 'value' property for the value of the current index.

You can use the 'disabled' property to set the dropdown element as disabled, so it cant be selected.

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

### Custom Properties
| Custom Property                                           | Selector                          | CSS Property                                | Value                                                            |
| --------------------------------------------------------- | --------------------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| --font-default                                            | :host                             | font-family                                 | sans-serif                                                       |
| --cells-dropdown-menu-value-color                         | :host                             | --item-value-color                          | ![#D0D1D4](https://placehold.it/15/D0D1D4/000000?text=+) #D0D1D4 |
| --cells-dropdown-menu-underline-color                     | :host                             | --item-underline-color                      | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67 |
| --cells-dropdown-menu-highlighted-color                   | :host                             | --item-highlighted-color                    | ![#FFF](https://placehold.it/15/FFF/000000?text=+) #FFF          |
| --cells-dropdown-menu-haserror-layer-icon-color           | :host([has-error])                | --cells-dropdown-layer-icon-color           | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5 |
| --cells-dropdown-menu-haserror-layer-underline-color      | :host([has-error])                | --cells-dropdown-layer-underline-color      | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5 |
| --cells-dropdown-menu-haserror-dark-layer-icon-color      | :host([has-error])                | --cells-dropdown-layer-dark-icon-color      | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5 |
| --cells-dropdown-menu-haserror-dark-layer-underline-color | :host([has-error])                | --cells-dropdown-layer-dark-underline-color | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5 |
| --cells-dropdown-menu-item-error-value-color              | .item.error                       | --item-value-color                          | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5 |
| --cells-dropdown-menu-item-error-highlighted-color        | .item.error                       | --item-highlighted-color                    | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5 |
| --cells-dropdown-menu-item-error-underline-color          | .item.error                       | --item-underline-color                      | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5 |
| --item-value-color                                        | .control                          | color                                       | `No fallback value`                                              |
| --item-highlighted-color                                  | .item.highlighted .control .icon  | color                                       | `No fallback value`                                              |
| --item-highlighted-color                                  | .item.highlighted .control .label | color                                       | `No fallback value`                                              |
| --item-highlighted-color                                  | .control .icon-check              | color                                       | `No fallback value`                                              |
| --item-underline-color                                    | .line::after                      | background-color                            | `No fallback value`                                              |
| --item-highlighted-color                                  | .item.highlighted .line::after    | background-color                            | `No fallback value`                                              |
### @apply
| Mixins                                           | Selector                                        | Value |
| ------------------------------------------------ | ----------------------------------------------- | ----- |
| --cells-dropdown-menu                            | :host                                           | {}    |
| --cells-dropdown-menu-haserror                   | :host([has-error])                              | {}    |
| --cells-dropdown-menu-layer                      | .layer                                          | {}    |
| --cells-dropdown-menu-lists                      | .item                                           | {}    |
| --cells-dropdown-menu-item                       | .item                                           | {}    |
| --cells-dropdown-menu-item-error                 | .item.error                                     | {}    |
| --cells-dropdown-menu-item-last                  | .item:last-of-type                              | {}    |
| --cells-dropdown-menu-control                    | .control                                        | {}    |
| --cells-dropdown-menu-control-icon               | .control .icon                                  | {}    |
| --cells-dropdown-menu-control-icon-selected      | .item.highlighted .control .icon                | {}    |
| --cells-dropdown-menu-control-label              | .control .label                                 | {}    |
| --cells-dropdown-menu-control-label-selected     | .item.highlighted .control .label               | {}    |
| --cells-dropdown-menu-control-icon-check         | .control .icon-check                            | {}    |
| --cells-dropdown-menu-control-icon-check-checked | .item[aria-checked="true"] .control .icon-check | {}    |
| --cells-dropdown-menu-line                       | .line                                           | {}    |
| --cells-dropdown-menu-underline                  | .line::after                                    | {}    |
| --cells-dropdown-menu-underline-selected         | .item.highlighted .line::after                  | {}    |
| --cells-dropdown-menu-control-disabled         | .item[disabled] .control                  | {}    |
| --cells-dropdown-menu-underline-disabled         | .item[disabled] .line::after                  | {}    |
| --cells-dropdown-menu-line-disabled         | .item[disabled] .line                  | {}    |
| --cells-dropdown-menu-item-disabled         | .item[disabled]                   | {}    |

