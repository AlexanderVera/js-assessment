asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    var promise = new Promise(function(resolve, reject) {
        resolve(value);
    });

    return promise;
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    var promise = new Promise(function(resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var arrayResponse = JSON.parse(this.response).people;
          var result = [];

          for (let index = 0; index < arrayResponse.length; index++) {
            const element = arrayResponse[index];
            result.push(element.name);
          }

          result.sort();

          resolve(result);
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();  
    });

    return promise;
  },
};
