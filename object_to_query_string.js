
/*
+-------------------------------------

Object to query string

Eg :

serialize({
  foo: "John Doe",
  bar: "100"
});

Result : foo=John%20Doe&bar=100

+-------------------------------------
*/
 
serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}