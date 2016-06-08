react-startup-via-jspm
======================

A ReactJS study sample project build with [jspm](http://jspm.io/), jspm is a package manager for the SystemJS universal module loader, built on top of the dynamic ES6 module loader

See [React](https://facebook.github.io/react/index.html)

Startup
-------

0. Install [node.js](https://nodejs.org/download/) v5.4 and npm 3.3
1. [Fork](https://github.com/immime/react-startup-via-jspm/fork) and clone this project.
2. run `npm install -g browser-sync` to install [browser-sync](https://www.browsersync.io).
3. cd `project root path`.
4. run `npm install jspm --save-dev` to install jspm locally.
5. run `jspm install react react-dom` to install react dependencies.
6. run `jspm install css semantic-ui jquery` to install UI dependencies.
7. run `browser-sync start --server --no-notify --files './*.html,app/**/*.js'` to startup a server.


React Usage
------
#### Components
 - with JSX `recommonded`
 - render

#### props
 - this.props

#### data
 - this.data

#### refs
 - this.ref
 - get component data by ref
 - component ref just like a DOM Element's attr

#### event
 - handle component event
 - event.preventDefault()

#### callback
 - pass data to parent component


Thanks
------
Thanks to @[宁皓网](http://ninghao.net/)

