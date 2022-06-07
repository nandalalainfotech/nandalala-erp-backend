import { IsNotEmpty, MaxLength } from "class-validator";
import { Accountsetup001mb } from "src/entity/Accountsetup001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AccountsetupDTO extends BaseDTO{
	setId: number;

	@IsNotEmpty()
	mkentryforstkMang: string | null;

	@IsNotEmpty()
	accfrozenUpto: string;

	@IsNotEmpty()
	creditName: string;

	@IsNotEmpty()
	roleallowedtoFreeze: string;

	@IsNotEmpty()
	chksupinvoice: string | null;

	@IsNotEmpty()
	mkpayviaJournal: string | null;

	@IsNotEmpty()
	unlinkpayonCancel: string | null;
	
	setproperty(accountsetup001mb:Accountsetup001mb){
		this.setId = accountsetup001mb.setId;
        this.mkentryforstkMang = accountsetup001mb.mkentryforstkMang;
        this.accfrozenUpto = accountsetup001mb.accfrozenUpto;
        this.creditName = accountsetup001mb.creditName;
        this.roleallowedtoFreeze = accountsetup001mb.roleallowedtoFreeze;
        this.chksupinvoice = accountsetup001mb.chksupinvoice;
        this.mkpayviaJournal = accountsetup001mb.mkpayviaJournal;
        this.unlinkpayonCancel = accountsetup001mb.unlinkpayonCancel;
		this.insertUser = accountsetup001mb.insertUser;
        this.insertDatetime = accountsetup001mb.insertDatetime;
        this.updatedUser = accountsetup001mb.updatedUser;
        this.updatedDatetime = accountsetup001mb.updatedDatetime;
	}
}
