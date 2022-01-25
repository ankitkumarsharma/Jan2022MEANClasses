import { AppService } from './../_services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string = "Rahul Kumar";
  red_flag:boolean = true;
  age:number = 22;
  arr = [6,3,4,1,8,3,5,6];
  conditionExpression:number = 77;
  obj = {name:'Ankit'};
  arrObj:arrObjTypes[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
  ]
  colorGreen:string = 'green';
  todayDate = new Date();
  nameArr:any;
  // [
  //   {name:'Rahul', sirName:'Kumar'},
  //   {name:'Aditya', sirName:'Patel'},
  //   {name:'Ankit', sirName:'Sharma'},
  //   {name:'Manish', sirName:'Sharma'},
  //   {name:'Rahul', sirName:'Jogrge'},
  //   {name:'Manohar', sirName:'Kumar'},

  // ]
  nameValue:string = 'No Friends'
  constructor(private appService:AppService) { } // inject service

  ngOnInit(): void {
    this.appService.getJson().subscribe((item)=>{
      this.nameArr = item;
    })
  }
  Toggle(){
    this.red_flag = !this.red_flag;
    this.colorGreen = '#ff0000';
  }
  showValue(){
    this.nameValue = this.appService.openDesc();
    
  }
}

export interface arrObjTypes {
  userId: number,
  id: number,
  title: string,
  body: string
}
