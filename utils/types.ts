export interface Restaurant {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    address: string
    dishes: Dish[]
    image: Image
    lat: number
    lng: number
    name: string
    rating: number
    short_description: string
    type: Type
  }

export interface Dish {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    description: string
    image: any[]
    name: string
    price: number
    rating: number
  }
  
  export interface Image {
    _type: string
    asset: Asset
  }
  
  export interface Asset {
    _ref: string
    _type: string
  }
  
  export interface Type {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    description: string
    title: string
    image: Image
  }

export interface FeaturedSection {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    name: string
    restaurants: Restaurant[]
    short_description: string
}
  