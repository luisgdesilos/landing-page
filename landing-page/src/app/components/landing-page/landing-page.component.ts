import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { FormularioComponent } from '../formulario/formulario.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  dialogRef: any;
  flag: boolean;
  user: User;
  constructor(
    private dialog: MatDialog,
  ) { 
    this.flag = true;
  }

  ngOnInit(): void {
  }
  openForms(){
    const matDialogConfig: MatDialogConfig = {
      disableClose: true,
      panelClass: 'custom-modalbox1',
      data: {formulario: this.user}
    };
    this.dialogRef = this.dialog.open(FormularioComponent, matDialogConfig);
    this.dialogRef.afterClosed().subscribe((result) => {
    
    });
}

}
