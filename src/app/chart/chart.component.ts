import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {drawChart} from './chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    // Receives data from the server.

    this._http.get('http://localhost:3000/api/votes').subscribe(drawChart);
  }
}
