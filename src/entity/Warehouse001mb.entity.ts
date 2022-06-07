import { WarehouseDTO } from "src/dto/Warehouse.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("warehouse001mb")
export class Warehouse001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "whId" })
    whId: number;

    @Column("varchar", { name: "warehouseName", length: 50 })
    warehouseName: string;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    @Column("varchar", { name: "isActive", length: 20 })
    isActive: string;

    @Column("varchar", { name: "warehouseCode", length: 60 })
    warehouseCode: string;

    setProperties(warehouseDTO: WarehouseDTO) {
        this.whId = warehouseDTO.whId;
        this.warehouseName = warehouseDTO.warehouseName;
        this.status = warehouseDTO.status;
        this.isActive = warehouseDTO.isActive;
        this.warehouseCode = warehouseDTO.warehouseCode;
        this.insertUser = warehouseDTO.insertUser;
        this.insertDatetime = warehouseDTO.insertDatetime;
        this.updatedUser = warehouseDTO.updatedUser;
        this.updatedDatetime = warehouseDTO.updatedDatetime;
    }
}
