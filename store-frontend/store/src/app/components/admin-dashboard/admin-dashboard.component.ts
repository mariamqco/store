import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
@Input() title: any;
@Input() subtitle: any;

  constructor() { }

  ngOnInit(): void {

  }


}
