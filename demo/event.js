const {EventEmitter} = require('events');class CustomEvent extends  EventEmitter {}//const ce = new CustomEvent();//// ce.on('test',() => {//     console.log('this is a test');// });//// setInterval(() => {//    ce.emit('test');// },200);//params event// ce.on('error',(err,time) => {//     console.log(err);//     console.log(time);// });//// ce.emit('error', new Error('OOPS'),Date.now());//event once// ce.once('test1',() => {//     console.log('test1')// });//// setInterval(() => {//    ce.emit('test1');// },200);function fn1() {    console.log('fn1');}function fn2() {    console.log('fn2');}ce.on('test2',fn1);ce.on('test2',fn2);setInterval(() =>{    ce.emit('test2');},200);setTimeout(() => {    // ce.removeListener('test2',fn2);    // ce.removeListener('test2',fn1);    ce.removeAllListeners('test2');},1500);