import { IsNotEmpty } from "class-validator";
import { Warehouse001mb } from "src/entity/Warehouse001mb.entity";
import { BaseDTO } from "./Base.dto";

export class WarehouseDTO extends BaseDTO {

    whId: number;

    @IsNotEmpty()
    warehouseName: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    isActive: string;

    @IsNotEmpty()
    warehouseCode: string;

    setProperties(warehouse001mb: Warehouse001mb) {
        this.whId = warehouse001mb.whId;
        this.warehouseName = warehouse001mb.warehouseName;
        this.status = warehouse001mb.status;
        this.isActive = warehouse001mb.isActive;
        this.warehouseCode = warehouse001mb.warehouseCode;
        this.insertUser = warehouse001mb.insertUser;
        this.insertDatetime = warehouse001mb.insertDatetime;
        this.updatedUser = warehouse001mb.updatedUser;
        this.updatedDatetime = warehouse001mb.updatedDatetime;
    }
}
