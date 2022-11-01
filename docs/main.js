(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!choosen\">\r\n  <header>\r\n    <ngx-logo *ngIf=\"mode === 'simple'\"></ngx-logo>\r\n    <ngx-logo *ngIf=\"mode === 'customSrc'\" [src]=\"'assets/twitter.png'\"></ngx-logo>\r\n    <ngx-logo *ngIf=\"mode === 'customTime'\" [time]=\"2000\"></ngx-logo>\r\n    <ngx-logo *ngIf=\"mode === 'draggable'\" [draggable]=\"true\"></ngx-logo>\r\n    <ngx-logo *ngIf=\"mode === 'customCss'\" class=\"custom-css\"></ngx-logo>\r\n    <div class=\"text\">\r\n      <ng-container *ngIf=\"mode === 'simple'\">Third Rome</ng-container>\r\n      <ng-container *ngIf=\"mode === 'customSrc'\"><span [style.color]=\"'#179cf0'\">Elon Musk's twitter</span></ng-container>\r\n      <ng-container *ngIf=\"mode === 'customTime'\">Third Rome</ng-container>\r\n      <ng-container *ngIf=\"mode === 'draggable'\">Third Rome</ng-container>\r\n      <ng-container *ngIf=\"mode === 'customCss'\">Third Rome</ng-container>\r\n    </div>\r\n\r\n    <div class=\"text-example\">change:</div>\r\n    <mat-select class=\"select\" [(value)]=\"mode\" (selectionChange)=\"changeMode($event)\">\r\n      <mat-option value=\"simple\">simple</mat-option>\r\n      <mat-option value=\"customSrc\">custom image</mat-option>\r\n      <mat-option value=\"customTime\">custom time</mat-option>\r\n      <mat-option value=\"draggable\">draggable</mat-option>\r\n      <mat-option value=\"customCss\">custom css</mat-option>\r\n    </mat-select>\r\n  </header>\r\n  <div class=\"content\">\r\n\r\n    <div class=\"screen\">\r\n      <div class=\"description\">The usual preloading of the site page in the form of a logo that smoothly transitions to the place that you set.</div>\r\n      <div class=\"example\">\r\n        <div class=\"example__code\">\r\n          <div class=\"example__code-inside\">\r\n            &lt;<span style=\"color:#f06292\">ngx-logo</span><br/>\r\n            &nbsp;&nbsp;<span style=\"color:#ffc107\"> [alt]</span>=<span style=\"color:#8bc34a\">&Prime;&prime;logotype of my company&prime;&Prime;</span><br/>\r\n            &gt;&lt;/<span style=\"color:#f06292\">ngx-logo</span>&gt;\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"example__view example__view_1\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"screen\">\r\n      <div class=\"description\">Preloading with your own logo</div>\r\n      <div class=\"example\">\r\n        <div class=\"example__code\">\r\n          <div class=\"example__code-inside\">\r\n            &lt;<span style=\"color:#f06292\">ngx-logo</span><br/>\r\n            &nbsp;&nbsp;<span style=\"color:#ffc107\"> [alt]</span>=<span style=\"color:#8bc34a\">&Prime;&prime;logotype of my company&prime;&Prime;</span><br/>\r\n            &nbsp;&nbsp;<span style=\"color:#ffc107\"> [src]</span>=<span style=\"color:#8bc34a\">&Prime;&prime;assets/twitter.png&prime;&Prime;</span><br/>\r\n            &gt;&lt;/<span style=\"color:#f06292\">ngx-logo</span>&gt;\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"example__view example__view_2\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"screen\">\r\n      <div class=\"description\">Setting the logo animation time (in milliseconds)</div>\r\n      <div class=\"example\">\r\n        <div class=\"example__code\">\r\n          <div class=\"example__code-inside\">\r\n            &lt;<span style=\"color:#f06292\">ngx-logo</span><br/>\r\n            &nbsp;&nbsp;<span style=\"color:#ffc107\"> [alt]</span>=<span style=\"color:#8bc34a\">&Prime;&prime;logotype of my company&prime;&Prime;</span><br/>\r\n            &nbsp;&nbsp;<span style=\"color:#ffc107\"> [time]</span>=<span style=\"color:#8bc34a\">&Prime;2000&Prime;</span><br/>\r\n            &gt;&lt;/<span style=\"color:#f06292\">ngx-logo</span>&gt;\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"example__view example__view_3\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"screen\">\r\n      <div class=\"description\">Preloading with the ability to drag the logo with the mouse cursor or finger on the screen (just for fun to kill time)</div>\r\n      <div class=\"example\">\r\n        <div class=\"example__code\">\r\n          <div class=\"example__code-inside\">\r\n            &lt;<span style=\"color:#f06292\">ngx-logo</span><br/>\r\n            &nbsp;&nbsp;<span style=\"color:#ffc107\"> [alt]</span>=<span style=\"color:#8bc34a\">&Prime;&prime;logotype of my company&prime;&Prime;</span><br/>\r\n            &nbsp;&nbsp;<span style=\"color:#ffc107\"> [draggable]</span>=<span style=\"color:#8bc34a\">&Prime;true&Prime;</span><br/>\r\n            &gt;&lt;/<span style=\"color:#f06292\">ngx-logo</span>&gt;\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"example__view example__view_4\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"screen\">\r\n      <div class=\"description\">Preloading with custom css styles</div>\r\n      <div class=\"example\">\r\n        <div class=\"example__wrap-code\">\r\n          <div class=\"example__code\">\r\n            <div class=\"example__code-inside\">\r\n              &lt;<span style=\"color:#f06292\">ngx-logo</span><br/>\r\n              &nbsp;&nbsp;<span style=\"color:#ffc107\"> [alt]</span>=<span style=\"color:#8bc34a\">&Prime;&prime;logotype of my company&prime;&Prime;</span><br/>\r\n              &nbsp;&nbsp;<span style=\"color:#ffc107\"> class</span>=<span style=\"color:#8bc34a\">&Prime;custom&Prime;</span><br/>\r\n              &gt;&lt;/<span style=\"color:#f06292\">ngx-logo</span>&gt;\r\n            </div>\r\n          </div>\r\n          <div class=\"example__code\">\r\n            <div class=\"example__code-inside\">\r\n              :<span style=\"color:#ffc107\">host</span> &#123;<br/>\r\n              &nbsp;&nbsp;&gt; .<span style=\"color:#ffc107\">custom</span>::ng-deep &#123;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&gt; .<span style=\"color:#ffc107\">back</span> &#123;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: #<span style=\"color:#ffc107\">ce93d8</span>;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&gt; .<span style=\"color:#ffc107\">preload</span> &#123;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max-width: <span style=\"color:#ffc107\">300px</span>;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max-height: <span style=\"color:#ffc107\">300px</span>;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&gt; .<span style=\"color:#ffc107\">logo</span> &#123;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: <span style=\"color:#ffc107\">40px</span>;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: #<span style=\"color:#ffc107\">ce93d822</span>;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius: <span style=\"color:#ffc107\">100px</span>;<br/>\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>\r\n              &nbsp;&nbsp;&#125;<br/>\r\n              &#125;\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"example__view example__view_5\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"block\">\r\n      <img width=\"80%\" src=\"assets/1.jpg\" alt=\"\">\r\n      <div class=\"text\">any content</div>\r\n    </div>\r\n    <div class=\"block\">\r\n      <img width=\"80%\" src=\"assets/2.jpg\" alt=\"\">\r\n      <div class=\"text\">any content</div>\r\n    </div>\r\n    <div class=\"block\">\r\n      <img width=\"80%\" src=\"assets/3.jpg\" alt=\"\">\r\n      <div class=\"text\">any content</div>\r\n    </div>\r\n    <div class=\"block\">\r\n      <img width=\"80%\" src=\"assets/4.jpg\" alt=\"\">\r\n      <div class=\"text\">any content</div>\r\n    </div>\r\n    <div class=\"block\">\r\n      <img width=\"80%\" src=\"assets/5.jpg\" alt=\"\">\r\n      <div class=\"text\">any content</div>\r\n    </div>\r\n    <div class=\"block\">\r\n      <img width=\"80%\" src=\"assets/6.jpg\" alt=\"\">\r\n      <div class=\"text\">any content</div>\r\n    </div>\r\n  </div>\r\n  <footer>\r\n    <a href=\"https://twitter.com/vgaidadei\" target=\"_blank\">Gaius da deus</a>\r\n  </footer>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 50px auto;\n  max-width: 1000px;\n  width: 90%;\n}\n:host header > .custom-css::ng-deep > .back {\n  background-color: #ce93d8;\n}\n:host header > .custom-css::ng-deep > .preload {\n  max-width: 300px;\n  max-height: 300px;\n}\n:host header > .custom-css::ng-deep > .logo {\n  width: 40px;\n  background-color: rgba(206, 147, 216, 0.1333333333);\n  border-radius: 100px;\n}\n:host header > .text {\n  margin: 10px 20px;\n  color: #7b1fa2;\n  font-size: 30px;\n  font-weight: bold;\n}\n:host header > .text-example {\n  margin: 20px;\n  margin-left: auto;\n  color: #f44336;\n  font-style: 14px;\n}\n:host header > .select {\n  padding: 10px;\n  max-width: 150px;\n  box-shadow: 0px 0px 5px #dddddd;\n}\n:host > .content {\n  margin: 50px auto;\n  max-width: 1000px;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n:host > .content > .block {\n  width: max(300px, 30%);\n  height: 400px;\n  margin: 50px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fafafa;\n  border-radius: 10px;\n}\n:host > .content > .block > img {\n  margin: 10px;\n  border-radius: 10px;\n}\n:host > .content > .block > .text {\n  font-size: 16px;\n  color: #999999;\n}\n:host > .content > .screen {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n:host > .content > .screen > .description {\n  margin: 50px 10px;\n  color: #999999;\n  font-size: 14px;\n  text-align: center;\n}\n:host > .content > .screen > .example {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n:host > .content > .screen > .example > .example__wrap-code {\n  margin: 0px 20px;\n  width: 100%;\n  max-width: 400px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n}\n:host > .content > .screen > .example > .example__wrap-code > .example__code {\n  margin: 20px 0px;\n  width: 100%;\n  max-width: 400px;\n  flex-shrink: 0;\n  background-color: #474c4e;\n  border-radius: 10px;\n  color: #e7e7e7;\n  font-size: 14px;\n  font-family: monospace;\n}\n:host > .content > .screen > .example > .example__wrap-code > .example__code > .example__code-inside {\n  margin: 20px;\n}\n:host > .content > .screen > .example > .example__code {\n  margin: 20px;\n  width: 100%;\n  max-width: 400px;\n  flex-shrink: 0;\n  background-color: #474c4e;\n  border-radius: 10px;\n  color: #e7e7e7;\n  font-size: 14px;\n  font-family: monospace;\n}\n:host > .content > .screen > .example > .example__code > .example__code-inside {\n  margin: 20px;\n}\n:host > .content > .screen > .example > .example__view {\n  width: 100%;\n  max-width: 400px;\n  height: 400px;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px #dddddd;\n  flex-shrink: 0;\n}\n:host > .content > .screen > .example > .example__view_1 {\n  background-image: url('1.gif');\n}\n:host > .content > .screen > .example > .example__view_2 {\n  background-image: url('2.gif');\n}\n:host > .content > .screen > .example > .example__view_3 {\n  background-image: url('3.gif');\n}\n:host > .content > .screen > .example > .example__view_4 {\n  background-image: url('4.gif');\n}\n:host > .content > .screen > .example > .example__view_5 {\n  background-image: url('5.gif');\n}\n:host footer {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n:host footer > a {\n  font-size: 14px;\n  color: #e91e63;\n  font-size: italic;\n  text-decoration: none;\n  opacity: 0.7;\n  transition: all ease 0.2s;\n}\n:host footer > a:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxWbGFkaW1pclxccmVwb1xcbG9nby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNBSjtBREVNO0VBQ0UseUJBQUE7QUNBUjtBREVNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERU07RUFDRSxXQUFBO0VBQ0EsbURBQUE7RUFDQSxvQkFBQTtBQ0FSO0FER0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNETjtBREdJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRE47QURHSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDRE47QURJRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNGSjtBREdJO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0ROO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNBUjtBREdJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ROO0FERU07RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQVI7QURDUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNDVjtBREFVO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNFWjtBRERZO0VBQ0UsWUFBQTtBQ0dkO0FEQ1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ1Y7QURBVTtFQUNFLFlBQUE7QUNFWjtBRENRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDQ1Y7QURDUTtFQUNFLDhCQUFBO0FDQ1Y7QURDUTtFQUNFLDhCQUFBO0FDQ1Y7QURDUTtFQUNFLDhCQUFBO0FDQ1Y7QURDUTtFQUNFLDhCQUFBO0FDQ1Y7QURDUTtFQUNFLDhCQUFBO0FDQ1Y7QURJRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FER0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNETjtBREdJO0VBQ0UsVUFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgID4gLmN1c3RvbS1jc3M6Om5nLWRlZXAge1xyXG4gICAgICA+IC5iYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U5M2Q4O1xyXG4gICAgICB9XHJcbiAgICAgID4gLnByZWxvYWQge1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgPiAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlOTNkODIyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICA+IC50ZXh0IHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjN2IxZmEyO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgPiAudGV4dC1leGFtcGxlIHtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICA+IC5zZWxlY3Qge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjZGRkZGRkO1xyXG4gICAgfVxyXG4gIH1cclxuICA+IC5jb250ZW50IHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICA+IC5ibG9jayB7XHJcbiAgICAgIHdpZHRoOiBtYXgoMzAwcHgsIDMwJSk7XHJcbiAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIG1hcmdpbjogNTBweCAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgPiBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgID4gLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgPiAuc2NyZWVuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgPiAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogNTBweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgPiAuZXhhbXBsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgID4gLmV4YW1wbGVfX3dyYXAtY29kZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgPiAuZXhhbXBsZV9fY29kZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGM0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNlN2U3ZTc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgPiAuZXhhbXBsZV9fY29kZS1pbnNpZGUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICA+IC5leGFtcGxlX19jb2RlIHtcclxuICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGM0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2U3ZTdlNztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgICA+IC5leGFtcGxlX19jb2RlLWluc2lkZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgPiAuZXhhbXBsZV9fdmlldyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjZGRkZGRkO1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gLmV4YW1wbGVfX3ZpZXdfMSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzLzEuZ2lmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiAuZXhhbXBsZV9fdmlld18yIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvMi5naWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IC5leGFtcGxlX192aWV3XzMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy8zLmdpZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gLmV4YW1wbGVfX3ZpZXdfNCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzLzQuZ2lmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiAuZXhhbXBsZV9fdmlld181IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvNS5naWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICA+IGEge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjZTkxZTYzO1xyXG4gICAgICBmb250LXNpemU6IGl0YWxpYztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XHJcbiAgICB9XHJcbiAgICA+IGE6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cbjpob3N0IGhlYWRlciA+IC5jdXN0b20tY3NzOjpuZy1kZWVwID4gLmJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U5M2Q4O1xufVxuOmhvc3QgaGVhZGVyID4gLmN1c3RvbS1jc3M6Om5nLWRlZXAgPiAucHJlbG9hZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuOmhvc3QgaGVhZGVyID4gLmN1c3RvbS1jc3M6Om5nLWRlZXAgPiAubG9nbyB7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMTQ3LCAyMTYsIDAuMTMzMzMzMzMzMyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuOmhvc3QgaGVhZGVyID4gLnRleHQge1xuICBtYXJnaW46IDEwcHggMjBweDtcbiAgY29sb3I6ICM3YjFmYTI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCBoZWFkZXIgPiAudGV4dC1leGFtcGxlIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGZvbnQtc3R5bGU6IDE0cHg7XG59XG46aG9zdCBoZWFkZXIgPiAuc2VsZWN0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2RkZGRkZDtcbn1cbjpob3N0ID4gLmNvbnRlbnQge1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLmJsb2NrIHtcbiAgd2lkdGg6IG1heCgzMDBweCwgMzAlKTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiA1MHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOmhvc3QgPiAuY29udGVudCA+IC5ibG9jayA+IGltZyB7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbjpob3N0ID4gLmNvbnRlbnQgPiAuYmxvY2sgPiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLnNjcmVlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLnNjcmVlbiA+IC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogNTBweCAxMHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLnNjcmVlbiA+IC5leGFtcGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLnNjcmVlbiA+IC5leGFtcGxlID4gLmV4YW1wbGVfX3dyYXAtY29kZSB7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbjpob3N0ID4gLmNvbnRlbnQgPiAuc2NyZWVuID4gLmV4YW1wbGUgPiAuZXhhbXBsZV9fd3JhcC1jb2RlID4gLmV4YW1wbGVfX2NvZGUge1xuICBtYXJnaW46IDIwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRjNGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZTdlN2U3O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLnNjcmVlbiA+IC5leGFtcGxlID4gLmV4YW1wbGVfX3dyYXAtY29kZSA+IC5leGFtcGxlX19jb2RlID4gLmV4YW1wbGVfX2NvZGUtaW5zaWRlIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuOmhvc3QgPiAuY29udGVudCA+IC5zY3JlZW4gPiAuZXhhbXBsZSA+IC5leGFtcGxlX19jb2RlIHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRjNGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZTdlN2U3O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLnNjcmVlbiA+IC5leGFtcGxlID4gLmV4YW1wbGVfX2NvZGUgPiAuZXhhbXBsZV9fY29kZS1pbnNpZGUge1xuICBtYXJnaW46IDIwcHg7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLnNjcmVlbiA+IC5leGFtcGxlID4gLmV4YW1wbGVfX3ZpZXcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICNkZGRkZGQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuOmhvc3QgPiAuY29udGVudCA+IC5zY3JlZW4gPiAuZXhhbXBsZSA+IC5leGFtcGxlX192aWV3XzEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzLzEuZ2lmKTtcbn1cbjpob3N0ID4gLmNvbnRlbnQgPiAuc2NyZWVuID4gLmV4YW1wbGUgPiAuZXhhbXBsZV9fdmlld18yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy8yLmdpZik7XG59XG46aG9zdCA+IC5jb250ZW50ID4gLnNjcmVlbiA+IC5leGFtcGxlID4gLmV4YW1wbGVfX3ZpZXdfMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvMy5naWYpO1xufVxuOmhvc3QgPiAuY29udGVudCA+IC5zY3JlZW4gPiAuZXhhbXBsZSA+IC5leGFtcGxlX192aWV3XzQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzLzQuZ2lmKTtcbn1cbjpob3N0ID4gLmNvbnRlbnQgPiAuc2NyZWVuID4gLmV4YW1wbGUgPiAuZXhhbXBsZV9fdmlld181IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy81LmdpZik7XG59XG46aG9zdCBmb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCBmb290ZXIgPiBhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2U5MWU2MztcbiAgZm9udC1zaXplOiBpdGFsaWM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xufVxuOmhvc3QgZm9vdGVyID4gYTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.mode = 'simple';
        this.choosen = false;
    }
    // mode = new FormControl('simple')
    AppComponent.prototype.contructor = function () { };
    AppComponent.prototype.changeMode = function (e) {
        this.choosen = true;
        this.setCookie('mode', e.value, 30);
        window.location.reload();
    };
    AppComponent.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    AppComponent.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    AppComponent.prototype.ngOnInit = function () {
        var m = this.getCookie('mode') || null;
        if (m && m !== '') {
            this.mode = m;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vgaidadei_ngx_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vgaidadei/ngx-logo */ "./node_modules/@vgaidadei/ngx-logo/fesm5/vgaidadei-ngx-logo.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");




// import { LogoComponent } from './logo/logo.component';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _vgaidadei_ngx_logo__WEBPACK_IMPORTED_MODULE_4__["NgxLogoModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\Users\Vladimir\repo\logo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map