import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PosprofileDTO } from "src/dto/Posprofile.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("posprofile001mb")
export class Posprofile001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "profileId" })
    profileId: number;

    @Column("varchar", { name: "appforUser", length: 60 })
    appforUser: string;

    @Column("varchar", { name: "series", length: 50 })
    series: string;

    @Column("varchar", { name: "company", length: 60 })
    company: string;

    setProperties(posprofileDTO: PosprofileDTO) {
        this.profileId = posprofileDTO.profileId;
        this.appforUser = posprofileDTO.appforUser;
        this.series = posprofileDTO.series;
        this.company = posprofileDTO.company;
        this.insertUser = posprofileDTO.insertUser;
        this.insertDatetime = posprofileDTO.insertDatetime;
        this.updatedUser = posprofileDTO.updatedUser;
        this.updatedDatetime = posprofileDTO.updatedDatetime;
    }
}
