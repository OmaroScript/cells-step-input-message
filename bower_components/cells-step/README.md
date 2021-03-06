# cells-step

> Provides common UI behavior for step-by-step operatives.

Example:

```html
<cells-step>
  <div slot="full">
    <my-item></my-item>  
    <my-item></my-item>  
    <my-item></my-item>  
  </div>
  <div slot="filled">
    <my-item></my-item>
  </div>
</cells-step>
```

**With custom title**
```html
<cells-step title="My Title"></cells-step>
```

**With {currentStep} and {maxSteps}**:
```html
<cells-step current-step="1" max-steps="1"></cells-step>
```

**With custom change button label**:
```html
<cells-step change-label="Click here"></cells-step>
```

**Active**:
```html
<cells-step active></cells-step>
```

**Collapsed**:
```html
<cells-step collapsed></cells-step>
```

**Both, collapsed and active**:
```html
<cells-step collapsed active></cells-step>
```

**Custom active class for children**:
```html
<cells-step class-to-toggle="my-class"></cells-step>
```

**Custom active attribute for children**:
```html
<cells-step attribute-to-toggle="my-attribute"></cells-step>
```

## Dependencies

- [cells-step-behavior](https://globaldevtools.bbva.com/bitbucket/projects/CBH/repos/cells-step-behavior/browse)

## API

| Property | Description | Type | Binding |
|:---------|:------------|:-----|:-------:|
| currentStep | Index order of this step | Number | IN |
| maxSteps | Available max. number of steps | Number | IN |
| title | To display | String | IN |
| changeLabel | To display into change button | String | IN |
| changeViewAllLabel | To display into change view all button | String | IN |
| active | Flags if is active or not | Boolean | IN/OUT (R) |
| collapsed | Flags if is collapsed or not | Boolean | IN/OUT (R) |
| classToToggle | Class to toggle for inner components, when {active} changes | String | IN |
| attributeToToggle | As {classToToggle}, but with an attribute | String | IN |

(R) _reflectAsAttribute_

## Locales

| Key | Description |
|:---------|:-------|
| cells-step-order-index-separator | Separator between {currentStep} and {maxSteps} |
| cells-step-change-button-label | Text to display into change button |
| cells-step-change-view-all-label | Text to display into view all button |

## Events

| Key | Description |
|:---------|:-------|
| change-pressed    | Whenever change button is clicked |
| help-icon-pressed | Whenever help icon is pressed     |

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                 | Description     | Default        |
|:------------------------------------------------|:----------------|:--------------:|
| --cells-step                                    | empty mixin |??{} |
| --cells-step-fixed                              | empty mixin |??{} |
| --cells-step-fixed-after                        | empty mixin |??{} |
| --cells-step-fixed-header                       | empty mixin |??{} |
| --cells-step-fixed-item-name                    | empty mixin |??{} |
| --cells-step-fixed-amount                       | empty mixin |??{} |
| --cells-step-fixed-amount-currency              | empty mixin |??{} |
| --cells-step-fixed-amount-fractional            | empty mixin |??{} |
| --cells-step-collapsed-to-active                | empty mixin |??{} |
| --cells-step-active-to-collapsed                | empty mixin |??{} |
| --cells-step-active-to-collapsed-fixed          | empty mixin |??{} |
| --cells-step-active-scrolled                    | empty mixin |??{} |
| --cells-step-inactive-to-active                 | empty mixin |??{} |
| --cells-step-before                             | empty mixin |??{} |
| --cells-step-inactive-to-active-before          | empty mixin |??{} |
| --cells-step-inactive-to-active-scrolled-before | empty mixin |??{} |
| --cells-step-after                              | empty mixin |??{} |
| --cells-step-scrolled-after                     | empty mixin |??{} |
| --cells-step-last-step                          | empty mixin |??{} |
| --cells-step-last-step-after                    | empty mixin |??{} |
| --cells-step-last-step-not-collapsed            | empty mixin |??{} |
| --cells-step-active-first-time                  | empty mixin |??{} |
| --cells-step-active-first-time                  | empty mixin |??{} |
| --cells-step-iron-collapse                      | empty mixin |??{} |
| --cells-step-iron-collapse-expanded-false       | empty mixin |??{} |
| --cells-step-iron-collapse                      | empty mixin |??{} |
| --cells-step-iron-collapse-expanded-false-resume | empty mixin |??{} |
| --cells-step-iron-collapse-expanded-true        | empty mixin |??{} |
| --cells-step-iron-collapse-expanded-false-active | empty mixin |??{} |
| --cells-step-iron-collapse-expanded-true-active | empty mixin |??{} |
| --cells-step-iron-collapse-full                 | empty mixin |??{} |
| --cells-step-header                             | empty mixin |??{} |
| --cells-step-header-active                      | empty mixin |??{} |
| --cells-step-header-title                       | empty mixin |??{} |
| --cells-step-header-title-active                | empty mixin |??{} |
| --cells-step-header-title-scrolled              | empty mixin |??{} |
| --cells-step-header-title-collapsed             | empty mixin |??{} |
| --cells-step-header-step-number                 | empty mixin |??{} |
| --cells-step-header-step-number-active          | empty mixin |??{} |
| --cells-step-header-step-number-scrolled        | empty mixin |??{} |
| --cells-step-header-step-number-collapsed       | empty mixin |??{} |
| --cells-step-header-button                      | empty mixin |??{} |
| --cells-step-header-button-text                 | empty mixin |??{} |
| --cells-step-header-button-text-view-all        | empty mixin | {} |
| --cells-step-header-button-text-collapsed       | empty mixin |??{} |
| --cells-step-header-button-collapsed            | empty mixin |??{} |
| --cells-step-filled-p                           | empty mixin |??{} |
| --cells-step-filled-cells-atom-amount           | empty mixin |??{} |
| --cells-step-previous                           | empty mixin |??{} |
| --cells-step-scrolled                           | empty mixin |??{} |
| --cells-step-previous                           | empty mixin |??{} |
| --cells-step-next                               | empty mixin |??{} |
| --cells-step-product-selector-inactive          | empty mixin |??{} |
| --cells-step-product-selector-active            | empty mixin |??{} |
