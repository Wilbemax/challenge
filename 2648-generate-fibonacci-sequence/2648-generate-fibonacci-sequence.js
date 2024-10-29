/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
   let a = 0
   let b = 1
   while(true){
       yield a
       const prev  = a
       a = b
       b += prev
   }


};

/**
 * const gen = [Symbol.iterator]();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */