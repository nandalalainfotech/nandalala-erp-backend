import { SalarystructureDTO } from "src/dto/Salarystructure.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("salarystructure001mb")
export class Salarystructure001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "strId" })
    strId: number;

    @Column("varchar", { name: "empName", nullable: true, length: 30 })
    empName: string | null;

    @Column("varchar", { name: "isActive", length: 20 })
    isActive: string;

    @Column("datetime", { name: "fromDate", nullable: true })
    fromDate: Date | null;

    setProperties(salarystructureDTO: SalarystructureDTO) {
        this.strId = salarystructureDTO.strId;
        this.empName = salarystructureDTO.empName;
        this.isActive = salarystructureDTO.isActive;
        this.fromDate = salarystructureDTO.fromDate;
        this.insertUser = salarystructureDTO.insertUser;
        this.insertDatetime = salarystructureDTO.insertDatetime;
        this.updatedUser = salarystructureDTO.updatedUser;
        this.updatedDatetime = salarystructureDTO.updatedDatetime;
    }
}
