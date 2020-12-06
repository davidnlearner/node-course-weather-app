const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=25c5de34e7261871da9b2748f0e123bf&query='+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.  Humidity is ' + body.current.humidity + '%.' )
        }
    })
}

module.exports = forecast