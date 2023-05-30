import { ThreeDObject } from '../Abstract/ThreeDObject.js';
import { Socket } from '../Abstract/Car.js';
export class CarParts extends ThreeDObject
{
    model;
    type;
    weight;
    location;
    parent_instance;
    drag_coefficient;
    effector_maxspeed;
    effector_acceleration;

    constructor(file_name,pname, ptype,psocket, pcar, paccelleration){
        super(file_name,psocket.position,psocket.rotation,psocket.scale);
        this.model = pname;
        this.type = ptype;
        this.location = psocket.position;
        this.parent_instance = pcar;
        this.effector_acceleration = paccelleration;
    }
    setPosition(position){this.location = position}
}

