import { Inject, Injectable } from "@nestjs/common";
import axios from "axios";
import { Model } from "mongoose";
import { Create_DeliveryDto } from "src/delivery_logic/dto/create_delivery";
import { Delivery } from "src/delivery_logic/interfaces/delivery.interface";
import { Package } from "src/delivery_logic/interfaces/package.interface";
import { WarehouseWorkerService } from "src/warehouse_worker/warehouse_worker.service";

@Injectable()
export class schedulerService{
    constructor(@Inject('PACKAGE_MODEL') private readonly package_model: Model<Package>
    ,@Inject('DELIVERY_MODEL') private readonly delivery_model: Model<Delivery>
    , private readonly worker : WarehouseWorkerService){}
    
    
    async handleOrders() {
        await axios.get("http://localhost:3001/orders")
        var orders = await this.delivery_model.find();
        for(const order of orders){
            if(order.status=='EXP'){
               await this.worker.updateLabel(order.id);
            }
        }
        return orders
    }
    async getAll(){
        var orders = await this.delivery_model.find();
        for(const order of orders){
            if(order.status=='EXP'){
               await this.worker.updateLabel(order.id);
            }
        }
        return orders
    }
    async update(createDeliveryDto:Create_DeliveryDto)
    {
        let response=await this.delivery_model.updateOne(
            {order_id:createDeliveryDto.order_id},
            {expected_deliver_datetime:createDeliveryDto.expected_deliver_datetime,
            dddeliverer_id:createDeliveryDto.dddeliverer_id,
            status:createDeliveryDto.status
            })
        return response
    }
}