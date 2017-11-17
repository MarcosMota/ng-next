import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS = [];
const SERVICES = [];
const PIPES = [];

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        ...COMPONENTS,SERVICES,PIPES
    ],
    exports:[
        ...COMPONENTS,SERVICES,PIPES
    ]
})
export class CoreModule{

}