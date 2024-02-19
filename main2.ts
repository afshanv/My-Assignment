//////Question: 36//////

const makeShirt = (size: string, message: string): void => {
    console.log(`Shirt Size: ${size}, Message: ${message}`);
};

// Example: Call the function
makeShirt("Medium", "Hello World!");

//////Question: 37//////

const makeDefaultShirt = (size: string = "Large", message: string = "I love TypeScript"): void => {
    console.log(`Shirt Size: ${size}, Message: ${message}`);
};

// Example: Make a large shirt with default message
makeDefaultShirt();

// Example: Make a medium shirt with default message
makeDefaultShirt("Medium");

// Example: Make a small shirt with a different message
makeDefaultShirt("Small", "Custom Message");


//////Question: 38//////

function describe_city(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
}

// Examples
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris"); // Uses the default country value


//////Question: 39//////

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Examples
var city1 = city_country("Lahore", "Pakistan");
var city2 = city_country("Tokyo", "Japan");
var city3 = city_country("Sydney", "Australivar");
console.log(city1);
console.log(city2);
console.log(city3);

//////Question: 40//////

interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for the number of tracks
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
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
const show_Magicians = (magicians: string[]): void => {
    magicians.forEach(magician => console.log(magician));
};

// Example: Call the function
const magiciansArray: string[] = ["Merlin", "Houdini", "David Copperfield"];
show_Magicians(magiciansArray);

/////Question: 42///////

const makeGreat = (magicians: string[]): string[] => {
    return magicians.map(magician => `the Great ${magician}`);
};

// Example: Call the functions to modify and display
const greatMagiciansArray = makeGreat(magiciansArray);
show_Magicians(greatMagiciansArray);

//////Question: 43//////

const makeGreatAndKeepOriginal = (magicians: string[]): { original: string[], great: string[] } => {
    const greatMagicians = makeGreat([...magicians]);
    return { original: magicians, great: greatMagicians };
};

// Example: Call the functions to show unchanged and modified arrays
const result = makeGreatAndKeepOriginal(magiciansArray);
show_Magicians(result.original);
show_Magicians(result.great);

//////Question: 44//////

function ordersandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length > 0) {
        console.log("Items:");
        items.forEach((item) => {
            console.log(`- ${item}`);
        });
    } else {
        console.log("No items selected for the sandwich.");
    }
    console.log("---------------------");
}

// Example calls to the function with different numbers of arguments
ordersandwich("Ham", "Cheese", "Lettuce", "Tomato");
ordersandwich("Turkey", "Swiss");
ordersandwich("Peanut Butter", "Jelly");

//////Question: 45//////

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createcar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): Car {
   var car: Car = {
        manufacturer,
        model,
    };

    // Adding other properties from the options
    options.forEach((option) => {
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    });

    return car;
}

// Example call to the function with required information and additional options
var myCar = createcar("Toyota", "Camry" );

// Print the returned object
console.log(myCar);

//////////////////////////////////////////the end: