export const model = [
  [
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
    //       img: require("../assets/tata/altroz/1.webp"),
    //     },
    //     {
    //       img: require("../assets/tata/altroz/2.webp"),
    //     },
    //     {
    //       img: require("../assets/tata/altroz/3.webp"),
    //     },
    //     {
    //       img: require("../assets/tata/altroz/4.webp"),
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
          img: require("../assets/tata/tiago/TornadoBlue-0-2.png"),
        },
        {
          img: require("../assets/tata/tiago/AutoHeadlamps-23-1.webp"),
        },
        {
          img: require("../assets/tata/tiago/dual-tone-alloy-wheels.webp"),
        },
        {
          img: require("../assets/tata/tiago/digital-showroom-1.webp"),
        },
        {
          img: require("../assets/tata/tiago/inviting-and-spacious-interiors.webp"),
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
          img: require("../assets/tata/altroz/1.webp"),
        },
        {
          img: require("../assets/tata/altroz/2.webp"),
        },
        {
          img: require("../assets/tata/altroz/3.webp"),
        },
        {
          img: require("../assets/tata/altroz/4.webp"),
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
          img: require("../assets/tata/tigor/AutoHeadlampswithLEDDRLs-0.webp"),
        },
        {
          img: require("../assets/tata/tigor/digital-showroom-2.webp"),
        },
        {
          img: require("../assets/tata/tigor/wide-and-comfortable-rear-seat-1.webp"),
        },
        {
          img: require("../assets/tata/tigor/inviting-interiors-1.webp"),
        },
        {
          img: require("../assets/tata/tigor/MeteorBronze-0-3.png"),
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
          img: require("../assets/tata/punch/headlamp-1.webp"),
        },
        {
          img: require("../assets/tata/punch/spacious-interiors-and-rare-flat-floors-new.webp"),
        },
        {
          img: require("../assets/tata/punch/stylish-roofrails-new.webp"),
        },
        {
          img: require("../assets/tata/punch/5-speed-amt.webp"),
        },
        {
          img: require("../assets/tata/punch/TornadoBlue-0-1.png"),
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
          img: require("../assets/tata/nexon/bi-functional-full-led-lamp.webp"),
        },
        {
          img: require("../assets/tata/nexon/digital-showroom.webp"),
        },
        {
          img: require("../assets/tata/nexon/GrandFloorConsoleWithLeatheretteArmrest.webp"),
        },
        {
          img: require("../assets/tata/nexon/two-spoke-steering-wheel.webp"),
        },
        {
          img: require("../assets/tata/nexon/sequential-led-drls-new.webp"),
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
          img: require("../assets/tata/harrier/digitalshowroom.webp"),
        },
        {
          img: require("../assets/tata/harrier/led-projector-headlamps.webp"),
        },
        {
          img: require("../assets/tata/harrier/air-bags.webp"),
        },
        {
          img: require("../assets/tata/harrier/EShifterTerrainResponseModes-1.webp"),
        },
        {
          img: require("../assets/tata/harrier/sunroof-3.webp"),
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
  ],
  [
    // Jeep Compass
    {
      id: "compass",
      category: "jeep",
      name: "Compass",
      pic: require("../assets/jeep/Thumbnail-Compass-Model-S-1.jpg.img.600.jpg"),
      price: 2500000,
      fuel: "Diesel / Petrol",
      transmission: "Manual / Automatic",
      cc: "1956",
      brochure:
        "https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_in/New-Compass-Brochure.pdf",
      variants: [
        {
          variant: "Sport",
          price: 2500000,
        },
        {
          variant: "Longitude",
          price: 2800000,
        },
        {
          variant: "Limited",
          price: 3100000,
        },
      ],
      banners: [
        {
          img: require("../assets/jeep/comapss.jpg"),
        },
      ],

      // Dimensions & Capacity
      dimensions: [
        {
          title: "Length (mm)",
          value: 4395,
        },
        {
          title: "Width (mm)",
          value: 1818,
        },
        {
          title: "Height (mm)",
          value: 1640,
        },
        {
          title: "Fuel Tank(L)",
          value: 60,
        },
        {
          title: "Seating",
          value: 5,
        },
        {
          title: "Bootspace(L)",
          value: 438,
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
          value: "173@3750",
        },
        {
          title: "Fuel Type",
          value: "Diesel / Petrol",
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
          value: "1641",
        },
        {
          title: "Gross Weight",
          value: 2160,
        },
      ],
    },
    // New Jeep Meridian
    {
      id: "meridian",
      category: "jeep",
      name: "Meridian",
      pic: require("../assets/jeep/thumbnail-meridian-12may23.jpg.img.600.jpg"),
      price: 3000000,
      fuel: "Diesel / Petrol",
      transmission: "Automatic",
      cc: "1998",
      brochure:
        "https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_in/meridian-special-edition/Meridian-Digital-Brochure.pdf",
      variants: [
        {
          variant: "Standard",
          price: 3000000,
        },
        {
          variant: "Limited",
          price: 3500000,
        },
        {
          variant: "Trailhawk",
          price: 3800000,
        },
      ],
      banners: [
        {
          img: require("../assets/jeep/meridian.jpg"),
        },
      ],

      // Dimensions & Capacity
      dimensions: [
        {
          title: "Length (mm)",
          value: 4633,
        },
        {
          title: "Width (mm)",
          value: 1855,
        },
        {
          title: "Height (mm)",
          value: 1675,
        },
        {
          title: "Fuel Tank(L)",
          value: 68,
        },
        {
          title: "Seating",
          value: 5,
        },
        {
          title: "Bootspace(L)",
          value: 371,
        },
      ],

      // Engine & Transmission
      engine: [
        {
          title: "Capacity(cc)",
          value: 1998,
        },
        {
          title: "Max Power",
          value: "170@3750",
        },
        {
          title: "Fuel Type",
          value: "Diesel / Petrol",
        },
        {
          title: "Transmission",
          value: "Automatic",
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
          value: "Disc",
        },
        {
          title: "Kerb",
          value: "1817-1959",
        },
        {
          title: "Gross Weight",
          value: 2410,
        },
      ],
    },
    // Jeep Wrangler
    {
      id: "wrangler",
      category: "jeep",
      name: "Wrangler",
      pic: require("../assets/jeep/thumbnail-wrangler.jpg.img.600.jpg"),
      price: 3500000,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "1998",
      brochure:
        "https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_in/All-New-Wrangler-Brochure.pdf",
      variants: [
        {
          variant: "Rubicon",
          price: 3500000,
        },
        {
          variant: "Sahara",
          price: 3800000,
        },
        {
          variant: "Sport",
          price: 3200000,
        },
      ],
      banners: [
        {
          img: require("../assets/jeep/wrangler.jpg"),
        },
      ],

      // Dimensions & Capacity
      dimensions: [
        {
          title: "Length (mm)",
          value: 4882,
        },
        {
          title: "Width (mm)",
          value: 1894,
        },
        {
          title: "Height (mm)",
          value: 1875,
        },
        {
          title: "Fuel Tank(L)",
          value: 81,
        },
        {
          title: "Seating",
          value: 5,
        },
        {
          title: "Bootspace(L)",
          value: 533,
        },
      ],

      // Engine & Transmission
      engine: [
        {
          title: "Capacity(cc)",
          value: 1998,
        },
        {
          title: "Max Power",
          value: "268@5250",
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "Automatic",
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
          value: "Disc",
        },
        {
          title: "Kerb",
          value: "1885",
        },
        {
          title: "Gross Weight",
          value: 2495,
        },
      ],
    },
    // Jeep Grand Cherokee
    {
      id: "grand_cherokee",
      category: "jeep",
      name: "Grand Cherokee",
      pic: require("../assets/jeep/thumbnail-gc-12may23.jpg.img.600.jpg"),
      price: 4500000,
      fuel: "Diesel / Petrol",
      transmission: "Automatic",
      cc: "2998",
      brochure:
        "https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_in/app-icon/GC-Brochure.pdf",
      variants: [
        {
          variant: "Limited",
          price: 4500000,
        },
        {
          variant: "Trailhawk",
          price: 4900000,
        },
        {
          variant: "Overland",
          price: 5300000,
        },
      ],
      banners: [
        {
          img: require("../assets/jeep/grand.png"),
        },
      ],

      // Dimensions & Capacity
      dimensions: [
        {
          title: "Length (mm)",
          value: 4875,
        },
        {
          title: "Width (mm)",
          value: 2154,
        },
        {
          title: "Height (mm)",
          value: 1802,
        },
        {
          title: "Fuel Tank(L)",
          value: 93,
        },
        {
          title: "Seating",
          value: 5,
        },
        {
          title: "Bootspace(L)",
          value: 1025,
        },
      ],

      // Engine & Transmission
      engine: [
        {
          title: "Capacity(cc)",
          value: 2998,
        },
        {
          title: "Max Power",
          value: "258@3600",
        },
        {
          title: "Fuel Type",
          value: "Diesel / Petrol",
        },
        {
          title: "Transmission",
          value: "Automatic",
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
          value: "Disc",
        },
        {
          title: "Kerb",
          value: "2220-2390",
        },
        {
          title: "Gross Weight",
          value: 2945,
        },
      ],
    },
  ],
];

export const brands = [
  {
    name: "Tata",
    locations: [
      {
        name: "Tata Cars Showroom - Erragadda",
        address:
          "No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol Pump, Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad, Telangana 500018",
        map: "https://maps.app.goo.gl/Ue9EtrpC1gsz29WU8",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0923591597375!2d78.43287946110777!3d17.455293000775555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90e3e3ef1e1b%3A0x1654f5dc889de472!2sShankaramma%20Towers%2C%20Sanjeeva%20Reddy%20Nagar%20Rd%2C%20D.%20Shankar%20Lal%20nagar%2C%20Vikaspuri%2C%20Erragadda%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1709816055141!5m2!1sen!2sin",
      },
      {
        name: "Tata Cars Showroom - Attapur",
        address:
          "Municipal No 13, 6/432/33 & 13/6/432/33/A, Gudimalkapur, Attapur, Telangana 500028",
        map: "https://maps.app.goo.gl/TsXjHY3UALVSevXL6",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6609846165647!2d78.42658057494407!3d17.38003870301724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97b6285a7045%3A0x14ae9f27d3d2102!2sTata%20Motors%20Cars%20Showroom%20-%20Orange%20Auto%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709827097615!5m2!1sen!2sin",
      },
      {
        name: "Tata Cars Showroom - Kharkana",
        address:
          "Ground floor, Opp Grill 9 hotel, Karkhana Road Vikrampuri Colony, R & D Colony, Karkhana, Secunderabad, Telangana 500015",
        map: "https://maps.app.goo.gl/fto6h1Yx1321CCkV9",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.025075126752!2d78.49571888885498!3d17.458513900000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9175d94044f5%3A0x41f76244cf2c6a!2sTata%20Motors%20Cars%20Showroom%20-%20Orange%20Auto%2C%20Kharkana!5e0!3m2!1sen!2sin!4v1709827244896!5m2!1sen!2sin",
      },
      {
        name: "Tata Cars Showroom - Secunderabad",
        address:
          "Srini Developers, opposite ST. CLARET HIGH SCHOOL, Malkajgiri, Secunderabad, Telangana 501401",
        map: "https://maps.app.goo.gl/ZVaJda41QHPYhnGJ6",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.0864729662253!2d78.48153188885499!3d17.646063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb87cdfb49c615%3A0xc60aa4cad87aa6cd!2sTata%20Motors%20Cars%20Showroom%20-%20Orange%20Auto!5e0!3m2!1sen!2sin!4v1709827306418!5m2!1sen!2sin",
      },
      {
        name: "Tata Cars Showroom - Medak",
        address:
          "1321/A, Medak - Chegunta Rd, beside Sri Sai Balaji Garden, near Rush Hospital, Baba Colony, Gangineni, Medak, Telangana 502110",
        map: "https://maps.app.goo.gl/t8boRfNqdh34WrKp6",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.8923666342307!2d78.26202007495714!3d18.030198083969765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc15cb5a7cf099%3A0x50a675f2f49fb200!2sTata%20Motors%20Cars%20Showroom%20-%20Orange%2C%20Medak!5e0!3m2!1sen!2sin!4v1709827511499!5m2!1sen!2sin",
      },
    ],
  },

  {
    name: "Honda",
    locations: [
      {
        name: "Honda Showroom - Toli Chowki",
        address:
          "8-1, 21/145, Tata Towers, Surya Nagar, Toli Chowki, Hyderabad, Telangana 500008",
        map: "https://maps.app.goo.gl/F1HJSA1X4TSXdMeh8",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.24305452816!2d78.41117747505926!3d17.400119583489282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96e9e3fc13cf%3A0x728251f36c25f904!2sOrange%20Honda!5e0!3m2!1sen!2sin!4v1711003233494!5m2!1sen!2sin",
      },
      {
        name: "Honda Showroom - Masab Tank",
        address:
          "10-5-2/1/8/3, Mehdipatnam - Banjara Hills Rd, Opposite Paradise Hotel, Owaisi Pura, Masab Tank, Hyderabad, Telangana 500028",
        map: "https://maps.app.goo.gl/eJXKeMwWTkvCXooC7",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.171548544171!2d78.44988557505934!3d17.403553083486457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9740066d76db%3A0xc65e5977ef927ceb!2sOrange%20Honda!5e0!3m2!1sen!2sin!4v1711003368659!5m2!1sen!2sin",
      },
      {
        name: "Honda Showroom - Manikonda",
        address:
          "Krishna Plaza 1-5/31, near Indian Oil Petrol Bunk, Manikonda, Telangana 500089",
        map: "https://maps.app.goo.gl/uGjsLCS4XzDPxPcVA",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1896330295485!2d78.37195907505925!3d17.402684783487118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb941995a23143%3A0x675f12362e6c26d6!2sOrange%20Honda!5e0!3m2!1sen!2sin!4v1711003582070!5m2!1sen!2sin",
      },
      {
        name: "Honda Showroom - Chevella",
        address: "Main Rd, Chevella, Telangana 501503",
        map: "https://maps.app.goo.gl/ccuhWxGn4nG9nkvQA",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.002314227614!2d78.13098757505725!3d17.315437483559553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbe82019db7a21%3A0x7d44011f29cb3307!2sorange%20honda%20showroom!5e0!3m2!1sen!2sin!4v1711003704174!5m2!1sen!2sin",
      },
      {
        name: "Honda Showroom - Moinabad",
        address:
          "DHYAN SHIVA COLONY KABIR COTTAGE, K-2, beside INDIAN PETROL BUNK, Moinabad, Telangana 501504",
        map: "https://maps.app.goo.gl/87neYhi9gCv9ZfEb6",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6959231331466!2d78.27358807505753!3d17.330214483547245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbebb55ee5883d%3A0xa6d4677dbf46db2d!2sOrange%20Honda%20Moinabad!5e0!3m2!1sen!2sin!4v1711003813602!5m2!1sen!2sin",
      },
    ],
  },
  {
    name: "Kawasaki",
    locations: [
      {
        name: "Kawasaki Showroom - Banjara Hills",
        address:
          "H No 8, Roxana Fortune, 8, Road No. 12, beside Audi Showroom, NBT Nagar, Banjara Hills, Hyderabad, Telangana 500034",
        map: "https://maps.app.goo.gl/T5exefKnDfu4sYNM7",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0191380276997!2d78.43493037505952!3d17.410869183480298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9725b2420223%3A0x60391cfc879c8f82!2sKAWASAKI%20HYDERABAD!5e0!3m2!1sen!2sin!4v1711004336779!5m2!1sen!2sin",
      },
      {
        name: "Kawasaki Showroom - Karkhana",
        address:
          " 54, Wellington Rd, R & D Colony, Karkhana, Secunderabad, Telangana 500015",
        map: "https://maps.app.goo.gl/LDRBSdFJ35L3Tgj49",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.02275021979!2d78.49767927506065!3d17.45862518344072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b005ef8cf7f%3A0xf04373ad4fb0e7d2!2sKAWASAKI%20SECUNDERABAD!5e0!3m2!1sen!2sin!4v1711004694233!5m2!1sen!2sin",
      },
      {
        name: "Kawasaki Showroom - Benz Circle ( Vijayawada )",
        address: "NTR Circle, Patamatalanka, Vijayawada, Andhra Pradesh 520010",
        map: "https://maps.app.goo.gl/y8Tm74zEmhunR5G49",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5848727986!2d80.65430717503862!3d16.496544784246552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fac72f54cd05%3A0x4af9a9e02d2e301f!2sOrange%20travels!5e0!3m2!1sen!2sin!4v1711004570427!5m2!1sen!2sin",
      },
      {
        name: "Kawasaki Showroom - Narsimha Nagar ( VIZAG )",
        address:
          "GROUND FLOOR, RR HOUSE,NH-5, NARASIMHANAGAR, Visakhapatnam, Andhra Pradesh 530024",
        map: "https://maps.app.goo.gl/Q4g6qC6VEnncu3uFA",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.081303558239!2d83.29560567506729!3d17.7408078832079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39432ca2fffff5%3A0x86296849f6b28ba9!2sVIZAG%20KAWASAKI!5e0!3m2!1sen!2sin!4v1711004504046!5m2!1sen!2sin",
      },
    ],
  },
  {
    name: "Jeep",
    locations: [
      {
        name: "Jeep Cars Showroom - Visakhapatnam",
        address:
          "Ground Floor, R R House, N H 5, Narasimhanagar, Kailasapuram, Visakhapatnam, Andhra Pradesh 530024",
        map: "https://maps.app.goo.gl/RzbD8Uak5czKUyCM8",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.08200165374!2d83.29539667506732!3d17.74077498320801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943b961b512a3%3A0x83aaafb3168c1abd!2sOrange%20Jeep%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1711004877002!5m2!1sen!2sin",
      },
      {
        name: "Jeep Cars Showroom - Rajamahendravaram",
        address:
          "NH -16, Lolugu Nagar, Service Rd, opp. BEST PRICE, Rajamahendravaram, Andhra Pradesh 533103",
        map: "https://maps.app.goo.gl/m62jpTsaW9nTaM619",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.339279522049!2d81.80717647505013!3d17.007020183816756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a36d161e1c93%3A0xb59cec2175c411a9!2sJEEP%20(%20FIAT%20)%20RAJAHMUNDRY!5e0!3m2!1sen!2sin!4v1711004974009!5m2!1sen!2sin",
      },
    ],
  },
  {
    name: "Harely Davidson",
    locations: [
      {
        name: "Harely Davidson Showroom - Ramavarappadu ( Vijayawada )",
        address:
          "Door No 48-10/20/A, Service Road, Ring Road, Vijayawada - 520008 (Survey 341/1A, Near NTR Health University)",
        map: "https://maps.app.goo.gl/iNpSsmtrk7CivyYd9",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3825.096559056891!2d80.67275837503911!3d16.5212221842257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHF!5e0!3m2!1sen!2sin!4v1711005381018!5m2!1sen!2sin",
      },
    ],
  },
];
