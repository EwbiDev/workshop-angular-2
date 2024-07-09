import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [MatListItem, MatList],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss',
})
export class DataComponent {
  @Input() items: string[] = [];
  constructor() {}

  // When the component is created, this method is called - https://angular.io/api/core/OnInit
  ngOnInit() {
    console.log('hello I am here');
  }
}
