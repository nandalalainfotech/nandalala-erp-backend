import { CommunicationDTO } from "src/dto/Communication.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("communication001mb")
export class Communication001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "commId" })
    commId: number;

    @Column("varchar", { name: "subject", length: 50 })
    subject: string;

    @Column("varchar", { name: "status", nullable: true, length: 20 })
    status: string | null;

    @Column("varchar", { name: "sentrec", nullable: true, length: 20 })
    sentrec: string | null;

    setProperties(communicationDTO: CommunicationDTO) {
        this.commId = communicationDTO.commId;
        this.subject = communicationDTO.subject;
        this.sentrec = communicationDTO.sentrec;
        this.status = communicationDTO.status;
        this.insertUser = communicationDTO.insertUser;
        this.insertDatetime = communicationDTO.insertDatetime;
        this.updatedUser = communicationDTO.updatedUser;
        this.updatedDatetime = communicationDTO.updatedDatetime;
    }
}
