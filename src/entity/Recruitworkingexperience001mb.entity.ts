import { RecruitworkingexperienceDTO } from "src/dto/Recruitworkingexperience.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("recruitworkingexperience001mb")
export class Recruitworkingexperience001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "workingexperienceId" })
    workingexperienceId: number;

    @Column("varchar", { name: "applicantNamePrefix", length: 10 })
    applicantNamePrefix: string;

    @Column("varchar", { name: "applicantName", length: 45 })
    applicantName: string;

    @Column("varchar", { name: "companyName", length: 30 })
    companyName: string;

    @Column("varchar", { name: "position", length: 30 })
    position: string;

    @Column("varchar", { name: "grade", length: 20 })
    grade: string;

    @Column("datetime", { name: "dateOfJoin" })
    dateOfJoin: Date;

    @Column("datetime", { name: "dateOfRelieve" })
    dateOfRelieve: Date;

    @Column("varchar", { name: "workingexperienceLetter", length: 30 })
    workingexperienceLetter: string;

    setProperties(recruitworkingexperienceDTO: RecruitworkingexperienceDTO) {
        this.workingexperienceId = recruitworkingexperienceDTO.workingexperienceId;
        this.applicantNamePrefix = recruitworkingexperienceDTO.applicantNamePrefix;
        this.applicantName = recruitworkingexperienceDTO.applicantName;
        this.companyName = recruitworkingexperienceDTO.companyName;
        this.position = recruitworkingexperienceDTO.position;
        this.grade = recruitworkingexperienceDTO.grade;
        this.dateOfJoin = recruitworkingexperienceDTO.dateOfJoin;
        this.dateOfRelieve = recruitworkingexperienceDTO.dateOfRelieve;
        this.workingexperienceLetter = recruitworkingexperienceDTO.workingexperienceLetter;
        this.insertUser = recruitworkingexperienceDTO.insertUser;
        this.insertDatetime = recruitworkingexperienceDTO.insertDatetime;
        this.updatedUser = recruitworkingexperienceDTO.updatedUser;
        this.updatedDatetime = recruitworkingexperienceDTO.updatedDatetime;
    }
}
