import { SupptypeDTO } from "src/dto/Supptype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("supptype001mb")
export class Supptype001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "sutypeId" })
    sutypeId: number;

    @Column("varchar", { name: "supName", length: 50 })
    supName: string;

    @Column("varchar", { name: "suType", length: 50 })
    suType: string;

    setProperties(supptypeDTO: SupptypeDTO) {
        this.sutypeId = supptypeDTO.sutypeId;
        this.supName = supptypeDTO.supName;
        this.suType = supptypeDTO.suType;
        this.insertUser = supptypeDTO.insertUser;
        this.insertDatetime = supptypeDTO.insertDatetime;
        this.updatedUser = supptypeDTO.updatedUser;
        this.updatedDatetime = supptypeDTO.updatedDatetime;
    }
}
