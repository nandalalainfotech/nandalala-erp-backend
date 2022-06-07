import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemdtDTO } from "src/dto/Itemdt.dto";
import { Itemdt001mb } from "src/entity/Itemdt001mb.entity";
import { Repository } from "typeorm";

@Injectable()
export class Billservice {

    constructor(@InjectRepository(Itemdt001mb) private readonly billRepository: Repository<Itemdt001mb>,) { }

    async create(itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        const itemdt001mb = new Itemdt001mb();
        itemdt001mb.setProperties(itemdtDTO);
        return this.billRepository.save(itemdt001mb);
    }

    async update(itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        const itemdt001mb = new Itemdt001mb();
        itemdt001mb.setProperties(itemdtDTO);
        await this.billRepository.update({ itemid: itemdt001mb.itemid }, itemdt001mb);
        return this.billRepository.save(itemdt001mb);
    }

    async findAll(): Promise<Itemdt001mb[]> {
        return this.billRepository.find();
    }

    findOne(id: string): Promise<Itemdt001mb> {
        return this.billRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.billRepository.delete(id);
    }

}