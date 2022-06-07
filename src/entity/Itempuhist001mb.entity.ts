import { ItempuhistDTO } from "src/dto/Itempuhist.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("itempuhist001mb")
export class Itempuhist001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "histId" })
    histId: number;

    @Column("varchar", { name: "itemCode", length: 40 })
    itemCode: string;

    @Column("varchar", { name: "itemGroup", length: 30 })
    itemGroup: string;

    @Column("varchar", { name: "description", length: 100 })
    description: string;

    @Column("int", { name: "quantity" })
    quantity: number;

    @Column("varchar", { name: "uom", length: 20 })
    uom: string;

    @Column("datetime", { name: "date", nullable: true })
    date: Date | null;

    @Column("int", { name: "amount" })
    amount: number;

    @Column("varchar", { name: "poSeries", nullable: true, length: 40 })
    poSeries: string | null;

    @Column("datetime", { name: "transDate", nullable: true })
    transDate: Date | null;

    @Column("varchar", { name: "supplier", nullable: true, length: 40 })
    supplier: string | null;

    @Column("int", { name: "receivedqty", nullable: true })
    receivedqty: number | null;

    @Column("varchar", { name: "company", length: 40 })
    company: string;

    setProperties(itempuhistDTO: ItempuhistDTO) {
        this.histId = itempuhistDTO.histId;
        this.itemCode = itempuhistDTO.itemCode;
        this.itemGroup = itempuhistDTO.itemGroup;
        this.description = itempuhistDTO.description;
        this.quantity = itempuhistDTO.quantity;
        this.uom = itempuhistDTO.uom;
        this.date = itempuhistDTO.date;
        this.amount = itempuhistDTO.amount;
        this.poSeries = itempuhistDTO.poSeries;
        this.transDate = itempuhistDTO.transDate;
        this.supplier = itempuhistDTO.supplier;
        this.receivedqty = itempuhistDTO.receivedqty;
        this.company = itempuhistDTO.company;
        this.insertUser = itempuhistDTO.insertUser;
        this.insertDatetime = itempuhistDTO.insertDatetime;
        this.updatedUser = itempuhistDTO.updatedUser;
        this.updatedDatetime = itempuhistDTO.updatedDatetime;
    }
}
