/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global scope - When "this" is not pointing to anything created or rests in a fuction that is pointed in the global scope it will console log whatever is the browsers window or object.
* 2. Implicit Binding - Most common use of this, refers to when this is when you call this inside of an object or inside of a constructior that takes in an object as the argument.  
* 3. New binding - This  is when this is activated by the new keyword, when you type the new keyword it searches for a matching constructor function for the word that follows right after it, inside 
     - the constructor function all the this keywords are activated when the object is created,
* 4. Explicit binding - When we give context to this by sing .call or .apply methods
*
* write out a code example of each explanation above */


// Principle 1

// code example for Window Binding

function windowBinding (data){
    console.log(this);
    return data;
}

windowBinding();

// Principle 2

const implicitBinding = {
    name: 'new',
    method: function (){
        console.log(`${this.name} implicit binding example`);
        console.log(this);
    }
};

implicitBinding.method();

// code example for Implicit Binding

// Principle 3

// code example for New Binding

function newBinding (bindMe){
    this.example = 'check me';
    this.bind = bindMe;
    this.talk = function (){
        console.log (`${this.example} ${this.bind} bra`);
        console.log(this);
    };
}

const example = new newBinding('this is new binding')
example.talk();

// Principle 4

// code example for Explicit Binding

const explicitBinding = {
    name: 'Yankho',
    city: 'Atlanta',
    favoriteJob: 'Google'
}

function whoAmI(data){
    console.log(`Hey i am a 22 year old guy named ${this.name} living in ${this.city} my dream job ${this.favoriteJob} ${data} `)
}

whoAmI.call(explicitBinding, 'deal with it');

whoAmI.apply(explicitBinding, ['deal with it']);

