///<reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from "angular2/angular2";

import {ChatThread} from "ChatThread";
import {Broadcaster} from "Broadcaster";
@Component({
	
	selector:"chatWindow"
})
@View({
	templateUrl:"chatwindow.html",
	directives:[ChatThread, Broadcaster]
})
class Chatter
{
	constructor()
	{
		
	}
	
}
bootstrap(Chatter);



