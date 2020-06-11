import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { SimpleSnackBar, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.validator()){
      
      this.dialog.closeAll();

      let snackBarRef = this.snackBar.open('Thanks for registering.', 'Ok',{
        duration: 3000
      });
      snackBarRef.afterDismissed().subscribe(() => {
      });

    } else {
      
    }

  }
  validator() {
    let contadorError: number = 0;

    for (const field in this.userForm.controls) { // 'field' is a string
      const control = this.userForm.get(field); // 'control' is a FormControl 
      if(control.errors){
        contadorError++;
      } 
    }
return contadorError > 1;
  }
cancel(){
  this.dialog.closeAll();
}
}
