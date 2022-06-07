import { Applicationsettings001mb } from "src/entity/Applicationsettings001mb";
import { BaseDTO } from "./Base.dto";

export class ApplicationsettingsDTO extends BaseDTO {

    registerid: number;

    // @IsNotEmpty()
    clientname: string;

    // @IsNotEmpty()
    clientdescription: string;

    // @IsNotEmpty()
    category: string | null;


    // @IsNotEmpty()
    filename: string | null;

    // @IsNotEmpty()
    loginuser: string | null;

    // @IsNotEmpty()
    originalfilename: string | null;

    setProperties(applicationSettings001: Applicationsettings001mb) {
        this.registerid = applicationSettings001.registerid;
        this.clientname = applicationSettings001.clientname;
        this.clientdescription = applicationSettings001.clientdescription;
        this.category = applicationSettings001.category;
        this.filename = applicationSettings001.filename;
        this.loginuser = applicationSettings001.loginuser;
        this.originalfilename = applicationSettings001.originalfilename;
        this.insertUser = applicationSettings001.insertUser;
        this.insertDatetime = applicationSettings001.insertDatetime;
        this.updatedUser = applicationSettings001.updatedUser;
        this.updatedDatetime = applicationSettings001.updatedDatetime;
    }

}
