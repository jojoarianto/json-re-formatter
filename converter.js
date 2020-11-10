
function convertJson(dataJson) {
    var result = {};

    for (var key in dataJson) {
        var userId = dataJson[key].user_id;
        if (!userId) {
            result[key] = dataJson[key];
        } else {
            result[userId] = dataJson[key];
        }
    }

    return result;
}

module.exports = convertJson;
