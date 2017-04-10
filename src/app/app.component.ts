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
    // const data = {
    //   user: 'paradon',
    //   pass: 'paradon@1'
    // };
    // const myHeaders = new Headers({
    //   'Content-Type': 'application/json'
    // });
    let params: URLSearchParams = new URLSearchParams();
    params.set('apikey', '274d2a4a98a5d12a240fed5cf66733ac');
    params.set('code', 'lrcmb');
    params.set('action', 'user_login');
    params.set('username', 'admin');
    params.set('password', '1112');
    this.http.get('http://sc2lclinic.com/backend/system/api/json/main.php', {
        search: params
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
