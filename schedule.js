var fs = require('fs');
var config = require('./config.js');
var schedule = require('node-schedule');
var logger = require('./logger');

schedule.scheduleJob({hour: 2, minute: 30, dayOfWeek: 4}, function(fireDate){
    //清理临时文件夹
    let tmp_exists = fs.existsSync(config.tempDir);
    if(tmp_exists)
    {
        let dirList = fs.readdirSync(config.tempDir);
        let filesCount = 0;
        dirList.forEach(function(fileName) {
            fs.unlinkSync(config.tempDir + "/" + fileName);
            filesCount++;
        });
        logger.schedule('empty temp directory：'+filesCount+' files has been removed');
    }
});