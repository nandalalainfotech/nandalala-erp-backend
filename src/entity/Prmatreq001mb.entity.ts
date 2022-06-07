import { PrmatreqDTO } from "src/dto/Prmatreq.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("prmatreq001mb")
export class Prmatreq001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "pmrId" })
    pmrId: number;

    @Column("varchar", { name: "mrType", length: 30 })
    mrType: string;

    @Column("varchar", { name: "mrSeries", length: 40 })
    mrSeries: string;

    @Column("varchar", { name: "itemCode", length: 40 })
    itemCode: string;

    @Column("varchar", { name: "quantity", length: 20 })
    quantity: string;

    @Column("varchar", { name: "forWarehouse", length: 40 })
    forWarehouse: string;

    @Column("datetime", { name: "requiredDate" })
    requiredDate: Date;

    setProperties(prmatreqDTO: PrmatreqDTO) {
        this.pmrId = prmatreqDTO.pmrId;
        this.mrType = prmatreqDTO.mrType;
        this.mrSeries = prmatreqDTO.mrSeries;
        this.itemCode = prmatreqDTO.itemCode;
        this.quantity = prmatreqDTO.quantity;
        this.forWarehouse = prmatreqDTO.forWarehouse;
        this.requiredDate = prmatreqDTO.requiredDate;
        this.insertUser = prmatreqDTO.insertUser;
        this.insertDatetime = prmatreqDTO.insertDatetime;
        this.updatedUser = prmatreqDTO.updatedUser;
        this.updatedDatetime = prmatreqDTO.updatedDatetime;
    }
}
