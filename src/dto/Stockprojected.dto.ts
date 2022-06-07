import { IsNotEmpty } from "class-validator";
import { Stockprojected001mb } from "src/entity/Stockprojected001mb.entity";
import { BaseDTO } from "./Base.dto";

export class StockprojectedDTO extends BaseDTO {
	id: number;

	@IsNotEmpty()
	actualqty: number | null;

	@IsNotEmpty()
	brand: string | null;

	@IsNotEmpty()
	description: string | null;

	@IsNotEmpty()
	itemcode: string | null;

	@IsNotEmpty()
	itemgroup: string | null;

	@IsNotEmpty()
	itemname: string | null;

	@IsNotEmpty()
	orderedqty: number | null;

	@IsNotEmpty()
	plannedqty: number | null;

	@IsNotEmpty()
	projectedqty: number | null;

	@IsNotEmpty()
	reorderlevel: number | null;

	@IsNotEmpty()
	reorderqty: number | null;

	@IsNotEmpty()
	requestedqty: number | null;

	@IsNotEmpty()
	reservedqty: number | null;

	@IsNotEmpty()
	shortageqty: number | null;

	@IsNotEmpty()
	stockuom: string | null;

	@IsNotEmpty()
	warehouse: string | null;

	setProperties(stockprojected001mb: Stockprojected001mb) {
		this.id = stockprojected001mb.id;
		this.actualqty = stockprojected001mb.actualqty;
		this.brand = stockprojected001mb.brand;
		this.description = stockprojected001mb.description;
		this.itemcode = stockprojected001mb.itemcode;
		this.itemgroup = stockprojected001mb.itemgroup;
		this.itemname = stockprojected001mb.itemname;
		this.orderedqty = stockprojected001mb.orderedqty;
		this.plannedqty = stockprojected001mb.plannedqty;
		this.projectedqty = stockprojected001mb.projectedqty;
		this.reorderlevel = stockprojected001mb.reorderlevel;
		this.reorderqty = stockprojected001mb.reorderqty;
		this.requestedqty = stockprojected001mb.requestedqty;
		this.reservedqty = stockprojected001mb.reservedqty;
		this.shortageqty = stockprojected001mb.shortageqty;
		this.stockuom = stockprojected001mb.stockuom;
		this.warehouse = stockprojected001mb.warehouse;
		this.insertUser = stockprojected001mb.insertUser;
        this.insertDatetime = stockprojected001mb.insertDatetime;
        this.updatedUser = stockprojected001mb.updatedUser;
        this.updatedDatetime = stockprojected001mb.updatedDatetime;
	}
}
