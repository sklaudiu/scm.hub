import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invitatie',
  templateUrl: './invitatie.component.html',
  styleUrls: ['./invitatie.component.css']
})
export class InvitatieComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
