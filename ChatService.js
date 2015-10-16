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
///<reference path="typings/angular2/angular2" />
var angular2_1 = require("angular2/angular2");
var ChatService = (function () {
    function ChatService() {
        this.consumers = [];
        this.setMessage = function (msg) {
            this.chatService.set(msg);
        };
        this.pushMessage = function (msg) {
            this.chatService.push(msg);
            this.messsageAdded.next({ $event: 'messageAdded' });
        };
        this.register = function (consumer) {
            this.consumers.push(consumer);
        };
        this.chatService = new Firebase('https://omeeq7tq4vl.firebaseio-demo.com/');
        this.messsageAdded = new angular2_1.EventEmitter();
        var objThis = this;
        this.chatService.on('child_added', function (snapshot) {
            var len = objThis.consumers.length;
            for (var i = 0; i < len; i++) {
                objThis.consumers[i].onMessageAdded(snapshot);
            }
        });
    }
    ChatService = __decorate([
        angular2_1.Component({
            events: ['messageAdded']
        }), 
        __metadata('design:paramtypes', [])
    ], ChatService);
    return ChatService;
})();
exports.ChatService = ChatService;
