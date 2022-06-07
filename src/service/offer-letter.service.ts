import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecruitofferDTO } from 'src/dto/Recruitoffer.dto';
import { Recruitoffer001mb } from 'src/entity/Recruitoffer001mb.entity';
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
var html = fs.readFileSync("offerLetter.html", "utf8");


@Injectable()
export class OfferLetterService {
    constructor(@InjectRepository(Recruitoffer001mb) private readonly offerLetterRepository: Repository<Recruitoffer001mb>) { }

    async create(recruitofferDTO: RecruitofferDTO): Promise<Recruitoffer001mb> {
        const recruitoffer001mb = new Recruitoffer001mb();
        recruitoffer001mb.setProperties(recruitofferDTO);
        return this.offerLetterRepository.save(recruitoffer001mb);
    }

    async update(recruitofferDTO: RecruitofferDTO): Promise<Recruitoffer001mb> {
        const recruitoffer001mb = new Recruitoffer001mb();
        recruitoffer001mb.setProperties(recruitofferDTO);
        await this.offerLetterRepository.update({ offerId: recruitoffer001mb.offerId }, recruitoffer001mb);
        return recruitoffer001mb;
    }

    async findAll(): Promise<Recruitoffer001mb[]> {
        return this.offerLetterRepository.find();
    }

    findOne(id: number): Promise<Recruitoffer001mb> {
        return this.offerLetterRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.offerLetterRepository.delete(id);
    }
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let offerLetter: any[] = await this.offerLetterRepository.find();


        var document = {
            html: html,
            data: {
                OfferLetter: offerLetter,
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
        if (offerLetter.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "offerLetter.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let offerLetter = await this.offerLetterRepository.find();




        if (offerLetter.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('offerLetter');
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
            { key: 'E', width: 15.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 }, { key: 'H', width: 20.0 },
            { key: 'I', width: 15.0 }, { key: 'J', width: 20.0 }, { key: 'K', width: 20.0 }, { key: 'L', width: 20.0 },
            { key: 'M', width: 15.0 }, { key: 'N', width: 20.0 }, { key: 'O', width: 20.0 }, { key: 'P', width: 20.0 },
            { key: 'Q', width: 30.0 }, { key: 'R', width: 30.0 }, { key: 'S', width: 20.0 }];


            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:S1');
            worksheet.getCell('A1:S1').value = "NANDALALA ERP";
            worksheet.getCell('A1:S1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:S1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:S1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:S2');
            worksheet.getCell('A2:S2').value = "Add Offer Details";
            worksheet.getCell('A2:S2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:S2').alignment = { vertical: 'middle', horizontal: 'center' };

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
            worksheet.getCell('C3').alignment = {
                vertical: 'middle', horizontal: 'center'
            };
            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Company Name";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = {
                vertical: 'middle', horizontal: 'center'
            };
            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Offer";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Refer Name";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "Position";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('H3');
            worksheet.getCell('H3').value = "Grade";
            worksheet.getCell('H3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('H3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('I3');
            worksheet.getCell('I3').value = "CTC";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('J3');
            worksheet.getCell('J3').value = "Joining Date";
            worksheet.getCell('J3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('J3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('K3');
            worksheet.getCell('K3').value = "Line 1";
            worksheet.getCell('K3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('K3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('L3');
            worksheet.getCell('L3').value = "Line 2";
            worksheet.getCell('L3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('L3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('M3');
            worksheet.getCell('M3').value = "City/Village";
            worksheet.getCell('M3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('M3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('N3');
            worksheet.getCell('N3').value = "State/Territory";
            worksheet.getCell('N3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('N3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('O3');
            worksheet.getCell('O3').value = "Country";
            worksheet.getCell('O3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('O3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('P3');
            worksheet.getCell('P3').value = "Postal Code";
            worksheet.getCell('P3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('P3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('Q3');
            worksheet.getCell('Q3').value = "Mobile Number";
            worksheet.getCell('Q3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Q3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('R3');
            worksheet.getCell('R3').value = "Alternative Number (If Any)";
            worksheet.getCell('R3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('R3').alignment = { vertical: 'middle', horizontal: 'center' 
        };
        worksheet.mergeCells('S3');
            worksheet.getCell('S3').value = "Offer Letter Name";
            worksheet.getCell('S3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('S3').alignment = { vertical: 'middle', horizontal: 'center' 
        };



            for (let i = 0; i < offerLetter.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = offerLetter[i].offerId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = offerLetter[i].applicantNamePrefix;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = offerLetter[i].applicantName;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = offerLetter[i].companyName;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' 
                };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = offerLetter[i].offer;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = offerLetter[i].refer;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = offerLetter[i].position;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = offerLetter[i].grade;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = offerLetter[i].ctc;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('J' + temp);
                worksheet.getCell('J' + temp).value = offerLetter[i].dateOfJoin;
                worksheet.getCell('J' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('J' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('K' + temp);
                worksheet.getCell('K' + temp).value = offerLetter[i].line1;
                worksheet.getCell('K' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('K' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('L' + temp);
                worksheet.getCell('L' + temp).value = offerLetter[i].line2;
                worksheet.getCell('L' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('L' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('M' + temp);
                worksheet.getCell('M' + temp).value = offerLetter[i].cityOrVillage;
                worksheet.getCell('M' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('M' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('N' + temp);
                worksheet.getCell('N' + temp).value = offerLetter[i].stateOrTerritory;
                worksheet.getCell('N' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('N' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('O' + temp);
                worksheet.getCell('O' + temp).value = offerLetter[i].country;
                worksheet.getCell('O' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('O' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('P' + temp);
                worksheet.getCell('P' + temp).value = offerLetter[i].postalCode;
                worksheet.getCell('P' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('P' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('Q' + temp);
                worksheet.getCell('Q' + temp).value = offerLetter[i].phoneNo;
                worksheet.getCell('Q' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Q' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('R' + temp);
                worksheet.getCell('R' + temp).value = offerLetter[i].alternativePhoneNo;
                worksheet.getCell('R' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('R' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('S' + temp);
                worksheet.getCell('S' + temp).value = offerLetter[i].offerLetter;
                worksheet.getCell('S' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('S' + temp).alignment = { vertical: 'middle', horizontal: 'center' };



            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

}
