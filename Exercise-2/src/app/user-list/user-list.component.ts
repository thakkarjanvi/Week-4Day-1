import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit {
  users: { name: string }[] = []; 

  constructor() { }

  ngOnInit() {
    this.users = [
      { name: 'User 1' },
      { name: 'User 2' },
      { name: 'User 3' },
    ];
  }
}
