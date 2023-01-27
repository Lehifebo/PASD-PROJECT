import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { Create_PackageDto } from './dto/create_package';
import { Create_DeliveryDto } from './dto/create_delivery';
import { PackageService } from './package.service';

@Controller('orders')
export class PackageController {
    constructor(private readonly PackageService: PackageService){}
    
    @Get()
    async findAll()
    {
        return this.PackageService.findAll();
    }

    @Post()
    async create(@Body() createDeliveryDto: Create_DeliveryDto) {
      return await this.PackageService.create(createDeliveryDto)
    }

}
