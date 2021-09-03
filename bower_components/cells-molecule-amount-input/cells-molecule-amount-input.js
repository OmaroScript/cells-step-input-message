/*eslint "new-cap": [2, {"capIsNewExceptions": ["AmountBehavior"] }]*/
/*global Cleave */
class CellsMoleculeAmountInput extends Polymer.mixinBehaviors([
  CellsBehaviors.i18nBehavior
], CellsBehaviors.AmountBehavior(Polymer.Element)) {
  static get is() {
    return 'cells-molecule-amount-input';
  }
  static get properties() {
    return {
      /**
      * Input type config
      */
      type: {
        type: String,
        value: 'text'
      },
      /**
      * Input mode config
      */
      inputMode: {
        type: String,
        value: ''
      },
      /**
      * If true, the element is currently invalid
      */
      invalid: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
      /**
       * Error message to be shown in case input value is invalid
       */
      errorMessage: {
        type: String,
        value: ''
      },

      /**
       * Error message icon to be shown in case input value is invalid and error message icon exist
       */
      errorMessageIcon: {
        type: String,
        value: '',
        reflectToAttribute: true
      },
      /**
      * Input pattern validation
      */
      pattern: {
        type: String,
        value: ''
      },
      /**
       * Amount set in the input from the outside.
       * @type {Number}
       */
      setAmount: { type: Number },
      /**
       * The formatted amount for the input.
       * Is the value visible in the input.
       * @type {String}
       */
      _formattedAmount: {
        type: String,
        observer: '_formattedAmountObserver'
      },
      /**
       * Output amount.
       * @type {Number}
       */
      amount: {
        type: Number,
        notify: true
      },
      /**
       * Label text of the input
       * @type {String}
       */
      label: String,
      /**
       * Name that maps to HTML native's name attribute (useful for forms).
       * Mandadatory if there are more than one input and needs to be unique to avoid conflicts with cleave.js
       * @type {String}
       */
      name: {
        type: String,
        value: 'amount'
      },
      /**
       * If true, the element currently has focus.
       * Reflect to attribute.
       * @type {Boolean}
       */
      focused: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Control variable that indicates if input is empty
       * @type {Boolean}
       */
      isFilled: {
        type: Boolean,
        value: false,
        notify: true
      },
      /**
       * If true, the element is disabled.
       * Reflect to attribute.
       * @type {Boolean}
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If true, the element is required.
       * Reflect to attribute.
       * @type {Boolean}
       */
      required: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * The icon code of the icon-set. View documentation for the icon component
       * @type {String}
       */
      iconCode: String,
      /**
       * The icon size of the icon. View documentation for the icon component
       * @type {String}
       */
      iconSize: String,
      /**
       * Aria-label of the icon. View documentation for the icon component
       * @type {String}
       */
      iconAriaLabel: String,
      /**
       * Computed value for icon aria-label. View documentation for the icon component.
       */
      _iconAriaLabel: {
        type: String,
        computed: '_computeIconAriaLabel(iconAriaLabel, iconCode)'
      },
      /**
       * ISO 4217 code for the currency
       * @type {String}
       */
      currencyCode: String,
      /**
       * ISO 4217 code for the local currency
       * @type {String}
       */
      localCurrency: String,
      /**
       * Language for the currency
       * @type {String}
       */
      language: String,
      /**
       * Behavior function than returns the formmated currency
       * @type {String}
       */
      _currency: {
        type: String,
        computed: '_getCurrencyAsSymbol(localCurrency, currencyCode)'
      },
      /**
       * Controls the currency visibility
       * @type {Boolean}
       */
      _showCurrencies: {
        type: Boolean,
        value: false
      },
      /**
       * IF Enabled the value of the input will change to the output
       * on blur. Turning "0" into "0.00"
       * more info @see tests
       */
      autoFormat: {
        type: Boolean,
        value: false
      },
      /**
       * Stores cleave.js than formats the input
       * @type {Object}
       */
      _cleave: Object,
      /**
       * Store cursor position
       * @type {Number}
       */
      position: {
        type: Number,
        value: 0
      },
      /**
       * If true, the cursor in the following number will move a extra position
       * @type {Boolean}
       */
      addPosition: {
        type: Boolean,
        value: false
      },
      /**
       * If true, a position will be subtracted from the cursor's location
       * @type {Number}
       */
      removePosition: {
        type: Boolean,
        value: false
      },
      /**
      * Allow only positive amounts value
      */
      numeralPositiveOnly: {
        type: Boolean,
        value: false
      },
      /**
      * Limit max number of characters
      */
      max: { type: String },
      /**
       * If true, decimal value is not allowed
       */
      disableDecimal: {
        type: Boolean,
        value: false
      },
      /**
       * Optional param to add an image inside of the input
       */
      imgSrc: {
        type: String,
        value: ''
      },
      /**
       * Control variable that indicates if input is filled and whitout focus
       * @type {Boolean}
       */
      isFilledBlur: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Info message to show under the input.
       * @type {String}
       */
      infoMessage: {
        type: String,
        value: ''
      },

      /**
       * Info message icon.
       * @type {String}
       */
      infoMessageIcon: {
        type: String,
        value: ''
      },

      /**
       * Number of decimal digits
       * @type {Number}
       */
      numeralDecimalScale: {
        type: Number,
        value: 2
      },

      /**
       * Flag to control if formatting of the initial amount is not necessary
       * @type {Boolean}
       */
      setInitialDecimals: {
        type: Boolean,
        value: false
      },
      /**
       * Flag that controls the visible status of the right currency icon
       */
      showRightCurrencyIcon: {
        type: Boolean,
        value: false
      },

      /**
       * Currencies that needs specific screen readable text because the screen reader do not recognize them
       * @type {Array}
       */
      _screenReaderOnlyTextCurrencyMap: {
        type: Array,
        value: () => ([ 'PEN' ])
      },

      /**
       * Text that should read the screen reader
       * @type {String}
       */
      _screenReaderOnlyText: {
        type: String,
        computed: '_computeScreenReaderOnlyText(currencyCode, label)'
      },

      /**
       * Along with above property, this handles the internal status of icon's render
       */
      _rightCurrencyIconShown: {
        type: Boolean,
        value: false,
        computed: '_computeRightCurrencyIconShown(showRightCurrencyIcon, amount, focused, isFilled)'
      }
    };
  }
  static get observers() {
    return ['_setAmountObserver(setAmount, language)', '_autoFormatInitObserver(setInitialDecimals, amount, autoFormat)'];
  }
  /**
   * Autoformat init value
   */
  _autoFormatInitObserver(setInitialDecimals, amount, autoFormat) {
    if (setInitialDecimals === false && amount && autoFormat) {
      this._autoFormat();
      this.setInitialDecimals = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._cleave) {
      this._cleave.destroy();
    }
  }
  /**
   * Reset input
   */
  reset() {
    this.setAmount = undefined;
    this._formattedAmount = undefined;
  }

  /**
   * Returns computed extra-icon label
   * @param {String} iconAriaLabel
   * @param {String} icon
   */
  _computeIconAriaLabel(iconAriaLabel, icon) {
    return iconAriaLabel || this._formatIconAriaLabel(icon);
  }

  /**
   * Given an icon string returns the equivalent format label
   * @param {String} icon
   */
  _formatIconAriaLabel(icon) {
    return icon ? `cells-molecule-amount-input-icon-${icon.replace(':', '-')}-aria-label` : '';
  }

  /**
   * Observer for set amount. Activated when amount is set from the outside.
   * Sets _formattedAmount
   * @param {number} amount The amount than is set
   * @param {String} language The language for the currency
   */
  _setAmountObserver(amount, language) {
    if (this._isAmountValid(amount) && !!language) {
      amount = this._checksForForeingMarkDecimal(amount);
      this._formattedAmount = amount;
    } else {
      this.reset();
    }
  }
  /**
   * Handles input's right currency icon
   * @param {Boolean} showRightCurrencyIcon
   * @param {Number} amount
   * @param {Boolean} focused
   * @param {Boolean} isFilled
   */
  _computeRightCurrencyIconShown(showRightCurrencyIcon, amount, focused, isFilled) {
    return showRightCurrencyIcon && !amount ? !focused && !isFilled : false;
  }
  /**
   * Validates if the amount is valid.
   * Converts it to string.
   * @param {number} number Number to validate
   * @return {boolean} If is amount valid.
   */
  _isAmountValid(amount) {
    if (amount) {
      amount = amount.toString();
    }
    return /^-{0,1}\d*\.{0,1}\d+$/.test(amount);
  }
  /**
   * Validates if the amount is valid.
   * Converts it to string.
   * @param {number} number Number to validate
   * @return {string} amount The amount.
   */
  _checksForForeingMarkDecimal(amount) {
    var language = this.language;
    if (language) {
      var decimalMark = this._getSeparator(language);
      amount = amount.toString();
      if (decimalMark !== '.') {
        amount = amount.replace('.', decimalMark);
      }
      return amount;
    }
  }
  /**
   * Observer for formatted amount. Activated when input is filled or amount changes.
   * Formats the input.
   * Place cursor in input.
   * Stores amount, the amount without formatting.
   * Check status
   * @param {string} number Amount
   */
  _formattedAmountObserver(amount) {
    this._checksStatus(amount);
    this._checkDecimal(amount);
    this._placeCursor(amount);
    this._inicializeFormatIntput();
    this._setOutputAmount();
  }
  /**
   * Checks disableDecimal, if true allow only absolute value in input
   * @param {string} number Amount
   */
  _checkDecimal(amount) {
    if (this.disableDecimal && amount && amount.indexOf(this._getSeparator(this.language)) !== -1) {
      this._formattedAmount = amount.split(this._getSeparator(this.language))[0];
    }
  }
  /**
   * Checks amount and set status.
   * @param {string} number Amount
   */
  _checksStatus(amount) {
    this._toggleHasContentClass(true);
    if (amount) {
      this.isFilled = true;
      this._showCurrencies = true;
      this._isFilledBlur(amount);
    } else if (amount === '' || amount === undefined || amount === null) {
      this.isFilled = false;
      this._showCurrencies = this.focused;
      this._toggleHasContentClass(this.focused);
      this._isFilledBlur(amount);
    }
  }

  /**
   * Check if Control variable that indicates if input is filled and whitout focus
   * @param {number} amount The amount than is set
   */
  _isFilledBlur(amount) {
    Polymer.RenderStatus.afterNextRender(this, function() {
      this.isFilledBlur = !!(!this.focused && amount);
    });
  }

  /**
   * Stores amount, the raw amount without formatting.
   * Limits the amount to 2 decimals.
   * Fires 'amount-input-changed' event.
   * @event amount-input-changed
   * @param {number} amount The amount than is set
   */
  _setOutputAmount() {
    var inputAmount = this._cleave.getRawValue();
    var hasDecimals;
    var amountDecimal;
    if (!isNaN(inputAmount) && inputAmount !== '') {
      amountDecimal = inputAmount.indexOf('.');
      hasDecimals = amountDecimal !== -1;
      if (hasDecimals) {
        inputAmount = inputAmount.slice(0, amountDecimal + 3);
      }
      inputAmount = parseFloat(inputAmount);
    } else {
      inputAmount = undefined;
    }
    this.set('amount', inputAmount);
    this.dispatchEvent(new CustomEvent('amount-input-changed', {
      detail: inputAmount,
      bubbles: true,
      composed: true
    }));
  }
  /**
   * Set cursor position in input
   */
  _placeCursor(amount) {
    var amountLength = this.amount ? this.amount.toString().length : '';
    this.addPosition = parseInt(amountLength % 3) === 0 ? true : false;
    this.removePosition = parseInt((amountLength - 1) % 3) === 0 ? true : false;
    var initialPosition = this.$.input.selectionStart;
    if (this.position > initialPosition) {
      this.position = this.removePosition ? initialPosition - 1 : initialPosition;
    } else {
      this.position = this.addPosition ? initialPosition + 1 : initialPosition;
    }
    if (amount !== undefined) {
      setTimeout(function() {
        if (this.$.input.selectionStart !== this.$.input.value.length) {
          this.$.input.setSelectionRange(this.position, this.position);
        } else {
          this.$.input.selectionStart = this.$.input.selectionEnd = this.$.input.value.length;
        }
      }.bind(this), 0);
    }
  }
  /**
   * Inicialize cleave.js to format the input whin the correct configuration
   */
  _inicializeFormatIntput() {
    var language = this.language;
    if (this._formattedAmount && this.numeralPositiveOnly) {
      if (this._formattedAmount.indexOf('-') > -1) {
        this._formattedAmount = this._formattedAmount.replace(/^-+/, '');
      }
      if (this._formattedAmount.charAt(0) === ',') {
        this._formattedAmount = this._formattedAmount.replace(/^,+/, '0,');
      }
    }
    var options = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      numeralDecimalMark: this._getSeparator(language),
      numeralDecimalScale: this.numeralDecimalScale,
      delimiter: this._getGroupChars(language)
    };
    this._cleave = new Cleave(this.$.input, options);
  }
  /**
   * Method to focus to the input.
   */
  focus() {
    this.$.input.focus();
  }
  /**
   * Method to blur at the input.
   */
  blur() {
    this.$.input.blur();
  }
  /**
   * Handles a 'click' event on the icon.
   * Reset's the input by cleaning its content.
   * @param {event} e Event
   */
  _onIconClick() {
    this._formattedAmount = '';
    this.focus();
  }
  /**
   * Handles a 'input focus' event.
   * @param {event} e Event focus
   */
  _onInputFocus() {
    if (!this.disabled) {
      this.focused = true;
      this._checksStatus(this.amount);
      this.dispatchEvent(new CustomEvent('amount-input-focus', {
        bubbles: true,
        composed: true
      }));
    }
  }
  /**
   * Handles a 'input focus out' event.
   * @param {event} e Event focus out
   */
  _onInputFocusOut() {
    if (!this.disabled) {
      this.focused = false;
      this._checksStatus(this.amount);
      this.dispatchEvent(new CustomEvent('amount-input-focus-out', {
        bubbles: true,
        composed: true
      }));
    }
  }
  /**
   * Formats the input value into the formatted output
   * @TODO: Spanish from Spain support.
   */
  _autoFormat() {
    if (!this._formattedAmount) {
      return;
    }

    var stringNumber = isFinite(this._formattedAmount) ? this._formattedAmount.toString() : this._formattedAmount;

    let noCommas = stringNumber.replace(/,/g, '');
    const decimalSeparator = this._getSeparator(this.language);
    const thousandsSeparator = this._getGroupChars(this.language);
    if (decimalSeparator === ',') {
      noCommas = stringNumber.replace(/\./g, '').replace(/,/, '.');
    }

    const formattedAmountMatcher = new RegExp('/^(-?)(\\d{0,3}' + thousandsSeparator + ')*\\d{1,3}\\' + decimalSeparator + '\\d{0,' + this.numeralDecimalScale + '}$|^$/');
    const noCommasAmountMatcher = new RegExp('(-?)(\\d*)(.?)(\\d{0,' + this.numeralDecimalScale + '})$');

    if (!formattedAmountMatcher.test(this._formattedAmount)) {
      var formattedAmount = noCommas.replace(noCommasAmountMatcher, function(full, isNeg, integer, separator, decimals) {
        var formattedInt = integer[integer.length - 1];
        while (decimals.length < this.numeralDecimalScale) {
          decimals += '0';
        }
        for (var intX = integer.length - 2, jx = 0; intX >= 0; intX--) {
          if (++jx % 3 === 0) {
            formattedInt = integer[intX] + ',' + formattedInt;
          } else {
            formattedInt = integer[intX] + formattedInt;
          }
        }
        return isNeg + (integer.length === 0 ? '0' : formattedInt) + (decimals.length ? (separator || '.') : '') + decimals;
      }.bind(this));

      if (decimalSeparator === ',') {
        formattedAmount = formattedAmount.replace(/\./, '#').replace(/,/g, '.').replace(/#/, ',');
      }

      this._formattedAmount = formattedAmount;
    }
  }
  /**
   * Handles a 'input blur' event.
   * @param {event} e Event blur
   */
  _onInputBlur(e) {
    e.preventDefault();
    if (this.autoFormat) {
      this._autoFormat();
      setTimeout(() => this.blur());
    }
    this.focused = false;
    this._checksStatus(this.amount);
    this.dispatchEvent(new CustomEvent('dispatched-blur', {
      bubbles: true,
      composed: true
    }));
  }
  /**
   * Handles a 'input focusout' event.
   * @param {event} e Event blur
   */
  _onFocusOut(e) {
    e.preventDefault();
    this.focused = false;
    this.dispatchEvent(new CustomEvent('dispatched-focus', {
      bubbles: true,
      composed: true
    }));
  }
  /**
   * Toggle the has-content css class in the input
   * @param {Boolean} hasContent Toggle class
   */
  _toggleHasContentClass(hasContent) {
    this.classList.toggle('has-content', hasContent);
    this.$.input.classList.toggle('has-content', hasContent);
  }

  /**
   * Returns the text that should be read by the screen reader
   * @param {String} currencyCode
   * @param {String} label
   */
  _computeScreenReaderOnlyText(currencyCode, label) {
    const isAvailable = this._screenReaderOnlyTextCurrencyMap.includes(currencyCode);
    const amountTextKey = `${this._getTranslationKeyForCurrency(currencyCode)}-complete`;
    const translatedText = this.t(amountTextKey, `__${currencyCode} amount__`);
    return isAvailable ? translatedText : label;
  }

  /**
   * Return correct class based on img param
   * @param {Boolean} imgSrc If input contains img
   */
  _getInputClasses(imgSrc) {
    return imgSrc ? 'text-field input-img' : 'text-field';
  }
  /**
   * Dispatch event on image click
   * @param {event} e Click event
   */
  _handleImgClick(e) {
    this.dispatchEvent(new CustomEvent('image-click', {
      bubbles: true,
      composed: true
    }));
  }

  _showErrorMessage(invalid) {
    return invalid && (this.errorMessage || this.errorMessageIcon);
  }

  /**
   * Method that show a message if exists infoMessage property. Also hide message if the input has the invalid state.
   * @param {String} infoMessage
   * @param {Boolean} invalid
   * @return {Boolean}
   */
  _showInfoMessage(infoMessage, invalid) {
    return !invalid && (infoMessage.length > 0) && (!!infoMessage.trim());
  }
}
window.customElements.define(CellsMoleculeAmountInput.is, CellsMoleculeAmountInput);
