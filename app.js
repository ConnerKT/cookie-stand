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
            console.log("this.avg", this.avg)
            console.log("this.customersperhour()", this.customersperhour())
            let cookies = Math.ceil(this.avg * this.customersperhour())
            this.cookiesperhour.push(cookies)
        }
        return this.cookiesperhour
    }
    
}
let tokyo = {
    min:3,
    max:24,
    avg:1.2,
    //cookies: customers * tokyo.avg,
}
let dubai = {
    min:11,
    max:38,
    avg:3.7,
    //cookies: customers * dubai.avg,
}
let paris = {
    min:20,
    max:38,
    avg:2.3,
    //cookies: customers * paris.avg,
}
let lima = {
    min:2,
    max:16,
    avg:4.6,
    //cookies: customers * lima.avg,
}

