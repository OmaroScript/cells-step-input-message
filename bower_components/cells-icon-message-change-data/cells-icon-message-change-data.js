{
  const {
    html,
  } = Polymer;
  /**
    `<cells-icon-message-change-data>` Description.

    Example:

    ```html
    <cells-icon-message-change-data></cells-icon-message-change-data>
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
    | --cells-icon-message-change-data | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class CellsIconMessageChangeData extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior, ], Polymer.Element) {
    static get is() {
      return 'cells-icon-message-change-data';
    }

    static get properties() {
      return {
        /**
         * cells-icon-message heading
         */
        heading: {
          type: String,
          reflectToAttribute: true
        },
        /**
         * cells-icon-message Message
         */
        message: String,
        /**
         * cells-icon-message Messages
         */
        messages: Array,
        /**
         * cells-icon-message type
         */
        type: String,
        /**
         * Data to show after message
         */
        data: String,
        /**
         * Flag to show/hide change data button
         */
        showChangeData: {
          type: Boolean,
          value: false,
        },
        /**
         * Used with showChangeContactData, if both true, change data button will be shown.
         * It can be used with glomo-customers-dm has-multiple-* properties
         */
        hasMultipleData: {
          type: Boolean,
          value: false,
        },
        /**
         * variable to set the availability on the multiple data link
         */
        disableLink: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        /**
         * Change data button text
         */
        changeDataText: String,
        /**
         * property to allow bind classes from icon-message
         */
        iconMessageClass: {
          type: String,
          value: '',
        },
        /**
         * Icon size
         */
        iconSize: {
          type: String,
          value: '26',
        },
        /**
         * cells-icon-message image URL to be used as icon.
         */
        imageSrc: String,
        /**
         * Icon type
         */
        iconType: {
          type: String,
          value: 'coronita:info'
        },
        /**
         * Icon message valid types
         */
        iconMessageValidTypes: {
          type: Array
        },
        /**
         * Size of the icon (width and height).
         * Odd values are allowed.
         */
        sizes: {
          type: Object,
          computed: '_getSizes(iconSize)'
        },
      };
    }

    _onChangeDataClick() {
      this.dispatchEvent(new CustomEvent('change-data-pressed', {
        bubbles: true,
        composed: true,
      }));
    }

    /**
     * Return sizes object from icon size
     * @param {Number} iconSize
     */
    _getSizes(iconSize = '') {
      return iconSize ? {
        width: `${iconSize}px`,
        height: `${iconSize}px`
      } : {};
    }
  }

  customElements.define(CellsIconMessageChangeData.is, CellsIconMessageChangeData);
}
