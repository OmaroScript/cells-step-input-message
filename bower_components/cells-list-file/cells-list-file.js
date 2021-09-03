/**
 *
 * # cells-list-file
 *
 * [![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-cells-files.s3.amazonaws.com/cells/bbva-catalog/index.html) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
 *
 * List of file items.
 *
 * Example:
 *
 * ```html
 * <cells-list-file list='[{
 *   "id": "example2",
 *   "text": "File name",
 *   "icon": "coronita:pdf",
 *   "subText": "230kb",
 *   "message": {"type":"info", "icon":"coronita:info","text":"Helpful text that sits below the field", "iconSize": "16"},
 *   "classList": "exampleClass"
 * }]'></cells-list-file>
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
 *
 * | Custom Property                             | Selector                                                            | CSS Property                                      | Value                                                   |
 * | ------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------- |
 * | --cells-fontDefault                         | :host                                                               | font-family                                       | sans-serif                                              |
 * | --cells-list-file-color-bodycopy--theme     | .media__icon                                                        | color                                             | --bbva-dark-medium-blue                                 |
 * | --cells-list-file-color-bodycopy--theme     | .media__actionicon                                                  | color                                             | --bbva-dark-medium-blue                                 |
 * | --cells-list-file-icon-info-size            | .media__actionicon                                                  | width                                             | 1.5625rem                                               |
 * | --cells-list-file-icon-info-margin-left     | .media__actionicon                                                  | margin-left                                       | 0.125rem                                                |
 * | --cells-text-size-xxxxl                     | .media__actionicon                                                  | font-size                                         | 1.5rem                                                  |
 * | --cells-list-file-color-bodycopy--theme     | .body__text                                                         | color                                             | --bbva-dark-medium-blue                                 |
 * | --cells-list-file-color-body-subtext--theme | .body__sub-text                                                     | color                                             | --bbva-500                                              |
 * | --bbva-white                                | :host(.on-dark)                                                     | --cells-list-file-color-bodycopy--theme           | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 * | --bbva-white                                | :host(.on-dark)                                                     | --cells-list-file-color-body-subtext--theme       | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 * | --cells-list-file-item-separator-color      | .container-items-with-separator:not(:last-of-type)                  | border-bottom                                     | 1px solid --bbva-300                                    |
 * | --cells-list-file-color-bodycopy--theme     | .checkbox-selectable-item > --cells-checkbox-left-label:            | color                                             | --bbva-600                                              |
 * | --cells-list-file-color-bodycopy--theme     | .checkbox-selectable-item > --cells-checkbox-left-additional-label: | color                                             | --bbva-500                                              |
 * | --cells-list-file-color-bodycopy--theme     | .checkbox-selectable-item                                           | --cells-checkbox-left-icon-color                  | --bbva-dark-medium-blue                                 |
 * | --cells-list-file-word-break                | .body__text                                                         | word-break                                        | break-word                                              |
 * | --bbva-white                                | .checkbox-selectable-item                                           | --cells-checkbox-button-checkbox-background-color | ![#fff](https://placehold.it/15/fff/000000?text=+) #fff |
 *
 * ### @apply
 *
 * | Mixins                                           | Selector                                                            | Value |
 * | ------------------------------------------------ | ------------------------------------------------------------------- | ----- |
 * | --cells-list-file                                | :host                                                               | {}    |
 * | --cells-list-file-container                      | .list-file-container                                                | {}    |
 * | --cells-list-file-margin-left                    | .list-file-margin-left                                              | {}    |
 * | --cells-list-file-margin                         | .list-file-margin                                                   | {}    |
 * | --cells-list-file-media                          | .media                                                              | {}    |
 * | --cells-list-file-media-icon                     | .media__icon                                                        | {}    |
 * | --cells-list-file-media-action-icon              | .media__actionicon                                                  | {}    |
 * | --cells-list-file-body                           | .body                                                               | {}    |
 * | --cells-fontDefaultMedium                        | .body__text                                                         | {}    |
 * | --cells-list-file-bodycopy-text                  | .body__text                                                         | {}    |
 * | --cells-fontDefaultLightItalic                   | .body__sub-text                                                     | {}    |
 * | --cells-list-file-body-sub-text                  | .body__sub-text                                                     | {}    |
 * | --cells-list-file-on-dark                        | :host(.on-dark)                                                     | {}    |
 * | --cells-list-file-message                        | .list-file__message                                                 | {}    |
 * | --cells-list-file-gutter                         | :host(.h-gutter)                                                    | {}    |
 * | --cells-list-file-row-gap-bottom-l               | :host(.row-gap-bottom-l)                                            | {}    |
 * | --cells-list-file-row-gap-bottom-m               | :host(.row-gap-bottom-m)                                            | {}    |
 * | --cells-list-file-row-gap-top-xxl                | :host(.row-gap-top-xxl)                                             | {}    |
 * | --cells-list-file-item-separator                 | .container-items-with-separator                                     | {}    |
 * | --cells-list-file-item-separator-not-last-type   | .container-items-with-separator:not(:last-of-type)                  | {}    |
 * | --cells-list-file-checkbox-left-label            | .checkbox-selectable-item > --cells-checkbox-left-label:            | {}    |
 * | --cells-list-file-checkbox-left-additional-label | .checkbox-selectable-item > --cells-checkbox-left-additional-label: | {}    |
 * | --cells-list-file-checkbox-selectable-item       | .checkbox-selectable-item                                           | {}    |
 * | --cells-list-file-body-break-word                | :host(.body-break-word)                                             | {}    |
 * | --cells-list-file-body-break-word-text           | :host(.body-break-word) .body__text                                 | {}    |
 *
 * @polymer
 * @customElement
 * @summary List of file items.
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-list-file.png
*/
class CellsListFile extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior, ], Polymer.Element) {
  static get is() {
    return 'cells-list-file';
  }

  static get properties() {
    return {
      /**
       * List of file items
       * @type Array
       */
      list: {
        type: Array,
        value: [],
        observer: '_list'
      },
      /**
       * Show edit option
       * @type Boolean
       */
      showEdit: {
        type: Boolean,
        value: false
      },
      /**
       * Show delete option
       * @type Boolean
       */
      showDelete: {
        type: Boolean,
        value: false
      },
      /**
       * Is checkable list
       * @type Boolean
       */
      selectable: {
        type: Boolean,
        value: false
      },
      /**
       * Has separator between items
       * @type Boolean
       */
      separator: {
        type: Boolean,
        value: false
      },
      /**
       * List of check status of items
       * @type Array
       */
      _selectionList: {
        type: Array,
        value: []
      },
      /**
        * Events
        */
      _events: {
        type: Object,
        value: () => {
          return {
            edit: 'cells-list-file-edit',
            delete: 'cells-list-file-delete'
          };
        }
      },
    };
  }

  /**
   * Fire an event when a file item is clicked
   * @param {Event} e
   * @event cells-list-file-item-clicked
   */
  _handlerClick(e) {
    this.dispatchEvent(new CustomEvent('cells-list-file-item-clicked', {
      bubbles: true,
      composed: true,
      detail: {
        id: this.get('currentTarget.dataset.id', e)
      }
    }));
  }

  /**
   * Set a list of selections by default
   */
  _list(listItems) {
    this._selectionList = [];
    listItems.forEach((item) => {
      this._selectionList.push({id: item.id, checked: false});
    });
  }

  /**
   * Fire an event when a file item is checked
   * @param {Event} e
   * @event cells-list-file-selection-changed
   */
  _checkItem(e) {
    if (e && e.currentTarget) {
      const dataId =  e.currentTarget.dataId;
      const isChecked =  e.detail.checked;

      this.list.forEach((item, index) => {
        if (item.id === dataId) {
          this._selectionList[index].checked = isChecked;
        }
      });

      this.dispatchEvent(new CustomEvent('cells-list-file-selection-changed', {
        bubbles: true,
        composed: true,
        detail: this._selectionList
      }));
    }

  }

  /**
   * return class if should contain separator
   */
  _containsSeparator() {
    return this.separator ? 'container-items-with-separator' : '';
  }

  /**
    * Capture the click events of the buttons in the component. Check the
    * attribute `event` and if its exist, this method dispach a event
    * @param {Event} ev
    */
  _handleEvent(ev) {
    if (ev && ev.currentTarget && ev.currentTarget.event) {
      const obj = { detail: ev.detail, id: ev.currentTarget.dataId};
      const customEvent = new CustomEvent(ev.currentTarget.event, {
        bubbles: true,
        composed: true,
        detail: obj,
      });
      ev.preventDefault();
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * reset to default values
   */
  reset() {
    this.list = [];
  }

}

customElements.define(CellsListFile.is, CellsListFile);