import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  getMessage(): string {
    return "From getMessage method";
  }

  myClick():void{
    alert("Call me at 000-000-0000");
  }
}
