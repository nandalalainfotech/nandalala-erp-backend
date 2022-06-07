import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommunicationDTO } from 'src/dto/Communication.dto';
import { Communication001mb } from 'src/entity/Communication001mb.entity';
import { CrmCommunicationService } from 'src/service/crm-communication.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/crmcommunication')
export class CrmCommunicationController {
	constructor(private readonly crmCommunicationService: CrmCommunicationService ) { }

	@Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.crmCommunicationService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.crmCommunicationService.downloadExcel(request, response);
    }

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body()communicationDTO:CommunicationDTO): Promise<Communication001mb> {
		return this.crmCommunicationService.create(communicationDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body()communicationDTO:CommunicationDTO): Promise<Communication001mb> {
		return this.crmCommunicationService.update(communicationDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Communication001mb[]> {
		return this.crmCommunicationService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Communication001mb> {
		return this.crmCommunicationService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.crmCommunicationService.remove(id);
	}
}

