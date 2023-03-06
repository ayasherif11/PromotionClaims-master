import { Claims1Service } from './../../service/claims1.service';
import { Component,OnInit } from '@angular/core';
import { claimsData } from 'src/app/models/claimsData';
import { DistributorsData } from 'src/app/models/distributorsData';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {
  [x: string]: any;
  public dis: DistributorsData[] = [];

  constructor(private claims1Service: Claims1Service){
    this.claims=[

    ];

  }

  ngOnInit() {
    this.getData();
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
  claims: claimsData[];


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

