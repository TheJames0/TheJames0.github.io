import { ThreeDObject } from '../Abstract/ThreeDObject.js';
import { CarParts } from '../Abstract/CarParts.js';
import { WheelA,WheelB,WheelC,WheelD,WheelE } from '../NonAbstractClasses/Parts';
export class Car extends ThreeDObject
{

    

    constructor(file_name,cmake,cmodel,cweight,cdrag,cparts,sockets)
    {
        super(file_name,[0,0,0],[0,0,0]);
        this.model = cmodel;
        this.make = cmake;
        this.topspeed = 0;
        this.acceleration = 0;
        this.weight_frame = cweight;
        this.drag = cdrag;
        this.parts_stockparts = cparts;
        this.sockets = sockets;
        this.handleStockPartsEffectors();
        
    }
    //Function adds up stock part modifiers to the car;
    handleStockPartsEffectors()
    {
        this.weight = this.weight_frame;
        for(var part in this.parts_stockparts)
        {
            this.weight += part.getWeight;
            this.topspeed += part.effector_maxspeed;;
            this.acceleration += part.effector_acceleration;
            this.drag += CarParts.drag_coefficient;
        }
    }
    applyWheel(){

        var e = new WheelA(this,3);
        this.sockets[3].swapPart(e);
        var e = new WheelA(this,2);
        this.sockets[2].swapPart(e);
        var e = new WheelA(this,1);
        this.sockets[1].swapPart(e);
        var e = new WheelA(this,0);
        this.sockets[0].swapPart(e);
        console.log(this.sockets)

    }
    applyWheelA(){

        var e = new WheelB(this,3);
        this.sockets[3].swapPart(e);
        var e = new WheelB(this,2);
        this.sockets[2].swapPart(e);
        var e = new WheelB(this,1);
        this.sockets[1].swapPart(e);
        var e = new WheelB(this,0);
        this.sockets[0].swapPart(e);
        console.log(this.sockets)

    }  
    applyWheelB(){
        var e = new WheelC(this,3);
        this.sockets[3].swapPart(e);
        var e = new WheelC(this,2);
        this.sockets[2].swapPart(e);
        var e = new WheelC(this,1);
        this.sockets[1].swapPart(e);
        var e = new WheelC(this,0);
        this.sockets[0].swapPart(e);
        console.log(this.sockets)
    }
    applyWheelC(){
        var e = new WheelD(this,3);
        this.sockets[3].swapPart(e);
        var e = new WheelD(this,2);
        this.sockets[2].swapPart(e);
        var e = new WheelD(this,1);
        this.sockets[1].swapPart(e);
        var e = new WheelD(this,0);
        this.sockets[0].swapPart(e);
        console.log(this.sockets)
    }
    applyWheelD(){
        var e = new WheelE(this,3);
        this.sockets[3].swapPart(e);
        var e = new WheelE(this,2);
        this.sockets[2].swapPart(e);
        var e = new WheelE(this,1);
        this.sockets[1].swapPart(e);
        var e = new WheelE(this,0);
        this.sockets[0].swapPart(e);
        console.log(this.sockets)
    }
    delete(){
        for (var x = 0; x < this.sockets.length;x++)
        {
            this.sockets[x].part.removeMesh();
            this.removeMesh();
        }
    }
    retrievePart(check)
    {
        for (let index = 0; index < this.sockets.length; index++) {
            const element = this.sockets[index];
            if(element.part.identifier == check)
            {
                return index;
            }
        }
        
    }
    
}
export class Socket {
    constructor(name, position,part,rotation,type,scale) {
        this.name = name;
        this.position = position;
        this.part = part;
        this.rotation = rotation;
        this.scale = scale;
        this.parttype = type;
      }

      swapPart(newpart)
      {
         if (this.part != null)
         {
            this.part.removeMesh();
         }
            this.part = newpart;
    }
}
