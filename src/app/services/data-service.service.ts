import { Injectable } from '@angular/core';
// import { ArithmeticServiceService } from './arithmetic-service.service';

export interface MarksDetails {
  subject: string,
  marks: number
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public centralMarksDetails: Array<MarksDetails> = [
    { subject: 'Data Sturucture', marks: 89 },
    { subject: 'DBMS', marks: 82 },
    { subject: 'C++', marks: 85 },
  ]

  constructor() { }

  // injecting services into services
  // constructor(private arithmeticService: ArithmeticServiceService) { }

  public pushMarksDetails(details: MarksDetails): void {
    this.centralMarksDetails.push(details);
  }

  public getMarksDetails(): Array<MarksDetails> {
    return this.centralMarksDetails;
  }

  // injecting services into services
  // public getSum(value1: number, value2: number): number {
  //   return this.arithmeticService.getSum(value1, value2);
  // }
}
