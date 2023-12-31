import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm='';
  constructor(private router: Router,
    activatedRoute: ActivatedRoute) {
    //ActivatedRoute would only be accessable inside the constructor
    //we haven't put any access modifier
      activatedRoute.params.subscribe((params) => {
        if(params.searchTerm) this.searchTerm = params.searchTerm;
      })
     }

    
  ngOnInit(): void {
  }

  search(term: string):void{
    if(term)
    this.router.navigateByUrl('/search/'+term);
  }
}
