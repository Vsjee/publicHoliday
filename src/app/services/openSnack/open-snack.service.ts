import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class OpenSnackService {
  horizontalPositon: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}

  openSnack(msg: string): void {
    this._snackBar.open(msg, 'X', {
      horizontalPosition: this.horizontalPositon,
      verticalPosition: this.verticalPosition,
      duration: 2500,
    });
  }
}
