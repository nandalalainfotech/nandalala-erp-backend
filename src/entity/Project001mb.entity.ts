import { ProjectDTO } from "src/dto/Project.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("project001mb")
export class Project001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "projectname", length: 30 })
    projectname: string;

    @Column("int", { name: "estimatedcost" })
    estimatedcost: number;

    @Column("datetime", { name: "enddate" })
    enddate: Date;

    @Column("datetime", { name: "startdate" })
    startdate: Date;

    @Column("varchar", { name: "status", length: 30 })
    status: string;

    setProperties(projectDTO: ProjectDTO) {
        this.id = projectDTO.id;
        this.projectname = projectDTO.projectname;
        this.estimatedcost = projectDTO.estimatedcost;
        this.enddate = projectDTO.enddate;
        this.startdate = projectDTO.startdate;
        this.status = projectDTO.status;
        this.insertUser = projectDTO.insertUser;
        this.insertDatetime = projectDTO.insertDatetime;
        this.updatedUser = projectDTO.updatedUser;
        this.updatedDatetime = projectDTO.updatedDatetime;
    }

}
