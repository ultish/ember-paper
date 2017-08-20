import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import $ from 'jquery';

moduleForComponent('paper-reset-button', 'Integration | Component | paper reset button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-reset-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-reset-button}}
      template block text
    {{/paper-reset-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('should fire onReset on mouseUp', function(assert) {
  assert.expect(1);
  this.set('onReset', () => {
    assert.ok(true, 'onReset should be called');
  });

  this.render(hbs`
  {{#paper-reset-button class='resetButton' onReset=(action onReset)}}
    Reset
  {{/paper-reset-button}}
  `);

  let $button = $($('button.resetButton').get(0));
  $button.mousedown();
  return wait().then(() => {
    $button.mouseup();
  });
});

test('should fire onReset on touchEnd', function(assert) {
  assert.expect(1);
  this.set('onReset', () => {
    assert.ok(true, 'onReset should be called');
  });

  this.render(hbs`
  {{#paper-reset-button class='resetButton' onReset=(action onReset)}}
    Reset
  {{/paper-reset-button}}
  `);

  let $button = $($('button.resetButton').get(0));
  $button.trigger('touchstart');
  return wait().then(() => {
    $button.trigger('touchend');
  });
});