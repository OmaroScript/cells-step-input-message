# cells-text-description

Set of titleIcon, title, subtitle, main description and secondary description.
All elements are optionals.

Example:
```html
<cells-text-description title="ALTA DE BENEFICIARIOS" subtitle="Completa los datos para registrar tus beneficiarios"  titleIcon="help"></cells-text-description>
```
Using marginTopHigh class, will set a large margin-top to allow necesary space to use a subheader like cells-text-link-subheader
Example:
```html
<cells-text-description class="marginTopHigh" title="ALTA DE BENEFICIARIOS" subtitle="Completa los datos para registrar tus beneficiarios"></cells-text-description>
```
Bind an object to 'description' property to show a list of text descriptions.
Example:
```html
<cells-text-description description="[[data]]"></cells-text-description>
```


## Styling

The following custom properties and mixins are available for styling:

| Custom property                                     | Description                      | Value                  |
|:---------------------------------------------------    |:---------------------------------|:-----------------------|
| --cells-text-description-title-font-size;              | Title font size                  | 15px                   |
| --cells-text-description-subtitle-font-size;           | Subtitle font size               | 15px                   |
| --cells-text-description-description-font-size;        | Description font size            | 15px                   |
| --cells-text-description-margin-top;                   | Margin top                       | 88px                   |
| --cells-text-description-no-margin-bottom;             | Margin bottom                    | 0                      |
| --cells-text-description-title-icon-align-position;    | Position                         | absolute               |
| --cells-text-description-title-icon-align-margin;      | Margin                           | rem(-2px) 0 0 rem(5px) |
| --cells-text-description-main-description-margin-top   | Margin top                       | 16px
| --cells-text-description-size-xl-font-size             | .htmlDescription strong.size-xl  | rem(18px)              |
| --cells-text-description-main-description-margin-top   | Margin top                       | 16px
| --cells-text-description-color-bbva-white-title;       | Title font color                 | --bbva-white           |
| --cells-text-description-color-bbva-white-description  | Description font color           | --bbva-white           |   
| --cells-text-description-subtitle-text-color           | Subtitle font color              | --bbva-600             |  
| --cells-text-description-margin-top-xl                 | .margin-top-xl Margin Top        | 2rem                   |

| Mixins                                                                    | Selector                                                                     | Value                             |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------- |
| --cells-text-description;                                                 | Mixin applied to :host                                                       | {}                                |
| --cells-text-description-title;                                           | Mixin applied to .title                                                      | {}                                |
| --cells-text-description-subtitle;                                        | Mixin applied to .subtitle                                                   | {}                                |
| --cells-text-description-description;                                     | Mixin applied to .description                                                | {}                                |
| --cells-text-description-main-description;                                | Mixin applied to --cells-input-place-results-item-span                       | {}                                |
| --cells-text-description-description-s;   		                        | Mixin applied to .description 											   | {}                                |
| --cells-text-description-secondary-description;                           | Mixin applied to .results-item span                                          | {}                                |
| --cells-text-description-margin-top                                       | Mixin applied to :host(.marginTopHigh)                                       | {}                                |
| --cells-text-description-title-icon-vertical-align-center                 | Mixin applied to :host(.title-icon-vertical-align-center)                    | {}                                |
| --cells-text-description-title-icon-vertical-align-center-title           | Mixin applied to :host(.title-icon-vertical-align-center) .title             | {}                                |
| --cells-text-description-title-icon-vertical-align-center-title-icon      | Mixin applied to :host(.title-icon-vertical-align-center) .title-icon        | {}                                |
| --cells-text-description-subtitle-xs                                      | Mixin applied to :host(.subtitle-xs)                                         | {}                                |
| --cells-text-description-subtitle-gap-top-m                               | Mixin applied to :host(.subtitle-gap-top-m)                                  | {}                                |
| --cells-text-description-html-description;                                | Mixin applied to .html-description                                           | {}                                |
| --cells-text-description-html-description-strong;                         | Mixin applied to .html-description strong                                    | {}                                |
| --cells-text-description-description-l                                    | Mixin applied to :host(.description-l) .desciption                           | {}                                |
| --cells-text-description-subtitle-ml                                      | Mixin applied to :host(.subtitle-ml) .subtitle                               | {}                                |
| --cells-text-description-link                                             | Mixin applied to .link                                                       | {}                                |
| --cells-text-description-link-button                                      | Mixin applied to .link button                                                | {}                                |
| --cells-text-description-title-gap-bottom-none                            | Mixin applied to .host(.title-gap-bottom-none)                               | {}                                |
| --cells-text-description-title-gap-bottom-none-title                      | Mixin applied to .host(.title-gap-bottom-none) .title                        | {}                                |
| --cells-text-description-normal-title                                     | Mixin applied to .host(.normal-title) .title                                 | {}                                |
| --cells-text-description-normal-title-title                               | Mixin applied to .host(.normal-title)                                        | {}                                |
| --cells-text-description-size-xl                                          | Mixin applied to .htmlDescription strong.size-xl                             | {}                                |
| --cells-text-description-subtitle-xl                                      | Mixin applied to host(.subtitle-xl) .subtitle                                | {}                                |
| --cells-text-description-subtitle-color                                   | Mixin applied to host(.subtitle-color) .subtitle                             | {}                                |
| --cells-text-description-light-description-font-size-color                | Mixin applied to :host(.light-description) .description                      | {}                                |
| --cells-text-description-light-description-strong-xl                      | Mixin applied to :host(.light-description) .htmlDescription strong.size-xl   | {}                                |
| --cells-text-description-light-description-html-strong                    | Mixin applied to :host(.light-description) .htmlDescription strong           | {}                                |
| --cells-text-description-light-description                                | Mixin applied to host(.light-description)                                    | {}                                |
| --cells-text-description-centered                                         | Mixin applied to host(.text-centered)                                        | {}                                |
| --cells-text-description-centered-title                                   | Mixin applied to host(.text-centered) .title                                 | {}                                |
| --cells-text-description-centered-main-title                              | Mixin applied to host(.text-centered) .main-title                            | {}                                |
| --cells-text-description-color-bbva-white;                                | Mixin applied to :host(.color--bbva-white) .title .description               | {}                                |
| --cells-text-description-italic-centered-description;                     | Mixin applied to :host(.italic-description) .mainDescription                 | {}                                |
| --cells-text-description-normal-italic-centered-description;              | Mixin applied to :host(.normal-italic-centered-description) .mainDescription.| {}                                |
| --cells-text-description-subtitle-l;                                      | Mixin applied to :host(.subtitle-l) .subtitle                                | {}                                |
| --cells-text-description-subtitle-dark-blue;                              | Mixin applied to :host(.subtitle-dark-blue) .subtitle                        | {}                                |

| Classes | Description                           |
| :------------------- | :------------------------------------ |
| .marginTopHigh       | Styles for extra large margin top            |
| .margin-top-xxxl     | Styles for extra large margin top |
| .margin-top-l        | Styles for large margin top  |
| .row-gap-bottom-l    | Styles for large margin bottom  |
| .title-s             | Styles for default normal title font size  |
| .subtitle-s          | Styles for default normal subtitle font size  |
| .subtitle-gap-bottom-s          | Styles for small (8px) subtitle margin bottom  |
| .main-description-margin-bottom-m         | Styles for regular (16px) main description margin bottom  |
| .main-description-margin-left-m         | Styles for regular (16px) main description margin left  |
| .main-description-no-margin-top         | Styles for main description without margin top  |
| .first-main-description-no-margin-top        | Styles for first main description without margin top  |
| .link-text-s        | Styles for regular (15px) link font size  |
| .title-gap-bottom-none     | Styles for title without margin bottom  |
| .italic-centered-description | Styles for italic and centered description |
| .color--bbva-white  | Styles for title and description font color white  |
| .subtitle-l          | Styles for large subtitle font size  |
| .subtitle-dark-blue  | Styles for subtitle font color dark blue  |

## Events
| Name |Description |data |
| --- |--- |--- |
| cells-text-description-title-icon-click | Fires an event on icon click |
