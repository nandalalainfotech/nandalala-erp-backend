import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CrmspcontactDTO } from 'src/dto/Crmspcontact.dto';
import { Crmspcontact001mb } from 'src/entity/Crmspcontact001mb.entity';
import { CrmContactService } from 'src/service/crm-contact.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/contact')

export class CrmContactController {

    constructor (private readonly crmContactService: CrmContactService) {}

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.crmContactService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.crmContactService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() crmspcontactDTO: CrmspcontactDTO): Promise<Crmspcontact001mb> {
        return this.crmContactService.create(crmspcontactDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() crmspcontactDTO: CrmspcontactDTO): Promise<Crmspcontact001mb> {
        return this.crmContactService.update(crmspcontactDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Crmspcontact001mb[]> {
        return this.crmContactService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Crmspcontact001mb> {
        return this.crmContactService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.crmContactService.remove(id);
    }
}