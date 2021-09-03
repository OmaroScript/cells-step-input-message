![cells-skeleton-item screenshot](cells-skeleton-item.png)

# cells-skeleton-item

![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)
![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)

[Demo of component in Cells Catalog](https://catalogs.platform.bbva.com/cells)

`<cells-skeleton-item>` is a loading status layout consisting of a row that can include many optional items (titles, headers, round icons, different kind of lines...)

Examples:

Skeleton for two pairs of opposing bars, in two rows:
```html
<cells-skeleton-item show-item></cells-skeleton-item>
```

Skeleton for a title:
```html
<cells-skeleton-item show-title></cells-skeleton-item>
```

Skeleton for a header:
```html
<cells-skeleton-item show-header></cells-skeleton-item>
```

Skeleton for a round icon:
```html
<cells-skeleton-item show-icon></cells-skeleton-item>
```

Skeleton item with a fixed padding of 79 pixels to the right border and 48 pixels to the left border:
```html
<cells-skeleton-item first-indentation show-item></cells-skeleton-item>
```

Skeleton item with a fixed padding of 130 pixels to the right border and 62 pixels to the left border:
```html
<cells-skeleton-item second-indentation show-item></cells-skeleton-item>
```

Skeleton item with a darker background:
```html
<cells-skeleton-item show-background show-item></cells-skeleton-item>
```

Skeleton for a single line:
```html
<cells-skeleton-item show-single></cells-skeleton-item>
```

Skeleton for a thick line:
```html
<cells-skeleton-item show-single thick-line></cells-skeleton-item>
```

Skeleton for a round avatar:
```html
<cells-skeleton-item show-avatar></cells-skeleton-item>
```

Skeleton for a set of four bullets:
```html
<cells-skeleton-item show-bullets></cells-skeleton-item>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                   | Description                                     | Default  |
|:-------------------------------------------------:|:-----------------------------------------------:|:--------:|
| --cells-skeleton-item                             | Mixin applied to :host                          | {}       |
| --cells-skeleton-item-box-height                  | box height                                      | 18px     |
| --cells-skeleton-item-box-width                   | box width                                       | 40%      |
| --cells-skeleton-item-box-thick                   | box height                                      | 26px     |
| --cells-skeleton-item-box-first-child             | Mixin applied to first child item in box        | {}       |
| --cells-skeleton-item-box-width-first-child       | width of the first-child item in box            | 55%      |
| --cells-skeleton-item-box-bg-color                | Background color of box                         | var(--bbva-200, #E9E9E9)  |
| --cells-skeleton-item-box-xs                      | Mixin applied to item box xs                    | {}       |
| --cells-skeleton-item-box-xs-height               | box-xs height                                   | 15px     |
| --cells-skeleton-item-box-xs-width                | box-xs width                                    | 20%      |
| --cells-skeleton-item-box-xs-first-child          | Mixin applied to first child in item box xs     | {}       |
| --cells-skeleton-item-title                       | Mixin applied to title                          | {}       |
| --cells-skeleton-item-header                      | Mixin applied to item header                    | {}       |
| --cells-skeleton-item-indent                      | Mixin applied to item padding                   | {}       |
| --cells-skeleton-item-indent-first                | Mixin applied to item padding                   | left: 79px, right: 48px   |
| --cells-skeleton-item-indent-second               | Mixin applied to item padding                   | left: 130px, right: 62px  |
| --cells-skeleton-item-line                        | Mixin applied to line wrapper                   | {}       |
| --cells-skeleton-item-line-background             | Mixin applied to line wrapper background color  | var(--bbva-100, #F4F4F4)  |
| --cells-skeleton-item-icon                        | Mixin applied to box                            | {}       |
| --cells-skeleton-item-icon-width                  | Mixin applied to box                            | 32px     |
| --cells-skeleton-item-icon-height                 | Mixin applied to box                            | 32px     |
| --cells-skeleton-item-icon-color                  | Mixin applied to box                            | var(--bbva-200, #E9E9E9)  |
| --cells-skeleton-item-box                         | Mixin applied to box                            | {}       |
| --cells-skeleton-item-content                     | Mixin applied to item content                   | {}       |
| --cells-skeleton-item-content-top                 | Mixin applied to item content top               | {}       |
| --cells-skeleton-item-content-bottom              | Mixin applied to item content bottom            | {}       |
| --cells-skeleton-item-content-bottom-box-xs       | Mixin applied to content bottom box xs          | {}       |
| --cells-skeleton-item-content-bottom-box-xs-width | width bottom box xs                             | 15%      |
| --cells-skeleton-item-wrapper                     | Mixin applied to item wrapper                   | {}       |
| --cells-skeleton-item-avatar                      | Mixin applied to avatar content                 | {}       |
| --cells-skeleton-item-avatar-background-color     | Background color of avatar section              | var(--bbva-core-blue, #004481) 
| --cells-skeleton-item-avatar-head                 | Mixin applied to avatar head                    | {}       |
| --cells-skeleton-item-avatar-head-width           | width of avatar head                            | 50px     |
| --cells-skeleton-item-avatar-head-background-color | backgrounc-color of avatar head                | var(--bbva-white, #fff) |
| --cells-skeleton-item-avatar-head-height          | height of avatar head                           | 50px     |
| --cells-skeleton-item-actions                     | Mixin applied to actions                        | {}       |
| --cells-skeleton-item-actions-box                 | Mixin applied to actions box                    | {}       |
| --cells-skeleton-item-actions-box-item            | Mixin applied to item in action box             | {}       |
| --cells-skeleton-item-actions-box-item-before     | Mixin applied to item in action box before      | {}       |