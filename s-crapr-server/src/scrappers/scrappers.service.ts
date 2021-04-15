import { InjectRepository } from '@nestjs/typeorm';
import { Scrapper } from './scrapper.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { execute } from './handlers/scrapper'
import { processData } from './handlers/data-handler'

@Injectable()
export class ScrappersService {
    constructor(
        @InjectRepository(Scrapper)
        private scrapperRepository: Repository<Scrapper>,
    ) { }

    findAll(): Promise<Scrapper[]> {
        return this.scrapperRepository.find();
    }

    findAllReduced(): Promise<Scrapper[]> {
        return this.scrapperRepository.createQueryBuilder('scrapper').select('scrapper.id')
            .getMany();
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

    async run(scrapper: Scrapper) {
        try {
            const html = await execute(scrapper.url);
            const result = processData(html, scrapper.cssSelector, scrapper.outputFormat);
            return { result, console: 'No errors' };
        } catch (error) {
            return { result: '', console: error.message };
        }
    }
}

