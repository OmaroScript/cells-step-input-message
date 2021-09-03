{
  const {
    html,
  } = Polymer;
  /**
    `<cells-text-description>` Description.

    Example:

    ```html
    <cells-text-description></cells-text-description>
    ```

    ## Styling
    The following custom properties and mixins are available for styling:

    ### Custom Properties
    | Custom Property                                     | Selector                             | CSS Property  | Value                  |
    | --------------------------------------------------- | ------------------------------------ | ------------- | ---------------------- |
    | --cells-fontDefault                                 | :host                                | font-family   |  sans-serif            |
    | --cells-text-description-link-button-min-height     | .link .button                        | min-height    |  rem(24px)             |
    | --cells-text-description-title-icon-align-position; | :host(.title-icon-align) .title-icon | position      | absolute               |
    | --cells-text-description-title-icon-align-margin;   | :host(.title-icon-align) .title-icon | margin        | rem(-2px) 0 0 rem(5px) |
    | --cells-text-description-no-margin-bottom           | :host.no-margin-bottom               | margin-bottom | 0                      |
    | --cells-text-description-size-xl-font-size          | .htmlDescription strong.size-xl      | font-size     | rem(18px)              |
    | --cells-text-description-subtitle-text-color        | :host(.subtitle-color) .subtitle     | color         | --bbva-600             |
    | --cells-text-description-margin-top-xl              | .margin-top-xl                       | margin-top    | 2rem                   |

    ### @apply
    | Mixins                                                     | Selector                                                                     | Value                             |
    | ---------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------- |
    | --cells-text-description;                                  | Mixin applied to :host                                                       | {}                                |
    | --cells-text-description-title;                            | Mixin applied to .title                                                      | {}                                |
    | --cells-text-description-subtitle;                         | Mixin applied to .subtitle                                                   | {}                                |
    | --cells-text-description-description;                      | Mixin applied to .description                                                | {}                                |
    | --cells-text-description-main-description;                 | Mixin applied to --cells-input-place-results-item-span                       | {}                                |
    | --cells-text-description-secondary-description;            | Mixin applied to .results-item span                                          | {}                                |
    | --cells-text-description-html-description;                 | Mixin applied to .html-description                                           | {}                                |
    | --cells-text-description-html-description-strong;          | Mixin applied to .html-description strong                                    | {}                                |
    | --cells-text-description-description-l                     | Mixin applied to :host(.description-l) .desciption                           | {}                                |
    | --cells-text-description-subtitle-ml                       | Mixin applied to :host(.subtitle-ml) .subtitle                               | {}                                |
    | --cells-text-description-link                              | Mixin applied to .link                                                       | {}                                |
    | --cells-text-description-link-button                       | Mixin applied to .link button                                                | {}                                |
    | --cells-text-description-title-gap-bottom-none             | Mixin applied to .host(.title-gap-bottom-none)                               | {}                                |
    | --cells-text-description-title-gap-bottom-none-title       | Mixin applied to .host(.title-gap-bottom-none) .title                        | {}                                |
    | --cells-text-description-normal-title                      | Mixin applied to .host(.normal-title) .title                                 | {}                                |
    | --cells-text-description-normal-title-title                | Mixin applied to .host(.normal-title)                                        | {}                                |
    | --cells-text-description-size-xl                           | Mixin applied to .htmlDescription strong.size-xl                             | {}                                |
    | --cells-text-description-subtitle-xl                       | Mixin applied to host(.subtitle-xl) .subtitle                                | {}                                |
    | --cells-text-description-subtitle-color                    | Mixin applied to host(.subtitle-color) .subtitle                             | {}                                |
    | --cells-text-description-light-description-font-size-color | Mixin applied to :host(.light-description) .description                      | {}                                |
    | --cells-text-description-light-description-strong-xl       | Mixin applied to :host(.light-description) .htmlDescription strong.size-xl   | {}                                |
    | --cells-text-description-light-description-html-strong     | Mixin applied to :host(.light-description) .htmlDescription strong           | {}                                |
    | --cells-text-description-light-description                 | Mixin applied to host(.light-description)                                    | {}                                |
    | --cells-text-description-centered                          | Mixin applied to host(.text-centered)                                        | {}                                |
    | --cells-text-description-centered-title                    | Mixin applied to host(.text-centered) .title                                 | {}                                |
    | --cells-text-description-centered-main-title               | Mixin applied to host(.text-centered) .main-title                            | {}                                |

   ## Events
   | Name | Description |
   | --------------------------------------- | ---------------------------- |
   | cells-text-description-title-icon-click | Fires an event on icon click |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class CellsTextDescription extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior, ], Polymer.Element) {
    static get is() {
      return 'cells-text-description';
    }

    static get properties() {
      return {

        /**
         * Title
         */
        title: {
          type: String
        },

        /**
         * Title icon
         */
        titleIcon: {
          type: String
        },

        /**
         * Subtitle
         */
        subtitle: {
          type: String
        },

        /**
         * Main Description
         */
        mainDescription: {
          type: String
        },

        /**
         * Secondary description
         */
        secondaryDescription: {
          type: String,
        },

        /** Link object */
        link: Object,

        /**
         * Property to show a list of descriptions
         */
        description: {
          type: Array
        },
        /**
         * Link default description
         */
        linkDefault: {
          type: String,
        },
        /**
         * Property to show a list of descriptions in HTML format
         */
        htmlDescription: {
          type: String
        },
        /**
         * Subtitle role in order to screen reader read the element correctly
         */
        roleAccesibilitySubtitle: {
          type: String,
          value: ''
        },
        /**
         * Aria-level subtitle value to screen reader heading role
         */
        ariaLevelSubtitle: {
          type: String,
          value: ''
        },
        /**
         * Image to decorate text
         */
        decoratedImage: {
          type: String,
        }
      };
    }

    static get observers() {
      return [
        '_createInfoArray(decoratedImage,title, subtitle, mainDescription, secondaryDescription, link, htmlDescription)'
      ];
    }
    /**
     * Creates array to show one or several descriptions
     */
    _createInfoArray(decoratedImage, title, subtitle, mainDescription, secondaryDescription, link, htmlDescription) {
      let data = Object.assign({},
        decoratedImage ? { decoratedImage } : {},
        title ? { title } : {},
        subtitle ? { subtitle } : {},
        mainDescription ? { mainDescription } : {},
        secondaryDescription ? { secondaryDescription } : {},
        link ? { link } : {},
        htmlDescription ? { htmlDescription } : {}
      );
      this.set('description', [ data ]);
    }

    /**
     * Function that gets trigger on icon click
     * @event cells-text-description-title-icon-click
     */
    _buttonClick() {
      this.dispatchEvent(new CustomEvent('cells-text-description-title-icon-click', {
        bubbles: true,
        composed: true
      }));
    }

    /**
     * Function that gets trigger on link click
     * @event cells-text-description-link-click
     */
    _onLinkClick() {
      this.dispatchEvent(new CustomEvent('cells-text-description-link-click', {
        bubbles: true,
        composed: true
      }));
    }

    /**
     * Function that gets trigger on link click
     * @event cells-text-description-main-description-click
     */
    _onMainDescriptionClick() {
      this.dispatchEvent(new CustomEvent('cells-text-description-main-description-click', {
        bubbles: true,
        composed: true
      }));
    }

    /**
     * Computed binding to format the icon
     * @param {*} titleIcon
     */
    _formatIcon(titleIcon) {
      return `coronita:${titleIcon}`;
    }
    /**
     * Check if item.link.text exist
     * @param {*} item
     */
    _existText(item) {
      return item.link && item.link.text;
    }
  }

  customElements.define(CellsTextDescription.is, CellsTextDescription);
}
