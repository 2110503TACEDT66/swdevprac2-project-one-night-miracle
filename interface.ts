interface CarsItem {
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
  
  interface CarsJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CarsItem[]
  }

  interface rentalsItem {
   id:string,
   pickupDate:Date,
   returnDate:Date,
   user:string,
   car:string,
   isPaid:Boolean,
   createdAt:Date
  }