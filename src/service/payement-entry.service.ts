
import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymententryDTO } from 'src/dto/Paymententry.dto';
import { Paymententry001mb } from 'src/entity/Paymententry001mb.entity';
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
var html = fs.readFileSync("payementEntry.html", "utf8");

@Injectable()
export class PayementEntryService {
	constructor(@InjectRepository(Paymententry001mb) private readonly payementRepository: Repository<Paymententry001mb>) { }

	async create(paymententryDTO: PaymententryDTO): Promise<Paymententry001mb> {
		const paymententry001mb = new Paymententry001mb();
		paymententry001mb.setProperties(paymententryDTO);
		return this.payementRepository.save(paymententry001mb);
	}

	async update(paymententryDTO: PaymententryDTO): Promise<Paymententry001mb> {
		const paymententry001mb = new Paymententry001mb();
		paymententry001mb.setProperties(paymententryDTO);
		await this.payementRepository.update({ payentId: paymententry001mb.payentId }, paymententry001mb);
		return paymententry001mb;
	}

	async findAll(): Promise<Paymententry001mb[]> {
		return this.payementRepository.find();
	}

	findOne(id: number): Promise<Paymententry001mb> {
		return this.payementRepository.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.payementRepository.delete(id);
	}

	async downloadPdf(@Req() request: Request, @Res() response: Response) {
        let payementEntry: any[] = await this.payementRepository.find();


        var document = {
            html: html,
            data: {
                PayementEntry: payementEntry,
            },
            path: path.join(`./pdf/payementEntry.pdf`),
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
        if (payementEntry.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "payementEntry.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		let payementEntry = await this.payementRepository.find();


		if (payementEntry.length < 0) {
			return;
		}
		else {

			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet('payementEntry');
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
			worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 },
			{ key: 'D', width: 20.0 }, { key: 'E', width: 20.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 },
			{ key: 'H', width: 20.0 }];

			worksheet.columns.forEach((col) => {
				col.style.font = {
					size: 10,
					bold: true
				};
				col.style.alignment = { vertical: 'middle', horizontal: 'center' };
				col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
			})

			worksheet.mergeCells('A1:H1');
			worksheet.getCell('A1:H1').value = "NANDALALA ERP";
			worksheet.getCell('A1:H1').font = {
				size: 20,
				bold: true
			};
			worksheet.getCell('A1:H1').fill = {
				type: 'pattern', pattern: 'solid', fgColor:
					{ argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
			};
			worksheet.getCell('A1:H1').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('A2:H2');
			worksheet.getCell('A2:H2').value = "Payment Entry";
			worksheet.getCell('A2:H2').font = {
				size: 16,
				bold: true
			};
			worksheet.getCell('A2:H2').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('A3');
			worksheet.getCell('A3').value = "ID";
			worksheet.getCell('A3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('B3');
			worksheet.getCell('B3').value = "Series";
			worksheet.getCell('B3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('C3');
			worksheet.getCell('C3').value = "Posting Date";
			worksheet.getCell('C3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('D3');
			worksheet.getCell('D3').value = "Payment Type";
			worksheet.getCell('D3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


			worksheet.mergeCells('E3');
			worksheet.getCell('E3').value = "Payment Mode";
			worksheet.getCell('E3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('F3');
			worksheet.getCell('F3').value = "Party Type";
			worksheet.getCell('F3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('G3');
			worksheet.getCell('G3').value = "Party Name";
			worksheet.getCell('G3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

			worksheet.mergeCells('H3');
			worksheet.getCell('H3').value = "Account PaidTo";
			worksheet.getCell('H3').font = {
				size: 12,
				bold: true
			};
			worksheet.getCell('H3').alignment = { vertical: 'middle', horizontal: 'center' };




			for (let i = 0; i < payementEntry.length; i++) {

				let temp = i + 4;

				worksheet.mergeCells('A' + temp);
				worksheet.getCell('A' + temp).value = payementEntry[i].payentId;
				worksheet.getCell('A' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('B' + temp);
				worksheet.getCell('B' + temp).value = payementEntry[i].entrySeries;
				worksheet.getCell('B' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('C' + temp);
				worksheet.getCell('C' + temp).value = payementEntry[i].postingDate;
				worksheet.getCell('C' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('D' + temp);
				worksheet.getCell('D' + temp).value = payementEntry[i].paymentType;
				worksheet.getCell('D' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('E' + temp);
				worksheet.getCell('E' + temp).value = payementEntry[i].paymentMode;
				worksheet.getCell('E' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('F' + temp);
				worksheet.getCell('F' + temp).value = payementEntry[i].partyType;
				worksheet.getCell('F' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('G' + temp);
				worksheet.getCell('G' + temp).value = payementEntry[i].partyName;
				worksheet.getCell('G' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

				worksheet.mergeCells('H' + temp);
				worksheet.getCell('H' + temp).value = payementEntry[i].accpaidTo;
				worksheet.getCell('H' + temp).font = {
					size: 11,
					bold: true
				};
				worksheet.getCell('H' + temp).alignment = { vertical: 'middle', horizontal: 'center' };
			}


			return workbook.xlsx.write(response).then(function () {
				response['status'](200).end();
			});

		}

	}


}