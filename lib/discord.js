const requestJson = require('request-json');

const logSystem = 'discord';
require('./exceptionWriter.js')(logSystem);

exports.poolBotMsg = function(message) {
    let uri = "https://discordapp.com/";
    let path = "api/webhooks/820222399261048862/7_SxEFvhrXL_UAnVOwER_dIyLItBMXdPmSnOukOO-oslNNAEJUJK3o6NZEpSIMHoQRi0";
    let client = requestJson.createClient(uri, {timeout: 300000});
    client.headers["Content-Type"] = "application/json";
    client.headers["Accept"] = "application/json";
    client.post(path, { content: message }, function (err, res, body) {
        if (err) {
            log('error', logSystem, 'Discord message sent to %s: %s', [message]);
            console.error("Pool Bot failed to message Discord, Response: " + message + " Response: " + JSON.stringify(body));
        }
        log('info', logSystem, 'Discord message sent to %s: %s', [message]);
        console.log("Pool Bot messaged Discord: " + message);
    });
}