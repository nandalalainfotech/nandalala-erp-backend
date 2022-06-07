import { OrditemsdeliverDTO } from "src/dto/Orditemsdeliver.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("orditemsdeliver001mb")
export class Orditemsdeliver001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "orditemsId" })
    orditemsId: number;

    @Column("varchar", { name: "sorderName", length: 50 })
    sorderName: string;

    @Column("varchar", { name: "customername", length: 50 })
    customername: string;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "projectName", nullable: true, length: 50 })
    projectName: string | null;

    @Column("int", { name: "quantity" })
    quantity: number;

    @Column("int", { name: "deliverQty" })
    deliverQty: number;

    @Column("int", { name: "qtytoDeliver" })
    qtytoDeliver: number;

    @Column("decimal", { name: "rate", nullable: true, precision: 12, scale: 4 })
    rate: string | null;

    @Column("decimal", {
        name: "amount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amount: string | null;

    @Column("decimal", {
        name: "amttoDeliver",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amttoDeliver: string | null;

    @Column("varchar", { name: "availableQty", length: 50 })
    availableQty: string;

    @Column("varchar", { name: "projectedQty", nullable: true, length: 40 })
    projectedQty: string | null;

    @Column("varchar", { name: "expectedQty", nullable: true, length: 40 })
    expectedQty: string | null;

    @Column("varchar", { name: "itemCode", length: 60 })
    itemCode: string;

    @Column("varchar", { name: "description", length: 100 })
    description: string;

    @Column("varchar", { name: "itemGroup", length: 50 })
    itemGroup: string;

    @Column("varchar", { name: "warehouseName", length: 50 })
    warehouseName: string;

    setProperties(orditemsdeliverDTO: OrditemsdeliverDTO) {
        this.orditemsId = orditemsdeliverDTO.orditemsId;
        this.itemCode = orditemsdeliverDTO.itemCode;
        this.sorderName = orditemsdeliverDTO.sorderName;
        this.customername = orditemsdeliverDTO.customername;
        this.date = orditemsdeliverDTO.date;
        this.projectName = orditemsdeliverDTO.projectName;
        this.quantity = orditemsdeliverDTO.quantity;
        this.deliverQty = orditemsdeliverDTO.deliverQty;
        this.qtytoDeliver = orditemsdeliverDTO.qtytoDeliver;
        this.rate = orditemsdeliverDTO.rate;
        this.amount = orditemsdeliverDTO.amount;
        this.amttoDeliver = orditemsdeliverDTO.amttoDeliver;
        this.availableQty = orditemsdeliverDTO.availableQty;
        this.projectedQty = orditemsdeliverDTO.projectedQty;
        this.expectedQty = orditemsdeliverDTO.expectedQty;
        this.description = orditemsdeliverDTO.description;
        this.itemGroup = orditemsdeliverDTO.itemGroup;
        this.warehouseName = orditemsdeliverDTO.warehouseName;
        this.insertUser = orditemsdeliverDTO.insertUser;
        this.insertDatetime = orditemsdeliverDTO.insertDatetime;
        this.updatedUser = orditemsdeliverDTO.updatedUser;
        this.updatedDatetime = orditemsdeliverDTO.updatedDatetime;
        this.insertUser = orditemsdeliverDTO.insertUser;
        this.insertDatetime = orditemsdeliverDTO.insertDatetime;
        this.updatedUser = orditemsdeliverDTO.updatedUser;
        this.updatedDatetime = orditemsdeliverDTO.updatedDatetime;
    }
}
