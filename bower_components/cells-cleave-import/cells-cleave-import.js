{
  const {
    Element
  } = Polymer;

/**
 * # &lt;cells-cleave-import&gt;
 *
 * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg) *
 *
 * Imports Cleave.js as an HTML import.
 *
 * Example:
 * ```html
 * <cells-cleave-import></cells-cleave-import>
 * ```
 *
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 * @hero cells-cleave-import.png
 */
  class CellsCleaveImport extends Element {

    static get is() {
      return 'cells-cleave-import';
    }
  }

  customElements.define(CellsCleaveImport.is, CellsCleaveImport);
}