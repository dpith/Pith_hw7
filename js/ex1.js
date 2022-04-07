/* Homework 7
   Example 1 JavaScript code
*/

// Character list. Each house has a name and a code
const houses = [
   {
     code: "ST",
     name: "Stark"
   },
   {
     code: "LA",
     name: "Lannister"
   },
   {
     code: "BA",
     name: "Baratheon"
   },
   {
     code: "TA",
     name: "Targaryen"
   }
 ];
 
// Return an array of characters belonging to a house
const getCharacters = houseCode => {
switch (houseCode) {
   case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
   case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
   case "BA":
      return ["Robert", "Stannis", "Renly"];
   case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
   default:
      return []; // Empty array
}
};

// Create HTML option tag
const createOptElem = (text, value) => {
   const element = document.createElement("option");
   element.textContent = text;
   element.value = value;
   return element; // Return <option> tag
};

// Create HTML list tag
const createLiElem = text => {
   const element = document.createElement("li");
   element.textContent = text;
   return element; // Return <list> tag
};

const houseElem = document.querySelector("select");

// Fill house list
houses.forEach(house => {
   houseElem.appendChild(createOptElem(house.name, house.code));
});

// Handle house change event
houseElem.addEventListener("change", e => {
   // House code is the event target value
   const characters = getCharacters(e.target.value);
   const characterElem = document.getElementById("characters");
   // Empty list
   characterElem.innerHTML = "";
   // Add each character to list
   characters.forEach(character => {
      characterElem.appendChild(createLiElem(character));
   });
});