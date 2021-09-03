{
  /**
    `<cells-step-input-message>` Description.

    Example:

    ```html
    <cells-step-input-message></cells-step-input-message>
    ```

    ## Styling
    The following custom properties and mixins are available for styling:

    ### Custom Properties
    | Custom Property     | Selector | CSS Property | Value       |
    | ------------------- | -------- | ------------ | ----------- |
    | --cells-fontDefault | :host    | font-family  |  sans-serif |
    ### @apply
    | Mixins    | Selector | Value |
    | --------- | -------- | ----- |
    | --cells-step-input-message | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  /* eslint new-cap: [2, {"capIsNewExceptions": ["CellsStateBehavior"]}] */
  class CellsStepInputMessage extends CellsBehaviors.CellsStateBehavior(
    Polymer.mixinBehaviors([CellsBehaviors.i18nBehavior, CellsBehaviors.StepBehavior, CellsBehaviors.StepFocusBehavior], Polymer.Element)
  ) {
    static get is() {
      return 'cells-step-input-message';
    }

    static get properties() {
      return {
        /**
         * Variable to set the title of the step
         * @type {String}
         */
        title: {
          type: String,
          value: 'cells-step-input-message-title',
        },
        /**
         * Variable to set the description of the step
         * @type {String}
         */
        description: {
          type: String,
          value: 'cells-step-input-message-description',
        },
        /**
         * Variable to set the description of the step
         * @type {String}
         */
        stepChangeLabel: {
          type: String,
          value: 'cells-step-input-message-step-change-label',
        },
        /**
         * Variable to set the placeholder of the input
         * @type {String}
         */
        inputPlaceholder: {
          type: String,
          value: 'cells-step-input-message-placeholder-input',
        },
        /**
         * Variable to set the description of the icon-message
         * @type {String}
         */
        infoMessageDescription: {
          type: String,
        },
        infoMessageType: {
          type: String,
          value: 'info',
        },
        /**
         * Variable to set the confirm button text
         * @type {String}
         */
        continueButton: {
          type: String,
          value: 'cells-step-input-message-continue-button',
        },
        /**
         * Variable to set the input. It can be any Number, String or Amount object
         * @type {Object}
         */
        input: {
          type: Object,
          notify: true
        },
        isAmount: {
          type: Boolean,
          value: false
        },
        language: {
          type: String,
          value: 'es-pe',
        },
        localCurrency: {
          type: String,
          value: 'PEN'
        },
        defaultCurrency: {
          type: String,
          value: 'USD'
        },
        inputLabel: {
          type: String,
          value: 'cells-step-input-message-input-label',
        },
        /**
         * Label for remaining character counter
         */
        remainingAmountText: {
          type: String,
          value: 'cells-step-input-message-remaining-amount-label',
        },

        max: {
          type: Number,
          value: null
        },
        min: {
          type: Number,
          value: null
        },
        hideDecimalsMessage: {
          type: Boolean,
          value: true
        },
        /**
         * Indicates if the component should show a skeleton before a data is set
         */
        showSkeleton: {
          type: Boolean,
          value: false,
        },
        /**
         * Amount of counter for remaining characters
         */
        _remainingAmount: {
          type: Number,
          computed: '_computeRemainingAmount(input)'
        },
        /**
         * Computed value that indicates if skeleton needs to be shown
         */
        _showSkeleton: {
          type: Boolean,
          computed: '_computeShowSkeleton(showSkeletonWithOutInputValidation, showSkeleton, input)',
        },
        /**
         * Amount shown in filled style. Needs to be different because data structure is not the same.
         */
        filledAmount: {
          type: Object,
        },
        /**
         * Text label shown in cells-key-values in filled style
         */
        filledInputLabel: {
          type: String,
          value: 'cells-step-input-message-filled-input-label'
        },
        infoMessage: {
          type: String,
          value: 'cells-validate-amount-input-min-max-info-message'
        },
        /**
         * Text label to show when amount entered is invalid
         * @type {String}
         */
        errorMessage: {
          type: String,
          value: ''
        },
        amountErrorPrefix: {
          type: String,
          value: 'validate-amount'
        },
        /**
         * Icon size for cells-validate-amount-input
         * @type {String}
         */
        iconSize: {
          type: String,
          value: '24'
        },
        /**
         * Flag for show the filled text block or inline
         * @type {Boolean}
         */
        isFilledTextBlock: {
          type: Boolean,
          value: false
        },
        /**
         * Computed value for cells-key-values in filled section
         * @type {String}
         */
        _filledTextInline: {
          type: String,
          computed: '_computedFilledTextInline(isFilledTextBlock)'
        },
        /**
         * Size for the amount filled
         * @type {String}
         */
        filledAmountSize: {
          type: String,
          value: ''
        },
        /**
         * Maximum number of chars
         */
        maxChars: {
          type: String,
        },
        /**
         * Icon for cells-molecule-input
         */
        icon: {
          type: String,
          value: 'coronita:close'
        },
        /**
         * Icon error for cells-molecule-input
         */
        iconErrorMessage: {
          type: String,
          value: 'coronita:alert'
        },
        /**
         * Label to input without reason
         */
        withoutReason: {
          type: String,
          value: 'cells-cancel-card-input-message-without-reason'
        },
        /**
         * Indicates if the validation includes the input
         */
        showSkeletonWithOutInputValidation: {
          type: Boolean,
          value: false
        },
        /**
         * Indicates the type of input
         */
        _inputType: {
          type: String,
          computed: '_computeInputType(isAmount)'
        },
        /**
         * Boolean to indicates if is necesary to show remaining chars
         */
        showRemaining: {
          type: Boolean,
          value: false
        },
        /**
         * Boolean to custom reset
         */
        resetState: {
          type: Boolean,
          value: false
        },
        /**
         * Flag to enable/disable the insertion of decimals
         * @type {Boolean}
         */
        disableDecimal: {
          type: Boolean,
          value: false
        },
        /**
         * If enabled the amount will be validate while typing
         * @type {Boolean}
         */
        validateOnInputChange: {
          type: Boolean,
          value: false
        },
        /**
         * Text to show when the amount entered is less than min value
         * @type {String}
         */
        errorMessageMin: {
          type: String,
          value: ''
        },
        /**
         * Text to show when the amount entered is more than max value
         * @type {String}
         */
        errorMessageMax: {
          type: String,
          value: ''
        },
        /**
         * Class to apply when component is filled and it has not amount
         */
        filledTextValueClass: {
          type: String,
          value: 'cells-step-input-message__filled__value'
        },
        /**
         * Boolean to show icon help
         * @type {Boolean}
         */
        showHelpIcon: {
          type: Boolean,
          value: false
        },
        /**
         * Flag to show additional info of offer
         * @type {Boolean}
         */
        additionalInfo: {
          type: Boolean,
          value: false
        },
        /**
         * Flag to show operations list
         * @type {Boolean}
         */
        listFile: {
          type: Boolean,
          value: false
        },
        /**
         * Operations list array
         * @type {Array}
         */
        listFileInfo: {
          type: Array,
          value: () => []
        },
        /**
         * Label to title of cells-text-description
         * @type {String}
         */
        titleTextDescription: {
          type: String,
          value: ''
        },
        /**
         * Label to main description of cells-text-description
         * @type {String}
         */
        mainTextDescription: {
          type: String,
          value: ''
        },
        /**
         * Main class to cells-step component
         * @type {String}
         */
        stepClass: {
          type: String,
          value: 'cells-step-input-message__step'
        },
        /**
         * Parameter to allow displaying the remaining information of the icon-message
         * @type {Boolean}
         */
        showSkeletonRemaining: {
          type: Boolean,
          value: false
        },
        /**
         * Parameter to allow text input without being an amount
         * @type {Boolean}
         */
        invalidInputValue: {
          type: Boolean,
          value: false
        },
        /**
         * Parameter to manually disable the continue button from only text input
         * @type {Boolean}
         */
        manualDisableButtonValue: {
          type: Boolean,
          value: false
        },
        /**
         * Text from label cells-key-values component
         * @type {String}
         */
        infoAlertKeyText: {
          type: String,
          value: 'cells-step-input-message-curp-alert'
        },
        /**
         * Parameter to show icon message from cells-step component
         * @type {Boolean}
         */
        showIconMessage: {
          type: Boolean,
          value: false
        },
        /**
         * Flag to show an additional link
        * @type {Boolean}
        */
        additionalLink: {
          type: Boolean,
          value: false
        },
        /**
         * Text to display in the additional link
        * @type {String}
        */
        additionalLinkLabel: {
          type: String,
          value: 'cells-step-input-message-curp-security-message'
        },
        /**
         * Property to only read the input information
         * @type {Boolean}
         */
        readOnly: {
          type: Boolean,
          value: false
        },
        /**
         * Regex to validate the text input depending on the case of each one
         * @type {Object}
         */
        regexValidationFromInputText: {
          type: Object
        },
        /**
         * Property to change the color of the icon in the alert info
         * @type {String}
         */
        iconAlertColor: {
          type: String,
          value: 'color-light-blue'
        }
      };
    }

    reset() {
      this.input = this.showRemaining ? '' : undefined;
      if (this.resetState) {
        this._setState({
          input: this.input
        });
      }
    }

    _computeInputType(isAmount) {
      return isAmount ? 'number' : 'text';
    }

    /**
     * This step is always valid when input is just a number and not an amount. If it is an amount it must be filled.
     * There is also the option to validate when the input is text, it is for specific validation or a document.
     */
    isValid() {
      let returnValidation;
      if (this.manualDisableButtonValue) {
        returnValidation = this.input !== undefined && this.input.length === this.maxChars && this.input.match(this.regexValidationFromInputText);
        this.invalidInputValue = returnValidation === null;
      } else {
        returnValidation = this.isAmount ? !!(this.input || {}).amount : true;
      }
      return returnValidation;
    }


    /**
     * Dispatches event to go to the next step
     */
    _onContinue(ev) {
      let detail = this.input;
      if (this.isAmount) {
        ev.stopPropagation();
        detail.amount = ev.detail;
      }
      if (detail === '') {
        detail = this.t(this.withoutReason);
      }
      this._setState({
        input: detail
      });
      this.dispatchEvent(new CustomEvent('continue-pressed', {
        bubbles: true,
        composed: true,
        detail: detail
      }));
    }

    /**
     * If showSkeleton is set, must return true until an input is set.
     * @param {Boolean} showSkeleton
     * @param {Object} input
     */
    _computeShowSkeleton(showSkeletonWithOutInputValidation, showSkeleton, input) {
      return showSkeletonWithOutInputValidation ? showSkeleton : showSkeleton && input === undefined;
    }

    /**
     * Return remaining amount
     * @param {String} input text
     * @return {Number}
     */
    _computeRemainingAmount(input) {
      if (this.showRemaining) {
        return (Number(this.maxChars) - input.length);
      }
    }

    /**
     * Return remaining amount
     * @return {String}
     */
    _inputValueFilled() {
      return this.input;
    }

    /**
     * Receives the event with the changed amount and updates the filledAmount
     * @param {Event} event
     */
    _computeAmountSet(event) {
      const { detail: amount } = event;
      const currency = ((this.input || {}).currency || this.defaultCurrency);
      this.set('input', { amount, currency });
      this.set('filledAmount', {
        amount,
        currencyCode: currency,
        currency,
        class: this.filledAmountSize
      });
    }

    focusOut() {
      this._resetStateToProps();
    }

    /**
     * If isFilledTextBlock is true, the filled text show in block.
     * @param {Boolean} isFilledTextBlock
     * @return {String} class type
     */
    _computedFilledTextInline(isFilledTextBlock) {
      return !isFilledTextBlock ? 'inline' : '';
    }

    /**
     * Manage input value and dispatches event change-step-state
     */
    _onChangePressed() {
      if (this.input === this.t(this.withoutReason)) {
        this.input = '';
      }
      this.dispatchEvent(new CustomEvent('change-step-state', {
        detail: this,
        bubbles: true,
        composed: true
      }));
    }

    /**
     * Get remaning amount text
     * @return {String}
     */
    _getRemainingAmountText(remainingAmount, remainingAmountText) {
      return `${remainingAmount} ${this.t(remainingAmountText)}`;
    }

    /**
     * Dispatches event to show additional link
     */
    onShowLink() {
      this.dispatchEvent(new CustomEvent('show-link-list-file'), {
        bubbles: true,
        composed: true
      });
    }
  }

  customElements.define(CellsStepInputMessage.is, CellsStepInputMessage);
}