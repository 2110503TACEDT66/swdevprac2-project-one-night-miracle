interface CarsItem {
    _id: string,
    carid: string,
    pricerate: string,
    model: string,
    cartype: string,
    numberofseat: string,
    gearsystem: string,
    picture: string,
   
  }
  
  interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CarsItem[]
  }

  interface rentalsItem {
   _id:string
   rentalDate:Date
   user:string
   car:string
   isPaid:Boolean
   createdAt:Date 
  }