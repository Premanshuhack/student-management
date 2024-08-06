import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceService } from './service.service';
import { CommonModule } from '@angular/common'; 
import { ResourceLoader } from '@angular/compiler';
import { App2Component } from "./app2/app2.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, App2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'prj1';
  users:any;
  data:any;
  str:any;
  flag:any;
  flag2:any;
  flag3=false;
  names:any;
  user1:any;
  user2:any;
  user3:any;
  user4:any;
  
  constructor(private userData : ServiceService){
    this.userData.saveusers2({}).subscribe((result)=>{
      console.warn("data",result);
      this.users=result;
      if(this.users=='access'){
        this.flag2=true;   
        this.userData.saveusers({}).subscribe((result2)=>{
          this.data=result2;
          console.warn("data2",this.data);
          this.str=result2;
        });
      }
      else if(this.users=='enter'){
        this.flag=true;
        this.userData.saveusers3({}).subscribe((result3)=>{
          console.warn("data",result3);
          this.user1=result3;
          console.warn("data",this.user1);
      
      
          this.userData.saveusers4({}).subscribe((result4)=>{
            console.warn("data",result4);
            this.user2=result4;
            console.warn("data",this.user2);
      
      
            this.userData.saveusers5({}).subscribe((result5)=>{
              console.warn("data",result5);
              this.user3=result5;
              console.warn("data",this.user3);
      
      
      
              this.userData.saveusers6({}).subscribe((result6)=>{
                console.warn("data",result6);
                this.user4=result6;
                console.warn("data",this.user4);
              });
            });
          });
        });
      }

      else{
        this.flag3=true;    
      }



    });
  
    
  }


}
