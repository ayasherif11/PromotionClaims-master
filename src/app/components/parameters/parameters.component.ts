import { ParametersService } from './../../service/parameters/parameters.service';
import { Component, OnInit } from '@angular/core';
import { ParmData } from 'src/app/models/parmetersData';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
})
export class ParametersComponent implements OnInit {
  public par: ParmData[] = [];

  constructor(private parametersService: ParametersService) {}

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
}
