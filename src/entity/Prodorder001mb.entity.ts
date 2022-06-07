import { ProdorderDTO } from "src/dto/Prodorder.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("prodorder001mb")
export class Prodorder001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "prId" })
    prId: number;

    @Column("varchar", { name: "itemtoManufacture", length: 40 })
    itemtoManufacture: string;

    @Column("varchar", { name: "status", length: 30 })
    status: string;

    @Column("varchar", { name: "prorderCode", length: 30 })
    prorderCode: string;

    setProperties(prodorderDTO: ProdorderDTO) {
        this.prId = prodorderDTO.prId;
        this.itemtoManufacture = prodorderDTO.itemtoManufacture;
        this.status = prodorderDTO.status;
        this.prorderCode = prodorderDTO.prorderCode;
        this.insertUser = prodorderDTO.insertUser;
        this.insertDatetime = prodorderDTO.insertDatetime;
        this.updatedUser = prodorderDTO.updatedUser;
        this.updatedDatetime = prodorderDTO.updatedDatetime;
    }
}
