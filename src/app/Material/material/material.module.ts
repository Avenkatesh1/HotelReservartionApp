import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'
import { MatInputModule} from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material/autocomplete'

const MaterialImports: any[] | Type<any> | ModuleWithProviders<{}>=[
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  NgFor,
  FormsModule,
  ReactiveFormsModule,
  MatAutocompleteModule

]

@NgModule({
  imports: [MaterialImports],
  exports: [MaterialImports]
})
export class MaterialModule { }
