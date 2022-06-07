import { DelnotetrendsDTO } from "src/dto/Delnotetrends.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("delnotetrends001mb")
export class Delnotetrends001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "dntrendId" })
    dntrendId: number;

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

    setProperties(delnotetrendsDTO: DelnotetrendsDTO) {
        this.dntrendId = delnotetrendsDTO.dntrendId;
        this.itemCode = delnotetrendsDTO.itemCode;
        this.period = delnotetrendsDTO.period;
        this.basedOn = delnotetrendsDTO.basedOn;
        this.fiscalYear = delnotetrendsDTO.fiscalYear;
        this.company = delnotetrendsDTO.company;
        this.janAmt = delnotetrendsDTO.janAmt;
        this.janQty = delnotetrendsDTO.janQty;
        this.febAmt = delnotetrendsDTO.febAmt;
        this.febQty = delnotetrendsDTO.febQty;
        this.marAmt = delnotetrendsDTO.marAmt;
        this.marQty = delnotetrendsDTO.marQty;
        this.aprAmt = delnotetrendsDTO.aprAmt;
        this.aprQty = delnotetrendsDTO.aprQty;
        this.mayAmt = delnotetrendsDTO.mayAmt;
        this.mayQty = delnotetrendsDTO.mayQty;
        this.junAmt = delnotetrendsDTO.junAmt;
        this.junQty = delnotetrendsDTO.junQty;
        this.julAmt = delnotetrendsDTO.julAmt;
        this.julQty = delnotetrendsDTO.julQty;
        this.augAmt = delnotetrendsDTO.augAmt;
        this.augQty = delnotetrendsDTO.augQty;
        this.sepAmt = delnotetrendsDTO.sepAmt;
        this.sepQty = delnotetrendsDTO.sepQty;
        this.octAmt = delnotetrendsDTO.octAmt;
        this.octQty = delnotetrendsDTO.octQty;
        this.novAmt = delnotetrendsDTO.novAmt;
        this.novQty = delnotetrendsDTO.novQty;
        this.decAmt = delnotetrendsDTO.decAmt;
        this.decQty = delnotetrendsDTO.decQty;
        this.totalAmt = delnotetrendsDTO.totalAmt;
        this.totalQty = delnotetrendsDTO.totalQty;
        this.augQtyt = delnotetrendsDTO.augQtyt;
        this.insertUser = delnotetrendsDTO.insertUser;
        this.insertDatetime = delnotetrendsDTO.insertDatetime;
        this.updatedUser = delnotetrendsDTO.updatedUser;
        this.updatedDatetime = delnotetrendsDTO.updatedDatetime;
    }

}
