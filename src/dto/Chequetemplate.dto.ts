import { IsNotEmpty } from "class-validator";
import { Chequetemplate001mb } from "src/entity/Chequetemplate001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ChequetemplateDTO extends BaseDTO{
    
    cheqId: number;

    @IsNotEmpty()
    prmaccountName: string;

    @IsNotEmpty()
    prmisaccPay: boolean;

    @IsNotEmpty()
    prmcheqSize: string | null;

    @IsNotEmpty()
    prmdistfromTop: string | null;

    @IsNotEmpty()
    prmcheqWidth: string | null;

    @IsNotEmpty()
    prmdistfromLeft: string | null;

    @IsNotEmpty()
    prmcheqHeight: string | null;

    @IsNotEmpty()
    prmmesgtoShow: string;

    @IsNotEmpty()
    scanCheq: string | null;

    @IsNotEmpty()
    dtdistfromTop: string | null;

    @IsNotEmpty()
    dtdistfromLeft: string | null;

    @IsNotEmpty()
    paydistfromTop: string | null;

    @IsNotEmpty()
    paydistfromLeft: string | null;

    @IsNotEmpty()
    amtwdistfromTop: string | null;

    @IsNotEmpty()
    amtwdistfromLeft: string | null;

    @IsNotEmpty()
    amtwWidth: string | null;

    @IsNotEmpty()
    amtwlineSpace: string | null;

    @IsNotEmpty()
    amtfdistfromTop: string | null;

    @IsNotEmpty()
    amtfdistfromLeft: string | null;

    @IsNotEmpty()
    accnodistfromTop: string | null;

    @IsNotEmpty()
    accnodistfromLeft: string | null;

    @IsNotEmpty()
    signposdistfromTop: string | null;

    @IsNotEmpty()
    signposdistfromLeft: string | null;

    setProperties(chequetemplate001mb: Chequetemplate001mb) {
        this.cheqId = chequetemplate001mb.cheqId;
        this.prmaccountName = chequetemplate001mb.prmaccountName;
        this.prmisaccPay = chequetemplate001mb.prmisaccPay;
        this.prmcheqSize = chequetemplate001mb.prmcheqSize;
        this.prmdistfromTop = chequetemplate001mb.prmdistfromTop;
        this.prmcheqWidth = chequetemplate001mb.prmcheqWidth;
        this.prmdistfromLeft = chequetemplate001mb.prmdistfromLeft;
        this.prmcheqHeight = chequetemplate001mb.prmcheqHeight;
        this.prmmesgtoShow = chequetemplate001mb.prmmesgtoShow;
        this.scanCheq = chequetemplate001mb.scanCheq;
        this.dtdistfromTop = chequetemplate001mb.dtdistfromTop;
        this.dtdistfromLeft = chequetemplate001mb.dtdistfromLeft;
        this.paydistfromTop = chequetemplate001mb.paydistfromTop;
        this.paydistfromLeft = chequetemplate001mb.paydistfromLeft;
        this.amtwdistfromTop = chequetemplate001mb.amtwdistfromTop;
        this.amtwdistfromLeft = chequetemplate001mb.amtwdistfromLeft;
        this.amtwWidth = chequetemplate001mb.amtwWidth;
        this.amtwlineSpace = chequetemplate001mb.amtwlineSpace;
        this.amtfdistfromTop = chequetemplate001mb.amtfdistfromTop;
        this.amtfdistfromLeft = chequetemplate001mb.amtfdistfromLeft;
        this.accnodistfromTop = chequetemplate001mb.accnodistfromTop;
        this.accnodistfromLeft = chequetemplate001mb.accnodistfromLeft;
        this.signposdistfromTop = chequetemplate001mb.signposdistfromTop;
        this.signposdistfromLeft = chequetemplate001mb.signposdistfromLeft;
        this.insertUser = chequetemplate001mb.insertUser;
        this.insertDatetime = chequetemplate001mb.insertDatetime;
        this.updatedUser = chequetemplate001mb.updatedUser;
        this.updatedDatetime = chequetemplate001mb.updatedDatetime;
    }
}


