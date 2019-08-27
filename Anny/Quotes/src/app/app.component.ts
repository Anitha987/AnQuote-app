import { Component } from '@angular/core';
import{Quote}from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
  //   new Quote(1,'Turn your wounds into wisdom','anitha'),
  //   new Quote(2,'Tough times never last, but tough people do','flower'),
  //   new Quote(3,'The day is what you make it! So why not make it a great one?','blandine'),
  //   new Quote(4,'It is never too late to be what you might have been.','laetitia'),
  ];
}
