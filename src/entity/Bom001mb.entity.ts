import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BomDTO } from "src/dto/Bom.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("bom001mb")
export class Bom001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "bom", length: 45 })
    bom: string;

    @Column("varchar", { name: "type", length: 45 })
    type: string;

    setProperties(bomDTO: BomDTO) {
        this.id = bomDTO.id;
        this.bom = bomDTO.bom;
        this.type = bomDTO.type;
        this.insertUser = bomDTO.insertUser;
        this.insertDatetime = bomDTO.insertDatetime;
        this.updatedUser = bomDTO.updatedUser;
        this.updatedDatetime = bomDTO.updatedDatetime;
    }

}
