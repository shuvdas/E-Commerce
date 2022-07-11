import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface dataFormat {
  sourceRef: String;
  titleRef: String;
}

@Component({
  selector: 'app-dialogbody',
  templateUrl: './dialogbody.component.html',
  styleUrls: ['./dialogbody.component.scss']
})
export class DialogbodyComponent implements OnInit {

  sourceData: String;
  titleData: String;

  constructor(public dialogRef: MatDialogRef<DialogbodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dataFormat) {
      // alert('Inside Dialog component - ' + data.sourceRef);
      this.sourceData = data.sourceRef;
      this.titleData = data.titleRef;
    }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

}
