import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.page.html',
  styleUrls: ['./fruit-list.page.scss'],
})
export class FruitListPage implements OnInit {
  Items = [
    { 
      name:'หมากกล้วย',
      icon:"globe",
      image:"assets/icon/favicon.png",
      type:"edit",
      price : "10",
      status : false
    },
    { 
      name:'หมากส้ม',
      icon:"logo-snapchat",
      image:"assets/icon/favicon.png",
      type:"add",
      price : "20",
      status : false
    },
    { 
      name:'หมากแอบเปิ้ล',
      icon:"logo-snapchat",
      image:"assets/icon/favicon.png",
      type:"add",
      price : "30",
      status : false
    },
    { 
      name:'หมากทูเรียน',
      icon:"logo-snapchat",
      image:"assets/icon/favicon.png",
      type:"add",
      price : "40",
      status : false
    }
  ];

  itemchacked: boolean;
  allprive = 0;
  constructor() { }

  ngOnInit() {
  }

  buy(){
    this.allprive = 0;
    console.log(this.Items);
    this.Items.forEach(element => {
      if (element.status) {
        this.allprive += Number(element.price);
      }else{
        console.log("no"); 
      }
    });
  }

  onChangeitem(i){
    this.itemchacked = !this.Items[i].status;
    this.Items[i].status = this.itemchacked;
  }
}
