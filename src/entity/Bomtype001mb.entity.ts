import { BomtypeDTO } from "src/dto/Bomtype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("bomtype001mb")
export class Bomtype001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "bomId" })
    bomId: number;

    @Column("varchar", { name: "bomName", length: 100 })
    bomName: string;

    @Column("varchar", { name: "bomType", nullable: true, length: 40 })
    bomType: string | null;

    setProperties(bomtypeDTO: BomtypeDTO) {
        this.bomId = bomtypeDTO.bomId;
        this.bomName = bomtypeDTO.bomName;
        this.bomType = bomtypeDTO.bomType;
        this.insertUser = bomtypeDTO.insertUser;
        this.insertDatetime = bomtypeDTO.insertDatetime;
        this.updatedUser = bomtypeDTO.updatedUser;
        this.updatedDatetime = bomtypeDTO.updatedDatetime;
    }
}
