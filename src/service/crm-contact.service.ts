import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CrmspcontactDTO } from "src/dto/Crmspcontact.dto";
import { Crmspcontact001mb } from "src/entity/Crmspcontact001mb.entity";
import { Repository } from "typeorm";
import { Request } from "supertest";
import { Response } from "express";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");
import { createReadStream } from "fs";
import { Console } from 'console';
var html = fs.readFileSync("crmContact.html", "utf8");

@Injectable()

export class CrmContactService {

    constructor (@InjectRepository(Crmspcontact001mb) private readonly crmContactRepository: Repository<Crmspcontact001mb>) {}

    async create(crmspcontactDTO: CrmspcontactDTO): Promise<Crmspcontact001mb> {
        const  crmspcontact001mb = new Crmspcontact001mb();
        crmspcontact001mb.setProperties(crmspcontactDTO);
        return this.crmContactRepository.save(crmspcontact001mb);
    }

    async update(crmspcontactDTO: CrmspcontactDTO): Promise<Crmspcontact001mb> {
        const crmspcontact001mb = new Crmspcontact001mb();
        crmspcontact001mb.setProperties(crmspcontactDTO);
        await this.crmContactRepository.update({contId: crmspcontact001mb.contId}, crmspcontact001mb);
        return crmspcontact001mb;
    }

    async findAll(): Promise<Crmspcontact001mb[]> {
        return this.crmContactRepository.find();
    }

    findOne(id: string): Promise<Crmspcontact001mb> {
        return this.crmContactRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.crmContactRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let crmContact: any[] = await this.crmContactRepository.find();


        var document = {
            html: html,
            data: {
                CrmContact: crmContact,
            },
            path: path.join(`./pdf/crmContact.pdf`),
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
        if (crmContact.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "crmContact.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let crmContact = await this.crmContactRepository.find();
       

        if (crmContact.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('crmContact');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 },];

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
            worksheet.getCell('A2:C2').value = "Add New Sales Contact";
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
            worksheet.getCell('B3').value = "Lead Name";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Status";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };


           
           

            for (let i = 0; i < crmContact.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = crmContact[i].contId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = crmContact[i].leadName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = crmContact[i].status;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };


            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}