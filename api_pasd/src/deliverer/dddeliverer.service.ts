import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
import { Delivery } from 'src/d_logic/interfaces/delivery.interface';
import { Package } from 'src/d_logic/interfaces/package.interface';
import { Deliverer } from './interfaces/deliverer.interface';
import { Create_DelivererDto } from './dto/create_deliverer';
@Injectable()
export class DddelivererService {
    constructor(@Inject('PACKAGE_MODEL') private readonly package_model: Model<Package>
    ,@Inject('DELIVERY_MODEL') private readonly delivery_model: Model<Delivery>
    ,@Inject('DELIVERER_MODEL') private readonly deliverer_model: Model<Deliverer> ){}
    
    async patchDelivery(toPatch,id) {
        let body:any
        body={}
        if(toPatch.status=="DEL"){
            body.status="DEL";
            body.actual_deliver_datetime=new Date()
            await this.delivery_model.updateOne({id:id},{actual_deliver_datetime:body.actual_deliver_datetime})
            await this.delivery_model.updateOne({id:id},{status:"DEL"})
        }
        else{
            body.status="TRN"
            await this.delivery_model.updateOne({id:id},{status:"TRN"})
        }
        
        let url="https://pasd-webshop-api.onrender.com/api/delivery/"+<String>id
        const config = {headers:{'x-api-key': 'iQE9m2F6bZCifrrp2oeq'}};
        console.log(body)
        console.log(url)
        let response=await axios.patch(url,body,config)
        return response.status;
    }

    async getDelivery(id){
        var orders = await this.delivery_model.find({id:id});
        return orders;
    }

    async create(createDelivererDto: Create_DelivererDto){
        console.log(createDelivererDto)
        return await this.deliverer_model.create(createDelivererDto);
    }
}
