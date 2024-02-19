//////Question: 36//////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var makeShirt = function (size, message) {
    console.log("Shirt Size: ".concat(size, ", Message: ").concat(message));
};

// Example: Call the function
makeShirt("Medium", "Hello World!");

//////Question: 37//////

var makeDefaultShirt = function (size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt Size: ".concat(size, ", Message: ").concat(message));
};
// Example: Make a large shirt with default message
makeDefaultShirt();
// Example: Make a medium shirt with default message
makeDefaultShirt("Medium");
// Example: Make a small shirt with a different message
makeDefaultShirt("Small", "Custom Message");

//////Question: 38//////

function describe_city(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Examples
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris"); // Uses the default country value
//////Question: 39//////
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Examples
var city1 = city_country("Lahore", "Pakistan");
var city2 = city_country("Tokyo", "Japan");
var city3 = city_country("Sydney", "Australivar");
console.log(city1);
console.log(city2);
console.log(city3);
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Examples
var album1 = make_album("Artist1", "Album Title 1");
var album2 = make_album("Artist2", "Album Title 2", 12); // With number of tracks
var album3 = make_album("Artist3", "Album Title 3");
console.log(album1);
console.log(album2);
console.log(album3);
//////Question: 41//////
// 1. Magicians
var show_Magicians = function (magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
};
// Example: Call the function
var magiciansArray = ["Merlin", "Houdini", "David Copperfield"];
show_Magicians(magiciansArray);
/////Question: 42///////
var makeGreat = function (magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
};
// Example: Call the functions to modify and display
var greatMagiciansArray = makeGreat(magiciansArray);
show_Magicians(greatMagiciansArray);
//////Question: 43//////
var makeGreatAndKeepOriginal = function (magicians) {
    var greatMagicians = makeGreat(__spreadArray([], magicians, true));
    return { original: magicians, great: greatMagicians };
};
// Example: Call the functions to show unchanged and modified arrays
var result = makeGreatAndKeepOriginal(magiciansArray);
show_Magicians(result.original);
show_Magicians(result.great);
//////Question: 44//////
function ordersandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length > 0) {
        console.log("Items:");
        items.forEach(function (item) {
            console.log("- ".concat(item));
        });
    }
    else {
        console.log("No items selected for the sandwich.");
    }
    console.log("---------------------");
}
// Example calls to the function with different numbers of arguments
ordersandwich("Ham", "Cheese", "Lettuce", "Tomato");
ordersandwich("Turkey", "Swiss");
ordersandwich("Peanut Butter", "Jelly");
function createcar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Adding other properties from the options
    options.forEach(function (option) {
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    });
    return car;
}
// Example call to the function with required information and additional options
var myCar = createcar("Toyota", "Camry");
// Print the returned object
console.log(myCar);
//////////////////////////////////////////the end:
