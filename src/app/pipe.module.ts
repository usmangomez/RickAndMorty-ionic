import { NgModule } from '@angular/core';
import { SearchBarPipe } from './pipes/search-bar.pipe';
@NgModule({
    declarations: [
        SearchBarPipe
    ],
    imports: [],
    exports: [
        SearchBarPipe
    ]
})
export class PipesModule {}