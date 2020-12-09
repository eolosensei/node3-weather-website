const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=02fed49ba8d3e6291103ff7af84bf451&query='+ latitude + ',' + longitude;

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (body.error) {
            callback('Unable to find provided location');
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.' )
        }
    });
};

module.exports = forecast;