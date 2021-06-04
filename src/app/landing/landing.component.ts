import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor( private router:Router, private dataservice:DataService) { }
userdata={
  name:'',
  email:'',
  pass:'',
  num:''
}
logindata={
  email:'',
  pass:''
}
msg={
  abc:''
}
adduser(){
  this.dataservice.registerdata(this.userdata)
  .subscribe((data)=>{
    this.msg=JSON.parse(JSON.stringify(data));


    if(this.msg.abc=="already there"){
      alert(this.userdata.name + " already registered")
    }else{
    alert("Sucess")
    }

  })
 
  
}


login(){
  this.dataservice.login(this.logindata)
  .subscribe(data =>{
   
   if(data.toString()=="Invalid password"){
     alert('invalid password')
   }
   else if(data.toString()=="User not resgistered"){
    alert('User not resgistered')
   }
   else{
  localStorage.setItem('token', data.toString())
   this.router.navigate(["home"])
   }
  })

}
  emailpattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  pwdpattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  phonepattern = "^[7-9][0-9]{9}$"
  ngOnInit(): void {
  }

}