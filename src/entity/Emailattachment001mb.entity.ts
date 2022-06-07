import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EmailattachmentDTO } from "src/dto/Emailattachment.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("emailattachment001mb")
export class Emailattachment001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "emailattachmentid" })
    emailattachmentid: number;

    @Column("tinyblob", { name: "content", nullable: true })
    content: Buffer | null;

    @Column("varchar", { name: "contenttype", nullable: true, length: 255 })
    contenttype: string | null;

    @Column("varchar", { name: "emailId", nullable: true, length: 225 })
    emailId: string | null;

    @Column("varchar", { name: "filename", nullable: true, length: 255 })
    filename: string | null;

    @Column("varchar", { name: "filesize", nullable: true, length: 255 })
    filesize: string | null;

    setProperties(emailattachmentDTO: EmailattachmentDTO) {
        this.emailattachmentid = emailattachmentDTO.emailattachmentid;
        this.content = emailattachmentDTO.content;
        this.contenttype = emailattachmentDTO.contenttype;
        this.emailId = emailattachmentDTO.emailId;
        this.filename = emailattachmentDTO.filename;
        this.filesize = emailattachmentDTO.filesize;
        this.insertUser = emailattachmentDTO.insertUser;
        this.insertDatetime = emailattachmentDTO.insertDatetime;
        this.updatedUser = emailattachmentDTO.updatedUser;
        this.updatedDatetime = emailattachmentDTO.updatedDatetime;
    }
}
