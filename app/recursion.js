recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *  
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {String[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    result = [];
    if((data.files == undefined || data.files.length == 0) && (data.subDirs == undefined || data.subDirs.length == 0)){
      return [];
    }
    else{
      if((data.files != undefined && data.files.length > 0)){
          for(var i = 0; i < data.files.length; i++){
            data.files.forEach(function(element) {
            result.push(element);
          });
        }
        if(data.subDirs != undefined && data.subDirs.length > 0){
          for (let index = 0; index < data.subDirs.length; index++) {
            const element = data.subDirs[index];
            result.concat(listFiles(data, dirName));
          }
        }
        return result;
      }
    }
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if(n < 2){
      return n;
    }
    else{
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  },
};
