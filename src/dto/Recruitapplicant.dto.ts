import { IsNotEmpty } from "class-validator";
import { Recruitapplicant001mb } from "src/entity/Recruitapplicant001mb.entity";
import { BaseDTO } from "./Base.dto";

export class RecruitapplicantDTO extends BaseDTO {

	appId: number;

	@IsNotEmpty()
	applicantName: string;

	@IsNotEmpty()
	status: string;

	jobId: number | null;

	@IsNotEmpty()
	jobName: string | null;

	setProperties(recruitapplicant001mb: Recruitapplicant001mb) {
		this.appId = recruitapplicant001mb.appId;
		this.applicantName = recruitapplicant001mb.applicantName;
		this.status = recruitapplicant001mb.status;
		this.jobId = recruitapplicant001mb.jobId;
		this.jobName = recruitapplicant001mb.jobName;
		this.insertUser = recruitapplicant001mb.insertUser;
        this.insertDatetime = recruitapplicant001mb.insertDatetime;
        this.updatedUser = recruitapplicant001mb.updatedUser;
        this.updatedDatetime = recruitapplicant001mb.updatedDatetime;
	}
}
