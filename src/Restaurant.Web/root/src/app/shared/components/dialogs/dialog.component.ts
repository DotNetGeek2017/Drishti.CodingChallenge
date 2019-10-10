import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "custom-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent {
  public type: string = "alert"; // alert, confirmation
  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
}
