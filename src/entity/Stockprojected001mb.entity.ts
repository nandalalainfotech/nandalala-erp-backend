import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StockprojectedDTO } from "src/dto/Stockprojected.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("stockprojected001mb")
export class Stockprojected001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("int", { name: "actualqty", nullable: true })
    actualqty: number | null;

    @Column("varchar", { name: "brand", nullable: true, length: 255 })
    brand: string | null;

    @Column("varchar", { name: "description", nullable: true, length: 255 })
    description: string | null;

    @Column("varchar", { name: "itemcode", nullable: true, length: 255 })
    itemcode: string | null;

    @Column("varchar", { name: "itemgroup", nullable: true, length: 255 })
    itemgroup: string | null;

    @Column("varchar", { name: "itemname", nullable: true, length: 255 })
    itemname: string | null;

    @Column("int", { name: "orderedqty", nullable: true })
    orderedqty: number | null;

    @Column("int", { name: "plannedqty", nullable: true })
    plannedqty: number | null;

    @Column("int", { name: "projectedqty", nullable: true })
    projectedqty: number | null;

    @Column("int", { name: "reorderlevel", nullable: true })
    reorderlevel: number | null;

    @Column("int", { name: "reorderqty", nullable: true })
    reorderqty: number | null;

    @Column("int", { name: "requestedqty", nullable: true })
    requestedqty: number | null;

    @Column("int", { name: "reservedqty", nullable: true })
    reservedqty: number | null;

    @Column("int", { name: "shortageqty", nullable: true })
    shortageqty: number | null;

    @Column("varchar", { name: "stockuom", nullable: true, length: 255 })
    stockuom: string | null;

    @Column("varchar", { name: "warehouse", nullable: true, length: 255 })
    warehouse: string | null;

    setProperties(stockprojectedDTO: StockprojectedDTO) {
        this.id = stockprojectedDTO.id;
        this.actualqty = stockprojectedDTO.actualqty;
        this.brand = stockprojectedDTO.brand;
        this.description = stockprojectedDTO.description;
        this.itemcode = stockprojectedDTO.itemcode;
        this.itemgroup = stockprojectedDTO.itemgroup;
        this.itemname = stockprojectedDTO.itemname;
        this.orderedqty = stockprojectedDTO.orderedqty;
        this.plannedqty = stockprojectedDTO.plannedqty;
        this.projectedqty = stockprojectedDTO.projectedqty;
        this.reorderlevel = stockprojectedDTO.reorderlevel;
        this.reorderqty = stockprojectedDTO.reorderqty;
        this.requestedqty = stockprojectedDTO.requestedqty;
        this.reservedqty = stockprojectedDTO.reservedqty;
        this.shortageqty = stockprojectedDTO.shortageqty;
        this.stockuom = stockprojectedDTO.stockuom;
        this.warehouse = stockprojectedDTO.warehouse;
        this.insertUser = stockprojectedDTO.insertUser;
        this.insertDatetime = stockprojectedDTO.insertDatetime;
        this.updatedUser = stockprojectedDTO.updatedUser;
        this.updatedDatetime = stockprojectedDTO.updatedDatetime;
    }
}
