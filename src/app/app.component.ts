import { Component, OnInit } from '@angular/core';
import { TaskdataService } from './taskdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  taskList;

  constructor(private _tskSrv: TaskdataService) {}

  ngOnInit(){

  	this._tskSrv.getTask().subscribe(
  			(res) => {
  				console.log('Successfull call > ',res);
  			},
  			(err) => {
  				console.log('Error found in http call > ',err);
  			},
  			() => { 
  				console.log('http complete');
  			}
  		);
  }

}
