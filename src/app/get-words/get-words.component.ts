import { Component, OnInit } from '@angular/core';
import { WordsCompleteService } from 'src/app/words-complete.service';

@Component({
  selector: 'app-get-words',
  templateUrl: './get-words.component.html',
  styleUrls: ['./get-words.component.css']
})
export class GetWordsComponent implements OnInit {
  startsWith : string;
  displayWords:string[] = [];

  constructor(private wordsService: WordsCompleteService) { }

  ngOnInit() {
  }

  getWordsFromService() {
    this.displayWords = this.wordsService.getWords(this.startsWith);
  }

}
