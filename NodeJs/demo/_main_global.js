const mod = require('./global');console.log(mod.foo);global.foo = 200;console.log(foo);