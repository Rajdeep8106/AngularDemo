import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  imports: [NgClass],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css'
})
export class AttributeDirectives {
   isActive:boolean=false;
   isDisabled:boolean=true;
}
