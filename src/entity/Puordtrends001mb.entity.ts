import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PuordtrendsDTO } from "src/dto/Puordtrends.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("puordtrends001mb")
export class Puordtrends001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "ptrId" })
    ptrId: number;

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

    setProperties(puordtrendsDTO: PuordtrendsDTO) {
        this.ptrId = puordtrendsDTO.ptrId;
        this.period = puordtrendsDTO.period;
        this.basedOn = puordtrendsDTO.basedOn;
        this.fiscalYear = puordtrendsDTO.fiscalYear;
        this.company = puordtrendsDTO.company;
        this.itemCode = puordtrendsDTO.itemCode;
        this.janQty = puordtrendsDTO.janQty;
        this.augQtyt = puordtrendsDTO.augQtyt;
        this.totalAmt = puordtrendsDTO.totalAmt;
        this.decAmt = puordtrendsDTO.decAmt;
        this.novAmt = puordtrendsDTO.novAmt;
        this.novQty = puordtrendsDTO.novQty;
        this.octAmt = puordtrendsDTO.octAmt;
        this.octQty = puordtrendsDTO.octQty;
        this.sepAmt = puordtrendsDTO.sepAmt;
        this.sepQty = puordtrendsDTO.sepQty;
        this.augAmt = puordtrendsDTO.augAmt;
        this.augQty = puordtrendsDTO.augQty;
        this.julAmt = puordtrendsDTO.julAmt;
        this.julQty = puordtrendsDTO.julQty;
        this.junAmt = puordtrendsDTO.junAmt;
        this.junQty = puordtrendsDTO.junQty;
        this.mayAmt = puordtrendsDTO.mayAmt;
        this.mayQty = puordtrendsDTO.mayQty;
        this.marAmt = puordtrendsDTO.marAmt;
        this.marQty = puordtrendsDTO.marQty;
        this.febQty = puordtrendsDTO.febQty;
        this.febAmt = puordtrendsDTO.febAmt;
        this.janAmt = puordtrendsDTO.janAmt;
        this.janQty = puordtrendsDTO.janQty;
        this.aprAmt = puordtrendsDTO.janQty;
        this.aprQty = puordtrendsDTO.aprQty;
        this.insertUser = puordtrendsDTO.insertUser;
        this.insertDatetime = puordtrendsDTO.insertDatetime;
        this.updatedUser = puordtrendsDTO.updatedUser;
        this.updatedDatetime = puordtrendsDTO.updatedDatetime;
    }
}
