import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {

  constructor(private routerObj:Router){}
  
  navigateToTest2(){
    this.routerObj.navigate(["/test2"])
  }
}
