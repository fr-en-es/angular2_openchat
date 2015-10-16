///<reference path="typings/angular2/angular2" />
import {Component, View, bind, EventEmitter} from "angular2/angular2";

import {AngularFire, FirebaseArray} from "firebase/angularfire";
@Component({
	events:['messageAdded']
})	
class ChatService {
	
	chatService:Firebase;
	messsageAdded:EventEmitter;
	consumers:Array = [];
	constructor()
	{
		this.chatService = new Firebase('https://omeeq7tq4vl.firebaseio-demo.com/');
		this.messsageAdded = new EventEmitter();
		var objThis = this;
		this.chatService.on('child_added', function(snapshot)
		{
			var len = objThis.consumers.length;
			for(var i=0; i < len; i++)
			{
				objThis.consumers[i].onMessageAdded(snapshot);
			}
		});
				
	}
	setMessage =  function(msg:String)
	{
		this.chatService.set(msg);
	}
	
	pushMessage =  function(msg:String)
	{
		this.chatService.push(msg);
		this.messsageAdded.next({$event:'messageAdded'});
		
		
		
	}
	
	register = function(consumer:Object)
	{
		this.consumers.push(consumer);
	}
	
}

exports.ChatService = ChatService;