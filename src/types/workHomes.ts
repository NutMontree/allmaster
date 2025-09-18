export type WorkHomes = {
  name: string
  slug: string
  location: string
  rate: string
  description: { title: string }[]
  details: string
  contronl: string
  creation: string
  // beds: number.
  // baths: number
  // area: number
  images: WorkImage[]
}

interface WorkImage {
  src: string;
}
