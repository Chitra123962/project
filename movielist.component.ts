import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { headersToString } from 'selenium-webdriver/http';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  search='';
  public moviedata1=[
    { MovieName:'KGF',
     Language:"kannada",
    Genre:'Drama'
},
{ MovieName:'yavaru',
     Language:"Telugu",
    Genre:'Suspense'
},
{ MovieName:'Kathanam',
     Language:"telugu",
    Genre:'Suspense Thriller'
},
{ MovieName:'kadhamba',
     Language:"kannada",
    Genre:'action'
},
{ MovieName:'Baahubali',
     Language:"Telugu",
    Genre:'Historical'
},
{ MovieName:'Arundhathi',
     Language:"Telugu",
    Genre:'horror'
},
{ MovieName:'Vishwasam',
     Language:"Tamil",
    Genre:'Emotional'
},
{ MovieName:'Jilla',
     Language:"Tamil",
    Genre:'Entertainment'
}
]
  value: Object;
  hd="5d72272cc79df20007be6006"

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
   
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'
    +this.hd).subscribe(data=>{
      console.log("1",data)
      
  })
}
    addmovie(){
      this.router.navigateByUrl('movie')
  }
  retrive(){
    this.http.get("https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/").subscribe(a=> {
      this.value = a;
   console.log("1",a);
     });
    }

  }