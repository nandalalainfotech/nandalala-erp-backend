import { ProdbundleDTO } from "src/dto/Prodbundle.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("prodbundle001mb")
export class Prodbundle001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "pbundId" })
    pbundId: number;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("varchar", { name: "childItem", length: 50 })
    childItem: string;

    @Column("varchar", { name: "quantity", length: 50 })
    quantity: string;

    @Column("varchar", { name: "description", length: 150 })
    description: string;

    setProperties(prodbundleDTO: ProdbundleDTO) {
        this.pbundId = prodbundleDTO.pbundId;
        this.itemCode = prodbundleDTO.itemCode;
        this.childItem = prodbundleDTO.childItem;
        this.quantity = prodbundleDTO.quantity;
        this.description = prodbundleDTO.description;
        this.insertUser = prodbundleDTO.insertUser;
        this.insertDatetime = prodbundleDTO.insertDatetime;
        this.updatedUser = prodbundleDTO.updatedUser;
        this.updatedDatetime = prodbundleDTO.updatedDatetime;
    }
}
