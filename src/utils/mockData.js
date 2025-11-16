export const mockStores = [
  {
    id: 1,
    name: "Al-Fatah Shopping Mall",
    owner: "Ahmed Raza",
    location: "Liberty Market, Lahore",
    contact: "info@alfatah.com",
    phone: "+92-42-1234567",
    category: "CLOTHING",
    description: "Pakistan ka sab se bara shopping mall with international brands",
    products: [
      { id: 1, name: "Shampoo", price: 450, category: "BEAUTY", available: true, stock: 25, brand: "Sunsilk" },
      { id: 2, name: "Men's Shirt", price: 1299, category: "CLOTHING", available: true, stock: 30, size: "M,L,XL", brand: "J." },
      { id: 3, name: "Jeans", price: 1599, category: "CLOTHING", available: true, stock: 20, size: "28-36", brand: "Levi's" },
      { id: 4, name: "Perfume", price: 1200, category: "BEAUTY", available: true, stock: 15, brand: "Junaid Jamshed" }
    ]
  },
  {
    id: 2,
    name: "Jalalsons Department Store",
    owner: "Jalal Ahmed",
    location: "Main Market, Lahore",
    contact: "contact@jalalsons.com", 
    phone: "+92-42-2345678",
    category: "CLOTHING",
    description: "Premium clothing and lifestyle store",
    products: [
      { id: 1, name: "Men's Suit", price: 8999, category: "CLOTHING", available: true, stock: 10, size: "38-44", brand: "Jalalsons" },
      { id: 2, name: "Women's Kurti", price: 1899, category: "CLOTHING", available: true, stock: 25, size: "S,M,L", brand: "J." },
      { id: 3, name: "Kids Dress", price: 1299, category: "CLOTHING", available: true, stock: 18, size: "2-10 Years", brand: "Jalalsons" }
    ]
  },
  {
    id: 3,
    name: "Bundu Khan Store",
    owner: "Bundu Khan",
    location: "Lahore",
    contact: "store@bundukhan.com",
    phone: "+92-42-3456789",
    category: "FOOD",
    description: "Famous for traditional Pakistani food and spices",
    products: [
      { id: 1, name: "Chicken Biryani", price: 350, category: "FOOD", available: true, stock: 50, weight: "1 kg" },
      { id: 2, name: "Karahi", price: 1200, category: "FOOD", available: true, stock: 30, weight: "1 kg" },
      { id: 3, name: "Mixed Spices", price: 250, category: "FOOD", available: true, stock: 100, weight: "200g" }
    ]
  },
  {
    id: 4,
    name: "J. Store",
    owner: "Junaid Jamshed",
    location: "Gulberg, Lahore", 
    contact: "customercare@junaidjamshed.com",
    phone: "+92-42-4567890",
    category: "CLOTHING",
    description: "Traditional and modern Pakistani clothing",
    products: [
      { id: 1, name: "Embroidered Kurta", price: 2999, category: "CLOTHING", available: true, stock: 15, size: "M,L,XL", brand: "J." },
      { id: 2, name: "Pakistani Suit", price: 4599, category: "CLOTHING", available: true, stock: 12, size: "S,M,L", brand: "J." },
      { id: 3, name: "Shalwar Kameez", price: 3299, category: "CLOTHING", available: true, stock: 20, size: "M,L,XL", brand: "J." }
    ]
  },
  {
    id: 5,
    name: "Pakistan Electronics",
    owner: "Ali Hassan",
    location: "Hafeez Center, Lahore",
    contact: "sales@pakistanelectronics.com",
    phone: "+92-42-5678901",
    category: "ELECTRONICS", 
    description: "Latest electronics and home appliances",
    products: [
      { id: 1, name: "Smartphone", price: 25999, category: "ELECTRONICS", available: true, stock: 8, brand: "Samsung" },
      { id: 2, name: "LED TV", price: 45999, category: "ELECTRONICS", available: true, stock: 5, brand: "TCL" },
      { id: 3, name: "Microwave", price: 15999, category: "ELECTRONICS", available: true, stock: 12, brand: "Dawlance" }
    ]
  },
  {
    id: 6,
    name: "ChenOne Mall",
    owner: "ChenOne Group",
    location: "Lahore",
    contact: "info@chenone.com",
    phone: "+92-42-6789012",
    category: "HOME",
    description: "Home furniture and decor items",
    products: [
      { id: 1, name: "Bed Set", price: 45999, category: "HOME", available: true, stock: 6, material: "Wood" },
      { id: 2, name: "Sofa Set", price: 65999, category: "HOME", available: true, stock: 4, material: "Fabric" },
      { id: 3, name: "Dining Table", price: 32999, category: "HOME", available: true, stock: 8, material: "Glass" }
    ]
  }
];

export const PAKISTAN_CITIES = [
  "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", 
  "Multan", "Peshawar", "Quetta", "Gujranwala", "Sialkot"
];

export const PAKISTAN_BRANDS = [
  "J.", "Jalalsons", "Bundu Khan", "Junaid Jamshed", "ChenOne",
  "Dawlance", "Orient", "Pak Elektron", "Sapphire", "Khaadi"
];

export const mockOrders = [
  {
    id: 1001,
    storeName: "Al-Fatah Shopping Mall",
    customerName: "Ali Ahmed",
    products: ["Shampoo", "Men's Shirt"],
    total: 1749,
    status: "delivered",
    timestamp: "2024-01-15T10:30:00"
  }
];