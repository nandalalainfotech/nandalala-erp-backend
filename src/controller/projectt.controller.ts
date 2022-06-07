import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ProjectDTO } from "src/dto/Project.dto";
import { Project001mb } from "src/entity/Project001mb.entity";
import { ProjecttService } from "src/service/projectt.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";

@Controller('/testandreportstudio/api/projectt')

export class ProjecttController {

    constructor (private readonly projecttService: ProjecttService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.projecttService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.projecttService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() projectDTO: ProjectDTO): Promise<Project001mb> {
        return this.projecttService.create(projectDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() projectDTO: ProjectDTO): Promise<Project001mb> {
        return this.projecttService.update(projectDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Project001mb[]> {
        return this.projecttService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Project001mb> {
        return this.projecttService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.projecttService.remove(id);
    }
}