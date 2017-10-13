export default class MapController extends window.monk.Controller {
    constructor(component, data) {
        super(component);

        this.width = parseInt(data.width, 10);
        this.height = parseInt(data.height, 10);
        this.size = parseInt(data.size, 10);

        this.startCoors = undefined;//多选开始坐标
        this.endCoors = undefined;//多选结束坐标
        this.selectedCoors = undefined;//选中的坐标集合
        this.terrain = undefined;//当前指定的地形
        this.isSetTerrain = false;//是否正在设置地形

        this.initMapData();

        this.component.setStyle({
            width : this.width * this.size,
            height : this.height * this.size
        });

        this.component.registerEvent("mousedown", (e)=>{
            if (e.button === 2)//右键点击
            {
                //鼠标相对于面板的x,y值
                let mx = e.pageX - this.component.getRealX();
                let my = e.pageY - this.component.getRealY();

                let x = Math.floor(mx / this.size);
                let y = Math.floor(my / this.size);
                this.startCoors = {x : x, y : y};
            }
        });
        this.component.registerEvent("mousemove", (e)=>{
            if (this.startCoors)
            {
                //鼠标相对于面板的x,y值
                let mx = e.pageX - this.component.getRealX();
                let my = e.pageY - this.component.getRealY();

                let x = Math.floor(mx / this.size);
                let y = Math.floor(my / this.size);

                this.endCoors = {x : x, y : y};
            }
        });
        this.component.registerEvent("mouseup", (e)=>{
            if (e.button === 2)//右键点击
            {
                if (this.startCoors && this.endCoors)//批量设置
                {
                    let minX = Math.min(this.startCoors.x, this.endCoors.x);
                    let maxX = Math.max(this.startCoors.x, this.endCoors.x);
                    let minY = Math.min(this.startCoors.y, this.endCoors.y);
                    let maxY = Math.max(this.startCoors.y, this.endCoors.y);
                    if (this.isSetTerrain)
                    {
                        this.setMapDataBatch(minX, maxX, minY, maxY, "terrain", this.terrain);
                    }
                    else
                    {
                        this.setMapDataBatch(minX, maxX, minY, maxY, "block", !this.mapData[minX][minY].block);
                    }

                    this.selectedCoors = {
                        minX : minX,
                        maxX : maxX,
                        minY : minY,
                        maxY : maxY
                    };
                }
                else
                {
                    //鼠标相对于面板的x,y值
                    let mx = e.pageX - this.component.getRealX();
                    let my = e.pageY - this.component.getRealY();

                    let x = Math.floor(mx / this.size);
                    let y = Math.floor(my / this.size);
                    if (this.isSetTerrain)
                    {
                        this.setMapData(x, y, "terrain", this.terrain);
                    }
                    else
                    {
                        this.setMapData(x, y, "block", !this.mapData[x][y].block);
                    }

                    this.selectedCoors = {
                        x : x,
                        y : y
                    };
                }
                this.startCoors = undefined;
                this.endCoors = undefined;
            }
        });
    }

    //初始化地图数据
    initMapData(){
        this.mapData = [];
        for (let i = 0; i < this.width; i++)
        {
            this.mapData[i] = [];
            for (let j = 0; j < this.height; j++)
            {
                this.mapData[i][j] = {
                    block : false,//是否障碍物
                    terrain : 0//地形：无
                };
            }
        }
    }

    //设置指定位置的地图数据
    setMapData(x, y, key, value){
        this.mapData[x][y][key] = value;
    }
    //批量设置指定位置的地图数据
    setMapDataBatch(minX, maxX, minY, maxY, key, value){
        for (let x = minX; x <= maxX; x++)
        {
            for (let y = minY; y <= maxY; y++)
            {
                this.setMapData(x, y, key, value);
            }
        }
    }

    draw(ctx)
    {
        //绘制地图方格
        ctx.lineWidth = 1;
        ctx.strokeStyle="#6a6a6a";
        ctx.globalAlpha=1;

        for (let x = 0; x <= this.width; x++)
        {
            for (let y = 0; y <= this.height; y++)
            {
                //绘制障碍物
                ctx.beginPath();
                ctx.fillStyle="#000000";
                if (this.mapData && this.mapData[x] && this.mapData[x][y] && this.mapData[x][y].block
                    && x < this.width && y < this.height)
                {
                    ctx.rect(this.component.getRealX() + (x * this.size), this.component.getRealY() + (y * this.size),
                        this.size, this.size);
                    ctx.fill();
                }
                ctx.closePath();

                //绘制地形
                ctx.beginPath();
                if (this.mapData && this.mapData[x] && this.mapData[x][y] && this.mapData[x][y].terrain
                    && this.mapData[x][y].terrain !== "0")
                {
                    let FONT_SIZE = 15;
                    ctx.font = FONT_SIZE + "px Microsoft YaHei";
                    ctx.fillStyle = "#ff0000";
                    ctx.textBaseline="hanging";
                    ctx.fillText(this.mapData[x][y].terrain,
                        this.component.getRealX() + (x * this.size),
                        this.component.getRealY() + (y * this.size) + (this.size / 2 - FONT_SIZE / 2));
                }
                ctx.closePath();
            }
        }

        //画线
        ctx.beginPath();
        for (let x = 0; x <= this.width; x++)
        {
            for (let y = 0; y <= this.height; y++)
            {
                ctx.moveTo(this.component.getRealX(), this.component.getRealY() + (x * this.size));
                ctx.lineTo(this.component.getRealX() + this.component.getWidth(), this.component.getRealY() + (x * this.size));
                ctx.moveTo(this.component.getRealX() + (y * this.size), this.component.getRealY());
                ctx.lineTo(this.component.getRealX() + (y * this.size), this.component.getRealY() + this.component.getHeight());
            }
        }
        ctx.stroke();
        ctx.closePath();


        //绘制多选区域
        if (this.startCoors && this.endCoors)
        {
            ctx.beginPath();
            ctx.fillStyle="#337ab7";
            ctx.globalAlpha=0.6;
            let minX = Math.min(this.startCoors.x, this.endCoors.x);
            let maxX = Math.max(this.startCoors.x, this.endCoors.x);
            let minY = Math.min(this.startCoors.y, this.endCoors.y);
            let maxY = Math.max(this.startCoors.y, this.endCoors.y);
            ctx.rect(this.component.getRealX() + (minX * this.size), this.component.getRealY() + (minY * this.size),
                (maxX * this.size) - (minX * this.size) + this.size, (maxY * this.size) - (minY * this.size) + this.size);
            ctx.fill();
            ctx.closePath();
        }
    }
}