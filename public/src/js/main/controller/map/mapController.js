export default class MapController extends window.Monk.Controller {
    constructor(component, data) {
        super(component);

        this.width = data.width;
        this.height = data.height;
        this.size = data.size;

        this.component.setStyle({
            width : this.width * this.size,
            height : this.height * this.size
        });
    }

    draw(ctx)
    {
        ctx.lineWidth = 1;
        ctx.fillStyle="#000";
        for (let i = 0; i <= this.width; i++)
        {
            ctx.moveTo(this.component.getRealX(), this.component.getRealY() + (i * this.size));
            ctx.lineTo(this.component.getRealX() + this.component.getWidth(), this.component.getRealY() + (i * this.size));
        }
        ctx.stroke();
    }
}