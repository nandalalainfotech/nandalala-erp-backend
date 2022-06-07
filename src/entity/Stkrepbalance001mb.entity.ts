import { StkrepbalanceDTO } from "src/dto/Stkrepbalance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("stkrepbalance001mb")
export class Stkrepbalance001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "stbalId" })
    stbalId: number;

    @Column("int", { name: "balanceQty", nullable: true })
    balanceQty: number | null;

    @Column("int", { name: "balanceValue", nullable: true })
    balanceValue: number | null;

    @Column("varchar", { name: "brand", nullable: true, length: 255 })
    brand: string | null;

    @Column("varchar", { name: "company", nullable: true, length: 255 })
    company: string | null;

    @Column("varchar", { name: "description", nullable: true, length: 255 })
    description: string | null;

    @Column("int", { name: "inQty", nullable: true })
    inQty: number | null;

    @Column("varchar", { name: "itemCode", nullable: true, length: 255 })
    itemCode: string | null;

    @Column("varchar", { name: "itemGroup", nullable: true, length: 255 })
    itemGroup: string | null;

    @Column("int", { name: "openingQty", nullable: true })
    openingQty: number | null;

    @Column("int", { name: "openingValue", nullable: true })
    openingValue: number | null;

    @Column("int", { name: "outQty", nullable: true })
    outQty: number | null;

    @Column("int", { name: "outValue", nullable: true })
    outValue: number | null;

    @Column("varchar", { name: "stkUOM", nullable: true, length: 255 })
    stkUom: string | null;

    @Column("int", { name: "valuationRate", nullable: true })
    valuationRate: number | null;

    @Column("varchar", { name: "wareHouse", nullable: true, length: 255 })
    wareHouse: string | null;

    setProperties(stkrepbalanceDTO: StkrepbalanceDTO) {
        this.stbalId = stkrepbalanceDTO.stbalId;
        this.balanceQty = stkrepbalanceDTO.balanceQty;
        this.balanceValue = stkrepbalanceDTO.balanceValue;
        this.brand = stkrepbalanceDTO.brand;
        this.company = stkrepbalanceDTO.company;
        this.description = stkrepbalanceDTO.description;
        this.inQty = stkrepbalanceDTO.inQty;
        this.itemCode = stkrepbalanceDTO.itemCode;
        this.itemGroup = stkrepbalanceDTO.itemGroup;
        this.openingQty = stkrepbalanceDTO.openingQty;
        this.openingValue = stkrepbalanceDTO.openingValue;
        this.outQty = stkrepbalanceDTO.outQty;
        this.outValue = stkrepbalanceDTO.outValue;
        this.outValue = stkrepbalanceDTO.outValue;
        this.stkUom = stkrepbalanceDTO.stkUom;
        this.valuationRate = stkrepbalanceDTO.valuationRate;
        this.wareHouse = stkrepbalanceDTO.wareHouse;
        this.insertUser = stkrepbalanceDTO.insertUser;
        this.insertDatetime = stkrepbalanceDTO.insertDatetime;
        this.updatedUser = stkrepbalanceDTO.updatedUser;
        this.updatedDatetime = stkrepbalanceDTO.updatedDatetime;
    }
}
