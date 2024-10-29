/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    if (!context){
        context = typeof window !== "undefined" ? window : global;
    }
    const fn = this
    const result = fn.apply(context, args)
    return result 
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */