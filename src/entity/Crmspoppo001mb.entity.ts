import { CrmspoppoDTO } from "src/dto/Crmspoppo.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("crmspoppo001mb")
export class Crmspoppo001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "oppId" })
    oppId: number;

    @Column("varchar", { name: "oppSeries", length: 50 })
    oppSeries: string;

    @Column("varchar", { name: "oppType", nullable: true, length: 40 })
    oppType: string | null;

    @Column("varchar", { name: "oppFrom", nullable: true, length: 40 })
    oppFrom: string | null;

    @Column("varchar", { name: "status", nullable: true, length: 40 })
    status: string | null;

    @Column("char", { name: "withitems", nullable: true, length: 1 })
    withitems: boolean;

    setProperties(crmspoppoDTO: CrmspoppoDTO) {
        this.oppId = crmspoppoDTO.oppId;
        this.oppSeries = crmspoppoDTO.oppSeries;
        this.oppType = crmspoppoDTO.oppType;
        this.oppFrom = crmspoppoDTO.oppFrom;
        this.status = crmspoppoDTO.status;
        this.withitems = crmspoppoDTO.withitems;
        this.insertUser = crmspoppoDTO.insertUser;
        this.insertDatetime = crmspoppoDTO.insertDatetime;
        this.updatedUser = crmspoppoDTO.updatedUser;
        this.updatedDatetime = crmspoppoDTO.updatedDatetime;
    }

}
