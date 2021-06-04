import { HttpClientModule } from  '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
username=''

  constructor(private dataservice:DataService , private router:Router) {
  
   }
   
  ngOnInit(): void {
    let id= localStorage.getItem("token")
    this.dataservice.getUserName(id).subscribe((data)=>{
      this.username=JSON.parse(JSON.stringify(data));
    })
  }
}
