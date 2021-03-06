![cells-codemirror screenshot](cells-codemirror.png)
# &lt;cells-codemirror&gt;

![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)

[Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)

`<cells-codemirror>` uses [**CodeMirror**](https://codemirror.net/) to provide a **text editor for the browser**.

The component includes two files:

- `codemirror-imports.html`: Is an **HTML import** that includes the JavaScript files required by CodeMirror. **Should be imported before `cells-codemirror.html`**
- `cells-codemirror.html`: The CodeMirror editor as Web Component.

`codemirror-imports.html` is not imported by `cells-codemirror.html` to prevent multiple instances of the component requesting the same JavaScript files multiple times.

## Themes
It includes **4 themes**:

- cells (light - default)
- mdn-like (light)
- monokai (dark)
- material (dark)

More themes can be used by copying the CSS of a CodeMirror's theme in a style module (shared style) with `cells-codemirror-shared-styles` ID.

## Editor content
The editor content can be set in two ways: using `content` property or `source-element` attribute with a CSS selector of the element containing the code to render. The referenced element can be placed at any point in the document (not necessarily in the component's Light DOM).

Is recommended to place the content inside a `<template>` or a `<script>` tag (for the `javascript` mode) with an unrecognized `type` attribute by the browser to prevent the code to be executed.

`source-element` has precedence over `content` property and changing `content` when `source-element` is used has no effect. If you want to change the editor content use `content` instead of `source-element`.

**Example using `content` property:**

```html
<cells-codemirror></cells-codemirror>

<script>
  const editorContent = someElement.innerHTML;
  document.querySelector('cells-codemirror').content = editorContent;
</script>
```

**Example using `source-element` attribute:**

```html
<cells-codemirror source-element="#code">
  <template id="code">
    <sample-tag attribute="value"></sample-tag>
  </template>
</cells-codemirror>
```

```html
<cells-codemirror source-element="#code" mode="javascript">
  <script type="unrecognized" id="code">
    function sayHello() {
      alert('hello');
    }
  </script>
</cells-codemirror>
```

## Changing the editor's height

By default the CodeMirror editor takes the 100% of the available space. To limit the height, wrap the component in a layer with a fixed height or set a fixed height for `<cells-codemirror>`.

Example:

```html
<div class="wrapper" style="height: 300px;">
  <cells-codemirror></cells-codemirror>
</div>
```

## Styling

The following custom properties and mixins are available for styling:

### Custom Properties
| Custom Property                                    | Selector                       | CSS Property     | Value                                                                |
| -------------------------------------------------- | ------------------------------ | ---------------- | -------------------------------------------------------------------- |
| --cells-codemirror-editor-wrapper                  | .editor-wrapper                | height           | 100%                                                                 |
| --cells-codemirror-code-font-family                | .CodeMirror                    | font-family      | Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace            |
| --cells-codemirror-code-font-size                  | .CodeMirror                    | font-size        | 0.9375rem                                                            |
| --cells-codemirror-line-highlight-background-color | .cm-s-mdn-like .line-highlight | background-color | ![#ffc](https://placehold.it/15/ffc/000000?text=+) #ffc              |
| --cells-codemirror-line-highlight-background-color | .cm-s-monokai .line-highlight  | background-color | ![#42423b](https://placehold.it/15/42423b/000000?text=+) #42423b     |
| --cells-codemirror-line-highlight-background-color | .cm-s-material .line-highlight | background-color | ![#3c5461](https://placehold.it/15/3c5461/000000?text=+) #3c5461     |
| --cells-codemirror-code-font-family                | .cm-s-cells.CodeMirror         | font-family      | Fira Mono, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace |
| --cells-codemirror-code-font-size                  | .cm-s-cells.CodeMirror         | font-size        | 0.875rem                                                             |
| --cells-codemirror-line-highlight-background-color | .cm-s-cells .line-highlight    | background-color | ![#ffc](https://placehold.it/15/ffc/000000?text=+) #ffc              |
### @apply
| Mixins                                 | Selector              | Value |
| -------------------------------------- | --------------------- | ----- |
| --cells-codemirror                     | :host                 | {}    |
| --cells-codemirror-btn-format          | .btn-format           | {}    |
| --cells-codemirror-btn-format-disabled | .btn-format[disabled] | {}    |
