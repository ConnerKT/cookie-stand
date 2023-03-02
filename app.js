// Grabbing random number of customers from our min and max
function getRandom(max, min) {
    let random = Math.random() * (max - min) + min;
    
    return random;
}

// Objects with the min, max, and avg as properties for each city
let seattle = {
    min:23,
    max:65,
    avg:6.3,
    hoursofoperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersperhour: function() {
        return getRandom(this.max, this.min)
    },
    cookiesperhour:[],
    getcookies: function() {
        for (i = 0; i < this.hoursofoperation.length; i++ ) {
            //console.log("this.avg", this.avg)
            //console.log("this.customersperhour()", this.customersperhour())
            let cookies = Math.ceil(this.avg * this.customersperhour())
            this.cookiesperhour.push(cookies)
        }
        return this.cookiesperhour 
    }

}
// calls each function so the array of cookies is put in array (if not its undefined)
seattle.getcookies();

// makes List for each city


let tokyo = {
    min:3,
    max:24,
    avg:1.2,
    hoursofoperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersperhour: function() {
        return getRandom(this.max, this.min)
    },
    cookiesperhour:[],
    getcookies: function() {
        for (i = 0; i < this.hoursofoperation.length; i++ ) {
            console.log("this.avg", this.avg)
            console.log("this.customersperhour()", this.customersperhour())
            let cookies = Math.ceil(this.avg * this.customersperhour())
            this.cookiesperhour.push(cookies)
        }
        return this.cookiesperhour 
    }

}
// call tokyo function
tokyo.getcookies();

let dubai = {
    min:11,
    max:38,
    avg:3.7,
    hoursofoperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersperhour: function() {
        return getRandom(this.max, this.min)
    },
    cookiesperhour:[],
    getcookies: function() {
        for (i = 0; i < this.hoursofoperation.length; i++ ) {
            console.log("this.avg", this.avg)
            console.log("this.customersperhour()", this.customersperhour())
            let cookies = Math.ceil(this.avg * this.customersperhour())
            this.cookiesperhour.push(cookies)
        }
        return this.cookiesperhour 
    }

}
// call dubai function
dubai.getcookies();

let paris = {
    min:20,
    max:38,
    avg:2.3,
    hoursofoperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersperhour: function() {
        return getRandom(this.max, this.min)
    },
    cookiesperhour:[],
    getcookies: function() {
        for (i = 0; i < this.hoursofoperation.length; i++ ) {
            console.log("this.avg", this.avg)
            console.log("this.customersperhour()", this.customersperhour())
            let cookies = Math.ceil(this.avg * this.customersperhour())
            this.cookiesperhour.push(cookies)
        }
        return this.cookiesperhour 
    }

}
// call paris function
paris.getcookies();

let lima = {
    min:2,
    max:16,
    avg:4.6,
    hoursofoperation:["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersperhour: function() {
        return getRandom(this.max, this.min)
    },
    cookiesperhour:[],
    getcookies: function() {
        for (i = 0; i < this.hoursofoperation.length; i++ ) {
            console.log("this.avg", this.avg)
            console.log("this.customersperhour()", this.customersperhour())
            let cookies = Math.ceil(this.avg * this.customersperhour())
            this.cookiesperhour.push(cookies)
        }
        return this.cookiesperhour 
    }

}
// call lima function
lima.getcookies();
let hoursArray = document.querySelector('.output')
for (let i = 0; i < seattle.hoursofoperation.length; i++){
    let variable = document.createElement("li");
    variable.innerHTML = `${seattle.hoursofoperation[i]}: ${seattle.cookiesperhour[i]} cookies | ${tokyo.hoursofoperation[i]}: ${tokyo.cookiesperhour[i]} cookies | ${dubai.hoursofoperation[i]}: ${dubai.cookiesperhour[i]} cookies | ${paris.hoursofoperation[i]}: ${paris.cookiesperhour[i]} cookies | ${lima.hoursofoperation[i]}: ${lima.cookiesperhour[i]} cookies`;
    hoursArray.append(variable);
}