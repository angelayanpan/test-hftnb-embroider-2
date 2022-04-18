import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DemoComponent extends Component {
  @service('test-hftnb-embroider-2@my-service') myService;

  @action
  clickedOnSomething() {
    this.myService.empty();
  }
}
