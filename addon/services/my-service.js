import { A } from '@ember/array';
import Service from '@ember/service';

export default class MyService extends Service {
  items = A([]);

  add(item) {
    this.items.pushObject(item);
  }

  remove(item) {
    this.items.removeObject(item);
  }

  empty() {
    this.items.clear();
  }
}
