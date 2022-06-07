import { DesignationDTO } from "src/dto/Designation.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("designation001mb")
export class Designation001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "designId" })
    designId: number;

    @Column("varchar", { name: "designation", length: 30 })
    designation: string;

    setProperties(designationDTO: DesignationDTO) {
        this.designId = designationDTO.designId;
        this.designation = designationDTO.designation;
        this.insertUser = designationDTO.insertUser;
        this.insertDatetime = designationDTO.insertDatetime;
        this.updatedUser = designationDTO.updatedUser;
        this.updatedDatetime = designationDTO.updatedDatetime;
    }
}
