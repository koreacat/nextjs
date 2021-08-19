import styles from './wave.module.scss';
import classnames from 'classnames/bind';
import { useEffect, useRef } from 'react';

const cx = classnames.bind(styles);

class Point {
    x;
    y;
    fixedY;
    speed;
    cur;
    max;

    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = index;
        this.max = Math.random() * 100 + 150;
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}

class Wave {
    index;
    totalPoints;
    color;
    points: Array<Point>;
    wrapWidth;
    wrapHeight;
    centerX;
    centerY;
    pointGap;

    constructor(index, totalPoints, color, wrapWidth, wrapHeight) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
        this.wrapWidth = wrapWidth;
        this.wrapHeight = wrapHeight;
    }

    resize(wrapWidth, wrapHeight) {
        this.wrapWidth = wrapWidth;
        this.wrapHeight = wrapHeight;
        this.centerX = wrapWidth / 2;
        this.centerY = wrapHeight / 2;
        this.pointGap = this.wrapWidth / (this.totalPoints - 1);
        this.init();
    }

    init() {
        this.points = [];

        for(let i = 0; i < this.totalPoints; i++) {
            const point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY,
            )
            this.points[i] = point;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath;
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;
        
        ctx.moveTo(prevX, prevY);

        for(let i = 1; i < this.totalPoints; i++) {
            if(i < this.totalPoints - 1) {
                let point = this.points[i];
                point.update();
            }

            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.wrapWidth, this.wrapHeight);
        ctx.lineTo(this.points[0].x, this.wrapHeight);
        ctx.fill();
        ctx.closePath();
    }

}

class WaveGroup {
    totalWaves;
    totalPoints;
    color;
    waves: Array<Wave>;
    wrapWidth;
    wrapHeight;

    constructor(wrapWidth, wrapHeight) {
        this.totalWaves = 3;
        this.totalPoints = 6;
        this.color = ['rgba(0, 199, 235, 0.4)', 'rgba(0, 146, 199, 0.4)', 'rgba(200, 187, 158, 0.4)'];
        this.waves = [];
        this.wrapWidth = wrapWidth;
        this.wrapHeight = wrapHeight;

        for(let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(i, this.totalPoints, this.color[i], wrapWidth, wrapHeight);
            this.waves[i] = wave;
        }
    }

    resize(wrapWidth, wrapHeight) {
        for(let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(wrapWidth, wrapHeight);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        for(let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}

const WaveCanvas = () => {
    let wrapEl = useRef<HTMLDivElement>(null);
    let canvasEl = useRef<HTMLCanvasElement>(null);
    let wrapWidth = 0;
    let wrapHeight = 0;
    let ctx: CanvasRenderingContext2D = null;
    let waveGroup: WaveGroup = null;

    useEffect(() => {
        ctx = canvasEl.current.getContext('2d');
        wrapWidth = wrapEl.current.clientWidth;
        wrapHeight = wrapEl.current.clientHeight;

        waveGroup = new WaveGroup(wrapWidth, wrapHeight);
        window.addEventListener('resize', resize, false);
        resize();
        let animationFrame = requestAnimationFrame(animate);

        return (() => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrame);
        })
    }, [wrapEl, canvasEl]);

    const resize = () => {
        wrapWidth = wrapEl.current.clientWidth;
        wrapHeight = wrapEl.current.clientHeight;
        canvasEl.current.width = wrapWidth;
        canvasEl.current.height = wrapHeight;
        waveGroup.resize(wrapWidth, wrapHeight);
    }

    const animate = () => {
        // ctx.clearRect(0, 0, wrapWidth, wrapHeight);
        ctx.canvas.width = ctx.canvas.width;
        waveGroup.draw(ctx);
        requestAnimationFrame(animate);
    }

    return (
        <div ref={wrapEl} className={cx('wrap')}>
            <canvas ref={canvasEl}/>
        </div>
    )
}

export default WaveCanvas;