import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StockageingDTO } from "src/dto/Stockageing.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("stockageing001mb")
export class Stockageing001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "itemcode", length: 30 })
    itemcode: string;

    @Column("varchar", { name: "itemname", length: 30 })
    itemname: string;

    @Column("varchar", { name: "description", length: 30 })
    description: string;

    @Column("varchar", { name: "itemgroup", length: 30 })
    itemgroup: string;

    @Column("varchar", { name: "brand", length: 30 })
    brand: string;

    @Column("int", { name: "averageage" })
    averageage: number;

    @Column("tinyint", { name: "earliest", width: 1 })
    earliest: boolean;

    @Column("tinyint", { name: "latest", width: 1 })
    latest: boolean;

    @Column("varchar", { name: "uom", length: 30 })
    uom: string;

    @Column("int", { name: "actual", nullable: true })
    actual: number | null;

    @Column("varchar", { name: "item", nullable: true, length: 255 })
    item: string | null;

    @Column("int", { name: "ordered", nullable: true })
    ordered: number | null;

    @Column("int", { name: "projected", nullable: true })
    projected: number | null;

    @Column("int", { name: "requested", nullable: true })
    requested: number | null;

    @Column("int", { name: "reserved", nullable: true })
    reserved: number | null;

    @Column("varchar", { name: "warehouse", nullable: true, length: 255 })
    warehouse: string | null;

    setProperties(stockageingDTO: StockageingDTO) {
        this.id = stockageingDTO.id;
        this.itemcode = stockageingDTO.itemcode;
        this.itemname = stockageingDTO.itemname;
        this.description = stockageingDTO.description;
        this.itemgroup = stockageingDTO.itemgroup;
        this.brand = stockageingDTO.brand;
        this.averageage = stockageingDTO.averageage;
        this.earliest = stockageingDTO.earliest;
        this.latest = stockageingDTO.latest;
        this.uom = stockageingDTO.uom;
        this.actual = stockageingDTO.actual;
        this.item = stockageingDTO.item;
        this.ordered = stockageingDTO.ordered;
        this.projected = stockageingDTO.projected;
        this.requested = stockageingDTO.requested;
        this.reserved = stockageingDTO.reserved;
        this.warehouse = stockageingDTO.warehouse;
        this.insertUser = stockageingDTO.insertUser;
        this.insertDatetime = stockageingDTO.insertDatetime;
        this.updatedUser = stockageingDTO.updatedUser;
        this.updatedDatetime = stockageingDTO.updatedDatetime;
    }
}
