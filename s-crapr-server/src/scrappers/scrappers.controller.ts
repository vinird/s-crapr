import { Controller, Get, Body, Post, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ScrappersService } from './scrappers.service';
import { Scrapper } from './scrapper.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('scrappers')
export class ScrappersController {
    constructor(private service: ScrappersService) {

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<void | Scrapper[]> {
        return this.service.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('reduced')
    findAllReduced(): Promise<void | Scrapper[]> {
        return this.service.findAllReduced();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Scrapper> {
        return this.service.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() scrapper: Scrapper): Promise<Scrapper> {
        return this.service.create(scrapper);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string, @Body() scrapper: Scrapper): Promise<Scrapper> {
        return this.service.update(id, scrapper);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string): Promise<Scrapper> {
        return this.service.remove(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('run')
    run(@Body() scrapper: Scrapper): any {
        return this.service.run(scrapper);
    }
}
