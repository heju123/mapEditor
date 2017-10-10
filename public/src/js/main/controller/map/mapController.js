export default class MapController extends window.Monk.Controller {
    constructor(component, data) {
        super(component);

        this.width = data.width;
        this.height = data.height;
        this.size = data.size;

        this.initMapData();

        this.component.setStyle({
            width : this.width * this.size,
            height : this.height * this.size
        });

        this.component.registerEvent("mouseup", (e)=>{
            if (e.button === 2)//右键点击
            {
                //鼠标相对于面板的x,y值
                let mx = e.pageX - this.component.getRealX();
                let my = e.pageY - this.component.getRealY();

                let x = Math.floor(mx / this.size);
                let y = Math.floor(my / this.size);
                this.setMapData(x, y, -1);
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
                this.mapData[i][j] = 0;
            }
        }
    }

    //设置指定位置的地图数据
    setMapData(x, y, value){
        this.mapData[x][y] = value;
    }

    draw(ctx)
    {
        //绘制地图方格
        ctx.lineWidth = 1;
        ctx.strokeStyle="#6a6a6a";
        ctx.fillStyle="#000000";
        for (let x = 0; x <= this.width; x++)
        {
            ctx.moveTo(this.component.getRealX(), this.component.getRealY() + (x * this.size));
            ctx.lineTo(this.component.getRealX() + this.component.getWidth(), this.component.getRealY() + (x * this.size));

            for (let y = 0; y <= this.height; y++)
            {
                ctx.moveTo(this.component.getRealX() + (y * this.size), this.component.getRealY());
                ctx.lineTo(this.component.getRealX() + (y * this.size), this.component.getRealY() + this.component.getHeight());

                //绘制障碍物
                if (this.mapData && this.mapData[x] && this.mapData[x][y] !== 0
                    && x < this.width && y < this.height)
                {
                    ctx.rect(this.component.getRealX() + (x * this.size), this.component.getRealY() + (y * this.size),
                        this.size, this.size);
                    ctx.fill();
                }
            }
        }
        ctx.stroke();
    }
}