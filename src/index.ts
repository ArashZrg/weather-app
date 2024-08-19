// Selecting Elements

const cloudIconEl = document.querySelector('.weather-status')


class Weather {
    constructor() {
        this.updateDom('بهبهان')
    }

    async fetchData(cityName: string) {
        try {
            const request = await fetch(`https://api.weatherapi.com/v1/current.json?q=${cityName}&key=123e5e3204114b2d8a9110320241908`)
            const response = await request.json()
            return response
        } catch (error) {
            console.log('something went wrong:', error)
        }
    }

    async updateDom(cityName: string) {
        const data = await this.fetchData(cityName)
        console.log(data)
        // create elements and put data
        const img = document.createElement('img')
        img?.setAttribute('src', "//cdn.weatherapi.com/weather/64x64/day/113.png")
    }

}

const app = new Weather()

// fetch('https://api.weatherapi.com/v1/current.json?q=tehran&key=123e5e3204114b2d8a9110320241908')
//     .then(res => res.json()).then(data => console.log(data))