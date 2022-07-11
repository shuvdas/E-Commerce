import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { User } from '../user';
import { Shop } from '../shop';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogsuccessComponent } from '../dialogsuccess/dialogsuccess.component';

@Component({
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.scss']
})
export class SignUpComponent implements OnInit {

  role: string = "";
  isUser: boolean = false;
  isShop: boolean = false;

  //User Variables
  name = new FormControl('');
  pincode = new FormControl('');
  email = new FormControl('');

  public user: User = {
    // userid: null,
    username: null,
    pincode: null,
    email: null
  };

  constructor(public dataservice: DataService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onTabClicked(event): void {
    this.role = event.target.innerHTML;
    if(this.role === 'User') {
      this.isUser = true;
      this.isShop = false;
      this.openForm(this.isUser,this.isShop);
    }
    else if(this.role === 'Shop') {
      this.isUser = false;
      this.isShop = true;
      this.openForm(this.isUser,this.isShop);
    }
  }

  public openForm(userFlag:boolean,shopFlag:boolean): void {
    if(userFlag===true && shopFlag===false) {
      // $('.container').fadeOut(1000);
      // $('#firstAnchor').addClass('active');
      // $('#firstAnchor').removeClass('inactive');
      // $('#secondAnchor').removeClass('active');
      // $('#secondAnchor').addClass('inactive');

      setTimeout(function(){ $('.shopDiv').fadeOut(200)},200);
      setTimeout(function(){ $('.userDiv').fadeIn(200)},400); 
      setTimeout(function(){ $('.userDiv').css('display','flex')},400); 

      setTimeout(function(){ $('#firstAnchor').css('border-radius','2rem')},400);
      setTimeout(function(){ $('#firstAnchor').css('border-color','blueviolet')},400);
      setTimeout(function(){ $('#firstAnchor').css('border-width','1px')},400);
      setTimeout(function(){ $('#firstAnchor').css('border-style','solid')},400);
      setTimeout(function(){ $('#firstAnchor').css('background','-webkit-linear-gradient(left, white, rgb(152, 152, 212))')},400);
      setTimeout(function(){ $('#firstAnchor').css('color','white')},0);
      
      setTimeout(function(){ $('#secondAnchor').css('border-radius','2rem')},400);
      setTimeout(function(){ $('#secondAnchor').css('border-color','blueviolet')},400);
      setTimeout(function(){ $('#secondAnchor').css('border-width','1px')},400);
      setTimeout(function(){ $('#secondAnchor').css('border-style','solid')},400); 
      setTimeout(function(){ $('#secondAnchor').css('background','none')},400);
      setTimeout(function(){ $('#secondAnchor').css('color','blueviolet')},0);
    }
    else if(userFlag===false && shopFlag===true) {
      // $('.container').fadeOut(1000);
      // $('#firstAnchor').removeClass('active');
      // $('#firstAnchor').addClass('inactive');
      // $('#secondAnchor').addClass('active');
      // $('#secondAnchor').removeClass('inactive');

      setTimeout(function(){ $('.userDiv').fadeOut(200)},200);
      setTimeout(function(){ $('.shopDiv').fadeIn(200)},400);      
      setTimeout(function(){ $('.shopDiv').css('display','flex')},400);

      setTimeout(function(){ $('#secondAnchor').css('border-radius','2rem')},400);
      setTimeout(function(){ $('#secondAnchor').css('border-color','blueviolet')},400);
      setTimeout(function(){ $('#secondAnchor').css('border-width','1px')},400);
      setTimeout(function(){ $('#secondAnchor').css('border-style','solid')},400);
      setTimeout(function(){ $('#secondAnchor').css('background','-webkit-linear-gradient(left, white, rgb(152, 152, 212))')},400);
      setTimeout(function(){ $('#secondAnchor').css('color','white')},0);

      setTimeout(function(){ $('#firstAnchor').css('border-radius','2rem')},400);
      setTimeout(function(){ $('#firstAnchor').css('border-color','blueviolet')},400);
      setTimeout(function(){ $('#firstAnchor').css('border-width','1px')},400);
      setTimeout(function(){ $('#firstAnchor').css('border-style','solid')},400);
      setTimeout(function(){ $('#firstAnchor').css('background','none')},400);
      setTimeout(function(){ $('#firstAnchor').css('color','blueviolet')},0);
    }
  }

  public formSubmission(): void {
    // this.user.userid = null;
    this.user.username = this.name.value;
    this.user.pincode = this.pincode.value;
    this.user.email = this.email.value;
    this.dataservice.createUser(this.user).subscribe();
  }

  public submitFunction(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialogSuccess';

    let dialogVar = this.dialog.open(DialogsuccessComponent, dialogConfig);

    $('.dialogSuccess').css('height','80px');
    $('.dialogSuccess').css('width','280px');

    setTimeout(function(){dialogVar.close()},3000);
  }

}
