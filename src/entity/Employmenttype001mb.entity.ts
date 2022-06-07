import { EmploymenttypeDTO } from "src/dto/Employmenttype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("employmenttype001mb")
export class Employmenttype001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "etypeId" })
    etypeId: number;

    @Column("varchar", { name: "employmentType", nullable: true, length: 255 })
    employmentType: string | null;

    setProperties(employmenttypeDTO: EmploymenttypeDTO) {
        this.etypeId = employmenttypeDTO.etypeId;
        this.employmentType = employmenttypeDTO.employmentType;
        this.insertUser = employmenttypeDTO.insertUser;
        this.insertDatetime = employmenttypeDTO.insertDatetime;
        this.updatedUser = employmenttypeDTO.updatedUser;
        this.updatedDatetime = employmenttypeDTO.updatedDatetime;
    }
}
