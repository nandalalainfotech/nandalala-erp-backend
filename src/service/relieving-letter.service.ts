import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecruitrelievingDTO } from 'src/dto/Recruitrelieving.dto';
import { Recruitrelieving001mb } from 'src/entity/Recruitrelieving001mb.entity';
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
var html = fs.readFileSync("relievingLetter.html", "utf8");

@Injectable()
export class RelievingLetterService {
    constructor(@InjectRepository(Recruitrelieving001mb) private readonly relievingLetterRepository: Repository<Recruitrelieving001mb>) { }

    async create(recruitrelievingDTO: RecruitrelievingDTO): Promise<Recruitrelieving001mb> {
        const recruitrelieving001mb = new Recruitrelieving001mb();
        recruitrelieving001mb.setProperties(recruitrelievingDTO);
        return this.relievingLetterRepository.save(recruitrelieving001mb);
    }

    async update(recruitrelievingDTO: RecruitrelievingDTO): Promise<Recruitrelieving001mb> {
        const recruitrelieving001mb = new Recruitrelieving001mb();
        recruitrelieving001mb.setProperties(recruitrelievingDTO);
        await this.relievingLetterRepository.update({ relievingId: recruitrelieving001mb.relievingId }, recruitrelieving001mb);
        return recruitrelieving001mb;
    }

    async findAll(): Promise<Recruitrelieving001mb[]> {
        return this.relievingLetterRepository.find();
    }

    findOne(id: number): Promise<Recruitrelieving001mb> {
        return this.relievingLetterRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.relievingLetterRepository.delete(id);
    }
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let relievingLetter: any[] = await this.relievingLetterRepository.find();


        var document = {
            html: html,
            data: {
                RelievingLetter: relievingLetter,
            },
            path: path.join(`./pdf/relievingLetter.pdf`),
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
        if (relievingLetter.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "relievingLetter.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let relievingLetter = await this.relievingLetterRepository.find();




        if (relievingLetter.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('relievingLetter');
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
            { key: 'E', width: 35.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 }, { key: 'H', width: 20.0 },
            { key: 'I', width: 15.0 },{ key: 'J', width: 20.0 }, { key: 'K', width: 20.0 }, { key: 'L', width: 20.0 }, { key: 'M', width: 20.0 },
            { key: 'N', width: 15.0 }, { key: 'O', width: 20.0 }, { key: 'P', width: 30.0 }, { key: 'Q', width: 30.0 }];


            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:Q1');
            worksheet.getCell('A1:Q1').value = "NANDALALA ERP";
            worksheet.getCell('A1:Q1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:Q1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:Q1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:Q2');
            worksheet.getCell('A2:Q2').value = "Add Relieving Details";
            worksheet.getCell('A2:Q2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:Q2').alignment = { vertical: 'middle', horizontal: 'center' };

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
            worksheet.getCell('I3').value = "Line 1";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('J3');
            worksheet.getCell('J3').value = "Line 2";
            worksheet.getCell('J3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('J3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('K3');
            worksheet.getCell('K3').value = "City/Village";
            worksheet.getCell('K3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('K3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('L3');
            worksheet.getCell('L3').value = "State/Territory";
            worksheet.getCell('L3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('L3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('M3');
            worksheet.getCell('M3').value = "Country";
            worksheet.getCell('M3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('M3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('N3');
            worksheet.getCell('N3').value = "Postal Code";
            worksheet.getCell('N3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('N3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('O3');
            worksheet.getCell('O3').value = "Mobile Number";
            worksheet.getCell('O3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('O3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('P3');
            worksheet.getCell('P3').value = "Alternative Number (If Any)";
            worksheet.getCell('P3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('P3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('Q3');
            worksheet.getCell('Q3').value = "Relieving Letter Name";
            worksheet.getCell('Q3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Q3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
       
            for (let i = 0; i < relievingLetter.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = relievingLetter[i].relievingId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = relievingLetter[i].applicantNamePrefix;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = relievingLetter[i].applicantName;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = relievingLetter[i].companyName;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' 
                };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = relievingLetter[i].position;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = relievingLetter[i].grade;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = relievingLetter[i].dateOfJoin;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = relievingLetter[i].dateOfRelieve;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = relievingLetter[i].line1;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('J' + temp);
                worksheet.getCell('J' + temp).value = relievingLetter[i].line2;
                worksheet.getCell('J' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('J' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('K' + temp);
                worksheet.getCell('K' + temp).value = relievingLetter[i].cityOrVillage;
                worksheet.getCell('K' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('K' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('L' + temp);
                worksheet.getCell('L' + temp).value = relievingLetter[i].stateOrTerritory;
                worksheet.getCell('L' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('L' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('M' + temp);
                worksheet.getCell('M' + temp).value = relievingLetter[i].country;
                worksheet.getCell('M' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('M' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('N' + temp);
                worksheet.getCell('N' + temp).value = relievingLetter[i].postalCode;
                worksheet.getCell('N' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('N' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('O' + temp);
                worksheet.getCell('O' + temp).value = relievingLetter[i].phoneNo;
                worksheet.getCell('O' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('O' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('P' + temp);
                worksheet.getCell('P' + temp).value = relievingLetter[i].alternativePhoneNo;
                worksheet.getCell('P' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('P' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('Q' + temp);
                worksheet.getCell('Q' + temp).value = relievingLetter[i].relievingLetter;
                worksheet.getCell('Q' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Q' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

               

            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}
