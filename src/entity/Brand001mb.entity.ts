import { BrandDTO } from "src/dto/Brand.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("brand001mb")
export class Brand001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "brandId" })
    brandId: number;

    @Column("varchar", { name: "brandName", length: 30 })
    brandName: string;

    @Column("varchar", { name: "description", length: 100 })
    description: string;

    setProperties(brandDTO: BrandDTO) {
        this.brandId = brandDTO.brandId;
        this.brandName = brandDTO.brandName;
        this.description = brandDTO.description;
        this.insertUser = brandDTO.insertUser;
        this.insertDatetime = brandDTO.insertDatetime;
        this.updatedUser = brandDTO.updatedUser;
        this.updatedDatetime = brandDTO.updatedDatetime;
    }

}
