// function loop(value, test, update, body) {
//     let ()
// }
// }

function loop(value, test, update, body){
    for (value; test(value); value = update(value)){
        body(value);
        
    }
    // while (test(value)) {
    //     body(value);
    //     value = update(value);
    // }
    // return;
  }

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1