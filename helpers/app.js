const analyzeTasks = (str) => {
    // ouput object to store processed/parsed data from input
    let outputObject = {
        users: {}
    };
    let input = str.split("\n");

    let numberOfUsers = input[0];

    let userAndCountry = input.map(u => u.match(/\d\s[A-Z][A-Z]/));

    // get users and their countrys' from output and insert object into outputObject
    for (const x of userAndCountry) {
        if (x !== null) {
            let usertoCountry = x[0].split(' ');
            let property = parseInt(usertoCountry[0]);
            let country = usertoCountry[1];
            outputObject.users[property] = {
                country: country
            };
        }
    }

    // get lines with tasks id, user id and time in seconds
    let taskandUserandTime = input
        .map(u => u.match(/\d*\s\d*\s\d*/));

    //get number of tasks
    const numOfTasks = taskandUserandTime.reduce((pre, curr) => (curr !== null) ? ++pre : pre, 0);

    let time = new Array();
    let userId;
    let counter = 0;

    // extract tasks id, user id and time in seconds and store in outputObject
    for (const y of taskandUserandTime) {

        if (y !== null) {

            if (parseInt(y[0].split(' ')[1]) !== userId && userId !== undefined && counter !== 0) {
                outputObject.users[property].time = time;
                time = [];
    
            }
            var taskUserTime = y[0].split(' ');
            var property = parseInt(taskUserTime[1]);
            var timeInSeconds = taskUserTime[2];

            time.push(timeInSeconds);
            userId = property;
            counter++;

            if (parseInt(y[0].split(' ')[0]) === numOfTasks) {
                //console.log('hhhh');
                outputObject.users[property].time = time;
                
                time = [];
            }
        }
    }

    // calculate average time of users and add it to the outputObject
    for (const [key, value] of Object.entries(outputObject)) {
        Object.entries(value).forEach((element) => {
            let averageTime = element[1].time.reduce(function (a, b) {
                return (+(parseInt(a)).toFixed(2) + (+(parseInt(b)).toFixed(2))) / parseFloat((element[1].time.length).toFixed(2));
            });
            let averageTimeInDecimal = parseFloat(averageTime).toFixed(2);

            outputObject.users[element[0].toString()].averageTime = averageTimeInDecimal;
        });
    }

    //return outputObject.users;

    let anArray = [];

    for (const [key, value] of Object.entries(outputObject.users)) {
        value.id = key;
        anArray.push(value);
    }

    // sort array in ascending order of averageTime
    const sortedArray = anArray.sort((a, b) => (a.averageTime > b.averageTime) ? 1 : -1);


    let outPutStr = '';

    // output for user and average time in ascending order
    sortedArray.map(m => {
        outPutStr += `${m.id} ${m.averageTime}\n`;
    });

    // output for country and average time in ascending order
    sortedArray.map(m => {
        // don't insert a line break after the last line
        if(sortedArray.indexOf(m) == sortedArray.length -1){
            outPutStr += `${m.country} ${m.averageTime}`;
            return;
        }
        outPutStr += `${m.country} ${m.averageTime}\n`;
    });

    return outPutStr;

};

module.exports = {
    analyzeTasks
};