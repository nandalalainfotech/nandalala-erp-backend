import { PurecpttrendDTO } from "src/dto/Purecpttrend.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("purecpttrend001mb")
export class Purecpttrend001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "putrendId" })
    putrendId: number;

    @Column("varchar", { name: "period", length: 50 })
    period: string;

    @Column("varchar", { name: "basedOn", length: 40 })
    basedOn: string;

    @Column("year", { name: "fiscalYear" })
    fiscalYear: number;

    @Column("varchar", { name: "company", length: 60 })
    company: string;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("varchar", { name: "janQty", nullable: true, length: 40 })
    janQty: string | null;

    @Column("decimal", {
        name: "janAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    janAmt: string | null;

    @Column("varchar", { name: "febQty", nullable: true, length: 40 })
    febQty: string | null;

    @Column("decimal", {
        name: "febAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    febAmt: string | null;

    @Column("varchar", { name: "marQty", nullable: true, length: 30 })
    marQty: string | null;

    @Column("decimal", {
        name: "marAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    marAmt: string | null;

    @Column("varchar", { name: "aprQty", length: 40 })
    aprQty: string;

    @Column("decimal", {
        name: "aprAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    aprAmt: string | null;

    @Column("varchar", { name: "mayQty", nullable: true, length: 40 })
    mayQty: string | null;

    @Column("decimal", {
        name: "mayAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    mayAmt: string | null;

    @Column("varchar", { name: "junQty", nullable: true, length: 40 })
    junQty: string | null;

    @Column("decimal", {
        name: "junAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    junAmt: string | null;

    @Column("varchar", { name: "julQty", nullable: true, length: 40 })
    julQty: string | null;

    @Column("decimal", {
        name: "julAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    julAmt: string | null;

    @Column("varchar", { name: "augQty", nullable: true, length: 40 })
    augQty: string | null;

    @Column("decimal", {
        name: "augAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    augAmt: string | null;

    @Column("varchar", { name: "sepQty", nullable: true, length: 40 })
    sepQty: string | null;

    @Column("decimal", {
        name: "sepAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    sepAmt: string | null;

    @Column("varchar", { name: "octQty", nullable: true, length: 40 })
    octQty: string | null;

    @Column("decimal", {
        name: "octAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    octAmt: string | null;

    @Column("varchar", { name: "novQty", nullable: true, length: 40 })
    novQty: string | null;

    @Column("decimal", {
        name: "novAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    novAmt: string | null;

    @Column("varchar", { name: "decQty", nullable: true, length: 40 })
    decQty: string | null;

    @Column("decimal", {
        name: "decAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    decAmt: string | null;

    @Column("varchar", { name: "totalQty", nullable: true, length: 30 })
    totalQty: string | null;

    @Column("decimal", {
        name: "totalAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalAmt: string | null;

    @Column("varchar", { name: "augQtyt", nullable: true, length: 255 })
    augQtyt: string | null;

    setProperties(purecpttrendDTO: PurecpttrendDTO) {
        this.putrendId = purecpttrendDTO.putrendId;
        this.itemCode = purecpttrendDTO.itemCode;
        this.period = purecpttrendDTO.period;
        this.basedOn = purecpttrendDTO.basedOn;
        this.fiscalYear = purecpttrendDTO.fiscalYear;
        this.company = purecpttrendDTO.company;
        this.janAmt = purecpttrendDTO.janAmt;
        this.janQty = purecpttrendDTO.janQty;
        this.febAmt = purecpttrendDTO.febAmt;
        this.febQty = purecpttrendDTO.febQty;
        this.marAmt = purecpttrendDTO.marAmt;
        this.marQty = purecpttrendDTO.marQty;
        this.aprAmt = purecpttrendDTO.aprAmt;
        this.aprQty = purecpttrendDTO.aprQty;
        this.mayAmt = purecpttrendDTO.mayAmt;
        this.mayQty = purecpttrendDTO.mayQty;
        this.junAmt = purecpttrendDTO.junAmt;
        this.junQty = purecpttrendDTO.junQty;
        this.julAmt = purecpttrendDTO.julAmt;
        this.julQty = purecpttrendDTO.julQty;
        this.augAmt = purecpttrendDTO.augAmt;
        this.augQty = purecpttrendDTO.augQty;
        this.sepAmt = purecpttrendDTO.sepAmt;
        this.sepQty = purecpttrendDTO.sepQty;
        this.octAmt = purecpttrendDTO.octAmt;
        this.octQty = purecpttrendDTO.octQty;
        this.novAmt = purecpttrendDTO.novAmt;
        this.novQty = purecpttrendDTO.novQty;
        this.decAmt = purecpttrendDTO.decAmt;
        this.decQty = purecpttrendDTO.decQty;
        this.totalAmt = purecpttrendDTO.totalAmt;
        this.totalQty = purecpttrendDTO.totalQty;
        this.augQtyt = purecpttrendDTO.augQtyt;
        this.insertUser = purecpttrendDTO.insertUser;
        this.insertDatetime = purecpttrendDTO.insertDatetime;
        this.updatedUser = purecpttrendDTO.updatedUser;
        this.updatedDatetime = purecpttrendDTO.updatedDatetime;
    }

}
