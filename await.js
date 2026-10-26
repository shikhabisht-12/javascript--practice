
async function getWeather(city) {
    try {
        console.log("Fetching weather data...");

        const response = await fetch(
            `http://127.0.0.1:5000/api/weather?city=${encodeURIComponent(city)}`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        console.log("City:", data.city);
        console.log("Country:", data.country);
        console.log("Temperature:", data.temperature + "°C");
        console.log("Condition:", data.condition);
        console.log("Humidity:", data.humidity + "%");
        console.log("Wind Speed:", data.wind_speed + " km/h");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getWeather("Delhi");
