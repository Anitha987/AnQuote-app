import { Component, OnInit } from '@angular/core';
import {Quote}from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'Turn your wounds into wisdom','William Shakespeare ',new Date(2018,3,19)),
    new Quote(2,'Tough times never last, but tough people do',' Mark Twain',new Date(2018,1,9)),
    new Quote(3,'The day is what you make it! So why not make it a great one?',' Ernest Hemingway',new Date(2018,6,29)),
    new Quote(4,'It is never too late to be what you might have been.','Stephen King',new Date(2018,5,1)),
  ];
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete=confirm('are you sure you want to delete ${this.quotes[index].name}?')
      if(toDelete){
      this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
