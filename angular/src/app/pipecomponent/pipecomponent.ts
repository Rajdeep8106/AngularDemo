import { CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AppendPipe } from '../append-pipe';
import { ReversePipe } from '../reverse-pipe';

@Component({
  selector: 'app-pipecomponent',
  imports: [UpperCasePipe,CurrencyPipe,DatePipe,PercentPipe,AppendPipe,ReversePipe],
  templateUrl: './pipecomponent.html',
  styleUrl: './pipecomponent.css'
})
export class Pipecomponent {
    title='pipesTitle';
    currencyPipe:number=1000;
    date:Date=new Date();
    percentValue:number=0.25;
}
