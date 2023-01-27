import { Controller } from '@nestjs/common';
import { Patch, Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import axios from 'axios';
import { DddelivererService } from './dddeliverer.service';
import { Create_DelivererDto } from './dto/create_deliverer';

@Controller('dddscheduler')
export class DddelivererController {
    constructor(private readonly dddelivererService: DddelivererService){}
    
    @Patch('/:id')
    patchDelvery(
    @Param('id')id,
    @Body()toPatch 
    ){
        return this.dddelivererService.patchDelivery(toPatch,id);
    }
    @Get('/:id')
    getDelivery(@Param('id') id){
        return this.dddelivererService.getDelivery(id);
    }
    @Post()
    async create(@Body() createDelivererDto: Create_DelivererDto){
        return await this.dddelivererService.create(createDelivererDto);
    }
}
