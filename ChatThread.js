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
///<reference path="typings/angular2/angular2" />
var angular2_1 = require("angular2/angular2");
var ChatService_1 = require("ChatService");
var ChatThread = (function () {
    function ChatThread(ch) {
        this.snapshot = [];
        this.onMessageAdded = function (snapshot) {
            this.snapshot.push(snapshot.val());
            console.log("snapshot....", this.snapshot);
        };
        this.chatService = ch;
        this.chatService.register(this);
    }
    ChatThread = __decorate([
        angular2_1.Component({
            selector: "chatthread",
            hostInjector: [ChatService_1.ChatService]
        }),
        angular2_1.View({
            templateUrl: "chatThread.html",
            directives: [angular2_1.NgFor]
        }),
        __param(0, angular2_1.Inject(ChatService_1.ChatService)), 
        __metadata('design:paramtypes', [(typeof ChatService !== 'undefined' && ChatService) || Object])
    ], ChatThread);
    return ChatThread;
})();
exports.ChatThread = ChatThread;
