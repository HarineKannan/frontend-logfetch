import { module, test } from 'qunit';
import { setupRenderingTest } from 'check5/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TableModal />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TableModal>
        template block text
      </TableModal>
    `);

    assert.dom().hasText('template block text');
  });
});
