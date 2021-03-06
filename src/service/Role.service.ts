import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoleDTO } from "src/dto/Role.dto";
import { Role001mb } from "src/entity/Role001mb";
import { Repository } from "typeorm";

@Injectable()
export class RoleService {
	constructor(@InjectRepository(Role001mb) private readonly roleRepository: Repository<Role001mb>) { }

	async create(roleDTO: RoleDTO): Promise<Role001mb> {
		const role001mb = new Role001mb();
		role001mb.setProperties(roleDTO);
		return this.roleRepository.save(role001mb);
	}

	async update(roleDTO: RoleDTO): Promise<Role001mb> {
		const role001mb = await this.roleRepository.findOne({ where: { id: roleDTO.id } });
		role001mb.rlid = roleDTO.rlid;
		role001mb.rolename = roleDTO.rolename;
		role001mb.status = roleDTO.status;
		role001mb.updatedUser = roleDTO.updatedUser;
		role001mb.updatedDatetime = roleDTO.updatedDatetime;
		return this.roleRepository.save(role001mb);
	}

	async findAll(): Promise<Role001mb[]> {
		return this.roleRepository.find({ relations: ["rl"] });
	}

	findOne(id: number): Promise<Role001mb> {
		return this.roleRepository.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.roleRepository.delete(id);
	}
}