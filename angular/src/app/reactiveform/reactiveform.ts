import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.html',
  styleUrls: ['./reactiveform.css']   // ✅ fixed
})
export class Reactiveform {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    console.log(this.userForm.value);
    alert(JSON.stringify(this.userForm.value, null, 2));
  }
}
