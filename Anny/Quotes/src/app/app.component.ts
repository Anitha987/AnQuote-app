import { Component } from '@angular/core';
import{Quote}from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {id:1,name:'Turn your wounds into wisdom',author:'anitha'},
    {id:2,name:'Tough times never last, but tough people do',author:'flower'},
    {id:3,name:'The day is what you make it! So why not make it a great one?',author:'blandine'},
    {id:4,name:'It is never too late to be what you might have been.',author:'laetitia'},
  ];
}
