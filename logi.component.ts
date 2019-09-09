import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-logi',
  templateUrl: './logi.component.html',
  styleUrls: ['./logi.component.css']
})
export class LogiComponent implements OnInit {
  log:FormGroup;


  constructor(public router:Router, private fb:FormBuilder, private http:ServiceService) { 
    
    this.log=this.fb.group({
      name:new FormControl(''),
        pass:new FormControl('')
       
      })
  }

  ngOnInit() {
  }

  first(){
    this.router.navigateByUrl('regis');
  }
  // child(){
  //   this.router.navigateByUrl('movie');
  // }
  
  trii(values) {
      console.log(values)
      this.http.loginuser(values).subscribe(data1 => {
        console.log("2", data1)
      })
      console.log(values)
      this.router.navigateByUrl('movie');

    } 
  }
