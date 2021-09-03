class CellsSelectModal extends Polymer.mixinBehaviors([
  CellsBehaviors.i18nBehavior,
  CellsBehaviors.InputValidationsBehavior],
Polymer.Element) {
  static get is() {
    return 'cells-select-modal';
  }

  static get properties() {
    return {
      /**
      * Item selected of the selector
      */
      itemSelected: {
        type: String,
        reflectToAttribute: true,
      },
      /**
      * Item Id of the selector
      */
      itemId: {
        type: String,
      },
      /**
      * Title label of the selector
      */
      title: {
        type: String,
      },
      /**
      * image url for selector
      */
      image: String,
      /**
      * Hide icon and prevent selection
      */
      hideSelectorIcon: {
        type: Boolean,
        value: false
      },
      secondarySelected: {
        type: String,
      },
      isInputStyle: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
      /**
       * custom style for text select modal
       */
      customStyle: {
        type: String,
        value: ''
      },
      /**
       * Style for text ellipsis
       */
      ellipsis: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
      /**
       * default image
       */
      defaultImage: {
        type: String,
        value: ''
      },
      /**
      * icon for input
      */
      inputIcon: {
        type: String,
        value: 'coronita:unfold'
      },
      /**
       * Disabled input
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * aria label for selector
       */
      ariaLabel: {
        type: String,
      }
    };
  }

  /**
   * Dispatches event to open modal selector only if selector icon is shown
   */
  _openDocumentModalSelector() {
    if (!this.hideSelectorIcon && !this.disabled) {
      this.dispatchEvent(new CustomEvent('open-document-modal-selector', {
        bubbles: true,
        composed: true,
        detail: {
          id: this.id,
          value: this.itemId,
        }
      }));
    }
  }

  /**
   * Image error event
   */
  _onImageError() {
    if (this.defaultImage.length) {
      this.image = this.defaultImage;
    }
  }
}

customElements.define(CellsSelectModal.is, CellsSelectModal);
