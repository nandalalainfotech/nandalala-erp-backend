import { EmpattendanceDTO } from "src/dto/Empattendance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("empattendance001mb")
export class Empattendance001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "Id" })
    id: number;

    @Column("int", { name: "clBalance", nullable: true })
    clBalance: number | null;

    @Column("varchar", { name: "clTaken", nullable: true, length: 255 })
    clTaken: string | null;

    @Column("int", { name: "compoffBalance", nullable: true })
    compoffBalance: number | null;

    @Column("varchar", { name: "compoffTaken", nullable: true, length: 255 })
    compoffTaken: string | null;

    @Column("varchar", { name: "deptName", nullable: true, length: 255 })
    deptName: string | null;

    @Column("varchar", { name: "empName", nullable: true, length: 255 })
    empName: string | null;

    @Column("varchar", { name: "empNumber", nullable: true, length: 255 })
    empNumber: string | null;

    @Column("int", { name: "lwtoutpBalance", nullable: true })
    lwtoutpBalance: number | null;

    @Column("varchar", { name: "lwtoutpTaken", nullable: true, length: 255 })
    lwtoutpTaken: string | null;

    @Column("int", { name: "mtlvBalance", nullable: true })
    mtlvBalance: number | null;

    @Column("varchar", { name: "mtlvTaken", nullable: true, length: 255 })
    mtlvTaken: string | null;

    @Column("int", { name: "ptyBalance", nullable: true })
    ptyBalance: number | null;

    @Column("varchar", { name: "ptyTaken", nullable: true, length: 255 })
    ptyTaken: string | null;

    @Column("int", { name: "pvglvBalance", nullable: true })
    pvglvBalance: number | null;

    @Column("varchar", { name: "pvglvTaken", nullable: true, length: 255 })
    pvglvTaken: string | null;

    @Column("int", { name: "sklvBalance", nullable: true })
    sklvBalance: number | null;

    @Column("varchar", { name: "sklvTaken", nullable: true, length: 255 })
    sklvTaken: string | null;

    @Column("int", { name: "vcBalance", nullable: true })
    vcBalance: number | null;

    @Column("varchar", { name: "vcTaken", nullable: true, length: 255 })
    vcTaken: string | null;

    setProperties(empattendanceDTO: EmpattendanceDTO) {
        this.id = empattendanceDTO.id;
        this.clBalance = empattendanceDTO.clBalance;
        this.clTaken = empattendanceDTO.clTaken;
        this.compoffBalance = empattendanceDTO.compoffBalance;
        this.compoffTaken = empattendanceDTO.compoffTaken;
        this.deptName = empattendanceDTO.deptName;
        this.empName = empattendanceDTO.empName;
        this.empNumber = empattendanceDTO.empNumber;
        this.lwtoutpBalance = empattendanceDTO.lwtoutpBalance;
        this.lwtoutpTaken = empattendanceDTO.lwtoutpTaken;
        this.mtlvBalance = empattendanceDTO.mtlvBalance;
        this.mtlvTaken = empattendanceDTO.mtlvTaken;
        this.ptyBalance = empattendanceDTO.ptyBalance;
        this.ptyTaken = empattendanceDTO.ptyTaken;
        this.pvglvBalance = empattendanceDTO.pvglvBalance;
        this.pvglvTaken = empattendanceDTO.pvglvTaken;
        this.sklvBalance = empattendanceDTO.sklvBalance;
        this.sklvTaken = empattendanceDTO.sklvTaken;
        this.vcBalance = empattendanceDTO.vcBalance;
        this.vcTaken = empattendanceDTO.vcTaken;
        this.insertUser = empattendanceDTO.insertUser;
        this.insertDatetime = empattendanceDTO.insertDatetime;
        this.updatedUser = empattendanceDTO.updatedUser;
        this.updatedDatetime = empattendanceDTO.updatedDatetime;
    }
}
