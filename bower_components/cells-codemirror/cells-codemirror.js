{
  /* global CodeMirror, Polymer */
  /* eslint new-cap: 0 */

  const { Element, html, } = Polymer;

  /**
  * 
  * # &lt;cells-codemirror&gt;
  *
  * ![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)
  *
  * [Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)
  *
  * `<cells-codemirror>` uses [**CodeMirror**](https://codemirror.net/) to provide a **text editor for the browser**.
  *
  * The component includes two files:
  *
  * - `codemirror-imports.html`: Is an **HTML import** that includes the JavaScript files required by CodeMirror. **Should be imported before `cells-codemirror.html`**
  * - `cells-codemirror.html`: The CodeMirror editor as Web Component.
  *
  * `codemirror-imports.html` is not imported by `cells-codemirror.html` to prevent multiple instances of the component requesting the same JavaScript files multiple times.
  *
  * ## Themes
  * It includes **4 themes**:
  *
  * - cells (light - default)
  * - mdn-like (light)
  * - monokai (dark)
  * - material (dark)
  *
  * More themes can be used by copying the CSS of a CodeMirror's theme in a style module (shared style) with `cells-codemirror-shared-styles` ID.
  *
  * ## Editor content
  * The editor content can be set in two ways: using `content` property or `source-element` attribute with a CSS selector of the element containing the code to render. The referenced element can be placed at any point in the document (not necessarily in the component's Light DOM).
  *
  * Is recommended to place the content inside a `<template>` or a `<script>` tag (for the `javascript` mode) with an unrecognized `type` attribute by the browser to prevent the code to be executed.
  *
  * `source-element` has precedence over `content` property and changing `content` when `source-element` is used has no effect. If you want to change the editor content use `content` instead of `source-element`.
  *
  * **Example using `content` property:**
  *
  * ```html
  * <cells-codemirror></cells-codemirror>
  *
  * <script>
  *   const editorContent = someElement.innerHTML;
  *   document.querySelector('cells-codemirror').content = editorContent;
  * </script>
  * ```
  *
  * **Example using `source-element` attribute:**
  *
  * ```html
  * <cells-codemirror source-element="#code">
  *   <template id="code">
  *     <sample-tag attribute="value"></sample-tag>
  *   </template>
  * </cells-codemirror>
  * ```
  *
  * ```html
  * <cells-codemirror source-element="#code" mode="javascript">
  *   <script type="unrecognized" id="code">
  *     function sayHello() {
  *       alert('hello');
  *     }
  *   </script>
  * </cells-codemirror>
  * ```
  *
  * ## Changing the editor's height
  *
  * By default the CodeMirror editor takes the 100% of the available space. To limit the height, wrap the component in a layer with a fixed height or set a fixed height for `<cells-codemirror>`.
  *
  * Example:
  *
  * ```html
  * <div class="wrapper" style="height: 300px;">
  *   <cells-codemirror></cells-codemirror>
  * </div>
  * ```
  *
  * ## Styling
  *
  * The following custom properties and mixins are available for styling:
  *
  * ### Custom Properties
  * | Custom Property                                    | Selector                       | CSS Property     | Value                                                                |
  * | -------------------------------------------------- | ------------------------------ | ---------------- | -------------------------------------------------------------------- |
  * | --cells-codemirror-editor-wrapper                  | .editor-wrapper                | height           | 100%                                                                 |
  * | --cells-codemirror-code-font-family                | .CodeMirror                    | font-family      | Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace            |
  * | --cells-codemirror-code-font-size                  | .CodeMirror                    | font-size        | 0.9375rem                                                            |
  * | --cells-codemirror-line-highlight-background-color | .cm-s-mdn-like .line-highlight | background-color | ![#ffc](https://placehold.it/15/ffc/000000?text=+) #ffc              |
  * | --cells-codemirror-line-highlight-background-color | .cm-s-monokai .line-highlight  | background-color | ![#42423b](https://placehold.it/15/42423b/000000?text=+) #42423b     |
  * | --cells-codemirror-line-highlight-background-color | .cm-s-material .line-highlight | background-color | ![#3c5461](https://placehold.it/15/3c5461/000000?text=+) #3c5461     |
  * | --cells-codemirror-code-font-family                | .cm-s-cells.CodeMirror         | font-family      | Fira Mono, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace |
  * | --cells-codemirror-code-font-size                  | .cm-s-cells.CodeMirror         | font-size        | 0.875rem                                                             |
  * | --cells-codemirror-line-highlight-background-color | .cm-s-cells .line-highlight    | background-color | ![#ffc](https://placehold.it/15/ffc/000000?text=+) #ffc              |
  * ### @apply
  * | Mixins             | Selector | Value |
  * | ------------------ | -------- | ----- |
  * | --cells-codemirror | :host    | {}    |
  *
  * @summary CodeMirror text editor
  * @polymer
  * @customElement
  * @extends {Polymer.Element}
  * @hero cells-codemirror.png
  * @demo demo/index.html
  */
  class CellsCodemirror extends Element {
    static get is() {
      return 'cells-codemirror';
    }

    static get properties() {
      return {
        /**
         * Code to render. Use this property instead of `sourceElement`
         * if you want to update the editor's content.
         */
        content: {
          type: String,
        },

        /**
         * CSS selector of an element with the content to display using `innerHTML`.
         * The element can be any HTML element but it's recommended to use a `<template>`
         * or a `<script type="unrecognized">` for the javascript mode to prevent the
         * browser executing the code. The element is found using `document.querySelector()`
         * so it can be placed in the component's Light DOM or at any other point in the document.
         *
         * Has precedence over `content` property.
         * Updating `content` when `sourceElement` is used has no effect.
         */
        sourceElement: {
          type: String,
        },

        _code: {
          type: String,
          computed: '_computeCode(content, _sourceElement)',
        },

        /**
         * Theme to use. (material | mdn-like | monokai | cells).
         */
        theme: {
          type: String,
          value: 'cells',
        },

        /**
         * Width of the tab character.
         */
        tabSize: {
          type: Number,
          value: 2,
        },

        /**
         * Whether to show line numbers to the left of the editor.
         */
        lineNumbers: {
          type: Boolean,
          value: false,
        },

        /**
         * Language mode.
         * Supported modes are `javascript`, `css` and `htmlmixed` (default).
         */
        mode: {
          type: String,
          value: 'htmlmixed',
        },

        /**
         * Sets whether the editor should focus itself on initialization.
         */
        autofocus: {
          type: Boolean,
          value: false,
        },

        /**
         * Sets the editor as read-only (not editable).
         */
        readonly: {
          type: Boolean,
          value: false,
        },

        /**
         * Disables focusing the editor when `readonly` is set to `true`.
         */
        nocursor: {
          type: Boolean,
          value: false,
        },

        /**
         * CodeMirror's readOnly property can be Boolean or String with the
         * special value `nocursor` that disallows focusing the editor.
         */
        _readonly: {
          type: String,
          computed: '_computeReadonly(readonly, nocursor)',
        },

        _noSelection: {
          type: Boolean,
          value: true,
        },

        /**
         * Sets whether to show a button to format the selected text.
         * The button is disabled until a selection is made.
         */
        formatButton: {
          type: Boolean,
          value: false,
        },

        /**
         * The CodeMirror instance. You can use it to call any CodeMirror method
         * not provided by this component once the editor is initialized.
         * CodeMirror docs: https://codemirror.net/doc/manual.html#api
         */
        editor: {
          type: Object,
        },

        /**
         * Highlight one or multiple lines separated by commas. (1,3,7)
         * To specify a range separate the from and to values by a dash. (5-9)
         */
        highlightLines: {
          type: String,
        },
      };
    }

    static get observers() {
      return [
        '_setEditor(_code, theme, tabSize, lineNumbers, mode, autofocus, _readonly, highlightLines)',
      ];
    }

    static get template() {
      return html`
        <style include="cells-codemirror-styles cells-codemirror-shared-styles"></style>

        <button
          class="btn-format"
          on-click="_formatCode"
          disabled="[[_noSelection]]"
          hidden$="[[!formatButton]]">Format selection</button>

        <div id="editor" class="editor-wrapper"></div>
      `;
    }

    connectedCallback() {
      super.connectedCallback();

      setTimeout(() => {
        this._sourceElement = document.querySelector(this.sourceElement);
      }, 1);
    }

    _cleanIndentation(str) {
      const pattern = str.match(/\s*\n[\t\s]*/);
      return str.replace(new RegExp(pattern, 'g'), '\n').trim();
    }

    _computeCode(content, sourceElement) {
      const code = sourceElement ? sourceElement.innerHTML : content;

      if (code) {
        return this._cleanIndentation(code);
      }
    }

    _computeReadonly(readonly, nocursor) {
      return (readonly && nocursor) ? 'nocursor' : readonly;
    }

    _setEditor(code, theme, tabSize, lineNumbers, mode, autofocus, readonly, highlightLines) {
      if (code) {
        this._cleanExistingEditor();

        this.editor = CodeMirror(this.$.editor, {
          keyMap: 'sublime',
          autoCloseBrackets: true,
          matchBrackets: true,
          showCursorWhenSelecting: true,
          value: code,
          mode: mode,
          autofocus: autofocus,
          theme: theme,
          tabSize: tabSize,
          lineNumbers: lineNumbers,
          readOnly: readonly,
        });

        if (this.formatButton) {
          this.editor.on('cursorActivity', () => {
            this._noSelection = this.editor.getSelection().length === 0;
          });
        }

        if (highlightLines) {
          this._highlightLines(highlightLines);
        }
      }
    }

    _cleanExistingEditor() {
      this.$.editor.innerHTML = '';
    }

    _highlightLines(value) {
      const lines = value.split(',');
      const allSingleValuesandRanges = lines.map(this._concatSingleValuesandRanges, this);

      [].concat(...allSingleValuesandRanges).forEach(this._highlightLine, this);
    }

    _concatSingleValuesandRanges(lines) {
      const isRange = lines.indexOf('-') !== -1;
      return isRange ? this._getNumbersInRange(lines) : lines;
    }

    _highlightLine(lineNumber) {
      this._addLineClass(Number(lineNumber));
    }

    _addLineClass(lineNumber) {
      this.editor.addLineClass(lineNumber - 1, 'background', 'line-highlight');
    }

    _getNumbersInRange(range) {
      const [first, last] = range.split('-').map(item => Number(item));
      const result = [];

      if (last > first) {
        for (let i = first; i <= last; i++) {
          result.push(i);
        }
      }

      return result;
    }

    /**
     * Gets the current editor content.
     * @return {String} Editor content.
     */
    getValue() {
      if (this.editor) {
        return this.editor.getValue();
      }
    }

    _formatCode() {
      this.editor.autoFormatRange(
        this.editor.getCursor(true),
        this.editor.getCursor(false)
      );
    }
  }

  customElements.define(CellsCodemirror.is, CellsCodemirror);
}
