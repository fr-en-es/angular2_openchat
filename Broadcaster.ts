import {Component, View, bind, Inject, NgModel, EventEmitter, Directive} from "angular2/angular2";

import {ChatService} from "ChatService";

@View({
	template:`<div>
	
	<input placeholder="message here..." [value]="msg" (keyup)="msg=$event.target.value" ></input>
	<button (click)="broadCast()">Send</button>
	<button (click)="clear()">Clear</button>
</div>
`,
directives: [NgModel]
})
@Component({
	selector: "Broadcaster",
	hostInjector: [
   	ChatService
	]
	
}) 
class Broadcaster {
	msg:String = "helloooooo";
	chatService:ChatService;
	constructor(@Inject(ChatService)ch:ChatService)
	{
		this.chatService = ch;
		//this.chatService.register(this);	
		
	}
	broadCast =  function()
	{
		var obj = {"name":"csp", text:this.msg};
		this.chatService.pushMessage(obj);
	}
	
	clear = function()
	{
		this.chatService.setMessage('');
		
	}
}

exports.Broadcaster = Broadcaster;

/*
// not implemeted in angular 2.0.0.31 to listen EventEmitter custom event
	hostListeners:
	{'chatService:messageAdded': 'onMessageAdded($event)'}
	*/