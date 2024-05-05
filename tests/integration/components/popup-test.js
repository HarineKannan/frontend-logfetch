import { module, test } from 'qunit';
import { setupRenderingTest } from 'check5/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | popup', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Popup />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Popup>
        template block text
      </Popup>
    `);

    assert.dom().hasText('template block text');
  });
});
