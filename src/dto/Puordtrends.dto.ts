import { IsNotEmpty } from "class-validator";
import { Puordtrends001mb } from "src/entity/Puordtrends001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PuordtrendsDTO extends BaseDTO {
	ptrId: number;

	@IsNotEmpty()
	period: string;

	@IsNotEmpty()
	basedOn: string;

	@IsNotEmpty()
	fiscalYear: number;

	@IsNotEmpty()
	company: string;

	@IsNotEmpty()
	itemCode: string;

	@IsNotEmpty()
	janQty: string | null;

	@IsNotEmpty()
	janAmt: string | null;

	@IsNotEmpty()
	febQty: string | null;

	@IsNotEmpty()
	febAmt: string | null;

	@IsNotEmpty()
	marQty: string | null;

	@IsNotEmpty()
	marAmt: string | null;

	@IsNotEmpty()
	aprQty: string;

	@IsNotEmpty()
	aprAmt: string | null;

	@IsNotEmpty()
	mayQty: string | null;

	@IsNotEmpty()
	mayAmt: string | null;

	@IsNotEmpty()
	junQty: string | null;

	@IsNotEmpty()
	junAmt: string | null;

	@IsNotEmpty()
	julQty: string | null;

	@IsNotEmpty()

	julAmt: string | null;

	@IsNotEmpty()
	augQty: string | null;

	@IsNotEmpty()
	augAmt: string | null;

	@IsNotEmpty()
	sepQty: string | null;

	@IsNotEmpty()
	sepAmt: string | null;

	@IsNotEmpty()
	octQty: string | null;

	@IsNotEmpty()
	octAmt: string | null;

	@IsNotEmpty()
	novQty: string | null;

	@IsNotEmpty()
	novAmt: string | null;

	@IsNotEmpty()
	decQty: string | null;

	@IsNotEmpty()
	decAmt: string | null;

	@IsNotEmpty()
	totalQty: string | null;

	@IsNotEmpty()
	totalAmt: string | null;

	@IsNotEmpty()
	augQtyt: string | null;


	setProperties(puordtrends001mb: Puordtrends001mb) {

		this.ptrId = puordtrends001mb.ptrId;
		this.period = puordtrends001mb.period;
		this.basedOn = puordtrends001mb.basedOn;
		this.fiscalYear = puordtrends001mb.fiscalYear;
		this.company = puordtrends001mb.company;
		this.itemCode = puordtrends001mb.itemCode;
		this.janQty = puordtrends001mb.janQty;
		this.janAmt = puordtrends001mb.janAmt;
		this.febQty = puordtrends001mb.febQty;
		this.febAmt = puordtrends001mb.febAmt;
		this.marQty = puordtrends001mb.marQty;
		this.marAmt = puordtrends001mb.marAmt;
		this.aprQty = puordtrends001mb.aprQty;
		this.aprAmt = puordtrends001mb.aprAmt;
		this.mayQty = puordtrends001mb.mayQty;
		this.mayAmt = puordtrends001mb.mayAmt;
		this.junQty = puordtrends001mb.junQty;
		this.junAmt = puordtrends001mb.junAmt;
		this.julQty = puordtrends001mb.julQty;
		this.julAmt = puordtrends001mb.julAmt;
		this.augQty = puordtrends001mb.augQty;
		this.augAmt = puordtrends001mb.augAmt;
		this.sepQty = puordtrends001mb.sepQty;
		this.sepAmt = puordtrends001mb.sepAmt;
		this.octQty = puordtrends001mb.octQty;
		this.octAmt = puordtrends001mb.octAmt;
		this.novQty = puordtrends001mb.novQty;
		this.novAmt = puordtrends001mb.novAmt;
		this.decQty = puordtrends001mb.decQty;
		this.decAmt = puordtrends001mb.decAmt;
		this.totalQty = puordtrends001mb.totalQty;
		this.totalAmt = puordtrends001mb.totalAmt;
		this.augQtyt = puordtrends001mb.augQtyt;
		this.insertUser = puordtrends001mb.insertUser;
        this.insertDatetime = puordtrends001mb.insertDatetime;
        this.updatedUser = puordtrends001mb.updatedUser;
        this.updatedDatetime = puordtrends001mb.updatedDatetime;
	}

}
