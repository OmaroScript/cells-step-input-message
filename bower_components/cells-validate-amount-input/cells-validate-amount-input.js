{
  /**
    `<cells-validate-amount-input>` Description.

    Example:
    ```html
    <cells-validate-amount-input
      currency-code="PEN"
      local-currency="PEN"
      language="es"
      name="unique-name"
      icon-size="16"
    ></cells-validate-amount-input>
    ```

    More examples of all different uses with different validations can be found on demo page.

    ## Description

    This component has a numeric input with a currency so that the user can enter an amount.

    A currency selector can be set by setting a *flag-image*.

    This component also validates the amount the user inputs against certain parameters:
    * A minimum.
    * A maximum.
    * Multiple of a number.
    * User available balance.

    When validating against minimum and maximum, both error messages can be set, in order to set the same error instead of distinguishing between an amount below minimum or above
    maximum. With this parameter, both errors will be the same.

    There is also an *error-prefix* that can be set in order to have different error messages in different operatives.

    ### Behavior

    The behavior of the input and the info/error messages has been validated with UX and must have the following behavior. Any modification of this behavior should be validated
    against all UX teams:

    When input is empty:
    * info message is shown (if set)
    * button is disabled

    Validations made on blur:
    * Min, max, multiple.

    Validations made on key press (when amount changes):
    * User balance.

    ### Error messages

    #### Priority
    1. User balance
    2. Min/max
    3. Multiple

    #### Error message keys
    Error message keys depend on error type. This way, all possible error keys would be:
    * `${errorPrefix}`-error-min
    * `${errorPrefix}`-error-max
    * `${errorPrefix}`-error-multiple
    * `${errorPrefix}`-error-user-balance

    ## Styling

    The following custom properties and mixins are available for styling:

    ### Custom Properties
    | Custom Property                        | Selector | CSS Property     | Value              |
    | -------------------------------------- | -------- | ---------------- | ------------------ |
    | --cells-fontDefault                    | :host >  | font-family      | sans-serif         |
    | --cells-validate-amount-input-error-bg | :host >  | background-color | --bbva-white-coral |
    ### @apply
    | Mixins                                             | Selector | Value |
    | -------------------------------------------------- | -------- | ----- |
    | --cells-validate-amount-input-currency-selector    |          | {}    |
    | --cells-validate-amount-input-limited-amount-input |          | {}    |
    | --cells-validate-amount-input-amount-container     |          | {}    |


    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  /* eslint new-cap: [2, {"capIsNewExceptions": ["AmountBehavior"]}] */
  class CellsValidateAmountInput extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior ], CellsBehaviors.AmountBehavior(Polymer.Element)) {
    static get is() {
      return 'cells-validate-amount-input';
    }

    static get properties() {
      return {
        /**
        * Amount set in the input from the outside.
        */
        setAmount: {
          type: Number,
          observer: '_validateFirstAmount'
        },
        /**
         * Output amount.
         * Not visible
         */
        amount: {
          type: Number,
          notify: true
        },
        /**
        * Input pattern validation
        */
        pattern: {
          type: String
        },
        /**
         * Allow only positive numbers in amount input
         */
        numeralPositiveOnly: {
          type: Boolean,
          value: false,
        },
        /**
         * Limit max characters in amount input
         */
        maxChars: {
          type: Number,
        },
        /**
         * Name required in amount component
         * Mandatory and needs to be unique to avoid conflicts with cleave.js
         */
        name: {
          type: String,
          value: 'enterAmount'
        },
        /**
         * Language for the currency
         */
        language: {
          type: String
        },
        /**
         * ISO 4217 code for the currency
         */
        currencyCode: {
          type: String,
        },
        /**
         * ISO 4217 code for the local currency
         */
        localCurrency: {
          type: String
        },
        /**
         * initial currency value before to be changed
         */
        initialCurrency: {
          type: String
        },
        /**
         * The icon size of the icon displayed on info and error messages. View documentation for the icon component
         */
        iconSize: {
          type: String
        },
        /**
         * When setted, the amount entered should be a multiple of this number
         */
        multiple: {
          type: Number
        },
        /**
        * Hide continue button
        */
        hideContinueBtn: {
          type: Boolean,
          value: false
        },
        /**
         * Image to show in cells-molecule-amount-input component
         */
        image: {
          type: String
        },
        /**
         * Hide select-modal selector icon
         */
        hideSelectorIcon: {
          type: Boolean
        },
        /**
         * Image to place inside amount input
         */
        amountImage: {
          type: String,
        },
        /**
         * Label to show as placeholder inside amount-input
         */
        label: {
          type: String,
          value: 'cells-validate-amount-input-amount'
        },
        /**
         * Info message to show below amount input. Can be used with ${min} ${max} ${userBalance} ${multiple} ${_userRemainingBalance}
         */
        infoMessage: {
          type: String,
        },
        /**
         * Already translated info message with amounts filled inside literal
         */
        _computedInfoMessage: {
          type: String,
          computed: 'computeInfoMessage(infoMessage, _allAmounts, amount, remainingInfoMessage, hideInfoMessage)',
        },
        /**
         * Hide info message
         */
        hideInfoMessage: {
          type: Boolean,
          value: false,
        },
        /**
         * Hide amount decimals in info/error messages
         */
        hideDecimalsMessage: {
          type: Boolean,
          value: false
        },
        /**
         * Max limit to validate amount
         */
        max: {
          type: Number,
        },
        /**
         * Min limit to validate amount
         */
        min: {
          type: Number,
        },
        /**
         * User Balance to validate amount input and calculate user remaining balance after the input
         */
        userBalance: {
          type: Number,
        },
        /**
         * Auto calculated remaining balance with user balance and amount input
         */
        _userRemainingBalance: {
          type: Number,
          computed: '_calculateRemaining(amount, userBalance)'
        },
        /**
         * Auto calculated boolean indicating if amount is valid depending on limits/balance
         */
        _valid: {
          type: Boolean,
          notify: true
        },
        /**
         * Negation of `_valid` to comply with cells inputs `invalid` property
         */
        invalid: {
          type: Boolean,
          computed: '_setInvalid(_valid)',
          notify: true,
          reflectToAttribute: true
        },
        /**
         * Indicates if continue button should be enabled
         */
        _buttonIsEnabled: {
          type: Boolean,
          value: false,
        },
        /**
         * Auto calculated object containing all amounts introduced, to correctly format them and use them in info/error messages
         */
        _allAmounts: {
          type: Object,
          computed: 'computeAllAmounts(min, max, multiple, userBalance, _userRemainingBalance, localCurrency, currencyCode, language, hideDecimalsMessage, spaceCurrency)'
        },
        /**
         * Error message
         */
        errorMessage: {
          type: String,
        },
        /**
         * Already translated error message with amounts filled inside literal
         */
        _computedErrorMessage: {
          type: String,
          computed: 'computeErrorMessage(errorMessage, _allAmounts)',
        },
        /**
         * Prefix to include in error messages. This way every operative can have different keys for same error validation messages.
         */
        errorPrefix: {
          type: String,
          value: 'cells-validate-amount-input'
        },
        /**
         * When user sets a remainingInfoMessage, user can see his remaining balance with a different message when entering an amount
         */
        remainingInfoMessage: {
          type: String,
        },
        /**
         * If true, the element is disabled
         */
        disabled: {
          type: Boolean
        },
        /**
         * Event dispatched on validate button pressed
         */
        buttonEventName: {
          type: String,
          value: 'continue-pressed'
        },
        /**
         * Event dispatched on amount changed pressed
         */
        amountChangedEventName: {
          type: String,
          value: 'amount-changed-on-blur'
        },

        /**
         * Default class set in cells-molecule-amount-input
        */
        defaultAmountClasses: {
          type: String,
          value: 'limited-amount-input'
        },
        /**
         * Class set in cells-molecule-amout-input
         */
        amountClasses: {
          type: String,
          value: ''
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
         * IF Enabled the value of the input will change to the output
         * on blur. Turning "0" into "0.00"
         * @type {Boolean}
         */
        autoFormat: {
          type: Boolean,
          value: false
        },
        /**
         * Text label used when a custom message is needed at the error message
         * @type {String}
         */
        customErrorMessage: {
          type: String,
          value: ''
        },
        /*
         * If true, deny the insert of decimals
         * @type {Boolean}
         */
        disableDecimal: {
          type: Boolean,
          value: false
        },
        /**
         * Text label used when a custom message is needed at the error message on min amount
         * @type {String}
         */
        customErrorMessageMin: {
          type: String,
          value: ''
        },
        /**
         * Text label used when a custom message is needed at the error message on max amount
         * @type {String}
         */
        customErrorMessageMax: {
          type: String,
          value: ''
        },
        /**
         * If enabled will use _validate on amount-input-changed instead of __validateOnAmountChanged
         * @type {Boolean}
         */
        validateOnInputChange: {
          type: Boolean,
          value: false
        },
        /**
         * Flag that handles the right currency icon of the input
         */
        showInputRightCurrencyIcon: {
          type: Boolean,
          value: false
        },
        /**
         * if true, currency space appears
         * @type {Boolean}
         */
        spaceCurrency: {
          type: Boolean,
          value: false
        },
        /**
         * disable validate input on focus out
         * @type {Boolean}
         */
        disableValidateOnFocusOut: {
          type: Boolean,
          value: false
        },
        /**
         * disable validate input on blur
         * @type {Boolean}
         */
        disableValidateOnBlur: {
          type: Boolean,
          value: false
        },
        /**
         * Input type config
         */
        type: {
          type: String,
          value: ''
        },
        /**
        * Input mode config
        */
        inputMode: {
          type: String,
          value: ''
        }
      };
    }

    static get observers() {
      return [
        '__setButtonEnabled(_valid, amount)'
      ];
    }

    /**
     * Resets this enterAmountInput's input value.
     */
    reset() {
      this.shadowRoot.querySelector('#enterAmountInput').reset();
    }

    /**
     * Validates amount with every condition set
     * @event amount-changed-empty
     */
    _validate(evt) {
      const type = this.get('type', evt);
      if ((type === 'focusout' && this.disableValidateOnFocusOut) ||
      (type === 'blur' && this.disableValidateOnBlur)) {
        return;
      }
      if (!this.amount && this.amount !== 0) {
        this._fireEvent('amount-changed-empty');
        this._valid = true;
        return;
      }
      const validData = [
        this.__validateUserBalance(this.userBalance, this.amount, this.errorPrefix),
        this.__validateMinAndMax(this.amount, this.min, this.max, this.errorPrefix),
        this.__validateMultiple(this.amount, this.multiple, this.errorPrefix),
      ].find(data => data && !data.valid);

      const { valid, errorMessage } = validData ? validData : { valid: true, errorMessage: null };

      this._valid = valid;
      this.errorMessage = this.customErrorMessage || errorMessage;

      if (type !== 'firstValidate') {
        this._fireEvent(this.amountChangedEventName, {amount: this.amount,
          isValid: this._valid
        });
      }
    }

    /**
     * Validation every time amount changed
     */
    __validateOnAmountChanged(evt) {
      if (this.validateOnInputChange) {
        this._validate();
        return;
      }

      const amount = evt.detail;
      if (!amount && amount !== 0) {
        this._valid = true;
        this.errorMessage = null;
        return;
      }
      const {valid, errorMessage} = this.__validateUserBalance(this.userBalance, amount, this.errorPrefix);
      this._valid = valid;
      this.errorMessage = errorMessage;
    }

    /**
     * Checks if user has enough balance for the amount user has introduced
     * @param {number} userBalance
     * @param {number} amount
     * @param {String} errorPrefix
     */
    __validateUserBalance(userBalance, amount, errorPrefix) {
      const valid = userBalance && amount ? amount <= userBalance : true;
      const errorMessage = valid ? null : `${errorPrefix}-error-user-balance`;
      return {
        valid,
        errorMessage,
      };
    }

    /**
     * Checks if a multiple is set and amount introduced is multiple of that number
     * @param {Number} amount
     * @param {Number} multiple
     * @param {String} errorPrefix
     */
    __validateMultiple(amount, multiple, errorPrefix) {
      const valid = multiple ? amount % multiple === 0 : true;
      const errorMessage = valid ? null : `${errorPrefix}-error-multiple`;
      return {
        valid,
        errorMessage,
      };
    }

    /**
     * Validates amount input with mix and max
     * @param {Number} amount
     * @param {Number} min
     * @param {Number} max
     * @param {String} errorPrefix
     */
    __validateMinAndMax(amount, min, max, errorPrefix) {
      if (min || max) {
        const validatedData = [
          this.__validateMin(amount, min, errorPrefix),
          this.__validateMax(amount, max, errorPrefix),
        ].find(data => data && !data.valid);
        return validatedData ? validatedData : { valid: true };
      }
    }

    /**
     * Validates if amount is below max
     * @param {Number} amount
     * @param {Number} max
     * @param {String} errorPrefix
     */
    __validateMax(amount, max, errorPrefix) {
      const valid = max ? (amount <= max) : true;
      const errorMessage = valid ? null : (this.customErrorMessageMax || `${errorPrefix}-error-max`);
      return {
        valid,
        errorMessage,
      };
    }

    /**
     * Validates if amount is above min
     * @param {Number} amount
     * @param {Number} min
     * @param {String} errorPrefix
     */
    __validateMin(amount, min, errorPrefix) {
      const valid = min ? (amount >= min) : true;
      const errorMessage = valid ? null : (this.customErrorMessageMin || `${errorPrefix}-error-min`);
      return {
        valid,
        errorMessage,
      };
    }

    /**
     * Calculates remaining user balance
     * @param {Number} amount
     * @param {Number} userBalance
     */
    _calculateRemaining(amount, userBalance) {
      return amount ? userBalance - amount : userBalance;
    }

    /**
     * Generates an object containing all formated amounts available for translation function in locales.
     * @param {Number} min
     * @param {Number} max
     * @param {Number} multiple
     * @param {Number} userBalance
     * @param {Number} _userRemainingBalance
     * @param {String} localCurrency
     * @param {String} language
     * @param {Boolean} hideDecimalsMessage
     * @param {Boolean} spaceCurrency
     */
    computeAllAmounts(min, max, multiple, userBalance, _userRemainingBalance, localCurrency, currencyCode, language, hideDecimalsMessage, spaceCurrency) {
      return ({
        _max: this.getFormattedAmount(max, currencyCode, localCurrency, language, !hideDecimalsMessage, true, true, spaceCurrency),
        _min: this.getFormattedAmount(min, currencyCode, localCurrency, language, !hideDecimalsMessage, true, true, spaceCurrency),
        _userBalance: this.getFormattedAmount(userBalance, currencyCode, localCurrency,  language, !hideDecimalsMessage, true, true, spaceCurrency),
        _remainingBalance: this.getFormattedAmount(_userRemainingBalance, currencyCode, localCurrency, language, !hideDecimalsMessage, true, true, spaceCurrency),
        _multiple: multiple,
      });
    }

    /**
     * Translates the info message set, this is made here because we have all amounts available for translation
     * @param {String} infoMessage
     * @param {Object} _allAmounts
     * @param {Number} amount
     * @param {String} remainingInfoMessage
     */
    computeInfoMessage(infoMessage, _allAmounts, amount, remainingInfoMessage, hideInfoMessage) {
      if (hideInfoMessage) {
        return '';
      }
      if (amount !== undefined && remainingInfoMessage) {
        return this.t(remainingInfoMessage, '', _allAmounts);
      }
      return this.t(infoMessage, '', _allAmounts);
    }

    /**
     * Translates the error message set, this is made here because we have all amounts available for translation
     * @param {String} errorMessage
     * @param {Object} _allAmounts
     */
    computeErrorMessage(errorMessage, _allAmounts) {
      return this.t(errorMessage, '', _allAmounts);
    }

    /**
     * Dispatches an event with the amount set
     * @event continue-pressed
     */
    _sendAmountOutput() {
      this._fireEvent(this.buttonEventName, this.amount);
    }

    _fireEvent(eventName, amount) {
      this.dispatchEvent(new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: amount
      }));
    }

    /**
     * Sets correct value for validate button to be enabled
     * @param {Boolean} _valid
     * @param {Number} amount
     */
    __setButtonEnabled(_valid, amount) {
      if (!amount) {
        this._buttonIsEnabled = false;
        return;
      }
      this._buttonIsEnabled = _valid;
    }

    /**
     * Computed the classes set in <cells-molecule-amount-input> and return concat of string params.
     * @param {String} defaultAmountClasses
     * @param {String} amountClasses
     * @returns {String}
     */
    __getAmountClasses(defaultAmountClasses, amountClasses) {
      return `${defaultAmountClasses} ${amountClasses}`;
    }

    /**
     * Negates _valid to set `invalid` value
     * @param {Boolean} _valid
     * @returns {Boolean}
     */
    _setInvalid(_valid) {
      return !_valid;
    }

    /**
     * Fires the blur after clicking enter on the keyboard
     */
    _onKeyboardEnter(event) {
      if (event.keyCode === 13) {
        this._inputBlur();
      }
      return false;
    }

    /**
     * Function to fire blur
     */
    _inputBlur() {
      if (this.$$('#enterAmountInput')) {
        this.$$('#enterAmountInput').blur();
      }
    }

    /**
     * Validate first amount included
     */
    _validateFirstAmount(newValue, oldValue) {
      if (!oldValue && newValue !== undefined && newValue !== null) {
        this._validate({ type: 'firstValidate' });
      }
    }
  }

  window.customElements.define(CellsValidateAmountInput.is, CellsValidateAmountInput);
}
