import { ExpensesclmDTO } from "src/dto/Expensesclm.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("expensesclm001mb")
export class Expensesclm001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "expclmId" })
    expclmId: number;

    @Column("varchar", { name: "expCode", nullable: true, length: 255 })
    expCode: string | null;

    @Column("varchar", { name: "expType", nullable: true, length: 255 })
    expType: string | null;

    @Column("varchar", { name: "status", nullable: true, length: 255 })
    status: string | null;

    @Column("int", { name: "totalclmAmt", nullable: true })
    totalclmAmt: number | null;

    setProperties(expensesclmDTO: ExpensesclmDTO) {
        this.expclmId = expensesclmDTO.expclmId;
        this.expCode = expensesclmDTO.expCode;
        this.status = expensesclmDTO.status;
        this.expType = expensesclmDTO.expType;
        this.totalclmAmt = expensesclmDTO.totalclmAmt;
        this.insertUser = expensesclmDTO.insertUser;
        this.insertDatetime = expensesclmDTO.insertDatetime;
        this.updatedUser = expensesclmDTO.updatedUser;
        this.updatedDatetime = expensesclmDTO.updatedDatetime;
    }
}
