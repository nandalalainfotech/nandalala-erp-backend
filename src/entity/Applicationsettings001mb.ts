import { ApplicationsettingsDTO } from "src/dto/applicationsettings.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("applicationsettings001mb", { schema: "erpnextgeneration4" })
export class Applicationsettings001mb {
    @PrimaryGeneratedColumn({ type: "int", name: "registerid" })
    registerid: number;

    @Column("varchar", { name: "clientname", length: 255 })
    clientname: string;

    @Column("varchar", { name: "clientdescription", length: 255 })
    clientdescription: string;

    @Column("varchar", { name: "category", length: 255 })
    category: string;

    @Column("varchar", { name: "filename", length: 255 })
    filename: string;

    @Column("varchar", { name: "loginuser", length: 255 })
    loginuser: string;

    @Column("varchar", { name: "insert_user", length: 40 })
    insertUser: string;

    @Column("datetime", { name: "insert_datetime" })
    insertDatetime: Date;

    @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
    updatedUser: string | null;

    @Column("datetime", { name: "updated_datetime", nullable: true })
    updatedDatetime: Date | null;

    @Column("varchar", { name: "originalfilename", length: 255 })
    originalfilename: string;

    setProperties(applicationsettingsDTO: ApplicationsettingsDTO) {

        this.registerid = applicationsettingsDTO.registerid;
        this.clientname = applicationsettingsDTO.clientname;
        this.clientdescription = applicationsettingsDTO.clientdescription;
        this.category = applicationsettingsDTO.category;
        this.filename = applicationsettingsDTO.filename;
        this.loginuser = applicationsettingsDTO.loginuser;
        this.originalfilename = applicationsettingsDTO.originalfilename;
        this.insertUser = applicationsettingsDTO.insertUser;
        this.insertDatetime = applicationsettingsDTO.insertDatetime;
        this.updatedUser = applicationsettingsDTO.updatedUser;
        this.updatedDatetime = applicationsettingsDTO.updatedDatetime;
    }
}
