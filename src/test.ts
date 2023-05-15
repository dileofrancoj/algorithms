export enum DeliveryFeeVariant {
  DEFAULT = 'default',
  FREE = 'free',
  VARIABLE = 'variable',
  PLUS_FREE = 'plus-free',
  PLUS_DISCOUNT = 'plus-discount',
}

export interface Vendor {
  image: string
  id: string
  deliveryFee: string
  deliveryFeeVariant: DeliveryFeeVariant
}

interface Delivery {
    deliveryTime: string
    deliveryFeeWithDiscount?: string
    deliveryFee: string
  }

  interface VendorInfo extends Vendor {
    image: string
    id: string
    name: string
    rating: string
    businessCategory: string
    deliveryFeeVariant: DeliveryFeeVariant
    delivery: Delivery
  }
  export interface VendorProductsGalleryProps extends ProductsCarouselProps {
    vendor: VendorInfo
    onVendorClick: () => void
  }