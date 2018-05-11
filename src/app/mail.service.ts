import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
	message= `You' ve got a mail!`;
	arrayMessage = [
		{id: 0,text:`You are friend of Robert`},
		{id: 1,text:`Robert liked you comment`},
		{id: 2,text:`I'll never believe anything Robert said ...}`
	]
	updated(id,text){
		this.arrayMessage = this.arrayMessage.map(m=>
			m.id === id
			? {id,text}
			: m
		)
	}
  	constructor() { }

}
