import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FilemanagerDTO } from "src/dto/Filemanager.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("filemanager001mb")
export class Filemanager001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "category", nullable: true, length: 255 })
    category: string | null;

    @Column("varchar", { name: "filename", nullable: true, length: 255 })
    filename: string | null;

    @Column("varchar", { name: "loginuser", nullable: true, length: 255 })
    loginuser: string | null;

    @Column("varchar", { name: "originalfilename", nullable: true, length: 255 })
    originalfilename: string | null;



    setProperties(filemanagerDTO: FilemanagerDTO) {
        this.id = filemanagerDTO.id;
        this.category = filemanagerDTO.category;
        this.filename = filemanagerDTO.filename;
        this.loginuser = filemanagerDTO.loginuser;
        this.originalfilename = filemanagerDTO.originalfilename;
        this.insertUser = filemanagerDTO.insertUser;
        this.insertDatetime = filemanagerDTO.insertDatetime;
        this.updatedUser = filemanagerDTO.updatedUser;
        this.updatedDatetime = filemanagerDTO.updatedDatetime;
    }
}
