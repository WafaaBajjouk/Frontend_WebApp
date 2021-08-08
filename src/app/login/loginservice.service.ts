import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  authenticate(username:string, password:string) {
    if (username === "wafaa" && password === "estebajjouk") {
      sessionStorage.setItem('wafaa', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('wafaa')
    console.log(!(user === null))
    return !(user === null)
  }
}
