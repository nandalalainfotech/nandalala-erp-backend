import { DailytimesheetDTO } from "src/dto/Dailytimesheet.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("dailytimesheet001mb")
export class Dailytimesheet001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "timesheet", length: 45 })
    timesheet: string;

    @Column("varchar", { name: "employee", length: 45 })
    employee: string;

    @Column("varchar", { name: "employeename", length: 45 })
    employeename: string;

    @Column("datetime", { name: "fromdatetime" })
    fromdatetime: Date;

    @Column("datetime", { name: "todatetime" })
    todatetime: Date;

    @Column("varchar", { name: "hours", length: 50 })
    hours: string;

    @Column("varchar", { name: "activitytype", length: 50 })
    activitytype: string;

    @Column("varchar", { name: "task", length: 50 })
    task: string;

    @Column("varchar", { name: "project", length: 45 })
    project: string;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    setProperties(dailytimesheetDTO: DailytimesheetDTO) {
        this.id = dailytimesheetDTO.id;
        this.activitytype = dailytimesheetDTO.activitytype;
        this.timesheet = dailytimesheetDTO.timesheet;
        this.employee = dailytimesheetDTO.employee;
        this.employeename = dailytimesheetDTO.employeename;
        this.fromdatetime = dailytimesheetDTO.fromdatetime;
        this.todatetime = dailytimesheetDTO.todatetime;
        this.hours = dailytimesheetDTO.hours;
        this.task = dailytimesheetDTO.task;
        this.project = dailytimesheetDTO.project;
        this.status = dailytimesheetDTO.status;
        this.insertUser = dailytimesheetDTO.insertUser;
        this.insertDatetime = dailytimesheetDTO.insertDatetime;
        this.updatedUser = dailytimesheetDTO.updatedUser;
        this.updatedDatetime = dailytimesheetDTO.updatedDatetime;
    }
}
