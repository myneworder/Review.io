"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
require("hammerjs");
var material_1 = require("@angular/material");
var cdk_1 = require("@angular/cdk");
var app_material_1 = require("./app.material");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                cdk_1.CdkTableModule,
                material_1.MaterialModule,
                material_1.MdAutocompleteModule,
                material_1.MdButtonModule,
                material_1.MdButtonToggleModule,
                material_1.MdCardModule,
                material_1.MdCheckboxModule,
                material_1.MdChipsModule,
                material_1.MdCoreModule,
                material_1.MdDatepickerModule,
                material_1.MdDialogModule,
                material_1.MdExpansionModule,
                material_1.MdGridListModule,
                material_1.MdIconModule,
                material_1.MdInputModule,
                material_1.MdListModule,
                material_1.MdMenuModule,
                material_1.MdNativeDateModule,
                material_1.MdPaginatorModule,
                material_1.MdProgressBarModule,
                material_1.MdProgressSpinnerModule,
                material_1.MdRadioModule,
                material_1.MdRippleModule,
                material_1.MdSelectModule,
                material_1.MdSidenavModule,
                material_1.MdSliderModule,
                material_1.MdSlideToggleModule,
                material_1.MdSnackBarModule,
                material_1.MdSortModule,
                material_1.MdTableModule,
                material_1.MdTabsModule,
                material_1.MdToolbarModule,
                material_1.MdTooltipModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                app_material_1.AutocompleteOverviewExample
            ],
            bootstrap: [
                app_component_1.AppComponent,
                app_material_1.AutocompleteOverviewExample
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map