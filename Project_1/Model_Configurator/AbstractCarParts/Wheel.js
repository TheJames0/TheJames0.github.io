import { CarParts } from '../Abstract/CarParts.js';
import { Car } from '../Abstract/Car.js';
import { ThreeDObject } from '../Abstract/ThreeDObject.js';
 export class Wheel extends CarParts
{
    constructor(file_name,part_name,socket,car,groundclearance)
    {
        super(file_name,part_name,"Wheel",socket,car,-1.3);
        this.groundclearance = groundclearance;
    }
}