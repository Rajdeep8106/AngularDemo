import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule, CommonModule],
  templateUrl: './templateform.html',
  styleUrls: ['./templateform.css']
})
export class Templateform {
  userObj: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

 onSubmit(form: any) {
  console.log('Form Values:', form.value);
  alert(JSON.stringify(this.userObj, null, 2));
}

}
