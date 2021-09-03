/**
 *
 *
 * # cells-dropdown-menu
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * This component uses `cells-dropdown-layer` to show a list of selectable items which can be checked. It works as a select component, and expects an array of items to build the list.
 *
 * ```html
 * <cells-dropdown-menu placeholder="Default text" items='[...]'></cells-dropdown-layer>
 * ```
 *
 * ```javascript
 * [{
   * 'name': 'Lorem ipsum',
   * 'value': 'loremipsum'
 * }, {
   * 'name': 'Lorem ipsum 2',
   * 'value': 'loremipsum2',
   * 'icon': 'coronita:creditcard'
 * }]
 * ```
 *
 * The menu can be set as required (which will show an error if no option is checked) or disabled. You can limit the amount of visible options at once with the 'maxItemsShown' property.
 *
 * You can use the 'selected' property to set the currently selected item by index, as well as the 'value' property for the value of the current index.
 *
 * ## Icons
 *
 * Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.
 *
 * ## Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * | Custom property                                           | Description                                     | Default |
 * |:----------------------------------------------------------|:------------------------------------------------|:-------:|
 * | --cells-dropdown-menu-value-color                         | Text color                                      | #D0D1D4 |
 * | --cells-dropdown-menu-underline-color                     | Underline color                                 | #565C67 |
 * | --cells-dropdown-menu-highlighted-color                   | Highlighted color                               |  #FFF   |
 * | --cells-dropdown-menu                                     | Empty mixin for component                       |   {}    |
 * | --cells-dropdown-menu-haserror-layer-icon-color           | Layer icon color with error                     | #F970B5 |
 * | --cells-dropdown-menu-haserror-layer-underline-color      | Layer underline color with error                | #F970B5 |
 * | --cells-dropdown-menu-haserror-dark-layer-icon-color      | Layer icon color with dark class and error      | #F970B5 |
 * | --cells-dropdown-menu-haserror-dark-layer-underline-color | Layer underline color with dark class and error | #F970B5 |
 * | --cells-dropdown-menu-haserror                            | Empty mixin for component with error            |   {}    |
 * | --cells-dropdown-menu-layer                               | Empty mixin for layer                           |   {}    |
 * | --cells-dropdown-menu-lists                               | Empty mixin for list                            |   {}    |
 * | --cells-dropdown-menu-item-error-value-color              | Text color for item with error                  | #F970B5 |
 * | --cells-dropdown-menu-item-error-highlighted-color        | Highlighted color for item with error           | #F970B5 |
 * | --cells-dropdown-menu-item-error-underline-color          | Underline color for item with error             | #F970B5 |
 * | --cells-dropdown-menu-item-error                          | Empty mixin for item with error                 |   {}    |
 * | --cells-dropdown-menu-item-last                           | Empty mixin for last item                       |   {}    |
 * | --cells-dropdown-menu-item                                | Empty mixin for item                            |   {}    |
 * | --cells-dropdown-menu-control-icon-selected               | Empty mixin for selected item icon              |   {}    |
 * | --cells-dropdown-menu-control-icon                        | Empty mixin for item icon                       |   {}    |
 * | --cells-dropdown-menu-control-label-selected              | Empty mixin for selected label                  |   {}    |
 * | --cells-dropdown-menu-control-label                       | Empty mixin for label                           |   {}    |
 * | --cells-dropdown-menu-control-icon-check-checked          | Empty mixin for check icon when checked         |   {}    |
 * | --cells-dropdown-menu-control-icon-check                  | Empty mixin for check icon                      |   {}    |
 * | --cells-dropdown-menu-control                             | Empty mixin for item control block              |   {}    |
 * | --cells-dropdown-menu-underline-selected                  | Empty mixin for selected underline              |   {}    |
 * | --cells-dropdown-menu-underline                           | Empty mixin for underline                       |   {}    |
 * | --cells-dropdown-menu-line                                | Empty mixin for line block                      |   {}    |
 *
 * @polymer
 * @customElement
 * @summary Show a custom select component using cells-dropdown-layer
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-dropdown-menu.png
 */
class cellsDropdownMenu extends Polymer.Element {
  static get is() {
    return 'cells-dropdown-menu';
  }

  static get properties() {
    return {
      /**
       * Items to show in the layer
       * [{
       *   name: 'Item label',
       *   value: 'some-value',
       *   icon: 'iconset:iconname'
       * }]
       */
      items: {
        type: Array,
        value: function() {
          return [];
        },
        observer: '_itemsObserver',
      },

      /**
       * Check icon
       */
      iconCheck: {
        type: String,
        value: 'coronita:checkmark',
      },

      /**
       * Disabled state of the component
       */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
      },

      /**
       * Max items to show at once in the layer (sets a max Height in the layer)
       */
      maxItemsShown: {
        type: Number,
        observer: '_maxItemsShown',
      },

      /**
       * Text to show when no option is selected
       */
      placeholder: {
        type: String,
        value: '',
      },

      /**
       * Current label text
       */
      _label: {
        type: String,
        value: '',
      },

      /**
       * Prefix for label
       */
      prefix: {
        type: String,
      },

      /**
       * Required status of the component
       */
      required: {
        type: Boolean,
        value: false,
      },

      /**
       * Message to show when no option is selected in a required dropdown
       */
      requiredMsg: {
        type: String,
        value: 'You must select an option',
      },

      /**
       * Opened status
       */
      opened: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_opened',
      },

      /**
       * Currently selected item
       */
      selected: {
        type: Number,
        value: -1,
        observer: '_selectedObserver',
        notify: true,
      },

      /**
       * Value of currently selected item
       */
      value: {
        type: String,
        notify: true,
        observer: '_valueChange',
      },

      /**
       * Icon to show to the left of the layer control label
       */
      controlIcon: {
        type: String,
      },

      /**
       * Disabled icon besides underline
       */
      iconDisabled: {
        type: String,
      },

      /**
       * Icon to show besides underline
       */
      iconOpen: {
        type: String,
      },

      /**
       * If true, layer can be less wide than control
       */
      controlAsMinWidthOff: {
        type: Boolean,
      },

      /**
       * Min height of layer
       */
      minHeight: {
        type: Number,
      },

      /**
       * Horizontal direction in which layer will open. Allowed values are 'left-to-right', 'right-to-left', 'centered' and 'auto'
       */
      openingX: {
        type: String,
      },

      /**
       * Vertical direction in which layer will open. Allowed values are 'top-to-bottom', 'bottom-to-top' and 'auto'
       */
      openingY: {
        type: String,
      },

      /**
       * Minimum distance from layer limits to viewport
       */
      safeMargin: {
        type: Number,
      },

      /**
       * Error message
       */
      error: {
        type: String,
      },

      /**
       * Boolean used to indentify if some item has an error property
       */
      hasError: {
        type: Boolean,
        reflectToAttribute: true,
      },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', function(e) {
      this._keyHandler(e);
    }.bind(this));
    this._layerWidth();
  }

  /**
   * Open layer
   */
  open() {
    this.$.layer.open();
  }

  /**
   * Close layer
   */
  close() {
    this.$.layer.close();
  }

  _layerWidth() {
    this.$.layer.checkControlMinWidth();
  }

  _maxItemsShown(newValue) {
    var total = newValue * 3 - 1 + 3; // 3rem for the layer paddings, 1rem for the margin bottom 0 of last item
    this.updateStyles({
      '--cells-dropdown-layer-layer-max-height': total + 'rem',
    });
  }

  _arrowMove(keyCode) {
    var items = [ ...this.$.layer.querySelectorAll('.item') ].filter(item => !item.hasAttribute('disabled'));
    var selectedIndex = Array.prototype.indexOf.call(items, this.$.layer.querySelector('.item.selected'));
    var target;
    if (keyCode === 37 || keyCode === 38) {
      target = selectedIndex === 0 ? items.length - 1 : selectedIndex - 1;
    } else {
      target = selectedIndex === items.length - 1 ? 0 : selectedIndex + 1;
    }
    this._select(items[target]);
  }

  _select(item) {
    this._clearSelected();
    item.focus();
    item.setAttribute('tabindex', 0);
    item.classList.add('selected');
  }

  _clearSelected() {
    var selected = this.$.layer.querySelector('.item.selected');
    if (selected) {
      selected.setAttribute('tabindex', -1);
      selected.classList.remove('selected');
    }
  }

  _itemClick(ev) {
    if (ev.currentTarget.hasAttribute('disabled')) {
      ev.stopPropagation();
      ev.preventDefault();
      return false;
    }
    var item = ev.composedPath().find(function(elem) {
      return elem.classList.contains('item');
    });
    this._checkItem(item);
    this.close();
    this._restoreFocus();
  }

  _checkItem(item) {
    var index = this.items.indexOf(this.$.dr.itemForElement(item));
    this.selected = index;
    this.error = this.$.dr.itemForElement(item).error;
    this.dispatchEvent(new CustomEvent('user-selected-changed', {
      bubbles: true,
      composed: true,
      detail: this.$.dr.itemForElement(item).value,
    }));
  }
  /**
   * Fired when user checks a value in the layer
   * @event cells-dropdown-menu-user-value-changed
   */

  _opened(newValue) {
    if (!newValue) {
      this._clearSelected();
      if (this.required && !this.value) {
        this.$.layer.error = this.requiredMsg;
      } else if (this.error) {
        this.$.layer.error = this.error;
      } else {
        this.$.layer.error = '';
      }
    }
  }

  _setLabel(placeholder, _label) {
    return !_label ? placeholder : _label;
  }

  _restoreFocus() {
    setTimeout(function() {
      this.$.layer.focus();
    }.bind(this), 1);
  }

  _keyHandler(e) {
    var keyCode = e.keyCode;

    if (keyCode >= 37 && keyCode <= 40) {
      e.preventDefault();
      this._arrowPressed(keyCode);
    }

    if (keyCode === 32 || keyCode === 13) {
      e.preventDefault();
      this._selectKeyPressed();
    }

    if (keyCode === 27) {
      if (this.opened) {
        this._restoreFocus();
      }
    }
  }

  _arrowPressed(keyCode) {
    var checked;
    var first;

    if (!this.opened) {
      this.open();
      checked = this.$.layer.querySelector('.item[aria-checked="true"]');
      if (checked) {
        this._select(checked);
      } else {
        [ first ] = [ ...this.$.layer.querySelectorAll('.item') ].filter(item=> !item.hasAttribute('disabled'));
        this._select(first);
      }
    } else {
      var selected = this.$.layer.querySelector('.item.selected');
      if (!selected) {
        checked = this.$.layer.querySelector('.item[aria-checked="true"]');
        if (checked) {
          this._select(checked);
        } else {
          [ first ] = [ ...this.$.layer.querySelectorAll('.item') ].filter(item=> !item.hasAttribute('disabled'));
          this._select(first);
        }
      }
      this._arrowMove(keyCode);
    }
  }

  _selectKeyPressed() {
    if (!this.opened) {
      this.open();
      var checked = this.$.layer.querySelector('.item[aria-checked="true"]');
      if (checked) {
        this._select(checked);
      } else {
        var first = this.$.layer.querySelector('.item');
        this._select(first);
      }
    } else {
      var selected = this.$.layer.querySelector('.item.selected');
      if (selected && !selected.hasAttribute('disabled')) {
        this._checkItem(selected);
      }
      this.close();
      this._restoreFocus();
    }
  }

  _selectedObserver(newValue) {
    if (newValue > -1 && newValue <= this.items.length - 1 && this.items && this.items.length) {
      Polymer.flush();
      var elems = this.$.layer.querySelectorAll('.item');
      elems.forEach(function(elem, index) {
        elem.setAttribute('aria-checked', false);
      });
      elems[newValue].setAttribute('aria-checked', true);
      this._label = this.items[newValue].name;
      this.value = this.items[newValue].value;
    }
  }

  _someError(items) {
    if (items) {
      this.hasError = !!items.find(elem => elem.error);
    }
  }

  _itemsObserver(newValue, oldValue) {
    if ((!oldValue || !oldValue.length) && newValue && this.selected > -1) {
      this._selectedObserver(this.selected);
    }
    this._someError(newValue);
  }

  _valueChange(val) {
    this.dispatchEvent(new CustomEvent('cells-dropdown-menu-value', {
      bubbles: true,
      composed: true,
      detail: val,
    }));
  }
  /**
   * Fired when value changes
   * @event cells-dropdown-menu-value
   */

  _setClass() {
    return 'layer ' + this.classList.value;
  }

  _setErrorClass(error) {
    return error ? 'error' : '';
  }
}

customElements.define(cellsDropdownMenu.is, cellsDropdownMenu);
