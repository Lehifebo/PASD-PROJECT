export class Create_DeliveryDto{
    expected_deliver_datetime: Date;
    actual_deliver_datetime: Date;
    order_id: number;
    cost_in_cents: number;
    status: string;
    retailer_id: string;
    ddscheduler_id: string;
    dddeliverer_id: string;
    id:number
  }