import zero from '../assets/wi-day-sunny.svg'
import two from '../assets/wi-day-cloudy.svg'
import three from '../assets/wi-day-sunny-overcast.svg'
import fourtyFive from '../assets/wi-fog.svg'
import drizzle from '../assets/wi-showers.svg'
import sixtyOne from '../assets/wi-sprinkle.svg'
import rain from '../assets/wi-rain.svg'
import snow from '../assets/wi-snow.svg'
import rainMix from '../assets/wi-rain-mix.svg'
import thunderStrom from '../assets/wi-storm-showers.svg'

const weatherCodeImageMap = {
    0: zero,
    1 : zero,
    2 : two,
    3 : three,
    45 : fourtyFive ,
    48: fourtyFive,
    51 : drizzle,
    53 :drizzle,
    55 : drizzle,
    56 :drizzle,
    57: drizzle,
    61 :sixtyOne ,
    63 : rain,
    65 : rain,
    66 : rain ,
    67 : rain,
    71 : snow,
    73 : snow,
    75 : snow,
    77 : snow,
    80 : rainMix,
    81 : rainMix,
    82 : rainMix,
    85 : snow,
    86 : snow,
    95 : thunderStrom,
    96 : thunderStrom,
}

const getImageByKey = (key) => {
    return weatherCodeImageMap[key]
}

export default getImageByKey