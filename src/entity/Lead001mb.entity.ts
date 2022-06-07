import { LeadDTO } from "src/dto/Lead.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("lead001mb")
export class Lead001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "personname", length: 30 })
    personname: string;

    @Column("varchar", { name: "organisationname", length: 30 })
    organisationname: string;

    @Column("varchar", { name: "status", length: 30 })
    status: string;

    @Column("varchar", { name: "source", length: 30 })
    source: string;

    @Column("varchar", { name: "leadowner", length: 50 })
    leadowner: string;

    @Column("varchar", { name: "nextcontactby", nullable: true, length: 50 })
    nextcontactby: string | null;

    @Column("varchar", { name: "leadtype", nullable: true, length: 50 })
    leadtype: string | null;

    @Column("varchar", { name: "marketsegment", nullable: true, length: 50 })
    marketsegment: string | null;

    setProperties(leadDTO: LeadDTO) {
        this.id = leadDTO.id;
        this.personname = leadDTO.personname;
        this.organisationname = leadDTO.organisationname;
        this.status = leadDTO.status;
        this.source = leadDTO.source;
        this.leadowner = leadDTO.leadowner;
        this.nextcontactby = leadDTO.nextcontactby;
        this.leadtype = leadDTO.leadtype;
        this.marketsegment = leadDTO.marketsegment;
        this.insertUser = leadDTO.insertUser;
        this.insertDatetime = leadDTO.insertDatetime;
        this.updatedUser = leadDTO.updatedUser;
        this.updatedDatetime = leadDTO.updatedDatetime;
    }

}
