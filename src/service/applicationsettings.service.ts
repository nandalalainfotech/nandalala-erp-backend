import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApplicationsettingsDTO } from "src/dto/applicationsettings.dto";
import { Applicationsettings001mb } from "src/entity/Applicationsettings001mb";
import { Repository } from "typeorm";

@Injectable()
export class ApplicationSettingsservice {

    constructor(@InjectRepository(Applicationsettings001mb) private readonly applicationsettingsRepository: Repository<Applicationsettings001mb>,) { }

    async create(file: any, applicationsettingsDTO: ApplicationsettingsDTO,): Promise<Applicationsettings001mb> {
        const applicationsettings001mb = new Applicationsettings001mb();
        applicationsettings001mb.setProperties(applicationsettingsDTO);
        applicationsettings001mb.originalfilename = file.filename;
        return this.applicationsettingsRepository.save(applicationsettings001mb);
    }

    async findAll(): Promise<Array<Applicationsettings001mb>> {
        return this.applicationsettingsRepository.find();
    }

    async findOne() {
        return await this.applicationsettingsRepository.findOne({
            order: { registerid: 'DESC' }
        });
    }
}

