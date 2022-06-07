import { IsNotEmpty } from "class-validator";
import { Recruitrelieving001mb } from "src/entity/Recruitrelieving001mb.entity";
import { BaseDTO } from "./Base.dto";

export class RecruitrelievingDTO extends BaseDTO {


	relievingId: number;

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
	line1: string;

	@IsNotEmpty()
	line2: string;

	@IsNotEmpty()
	cityOrVillage: string;

	@IsNotEmpty()
	stateOrTerritory: string;

	@IsNotEmpty()
	country: string;

	@IsNotEmpty()
	postalCode: number;

	@IsNotEmpty()
	phoneNo: number;

	@IsNotEmpty()
	alternativePhoneNo: number;

	@IsNotEmpty()
	relievingLetter: string;


	setProperties(recruitrelieving001mb: Recruitrelieving001mb) {
		this.relievingId = recruitrelieving001mb.relievingId;
		this.applicantNamePrefix = recruitrelieving001mb.applicantNamePrefix;
		this.applicantName = recruitrelieving001mb.applicantName;
		this.companyName = recruitrelieving001mb.companyName;
		this.position = recruitrelieving001mb.position;
		this.grade = recruitrelieving001mb.grade;
		this.dateOfJoin = recruitrelieving001mb.dateOfJoin;
		this.dateOfRelieve = recruitrelieving001mb.dateOfRelieve;
		this.line1 = recruitrelieving001mb.line1;
		this.line2 = recruitrelieving001mb.line2;
		this.cityOrVillage = recruitrelieving001mb.cityOrVillage;
		this.stateOrTerritory = recruitrelieving001mb.stateOrTerritory;
		this.country = recruitrelieving001mb.country;
		this.postalCode = recruitrelieving001mb.postalCode;
		this.phoneNo = recruitrelieving001mb.phoneNo;
		this.alternativePhoneNo = recruitrelieving001mb.alternativePhoneNo;
		this.relievingLetter = recruitrelieving001mb.relievingLetter;
		this.insertUser = recruitrelieving001mb.insertUser;
        this.insertDatetime = recruitrelieving001mb.insertDatetime;
        this.updatedUser = recruitrelieving001mb.updatedUser;
        this.updatedDatetime = recruitrelieving001mb.updatedDatetime;
	}
}
