import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatMenuModule } from "@angular/material/menu";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { CdkTableModule } from "@angular/cdk/table";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";

import { TruncatePipe } from "./pipes/truncate.pipe";
import { SplitPipe } from "./pipes/splitString.pipe";
import { KeysPipe } from "./pipes/keys.pipe";

import { DialogComponent } from "./components/dialogs/dialog.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { AlertComponent } from "./components/alert/alert.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { SearchFieldComponent } from "./components/search-field/search-field.component";

import { ReactiveFormsModule } from "@angular/forms";
// translator component
import { TranslateModule } from "@ngx-translate/core";
import {
  MenuService,
  LoadingService,
  LocalStorageService,
  MessageService,
  ApiService
} from "../shared//services/index.service";
import { Settings } from "./settings";
import {
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSnackBarModule
} from "@angular/material";
import { BannerComponent } from "./components/banner/banner.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    CdkTableModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    DragDropModule,
    MatProgressBarModule,
    FlexLayoutModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogComponent],
  declarations: [
    LoaderComponent,
    DialogComponent,
    SpinnerComponent,
    SearchFieldComponent,
    AlertComponent,
    TruncatePipe,
    SplitPipe,
    KeysPipe,    
    BannerComponent,
    MultiSelectComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSnackBarModule,
    LoaderComponent,
    SearchFieldComponent,
    MultiSelectComponent,
    AlertComponent,
    SpinnerComponent,
    BannerComponent,
    TruncatePipe,
    SplitPipe,
    KeysPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        Settings,
        MenuService,
        LoadingService,
        LocalStorageService,
        MessageService,
        ApiService
      ]
    };
  }
}
