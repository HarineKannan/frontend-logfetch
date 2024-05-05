import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class HelloPopupComponent extends Component {
  @action
  closePopup() {
    this.args.closePopup();
  }
  // closePopup() {
  //   console.log('Popup closed');
  // }
}
