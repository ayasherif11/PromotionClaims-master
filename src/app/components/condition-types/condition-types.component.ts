import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConditionTypesData } from 'src/app/models/conditionTypes';
import { ConditionTypeService } from 'src/app/service/conditionTypes/condition-type.service';

@Component({
  selector: 'app-condition-types',
  templateUrl: './condition-types.component.html',
  styleUrls: ['./condition-types.component.css'],
})
export class ConditionTypesComponent implements OnInit {
  public conT: ConditionTypesData[] = [];

  constructor(private conTypeService: ConditionTypeService) {}

  ngOnInit() {
    this.getData();
  }

  public getData(): void {
    this.conTypeService.getConData().subscribe(
      (response: ConditionTypesData[]) => {
        this.conT = response;
        console.log(this.conT);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
