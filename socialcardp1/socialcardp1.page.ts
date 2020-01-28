import { Component, OnInit } from '@angular/core';
import {Story} from './story.page';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-socialcardp1',
  templateUrl: './socialcardp1.page.html',
  styleUrls: ['./socialcardp1.page.scss'],
})
export class Socialcardp1Page implements OnInit {

  storylist: Array<Story>;

  constructor(public alertCtrl: AlertController) { 
    this.storylist = new Array();
  }

  ngOnInit() {
    this.storylist.push(new Story(1,'../../assets/hotel.jpg','okok','1','2',1,));
    this.storylist.push(new Story(2,'../../assets/hotel.jpg','oooo','2','3',2,));
  }

  addlike(i:number){
    this.storylist[i].likevalue ++;
  }

  async showPrompt(i:number) {  
    const prompt = await this.alertCtrl.create({  
      header: 'Album',  
      message: this.storylist[i].commentlist.toString(),  
      inputs: [  
        {  
          name: 'name1',  
          type: 'text',  
          placeholder: 'Placeholder 1',
        },  
      ],  
      buttons: [  
        {  
          text: 'Cancel',  
          handler: data => {  
            console.log('Cancel clicked');  
          }  
        },  
        {  
          text: 'Save',  
          handler: data => {
            this.storylist[i].commentlist.push(data.name1);
            console.log('เสร็จ');  
          }  
        }  
      ]  
    });  
    await prompt.present();  
  }  
}
