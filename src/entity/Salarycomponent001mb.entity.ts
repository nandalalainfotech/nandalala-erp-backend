import { SalarycomponentDTO } from "src/dto/Salarycomponent.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("salarycomponent001mb")
export class Salarycomponent001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "salcompId" })
    salcompId: number;

    @Column("varchar", { name: "comName", nullable: true, length: 50 })
    comName: string | null;

    @Column("varchar", { name: "abbr", nullable: true, length: 30 })
    abbr: string | null;

    setProperties(salarycomponentDTO: SalarycomponentDTO) {
        this.salcompId = salarycomponentDTO.salcompId;
        this.comName = salarycomponentDTO.comName;
        this.abbr = salarycomponentDTO.abbr;
        this.insertUser = salarycomponentDTO.insertUser;
        this.insertDatetime = salarycomponentDTO.insertDatetime;
        this.updatedUser = salarycomponentDTO.updatedUser;
        this.updatedDatetime = salarycomponentDTO.updatedDatetime;
    }
}
