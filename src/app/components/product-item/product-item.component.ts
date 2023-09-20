import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Product';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../show-product-dialog/dialog-example.component';
import { ChangeProductDialogComponent } from '../change-product-dialog/change-product-dialog.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent{
  @Input() product: Product;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter();
  
  faTimes = faTimes;
  faPen = faPen;

  constructor(private _dialog: MatDialog){
  }

  openShowProductDialog(){
    const dialogRef = this._dialog.open(DialogExampleComponent, {
      data: this.product.id,
    });
  }

  openChangeProductDialog(){
    const dialogRef = this._dialog.open(ChangeProductDialogComponent, {
      data: this.product
    });
  }
  
  onDelete(product){
    this.onDeleteProduct.emit(product);
  }
  
  
}
