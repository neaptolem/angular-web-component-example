import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

export interface ExchangeRate {
  date: string;
  base: string;
  rates: {
    [key: string]: number;
  };
}

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit, OnChanges {
  public ratesArr: [string, number][];
  public exchangeRate: ExchangeRate;

  @Input() title = '';

  @Input() data: string;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && changes.data.currentValue) {
      this.exchangeRate = JSON.parse(this.data);

      this.ratesArr = Object.entries(this.exchangeRate.rates);
    }
  }



}
