import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChequetemplateDTO } from 'src/dto/Chequetemplate.dto';
import { Chequetemplate001mb } from 'src/entity/Chequetemplate001mb.entity';
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
var html = fs.readFileSync("chequeprintTemplate.html", "utf8");

@Injectable()
export class ChequeprintTemplateService {
    constructor(@InjectRepository(Chequetemplate001mb) private readonly chequeprintTemplateRepository: Repository<Chequetemplate001mb>) { }

    async create(chequetemplateDTO: ChequetemplateDTO): Promise<Chequetemplate001mb> {
        const chequetemplate001mb = new Chequetemplate001mb();
        chequetemplate001mb.setProperties(chequetemplateDTO);
        return this.chequeprintTemplateRepository.save(chequetemplate001mb);
    }

    async update(chequetemplateDTO: ChequetemplateDTO): Promise<Chequetemplate001mb> {
        const chequetemplate001mb = new Chequetemplate001mb();
        chequetemplate001mb.setProperties(chequetemplateDTO);
        await this.chequeprintTemplateRepository.update({ cheqId: chequetemplate001mb.cheqId }, chequetemplate001mb);
        return chequetemplate001mb;
    }

    async findAll(): Promise<Chequetemplate001mb[]> {
        return this.chequeprintTemplateRepository.find();
    }

    findOne(id: string): Promise<Chequetemplate001mb> {
        return this.chequeprintTemplateRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.chequeprintTemplateRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let chequeprintTemplate: any[] = await this.chequeprintTemplateRepository.find();


        var document = {
            html: html,
            data: {
                ChequeprintTemplate: chequeprintTemplate,
            },
            path: path.join(`./pdf/chequeprintTemplate.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "landscape",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (chequeprintTemplate.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "chequeprintTemplate.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let chequeprintTemplate = await this.chequeprintTemplateRepository.find();



        if (chequeprintTemplate.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('chequeprintTemplate');
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
            worksheet.columns = [{ key: 'A', width: 10.0 }, { key: 'B', width: 25.0 }, { key: 'C', width: 25.0 },
            { key: 'D', width: 25.0 }, { key: 'E', width: 25.0 }, { key: 'F', width: 25.0 }, { key: 'G', width: 25.0 },
            { key: 'H', width: 25.0 }, { key: 'I', width: 25.0 }, { key: 'J', width: 25.0 }, { key: 'K', width: 25.0 },
            { key: 'L', width: 25.0 }, { key: 'M', width: 25.0 }, { key: 'N', width: 25.0 }, { key: 'O', width: 25.0 },
            { key: 'P', width: 25.0 }, { key: 'Q', width: 30.0 }, { key: 'R', width: 25.0 }, { key: 'S', width: 25.0 },
            { key: 'T', width: 25.0 }, { key: 'U', width: 25.0 }, { key: 'V', width: 25.0 }, { key: 'W', width: 25.0 },
            { key: 'X', width: 25.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:X1');
            worksheet.getCell('A1:X1').value = "NANDALALA ERP";
            worksheet.getCell('A1:X1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:X1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:X1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:X2');
            worksheet.getCell('A2:X2').value = "Cheque Print Template";
            worksheet.getCell('A2:X2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:X2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Account";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Is Account Payable";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Cheque Size";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Distance From Top Edge";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Cheque Width";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "Distance From Left Edge";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('H3');
            worksheet.getCell('H3').value = "Cheque Height";
            worksheet.getCell('H3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('H3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('I3');
            worksheet.getCell('I3').value = "Scanned Cheque";
            worksheet.getCell('I3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('I3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('J3');
            worksheet.getCell('J3').value = "Distance From Top Edge";
            worksheet.getCell('J3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('J3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('K3');
            worksheet.getCell('K3').value = "Distance From Left Edge";
            worksheet.getCell('K3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('K3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('L3');
            worksheet.getCell('L3').value = "Distance From Top";
            worksheet.getCell('L3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('L3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('M3');
            worksheet.getCell('M3').value = "Distance From Left";
            worksheet.getCell('M3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('M3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('N3');
            worksheet.getCell('N3').value = "Distance From Top Edge";
            worksheet.getCell('N3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('N3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('O3');
            worksheet.getCell('O3').value = "Distance From Left Edge";
            worksheet.getCell('O3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('O3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('P3');
            worksheet.getCell('P3').value = "Amount Words Width";
            worksheet.getCell('P3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('P3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('Q3');
            worksheet.getCell('Q3').value = "Amount in Words Line Space";
            worksheet.getCell('Q3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('Q3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('R3');
            worksheet.getCell('R3').value = "Distance From Top Edge";
            worksheet.getCell('R3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('R3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('S3');
            worksheet.getCell('S3').value = "Distance From Left Edge";
            worksheet.getCell('S3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('S3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('T3');
            worksheet.getCell('T3').value = "Distance From Top Edge";
            worksheet.getCell('T3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('T3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('U3');
            worksheet.getCell('U3').value = "Distance From Left Edge";
            worksheet.getCell('U3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('U3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('V3');
            worksheet.getCell('V3').value = "Distance From Top Edge";
            worksheet.getCell('V3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('V3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('W3');
            worksheet.getCell('W3').value = "Distance From Left Edge";
            worksheet.getCell('W3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('W3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('X3');
            worksheet.getCell('X3').value = "Default Message";
            worksheet.getCell('X3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('X3').alignment = { vertical: 'middle', horizontal: 'center' };

           

            for (let i = 0; i < chequeprintTemplate.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = chequeprintTemplate[i].cheqId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = chequeprintTemplate[i].prmaccountName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = chequeprintTemplate[i].prmisaccPay;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = chequeprintTemplate[i].prmcheqSize;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = chequeprintTemplate[i].prmdistfromTop;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = chequeprintTemplate[i].prmcheqWidth;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = chequeprintTemplate[i].prmdistfromLeft;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('H' + temp);
                worksheet.getCell('H' + temp).value = chequeprintTemplate[i].prmcheqHeight;
                worksheet.getCell('H' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('I' + temp);
                worksheet.getCell('I' + temp).value = chequeprintTemplate[i].prmmesgtoShow;
                worksheet.getCell('I' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('I' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('J' + temp);
                worksheet.getCell('J' + temp).value = chequeprintTemplate[i].scanCheq;
                worksheet.getCell('J' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('J' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('K' + temp);
                worksheet.getCell('K' + temp).value = chequeprintTemplate[i].dtdistfromTop;
                worksheet.getCell('K' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('K' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('L' + temp);
                worksheet.getCell('L' + temp).value = chequeprintTemplate[i].dtdistfromLeft;
                worksheet.getCell('L' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('L' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('M' + temp);
                worksheet.getCell('M' + temp).value = chequeprintTemplate[i].paydistfromTop;
                worksheet.getCell('M' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('M' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('N' + temp);
                worksheet.getCell('N' + temp).value = chequeprintTemplate[i].paydistfromLeft;
                worksheet.getCell('N' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('N' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('O' + temp);
                worksheet.getCell('O' + temp).value = chequeprintTemplate[i].amtwdistfromTop;
                worksheet.getCell('O' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('O' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('P' + temp);
                worksheet.getCell('P' + temp).value = chequeprintTemplate[i].amtwdistfromLeft;
                worksheet.getCell('P' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('P' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('Q' + temp);
                worksheet.getCell('Q' + temp).value = chequeprintTemplate[i].amtwWidth;
                worksheet.getCell('Q' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('Q' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('R' + temp);
                worksheet.getCell('R' + temp).value = chequeprintTemplate[i].amtwlineSpace;
                worksheet.getCell('R' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('R' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('S' + temp);
                worksheet.getCell('S' + temp).value = chequeprintTemplate[i].amtfdistfromTop;
                worksheet.getCell('S' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('S' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('T' + temp);
                worksheet.getCell('T' + temp).value = chequeprintTemplate[i].amtfdistfromLeft;
                worksheet.getCell('T' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('T' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('U' + temp);
                worksheet.getCell('U' + temp).value = chequeprintTemplate[i].accnodistfromTop;
                worksheet.getCell('U' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('U' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('V' + temp);
                worksheet.getCell('V' + temp).value = chequeprintTemplate[i].accnodistfromLeft;
                worksheet.getCell('V' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('V' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('W' + temp);
                worksheet.getCell('W' + temp).value = chequeprintTemplate[i].signposdistfromTop;
                worksheet.getCell('W' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('W' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('X' + temp);
                worksheet.getCell('X' + temp).value = chequeprintTemplate[i].signposdistfromLeft;
                worksheet.getCell('X' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('X' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

               
            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }


}
