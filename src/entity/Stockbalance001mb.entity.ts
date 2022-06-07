import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StockbalanceDTO } from "src/dto/Stockbalance.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("stockbalance001mb")
export class Stockbalance001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "item", length: 30 })
    item: string;

    @Column("varchar", { name: "itemname", length: 30 })
    itemname: string;

    @Column("varchar", { name: "itemgroup", length: 30 })
    itemgroup: string;

    @Column("varchar", { name: "brand", length: 30 })
    brand: string;

    @Column("varchar", { name: "description", length: 30 })
    description: string;

    @Column("varchar", { name: "warehouse", length: 30 })
    warehouse: string;

    @Column("varchar", { name: "stockuom", length: 30 })
    stockuom: string;

    @Column("decimal", { name: "openingqty", precision: 3, scale: 1 })
    openingqty: string;

    @Column("decimal", { name: "openingvalue", precision: 3, scale: 1 })
    openingvalue: string;

    @Column("decimal", { name: "inqty", precision: 3, scale: 1 })
    inqty: string;

    @Column("decimal", { name: "invalue", precision: 3, scale: 1 })
    invalue: string;

    @Column("decimal", { name: "outqty", precision: 3, scale: 1 })
    outqty: string;

    @Column("decimal", { name: "outvalue", precision: 3, scale: 1 })
    outvalue: string;

    @Column("decimal", { name: "balqty", precision: 3, scale: 1 })
    balqty: string;

    @Column("decimal", { name: "balvalue", precision: 3, scale: 1 })
    balvalue: string;

    @Column("varchar", { name: "validationrate", length: 30 })
    validationrate: string;

    @Column("varchar", { name: "company", length: 30 })
    company: string;

    setProperties(stockbalanceDTO: StockbalanceDTO) {
        this.id = stockbalanceDTO.id;
        this.item = stockbalanceDTO.item;
        this.itemname = stockbalanceDTO.itemname;
        this.itemgroup = stockbalanceDTO.itemgroup;
        this.brand = stockbalanceDTO.brand;
        this.description = stockbalanceDTO.description;
        this.warehouse = stockbalanceDTO.warehouse;
        this.stockuom = stockbalanceDTO.stockuom;
        this.openingqty = stockbalanceDTO.openingqty;
        this.inqty = stockbalanceDTO.inqty;
        this.invalue = stockbalanceDTO.invalue;
        this.outqty = stockbalanceDTO.outqty;
        this.outvalue = stockbalanceDTO.outvalue;
        this.balqty = stockbalanceDTO.balqty;
        this.balvalue = stockbalanceDTO.balvalue;
        this.validationrate = stockbalanceDTO.validationrate;
        this.company = stockbalanceDTO.company;
        this.insertUser = stockbalanceDTO.insertUser;
        this.insertDatetime = stockbalanceDTO.insertDatetime;
        this.updatedUser = stockbalanceDTO.updatedUser;
        this.updatedDatetime = stockbalanceDTO.updatedDatetime;
    }
}
