import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
     count=signal(1);
     increment(){
      this.count.update(count=>count+1);
     }
     decrement(){
      this.count.update(count=>count-1);
     }
}
