import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TermsconditionDTO } from "src/dto/Termscondition.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("termscondition001mb")
export class Termscondition001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "tcId" })
    tcId: number;

    @Column("varchar", { name: "tcName", length: 50 })
    tcName: string;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    @Column("varchar", { name: "terms", length: 200 })
    terms: string;

    setProperties(termsconditionDTO: TermsconditionDTO) {
        this.tcId = termsconditionDTO.tcId;
        this.tcName = termsconditionDTO.tcName;
        this.status = termsconditionDTO.status;
        this.terms = termsconditionDTO.terms;
        this.insertUser = termsconditionDTO.insertUser;
        this.insertDatetime = termsconditionDTO.insertDatetime;
        this.updatedUser = termsconditionDTO.updatedUser;
        this.updatedDatetime = termsconditionDTO.updatedDatetime;
    }
}
