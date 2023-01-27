export class Create_PackageDto {
      send_date: Date
      x_in_mm: number
      y_in_mm: number
      z_in_mm: number
      is_breakable: boolean
      is_perishable: boolean
      sender_info: {
        name: string,
        street_and_number: string,
        zipcode: string,
        city: string,
        country: string
      }
      receiver_info: {
        name: string,
        street_and_number: string,
        zipcode: string,
        city: string,
        country: string
      }
      id: number
      retailer_id: number;
      vehicle_id: number;
      warehouse_id: number;
  }
  