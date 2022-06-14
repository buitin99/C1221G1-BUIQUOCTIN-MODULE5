import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {IWord} from "../iword";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  word: IWord[] = [];
  constructor(private dictionaryService: DictionaryService) {
    this.word = dictionaryService.getWord();
  }

  ngOnInit(): void {
  }

}
