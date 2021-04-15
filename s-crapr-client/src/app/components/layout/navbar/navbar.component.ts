import { Component, OnInit } from '@angular/core';
import { User } from 's-crapr-shared/src/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;
  gravatax: string | Int32Array;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    if (this.user && this.user.email) {
      const md5 = new Md5()
      this.gravatax = md5.appendStr(this.user.email).end();
    }
  }

  /*Toggle dropdown list*/
  toggleDD(myDropMenu) {
    document.getElementById(myDropMenu).classList.toggle("invisible");
  }

  /*Filter dropdown options*/
  filterDD(myDropMenu, myDropMenuSearch) {
    var input, filter, ul, li, a, i, div;
    input = document.getElementById(myDropMenuSearch);
    filter = input.value.toUpperCase();
    div = document.getElementById(myDropMenu);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  logOut() {
    this.authService.logout();
  }

}
