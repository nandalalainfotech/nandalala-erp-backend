import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RecruitapplicantDTO } from 'src/dto/Recruitapplicant.dto';
import { Recruitapplicant001mb } from 'src/entity/Recruitapplicant001mb.entity';
import { JobApplicantService } from 'src/service/job-applicant.service';
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/jobapp')
export class JobApplicantController {
    constructor(private readonly jobApplicantService: JobApplicantService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.jobApplicantService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.jobApplicantService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() recruitapplicantDTO: RecruitapplicantDTO): Promise<Recruitapplicant001mb> {
        return this.jobApplicantService.create(recruitapplicantDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() recruitapplicantDTO: RecruitapplicantDTO): Promise<Recruitapplicant001mb> {
        return this.jobApplicantService.update(recruitapplicantDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Recruitapplicant001mb[]> {
        return this.jobApplicantService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Recruitapplicant001mb> {
        return this.jobApplicantService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.jobApplicantService.remove(id);
    }
    
}
