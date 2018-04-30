webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fcqpage_fcqpage_component__ = __webpack_require__("./src/app/fcqpage/fcqpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_display_chart_display_component__ = __webpack_require__("./src/app/chart-display/chart-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_directive__ = __webpack_require__("./src/app/chart.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__fcqpage_fcqpage_component__["a" /* FCQPageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__chart_display_chart_display_component__["a" /* ChartDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_6__chart_directive__["a" /* ChartDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__chart_display_chart_display_component__["a" /* ChartDisplayComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__fcqpage_fcqpage_component__["a" /* FCQPageComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart-display/chart-display.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chart-display/chart-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"data-chart\" id=\"{{currentResult.getLabel()}}\">\n</div>"

/***/ }),

/***/ "./src/app/chart-display/chart-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js__ = __webpack_require__("./node_modules/plotly.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plotly_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartDisplayComponent = /** @class */ (function () {
    function ChartDisplayComponent() {
        this.viewReady = false;
    }
    ChartDisplayComponent.prototype.updateFields = function (fields) {
        var _this = this;
        if (!fields.every(function (field) { return field in _this.currentResult.getFieldList(); })) {
            throw new Error("Some fields do not exist in result");
        }
        this.currentFields = fields;
    };
    ChartDisplayComponent.prototype.display = function (data) {
        this.currentResult = data;
        this.currentFields = data.getFieldList().map(function (value) { return value.getName(); });
        var traces = this.currentFields.map(function (field) { return ({
            name: field,
            mode: "markers",
            type: "scatter",
            line: { shape: "spline" },
            x: data.getFieldData(field).map(function (point) { return point.getTerm(); }),
            y: data.getFieldData(field).map(function (point) { return point.getValue(); })
        }); });
        var layout = {
            title: "FCQ results for " + data.getLabel(),
            xaxis: {
                title: "Semester (Starting Month)",
                titlefont: {
                    family: "Courier New, monospace",
                    size: 18,
                    color: "#7f7f7f"
                }
            },
            yaxis: {
                title: "FCQ Score",
                titlefont: {
                    family: "Courier New, monospace",
                    size: 18,
                    color: "#7f7f7f"
                }
            }
        };
        if (this.viewReady) {
            __WEBPACK_IMPORTED_MODULE_1_plotly_js__["react"](this.currentResult.getLabel(), traces, layout, { displayModeBar: false });
        }
    };
    ChartDisplayComponent.prototype.ngOnChanges = function (changes) {
        this.display(this.currentResult);
    };
    ChartDisplayComponent.prototype.ngAfterViewInit = function () {
        this.viewReady = true;
        this.display(this.currentResult);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ChartDisplayComponent.prototype, "currentResult", void 0);
    ChartDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-chart-display",
            template: __webpack_require__("./src/app/chart-display/chart-display.component.html"),
            styles: [__webpack_require__("./src/app/chart-display/chart-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartDisplayComponent);
    return ChartDisplayComponent;
}());



/***/ }),

/***/ "./src/app/chart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartDirective = /** @class */ (function () {
    function ChartDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ChartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: "[appChartHost]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewContainerRef */]])
    ], ChartDirective);
    return ChartDirective;
}());



/***/ }),

/***/ "./src/app/course.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
var Course = /** @class */ (function () {
    function Course(courseCode, fields) {
        if (/[A-Z]{4}\d{4}/.test(courseCode)) {
            this.courseCode = courseCode;
            this.fieldList = fields;
        }
        else {
            throw new Error("Provided course code is not valid");
        }
    }
    Course.prototype.getCourseCode = function () {
        return this.courseCode;
    };
    Course.prototype.getFieldData = function (fieldName) {
        var foundField = this.fieldList.find(function (field) { return field.getName() === fieldName; });
        if (foundField) {
            return foundField.getValues();
        }
        else {
            throw new Error("No field was found for the provided name");
        }
    };
    Course.prototype.getFieldList = function () {
        return this.fieldList;
    };
    Course.prototype.getValid = function () {
        return this.valid;
    };
    Course.prototype.getLabel = function () {
        return this.getCourseCode();
    };
    return Course;
}());



/***/ }),

/***/ "./src/app/data-point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPoint; });
var DataPoint = /** @class */ (function () {
    function DataPoint(value, term) {
        if (value > 6 || value < 1) {
            throw new Error("Provided value invalid for an FCQ DataPoint");
        }
        if (!term.match(/[0-9]{4}-[0-9]{2}/)) {
            throw new Error("Provided term is not a valid date");
        }
        this.term = term;
        this.value = value;
    }
    DataPoint.prototype.getValue = function () {
        return this.value;
    };
    DataPoint.prototype.getTerm = function () {
        return this.term;
    };
    return DataPoint;
}());



/***/ }),

/***/ "./src/app/fcqpage/fcqpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fcqpage/fcqpage.component.html":
/***/ (function(module, exports) {

module.exports = "<input #searchBox (keyup.enter)=\"search(searchBox.value)\">\n<button (click)=\"search(searchBox.value)\"> SEARCH </button>\n\n<ng-template appChartHost> </ng-template>\n"

/***/ }),

/***/ "./src/app/fcqpage/fcqpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FCQPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query__ = __webpack_require__("./src/app/query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_data_cache__ = __webpack_require__("./src/app/local-data-cache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_directive__ = __webpack_require__("./src/app/chart.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_display_chart_display_component__ = __webpack_require__("./src/app/chart-display/chart-display.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FCQPageComponent = /** @class */ (function () {
    function FCQPageComponent(http, fb, cmpFactResolve, viewContainer) {
        this.http = http;
        this.fb = fb;
        this.cmpFactResolve = cmpFactResolve;
        this.viewContainer = viewContainer;
        this.title = "fcq.fun";
        this.dataInterface = new __WEBPACK_IMPORTED_MODULE_2__local_data_cache__["a" /* LocalDataCache */](http);
        this.query = new __WEBPACK_IMPORTED_MODULE_1__query__["a" /* Query */]();
    }
    FCQPageComponent.prototype.search = function (name) {
        var _this = this;
        // TODO: Search for String
        this.query.instructor = name;
        this.dataInterface.getPlottable(this.query.instructor).subscribe(function (data) {
            // Open ChartDisplay on this data
            var viewContainerRef = _this.chartHost.viewContainerRef;
            viewContainerRef.clear();
            var factory = _this.cmpFactResolve.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__chart_display_chart_display_component__["a" /* ChartDisplayComponent */]);
            data.forEach(function (item) {
                var component = viewContainerRef.createComponent(factory);
                component.instance.display(item);
            });
        });
    };
    FCQPageComponent.prototype.ngOnInit = function () {
        this.queryForm = this.fb.group({
            inst: "" // this.query.instructor
            // 'subj': new FormControl(this.query.subject, Validators.required),
            // 'cour': new FormControl(this.query.courseCode, Validators.required)
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__chart_directive__["a" /* ChartDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_directive__["a" /* ChartDirective */])
    ], FCQPageComponent.prototype, "chartHost", void 0);
    FCQPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-fcqpage",
            template: __webpack_require__("./src/app/fcqpage/fcqpage.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]],
            styles: [__webpack_require__("./src/app/fcqpage/fcqpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewContainerRef */]])
    ], FCQPageComponent);
    return FCQPageComponent;
}());



/***/ }),

/***/ "./src/app/field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
var Field = /** @class */ (function () {
    function Field(name) {
        this.name = name;
    }
    Field.prototype.getValues = function () {
        return this.values;
    };
    Field.prototype.getName = function () {
        return this.name;
    };
    Field.prototype.setValues = function (values) {
        this.values = values; // Validation in DataPoint constructor
    };
    Field.prototype.appendValue = function (newValue) {
        this.values.push(newValue); // Validation in DataPoint constructor
    };
    Field.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Field;
}());



/***/ }),

/***/ "./src/app/httprequestor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTPRequestor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lecturer__ = __webpack_require__("./src/app/lecturer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_point__ = __webpack_require__("./src/app/data-point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__field__ = __webpack_require__("./src/app/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__course__ = __webpack_require__("./src/app/course.ts");






var HTTPRequestor = /** @class */ (function () {
    function HTTPRequestor(http) {
        this.http = http;
        this.courseSearch = false;
    }
    HTTPRequestor.prototype.getPlottable = function (name) {
        var _this = this;
        // Regex match - Is term a professor or class code?
        if (name.match(/^[a-z]{4}\d{4}$/i)) {
            this.courseSearch = true;
            console.log("Searching for course: " + name);
            return this.http.get("https://cors-anywhere.herokuapp.com/https://a2y9euj5ml.execute-api.us-east-2.amazonaws.com/prod/fcq-fetcher?courseCode=" + name.substr(4, 4) + "&courseDept=" + name.substr(0, 4)) // tslint:disable-line max-line-length
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["b" /* mergeMap */])(function (data) { return _this.getXLS(data); }));
        }
        else {
            this.courseSearch = false;
            console.log("Searching for instructor: " + name);
            return this.http.get("https://cors-anywhere.herokuapp.com/https://a2y9euj5ml.execute-api.us-east-2.amazonaws.com/prod/fcq-fetcher?instructor=" + name) // tslint:disable-line max-line-length
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["b" /* mergeMap */])(function (data) { return _this.getXLS(data); }));
        }
    };
    HTTPRequestor.prototype.getXLS = function (url) {
        var _this = this;
        return this.http.get("https://cors-anywhere.herokuapp.com/" + url, { responseType: "arraybuffer" })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* map */])(function (data) { return _this.parsePlottable(data); }));
    };
    HTTPRequestor.prototype.parsePlottable = function (raw) {
        var binary = "";
        var bytes = new Uint8Array(raw);
        var length = bytes.byteLength;
        for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        var wb = __WEBPACK_IMPORTED_MODULE_2_xlsx__["read"](binary, { type: "binary" });
        /* grab data sheet */
        var wsname = wb.SheetNames[1];
        var ws = wb.Sheets[wsname];
        // Get all the data, going backward. This is one bit where we care whether it's a course or instructor
        var raw_data = (__WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].sheet_to_json(ws, { raw: true }));
        // Make a map of professor names to plottables
        var plottables = new Map();
        var courses = new Map();
        // Interate over the entries, if field matches something we want then add it
        for (var line in raw_data) {
            var term = raw_data[line]["Yearterm"];
            term = term.substr(0, 4) + "-0" + term.substr(4, 4); // Format YYYY-MM
            // Generate data points from this result
            var instrOver = new __WEBPACK_IMPORTED_MODULE_3__data_point__["a" /* DataPoint */](raw_data[line]["InstructorOverall"], term);
            var instrResp = new __WEBPACK_IMPORTED_MODULE_3__data_point__["a" /* DataPoint */](raw_data[line]["InstrRespect"], term);
            var instrAvai = new __WEBPACK_IMPORTED_MODULE_3__data_point__["a" /* DataPoint */](raw_data[line]["Availability"], term);
            var instrEffe = new __WEBPACK_IMPORTED_MODULE_3__data_point__["a" /* DataPoint */](raw_data[line]["InstrEffective"], term);
            var crseHMLen = new __WEBPACK_IMPORTED_MODULE_3__data_point__["a" /* DataPoint */](raw_data[line]["HowMuchLearned"], term);
            var crsePriIt = new __WEBPACK_IMPORTED_MODULE_3__data_point__["a" /* DataPoint */](raw_data[line]["PriorInterest"], term);
            var crseHrWek = new __WEBPACK_IMPORTED_MODULE_3__data_point__["a" /* DataPoint */](/* map from string raw_data[line]["HoursPerWkInclClass"] */ 3, term);
            var crseOvera = new __WEBPACK_IMPORTED_MODULE_3__data_point__["a" /* DataPoint */](raw_data[line]["CourseOverall"], term);
            // Test if this lecturer already exists/if this class already exists
            var key = raw_data[line]["Instructor"];
            if (plottables.has(key)) {
                // Append
                var current = plottables.get(key);
                current[0].appendValue(instrOver);
                current[1].appendValue(instrResp);
                current[2].appendValue(instrAvai);
                current[3].appendValue(instrEffe);
                plottables.set(key, current);
            }
            else {
                // Create
                var f1 = new __WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */]("Instructor Overall");
                f1.setValues([instrOver]);
                var f2 = new __WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */]("Instructor Respect");
                f2.setValues([instrResp]);
                var f3 = new __WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */]("Availability");
                f3.setValues([instrAvai]);
                var f4 = new __WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */]("Instructor Effectiveness");
                f4.setValues([instrEffe]);
                var current = [f1, f2, f3, f4];
                plottables.set(key, current);
            }
            // Now do the same for course
            var crse = raw_data[line]["Fcqdept"] + raw_data[line]["Crse"];
            if (courses.has(crse)) {
                // Append
                var current = courses.get(crse);
                current[0].appendValue(crseHMLen);
                current[1].appendValue(crsePriIt);
                current[2].appendValue(crseHrWek);
                current[3].appendValue(crseOvera);
                courses.set(crse, current);
            }
            else {
                // Create
                var f1 = new __WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */]("How Much Learned");
                f1.setValues([crseHMLen]);
                var f2 = new __WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */]("Prior Interest");
                f2.setValues([instrResp]);
                var f3 = new __WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */]("Hours Per Week");
                f3.setValues([instrAvai]);
                var f4 = new __WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */]("Course Overall");
                f4.setValues([instrEffe]);
                var current = [f1, f2, f3, f4];
                courses.set(crse, current);
            }
        }
        var lecturers = [];
        if (this.courseSearch) {
            courses.forEach(function (fields, key) {
                try {
                    var lec = new __WEBPACK_IMPORTED_MODULE_5__course__["a" /* Course */](key, fields);
                    lecturers.push(lec);
                }
                catch (_a) {
                    console.log("Error with " + key + " and " + fields);
                }
            });
            plottables.forEach(function (fields, key) {
                try {
                    var lec = new __WEBPACK_IMPORTED_MODULE_0__lecturer__["a" /* Lecturer */](key, fields);
                    lecturers.push(lec);
                }
                catch (_a) {
                    console.log("Error with " + key + " and " + fields);
                }
            });
        }
        else {
            plottables.forEach(function (fields, key) {
                try {
                    var lec = new __WEBPACK_IMPORTED_MODULE_0__lecturer__["a" /* Lecturer */](key, fields);
                    lecturers.push(lec);
                }
                catch (_a) {
                    console.log("Error with " + key + " and " + fields);
                }
            });
            courses.forEach(function (fields, key) {
                try {
                    var lec = new __WEBPACK_IMPORTED_MODULE_5__course__["a" /* Course */](key, fields);
                    lecturers.push(lec);
                }
                catch (_a) {
                    console.log("Error with " + key + " and " + fields);
                }
            });
        }
        return lecturers;
    };
    return HTTPRequestor;
}());



/***/ }),

/***/ "./src/app/lecturer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lecturer; });
var Lecturer = /** @class */ (function () {
    function Lecturer(name, fields) {
        this.name = name;
        this.fieldList = fields;
    }
    Lecturer.prototype.getLecturerName = function () {
        return this.name;
    };
    Lecturer.prototype.getFieldData = function (fieldName) {
        var foundField = this.fieldList.find(function (field) { return field.getName() === fieldName; });
        if (foundField) {
            return foundField.getValues();
        }
        else {
            throw new Error("No field was found for the provided name");
        }
    };
    Lecturer.prototype.getFieldList = function () {
        return this.fieldList;
    };
    Lecturer.prototype.getValid = function () {
        return this.valid;
    };
    Lecturer.prototype.getLabel = function () {
        return this.getLecturerName();
    };
    return Lecturer;
}());



/***/ }),

/***/ "./src/app/local-data-cache.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__httprequestor__ = __webpack_require__("./src/app/httprequestor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var LocalDataCache = /** @class */ (function () {
    function LocalDataCache(http) {
        this.plottables = new Map();
        this.httpGetter = new __WEBPACK_IMPORTED_MODULE_0__httprequestor__["a" /* HTTPRequestor */](http);
    }
    LocalDataCache.prototype.getPlottable = function (name) {
        var _this = this;
        var result = this.plottables[name];
        if (result == null) {
            var observ = this.httpGetter.getPlottable(name);
            observ.subscribe(function (data) {
                _this.plottables[name] = data;
            });
            return observ;
        }
        if (result != null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(this.plottables[name]);
        }
    };
    return LocalDataCache;
}());



/***/ }),

/***/ "./src/app/query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Query; });
var Query = /** @class */ (function () {
    function Query() {
        this.instructor = "";
        this.subject = "";
        this.courseCode = 1;
        this.firstTerm = 20067; // 2006 Fall
        this.lastTerm = 20174; // 2017 Summer
    }
    return Query;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map