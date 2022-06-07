import { Body, Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { createReadStream } from "fs";
import { ApplicationsettingsDTO } from "src/dto/applicationsettings.dto";

import { Applicationsettings001mb } from "src/entity/Applicationsettings001mb";

import { ApplicationSettingsservice } from "src/service/applicationsettings.service";

import { Request } from "supertest";
var path = require('path');
const fs = require('fs')

@Controller('/testandreportstudio/api/appsettings')

export class ApplicationSettingscontroller {
    constructor(private readonly applicationSettingsService: ApplicationSettingsservice) { }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File, @Body() applicationSettingsDTO: ApplicationsettingsDTO) {
        return this.applicationSettingsService.create(file, applicationSettingsDTO);
    }

    @Get('findAll')
    findAll(): Promise<Applicationsettings001mb> {
        return this.applicationSettingsService.findOne();
    }

    @Get('download/:originalfilename')
    download(@Param() originalfilename: any, @Req() request: Request, @Res() response: Response) {
        var filePath = path.join(`./uploads/`) + originalfilename.originalfilename;
        const filestream = createReadStream(filePath);
        filestream.pipe(response);
    }
}