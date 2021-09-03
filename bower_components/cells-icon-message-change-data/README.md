# &lt;cells-icon-message-change-data&gt;

Your component description.

![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
Example:
```html
<cells-icon-message-change-data
  message="cells-icon-message-change-data-message"
  type="info"
  data="example data"
  show-change-data
  has-multiple-data
  change-data-text="cells-icon-message-change-data-data"
></cells-icon-message-change-data>
```


## Methods

| Name    | Description |
| --------- | -------- |


## Properties

| Name                  | Type    | Description                                                                                                  |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| message               | String  | cells-icon-message Message                                                                                   |
| messages              | Array   | cells-icon-message Messages                                                                                  |
| type                  | String  | cells-icon-message Type                                                                                      |
| data                  | String  | data to show after message                                                                                   |
| showChangeData        | Boolean | Flag to show/hide change data button                                                                         |
| hasMultipleData       | Boolean | Flag to show/hide change data button depending on user having multiple data (only if showChangeData is true) |
| disableLink           | Boolean | Flag to enable/disable multiple data link                                                                    |
| changeDataText        | String  | Change data button text                                                                                      |
| iconMessageClass      | String  | Property to allow bind classes from icon-message                                                             |
| iconSize              | String  | Icon size                                                                                                    |
| iconType              | String  | cells-icon-message Icon                                                                                      |
| imageSrc              | String  | cells-icon-message image URL to be used as icon                                                              |
| iconMessageValidTypes | String  | cells-icon-message validTypes configuration                                                                  |
| sizes                 | Object  | Size of the icon (width and height)                                                                          |

## Events

| Name | Description |
| --------- | -------- |
| change-data-pressed | Emit event when change data button is pressed |

## Styling

The following custom properties and mixins are available for styling:

### Custom Properties
| Custom Property         | Selector                              | CSS Property | Value                                                            |
| ----------------------- | ------------------------------------- | ------------ | ---------------------------------------------------------------- |
| --cells-fontDefault     | :host                                 | font-family  | sans-serif                                                       |
| --cells-text-size-15    | :host                                 | font-size    | 0.9375rem                                                        |
| --cells-text-size-15    | :host > --cells-icon-message-message: | font-size    | .9375rem                                                         |
| --cells-text-size-15    | :host .icon-message                   | font-size    | 0.9375rem                                                        |
| --cells-text-size-15    | :host .data                           | font-size    | 0.9375rem                                                        |
| --bbva-600              | :host .data                           | color        | ![#121212](https://placehold.it/15/121212/000000?text=+) #121212 |
| --cells-text-size-15    | :host cells-st-link.link a            | font-size    | 0.9375rem                                                        |
| --bbva-dark-medium-blue | :host cells-st-link.link a            | color        | ![#1973b8](https://placehold.it/15/1973b8/000000?text=+) #1973b8 |
### @apply
| Mixins                                                | Selector                               | Value |
| ----------------------------------------------------- | -------------------------------------- | ----- |
| --cells-icon-message-change-data                      | :host                                  | {}    |
| --cells-fontDefaultLight                              | :host > --cells-icon-message-message:  | {}    |
| --cells-icon-message-change-data                      | :host                                  | {}    |
| --cells-icon-message-change-data-icon-message         | :host cells-icon-message               | {}    |
| --cells-icon-message-change-data-info                 | :host cells-icon-message[type=info]    | {}    |
| --cells-icon-message-change-data-warning              | :host cells-icon-message[type=warning] | {}    |
| --cells-icon-message-change-data-error                | :host cells-icon-message[type=error]   | {}    |
| --cells-icon-message-change-data-success              | :host cells-icon-message[type=success] | {}    |
| --cells-fontDefaultLight                              | :host .icon-message                    | {}    |
| --cells-icon-message-change-data-icon-message         | :host .icon-message                    | {}    |
| --cells-fontDefaultMediumItalic                       | :host .data                            | {}    |
| --cells-icon-message-change-data-icon-message-data    | :host .data                            | {}    |
| --cells-icon-message-change-data-icon-message-actions | :host .actions                         | {}    |
| --cells-fontDefaultMedium                             | :host cells-st-link.link a             | {}    |
| --cells-icon-message-change-data-icon-message-link    | :host cells-st-link.link a             | {}    |
| --cells-icon-message-h-gutter                         | :host .h-gutter                        | {}    |