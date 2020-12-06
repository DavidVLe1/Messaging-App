import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})

export class MessageService {

    constructor(private socket: Socket) { }

    sendMessage(message: string, User: string): void {
        this.socket.emit('user message', User + ': ' + message);
    }

    getMessages(): any {
        return this.socket.fromEvent('user message');
    }
}
