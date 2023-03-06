import { ParametersService } from './../../service/parameters/parameters.service';
import { Component,OnInit } from '@angular/core';
import { ParmData } from 'src/app/models/parmetersData';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {


  [x: string]: any;
  public par: ParmData[] = [];

  constructor(private parametersService: ParametersService){}

  ngOnInit() {
    this.getData();
  }

  public getData(): void {
    this.parametersService.getParData().subscribe(
      (response: ParmData[]) => {
        this.par = response;
        console.log(this.par);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // prmList: ParmData[];

  // constructor() {
  //   this.prmList = [
  //     { code: '01', description: ' description 1', value: 112311 },
  //     { code: 'c7', description: ' description 2', value: 12345 },
  //     { code: '90', description: ' description 3', value: 112311 },
  //     { code: '111', description: ' description 4', value: 98765 },
  //     { code: '50', description: ' description 5', value: 12 },
  //   ];
  // }


}
