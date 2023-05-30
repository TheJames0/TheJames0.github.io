import { CarParts } from "../Abstract/CarParts";
import { Wheel } from "../AbstractCarParts/Wheel";
export class WheelA extends Wheel
{
    constructor(car,socket)
    {
        super("wheel1","Sedan",car.sockets[socket],car,-0.53);
    }
}
export class WheelB extends Wheel
{
    constructor(car,socket)
    {
        super("wheel2","Flatbed",car.sockets[socket],car,-0.67);
    }
}
export class WheelC extends Wheel
{
    constructor(car,socket)
    {
        super("wheel3","WheelC",car.sockets[socket],car,-0.44);
    }
}
export class WheelD extends Wheel
{
    constructor(car,socket)
    {
        super("wheel4","WheelD",car.sockets[socket],car,-0.3);
    }
}
export class WheelE extends Wheel
{
    constructor(car,socket)
    {
        super("/obj/Car5/wheel5","WheelE",car.sockets[socket],car,-0.5);
    }
}
export class RoofRailA extends CarParts
{
    constructor(car,socket)
    {
        super("/obj/RoofRail1","Rail A", "Roof Rail",car.sockets[socket], car, 0);
    }
}
export class RoofRailB extends CarParts
{
    constructor(car,socket)
    {
        super("/obj/RoofRail2","Rail B", "Roof Rail",car.sockets[socket], car, 0);
    }
}
export class Empty extends CarParts
{
    constructor(car,socket)
    {
        super("","Empty", "Empty",car.sockets[socket], car, 0);
    }
}