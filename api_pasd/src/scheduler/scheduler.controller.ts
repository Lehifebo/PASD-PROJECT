import { Body, Controller, Patch, Post,Get } from "@nestjs/common";
import { Create_DeliveryDto } from "src/delivery_logic/dto/create_delivery";
import { schedulerService } from "./scheduler.service";

@Controller('scheduler')
export class schedulerController{
    constructor(private readonly schedulerService:schedulerService){}
   
    @Patch()
    deliveresToBeHandled(){
        console.log("here")
        return this.schedulerService.handleOrders();
    }
    @Get()
    getAll(){
        console.log("here1")
        return this.schedulerService.getAll();
    }
    @Post()
    updatedelievries(@Body() createDeliveryDto: Create_DeliveryDto){
       return this.schedulerService.update(createDeliveryDto) 
    }
}