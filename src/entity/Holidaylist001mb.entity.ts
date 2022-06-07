import { HolidaylistDTO } from "src/dto/Holidaylist.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("holidaylist001mb")
export class Holidaylist001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "hlistId" })
    hlistId: number;

    @Column("varchar", { name: "holidayName", length: 30 })
    holidayName: string;

    @Column("varchar", { name: "weeklyOff", nullable: true, length: 30 })
    weeklyOff: string | null;

    setProperties(holidaylistDTO: HolidaylistDTO) {
        this.hlistId = holidaylistDTO.hlistId;
        this.holidayName = holidaylistDTO.holidayName;
        this.weeklyOff = holidaylistDTO.weeklyOff;
        this.insertUser = holidaylistDTO.insertUser;
        this.insertDatetime = holidaylistDTO.insertDatetime;
        this.updatedUser = holidaylistDTO.updatedUser;
        this.updatedDatetime = holidaylistDTO.updatedDatetime;
    }
}
