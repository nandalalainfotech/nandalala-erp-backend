import { ItempriceDTO } from "src/dto/Itemprice.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("itemprice001mb")
export class Itemprice001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "ipId" })
    ipId: number;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("varchar", { name: "status", length: 40 })
    status: string;

    @Column("varchar", { name: "itemGroup", length: 50 })
    itemGroup: string;

    setProperties(itempriceDTO: ItempriceDTO) {
        this.ipId = itempriceDTO.ipId;
        this.itemCode = itempriceDTO.itemCode;
        this.status = itempriceDTO.status;
        this.itemGroup = itempriceDTO.itemGroup;
        this.insertUser = itempriceDTO.insertUser;
        this.insertDatetime = itempriceDTO.insertDatetime;
        this.updatedUser = itempriceDTO.updatedUser;
        this.updatedDatetime = itempriceDTO.updatedDatetime;
    }
}
