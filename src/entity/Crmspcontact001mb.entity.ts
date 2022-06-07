import { CrmspcontactDTO } from "src/dto/Crmspcontact.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("crmspcontact001mb")
export class Crmspcontact001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "contId" })
    contId: number;

    @Column("varchar", { name: "leadName", length: 50 })
    leadName: string;

    @Column("varchar", { name: "status", nullable: true, length: 40 })
    status: string | null;

    setProperties(crmspcontactDTO: CrmspcontactDTO) {
        this.contId = crmspcontactDTO.contId;
        this.leadName = crmspcontactDTO.leadName;
        this.status = crmspcontactDTO.status;
        this.insertUser = crmspcontactDTO.insertUser;
        this.insertDatetime = crmspcontactDTO.insertDatetime;
        this.updatedUser = crmspcontactDTO.updatedUser;
        this.updatedDatetime = crmspcontactDTO.updatedDatetime;
    }

}
