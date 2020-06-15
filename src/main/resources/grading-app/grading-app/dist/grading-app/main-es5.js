(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main\">\n  <div class=\"nav-bar\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">analytics</mat-icon>\n    <span>GRADING APP</span>\n    <div class=\"nav-tabs\" *ngIf=\"dataService.getUserType()==='student'\">\n      <button mat-button (click)=\"routeTo('overview')\">Overview</button>\n      <button mat-button (click)=\"routeTo('student-results')\">My Results</button>\n      <!-- <button mat-button (click)=\"routeTo('account')\">My Account</button> -->\n      <div class=\"log-out\">\n          <button mat-button (click)=\"routeTo('')\">LogOut</button>\n      </div>\n    </div>\n    <div class=\"nav-tabs\" *ngIf=\"dataService.getUserType()==='teacher'\">\n      <button mat-button (click)=\"routeTo('teacher-results')\">Grade Details</button>\n      <button mat-button (click)=\"routeTo('statistics')\">Statistics</button>\n      <div class=\"log-out\">\n          <button mat-button (click)=\"routeTo('')\">LogOut</button>\n          </div>\n    </div>\n    \n  </div>\n\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/table/table.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/table/table.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-main\">\n  <table mat-table [dataSource]=\"data\">\n    <ng-container [matColumnDef]=\"column.name\" *ngFor=\"let column of displayedColumns\">\n      <th mat-header-cell *matHeaderCellDef> {{column.displayName}} </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span *ngIf=\"column.name!=='action'\">{{element[column.name]}}</span>\n        <button mat-raised-button *ngIf=\"column.name==='action'\" (click)=\"reviewRecord(element.assignment,element.id)\">REVIEW</button>\n      </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"getColumnKeys()\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: getColumnKeys();\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-main\">\n    <mat-card>\n        <div class=\"login-form\">\n            <div class=\"title\">\n                <span>Login to Account</span>\n            </div>\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>Username</mat-label>\n              <input matInput placeholder=\"Enter Username\" [(ngModel)]=\"username\">\n            </mat-form-field>\n          \n            <mat-form-field class=\"example-full-width\">\n              <mat-label>Password</mat-label>\n              <input matInput type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <mat-label>Select Role</mat-label>\n                <mat-select [(ngModel)]=\"type\">\n                    <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\" >\n                    {{role.displayValue}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\n\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/student/detail-view/detail-view.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/student/detail-view/detail-view.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-view-main\">\n  <div class=\"title-bar\">\n    <mat-card>\n      <div class=\"title\">\n        <span>My Results</span>\n      </div>\n      <mat-form-field>\n        <mat-label>Select Course</mat-label>\n        <mat-select [(ngModel)]=\"course\" (selectionChange)=\"onCourseChange()\">\n          <mat-option *ngFor=\"let course of courses\" [value]=\"course\">\n            {{course.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Select Assignment</mat-label>\n        <mat-select [(ngModel)]=\"assignment\" (selectionChange)=\"onAssignmentChange()\">\n          <mat-option *ngFor=\"let assignment of assignments\" [value]=\"assignment\">\n            {{assignment.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-card>\n  </div>\n\n  <div class=\"content\">\n    <mat-card>\n    <app-table [columns]=\"columns\" [data]=\"tableDetails\" (action)=\"actionClick($event)\"></app-table>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/student/review-view/review-view.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/student/review-view/review-view.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"review-view-main\">\n        <div class=\"title-bar\">\n          <mat-card>\n            <div class=\"title\">\n              <span>Review Attempt</span>\n            </div>\n          \n              <mat-label>Assignment :  {{assignmentName}} </mat-label>\n              \n              <mat-label>Attempt :  {{attemptId}} </mat-label>\n              \n          </mat-card>\n        </div>\n      \n        <div class=\"content\">\n          <mat-card>\n          <app-table [columns]=\"columns\" [data]=\"tableDetails\"></app-table>\n          </mat-card>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/teacher/grade-details-view/grade-details-view.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/teacher/grade-details-view/grade-details-view.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grade-detail-view-main\">\n        <div class=\"title-bar\">\n          <mat-card>\n            <div class=\"title\">\n              <span>Overall Grade Details</span>\n            </div>\n            <mat-form-field>\n              <mat-label>Select Course</mat-label>\n              <mat-select [(ngModel)]=\"course\" (selectionChange)=\"onCourseChange()\">\n                <mat-option *ngFor=\"let course of courses\" [value]=\"course\">\n                  {{course.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>      \n          </mat-card>\n        </div>\n      \n        <div class=\"content\">\n          <mat-card>\n          <app-table [columns]=\"columns\" [data]=\"tableDetails\" (action)=\"actionClick($event)\"></app-table>\n          </mat-card>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/teacher/statistics/statistics.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/teacher/statistics/statistics.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"statistics-main\">\n        <div class=\"title-bar\">\n          <mat-card>\n            <div class=\"title\">\n              <span>Statistics</span>\n            </div>                \n          </mat-card>\n        </div>\n        <div class=\"statistics\">\n            <mat-card>\n              <div class=\"stat-group\">\n                  <mat-label>{{studentCount}}</mat-label> \n                  <mat-label>Students</mat-label>                    \n              </div>\n              <div class=\"stat-group\">\n                  <mat-label>{{assignmentCount}}</mat-label> \n                  <mat-label>Assignments</mat-label>                    \n              </div>\n              <div class=\"stat-group\">\n                  <mat-label>{{averageTimeSpent}}</mat-label> \n                  <mat-label>Average Time Spent</mat-label>                    \n              </div>                                    \n            </mat-card>\n        </div>\n      \n        <div class=\"content\">\n          <mat-card>\n              <mat-form-field>\n                  <mat-label>Select Assignment</mat-label>\n                  <mat-select [(ngModel)]=\"assignment\" (selectionChange)=\"onAssignmentChange()\">\n                    <mat-option *ngFor=\"let assignment of assignments\" [value]=\"assignment\">\n                      {{assignment.name}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n          <app-table [columns]=\"columns\" [data]=\"tableDetails\" (action)=\"actionClick($event)\"></app-table>\n          </mat-card>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_student_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/student/detail-view/detail-view.component */ "./src/app/components/student/detail-view/detail-view.component.ts");
/* harmony import */ var _components_teacher_grade_details_view_grade_details_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/teacher/grade-details-view/grade-details-view.component */ "./src/app/components/teacher/grade-details-view/grade-details-view.component.ts");
/* harmony import */ var _components_teacher_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/teacher/statistics/statistics.component */ "./src/app/components/teacher/statistics/statistics.component.ts");







var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'student-details/:username',
        component: _components_student_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_4__["DetailViewComponent"]
    },
    {
        path: 'teacher-details/:username',
        component: _components_teacher_grade_details_view_grade_details_view_component__WEBPACK_IMPORTED_MODULE_5__["GradeDetailsViewComponent"]
    },
    {
        path: 'teacher-statistics/:username',
        component: _components_teacher_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__["StatisticsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.main {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\ndiv.main div.nav-bar {\n  -webkit-box-flex: 0;\n          flex: 0 0 50px;\n  background-color: #5251a7;\n  color: white;\n  padding: 0 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\ndiv.main div.nav-bar mat-icon {\n  margin-right: 5px;\n}\ndiv.main div.nav-bar div.nav-tabs {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\ndiv.main div.nav-bar div.nav-tabs button {\n  margin-left: 5px;\n}\ndiv.main div.nav-bar div.nav-tabs div.log-out {\n  margin-left: 800px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\ndiv.main div.nav-bar div.nav-tabs div.log-out button {\n  margin-left: 5px;\n}\ndiv.main div.content {\n  -webkit-box-flex: 1;\n          flex: 1;\n  background: #ececf9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbW1hbmlja2FtL1dvcmtiZW5jaC9HcmFkaW5nL2Nsb25lL2dyYWRpbmctYXBwL3NyYy9tYWluL3Jlc291cmNlcy9ncmFkaW5nLWFwcC9ncmFkaW5nLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjtBREFJO0VBQ0ksbUJBQUE7VUFBQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFUjtBRERRO0VBQ0ksaUJBQUE7QUNHWjtBRERRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDR1o7QURGWTtFQUNJLGdCQUFBO0FDSWhCO0FERlk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNJaEI7QURIZ0I7RUFDSSxnQkFBQTtBQ0twQjtBREFJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsbUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpdi5uYXYtYmFyIHtcbiAgICAgICAgZmxleDogMCAwIDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MjUxYTc7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYubmF2LXRhYnMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5sb2ctb3V0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogODAwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRpdi5jb250ZW50IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZWNmOTtcbiAgICB9XG59IiwiZGl2Lm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZGl2Lm1haW4gZGl2Lm5hdi1iYXIge1xuICBmbGV4OiAwIDAgNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTFhNztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5kaXYubWFpbiBkaXYubmF2LWJhciBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuZGl2Lm1haW4gZGl2Lm5hdi1iYXIgZGl2Lm5hdi10YWJzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5kaXYubWFpbiBkaXYubmF2LWJhciBkaXYubmF2LXRhYnMgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmRpdi5tYWluIGRpdi5uYXYtYmFyIGRpdi5uYXYtdGFicyBkaXYubG9nLW91dCB7XG4gIG1hcmdpbi1sZWZ0OiA4MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmRpdi5tYWluIGRpdi5uYXYtYmFyIGRpdi5uYXYtdGFicyBkaXYubG9nLW91dCBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuZGl2Lm1haW4gZGl2LmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZWNlY2Y5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data/data.service */ "./src/app/services/data/data.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.title = 'grading-app';
    }
    AppComponent.prototype.routeTo = function (path) {
        switch (path) {
            case '':
                this.router.navigate(['']);
                break;
            case 'student-results':
                this.router.navigate(['/student-details', this.dataService.getUsername()]);
                break;
            case 'teacher-results':
                this.router.navigate(['/teacher-details', this.dataService.getUsername()]);
                break;
            case 'statistics':
                this.router.navigate(['/teacher-statistics', this.dataService.getUsername()]);
                break;
            default:
                break;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, loadConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfig", function() { return loadConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/config/config.service */ "./src/app/services/config/config.service.ts");
/* harmony import */ var _components_student_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/student/detail-view/detail-view.component */ "./src/app/components/student/detail-view/detail-view.component.ts");
/* harmony import */ var _components_common_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/common/table/table.component */ "./src/app/components/common/table/table.component.ts");
/* harmony import */ var _components_student_review_view_review_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/student/review-view/review-view.component */ "./src/app/components/student/review-view/review-view.component.ts");
/* harmony import */ var _components_teacher_grade_details_view_grade_details_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/teacher/grade-details-view/grade-details-view.component */ "./src/app/components/teacher/grade-details-view/grade-details-view.component.ts");
/* harmony import */ var _components_teacher_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/teacher/statistics/statistics.component */ "./src/app/components/teacher/statistics/statistics.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_student_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_11__["DetailViewComponent"],
                _components_common_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"],
                _components_student_review_view_review_view_component__WEBPACK_IMPORTED_MODULE_13__["ReviewViewComponent"],
                _components_teacher_grade_details_view_grade_details_view_component__WEBPACK_IMPORTED_MODULE_14__["GradeDetailsViewComponent"],
                _components_teacher_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__["StatisticsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            ],
            entryComponents: [
                _components_student_review_view_review_view_component__WEBPACK_IMPORTED_MODULE_13__["ReviewViewComponent"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: loadConfig,
                    deps: [_services_config_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());

function loadConfig(config) {
    return function () {
        return config.loadConfig();
    };
}


/***/ }),

/***/ "./src/app/components/common/table/table.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/common/table/table.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.table-main table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbW1hbmlja2FtL1dvcmtiZW5jaC9HcmFkaW5nL2Nsb25lL2dyYWRpbmctYXBwL3NyYy9tYWluL3Jlc291cmNlcy9ncmFkaW5nLWFwcC9ncmFkaW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnRhYmxlLW1haW4ge1xuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsImRpdi50YWJsZS1tYWluIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/common/table/table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/common/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TableComponent = /** @class */ (function () {
    function TableComponent(router) {
        this.router = router;
        this.displayedColumns = [];
        this.data = [];
        this.onActionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.getColumnKeys = function () {
        var keys = [];
        this.displayedColumns.forEach(function (col) {
            keys.push(col.name);
        });
        return keys;
    };
    TableComponent.prototype.reviewRecord = function (assignmentName, attemptId) {
        this.onActionClick.emit({
            assignmentName: assignmentName,
            attemptId: attemptId
        });
    };
    TableComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('columns')
    ], TableComponent.prototype, "displayedColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TableComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('action')
    ], TableComponent.prototype, "onActionClick", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/components/common/table/table.component.scss")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.login-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\ndiv.login-main mat-card {\n  width: 300px;\n}\ndiv.login-main mat-card div.login-form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\ndiv.login-main mat-card div.login-form div.title {\n  text-align: center;\n  padding: 50px;\n}\ndiv.login-main mat-card div.login-form div.title span {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbW1hbmlja2FtL1dvcmtiZW5jaC9HcmFkaW5nL2Nsb25lL2dyYWRpbmctYXBwL3NyYy9tYWluL3Jlc291cmNlcy9ncmFkaW5nLWFwcC9ncmFkaW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FERFE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNHWjtBREZZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDSWhCO0FESGdCO0VBQ0ksZUFBQTtBQ0twQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubG9naW4tbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgZGl2LmxvZ2luLWZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBkaXYudGl0bGUge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImRpdi5sb2dpbi1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbmRpdi5sb2dpbi1tYWluIG1hdC1jYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuZGl2LmxvZ2luLW1haW4gbWF0LWNhcmQgZGl2LmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZGl2LmxvZ2luLW1haW4gbWF0LWNhcmQgZGl2LmxvZ2luLWZvcm0gZGl2LnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuZGl2LmxvZ2luLW1haW4gbWF0LWNhcmQgZGl2LmxvZ2luLWZvcm0gZGl2LnRpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rest/rest.service */ "./src/app/services/rest/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data/data.service */ "./src/app/services/data/data.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, restService, dataService) {
        this.router = router;
        this.restService = restService;
        this.dataService = dataService;
        this.roles = [
            {
                value: 'student',
                displayValue: 'I\'m a student.'
            },
            {
                value: 'teacher',
                displayValue: 'I\'m a teacher.'
            }
        ];
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.restService.login({
            username: this.username,
            password: this.password,
            type: this.type
        }).subscribe(function (response) {
            if (response.valid) {
                _this.dataService.setUser({ username: _this.username, type: _this.type });
                if (_this.type == 'student') {
                    _this.router.navigate(['/student-details', _this.username]);
                }
                else if (_this.type == 'teacher') {
                    _this.router.navigate(['/teacher-details', _this.username]);
                }
            }
            else {
                alert("Incorrect Username or Password");
            }
        }, function (error) {
            console.error(error);
            alert(error.errorMsg);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/student/detail-view/detail-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/student/detail-view/detail-view.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.detail-view-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(100% - 50px);\n  padding: 30px;\n}\ndiv.detail-view-main div.title-bar {\n  width: 100%;\n  margin-bottom: 20px;\n}\ndiv.detail-view-main div.title-bar mat-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\ndiv.detail-view-main div.title-bar mat-card div.title {\n  margin-right: 50px;\n}\ndiv.detail-view-main div.title-bar mat-card div.title span {\n  font-size: 20px;\n}\ndiv.detail-view-main div.title-bar mat-card .mat-form-field {\n  margin-left: 40px;\n  width: 200px;\n}\ndiv.detail-view-main div.content {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\ndiv.detail-view-main div.content mat-card {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\ndiv.detail-view-main div.content mat-card table {\n  width: 100%;\n}\ndiv.detail-view-main div.content mat-card .mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ndiv.detail-view-main div.content mat-card td, div.detail-view-main div.content mat-card th {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbW1hbmlja2FtL1dvcmtiZW5jaC9HcmFkaW5nL2Nsb25lL2dyYWRpbmctYXBwL3NyYy9tYWluL3Jlc291cmNlcy9ncmFkaW5nLWFwcC9ncmFkaW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50L2RldGFpbC12aWV3L2RldGFpbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNHTjtBREZNO0VBQ0Usa0JBQUE7QUNJUjtBREhRO0VBQ0UsZUFBQTtBQ0tWO0FERk07RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNJUjtBREFFO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRUo7QURESTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ0dOO0FERk07RUFDRSxXQUFBO0FDSVI7QURETTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDR1I7QURBTTtFQUNFLFVBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC9kZXRhaWwtdmlldy9kZXRhaWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5kZXRhaWwtdmlldy1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgcGFkZGluZzozMHB4O1xuICBkaXYudGl0bGUtYmFye1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIG1hdC1jYXJke1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgICAgXG4gICAgICBkaXYudGl0bGV7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgfVxuICAgICAgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRpdi5jb250ZW50eyBcbiAgICBmbGV4OjE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hdC1jYXJkeyAgICBcbiAgICAgIGZsZXg6MTtcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cbn1cblxuXG5cbiIsImRpdi5kZXRhaWwtdmlldy1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgcGFkZGluZzogMzBweDtcbn1cbmRpdi5kZXRhaWwtdmlldy1tYWluIGRpdi50aXRsZS1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmRpdi5kZXRhaWwtdmlldy1tYWluIGRpdi50aXRsZS1iYXIgbWF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuZGl2LmRldGFpbC12aWV3LW1haW4gZGl2LnRpdGxlLWJhciBtYXQtY2FyZCBkaXYudGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5kaXYuZGV0YWlsLXZpZXctbWFpbiBkaXYudGl0bGUtYmFyIG1hdC1jYXJkIGRpdi50aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuZGl2LmRldGFpbC12aWV3LW1haW4gZGl2LnRpdGxlLWJhciBtYXQtY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuZGl2LmRldGFpbC12aWV3LW1haW4gZGl2LmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZGl2LmRldGFpbC12aWV3LW1haW4gZGl2LmNvbnRlbnQgbWF0LWNhcmQge1xuICBmbGV4OiAxO1xufVxuZGl2LmRldGFpbC12aWV3LW1haW4gZGl2LmNvbnRlbnQgbWF0LWNhcmQgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5kZXRhaWwtdmlldy1tYWluIGRpdi5jb250ZW50IG1hdC1jYXJkIC5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5kaXYuZGV0YWlsLXZpZXctbWFpbiBkaXYuY29udGVudCBtYXQtY2FyZCB0ZCwgZGl2LmRldGFpbC12aWV3LW1haW4gZGl2LmNvbnRlbnQgbWF0LWNhcmQgdGgge1xuICB3aWR0aDogMjUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/student/detail-view/detail-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/student/detail-view/detail-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewComponent", function() { return DetailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/rest/rest.service */ "./src/app/services/rest/rest.service.ts");
/* harmony import */ var _review_view_review_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../review-view/review-view.component */ "./src/app/components/student/review-view/review-view.component.ts");






var DetailViewComponent = /** @class */ (function () {
    function DetailViewComponent(route, restService, dialog) {
        var _this = this;
        this.route = route;
        this.restService = restService;
        this.dialog = dialog;
        this.columns = [
            {
                name: 'course',
                displayName: 'Course Name'
            },
            {
                name: 'assignment',
                displayName: 'Assignment'
            },
            {
                name: 'attempt',
                displayName: 'Attempt'
            },
            {
                name: 'date',
                displayName: 'Attempted Date'
            },
            {
                name: 'result',
                displayName: 'Attempt Result'
            },
            {
                name: 'action',
                displayName: 'Actions'
            }
        ];
        this.tableDetails = [];
        this.routerSub = this.route.params.subscribe(function (params) {
            _this.username = params.username;
            console.log(_this.username);
        });
    }
    DetailViewComponent.prototype.ngOnInit = function () {
        this.loadCourses();
    };
    DetailViewComponent.prototype.loadCourses = function () {
        var _this = this;
        this.restService.getStudentCourses(this.username).subscribe(function (response) {
            if (response.success) {
                if (response.courses.length > 0) {
                    _this.courses = response.courses;
                }
            }
        }, function (error) {
            console.error('Error while retrieving courses', error);
            alert('Error while retrieving courses');
        });
    };
    DetailViewComponent.prototype.onCourseChange = function () {
        var _this = this;
        this.assignments = [];
        this.assignment = null;
        this.tableDetails = [];
        this.restService.getAssignments(this.course.id).subscribe(function (response) {
            if (response.success) {
                if (response.assignments.length > 0) {
                    _this.assignments = response.assignments;
                }
            }
        }, function (error) {
            console.error('Error while retrieving assignments', error);
            alert('Error while retrieving assignments');
        });
    };
    DetailViewComponent.prototype.onAssignmentChange = function () {
        var _this = this;
        this.tableDetails = [];
        this.restService.getAttemptDetails({
            username: this.username,
            assignment_id: this.assignment.id
        }).subscribe(function (response) {
            if (response.success) {
                if (response.attemptdetails.length > 0) {
                    response.attemptdetails.forEach(function (element) {
                        var tempObj = {
                            id: element.id,
                            course: _this.course.name,
                            assignment: _this.assignment.name,
                            attempt: element.value,
                            date: element.attemptedDate,
                            result: element.result,
                            action: 'Review'
                        };
                        _this.tableDetails.push(tempObj);
                    });
                    _this.tableDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.tableDetails);
                    console.log(_this.tableDetails);
                }
            }
        }, function (error) {
            console.error('Error while retrieving table data', error);
            alert('Error while retrieving table data');
        });
    };
    DetailViewComponent.prototype.actionClick = function (item) {
        this.dialog.open(_review_view_review_view_component__WEBPACK_IMPORTED_MODULE_5__["ReviewViewComponent"], {
            data: {
                assignmentName: item.assignmentName,
                attemptId: item.attemptId
            }
        });
    };
    DetailViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    DetailViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-view',
            template: __webpack_require__(/*! raw-loader!./detail-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/student/detail-view/detail-view.component.html"),
            styles: [__webpack_require__(/*! ./detail-view.component.scss */ "./src/app/components/student/detail-view/detail-view.component.scss")]
        })
    ], DetailViewComponent);
    return DetailViewComponent;
}());



/***/ }),

/***/ "./src/app/components/student/review-view/review-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/student/review-view/review-view.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.review-view-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(100% - 50px);\n  padding: 30px;\n}\ndiv.review-view-main div.title-bar {\n  width: 100%;\n  margin-bottom: 20px;\n}\ndiv.review-view-main div.title-bar mat-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\ndiv.review-view-main div.title-bar mat-card div.title {\n  margin-right: 50px;\n}\ndiv.review-view-main div.title-bar mat-card div.title span {\n  font-size: 20px;\n}\ndiv.review-view-main div.title-bar mat-card .mat-form-field {\n  margin-left: 40px;\n  width: 200px;\n}\ndiv.review-view-main div.content {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\ndiv.review-view-main div.content mat-card {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\ndiv.review-view-main div.content mat-card table {\n  width: 100%;\n}\ndiv.review-view-main div.content mat-card .mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ndiv.review-view-main div.content mat-card td, div.review-view-main div.content mat-card th {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbW1hbmlja2FtL1dvcmtiZW5jaC9HcmFkaW5nL2Nsb25lL2dyYWRpbmctYXBwL3NyYy9tYWluL3Jlc291cmNlcy9ncmFkaW5nLWFwcC9ncmFkaW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC9yZXZpZXctdmlldy9yZXZpZXctdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50L3Jldmlldy12aWV3L3Jldmlldy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0VOO0FERE07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNHUjtBREZRO0VBQ0Usa0JBQUE7QUNJVjtBREhVO0VBQ0UsZUFBQTtBQ0taO0FERlE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNJVjtBREFJO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRU47QURETTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ0dSO0FERlE7RUFDRSxXQUFBO0FDSVY7QUREUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDR1Y7QURBUTtFQUNFLFVBQUE7QUNFViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC9yZXZpZXctdmlldy9yZXZpZXctdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5yZXZpZXctdmlldy1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICBwYWRkaW5nOjMwcHg7XG4gICAgZGl2LnRpdGxlLWJhcntcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgICBtYXQtY2FyZHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgICAgICBcbiAgICAgICAgZGl2LnRpdGxle1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkaXYuY29udGVudHsgXG4gICAgICBmbGV4OjE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hdC1jYXJkeyAgICBcbiAgICAgICAgZmxleDoxO1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0ZCwgdGgge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBcbiAgXG4gICIsImRpdi5yZXZpZXctdmlldy1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgcGFkZGluZzogMzBweDtcbn1cbmRpdi5yZXZpZXctdmlldy1tYWluIGRpdi50aXRsZS1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmRpdi5yZXZpZXctdmlldy1tYWluIGRpdi50aXRsZS1iYXIgbWF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuZGl2LnJldmlldy12aWV3LW1haW4gZGl2LnRpdGxlLWJhciBtYXQtY2FyZCBkaXYudGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5kaXYucmV2aWV3LXZpZXctbWFpbiBkaXYudGl0bGUtYmFyIG1hdC1jYXJkIGRpdi50aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuZGl2LnJldmlldy12aWV3LW1haW4gZGl2LnRpdGxlLWJhciBtYXQtY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuZGl2LnJldmlldy12aWV3LW1haW4gZGl2LmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZGl2LnJldmlldy12aWV3LW1haW4gZGl2LmNvbnRlbnQgbWF0LWNhcmQge1xuICBmbGV4OiAxO1xufVxuZGl2LnJldmlldy12aWV3LW1haW4gZGl2LmNvbnRlbnQgbWF0LWNhcmQgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5yZXZpZXctdmlldy1tYWluIGRpdi5jb250ZW50IG1hdC1jYXJkIC5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5kaXYucmV2aWV3LXZpZXctbWFpbiBkaXYuY29udGVudCBtYXQtY2FyZCB0ZCwgZGl2LnJldmlldy12aWV3LW1haW4gZGl2LmNvbnRlbnQgbWF0LWNhcmQgdGgge1xuICB3aWR0aDogMjUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/student/review-view/review-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/student/review-view/review-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReviewViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewViewComponent", function() { return ReviewViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/rest/rest.service */ "./src/app/services/rest/rest.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var ReviewViewComponent = /** @class */ (function () {
    function ReviewViewComponent(restService, data) {
        this.restService = restService;
        this.data = data;
        this.columns = [
            {
                name: 'question',
                displayName: 'Question'
            },
            {
                name: 'answer',
                displayName: 'Answer'
            },
            {
                name: 'result',
                displayName: 'Result'
            }
        ];
        this.tableDetails = [];
        // this.routerSub = this.route.params.subscribe(params => {
        this.attemptId = data.attemptId;
        this.assignmentName = data.assignmentName;
        //   console.log(this.attemptId);
        // });
    }
    ReviewViewComponent.prototype.ngOnInit = function () {
        this.loadResults();
    };
    ReviewViewComponent.prototype.loadResults = function () {
        var _this = this;
        this.tableDetails = [];
        this.restService.getResults(this.attemptId).subscribe(function (response) {
            if (response.success) {
                if (response.results.length > 0) {
                    response.results.forEach(function (element) {
                        var tempObj = {
                            id: element.id,
                            question: element.question,
                            answer: element.answer,
                            result: element.result
                        };
                        _this.tableDetails.push(tempObj);
                    });
                    _this.tableDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.tableDetails);
                    console.log(_this.tableDetails);
                }
            }
        }, function (error) {
            console.error('Error while retrieving results', error);
            alert('Error while retrieving results');
        });
    };
    ReviewViewComponent.ctorParameters = function () { return [
        { type: _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ReviewViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-view',
            template: __webpack_require__(/*! raw-loader!./review-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/student/review-view/review-view.component.html"),
            styles: [__webpack_require__(/*! ./review-view.component.scss */ "./src/app/components/student/review-view/review-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], ReviewViewComponent);
    return ReviewViewComponent;
}());



/***/ }),

/***/ "./src/app/components/teacher/grade-details-view/grade-details-view.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/teacher/grade-details-view/grade-details-view.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.grade-detail-view-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(100% - 50px);\n  padding: 30px;\n}\ndiv.grade-detail-view-main div.title-bar {\n  width: 100%;\n  margin-bottom: 20px;\n}\ndiv.grade-detail-view-main div.title-bar mat-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\ndiv.grade-detail-view-main div.title-bar mat-card div.title {\n  margin-right: 50px;\n}\ndiv.grade-detail-view-main div.title-bar mat-card div.title span {\n  font-size: 20px;\n}\ndiv.grade-detail-view-main div.title-bar mat-card .mat-form-field {\n  margin-left: 40px;\n  width: 200px;\n}\ndiv.grade-detail-view-main div.content {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\ndiv.grade-detail-view-main div.content mat-card {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\ndiv.grade-detail-view-main div.content mat-card table {\n  width: 100%;\n}\ndiv.grade-detail-view-main div.content mat-card .mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\ndiv.grade-detail-view-main div.content mat-card td, div.grade-detail-view-main div.content mat-card th {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbW1hbmlja2FtL1dvcmtiZW5jaC9HcmFkaW5nL2Nsb25lL2dyYWRpbmctYXBwL3NyYy9tYWluL3Jlc291cmNlcy9ncmFkaW5nLWFwcC9ncmFkaW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci9ncmFkZS1kZXRhaWxzLXZpZXcvZ3JhZGUtZGV0YWlscy12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvZ3JhZGUtZGV0YWlscy12aWV3L2dyYWRlLWRldGFpbHMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNFTjtBRERNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDR1I7QURGUTtFQUNFLGtCQUFBO0FDSVY7QURIVTtFQUNFLGVBQUE7QUNLWjtBREZRO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDSVY7QURBSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0VOO0FERE07RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNHUjtBREZRO0VBQ0UsV0FBQTtBQ0lWO0FERFE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0dWO0FEQVE7RUFDRSxVQUFBO0FDRVYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvZ3JhZGUtZGV0YWlscy12aWV3L2dyYWRlLWRldGFpbHMtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5ncmFkZS1kZXRhaWwtdmlldy1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICBwYWRkaW5nOjMwcHg7XG4gICAgZGl2LnRpdGxlLWJhcntcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgICBtYXQtY2FyZHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgICAgICBcbiAgICAgICAgZGl2LnRpdGxle1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkaXYuY29udGVudHsgXG4gICAgICBmbGV4OjE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hdC1jYXJkeyAgICBcbiAgICAgICAgZmxleDoxO1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0ZCwgdGgge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBcbiAgXG4gICAiLCJkaXYuZ3JhZGUtZGV0YWlsLXZpZXctbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5kaXYuZ3JhZGUtZGV0YWlsLXZpZXctbWFpbiBkaXYudGl0bGUtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5kaXYuZ3JhZGUtZGV0YWlsLXZpZXctbWFpbiBkaXYudGl0bGUtYmFyIG1hdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmRpdi5ncmFkZS1kZXRhaWwtdmlldy1tYWluIGRpdi50aXRsZS1iYXIgbWF0LWNhcmQgZGl2LnRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuZGl2LmdyYWRlLWRldGFpbC12aWV3LW1haW4gZGl2LnRpdGxlLWJhciBtYXQtY2FyZCBkaXYudGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmRpdi5ncmFkZS1kZXRhaWwtdmlldy1tYWluIGRpdi50aXRsZS1iYXIgbWF0LWNhcmQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cbmRpdi5ncmFkZS1kZXRhaWwtdmlldy1tYWluIGRpdi5jb250ZW50IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmRpdi5ncmFkZS1kZXRhaWwtdmlldy1tYWluIGRpdi5jb250ZW50IG1hdC1jYXJkIHtcbiAgZmxleDogMTtcbn1cbmRpdi5ncmFkZS1kZXRhaWwtdmlldy1tYWluIGRpdi5jb250ZW50IG1hdC1jYXJkIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5kaXYuZ3JhZGUtZGV0YWlsLXZpZXctbWFpbiBkaXYuY29udGVudCBtYXQtY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuZGl2LmdyYWRlLWRldGFpbC12aWV3LW1haW4gZGl2LmNvbnRlbnQgbWF0LWNhcmQgdGQsIGRpdi5ncmFkZS1kZXRhaWwtdmlldy1tYWluIGRpdi5jb250ZW50IG1hdC1jYXJkIHRoIHtcbiAgd2lkdGg6IDI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/teacher/grade-details-view/grade-details-view.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/teacher/grade-details-view/grade-details-view.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GradeDetailsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeDetailsViewComponent", function() { return GradeDetailsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/rest/rest.service */ "./src/app/services/rest/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GradeDetailsViewComponent = /** @class */ (function () {
    function GradeDetailsViewComponent(restService, route) {
        var _this = this;
        this.restService = restService;
        this.route = route;
        this.columns = [
            {
                name: 'student',
                displayName: 'Student'
            },
            {
                name: 'assignment',
                displayName: 'Assignment'
            },
            {
                name: 'date',
                displayName: 'Last Attempted Date'
            },
            {
                name: 'result',
                displayName: 'Last Attempt Result'
            }
        ];
        this.tableDetails = [];
        this.routerSub = this.route.params.subscribe(function (params) {
            _this.username = params.username;
            console.log(_this.username);
        });
    }
    GradeDetailsViewComponent.prototype.ngOnInit = function () {
        this.loadCourses();
    };
    GradeDetailsViewComponent.prototype.loadCourses = function () {
        var _this = this;
        this.restService.getTeacherCourses(this.username).subscribe(function (response) {
            if (response.success) {
                if (response.courses.length > 0) {
                    _this.courses = response.courses;
                }
            }
        }, function (error) {
            console.error('Error while retrieving courses', error);
            alert('Error while retrieving courses');
        });
    };
    GradeDetailsViewComponent.prototype.onCourseChange = function () {
        var _this = this;
        this.tableDetails = [];
        this.restService.getGrades(this.course.id).subscribe(function (response) {
            if (response.success) {
                if (response.grades.length > 0) {
                    response.grades.forEach(function (element) {
                        var tempObj = {
                            id: element.id,
                            student: element.studentName,
                            assignment: element.assignmentName,
                            date: element.lastAttemptedDate,
                            result: element.lastAttemptedResult
                        };
                        _this.tableDetails.push(tempObj);
                    });
                    _this.tableDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.tableDetails);
                    console.log(_this.tableDetails);
                }
            }
        }, function (error) {
            console.error('Error while retrieving assignments', error);
            alert('Error while retrieving assignments');
        });
    };
    GradeDetailsViewComponent.ctorParameters = function () { return [
        { type: _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    GradeDetailsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grade-details-view',
            template: __webpack_require__(/*! raw-loader!./grade-details-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/teacher/grade-details-view/grade-details-view.component.html"),
            styles: [__webpack_require__(/*! ./grade-details-view.component.scss */ "./src/app/components/teacher/grade-details-view/grade-details-view.component.scss")]
        })
    ], GradeDetailsViewComponent);
    return GradeDetailsViewComponent;
}());



/***/ }),

/***/ "./src/app/components/teacher/statistics/statistics.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/teacher/statistics/statistics.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.statistics-main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(100% - 50px);\n  padding: 30px;\n}\ndiv.statistics-main div.title-bar {\n  width: 100%;\n  margin-bottom: 20px;\n}\ndiv.statistics-main div.title-bar mat-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\ndiv.statistics-main div.title-bar mat-card div.title {\n  margin-right: 50px;\n}\ndiv.statistics-main div.title-bar mat-card div.title span {\n  font-size: 20px;\n}\ndiv.statistics-main div.statistics {\n  width: 100%;\n  margin-bottom: 20px;\n}\ndiv.statistics-main div.statistics mat-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\ndiv.statistics-main div.statistics div.stat-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-right: 250px;\n}\ndiv.statistics-main div.statistics div.stat-group mat-label {\n  margin-bottom: 5px;\n}\ndiv.content {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\ndiv.content mat-card {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\ndiv.content mat-card table {\n  width: 100%;\n}\ndiv.content mat-card .mat-form-field {\n  font-size: 14px;\n  width: 20%;\n  align-content: flex-end;\n}\ndiv.content mat-card td, div.content mat-card th {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbW1hbmlja2FtL1dvcmtiZW5jaC9HcmFkaW5nL2Nsb25lL2dyYWRpbmctYXBwL3NyYy9tYWluL3Jlc291cmNlcy9ncmFkaW5nLWFwcC9ncmFkaW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDRU47QURETTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0dSO0FERlE7RUFDRSxrQkFBQTtBQ0lWO0FESFU7RUFDRSxlQUFBO0FDS1o7QURBSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNHVjtBRERVO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7QUNHWjtBREZZO0VBQ0ksa0JBQUE7QUNJaEI7QURDSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0VOO0FERE07RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNHUjtBREZRO0VBQ0UsV0FBQTtBQ0lWO0FERFE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDR1Y7QURBUTtFQUNFLFVBQUE7QUNFViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuc3RhdGlzdGljcy1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICBwYWRkaW5nOjMwcHg7XG4gICAgZGl2LnRpdGxlLWJhcntcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgICBtYXQtY2FyZHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgICAgICBcbiAgICAgICAgZGl2LnRpdGxle1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRpdi5zdGF0aXN0aWNze1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgICAgIG1hdC1jYXJke1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2LnN0YXQtZ3JvdXB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUwcHg7IFxuICAgICAgICAgICAgbWF0LWxhYmVse1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBkaXYuY29udGVudHsgXG4gICAgICBmbGV4OjE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hdC1jYXJkeyAgICBcbiAgICAgICAgZmxleDoxO1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGQsIHRoIHtcbiAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgXG4gIFxuICBcbiAgXG4gICAiLCJkaXYuc3RhdGlzdGljcy1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgcGFkZGluZzogMzBweDtcbn1cbmRpdi5zdGF0aXN0aWNzLW1haW4gZGl2LnRpdGxlLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuZGl2LnN0YXRpc3RpY3MtbWFpbiBkaXYudGl0bGUtYmFyIG1hdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmRpdi5zdGF0aXN0aWNzLW1haW4gZGl2LnRpdGxlLWJhciBtYXQtY2FyZCBkaXYudGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5kaXYuc3RhdGlzdGljcy1tYWluIGRpdi50aXRsZS1iYXIgbWF0LWNhcmQgZGl2LnRpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5kaXYuc3RhdGlzdGljcy1tYWluIGRpdi5zdGF0aXN0aWNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5kaXYuc3RhdGlzdGljcy1tYWluIGRpdi5zdGF0aXN0aWNzIG1hdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmRpdi5zdGF0aXN0aWNzLW1haW4gZGl2LnN0YXRpc3RpY3MgZGl2LnN0YXQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDI1MHB4O1xufVxuZGl2LnN0YXRpc3RpY3MtbWFpbiBkaXYuc3RhdGlzdGljcyBkaXYuc3RhdC1ncm91cCBtYXQtbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmRpdi5jb250ZW50IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmRpdi5jb250ZW50IG1hdC1jYXJkIHtcbiAgZmxleDogMTtcbn1cbmRpdi5jb250ZW50IG1hdC1jYXJkIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5kaXYuY29udGVudCBtYXQtY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuZGl2LmNvbnRlbnQgbWF0LWNhcmQgdGQsIGRpdi5jb250ZW50IG1hdC1jYXJkIHRoIHtcbiAgd2lkdGg6IDI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/teacher/statistics/statistics.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/teacher/statistics/statistics.component.ts ***!
  \***********************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/rest/rest.service */ "./src/app/services/rest/rest.service.ts");



var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(restService) {
        this.restService = restService;
        this.columns = [
            {
                name: 'question',
                displayName: 'Question'
            },
            {
                name: 'averageTime',
                displayName: 'Average Time'
            },
            {
                name: 'correct',
                displayName: 'Correct Answers'
            },
            {
                name: 'incorrect',
                displayName: 'Incorrect Answers'
            }
        ];
        this.tableDetails = [];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.loadStatistics();
        this.loadAssignments();
    };
    StatisticsComponent.prototype.loadStatistics = function () {
        var _this = this;
        this.restService.getStatistics().subscribe(function (response) {
            if (response.success) {
                _this.studentCount = response.data.studentCount;
                _this.assignmentCount = response.data.assignmentCount;
                _this.averageTimeSpent = '2.3';
            }
        }, function (error) {
            console.error('Error while loading statistics', error);
            alert('Error while loading statistics');
        });
    };
    StatisticsComponent.prototype.loadAssignments = function () {
        var _this = this;
        this.restService.getAllAssignments().subscribe(function (response) {
            if (response.success) {
                if (response.assignments.length > 0) {
                    _this.assignments = response.assignments;
                }
            }
        }, function (error) {
            console.error('Error while retrieving assignments', error);
            alert('Error while retrieving assignments');
        });
    };
    StatisticsComponent.prototype.onAssignmentChange = function () {
        var _this = this;
        this.tableDetails = [];
        this.restService.getQuestionAnswerResults(this.assignment.id).subscribe(function (response) {
            if (response.success) {
                if (response.results.length > 0) {
                    response.results.forEach(function (element) {
                        var tempObj = {
                            id: element.id,
                            question: element.question,
                            averageTime: element.averageTime,
                            correct: element.correctAnwsers,
                            incorrect: element.incorrectAnswers
                        };
                        _this.tableDetails.push(tempObj);
                    });
                    _this.tableDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.tableDetails);
                    console.log(_this.tableDetails);
                }
            }
        }, function (error) {
            console.error('Error while retrieving data', error);
            alert('Error while retrieving data');
        });
    };
    StatisticsComponent.ctorParameters = function () { return [
        { type: _services_rest_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
    ]; };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/teacher/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/components/teacher/statistics/statistics.component.scss")]
        })
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/services/config/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/config/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.loadConfig = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('config.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                console.error('Error while loading configuration', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }))
                .subscribe(function (data) {
                _this.config = data;
                if (_this.config.production) {
                    _this.http.get('/config')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                        console.error('Error while loading configuration from server', error);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                    }))
                        .subscribe(function (serverData) {
                        _this.config = serverData;
                        resolve(true);
                    });
                }
                resolve(true);
            });
        });
    };
    ConfigService.prototype.get = function (key) {
        return this.config[key] ? this.config[key] : undefined;
    };
    ConfigService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
    ]; };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/data/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
        this.user = {
            username: null,
            type: null
        };
    }
    DataService.prototype.getUser = function () {
        return this.user;
    };
    DataService.prototype.setUser = function (user) {
        this.user = user;
    };
    DataService.prototype.getUsername = function () {
        return this.user.username;
    };
    DataService.prototype.getUserType = function () {
        return this.user.type;
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/rest/rest.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/rest/rest.service.ts ***!
  \***********************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config.service */ "./src/app/services/config/config.service.ts");






var RestService = /** @class */ (function () {
    function RestService(http, config) {
        this.http = http;
        this.config = config;
        this.COLON = ':';
        this.SLASH = '/';
        this.baseUrl = this.getHTTPProtocol()
            + (this.config.get('host') ? this.config.get('host') : window.location.hostname)
            + (this.config.get('port') ? (this.COLON + this.config.get('port')) :
                ((window.location.port !== '') ? (this.COLON + window.location.port) : ''))
            + this.SLASH
            + this.config.get('context')
            + this.SLASH;
    }
    RestService.prototype.getHTTPProtocol = function () {
        if (this.config.get('ssl')) {
            return 'https://';
        }
        else {
            return 'http://';
        }
    };
    RestService.prototype.get = function (url) {
        return this.http.get(this.baseUrl + url, this.getOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json() || {};
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error('Error while calling the Rest Service', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    RestService.prototype.post = function (url, body) {
        return this.http.post(this.baseUrl + url, body, this.getOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json() || {};
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error('Error while calling the Rest Service', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    RestService.prototype.getOptions = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: this.getAuthHeaders()
        });
        return options;
    };
    RestService.prototype.getAuthHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', localStorage.getItem('token'));
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return headers;
    };
    RestService.prototype.login = function (data) {
        return this.post('user/login', data);
    };
    RestService.prototype.getStudentCourses = function (data) {
        console.log(data);
        return this.get('studentcourse/getcourses/' + data);
    };
    RestService.prototype.getAssignments = function (data) {
        console.log(data);
        return this.get('assignment/getassignments/' + data);
    };
    RestService.prototype.getAllAssignments = function () {
        return this.get('assignment/getassignments');
    };
    RestService.prototype.getAttemptDetails = function (data) {
        console.log(data);
        return this.get('assignment/getAssignmentAttempts/' + data.username + '/' + data.assignment_id);
    };
    RestService.prototype.getResults = function (data) {
        console.log(data);
        return this.get('result/getresults/' + data);
    };
    RestService.prototype.getTeacherCourses = function (data) {
        console.log(data);
        return this.get('teacher/getcourses/' + data);
    };
    RestService.prototype.getGrades = function (data) {
        console.log(data);
        return this.get('teacher/getgrades/' + data);
    };
    RestService.prototype.getStatistics = function () {
        return this.get('statistics/getstatistics');
    };
    RestService.prototype.getQuestionAnswerResults = function (data) {
        console.log(data);
        return this.get('question/getQuestionAnswerResults/' + data);
    };
    RestService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
    ]; };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dmmanickam/Workbench/Grading/clone/grading-app/src/main/resources/grading-app/grading-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map