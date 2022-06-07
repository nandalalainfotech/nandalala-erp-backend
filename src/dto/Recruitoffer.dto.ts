import { IsNotEmpty } from "class-validator";
import { Recruitoffer001mb } from "src/entity/Recruitoffer001mb.entity";
import { BaseDTO } from "./Base.dto";

export class RecruitofferDTO extends BaseDTO {

	offerId: number;

	@IsNotEmpty()
	applicantNamePrefix: string;

	@IsNotEmpty()
	applicantName: string;

	@IsNotEmpty()
	companyName: string;

	@IsNotEmpty()
	offer: string;

	@IsNotEmpty()
	refer: string;

	@IsNotEmpty()
	position: string;

	@IsNotEmpty()
	grade: string;

	@IsNotEmpty()
	ctc: string;

	@IsNotEmpty()
	dateOfJoin: Date;

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
	offerLetter: string;

	// @IsNotEmpty()
	status: string | null;

	setProperties(recruitoffer001mb: Recruitoffer001mb) {
		this.offerId = recruitoffer001mb.offerId;
		this.applicantNamePrefix = recruitoffer001mb.applicantNamePrefix;
		this.applicantName = recruitoffer001mb.applicantName;
		this.companyName = recruitoffer001mb.companyName;
		this.offer = recruitoffer001mb.offer;
		this.refer = recruitoffer001mb.refer;
		this.position = recruitoffer001mb.position;
		this.grade = recruitoffer001mb.grade;
		this.ctc = recruitoffer001mb.ctc;
		this.dateOfJoin = recruitoffer001mb.dateOfJoin;
		this.line1 = recruitoffer001mb.line1;
		this.line2 = recruitoffer001mb.line2;
		this.cityOrVillage = recruitoffer001mb.cityOrVillage;
		this.stateOrTerritory = recruitoffer001mb.stateOrTerritory;
		this.country = recruitoffer001mb.country;
		this.postalCode = recruitoffer001mb.postalCode;
		this.phoneNo = recruitoffer001mb.phoneNo;
		this.alternativePhoneNo = recruitoffer001mb.alternativePhoneNo;
		this.offerLetter = recruitoffer001mb.offerLetter;
		this.status = recruitoffer001mb.status;
		this.insertUser = recruitoffer001mb.insertUser;
        this.insertDatetime = recruitoffer001mb.insertDatetime;
        this.updatedUser = recruitoffer001mb.updatedUser;
        this.updatedDatetime = recruitoffer001mb.updatedDatetime;
	}
}
