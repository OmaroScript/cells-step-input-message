/**
 *
 * # cells-key-values
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
 *
 * `<cells-key-values>` displays a key (label) with one or more values. Values can
 * be Primitive (String or Number), an Object with a defined format or an Array of Primitive or Object values (see JS API docs).
 *
 * Content inside `<cells-key-values>` is placed after the value if the property is used. To place the content before the value use
 * the class "before-value".
 *
 * Example __with content in light DOM__:
 *
 * ```html
 * <cells-key-values
 *   key="Custom content"
 *   value="234234234">
 *   <p>I'll appear after the value.</p>
 * </cells-key-values>
 * ```
 *
 * Available __content hooks__:
 *
 * ```html
 * <cells-key-values
 *   key="Custom content"
 *   value="234234234">
 *   <p slot="before-value">I'll appear before the value.</p>
 * </cells-key-values>
 * ```
 *
 * ```html
 * <cells-key-values
 *   key="Custom content"
 *   value="234234234">
 *   <span slot="before-key">I'll appear before the key.</span>
 *   <span slot="after-key">I'll appear after the key.</span>
 * </cells-key-values>
 * ```
 *
 * ```html
 * <cells-key-values
 *   key="Custom content"
 *   value="234234234">
 *   <span slot="after-key">I'll appear after the key.</span>
 * </cells-key-values>
 * ```
 *
 * Key and values can be displayed in three different layouts:
 * - Key above value. __Default__ layout. No class needed.
 * - __Inline__: Key to the left of the value. Use the class `inline`.
 * - __Reversed__: Value above the key only visually. The DOM order is the opposite for accessibility reasons. Use the class `reversed`.
 *
 * __Simple values__ (primitive types):
 *
 * ```html
 * <cells-key-values
 *   key="Account number"
 *   value="987979789879897">
 * </cells-key-values>
 * ```
 *
 * __Masked values__ (only for primitive values):
 *
 * ```html
 * <cells-key-values
 *   key="Account number"
 *   value="987979789879897"
 *   masked>
 * </cells-key-values>
 * ```
 *
 * __Monetary values__ (amounts):
 *
 * ```html
 * <cells-key-values
 *   key="Account number"
 *   local-currency="EUR"
 *   language="en"
 *   value='{
 *     "amount": 12323,
 *     "currencyCode": "EUR"
 *   }'>
 * </cells-key-values>
 * ```
 *
 * __Multiple values:__
 *
 * ```html
 * <cells-key-values
 *   key="Account number"
 *   local-currency="EUR"
 *   language="en"
 *   value='[{
 *     "amount": 12323,
 *     "class": "amount-huge",
 *     "currencyCode": "EUR"
 *   }, {
 *     "amount": 98797,
 *     "currencyCode": "CLP"
 *   }]'>
 * </cells-key-values>
 * ```
 * __With full masked values:__
 *
 * ```html
 *     <cells-key-values
 *       key="Card pin"
 *       value="12345"
 *       masked
 *       mask-chars="•"
 *       visible-chars="0"
 *       show-full-mask>
 *     </cells-key-values>
 * ```
 *
 * ## Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * ### Custom Properties
 * | Custom Property | Selector | CSS Property | Value |
 * | --------------- | -------- | ------------ | ----- |
 * ### @apply
 * | Mixins                                                  | Selector                                               | Value |
 * | ------------------------------------------------------- | ------------------------------------------------------ | ----- |
 * | --cells-key-values-list-value                           | .cells-key-values-list > --cells-key-values-value:     | {}    |
 * | --cells-key-values-list                                 | .cells-key-values-list                                 | {}    |
 * | --cells-key-values-list-item-not-first-child            | .cells-key-values-list li:not(:first-of-type)          | {}    |
 * | --cells-key-values-list-inline                          | .cells-key-values-list.inline                          | {}    |
 * | --cells-key-values-list-inline-item-not-first-child     | .cells-key-values-list.inline li:not(:first-of-type)   | {}    |
 * | --cells-key-values-list-reversed                        | .cells-key-values-list.reversed                        | {}    |
 * | --cells-key-values-list-inline-reversed-not-first-child | .cells-key-values-list.reversed li:not(:first-of-type) | {}    |
 *
 * ## Classes for lists
 *
 * The component includes helper classes for list elements (`<ul>` or `<ol>`) in case you'd have a list of `<cells-key-values>`.
 * The file needs to be imported and included in your component style.
 *
 * | Class name            | Description                                      |
 * | :-------------------- | :----------------------------------------------- |
 * | cells-key-values-list | applicable to `<ul>` elements                    |
 * | inline                | applicable to `<ul>` elements in inline layout   |
 * | reversed              | applicable to `<ul>` elements in reversed layout |
 *
 * Check out the demo to see examples.
 *
 * Example:
 *
 * ```html
 * <link rel="import" href="../cells-key-values/cells-key-values-list-styles.html">
 * <style include="cells-key-values-list-styles"></style>
 *
 * <ul class="cells-key-values-list">
 *   <li><cells-key-values></cells-key-values></li>
 * </ul>
 * ```
 * ### @apply
 * | Mixins                                                  | Selector                                               | Value |
 * | ------------------------------------------------------- | ------------------------------------------------------ | ----- |
 * | --cells-key-values-list-value                           | .cells-key-values-list > --cells-key-values-value:     | {}    |
 * | --cells-key-values-list                                 | .cells-key-values-list                                 | {}    |
 * | --cells-key-values-list-item-not-first-child            | .cells-key-values-list li:not(:first-of-type)          | {}    |
 * | --cells-key-values-list-inline                          | .cells-key-values-list.inline                          | {}    |
 * | --cells-key-values-list-inline-item-not-first-child     | .cells-key-values-list.inline li:not(:first-of-type)   | {}    |
 * | --cells-key-values-list-reversed                        | .cells-key-values-list.reversed                        | {}    |
 * | --cells-key-values-list-inline-reversed-not-first-child | .cells-key-values-list.reversed li:not(:first-of-type) | {}    |
 *
 * @polymer
 * @customElement
 * @summary Displays key/value pairs with different layouts.
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-key-values.png
 */
class CellsKeyValues extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior ], Polymer.Element) {

  static get is() {
    return 'cells-key-values';
  }

  static get properties() {
    return {
      /**
      * Key / Label to display
      */
      key: {
        type: String,
        value: ''
      },
      /**
      * Value to display with the key.
      *
      * It can be a primitive value like a String or Number or an
      * Object or Array if you want to display monetary values. Accepted properties for the amounts are the same
      * that `<cells-atom-amount>` has, plus a `class` property that can be used to set the `<cells-atom-amount>` size.
      * Check out `<cells-atom-amount>` docs for more info:
      * https://globaldevtools.bbva.com/bitbucket/projects/CA/repos/cells-atom-amount/browse/README.md
      *
      * If you want to display multiple values, just put in an Array with as many Objects
      * as you need in the order you want them to be displayed.
      *
      * If you want to display multiple PRIMITIVE VALUES, just put in an Array with as many values
      * as you need in the order you want them to be displayed.
      *
      * Also set `language`, `localCurrency`, `maskChars` and `visibleChars` properties properly
      * depending on the type of value you want to display with the key.
      *
      * Examples:
      *
      * ```json
      * value: {
      *   amount: 12400,
      *   currencyCode: 'EUR',
      *   decimalsHidden: true,
      *   class: 'amount-medium'
      * }
      * ```
      *
      * Multiple values:
      *
      * ```json
      * value: [{
      *   amount: 12000,
      *   currencyCode: 'EUR',
      *   class: 'amount-huge'
      * }, {
      *   amount: 3400,
      *   currencyCode: 'USD'
      * }]
      * ```
      */
      value: {
        type: Object,
        value: {}
      },

      /**
      * Local currency for amounts / monetary values
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/CA/repos/cells-atom-amount/browse/README.md)
      */
      localCurrency: {
        type: String,
        value: ''
      },

      /**
      * Language currency for amounts / monetary values
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/CA/repos/cells-atom-amount/browse/README.md)
      */
      language: {
        type: String,
        value: ''
      },

      /**
       * Set to true to display the value masked.
       */
      masked: {
        type: Boolean,
        value: false
      },

      /**
       * Remove default value class
       */
      removeDefaultValueClass: {
        type: Boolean,
        value: false
      },

      /**
      * Chars to mask a value with
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-molecule-mask/browse/README.md)
      */
      maskChars: {
        type: String,
        value: '*'
      },

      /**
       * Key class
       */
      keyClass: {
        type: String,
        value: ''
      },

      /**
       * Key icon
       */
      keyIcon: String,

      /**
      * Amount of visible chars after the masking char
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-molecule-mask/browse/README.md)
      */
      visibleChars: {
        type: Number,
        value: 4
      },
      /**
      * Show full masked characters
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-molecule-mask/browse/README.md)
      */
      showFullMask: {
        type: Boolean,
        value: false
      },
      /**
       * Icon (code) to display when the value is masked.
       * Only will be shown if both, iconMaked and iconNotMasked are set.
       */
      iconMasked: {
        type: String,
        value: ''
      },

      /**
       * Icon (code) to display when the value is not masked.
       * Only will be shown if both, iconMaked and iconNotMasked are set.
       */
      iconNotMasked: {
        type: String,
        value: ''
      },

      /**
      * Set of abbreviations that can be applied depending on scale property value.<br>
      * Example:
      * ```js
      * {
      *   2: 'hundreds',
      *   3: 'thousands',
      *   4: 'tenthousands',
      *   6: 'Mill…',
      *   9: 'Bill…'
      * }
      * ```
      */
      abbreviations: {
        type: Object,
        value: {}
      }
    };
  }

  /**
  * Puts value into an Array if it is not an Array
  * @param {*} value
  * @return {Array} - Contains the given value in an Array (if it wasn't an array initially)
  */
  _toArray(value) {
    return Array.isArray(value) ? value : [ value ];
  }

  /**
  * Checks if 'value' is a primitive Javascript type
  * @param {*} value
  * @return {Boolean} True if value is primitive
  */
  _isPrimitive(value) {
    return (typeof value === 'number' || typeof value === 'string');
  }


  /**
   * Get amount class
   * @param {String }currentClass
   * @return {String}
   */
  _getAmountClass(currentClass = '') {
    return this.removeDefaultValueClass ? currentClass : `value-amount ${currentClass}`;
  }

  /**
  * Checks if 'value' is an amount
  * @param {*} value
  * @return {Boolean} True if value is an amount
  */
  _isAmount(value) {
    return !isNaN(value.amount);
  }

  /**
  * Launch 'key-icon-click' event with id
  * @param {*} ev
  */
  _keyIconClicked(ev) {
    this.dispatchEvent(new CustomEvent('key-icon-click', { detail: ev.currentTarget.id, bubbles: true, composed: true }));
  }
}
window.customElements.define(CellsKeyValues.is, CellsKeyValues);
