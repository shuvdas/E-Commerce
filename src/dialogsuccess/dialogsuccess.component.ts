import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialogsuccess',
  templateUrl: './dialogsuccess.component.html',
  styleUrls: ['./dialogsuccess.component.scss']
})
export class DialogsuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogsuccessComponent>) {}

  ngOnInit() {}

  // close() {
  //   this.dialogRef.close();
  // }

}

