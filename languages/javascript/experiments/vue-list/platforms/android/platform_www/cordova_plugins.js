cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-logtofile.logtofile",
        "file": "plugins/cordova-plugin-logtofile/www/logtofile.js",
        "pluginId": "cordova-plugin-logtofile",
        "clobbers": [
            "logToFile"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-logtofile": "1.1.2",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});