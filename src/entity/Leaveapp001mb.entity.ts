import { LeaveappDTO } from "src/dto/Leaveapp.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Index("sNo", ["sNo"], {})
@Entity("leaveapp001mb")
export class Leaveapp001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "lvappId" })
    lvappId: number;

    @Column("varchar", { name: "series", length: 30 })
    series: string;

    @Column("varchar", { name: "leaveType", length: 30 })
    leaveType: string;

    @Column("varchar", { name: "reason", length: 30 })
    reason: string;

    @Column("datetime", { name: "fromDate" })
    fromDate: Date;

    @Column("datetime", { name: "toDate" })
    toDate: Date;

    @Column("varchar", { name: "leaveApprover", length: 30 })
    leaveApprover: string;

    @Column("datetime", { name: "postingDate" })
    postingDate: Date;

    @Column("int", { name: "sNo", nullable: true })
    sNo: number | null;

    @Column("varchar", { name: "company", length: 40 })
    company: string;

    @Column("varchar", { name: "empNumber", nullable: true, length: 255 })
    empNumber: string | null;

    @Column("varchar", { name: "deptName", nullable: true, length: 255 })
    deptName: string | null;

    setProperties(leaveappDTO: LeaveappDTO) {
        this.lvappId = leaveappDTO.lvappId;
        this.series = leaveappDTO.series;
        this.leaveType = leaveappDTO.leaveType;
        this.reason = leaveappDTO.reason;
        this.fromDate = leaveappDTO.fromDate;
        this.toDate = leaveappDTO.toDate;
        this.leaveApprover = leaveappDTO.leaveApprover;
        this.postingDate = leaveappDTO.postingDate;
        this.sNo = leaveappDTO.sNo;
        this.company = leaveappDTO.company;
        this.empNumber = leaveappDTO.empNumber;
        this.deptName = leaveappDTO.deptName;
        this.insertUser = leaveappDTO.insertUser;
        this.insertDatetime = leaveappDTO.insertDatetime;
        this.updatedUser = leaveappDTO.updatedUser;
        this.updatedDatetime = leaveappDTO.updatedDatetime;
    }
}
