import { IsNotEmpty } from "class-validator";
import { Crmspcontact001mb } from "src/entity/Crmspcontact001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CrmspcontactDTO extends BaseDTO{
    
    contId: number;

    @IsNotEmpty()
    leadName: string;

    @IsNotEmpty()
    status: string | null;

    setProperties(crmspcontact001mb: Crmspcontact001mb) {
        this.contId = crmspcontact001mb.contId;
        this.leadName = crmspcontact001mb.leadName;
        this.status = crmspcontact001mb.status;
        this.insertUser = crmspcontact001mb.insertUser;
        this.insertDatetime = crmspcontact001mb.insertDatetime;
        this.updatedUser = crmspcontact001mb.updatedUser;
        this.updatedDatetime = crmspcontact001mb.updatedDatetime;
    }

}
