// propertyListingsAPI.js
const Listings = [
  {
    id: 1,
    imageUrl: 'https://placehold.co/400',
    title: '1 Kanal House for sale',
    address: 'DHA Phase 6, Lahore',
    beds: 5,
    bath: 6,
    coveredAreaSQFT: 2350,
    propertyType: 'house',
    isCommercial: false,
    price: 65000000,
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/200/300",
    title: "3 Bedroom Apartment for sale",
    address: "Johar Town, Lahore",
    beds: 3,
    bath: 2,
    coveredAreaSQFT: 1500,
    propertyType: "apartment",
    isCommercial: false,
    price: 28000000
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/400",
    title: "Luxury Villa for sale",
    address: "Bahria Town, Islamabad",
    beds: 6,
    bath: 7,
    coveredAreaSQFT: 4500,
    propertyType: "villa",
    isCommercial: false,
    price: 125000000
  },
  {
    id: 4,
    imageUrl: "https://placehold.co/400",
    title: "Commercial Office Space",
    address: "Blue Area, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 1800,
    propertyType: "office",
    isCommercial: true,
    price: 85000000
  },
  {
    id: 5,
    imageUrl: "https://placehold.co/400",
    title: "2 Kanal Bungalow for sale",
    address: "Cantt, Karachi",
    beds: 7,
    bath: 8,
    coveredAreaSQFT: 6000,
    propertyType: "bungalow",
    isCommercial: false,
    price: 220000000
  },
  {
    id: 6,
    imageUrl: "https://placehold.co/400",
    title: "Penthouse Apartment for sale",
    address: "Clifton, Karachi",
    beds: 4,
    bath: 5,
    coveredAreaSQFT: 2800,
    propertyType: "apartment",
    isCommercial: false,
    price: 38000000
  },
  {
    id: 7,
    imageUrl: "https://placehold.co/400",
    title: "Commercial Plaza for sale",
    address: "Gulberg, Lahore",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 8000,
    propertyType: "plaza",
    isCommercial: true,
    price: 180000000
  },
  {
    id: 8,
    imageUrl: "https://placehold.co/400",
    title: "4 Bedroom House for sale",
    address: "E-11, Islamabad",
    beds: 4,
    bath: 3,
    coveredAreaSQFT: 2200,
    propertyType: "house",
    isCommercial: false,
    price: 72000000
  },
  {
    id: 9,
    imageUrl: "https://placehold.co/400",
    title: "Farm House",
    address: "Raiwind Road, Lahore",
    beds: 6,
    bath: 4,
    coveredAreaSQFT: 8000,
    propertyType: "farmhouse",
    isCommercial: false,
    price: 150000000
  },
  {
    id: 10,
    imageUrl: "https://placehold.co/400",
    title: "Commercial Warehouse",
    address: "S.I.T.E., Karachi",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 10000,
    propertyType: "warehouse",
    isCommercial: true,
    price: 100000000
  },
  {
    id: 11,
    imageUrl: "https://placehold.co/400",
    title: "5 Marla House for sale",
    address: "Wapda Town, Lahore",
    beds: 3,
    bath: 2,
    coveredAreaSQFT: 1250,
    propertyType: "house",
    isCommercial: false,
    price: 4500000
  },
  {
    id: 12,
    imageUrl: "https://placehold.co/400",
    title: "Apartment with Sea View",
    address: "Clifton, Karachi",
    beds: 2,
    bath: 2,
    coveredAreaSQFT: 1100,
    propertyType: "apartment",
    isCommercial: false,
    price: 9000000
  },
  {
    id: 13,
    imageUrl: "https://placehold.co/400",
    title: "Commercial Retail Space",
    address: "Dolmen Mall, Karachi",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 500,
    propertyType: "retail",
    isCommercial: true,
    price: 35000000
  },
  {
    id: 14,
    imageUrl: "https://placehold.co/400",
    title: "10 Marla House for sale",
    address: "Model Town, Lahore",
    beds: 4,
    bath: 3,
    coveredAreaSQFT: 2500,
    propertyType: "house",
    isCommercial: false,
    price: 12000000
  },
  {
    id: 15,
    imageUrl: "https://picsum.photos/200/300",
    title: "Commercial Office Suite",
    address: "F-7, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 800,
    propertyType: "office",
    isCommercial: true,
    price: 5500000
  },
  {
    id: 16,
    imageUrl: "https://placehold.co/400",
    title: "Modern Townhouse for sale",
    address: "Defence View, Karachi",
    beds: 5,
    bath: 4,
    coveredAreaSQFT: 3200,
    propertyType: "townhouse",
    isCommercial: false,
    price: 95000000
  },
  {
    id: 17,
    imageUrl: "https://picsum.photos/200",
    title: "5 Marla Plot for sale",
    address: "G-13, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 1250,
    propertyType: "plot",
    isCommercial: false,
    price: 3500000
  },
  {
    id: 18,
    imageUrl: "https://placehold.co/402",
    title: "Luxury Condo",
    address: "Downtown, Lahore",
    beds: 3,
    bath: 3,
    coveredAreaSQFT: 1800,
    propertyType: "condo",
    isCommercial: false,
    price: 55000000
  },
  {
    id: 19,
    imageUrl: "https://picsum.photos/200/300",
    title: "Commercial Shop",
    address: "Super Market, Karachi",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 300,
    propertyType: "shop",
    isCommercial: true,
    price: 18000000
  },
  {
    id: 20,
    imageUrl: "https://placehold.co/404",
    title: "8 Marla House for sale",
    address: "Bahria Town, Lahore",
    beds: 4,
    bath: 4,
    coveredAreaSQFT: 2200,
    propertyType: "house",
    isCommercial: false,
    price: 8800000
  },
  {
    id: 21,
    imageUrl: "https://placehold.co/405",
    title: "Farm Land",
    address: "Chakwal, Punjab",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 10000,
    propertyType: "land",
    isCommercial: false,
    price: 5000000
  },
  {
    id: 22,
    imageUrl: "https://placehold.co/406",
    title: "4 Bedroom Penthouse",
    address: "Gulshan-e-Iqbal, Karachi",
    beds: 4,
    bath: 3,
    coveredAreaSQFT: 2800,
    propertyType: "penthouse",
    isCommercial: false,
    price: 42000000
  },
  {
    id: 23,
    imageUrl: "https://placehold.co/407",
    title: "Commercial Office Space",
    address: "F-10, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 1500,
    propertyType: "office",
    isCommercial: true,
    price: 65000000
  },
  {
    id: 24,
    imageUrl: "https://placehold.co/408",
    title: "Spacious Apartment",
    address: "DHA Phase 2, Lahore",
    beds: 2,
    bath: 2,
    coveredAreaSQFT: 1400,
    propertyType: "apartment",
    isCommercial: false,
    price: 22000000
  },
  {
    id: 25,
    imageUrl: "https://placehold.co/409",
    title: "Commercial Showroom",
    address: "Main Boulevard, Lahore",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 1800,
    propertyType: "showroom",
    isCommercial: true,
    price: 120000000
  },
  {
    id: 26,
    imageUrl: "https://placehold.co/410",
    title: "6 Marla House",
    address: "G-6, Islamabad",
    beds: 3,
    bath: 4,
    coveredAreaSQFT: 1800,
    propertyType: "house",
    isCommercial: false,
    price: 8500000
  },
  {
    id: 27,
    imageUrl: "https://placehold.co/411",
    title: "Luxury Villa",
    address: "Clifton, Karachi",
    beds: 5,
    bath: 6,
    coveredAreaSQFT: 4000,
    propertyType: "villa",
    isCommercial: false,
    price: 185000000
  },
  {
    id: 28,
    imageUrl: "https://placehold.co/412",
    title: "Commercial Complex",
    address: "Blue Area, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 8000,
    propertyType: "complex",
    isCommercial: true,
    price: 280000000
  },
  {
    id: 29,
    imageUrl: "https://placehold.co/413",
    title: "5 Bedroom House",
    address: "Model Town, Lahore",
    beds: 5,
    bath: 5,
    coveredAreaSQFT: 3200,
    propertyType: "house",
    isCommercial: false,
    price: 13500000
  },
  {
    id: 30,
    imageUrl: "https://placehold.co/414",
    title: "Commercial Land",
    address: "Saddar, Karachi",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 15000,
    propertyType: "land",
    isCommercial: true,
    price: 70000000
  }
];

export const getPropertyListings = () => {
  return Promise.resolve(Listings);
};


// listingDetailAPI.js
export const getListingDetail = (id) => {
  const listing = Listings.find((item) => item.id === id);
  return Promise.resolve(listing);
};