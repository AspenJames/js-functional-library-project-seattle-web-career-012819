fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(i in collection) {
        callback(collection[i])
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArr = []
      for(i in collection) {
        newArr.push(callback(collection[i]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {

    },
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()
