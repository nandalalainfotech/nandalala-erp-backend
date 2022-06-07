import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CrmspleadDTO } from 'src/dto/Crmsplead.dto';
import { Crmsplead001mb } from 'src/entity/Crmsplead001mb.entity';
import { CrmSalesPipelineService } from 'src/service/crm-sales-pipeline.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/salespipe')

export class CrmSalesPipelineController {

    constructor (private readonly crmSalesPipelineService: CrmSalesPipelineService) {}

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.crmSalesPipelineService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.crmSalesPipelineService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() crmspleadDTO: CrmspleadDTO): Promise<Crmsplead001mb> {
        return this.crmSalesPipelineService.create(crmspleadDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() crmspleadDTO: CrmspleadDTO): Promise<Crmsplead001mb> {
        return this.crmSalesPipelineService.update(crmspleadDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Crmsplead001mb[]> {
        return this.crmSalesPipelineService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Crmsplead001mb> {
        return this.crmSalesPipelineService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.crmSalesPipelineService.remove(id);
    }
}