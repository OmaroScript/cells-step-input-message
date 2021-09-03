const amountBehavior = CellsBehaviors.AmountBehavior;

/**
 * `<cells-atom-amount>` is a component formatting an amount and its currency code into different combinations of sizes.
 *
 * If amount is a negative value, .negative class is added to give a visual cue.
 *
 * Amount can be abbreviated if a scale is indicated. E.g.: 1.240.000 can be abbreviated as
 * 1.24M if scale 6 is set and if is present (in abbreviations property).
 *
 * Example:
 *
 * ```html
 * <cells-atom-amount
 *   amount="6423525.45"
 *   currency-code="EUR"
 *   local-currency="USD"
 *   language="en">
 * </cells-atom-amount>
 * ```
 *
 * ## Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * ### Custom Properties
 *
 * | Custom Property                                             | Selector                                     | CSS Property                      | Value                                                              |
 * | ----------------------------------------------------------- | -------------------------------------------- | --------------------------------- | ------------------------------------------------------------------ |
 * | --cells-atom-amount-default-color                           | :host                                        | color                             | inherit                                                            |
 * | --cells-fontDefault                                         | :host                                        | font-family                       | sans-serif                                                         |
 * | --cells-atom-amount-font-size                               | :host                                        | font-size                         | inherit                                                            |
 * | --cells-atom-amount-font-size__currency                     | :host .currency                              | font-size                         | inherit                                                            |
 * | --cells-atom-amount-margin-right__currency                  | :host .currency--left                        | margin-right                      | unset                                                              |
 * | --cells-atom-amount-color                                   | :host([class*=amount-])                      | --cells-atom-amount-default-color | ![#121212](https://placehold.it/15/121212/000000?text=+) #121212   |
 * | --cells-atom-amount-margin__currency                        | :host([class*="amount-"]) .currency--right   | margin-left                       | unset                                                              |
 * | --cells-atom-amount-font-size__currency                     | :host([class*="amount-"]) .fractional        | font-size                         | 0.875rem                                                           |
 * | --cells-atom-amount-margin-left-integer                     | :host([class*="amount-"]) .integer           | margin-left                       | 0.125rem                                                           |
 * | --cells-atom-amount-margin-right-integer                    | :host([class*="amount-"]) .integer           | margin-right                      | 0.125rem                                                           |
 * | --cells-atom-amount-margin__currency                        | :host([class*=currency-]) .currency--left    | margin-right                      | unset                                                              |
 * | --cells-atom-amount-margin__currency                        | :host([class*=currency-]) .currency--right   | margin-left                       | unset                                                              |
 * | --cells-atom-amount-font-size--l                            | :host(.currency-l)                           | --cells-atom-amount-font-size     | 1.125rem                                                           |
 * | --cells-atom-amount-font-size__currency--l                  | :host(.currency-l)                           | currency                          | 0.75rem                                                            |
 * | --cells-atom-amount-large-font-size                         | :host(.amount-large)                         | --cells-atom-amount-font-size     | 1.25rem                                                            |
 * | --cells-atom-amount-xl-font-size                            | :host(.amount-xl)                            | --cells-atom-amount-font-size     | 1.25rem                                                            |
 * | --cells-atom-amount-xl-font-size                            | :host(.amount-xl) .fractional                | font-size                         | 1.25rem                                                            |
 * | --cells-atom-amount-font-size--xl                           | :host(.currency-xl)                          | --cells-atom-amount-font-size     | 1.25rem                                                            |
 * | --cells-atom-amount-font-size__currency--xl                 | :host(.currency-xl)                          | currency                          | 0.75rem                                                            |
 * | --cells-atom-amount-font-size--xxxl                         | :host(.currency-xxxl)                        | --cells-atom-amount-font-size     | 1.5rem                                                             |
 * | --cells-atom-amount-font-size__currency--xxxl               | :host(.currency-xxxl)                        | currency                          | 0.75rem                                                            |
 * | --cells-atom-amount-font-size--xxxxl                        | :host(.currency-xxxxl)                       | --cells-atom-amount-font-size     | 2rem                                                               |
 * | --cells-atom-amount-font-size__currency--xxxxl              | :host(.currency-xxxxl)                       | currency                          | 1.25rem                                                            |
 * | --cells-atom-amount-huge-font-size                          | :host(.amount-huge)                          | --cells-atom-amount-font-size     | 2.25rem                                                            |
 * | --cells-atom-amount-huge-decimals-font-size                 | :host(.amount-huge-decimals)                 | --cells-atom-amount-font-size     | --cells-atom-amount-huge-font-size                                 |
 * | --cells-atom-amount-huge-decimals-currency-left-padding-top | :host(.amount-huge-decimals) .currency--left | padding-top                       | 0                                                                  |
 * | --cells-atom-amount-huge-decimals-fractional-font-size      | :host(.amount-huge-decimals) .fractional     | font-size                         | --cells-atom-amount-huge-font-size                                 |
 * | --cells-atom-amount-font-size--xxxxxl                       | :host(.currency-xxxxxl)                      | --cells-atom-amount-font-size     | 3rem                                                               |
 * | --cells-atom-amount-font-size__currency--xxxxxl             | :host(.currency-xxxxxl)                      | currency                          | 1.75rem                                                            |
 * | --cells-atom-amount-font-size--l                            | :host(.currency-s)                           | --cells-atom-amount-font-size     | 1.125rem                                                           |
 * | --cells-atom-amount-font-size__currency--s                  | :host(.currency-s)                           | currency                          | 1rem                                                               |
 * | --cells-atom-amount-font-size                               | :host(.amount-big-decimals) .fractional      | font-size                         | 1.125rem                                                           |
 * | --cells-atom-amount-font-size__currency                     | :host(.amount-big-decimals) .currency        | font-size                         | 0.875rem                                                           |
 * | --cells-atom-amount-large-second-font-size                  | :host(.amount-large-second)                  | font-size                         | 1.25rem                                                            |
 * | --bbva-500                                                  | :host(.amount-large-second)                  | color                             | ![#666666](https://placehold.it/15/666666/000000?text=+) #66666659 |
 * | --cells-atom-amount-span-currency-currency-left             | span.currency.currency--left                 | font-size                         | 0.813rem                                                           |
 *
 * ### @apply
 *
 * | Mixins                                          | Selector                                           | Value |
 * | ----------------------------------------------- | -------------------------------------------------- | ----- |
 * | --cells-atom-amount                             | :host                                              | {}    |
 * | --cells-atom-amount-minus                       | :host .minus                                       | {}    |
 * | --cells-atom-amount-minus-left                  | :host .minus--left                                 | {}    |
 * | --cells-atom-amount-minus-right                 | :host .minus--right                                | {}    |
 * | --cells-atom-amount-integer                     | :host .integer                                     | {}    |
 * | --cells-atom-amount-fractional                  | :host .fractional                                  | {}    |
 * | --cells-atom-amount-separator                   | :host .separator                                   | {}    |
 * | --cells-atom-amount-currency                    | :host .currency                                    | {}    |
 * | --cells-atom-amount-currency-left               | :host .currency--left                              | {}    |
 * | --cells-atom-amount-currency-right              | :host .currency--right                             | {}    |
 * | --cells-atom-amount-abbreviation                | :host .abbreviation                                | {}    |
 * | --cells-atom-amount-negative                    | :host(.negative)                                   | {}    |
 * | --cells-atom-amount-wrapper                     | .amount-wrapper                                    | {}    |
 * | --cells-fontDefaultNormal                       | :host([class*=amount-])                            | {}    |
 * | --cells-atom-amount-class-negative              | :host([class*="amount-"]).negative                 | {}    |
 * | --cells-atom-amount-large                       | :host(.amount-large)                               | {}    |
 * | --cells-atom-amount-xl                          | :host(.amount-xl)                                  | {}    |
 * | --cells-atom-amount-xl-currency                 | :host(.amount-xl) .currency                        | {}    |
 * | --cells-atom-amount-xl-fractional               | :host(.amount-xl) .fractional                      | {}    |
 * | --cells-atom-amount-xl-decimals-separator       | :host(.amount-xl) .separator                       | {}    |
 * | --cells-atom-amount-huge                        | :host(.amount-huge)                                | {}    |
 * | --cells-atom-amount-huge-currency               | :host(.amount-huge) .currency                      | {}    |
 * | --cells-atom-amount-huge-currency-left          | :host(.amount-huge) .currency--left                | {}    |
 * | --cells-atom-amount-huge-fractional             | :host(.amount-huge) .fractional                    | {}    |
 * | --cells-atom-amount-huge-decimals               | :host(.amount-huge-decimals)                       | {}    |
 * | --cells-atom-amount-huge-decimals-currency      | :host(.amount-huge-decimals) .currency             | {}    |
 * | --cells-atom-amount-huge-decimals-currency-left | :host(.amount-huge-decimals) .currency--left       | {}    |
 * | --cells-atom-amount-huge-decimals-fractional    | :host(.amount-huge-decimals) .fractional           | {}    |
 * | --cells-atom-amount-huge-decimals-integer       | :host(.amount-huge-decimals) .integer              | {}    |
 * | --cells-atom-amount-huge-decimals-separator     | :host(.amount-huge-decimals) .separator            | {}    |
 * | --cells-atom-amount-big-decimals                | :host(.amount-big-decimals)                        | {}    |
 * | --cells-atom-amount-big-decimals-fractional     | :host(.amount-big-decimals) .fractional            | {}    |
 * | --cells-atom-amount-big-decimals-currency       | :host(.amount-big-decimals) .currency              | {}    |
 * | --cells-atom-amount-big-decimals-separator      | :host(.amount-big-decimals) .separator             | {}    |
 * | --cells-atom-amount-spaced-currency             | :host(.spaced-currency)                            | {}    |
 * | --cells-atom-amount-spaced-currency             | :host(.spaced-subheader-currency)                  | {}    |
 * | --cells-atom-amount-spaced-currency-left        | :host(.spaced-currency) .currency--left            | {}    |
 * | --cells-atom-amount-spaced-currency-left        | :host(.spaced-subheader-currency) .currency--left  | {}    |
 * | --cells-atom-amount-spaced-currency-right       | :host(.spaced-currency) .currency--right           | {}    |
 * | --cells-atom-amount-spaced-currency-right       | :host(.spaced-subheader-currency) .currency--right | {}    |
 * | --cells-atom-amount-large-second                | :host(.amount-large-second)                        | {}    |
 * | --cells-atom-amount-span-currency-currency-left | span.currency.currency--left                       | {}    |
 *
 * @polymer
 * @customElement
 * @summary It formats a number into different combinations of sizes and alignments according to currency codes.
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-atom-amount.png
 */
class CellsAtomAmount extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior ], amountBehavior(Polymer.Element)) {
  static get is() {
    return 'cells-atom-amount';
  }

  static get properties() {
    return {
      /**
       * Context language
       */
      language: {
        type: String,
        value() {
          return document.documentElement.lang || 'en';
        }
      },

      /**
       * Number to split in integer, separator and fractional parts and represent
       */
      amount: {
        type: Number,
        observer: '_toggleNegativeClass'
      },

      /**
       * ISO 4217 code for the currency
       */
      currencyCode: {
        type: String,
        value: null
      },

      /**
       * ISO 4217 for the local currency.
       * A value must be provided in order to localice the currency symbols.
       */
      localCurrency: {
        type: String,
        value: null
      },

      /**
       * Scale used to display the given amount
       * e.g: 6 for Millions
       */
      scale: {
        type: Number,
        value: 0 //0 as absent value. This triggers computed properties although there is no valid value.
      },

      /**
       * Chars used as abbreviature depending on the applied scale
       */
      abbreviations: {
        type: Object,
        value: function() {
          //Values got from (http://www.statman.info/conversions/number_scales.html)
          return {
            1: 'da',
            2: 'h',
            3: 'k',
            6: 'M', //Million
            9: 'B' //Normalized is actually 'G', but this is more understandable
          };
        }
      },

      /**
       * If true, decimal part of the amount will be hidden regardless of its value.
       */
      decimalsHidden: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * If true, decimal part of the amount will be hidden if is zero.
       */
      zeroDecimalsHidden: {
        type: Boolean,
        value: false
      },

      /**
       * If true, decimal part of the amount will be hidden if there is a trailing zero.
       */
      trailingZeroDecimalsHidden: {
        type: Boolean,
        value: false
      },

      _decimalsHidden: {
        type: Boolean,
        computed: '_computeDecimalsHidden(amount, decimalsHidden, zeroDecimalsHidden, currencyCode)'
      },

      /**
       * Returns if the amount is not valid and thus cannot be formatted.
       */
      hasError: {
        type: Boolean,
        value: false,
        readOnly: true,
        notify: true,
        reflectToAttribute: true,
        computed: '_computeHasError(amount)'
      },

      _scale: {
        type: Number,
        computed: '_setSafeScaleValue(scale)'
      },

      _abbreviation: {
        type: String,
        computed: '_computedAbbreviation(_scale, abbreviations)',
        value: '' //empty string as absent value. This triggers computed properties although there is no valid value.
      },

      _localCurrency: {
        type: String,
        computed: '_getSafeValue(localCurrency)',
        value: '' //empty string as absent value. This triggers computed properties although there is no valid value.
      },

      _currency: {
        type: String,
        computed: '_getCurrencyAsSymbol(_localCurrency, currencyCode)'
      },

      /**
       * integer part of the amount
       */
      _integer: {
        type: String
      },

      /**
       * fractional part of the amount
       */
      _fractional: {
        type: String
      },

      /**
       * separator between fractional and integer part
       */
      _separator: {
        type: String,
        computed: '_getSeparator(language)'
      },

      /**
       * Align currency symbol according to _currencyPosition
       */
      _alignRight: {
        type: Boolean,
        computed: '_isRightAligned(currencyCode, alignRight)'
      },
      /**
       * If true, force align currency symbol to right
       */
      alignRight: {
        type: Boolean,
        value: false
      },

      /**
       * Determine if '-' sign should be shown after currency symbol
       * @type {Object}
       */
      _minusAfterSymbol: {
        type: Boolean,
        computed: '_hasMinusAfterSymbol(_localCurrency)'
      },

      /**
       * Show or hide '-' <span> before currency symbol
       * @type {Boolean}
       */
      _showMinusBeforeSymbol: {
        type: Boolean,
        value: false,
        computed: '_computeShowMinusBeforeSymbol(amount, _minusAfterSymbol)'
      },

      /**
       * Show or hide '-' <span> after currency symbol
       * @type {Boolean}
       */
      _showMinusAfterSymbol: {
        type: Boolean,
        value: false,
        computed: '_computeShowMinusAfterSymbol(amount, _minusAfterSymbol)'
      },

      _abbreviationHidden: {
        type: Boolean,
        value: false
      },

      _srAmount: {
        type: String
      },

      /**
       * Define if decimals part should be shown full or truncate to two decimals
       * @type {Boolean}
       */
      showAllDecimals: {
        type: Boolean,
        value: false
      },

      /**
       * Hide the currency symbol?
       */
      withoutCurrencySymbol: {
        type: Boolean,
        value: false
      },

      /**
       * Is the left currency symbol hidden
       */
      _leftCurrencySymbolHidden: {
        type: Boolean,
        computed: '_computeLeftCurrencySymbolHidden(withoutCurrencySymbol, _alignRight)'
      },

      /**
       * Is the right currency symbol hidden
       */
      _rightCurrencySymbolHidden: {
        type: Boolean,
        computed: '_computeRightCurrencySymbolHidden(withoutCurrencySymbol, _alignRight)'
      },

      /**
       * Should display screen reader element
       */
      _showScreenReaderOnly: {
        type: Boolean,
        computed: '_computeShowScreenReaderOnly(currencyCode)'
      },

      /**
       * Currencies that needs specific screen readable text because the screen reader do not recognize them
       */
      _screenReaderOnlyTextCurrencyMap: {
        type: Array,
        value: () => (['PEN', 'ARS'])
      },

      /**
       * Text that should read the screen reader
       */
      _screenReaderOnlyText: {
        type: String,
        computed: '_computeScreenReaderOnlyText(amount, currencyCode)'
      }
    };
  }

  static get observers() {
    return [
      '_setAmountParts(amount, language, _abbreviation, showAllDecimals)',
      '_srAmountObserver(amount, language, _abbreviation, _currency, _localCurrency, currencyCode, decimalsHidden)'
    ];
  }

  _setSafeScaleValue(scale) {
    //Convert into an integer if it isn't
    return (scale % 1 !== 0) ? (scale |= 0) : scale; //eslint-disable-line no-bitwise
  }

  _computedAbbreviation(scale, abbreviations) {
    var abbreviation = abbreviations[ scale ];
    return (scale !== 0 && !!abbreviation) ? abbreviation : '';
  }

  _setAmountParts(amount, language, abbreviation) {
    if (abbreviation) {
      //Convert into integer
      amount |= 0; //eslint-disable-line no-bitwise
      amount /= Math.pow(10, this._scale);
    }

    this._abbreviationHidden = !abbreviation;
    this._integer = this._getAbsIntegerPart(amount, language);
    if (this.showAllDecimals) {
      this.quantityFractional = amount.toString().split('.')[1].length;
    }
    this._fractional = this.trailingZeroDecimalsHidden ? this._removeTrailingZeros(amount) : this._getFractionalPart(amount);
  }

  _getSafeValue(value) {
    return value || '';
  }

  _computeHasError(amount) {
    return (amount === undefined || amount === null || isNaN(amount) || amount === '');
  }

  _srAmountObserver() {
    var nodes = this.shadowRoot.querySelector('.amount-wrapper');
    var amountNodes = nodes.querySelectorAll('span:not([hidden]):not(.abbreviation)');
    var abbrNode = nodes.querySelector('.abbreviation:not([hidden])');
    var strAmount = '';
    for (var i = 0; i < amountNodes.length; i++) {
      strAmount += amountNodes[ i ].textContent;
    }
    if (abbrNode) {
      strAmount += ' ' + abbrNode.textContent;
    }
    this._srAmount = strAmount;
  }

  _computeShowMinusBeforeSymbol(amount, _minusAfterSymbol) {
    return (amount < 0) && !_minusAfterSymbol;
  }

  _computeShowMinusAfterSymbol(amount, _minusAfterSymbol) {
    return (amount < 0) && _minusAfterSymbol;
  }

  _toggleNegativeClass(amount) {
    if (this.classList.contains('negative') && amount >= 0) {
      this.classList.remove('negative');
    } else if (amount < 0) {
      this.classList.add('negative');
    }
  }

  _computeDecimalsHidden(amount, decimalsHidden, zeroDecimalsHidden, currency) {
    if (decimalsHidden) {
      return true;
    }

    if (zeroDecimalsHidden) {
      return !Number(this._getFractionalPart(amount));
    }

    if (!this._hasDecimalPart(currency)) {
      return true;
    }
  }

  _removeTrailingZeros(amount) {
    return parseFloat(Number(amount).toFixed(this.quantityFractional)).toString().split('.')[ 1 ];
  }

  _computeLeftCurrencySymbolHidden(withoutCurrencySymbol, _alignRight) {
    return withoutCurrencySymbol || _alignRight;
  }

  _computeRightCurrencySymbolHidden(withoutCurrencySymbol, _alignRight) {
    return withoutCurrencySymbol || !_alignRight;
  }

  /**
   * Checks if the screen reader element should be shown
   * @param {String} currencyCode
   */
  _computeShowScreenReaderOnly(currencyCode) {
    return this._screenReaderOnlyTextCurrencyMap.includes(currencyCode);
  }

  /**
   * Returns the text that should be read by the screen reader
   * @param {Number} amount
   * @param {String} currencyCode
   */
  _computeScreenReaderOnlyText(amount, currencyCode) {
    let amountKey = amount === 1 ? '-singular' : '';
    let amountTextKey = `${this._getTranslationKeyForCurrency(currencyCode)}${amountKey}`;
    if (amount) {
      amount = amount.toLocaleString('en', {
        minimumFractionDigits: 2
      });
    }
    return `${amount}${this.t(amountTextKey)}`;
  }
}
customElements.define(CellsAtomAmount.is, CellsAtomAmount);
