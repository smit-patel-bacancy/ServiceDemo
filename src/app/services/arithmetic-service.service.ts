// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ArithmeticServiceService {

  constructor() { }

  public getSum(value1: number, value2: number): number {
    return value1 + value2;
  }
}
