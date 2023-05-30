import { Wheel } from '../AbstractCarParts/Wheel.js';
import { Car } from '../Abstract/Car.js';
import { Socket } from '../Abstract/Car';
import {Empty, RoofRailA, WheelA, WheelB ,WheelC,WheelD,WheelE} from './Parts';
export class CarA extends Car
{
    constructor()
    {
        
        //Test Car is created with sockets and parts
        var socketa = new Socket("Left  Front Wheel",[2,0.3,4.3],null,[0,0,0],"Wheel")
        var socketb = new Socket("Right Front Wheel",[-2,0.3,4.3],null,[0,-9.4,0],"Wheel")
        var socketc = new Socket("Left Back Wheel",[2,0.3,-3.7],null,[0,0,0],"Wheel")
        var socketd = new Socket("Right Back Wheel",[-2,0.3,-3.7],null,[0,-9.4,0],"Wheel")
        var roofrailsocket = new Socket("Right Back Wheel",[0,3.5,0],null,[0.05,0,0],"RoofRail",[1,1,0.6])
        super("/obj/Car2/car2","TestCarIndustries","TestCarA",600,1,[],[socketa,socketb,socketc,socketd,roofrailsocket]);

        var a = new WheelB(this,0)
        var b = new WheelB(this,1)
        var c = new WheelB(this,2)
        var d = new WheelB(this,3)
        var e = new Empty(this,4)
        socketa.swapPart(a);
        socketb.swapPart(b)
        socketc.swapPart(c);
        socketd.swapPart(d);
        roofrailsocket.swapPart(e);
        
    } 
}
export class CarB extends Car
{
    constructor()
    {
        
        //Test Car is created with sockets and parts
        var socketa = new Socket("Left  Front Wheel",[1.7,0.3,3.1],null,[0,0,0],"Wheel")
        var socketb = new Socket("Right Front Wheel",[-1.7,0.3,3.1],null,[0,-9.4,0],"Wheel")
        var socketc = new Socket("Left Back Wheel",[1.7,0.3,-3.1],null,[0,0,0],"Wheel")
        var socketd = new Socket("Right Back Wheel",[-1.7,0.3,-3.1],null,[0,-9.4,0],"Wheel")
    
        
        super("/obj/Car1/car1","TestCarIndustries","TestCarB",600,1,[],[socketa,socketb,socketc,socketd]);

        var a = new WheelA(this,0)
        var b = new WheelA(this,1)
        var c = new WheelA(this,2)
        var d = new WheelA(this,3)
        
        socketa.swapPart(a);
        socketb.swapPart(b)
        socketc.swapPart(c);
        socketd.swapPart(d);
    }  
}
export class CarC extends Car
{
    constructor()
    {
        
        //Test Car is created with sockets and parts
        var socketa = new Socket("Left  Front Wheel",[1.8,0.35,3],null,[0,0,0],"Wheel")
        var socketb = new Socket("Right Front Wheel",[-1.8,0.35,3],null,[0,-9.4,0],"Wheel")
        var socketc = new Socket("Left Back Wheel",[1.8,0.35,-3.2],null,[0,0,0],"Wheel")
        var socketd = new Socket("Right Back Wheel",[-1.8,0.35,-3.2],null,[0,-9.4,0],"Wheel")
        
        super("/obj/Car3/car3","TestCarIndustries","TestCarC",600,1,[],[socketa,socketb,socketc,socketd]);

        var a = new WheelC(this,0)
        var b = new WheelC(this,1)
        var c = new WheelC(this,2)
        var d = new WheelC(this,3)
        socketa.swapPart(a);
        socketb.swapPart(b)
        socketc.swapPart(c);
        socketd.swapPart(d);
    } 
}
export class CarD extends Car
{
    constructor()
    {
        
        //Test Car is created with sockets and parts
        var socketa = new Socket("Left  Front Wheel",[1.3,0.3,2.5],null,[0,0,0],"Wheel")
        var socketb = new Socket("Right Front Wheel",[-1.3,0.3,2.5],null,[0,-9.4,0],"Wheel")
        var socketc = new Socket("Left Back Wheel",[1.3,0.3,-2.8],null,[0,0,0],"Wheel")
        var socketd = new Socket("Right Back Wheel",[-1.3,0.3,-2.8],null,[0,-9.4,0],"Wheel")
        
        super("/obj/Car4/car4","TestCarIndustries","TestCarC",600,1,[],[socketa,socketb,socketc,socketd]);

        var a = new WheelD(this,0)
        var b = new WheelD(this,1)
        var c = new WheelD(this,2)
        var d = new WheelD(this,3)
        socketa.swapPart(a);
        socketb.swapPart(b)
        socketc.swapPart(c);
        socketd.swapPart(d);
    }
}
export class CarE extends Car
{
    constructor()
    {
        
        //Test Car is created with sockets and parts
        var socketa = new Socket("Left  Front Wheel",[1.8,0.3,3],null,[0,0,0],"Wheel")
        var socketb = new Socket("Right Front Wheel",[-1.8,0.3,3],null,[0,-9.4,0],"Wheel")
        var socketc = new Socket("Left Back Wheel",[1.8,0.3,-3.15],null,[0,0,0],"Wheel")
        var socketd = new Socket("Right Back Wheel",[-1.8,0.3,-3.15],null,[0,-9.4,0],"Wheel")
        
        super("/obj/Car5/car5","TestCarIndustries","TestCarE",600,1,[],[socketa,socketb,socketc,socketd]);

        var a = new WheelE(this,0)
        var b = new WheelE(this,1)
        var c = new WheelE(this,2)
        var d = new WheelE(this,3)
        socketa.swapPart(a);
        socketb.swapPart(b)
        socketc.swapPart(c);
        socketd.swapPart(d);
    }
}
export class CarF extends Car
{
    constructor()
    {
        
        //Test Car is created with sockets and parts
        var socketa = new Socket("Left  Front Wheel",[1.9,0.3,3.05],null,[0,0,0],"Wheel")
        var socketb = new Socket("Right Front Wheel",[-1.9,0.3,3.05],null,[0,-9.4,0],"Wheel")
        var socketc = new Socket("Left Back Wheel",[1.9,0.3,-4.2],null,[0,0,0],"Wheel")
        var socketd = new Socket("Right Back Wheel",[-1.9,0.3,-4.2],null,[0,-9.4,0],"Wheel")
        
        super("/obj/Car6/car6","TestCarIndustries","TestCarF",600,1,[],[socketa,socketb,socketc,socketd]);

        var a = new WheelE(this,0)
        var b = new WheelE(this,1)
        var c = new WheelE(this,2)
        var d = new WheelE(this,3)
        socketa.swapPart(a);
        socketb.swapPart(b)
        socketc.swapPart(c);
        socketd.swapPart(d);
    }
}