import { IsNotEmpty } from "class-validator";
import { Treenode001mb } from "src/entity/Treenode001mb.entity";
import { BaseDTO } from "./Base.dto";

export class TreenodeDTO extends BaseDTO {
    id: string;

    @IsNotEmpty()
    isparent: string;

    @IsNotEmpty()
    pid: string;

    @IsNotEmpty()
    parentname: string;

    setProperties(treenode001mb: Treenode001mb) {
        this.id = treenode001mb.id;
        this.isparent = treenode001mb.isparent;
        this.pid = treenode001mb.pid;
        this.parentname = treenode001mb.parentname;
        this.insertUser = treenode001mb.insertUser;
        this.insertDatetime = treenode001mb.insertDatetime;
        this.updatedUser = treenode001mb.updatedUser;
        this.updatedDatetime = treenode001mb.updatedDatetime;
    }
}
