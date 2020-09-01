import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    component: BookPageComponent,
  },
];

/** Book module. */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BookPageComponent],
})
export class BookModule {}
