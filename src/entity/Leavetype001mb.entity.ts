import { LeavetypeDTO } from "src/dto/Leavetype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("leavetype001mb")
export class Leavetype001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "lvtypeId" })
    lvtypeId: number;

    @Column("varchar", { name: "lvtypeName", length: 30 })
    lvtypeName: string;

    @Column("int", { name: "maxdaysAllowed" })
    maxdaysAllowed: number;

    setProperties(leavetypeDTO: LeavetypeDTO) {
        this.lvtypeId = leavetypeDTO.lvtypeId;
        this.lvtypeName = leavetypeDTO.lvtypeName;
        this.maxdaysAllowed = leavetypeDTO.maxdaysAllowed;
        this.insertUser = leavetypeDTO.insertUser;
        this.insertDatetime = leavetypeDTO.insertDatetime;
        this.updatedUser = leavetypeDTO.updatedUser;
        this.updatedDatetime = leavetypeDTO.updatedDatetime;
    }
}
