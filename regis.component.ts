import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
 
  register:FormGroup;
  
  constructor(public router:Router, private tri:FormBuilder, private http:ServiceService) { 
    this.register=this.tri.group({
      name:new FormControl(''),
      pass:new FormControl(''),
      npass:new FormControl('')
     })
  }

  ngOnInit() {
  }
log(){
  this.router.navigateByUrl('logi');
  }
  // local(data){
  //   console.log("value",data.value);
  //   let profile={
  //     name:data.value.name,
  //     pass:data.value.pass,
  //     npass:data.value.npass
  //    };
  
  //   localStorage.setItem("UserDetails",JSON.stringify(profile));
  // }
  
  reg(values) {
    console.log(values)
    this.http.registerUser(values).subscribe(data1 => {
      console.log("2", data1)
    })
  } 

}
