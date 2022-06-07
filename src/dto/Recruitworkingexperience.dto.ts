import { IsNotEmpty } from "class-validator";
import { Recruitworkingexperience001mb } from "src/entity/Recruitworkingexperience001mb.entity";
import { BaseDTO } from "./Base.dto";

export class RecruitworkingexperienceDTO extends BaseDTO {

	workingexperienceId: number;

	@IsNotEmpty()
	applicantNamePrefix: string;

	@IsNotEmpty()
	applicantName: string;

	@IsNotEmpty()
	companyName: string;

	@IsNotEmpty()
	position: string;

	@IsNotEmpty()
	grade: string;

	@IsNotEmpty()
	dateOfJoin: Date;

	@IsNotEmpty()
	dateOfRelieve: Date;

	@IsNotEmpty()
	workingexperienceLetter: string;

	setProperties(recruitworkingexperience001mb: Recruitworkingexperience001mb) {
		this.workingexperienceId = recruitworkingexperience001mb.workingexperienceId;
		this.applicantNamePrefix = recruitworkingexperience001mb.applicantNamePrefix;
		this.applicantName = recruitworkingexperience001mb.applicantName;
		this.companyName = recruitworkingexperience001mb.companyName;
		this.position = recruitworkingexperience001mb.position;
		this.grade = recruitworkingexperience001mb.grade;
		this.dateOfJoin = recruitworkingexperience001mb.dateOfJoin;
		this.dateOfRelieve = recruitworkingexperience001mb.dateOfRelieve;
		this.workingexperienceLetter = recruitworkingexperience001mb.workingexperienceLetter;
		this.insertUser = recruitworkingexperience001mb.insertUser;
        this.insertDatetime = recruitworkingexperience001mb.insertDatetime;
        this.updatedUser = recruitworkingexperience001mb.updatedUser;
        this.updatedDatetime = recruitworkingexperience001mb.updatedDatetime;
	}
}