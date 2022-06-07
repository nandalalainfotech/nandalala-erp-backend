import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecruitapplicantDTO } from 'src/dto/Recruitapplicant.dto';
import { Recruitapplicant001mb } from 'src/entity/Recruitapplicant001mb.entity';
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
var html = fs.readFileSync("jobApplicant.html", "utf8");


@Injectable()
export class JobApplicantService {
    constructor(@InjectRepository(Recruitapplicant001mb) private readonly jobApplicantRepository: Repository<Recruitapplicant001mb>) { }

    async create(recruitapplicantDTO: RecruitapplicantDTO): Promise<Recruitapplicant001mb> {
        const recruitapplicant001mb = new Recruitapplicant001mb();
        recruitapplicant001mb.setProperties(recruitapplicantDTO);
        return this.jobApplicantRepository.save(recruitapplicant001mb);
    }

    async update(recruitapplicantDTO: RecruitapplicantDTO): Promise<Recruitapplicant001mb> {
        const recruitapplicant001mb = new Recruitapplicant001mb();
        recruitapplicant001mb.setProperties(recruitapplicantDTO);
        await this.jobApplicantRepository.update({ appId: recruitapplicant001mb.appId }, recruitapplicant001mb);
        return recruitapplicant001mb;
    }

    async findAll(): Promise<Recruitapplicant001mb[]> {
        return this.jobApplicantRepository.find();
    }

    findOne(id: number): Promise<Recruitapplicant001mb> {
        return this.jobApplicantRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.jobApplicantRepository.delete(id);
    }
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let jobApplicant: any[] = await this.jobApplicantRepository.find();


        var document = {
            html: html,
            data: {
                JobApplicant: jobApplicant,
            },
            path: path.join(`./pdf/jobApplicant.pdf`),
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
        if (jobApplicant.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "jobApplicant.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let jobApplicant = await this.jobApplicantRepository.find();




        if (jobApplicant.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('jobApplicant');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 },{ key: 'D', width: 20.0 }];


            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:D1');
            worksheet.getCell('A1:D1').value = "NANDALALA ERP";
            worksheet.getCell('A1:D1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:D1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:D1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:D2');
            worksheet.getCell('A2:D2').value = "List Of Job Applicants";
            worksheet.getCell('A2:D2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:D2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Applicant Name";
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
            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Job Title";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' 
        };


            for (let i = 0; i < jobApplicant.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = jobApplicant[i].appId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = jobApplicant[i].applicantName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = jobApplicant[i].status;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' 
               };
               worksheet.mergeCells('D' + temp);
               worksheet.getCell('D' + temp).value = jobApplicant[i].jobName;
               worksheet.getCell('D' + temp).font = {
                   size: 11,
                   bold: true
               };
               worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };
                
              
                
            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}

