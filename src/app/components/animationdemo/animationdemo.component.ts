import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
import { RouterState } from '@angular/router';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations: [
    trigger("zoomEffect", [
    state('initial', style({width:'200px', height: '200px', transform:'rotate(0deg)'})), 
     state('final', style({width:'400px', height: '400px' , transform:'rotate(360deg)'})),

      //state('initial', style({width:'200px', height: '200px'})), 
      //state('final', style({width:'400px', height: '400px' })),

      transition('initial=>final', animate('5000ms')),
      transition('final=>initial', animate('5000ms'))]
    )]

})
export class AnimationdemoComponent implements OnInit {

  animationState='initial';
  zoomEffect='Zoom In';

  zoomClick(){
    this.animationState=(this.animationState=='initial' ?'final' :'initial');
    this.zoomEffect=(this.zoomEffect=='Zoom In' ?'Zoom Out' : 'Zoom In');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
