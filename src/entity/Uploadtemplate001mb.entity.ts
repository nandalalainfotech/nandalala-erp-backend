import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UploadtemplateDTO } from "src/dto/Uploadtemplate.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("uploadtemplate001mb")
export class Uploadtemplate001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("blob", { name: "content" })
    content: Buffer;

    @Column("varchar", { name: "filename", length: 45 })
    filename: string;

    setProperties(uploadtemplateDTO: UploadtemplateDTO) {
        this.id = uploadtemplateDTO.id;
        this.content = uploadtemplateDTO.content;
        this.filename = uploadtemplateDTO.filename;
        this.insertUser = uploadtemplateDTO.insertUser;
        this.insertDatetime = uploadtemplateDTO.insertDatetime;
        this.updatedUser = uploadtemplateDTO.updatedUser;
        this.updatedDatetime = uploadtemplateDTO.updatedDatetime;
    }
}
