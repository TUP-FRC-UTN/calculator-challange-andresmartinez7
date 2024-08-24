import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-action',
  standalone: true,
  imports: [],
  templateUrl: './calc-action.component.html',
  styleUrl: './calc-action.component.css'
})
export class CalcActionComponent {
  @Input() v1: string = "";
  @Input() v2: string = "";
  @Output() resultado = new EventEmitter<string>();
  @Output() limpiar = new EventEmitter<void>();

  sumar(){
    let x : number = +this.v1 + +this.v2;
    this.resultado.emit(x.toString());
  }

  restar(){
    let x: number = +this.v1 - +this.v2;
    this.resultado.emit(x.toString());
  }

  elebar(){
    let x: number = (+this.v1) ** (+this.v2);
    this.resultado.emit(x.toString());
  }

  multiplicar(){
    let x: number = +this.v1 * +this.v2;
    this.resultado.emit(x.toString());
  }

  dividir(){    
    let x: number = +this.v1 / +this.v2;
    this.resultado.emit(x.toString());
  }

  borrar(){
    this.limpiar.emit();
  }
}
