import { IsNotEmpty } from "class-validator";
import { Itemshortagerep001mb } from "src/entity/Itemshortagerep001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ItemshortagerepDTO extends BaseDTO {

    shrepId: number;

    @IsNotEmpty()
    warehouseName: string;

    @IsNotEmpty()
    itemCode: string;

    @IsNotEmpty()
    actualQty: string | null;

    @IsNotEmpty()
    orderedQty: string | null;

    @IsNotEmpty()
    plannedQty: string | null;

    @IsNotEmpty()
    reservedQty: string | null;

    @IsNotEmpty()
    projectedQty: string | null;
    
    setProperties(itemshortagerep001mb: Itemshortagerep001mb) {
        this.shrepId = itemshortagerep001mb.shrepId;
        this.itemCode = itemshortagerep001mb.itemCode;
        this.warehouseName = itemshortagerep001mb.warehouseName;
        this.actualQty = itemshortagerep001mb.actualQty;
        this.orderedQty = itemshortagerep001mb.orderedQty;
        this.plannedQty = itemshortagerep001mb.plannedQty;
        this.reservedQty = itemshortagerep001mb.reservedQty;
        this.projectedQty = itemshortagerep001mb.projectedQty;
        this.insertUser = itemshortagerep001mb.insertUser;
        this.insertDatetime = itemshortagerep001mb.insertDatetime;
        this.updatedUser = itemshortagerep001mb.updatedUser;
        this.updatedDatetime = itemshortagerep001mb.updatedDatetime;
    }
}
