function test() {    const a = parseInt(Math.random());    const b = parseInt(Math.random());    test1(a,b);}function test1(a,b) {    if(a > b){        a += a * 2;    }else {        b -= a;    }    return a + b;}test();