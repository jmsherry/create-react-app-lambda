import axios from "axios";

export async function handler(event, context) {
  const API_KEY = "f6916935ad851f78c6dbd897f6f52ac7";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${API_KEY}`,
      { headers: { Accept: "application/json" } }
    );
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
