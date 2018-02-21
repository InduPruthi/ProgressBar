import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isValid: boolean;
  seconds:number;
  hhmmss:string;
  count: number;
  counter:any;
  width=0;
  progressBarWidth:any;
  increment: number;
   validateHhMm()
  {
     this. isValid = /^([0-1]?[0-9]|2[0-4])(:[0-5][0-9])?(:[0-5][0-9])?$/.test(this.hhmmss);
}
StartProgressBar(inputField)
{
  
  this.getSeconds();
}
getSeconds()
{
  var hms = '02:04:33';   // your input string
  var a = this.hhmmss.split(':'); // split it at the colons
  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  if(a.length>2)
  {
 this.seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  }
  else if(a.length>1)

{
  this.seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 ;
}
else
{

  this.seconds = (+a[0]) * 60 * 60 ;
} 

this.StartTimer();
}


StartTimer()
{
  this.width=0;
  this.increment=100/this.seconds;
  console.log(this.increment);
  this.timer();
   this.counter=setInterval(this.timer.bind(this), 1000);
  
}


 timer() {
  this.seconds = this.seconds - 1;
  if (this.seconds <0) {
      clearInterval(this.counter);
      return; 
  }
  this.width=this.width+this.increment; 
  
  let seconds = this.seconds % 60;
  let minutes = Math.floor(this.seconds / 60);
  let hours = Math.floor(minutes / 60);
  minutes %= 60;
  hours %= 60;
 this.hhmmss=hours + ":" + minutes + ":" + seconds ;// Change time
 }




}

