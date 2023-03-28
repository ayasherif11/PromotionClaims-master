import { ClaimsService } from './../../service/claims/claims.service';
import { Component, OnInit } from '@angular/core';
import { claimsData } from 'src/app/models/claimsData';
import { DistributorsData } from 'src/app/models/distributorsData';
import { HttpErrorResponse } from '@angular/common/http';
import { Claims1Service } from 'src/app/service/disTable/claims1.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css'],
})
export class ClaimsComponent implements OnInit {
  // [x: string]: any;
  public dis: DistributorsData[] = [];
  public claims: claimsData[] = [];

  constructor(
    private claims1Service: Claims1Service,
    private cs: ClaimsService
  ) {
    // this.claims=[
    // ];
  }

  ngOnInit() {
    this.getData();
    this.getClaimsData();
  }
  getClaimsData() {
    this.cs.getParData().subscribe(
      (response: claimsData[]) => {
        this.claims = response;
        console.log(this.claims);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getData(): void {
    this.claims1Service.getClaims1Data().subscribe(
      (response: DistributorsData[]) => {
        this.dis = response;
        console.log(this.dis);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // dis:DistributorsData[];

  // constructor(){
  //   this.dis= [
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //     {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
  //   ];

  //  this.claims=[

  //  ];
}
