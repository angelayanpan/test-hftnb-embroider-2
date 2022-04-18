import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | components/demo-component', (hooks) => {
  setupRenderingTest(hooks);

  test('it tests', async (assert) => {
    await render(hbs`
      {{demo-component}}
    `);

    click('[data-test-software-eng]');
    assert.equal(this.element.textContent.trim(), 'Software Engineer');
  });
});
