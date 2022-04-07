/* Homework 7
   Example 2 JavaScript code
*/

// Country list
const countryList = [
   "Afghanistan",
   "Albania",
   "Algeria",
   "Andorra",
   "Angola",
   "Anguilla",
   "Antarctica",
   "Antigua-and-Barbuda",
   "Argentina",
   "Armenia",
   "Aruba",
   "Australia",
   "Autria",
   "Azerbaïjan"
 ];
 
const countryElem = document.querySelector("input");
const suggestionElem = document.getElementById("suggestions");

// Create suggestion element
const createSuggElem = country => {
   const element = document.createElement("div");
   element.classList.add("suggestion");
   element.textContent = country;
   // Click handler for suggestion
   element.addEventListener("click", e => {
      // Replace input with suggested country
      countryElem.value = e.target.textContent;
      // Empty suggestion list
      suggestionElem.innerHTML = "";
   });
   return element; // Return suggestion element
};

// Handle input change
countryElem.addEventListener("input", () => {
   // Empty suggestion list
   suggestionElem.innerHTML = "";
   countryList.forEach(country => {
      // Check if the inputted value matches the start of the country
      if (country.startsWith(countryElem.value)) {
         // Add the country as suggestion
         suggestionElem.appendChild(createSuggElem(country));
      }
   });
});

