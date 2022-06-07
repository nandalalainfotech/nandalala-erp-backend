import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { TaskDTO } from "src/dto/Task.dto";
import { Task001mb } from "src/entity/Task001mb.entity";
import { TaskService } from "src/service/task.service";
var path = require('path');
const fs = require('fs');
import { Request } from "supertest";
import { Response } from "express";


@Controller('/testandreportstudio/api/task')

export class TaskController {

    constructor (private readonly taskService: TaskService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.taskService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.taskService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() taskDTO: TaskDTO): Promise<Task001mb> {
        return this.taskService.create(taskDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() taskDTO: TaskDTO): Promise<Task001mb> {
        return this.taskService.update(taskDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Task001mb[]> {
        return this.taskService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Task001mb> {
        return this.taskService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.taskService.remove(id);
    }
}