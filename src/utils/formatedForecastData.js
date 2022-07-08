const formattedForecastData = (weatherData) => {

    const days = weatherData.time;
    let FormatedWeatherData = []

    days.forEach((day, i) => {
        FormatedWeatherData.push({
            day: day,
            maxTemp: weatherData.temperature_2m_max[i],
            weatherCode: weatherData.weathercode[i],
            minTemp: weatherData.temperature_2m_min[i],
            aprMaxTemp: weatherData.apparent_temperature_max[i],
            aprMinTemp: weatherData.apparent_temperature_min[i]
        })
    })

    return FormatedWeatherData

}

export default formattedForecastData;