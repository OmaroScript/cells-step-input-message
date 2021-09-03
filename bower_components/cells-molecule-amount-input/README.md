# cells-molecule-amount-input

A customized amount input component with a floating label and an optional icon.

Example:
```html
<cells-molecule-amount-input></cells-molecule-amount-input>
```

## Properties

Example:
```html
<cells-molecule-amount-input
  id="myId"
  name="myName"
  label="My label"
  iconSize="myIconSize"
  iconCode="myIconCode"
  currencyCode="myurrencyCode"
  localCurrency="myLocalCurrency"
  language="myLanguage"
  max="10"
  disabled
  auto-format
  setAmount="mySetAmount">
</cells-molecule-amount-input>
```

## Styling

The following custom properties and mixins are available for styling:

### Custom Properties
| Custom Property                                        | Selector                                                                      | CSS Property                                          | Value                                                            |
| ------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- |
| --cells-text-size-15                                   | :host                                                                         | font-size                                             | 0.9375rem                                                        |
| --cells-molecule-amount-input-background-color-theme   | .field-wrapper                                                                | background-color                                      | --cells-molecule-amount-input-background-color)                  |
| --cells-molecule-amount-input-border-bottom-theme      | .field-wrapper                                                                | border-bottom                                         | 1px solid --cells-molecule-amount-input-border-bottom            |
| --bbva-300                                             | .field-wrapper :host([disabled]) input                                        | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | .field-wrapper :host([disabled]) .text-field                                  | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | :host([readonly]) .field-wrapper input                                        | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | :host([readonly]) .field-wrapper .text-field                                  | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | .field-wrapper :host([disabled]) input.has-content ~ .text-field__label       | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | .field-wrapper :host([disabled]) .text-field.has-content ~ .text-field__label | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | :host([readonly]) .field-wrapper input.has-content ~ .text-field__label       | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | :host([readonly]) .field-wrapper .text-field.has-content ~ .text-field__label | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | .field-wrapper :host([disabled]) .text-field__label                           | color                                                 | `No fallback value`                                              |
| --bbva-300                                             | :host([readonly]) .field-wrapper .text-field__label                           | color                                                 | `No fallback value`                                              |
| --black                                                | :host(.has-content) .field-wrapper                                            | --cells-molecule-amount-input-border-bottom-theme     | ![#121212](https://placehold.it/15/121212/000000?text=+) #121212 |
| --bbva-white-coral                                     | :host([has-content][invalid]) .field-wrapper                                  | --cells-molecule-amount-input-background-color-theme  | ![#FCDFDF](https://placehold.it/15/FCDFDF/000000?text=+) #FCDFDF |
| --cells-molecule-amount-input-invalid-border-bottom    | :host([has-content][invalid]) .field-wrapper                                  | --cells-molecule-amount-input-border-bottom-theme     | --bbva-dark-coral                                                |
| --bbva-dark-red                                        | :host([has-content][invalid]) .field-wrapper                                  | --cells-molecule-amount-input-floated-label-color     | ![#b92a45](https://placehold.it/15/b92a45/000000?text=+) #b92a45 |
| --black                                                | :host([focused]) .field-wrapper                                               | --cells-molecule-amount-input-border-bottom-theme     | ![#121212](https://placehold.it/15/121212/000000?text=+) #121212 |
| --bbva-white-coral                                     | :host([invalid]) .field-wrapper                                               | --cells-molecule-amount-input-background-color-theme  | ![#FCDFDF](https://placehold.it/15/FCDFDF/000000?text=+) #FCDFDF |
| --cells-molecule-amount-input-invalid-border-bottom    | :host([invalid]) .field-wrapper                                               | --cells-molecule-amount-input-border-bottom-theme     | --bbva-dark-coral                                                |
| --bbva-dark-red                                        | :host([invalid]) .field-wrapper                                               | --cells-molecule-amount-input-floated-label-color     | ![#b92a45](https://placehold.it/15/b92a45/000000?text=+) #b92a45 |
| --bbva-dark-red                                        | :host([invalid]) .field-wrapper .text-field__icon                             | --cells-molecule-amount-input-placeholder-color-theme | ![#b92a45](https://placehold.it/15/b92a45/000000?text=+) #b92a45 |
| --bbva-dark-red                                        | :host([invalid]) .field-wrapper .text-field__icon                             | --cells-molecule-amount-input-text-field-color-theme  | ![#b92a45](https://placehold.it/15/b92a45/000000?text=+) #b92a45 |
| --bbva-dark-red                                        | :host([invalid]) .field-wrapper .text-field__label                            | --cells-molecule-amount-input-placeholder-color-theme | ![#b92a45](https://placehold.it/15/b92a45/000000?text=+) #b92a45 |
| --bbva-dark-red                                        | :host([invalid]) .field-wrapper .text-field__label                            | --cells-molecule-amount-input-text-field-color-theme  | ![#b92a45](https://placehold.it/15/b92a45/000000?text=+) #b92a45 |
| --cells-molecule-amount-input-placeholder-color-theme  | .field-wrapper .text-field__label                                             | color                                                 | --cells-molecule-amount-input-placeholder-color)                 |
| --cells-molecule-amount-input-text-field-color-theme   | .field-wrapper .text-field__icon                                              | color                                                 | --bbva-dark-medium-blue                                          |
| --cells-molecule-amount-input-text-field-icon-width    | .field-wrapper .text-field__icon                                              | width                                                 | 3.625rem                                                         |
| --cells-molecule-amount-input-text-field-icon-padding  | .field-wrapper .text-field__icon                                              | padding                                               | 0 1.0625rem                                                      |
| --cells-text-size-15                                   | .field-wrapper .text-field__right-icon                                        | font-size                                             | 0.9375rem                                                        |
| --bbva-500                                             | .field-wrapper .text-field__right-icon                                        | color                                                 | ![#666666](https://placehold.it/15/666666/000000?text=+) #666666 |
| --cells-molecule-amount-input-input-color              | .field-wrapper .text-field__input                                             | color                                                 | --bbva-600                                                       |
| --cells-molecule-amount-input-has-content-padding      |                                                                               | padding                                               | 2rem 1.25rem 0.75rem 0rem                                        |
| --cells-text-size-12                                   |                                                                               | font-size                                             | 0.75rem                                                          |
| --cells-molecule-amount-input-floated-label-color      |                                                                               | color                                                 | --bbva-600                                                       |
| --cells-molecule-amount-input-disabled-color           |                                                                               | color                                                 | --bbva-500                                                       |
| --bbva-dark-medium-blue                                |                                                                               | --cells-st-button-text-color-transparent              | ![#1973b8](https://placehold.it/15/1973b8/000000?text=+) #1973b8 |
| --bbva-dark-medium-blue                                |                                                                               | --cells-st-button-text-color-transparent-hover        | ![#1973b8](https://placehold.it/15/1973b8/000000?text=+) #1973b8 |
| --cells-molecule-amount-input-text-field--xl           |                                                                               | font-size                                             | 1.5rem                                                           |
| --cells-molecule-amount-input-text-field--xl           |                                                                               | font-size                                             | 1.5rem                                                           |
| --cells-text-size-15                                   |                                                                               | font-size                                             | 0.9375rem                                                        |
| --cells-molecule-amount-input-currency-label-top--xl   |                                                                               | top                                                   | -0.75rem                                                         |
| --cells-molecule-amount-input-currency-font-size--xl   |                                                                               | font-size                                             | --cells-text-size-12                                             |
| --cells-text-size-xs                                   |                                                                               | font-size                                             | 0.75rem                                                          |
| --cells-text-size-ml                                   |                                                                               | font-size                                             | 0.9375rem                                                        |
| --cells-molecule-amount-input-disabled-opacity         |                                                                               | opacity                                               | 1                                                                |
| --cells-molecule-amount-cells-icon-message-color-theme |                                                                               | --cells-icon-message-color-theme                      | --bbva-600                                                       |
### @apply
| Mixins                                                      | Selector                                                                       | Value |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------ | ----- |
| --cells-molecule-amount-input                               | :host                                                                          | {}    |
| --cells-molecule-amount-input-field-wrapper                 | .field-wrapper                                                                 | {}    |
| --cells-molecule-amount-input-disabled                      | .field-wrapper :host([disabled])                                               | {}    |
| --cells-molecule-amount-input-disabled                      | :host([readonly]) .field-wrapper                                               | {}    |
| --cells-molecule-amount-input-disabled-text-field           | .field-wrapper :host([disabled]) input                                         | {}    |
| --cells-molecule-amount-input-disabled-text-field           | .field-wrapper :host([disabled]) .text-field                                   | {}    |
| --cells-molecule-amount-input-disabled-text-field           | :host([readonly]) .field-wrapper input                                         | {}    |
| --cells-molecule-amount-input-disabled-text-field           | :host([readonly]) .field-wrapper .text-field                                   | {}    |
| --cells-molecule-amount-input-disabled-text-field__label    | .field-wrapper :host([disabled]) .text-field__label                            | {}    |
| --cells-molecule-amount-input-disabled-text-field__label    | :host([readonly]) .field-wrapper .text-field__label                            | {}    |
| --cells-molecule-amount-input-has-content                   | :host(.has-content) .field-wrapper                                             | {}    |
| --cells-molecule-amount-input-has-content-invalid           | :host([has-content][invalid]) .field-wrapper                                   | {}    |
| --cells-molecule-amount-input-focused                       | :host([focused]) .field-wrapper                                                | {}    |
| --cells-molecule-amount-input-is-filled-blur                | :host([is-filled-blur]:not(.show-close-button)) .field-wrapper                 | {}    |
| --cells-molecule-amount-input-button-is-filled-blur         | :host([is-filled-blur]:not(.show-close-button)) .field-wrapper cells-st-button | {}    |
| --cells-molecule-amount-input-with-icon                     | :host([with-icon]) .field-wrapper                                              | {}    |
| --cells-molecule-amount-input-with-icon-input               | :host([with-icon]) .field-wrapper .text-field__input                           | {}    |
| --cells-molecule-amount-input-invalid                       | :host([invalid]) .field-wrapper                                                | {}    |
| --cells-molecule-amount-input-text-field                    | .field-wrapper .text-field                                                     | {}    |
| --cells-molecule-amount-input-label                         | .field-wrapper .text-field__label                                              | {}    |
| --cells-molecule-amount-input-icon                          | .field-wrapper .text-field__icon                                               | {}    |
| --cells-molecule-amount-input-right-icon                    | .field-wrapper .text-field__right-icon                                         | {}    |
| --cells-molecule-amount-input-input                         | .field-wrapper .text-field__input                                              | {}    |
| --cells-molecule-amount-input-has-content                   |                                                                                | {}    |
| --cells-molecule-amount-input-floated-label                 |                                                                                | {}    |
| --cells-molecule-amount-input-currency-label                |                                                                                | {}    |
| --cells-molecule-amount-input-currency-label-left           |                                                                                | {}    |
| --cells-molecule-amount-input-with-img                      |                                                                                | {}    |
| --cells-molecule-amount-input-img-container                 |                                                                                | {}    |
| --cells-molecule-amount-input-img                           |                                                                                | {}    |
| --cells-molecule-amount-input-label-with-img                |                                                                                | {}    |
| --cells-molecule-amount-input-label-currency-label-img      |                                                                                | {}    |
| --cells-molecule-amount-input-label-currency-label-left-img |                                                                                | {}    |
| --cells-molecule-amount-input-button                        |                                                                                | {}    |
| --cells-molecule-amount-input-disabled-prop                 |                                                                                | {}    |
