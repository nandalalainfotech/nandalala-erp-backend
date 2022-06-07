import { BudgetmonthdistDTO } from "src/dto/Budgetmonthdist.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("budgetmonthdist001mb")
export class Budgetmonthdist001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "bmdId" })
    bmdId: number;

    @Column("varchar", { name: "distName", length: 50 })
    distName: string;

    @Column("year", { name: "fiscalYear" })
    fiscalYear: number;

    @Column("varchar", { name: "respMonth", length: 50 })
    respMonth: string;

    @Column("decimal", {
        name: "percentAllocate",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    percentAllocate: string | null;

    setProperties(budgetmonthdistDTO: BudgetmonthdistDTO) {
        this.bmdId = budgetmonthdistDTO.bmdId;
        this.distName = budgetmonthdistDTO.distName;
        this.fiscalYear = budgetmonthdistDTO.fiscalYear;
        this.percentAllocate = budgetmonthdistDTO.percentAllocate;
        this.respMonth = budgetmonthdistDTO.respMonth;
        this.insertUser = budgetmonthdistDTO.insertUser;
        this.insertDatetime = budgetmonthdistDTO.insertDatetime;
        this.updatedUser = budgetmonthdistDTO.updatedUser;
        this.updatedDatetime = budgetmonthdistDTO.updatedDatetime;
    }

}
