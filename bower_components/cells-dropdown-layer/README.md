![cells-dropdown-layer screenshot](cells-dropdown-layer.png)

# cells-dropdown-layer

![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)

[Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)

Component to show a control and an expansible content. Activating the control will show a layer which will be filled with the component contents.

```html
<cells-dropdown-layer label="Lorem ipsum">
  Content...
</cells-dropdown-layer>
```

You can set the label for the control, as well as an optional icon for it. You can use a prefix text for the control, too. You can also set 'disabled' state. The layer can be closed with the Esc key, activating the control again, or clicking/focusing anything outside it.

```html
<cells-dropdown-layer label="Lorem ipsum" prefix="Lorem ipsum: " disabled>
  Content...
</cells-dropdown-layer>
<cells-dropdown-layer label="Lorem ipsum" icon="coronita:creditcard">
  Content...
</cells-dropdown-layer>
```

The layer tends to open from top left to bottom right by default, but it will adjust its opening direction based on its content size and the available space in the viewport. You can use the `safeMargin` property to specify the "safe distance" (in pixels) to keep from the layer to the viewport limits. Opening direction can be specified using the `openingX` and `openingY` attributes. `opening-x` can receive 'left-to-right', 'right-to-left' or 'centered' as values, while `opening-y` can receive 'top-to-bottom' or 'bottom-to-top'.

```html
<cells-dropdown-layer label="Lorem ipsum" opening-x="centered" opening-y="bottom-to-top" safe-margin="24">
  Content...
</cells-dropdown-layer>
```

Layer width and height will adapt to its content, although it won't be smaller than the control width. You can allow the layer to be smaller than the control width setting the `controlAsMinWidthOff` property to true. Also, you can use CSS variables to set min-width, min-height, max-width and max-height for the layer.

```html
<cells-dropdown-layer label="Lorem ipsum" control-as-min-width-off>
  Content...
</cells-dropdown-layer>
```

The component will show an error status when setting its `error` property with an object containing a 'msg' (for example, `{ "msg": "You must select an option"}`).

The following helper classes are provided in the component styles:
- 'small': makes the component control smaller.
- 'dark': changes the component colors to improve contrast for dark backgrounds.
- 'icon-only': leaves just the icon as visible element in the control.

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

### Custom Properties
| Custom Property                                                     | Selector                                                | CSS Property                               | Value                                                                   |
| ------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------- |
| --cells-dropdown-layer-value-color                                  | :host                                                   | --value-color                              | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67        |
| --cells-dropdown-layer-underline-color                              | :host                                                   | --underline-color                          | ![#C6C8CF](https://placehold.it/15/C6C8CF/000000?text=+) #C6C8CF        |
| --cells-dropdown-layer-icon-color                                   | :host                                                   | --icon-color                               | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67        |
| --cells-dropdown-layer-animation-time                               | :host                                                   | --animation-time                           | 0.3s                                                                    |
| --cells-fontDefault                                                 | :host                                                   | font-family                                | sans-serif                                                              |
| --cells-dropdown-layer-dark-value-color                             | :host(.dark)                                            | --value-color                              | ![#D0D1D4](https://placehold.it/15/D0D1D4/000000?text=+) #D0D1D4        |
| --cells-dropdown-layer-dark-underline-color                         | :host(.dark)                                            | --underline-color                          | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67        |
| --cells-dropdown-layer-dark-icon-color                              | :host(.dark)                                            | --icon-color                               | ![#A3A8AD](https://placehold.it/15/A3A8AD/000000?text=+) #A3A8AD        |
| --animation-time                                                    | .control-text                                           | transition                                 | color  0.3s                                                             |
| --value-color                                                       | .control-text                                           | color                                      | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67        |
| --value-color                                                       | .control-icon                                           | color                                      | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67        |
| --animation-time                                                    | .control-icon                                           | transition                                 | color  0.3s                                                             |
| --animation-time                                                    | .line .underline                                        | transition                                 | transform  0.3s                                                         |
| --underline-color                                                   | .line .underline::after                                 | background-color                           | ![#C6C8CF](https://placehold.it/15/C6C8CF/000000?text=+) #C6C8CF        |
| --animation-time                                                    | .line .underline::after                                 | transition                                 | transform --animation-time, background-color var(--animation-time, 0.3s |
| --animation-time                                                    | .line .icons                                            | transition                                 | transform  0.3s                                                         |
| --icon-color                                                        | .line .icons .icon                                      | color                                      | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67        |
| --animation-time                                                    | .line .icons .icon-open                                 | transition                                 | transform  0.3s                                                         |
| --value-color                                                       | .error-text                                             | color                                      | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67        |
| --cells-dropdown-layer-layer-color                                  | .layer                                                  | color                                      | ![#D0D1D4](https://placehold.it/15/D0D1D4/000000?text=+) #D0D1D4        |
| --animation-time                                                    | .layer                                                  | transition                                 | transform  0.3s                                                         |
| --cells-dropdown-layer-layer-max-width                              | .layer-wrapper                                          | max-width                                  | none                                                                    |
| --cells-dropdown-layer-layer-min-width                              | .layer-wrapper                                          | min-width                                  | 0                                                                       |
| --cells-dropdown-layer-layer-max-height                             | .layer-wrapper                                          | max-height                                 | none                                                                    |
| --cells-dropdown-layer-layer-min-height                             | .layer-wrapper                                          | min-height                                 | 0                                                                       |
| --cells-dropdown-layer-content-bg-color                             | .layer-content                                          | background-color                           | ![#343B49](https://placehold.it/15/343B49/000000?text=+) #343B49        |
| --cells-dropdown-layer-hovered-value-color                          | :host([focused]:not([disabled]):not([opened]))      | --value-color                              | ![#224FBD](https://placehold.it/15/224FBD/000000?text=+) #224FBD        |
| --cells-dropdown-layer-hovered-underline-color                      | :host([focused]:not([disabled]):not([opened]))      | --underline-color                          | ![#224FBD](https://placehold.it/15/224FBD/000000?text=+) #224FBD        |
| --cells-dropdown-layer-hovered-icon-color                           | :host([focused]:not([disabled]):not([opened]))      | --icon-color                               | ![#224FBD](https://placehold.it/15/224FBD/000000?text=+) #224FBD        |
| --cells-dropdown-layer-dark-hovered-value-color                     | :host(.dark[focused]:not([disabled]):not([opened])) | --value-color                              | ![#FFF](https://placehold.it/15/FFF/000000?text=+) #FFF                 |
| --cells-dropdown-layer-dark-hovered-underline-color                 | :host(.dark[focused]:not([disabled]):not([opened])) | --underline-color                          | ![#FFF](https://placehold.it/15/FFF/000000?text=+) #FFF                 |
| --cells-dropdown-layer-dark-hovered-icon-color                      | :host(.dark[focused]:not([disabled]):not([opened])) | --icon-color                               | ![#FFF](https://placehold.it/15/FFF/000000?text=+) #FFF                 |
| --cells-dropdown-layer-opened-value-color                           | :host([opened]:not([disabled]))                         | --value-color                              | ![#224FBD](https://placehold.it/15/224FBD/000000?text=+) #224FBD        |
| --cells-dropdown-layer-opened-underline-color                       | :host([opened]:not([disabled]))                         | --underline-color                          | ![#224FBD](https://placehold.it/15/224FBD/000000?text=+) #224FBD        |
| --cells-dropdown-layer-opened-icon-color                            | :host([opened]:not([disabled]))                         | --icon-color                               | ![#224FBD](https://placehold.it/15/224FBD/000000?text=+) #224FBD        |
| --cells-dropdown-layer-dark-opened-value-color                      | :host(.dark[opened]:not([disabled]))                    | --value-color                              | ![#FFF](https://placehold.it/15/FFF/000000?text=+) #FFF                 |
| --cells-dropdown-layer-dark-opened-underline-color                  | :host(.dark[opened]:not([disabled]))                    | --underline-color                          | ![#FFF](https://placehold.it/15/FFF/000000?text=+) #FFF                 |
| --cells-dropdown-layer-dark-opened-icon-color                       | :host(.dark[opened]:not([disabled]))                    | --icon-color                               | ![#FFF](https://placehold.it/15/FFF/000000?text=+) #FFF                 |
| --cells-dropdown-layer-disabled-value-color                         | :host([disabled])                                       | --value-color                              | ![#A3A8AD](https://placehold.it/15/A3A8AD/000000?text=+) #A3A8AD        |
| --cells-dropdown-layer-disabled-underline-color                     | :host([disabled])                                       | --underline-color                          | ![#D0D1D4](https://placehold.it/15/D0D1D4/000000?text=+) #D0D1D4        |
| --cells-dropdown-layer-disabled-icon-color                          | :host([disabled])                                       | --icon-color                               | ![#A3A8AD](https://placehold.it/15/A3A8AD/000000?text=+) #A3A8AD        |
| --cells-dropdown-layer-dark-disabled-value-color                    | :host(.dark[disabled])                                  | --value-color                              | ![#A3A8AD](https://placehold.it/15/A3A8AD/000000?text=+) #A3A8AD        |
| --cells-dropdown-layer-dark-disabled-underline-color                | :host(.dark[disabled])                                  | --underline-color                          | ![#565C67](https://placehold.it/15/565C67/000000?text=+) #565C67        |
| --cells-dropdown-layer-dark-disabled-icon-color                     | :host(.dark[disabled])                                  | --icon-color                               | ![#A3A8AD](https://placehold.it/15/A3A8AD/000000?text=+) #A3A8AD        |
| --cells-dropdown-layer-with-error-value-color                       | :host([has-error]:not([disabled]):not([opened]))        | --value-color                              | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5        |
| --cells-dropdown-layer-with-error-underline-color                   | :host([has-error]:not([disabled]):not([opened]))        | --underline-color                          | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5        |
| --cells-dropdown-layer-with-error-icon-color                        | :host([has-error]:not([disabled]):not([opened]))        | --icon-color                               | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5        |
| --cells-dropdown-layer-dark-with-error-value-color                  | :host(.dark[has-error]:not([disabled]):not([opened]))   | --value-color                              | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5        |
| --cells-dropdown-layer-dark-with-error-underline-color              | :host(.dark[has-error]:not([disabled]):not([opened]))   | --underline-color                          | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5        |
| --cells-dropdown-layer-dark-with-error-icon-color                   | :host(.dark[has-error]:not([disabled]):not([opened]))   | --icon-color                               | ![#F970B5](https://placehold.it/15/F970B5/000000?text=+) #F970B5        |
| --cells-dropdown-layer-coronita-shadow-color                        | :host(.coronita) .layer                                 | box-shadow                                 | 0px 3px 3px --bbva-300                                                  |
| --cells-dropdown-layer-coronita-shadow-color                        | :host(.coronita) .layer                                 | -moz-box-shadow                            | 0px 3px 3px --bbva-300                                                  |
| --cells-dropdown-layer-coronita-content-bg-color                    | :host(.coronita) .layer-content                         | background-color                           | --bbva-white                                                            |
| --cells-dropdown-layer-coronita-menu-control-icon-hover-background  | :host(.coronita.menu) .control-icon:hover               | background-color                           | --bbva-100                                                              |
| --cells-dropdown-layer-coronita-menu-opened-control-icon-background | :host([opened].coronita.menu) .control-icon             | background-color                           | --bbva-100                                                              |
| --cells-dropdown-layer-coronita-value-color                         | :host(.coronita)                                        | --value-color                              | --bbva-medium-blue                                                      |
| --cells-dropdown-layer-coronita-icon-color                          | :host(.coronita)                                        | --icon-color                               | --bbva-medium-blue                                                      |
| --cells-dropdown-layer-coronita-layer-color                         | :host(.coronita)                                        | --cells-dropdown-layer-layer-color         | --bbva-medium-blue                                                      |
| --cells-dropdown-layer-coronita-opened-value-color                  | :host(.coronita)                                        | --cells-dropdown-layer-opened-value-color  | --bbva-white-core-blue                                                  |
| --cells-dropdown-layer-coronita-hovered-value-color                 | :host(.coronita)                                        | --cells-dropdown-layer-hovered-value-color | --bbva-white-core-blue                                                  |
### @apply
| Mixins                                                        | Selector                                                                             | Value |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----- |
| --cells-dropdown-layer                                        | :host                                                                                | {}    |
| --cells-dropdown-layer-dark                                   | :host(.dark)                                                                         | {}    |
| --cells-dropdown-layer-opener                                 | .opener                                                                              | {}    |
| --cells-dropdown-layer-control                                | .control                                                                             | {}    |
| --cells-dropdown-layer-control-text                           | .control-text                                                                        | {}    |
| --cells-dropdown-layer-control-prefix                         | .control-prefix                                                                      | {}    |
| --cells-dropdown-layer-control-icon                           | .control-icon                                                                        | {}    |
| --cells-dropdown-layer-control-icon-icon                      | .control-icon .icon                                                                  | {}    |
| --cells-dropdown-layer-control-icon-hover                     | .control-icon:hover                                                                  | {}    |
| --cells-dropdown-layer-line                                   | .line                                                                                | {}    |
| --cells-dropdown-layer-line-underline                         | .line .underline                                                                     | {}    |
| --cells-dropdown-layer-line-underline-after                   | .line .underline::after                                                              | {}    |
| --cells-dropdown-layer-line-icons                             | .line .icons                                                                         | {}    |
| --cells-dropdown-layer-line-icon                              | .line .icons .icon                                                                   | {}    |
| --cells-dropdown-layer-line-icon-open                         | .line .icons .icon-open                                                              | {}    |
| --cells-dropdown-layer-line-icon-disabled                     | .line .icons .icon-disabled                                                          | {}    |
| --cells-dropdown-layer-error-text                             | .error-text                                                                          | {}    |
| --cells-dropdown-layer-layer                                  | .layer                                                                               | {}    |
| --cells-dropdown-layer-layer-animating                        | :host([animating]) .layer                                                            | {}    |
| --cells-dropdown-layer-wrapper                                | .layer-wrapper                                                                       | {}    |
| --cells-dropdown-layer-content                                | .layer-content                                                                       | {}    |
| --cells-dropdown-layer-top                                    | .layer.top                                                                           | {}    |
| --cells-dropdown-layer-bottom                                 | .layer.bottom                                                                        | {}    |
| --cells-dropdown-layer-left                                   | .layer.left                                                                          | {}    |
| --cells-dropdown-layer-left-top                               | .layer.left.top                                                                      | {}    |
| --cells-dropdown-layer-left-bottom                            | .layer.left.bottom                                                                   | {}    |
| --cells-dropdown-layer-right                                  | .layer.right                                                                         | {}    |
| --cells-dropdown-layer-right-top                              | .layer.right.top                                                                     | {}    |
| --cells-dropdown-layer-right-bottom                           | .layer.right.bottom                                                                  | {}    |
| --cells-dropdown-layer-centered                               | .layer.centered                                                                      | {}    |
| --cells-dropdown-layer-centered-wrapper                       | .layer.centered .layer-wrapper                                                       | {}    |
| --cells-dropdown-layer-centered-top                           | .layer.centered.top                                                                  | {}    |
| --cells-dropdown-layer-centered-bottom                        | .layer.centered.bottom                                                               | {}    |
| --cells-dropdown-layer-hovered                                | :host([focused]:not([disabled]):not([opened]))                                   | {}    |
| --cells-dropdown-layer-hovered-line-underline-after           | :host([focused]:not([disabled]):not([opened])) .line .underline:after            | {}    |
| --cells-dropdown-layer-dark-hovered                           | :host(.dark[focused]:not([disabled]):not([opened]))                              | {}    |
| --cells-dropdown-layer-opened                                 | :host([opened]:not([disabled]))                                                      | {}    |
| --cells-dropdown-layer-opened-line                            | :host([opened]:not([disabled])) .line                                                | {}    |
| --cells-dropdown-layer-opened-line-underline-after            | :host([opened]:not([disabled])) .line .underline::after                              | {}    |
| --cells-dropdown-layer-opened-line-icon-open                  | :host([opened]:not([disabled])) .line .icons .icon-open                              | {}    |
| --cells-dropdown-layer-opened-layer                           | :host([opened]:not([disabled])) .layer                                               | {}    |
| --cells-dropdown-layer-dark-opened                            | :host(.dark[opened]:not([disabled]))                                                 | {}    |
| --cells-dropdown-layer-disabled                               | :host([disabled])                                                                    | {}    |
| --cells-dropdown-layer-disabled-line-icons                    | :host([disabled]) .line .icons                                                       | {}    |
| --cells-dropdown-layer-disabled-line-icon-disabled            |                                                                                      | {}    |
| --cells-dropdown-layer-disabled-line-icon-open                | :host([disabled]) .line .icons .icon-open                                            | {}    |
| --cells-dropdown-layer-dark-disabled                          | :host(.dark[disabled])                                                               | {}    |
| --cells-dropdown-layer-with-error                             | :host([has-error]:not([disabled]):not([opened]))                                     | {}    |
| --cells-dropdown-layer-with-error-text                        | :host([has-error]:not([disabled]):not([opened])) .error-text                         | {}    |
| --cells-dropdown-layer-dark-with-error                        | :host(.dark[has-error]:not([disabled]):not([opened]))                                | {}    |
| --cells-dropdown-layer-small                                  | :host(.small)                                                                        | {}    |
| --cells-dropdown-layer-small-control-text                     | :host(.small) .control-text                                                          | {}    |
| --cells-dropdown-layer-small-control-icon                     | :host(.small) .control-icon                                                          | {}    |
| --cells-dropdown-layer-small-layer-top                        | :host(.small) .layer.top                                                             | {}    |
| --cells-dropdown-layer-small-layer-content                    | :host(.small) .layer-content                                                         | {}    |
| --cells-dropdown-layer-small-error-text                       | :host(.small) .error-text                                                            | {}    |
| --cells-dropdown-layer-small-opened                           | :host(.small[opened]:not([disabled]))                                                | {}    |
| --cells-dropdown-layer-small-opened-line-icon-open            | :host(.small[opened]:not([disabled])) .line .icons .icon-open                        | {}    |
| --cells-dropdown-layer-icon-only                              | :host(.icon-only)                                                                    | {}    |
| --cells-dropdown-layer-icon-only-control                      | :host(.icon-only) .control                                                           | {}    |
| --cells-dropdown-layer-icon-only-control-icon                 | :host(.icon-only) .control-icon                                                      | {}    |
| --cells-dropdown-layer-icon-only-control-text                 | :host(.icon-only) .control-text                                                      | {}    |
| --cells-dropdown-layer-icon-only-line                         | :host(.icon-only) .line                                                              | {}    |
| --cells-dropdown-layer-icon-only-line-underline-after         | :host(.icon-only) .line .underline::after                                            | {}    |
| --cells-dropdown-layer-icon-only-line-icons                   | :host(.icon-only) .line .icons                                                       | {}    |
| --cells-dropdown-layer-icon-only-hovered                      | :host(.icon-only[focused]:not([disabled]):not([opened]))                         | {}    |
| --cells-dropdown-layer-icon-only-hovered-line-underline-after | :host(.icon-only[focused]:not([disabled]):not([opened])) .line .underline::after | {}    |
| --cells-dropdown-layer-coronita-line                          | :host(.coronita) .line                                                               | {}    |
| --cells-dropdown-layer-coronita-control                       | :host(.coronita) .control                                                            | {}    |
| --cells-dropdown-layer-coronita-control-icon                  | :host(.coronita) .control-icon                                                       | {}    |
| --cells-dropdown-layer-coronita-control-icon-icon             | :host(.coronita) .control-icon .icon                                                 | {}    |
| --cells-dropdown-layer-coronita-control-text                  | :host(.coronita) .control-text                                                       | {}    |
| --cells-dropdown-layer-coronita-layer                         | :host(.coronita) .layer                                                              | {}    |
| --cells-dropdown-layer-coronita-layer-content                 | :host(.coronita) .layer-content                                                      | {}    |
| --cells-dropdown-layer-coronita-menu-control-icon             | :host(.coronita.menu) .control-icon                                                  | {}    |
| --cells-dropdown-layer-coronita-menu-control-icon-hover       | :host(.coronita.menu) .control-icon:hover                                            | {}    |
| --cells-dropdown-layer-coronita-menu-control-icon-opened      | :host([opened].coronita.menu) .control-icon                                          | {}    |
| --cells-dropdown-layer-coronita                               | :host(.coronita)                                                                     | {}    |
