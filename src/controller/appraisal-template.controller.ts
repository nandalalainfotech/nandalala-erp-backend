import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApprtempDTO } from 'src/dto/Apprtemp.dto';
import { Apprtemp001mb } from 'src/entity/Apprtemp001mb.entity';
import { AppraisalTemplateService } from 'src/service/appraisal-template.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/appraisaltemp')

export class AppraisalTemplateController {

    constructor (private readonly appraisalTemplateService: AppraisalTemplateService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.appraisalTemplateService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.appraisalTemplateService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() apprtempDTO: ApprtempDTO): Promise<Apprtemp001mb> {
        return this.appraisalTemplateService.create(apprtempDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() apprtempDTO: ApprtempDTO): Promise<Apprtemp001mb> {
        return this.appraisalTemplateService.update(apprtempDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Apprtemp001mb[]> {
        return this.appraisalTemplateService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Apprtemp001mb> {
        return this.appraisalTemplateService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.appraisalTemplateService.remove(id);
    }
}