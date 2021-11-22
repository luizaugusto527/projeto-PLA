import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Resposta } from './resposta';
import { SolverService } from './solver.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  teste:FormGroup
  resposta!:Resposta
  showResposta:number = 0
  constructor(private solver:SolverService) {
    this.teste = new FormGroup({
      profit_ipanema: new FormControl(),
      profit_ubatuba: new FormControl(),
      profit_ilha: new FormControl(),
      profit_trindade: new FormControl(),
      hours_ipanema: new FormControl(),
      hours_ubatuba: new FormControl(),
      hours_ilha: new FormControl(),
      hours_trindade: new FormControl(),
      total_wood: new FormControl(),
      total_hours: new FormControl()

    })
   }

  ngOnInit(): void {
    this.teste
   
  }
  calc():void{
   
    
    const conta = this.teste.value
    this.solver.setSolver(conta).subscribe({
      next:x =>{
        this.resposta = x
        this.showResposta = 1
      } 
    })
  }


}
