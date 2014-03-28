/*
 *  getQueryParameters.js
 *  Copyright (c) 2014 Nicholas Ortenzio
 *  The MIT License (MIT)
 *
 */

window.getQueryParameters = function(str) {
  return (str || document.location.search).replace(/(^\?)/,'').split("&").reduce(function(o,n){n=n.split('=');o[n[0]]=n[1];return o},{});
}
