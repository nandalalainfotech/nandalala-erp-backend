import { RecruitopeningDTO } from "src/dto/Recruitopening.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("recruitopening001mb")
export class Recruitopening001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "jobId" })
    jobId: number;

    @Column("varchar", { name: "jobName", length: 40 })
    jobName: string;

    @Column("varchar", { name: "status", length: 30 })
    status: string;

    setProperties(recruitopeningDTO: RecruitopeningDTO) {
        this.jobId = recruitopeningDTO.jobId;
        this.jobName = recruitopeningDTO.jobName;
        this.status = recruitopeningDTO.status;
        this.insertUser = recruitopeningDTO.insertUser;
        this.insertDatetime = recruitopeningDTO.insertDatetime;
        this.updatedUser = recruitopeningDTO.updatedUser;
        this.updatedDatetime = recruitopeningDTO.updatedDatetime;
    }
}
