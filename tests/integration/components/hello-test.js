import { module, test } from 'qunit';
import { setupRenderingTest } from 'check5/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hello', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Hello />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Hello>
        template block text
      </Hello>
    `);

    assert.dom().hasText('template block text');
  });
});
