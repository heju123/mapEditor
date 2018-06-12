var express = require('express');
var router = express.Router();
var fs = require('fs');
var config = require('../config.js');
var path = require("path");

let writeFile = function(mapName, mapData){
    // 打开文件
    fs.open(config.mapSaveDir+'/'+mapName+'.map', `w`, function(err, fd) {
        if (err) {
            throw err;
        }

        fs.writeFile(config.mapSaveDir+'/'+mapName+'.map', mapData, function (err) {
            if (err) {
                throw err;
            }
            fs.close(fd);
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
        writeFile(mapName, saveData);
    });

    res.send({
        code : 200
    });
});

router.get('/getMapList', function(req, res) {
    fs.readdir(config.mapSaveDir,function(err, files){
        if(!files)
            return;
        res.send({
            code : 200,
            list : files
        });
    });
});

router.get('/getMapDetail', function(req, res) {
    let fileName = req.query.fileName;
    readFile(fileName).then(function(data){
        res.send({
            code : 200,
            detail : data
        });
    }, function(err){
        console.log(err);
    });
});

module.exports = router;
