import { ItemstDTO } from "src/dto/Itemst.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("itemst001mb")
export class Itemst001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "itemstId" })
    itemstId: number;

    @Column("varchar", { name: "itemcode", length: 50 })
    itemcode: string;

    @Column("varchar", { name: "status", length: 30 })
    status: string;

    @Column("varchar", { name: "itemGroup", length: 40 })
    itemGroup: string;

    setProperties(itemstDTO: ItemstDTO) {
        this.itemstId = itemstDTO.itemstId;
        this.itemcode = itemstDTO.itemcode;
        this.status = itemstDTO.status;
        this.itemGroup = itemstDTO.itemGroup;
        this.insertUser = itemstDTO.insertUser;
        this.insertDatetime = itemstDTO.insertDatetime;
        this.updatedUser = itemstDTO.updatedUser;
        this.updatedDatetime = itemstDTO.updatedDatetime;
    }
}
