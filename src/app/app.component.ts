import {
  Component
} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class Signup {
  constructor(public http: Http) {}

  signup() {
    var data = {
      user: "paradon",
      pass: "paradon@1"
    };
    var myHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.post('http://35.157.219.6:3000/api/login', data, {
        headers: myHeaders
      })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
}
