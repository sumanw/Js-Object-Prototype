export var Books = function(name,author,ISBN,version){
  this.name=name;
  this.author=author;
  this.ISBN=ISBN;
  this.version=version;
  this.canPublish=true;
}
Books.prototype.getDetails=function(){
if(this.canPublish==true){
  return this.name;
}
}