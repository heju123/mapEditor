var express = require('express');
var router = express.Router();
var fs = require('fs');
var config = require('../config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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

router.post('/saveMap', function(req, res) {
    let mapName = req.body.mapName;
    let mapData = req.body.mapData;

    let exist = fs.existsSync(config.mapSaveDir);
    if (!exist)
    {
        fs.mkdir(config.mapSaveDir, function(err) {
            if (err) {
                throw err;
            }
            writeFile(mapName, mapData);
        });
    }
    else
    {
        writeFile(mapName, mapData);
    }

    res.send({
        code : 200
    });
});

router.get('/mapList', function(req, res) {
    res.send({
        code : 200,
        list : [{aaa : 111}]
    });
});

module.exports = router;
