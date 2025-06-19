import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AidPageRoutingModule } from './aid-routing.module';
import { AidPage } from './aid.page';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AidPageRoutingModule
  ],
  declarations: [AidPage, TruncatePipe]
})
export class AidPageModule {}