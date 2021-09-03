const KEYS = {
  SPACE: 32,
  ENTER: 13,
};
/**
 *
 * # cells-radio-tabs
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)
 * ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * `<cells-radio-tabs>` displays a list of tabs from its `options` property.
 * The `options` property can be an array of strings or an array of objects with an optional `icon` property and a `label` property that will be used as the tab text.
 *
 * Example with simple options:
 *
 * ```html
 * <cells-radio-tabs options='["Home", "Accounts"]'></cells-radio-tabs>
 * ```
 *
 * Example with text and icons:
 *
 * ```html
 * <cells-radio-tabs options='[{
 *   "icon": "coronita:home",
 *   "label": "Home"
 * }, {
 *   "icon": "coronita:alarm",
 *   "label": "Alerts"
 * }]'></cells-radio-tabs>
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
 * | Custom Property                                 | Selector                          | CSS Property        | Value                   |
 * | ----------------------------------------------- | --------------------------------- | ------------------- | ----------------------- |
 * | --cells-radio-tabs-font-size                    | :host                             | font-size           | 0.8125rem               |
 * | --cells-radio-tabs-color                        | :host                             | color               | --bbva-300              |
 * | --cells-radio-tabs-item-height                  | :host                             | height              | 3.4375rem               |
 * | --cells-radio-tabs-bg-color                     | :host                             | background-color    | --bbva-white            |
 * | --cells-radio-tabs-border-radius                | :host                             | border-radius       | `No fallback value`     |
 * | --cells-radio-tabs-option-flex                  | :host button                      | flex                | 1                       |
 * | --cells-radio-tabs-border-bottom-color          | :host button                      | border-bottom       | 1px solid --bbva-200    |
 * | --cells-radio-tabs-color                        | :host button                      | color               | --bbva-300              |
 * | --cells-radio-tabs-color-selected               | :host button[active] .tab-content | color               | --bbva-core-blue        |
 * | --cells-radio-tabs-span-min-height              | :host span                        | min-height          | 2.75rem                 |
 * | --cells-radio-tabs-span-min-width               | :host span                        | min-width           | 2.75rem                 |
 * | --cells-radio-tabs-icon-margin                  | :host .icon                       | margin              | 0 0.625rem 0 0          |
 * | --radio-tabs-item-width                         | :host #indicator                  | width               | `No fallback value`     |
 * | --cells-radio-tabs-border-radius                | :host #indicator                  | border-radius       | `No fallback value`     |
 * | --cells-radio-tabs-indicator-bg-color           | :host #indicator                  | background-color    | --bbva-core-blue        |
 * | --cells-radio-tabs-font-size                    | :host .label                      | font-size           | 0.9375rem               |
 * | --cells-radio-tabs-font-wight                   | :host .label                      | font-weight         | normal                  |
 * | --cells-radio-tabs-total-order                  | :host .total                      | order               | 2                       |
 * | --cells-radio-tabs-total-padding-left           | :host .total                      | padding-left        | 0.75rem                 |
 * | --cells-radio-tabs-active-font-weight           | :host button[active] .label       | font-weight         | --cells-fontDefaultBold |
 * | --cells-radio-tabs-round-color                  | :host(.round-total)               | color               | --bbva-500              |
 * | --cells-radio-tabs-round-border-bottom-color    | :host(.round-total) button        | border-bottom-color | --bbva-300              |
 * | --cells-radio-tabs-round-label-order            | :host(.round-total) button .label | order               | 2                       |
 * | --cells-radio-tabs-round-label-font-size        | :host(.round-total) button .label | font-size           | 0.9375rem               |
 * | --cells-radio-tabs-round-total-order            | :host(.round-total) button .total | order               | 1                       |
 * | --cells-radio-tabs-round-total-font-size        | :host(.round-total) button .total | font-size           | 0.875rem                |
 * | --cells-radio-tabs-total-margin-right           | :host(.round-total) button .total | margin-right        | 1rem                    |
 * | --cells-radio-tabs-total-margin-left            | :host(.round-total) button .total | margin-left         | 0                       |
 * | --cells-radio-tabs-round-total-color            | :host(.round-total) button .total | color               | --bbva-white            |
 * | --cells-radio-tabs-round-total-background-color | :host(.round-total) button .total | background-color    | --bbva-500              |
 * ### @apply
 * | Mixins                                | Selector                                 | Value |
 * | ------------------------------------- | ---------------------------------------- | ----- |
 * | --cells-radio-tabs                    | :host                                    | {}    |
 * | --cells-radio-tabs-option             | :host button                             | {}    |
 * | --cells-radio-tabs-selected           | :host button[active] .tab-content        | {}    |
 * | --cells-radio-tabs-tab-hover          | :host button:hover .tab-content          | {}    |
 * | --cells-radio-tabs-span               | :host span                               | {}    |
 * | --cells-radio-tabs-content            | :host .tab-content                       | {}    |
 * | --cells-radio-tabs-icon               | :host .icon                              | {}    |
 * | --cells-ratio-tabs-indicator          | :host #indicator                         | {}    |
 * | --cells-ratio-tabs-label              | :host .label                             | {}    |
 * | --cells-ratio-tabs-total              | :host .total                             | {}    |
 * | --cells-radio-tabs-option-focus-label | :host button[active] .label              | {}    |
 * | --cells-radio-tabs-round-label        | :host(.round-total) button               | {}    |
 * | --cells-radio-tabs-round-label-class  | :host(.round-total) button .label        | {}    |
 * | --cells-ratio-tabs-round-total        | :host(.round-total) button .total        | {}    |
 * | --cells-ratio-tabs-round-total-before | :host(.round-total) button .total:before | {}    |
 *
 * @polymer
 * @customElement
 * @summary Display a list of navigation tabs.
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-radio-tabs.png
 */
class CellsRadioTabs extends Polymer.mixinBehaviors([CellsBehaviors.i18nBehavior, Polymer.GestureEventListeners], Polymer.Element) {

  static get is() {
    return 'cells-radio-tabs';
  }

  static get properties() {
    return {
      /**
       * List of options.
       * Can be an array of Strings used as labels for each tab or Objects with a "label" key and and optional "icon" key to display
       * an icon to the left of the text.
       * @type {Array}
       */
      options: {
        type: Array,
        observer: '_optionsChanged',
        value: function() {
          return [];
        },
      },

      /**
       * Size for the icons.
       */
      iconSize: {
        type: Number,
        value: 24,
      },

      /**
       * Index of the selected option.
       */
      selected: {
        type: Number,
        value: 0,
        notify: true,
      },

      _uniqueID: {
        type: Number,
        value: function() {
          return new Date().valueOf();
        },
      },

      _hasLabels: {
        type: Boolean,
        computed: '_computeHasLabels(options)',
      },

      /**
       * Set to true to fire `tab-mouseevent` event when a tab receives mouseenter / mouseleave.
       */
      notifyMouseEvents: {
        type: Boolean,
        value: false,
      },

      role: {
        type: String,
        value: 'tablist',
        readOnly: true,
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return [
      '_selectedChanged(selected, options)'
    ];
  }

  _optionsChanged(newValue, previousValue) {
    if (previousValue && (previousValue.length !== newValue.length)) {
      this._updateTabStylesAfterResettingSelected();
    } else {
      this._setTabStyles();
    }
  }

  // Prevents changing the width and the position of the indicator at the same time.
  _updateTabStylesAfterResettingSelected() {
    this.classList.add('indicator-hidden');
    this._resetSelected()
      .then(() => {
        this._setTabStyles();
        this.classList.remove('indicator-hidden');
      });
  }

  _resetSelected() {
    return new Promise((resolve) => {
      const selectedDoesNotExist = this.options.indexOf(this.options[ this.selected ]) === -1;
      const timeout = (selectedDoesNotExist) ? 200 : 0;
      if (selectedDoesNotExist) {
        this.selected = 0;
      }
      setTimeout(resolve, timeout);
    });
  }

  _setTabStyles() {
    this.updateStyles({ '--radio-tabs-item-width': 100 / this.options.length + '%' });
    /**
     * Fired after updating the tab styles.
     * @event cells-radio-tabs-styles-updated
     * @param {Object} detail.itemWidth width applied to each tab
     */
    this.dispatchEvent(new CustomEvent('cells-radio-tabs-styles-updated', {
      bubbles: true,
      composed: true,
      detail: {
        itemWidth: 100 / this.options.length + '%'
      }
    }));
  }

  /**
   * Selects the item on click event and on keydown only if the key pressed is space or enter.
   * Prevents selecting an item while navigating through tabs using the tab key.
   */
  _setSelected(e) {

    const keyShouldActiveTab = [KEYS.SPACE, KEYS.ENTER].indexOf(e.keyCode) !== -1;
    if (e.type !== 'keydown' || keyShouldActiveTab) {
      this.selected = e.model.index;
      /**
      * Fired when tab was selected
      * @event selected-tab
      */
      this.dispatchEvent(new CustomEvent('selected-tab', {
        detail: this.selected,
        bubbles: true,
        composed: true
      }));
    }
  }

  _computeChecked(selected, index) {
    return Number(selected) === index;
  }

  _computeCheckedString(selected, index) {
    const checked = this._computeChecked(selected, index);

    return checked.toString();
  }

  /**
   * Returns if the label has to be disabled
   * @param {Number} selected
   * @param {Number} index
   * @returns String
   */
  _labelDisabled(selected, index) {
    const checked = !this._computeChecked(selected, index);

    return checked.toString();
  }

  _tabindex(selected, index) {
    const checked = this._computeChecked(selected, index);
    return checked ? false : -1;
  }

  /**
   * Returns id for tab getted and translated from item
   * @param {Number} item
   * @returns String
   */
  _tabId(item) {
    let label = '';

    if (item.label) {
      label = item.label;
    } else {
      label = item;
    }

    const translate = this.t(label);
    return translate.toString().toLowerCase();
  }

  _selectedChanged(selected, options) {
    const selectedItemExists = options.indexOf(options[ selected ]) !== -1;
    if (selectedItemExists) {
      this.$.indicator.style.transform = `translateX(calc(100% * ${selected}))`;
    }
  }

  _computeHasLabels(options) {
    return options.some(option => option.label);
  }

  _onMouseEvent(e) {
    /**
     * Fired on tab mouseenter / mouseleave
     * @event tab-mouseevent
     * @param {Number} 'index' Index of the event.target tab
     * @param {String} 'type' Event type (mouseenter | mouseleave)
     */
    if (this.notifyMouseEvents) {
      this.dispatchEvent(new CustomEvent('tab-mouseevent', {
        bubbles: false,
        composed: true,
        detail: {
          index: e.model.index,
          type: e.type,
        },
      }));
    }
  }
}
customElements.define(CellsRadioTabs.is, CellsRadioTabs);
