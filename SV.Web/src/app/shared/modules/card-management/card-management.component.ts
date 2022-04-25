import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Craft } from '../../types/customs/craft.enum';

@Component({
  selector: 'card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss'],
})
export class CardManagementComponent implements OnInit {
  title: string;
  constructor(
    private readonly dialogRef: MatDialogRef<CardManagementComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly dialogData: { craft: Craft }
  ) {}

  ngOnInit(): void {
    this.title = `Create ${Craft[this.dialogData.craft]} card`;
  }

  close(): void {
    this.dialogRef.close();
  }
}
