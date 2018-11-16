import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


import { RecipeListComponent } from "../app/recipe/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "../app/recipe/recipe-detail/recipe-detail.component";

//tambahan (2)
import {RecipeItemComponent} from "../app/recipe/recipe-list/recipe-item/recipe-item.component";

//tambahan (3)
import {ShoppingEditComponent} from "../app/shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeStartComponent,
    RecipeEditComponent,

    //tambahan 
    RecipeListComponent,
    RecipeDetailComponent,

    //tambahan (2)
    RecipeItemComponent,

    //tambahan (3)
    ShoppingEditComponent,
    DropdownDirective
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }