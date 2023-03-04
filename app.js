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
        for (i = 0; i < this.hoursofoperation.length; i++ ) {
            let cookies = Math.ceil(this.avg * this.getCustomers())
            this.cookiesperhour.push(cookies);
        }
        return this.cookiesperhour;
    }
    stand.render = function(){
        let Row = document.createElement('tr');
        let LocationTD = document.createElement('td');
        let thDemo = document.createElement('th');
        LocationTD.innerHTML = this.location;
        Row.append(LocationTD);
        // We are creating an row to put in our placeholder
        document.getElementById("cookietb").append(Row);

        for (let i = 0; i< this.hoursofoperation.length; i++) {
            let thDemo = document.createElement('th');
            thDemo.innerHTML = this.hoursofoperation[i];
            document.getElementById("cookietb").append(thDemo)
        }

        for (let i = 0; i < this.hoursofoperation.length; i++) {
            // tdDemo is the data for cookiesperhour 
            let tdDemo = document.createElement('td')
            // Creating an element for the data
            tdDemo.innerHTML = this.cookiesperhour[i];
            // We are putting the data in the row
            Row.append(tdDemo);
        }
 
    }
    
       return stand;
    
}



//Setting up the objects we want, but with its own unique data

const seattle = cookieStandLocation(23, 65, 6.3, 'Seattle', hoursofoperation);
seattle.getCustomers();
seattle.getCookies();
seattle.render();

const tokyo = cookieStandLocation(3, 24, 1.2, 'Tokyo', hoursofoperation);
tokyo.getCustomers();
tokyo.getCookies();
tokyo.render();

const dubai = cookieStandLocation(11, 38, 3.7, 'Dubai', hoursofoperation);
dubai.getCustomers();
dubai.getCookies();
dubai.render();

const paris = cookieStandLocation(20, 38, 2.3, 'Paris', hoursofoperation);
paris.getCustomers();
paris.getCookies();
paris.render();

const lima = cookieStandLocation(2, 16, 4.6, 'Lima', hoursofoperation);
lima.getCustomers();
lima.getCookies();
lima.render();

