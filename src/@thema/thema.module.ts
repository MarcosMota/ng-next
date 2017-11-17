import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

const COMPONENTS = [];
const SERVICES = [];
const PIPES = [];

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
  })
export class ThemaModule{
    
}