import Component from 'ember-component';
import TransitionMixin from 'ember-css-transitions/mixins/transition-mixin';

export default Component.extend(TransitionMixin, {
  tagName: 'button',
  attributeBindings: ['tabindex'],
  transitionClass: 'ng',
  onReset: null,

  mouseUp(e) {
    this.reset(e);
  },
  touchEnd(e) {
    this.reset(e);
  },

  reset(e) {
    let onReset = this.get('onReset');
    if (onReset === null) {
      return;
    }
    onReset(e);
  }

});
