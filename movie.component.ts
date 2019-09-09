import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  registerForm:FormGroup
  serviceService: any;
  addForm: any;
  constructor(private router:Router,private http:ServiceService) { 
    this.registerForm=new FormGroup({
      mname:new FormControl(''),
      lang:new FormControl(''),
      genre:new FormControl('')
​
    })
  }

  ngOnInit() {
  }
  list(){
    this.router.navigateByUrl("movielist")
}
save(data){
  console.log(data)
let mname =this.registerForm.get('mname').value
  let lang =this.registerForm.get('lang').value
  let genre=this.registerForm.get('genre').value
   let body={
     'MovieName':mname,
     'Language':lang,
     'Genre':genre
   }
   this.http.movies(body).subscribe(res =>{
     console.log(res)
   })
   console.log(data)
   this.router.navigateByUrl("movielist");
  }
 
  }
