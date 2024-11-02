/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const sentenceArray = sentence.split(' ')
    
    let nextWord = ''
    let lastWord = sentenceArray[0]
    
    let nextLeter = ''
    let lastLeter = ''
    
    let res
    
    for (let i = 0; i < sentenceArray.length + 1 ; i++) {
       
        if (i + 1 < sentenceArray.length && lastWord !== ''){
            nextLeter = sentenceArray[i + 1][0]
        } else {
            nextLeter = sentenceArray[0][0]
        }
        
        lastWord = sentenceArray[i] ? sentenceArray[i] : sentenceArray [i-1]
        lastLeter = lastWord.charAt(lastWord.length - 1)
        // console.log('lastLeter',lastLeter)
        // console.log('nextLeter', nextLeter)
        
        if (nextLeter === lastLeter) {
            res = true
        } else {
            return res = false
        }
        
        
    }
    return res
};