import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = '';

  constructor(private el: ElementRef<HTMLElement>) {
    // el.nativeElement
    this.htmlElement = el
    
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color || 'red';
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje || 'Este campo es requerido';
  }

}
