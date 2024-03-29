const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Hard";

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
game.party.push(pokemon[3]);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(pokemon[148], pokemon[8], pokemon[75]);

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/
game.party.sort((a, b)=> a.hp - b.hp); //sort() rearranges value of interest in ascending order and need to use proper notation to include with the a and b parameters within the compare function
game.party.reverse(); //simply reverses the order of the array 

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/
game.gyms.forEach((gym)=> { //Assigning a variable to elements of array helps accessing key-value pairs - facilitated by iterating over the array via forEach()
    if(gym.difficulty < 3) { //Conditional to select those values small than 3
        return gym.completed = true; //Output the change of value for the property "completed" 
    }
 });

 /*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/
game.party.forEach((starter)=> { 
    if(starter.name === "Charmander") { //conditional statement to identify our starter pokemon within the array 
        return game.party[3] = pokemon[4];  //return expression is the method to edit/replace an element of an array
    }
 });

/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/
const partyList = game.party.map((myPokemon)=> { //Use of map() method to pass a function to each element - extracting and printing their name out in a single array
                        return myPokemon.name
                    });
console.log(partyList);

/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/
for(let main of pokemon){ //Use of for...of loop to iterate over array - assigned variable main to each element to access the ke-value pair and use it for if statement 
    if(main.starter === true){
        console.log(main);
    }
}
  
/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/
// game.catchPokemon = function(pokemonObj){ //Function with parameter pokemonObj added to game object with property of catchPokemon in order to create an object method
//     game.party.push(pokemonObj); //Action we want to happen when object method is invoked - whenever we catch a pokemon it will be added to our party of other pokemon (located in the game.party array)
// }
// game.catchPokemon(pokemon[149]); //I want MewTwo

/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/
game.catchPokemon = function(pokemonObj){ 
    game.party.push(pokemonObj);
    let count = game.items[1].quantity //Declare variable to hold numerical value of current pokeball quantity
    game.items[1].quantity = count - 1; //Expression to change the numerical value of pokeball quantity (subtracting -1) after pokemon is caught
}
game.catchPokemon(pokemon[149]);
//console.log(game.items);

/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/
game.gyms.forEach((gym)=> { 
    if(gym.difficulty < 6) { 
        return gym.completed = true; 
    }
 });

/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/
game.gymStatus = function(){

}
const gymTally = { //Tried having this object inside the for...of loop, but it would only record one of each (since variables in conditions are not set up to update after each iteration)
    completed: 0,
    incomplete: 0
}
// for(let x of game.gyms){ //Used variable x to keep it simple while using for...of loop 
//     if(x.completed === true){ 
//         gymTally.completed += 1; 
//     } else { //Need an ...else statement because if gym completion is !==true, I want to make sure to "tally" it into the incomplete property
//         gymTally.incomplete += 1;
//     }
// }
//console.log(gymTally); //Prints {completed: 5, incomplete: 3} since up to this point in the game we have 5 true and 3 false (based on difficulty)

/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/
game.partyCount = function(){
    for(let i=0; i<game.party.length; i++){
        game.party[i];
        return game.party.length;
    }
}  
console.log(game.partyCount());
/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/
// game.gyms.forEach((gym)=> { 
//     if(gym.difficulty < 8) { 
//         return gym.completed = true; 
//     }
//  });
 for(let y of game.gyms){ //Using for...of loop this time instead of forEach() - DRY 
    if(y.difficulty < 8){
        y.completed = true;
        gymTally.completed += 1; 
    } else { //Updated gymTally to display the current number of completed and incompleted gyms
        gymTally.incomplete += 1;
    }
 }
 console.log(gymTally); 
/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/
console.log(game);
//console.dir(pokemon, { maxArrayLength: null })
