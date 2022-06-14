import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IWord} from "../iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: IWord;
  constructor(private activedRoute: ActivatedRoute,private dictionaryService: DictionaryService) {
    activedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      if(word != null) {
        this.wordDetail = this.dictionaryService.search(word);
      }
    })
  }

  ngOnInit(): void {
  }

}
