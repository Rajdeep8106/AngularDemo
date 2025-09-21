import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Templateform } from './templateform/templateform';
import { Reactiveform } from './reactiveform/reactiveform';
import { Getapi } from './getapi/getapi';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { Pipecomponent } from './pipecomponent/pipecomponent';

export const routes: Routes = [
  { path:'',component:Home},
  { path:'about',component:About},
  { path:'profile',component:Profile},
  { path:'templateform',component:Templateform},
  { path:'reactiveform',component:Reactiveform},
  { path:'getapi',component:Getapi},
  { path:'attributeDirectives',component:AttributeDirectives},
  { path:'pipecomponent',component:Pipecomponent},
];
