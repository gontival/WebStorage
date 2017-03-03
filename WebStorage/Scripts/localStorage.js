localStorage.setItem('firstName', $('#firstName').val());
//And since it's treated like many other JavaScript dictionaries, you could also set values using other common syntaxes.
localStorage['firstName'] = $('#firstName').val();
//or 
localStorage.firstName = $('#firstName').val();


var firstName = localStorage.getItem('firstName');
//And like setItem, you also have the ability to use other syntaxes to retrieve values from the dictionary. 
var firstName = localStorage['firstName'];
//or 
var firstName = localStorage.firstName;


localStorage.removeItem('firstName');

localStorage.clear();

var itemCount = localStorage.length;

//it's recommended to check the length before indexing keys
var key = localStorage.key(1);

// check if localStorage or sessionStorage is supported by the browser
function isWebStorageSupported() {
    return 'localStorage' in window;
}

if (isWebStorageSupported()) {
    localStorage.setItem('firstName', $('#firstName').val());
}

if (Modernizr.localStorage) {
    localStorage.setItem('firstName', $('#firstName').val());
}

try{
    localStorage.setItem('firstName',$('#firstName').val());
}
catch(e){
    //degrade gracefully
}

//Storing complex objects
var person = { firstName: 'Glenn', lastName: 'Johnson' };
localStorage.setItem('glenn', JSON.stringify(person));

var person = JSON.parse(localStorage.getItem('glenn'));