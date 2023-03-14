// Grabbing random number of customers from our min and max
function getRandom(max, min) {
    let random = Math.random() * (max - min) + min;
    
    return random;
}

// Declaring Hours Of Operation as a variable to be reused in constr. function
let hoursofoperation = ["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]




// Defining Constructor Function (Parameters are the info we store uniquely for each object we create from this function)
function cookieStandLocation(min, max, avg, location, hours){
    let stand = {};
    stand.min = min;
    stand.max = max;
    stand.avg = avg;
    stand.location = location;
    stand.cookiesperhour= [];

    stand.hoursofoperation = hours;

    // The customer randomizer
    stand.getCustomers = function() {
        return getRandom(this.max, this.min);
    }

    // The cookie math, that pushes the data we have into an array
    stand.getCookies = function getCookies() {
        for (let i = 0; i < this.hoursofoperation.length; i++ ) {
            let cookies = Math.ceil(this.avg * this.getCustomers())
            this.cookiesperhour.push(cookies);
        }
        return this.cookiesperhour;
    }
    stand.total = function total() {
        let total = 0
        for (let i = 0; i < this.cookiesperhour.length ; i++){
            total += this.cookiesperhour[i];
        }
        return total
    }
   
    // This is the render function. Its rendering all of the content we want on our HTML
    stand.render = function(){
        let Row = document.createElement('tr');
        let LocationTD = document.createElement('td');
        let thTemp = document.createElement('th');
        

       // This for loop is to loop and create the hours of operation
        // This sets an empty string so the hours are lined up
        thTemp.innerHTML = " "
        document.getElementById("cookietb").append(thTemp);

        // This is the loop that created easy line for hours of operation
        for (let i = 0; i< this.hoursofoperation.length; i++) {
            let thDemo = document.createElement('th');
            thDemo.innerHTML = this.hoursofoperation[i];
            document.getElementById("cookietb").append(thDemo)
        }
        let dailytotal = document.createElement("th");
        dailytotal.innerHTML = "Daily Total"
        document.getElementById("cookietb").append(dailytotal)

          // We are assigning the location data to locationTD as HTML
        LocationTD.innerHTML = this.location;
        // We are adding LocationTD to Row
        Row.append(LocationTD);
        // We are creating an row to put in our placeholder
        document.getElementById("cookietb").append(Row);

        

     
        // This for loop is to create the data on our table
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            // tdDemo is the data for cookiesperhour 
            let tdDemo = document.createElement('td')
            // Creating an element for the data
            tdDemo.innerHTML = this.cookiesperhour[i];
            // We are putting the data in the row
            Row.append(tdDemo);

        }
        let dailytotaldata = document.createElement('td');
        dailytotaldata.innerHTML = this.total();
        Row.append(dailytotaldata)

        

    }
    
       return stand;

    
}
   
//Setting up the objects we want, but with its own unique data

const seattle = cookieStandLocation(23, 65, 6.3, 'Seattle', hoursofoperation);
seattle.getCustomers();
seattle.getCookies();
seattle.render();
seattle.total();
//seattle.hourlytotal();

const tokyo = cookieStandLocation(3, 24, 1.2, 'Tokyo', hoursofoperation);
tokyo.getCustomers();
tokyo.getCookies();
tokyo.render();
tokyo.total();
//tokyo.hourlytotal();

const dubai = cookieStandLocation(11, 38, 3.7, 'Dubai', hoursofoperation);
dubai.getCustomers();
dubai.getCookies();
dubai.render();
dubai.total();
//dubai.hourlytotal();

const paris = cookieStandLocation(20, 38, 2.3, 'Paris', hoursofoperation);
paris.getCustomers();
paris.getCookies();
paris.render();
paris.total();
//paris.hourlytotal();

const lima = cookieStandLocation(2, 16, 4.6, 'Lima', hoursofoperation);
lima.getCustomers();
lima.getCookies();
lima.render();
lima.total();

//lima.hourlytotal();
document.getElementById("buttonclick").addEventListener("click", formLocation);


function formLocation(event){
    event.preventDefault();

    let button = document.getElementById("cityName").value;
    let cookietb = document.getElementById("cookietb");
    const newLocation = cookieStandLocation(1, 20, 6.3, button, hoursofoperation);
    newLocation.getCustomers();
    newLocation.getCookies();
    newLocation.render();
    newLocation.total();


}


//lets add a global function here that sums the cookiesperhour arrays across all locations
function getHourlySumsForAllLocations(){
    // If seattle.cookiesperhour is an array that equals [22, 12, 3, 10, 5] and tokyo.cookiesperhour is an array that equals [3, 7, 7, 1, 14] 
    //     then the hourlySums for seattle and tokyo would equal [25, 19, 10, 11, 19] 

    let hourlySums = []
    for(let i = 0; i < hoursofoperation.length; i++)
    {
        let hourlytotal = seattle.cookiesperhour[i]+tokyo.cookiesperhour[i]+dubai.cookiesperhour[i]+paris.cookiesperhour[i]+lima.cookiesperhour[i]
        hourlySums.push(hourlytotal)
    }

    //return hourlySums

    let hourtr = document.createElement("tr");
    let hourth = document.createElement("th");
    let hourft = document.createElement("tfoot")
    document.getElementById("cookietb").append(hourft)
    hourft.append(hourtr)
     hourth.innerHTML = "Total";
     hourtr.append(hourth)
    for (x = 0; x < hoursofoperation.length; x++){
        let hourtotal = document.createElement("th")
        hourtotal.innerHTML = hourlySums[x]
        hourtr.append(hourtotal)

    }
}


 // after we get the hourlySums we want to display them along the bottom row of hour table
let hourlySums = getHourlySumsForAllLocations()



