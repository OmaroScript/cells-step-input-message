/**
* `<cells-skeleton-item>` is a loading status layout consisting of a row that can include many optional items (titles, headers, round icons, different kind of lines...)
*
* Examples:
*
* Skeleton for two pairs of opposing bars, in two rows:
* ```html
* <cells-skeleton-item show-item></cells-skeleton-item>
* ```
*
* Skeleton for a title:
* ```html
* <cells-skeleton-item show-title></cells-skeleton-item>
* ```
*
* Skeleton for a header:
* ```html
* <cells-skeleton-item show-header></cells-skeleton-item>
* ```
*
* Skeleton for a round icon:
* ```html
* <cells-skeleton-item show-icon></cells-skeleton-item>
* ```
*
* Skeleton item with a fixed padding of 79 pixels to the right border and 48 pixels to the left border:
* ```html
* <cells-skeleton-item first-indentation show-item></cells-skeleton-item>
* ```
*
* Skeleton item with a fixed padding of 130 pixels to the right border and 62 pixels to the left border:
* ```html
* <cells-skeleton-item second-indentation show-item></cells-skeleton-item>
* ```
*
* Skeleton item with a darker background:
* ```html
* <cells-skeleton-item show-background show-item></cells-skeleton-item>
* ```
*
* Skeleton for a single line:
* ```html
* <cells-skeleton-item show-single></cells-skeleton-item>
* ```
*
* Skeleton for a thick line:
* ```html
* <cells-skeleton-item show-single thick-line></cells-skeleton-item>
* ```
*
* Skeleton for a round avatar:
* ```html
* <cells-skeleton-item show-avatar></cells-skeleton-item>
* ```
*
* Skeleton for a set of four bullets:
* ```html
* <cells-skeleton-item show-bullets></cells-skeleton-item>
* ```
*
* ## Styling
*
* The following custom properties and mixins are available for styling:
*
* | Custom property                                   | Description                                     | Default  |
* |:-------------------------------------------------:|:-----------------------------------------------:|:--------:|
* | --cells-skeleton-item                             | Mixin applied to :host                          | {}       |
* | --cells-skeleton-item-box-height                  | box height                                      | 18px     |
* | --cells-skeleton-item-box-width                   | box width                                       | 40%      |
* | --cells-skeleton-item-box-thick                   | Mixin applied to box-thick                      | {}       |
* | --cells-skeleton-item-box-thick-height            | Mixin applied to box-thick height               | 26px     |
* | --cells-skeleton-item-box-thick-margin-top        | Mixin applied to box-thick margin-top           | 3px      |
* | --cells-skeleton-item-box-first-child             | Mixin applied to first child item in box        | {}       |
* | --cells-skeleton-item-box-width-first-child       | width of the first-child item in box            | 55%      |
* | --cells-skeleton-item-box-bg-color                | Background color of box                         | var(--bbva-200, #E9E9E9)  |
* | --cells-skeleton-item-box-xs                      | Mixin applied to item box xs                    | {}       |
* | --cells-skeleton-item-box-xs-height               | box-xs height                                   | 15px     |
* | --cells-skeleton-item-box-xs-width                | box-xs width                                    | 20%      |
* | --cells-skeleton-item-box-xs-first-child          | Mixin applied to first child in item box xs     | {}       |
* | --cells-skeleton-item-title                       | Mixin applied to title                          | {}       |
* | --cells-skeleton-item-header                      | Mixin applied to item header                    | {}       |
* | --cells-skeleton-item-indent                      | Mixin applied to item padding                   | {}       |
* | --cells-skeleton-item-indent-first                | Mixin applied to item padding                   | left: 79px, right: 48px   |
* | --cells-skeleton-item-indent-second               | Mixin applied to item padding                   | left: 130px, right: 62px  |
* | --cells-skeleton-item-line                        | Mixin applied to line wrapper                   | {}       |
* | --cells-skeleton-item-line-background             | Mixin applied to line wrapper background color  | var(--bbva-100, #F4F4F4)  |
* | --cells-skeleton-item-icon                        | Mixin applied to box                            | {}       |
* | --cells-skeleton-item-icon-width                  | Mixin applied to box                            | 32px     |
* | --cells-skeleton-item-icon-height                 | Mixin applied to box                            | 32px     |
* | --cells-skeleton-item-icon-color                  | Mixin applied to box                            | var(--bbva-200, #E9E9E9)  |
* | --cells-skeleton-item-box                         | Mixin applied to box                            | {}       |
* | --cells-skeleton-item-content                     | Mixin applied to item content                   | {}       |
* | --cells-skeleton-item-content-top                 | Mixin applied to item content top               | {}       |
* | --cells-skeleton-item-content-bottom              | Mixin applied to item content bottom            | {}       |
* | --cells-skeleton-item-content-bottom-box-xs       | Mixin applied to content bottom box xs          | {}       |
* | --cells-skeleton-item-content-bottom-box-xs-width | width bottom box xs                             | 15%      |
* | --cells-skeleton-item-wrapper                     | Mixin applied to item wrapper                   | {}       |
* | --cells-skeleton-item-avatar                      | Mixin applied to avatar content                 | {}       |
* | --cells-skeleton-item-avatar-background-color     | Background color of avatar section              | var(--bbva-core-blue, #004481)
* | --cells-skeleton-item-avatar-head                 | Mixin applied to avatar head                    | {}       |
* | --cells-skeleton-item-avatar-head-width           | width of avatar head                            | 50px     |
* | --cells-skeleton-item-avatar-head-background-color | backgrounc-color of avatar head                | var(--bbva-white, #fff) |
* | --cells-skeleton-item-avatar-head-height          | height of avatar head                           | 50px     |
* | --cells-skeleton-item-actions                     | Mixin applied to actions                        | {}       |
* | --cells-skeleton-item-actions-box                 | Mixin applied to actions box                    | {}       |
* | --cells-skeleton-item-actions-box-item            | Mixin applied to item in action box             | {}       |
* | --cells-skeleton-item-actions-box-item-before     | Mixin applied to item in action box before      | {}       |
* | --cells-skeleton-item-amount-list-margin          | amount-list default margin value                | rem(1px) rem(16px) rem(8px) rem(16px) |
* | --cells-skeleton-item-amount-list-padding         | amount-list default padding value               | 0             |
* | --cells-skeleton-item-amount-list-item-width      | amount-list default width value                 | 45%           |
* | --cells-skeleton-item-amount-height               | amount default height value                     | rem(56px)     |
* | --cells-skeleton-item-amount-border-radius        | amount default border-radius value              | rem(1px)      |
* | --cells-skeleton-item-amount-background-color     | amount default border-radius value              | var(--bbva-100, #f4f4f4) |
* | --cells-skeleton-item-amount-width                | amount default width value                      | rem(136px)    |
* | --cells-skeleton-item-amount-margin-bottom        | amount default margin-bottom value              | 1rem          |
* | --cells-skeleton-item-bar-width                   | bar default width value                         | 70%           |
* | --cells-skeleton-item-bar-margin-left             | bar default margin-left value                   | 1.25rem       |
* | --cells-skeleton-item-bar-margin-bottom           | bar default margin-bottom value                 | 1.125rem      |
* | --cells-skeleton-item-bar-background-color        | bar default background-color value              | var(--bbva-200, #E9E9E9) |
* | --cells-skeleton-item-bar-height                  | bar default height value                        | 1.125rem      |
* | --cells-skeleton-item-bar-margin-top              | bar default margin-top value                    | 1.125rem      |
* | --cells-skeleton-item-bar-webkit-transform        | bar default webkit-transform value              | skewX(160deg) |
* | --cells-skeleton-item-bar-transform               | bar default transform value                     | skewX(160deg) |
* | --cells-skeleton-item-amount-list-item            | Mixin applied to amount-list__item              | {}            |
* | --cells-skeleton-item-amount-list                 | Mixin applied to amount-list                    | {}            |
* | --cells-skeleton-item-amount                      | Mixin applied to amount                         | {}            |
* | --cells-skeleton-item-bar                         | Mixin applied to amount-list                    | {}            |
*   @polymer
*   @customElement
*   @summary
*   @extends {Polymer.Element}
*   @demo demo/index.html
*   @hero cells-skeleton-item.png
*/
class CellsSkeletonItem extends Polymer.Element {
  static get is() {
    return 'cells-skeleton-item';
  }
  static get properties() {
    return {
      /**
      * Render a plain disc at the leftmost part of the line
      */
      showIcon: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
      * Render the line with a fixed padding
      */
      firstIndentation: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
      * Render the line with a fixed padding
      */
      secondIndentation: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
      * Apply a darker background class
      */
      showBackground: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
      * Render a skeleton header
      */
      showHeader: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Render a skeleton title
       */
      showTitle: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Render a skeleton item formed by 4 long boxes distributed in two lines
       */
      showItem: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Apply the skeleton avatar class
       */
      showAvatar: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Apply the skeleton bullets class
       */
      showBullets: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Render the skeleton as a single line
       */
      showSingle: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Apply the thick line class. Evaluated in _selectBoxHeight()
       */
      thickLine: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Render skeleton amount group
       */
      showSkeletonAmountGroup: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Number of amount group skeleton elements to be displayed
       */
      numberSkeletonAmountGroupElements: {
        type: Number,
        value: 0
      },
      /**
       * Number of skeleton bullets
       */
      numberSkeletonBullets: {
        type: Number,
        value: 4
      }
    };
  }

  _showFirstIndentation() {
  /**
   * Checks if the property firstIndentation is informed in order to render the .firstIndentation class or not
   */
    if (this.firstIndentation) {
      return 'indent indent--first';
    }
    return '';
  }

  _showSecondIndentation() {
    /**
     * Checks if the property secondIndentation is informed in order to render the .secondIndentation class or not
     */
    if (this.secondIndentation) {
      return 'indent indent--second';
    }
    return '';
  }

  _showBackground() {
  /**
   * Checks if the property showBackground is informed in order to render the .line class in the proper format
   */
    if (this.showBackground) {
      return 'line line--background';
    }
    return 'line';
  }

  _selectBoxHeight() {
  /**
   * Checks if the property thickLine is informed in order to render the proper .box class
   */
    if (this.thickLine) {
      return 'box box--thick';
    }
    return 'box';
  }

  /**
   * Generates skeleton elements
   * @param {*} numberSkeletonAmountGroupElements
   */
  _generateAmountGroupSkeletonElements(numberSkeletonAmountGroupElements) {
    return new Array(numberSkeletonAmountGroupElements);
  }
}

window.customElements.define(CellsSkeletonItem.is, CellsSkeletonItem);