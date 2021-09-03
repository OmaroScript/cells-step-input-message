class CellsStep extends Polymer.mixinBehaviors([
  CellsBehaviors.i18nBehavior,
  CellsBehaviors.StepPropBehavior,
  CellsBehaviors.StepBasicBehavior
], Polymer.Element) {
  static get is() {
    return 'cells-step';
  }
  static get properties() {
    return {
      hideSeparator: {
        type: Boolean,
        value: false
      }
    };
  }
}
window.customElements.define(CellsStep.is, CellsStep);