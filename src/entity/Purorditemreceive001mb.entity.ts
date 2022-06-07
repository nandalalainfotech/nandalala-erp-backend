import { PurorditemreceiveDTO } from "src/dto/Purorditemreceive.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("purorditemreceive001mb")
export class Purorditemreceive001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "poitrecId" })
    poitrecId: number;

    @Column("varchar", { name: "puOrder", length: 50 })
    puOrder: string;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "reqbyDate", length: 50 })
    reqbyDate: string;

    @Column("varchar", { name: "supName", length: 50 })
    supName: string;

    @Column("varchar", { name: "projectName", nullable: true, length: 50 })
    projectName: string | null;

    @Column("int", { name: "quantity" })
    quantity: number;

    @Column("decimal", {
        name: "receivedQty",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    receivedQty: string | null;

    @Column("decimal", {
        name: "qtytoReceive",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    qtytoReceive: string | null;

    @Column("varchar", { name: "warehouseName", length: 50 })
    warehouseName: string;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("varchar", { name: "description", length: 100 })
    description: string;

    @Column("varchar", { name: "brandName", length: 50 })
    brandName: string;

    @Column("varchar", { name: "company", length: 50 })
    company: string;

    setProperties(purorditemreceiveDTO: PurorditemreceiveDTO) {
        this.poitrecId = purorditemreceiveDTO.poitrecId;
        this.itemCode = purorditemreceiveDTO.itemCode;
        this.puOrder = purorditemreceiveDTO.puOrder;
        this.date = purorditemreceiveDTO.date;
        this.reqbyDate = purorditemreceiveDTO.reqbyDate;
        this.supName = purorditemreceiveDTO.supName;
        this.projectName = purorditemreceiveDTO.projectName;
        this.quantity = purorditemreceiveDTO.quantity;
        this.receivedQty = purorditemreceiveDTO.receivedQty;
        this.qtytoReceive = purorditemreceiveDTO.qtytoReceive;
        this.warehouseName = purorditemreceiveDTO.warehouseName;
        this.description = purorditemreceiveDTO.description;
        this.brandName = purorditemreceiveDTO.brandName;
        this.company = purorditemreceiveDTO.company;
        this.insertUser = purorditemreceiveDTO.insertUser;
        this.insertDatetime = purorditemreceiveDTO.insertDatetime;
        this.updatedUser = purorditemreceiveDTO.updatedUser;
        this.updatedDatetime = purorditemreceiveDTO.updatedDatetime;
    }
}
