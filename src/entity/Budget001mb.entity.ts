import { BudgetDTO } from "src/dto/Budget.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("budget001mb")
export class Budget001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "bgId" })
    bgId: number;

    @Column("varchar", { name: "budgetName", length: 50 })
    budgetName: string;

    @Column("varchar", { name: "docStatus", length: 50 })
    docStatus: string;

    @Column("varchar", { name: "centerName", length: 50 })
    centerName: string;

    @Column("varchar", { name: "actifannualbgexceed", length: 50 })
    actifannualbgexceed: string;

    @Column("varchar", { name: "actifmonthbgexceed", length: 50 })
    actifmonthbgexceed: string;

    @Column("year", { name: "fiscalYear" })
    fiscalYear: number;

    @Column("varchar", { name: "company", length: 50 })
    company: string;

    @Column("varchar", { name: "bgaccountType", length: 60 })
    bgaccountType: string;

    @Column("decimal", {
        name: "bgAmount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    bgAmount: string | null;

    setProperties(budgetDTO: BudgetDTO) {
        this.bgId = budgetDTO.bgId;
        this.budgetName = budgetDTO.budgetName;
        this.docStatus = budgetDTO.docStatus;
        this.centerName = budgetDTO.centerName;
        this.actifannualbgexceed = budgetDTO.actifannualbgexceed;
        this.actifmonthbgexceed = budgetDTO.actifmonthbgexceed;
        this.fiscalYear = budgetDTO.fiscalYear;
        this.company = budgetDTO.company;
        this.bgaccountType = budgetDTO.bgaccountType;
        this.bgAmount = budgetDTO.bgAmount;
        this.insertUser = budgetDTO.insertUser;
        this.insertDatetime = budgetDTO.insertDatetime;
        this.updatedUser = budgetDTO.updatedUser;
        this.updatedDatetime = budgetDTO.updatedDatetime;
    }
}
