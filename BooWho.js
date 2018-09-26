function booWho(bool) {
  // Function that checks if parameter is a primative boolean.
  let primative = typeof bool;
  
  if(primative === "boolean"){
    return true;
  }
  else{
    return false;
  }
}

booWho(true);
