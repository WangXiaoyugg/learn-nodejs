const modA = require('./mod_a');const modB = require('./mod_b'); //缓存了，不会在加载//完全加载console.log(modA.test);console.log(modB.test);