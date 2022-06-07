import { ProdstockentryDTO } from "src/dto/Prodstockentry.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("prodstockentry001mb")
export class Prodstockentry001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "prstockId" })
    prstockId: number;

    @Column("varchar", { name: "title", length: 50 })
    title: string;

    @Column("varchar", { name: "status", length: 40 })
    status: string;

    @Column("varchar", { name: "purpose", length: 50 })
    purpose: string;

    @Column("varchar", { name: "stockEntry", length: 30 })
    stockEntry: string;
    setProperties(prodstockentryDTO: ProdstockentryDTO) {
        this.prstockId = prodstockentryDTO.prstockId;
        this.title = prodstockentryDTO.title;
        this.status = prodstockentryDTO.status;
        this.purpose = prodstockentryDTO.purpose;
        this.stockEntry = prodstockentryDTO.stockEntry;
        this.insertUser = prodstockentryDTO.insertUser;
        this.insertDatetime = prodstockentryDTO.insertDatetime;
        this.updatedUser = prodstockentryDTO.updatedUser;
        this.updatedDatetime = prodstockentryDTO.updatedDatetime;
    }
}
