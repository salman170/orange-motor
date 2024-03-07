export const models = [
  //tiago
  // {
  //   id: "tiago",
  //   category: "tata",
  //   name: "Tiago",
  //   pic: require("../assets/others/tiago.png"),
  //   price: 2482000,
  //   fuel: "Petrol / Hybrid",
  //   transmission: "e-CVT",
  //   cc: "1987",
  //   variants: [
  //     {
  //       variant: "Zeta+ 7 STR",
  //       price: 2482000,
  //     },
  //     {
  //       variant: "Zeta+ 8 STR	",
  //       price: 2487000,
  //     },
  //     {
  //       variant: "Alpha+ 7STR	",
  //       price: 2842000,
  //     },
  //   ],
  //   banners: [
  //     {
  //       img: require("../assets/altroz/1.webp"),
  //     },
  //     {
  //       img: require("../assets/altroz/2.webp"),
  //     },
  //     {
  //       img: require("../assets/altroz/3.webp"),
  //     },
  //     {
  //       img: require("../assets/altroz/4.webp"),
  //     },
  //   ],

  //   // dimensions & capacity
  //   dimensions: [
  //     //should be 6 items or max 6 items
  //     {
  //       title: "Length (mm)",
  //       value: 4755,
  //     },
  //     {
  //       title: "Width (mm)",
  //       value: 1845,
  //     },
  //     {
  //       title: "Height (mm)",
  //       value: 1795,
  //     },
  //     {
  //       title: "Fuel Tank(L)",
  //       value: 52,
  //     },
  //     {
  //       title: "Seating",
  //       value: 7,
  //     },
  //     {
  //       title: "Bootspace(L)",
  //       value: 318,
  //     },
  //   ],

  //   //engine & transmission
  //   engine: [
  //     {
  //       title: "Capacity(cc)",
  //       value: 1987,
  //     },
  //     {
  //       title: "Max Power",
  //       value: "112kw@6000",
  //     },
  //     {
  //       title: "Fuel Type",
  //       value: "Petrol / Hybrid",
  //     },
  //     {
  //       title: "Hybrid Motor",
  //       value: "AC Synchronous Motor",
  //     },
  //     {
  //       title: "Hybrid Max Power",
  //       value: "83.73kw@4000",
  //     },
  //     {
  //       title: "Transmission",
  //       value: "e-CVT",
  //     },
  //   ],

  //   //weights & brakes
  //   weight: [
  //     {
  //       title: "Front",
  //       value: "Ventilated Disc",
  //     },
  //     {
  //       title: "Rear",
  //       value: "Solid Disc",
  //     },
  //     {
  //       title: "Kerb",
  //       value: "1620/1630",
  //     },
  //     {
  //       title: "Gross Weight",
  //       value: 2300,
  //     },
  //   ],
  // },
  {
    id: "tiago",
    category: "tata",
    name: "Tiago",
    pic: require("../assets/others/tiago.png"),
    price: 600000,
    fuel: "Petrol",
    transmission: "Manual",
    cc: "1199",
    variants: [
      {
        variant: "XE",
        price: 600000,
      },
      {
        variant: "XM",
        price: 650000,
      },
      {
        variant: "XT",
        price: 700000,
      },
    ],
    banners: [
      {
        img: require("../assets/tiago/TornadoBlue-0-2.png"),
      },
      {
        img: require("../assets/tiago/AutoHeadlamps-23-1.webp"),
      },
      {
        img: require("../assets/tiago/dual-tone-alloy-wheels.webp"),
      },
      {
        img: require("../assets/tiago/digital-showroom-1.webp"),
      },
      {
        img: require("../assets/tiago/inviting-and-spacious-interiors.webp"),
      },
    ],

    // Dimensions & Capacity
    dimensions: [
      {
        title: "Length (mm)",
        value: 3765,
      },
      {
        title: "Width (mm)",
        value: 1677,
      },
      {
        title: "Height (mm)",
        value: 1535,
      },
      {
        title: "Fuel Tank(L)",
        value: 35,
      },
      {
        title: "Seating",
        value: 5,
      },
      {
        title: "Bootspace(L)",
        value: 242,
      },
    ],

    // Engine & Transmission
    engine: [
      {
        title: "Capacity(cc)",
        value: 1199,
      },
      {
        title: "Max Power",
        value: "86@6000",
      },
      {
        title: "Fuel Type",
        value: "Petrol",
      },
      {
        title: "Transmission",
        value: "Manual",
      },
    ],

    // Weights & Brakes
    weight: [
      {
        title: "Front",
        value: "Ventilated Disc",
      },
      {
        title: "Rear",
        value: "Drum",
      },
      {
        title: "Kerb",
        value: "935-980",
      },
      {
        title: "Gross Weight",
        value: 1500,
      },
    ],
  },

  //altroz
  {
    id: "altroz",
    category: "tata",
    name: "Altroz",
    pic: require("../assets/others/altroz.png"),
    price: 750000,
    fuel: "Petrol / Diesel",
    transmission: "Manual",
    cc: "1497",
    variants: [
      {
        variant: "XE",
        price: 750000,
      },
      {
        variant: "XM",
        price: 800000,
      },
      {
        variant: "XT",
        price: 850000,
      },
    ],
    banners: [
      {
        img: require("../assets/altroz/1.webp"),
      },
      {
        img: require("../assets/altroz/2.webp"),
      },
      {
        img: require("../assets/altroz/3.webp"),
      },
      {
        img: require("../assets/altroz/4.webp"),
      },
    ],

    // Dimensions & Capacity
    dimensions: [
      {
        title: "Length (mm)",
        value: 3990,
      },
      {
        title: "Width (mm)",
        value: 1755,
      },
      {
        title: "Height (mm)",
        value: 1523,
      },
      {
        title: "Fuel Tank(L)",
        value: 37,
      },
      {
        title: "Seating",
        value: 5,
      },
      {
        title: "Bootspace(L)",
        value: 345,
      },
    ],

    // Engine & Transmission
    engine: [
      {
        title: "Capacity(cc)",
        value: 1497,
      },
      {
        title: "Max Power",
        value: "89@4000",
      },
      {
        title: "Fuel Type",
        value: "Petrol / Diesel",
      },
      {
        title: "Transmission",
        value: "Manual",
      },
    ],

    // Weights & Brakes
    weight: [
      {
        title: "Front",
        value: "Disc",
      },
      {
        title: "Rear",
        value: "Drum",
      },
      {
        title: "Kerb",
        value: "1036-1150",
      },
      {
        title: "Gross Weight",
        value: 1500,
      },
    ],
  },

  // Tigor
  {
    id: "tigor",
    category: "tata",
    name: "Tigor",
    pic: require("../assets/others/tigor.png"),
    price: 700000,
    fuel: "Petrol / Diesel",
    transmission: "Manual",
    cc: "1199",
    variants: [
      {
        variant: "XE",
        price: 700000,
      },
      {
        variant: "XM",
        price: 750000,
      },
      {
        variant: "XT",
        price: 800000,
      },
    ],
    banners: [
      {
        img: require("../assets/tigor/AutoHeadlampswithLEDDRLs-0.webp"),
      },
      {
        img: require("../assets/tigor/digital-showroom-2.webp"),
      },
      {
        img: require("../assets/tigor/wide-and-comfortable-rear-seat-1.webp"),
      },
      {
        img: require("../assets/tigor/inviting-interiors-1.webp"),
      },
      {
        img: require("../assets/tigor/MeteorBronze-0-3.png"),
      },
    ],

    // Dimensions & Capacity
    dimensions: [
      {
        title: "Length (mm)",
        value: 3993,
      },
      {
        title: "Width (mm)",
        value: 1677,
      },
      {
        title: "Height (mm)",
        value: 1532,
      },
      {
        title: "Fuel Tank(L)",
        value: 35,
      },
      {
        title: "Seating",
        value: 5,
      },
      {
        title: "Bootspace(L)",
        value: 419,
      },
    ],

    // Engine & Transmission
    engine: [
      {
        title: "Capacity(cc)",
        value: 1199,
      },
      {
        title: "Max Power",
        value: "84@6000",
      },
      {
        title: "Fuel Type",
        value: "Petrol / Diesel",
      },
      {
        title: "Transmission",
        value: "Manual",
      },
    ],

    // Weights & Brakes
    weight: [
      {
        title: "Front",
        value: "Disc",
      },
      {
        title: "Rear",
        value: "Drum",
      },
      {
        title: "Kerb",
        value: "1012-1080",
      },
      {
        title: "Gross Weight",
        value: 1520,
      },
    ],
  },

  //Punch
  {
    id: "punch",
    category: "tata",
    name: "Punch",
    pic: require("../assets/others/punch.png"),
    price: 800000,
    fuel: "Petrol",
    transmission: "Manual / Automatic",
    cc: "1199",
    variants: [
      {
        variant: "XE",
        price: 800000,
      },
      {
        variant: "XM",
        price: 850000,
      },
      {
        variant: "XT",
        price: 900000,
      },
    ],
    banners: [
      {
        img: require("../assets/punch/headlamp-1.webp"),
      },
      {
        img: require("../assets/punch/spacious-interiors-and-rare-flat-floors-new.webp"),
      },
      {
        img: require("../assets/punch/stylish-roofrails-new.webp"),
      },
      {
        img: require("../assets/punch/5-speed-amt.webp"),
      },
      {
        img: require("../assets/punch/TornadoBlue-0-1.png"),
      },
    ],

    // Dimensions & Capacity
    dimensions: [
      {
        title: "Length (mm)",
        value: 3840,
      },
      {
        title: "Width (mm)",
        value: 1750,
      },
      {
        title: "Height (mm)",
        value: 1647,
      },
      {
        title: "Fuel Tank(L)",
        value: 37,
      },
      {
        title: "Seating",
        value: 5,
      },
      {
        title: "Bootspace(L)",
        value: 366,
      },
    ],

    // Engine & Transmission
    engine: [
      {
        title: "Capacity(cc)",
        value: 1199,
      },
      {
        title: "Max Power",
        value: "86@6000",
      },
      {
        title: "Fuel Type",
        value: "Petrol",
      },
      {
        title: "Transmission",
        value: "Manual / Automatic",
      },
    ],

    // Weights & Brakes
    weight: [
      {
        title: "Front",
        value: "Disc",
      },
      {
        title: "Rear",
        value: "Drum",
      },
      {
        title: "Kerb",
        value: "1000-1050",
      },
      {
        title: "Gross Weight",
        value: 1400,
      },
    ],
  },

  //Nexon
  {
    id: "nexon",
    category: "tata",
    name: "Nexon",
    pic: require("../assets/others/nexon.png"),
    price: 1000000,
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    cc: "1199",
    variants: [
      {
        variant: "XE",
        price: 1000000,
      },
      {
        variant: "XM",
        price: 1050000,
      },
      {
        variant: "XT",
        price: 1100000,
      },
    ],
    banners: [
      {
        img: require("../assets/nexon/bi-functional-full-led-lamp.webp"),
      },
      {
        img: require("../assets/nexon/digital-showroom.webp"),
      },
      {
        img: require("../assets/nexon/GrandFloorConsoleWithLeatheretteArmrest.webp"),
      },
      {
        img: require("../assets/nexon/two-spoke-steering-wheel.webp"),
      },
      {
        img: require("../assets/nexon/sequential-led-drls-new.webp"),
      },
    ],

    // Dimensions & Capacity
    dimensions: [
      {
        title: "Length (mm)",
        value: 3993,
      },
      {
        title: "Width (mm)",
        value: 1811,
      },
      {
        title: "Height (mm)",
        value: 1606,
      },
      {
        title: "Fuel Tank(L)",
        value: 44,
      },
      {
        title: "Seating",
        value: 5,
      },
      {
        title: "Bootspace(L)",
        value: 350,
      },
    ],

    // Engine & Transmission
    engine: [
      {
        title: "Capacity(cc)",
        value: 1199,
      },
      {
        title: "Max Power",
        value: "108@5000",
      },
      {
        title: "Fuel Type",
        value: "Petrol / Diesel",
      },
      {
        title: "Transmission",
        value: "Manual / Automatic",
      },
    ],

    // Weights & Brakes
    weight: [
      {
        title: "Front",
        value: "Disc",
      },
      {
        title: "Rear",
        value: "Drum",
      },
      {
        title: "Kerb",
        value: "1234-1305",
      },
      {
        title: "Gross Weight",
        value: 1600,
      },
    ],
  },

  // Harrier
  {
    id: "harrier",
    category: "tata",
    name: "Harrier",
    pic: require("../assets/others/harrier.png"),
    price: 1800000,
    fuel: "Diesel",
    transmission: "Manual / Automatic",
    cc: "1956",
    variants: [
      {
        variant: "XE",
        price: 1800000,
      },
      {
        variant: "XM",
        price: 1850000,
      },
      {
        variant: "XT",
        price: 1900000,
      },
    ],
    banners: [
      {
        img: require("../assets/harrier/digitalshowroom.webp"),
      },
      {
        img: require("../assets/harrier/led-projector-headlamps.webp"),
      },
      {
        img: require("../assets/harrier/air-bags.webp"),
      },
      {
        img: require("../assets/harrier/EShifterTerrainResponseModes-1.webp"),
      },
      {
        img: require("../assets/harrier/sunroof-3.webp"),
      },
    ],

    // Dimensions & Capacity
    dimensions: [
      {
        title: "Length (mm)",
        value: 4598,
      },
      {
        title: "Width (mm)",
        value: 1894,
      },
      {
        title: "Height (mm)",
        value: 1706,
      },
      {
        title: "Fuel Tank(L)",
        value: 50,
      },
      {
        title: "Seating",
        value: 5,
      },
      {
        title: "Bootspace(L)",
        value: 425,
      },
    ],

    // Engine & Transmission
    engine: [
      {
        title: "Capacity(cc)",
        value: 1956,
      },
      {
        title: "Max Power",
        value: "170@3750",
      },
      {
        title: "Fuel Type",
        value: "Diesel",
      },
      {
        title: "Transmission",
        value: "Manual / Automatic",
      },
    ],

    // Weights & Brakes
    weight: [
      {
        title: "Front",
        value: "Disc",
      },
      {
        title: "Rear",
        value: "Drum",
      },
      {
        title: "Kerb",
        value: "1675-1845",
      },
      {
        title: "Gross Weight",
        value: 2200,
      },
    ],
  },

  // Safari
  {
    id: "safari",
    category: "tata",
    name: "Safari",
    pic: require("../assets/others/safari.png"),
    price: 1900000,
    fuel: "Diesel",
    transmission: "Manual / Automatic",
    cc: "1956",
    variants: [
      {
        variant: "XE",
        price: 1900000,
      },
      {
        variant: "XM",
        price: 1950000,
      },
      {
        variant: "XT",
        price: 2000000,
      },
    ],
    banners: [
      {
        img: require("../assets/safari/rain-sensing-wipers-new-safari.webp"),
      },
      {
        img: require("../assets/safari/benecke-kaliko-oyster-leather-seats.webp"),
      },
      {
        img: require("../assets/safari/MultiMoodLights-50.png"),
      },
      {
        img: require("../assets/safari/grille-crop.webp"),
      },
      {
        img: require("../assets/safari/epb-new-safari.webp"),
      },
    ],

    // Dimensions & Capacity
    dimensions: [
      {
        title: "Length (mm)",
        value: 4661,
      },
      {
        title: "Width (mm)",
        value: 1894,
      },
      {
        title: "Height (mm)",
        value: 1786,
      },
      {
        title: "Fuel Tank(L)",
        value: 50,
      },
      {
        title: "Seating",
        value: 6,
      },
      {
        title: "Bootspace(L)",
        value: 447,
      },
    ],

    // Engine & Transmission
    engine: [
      {
        title: "Capacity(cc)",
        value: 1956,
      },
      {
        title: "Max Power",
        value: "170@3750",
      },
      {
        title: "Fuel Type",
        value: "Diesel",
      },
      {
        title: "Transmission",
        value: "Manual / Automatic",
      },
    ],

    // Weights & Brakes
    weight: [
      {
        title: "Front",
        value: "Disc",
      },
      {
        title: "Rear",
        value: "Drum",
      },
      {
        title: "Kerb",
        value: "1675-1845",
      },
      {
        title: "Gross Weight",
        value: 2300,
      },
    ],
  },
];
