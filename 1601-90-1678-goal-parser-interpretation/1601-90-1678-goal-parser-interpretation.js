/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let res = ''
  
  let left = 0
  
  while (left < command.length) {
      if (command[left] === "G") {
          res += "G"
          left++ 
      } else if (command[left] === "(" && left < command.length - 1 && command[left + 1] === ")") {
            res+= "o"
            left += 2
      } else {
          res += "al"
          left += 4
      }
  }
  
  return res
  
};