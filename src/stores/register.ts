import { observable, action } from 'mobx-angular';
class Register {
  @observable records = [];
  @observable details = [];

  @action setRecord(records) {
    this.records = records;
  }

  @action setDetails(records) {
    this.details = records;
  }

}
export const registerStore = new Register();

