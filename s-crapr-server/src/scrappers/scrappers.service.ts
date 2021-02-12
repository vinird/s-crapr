import { InjectRepository } from '@nestjs/typeorm';
import { Scrapper } from './scrapper.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ScrappersService {
    constructor(
        @InjectRepository(Scrapper)
        private scrapperRepository: Repository<Scrapper>,
    ) { }

    findAll(): Promise<Scrapper[]> {
        return this.scrapperRepository.find();
    }

    findOne(id: string): Promise<Scrapper> {
        return this.scrapperRepository.findOne(id);
    }

    create(scrapper: Scrapper): Promise<Scrapper> {
        return this.scrapperRepository.save(scrapper)
    }

    async update(id: string, scrapper: Scrapper): Promise<Scrapper> {
        await this.scrapperRepository.update({ id }, scrapper);
        return this.scrapperRepository.findOne(id);
    }

    async remove(id: string): Promise<Scrapper> {
        await this.scrapperRepository.delete(id);
        return this.scrapperRepository.findOne(id);
    }
}

