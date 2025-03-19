import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  country: string | null = '';
  city: string | null = '';
  page: number = 1;
  sort: string | null = '';
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.country = this.route.snapshot.paramMap.get('country')
    // this.city = this.route.snapshot.paramMap.get('city')
    // this.page = parseInt(this.route.snapshot.paramMap.get('page') || '1')
    // this.sort = this.route.snapshot.paramMap.get('sort')


    this.route.paramMap.subscribe((params: ParamMap) => {
      debugger
      this.country = params.get('country');
      this.city = params.get('city');
      this.page = parseInt(params.get('page') || '1');
      this.sort = params.get('sort');
    })
  }
}
