import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecruitworkingexperienceDTO } from 'src/dto/Recruitworkingexperience.dto';
import { Recruitworkingexperience001mb } from 'src/entity/Recruitworkingexperience001mb.entity';
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
var html = fs.readFileSync("experienceLetter.html", "utf8");

@Injectable()
export class ExperienceLetterService {
    constructor(@InjectRepository(Recruitworkingexperience001mb) private readonly experienceLetterRepository: Repository<Recruitworkingexperience001mb>) { }

    async create(recruitworkingexperienceDTO: RecruitworkingexperienceDTO): Promise<Recruitworkingexperience001mb> {
        const recruitworkingexperience001mb = new Recruitworkingexperience001mb();
        recruitworkingexperience001mb.setProperties(recruitworkingexperienceDTO);
        return this.experienceLetterRepository.save(recruitworkingexperience001mb);
    }

    async update(recruitworkingexperienceDTO: RecruitworkingexperienceDTO): Promise<Recruitworkingexperience001mb> {
        const recruitworkingexperience001mb = new Recruitworkingexperience001mb();
        recruitworkingexperience001mb.setProperties(recruitworkingexperienceDTO);
        await this.experienceLetterRepository.update({ workingexperienceId: recruitworkingexperience001mb.workingexperienceId }, recruitworkingexperience001mb);
        return recruitworkingexperience001mb;
    }

    async findAll(): Promise<Recruitworkingexperience001mb[]> {
        return this.experienceLetterRepository.find();
    }

    findOne(id: number): Promise<Recruitworkingexperience001mb> {
        return this.experienceLetterRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.experienceLetterRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let experienceLetter: any[] = await this.experienceLetterRepository.find();


        var document = {
            html: html,
            data: {
                ExperienceLetter: experienceLetter,
            },
            path: path.join(`./pdf/experienceLetter.pdf`),
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
        if (experienceLetter.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "experienceLetter.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let experienceLetter = await this.experienceLetterRepository.find();




        if (experienceLetter.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('experienceLetter');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 }, { key: 'D', width: 20.0 },
            { key: 'E', width: 40.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 }, { key: 'H', width: 20.0 },{ key: 'I', width: 45.0 }];


            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:I1');
            worksheet.getCell('A1:I1').value = "NANDALALA ERP";
            worksheet.getCell('A1:I1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:I1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:I1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:I2');
            worksheet.getCell('A2:I2').value = "Add Working Experience Details";
            worksheet.getCell('A2:I2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:I2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Prefix";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Applicant Name";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = {vertical: 'middle', horizontal: 'center'};
            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Company Name";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = {vertical: 'middle', horizontal: 'center'};
            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Position";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Grade";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "Joining Date";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('H3');
            worksheet.getCell('H3').value = "Relieving Date";
            worksheet.getCell('H3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('H3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('I3');
            worksheet.getCell('I3').value = "Working Experience Letter Name";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
       
            for (let i = 0; i < experienceLetter.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = experienceLetter[i].workingexperienceId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = experienceLetter[i].applicantNamePrefix;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = experienceLetter[i].applicantName;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = experienceLetter[i].companyName;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' 
                };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = experienceLetter[i].position;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = experienceLetter[i].grade;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = experienceLetter[i].dateOfJoin;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = experienceLetter[i].dateOfRelieve;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = experienceLetter[i].workingexperienceLetter;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}
