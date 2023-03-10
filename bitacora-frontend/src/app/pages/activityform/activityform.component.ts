import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/model/Activity/activity';
import { ActivityService } from 'src/app/services/Activity/activity.service';

@Component({
  selector: 'app-activityform',
  templateUrl: './activityform.component.html',
  styleUrls: ['./activityform.component.scss']
})
export class ActivityformComponent {
  area = ['1','2','3','4','5'];
  dropDown = "Selecciona un Area";
  name?:string="Project Name";

  activity?:Activity=new Activity();

  constructor(private activityService:ActivityService, private router:Router, private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.cargar();
  }

  create():void{
    this.activityService.saveActivity(this.activity).subscribe(
      ()=>this.router.navigate(["/currentproject/activities"])
    )
  }

  update():void{
    this,this.activityService.updateActivity(this.activity).subscribe(
      res=>this.router.navigate(['/currentproject/activities'])
    )
  }

  delete():void{
    this.activatedRoute.params.subscribe(
      activity=>{
        let idActivitie:number=activity['idActivitie'];

        this.activityService.deleteActivitie(idActivitie).subscribe(
          ()=>this.router.navigate(["/currentproject/activities"])
        )
      } 
    )
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      activity=>{
        let idActivitie:number=activity['idActivitie'];
        
        if (idActivitie) {          
          
          this.activityService.getActivityById(idActivitie).subscribe(
            activity=>this.activity=activity
          )
        }
      }
    )
  }


}
