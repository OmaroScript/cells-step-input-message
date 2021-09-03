/**
 * `<cells-molecule-input>` contains an `iron-input` with a floating label. When input value is empty, label acts as a placeholder for the input. Otherwise, it floats over the input value.
 *
 * This component can include up to two optional icons, which can have different functionalities. Also, it includes validation functionalities beyond the ones provided by 'iron-input' component.
 *
 *  ## Types and basic usage
 *
 * User must define a `label` tag for the input, which will show the main label/placeholder of the input. Default type is `text`, but you can use the `type` attribute to set a different one. Allowed types are:
 *
 * - Text
 * - Password
 * - Number
 * - Email
 *
 * ```html
 * <cells-molecule-input label="Your Name"></cells-molecule-input>
 * <cells-molecule-input label="Your ID" type="number" value="123456"></cells-molecule-input>
 * ```
 *
 * * `disabled` attribute can be used to prevent the input from being edited or modified with specific style and **not** submitted when in a form
 * * ```html
 * <cells-molecule-input label="Your password" type="password" disabled></cells-molecule-input>
 * ```
 *
 * `readonly` attribute can be used to prevent the input from being edited or modified but displayed as a normal input and submitted when in a form
 *
 * ```html
 * <cells-molecule-input label="Informative" type="text" value="Only can be read" readonly></cells-molecule-input>
 * ```
 *
 *
 * `name` attribute can be set if input is going to be used inside/mapped to a form.
 *
 * ```html
 * <cells-molecule-input label="Your Name" name="yourNameField"></cells-molecule-input>
 * ```
 *
 * Setting the `select-all-on-focus` attribute will make the entire input value to be selected when input gets focused.
 *
 * ```html
 * <cells-molecule-input label="Your Name" value="Element number 1" select-all-on-focus></cells-molecule-input>
 * ```
 *
 *
 * The `autofocus` attribute will make the input to be automatically focused when the page is loaded.
 *
 * ```html
 * <cells-molecule-input label="Your Name" autofocus></cells-molecule-input>
 * ```
 *
 *
 * The 'autocompletevalue' default value is `off` and it will help the input to be automatically populate suggested items based on chrome saved form data.
 *
 * ```html
 * <cells-molecule-input label="Your Name" autocomplete-value="shipping street-address"></cells-molecule-input>
 * ```
 *
 *
 * ## Main icon and secondary icon
 *
 * The component can have one, two or zero action icons defined. User can pass an icon to the `icon` attribute to define a main icon, and to the `extra-icon` attribute to define a secondary icon. You must use also `icon-label` and `extra-icon-label` attributes to provide textual description of the icons functionality.
 *
 * ```html
 * <cells-molecule-input label="Your Name" icon="coronita:close" icon-label="Clear field"></cells-molecule-input>
 * ```
 *
 * Both for the main and the secondary icon, you can use `icon-toggled` and `extra-icon-toggled` attributes to define a 'toggle icon': an additional icon which will replace the current icon once it's activated.
 *
 * ```html
 * <cells-molecule-input label="Password" type="password" icon="coronita:visualize" icon-toggled="coronita:hide" icon-label="View or hide password" extra-icon="coronita:close" extra-icon-label="Clear field"></cells-molecule-input>
 * ```
 *
 * The icon passed to `error-icon` attribute is used when the input gets an invalid state.
 *
 * ```html
 * <cells-molecule-input label="Your email" type="email" auto-validate error-icon="coronita:alert"></cells-molecule-input>
 * ```
 *
 * `icon-size` attribute can be used to define a specific size (in pixels) to the input icons.
 *
 * ```html
 * <cells-molecule-input label="Your Name" icon="coronita:close" icon-size="26" icon-label="Clear field"></cells-molecule-input>
 * ```
 *
 * `error-message-icon-size` attribute can be used to define a specific size (in pixels) to the error message icons.
 *
 * ```html
 * <cells-molecule-input label="Your Name" icon="coronita:close" icon-size="26" error-message-icon-size="16" icon-label="Clear field"></cells-molecule-input>
 * ```
 *
 * ### Icon action
 * Activating an icon will fire an event, but also, predefined functionalities can be called. Available functionalities for the input are:
 *
 * - **clear**: activating the icon will set empty the input value and will return focus to the input.
 * - **toggle**: activating the icon will set the input type to 'text' or to its original type. Also, it will toggle between original icon and toggled icon, and will return focus to the input.
 * - **event**: activating the icon will just fire an event.
 * - **none**: the icon won't even be a button; so, it won't be clickable, and it wont' fire any event.
 *
 * If an input with the type 'password' has an icon and an iconToggled, it will receive the 'toggle' functionality by default. Any other case (with an icon defined) will use the 'clear' functionality by default.
 *
 * You can use the 'iconAction' or 'extraIconAction' properties to override the default functionalities with one of the available functionalities (clear, toggle, event or none).
 *
 * ```html
 * <cells-molecule-input label="Your secret ID" icon="coronita:visualize" icon-toggled="coronita:hide" icon-label="Toggle state" icon-action="toggle"></cells-molecule-input>
 * <cells-molecule-input label="Your personal code" icon="coronita:alert" icon-action="event" icon-label="Warning"></cells-molecule-input>
 * <cells-molecule-input label="Your credit card" icon="coronita:creditcard" icon-action="none" ></cells-molecule-input>
 *
 * ### Icon visibility
 * Icons are only visible under certain conditions.
 *
 * - **focused**: icon is visible if the component is focused.
 * - **content**: icon is visible if component value is not empty.
 * - **focused-content**: icon is visible if component is focused or if component value is not empty.
 * - **always**: icon is always visible.
 *
 * A 'password' type input which acts as a toggle (changing the input type to 'text' and back) will be visible by default both when it's focused or when it has content. Any other case (with an icon defined) will be visible by default when the input has any content in it.
 *
 * Use the 'iconVisibility' or 'extraIconVisibility' properties to override the default visibility of an icon.
 *
 * ```html
 * <cells-molecule-input label="Your card" icon="coronita:creditcard" icon-visibility="always" icon-label="View credit card"></cells-molecule-input>
 * <cells-molecule-input label="Your code" icon="coronita:alert" extra-icon="coronita:alarm" extra-icon-visibility="focused" icon-label="Warning" extra-icon-label="Check warning message"></cells-molecule-input>
 * ```
 *
 * ## Validations
 * Component can validate or limit the input content in different ways.
 *
 * You can invoke the `validate` method on the component to run a validation of the input value, or add the `auto-validate` attribute to have it automatically validated when the value changes.
 *
 * ```html
 * <cells-molecule-input label="Your email" type="email" auto-validate></cells-molecule-input>
 * ```
 *
 * `error-message` attribute can be used to show an error message when input value is invalid. You can also use the `error-icon` attribute to pass an icon to show when the input is invalid.
 *
 * ```html
 * <cells-molecule-input label="Your email" type="email" auto-validate error-message="You must enter a valid email" error-icon="coronita:alert"></cells-molecule-input>
 * ```
 * __Extra content for error message__
 *
 * `error-content` slot can be used to add extra content to error message like icons, text and image etc.
 *
 * ```html
 * <slot name="error-content"></slot>
 * ```
 *
 * The component will use the `iron-input` own validation based on input type. You can use the the `allowed-value` attribute to pass a specific regular expression instead. The value must match the regular expression to validate correctly.
 *
 * ```html
 * <cells-molecule-input label="Your email" type="email" auto-validate error-message="You must enter a valid email ending in .com" allowed-value="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.com$"></cells-molecule-input>
 * ```
 *
 * Also, setting the `required` attribute to true will make the input validation to fail when its value is empty.
 *
 * ```html
 * <cells-molecule-input label="Your name" required error-message="This field cannot be empty"></cells-molecule-input>
 * ```
 *
 * `max-length` attribute can be set to limit the length of the value.
 *
 * ```html
 * <cells-molecule-input label="Your ID" type="number" max-length="8"></cells-molecule-input>
 * ```
 *
 * `prevent-invalid-input` attribute can be set to true to prevent user from entering incorrect input, as in `iron-input`. It will use the input type for it (only supported for type=number), but you can also use the `allowed-chars` attribute to set which characters are allowed. This attribute can receive a regular expression which reflects the allowed characters.
 *
 * ```html
 * <cells-molecule-input label="Your username" type="text" max-length="10" prevent-invalid-input allowed-chars="[a-zA-Z0-9]"></cells-molecule-input>
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
 *
 * Custom property                                             | Description                                                        | Default
 * :---------------------------------------------------------- | :----------------------------------------------------------------- | :------
 * --cells-molecule-input-icon-button-size                     | Icon buttons size                                                  | rem(48px)
 * --cells-molecule-input-icons-button-gutter                  | Icon buttons width adjustement when both icons are used            | rem(8px)
 * --cells-molecule-input-background-color                     | Input background color                                             | #F4F4F4
 * --cells-molecule-input-border-bottom                        | Input border bottom                                                | 1px solid #666
 * --cells-molecule-input-field-min-height                     | Input min height                                                   | rem(48px)
 * --cells-molecule-input-disabled-background-color            | Disabled input background color                                    | rgba(244, 244, 244, 0.4)
 * --cells-molecule-input-invalid-border-bottom                | Invalid input border bottom                                        | var(--bbva-dark-red, #b92a45)
 * --cells-molecule-input-invalid-background-color             | Invalid input background color                                     | #F8D7DC
 * --cells-molecule-input-field-font-size                      | Font size for input field                                          | 15px (0.9375rem)
 * --cells-molecule-input-field-label-color                    | Label color                                                        | #666666
 * --cells-molecule-input-disabled-field-label-color           | Disabled input label color                                         | #D3D3D3
 * --cells-molecule-input-field-input-color                    | Input text color                                                   | #121212
 * --cells-molecule-input-disabled-field-input-color           | Input text color when it is disabled                               | #D3D3D3
 * --cells-molecule-input-button-color                         | Icon buttons color                                                 | #121212
 * --cells-molecule-input-button-hover-color                   | Icon buttons color on hover                                        | #2A86CA
 * --cells-molecule-input-button-active-color                  | Icon buttons color on active                                       | #1162A5
 * --icon-button-size                                          | Icon button width or height                                        |
 * --icons-button-gutter                                       | Icon button gutter                                                 |
 * --cells-molecule-input-button-focus-color                   | Icon buttons color on focus                                        | #2A86CA
 * --cells-molecule-input-icon-button-ripple-color             | Ripple effect color                                                | #004481
 * --cells-molecule-input-invalid-error-icon-color             | Error icon button color                                            | #f35e61
 * --cells-molecule-input-has-content-invalid-icon             | Empty mixin for icon when the field has invalid content            | {}
 * --cells-molecule-input-error-message-icon-color             | Color for icon in error message                                    | #f35e61
 * --cells-molecule-input-text-error-color                     | Error message text color                                           | #121212
 * --cells-molecule-input-color                                | Input fill color                                                   | #FFF
 * --cells-molecule-input-invalid-field-label-color            | Invalid input label color                                          | #666666
 *
 * Mixins                                                      | Description                                                        | Default
 * :---------------------------------------------------------- | :----------------------------------------------------------------- | :------
 * --cells-molecule-input                                      | Empty mixin for component                                          | {}
 * --cells-molecule-input-disabled-wrapper                     | Empty mixin for field and error wrapper on disabled state          | {}
 * --cells-molecule-input-readonly-wrapper                     | Empty mixin for field and error wrapper on readonly state          | {}
 * --cells-molecule-input-invalid-wrapper                      | Empty mixin for field and error wrapper on invalid state           | {}
 * --cells-molecule-input-has-content-wrapper                  | Empty mixin for field when it has content                          | {}
 * --cells-molecule-input-has-content-invalid-wrapper          | Empty mixin for field wrapper when it has invalid content          | {}
 * --cells-molecule-amount-input-focused                       | Empty mixin for amount input on focus                              | {}
 * --cells-molecule-input-withcontent-field-label              | Empty mixin for label when input has content                       | {}
 * --cells-molecule-input-disabled-field-label                 | Empty mixin for label when input is disabled                       | {}
 * --cells-molecule-input-readonly-field-label                 | Empty mixin for label when input is readonly                       | {}
 * --cells-molecule-input-invalid-field-label                  | Empty mixin for label when input is invalid                        | {}
 * --cells-molecule-input-field-label                          | Empty mixin for label                                              | {}
 * --cells-molecule-input-withcontent-field-input              | Empty mixin for input when it has content                          | {}
 * --cells-molecule-input-disabled-field-input                 | Empty mixin for input when it is disabled                          | {}
 * --cells-molecule-input-readonly-field-input                 | Empty mixin for input when it is readonly                          | {}
 * --cells-molecule-input-invalid-field-input                  | Input text color when it is invalid                                | {}
 * --cells-molecule-input-has-content-invalid-field            | Empty mixin for field when it has invalid content                  | {}
 * --cells-molecule-input-withicon-field-input                 | Empty mixin for input when it has icon                             | {}
 * --cells-molecule-input-autofill                             | Empty mixin on use the autofill in mobile                          | {}
 * --cells-molecule-input-field-input                          | Empty mixin for input                                              | {}
 * --cells-molecule-input-field                                | Empty mixin for input and label wrapper                            | {}
 * --cells-molecule-input-button-is-filled-blur                | Empty mixin for buttons when input is blur                         | {}
 * --cells-molecule-input-icon-button-ripple-applied           | Empty mixin for ripple effect when it is applied                   | {}
 * --cells-molecule-input-icon-button-ripple                   | Empty mixin for ripple area                                        | {}
 * --cells-molecule-input-icon-button                          | Empty mixin for icon buttons                                       | {}
 * --cells-molecule-input-button-visible-always-is-filled-blur | Empty mixin for buttons when are always visible and input is blur  | {}
 * --cells-molecule-input-icon-visible                         | Empty mixin for icon buttons when visible                          | {}
 * --cells-molecule-input-disabled-icon-visible-iron-icon      | Empty mixin for disabled icon                                      | {}
 * --cells-molecule-input-disabled-icon-visible                | Empty mixin for input icon visible but disabled                    | {}
 * --cells-molecule-input-invalid-icon-error                   | Empty mixin for error icon                                         | {}
 * --cells-molecule-input-right-icon-button                    | Empty mixin for main icon when both icons are used                 | {}
 * --cells-molecule-input-left-icon-button                     | Empty mixin for secondary icon when both icons are used            | {}
 * --cells-molecule-input-both-icons-visible                   | Empty mixin for icons when both icons are visible                  | {}
 * --cells-molecule-input-icon                                 | Empty mixin for icons                                              | {}
 * --cells-molecule-input-error-message-wrapper-iron-icon      | Empty mixin for icon in message section below the input            | {}
 * --cells-molecule-input-text-error-message-wrapper           | Empty mixin applied to the error message wrapper                   | {}
 * --cells-molecule-input-text-error                           | Empty mixin for error message                                      | {}
 * --cells-molecule-input-number-spin-buttons                  | Empty mixin for input number spinners                              | {}
 *
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 * @demo demo/index.html
 * @hero cells-molecule-input.png
 */
class CellsMoleculeInput extends Polymer.mixinBehaviors([ CellsBehaviors.i18nBehavior ], Polymer.Element) {
  /**
   * Event fired when input is focused
   * @event cells-molecule-input-focus
   */

  /**
   * Event fired when input loses focus
   * @event cells-molecule-input-blur
   */

  /**
   * Event fired when delete input case
   * @event delete-input-case
   */

  /**
   * Event fired after deleting input case
   * @event user-auto-mask
   * @param {Boolean} autoMask
   */

  /**
   * Event fired when the `value` property changes.
   * @event value-changed
   */

  /**
   * Event fired when the `bindValue` property changes.
   * @event bind-value-changed
   */

  /**
   * Event fired when the `type` property changes.
   * @event type-changed
   */

  /**
   * Event fired when the `focused` property changes.
   * @event focused-changed
   */

  /**
   * Event fired when the `invalid` property changes.
   * @event invalid-changed
   */

  static get is() {
    return 'cells-molecule-input';
  }
  static get properties() {
    return {
      /**
       * Label of the input
       */
      label: String,
      /**
       * Value of the input. Can be used to define a default value for the input
       */
      value: {
        type: String,
        notify: true,
        observer: '_valueObserver'
      },
      /**
       * Property that mirrors the value property
       */
      bindValue: {
        type: String,
        notify: true
      },
      /**
       * Type of the input. Supported types are text, password, number and email
       */
      type: {
        type: String,
        value: 'text',
        reflectToAttribute: true,
        notify: true
      },
      /**
       * Name that maps to HTML native's name attribute (useful for forms)
       */
      name: {
        type: String,
        reflectToAttribute: true
      },
      /***
       *  asign autocomplete value autocomplete="shipping given-name" and default value 'off' (use full to get chrome saved form data to prefill )
       */
      autocompleteValue: {
        type: String,
        value: 'off',
        reflectToAttribute: true
      },
      /****
       * flag to keep the label fixed on top.
       */
      labelTop: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /****
       * autocorrectvalue default set on
       */
      autocorrectValue: {
        type: String,
        value: 'off',
        reflectToAttribute: true
      },
      /**
       * If true, the element currently has focus
       */
      focused: {
        type: Boolean,
        notify: true,
        value: false,
        readOnly: true,
        reflectToAttribute: true
      },
      /**
       * If true, the element is currently invalid
       */
      invalid: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
      /**
       * If true, the element is currently disabled
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If true, the element is currently in readonly mode
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If true, the element is required (it must not be empty in order to validate correctly)
       */
      required: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_requiredObserver'
      },
      /**
       * If true, the element has autofocus (it receives the focus when the page is loaded)
       */
      autofocus: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If true, the user can't write wrong chars in the input, according to the 'allowedChars' property
       */
      preventInvalidInput: {
        type: Boolean,
        value: false
      },
      /**
       * Max length of the input value
       */
      maxLength: {
        type: String,
        value: ''
      },
      /**
       * Set to true to validate the input each time the value is changed
       */
      autoValidate: {
        type: Boolean,
        value: false
      },
      /**
       * Error message to be shown in case input value is invalid
       */
      errorMessage: {
        type: String,
        value: null
      },
      /**
       * Error message icon to be shown in case input value is invalid and error message icon exist
       */
      errorMessageIcon: {
        type: String,
        value: null,
        reflectToAttribute: true
      },
      /**
       * Info message to be shown below input
       */
      infoMessage: {
        type: String,
        value: null
      },
      /**
       * Info message icon to be shown below input
       */
      infoMessageIcon: {
        type: String,
        value: null,
        reflectToAttribute: true
      },
      /**
       * Whether all the input value is selected when input gets focus
       */
      selectAllOnFocus: {
        type: Boolean
      },
      /**
       * Allowed chars the user can enter in the input. Maps to iron-input 'allowed-pattern' property
       */
      allowedChars: {
        type: String,
        value: ''
      },
      /**
       * Regular expression used to validate the input value. If not defined, default iron-input validation will be used, according to the input type.
       */
      allowedValue: {
        type: String,
        observer: '_formatAllowValue'
      },
      /**
       * Regular expression used to validate the input value. If not defined, default iron-input validation will be used, according to the input type. Is allowed array format to validate more than one expression: Example:
       * ```
       * '^[a-zA-Z]+$' or ['^[a-zA-Z]+$', '[0-9]']
       * ```
       */
      allowedMultiplesValues: {
        type: Array,
        observer: '_formatAllowMultiplesValues'
      },
      /**
       * Regular expression used to know if the user has deleted a character icluded in validation mask patter (check out cells-input-validations-behavior docs) to fix the cursor position on android devices
       */
      customPattern: { type: String },
      /**
       * Regular expression used to know if the user has deleted a character icluded in validation mask patter (check out cells-input-validations-behavior docs) to fix the cursor position on android devices
       */
      inputStatusValidate: Boolean,
      /**
       * Control if user input data is masked/formatted (cells-input-validations-behavior required) on real time
       */
      autoMask: {
        type: Boolean,
        value: false
      },
      /**
       * Icon size of the input icons
       */
      iconSize: {
        type: Number,
        value: 18
      },
      /**
       * Icon size of the error message icon
       */
      errorMessageIconSize: {
        type: Number,
        value: 18
      },
      /**
       * Icon size of the info message icon
       */
      infoMessageIconSize: {
        type: Number,
        value: 18
      },
      /**
       * Main icon to show
       */
      icon: {
        type: String,
        value: null,
        reflectToAttribute: true
      },
      /**
       * Aria-label text for main icon
       */
      iconLabel: {
        type: String,
        value: ''
      },
      /**
       * Toggled version of main icon
       */
      iconToggled: {
        type: String,
        value: null,
        reflectToAttribute: true
      },
      /**
       * Icon currently shown as main icon
       */
      _icon: { type: String },
      iconAction: {
        type: String,
        value: null
      },
      /**
       * Condition under which the main icon is visible. Can be 'always', focused', 'content' or 'focused-content'
       */
      iconVisibility: {
        type: String,
        value: null
      },
      /**
       * Computed main icon visibility, depending on user choice (iconVisibility property), input type and input action
       */
      _iconVisibility: {
        type: String,
        computed: '_iconComputedVisibility(iconVisibility, _initialType, _iconAction, value)'
      },
      /**
       * Computed action for the main icon, depending on user choice (iconAction property), input type and inputToggled property
       */
      _iconAction: {
        type: String,
        computed: '_iconComputedAction(iconAction, _initialType, iconToggled)'
      },
      /**
       * Flag to either apply or not the material's ripple effect over the main icon (right one)
       */
      iconRippleEffect: {
        type: Boolean,
        value: false
      },
      /**
       * Secondary icon to show
       */
      extraIcon: {
        type: String,
        value: null,
        reflectToAttribute: true
      },
      /**
       * Aria-label text for secondary icon
       */
      extraIconLabel: {
        type: String,
        value: ''
      },
      /**
       * Toggled version of secondary icon
       */
      extraIconToggled: {
        type: String,
        value: null,
        reflectToAttribute: true
      },
      /**
       * Icon currently shown as secondary icon
       */
      _extraIcon: { type: String },
      /**
       * Action launched when secondary icon is tapped. Can be 'clear' (to clear the field) or 'toggle' (to toggle between original input type and 'text' type). Set to 'none' to just fire an event
       */
      extraIconAction: {
        type: String,
        value: null
      },
      /**
       * Condition under which the secondary icon is visible. Can be 'always', focused', 'content' or 'focused-content'
       */
      extraIconVisibility: {
        type: String,
        value: null
      },
      /**
       * Computed secondary icon visibility, depending on user choice (extraIconVisibility property), input type and icon action
       */
      _extraIconVisibility: {
        type: String,
        computed: '_iconComputedVisibility(extraIconVisibility, _initialType, _extraIconAction)'
      },
      /**
       * Computed secondary action for the icon, depending on user choice (extraIconAction property), input type and extraInputToggled property
       */
      _extraIconAction: {
        type: String,
        computed: '_iconComputedAction(extraIconAction, _initialType, extraIconToggled)'
      },
      /**
       * Stores the input original type, to allow toggling type to 'text' and back to original
       */
      _initialType: { type: String },
      /**
       * Icon shown when input is invalid
       */
      errorIcon: {
        type: String,
        value: null
      },
      /**
       * If true, input currently has content (value is not empty)
       */
      hasContent: {
        type: Boolean,
        value: false,
        readOnly: true,
        reflectToAttribute: true
      },
      /**
       * For type=number, native step value
       */
      step: Number,
      /**
       * For type=number, native max value
       */
      max: Number,
      /**
       * For type=number, native min value
       */
      min: Number,
      /**
       * Whether the placeholder is hidden when the input has some value
       */
      shyPlaceholder: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Whether the placeholder should minimize on focus
       */
      reactOnFocus: {
        type: Boolean,
        value: false
      },
      /**
       * Whether the input has content when shyPlaceholder is true
       */
      _hidePlaceholder: Boolean,
      /**
       * Whether the input has to toggle between icons on empty/filled value
       */
      toggleEmptyFillIcons: Boolean,
      /**
       * Flag to contro if validation password has failed
       */
      hasError: {
        type: Boolean,
        value: false,
        notify: true
      },
      /**
       * Autocapitalize input
       */
      autocapitalize: {
        type: String,
        value: 'none'
      },
      /**
       * Allow complete value removal if backspace key is pressed and input type is password
       */
      backspacePwdFullDelete: {
        type: Boolean,
        value: false
      },
      /**
       * Manage if asterisk is displayed for required fields
       */
      hideAsterisk: {
        type: Boolean,
        value: false
      },
      /**
       * Allow to exclude the current target on focus event detail
       */
      excludeCurrentTargetOnFocusEvent: {
        type: Boolean,
        value: false
      },
      /**
       * Control variable that indicates if icon is filled and whitout focus
       * @type {Boolean}
       */
      isFilledBlur: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Control variable that indicates which keyboard show in native
       * Values: none, text, decimal, numeric, tel, search, email, url, verbatim
       * @type {String}
       */
      inputMode: String
    };
  }
  ready() {
    super.ready();
    this.addEventListener('tap', this.focus.bind(this));
  }
  connectedCallback() {
    super.connectedCallback();
    this._icon = this.icon;
    this._extraIcon = this.extraIcon;
    this._initialType = this.type;
    if (this.value && this.autoValidate) {
      this.validate();
    }
    if (this.toggleEmptyFillIcons) {
      this.set('iconVisibility', 'always');
    }
  }
  /**
   * Sets focus to input tag
   */
  focus() {
    this.$.input.focus();
  }
  /**
   * Set the start and end positions of the text selection to input tag
   */
  setSelectionRange(selectionStart, selectionEnd) {
    this.$.input.setSelectionRange(selectionStart, selectionEnd);
  }
  /**
   * Sets focused state and fires event when component obtains focus
   */
  _onFocus(e) {
    var currentTarget = e.currentTarget;
    if (this.selectAllOnFocus) {
      this._selectOnFocus();
    }
    if (this.customPattern) {
      this._autoMaskedState(true);
    }
    setTimeout(() => {
      if (!this.focused) {
        if (this.reactOnFocus === true) {
          this._setHasContent(true);
        }
        this._setFocused(true);
        if (this.inputStatusValidate) {
          this.invalid = false;
        }
        this._isFilledBlur(this.value);
        this.dispatchEvent(new CustomEvent('cells-molecule-input-focus', {
          bubbles: true,
          composed: true,
          detail: {
            originalEvent: e,
            originalTarget: this.excludeCurrentTargetOnFocusEvent ? null : currentTarget
          }
        }));
      }
    }, 1);
  }
  /**
   * Sets focused state and fires event when component loses focus
   */
  _onBlur(e) {
    setTimeout(() => {
      if (!this.shadowRoot.activeElement) {
        if (this.reactOnFocus === true && (this.value === '' || this.value === undefined)) {
          this._setHasContent(false);
        }
        this._setFocused(false);
        if (this.inputStatusValidate) {
          this.validate();
        }
        this._isFilledBlur(this.value);
        this.dispatchEvent(new CustomEvent('cells-molecule-input-blur', {
          bubbles: true,
          composed: true,
          detail: {
            id: this.id,
            value: this.value
          }
        }));
      }
    }, 1);
  }
  /**
   * Check if Control variable that indicates if input is filled and whitout focus
   * @param {string} value The value than is set
   */
  _isFilledBlur(value) {
    Polymer.RenderStatus.afterNextRender(this, function() {
      this.isFilledBlur = !!(!this.focused && value);
    });
  }
  /**
   * Reset input value after delete one input case before validate or mask value
   */
  _onDelete(ev) {
    if (ev.code === 'Backspace' || ev.key === 'Backspace' || ev.which === 8 || ev.keyCode === 8) {
      if (this.customPattern) {
        var pattern = new RegExp(this.customPattern);
        if (this.$.input.value.length) {
          var caseDeleted = this.value[this.$.input.selectionStart - 1];
          this.autoMask = pattern.test(caseDeleted) ? false : true;
        }
        this._autoMaskedState(this.autoMask);
        this.dispatchEvent(new CustomEvent('delete-input-case', {
          bubbles: true,
          composed: true,
          detail: caseDeleted
        }));
      }
      if (this.backspacePwdFullDelete && this._initialType === 'password' && this.type === 'password') {
        this._clearInput();
      }
    }
  }
  _selectOnFocus() {
    setTimeout(() => {
      this.setSelectionRange(0, this.$.input.value.length);
    }, 10);
    if (this.customPattern) {
      this._autoMaskedState(true);
    }
  }
  /**
   * Manages hasContent property state, and calls input validation if autoValidate is true
   */
  _valueObserver(newValue, previousValue) {
    this._setHasContent(!!newValue);
    if (this.shyPlaceholder) {
      this._hidePlaceholder = !!newValue;
    } else {
      this._setHasContent(!!newValue);
    }
    if (this.autoValidate && (newValue || previousValue !== undefined)) {
      this.validate();
    }
    if (this.customPattern) {
      if (this.autoMask) {
        setTimeout(() => {
          this.$.input.selectionStart = this.$.input.selectionEnd = this.$.input.value.length;
        }, 10);
      }
      this._autoMaskedState(true);
      setTimeout(() => {
        this.value = this.bindValue || this.value;
      }, 0);
    }
    if (this.toggleEmptyFillIcons) {
      this._icon = !newValue ? this.icon : this.iconToggled;
    }
  }
  /**
  * Enable / disable auto mask input validation
  */
  _autoMaskedState(status) {
    this.dispatchEvent(new CustomEvent('user-auto-mask', {
      bubbles: true,
      composed: true,
      detail: status
    }));
  }
  /**
   * Returns action for icon.
   */
  _iconComputedAction(iconAction, _initialType, iconToggled) {
    if (iconAction === 'none') {
      return false;
    } else if (iconAction) {
      return iconAction;
    } else if (_initialType === 'password' && iconToggled) {
      return 'toggle';
    } else {
      return 'clear';
    }
  }
  /**
   * Returns visibility for icon.
   */
  _iconComputedVisibility(iconVisibility, _initialType, _iconAction, value) {
    var visibility;
    if (iconVisibility) {
      if (iconVisibility === 'focused-content' && value) {
        visibility = 'always';
      } else {
        visibility = iconVisibility;
      }
    } else if (_initialType === 'password' && _iconAction === 'toggle') {
      visibility = 'focused-content';
    } else {
      visibility = 'content';
    }
    return visibility;
  }
  /**
   * Add visibility CSS class to icon based on received icon computed visibility
   */
  _iconVisible(value) {
    switch (value) {
      case 'always':
        return 'visible-always';
      case 'focused':
        return 'visible-focused';
      case 'focused-content':
        return 'visible-focused visible-content';
      default:
        return 'visible-content';
    }
  }

  _iconKeydown(e) {
    if (e.keyCode === 32 || e.keyCode === 13) {
      this._iconTap(e);
    }
  }

  _extraIconKeydown(e) {
    if (e.keyCode === 32 || e.keyCode === 13) {
      this._extraIconTap(e);
    }
  }

  /**
   * Called when main icon is activated. Toggles icon if necessary, and runs icon action
   */
  _iconTap(e) {
    if (this.iconRippleEffect) {
      this.shadowRoot.querySelector('#btnMainIcon').classList.add('ripple-applied');
    }

    e.preventDefault();
    e.stopPropagation();
    if (this.toggleEmptyFillIcons && this._icon === this.iconToggled || !this.toggleEmptyFillIcons) {
      this._toggleIcon(this.icon);
      this._runIconAction(this._iconAction);
      this.dispatchEvent(new CustomEvent('cells-molecule-input-icon-tap', {
        bubbles: true,
        composed: true,
        detail: this._iconAction
      }));
    }

    if (this.iconRippleEffect) {
      setTimeout(() => this.shadowRoot.querySelector('#btnMainIcon').classList.remove('ripple-applied'), 10);
    }
  }
  /**
   * Called when secondary icon is activated. Toggles icon if necessary, and runs icon action
   */
  _extraIconTap(e) {
    e.preventDefault();
    e.stopPropagation();
    this._toggleIcon(this.extraIcon);
    this._runIconAction(this._extraIconAction);
    this.dispatchEvent(new CustomEvent('cells-molecule-input-extra-icon-tap', {
      bubbles: true,
      composed: true
    }));
  }
  /**
   * Manages icon action.
   */
  _runIconAction(icon) {
    switch (icon) {
      case 'clear':
        this._clearInput();
        this.$.input.focus();
        break;
      case 'toggle':
        this._toggleInput();
        this.$.input.focus();
        break;
      default:
        break;
    }
  }
  /**
   * Sets input value to empty
   */
  _clearInput() {
    this.value = '';
  }
  /**
   * Sets input value to empty
   */
  _toggleIcon(icon) {
    if (icon === this.extraIcon) {
      this._extraIcon = this.extraIconToggled && this._extraIcon === this.extraIcon ? this.extraIconToggled : this.extraIcon;
    } else {
      this._icon = this.iconToggled && this._icon === this.icon ? this.iconToggled : this.icon;
    }
  }
  /**
   * Toggles input type to 'text' or back to original type
   */
  _toggleInput() {
    this.type = this.type === this._initialType ? 'text' : this._initialType;
  }
  /**
  * Assign multiples regular expressions to private property _allowedValue
  */
  _formatAllowValue(value) {
    if (value && !Array.isArray(value)) {
      this.set('_allowedValue', [ value ]);
    }
  }
  /**
  * Assign multiples regular expressions to private property _allowedValue
  */
  _formatAllowMultiplesValues(values) {
    if (values && values.length) {
      this.set('_allowedValue', values);
    }
  }
  /**
   * Launches input validation against allowedValue property regex, against iron-input default validation and against required property, and updates invalid property state
   */
  validate() {
    var valid;
    var inputValue = this.value || this.bindValue;
    var isAllowedValue = this._allowedValue;
    this.hasError = false;
    if (inputValue && isAllowedValue) {
      this._allowedValue.forEach(function(item, index) {
        if (!new RegExp(item, 'i').test(inputValue)) {
          valid = false;
          this.hasError = true;
          this.dispatchEvent(new CustomEvent('validation-error-type', {
            detail: index,
            bubbles: true,
            composed: true
          }));
        }
        if (!this.hasError) {
          valid = true;
        }
      }, this);
    } else if (inputValue && !isAllowedValue) {
      var useNativeValidation = this.type === 'email';
      valid = Polymer.Element && !useNativeValidation ? this.$.ironInput.validate() : this.$.input.checkValidity();
    } else {
      valid = !inputValue && this.required ? false : true;
    }
    if (valid === this.invalid) {
      this.invalid = !valid;
      this.dispatchEvent(new CustomEvent('cells-molecule-input-validate', {
        detail: {
          id: this.id,
          valid: valid,
          value: inputValue
        },
        bubbles: true,
        composed: true
      }));
    }
    this.hasError = !valid;
    return valid;
  }
  /**
   * Observer that checks the required state, if it is not required, then it should not be invalid either. It calls the validate method because the invalid state is shared across multiple properties
   */
  _requiredObserver(newVal) {
    if (newVal === false) {
      this.invalid = newVal;
      this.validate();
    }
  }

  _showErrorMessage(invalid) {
    return invalid && (this.errorMessage || this.errorMessageIcon);
  }
  /**
   * Observer that checks the required state, if it is not required, then it should not be invalid either. It calls the validate method because the invalid state is shared across multiple properties
   */
  _asteriskCheck(required, hideAsterisk) {
    if (!required) {
      return true;
    } else {
      return hideAsterisk;
    }
  }
}
window.customElements.define(CellsMoleculeInput.is, CellsMoleculeInput);
