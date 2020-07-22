#!/usr/bin/perl -e$_=$ARGV[0];exec(s/[^\/]+$/..\/bin\/node/r,$_)
var site = require('./site'),
    cgi = require('./cgi');

var server = cgi.createServer(site);
server.listen();
