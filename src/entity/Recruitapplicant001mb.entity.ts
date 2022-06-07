import { RecruitapplicantDTO } from "src/dto/Recruitapplicant.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Index("jobId", ["jobId"], {})
@Entity("recruitapplicant001mb")
export class Recruitapplicant001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "appId" })
    appId: number;

    @Column("varchar", { name: "applicantName", length: 40 })
    applicantName: string;

    @Column("varchar", { name: "status", length: 30 })
    status: string;

    @Column("int", { name: "jobId", nullable: true })
    jobId: number | null;

    @Column("varchar", { name: "jobName", nullable: true, length: 255 })
    jobName: string | null;

    setProperties(recruitapplicantDTO: RecruitapplicantDTO) {
        this.appId = recruitapplicantDTO.appId;
        this.applicantName = recruitapplicantDTO.applicantName;
        this.status = recruitapplicantDTO.status;
        this.jobId = recruitapplicantDTO.jobId;
        this.jobName = recruitapplicantDTO.jobName;
        this.insertUser = recruitapplicantDTO.insertUser;
        this.insertDatetime = recruitapplicantDTO.insertDatetime;
        this.updatedUser = recruitapplicantDTO.updatedUser;
        this.updatedDatetime = recruitapplicantDTO.updatedDatetime;
    }
}
