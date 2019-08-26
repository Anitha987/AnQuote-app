import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote=0;
  up(){
    this.upvote=this.upvote+1;
  };
  downvote=0;
  down(){
    this.downvote=this.downvote+1;
  }
  constructor() { }

  ngOnInit() {
  }

}
