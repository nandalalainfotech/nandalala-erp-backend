import { ApprtempDTO } from "src/dto/Apprtemp.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("apprtemp001mb")
export class Apprtemp001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "apptmpId" })
    apptmpId: number;

    @Column("varchar", { name: "appraisalTemp", length: 40 })
    appraisalTemp: string;

    @Column("varchar", { name: "description", nullable: true, length: 100 })
    description: string | null;

    setProperties(apprtempDTO: ApprtempDTO) {
        this.apptmpId = apprtempDTO.apptmpId;
        this.appraisalTemp = apprtempDTO.appraisalTemp;
        this.description = apprtempDTO.description;
        this.insertUser = apprtempDTO.insertUser;
        this.insertDatetime = apprtempDTO.insertDatetime;
        this.updatedUser = apprtempDTO.updatedUser;
        this.updatedDatetime = apprtempDTO.updatedDatetime;
    }

}
