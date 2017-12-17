// Notice: this file is purely for generation of names and ticker
// Ideally this would be pulled from a database or api depending which you would require


function Companies(input){
  if('null' != input ){
    this.listing = input;
  }
  else{
      this.listing = {"apple":"ea","Microsoft":"MRSF","Google":"goog"};
  }

};


module.exports = Companies;

