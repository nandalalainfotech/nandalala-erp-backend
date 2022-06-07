import { StkrepageingDTO } from "src/dto/Stkrepageing.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("stkrepageing001mb")
export class Stkrepageing001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "stageId" })
    stageId: number;

    @Column("varchar", { name: "UOM", nullable: true, length: 255 })
    uom: string | null;

    @Column("int", { name: "averageAge", nullable: true })
    averageAge: number | null;

    @Column("varchar", { name: "brand", nullable: true, length: 255 })
    brand: string | null;

    @Column("varchar", { name: "description", nullable: true, length: 255 })
    description: string | null;

    @Column("int", { name: "earliest", nullable: true })
    earliest: number | null;

    @Column("varchar", { name: "itemCode", nullable: true, length: 255 })
    itemCode: string | null;

    @Column("varchar", { name: "itemGroup", nullable: true, length: 255 })
    itemGroup: string | null;

    @Column("int", { name: "latest", nullable: true })
    latest: number | null;

    setProperties(stkrepageingDTO: StkrepageingDTO) {
        this.stageId = stkrepageingDTO.stageId;
        this.uom = stkrepageingDTO.uom;
        this.averageAge = stkrepageingDTO.averageAge;
        this.brand = stkrepageingDTO.brand;
        this.description = stkrepageingDTO.description;
        this.earliest = stkrepageingDTO.earliest;
        this.itemCode = stkrepageingDTO.itemCode;
        this.itemGroup = stkrepageingDTO.itemGroup;
        this.latest = stkrepageingDTO.latest;
        this.insertUser = stkrepageingDTO.insertUser;
        this.insertDatetime = stkrepageingDTO.insertDatetime;
        this.updatedUser = stkrepageingDTO.updatedUser;
        this.updatedDatetime = stkrepageingDTO.updatedDatetime;
    }
}
