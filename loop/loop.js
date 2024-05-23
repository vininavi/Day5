
var json = [
    {"name" : "shanthini", 
    "location"   : "Adayar"

    },
    {
    "name" : "vinithra", 
    "location"   : "Siruseri",
}];
//for loop
for(var i = 0; i < json.length; i++) {
      console.log(json[i].name);

}
//for Each
json.forEach(function(item) { 
    console.log(item.name); 
});

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
 }
}
//for Of
let text = "";
for (let x of json[key].name) {
 text += x; 
}
 console.log(text);




