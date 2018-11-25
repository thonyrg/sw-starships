import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CalculateComponent } from './calculate.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipComponent } from './starships/starship/starship.component';
import { SwStarshipsService } from '../shared/services/sw-starships.service';
import { StarshipsFormComponent } from './starships-form/starships-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        StarshipComponent,
        CalculateComponent,
        StarshipsComponent,
        StarshipsFormComponent
    ],
    providers: [
        SwStarshipsService
    ]
})
export class CalculateModule {}
