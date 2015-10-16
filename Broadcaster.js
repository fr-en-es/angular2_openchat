if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require("angular2/angular2");
var ChatService_1 = require("ChatService");
var Broadcaster = (function () {
    function Broadcaster(ch) {
        this.msg = "helloooooo";
        this.broadCast = function () {
            var obj = { "name": "csp", text: this.msg };
            this.chatService.pushMessage(obj);
        };
        this.clear = function () {
            this.chatService.setMessage('');
        };
        this.chatService = ch;
        //this.chatService.register(this);	
    }
    Broadcaster = __decorate([
        angular2_1.View({
            template: "<div>\n\t\n\t<input placeholder=\"message here...\" [value]=\"msg\" (keyup)=\"msg=$event.target.value\" ></input>\n\t<button (click)=\"broadCast()\">Send</button>\n\t<button (click)=\"clear()\">Clear</button>\n</div>\n",
            directives: [angular2_1.NgModel]
        }),
        angular2_1.Component({
            selector: "Broadcaster",
            hostInjector: [
                ChatService_1.ChatService
            ]
        }),
        __param(0, angular2_1.Inject(ChatService_1.ChatService)), 
        __metadata('design:paramtypes', [(typeof ChatService !== 'undefined' && ChatService) || Object])
    ], Broadcaster);
    return Broadcaster;
})();
exports.Broadcaster = Broadcaster;
/*
// not implemeted in angular 2.0.0.31 to listen EventEmitter custom event
    hostListeners:
    {'chatService:messageAdded': 'onMessageAdded($event)'}
    */ 
