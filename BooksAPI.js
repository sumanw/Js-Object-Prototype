export var BooksAPI=function(url,headers){
  this.url=url;
  this.headers=headers;
}

BooksAPI.prototype.getBooks=function(methodName){
  var headers=this.headers;
  return  fetch(`${this.url}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books);
}