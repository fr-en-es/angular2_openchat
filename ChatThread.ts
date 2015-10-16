///<reference path="typings/angular2/angular2" />
import {Component, View, Inject, bind, NgFor} from "angular2/angular2";
import {ChatService} from "ChatService";
@Component({
	selector:"chatthread",
	hostInjector:[ChatService]
})
@View({
	templateUrl:"chatThread.html",
	directives:[NgFor]
})
class ChatThread
{
	chatService:ChatService;
	snapshot:Array = [];
	constructor(@Inject(ChatService)ch:ChatService)
	{
		this.chatService = ch;
		this.chatService.register(this);
	}
	
	onMessageAdded = function(snapshot)
	{
		this.snapshot.push(snapshot.val());
		console.log("snapshot....", this.snapshot);
		
		
		
	}
	
}
 
exports.ChatThread = ChatThread;


