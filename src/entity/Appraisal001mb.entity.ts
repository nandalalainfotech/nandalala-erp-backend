import { AppraisalDTO } from "src/dto/Appraisal.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("appraisal001mb")
export class Appraisal001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "apprId" })
    apprId: number;

    @Column("varchar", { name: "series", length: 30 })
    series: string;

    @Column("varchar", { name: "appraisalTemp", nullable: true, length: 40 })
    appraisalTemp: string | null;

    setProperties(appraisalDTO: AppraisalDTO) {
        this.apprId = appraisalDTO.apprId;
        this.series = appraisalDTO.series;
        this.appraisalTemp = appraisalDTO.appraisalTemp;
        this.insertUser = appraisalDTO.insertUser;
        this.insertDatetime = appraisalDTO.insertDatetime;
        this.updatedUser = appraisalDTO.updatedUser;
        this.updatedDatetime = appraisalDTO.updatedDatetime;
    }

}
