import { StkrepledgerDTO } from "src/dto/Stkrepledger.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("stkrepledger001mb")
export class Stkrepledger001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "stledId" })
    stledId: number;

    @Column("int", { name: "balanceQty", nullable: true })
    balanceQty: number | null;

    @Column("int", { name: "balanceValue", nullable: true })
    balanceValue: number | null;

    @Column("varchar", { name: "batch", nullable: true, length: 255 })
    batch: string | null;

    @Column("varchar", { name: "brand", nullable: true, length: 255 })
    brand: string | null;

    @Column("varchar", { name: "company", nullable: true, length: 255 })
    company: string | null;

    @Column("datetime", { name: "date", nullable: true })
    date: Date | null;

    @Column("varchar", { name: "description", nullable: true, length: 255 })
    description: string | null;

    @Column("int", { name: "incomingRate", nullable: true })
    incomingRate: number | null;

    @Column("varchar", { name: "itemCode", nullable: true, length: 255 })
    itemCode: string | null;

    @Column("varchar", { name: "itemGroup", nullable: true, length: 255 })
    itemGroup: string | null;

    @Column("int", { name: "quantity", nullable: true })
    quantity: number | null;

    @Column("varchar", { name: "serialNo", nullable: true, length: 255 })
    serialNo: string | null;

    @Column("varchar", { name: "stkUOM", nullable: true, length: 255 })
    stkUom: string | null;

    @Column("int", { name: "valuationRate", nullable: true })
    valuationRate: number | null;

    @Column("varchar", { name: "voucherCode", nullable: true, length: 255 })
    voucherCode: string | null;

    @Column("varchar", { name: "voucherType", nullable: true, length: 255 })
    voucherType: string | null;

    @Column("varchar", { name: "wareHouse", nullable: true, length: 255 })
    wareHouse: string | null;

    setProperties(stkrepledgerDTO: StkrepledgerDTO) {
        this.stledId = stkrepledgerDTO.stledId;
        this.balanceQty = stkrepledgerDTO.balanceQty;
        this.balanceValue = stkrepledgerDTO.balanceValue;
        this.batch = stkrepledgerDTO.batch;
        this.brand = stkrepledgerDTO.brand;
        this.company = stkrepledgerDTO.company;
        this.date = stkrepledgerDTO.date;
        this.description = stkrepledgerDTO.description;
        this.incomingRate = stkrepledgerDTO.incomingRate;
        this.itemGroup = stkrepledgerDTO.itemGroup;
        this.quantity = stkrepledgerDTO.quantity;
        this.serialNo = stkrepledgerDTO.serialNo;
        this.stkUom = stkrepledgerDTO.stkUom;
        this.valuationRate = stkrepledgerDTO.valuationRate;
        this.voucherCode = stkrepledgerDTO.voucherCode;
        this.voucherType = stkrepledgerDTO.voucherType;
        this.wareHouse = stkrepledgerDTO.wareHouse;
        this.itemCode = stkrepledgerDTO.itemCode;
        this.insertUser = stkrepledgerDTO.insertUser;
        this.insertDatetime = stkrepledgerDTO.insertDatetime;
        this.updatedUser = stkrepledgerDTO.updatedUser;
        this.updatedDatetime = stkrepledgerDTO.updatedDatetime;
    }
}
