var express = require('express');
var router = express.Router();
var fs = require('fs');
var config = require('../config.js');
var path = require("path");

let writeFile = function(mapName, mapData){
    return new Promise((resolve, reject)=>{
        // 打开文件
        fs.open(config.mapSaveDir+'/'+mapName+'.map', `w`, function(err, fd) {
            if (err) {
                reject(err);
            }

            fs.writeFile(config.mapSaveDir+'/'+mapName+'.map', mapData, function (err) {
                if (err) {
                    reject(err);
                }
                fs.close(fd);
                resolve();
            });
        });
    });
};

let readFile = function(mapName){
    return new Promise(function(resolve, reject){
        fs.readFile(config.mapSaveDir+'/'+mapName, 'utf-8', function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
};

// 递归创建目录 异步方法
function mkdirs(dirname, callback) {
    fs.exists(dirname, function (exists) {
        if (exists) {
            callback();
        } else {
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
            });
        }
    });
}

router.post('/saveMap', function(req, res) {
    let mapName = req.body.mapName;
    let width = req.body.width;
    let height = req.body.height;
    let size = req.body.size;
    let mapData = req.body.mapData;

    let saveData = {
        mapName : mapName,
        width : width,
        height : height,
        size : size,
        mapData : mapData
    };
    saveData = JSON.stringify(saveData);

    mkdirs(config.mapSaveDir, function(){
        writeFile(mapName, saveData).then(()=>{
            res.send({
                success : true
            });
        }, (err)=>{
            res.send({
                success : false,
                message : err
            });
        });
    });
});

var getMapList = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readdir(config.mapSaveDir,function(err, files){
            if(!files)
            {
                reject();
            }
            resolve(files);
        });
    });
};

router.get('/getMapList', function(req, res) {
    getMapList().then((files)=>{
        res.send({
            success : true,
            list : files
        });
    });
});

router.get('/getMapDetail', function(req, res) {
    let fileName = req.query.fileName;
    readFile(fileName).then(function(data){
        res.send({
            success : true,
            detail : data
        });
    }, function(err){
        res.send({
            success : false,
            message : err
        });
    });
});

router.get('/download', function(req, res) {
    let mapName = req.query.mapName;

    var readStream = fs.createReadStream(config.mapSaveDir + "/" + mapName);
    res.writeHead(200, {
        'Content-Type': 'application/force-download',
        'Content-Disposition': 'attachment; filename=' + mapName
    });
    readStream.pipe(res);
});

router.post('/delete', function(req, res) {
    let mapName = req.body.mapName;
    let filePath = config.mapSaveDir + "/" + mapName;

    if (fs.existsSync(filePath))
    {
        fs.unlinkSync(filePath);
        res.send({
            success : true
        });
    }
    else
    {
        res.send({
            success : false,
            message : "文件不存在！"
        });
    }
});

module.exports = router;
