import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { ScrappersService } from './scrappers.service';
import { Scrapper } from './scrapper.entity';

@Controller('scrappers')
export class ScrappersController {
    constructor(private service: ScrappersService) {

    }

    @Get()
    findAll(): Promise<void | Scrapper[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Scrapper> {
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() scrapper: Scrapper): Promise<Scrapper> {
        return this.service.create(scrapper);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() scrapper: Scrapper): Promise<Scrapper> {
        return this.service.update(id, scrapper);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Scrapper> {
        return this.service.remove(id);
    }
}
