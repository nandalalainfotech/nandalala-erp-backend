import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductbundleDTO } from "src/dto/Productbundle.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("productbundle001mb")
export class Productbundle001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "description", nullable: true, length: 255 })
    description: string | null;

    @Column("varchar", { name: "item", nullable: true, length: 255 })
    item: string | null;

    @Column("varchar", { name: "parentitem", nullable: true, length: 255 })
    parentitem: string | null;

    @Column("int", { name: "quantity", nullable: true })
    quantity: number | null;

    setProperties(productbundleDTO: ProductbundleDTO) {
        this.id = productbundleDTO.id;
        this.description = productbundleDTO.description;
        this.item = productbundleDTO.item;
        this.parentitem = productbundleDTO.parentitem;
        this.quantity = productbundleDTO.quantity;
        this.insertUser = productbundleDTO.insertUser;
        this.insertDatetime = productbundleDTO.insertDatetime;
        this.updatedUser = productbundleDTO.updatedUser;
        this.updatedDatetime = productbundleDTO.updatedDatetime;
    }
}
