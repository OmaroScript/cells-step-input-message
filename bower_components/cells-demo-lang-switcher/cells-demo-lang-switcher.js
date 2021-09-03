/**
 * @summary cells-demo-lang-switcher is a dropdown menu that changes the language of a component, which uses CellsBehaviors.i18nBehavior
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class CellsDemoLangSwitcher extends Polymer.Element {
  static get is() {
    /* global I18nMsg */
    return 'cells-demo-lang-switcher';
  }
  static get properties() {
    return {
      /**
       * Label for the lang selector.
       */
      label: {
        type: String,
        value: 'Lang'
      },

      /**
       * Available langs for a component.
       */
      langs: {
        type: Array,
        value: function() {
          return ['en', 'es'];
        }
      },

      _langs: {
        type: Array,
        computed: '_computeLangs(langs)'
      },

      /**
       * Default lang selected.
       */
      selected: {
        type: Number,
        value: 0,
        notify: true,
        observer: '_setDocumentLang'
      },

      /**
       * Selected lang.
       */
      lang: {
        type: String,
        notify: true,
        readOnly: true
      },

      /**
       * Path to locales folder.
       */
      localesPath: {
        type: String,
        value: '../locales',
        observer: '_setLocalesPath'
      }
    };
  }
  _setLocalesPath(localesPath) {
    I18nMsg.url = localesPath;
  }
  _setDocumentLang(selected) {
    this.ownerDocument.lang = this.langs[selected];
    this._setLang(this.langs[selected]);
    I18nMsg.lang = this.ownerDocument.lang;
  }
  _computeLangs(langs) {
    return langs.map(function(lang) {
      return { name: lang };
    });
  }
}
customElements.define(CellsDemoLangSwitcher.is, CellsDemoLangSwitcher);
