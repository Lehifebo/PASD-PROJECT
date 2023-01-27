import { Get, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
import { Create_PackageDto } from './dto/create_package';
import { Create_DeliveryDto } from './dto/create_delivery';
import { Delivery } from './interfaces/delivery.interface';
import { Package } from './interfaces/package.interface';


@Injectable()
export class PackageService {
  constructor(@Inject('PACKAGE_MODEL') private readonly package_model: Model<Package>
  ,@Inject('DELIVERY_MODEL') private readonly delivery_model: Model<Delivery>) {}
  
  async findAll(){
    //various constants and variables needed
    let url = 'https://pasd-webshop-api.onrender.com/api/order/';
    const config = {headers:{'x-api-key': 'iQE9m2F6bZCifrrp2oeq'}};
    let body={
      "price_in_cents": 1,
      "expected_delivery_datetime": null,
      "order_id": null
    }
    body.expected_delivery_datetime=new Date(new Date().getTime())
    let order_retail:any
  
    //get all available orders
    try {
      order_retail =(await axios.get(url,config)).data
    } catch (error) {
      return "No available orders"
    }
    url='https://pasd-webshop-api.onrender.com/api/delivery/'
    console.log(order_retail.orders.length)
    
    var acceptedOrdersId=[]
    var i=0
    //post on every available order
    for(const order of order_retail.orders){
      let post_response:any
      try {
        body.order_id=order.id
        post_response =(await axios.post(url,body,config)).data
        if(post_response.status=='EXP'){
          await this.startCreateProcess(order,post_response)
          acceptedOrdersId[i++]=order.id;
        }
      } catch (error) {
      }
    }  
    return order_retail.orders;
  }

  async create(createDeliveryDto: Create_DeliveryDto){
    const createdDelivery = await this.delivery_model.create(createDeliveryDto);
    console.log(createdDelivery)
    return createdDelivery;
  }

   async startCreateProcess(order:Create_PackageDto,delivery:Create_DeliveryDto) {
    console.log(delivery)
    const response1=await this.delivery_model.create(delivery)
    const response=await this.package_model.create(order)
    return null
    
  }

}


