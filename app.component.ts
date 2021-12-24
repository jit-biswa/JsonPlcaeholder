import { Component } from '@angular/core';
import {JSONPlaceholderService} from './services/jsonplaceholder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonplaceholder';

  data:Array<any> 

  constructor(private JSONPlaceholder:JSONPlaceholderService){
    this.data = new Array<any>()
  }

     
  getDataFromAPI(){
   this.JSONPlaceholder.getData().subscribe((data) =>{
    console.log(data)
    this.data=data
   })
  }
}
