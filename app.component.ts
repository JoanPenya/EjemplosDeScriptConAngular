import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project-script';

  exampleNum = 0;
  img = null;

  @ViewChild("UPS") myTemplate: ElementRef;

  example(){
    alert("honk honk");
  }

  suma(){
    this.exampleNum++;
    if(this.exampleNum == 50){
      this.img = '<img src="https://assets.change.org/photos/0/te/sw/PFtESWARWWoHvXx-800x450-noPad.jpg?1593639031"><h3>Que haces pillin</h3>';
    }
  }
  resta(){
    this.exampleNum--;
    if(this.exampleNum == -50){
      this.img = '<img src="https://i.pinimg.com/originals/01/c4/7d/01c47d1ac4eb24065796cb4fce7cf7cc.jpg"><h3>¿Por que me odias?</h3>';
    }
  }

  apto(){
    this.myTemplate.nativeElement.innerHTML = '<img src="https://assets.change.org/photos/0/te/sw/PFtESWARWWoHvXx-800x450-noPad.jpg?1593639031"><h3>pillin</h3>';
  }

}