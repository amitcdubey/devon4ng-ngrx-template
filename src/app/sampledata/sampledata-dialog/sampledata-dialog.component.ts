import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Login } from '../models/login.model';

import { Store } from '@ngrx/store';

import { AppState } from '../store/app.states';
@Component({
  selector: 'public-sampledata-dialog',
  templateUrl: './sampledata-dialog.component.html',
  
})

export class SampleDataDialogComponent {
  title: string;
  items: any = {
    name: '',
    surname: '',
    age: '',
    email: '',
  };
  userDetails: Login = new Login();
  constructor(
    private store: Store<AppState>,
    private translate: TranslateService,
    
    public dialogRef: MatDialogRef<SampleDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    if (!dialogData) {
      
      this.title = this.getTranslation('sampledatamanagement.addTitle');
    } else {
      
      this.title = this.getTranslation('sampledatamanagement.editTitle');
      this.items = dialogData;
    }
  }

  getTranslation(text: string): string {
    let value: string;
    this.translate.get(text).subscribe((res: any) => {
      value = res;
      
    });
    return value;
  }
  ngOnInit() {
  }

  //  addData(): void {
  //    console.log('aaa')

  //    console.log(this.items.name+'logincomponentts' +this.items.surname);
  //    const payload = {
     
  //      name : this.items.name,
  //      surname : this.items.surname,
  //      age : this.items.age,
  //      email : this.items.email
  //    };
    
  //    this.store.dispatch(new AddData(payload));
  //    console.log(payload);
  //    AddData
   
  //  }
}