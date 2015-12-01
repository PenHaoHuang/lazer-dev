import DegToRad from 'math/DegToRad.js';
import Canvas from 'canvas/Canvas.js';
import AddToDOM from 'dom/AddToDOM.js';
import BackgroundColor from 'canvas/BackgroundColor.js';
import Line from 'canvas/graphics/LineStyle.js';
import FillGradient from 'canvas/graphics/FillGradient.js';
import Stroke from 'canvas/graphics/Stroke.js';
import Rectangle from 'canvas/graphics/Rectangle.js';
import RadialGradient, { addColor } from 'canvas/graphics/RadialGradient.js';

export default class CanvasGraphics {

    constructor () {

        this.canvas = Canvas(512, 512);

        BackgroundColor(this.canvas, 'rgb(0, 0, 20)');

        AddToDOM(this.canvas, 'game');

        this.ctx = this.canvas.getContext('2d');

        //  method 1
        let p = RadialGradient(this.ctx, 256, 256, 300, 256, 256, 50);
        addColor(p, 0, '#ff0000');
        addColor(p, 0.5, '#ffff00');
        addColor(p, 1, '#ff00ff');

        //  method 2
        // let p = RadialGradient(this.ctx, 256, 256, 300, 256, 256, 50, 0, '#ff0000', 0.5, '#00ff00', 1, '#0000ff');

        //  method 3
        // let p = RadialGradient(this.ctx, 256, 256, 300, 256, 256, 50, [ 0, '#ff00f0', 0.5, '#05fff0', 1, '#8000ff' ]);

        Line(this.ctx, 2);

        Rectangle(this.ctx, 0, 0, 512, 512);

        FillGradient(this.ctx, p);

    }

}

new CanvasGraphics();
