// src/types.ts
export type EventType = {
    id: string;
    title: string;
    date: string;
    time: string;
    address: string;
    city: string;
    country: string;
    long: string;
    lat: string;
    category: string;
    imageUrl: string;
    price: number;
    description: string;
    organizer: {
      name: string;
      email: string;
      twitterUrl: string;
      instagram: string;
      phone: string;
    };
  };
  


export  type EventsWithPagesType = {data:EventType[],NumberOfPages:string,isAllCat:boolean} 

  