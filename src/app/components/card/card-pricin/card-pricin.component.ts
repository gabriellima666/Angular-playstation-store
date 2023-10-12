import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricin',
  templateUrl: './card-pricin.component.html',
  styleUrls: ['./card-pricin.component.css']
})
export class CardPricinComponent implements OnInit {
	@Input()
	gameType:string = "Digital";
	@Input()
	gamePrice:string = "R$ 60.00";


  constructor() { }

  ngOnInit(): void {
  }

}
