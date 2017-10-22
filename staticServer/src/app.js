const http = require('http');
const chalk = require('chalk');
const config = require('./config/defaultConfig');
const path = require('path');
const route = require('./helper/route');
const openUrl = require('./helper/openUrl');

class Server {
  constructor(conf){
    this.conf = Object.assign({},config,conf);
  }

  start(){
    const server = http.createServer((req,res) => {
      //获取文件路径
      const filePath = path.join(this.conf.root,req.url);
      route(req,res,filePath,this.conf);

    });
    server.listen(this.conf.port,this.conf.hostname,() => {
      const address = `http://${this.conf.hostname}:${this.conf.port}`;
      console.info(`Server started at ${chalk.green(address)}`);
      openUrl(address);
    });

  }
}

module.exports = Server;



