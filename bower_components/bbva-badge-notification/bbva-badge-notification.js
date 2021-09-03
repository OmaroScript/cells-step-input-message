{
  const { html, Element } = Polymer;

  /**
  `<bbva-badge-notification>` Badge of notifications.
  When it is red it is simply informative of the number of notifications you have pending.
  When it is green or blue it is associated with a panel action.

  Available classes:
  * abs: Absolute position of component. When use, add `position: relative` to the father. Extra classes:
  * top-left: Top left position. Translate -8px/-8px.
  * top-right: Top right position. Translate 8px/-8px.
  * bottom-left: Bottom left position. Translate -8px/8px.
  * bottom-right: Bottom right position. Translate 8px/8px.

  Example:

  ```html
  <bbva-badge-notification
    accessibility-text="8 Notificaciones"
    text="8"></bbva-badge-notification>

  <bbva-badge-notification
    accessibility-text="8 Notificaciones"
    class="abs top-right"
    text="8"></bbva-badge-notification>
  ```

  ## Styling

  The following custom properties and mixins are available for styling:

  | Custom Property                               | Description                      | Default                              |
  | :-------------------------------------------- | :------------------------------- | :----------------------------------- |
  | --bbva-badge-notification                     | Mixin applied to :host           | {}                                   |
  | --bbva-badge-notification-bg-color            | Background color                 | var(--bbva-dark-red, #B92A45)        |
  | --bbva-badge-notification-boder-color         | Border color                     | var(--bbva-white, #FFFFFF)           |
  | --bbva-badge-notification-color               | Text color                       | var(--bbva-white, #FFFFFF)           |
  | --bbva-badge-notification-span                | Mixin applied to span            | {}                                   |
  | --bbva-badge-notification-boder-color-dark    | Border color with class dark     | var(--bbva-core-blue, #004481)       |
  | --bbva-badge-notification-boder-bg-color-dark | Background color with class dark | var(--bbva-white-core-blue, #1464A5) |
  | --bbva-badge-notification-position            | Position                         | absolute                             |

  * @customElement
  * @polymer
  * @demo demo/index.html
  */
  class BbvaBadgeNotification extends Element {
    static get is() {
      return 'bbva-badge-notification';
    }

    static get properties() {
      return {
        /**
         * Information text for accessibility
         */
        accessibilityText: {
          type: String
        },
        /**
         * Badge text
         */
        text: {
          type: String
        }
      };
    }

    static get template() {
      return html `
        <style include="bbva-badge-notification-styles bbva-badge-notification-shared-styles"></style>

        <span id="badge" class="badge-notification" tabindex="0" aria-label$="[[accessibilityText]]">[[text]]</span>
      `;
    }
  }

  customElements.define(BbvaBadgeNotification.is, BbvaBadgeNotification);
}
