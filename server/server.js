require('dotenv').config();

var express = require('express'),
  app = express(),
  NODE_ENV = process.env.NODE_ENV || 'development';

var cluster = require('cluster');
var app = require('./app');

function spawnWorker (){
  var server = app.createServer();
};

function createCluster() {

  if(cluster.isMaster) {
    var numCPUs = require('os').cpus().length;

    for (var i = 0;i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('listening', function(worker){
      console.log('Worker '+ worker.id + ' started');
    });

    //if a worker dies, respawn
    cluster.on('death', function (worker) {
      console.log('Worker ' + worker.id + ' dies, respawning');
      cluster.fork();
    });
  }
  else {
    spawnWorker();
  }
};

function run(cluster) {
  if(NODE_ENV == 'production' || NODE_ENV == 'development' || cluster) {
    createCluster();
  }
  else {
    spawnWorker();
  }
};

run();

