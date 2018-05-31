import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsCompleteService {

  constructor() { }

  private wordsArr:string[] = [
    "pizza", "banana", "pineapple", "burger",
    "pickles", "suffle", "meat", "soup", "coocie",
    "cake", "cafe", "salad", "pie", "candy", "bread"
  ];

  getWords(startsWith: string) {
    if (startsWith.length > 0) {
      let regExp = new RegExp("^" + startsWith, "i");
      return this.wordsArr.filter(word => word.match(regExp));
    } else {
      return [];
    }
  }
}
