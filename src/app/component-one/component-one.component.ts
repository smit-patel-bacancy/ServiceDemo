import { Component, OnInit } from '@angular/core';
import { ArithmeticServiceService } from '../services/arithmetic-service.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  public marksDetails: Array<{ subject: string, marks: number }> = [];

  public subject: string = '';
  public marks: string = '';

  public valueOne: string = '';
  public valueTwo: string = '';
  public result!: number;

  constructor(public marksService: DataServiceService, private arithmeticService: ArithmeticServiceService) {
  }

  ngOnInit(): void {
    // normal component array
    this.marksDetails = [
      { subject: 'Data Sturucture', marks: 89 },
      { subject: 'DBMS', marks: 82 },
      { subject: 'C++', marks: 85 },
    ]

    // Use of Service Marks Array
    // this.marksDetails = this.marksService.getMarksDetails();
  }

  public pushIntoArray(): void {
    // normal component array
    this.marksDetails.push({ subject: this.subject, marks: +this.marks });

    // Use of Service Marks Array
    // this.marksService.pushMarksDetails({ subject: this.subject, marks: +this.marks });
  }

  // For example, I have used only simple logic;
  // You can assume that here complex logic is available and that is replicated in another component as well
  public getSum(): void {
    // normal component function
    this.result = +this.valueOne + +this.valueTwo;

    // using service function
    // parseInt - just used as alternative to '+'
    // this.result = this.arithmeticService.getSum(+this.valueOne, parseInt(this.valueTwo));
  }

}