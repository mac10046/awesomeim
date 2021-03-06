import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AwesomeimSharedModule } from 'app/shared/shared.module';
import { ReviewsComponent } from './reviews.component';
import { ReviewsDetailComponent } from './reviews-detail.component';
import { ReviewsUpdateComponent } from './reviews-update.component';
import { ReviewsDeleteDialogComponent } from './reviews-delete-dialog.component';
import { reviewsRoute } from './reviews.route';

@NgModule({
  imports: [AwesomeimSharedModule, RouterModule.forChild(reviewsRoute)],
  declarations: [ReviewsComponent, ReviewsDetailComponent, ReviewsUpdateComponent, ReviewsDeleteDialogComponent],
  entryComponents: [ReviewsDeleteDialogComponent],
})
export class AwesomeimReviewsModule {}
