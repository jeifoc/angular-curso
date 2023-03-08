 import { Component } from "@angular/core";
 
 @Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es {{base}}</h3>
    <button (click)="acumular(this.base)">+1</button>
    <span>{{newBase}}</span>
    <button (click)="acumular(this.base*-1)">-1</button>
    `,
 })

 export class ContadorComponent{
    title = 'App Contador';
    base : number = 5
    newBase : number = this.base

    acumular(valor : number){
        const base:number = this.base
        this.newBase += valor;
    }
 }