import { ProcessprDTO } from "src/dto/Processpr.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Index("sNo", ["sNo"], {})
@Entity("processpr001mb")
export class Processpr001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "processId" })
    processId: number;

    @Column("int", { name: "sNo", nullable: true })
    sNo: number | null;

    @Column("year", { name: "year" })
    year: number;

    @Column("int", { name: "month" })
    month: number;

    @Column("datetime", { name: "postingDate" })
    postingDate: Date;

    @Column("varchar", { name: "deptName", nullable: true, length: 255 })
    deptName: string | null;

    @Column("varchar", { name: "empCompany", nullable: true, length: 255 })
    empCompany: string | null;

    setProperties(processprDTO: ProcessprDTO) {
        this.processId = processprDTO.processId;
        this.sNo = processprDTO.sNo;
        this.year = processprDTO.year;
        this.month = processprDTO.month;
        this.postingDate = processprDTO.postingDate;
        this.deptName = processprDTO.deptName;
        this.empCompany = processprDTO.empCompany;
        this.insertUser = processprDTO.insertUser;
        this.insertDatetime = processprDTO.insertDatetime;
        this.updatedUser = processprDTO.updatedUser;
        this.updatedDatetime = processprDTO.updatedDatetime;
    }
}
