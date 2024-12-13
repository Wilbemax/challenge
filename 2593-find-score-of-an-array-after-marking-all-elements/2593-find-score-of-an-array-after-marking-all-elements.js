/**
 * @param {number[]} nums
 * @return {number}
 */

var findScore = function(nums) {
   let arr = nums.map((num, i) => ({value: num, index: i}))
   const marked = new Set()
   
   arr.sort((a, b) => {
       if (a.value ===  b.value){
           return a.index - b.index
       }
       return a.value - b.value
   })
   
   let res = 0
   
   for (let num of arr) {
       if (!marked.has(num.index)) {
            marked.add(num.index)
            marked.add(num.index - 1)
            marked.add(num.index + 1)
            res += num.value
       }
   }
   return res
};