import { BudgetaccounttypeDTO } from "src/dto/Budgetaccounttype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("budgetaccounttype001mb")
export class Budgetaccounttype001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "bgaccId" })
    bgaccId: number;

    @Column("varchar", { name: "bgaccountType", length: 60 })
    bgaccountType: string;

    setProperties(budgetaccounttypeDTO: BudgetaccounttypeDTO) {
        this.bgaccId = budgetaccounttypeDTO.bgaccId;
        this.bgaccountType = budgetaccounttypeDTO.bgaccountType;
        this.insertUser = budgetaccounttypeDTO.insertUser;
        this.insertDatetime = budgetaccounttypeDTO.insertDatetime;
        this.updatedUser = budgetaccounttypeDTO.updatedUser;
        this.updatedDatetime = budgetaccounttypeDTO.updatedDatetime;
    }
}
