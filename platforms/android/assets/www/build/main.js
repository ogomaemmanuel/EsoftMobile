webpackJsonp([9],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancesDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BalancesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BalancesDetailsPage = (function () {
    function BalancesDetailsPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountDetails = [];
        this.title = "";
    }
    BalancesDetailsPage.prototype.ngOnInit = function () {
        this.accountDetails = this.navParams.get('accountDetails');
        this.title = this.navParams.get('modalTitle');
        console.log("Modal Title", this.navParams.get('modalTitle'));
    };
    BalancesDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalancesDetailsPage');
    };
    BalancesDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return BalancesDetailsPage;
}());
BalancesDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-balances-details',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\balances-details\balances-details.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">close</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item *ngFor="let accountDetail of accountDetails">\n        {{accountDetail.accountName|trim|titlecase}}\n        <ion-note item-end>\n          {{accountDetail.accountBalance|currency:\'ksh\':true}}\n        </ion-note>\n      </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\EsoftMobile\src\pages\balances-details\balances-details.html"*/,
        providers: []
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], BalancesDetailsPage);

//# sourceMappingURL=balances-details.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_acconts_details_service_acconts_details_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balances_details_balances_details__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_customer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_customer_customer__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BalacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BalacesPage = (function () {
    function BalacesPage(events, http, modalCtrl, accountdetailProv, navCtrl, navParams, customerProvider, loadingCtrl) {
        this.events = events;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.accountdetailProv = accountdetailProv;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerProvider = customerProvider;
        this.loadingCtrl = loadingCtrl;
        this.customer = new __WEBPACK_IMPORTED_MODULE_5__models_customer__["a" /* Customer */]();
        this.loaderMessage = "loading";
    }
    BalacesPage.prototype.ngOnInit = function () {
    };
    BalacesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalacesPage');
    };
    BalacesPage.prototype.getSavingsBalances = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: this.loaderMessage,
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (customerId) {
            _this.accountdetailProv.getSavingsAccountDetails(customerId).subscribe(function (accounBalances) {
                _this.accountDetails = accounBalances;
                loader.dismiss();
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__balances_details_balances_details__["a" /* BalancesDetailsPage */], { accountDetails: _this.accountDetails, modalTitle: "Saving Balances" });
                modal.present();
            });
        });
    };
    BalacesPage.prototype.getShareBalances = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: this.loaderMessage,
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (customerId) {
            _this.accountdetailProv.getSharesAccountDetails(customerId)
                .subscribe(function (accounBalances) {
                _this.accountDetails = accounBalances;
                loader.dismiss();
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__balances_details_balances_details__["a" /* BalancesDetailsPage */], { accountDetails: _this.accountDetails, modalTitle: "Share Balances" });
                modal.present();
            });
        });
    };
    BalacesPage.prototype.getLoanBalances = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: this.loaderMessage,
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (customerId) {
            _this.accountdetailProv.getLoansAccountDetails(customerId).subscribe(function (accounBalances) {
                _this.accountDetails = accounBalances;
                loader.dismiss();
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__balances_details_balances_details__["a" /* BalancesDetailsPage */], { accountDetails: _this.accountDetails, modalTitle: "Loan Balaces" });
                modal.present();
            });
        });
    };
    return BalacesPage;
}());
BalacesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-balaces',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\balaces\balaces.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      Account Balances\n    </ion-title>\n  </ion-navbar>\n  <!-- <ion-searchbar\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar> -->\n</ion-header>\n\n\n<ion-content>\n  <ion-list list-ios>\n    <button ion-item (click)="getSavingsBalances()">\n      Savings\n    </button>\n    <button ion-item (click)="getLoanBalances()">\n      Loans\n    </button>\n    <button ion-item (click)="getShareBalances()">\n      Shares\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\EsoftMobile\src\pages\balaces\balaces.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_acconts_details_service_acconts_details_service__["a" /* AccountsDetailsServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_customer_customer__["a" /* CustomerProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_acconts_details_service_acconts_details_service__["a" /* AccountsDetailsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], BalacesPage);

//# sourceMappingURL=balaces.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistatementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MinistatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinistatementPage = (function () {
    function MinistatementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ministatements = [];
    }
    MinistatementPage.prototype.ngOnInit = function () {
        this.ministatements = this.navParams.get("ministatements");
        console.log("these are the statements", this.ministatements);
    };
    MinistatementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinistatementPage');
    };
    return MinistatementPage;
}());
MinistatementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ministatement',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\ministatement\ministatement.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ministatement</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of ministatements">\n      <small>{{ item.referenceNo }}</small>\n      <p>{{ item.amount|currency:\'ksh\':true }} &nbsp;&nbsp; {{ item.transactionDate|date:\'medium\' }}</p>\n    </button>  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\EsoftMobile\src\pages\ministatement\ministatement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], MinistatementPage);

//# sourceMappingURL=ministatement.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistatementAccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ministatement_ministatement__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ministatement_ministatement__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MinistatementAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinistatementAccountsPage = (function () {
    function MinistatementAccountsPage(customerProvider, ministatementProvider, loadingCtrl, navCtrl, navParams) {
        this.customerProvider = customerProvider;
        this.ministatementProvider = ministatementProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerAccounts = [];
        this.miniStatements = [];
    }
    MinistatementAccountsPage.prototype.ngOnInit = function () {
        console.log("Nav Parameres", this.navParams.get("accounts"));
        this.customerAccounts = this.navParams.get("accounts");
        this.accountType = this.navParams.get("accountType");
    };
    MinistatementAccountsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinistatementAccountsPage');
    };
    MinistatementAccountsPage.prototype.getMiniStatement = function (accountNo) {
        console.log("the account", accountNo);
        if (this.accountType === "Loans Accounts") {
            this.getLoansMiniStatement(accountNo);
        }
        if (this.accountType === "Savings Accounts") {
            this.getSavingMinistatentAccounts(accountNo);
        }
        if (this.accountType === "Shares Accounts") {
            this.getSharesMiniStatement(accountNo);
        }
    };
    MinistatementAccountsPage.prototype.getSavingMinistatentAccounts = function (account) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "loading...",
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (userId) {
            _this.ministatementProvider.getSavingsMiniStatement(userId, account).subscribe(function (ministatementsObject) {
                _this.miniStatements = ministatementsObject;
                loader.dismiss();
                console.log("Ministatemens from api", _this.miniStatements, "Accpunts");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ministatement_ministatement__["a" /* MinistatementPage */], { ministatements: _this.miniStatements });
            });
        });
    };
    MinistatementAccountsPage.prototype.getSharesMiniStatement = function (account) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "loading...",
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (userId) {
            _this.ministatementProvider.getSharesMiniStatement(userId, account).subscribe(function (ministatementsObject) {
                _this.miniStatements = ministatementsObject;
                loader.dismiss();
                console.log("Ministatemens from api", _this.miniStatements, "Accpunts");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ministatement_ministatement__["a" /* MinistatementPage */], { ministatements: _this.miniStatements });
            });
        });
    };
    MinistatementAccountsPage.prototype.getLoansMiniStatement = function (account) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "loading...",
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (userId) {
            _this.ministatementProvider.getLoansMiniStatement(userId, account).subscribe(function (ministatementsObject) {
                _this.miniStatements = ministatementsObject;
                loader.dismiss();
                console.log("Ministatemens from api", _this.miniStatements, "Accpunts");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ministatement_ministatement__["a" /* MinistatementPage */], { ministatements: _this.miniStatements });
            });
        });
    };
    return MinistatementAccountsPage;
}());
MinistatementAccountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ministatement-accounts',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\ministatement-accounts\ministatement-accounts.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> {{accountType}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <button ion-item *ngFor="let accountDetail of customerAccounts" (click)="getMiniStatement(accountDetail.accountNo)">\n        {{accountDetail.productName|trim|titlecase}}\n        <ion-note item-end>\n          {{accountDetail.accountNo|trim}}\n        </ion-note>\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\EsoftMobile\src\pages\ministatement-accounts\ministatement-accounts.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_ministatement_ministatement__["a" /* MinistatementProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ministatement_ministatement__["a" /* MinistatementProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], MinistatementAccountsPage);

//# sourceMappingURL=ministatement-accounts.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistatementMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ministatement_ministatement__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ministatement_accounts_ministatement_accounts__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MinistatementMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinistatementMenuPage = (function () {
    function MinistatementMenuPage(navCtrl, customerProvider, ministatementProvider, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.customerProvider = customerProvider;
        this.ministatementProvider = ministatementProvider;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.accounts = [];
    }
    MinistatementMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinistatementMenuPage');
    };
    MinistatementMenuPage.prototype.getLoanAccounts = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "loading...",
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (userId) {
            _this.ministatementProvider.getLoansAccounts(userId).subscribe(function (userLoanAccounts) {
                loader.dismiss();
                _this.accounts = userLoanAccounts;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ministatement_accounts_ministatement_accounts__["a" /* MinistatementAccountsPage */], { accounts: _this.accounts, accountType: "Loans Accounts" });
            });
        });
    };
    MinistatementMenuPage.prototype.getSavingAccounts = function () {
        var _this = this;
        console.log("Savings Account");
        var loader = this.loadingCtrl.create({
            content: "loading...",
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (userId) {
            _this.ministatementProvider.getSavingsAccounts(userId).subscribe(function (userLoanAccounts) {
                _this.accounts = userLoanAccounts;
                loader.dismiss();
                console.log("accounts from api", userLoanAccounts, "Accpunts", _this.accounts);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ministatement_accounts_ministatement_accounts__["a" /* MinistatementAccountsPage */], { accounts: _this.accounts, accountType: "Savings Accounts" });
            });
        });
    };
    MinistatementMenuPage.prototype.getSharesAccounts = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "lodaing...",
        });
        loader.present();
        this.customerProvider.getLocallyStoredUserId().then(function (userId) {
            _this.ministatementProvider.getSharesAccounts(userId).subscribe(function (userLoanAccounts) {
                _this.accounts = userLoanAccounts;
                loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ministatement_accounts_ministatement_accounts__["a" /* MinistatementAccountsPage */], { accounts: _this.accounts, accountType: "Shares Accounts" });
            });
        });
    };
    return MinistatementMenuPage;
}());
MinistatementMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ministatement-menu',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\ministatement-menu\ministatement-menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Account Statements</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list list-ios>\n    <button ion-item (click)="getSavingAccounts()">\n      Savings Accounts\n    </button>\n    <button ion-item (click)="getLoanAccounts()">\n      Loans Accounts\n    </button>\n    <button ion-item (click)="getSharesAccounts()">\n      Shares Accounts\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\EsoftMobile\src\pages\ministatement-menu\ministatement-menu.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_ministatement_ministatement__["a" /* MinistatementProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__["a" /* CustomerProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_ministatement_ministatement__["a" /* MinistatementProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], MinistatementMenuPage);

//# sourceMappingURL=ministatement-menu.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtmCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_atm_cards_atm_cards__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AtmCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AtmCardsPage = (function () {
    function AtmCardsPage(customerProvider, atmCardsProvider, navCtrl, navParams) {
        this.customerProvider = customerProvider;
        this.atmCardsProvider = atmCardsProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.atmCardImagePath = "assets/images/credit-card.png";
        this.atmCards = [];
    }
    AtmCardsPage.prototype.ngOnInit = function () {
        this.getAtmCards();
    };
    AtmCardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AtmCardsPage');
    };
    AtmCardsPage.prototype.getAtmCards = function () {
        var _this = this;
        this.customerProvider.getLocallyStoredUserId().then(function (userId) {
            _this.atmCardsProvider.getAtMCards(userId).subscribe(function (atmCards) {
                _this.atmCards = atmCards;
            });
        });
    };
    AtmCardsPage.prototype.blockAtmCard = function (atmCardId, cardIndex) {
        var _this = this;
        console.log("cardIndex is", cardIndex);
        this.customerProvider.getLocallyStoredUserId().then(function (userId) {
            _this.atmCardsProvider.blockAtmCard(atmCardId, userId).subscribe(function (result) {
                if (result) {
                    _this.atmCards[cardIndex].enabled = 0;
                }
            });
        });
    };
    return AtmCardsPage;
}());
AtmCardsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-atm-cards',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\atm-cards\atm-cards.html"*/'<!--\n\n  Generated template for the AtmCardsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Atm Cards</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-card *ngFor="let atmCard of atmCards;let idx = index">\n\n      <img src="assets/images/credit-card.png" />\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          <p style="font-size: 16px; text-align: center;">Account: {{ atmCard.accountNo|trim}}</p>\n\n        <hr/>\n\n        </ion-card-title>\n\n        <ion-item>\n\n            <ion-label style="font-size: 15px; text-align:left;">{{atmCard.enabled===1?"Block Card:":"Atm Card Blocked"}}</ion-label>\n\n            <ion-toggle toggle-ios-background-color-on disabled="{{atmCard.enabled!==1}}" checked="{{atmCard.enabled===1}}" (ionChange)="blockAtmCard(atmCard.tbl_LinkedAtmCardsID,idx)"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label style="font-size: 15px; text-align:left;">Card Number</ion-label>\n\n            <ion-label style="font-size: 12px; text-align:left;" item-end>{{ atmCard.cardNumber|trim}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label style="font-size: 15px; text-align:left;">Branch</ion-label>\n\n            <ion-label style="font-size: 12px; text-align:right;" item-end>{{ atmCard.branchName|trim|titlecase}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label style="font-size: 15px; text-align:left;">Date Linked</ion-label>\n\n            <ion-label style="font-size: 12px; text-align:left;" item-end>{{ atmCard.dateLinked|trim|date:\'medium\'}}</ion-label>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\EsoftMobile\src\pages\atm-cards\atm-cards.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_atm_cards_atm_cards__["a" /* AtmCardsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_atm_cards_atm_cards__["a" /* AtmCardsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AtmCardsPage);

//# sourceMappingURL=atm-cards.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_registrationModel__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_acconts_details_service_acconts_details_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = (function () {
    function RegistrationPage(accountsDetailsServiceProvider, menuCtrl, navCtrl, navParams, formBuilder, toastCtrl) {
        this.accountsDetailsServiceProvider = accountsDetailsServiceProvider;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.submitAttempt = false;
    }
    RegistrationPage.prototype.ngOnInit = function () {
        this.registrationModel = new __WEBPACK_IMPORTED_MODULE_2__models_registrationModel__["a" /* RegistrationModel */]();
        this.registrationModelFormGroup = this.formBuilder.group({
            MobileNo: [''],
            CustomerName: [''],
            CustomerNo: [''],
            Email: [''],
            IdNo: [''],
        });
    };
    RegistrationPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.swipeEnable(false);
    };
    RegistrationPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.swipeEnable(false);
    };
    RegistrationPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.swipeEnable(false);
    };
    RegistrationPage.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registrationModelFormGroup.value);
        this.accountsDetailsServiceProvider.registerNewUser(this.registrationModelFormGroup.value).subscribe(function (resp) {
            console.log(resp);
            if (resp === true) {
                var toast = _this.toastCtrl.create({
                    message: "Registration successful",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
        //this.submitAttempt = true;
    };
    return RegistrationPage;
}());
RegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registration',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\registration\registration.html"*/'<!--\n  Generated template for the RegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Registration Page</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n    <form class="list" [formGroup]="registrationModelFormGroup" (ngSubmit)="submit()">\n\n    <ion-item>\n      <ion-label floating>Phone No</ion-label>\n      <ion-input type="text" formControlName="MobileNo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Full Name</ion-label>\n      <ion-input type="text" formControlName="CustomerName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Id No</ion-label>\n        <ion-input type="text" formControlName="IdNo"></ion-input>\n      </ion-item>\n          <!-- <span padding style="text-align: center" ion-text color="danger" *ngIf="!registrationModelFormGroup.controls.idNo.valid  && (registrationModelFormGroup.controls.idNo.dirty && submitAttempt)">Please enter a valid id No.</span> -->\n      <ion-item>\n          <ion-label floating>Member No</ion-label>\n          <ion-input type="text" formControlName="CustomerNo"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" formControlName="Email"></ion-input>\n          </ion-item>\n\n        </form>\n\n  <div padding>\n      <button ion-button block (click)="registerUser()">Register</button>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\EsoftMobile\src\pages\registration\registration.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_acconts_details_service_acconts_details_service__["a" /* AccountsDetailsServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_acconts_details_service_acconts_details_service__["a" /* AccountsDetailsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/atm-cards/atm-cards.module": [
		295,
		8
	],
	"../pages/balaces/balaces.module": [
		291,
		7
	],
	"../pages/balances-details/balances-details.module": [
		290,
		6
	],
	"../pages/contact-us/contact-us.module": [
		297,
		5
	],
	"../pages/login/login.module": [
		298,
		4
	],
	"../pages/ministatement-accounts/ministatement-accounts.module": [
		293,
		3
	],
	"../pages/ministatement-menu/ministatement-menu.module": [
		294,
		2
	],
	"../pages/ministatement/ministatement.module": [
		292,
		1
	],
	"../pages/registration/registration.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtmCardsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AtmCardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AtmCardsProvider = (function () {
    function AtmCardsProvider(http) {
        this.http = http;
        this.endPoint = "http://localhost:53725/customers/";
        this.atmCardEndPoint = "http://localhost:53725/";
        console.log('Hello AtmCardsProvider Provider');
    }
    AtmCardsProvider.prototype.getAtMCards = function (id) {
        return this.http.get(this.endPoint + id + "/atm-cards").map(function (resp) { return resp.json(); });
    };
    AtmCardsProvider.prototype.blockAtmCard = function (cardId, customerId) {
        return this.http.put(this.atmCardEndPoint + "AtmCards/block?id=" + cardId + "&customerId=" + customerId, {})
            .map(function (resp) { return resp.json(); });
    };
    return AtmCardsProvider;
}());
AtmCardsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AtmCardsProvider);

//# sourceMappingURL=atm-cards.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CustomerDetailsserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CustomerDetailsserviceProvider = (function () {
    function CustomerDetailsserviceProvider(http) {
        this.http = http;
        console.log('Hello CustomerDetailsserviceProvider Provider');
    }
    CustomerDetailsserviceProvider.prototype.getCustumerDetails = function (id) {
        return this.http.get("http://localhost:53725/customers/" + id).do(function (res) {
            console.log(res);
        })
            .map(function (resp) { return resp.json(); });
    };
    return CustomerDetailsserviceProvider;
}());
CustomerDetailsserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CustomerDetailsserviceProvider);

//# sourceMappingURL=customer-detailsservice.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_customer_customer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_balaces_balaces__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_customer_detailsservice_customer_detailsservice__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__commonFunctions_TrimPipe__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_acconts_details_service_acconts_details_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_balances_details_balances_details__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_ministatement_ministatement__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ministatement_menu_ministatement_menu__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ministatement_accounts_ministatement_accounts__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_ministatement_ministatement__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_atm_cards_atm_cards__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_atm_cards_atm_cards__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_contact_us_contact_us__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_registration_registration__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_balaces_balaces__["a" /* BalacesPage */],
            __WEBPACK_IMPORTED_MODULE_12__commonFunctions_TrimPipe__["a" /* TrimPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pages_balances_details_balances_details__["a" /* BalancesDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_ministatement_menu_ministatement_menu__["a" /* MinistatementMenuPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_ministatement_accounts_ministatement_accounts__["a" /* MinistatementAccountsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_ministatement_ministatement__["a" /* MinistatementPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_atm_cards_atm_cards__["a" /* AtmCardsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_contact_us_contact_us__["a" /* ContactUsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_registration_registration__["a" /* RegistrationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/balances-details/balances-details.module#BalancesDetailsPageModule', name: 'BalancesDetailsPage', segment: 'balances-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/balaces/balaces.module#BalacesPageModule', name: 'BalacesPage', segment: 'balaces', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ministatement/ministatement.module#MinistatementPageModule', name: 'MinistatementPage', segment: 'ministatement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ministatement-accounts/ministatement-accounts.module#MinistatementAccountsPageModule', name: 'MinistatementAccountsPage', segment: 'ministatement-accounts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ministatement-menu/ministatement-menu.module#MinistatementMenuPageModule', name: 'MinistatementMenuPage', segment: 'ministatement-menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/atm-cards/atm-cards.module#AtmCardsPageModule', name: 'AtmCardsPage', segment: 'atm-cards', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_balaces_balaces__["a" /* BalacesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_balances_details_balances_details__["a" /* BalancesDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_ministatement_menu_ministatement_menu__["a" /* MinistatementMenuPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_ministatement_accounts_ministatement_accounts__["a" /* MinistatementAccountsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_ministatement_ministatement__["a" /* MinistatementPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_atm_cards_atm_cards__["a" /* AtmCardsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_contact_us_contact_us__["a" /* ContactUsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_registration_registration__["a" /* RegistrationPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_customer_customer__["a" /* CustomerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_customer_detailsservice_customer_detailsservice__["a" /* CustomerDetailsserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_acconts_details_service_acconts_details_service__["a" /* AccountsDetailsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_ministatement_ministatement__["a" /* MinistatementProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_atm_cards_atm_cards__["a" /* AtmCardsProvider */],
            __WEBPACK_IMPORTED_MODULE_22__pages_contact_us_contact_us__["a" /* ContactUsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_registration_registration__["a" /* RegistrationPage */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationModel; });
var RegistrationModel = (function () {
    function RegistrationModel() {
    }
    return RegistrationModel;
}());

//# sourceMappingURL=registrationModel.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the UserAuthProvider provider.
import { UserAuthProvider } from '../providers/user-auth/user-auth';
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserAuthProvider = (function () {
    function UserAuthProvider(events, http, navController, alertCtrl) {
        this.events = events;
        this.http = http;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.userId = "7e8a41b8-cd73-4cee-956a-4ae693b8cf06";
        console.log('Hello UserAuthProvider Provider');
    }
    UserAuthProvider.prototype.ngOnInit = function () {
    };
    UserAuthProvider.prototype.authenticateUser = function (pin, telephone) {
        return this.http.get("http://localhost:53725/customers/login?MobileNo=" +
            telephone + "&Pin=" + pin).map(function (res) { return res.json(); });
    };
    return UserAuthProvider;
}());
UserAuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], UserAuthProvider);

//# sourceMappingURL=user-auth.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_customer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_us_contact_us__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(menuCtrl, events, platform, statusBar, splashScreen) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.customer = new __WEBPACK_IMPORTED_MODULE_6__models_customer__["a" /* Customer */]();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.menuCtrl.swipeEnable(false);
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
        ];
        this.events.subscribe("userLogedIn", function (data) {
            _this.customer = data;
        });
    }
    MyApp.prototype.openPageHomePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openContactUsPage = function () {
        this.menuCtrl.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    MyApp.prototype.logout = function () {
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\EsoftMobile\src\app\app.html"*/'<ion-menu id="app-menu" [content]="content" class="app-menu">\n\n  <ion-header style="background-color:#0400FF;color:white">\n\n    <ion-list style="background-color:#0400FF;color:white">\n\n      <ion-item style="background-color:#0400FF;color:white">\n\n        <ion-avatar item-left>\n\n          <img src="https://www.joshmorony.com/wp-content/uploads/2016/07/cloudo-screenshots.png">\n\n        </ion-avatar>\n\n        <h2>{{customer.customerName|trim|titlecase}}</h2>\n\n        <h3>{{customer.mobileNo}}</h3>\n\n      </ion-item>\n\n    </ion-list>\n\n    <!-- <ion-toolbar red>\n\n      <ion-title right>Menu</ion-title>\n\n    </ion-toolbar> -->\n\n  </ion-header>\n\n  <ion-content class="app-menu">\n\n    <ion-list>\n\n      <button ion-item (click)="openPageHomePage()">\n\n        <ion-icon name="ios-home-outline"></ion-icon>&nbsp; &nbsp;Home\n\n      </button>\n\n      <button ion-item (click)="openPageHomePage()">\n\n      <ion-icon name="ios-settings-outline"></ion-icon>&nbsp; &nbsp;Settings\n\n      </button>\n\n      <button ion-item (click)="openContactUsPage()">\n\n       <ion-icon name="ios-call-outline"></ion-icon>&nbsp; &nbsp;Contact Us\n\n      </button>\n\n      <button ion-item (click)="logout()">\n\n    \n\n      <ion-icon name="ios-log-out"></ion-icon>&nbsp; &nbsp;Logout\n\n\n\n      </button>\n\n    </ion-list>\n\n    \n\n  </ion-content>\n\n<ion-footer>\n\n  <!-- <ion-segment [(ngModel)]="icons" color="secondary">\n\n    <ion-segment-button value="camera">\n\n      <ion-icon name="camera"></ion-icon>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="bookmark">\n\n      <ion-icon name="bookmark"></ion-icon>\n\n    </ion-segment-button>\n\n  </ion-segment> -->\n\n  \n\n</ion-footer>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\EsoftMobile\src\app\app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimPipe = (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return value.trim();
    };
    return TrimPipe;
}());
TrimPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'trim' })
], TrimPipe);

//# sourceMappingURL=TrimPipe.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerProvider = (function () {
    function CustomerProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        console.log('Hello CustomerProvider Provider');
    }
    CustomerProvider.prototype.getCustomerDetails = function (id) {
        var response = this.http.get("");
        response.map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("customer data " + data);
        });
    };
    CustomerProvider.prototype.getLocallyStoredUserId = function () {
        return this.storage.get("customerDetails").then(function (data) {
            return JSON.parse(data).tbl_CustomerID;
        });
    };
    return CustomerProvider;
}());
CustomerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CustomerProvider);

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_auth_user_auth__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(menuCtrl, userAuthProvider, navCtrl, toastCtrl, navParams, alertCtrl) {
        this.menuCtrl = menuCtrl;
        this.userAuthProvider = userAuthProvider;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // this.menuCtrl.enabled=false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.menuCtrl.swipeEnable(false);
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.swipeEnable(false);
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.swipeEnable(false);
    };
    LoginPage.prototype.authenticate = function () {
        var _this = this;
        //1) Validate the user
        //2) If valid redirect to home.
        //var loginStatus=false;
        this.userAuthProvider.authenticateUser(this.pin, this.telephone).subscribe(function (loginStatus) {
            if (loginStatus.status === "Success") {
                console.log("Successful login", loginStatus);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { userId: loginStatus.user.tbl_CustomerId });
            }
            else {
                console.log("Login error object", loginStatus);
                _this.presentToast(loginStatus.message);
            }
        });
    };
    LoginPage.prototype.goToRegistrationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registration_registration__["a" /* RegistrationPage */]);
    };
    LoginPage.prototype.goToContactUsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    LoginPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Esoft Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n\n  <ion-item>\n    <ion-label floating>Your Phone No</ion-label>\n    <ion-input type="text" [(ngModel)]="telephone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating >Pin</ion-label>\n    <ion-input type="password" [(ngModel)]="pin"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n<div>\n  <button ion-button block (click)="authenticate()">Sign In</button>\n  \n</div>\n\n<div padding>\n    <!-- <button ion-button block >Sign Up</button> -->\n    <button ion-button clear small style="float: left" (click)="goToRegistrationPage()">Sign Up</button>\n    <button ion-button clear small style="float: left" (click)="goToContactUsPage()">Forgot Password</button>\n   <!-- <p style="text-align: center"><span ion-text color="dark" (click)="goToRegistrationPage()" >Sign Up</span>&nbsp;&nbsp;|&nbsp;&nbsp;\n    <span ion-text color="dark">Forgot password?</span></p> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\EsoftMobile\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_auth_user_auth__["a" /* UserAuthProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_auth_user_auth__["a" /* UserAuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = (function () {
    function ContactUsPage(menuCtrl, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userLogggedIn = false;
    }
    ContactUsPage.prototype.ngOnInit = function () {
    };
    ContactUsPage.prototype.ionViewDidLoad = function () {
        if (this.userLogggedIn === false) {
            this.menuCtrl.swipeEnable(false);
        }
        else {
            this.menuCtrl.swipeEnable(true);
        }
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage.prototype.ionViewWillEnter = function () {
        if (this.userLogggedIn === false) {
            this.menuCtrl.swipeEnable(false);
        }
        else {
            this.menuCtrl.swipeEnable(true);
        }
        this.menuCtrl.swipeEnable(false);
    };
    ContactUsPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.swipeEnable(false);
    };
    return ContactUsPage;
}());
ContactUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact-us',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\contact-us\contact-us.html"*/'<!--\n\n  Generated template for the ContactUsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Contact Us</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n     <ion-list>  \n\n      <ion-item >\n\n        <ion-icon ios="ios-call" md="md-call" item-start></ion-icon>Call Contact Center</ion-item>\n\n     </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n     <ion-list>  \n\n        <ion-item >\n\n        <ion-icon ios="ios-mail" md="md-mail" item-start></ion-icon>Email Contact Center</ion-item>\n\n     </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n     <ion-list>  \n\n        <ion-item >\n\n        <ion-icon ios="ios-link" md="md-link" item-start></ion-icon>Visit Our Website</ion-item>\n\n     </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n     <ion-list>  \n\n        <ion-item >\n\n        <ion-icon ios="ios-share" md="md-share" item-start></ion-icon>Recommend to a friend</ion-item>\n\n     </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n     <ion-list>  \n\n        <ion-item >\n\n        <ion-icon ios="logo-facebook" md="logo-facebook"item-start></ion-icon>Like us on Facebook</ion-item>\n\n     </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n     <ion-list>  \n\n        <ion-item >\n\n        <ion-icon ios="logo-twitter" md="logo-twitter" item-start></ion-icon>Folllow us on Twitter</ion-item>\n\n     </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n     <ion-list>  \n\n        <ion-item >\n\n        <ion-icon ios="logo-youtube" md="logo-youtube" item-start></ion-icon>Subscribe to us on Youtube</ion-item>\n\n     </ion-list>\n\n    </ion-card>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\EsoftMobile\src\pages\contact-us\contact-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ContactUsPage);

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsDetailsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AccontsDetailsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AccountsDetailsServiceProvider = (function () {
    function AccountsDetailsServiceProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.endPoint = "http://localhost:53725/customers/";
        console.log('Hello AccontsDetailsServiceProvider Provider');
    }
    AccountsDetailsServiceProvider.prototype.getSavingsAccountDetails = function (id) {
        return this.http.get(this.endPoint + id + "/savings").do(function (data) {
            data.json();
            console.log("accounts data" + data);
        }).map(function (res) { return res.json(); });
    };
    AccountsDetailsServiceProvider.prototype.getLoansAccountDetails = function (id) {
        return this.http.get(this.endPoint + id + "/loans").do(function (data) {
            data.json();
            console.log("accounts data" + data);
        }).map(function (res) { return res.json(); });
    };
    AccountsDetailsServiceProvider.prototype.getSharesAccountDetails = function (id) {
        return this.http.get(this.endPoint + id + "/shares").do(function (data) {
            data.json();
            console.log("accounts data" + data);
        }).map(function (res) { return res.json(); });
    };
    AccountsDetailsServiceProvider.prototype.registerNewUser = function (newuser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.endPoint + "register", newuser, options).map(function (res) { return res.json(); });
    };
    return AccountsDetailsServiceProvider;
}());
AccountsDetailsServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AccountsDetailsServiceProvider);

//# sourceMappingURL=acconts-details-service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistatementProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MinistatementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MinistatementProvider = (function () {
    function MinistatementProvider(http) {
        this.http = http;
        this.endpoint = "http://localhost:53725/customers/";
        console.log('Hello MinistatementProvider Provider');
    }
    MinistatementProvider.prototype.getSavingsAccounts = function (id) {
        return this.http.get(this.endpoint + id + "/savings-accounts").map(function (resp) { return resp.json(); });
    };
    MinistatementProvider.prototype.getLoansAccounts = function (id) {
        return this.http.get(this.endpoint + id + "/loans-accounts").map(function (resp) { return resp.json(); });
    };
    MinistatementProvider.prototype.getSharesAccounts = function (id) {
        return this.http.get(this.endpoint + id + "/shares-accounts").map(function (resp) { return resp.json(); });
    };
    MinistatementProvider.prototype.getSavingsMiniStatement = function (id, account) {
        return this.http.get(this.endpoint + id + "/savings-statement/" + account).map(function (resp) { return resp.json(); });
    };
    MinistatementProvider.prototype.getLoansMiniStatement = function (id, account) {
        return this.http.get(this.endpoint + id + "/loans-statement/" + account).map(function (resp) { return resp.json(); });
    };
    MinistatementProvider.prototype.getSharesMiniStatement = function (id, account) {
        return this.http.get(this.endpoint + id + "/shares-statement/" + account).map(function (resp) { return resp.json(); });
    };
    return MinistatementProvider;
}());
MinistatementProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MinistatementProvider);

//# sourceMappingURL=ministatement.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balaces_balaces__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_detailsservice_customer_detailsservice__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ministatement_menu_ministatement_menu__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__atm_cards_atm_cards__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(menuCtrl, storage, loadingCtrl, events, customerDetPro, navCtrl, navParams) {
        //this.menuCtrl.enabled(true);
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.customerDetPro = customerDetPro;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.swipeEnable(true);
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.navParams.get('userId');
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.customerDetPro.getCustumerDetails(userId).subscribe(function (data) {
            _this.customer = data;
            _this.storage.set("customerDetails", JSON.stringify(_this.customer));
            _this.events.publish("userLogedIn", _this.customer);
            loader.dismiss();
        });
    };
    HomePage.prototype.goToBalance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__balaces_balaces__["a" /* BalacesPage */]);
    };
    HomePage.prototype.goToMiniStatementMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ministatement_menu_ministatement_menu__["a" /* MinistatementMenuPage */]);
    };
    HomePage.prototype.goToAtmCards = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__atm_cards_atm_cards__["a" /* AtmCardsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\EsoftMobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Esoft Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- <ion-searchbar\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar> -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <!-- <ion-row>\n\n      <ion-col col-6 (click)="goToBalance()">\n\n        <ion-card> \n\n          <img src="assets/images/us6K36jPS8FuKvuvMjGf_userprofile.png"  style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto; " />\n\n          <ion-card-header style="text-align:center; font-size:10px; width:100%; border-top:1px solid #ddd;">                    \n\n              User Information\n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 (click)="goToMiniStatementMenu()">\n\n        <ion-card> \n\n          <img src="assets/images/oZhjyj65TcWK6Bw7nSEE_memberstatistics.png" style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;" />\n\n          <ion-card-header style="text-align:center; font-size:10px; width:100%; border-top:1px solid #ddd;">                   \n\n              Member Statistics\n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-col>\n\n     </ion-row> -->\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (click)="goToBalance()">\n\n        <ion-card>\n\n          <img src="assets/images/o23OlcgsRu2IujBx4LSk_transferfunds.png" style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;"\n\n          />\n\n          <ion-card-header style="text-align:center; font-size:10px; width:100%; border-top:1px solid #ddd;">\n\n            Check Balances\n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 (click)="goToMiniStatementMenu()">\n\n        <ion-card>\n\n          <img src="assets/images/6SOe72BFQmz3hXCgKM7Y_ministatement.png" style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;"\n\n          />\n\n          <ion-card-header style="text-align:center; font-size:10px; width:100%; border-top:1px solid #ddd;">\n\n            Mini Statements\n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (click)="goToAtmCards()">\n\n        <ion-card>\n\n          <img src="assets/images/ZqX8xkz9RkedgYxBCdHS_withdrawfunds.png" style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;"\n\n          />\n\n          <ion-card-header style="text-align:center; font-size:10px; width:100%; border-top:1px solid #ddd;">\n\n            Linked Cards\n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n\n\n      <!--\n\n      <ion-col col-6 (click)="goToMiniStatementMenu()">\n\n        <ion-card> \n\n          <img src="assets/images/VWCZHeiSR67BlPhrKNP3_Loans.png" style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;" />\n\n          <ion-card-header style="text-align:center; font-size:10px; width:100%; border-top:1px solid #ddd;">                      \n\n              Loans           \n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-col> \n\n    -->\n\n    </ion-row>\n\n    <!-- \n\n     <ion-row>\n\n       <ion-col col-3></ion-col>\n\n      <ion-col col-6 (click)="goToBalance()">\n\n        <ion-card> \n\n          <img src="assets/images/pSKRSpaJQSGCCPvdDIuv_cashdeposit.png" style="display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;" />\n\n          <ion-card-header style="text-align:center; font-size:10px; width:100%; border-top:1px solid #ddd;">                      \n\n              Security Settings       \n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-col>\n\n       <ion-col col-3></ion-col>\n\n     </ion-row> -->\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\EsoftMobile\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_customer_detailsservice_customer_detailsservice__["a" /* CustomerDetailsserviceProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_customer_detailsservice_customer_detailsservice__["a" /* CustomerDetailsserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map