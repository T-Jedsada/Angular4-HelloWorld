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

export class SignupComponent {
  constructor(public http: Http) {}

  signup() {
    const data = {
      user: 'paradon',
      pass: 'paradon@1'
    };
    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.get('https://api.github.com/users/t-jedsada')
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
