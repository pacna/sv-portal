// Angular
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// Material
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

// Self
import { Craft } from '../../types/customs/craft.enum';
import { CardsApiService } from '../../services/cards-api.service';
import { CardDeactivateData } from '../../types/customs/card-deactivate-data';

@Component({
  selector: 'card-deactivate',
  templateUrl: './card-deactivate.component.html',
  styleUrls: ['./card-deactivate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardDeactivateComponent implements OnInit {
  title: string;
  cardName: string;
  constructor(
    private readonly dialogRef: MatDialogRef<CardDeactivateComponent>,
    private readonly cardsApiService: CardsApiService,
    private readonly snackBar: MatSnackBar,
    private router: Router,
    @Inject(MAT_DIALOG_DATA)
    private readonly dialogData: CardDeactivateData
  ) {}

  ngOnInit(): void {
    this.title = `Remove ${Craft[this.dialogData.craft]} card`;
    this.cardName = this.dialogData.name;
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.cardsApiService.deleteCard(this.dialogData.id).subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open('Card removed', null, { duration: 3000 });
      this.router.navigateByUrl(Craft[this.dialogData.craft]);
    });
  }
}
