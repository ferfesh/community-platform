import { observable, action } from 'mobx'
import { RootStore } from '..'

/*
The platform store handles information related to the platform, such as update
status of service workers
*/

type ISWStatus = 'updated' | null

export class PlatformStore {
  constructor(rootStore: RootStore) {
    //
  }
  @observable
  public serviceWorkerStatus: ISWStatus

  @action
  public setServiceWorkerStatus(status: ISWStatus) {
    this.serviceWorkerStatus = status
  }
}
