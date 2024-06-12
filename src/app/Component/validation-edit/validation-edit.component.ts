import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-validation-edit',
  templateUrl: './validation-edit.component.html',
  styleUrls: ['./validation-edit.component.css']
})
export class ValidationEditComponent implements OnInit{

  role:any;
  rows:any[]=[]
  permissionForm:FormGroup

  constructor(private data:PioneerDataService,private db:FormBuilder,private activeRoute:ActivatedRoute){
    this.activeRoute.paramMap.subscribe(params => {
      this.role = params.get('role');
    });
    this.permissionForm=this.db.group({
      permissionScreens:this.db.array([this.db.group({
        screenId:[0],
        screenName:[""],
        add: [false],
        delete: [false],
        update: [false],
        get: [false]
      })])
    })

  }


  getRolePermision(){
    this.data.getRolePermition(this.role).subscribe({
      next:(response)=>{
        this.rows=response
      }
    })

  }

  update(){

  }

  ngOnInit(): void {
      this.getRolePermision()
  }
}
