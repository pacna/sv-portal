import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Packs } from '../../types/customs/packs';
import { CardPack } from '../../types/customs/card-pack.enum';
import { Rarities } from '../../types/customs/rarities';
import { RartiyConfig } from '../../types/customs/rarity-config';
import { CardTypes } from '../../types/customs/card-types';
import { CardTypeConfig } from '../../types/customs/card-type-config';
import { Craft } from '../../types/customs/craft.enum';
import { CardEditorComponent } from '../card-editor/card-editor.component';

@Component({
  selector: 'card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss'],
})
export class CardManagementComponent implements OnInit {
  @ViewChild('baseAbilityEditor') baseAbilityEditor: CardEditorComponent;
  @ViewChild('baseFlavorEditor') baseFlavorEditor: CardEditorComponent;

  title: string;
  rarities: Record<'bronze' | 'silver' | 'gold' | 'legendary', RartiyConfig> =
    Rarities;
  cardPacks: CardPack[] = Packs;
  cardTypes: Record<'follower' | 'spell' | 'amulet', CardTypeConfig> =
    CardTypes;
  cardNameCtrl: FormControl = new FormControl(null, [Validators.required]);
  cardRarityCtrl: FormControl = new FormControl(null, [Validators.required]);
  cardTypeCtrl: FormControl = new FormControl(null, [Validators.required]);
  cardPPCostCtrl: FormControl = new FormControl(null, [Validators.required]);
  cardPackCtrl: FormControl = new FormControl(null, [Validators.required]);
  cardFormGroup: FormGroup = new FormGroup({
    name: this.cardNameCtrl,
    rarity: this.cardRarityCtrl,
    type: this.cardTypeCtrl,
    ppCost: this.cardPPCostCtrl,
    pack: this.cardPackCtrl,
  });

  audioLocationCtrl: FormControl = new FormControl([]);
  audioFormGroup: FormGroup = new FormGroup({
    location: this.audioLocationCtrl,
  });

  baseAtkCtrl: FormControl = new FormControl(null);
  baseDefCtrl: FormControl = new FormControl(null);
  baseAbilityTextCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  baseFlavorTextCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  baseArtLocationCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  baseFormGroup: FormGroup = new FormGroup({
    baseAtk: this.baseAtkCtrl,
    baseDef: this.baseDefCtrl,
    baseAbilityText: this.baseAbilityTextCtrl,
    baseFlavorText: this.baseFlavorTextCtrl,
    baseArtLocation: this.baseArtLocationCtrl,
  });
  evolvedFormGroup: FormGroup = new FormGroup({});
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
