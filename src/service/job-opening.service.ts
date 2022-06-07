import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecruitopeningDTO } from 'src/dto/Recruitopening.dto';
import { Recruitopening001mb } from 'src/entity/Recruitopening001mb.entity';
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
var html = fs.readFileSync("jobOpening.html", "utf8");

@Injectable()
export class JobOpeningService {
    constructor(@InjectRepository(Recruitopening001mb) private readonly jobOpeningRepository: Repository<Recruitopening001mb>) { }

    async create(recruitopeningDTO: RecruitopeningDTO): Promise<Recruitopening001mb> {
        const recruitopening001mb = new Recruitopening001mb();
        recruitopening001mb.setProperties(recruitopeningDTO);
        return this.jobOpeningRepository.save(recruitopening001mb);
    }

    async update(recruitopeningDTO: RecruitopeningDTO): Promise<Recruitopening001mb> {
        const recruitopening001mb = new Recruitopening001mb();
        recruitopening001mb.setProperties(recruitopeningDTO);
        await this.jobOpeningRepository.update({ jobId: recruitopening001mb.jobId }, recruitopening001mb);
        return recruitopening001mb;
    }

    async findAll(): Promise<Recruitopening001mb[]> {
        return this.jobOpeningRepository.find();
    }

    findOne(id: number): Promise<Recruitopening001mb> {
        return this.jobOpeningRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.jobOpeningRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let jobOpening: any[] = await this.jobOpeningRepository.find();


        var document = {
            html: html,
            data: {
                JobOpening: jobOpening,
            },
            path: path.join(`./pdf/jobOpening.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "potrait",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (jobOpening.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "jobOpening.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let jobOpening = await this.jobOpeningRepository.find();




        if (jobOpening.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('jobOpening');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 }];


            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:C1');
            worksheet.getCell('A1:C1').value = "NANDALALA ERP";
            worksheet.getCell('A1:C1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:C1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:C1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:C2');
            worksheet.getCell('A2:C2').value = "List Of Job Opening";
            worksheet.getCell('A2:C2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:C2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Job Name";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Job Status";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
            


            for (let i = 0; i < jobOpening.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = jobOpening[i].jobId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = jobOpening[i].jobName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = jobOpening[i].status;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' 
               };
             
              
                
            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

   
}
