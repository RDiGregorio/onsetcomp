import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {drawChart} from './chart/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Onset';

  constructor(private _http: HttpClient) {
  }

  vote(value) {
    // Sends data to the server.

    this._http.post('http://localhost:3000/api/votes', JSON.stringify([value]), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).subscribe(drawChart);
  }
}
