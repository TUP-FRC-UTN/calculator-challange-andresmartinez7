import { Component } from '@angular/core';
import { CalcActionComponent } from '../calc-action/calc-action.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  resultado: string = "";

  mostrarResultado(value: string){
    this.resultado = value;
  }

  limpiarInputs(input1: HTMLInputElement, input2: HTMLInputElement){
    input1.value = '';
    input2.value = '';
    this.resultado = '';
  }
}
