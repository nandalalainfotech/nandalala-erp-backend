import { ItemgroupDTO } from "src/dto/Itemgroup.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("itemgroup001mb")
export class Itemgroup001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "igId" })
    igId: number;

    @Column("varchar", { name: "itemGroup", length: 50 })
    itemGroup: string;

    setProperties(itemgroupDTO: ItemgroupDTO) {
        this.igId = itemgroupDTO.igId;
        this.itemGroup = itemgroupDTO.itemGroup;
        this.insertUser = itemgroupDTO.insertUser;
        this.insertDatetime = itemgroupDTO.insertDatetime;
        this.updatedUser = itemgroupDTO.updatedUser;
        this.updatedDatetime = itemgroupDTO.updatedDatetime;
    }
}
