/**
 *
 *
 * # cells-checkbox-button
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)
 * ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * `cells-checkbox-button` generates a custom checkbox button that can be used inside a `cells-checkbox-group` component, or used alone.
 *
 * The component has five possibles classes.
 *
 * - If you don´t add any class is the default component, and it is used when the component is used with white background.
 * - The class `grey` is used when the component is used with grey background (#F4F4F4).
 * - The class `light-blue` is used when the component is used with blue background (#1973B8).
 * - The class `core-blue` is used when the component is used with default blue background (#0A5393).
 * - The class `dark-blue` is used when the component is used with dark blue background (#004481).
 *
 * Examples:
 *   ```html
 * <cells-checkbox-button>Label for the checkbox default</cells-checkbox-button>
 * <cells-checkbox-button class="grey">Label for the checkbox grey</cells-checkbox-button>
 * <cells-checkbox-button class="light-blue">Label for the checkbox light blue</cells-checkbox-button>
 * <cells-checkbox-button class="core-blue">Label for the checkbox core blue</cells-checkbox-button>
 * <cells-checkbox-button class="dark-blue">Label for the checkbox dark blue</cells-checkbox-button>
 * ```
 *
 * The states of the checkbox can be:
 *
 * - Checked or unchecked
 * - disabled or enabled
 * - readonly
 * - with error
 *
 *   ```html
 * <cells-checkbox-button checked>Label for the checkbox button</cells-checkbox-button>
 * ```
 *
 *   ```html
 * <cells-checkbox-button disabled>Label for the checkbox button</cells-checkbox-button>
 * ```
 *
 *   ```html
 * <cells-checkbox-button readonly checked>Example checkbox button</cells-checkbox-button>
 * ```
 *
 *   ```html
 * <cells-checkbox-button error error-icon="coronita:alert" error-message="error message">Example checkbox button</cells-checkbox-button>
 * ```
 *
 *   ## Icons
 *
 * Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.
 *
 * ## Styling
 *
 * The following custom properties and mixins are available for styling:
 *
### Custom Properties
| Custom Property                                                    | Selector                                                              | CSS Property                      | Value                                                            |
| ------------------------------------------------------------------ | --------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------- |
| --cells-fontDefault                                                | :host                                                                 | font-family                       | sans-serif                                                       |
| --cells-checkbox-button-checkbox-size                              | #checkbox                                                             | width                             | 2rem                                                             |
| --cells-checkbox-button-checkbox-size                              | #checkbox                                                             | height                            | 2rem                                                             |
| --cells-checkbox-button-checkbox-border-color                      | #checkbox                                                             | border                            | 1px solid --bbva-500                                             |
| --cells-checkbox-button-checkbox-background-color                  | #checkbox                                                             | background-color                  | --bbva-100                                                       |
| --cells-checkbox-button-hover-checkbox-background-color            | #checkbox:hover                                                       | background-color                  | --bbva-white                                                     |
| --cells-checkbox-button-label-text-size                            | #label                                                                | font-size                         | 0.9375rem                                                        |
| --cells-checkbox-button-label-color                                | #label                                                                | color                             | --bbva-600                                                       |
| --cells-checkbox-button-icon-size                                  | .icon                                                                 | --iron-icon-width                 | 1.5rem                                                           |
| --cells-checkbox-button-icon-size                                  | .icon                                                                 | --iron-icon-height                | 1.5rem                                                           |
| --cells-checkbox-button-icon-color                                 | .icon                                                                 | color                             | --bbva-500                                                       |
| --cells-checkbox-button-grey-checkbox-background-color             | :host(.grey) #checkbox                                                | background-color                  | --bbva-white                                                     |
| --cells-checkbox-button-hover-checkbox-background-color            | :host(.grey) #checkbox:hover                                          | background-color                  | --bbva-100                                                       |
| --cells-checkbox-button-blue-checkbox-border                       | :host([class$="blue"]) #checkbox                                      | border                            | 1px solid --bbva-white                                           |
| --cells-checkbox-button-blue-label-color                           | :host([class$="blue"]) #label                                         | color                             | --bbva-white                                                     |
| --cells-checkbox-button-blue-icon_checked-checked-color            | :host([class$="blue"][icon-check][aria-checked="true"]) #icon-checked | color                             | --bbva-white                                                     |
| --cells-checkbox-button-blue-focus-checkbox-box-shadow             | :host([class$="blue"]:focus) #checkbox                                | box-shadow                        | none                                                             |
| --cells-checkbox-button-blue-readonly-color                        | :host([class$="blue"][readonly][aria-checked="true"]) #checkbox       | border                            | 1px solid --bbva-300                                             |
| --cells-checkbox-button-blue-readonly-color                        | :host([class$="blue"][readonly][aria-checked="true"]) #icon-checked   | color                             | --bbva-300                                                       |
| --cells-checkbox-button-blue-readonly-color                        | :host([class$="blue"][readonly][aria-checked="true"]) #label          | color                             | --bbva-300                                                       |
| --cells-checkbox-button-error-blue-background-color                | :host([class$="blue"][error])                                         | background-color                  | --bbva-red-white                                                 |
| --cells-checkbox-button-error-blue-border-color                    | :host([class$="blue"][error])                                         | border                            | 1px solid --bbva-red-dark                                        |
| --cells-checkbox-button-error-blue-checkbox-background-color       | :host([class$="blue"][error]) #checkbox                               | background-color                  | --bbva-white                                                     |
| --cells-checkbox-button-error-blue-checkbox-border-color           | :host([class$="blue"][error]) #checkbox                               | border                            | 1px solid --bbva-red-dark                                        |
| --cells-checkbox-button-error-blue-checkbox-hover-background-color | :host([class$="blue"][error]) #checkbox:hover                         | background-color                  | --bbva-white                                                     |
| --cells-checkbox-button-light-blue-checkbox-background-color       | :host(.light-blue) #checkbox                                          | background-color                  | ![#1973B8](https://placehold.it/15/1973B8/000000?text=+) #1973B8 |
| --cells-checkbox-button-light-blue-checkbox-hover-background-color | :host(.light-blue) #checkbox:hover                                    | background-color                  | --bbva-white-core-blue                                           |
| --cells-checkbox-button-core-blue-checkbox-background-color        | :host(.core-blue) #checkbox                                           | background-color                  | ![#0A5393](https://placehold.it/15/0A5393/000000?text=+) #0A5393 |
| --cells-checkbox-button-core-blue-checkbox-hover-background-color  | :host(.core-blue) #checkbox:hover                                     | background-color                  | --bbva-core-blue                                                 |
| --cells-checkbox-button-dark-blue-checkbox-background-color        | :host(.dark-blue) #checkbox                                           | background-color                  | --bbva-core-blue                                                 |
| --cells-checkbox-button-dark-blue-checkbox-hover-background-color  | :host(.dark-blue) #checkbox:hover                                     | background-color                  | --bbva-dark-core-blue                                            |
| --cells-checkbox-button-focus-checkbox-box-shadow-color            | :host(:focus) #checkbox                                               | box-shadow                        | none                                                             |
| --cells-checkbox-button-checkbox-check-size                        | :host([aria-checked="true"]) #checkbox:after                          | width                             | 0.75rem                                                          |
| --cells-checkbox-button-checkbox-check-size                        | :host([aria-checked="true"]) #checkbox:after                          | height                            | 0.75rem                                                          |
| --cells-checkbox-button-checkbox-check-background-color            | :host([aria-checked="true"]) #checkbox:after                          | background-color                  | --bbva-core-blue                                                 |
| --cells-checkbox-button-icon-color-checked                         | :host([icon-check][aria-checked="true"]) #icon-checked                | color                             | --bbva-core-blue                                                 |
| --cells-checkbox-button-disabled-opacity                           | :host([aria-disabled="true"])                                         | opacity                           | 0.3                                                              |
| --cells-checkbox-button-readonly-icon-color-checked                | :host([readonly][aria-checked="true"]) #icon-checked                  | color                             | --bbva-500                                                       |
| --cells-checkbox-button-error-checkbox-background-color            | :host([error]) #checkbox                                              | background-color                  | --bbva-red-white                                                 |
| --cells-checkbox-button-error-checkbox-border-color                | :host([error]) #checkbox                                              | border                            | 0.0625rem solid --bbva-red-dark                                  |
| --cells-checkbox-button-error-hover-checkbox-background-color      | :host([error]) #checkbox:hover                                        | background-color                  | --bbva-white                                                     |
| --cells-checkbox-button-error-label-color                          | :host([error]) #label                                                 | color                             | --bbva-red-dark                                                  |
| --cells-checkbox-button-icon-checkbox-size                         | :host([icon]) #checkbox                                               | width                             | 3rem                                                             |
| --cells-checkbox-button-icon-checkbox-size                         | :host([icon]) #checkbox                                               | height                            | 3rem                                                             |
| --cells-checkbox-button-icon-checkbox-background-color             | :host([icon]) #checkbox                                               | background-color                  | --bbva-100                                                       |
| --cells-radio-button-icon-checkbox-border-color                    | :host([icon]) #checkbox                                               | border                            | 1px solid  transparent                                           |
| --cells-checkbox-button-icon-label-color                           | :host([icon]) #label                                                  | color                             | --bbva-500                                                       |
| --cells-checkbox-button-icon-icon-size                             | :host([icon]) .icon                                                   | --cells-checkbox-button-icon-size | 1.5rem                                                           |
| --cells-checkbox-button-icon-checkbox-check-background-color       | :host([icon][aria-checked="true"]) #checkbox                          | background-color                  | --bbva-core-blue                                                 |
| --cells-checkbox-button-icon-check-icon-color                      | :host([icon][aria-checked="true"]) #icon-checked                      | color                             | --bbva-white                                                     |
| --cells-checkbox-button-icon-check-label-color                     | :host([icon][aria-checked="true"]) #label                             | color                             | --bbva-core-blue                                                 |
| --cells-checkbox-left-label-text-size                              | :host #left-label                                                     | font-size                         | rem(15px)                                                        |
| --cells-checkbox-left-label-color                                  | :host #left-label                                                     | color                             | --bbva-600                                                       |
| --cells-checkbox-left-additional-label-text-size                   | :host #left-additional-label                                          | font-size                         | rem(15px)                                                        |
| --cells-checkbox-left-additional-label-color                       | :host #left-additional-label                                          | color                             | --bbva-500                                                       |
| --cells-checkbox-left-icon-color                                   | :host #left-icon-color                                                | color                             | --bbva-core-blue                                                 |
### @apply
| Mixins                                                | Selector                                                              | Value |
| ----------------------------------------------------- | --------------------------------------------------------------------- | ----- |
| --cells-checkbox-button                               | :host                                                                 | {}    |
| --cells-checkbox-button-checkbox                      | #checkbox                                                             | {}    |
| --cells-checkbox-button-hover-checkbox                | #checkbox:hover                                                       | {}    |
| --cells-checkbox-button-label                         | #label                                                                | {}    |
| --cells-checkbox-button-body-label                    | .body-label                                                           | {}    |
| --cells-checkbox-button-icon                          | .icon                                                                 | {}    |
| --cells-checkbox-button-icon_checked                  | #icon-checked                                                         | {}    |
| --cells-checkbox-button-icon_unchecked                | #icon-unchecked                                                       | {}    |
| --cells-checkbox-button-grey-checkbox                 | :host(.grey) #checkbox                                                | {}    |
| --cells-checkbox-button-grey-hover-checkbox           | :host(.grey) #checkbox:hover                                          | {}    |
| --cells-checkbox-button-blue-checkbox                 | :host([class$="blue"]) #checkbox                                      | {}    |
| --cells-checkbox-button-blue-label                    | :host([class$="blue"]) #label                                         | {}    |
| --cells-checkbox-button-blue-icon_checked-checked     | :host([class$="blue"][icon-check][aria-checked="true"]) #icon-checked | {}    |
| --cells-checkbox-button-blue-focus-checkbox           | :host([class$="blue"]:focus) #checkbox                                | {}    |
| --cells-checkbox-button-blue-readonly-checkbox        | :host([class$="blue"][readonly][aria-checked="true"]) #checkbox       | {}    |
| --cells-checkbox-button-blue-readonly-icon_checked    | :host([class$="blue"][readonly][aria-checked="true"]) #icon-checked   | {}    |
| --cells-checkbox-button-blue-readonly-label           | :host([class$="blue"][readonly][aria-checked="true"]) #label          | {}    |
| --cells-checkbox-button-error-blue                    | :host([class$="blue"][error])                                         | {}    |
| --cells-checkbox-button-error-blue-checkbox           | :host([class$="blue"][error]) #checkbox                               | {}    |
| --cells-checkbox-button-error-blue-checkbox-hover     | :host([class$="blue"][error]) #checkbox:hover                         | {}    |
| --cells-checkbox-button-light-blue-checkbox           | :host(.light-blue) #checkbox                                          | {}    |
| --cells-checkbox-button-light-blue-checkbox-hover     | :host(.light-blue) #checkbox:hover                                    | {}    |
| --cells-checkbox-button-core-blue-checkbox            | :host(.core-blue) #checkbox                                           | {}    |
| --cells-checkbox-button-core-blue-checkbox-hover      | :host(.core-blue) #checkbox:hover                                     | {}    |
| --cells-checkbox-button-dark-blue-checkbox            | :host(.dark-blue) #checkbox                                           | {}    |
| --cells-checkbox-button-dark-blue-checkbox-hover      | :host(.dark-blue) #checkbox:hover                                     | {}    |
| --cells-checkbox-button-focus                         | :host(:focus)                                                         | {}    |
| --cells-checkbox-button-focus-checkbox                | :host(:focus) #checkbox                                               | {}    |
| --cells-checkbox-button-checked                       | :host([aria-checked="true"])                                          | {}    |
| --cells-checkbox-button-checkbox-checked-after        | :host([aria-checked="true"]) #checkbox:after                          | {}    |
| --cells-checkbox-button-label-checked                 | :host([aria-checked="true"]) #label                                   | {}    |
| --cells-checkbox-button-atom-icon-checked             | :host([aria-checked="true"]) .icon                                    | {}    |
| --cells-checkbox-button-icon_checked-checked          | :host([icon-check][aria-checked="true"]) #icon-checked                | {}    |
| --cells-checkbox-button-disabled                      | :host([aria-disabled="true"])                                         | {}    |
| --cells-checkbox-button-readonly                      | :host([readonly][aria-checked="true"])                                | {}    |
| --cells-checkbox-button-readonly-icon_checked-checked | :host([readonly][aria-checked="true"]) #icon-checked                  | {}    |
| --cells-checkbox-button-error-checkbox                | :host([error]) #checkbox                                              | {}    |
| --cells-checkbox-button-error-checkbox-hover          | :host([error]) #checkbox:hover                                        | {}    |
| --cells-checkbox-button-error-label                   | :host([error]) #label                                                 | {}    |
| --cells-checkbox-button-icon                          | :host([icon])                                                         | {}    |
| --cells-checkbox-button-icon-checkbox                 | :host([icon]) #checkbox                                               | {}    |
| --cells-checkbox-button-icon-icon_checked             | :host([icon]) #icon-checked                                           | {}    |
| --cells-checkbox-button-icon-icon_unchecked           | :host([icon]) #icon-unchecked                                         | {}    |
| --cells-checkbox-button-icon-body-label               | :host([icon]) .body-label                                             | {}    |
| --cells-checkbox-button-icon-label                    | :host([icon]) #label                                                  | {}    |
| --cells-checkbox-button-icon-checked                  | :host([icon][aria-checked="true"])                                    | {}    |
| --cells-checkbox-button-icon-checkbox-checked         | :host([icon][aria-checked="true"]) #checkbox                          | {}    |
| --cells-checkbox-button-icon-icon_checked-checked     | :host([icon][aria-checked="true"]) #icon-checked                      | {}    |
| --cells-checkbox-button-icon-icon_unchecked-checked   | :host([icon][aria-checked="true"]) #icon-unchecked                    | {}    |
| --cells-checkbox-button-icon-label-checked            | :host([icon][aria-checked="true"]) #label                             | {}    |
| --cells-checkbox-left-label                           | :host([icon] #left-label                                              | {}    |
| --cells-checkbox-left-additional-label                | :host([icon] #left-additional-label                                   | {}    |
| --cells-checkbox-left-icon                            | :host([icon] .left-icon                                               | {}    |
| --cells-checkbox-body-label-message                   | .body-label-message                                                   | {}    |
| --cells-checkbox-description-contact-alias            | .description-contact-alias                                            | {}    |
| --cells-checkbox-reset-info                           | .reset-info                                                           | {}    |
 *
 * @polymer
 * @customElement
 * @summary An accessible custom checkbox button that can be used inside a cells-checkbox-group component.
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-checkbox-button.png
 **/
class CellsCheckboxButton extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior ], Polymer.Element) {
  static get is() {
    return 'cells-checkbox-button';
  }
  static get properties() {
    return {
      /**
       * tabindex property of the checkbox button
       */
      tabindex: {
        type: Number,
        value: 0,
        reflectToAttribute: true
      },
      /**
       * Checked status of the checkbox button
       */
      checked: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_checked'
      },
      /**
       * Icon for the checkbox button when it's unchecked
       */
      icon: {
        type: String,
        reflectToAttribute: true
      },
      /**
       * Icon for the checkbox button when it's checked
       */
      iconCheck: {
        type: String,
        reflectToAttribute: true,
        value: 'coronita:checkmark'
      },
      /**
       * Size for `icon` and `iconCheck`.
       */
      iconSize: {
        type: Number,
      },
      /**
       * Disabled status of the checkbox button
       */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_disabled'
      },
      /**
       * Only change status when click in the checkbox button
       */
      onlyCheckbox: {
        type: Boolean
      },
      /**
       * Show Label on the left (optional)
       */
      leftLabel: {
        type: Boolean,
        value: false
      },
      /**
       * Icon to show on the left (optional)
       */
      leftIcon: {
        type: String
      },
      /**
       * readonly status of the radio button
       */
      readonly: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true
      },
      /**
       * error status of the radio button
       */
      error: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true
      },
      /**
       * Defines icon of error
       */
      errorIcon: {
        type: String,
        value: null
      },
      /**
       * Size of the error icon
       */
      errorIconSize: {
        type: Number,
      },
      /**
       * Defines error message
       */
      errorMessage: {
        type: String,
        value: null
      },
      /*description before link*/
      descriptionBeforeLinkText: {
        type: String
      },
      /*link Text*/
      linkText: {
        type: String
      },
      /*label info message*/
      descriptionInfo: {
        type: String,
        value: ''
      },
      /*description information message*/
      contactInfoMessage: {
        type: String,
        value: ''
      },
      /**
       * Defines icon of information
       */
      infoIcon: {
        type: String,
        value: null
      },
      /**
       * Align checkbox to text
       */
      alignCheckbox: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._handleKeyDown.bind(this));
    this.addEventListener('click', this.toggleCheck.bind(this));
    this.$.checkbox.addEventListener('click', this.toggleOnlyInCheckbox.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._handleKeyDown.bind(this));
    this.removeEventListener('click', this.toggleCheck.bind(this));
    this.$.checkbox.removeEventListener('click', this.toggleOnlyInCheckbox.bind(this));
  }
  /**
   * Updates aria-checked attribute and fires checked/unchecked events
   * @param {Boolean} newValue
   */
  _checked(newValue) {
    this.setAttribute('aria-checked', this.checked);
    if (newValue) {
      this.dispatchEvent(new CustomEvent('cells-checkbox-button-checked', {
        bubbles: true,
        composed: true
      }));
    } else {
      this.dispatchEvent(new CustomEvent('cells-checkbox-button-unchecked', {
        bubbles: true,
        composed: true
      }));
    }
  }
  /**
   * Updates aria-disabled attribute and fires disabled/enabled events
   * @param {Boolean} newValue
   */
  _disabled(newValue) {
    this.setAttribute('aria-disabled', this.disabled);
    if (newValue) {
      this.dispatchEvent(new CustomEvent('cells-checkbox-button-disabled', {
        bubbles: true,
        composed: true
      }));
    } else {
      this.dispatchEvent(new CustomEvent('cells-checkbox-button-enabled', {
        bubbles: true,
        composed: true
      }));
    }
  }
  /**
   * Checks the checkbox button
   */
  check() {
    if (!this.checked) {
      this.checked = !this.checked;
    }
  }
  /**
   * Unchecks the checkbox button
   */
  uncheck() {
    if (this.checked) {
      this.checked = !this.checked;
    }
  }
  /**
   * Toggles the checkbox button checked state
   */
  toggleCheck() {
    if (!this.disabled && !this.onlyCheckbox) {
      this.checked = !this.checked;
      this.dispatchEvent(new CustomEvent('cells-checkbox-button-toggled', {
        bubbles: true,
        composed: true,
        detail: { checked: this.checked }
      }));
    }
  }
  /**
   * Fired only by pressing the checkbox
   */
  toggleOnlyInCheckbox() {
    if (!this.disabled &&  this.onlyCheckbox) {
      this.checked = !this.checked;
      this.dispatchEvent(new CustomEvent('cells-checkbox-button-toggled-only-in-checkbox', {
        bubbles: true,
        composed: true,
        detail: { checked: this.checked }
      }));
    }
  }

  /**
   * Enables the checkbox button
   */
  enable() {
    if (this.disabled) {
      this.disabled = !this.disabled;
    }
  }
  /**
   * Disables the checkbox button
   */
  disable() {
    if (!this.disabled) {
      this.disabled = !this.disabled;
    }
  }
  /**
   * Show error in checkbox button
   */
  showError() {
    if (!this.error) {
      this.error = !this.error;
    }
  }
  /**
   * Show error in checkbox button
   */
  hideError() {
    if (this.error) {
      this.error = !this.error;
    }
  }
  /**
   * Toggles the checkbox when spacebar is pressed
   * @param {KeyboardEvent} event
   */
  _handleKeyDown(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
      this.toggleCheck();
    }
  }
  _computeIconSize(size) {
    return `width: ${size}px; height: ${size}px;`;
  }
  linkClicked(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('cells-checkbox-button-link-clicked', {
      bubbles: true,
      composed: true
    }));
  }
  /**
   * Fired when checkbox is toggled
   * @event cells-checkbox-button-toggled
   */
  /**
   * Fired when checkbox gets checked
   * @event cells-checkbox-button-checked
   */
  /**
   * Fired when checkbox gets unchecked
   * @event cells-checkbox-button-unchecked
   */
  /**
   * Fired when checkbox gets disabled
   * @event cells-checkbox-button-disabled
   */
  /**
   * Fired when checkbox gets enabled
   * @event cells-checkbox-button-enabled
   */
}
customElements.define(CellsCheckboxButton.is, CellsCheckboxButton);
