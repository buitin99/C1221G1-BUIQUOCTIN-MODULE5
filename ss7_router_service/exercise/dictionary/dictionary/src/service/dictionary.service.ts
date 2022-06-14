import { Injectable } from '@angular/core';
import {IWord} from "../app/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  word: IWord[] = [
    {word: 'hello', mean: 'xin chao'},
    {word: 'morning', mean: 'buoi sang'}
  ];

  constructor() { }
  getWord() {
    return this.word;
  }
  search(word: any) {
    for (let w of this.word) {
      if (w.word == word) {
        return w;
      }
    }
  }
}
