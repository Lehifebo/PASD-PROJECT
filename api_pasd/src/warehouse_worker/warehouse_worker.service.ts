import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
import { Delivery } from 'src/d_logic/interfaces/delivery.interface';
import { Package } from 'src/d_logic/interfaces/package.interface';


@Injectable()
export class WarehouseWorkerService {
    constructor(@Inject('PACKAGE_MODEL') private readonly package_model: Model<Package>
    ,@Inject('DELIVERY_MODEL') private readonly delivery_model: Model<Delivery>){}
    async updateLabel(id){
        var axios = require('axios');
        var FormData = require('form-data');
        var fs = require('fs');
        var data = new FormData();
        try {
            var order = await this.delivery_model.find({id:id});
            await fs.promises.writeFile('./label.txt', JSON.stringify(order,null,2));
          } catch (err) {
            console.error("err");
          }
        data.append('labelFile', fs.createReadStream('./label.txt'));
        let url='https://pasd-webshop-api.onrender.com/api/label?delivery_id='+<string>id
        var config = {
          method: 'post',
          url: url,
          headers: { 
            'x-api-key': 'iQE9m2F6bZCifrrp2oeq', 
            ...data.getHeaders()
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        });
        await this.delivery_model.updateOne({id:id},{status:"RFP"})
    }
}
