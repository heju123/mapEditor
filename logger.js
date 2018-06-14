var path = require('path');
var fileStreamRotator = require('file-stream-rotator')

// schedule handlers
var scheduleLogfile = fileStreamRotator.getStream({
    date_format: "YYYY",
    filename: path.join(path.join(__dirname, 'logs/schedule'), 'schedule-%DATE%.log'),
    frequency:"custom",
    verbose: false,
    max_logs: '730d'
});

// error handlers
var errorLogfile = fileStreamRotator.getStream({
    date_format: 'YYYY-MM',
    filename: path.join(path.join(__dirname, 'logs/error'), 'error-%DATE%.log'),
    frequency: 'custom',
    verbose: false,
    max_logs: '365d'
});

function writeLog2File(logFile, msg, req, res){
    var now = new Date();
    var time = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' '
        + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    var meta = '[' + time + '] ';
    if (req)
    {
        meta += req.method+' ' + req.url + '\r\n';
    }
    else
    {
        meta += '\r\n';
    }
    logFile.write(meta + msg + '\r\n\r\n');
}

var logger = {
    schedule : (msg)=>{
        writeLog2File(scheduleLogfile, msg);
    },
    error : (err, req, res)=>{
        writeLog2File(errorLogfile, err.stack, req, res);
    }
};
module.exports = logger;