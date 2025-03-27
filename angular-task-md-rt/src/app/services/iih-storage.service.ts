import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IihStorageService {

  constructor() { }
  getItem(key: string): any {  //same to getItem in localStorage
    return localStorage.getItem(key)
  }

  addItem(key: string, value: string): any {//same to setItem in localStorage
    return localStorage.setItem(key, value)
  }
}
