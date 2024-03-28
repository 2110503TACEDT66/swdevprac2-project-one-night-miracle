export interface CarsItem {
    _id: string,
    carid: string,
    pricerate: string,
    model: string,
    cartype: string,
    numberofseat: string,
    gearsystem: string,
    picture: string,
    id: string
  }
  
  export interface CarsJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CarsItem[]
  }

  export interface ProvidersItem {
    _id: string,
    name: string,
    address: string,
    telephoneNumber: string
  }
  
  export interface ProvidersJson {
    success: boolean,
    data: ProvidersItem[]
  }

  export interface rentalsItem {
   id:string,
   pickupDate:Date,
   returnDate:Date,
   user:string,
   car:string,
   isPaid:Boolean,
   createdAt:Date
  }