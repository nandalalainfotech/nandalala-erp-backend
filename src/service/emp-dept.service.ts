import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentDTO } from 'src/dto/Department.dto';
import { EmploybirthdayDTO } from 'src/dto/Employbirthday.dto';
import { Department001mb } from 'src/entity/Department001mb.entity';
import { Employbirthday001mb } from 'src/entity/Employbirthday001mb.entity';
import { Repository } from 'typeorm';
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Console } from 'console';
var html = fs.readFileSync("department.html", "utf8");

@Injectable()
export class EmpDeptService {
    constructor(@InjectRepository(Department001mb) private readonly empdeptRepository: Repository<Department001mb>) { }

    async create(departmentDTO: DepartmentDTO): Promise<Department001mb> {
        const department001mb = new Department001mb();
        department001mb.setProperties(departmentDTO);
        return this.empdeptRepository.save(department001mb);
    }

    async update(departmentDTO: DepartmentDTO): Promise<Department001mb> {
        const department001mb = new Department001mb();
        department001mb.setProperties(departmentDTO);
        await this.empdeptRepository.update({ deptid: department001mb.deptid }, department001mb);
        return department001mb;
    }

    async findAll(): Promise<Department001mb[]> {
        return this.empdeptRepository.find();
    }

    findOne(id: number): Promise<Department001mb> {
        return this.empdeptRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.empdeptRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let department: any[] = await this.empdeptRepository.find();


        var document = {
            html: html,
            data: {
                Department: department,
            },
            path: path.join(`./pdf/department.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (department.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "department.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let department = await this.empdeptRepository.find();
  
        
        
       

        if (department.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('department');
            worksheet.getRow(1).height = 30;
            worksheet.getRow(2).height = 30;
            worksheet.getRow(3).height = 25;
            worksheet.getRow(4).height = 20;
            worksheet.getRow(5).height = 20;
            worksheet.getRow(6).height = 20;
            worksheet.getRow(7).height = 20;
            worksheet.getRow(8).height = 20;
            worksheet.getRow(9).height = 20;
            worksheet.getRow(10).height = 20;
            worksheet.getRow(11).height = 20;
            worksheet.getRow(12).height = 20;
            worksheet.getRow(13).height = 20;
            worksheet.getRow(14).height = 20;
            worksheet.getRow(15).height = 20;
            worksheet.getRow(16).height = 20;
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 40.0 }];
            

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:B1');
            worksheet.getCell('A1:B1').value = "NANDALALA ERP";
            worksheet.getCell('A1:B1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:B1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:B1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:B2');
            worksheet.getCell('A2:B2').value = "List Of Employees";
            worksheet.getCell('A2:B2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:B2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Department Name";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };


            

            for (let i = 0; i < department.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = department[i].deptid;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = department[i].deptName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

               

            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }


}
