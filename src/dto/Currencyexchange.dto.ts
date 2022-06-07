import { IsNotEmpty } from "class-validator";
import { Currencyexchange001mb } from "src/entity/Currencyexchange001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CurrencyexchangeDTO extends BaseDTO {
	cuexId: number;

	@IsNotEmpty()
	cuexName: string;

	@IsNotEmpty()
	fromCurrency: number;

	@IsNotEmpty()
	toCurrency: number;

	setProperties(currencyexchange001mb: Currencyexchange001mb) {
		this.cuexId = currencyexchange001mb.cuexId;
		this.cuexName = currencyexchange001mb.cuexName;
		this.fromCurrency = currencyexchange001mb.fromCurrency;
		this.toCurrency = currencyexchange001mb.toCurrency;
		this.insertUser = currencyexchange001mb.insertUser;
        this.insertDatetime = currencyexchange001mb.insertDatetime;
        this.updatedUser = currencyexchange001mb.updatedUser;
        this.updatedDatetime = currencyexchange001mb.updatedDatetime;
	}


}
