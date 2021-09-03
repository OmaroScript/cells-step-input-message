# Changelog

## v15.5.1

- The visual part of the amount of "programmed by" is corrected.

## v14.0.0

- Edit mixin '--cells-atom-amount-negative' to '--cells-atom-amount-class-negative' in order to resolve hierarchy of styles when setting the color of the amount in red

## v13.3.0

- Add property `alignRight` to compute Alignment currency symbol

## v12.0.1

- `hidden` property is removed in favour of `hasError` (`readOnly`) property.

## v11.0.0

### Removed CSS mixins

- `--cells-atom-amount-sr` (not used in DOM).
- `--cells-atom-amount-visible` removed in favour of `--cells-atom-amount-wrapper`.

## v9.1.0

- New boolean property (`trailingZeroDecimalsHidden`) to hide the trailing zeros.

## v8.1.0

- New boolean property (`zeroDecimalsHidden`) to hide the decimal part only when it is zero (no decimals).

## v8.0.0

- Default styles (Coronita) for different sizes are now included in the component (no need to define them in a theme).
- `hidden` property is now private (not documented in public API) to avoid confusion as it is a computed property.
