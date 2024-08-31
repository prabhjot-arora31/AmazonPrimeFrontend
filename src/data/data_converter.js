import fs from "fs";

// Function to fetch data and save it as a JSON file
const convertAndStore = async () => {
  try {
    const url =
      "https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/search?query=Despicable%20Me%204";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "795de0f3e6msh39da50d845ab6bdp195286jsnbecd558d66dd",
        "x-rapidapi-host": "advance-movie-api.p.rapidapi.com",
        "X-RapidAPI-Proxy-Secret": "4d633e10-2ff4-11ef-a338-672c018612df",
      },
    };
    const response = await fetch(url, options); // Replace with your API endpoint
    const jsonResponse = await response.json(); // Convert the response to JSON

    // Define the file path where the JSON will be stored
    const filePath = "romance2.json";

    // Write the JSON data to the file
    fs.writeFile(filePath, JSON.stringify(jsonResponse, null, 2), (err) => {
      if (err) {
        console.error("Error writing to JSON file", err);
      } else {
        console.log("JSON file has been saved.");
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the function to execute the process
convertAndStore();
