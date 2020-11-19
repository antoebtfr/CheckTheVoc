import { Injectable } from '@angular/core';

@Injectable()
export class VocabModalService {
  private status: boolean = false;

  constructor() { }

  public getStatus(){
    return this.status;
  }

  public open(){
    this.status = true;
  }

  public close(){
    this.status = false;
  }
}
