import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LeadDTO } from 'src/dto/Lead.dto';
import { Lead001mb } from 'src/entity/Lead001mb.entity';
import { LeadDetailService } from 'src/service/lead-detail.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/lead')

export class LeadDetailController {

    constructor(private readonly leadDetailService: LeadDetailService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.leadDetailService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.leadDetailService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() leadDTO: LeadDTO): Promise<Lead001mb> {
        return this.leadDetailService.create(leadDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() leadDTO: LeadDTO): Promise<Lead001mb> {
         return this.leadDetailService.update(leadDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Lead001mb[]> {
        return this.leadDetailService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Lead001mb> {
        return this.leadDetailService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.leadDetailService.remove(id);
    }
}