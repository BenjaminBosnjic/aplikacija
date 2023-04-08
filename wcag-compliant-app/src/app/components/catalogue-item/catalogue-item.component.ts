import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.scss']
})
export class CatalogueItemComponent implements OnInit {

  item:any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<CatalogueItemComponent>
  ) { }

  ngOnInit(): void {
    this.item = this.data.item;
  }

  close() {
    this.dialogRef.close();
  }

}
