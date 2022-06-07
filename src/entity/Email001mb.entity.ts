import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EmailDTO } from "src/dto/Email.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("email001mb")
export class Email001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "emailId" })
    emailId: number;

    @Column("varchar", { name: "emailFrom", length: 50 })
    emailFrom: string;

    @Column("varchar", { name: "emailTo", length: 50 })
    emailTo: string;

    @Column("text", { name: "emailCC" })
    emailCc: string;

    @Column("text", { name: "emailBCC" })
    emailBcc: string;

    @Column("datetime", { name: "emailDate", nullable: true })
    emailDate: Date | null;

    @Column("varchar", { name: "emailSubject", nullable: true, length: 100 })
    emailSubject: string | null;

    @Column("text", { name: "emailBody", nullable: true })
    emailBody: string | null;

    @Column("varchar", { name: "emailCurrentPlace", nullable: true, length: 30 })
    emailCurrentPlace: string | null;

    @Column("varchar", { name: "isEmailViewed", nullable: true, length: 30 })
    isEmailViewed: string | null;

    @Column("varchar", {
        name: "isEmailAttachmentExists",
        nullable: true,
        length: 10,
    })
    isEmailAttachmentExists: string | null;

    @Column("varchar", { name: "multipleEmailId", nullable: true, length: 255 })
    multipleEmailId: string | null;

    setProperties(emailDTO: EmailDTO) {
        this.emailId = emailDTO.emailId;
        this.emailFrom = emailDTO.emailFrom;
        this.emailTo = emailDTO.emailTo;
        this.emailCc = emailDTO.emailCc;
        this.emailBcc = emailDTO.emailBcc;
        this.emailDate = emailDTO.emailDate;
        this.emailSubject = emailDTO.emailSubject;
        this.emailBody = emailDTO.emailBody;
        this.emailCurrentPlace = emailDTO.emailCurrentPlace;
        this.isEmailViewed = emailDTO.isEmailViewed;
        this.isEmailAttachmentExists = emailDTO.isEmailAttachmentExists;
        this.multipleEmailId = emailDTO.multipleEmailId;
        this.insertUser = emailDTO.insertUser;
        this.insertDatetime = emailDTO.insertDatetime;
        this.updatedUser = emailDTO.updatedUser;
        this.updatedDatetime = emailDTO.updatedDatetime;
    }
}
