/**
 *
 * # cells-switch
 *
 * [![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](https://catalogs.platform.bbva.com/cells) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * `<cells-switch>` is a control component that toggles between two statuses: __checked__ and __unchecked__.
 *
 * Use `checked` property inherited from `Polymer.IronCheckedElementBehavior`, to give the status:
 *
 *   ```html
 *   <cells-switch checked></cells-switch>
 *   ```
 *
 * It has two styling configurations according to the background it is on. To use it in a light background simply leave the component without the dark-bg property.
 *
 * Basic example in light background:
 *
 * ```html
 * <cells-switch></cells-switch>
 * ```
 *
 * The other option is to use it with a dark background, to do this, simply add the `darkBg` property on the component.
 *
 * Basic example in dark background:
 *
 * ```html
 * <cells-switch dark-bg></cells-switch>
 * ```
 *
 * To use it with icons, add the `withIcons` property in the component as well as the `iconOn` and `iconOff` properties.
 *
 * Example __with icons__:
 *
 * ```html
 * <cells-switch with-icons
 *   icon-on="coronita:checkmark"
 *   icon-off="coronita:close"></cells-switch>
 * ```
 *
 * ## Icons
 *
 * Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.
 *
 * ## Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * ### Custom Properties
 * | Custom Property                                       | Selector                                                        | CSS Property      | Value                   |
 * | ----------------------------------------------------- | --------------------------------------------------------------- | ----------------- | ----------------------- |
 * | --cells-fontDefault                                   | :host                                                           | font-family       |  sans-serif             |
 * | --cells-switch-knob-size                              | :host                                                           | --knob-size       |  22                     |
 * | --cells-switch-width                                  | :host                                                           | --switch-width    |  38                     |
 * | --cells-switch-switcher-bg-color-off                  | .switcher                                                       | background-color  | --bbva-500              |
 * | --cells-switch-knob-color-off                         | .knob                                                           | color             | --bbva-white            |
 * | --cells-switch-knob-bg-color-off                      | .knob                                                           | background-color  | --bbva-white            |
 * | --cells-switch-knob-icon-color-off                    | .knob cells-atom-icon                                           | color             | --bbva-green-medium     |
 * | --cells-switch-dark-bg-switcher-bg-color-off          | :host([dark-bg]) .switcher                                      | background-color  | --bbva-white            |
 * | --cells-switch-dark-bg-knob-bg-color-off              | :host([dark-bg]) .knob                                          | background-color  | --bbva-500              |
 * | --cells-switch-with-icons-switcher-bg-color-off       | :host([with-icons]) .switcher                                   | background-color  | --bbva-500              |
 * | --cells-switch-with-icons-knob-icon-color-off         | :host([with-icons]) .knob cells-atom-icon                       | color             | --bbva-500              |
 * | --cells-switch-switcher-hover-bg-color-off            | :host(:hover:not([disabled])) .switcher                         | background-color  | --bbva-600              |
 * | --cells-switch-knob-hover-bg-color-off                | :host(:hover:not([disabled])) .knob                             | background-color  | --bbva-white            |
 * | --cells-switch-dark-bg-switcher-hover-bg-color-off    | :host(:hover:not([disabled])[dark-bg]) .switcher                | background-color  | --bbva-white            |
 * | --cells-switch-dark-bg-knob-hover-bg-color-off        | :host(:hover:not([disabled])[dark-bg]) .knob                    | background-color  | --bbva-600              |
 * | --cells-switch-with-icons-switcher-hover-bg-color-off | :host(:hover:not([disabled])[with-icons]) .switcher             | background-color  | --bbva-500              |
 * | --cells-switch-with-icons-knob-hover-icon-color-off   | :host(:hover:not([disabled])[with-icons]) .knob cells-atom-icon | color             | --bbva-green-medium     |
 * | --cells-switch-knob-focus-shadow-color-off            | :host(:focus:not([disabled])) .knob                             | box-shadow        | --bbva-core-sky-blue    |
 * | --cells-switch-dark-bg-knob-focus-shadow-color-off    | :host(:focus:not([disabled])[dark-bg]) .knob                    | box-shadow        | --bbva-core-sky-blue    |
 * | --cells-switch-with-icons-knob-focus-shadow-color-off | :host(:focus:not([disabled])[with-icons]) .knob                 | box-shadow        | --bbva-core-sky-blue    |
 * | --cells-switch-disabled-opacity                       | :host([disabled])                                               | opacity           |  0.3                    |
 * | --cells-switch-switcher-bg-color-on                   | :host([checked]) .switcher                                      | background-color  | --bbva-medium-blue      |
 * | --cells-switch-knob-bg-color-on                       | :host([checked]) .knob                                          | background-color  | --bbva-white            |
 * | --cells-switch-with-icons-switcher-bg-color-on        | :host([checked][with-icons]) .switcher                          | background-color  | --bbva-green-medium     |
 * | --cells-switch-with-icons-knob-icon-color-on          | :host([checked][with-icons]) .knob cells-atom-icon              | color             | --bbva-green-medium     |
 * | --cells-switch-dark-bg-switcher-bg-color-on           | :host([checked][dark-bg]) .switcher                             | background-color  | --bbva-white            |
 * | --cells-switch-dark-bg-knob-bg-color-on               | :host([checked][dark-bg]) .knob                                 | background-color  | --bbva-medium-blue      |
 * | --cells-switch-switcher-hover-bg-color-on             | :host([checked]:hover) .switcher                                | background-color  | --bbva-core-blue        |
 * | --cells-switch-knob-hover-bg-color-on                 | :host([checked]:hover) .knob                                    | background-color  | --bbva-white            |
 * | --cells-switch-dark-bg-switcher-hover-bg-color-on     | :host([checked]:hover[dark-bg]) .switcher                       | background-color  | --bbva-white            |
 * | --cells-switch-dark-bg-knob-hover-bg-color-on         | :host([checked]:hover[dark-bg]) .knob                           | background-color  | --bbva-core-blue        |
 * | --cells-switch-with-icons-switcher-hover-bg-color-on  | :host([checked]:hover[with-icons]) .switcher                    | background-color  | --bbva-green-medium     |
 * | --cells-switch-with-icons-knob-hover-icon-color-on    | :host([checked]:hover[with-icons]) .knob cells-atom-icon        | color             | --bbva-500              |
 * | --cells-switch-knob-focus-shadow-color-on             | :host([checked]:not([disabled]):focus) .knob                    | box-shadow        | --bbva-core-sky-blue    |
 * | --cells-switch-dark-bg-knob-focus-shadow-color-on     | :host([checked]:not([disabled]):focus[dark-bg]) .knob           | box-shadow        | --bbva-dark-medium-blue |
 * | --cells-switch-with-icons-knob-focus-shadow-color-on  | :host([checked]:not([disabled]):focus[with-icons]) .knob        | box-shadow        | --bbva-core-blue-sky    |
 * ### @apply
 * | Mixins                   | Selector              | Value |
 * | ------------------------ | --------------------- | ----- |
 * | --cells-switch           | :host                 | {}    |
 * | --cells-switch-switcher  | .switcher             | {}    |
 * | --cells-switch-items     | .item                 | {}    |
 * | --cells-switch-icons     | .item cells-atom-icon | {}    |
 * | --cells-switch-knob      | .knob                 | {}    |
 * | --cells-switch-knob-icon | .knob cells-atom-icon | {}    |
 *
 * @polymer
 * @customElement
 * @summary An element that toggles between two states
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-switch.png
 */
class cellsSwitch extends Polymer.mixinBehaviors([Polymer.IronCheckedElementBehavior, Polymer.IronA11yKeysBehavior], Polymer.Element) {
  static get is() {
    return 'cells-switch';
  }

  static get properties() {
    return {
      /**
       * ID of icon to display in the button that toggles.
       */
      iconOn: {
        type: String,
        value: ''
      },

      /**
       * ID of icon to display in the button that toggles.
       */
      iconOff: {
        type: String,
        value: ''
      },

      /**
       * Determines the size of the toggle icon.
       */
      iconSize: {
        type: Number,
        value: 16
      },

      /**
       * Set to true, when you are using icons
       */
      withIcons: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Set to true, when you are using a dark background style
       */
      darkBg: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable the switch
       */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_disabled'
      },

      _icon: {
        type: String,
        computed: '_computeIcon(checked, withIcons)'
      },

      _target: {
        type: Object,
        value: function() {
          return this;
        }
      }
    };
  }

  get keyBindings() {
    return {
      'space': '_onSpaceKeydown'
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._ensureAttribute('tabindex', 0);
    this._ensureAttribute('role', 'switch');
    this.addEventListener('click', this.toggle);
  }

  _computeIcon(checked) {
    return (checked) ? this.iconOn : this.iconOff;
  }

  _computeClass(checked) {
    return (checked) ? 'on' : '';
  }

  _disabled(disabled) {
    this.setAttribute('aria-disabled', String(disabled));
    var tabindex = disabled ? -1 : 0;
    this.setAttribute('tabindex', tabindex);
  }

  _onSpaceKeydown(e) {
    if (e.detail.keyboardEvent.keyCode === 32) {
      e.preventDefault();
    }
    if (!this.disabled) {
      this.toggle();
    }
  }
  /**
   * Toggles button state position and `checked` property
   * true if component is checked and false if is unchecked
   */
  toggle() {
    this.checked = !this.checked;

    /**
     * Fired when switch is clicked,
     * with current status as payload
     *
     * @event cells-switch-clicked
     */
    this.dispatchEvent(new CustomEvent('cells-switch-clicked', {
      bubbles: true,
      composed: true,
      detail: this.checked
    }));
  }
  /**
   * Overriding 'checked' observer from Polymer.IronCheckedElementBehavior;
   * on change, it toggles `.on` class of `#handler` node
   * @param {Boolean} checked value
   */
  _checkedChanged(value) {
    this.active = value;
    this.dispatchEvent(new CustomEvent('iron-change', {
      bubbles: true,
      composed: true
    }));

    this.setAttribute('aria-label', this.getEffectiveTextContent());
    this.setAttribute('aria-checked', value);
    /**
     * Fired when `checked` value is changed,
     * with current status as payload
     *
     * @event cells-switch-changed
     */
    this.dispatchEvent(new CustomEvent('cells-switch-changed', {
      bubbles: true,
      composed: true,
      detail: value
    }));
  }
}
customElements.define(cellsSwitch.is, cellsSwitch);