import { IsNotEmpty } from "class-validator";
import { Currency001mb } from "src/entity/Currency001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CurrencyDTO extends BaseDTO{

	currId: number;

	@IsNotEmpty()
	currencyName: string;

	@IsNotEmpty()
	currencyAbbr: string | null;

	@IsNotEmpty()
	fractionName: string | null;

	setProperties(currency001mb: Currency001mb) {
		this.currId = currency001mb.currId;
		this.currencyName = currency001mb.currencyName;
		this.currencyAbbr = currency001mb.currencyAbbr;
		this.fractionName = currency001mb.fractionName;
		this.insertUser = currency001mb.insertUser;
        this.insertDatetime = currency001mb.insertDatetime;
        this.updatedUser = currency001mb.updatedUser;
        this.updatedDatetime = currency001mb.updatedDatetime;
	}

}
