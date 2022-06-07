import { SwsanalyticsDTO } from "src/dto/Swsanalytics.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("swsanalytics001mb")
export class Swsanalytics001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "swsId" })
    swsId: number;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("varchar", { name: "description", nullable: true, length: 150 })
    description: string | null;

    @Column("varchar", { name: "swsUOM", length: 20 })
    swsUom: string;

    @Column("int", { name: "consQty" })
    consQty: number;

    @Column("decimal", {
        name: "consAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    consAmt: string | null;

    @Column("int", { name: "delQty" })
    delQty: number;

    @Column("decimal", {
        name: "delAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    delAmt: string | null;

    @Column("int", { name: "totalQty" })
    totalQty: number;

    @Column("decimal", {
        name: "totalAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalAmt: string | null;

    setProperties(swsanalyticsDTO: SwsanalyticsDTO) {
        this.swsId = swsanalyticsDTO.swsId;
        this.itemCode = swsanalyticsDTO.itemCode;
        this.description = swsanalyticsDTO.description;
        this.swsUom = swsanalyticsDTO.swsUom;
        this.consQty = swsanalyticsDTO.consQty;
        this.consAmt = swsanalyticsDTO.consAmt;
        this.delQty = swsanalyticsDTO.delQty;
        this.delAmt = swsanalyticsDTO.delAmt;
        this.totalQty = swsanalyticsDTO.totalQty;
        this.totalAmt = swsanalyticsDTO.totalAmt;
        this.insertUser = swsanalyticsDTO.insertUser;
        this.insertDatetime = swsanalyticsDTO.insertDatetime;
        this.updatedUser = swsanalyticsDTO.updatedUser;
        this.updatedDatetime = swsanalyticsDTO.updatedDatetime;
    }

}
