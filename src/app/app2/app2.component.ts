import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-app2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app2.component.html',
  styleUrl: './app2.component.css'
})
export class App2Component {
  data:any;
  str:any;
constructor(private userData:ServiceService){
  this.userData.saveusers({}).subscribe((result2)=>{
    this.data=result2;
    console.warn("data2",this.data);
    this.str=result2;
  });
}
}
