# Node.js on Apache

Using a cheap web host that doesn't allow you much flexibility?
Stuck with Apache and CGI scripting, rather than the Node server you were hoping for?
This will allow you to run your [http](https://nodejs.org/api/http.html) server just as well.
Just update server.js to use your listener, and it should work immediately.

The request-response frameworks are cheap approximations of the real HTTP library, based on [puffnfresh/node-cgi](https://github.com/puffnfresh/node-cgi).

# Directory structure:

    .
    ├── bin 
    │   └── node (symlink)
    └── html-data
        ├── .htaccess
        ├── cgi.js
        ├── server.cgi
        ├── server.js
        └── site.js

The folder being served, for example as an Apache userdir, is html-data.
If this has a different name, the regular expression in .htaccess will need to be updated.
Any request to this directory will then be handled by the handler in site.js, unless the path points to an existant subdirectory of html-data.

# Inspiration

My university (TU Munich) [gives free hosting](http://home.in.tum.de/) to its students, powered by Apache.
