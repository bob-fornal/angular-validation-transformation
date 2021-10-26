import { Component } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  data: Array<any>;

  constructor(
    private dataService: DataService
  ) {
    this.data = [ ...this.dataService.getData() ];
  }

  validate = this.dataService.validate;
  transform = this.dataService.transform;

}
