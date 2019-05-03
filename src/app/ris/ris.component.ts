import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {

  ris: Number;
  seq: String;
  public show:boolean = false;
  myForm: FormGroup;

  constructor() { 
    this.ris = 0;
    this.seq = "";
    this.myForm = fb.group({
     'sku': ['ABC123', Validators.required]
   });
  }

  ngOnInit() {
  }
  
  addNumber(n1: HTMLInputElement, n2: HTMLInputElement): boolean{
    this.ris = Number(n1.value)+Number(n2.value);
    console.log("il tuo risultato è "+this.ris);
    this.getSeq(n1,n2);
    return false;
  }
  
  removeNumber(n1: HTMLInputElement, n2: HTMLInputElement): boolean{
    this.ris = Number(n1.value)-Number(n2.value);
    console.log("il tuo risultato è "+this.ris);
    this.getSeq(n1,n2);
    return false;
  }
  
  multiNumber(n1: HTMLInputElement, n2: HTMLInputElement): boolean{
    this.ris = Number(n1.value)*Number(n2.value);
    console.log("il tuo risultato è "+this.ris);
    this.getSeq(n1,n2);
    return false;
  }
  
  divideNumber(n1: HTMLInputElement, n2: HTMLInputElement): boolean{
    this.ris = Number(n1.value)/Number(n2.value);
    console.log("il tuo risultato è "+this.ris);
    this.getSeq(n1,n2);
    return false;
  }
  
  getSeq(n1: HTMLInputElement, n2: HTMLInputElement): void{
    this.seq = n1.value;
    for(let i=Number(n1.value)+1; i<Number(n2.value)+1; i++){
      this.seq+="-"+i;
    }
  }
  
  toggle(){
    this.show = !this.show;
  }

}
