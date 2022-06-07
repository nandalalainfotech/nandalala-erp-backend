import { ItemshortagerepDTO } from "src/dto/Itemshortagerep.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("itemshortagerep001mb")
export class Itemshortagerep001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "shrepId" })
    shrepId: number;

    @Column("varchar", { name: "warehouseName", length: 50 })
    warehouseName: string;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("decimal", {
        name: "actualQty",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualQty: string | null;

    @Column("decimal", {
        name: "orderedQty",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    orderedQty: string | null;

    @Column("decimal", {
        name: "plannedQty",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    plannedQty: string | null;

    @Column("decimal", {
        name: "reservedQty",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    reservedQty: string | null;

    @Column("decimal", {
        name: "projectedQty",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    projectedQty: string | null;

    setProperties(itemshortagerepDTO: ItemshortagerepDTO) {
        this.shrepId = itemshortagerepDTO.shrepId;
        this.itemCode = itemshortagerepDTO.itemCode;
        this.warehouseName = itemshortagerepDTO.warehouseName;
        this.actualQty = itemshortagerepDTO.actualQty;
        this.orderedQty = itemshortagerepDTO.orderedQty;
        this.plannedQty = itemshortagerepDTO.plannedQty;
        this.reservedQty = itemshortagerepDTO.reservedQty;
        this.projectedQty = itemshortagerepDTO.projectedQty;
        this.insertUser = itemshortagerepDTO.insertUser;
        this.insertDatetime = itemshortagerepDTO.insertDatetime;
        this.updatedUser = itemshortagerepDTO.updatedUser;
        this.updatedDatetime = itemshortagerepDTO.updatedDatetime;
    }
}
