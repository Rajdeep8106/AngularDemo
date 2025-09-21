import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getapi',
  imports: [CommonModule],
  templateUrl: './getapi.html',
  styleUrl: './getapi.css'
})
export class Getapi {
       userList: any[] = [];

  constructor(private http: HttpClient) {}

  getData(id:number) {
    this.http.get("https://jsonplaceholder.typicode.com/posts/${id}")
      .subscribe((result: any) => {
        this.userList = result;
        console.log(this.userList);
      });
  }
}
