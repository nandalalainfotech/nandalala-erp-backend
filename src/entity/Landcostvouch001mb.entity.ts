import { LandcostvouchDTO } from "src/dto/Landcostvouch.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("landcostvouch001mb")
export class Landcostvouch001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "vouchId" })
    vouchId: number;

    @Column("varchar", { name: "series", length: 50 })
    series: string;

    @Column("varchar", { name: "company", length: 40 })
    company: string;

    @Column("varchar", { name: "recptdocType", length: 50 })
    recptdocType: string;

    @Column("varchar", { name: "recptdoc", length: 50 })
    recptdoc: string;

    @Column("varchar", { name: "supName", length: 50 })
    supName: string;

    @Column("int", { name: "grandTotal" })
    grandTotal: number;

    setProperties(landcostvouchDTO: LandcostvouchDTO) {
        this.vouchId = landcostvouchDTO.vouchId;
        this.series = landcostvouchDTO.series;
        this.company = landcostvouchDTO.company;
        this.recptdocType = landcostvouchDTO.recptdocType;
        this.recptdoc = landcostvouchDTO.recptdoc;
        this.supName = landcostvouchDTO.supName;
        this.grandTotal = landcostvouchDTO.grandTotal;
        this.insertUser = landcostvouchDTO.insertUser;
        this.insertDatetime = landcostvouchDTO.insertDatetime;
        this.updatedUser = landcostvouchDTO.updatedUser;
        this.updatedDatetime = landcostvouchDTO.updatedDatetime;
    }
}
