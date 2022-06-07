import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreditcontrolDTO } from "src/dto/creditcontrol.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("creditcontrol001mb")
export class Creditcontrol001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "credId" })
    credId: number;

    @Column("varchar", { name: "creditName", length: 60 })
    creditName: string;

    setProperties(creditcontrolDTO: CreditcontrolDTO) {
        this.credId = creditcontrolDTO.credId;
        this.creditName = creditcontrolDTO.creditName;
        this.insertUser = creditcontrolDTO.insertUser;
        this.insertDatetime = creditcontrolDTO.insertDatetime;
        this.updatedUser = creditcontrolDTO.updatedUser;
        this.updatedDatetime = creditcontrolDTO.updatedDatetime;
    }
}
