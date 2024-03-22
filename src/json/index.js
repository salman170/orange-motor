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
  // Jeep - 1
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
  // Kawasaki Ninja - 2
  [
    // Kawasaki Ninja H2R
    {
      id: "ninja_h2r",
      category: "kawasaki",
      name: "Ninja H2R",
      pic: require("../assets/kawasaki/ninja_h2r.png"),
      price: 5500000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "998",
      variants: [
        {
          variant: "Ninja",
          price: 5500000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_h2r.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2085,
        },
        {
          title: "Width (mm)",
          value: 770,
        },
        {
          title: "Height (mm)",
          value: 1125,
        },
        {
          title: "Fuel Tank(L)",
          value: 17,
        },
        {
          title: "Seating",
          value: 1,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 998,
        },
        {
          title: "Max Power",
          value: "310@14000",
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
          value: "216",
        },
        {
          title: "Gross Weight",
          value: 216,
        },
      ],
    },
    // Kawasaki Ninja H2 SX
    {
      id: "ninja_h2_sx",
      category: "kawasaki",
      name: "Ninja H2 SX",
      pic: require("../assets/kawasaki/ninja_h2_sx.png"),
      price: 1500000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "998",
      variants: [
        {
          variant: "Ninja",
          price: 1500000,
        },
        {
          variant: "Performance",
          price: 1600000,
        },
        {
          variant: "ABS",
          price: 1700000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_h2_sx.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2380,
        },
        {
          title: "Width (mm)",
          value: 930,
        },
        {
          title: "Height (mm)",
          value: 1350,
        },
        {
          title: "Fuel Tank(L)",
          value: 19,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 998,
        },
        {
          title: "Max Power",
          value: "200@11000",
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
          value: "256",
        },
        {
          title: "Gross Weight",
          value: 256,
        },
      ],
    },
    // Kawasaki Ninja H2 SX SE
    {
      id: "ninja_h2_sx_se",
      category: "kawasaki",
      name: "Ninja H2 SX SE",
      pic: require("../assets/kawasaki/ninja_h2_sx_se.png"),
      price: 1700000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "998",
      variants: [
        {
          variant: "Ninja",
          price: 1700000,
        },
        {
          variant: "Performance",
          price: 1800000,
        },
        {
          variant: "ABS",
          price: 1900000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_h2_sx_se.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2380,
        },
        {
          title: "Width (mm)",
          value: 930,
        },
        {
          title: "Height (mm)",
          value: 1350,
        },
        {
          title: "Fuel Tank(L)",
          value: 19,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 998,
        },
        {
          title: "Max Power",
          value: "200@11000",
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
          value: "256",
        },
        {
          title: "Gross Weight",
          value: 256,
        },
      ],
    },
    // Kawasaki Ninja ZX-10R
    {
      id: "ninja_zx_10r",
      category: "kawasaki",
      name: "Ninja ZX-10R",
      pic: require("../assets/kawasaki/ninja_zx_10r.png"),
      price: 1350000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "998",
      variants: [
        {
          variant: "Ninja",
          price: 1350000,
        },
        {
          variant: "Performance",
          price: 1450000,
        },
        {
          variant: "ABS",
          price: 1550000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_zx_10r.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2095,
        },
        {
          title: "Width (mm)",
          value: 740,
        },
        {
          title: "Height (mm)",
          value: 1145,
        },
        {
          title: "Fuel Tank(L)",
          value: 17,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 998,
        },
        {
          title: "Max Power",
          value: "203@13500",
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
          value: "206",
        },
        {
          title: "Gross Weight",
          value: 206,
        },
      ],
    },
    // Kawasaki Ninja ZX-6R
    {
      id: "ninja_zx_6r",
      category: "kawasaki",
      name: "Ninja ZX-6R",
      pic: require("../assets/kawasaki/ninja_zx_6r.png"),
      price: 1150000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "636",
      variants: [
        {
          variant: "Ninja",
          price: 1150000,
        },
        {
          variant: "Performance",
          price: 1200000,
        },
        {
          variant: "ABS",
          price: 1250000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_zx_6r.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2085,
        },
        {
          title: "Width (mm)",
          value: 705,
        },
        {
          title: "Height (mm)",
          value: 1130,
        },
        {
          title: "Fuel Tank(L)",
          value: 17,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 636,
        },
        {
          title: "Max Power",
          value: "130@13500",
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
          value: "196",
        },
        {
          title: "Gross Weight",
          value: 196,
        },
      ],
    },
    // Kawasaki Ninja ZX-4R
    {
      id: "ninja_zx_4r",
      category: "kawasaki",
      name: "Ninja ZX-4R",
      pic: require("../assets/kawasaki/ninja_zx_4r.png"),
      price: 950000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "399",
      variants: [
        {
          variant: "Ninja",
          price: 950000,
        },
        {
          variant: "ABS",
          price: 1000000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_zx_4r.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 1980,
        },
        {
          title: "Width (mm)",
          value: 710,
        },
        {
          title: "Height (mm)",
          value: 1050,
        },
        {
          title: "Fuel Tank(L)",
          value: 15,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 399,
        },
        {
          title: "Max Power",
          value: "50@10500",
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
          value: "185",
        },
        {
          title: "Gross Weight",
          value: 185,
        },
      ],
    },
    // Kawasaki Ninja 650
    {
      id: "ninja_650",
      category: "kawasaki",
      name: "Ninja 650",
      pic: require("../assets/kawasaki/ninja_650.png"),
      price: 750000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "649",
      variants: [
        {
          variant: "Ninja",
          price: 750000,
        },
        {
          variant: "ABS",
          price: 800000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_650.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2125,
        },
        {
          title: "Width (mm)",
          value: 740,
        },
        {
          title: "Height (mm)",
          value: 1140,
        },
        {
          title: "Fuel Tank(L)",
          value: 15,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 649,
        },
        {
          title: "Max Power",
          value: "68@8000",
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
          value: "193",
        },
        {
          title: "Gross Weight",
          value: 193,
        },
      ],
    },
    // Kawasaki Ninja 500
    {
      id: "ninja_500",
      category: "kawasaki",
      name: "Ninja 500",
      pic: require("../assets/kawasaki/ninja_500.png"),
      price: 550000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "498",
      variants: [
        {
          variant: "Ninja",
          price: 550000,
        },
        {
          variant: "ABS",
          price: 600000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_500.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2085,
        },
        {
          title: "Width (mm)",
          value: 740,
        },
        {
          title: "Height (mm)",
          value: 1140,
        },
        {
          title: "Fuel Tank(L)",
          value: 15,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 498,
        },
        {
          title: "Max Power",
          value: "47@9000",
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
          value: "193",
        },
        {
          title: "Gross Weight",
          value: 193,
        },
      ],
    },
    // Kawasaki Ninja 400
    {
      id: "ninja_400",
      category: "kawasaki",
      name: "Ninja 400",
      pic: require("../assets/kawasaki/ninja_400.png"),
      price: 450000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "399",
      variants: [
        {
          variant: "Ninja",
          price: 450000,
        },
        {
          variant: "ABS",
          price: 500000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_400.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2020,
        },
        {
          title: "Width (mm)",
          value: 710,
        },
        {
          title: "Height (mm)",
          value: 1120,
        },
        {
          title: "Fuel Tank(L)",
          value: 14,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 399,
        },
        {
          title: "Max Power",
          value: "45@10000",
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
          value: "168",
        },
        {
          title: "Gross Weight",
          value: 168,
        },
      ],
    },
    // Kawasaki Ninja 300
    {
      id: "ninja_300",
      category: "kawasaki",
      name: "Ninja 300",
      pic: require("../assets/kawasaki/ninja_300.png"),
      price: 375000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "296",
      variants: [
        {
          variant: "Ninja",
          price: 375000,
        },
        {
          variant: "ABS",
          price: 425000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/ninja_300.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2015,
        },
        {
          title: "Width (mm)",
          value: 715,
        },
        {
          title: "Height (mm)",
          value: 1110,
        },
        {
          title: "Fuel Tank(L)",
          value: 17,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 296,
        },
        {
          title: "Max Power",
          value: "39@11000",
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
          value: "172",
        },
        {
          title: "Gross Weight",
          value: 172,
        },
      ],
    },
  ],
  // Kawasaki Z - 3
  [
    // Kawasaki Z H2 SE
    {
      id: "z_h2_se",
      category: "kawasaki",
      name: "Z H2 SE",
      pic: require("../assets/kawasaki/z_h2_se.png"),
      price: 1725000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "998",
      variants: [
        {
          variant: "z",
          price: 1725000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/z_h2_se.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2135,
        },
        {
          title: "Width (mm)",
          value: 830,
        },
        {
          title: "Height (mm)",
          value: 1195,
        },
        {
          title: "Fuel Tank(L)",
          value: 19,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 998,
        },
        {
          title: "Max Power",
          value: "200@11000",
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
          value: "239",
        },
        {
          title: "Gross Weight",
          value: 239,
        },
      ],
    },
    // Kawasaki Z H2
    {
      id: "z_h2",
      category: "kawasaki",
      name: "Z H2",
      pic: require("../assets/kawasaki/z_h2.png"),
      price: 1660000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "998",
      variants: [
        {
          variant: "z",
          price: 1660000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/z_h2.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2085,
        },
        {
          title: "Width (mm)",
          value: 850,
        },
        {
          title: "Height (mm)",
          value: 1145,
        },
        {
          title: "Fuel Tank(L)",
          value: 19,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 998,
        },
        {
          title: "Max Power",
          value: "200@11000",
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
          value: "239",
        },
        {
          title: "Gross Weight",
          value: 239,
        },
      ],
    },
    // Kawasaki Z900RS
    {
      id: "z900rs",
      category: "kawasaki",
      name: "Z900RS",
      pic: require("../assets/kawasaki/z900rs.png"),
      price: 1650000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "948",
      variants: [
        {
          variant: "z",
          price: 1650000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/z900rs.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2100,
        },
        {
          title: "Width (mm)",
          value: 865,
        },
        {
          title: "Height (mm)",
          value: 1115,
        },
        {
          title: "Fuel Tank(L)",
          value: 17,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 948,
        },
        {
          title: "Max Power",
          value: "111@8500",
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
          value: "214",
        },
        {
          title: "Gross Weight",
          value: 214,
        },
      ],
    },
    // Kawasaki Z900
    {
      id: "z900",
      category: "kawasaki",
      name: "Z900",
      pic: require("../assets/kawasaki/z900.png"),
      price: 1230000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "948",
      variants: [
        {
          variant: "z",
          price: 1230000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/z900.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2065,
        },
        {
          title: "Width (mm)",
          value: 825,
        },
        {
          title: "Height (mm)",
          value: 1065,
        },
        {
          title: "Fuel Tank(L)",
          value: 17,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 948,
        },
        {
          title: "Max Power",
          value: "92@8500",
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
          value: "212",
        },
        {
          title: "Gross Weight",
          value: 212,
        },
      ],
    },
    // Kawasaki Z650RS
    {
      id: "z650rs",
      category: "kawasaki",
      name: "Z650RS ",
      pic: require("../assets/kawasaki/z650rs.png"),
      price: 915000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "649",
      variants: [
        {
          variant: "z",
          price: 915000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/z650rs.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2115,
        },
        {
          title: "Width (mm)",
          value: 800,
        },
        {
          title: "Height (mm)",
          value: 1100,
        },
        {
          title: "Fuel Tank(L)",
          value: 15,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 649,
        },
        {
          title: "Max Power",
          value: "68@8000",
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
          value: "190",
        },
        {
          title: "Gross Weight",
          value: 190,
        },
      ],
    },
    // Kawasaki Z650
    {
      id: "z650",
      category: "kawasaki",
      name: "Z650",
      pic: require("../assets/kawasaki/z650.png"),
      price: 800000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "649",
      variants: [
        {
          variant: "z",
          price: 800000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/z650.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2115,
        },
        {
          title: "Width (mm)",
          value: 775,
        },
        {
          title: "Height (mm)",
          value: 1065,
        },
        {
          title: "Fuel Tank(L)",
          value: 15,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 649,
        },
        {
          title: "Max Power",
          value: "68@8000",
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
          value: "191",
        },
        {
          title: "Gross Weight",
          value: 191,
        },
      ],
    },
  ],
  // Kawasaki Urban Cruiser - 4
  [
    // Kawasaki Eliminator
    {
      id: "eliminator",
      category: "kawasaki",
      name: "Eliminator",
      pic: require("../assets/kawasaki/eliminator.png"),
      price: 600000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "250",
      variants: [
        {
          variant: "Urban Cruiser",
          price: 600000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/eliminator.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2300,
        },
        {
          title: "Width (mm)",
          value: 850,
        },
        {
          title: "Height (mm)",
          value: 1100,
        },
        {
          title: "Fuel Tank(L)",
          value: 11,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 250,
        },
        {
          title: "Max Power",
          value: "25@9000",
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
          value: "173",
        },
        {
          title: "Gross Weight",
          value: 173,
        },
      ],
    },
    // Kawasaki Vulcan S
    {
      id: "vulcan_s",
      category: "kawasaki",
      name: "Vulcan S",
      pic: require("../assets/kawasaki/vulcan_s.png"),
      price: 750000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "649",
      variants: [
        {
          variant: "Urban Cruiser",
          price: 750000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/vulcan_s.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2310,
        },
        {
          title: "Width (mm)",
          value: 855,
        },
        {
          title: "Height (mm)",
          value: 1090,
        },
        {
          title: "Fuel Tank(L)",
          value: 14,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 649,
        },
        {
          title: "Max Power",
          value: "61@7500",
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
          value: "228",
        },
        {
          title: "Gross Weight",
          value: 228,
        },
      ],
    },
  ],
  // Kawasaki Versys - 5
  [
    // Kawasaki Versys 650
    {
      id: "versys_650",
      category: "kawasaki",
      name: "Versys 650",
      pic: require("../assets/kawasaki/versys_650.png"),
      price: 850000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "649",
      variants: [
        {
          variant: "Versys 650",
          price: 850000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/versys_650.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2165,
        },
        {
          title: "Width (mm)",
          value: 840,
        },
        {
          title: "Height (mm)",
          value: 1400,
        },
        {
          title: "Fuel Tank(L)",
          value: 21,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 649,
        },
        {
          title: "Max Power",
          value: "69@8500",
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
          value: "216",
        },
        {
          title: "Gross Weight",
          value: 216,
        },
      ],
    },
  ],
  // Kawasaki W - 6
  [
    // Kawasaki W175 Street
    {
      id: "w175_street",
      category: "kawasaki",
      name: "W175 Street",
      pic: require("../assets/kawasaki/w175_street.png"),
      price: 110000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "177",
      variants: [
        {
          variant: "W",
          price: 110000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/w175_street.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 1915,
        },
        {
          title: "Width (mm)",
          value: 755,
        },
        {
          title: "Height (mm)",
          value: 1050,
        },
        {
          title: "Fuel Tank(L)",
          value: 13,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 177,
        },
        {
          title: "Max Power",
          value: "13.8@7500",
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
          value: "126",
        },
        {
          title: "Gross Weight",
          value: 126,
        },
      ],
    },
    // Kawasaki W175
    {
      id: "w175",
      category: "kawasaki",
      name: "W175",
      pic: require("../assets/kawasaki/w175.png"),
      price: 108000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "177",
      variants: [
        {
          variant: "W",
          price: 108000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/w175.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 1915,
        },
        {
          title: "Width (mm)",
          value: 755,
        },
        {
          title: "Height (mm)",
          value: 1050,
        },
        {
          title: "Fuel Tank(L)",
          value: 13,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 177,
        },
        {
          title: "Max Power",
          value: "13.8@7500",
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
          value: "126",
        },
        {
          title: "Gross Weight",
          value: 126,
        },
      ],
    },
  ],
  // Kawasaki KX - 7
  [
    // Kawasaki KX450
    {
      id: "kx450",
      category: "kawasaki",
      name: "KX450",
      pic: require("../assets/kawasaki/kx450.png"),
      price: 960000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "449",
      variants: [
        {
          variant: "KX",
          price: 960000,
        },
      ],
      banners: [
        {
          // img: require("../assets/kawasaki/kx450.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 449,
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
          value: "110.8",
        },
        {
          title: "Gross Weight",
          value: 110.8,
        },
      ],
    },
    // Kawasaki KX250
    {
      id: "kx250",
      category: "kawasaki",
      name: "KX250",
      pic: require("../assets/kawasaki/kx250.png"),
      price: 840000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "249",
      variants: [
        {
          variant: "KX",
          price: 840000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/kx250.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 249,
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
          value: "105.2",
        },
        {
          title: "Gross Weight",
          value: 105.2,
        },
      ],
    },
    // Kawasaki KX112
    {
      id: "kx112",
      category: "kawasaki",
      name: "KX112",
      pic: require("../assets/kawasaki/kx112.png"),
      price: 450000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "112",
      variants: [
        {
          variant: "KX",
          price: 450000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/kx112.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 112,
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
          value: "80.7",
        },
        {
          title: "Gross Weight",
          value: 80.7,
        },
      ],
    },
    // Kawasaki KX85
    {
      id: "kx85",
      category: "kawasaki",
      name: "KX85",
      pic: require("../assets/kawasaki/kx85.png"),
      price: 358000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "84",
      variants: [
        {
          variant: "KX",
          price: 358000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/kx85.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 84,
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
          value: "77",
        },
        {
          title: "Gross Weight",
          value: 77,
        },
      ],
    },
    // Kawasaki KX65
    {
      id: "kx65",
      category: "kawasaki",
      name: "KX65",
      pic: require("../assets/kawasaki/kx65.png"),
      price: 280000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "64",
      variants: [
        {
          variant: "KX",
          price: 280000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/kx65.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 64,
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
          value: "61",
        },
        {
          title: "Gross Weight",
          value: 61,
        },
      ],
    },
  ],
  // Kawasaki KLX - 8
  [
    // Kawasaki KLX 450R
    {
      id: "klx_450r",
      category: "kawasaki",
      name: "KLX 450R",
      pic: require("../assets/kawasaki/klx_450r.png"),
      price: 990000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "449",
      variants: [
        {
          variant: "KLX",
          price: 990000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/klx_450r.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 449,
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
          value: "131.7",
        },
        {
          title: "Gross Weight",
          value: 131.7,
        },
      ],
    },
    // Kawasaki KLX 300R
    {
      id: "klx_300r",
      category: "kawasaki",
      name: "KLX 300R",
      pic: require("../assets/kawasaki/klx_300r.png"),
      price: 860000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "292",
      variants: [
        {
          variant: "KLX",
          price: 860000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/klx_300r.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 292,
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
          value: "134.4",
        },
        {
          title: "Gross Weight",
          value: 134.4,
        },
      ],
    },
    // Kawasaki KLX 230R S
    {
      id: "klx_230r_s",
      category: "kawasaki",
      name: "KLX 230R S",
      pic: require("../assets/kawasaki/klx_230r_s.png"),
      price: 750000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "233",
      variants: [
        {
          variant: "KLX",
          price: 750000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/klx_230r_s.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 233,
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
          value: "118",
        },
        {
          title: "Gross Weight",
          value: 118,
        },
      ],
    },
    // Kawasaki KLX 140R F
    {
      id: "klx_140r_f",
      category: "kawasaki",
      name: "KLX 140R F",
      pic: require("../assets/kawasaki/klx_140r_f.png"),
      price: 500000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "144",
      variants: [
        {
          variant: "KLX",
          price: 500000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/klx_140r_f.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 144,
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
          value: "99.8",
        },
        {
          title: "Gross Weight",
          value: 99.8,
        },
      ],
    },
    // Kawasaki KLX 110R L
    {
      id: "klx_110r_l",
      category: "kawasaki",
      name: "KLX 110R L",
      pic: require("../assets/kawasaki/klx_110r_l.png"),
      price: 400000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "112",
      variants: [
        {
          variant: "KLX",
          price: 400000,
        },
      ],
      banners: [
        {
          img: require("../assets/kawasaki/klx_110r_l.png"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 112,
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "76.3",
        },
        {
          title: "Gross Weight",
          value: 76.3,
        },
      ],
    },
  ],

  // Harley-Davidson
  [
    // HARLEY-DAVIDSON X™440
    {
      id: "x_440",
      category: "harley-davidson",
      name: "X™440",
      pic: require("../assets/harley-davidson/x_440.webp"),
      price: 25000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "440",
      variants: [
        {
          variant: "HARLEY-DAVIDSON X",
          price: 25000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/x_440.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 440,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "200",
        },
        {
          title: "Gross Weight",
          value: 200,
        },
      ],
    },
    // STREET GLIDE™
    {
      id: "street_glide",
      category: "harley-davidson",
      name: "Street Glide™",
      pic: require("../assets/harley-davidson/street_glide.webp"),
      price: 28000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "107",
      variants: [
        {
          variant: "Grand American Touring",
          price: 28000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/street_glide.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 107,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "350",
        },
        {
          title: "Gross Weight",
          value: 350,
        },
      ],
    },
    // ROAD GLIDE™
    {
      id: "road_glide",
      category: "harley-davidson",
      name: "Road Glide™",
      pic: require("../assets/harley-davidson/road_glide.webp"),
      price: 30000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "114",
      variants: [
        {
          variant: "Grand American Touring",
          price: 30000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/road_glide.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 114,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "370",
        },
        {
          title: "Gross Weight",
          value: 370,
        },
      ],
    },
    // BREAKOUT™ 117
    {
      id: "breakout_117",
      category: "harley-davidson",
      name: "Breakout™ 117",
      pic: require("../assets/harley-davidson/breakout_117.webp"),
      price: 32000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "117",
      variants: [
        {
          variant: "Cruiser",
          price: 32000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/breakout_117.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 117,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "380",
        },
        {
          title: "Gross Weight",
          value: 380,
        },
      ],
    },
    // HERITAGE CLASSIC
    {
      id: "heritage_classic",
      category: "harley-davidson",
      name: "Heritage Classic",
      pic: require("../assets/harley-davidson/heritage_classic.webp"),
      price: 35000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "114",
      variants: [
        {
          variant: "Cruiser",
          price: 35000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/heritage_classic.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 114,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "340",
        },
        {
          title: "Gross Weight",
          value: 340,
        },
      ],
    },
    // FAT BOY™ 114
    {
      id: "fat_boy_114",
      category: "harley-davidson",
      name: "Fat Boy™ 114",
      pic: require("../assets/harley-davidson/fat_boy_114.webp"),
      price: 34000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "114",
      variants: [
        {
          variant: "Cruiser",
          price: 34000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/fat_boy_114.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 114,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "330",
        },
        {
          title: "Gross Weight",
          value: 330,
        },
      ],
    },
    // FAT BOB™ 114
    {
      id: "fat_bob_114",
      category: "harley-davidson",
      name: "Fat Bob™ 114",
      pic: require("../assets/harley-davidson/fat_bob_114.webp"),
      price: 36000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "114",
      variants: [
        {
          variant: "Cruiser",
          price: 36000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/fat_bob_114.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 114,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "318",
        },
        {
          title: "Gross Weight",
          value: 318,
        },
      ],
    },
    // PAN AMERICA™ 1250 SPECIAL
    {
      id: "pan_america_1250_special",
      category: "harley-davidson",
      name: "Pan America™ 1250 Special",
      pic: require("../assets/harley-davidson/pan_america_1250_special.webp"),
      price: 38000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "1250",
      variants: [
        {
          variant: "Adventure Touring",
          price: 38000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/pan_america_1250_special.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 1250,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "242",
        },
        {
          title: "Gross Weight",
          value: 242,
        },
      ],
    },
    // NIGHTSTER™
    {
      id: "nightster",
      category: "harley-davidson",
      name: "Nightster™",
      pic: require("../assets/harley-davidson/nightster.webp"),
      price: 28000,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cc: "1200",
      variants: [
        {
          variant: "Sport",
          price: 28000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/nightster.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 1200,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "5-Speed Manual",
        },
      ],
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
          value: "250",
        },
        {
          title: "Gross Weight",
          value: 250,
        },
      ],
    },
    // SPORTSTER™ S
    {
      id: "sportster_s",
      category: "harley-davidson",
      name: "Sportster™ S",
      pic: require("../assets/harley-davidson/sportster_s.webp"),
      price: 32000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "1250",
      variants: [
        {
          variant: "Sport",
          price: 32000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/sportster_s.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 1250,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "228",
        },
        {
          title: "Gross Weight",
          value: 228,
        },
      ],
    },

    // NIGHTSTER™ SPECIAL
    {
      id: "nightster_special",
      category: "harley-davidson",
      name: "Nightster™ Special",
      pic: require("../assets/harley-davidson/nightster_special.webp"),
      price: 30000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cc: "883",
      variants: [
        {
          variant: "Sport",
          price: 30000,
        },
      ],
      banners: [
        {
          img: require("../assets/harley-davidson/nightster_special.webp"),
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 883,
        },
        {
          title: "Fuel Type",
          value: "Petrol",
        },
        {
          title: "Transmission",
          value: "6-Speed Manual",
        },
      ],
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
          value: "240",
        },
        {
          title: "Gross Weight",
          value: 240,
        },
      ],
    },
  ],

  // Honda Scooty - 9
  [
    // Honda Dio 125
    {
      id: "dio_125",
      category: "honda",
      name: "Dio 125",
      pic: require("../assets/honda/dio_125.jpg"),
      price: 75000,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "125",
      variants: [
        {
          variant: "Scooty",
          price: 75000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/dio_125.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 1803,
        },
        {
          title: "Width (mm)",
          value: 728,
        },
        {
          title: "Height (mm)",
          value: 1150,
        },
        {
          title: "Fuel Tank(L)",
          value: 5.3,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 125,
        },
        {
          title: "Max Power",
          value: "8.29@6500",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "105",
        },
        {
          title: "Gross Weight",
          value: 105,
        },
      ],
    },
    // Honda Dio
    {
      id: "dio",
      category: "honda",
      name: "Dio",
      pic: require("../assets/honda/dio.jpg"),
      price: 65000,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "110",
      variants: [
        {
          variant: "Scooty",
          price: 65000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/dio.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 1791,
        },
        {
          title: "Width (mm)",
          value: 723,
        },
        {
          title: "Height (mm)",
          value: 1150,
        },
        {
          title: "Fuel Tank(L)",
          value: 5.3,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 110,
        },
        {
          title: "Max Power",
          value: "7.76@8000",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "104",
        },
        {
          title: "Gross Weight",
          value: 104,
        },
      ],
    },
    // Honda Activa 125
    {
      id: "activa_125",
      category: "honda",
      name: "Activa 125",
      pic: require("../assets/honda/activa_125.jpg"),
      price: 78000,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "124",
      variants: [
        {
          variant: "Scooty",
          price: 78000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/activa_125.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 1850,
        },
        {
          title: "Width (mm)",
          value: 707,
        },
        {
          title: "Height (mm)",
          value: 1170,
        },
        {
          title: "Fuel Tank(L)",
          value: 5.3,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 124,
        },
        {
          title: "Max Power",
          value: "8.18@6500",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "111",
        },
        {
          title: "Gross Weight",
          value: 111,
        },
      ],
    },
    // Honda Activa 6G
    {
      id: "activa_6g",
      category: "honda",
      name: "Activa 6G",
      pic: require("../assets/honda/activa_6g.jpg"),
      price: 68000,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "109",
      variants: [
        {
          variant: "Scooty",
          price: 68000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/activa_6g.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 1833,
        },
        {
          title: "Width (mm)",
          value: 697,
        },
        {
          title: "Height (mm)",
          value: 1156,
        },
        {
          title: "Fuel Tank(L)",
          value: 5.3,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 109,
        },
        {
          title: "Max Power",
          value: "7.68@8000",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "107",
        },
        {
          title: "Gross Weight",
          value: 107,
        },
      ],
    },
    // Honda Activa
    {
      id: "activa",
      category: "honda",
      name: "Activa",
      pic: require("../assets/honda/activa.jpg"),
      price: 66000,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "109",
      variants: [
        {
          variant: "Scooty",
          price: 66000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/activa.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 1761,
        },
        {
          title: "Width (mm)",
          value: 710,
        },
        {
          title: "Height (mm)",
          value: 1149,
        },
        {
          title: "Fuel Tank(L)",
          value: 5.3,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 109,
        },
        {
          title: "Max Power",
          value: "8.11@7500",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "107",
        },
        {
          title: "Gross Weight",
          value: 107,
        },
      ],
    },
  ],

  // Honda Motorcyles - 10
  [
    // Honda SP 125
    {
      id: "sp_125",
      category: "honda",
      name: "SP 125",
      pic: require("../assets/honda/sp_125.jpg"),
      price: 78000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "124",
      variants: [
        {
          variant: "Motorcyles",
          price: 78000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/sp_125.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2023,
        },
        {
          title: "Width (mm)",
          value: 785,
        },
        {
          title: "Height (mm)",
          value: 1107,
        },
        {
          title: "Fuel Tank(L)",
          value: 11,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 124,
        },
        {
          title: "Max Power",
          value: "10.72@7500",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "117",
        },
        {
          title: "Gross Weight",
          value: 117,
        },
      ],
    },
    // Honda SP160
    {
      id: "sp_160",
      category: "honda",
      name: "SP 160",
      pic: require("../assets/honda/sp_160.jpg"),
      price: 91000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "163",
      variants: [
        {
          variant: "Motorcyles",
          price: 91000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/sp_160.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2046,
        },
        {
          title: "Width (mm)",
          value: 790,
        },
        {
          title: "Height (mm)",
          value: 1108,
        },
        {
          title: "Fuel Tank(L)",
          value: 12,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 163,
        },
        {
          title: "Max Power",
          value: "12.81@8000",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "115",
        },
        {
          title: "Gross Weight",
          value: 115,
        },
      ],
    },

    // Honda Unicorn
    {
      id: "unicorn",
      category: "honda",
      name: "Unicorn",
      pic: require("../assets/honda/unicorn.png"),
      price: 96700,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "162.7",
      variants: [
        {
          variant: "Motorcyles",
          price: 96700,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/unicorn.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2092,
        },
        {
          title: "Width (mm)",
          value: 756,
        },
        {
          title: "Height (mm)",
          value: 1100,
        },
        {
          title: "Fuel Tank(L)",
          value: 13,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 162.7,
        },
        {
          title: "Max Power",
          value: "12.91@7500",
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
          value: "140",
        },
        {
          title: "Gross Weight",
          value: 140,
        },
      ],
    },
    // Honda Hornet 2.0
    {
      id: "hornet_2.0",
      category: "honda",
      name: "Hornet 2.0",
      pic: require("../assets/honda/hornet_2.0.jpg"),
      price: 141667,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "184.4",
      variants: [
        {
          variant: "Motorcyles",
          price: 141667,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/hornet_2.0.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2047,
        },
        {
          title: "Width (mm)",
          value: 783,
        },
        {
          title: "Height (mm)",
          value: 1064,
        },
        {
          title: "Fuel Tank(L)",
          value: 12,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 184.4,
        },
        {
          title: "Max Power",
          value: "17.26@8500",
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
          value: "142",
        },
        {
          title: "Gross Weight",
          value: 142,
        },
      ],
    },
    // Honda Shine 125
    {
      id: "shine_125",
      category: "honda",
      name: "Shine 125",
      pic: require("../assets/honda/shine_125.jpg"),
      price: 78000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "124",
      variants: [
        {
          variant: "Motorcyles",
          price: 78000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/shine_125.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2045,
        },
        {
          title: "Width (mm)",
          value: 737,
        },
        {
          title: "Height (mm)",
          value: 1072,
        },
        {
          title: "Fuel Tank(L)",
          value: 10.5,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 124,
        },
        {
          title: "Max Power",
          value: "10.74@7500",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "115",
        },
        {
          title: "Gross Weight",
          value: 115,
        },
      ],
    }, // Honda Shine
    {
      id: "shine",
      category: "honda",
      name: "Shine",
      pic: require("../assets/honda/shine_125.jpg"),
      price: 74500,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "124",
      variants: [
        {
          variant: "Motorcyles",
          price: 74500,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/shine_125.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2045,
        },
        {
          title: "Width (mm)",
          value: 737,
        },
        {
          title: "Height (mm)",
          value: 1072,
        },
        {
          title: "Fuel Tank(L)",
          value: 10.5,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 124,
        },
        {
          title: "Max Power",
          value: "10.74@7500",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "115",
        },
        {
          title: "Gross Weight",
          value: 115,
        },
      ],
    },
    // Honda Livo
    {
      id: "livo",
      category: "honda",
      name: "Livo",
      pic: require("../assets/honda/livo.jpg"),
      price: 72500,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "109.51",
      variants: [
        {
          variant: "Motorcyles",
          price: 72500,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/livo.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2020,
        },
        {
          title: "Width (mm)",
          value: 746,
        },
        {
          title: "Height (mm)",
          value: 1099,
        },
        {
          title: "Fuel Tank(L)",
          value: 9,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 109.51,
        },
        {
          title: "Max Power",
          value: "8.79@7500",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "115",
        },
        {
          title: "Gross Weight",
          value: 115,
        },
      ],
    },
    // Honda CD 110 Dream
    {
      id: "cd_110_dream",
      category: "honda",
      name: "CD 110 Dream",
      pic: require("../assets/honda/cd_110_dream.jpg"),
      price: 66000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "109.51",
      variants: [
        {
          variant: "Standard",
          price: 66000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/cd_110_dream.jpg"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2044,
        },
        {
          title: "Width (mm)",
          value: 736,
        },
        {
          title: "Height (mm)",
          value: 1072,
        },
        {
          title: "Fuel Tank(L)",
          value: 9.1,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 109.51,
        },
        {
          title: "Max Power",
          value: "8.79@7500",
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
      weight: [
        {
          title: "Front",
          value: "Drum",
        },
        {
          title: "Rear",
          value: "Drum",
        },
        {
          title: "Kerb",
          value: "112",
        },
        {
          title: "Gross Weight",
          value: 112,
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
