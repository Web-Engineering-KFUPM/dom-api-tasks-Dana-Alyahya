/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".


✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("t1-msg").innerHTML = "Hello, World!";
});



/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

    

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/



document.addEventListener("DOMContentLoaded", function () {
const button2 = document.getElementById("t2-btn");
  button2.addEventListener("click", function () {
    document.getElementById("t2-status").innerHTML = "You clicked the button!";
  });
 });

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/


document.addEventListener("DOMContentLoaded", function () {
const loadQuoteBtn = document.getElementById("t3-loadQuote");
const quoteEl = document.getElementById("t3-quote");
const authorEl = document.getElementById("t3-author");

loadQuoteBtn.addEventListener("click", async () => {
  try {
    // Fetch random quote from API
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();

    quoteEl.textContent = `"${data.quote}"`;   
    authorEl.textContent = ` ${data.author}`;
  } catch (err) {
    console.error("Error fetching quote:", err);
    quoteEl.textContent = "Oops! Could not load a quote.";
    authorEl.textContent = "";
  }
});
});
 

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/
// ============================
// TODO4: Dammam Weather Now
// ============================

document.addEventListener("DOMContentLoaded", function () {
const loadWxBtn = document.getElementById("t4-loadWx");
const tempEl = document.getElementById("t4-temp");
const humEl = document.getElementById("t4-hum");
const windEl = document.getElementById("t4-wind");
const errEl = document.getElementById("t4-err");


loadWxBtn.addEventListener("click", async () => {
  try {
    
    const apiKey = "d51f2f00c3b137ccfd135bd8f9dd50aa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=${apiKey}&units=metric`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch weather");
    const data = await res.json();

    // Update UI
    tempEl.textContent = `${data.main.temp} °C`;
    humEl.textContent = `${data.main.humidity} %`;
    windEl.textContent = `${data.wind.speed} m/s`;
    errEl.textContent = ""; // clear errors
  } catch (err) {
    console.error("Weather fetch error:", err);
    errEl.textContent = "⚠️ Could not load weather data.";
    tempEl.textContent = "—";
    humEl.textContent = "—";
    windEl.textContent = "—";
  }
 });
});
