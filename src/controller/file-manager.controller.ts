import { Body, Controller, Get, Header, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { createReadStream } from "fs";
import { FilemanagerDTO } from "src/dto/Filemanager.dto";
import { Filemanager001mb } from "src/entity/Filemanager001mb.entity";
import { FileManagerservice } from "src/service/file-manager.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs')

@Controller('/testandreportstudio/api/filemanager')

export class FileManagercontroller {
    constructor(private readonly fileManagerservice: FileManagerservice) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        

        return await this.fileManagerservice.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.fileManagerservice.downloadExcel(request, response);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File, @Body() filemanagerDTO: FilemanagerDTO) {
       
        return this.fileManagerservice.create(file, filemanagerDTO);
    }

    @Get('findAll')
    findAll(): Promise<Filemanager001mb[]> {
        return this.fileManagerservice.findAll();
    }

    @Get('download/:originalfilename')
    download(@Param() originalfilename: any, @Req() request: Request, @Res() response: Response) {
        var filePath = path.join(`./uploads/`) + originalfilename.originalfilename;
        const filestream = createReadStream(filePath);
        filestream.pipe(response);
    }
}