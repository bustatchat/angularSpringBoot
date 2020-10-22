import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable()
export class DataService {

  constructor(public apiPath: string, public backendService: BackendService) { }

  createItem<T, RT = T>(createItem: T): Promise<RT> {
    return this.backendService
      .post(this.apiPath + '/add', createItem)
      .toPromise();
  }

  readItems<T>(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.backendService.get(this.apiPath)
        .subscribe(
          (responseItems: any) => {
            resolve(responseItems);
          },
          (error) => reject(error)
        );
    });
  }

  updateItem<T extends any>(id: T, updateItem: T): Promise<T> {
    return this.backendService
      .put(this.apiPath + id, JSON.stringify(updateItem))
      .toPromise();
  }

  deleteItem<T extends any>(id: T): Promise<any> {
    return this.backendService
      .delete(this.apiPath + id)
      .toPromise();
  }

}
