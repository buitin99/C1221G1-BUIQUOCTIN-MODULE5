import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ImgSlideComponent} from './img-slide/img-slide.component';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  @ContentChildren(ImgSlideComponent) slides: QueryList<ImgSlideComponent>;
  component;
  activeIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  previos() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
  next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
}
