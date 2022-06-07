import { ItempricereportDTO } from "src/dto/Itempricereport.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("itempricereport001mb")
export class Itempricereport001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "itpricesId" })
    itpricesId: number;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("varchar", { name: "itemGroup", length: 50 })
    itemGroup: string;

    @Column("varchar", { name: "description", length: 100 })
    description: string;

    @Column("varchar", { name: "UOM", length: 30 })
    uom: string;

    @Column("varchar", { name: "lstPurchase", length: 40 })
    lstPurchase: string;

    @Column("decimal", {
        name: "valuationRate",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    valuationRate: string | null;

    @Column("varchar", { name: "spList", length: 50 })
    spList: string;

    @Column("varchar", { name: "ppList", length: 50 })
    ppList: string;

    @Column("decimal", {
        name: "bomRate",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    bomRate: string | null;

    setProperties(itempricereportDTO: ItempricereportDTO) {
        this.itpricesId = itempricereportDTO.itpricesId;
        this.itemCode = itempricereportDTO.itemCode;
        this.itemGroup = itempricereportDTO.itemGroup;
        this.description = itempricereportDTO.description;
        this.uom = itempricereportDTO.uom;
        this.lstPurchase = itempricereportDTO.lstPurchase;
        this.valuationRate = itempricereportDTO.valuationRate;
        this.spList = itempricereportDTO.spList;
        this.ppList = itempricereportDTO.ppList;
        this.bomRate = itempricereportDTO.bomRate;
        this.insertUser = itempricereportDTO.insertUser;
        this.insertDatetime = itempricereportDTO.insertDatetime;
        this.updatedUser = itempricereportDTO.updatedUser;
        this.updatedDatetime = itempricereportDTO.updatedDatetime;
    }
}
