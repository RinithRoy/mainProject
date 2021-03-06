System.register(['angular2/core', 'angular2/http', '../config/config', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, config_1;
    var MapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (_1) {}],
        execute: function() {
            MapService = (function () {
                function MapService(http) {
                    this.http = http;
                    var headers = new http_1.Headers();
                    headers.append('cache', 'false');
                    this.options = {
                        headers: headers
                    };
                }
                MapService.prototype.getDonors = function () {
                    var url = config_1.config.host + "api/donors?" + Date.now();
                    return this.http.get(url, this.options).map(function (res) { return res.json(); });
                };
                MapService.prototype.getDonor = function (id) {
                    var url = config_1.config.host + 'api/donors/' + id;
                    return this.http.get(url, this.options).map(function (res) { return res.json(); });
                };
                MapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MapService);
                return MapService;
            })();
            exports_1("MapService", MapService);
        }
    }
});
//# sourceMappingURL=map.service.js.map