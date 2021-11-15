import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Artdeta } from '../shared/artdeta.model';
import { ArtdetaService } from '../shared/artdeta.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styles: [
  ]
})

export class AdminPanelComponent implements OnInit {

  constructor(public artdetaService: ArtdetaService,private toastr:ToastrService,private location: Location) { }

  ngOnInit() {
    this.artdetaService.refreshList();
  }
  populateForm(selectedRecord:Artdeta){

    this.artdetaService.formData= Object.assign({},selectedRecord);
  }
  onDelete(id:number){
    if(confirm('seguro que quiere eliminar?'))
    {
    this.artdetaService.deleteArte (id)
    .subscribe(
      res=>{
        this.artdetaService.refreshList();
        this.toastr.error("eliminado","notificaión");
      },
      err =>{console.log(err)}
    )
    }
    
  }
  backClicked() {
    this.location.back();
  }
  
}