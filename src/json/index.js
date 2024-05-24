export const model = [
  [
    //tiago
    {
      id: "tiago",
      category: "tata",
      name: "Tiago",
      pic: require("../assets/others/tiago.png"),
      price: 564900,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "1199",
      allVariants: [
        {
          variantTitle: "TIAGO | PETROL  BS-VI",
          variants: [
            {
              variant: "Tiago (P) XE",
              price: 564900,
            },
            {
              variant: "Tiago (P) XM",
              price: 599900,
            },
            {
              variant: "Tiago (P) XTO",
              price: 619900,
            },
            {
              variant: "Tiago (P) XT",
              price: 639900,
            },
            {
              variant: "Tiago (P) XT RHYTHM",
              price: 659900,
            },
            {
              variant: "Tiago (P) XT NRG",
              price: 669900,
            },
            {
              variant: "Tiago (P) NRG",
              price: 729900,
            },
            {
              variant: "Tiago P XZ+",
              price: 729900,
            },
            {
              variant: "Tiago (P) XZ+ DT New",
              price: 739900,
            },
          ],
        },
        {
          variantTitle: "TIAGO AUTOMATIC",
          variants: [
            {
              variant: "Tiago (P) XTA",
              price: 694900,
            },
            {
              variant: "Tiago (P) XZA",
              price: 694900,
            },
            {
              variant: "Tiago (P) XZO+",
              price: 699900,
            },
            {
              variant: "Tiago (P) XZO+ DT",
              price: 709900,
            },
            {
              variant: "Tiago (P) XZOA+",
              price: 754900,
            },
            {
              variant: "Tiago (P) XZOA+ DT",
              price: 764900,
            },
            {
              variant: "Tiago (P) NRGA",
              price: 784900,
            },
            {
              variant: "Tiago (P) XZA+",
              price: 784900,
            },
            {
              variant: "Tiago (P) XZA+ DT",
              price: 794900,
            },
          ],
        },
        {
          variantTitle: "TIAGO CNG",
          variants: [
            {
              variant: "Tiago XE CNG",
              price: 659900,
            },
            {
              variant: "Tiago XM CNG",
              price: 694900,
            },
            {
              variant: "Tiago XT CNG",
              price: 734900,
            },
            {
              variant: "Tiago XT RHYTHM CNG",
              price: 764900,
            },
            {
              variant: "Tiago XT NRG CNG",
              price: 754900,
            },
            {
              variant: "Tiago XZ+ CNG",
              price: 824900,
            },
            {
              variant: "Tiago XT NRG CNG",
              price: 824900,
            },
            {
              variant: "Tiago XZ+ DT CNG",
              price: 834900,
            },
            {
              variant: "Tiago XTA CNG",
              price: 789900,
            },
            {
              variant: "Tiago XZA+ CNG",
              price: 879900,
            },
            {
              variant: "Tiago XZ NRGA CNG",
              price: 879900,
            },
            {
              variant: "Tiago XZA+ DT CNG",
              price: 889900,
            },
          ],
        },
        {
          variantTitle: "Tiago EV",
          variants: [
            {
              variant: "Tiago EV MR XE",
              price: 799000,
            },
            {
              variant: "Tiago EV MR XT",
              price: 899000,
            },
            {
              variant: "Tiago EV LR XT",
              price: 999000,
            },
            {
              variant: "Tiago EV LR XZ+",
              price: 1089000,
            },
            {
              variant: "Tiago EV LR XZ+ AC FC WMU",
              price: 1139000,
            },
            {
              variant: "Tiago EV LR XZ+ TECH LUX",
              price: 1139000,
            },
            {
              variant: "Tiago EV LR XZ+ TECH LUX AC FC WMU",
              price: 1189000,
            },
          ],
        },
      ],
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
      price: 664900,
      fuel: "Petrol / Diesel",
      transmission: "Manual",
      cc: "1497",
      allVariants: [
        {
          variantTitle: "ALTROZ | PETROL BS - VI ",
          variants: [
            { variant: "XE 1.2 P", price: 664900 },
            { variant: "XE+ 1.2 P", price: 679900 },
            { variant: "XM 1.2 P", price: 699900 },
            { variant: "XM S 1.2 P", price: 744900 },
            { variant: "XM+ 1.2 P", price: 759900 },
            { variant: "XM+ S 1.2 P", price: 809900 },
            { variant: "XT 1.2 P", price: 809900 },
            { variant: "XZ 1.2 P", price: 859900 },
            { variant: "XZ(O) 1.2 P", price: 828900 },
            { variant: "XT 1.2 P Dark", price: 835900 },
            { variant: "XZ+ 1.2 P", price: 899990 },
            { variant: "XZ+ S 1.2 P", price: 909990 },
            { variant: "XZ+ 1.2 P Dark", price: 919900 },
            { variant: "XZ+ S 1.2 P Dark", price: 949990 },
            { variant: "XZ+ OS 1.2 P", price: 964990 },
          ],
        },
        {
          variantTitle: "ALTROZ (P) TURBO VI",
          variants: [
            { variant: "XT TC 1.2 P", price: 834900 },
            { variant: "XT TC 1.2 P Dark", price: 870900 },
            { variant: "XZ TC 1.2 P", price: 919900 },
            { variant: "XZ TC (O) 1.2 P", price: 899900 },
            { variant: "XZ+ TC 1.2 P", price: 959990 },
            { variant: "XZ+ S TC 1.2 P", price: 969990 },
            { variant: "XZ+ TC 1.2 P Dark", price: 949990 },
            { variant: "XZ+ S TC 1.2 P Dark", price: 1009990 },
          ],
        },
        {
          variantTitle: "ALTROZ | DIESEL VI",
          variants: [
            { variant: "XE 1.5 D", price: 754900 },
            { variant: "XE+ 1.5 D", price: 814900 },
            { variant: "XM+ 1.5 D", price: 889900 },
            { variant: "XM+ S 1.5 D", price: 939900 },
            { variant: "XT 1.5 D", price: 939900 },
            { variant: "XZ 1.5 D", price: 989900 },
            { variant: "XZ(O) 1.5 D", price: 953900 },
            { variant: "XT 1.5 D Dark", price: 940900 },
            { variant: "XZ+ 1.5 D ", price: 1034900 },
            { variant: "XZ+ S 1.5 D ", price: 1039990 },
            { variant: "XZ+ 1.5 D Dark", price: 1049900 },
            { variant: "XZ+ S 1.5 D Dark ", price: 1079900 },
          ],
        },
        {
          variantTitle: "ALTROZ DCA (AUTOMATIC) PETROL BS- VI",
          variants: [
            { variant: "Altroz XMA+ 1.2 P", price: 859900 },
            { variant: "Altroz XTA 1.2 P", price: 909900 },
            { variant: "Altroz XTA 1.2 P DARK", price: 945900 },
            { variant: "Altroz XZA (O) 1.2 P", price: 969900 },
            { variant: "Altroz XZA+ 1.2 P", price: 999990 },
            { variant: "Altroz XZA+ S 1.2 P DARK", price: 1009990 },
            { variant: "Altroz XZA+ S 1.2 P", price: 1039990 },
            { variant: "Altroz XZA+OS 1.2 P", price: 1064990 },
          ],
        },
        {
          variantTitle: "ALTROZ CNG BS- VI",
          variants: [
            { variant: "Altroz XE CNG", price: 759900 },
            { variant: "Altroz XM+ CNG", price: 844900 },
            { variant: "Altroz XM+ S CNG", price: 894900 },
            { variant: "Altroz XZ CNG", price: 959900 },
            { variant: "Altroz XZ+ S CNG", price: 1009990 },
            { variant: "Altroz XZ+ OS CNG", price: 1064990 },
          ],
        },
        // {
        //   variantTitle: "PUNCH EV",
        //   variants: [
        //     {
        //       variant: " EV Empowered S LR",
        //       price: 1449000,
        //     },

        //   ],
        // },
      ],
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
      price: 629900,
      fuel: "Petrol / Diesel",
      transmission: "Manual",
      cc: "1199",
      allVariants: [
        {
          variantTitle: "TIGOR | PETROL  BS-VI",
          variants: [
            {
              variant: "Tigor (P) XE",
              price: 629900,
            },
            {
              variant: "Tigor (P) XM",
              price: 679900,
            },
            {
              variant: "Tigor (P) XZ",
              price: 729900,
            },
            {
              variant: "Tigor (P) XMA",
              price: 739900,
            },
            {
              variant: "Tigor (P) XZ+",
              price: 799900,
            },
            {
              variant: "Tigor (P) XZ+ DT",
              price: 774900,
            },
            {
              variant: "Tigor (P) XZ+ DT LP",
              price: 793900,
            },
            {
              variant: "Tigor (P) XZ+ LP",
              price: 799900,
            },
            {
              variant: "Tigor (P) XZA+ New",
              price: 859900,
            },
            {
              variant: "Tigor (P) XZA+ DT",
              price: 834900,
            },
            {
              variant: "Tigor (P) XZA+ DT LP",
              price: 853900,
            },
            {
              variant: "Tigor (P) XZA+ LP",
              price: 859900,
            },
          ],
        },
        {
          variantTitle: "TIAGO CNG",
          variants: [
            {
              variant: "Tigor XM CNG",
              price: 774900,
            },
            {
              variant: "Tigor XZ CNG",
              price: 824900,
            },
            {
              variant: "Tigor XZ+ CNG",
              price: 894900,
            },
            {
              variant: "Tigor XZ+ DT CNG",
              price: 864900,
            },
            {
              variant: "Tigor XZ+ DT LP CNG",
              price: 883900,
            },
            {
              variant: "Tigor XZA CNG",
              price: 884900,
            },
            {
              variant: "Tigor XZ+ LP CNG",
              price: 894900,
            },
            {
              variant: "Tigor XZA+ CNG",
              price: 954900,
            },
          ],
        },

        {
          variantTitle: "TIAGO ZIPTON - EV",
          variants: [
            {
              variant: "Tiago XE EV",
              price: 1249000,
            },
            {
              variant: "Tiago XT EV",
              price: 1299000,
            },
            {
              variant: "Tiago EV XM",
              price: 1299000,
            },
            {
              variant: "Tiago XZ+ EV",
              price: 1349000,
            },
            {
              variant: "Tiago XZ+ DT",
              price: 1364000,
            },
            {
              variant: "Tiago XZ+ LUX EV",
              price: 1375000,
            },
          ],
        },
      ],
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
      price: 612900,
      fuel: "Petrol",
      transmission: "Manual / Automatic",
      cc: "1199",
      allVariants: [
        {
          variantTitle: "PUNCH MT - BSVI",
          variants: [
            {
              variant: " Pure",
              price: 612900,
            },
            {
              variant: " Pure Rhythm",
              price: 637900,
            },
            {
              variant: " Adventure",
              price: 699900,
            },
            {
              variant: " Adv Camo",
              price: 699900,
            },
            {
              variant: " Adventure Rhythm",
              price: 734900,
            },
            {
              variant: " Adv Rhythm Camo",
              price: 734900,
            },
            {
              variant: " Accomplished",
              price: 784900,
            },
            {
              variant: " ACC CAMO",
              price: 779900,
            },
            {
              variant: " Accomplish Rhythm",
              price: 799900,
            },
            {
              variant: " Accomplish Dazzle",
              price: 814900,
            },
            {
              variant: " Accomplish Dazzle Camo",
              price: 817900,
            },
            {
              variant: " Accomplished SR",
              price: 834900,
            },
            {
              variant: " Creative",
              price: 851900,
            },
            {
              variant: " Creative DT",
              price: 884900,
            },
            {
              variant: " Accomplish Dazzle SR",
              price: 874900,
            },
            {
              variant: " Creative IRA",
              price: 881900,
            },
            {
              variant: " Creative IRA DT",
              price: 891900,
            },
            {
              variant: " Creative DT SR",
              price: 929900,
            },
            {
              variant: " Creative Flagship DT",
              price: 959900,
            },
          ],
        },
        {
          variantTitle: "PUNCH AMT - BSVI",
          variants: [
            {
              variant: " Adventure AMT",
              price: 759900,
            },
            {
              variant: " Adv Camo AMT",
              price: 759900,
            },
            {
              variant: " Adventure Rhythm AMT",
              price: 794900,
            },
            {
              variant: " Adv Rhythm Camo AMT",
              price: 794900,
            },
            {
              variant: " Accomplish AMT",
              price: 844900,
            },
            {
              variant: " Acc Camo AMT",
              price: 839900,
            },
            {
              variant: " Accomplish Dazzle AMT",
              price: 844900,
            },
            {
              variant: " Acc Dazzle Camo AMT",
              price: 877900,
            },
            {
              variant: " Accomplished SR AMT",
              price: 889900,
            },
            {
              variant: " Creative AMT",
              price: 911900,
            },
            {
              variant: " Creative AMT DT",
              price: 944900,
            },
            {
              variant: " Accomplish Dazzle SR AMT",
              price: 939900,
            },
            {
              variant: " Creative IRA AMT",
              price: 941900,
            },
            {
              variant: " Creative IRA AMT DT",
              price: 951900,
            },
            {
              variant: " Creative AMT DT SR",
              price: 959900,
            },
            {
              variant: " Creative Flagship AMT DT",
              price: 1019900,
            },
          ],
        },
        {
          variantTitle: "PUNCH CNG - BSVI",
          variants: [
            {
              variant: " Pure CNG",
              price: 722900,
            },
            {
              variant: " Adventure CNG",
              price: 794900,
            },
            {
              variant: " Adventure Rhythm CNG",
              price: 829900,
            },
            {
              variant: " Accomplish CNG",
              price: 894900,
            },
            {
              variant: " Accomplish Dazzle S CNG",
              price: 984900,
            },
          ],
        },
        {
          variantTitle: "PUNCH EV",
          variants: [
            {
              variant: " EV Smart",
              price: 1099000,
            },
            {
              variant: " EV Smart +",
              price: 1149000,
            },
            {
              variant: " EV Adventure",
              price: 1199000,
            },
            {
              variant: " EV Adventure S",
              price: 1249000,
            },
            {
              variant: " EV Empowered",
              price: 1279000,
            },
            {
              variant: " EV Adventure LR",
              price: 1299000,
            },
            {
              variant: " EV Empowered +",
              price: 1329000,
            },
            {
              variant: " EV Empowered S",
              price: 1329000,
            },
            {
              variant: " EV Adventure LR ACFC",
              price: 1349000,
            },
            {
              variant: " EV Adventure S LR",
              price: 1349000,
            },
            {
              variant: " EV Empowered +S",
              price: 1379000,
            },
            {
              variant: " EV Empowered LR",
              price: 1399000,
            },
            {
              variant: " EV Adventure S LR ACFC",
              price: 1399000,
            },
            {
              variant: " EV Empowered S LR",
              price: 1449000,
            },
            {
              variant: " EV Empowered + LR",
              price: 1449000,
            },
            {
              variant: " EV Empowered LR ACFC",
              price: 1449000,
            },
            {
              variant: " EV Empowered + LR ACFC",
              price: 1499000,
            },
            {
              variant: " EV Empowered S LR ACFC",
              price: 1499000,
            },
            {
              variant: " EV Empowered +S LR",
              price: 1499000,
            },
            {
              variant: " EV Empowered +S LR ACFC",
              price: 1549000,
            },
          ],
        },
      ],
      variants: [
        {
          variant: "Punch Pure CNG",
          price: 722900,
        },
        {
          variant: "Punch Adventure CNG",
          price: 794900,
        },
        {
          variant: "Punch Adventure Rhythm CNG",
          price: 829900,
        },
        {
          variant: "Punch Accomplish CNG",
          price: 894900,
        },
        {
          variant: "Punch Accomplish Dazzle S CNG",
          price: 984900,
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
      price: 799990,
      fuel: "Petrol / Diesel",
      transmission: "Manual / Automatic",
      cc: "1199",
      allVariants: [
        {
          variantTitle: "NEXON | PETROL BS-VI",
          variants: [
            { variant: "Nexon Smart (O) 1.2", price: 799990 },
            { variant: "Nexon Smart 1.2", price: 814990 },
            { variant: "Nexon Smart + 1.2", price: 889990 },
            { variant: "Nexon Smart + S 1.2", price: 939990 },
            { variant: "Nexon Pure 1.2", price: 979990 },
            { variant: "Nexon Pure S 1.2", price: 1029990 },
            { variant: "Nexon Creative 1.2", price: 1109990 },
            { variant: "Nexon Creative DT 1.2", price: 1119990 },
            { variant: "Nexon Creative DARK 1.2", price: 1144990 },
            { variant: "Nexon Creative + 1.2", price: 1179990 },
            { variant: "Nexon Creative + DT 1.2", price: 1189990 },
            { variant: "Nexon Creative + DARK 1.2", price: 1214990 },
            { variant: "Nexon Creative + S 1.2", price: 1229990 },
            { variant: "Nexon Creative DCA 1.2", price: 1229990 },
            { variant: "Nexon Creative + S DT 1.2", price: 1239990 },
            { variant: "Nexon Creative DCA DT 1.2", price: 1239990 },
            { variant: "Nexon Creative DCA DARK 1.2", price: 1264990 },
            { variant: "Nexon Creative + S DARK 1.2", price: 1264990 },
            { variant: "Nexon Creative + DCA 1.2", price: 1299990 },
            { variant: "Nexon Creative + DCA DT 1.2", price: 1309990 },
            { variant: "Nexon Creative + DCA DARK 1.2", price: 1334990 },
            { variant: "Nexon Creative + S DCA 1.2", price: 1349990 },
            { variant: "Nexon Creative + S DCA DT 1.2", price: 1359990 },
            { variant: "Nexon Fearless DT 1.2", price: 1259990 },
            { variant: "Nexon FearlessPr DT 1.2", price: 1259990 },
            { variant: "Nexon Fearless DARK 1.2", price: 1294990 },
            { variant: "Nexon Fearless + DT 1.2", price: 1309990 },
            { variant: "Nexon FearlessPr + DT 1.2", price: 1309990 },
            { variant: "Nexon Fearless S DT 1.2", price: 1309990 },
            { variant: "Nexon FearlessPr S DT 1.2", price: 1309990 },
            { variant: "Nexon Fearless + S DT 1.2", price: 1359990 },
            { variant: "Nexon FearlessPr + S DT 1.2", price: 1359990 },
            { variant: "Nexon Fearless DCA DT 1.2", price: 1379990 },
            { variant: "Nexon FearlessPr DCA DT 1.2", price: 1379990 },
            { variant: "Nexon Fearless + S DARK 1.2", price: 1379990 },
            { variant: "Nexon Fearless DCA DARK 1.2", price: 1414990 },
            { variant: "Nexon Fearless + DCA DT 1.2", price: 1429990 },
            { variant: "Nexon FearlessPr + DCA DT 1.2", price: 1429990 },
            { variant: "Nexon Fearless S DCA DT 1.2", price: 1429990 },
            { variant: "Nexon FearlessPr S DCA DT 1.2", price: 1429990 },
            { variant: "Nexon Fearless + S DCA DT 1.2", price: 1479990 },
            { variant: "Nexon FearlessPr +S DCA DT 1.2", price: 1479990 },
            { variant: "Nexon Fearless + S DCA DARK 1.2", price: 1499990 },
            { variant: "Nexon Smart + AMT 1.2", price: 969990 },
            { variant: "Nexon Pure AMT 1.2", price: 1049990 },
            { variant: "Nexon Pure S AMT 1.2", price: 1099990 },
            { variant: "Nexon Creative AMT 1.2", price: 1179990 },
            { variant: "Nexon Creative AMT DT 1.2", price: 1189990 },
            { variant: "Nexon Creative AMT DARK 1.2", price: 1214990 },
            { variant: "Nexon Creative + AMT 1.2", price: 1249990 },
            { variant: "Nexon Creative + AMT DT 1.2", price: 1259990 },
            { variant: "Nexon Creative + AMT DARK 1.2", price: 1284990 },
            { variant: "Nexon Creative + S AMT 1.2", price: 1299990 },
            { variant: "Nexon Creative + S AMT DT 1.2", price: 1309990 },
            { variant: "Nexon Creative + S AMT DARK 1.2", price: 1334990 },
            { variant: "Nexon Creative + S DCA DARK 1.2", price: 1384990 },
          ],
        },
        {
          variantTitle: "NEXON | DIESEL BS-VI",
          variants: [
            { variant: "Nexon Smart + 1.5", price: 999990 },
            { variant: "Nexon Smart + S 1.5", price: 1049990 },
            { variant: "Nexon Pure 1.5", price: 1109990 },
            { variant: "Nexon Pure S 1.5", price: 1159990 },
            { variant: "Nexon Creative 1.5", price: 1249990 },
            { variant: "Nexon Creative DT 1.5", price: 1259990 },
            { variant: "Nexon Creative DK 1.5", price: 1284990 },
            { variant: "Nexon Creative + 1.5", price: 1319990 },
            { variant: "Nexon Creative + DT 1.5", price: 1329990 },
            { variant: "Nexon Creative + DK 1.5", price: 1354990 },
            { variant: "Nexon Creative + S 1.5", price: 1369990 },
            { variant: "Nexon Creative + S DT 1.5", price: 1379990 },
            { variant: "Nexon Fearless DT 1.5", price: 1399990 },
            { variant: "Nexon FearlessPr DT 1.5", price: 1399990 },
            { variant: "Nexon Creative + S DK 1.5", price: 1404990 },
            { variant: "Nexon Fearless DARK 1.5", price: 1434990 },
            { variant: "Nexon Fearless + DT 1.5", price: 1449990 },
            { variant: "Nexon FearlessPr + DT 1.5", price: 1449990 },
            { variant: "Nexon Fearless S DT 1.5", price: 1449990 },
            { variant: "Nexon FearlessPr S DT 1.5", price: 1449990 },
            { variant: "Nexon Fearless + S DT 1.5", price: 1499990 },
            { variant: "Nexon FearlessPr + S DT 1.5", price: 1499990 },
            { variant: "Nexon Fearless + S DK 1.5", price: 1519990 },
            { variant: "Nexon Pure AMT 1.5", price: 1179990 },
            { variant: "Nexon Pure S AMT 1.5", price: 1229990 },
            { variant: "Nexon Creative AMT 1.5", price: 1309990 },
            { variant: "Nexon Creative AMT DT 1.5", price: 1319990 },
            { variant: "Nexon Creative AMT DK 1.5", price: 1344990 },
            { variant: "Nexon Creative + AMT 1.5", price: 1389990 },
            { variant: "Nexon Creative + AMT DT 1.5", price: 1399990 },
            { variant: "Nexon Creative + AMT DK 1.5", price: 1424990 },
            { variant: "Nexon Creative + S AMT 1.5", price: 1439990 },
            { variant: "Nexon Creative + S AMT DT 1.5", price: 1449990 },
            { variant: "Nexon Fearless AMT DT 1.5", price: 1469990 },
            { variant: "Nexon FearlessPr AMT DT 1.5", price: 1469990 },
            { variant: "Nexon Creative + S AMT DK 1.5", price: 1474990 },
            { variant: "Nexon Fearless AMT DK 1.5", price: 1504990 },
            { variant: "Nexon Fearless + AMT DT 1.5", price: 1509990 },
            { variant: "Nexon FearlessPr + AMT DT 1.5", price: 1509990 },
            { variant: "Nexon Fearless S AMT DT 1.5", price: 1509990 },
            { variant: "Nexon FearlessPr S AMT DT 1.5", price: 1509990 },
            { variant: "Nexon FearlessPr +S AMT DT 1.5", price: 1559990 },
            { variant: "Nexon Fearless + S AMT DT 1.5", price: 1559990 },
            { variant: "Nexon Fearless + S AMT DK 1.5", price: 1579990 },
          ],
        },
        {
          variantTitle: "NEXON (OLD) | DIESEL VI",
          variants: [
            { variant: "Nexon (D) XM", price: 999900 },
            { variant: "Nexon (D) XM (S)", price: 1079900 },
            { variant: "Nexon (D) XM+ (S)", price: 1144900 },
            { variant: "Nexon (D) XZ+", price: 1209900 },
            { variant: "Nexon (D) XZ+ S", price: 1284900 },
            { variant: "Nexon (D) XZ+ S DT", price: 1299900 },
            { variant: "Nexon (D) XZ+ S DARK", price: 1314900 },
            { variant: "Nexon (D) XZ+ (L)", price: 1277900 },
            { variant: "Nexon (D) XZ+ DK", price: 1239900 },
            { variant: "Nexon (D) XZ+ (L) Dark", price: 1307900 },
            { variant: "Nexon (D) XZ+ LUX", price: 1319900 },
            { variant: "Nexon (D) XZ+ LUX DT", price: 1334900 },
            { variant: "Nexon (D) XZ+ LUX DK", price: 1349900 },
            { variant: "Nexon (D) XZ+ LUXS", price: 1369900 },
            { variant: "Nexon (D) XZ+ LUXS KR", price: 1369900 },
            { variant: "Nexon (D) XZ+ LUXS DT", price: 1384900 },
            { variant: "Nexon (D) XZ+ LUXS DK", price: 1389900 },
            { variant: "Nexon (D) XZ+ LUXS RDK", price: 1394900 },
          ],
        },
        {
          variantTitle: "NEXON (D) OLD AUTOMATIC",
          variants: [
            { variant: "Nexon (D) XMA (S)", price: 1144900 },
            { variant: "Nexon (D) XMA+ (S)", price: 1204900 },
            { variant: "Nexon (D) XZA+", price: 1274900 },
            { variant: "Nexon (D) XZA+ Dark", price: 1304900 },
            { variant: "Nexon (D) XZA+ LUX", price: 1384900 },
            { variant: "Nexon (D) XZA+ LUX DT", price: 1399900 },
            { variant: "Nexon (D) XZA+ LUX DK", price: 1414900 },
            { variant: "Nexon (D) XZA+ LUXS", price: 1434900 },
            { variant: "Nexon (D) XZA+ LUXS KR", price: 1434900 },
            { variant: "Nexon (D) XZA+ LUXS DT", price: 1449900 },
            { variant: "Nexon (D) XZA+ LUXS DK", price: 1454900 },
            { variant: "Nexon (D) XZA+ LUXS RDK", price: 1459900 },
          ],
        },
        {
          variantTitle: "NEXON (D) OLD JET VI",
          variants: [
            {
              variant: "Nexon (D) Z+ LUXS JET",
              price: 1382900,
            },
          ],
        },
        {
          variantTitle: "NEXON (D) JET  OLD AUTOMATIC",
          variants: [
            {
              variant: "Nexon (D) XZA+ LUXS JET",
              price: 1447900,
            },
          ],
        },
        {
          variantTitle: "NEXON | PETROL VI (OLD)",
          variants: [
            { variant: "Nexon (P) XE", price: 799900 },
            { variant: "Nexon (P) XM", price: 899900 },
            { variant: "Nexon (P) XM (S)", price: 959900 },
            { variant: "Nexon (P) XM+(S)", price: 999900 },
            { variant: "Nexon (P) XZ+", price: 1069900 },
            { variant: "Nexon (P) XZ+ S", price: 1144900 },
            { variant: "Nexon (P) XZ+ S DT", price: 1159900 },
            { variant: "Nexon (P) XZ+ (L)", price: 1147900 },
            { variant: "Nexon (P) XZ+ LUX", price: 1179900 },
            { variant: "Nexon (P) XZ+ LUX DT", price: 1194900 },
            { variant: "Nexon (P) XZ+ LUX DARK", price: 1209900 },
            { variant: "Nexon (P) XZ+ DT (L)", price: 1162900 },
            { variant: "Nexon (P) XZ+ P", price: 1197900 },
            { variant: "Nexon (P) XZ+ LUXS", price: 1229900 },
            { variant: "Nexon (P) XZ+ LUXS KR", price: 1229900 },
            { variant: "Nexon (P) XZ+ DT P", price: 1212900 },
            { variant: "Nexon (P) XZ+ Dark", price: 1099900 },
            { variant: "Nexon (P) XZ+ S Dark", price: 1174900 },
            { variant: "Nexon (P) XZ+ (L) Dark", price: 1177900 },
            { variant: "Nexon (P) XZ+ LUXS DT", price: 1244900 },
            { variant: "Nexon (P) XZ+ LUXS DK", price: 1249900 },
            { variant: "Nexon (P) XZ+ LUXS RDK", price: 1254900 },
          ],
        },
        {
          variantTitle: "NEXON (P) AUTOMATIC (OLD)",
          variants: [
            { variant: "Nexon (P) XMA", price: 964900 },
            { variant: "Nexon (P) XMA (S)", price: 1024900 },
            { variant: "Nexon (P) XMA + (S)", price: 1064900 },
            { variant: "Nexon (P) XZA+", price: 1134900 },
            { variant: "Nexon (P) XZA+ (S)", price: 1209900 },
            { variant: "Nexon (P) XZA+ (S) DT", price: 1224900 },
            { variant: "Nexon (P) XZA+ S DK", price: 1239900 },
            { variant: "Nexon (P) XZA+ LUX", price: 1244900 },
            { variant: "Nexon (P) XZA+ LUX DT", price: 1259900 },
            { variant: "Nexon (P) XZA+ LUX DK", price: 1274900 },
            { variant: "Nexon (P) XZA+ LUXS", price: 1294900 },
            { variant: "Nexon (P) XZA+ LUXS KR", price: 1294900 },
            { variant: "Nexon (P) XZA+ LUXS DT", price: 1309900 },
            { variant: "Nexon (P) XZA+ LUXS DK", price: 1314900 },
            { variant: "Nexon (P) XZA+ LUXS RDK", price: 1319900 },
            { variant: "Nexon (P) XZA+ Dark", price: 1164900 },
          ],
        },
        {
          variantTitle: "NEXON (P) HS, KZR & JET (OLD)",
          variants: [
            { variant: "Nexon (P) XZ+ HS", price: 1114900 },
            { variant: "Nexon (P) XZ+ DT HS", price: 1129900 },
            { variant: "Nexon (P) XZ+ JET", price: 1222900 },
            { variant: "Nexon (P) XZ+ LUXS JET", price: 1242900 },
          ],
        },
        {
          variantTitle: "NEXON (P) HS, KZR & JET AUTOMATIC (OLD)",
          variants: [{ variant: "Nexon (P) XZA+ LUXS JET", price: 1307900 }],
        },
        {
          variantTitle: "NEXON - EV -2.0 MAX VI",
          variants: [
            { variant: "Nexon 2.0 EV XM 3.3", price: 1649000 },
            { variant: "Nexon 2.0 EV XM 7.2", price: 1699000 },
            { variant: "Nexon 2.0 EV XZ+ 3.3", price: 1749000 },
            { variant: "Nexon 2.0 EV XZ+ 7.2", price: 1799000 },
            { variant: "Nexon 2.0 EV XZ+ lux 3.3", price: 1879000 },
            { variant: "Nexon 2.0 EV XZ+ lux 3.3 JET", price: 1869000 },
            { variant: "Nexon 2.0 EV XZ+ lux 7.2", price: 1929000 },
            { variant: "Nexon 2.0 EV XZ+ lux 7.2 JET", price: 1919000 },
            { variant: "Nexon EV XZ+ lux Dark 3.3 KW", price: 1904000 },
            { variant: "Nexon EV XZ+ lux Dark 7.3 KW", price: 1954000 },
          ],
        },
        {
          variantTitle: "NEXON - EV -3.0 ",
          variants: [
            { variant: "Creative+ MR", price: 1449000 },
            { variant: "Fearless MR", price: 1599000 },
            { variant: "Fearless+ MR", price: 1649000 },
            { variant: "Fearless+S MR", price: 1699000 },
            { variant: "Empowered MR", price: 1749000 },
            { variant: "Fearless LR", price: 1699000 },
            { variant: "Fearless+ LR", price: 1749000 },
            { variant: "Fearless+S LR", price: 1799000 },
            { variant: "Empowered+ LR", price: 1929000 },
            { variant: "Nexon EV 3.0 Dark Edition", price: 1949000 },
          ],
        },
        {
          variantTitle: "NEXON - EV -VI ",
          variants: [
            { variant: "NEXON EV XM", price: 1449000 },
            { variant: "NEXON EV XZ+", price: 1599000 },
            { variant: "NEXON EV XZ+ LUX", price: 1699000 },
            { variant: "NEXON EV XZ+ FLEET", price: 1630000 },
            { variant: "Nexon EV XZ+ Dark", price: 1619000 },
            { variant: "Nexon EV XZ+ lux Dark", price: 1719000 },
            { variant: "Nexon EV XZ+ lux JET", price: 1719000 },
          ],
        },
      ],
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
      price: 1519900,
      fuel: "Diesel",
      transmission: "Manual / Automatic",
      cc: "1956",
      allVariants: [
        {
          variantTitle: "NEW HARRIER - PHASE LIFT",
          variants: [
            {
              variant: "Harrier Smart",
              price: 1549000,
            },
            {
              variant: "Harrier Smart (O)",
              price: 1599000,
            },
            {
              variant: "Harrier Pure",
              price: 1699000,
            },
            {
              variant: "Harrier Pure (O)",
              price: 1749000,
            },
            {
              variant: "Harrier Pure +",
              price: 1869000,
            },
            {
              variant: "Harrier Pure + S",
              price: 1969000,
            },
            {
              variant: "Harrier Pure + S DK",
              price: 1999000,
            },
            {
              variant: "Harrier Adventure",
              price: 2019000,
            },
            {
              variant: "Harrier Adventure +",
              price: 2169000,
            },
            {
              variant: "Harrier Adventure + DK",
              price: 2224000,
            },
            {
              variant: "Harrier Adventure + A",
              price: 2269000,
            },
            {
              variant: "Harrier Fearless DT",
              price: 2299000,
            },
            {
              variant: "Harrier Fearless DK",
              price: 2354000,
            },
            {
              variant: "Harrier Fearless + DT",
              price: 2449000,
            },
            {
              variant: "Harrier Fearless + DK",
              price: 2504000,
            },
          ],
        },
        {
          variantTitle: "HARRIER AUTOMATIC",
          variants: [
            {
              variant: "Harrier Pure + (AT)",
              price: 1999000,
            },
            {
              variant: "Harrier Pure + S (AT)",
              price: 2109000,
            },
            {
              variant: "Harrier Pure + S DK (AT)",
              price: 2139000,
            },
            {
              variant: "Harrier Adventure + (AT)",
              price: 2309000,
            },
            {
              variant: "Harrier Adventure + DK (AT)",
              price: 2364000,
            },
            {
              variant: "Harrier Adventure + A (AT)",
              price: 2409000,
            },
            {
              variant: "Harrier Fearless DT (AT)",
              price: 2439000,
            },
            {
              variant: "Harrier Fearless DK (AT)",
              price: 2494000,
            },
            {
              variant: "Harrier Fearless + DT (AT)",
              price: 2589000,
            },
            {
              variant: "Harrier Fearless + DK (AT)",
              price: 2644000,
            },
          ],
        },
        {
          variantTitle: "HARRIER-VI (OLD)",
          variants: [
            {
              variant: "Harrier XE",
              price: 1519900,
            },
            {
              variant: "Harrier XM",
              price: 1664900,
            },
            {
              variant: "Harrier XMS",
              price: 1790000,
            },
            {
              variant: "Harrier XT+",
              price: 1889400,
            },
            {
              variant: "Harrier XZ",
              price: 1944400,
            },
            {
              variant: "Harrier XZ DT",
              price: 1964400,
            },
            {
              variant: "Harrier XZ+",
              price: 2151900,
            },
            {
              variant: "Harrier XZ+ DT",
              price: 2171900,
            },
            {
              variant: "Harrier XZ+ JET",
              price: 2119900,
            },
          ],
        },
        {
          variantTitle: "HARRIER AUTOMATIC (OLD)",
          variants: [
            {
              variant: "Harrier XMAS",
              price: 1920000,
            },
            {
              variant: "Harrier XTA+",
              price: 2019400,
            },
            {
              variant: "Harrier XZS",
              price: 2041400,
            },
            {
              variant: "Harrier XZA",
              price: 2074400,
            },
            {
              variant: "Harrier XZS DT",
              price: 2061400,
            },
            {
              variant: "Harrier XZA DT",
              price: 2094400,
            },
            {
              variant: "Harrier XZAS",
              price: 2171400,
            },
            {
              variant: "Harrier XZAS DT",
              price: 2191400,
            },
            {
              variant: "Harrier XZA+",
              price: 2281900,
            },
            {
              variant: "Harrier XZA+ DT",
              price: 2301900,
            },
            {
              variant: "Harrier XZA+ KZR",
              price: 2245900,
            },
            {
              variant: "Harrier XZA+ JET",
              price: 2249900,
            },
            {
              variant: "Harrier XZA+ O",
              price: 2381900,
            },
            {
              variant: "Harrier XZA+ O DT",
              price: 2401900,
            },
            {
              variant: "Harrier XZA+ JET",
              price: 2249900,
            },
          ],
        },
        {
          variantTitle: "DARK EDITION AUTOMATIC (OLD)",
          variants: [
            {
              variant: "Harrier XT+ Dark Edition",
              price: 1924400,
            },
            {
              variant: "Harrier XTA+ Dark Edition",
              price: 2054400,
            },
            {
              variant: "Harrier XZS Dark Edition",
              price: 2076400,
            },
            {
              variant: "Harrier XZ+ Dark Edition",
              price: 2186900,
            },
            {
              variant: "Harrier XZ+ RDK",
              price: 2196900,
            },
            {
              variant: "Harrier XZAS Dark Edition",
              price: 2206400,
            },
            {
              variant: "Harrier XZA+ Dark Edition",
              price: 2316900,
            },
            {
              variant: "Harrier XZA+ RDK",
              price: 2326900,
            },
            {
              variant: "Harrier XZA+ O Dark Edition",
              price: 2416900,
            },
            {
              variant: "Harrier XZA+ O RDK",
              price: 2426900,
            },
          ],
        },
        // {
        //   variantTitle: "HARRIER CAMO DARK",
        //   variants: [
        //     {
        //       variant: "XE",
        //       price: 1800000,
        //     },
        //     {
        //       variant: "XM",
        //       price: 1850000,
        //     },
        //     {
        //       variant: "XT",
        //       price: 1900000,
        //     },
        //   ],
        // },
      ],
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
      price: 1619000,
      fuel: "Diesel",
      transmission: "Manual / Automatic",
      cc: "1956",
      allVariants: [
        {
          variantTitle: "NEW SAFARI - PHASE LIFT",
          variants: [
            { variant: "Safari Smart", price: 1619000 },
            { variant: "Safari Smart (O)", price: 1669000 },
            { variant: "Safari Pure", price: 1769000 },
            { variant: "Safari Pure (O)", price: 1819000 },
            { variant: "Safari Pure +", price: 1939000 },
            { variant: "Safari Pure + S", price: 2039000 },
            { variant: "Safari Pure + S DK", price: 2069000 },
            { variant: "Safari Adventure", price: 2099000 },
            { variant: "Safari Adventure +", price: 2249000 },
            { variant: "Safari Adventure + DK", price: 2304000 },
            { variant: "Safari Adventure + A", price: 2349000 },
            { variant: "Safari Accomplished DT", price: 2399000 },
            { variant: "Safari Accomplished DK", price: 2434000 },
            { variant: "Safari Accomplished + DT", price: 2549000 },
            { variant: "Safari Accomplished + 6S DT", price: 2559000 },
            { variant: "Safari Accomplished + DK", price: 2584000 },
            { variant: "Safari Accomplished + 6S DK", price: 2594000 },
          ],
        },
        {
          variantTitle: "SAFARI AUTOMATIC",
          variants: [
            { variant: "Safari Pure + (AT)", price: 2069000 },
            { variant: "Safari Pure + S (AT)", price: 2179000 },
            { variant: "Safari Pure + S DK (AT)", price: 2209000 },
            { variant: "Safari Adventure + (AT)", price: 2389000 },
            { variant: "Safari Adventure + DK (AT)", price: 2444000 },
            { variant: "Safari Adventure + A (AT)", price: 2489000 },
            { variant: "Safari Accomplished DT (AT)", price: 2539000 },
            { variant: "Safari Accomplished DK (AT)", price: 2574000 },
            { variant: "Safari Accomplished + DT (AT)", price: 2689000 },
            { variant: "Safari Accomplished+6S DT (AT)", price: 2699000 },
            { variant: "Safari Accomplished + DK (AT)", price: 2724000 },
            { variant: "Safari Accomplished+6S DK (AT)", price: 2734000 },
          ],
        },
        {
          variantTitle: "SAFARI - BSVI - OLD PRICE LIST	",
          variants: [
            { variant: "Safari XE", price: 1584900 },
            { variant: "Safari XM", price: 1734900 },
            { variant: "Safari XMS", price: 1866000 },
            { variant: "Safari XT+", price: 1982900 },
            { variant: "Safari XZ", price: 2067900 },
            { variant: "Safari XZ+ 7S", price: 2236500 },
            { variant: "Safari XZ+ 6S", price: 2246500 },
            { variant: "Safari XZ+ 7S Adventure", price: 2261500 },
            { variant: "Safari XZ+ 6S Adventure", price: 2271500 },
            { variant: "Safari XZ+ 7S KZR", price: 2174900 },
            { variant: "Safari XZ+ 6S KZR", price: 2184900 },
            { variant: "Safari XZ+ JET", price: 2174900 },
            { variant: "Safari XZ+ 6S JET", price: 2184900 },
          ],
        },
        {
          variantTitle: "SAFARI AUTOMATIC OLD VEH PRICE LIST	",
          variants: [
            { variant: "Safari XMA", price: 1844900 },
            { variant: "Safari XMAS", price: 1996000 },
            { variant: "Safari XZ+ Gold", price: 2260900 },
            { variant: "Safari XTA+", price: 2112900 },
            { variant: "Safari XZA", price: 2197900 },
            { variant: "Safari XZA+ 7S", price: 2366500 },
            { variant: "Safari XZA+ 6S", price: 2376500 },
            { variant: "Safari XZA+ 7S Adventure", price: 2391500 },
            { variant: "Safari XZA+ 6S Adventure", price: 2401500 },
            { variant: "Safari XZA+ O 7S", price: 2466500 },
            { variant: "Safari XZA+ O 6S", price: 2476500 },
            { variant: "Safari XZA+ O 7S Adeven", price: 2491500 },
            { variant: "Safari XZA+ O 6S Adeven", price: 2501500 },
            { variant: "Safari XZA+ 6S KZR", price: 2314900 },
            { variant: "Safari XZA+ JET", price: 2304900 },
            { variant: "Safari XZA+ 6S JET", price: 2314900 },
          ],
        },
        {
          variantTitle: "SAFARI DARK EDITION MANUAL OLD PRICE LIST	",
          variants: [
            { variant: "Safari XT+ Dark", price: 2017900 },
            { variant: "Safari XZ+ 7S Dark", price: 2271500 },
            { variant: "Safari XZ+ 7S RDK", price: 2281500 },
            { variant: "Safari XZ+ 6S Dark", price: 2281500 },
            { variant: "Safari XZ+ 6S RDK", price: 2291500 },
          ],
        },
        {
          variantTitle: "SAFARI DARK EDITION AUTOMATIC OLD PRICE LIST											",
          variants: [
            { variant: "Safari XTA+ Dark", price: 2147900 },
            { variant: "Safari XZA+7S Dark", price: 2401500 },
            { variant: "Safari XZA+7S RDK", price: 2411500 },
            { variant: "Safari XZA+ 6S Dark", price: 2411500 },
            { variant: "Safari XZA+ 6S RDK", price: 2421500 },
            { variant: "Safari XZA+ O DK", price: 2501500 },
            { variant: "Safari XZA+ O RDK", price: 2511500 },
            { variant: "Safari XZA+ O 6S DK", price: 2511500 },
            { variant: "Safari XZA+ O 6S RDK", price: 2521500 },
          ],
        },
      ],
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
      price: 85900,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "125",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/Dio125_Brochure.pdf",
      variants: [
        {
          variant: "DIO STD 125OBD2 ",
          price: 85900,
        },
        {
          variant: "DIO 125 SMART-OBD2",
          price: 93800,
        },
        {
          variant: "DIO 125 LTD ED ",
          price: 94800,
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
      price: 74293,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "110",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/Dio_Brochure.pdf",
      variants: [
        {
          variant: "DIO STD-OBD2 ",
          price: 74293,
        },
        {
          variant: "DIO DLX-OBD2 ",
          price: 78294,
        },
        {
          variant: "DIO SMART-OBD2  ",
          price: 81794,
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
      price: 82228,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "124",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/Activa125_Brochure2023_Latest.pdf",
      variants: [
        {
          variant: "ACTIVA 125 DRUM -OBD2",
          price: 82228,
        },
        {
          variant: "ACTIVA 125 DRUM ALLOY -OBD2",
          price: 85896,
        },
        {
          variant: "ACTIVA 125 DISC -OBD2",
          price: 89401,
        },
        {
          variant: "ACTIVA 125 SMART -OBD2",
          price: 91401,
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
    // {
    //   id: "activa_6g",
    //   category: "honda",
    //   name: "Activa 6G",
    //   pic: require("../assets/honda/activa_6g.jpg"),
    //   price: 68000,
    //   fuel: "Petrol",
    //   transmission: "Automatic",
    //   cc: "109",
    //   variants: [
    //     {
    //       variant: "Scooty",
    //       price: 68000,
    //     },
    //   ],
    //   banners: [
    //     {
    //       img: require("../assets/honda/activa_6g.jpg"),
    //     },
    //   ],
    //   dimensions: [
    //     {
    //       title: "Length (mm)",
    //       value: 1833,
    //     },
    //     {
    //       title: "Width (mm)",
    //       value: 697,
    //     },
    //     {
    //       title: "Height (mm)",
    //       value: 1156,
    //     },
    //     {
    //       title: "Fuel Tank(L)",
    //       value: 5.3,
    //     },
    //     {
    //       title: "Seating",
    //       value: 2,
    //     },
    //   ],
    //   engine: [
    //     {
    //       title: "Capacity(cc)",
    //       value: 109,
    //     },
    //     {
    //       title: "Max Power",
    //       value: "7.68@8000",
    //     },
    //     {
    //       title: "Fuel Type",
    //       value: "Petrol",
    //     },
    //     {
    //       title: "Transmission",
    //       value: "Automatic",
    //     },
    //   ],
    //   weight: [
    //     {
    //       title: "Front",
    //       value: "Drum",
    //     },
    //     {
    //       title: "Rear",
    //       value: "Drum",
    //     },
    //     {
    //       title: "Kerb",
    //       value: "107",
    //     },
    //     {
    //       title: "Gross Weight",
    //       value: 107,
    //     },
    //   ],
    // },
    // Honda Activa
    {
      id: "activa",
      category: "honda",
      name: "Activa",
      pic: require("../assets/honda/activa.jpg"),
      price: 77835,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "109",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/Scooter_Bole_toh_Activa%20_%20Brochure.pdf",
      variants: [
        {
          variant: "ACTIVA STD-OBD2",
          price: 77835,
        },
        {
          variant: "ACTIVA DLX-OBD2",
          price: 80335,
        },
        {
          variant: "ACTIVA SMART",
          price: 83835,
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
      price: 86023,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "124",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/SP125_brochure.pdf",
      variants: [
        {
          variant: "SP125 DRUM OBD2",
          price: 86023,
        },
        {
          variant: "SP125 DISC OBD2",
          price: 90023,
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
      price: 117500,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "163",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/SP160_Brochure.pdf",
      variants: [
        {
          variant: "SP160 DRUM OBD2 ",
          price: 117500,
        },
        {
          variant: "SP160 DISC OBD2 ",
          price: 121900,
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
      price: 108400,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "162.7",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/Unicorn_Brochure_24.pdf",
      variants: [
        {
          variant: "UNICORN ABS ",
          price: 108400,
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
      price: 139000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "184.4",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/Hornet__Latest_Brochure_pdf.pdf",
      variants: [
        {
          variant: "HORNET 2.0 ABS ",
          price: 139000,
        },
        {
          variant: "HORNET 2.0 LTD ED ",
          price: 140000,
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
      price: 80700,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "124",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/Shine125_Brochure_2023.pdf",
      variants: [
        {
          variant: "SHINE 125 DRUM-OBD2",
          price: 80700,
        },
        {
          variant: "SHINE 125 DISC-OBD2",
          price: 84700,
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
      pic: require("../assets/honda/shine.jpg"),
      price: 66600,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "124",
      brochure: "https://www.honda2wheelersindia.com/assets/pdf/Shine_100.pdf",
      variants: [
        {
          variant: "SHINE 100 OBD2",
          price: 66600,
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
      price: 79800,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "109.51",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/Livo_new_brochure_latest.pdf",
      variants: [
        {
          variant: "LIVO DRUM",
          price: 79800,
        },
        {
          variant: "LIVO DISC",
          price: 83800,
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
      price: 73400,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "109.51",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/CD110_Brochure.pdf",
      variants: [
        {
          variant: "CD 110 Dream",
          price: 73400,
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
    // Honda CB200X
    {
      id: "cb200x",
      category: "honda",
      name: "CB200X",
      pic: require("../assets/honda/cb300f.png"),
      price: 146999,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "184",
      brochure:
        "https://www.honda2wheelersindia.com/assets/pdf/CB_200X_Brochure.pdf",
      variants: [
        {
          variant: "CB200X",
          price: 146999,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/cb300f.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2035,
        },
        {
          title: "Width (mm)",
          value: 843,
        },
        {
          title: "Height (mm)",
          value: 1248,
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
          value: 184,
        },
        {
          title: "Max Power",
          value: "17.03@8500",
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
          value: "147",
        },
        {
          title: "Gross Weight",
          value: 147,
        },
      ],
    },
  ],

  // Honda Big Bikes - 11
  [
    // Honda CB300F
    {
      id: "cb300f",
      category: "honda",
      name: "CB300F",
      pic: require("../assets/honda/cb300f.png"),
      price: 450000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "286",
      variants: [
        {
          variant: "Big Bikes",
          price: 450000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/cb300f.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2030,
        },
        {
          title: "Width (mm)",
          value: 720,
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
          value: 286,
        },
        {
          title: "Max Power",
          value: "30.5@8000",
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
          value: "143",
        },
        {
          title: "Gross Weight",
          value: 143,
        },
      ],
    },
    // Honda CB300R
    {
      id: "cb300r",
      category: "honda",
      name: "CB300R",
      pic: require("../assets/honda/cb300r.png"),
      price: 500000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "286",
      variants: [
        {
          variant: "Big Bikes",
          price: 500000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/cb300r.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2028,
        },
        {
          title: "Width (mm)",
          value: 802,
        },
        {
          title: "Height (mm)",
          value: 1052,
        },
        {
          title: "Fuel Tank(L)",
          value: 10,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 286,
        },
        {
          title: "Max Power",
          value: "30.5@8000",
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
          value: "143",
        },
        {
          title: "Gross Weight",
          value: 143,
        },
      ],
    },
    // Honda CB350
    {
      id: "cb350",
      category: "honda",
      name: "CB350",
      pic: require("../assets/honda/cb350.png"),
      price: 600000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "348",
      variants: [
        {
          variant: "Big Bikes",
          price: 600000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/cb350.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2156,
        },
        {
          title: "Width (mm)",
          value: 836,
        },
        {
          title: "Height (mm)",
          value: 1108,
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
          value: 348,
        },
        {
          title: "Max Power",
          value: "20.8@5500",
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
          value: "181",
        },
        {
          title: "Gross Weight",
          value: 181,
        },
      ],
    },
    // H’ness CB350
    {
      id: "hness_cb350",
      category: "honda",
      name: "H’ness CB350",
      pic: require("../assets/honda/hiness.png"),
      price: 650000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "348",
      variants: [
        {
          variant: "Big Bikes",
          price: 650000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/hiness.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2163,
        },
        {
          title: "Width (mm)",
          value: 800,
        },
        {
          title: "Height (mm)",
          value: 1097,
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
          value: 348,
        },
        {
          title: "Max Power",
          value: "21.1@5500",
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
          value: "181",
        },
        {
          title: "Gross Weight",
          value: 181,
        },
      ],
    },
    // CB350RS
    {
      id: "cb350rs",
      category: "honda",
      name: "CB350RS",
      pic: require("../assets/honda/cb350rs.png"),
      price: 700000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "348",
      variants: [
        {
          variant: "Big Bikes",
          price: 700000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/cb350rs.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2175,
        },
        {
          title: "Width (mm)",
          value: 800,
        },
        {
          title: "Height (mm)",
          value: 1097,
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
          value: 348,
        },
        {
          title: "Max Power",
          value: "21.1@5500",
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
          value: "181",
        },
        {
          title: "Gross Weight",
          value: 181,
        },
      ],
    },
    // NX500
    {
      id: "nx500",
      category: "honda",
      name: "NX500",
      pic: require("../assets/honda/nx500.png"),
      price: 750000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "500",
      variants: [
        {
          variant: "Big Bikes",
          price: 750000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/nx500.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2215,
        },
        {
          title: "Width (mm)",
          value: 930,
        },
        {
          title: "Height (mm)",
          value: 1375,
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
          value: 500,
        },
        {
          title: "Max Power",
          value: "34@8600",
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
          value: "153",
        },
        {
          title: "Gross Weight",
          value: 153,
        },
      ],
    },
    // TRANSALP
    {
      id: "transalp",
      category: "honda",
      name: "TRANSALP",
      pic: require("../assets/honda/translap.png"),
      price: 800000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "750",
      variants: [
        {
          variant: "Big Bikes",
          price: 800000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/translap.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2260,
        },
        {
          title: "Width (mm)",
          value: 870,
        },
        {
          title: "Height (mm)",
          value: 1415,
        },
        {
          title: "Fuel Tank(L)",
          value: 20,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 750,
        },
        {
          title: "Max Power",
          value: "43.1@7750",
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
          value: "177",
        },
        {
          title: "Gross Weight",
          value: 177,
        },
      ],
    },
    // AFRICA TWIN
    {
      id: "africa_twin",
      category: "honda",
      name: "AFRICA TWIN",
      pic: require("../assets/honda/africatwin.png"),
      price: 900000,
      fuel: "Petrol",
      transmission: "Manual",
      cc: "1084",
      variants: [
        {
          variant: "Big Bikes",
          price: 900000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/africatwin.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2345,
        },
        {
          title: "Width (mm)",
          value: 930,
        },
        {
          title: "Height (mm)",
          value: 1570,
        },
        {
          title: "Fuel Tank(L)",
          value: 24,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 1084,
        },
        {
          title: "Max Power",
          value: "100.5@7500",
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
          value: "226",
        },
        {
          title: "Gross Weight",
          value: 226,
        },
      ],
    },
    // GOLD WING TOUR
    {
      id: "gold_wing_tour",
      category: "honda",
      name: "GOLD WING TOUR",
      pic: require("../assets/honda/goldwing.png"),
      price: 2500000,
      fuel: "Petrol",
      transmission: "Automatic",
      cc: "1833",
      variants: [
        {
          variant: "Big Bikes",
          price: 2500000,
        },
      ],
      banners: [
        {
          img: require("../assets/honda/goldwing.png"),
        },
      ],
      dimensions: [
        {
          title: "Length (mm)",
          value: 2471,
        },
        {
          title: "Width (mm)",
          value: 945,
        },
        {
          title: "Height (mm)",
          value: 1435,
        },
        {
          title: "Fuel Tank(L)",
          value: 21.1,
        },
        {
          title: "Seating",
          value: 2,
        },
      ],
      engine: [
        {
          title: "Capacity(cc)",
          value: 1833,
        },
        {
          title: "Max Power",
          value: "126.5@5500",
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
          value: "Disc",
        },
        {
          title: "Rear",
          value: "Disc",
        },
        {
          title: "Kerb",
          value: "389",
        },
        {
          title: "Gross Weight",
          value: 389,
        },
      ],
    },
  ],
];

export const brands = [
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
        phone: "9160188880",
        personName: "Mr. Mohd Roofi Jameel",
        email: "orangehonda2wheelers@gmail.com",
      },
      {
        name: "Honda Showroom - Masab Tank",
        address:
          "10-5-2/1/8/3, Mehdipatnam - Banjara Hills Rd, Opposite Paradise Hotel, Owaisi Pura, Masab Tank, Hyderabad, Telangana 500028",
        map: "https://maps.app.goo.gl/eJXKeMwWTkvCXooC7",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.171548544171!2d78.44988557505934!3d17.403553083486457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9740066d76db%3A0xc65e5977ef927ceb!2sOrange%20Honda!5e0!3m2!1sen!2sin!4v1711003368659!5m2!1sen!2sin",
        phone: "7799942940",
        personName: "Mr. Mohd Aziz Khan",
        email: "orangehondamasabtank2023@gmail.com",
      },
      {
        name: "Honda Showroom - Manikonda",
        address:
          "Krishna Plaza 1-5/31, near Indian Oil Petrol Bunk, Manikonda, Telangana 500089",
        map: "https://maps.app.goo.gl/uGjsLCS4XzDPxPcVA",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1896330295485!2d78.37195907505925!3d17.402684783487118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb941995a23143%3A0x675f12362e6c26d6!2sOrange%20Honda!5e0!3m2!1sen!2sin!4v1711003582070!5m2!1sen!2sin",
        phone: "9703518666",
        personName: "Mr. Srinivas",
        email: "orangehondamanikonda2015@gmail.com",
      },
      {
        name: "Honda Showroom - Chevella",
        address: "Main Rd, Chevella, Telangana 501503",
        map: "https://maps.app.goo.gl/ccuhWxGn4nG9nkvQA",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.002314227614!2d78.13098757505725!3d17.315437483559553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbe82019db7a21%3A0x7d44011f29cb3307!2sorange%20honda%20showroom!5e0!3m2!1sen!2sin!4v1711003704174!5m2!1sen!2sin",
        phone: "8886672175",
        personName: "Mr. E Raju",
        email: "orangechevelle1234@gmail.com",
      },
      {
        name: "Honda Showroom - Moinabad",
        address:
          "DHYAN SHIVA COLONY KABIR COTTAGE, K-2, beside INDIAN PETROL BUNK, Moinabad, Telangana 501504",
        map: "https://maps.app.goo.gl/87neYhi9gCv9ZfEb6",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6959231331466!2d78.27358807505753!3d17.330214483547245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbebb55ee5883d%3A0xa6d4677dbf46db2d!2sOrange%20Honda%20Moinabad!5e0!3m2!1sen!2sin!4v1711003813602!5m2!1sen!2sin",
        phone: "8886625097",
        personName: "Mr. Balram",
        email: "orangemoinabad@gmail.com",
      },
    ],
  },
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
export const galleryImg = [
  {
    name: "Honda",
    images: [
      {
        showroomName: "Head Tolichowki Show room Pictures",
        img: [
          require("../assets/gallery/Honda/Tolichowki/Picture1.jpg"),
          require("../assets/gallery/Honda/Tolichowki/Picture2.jpg"),
          require("../assets/gallery/Honda/Tolichowki/Picture3.jpg"),
          require("../assets/gallery/Honda/Tolichowki/Picture4.jpg"),
          require("../assets/gallery/Honda/Tolichowki/Picture5.jpg"),
          require("../assets/gallery/Honda/Tolichowki/Picture6.jpg"),
        ],
      },
      {
        showroomName: "Masabtank Branch Show room Pictures",
        img: [
          require("../assets/gallery/Honda/Masabtank/Picture1.jpg"),
          require("../assets/gallery/Honda/Masabtank/Picture2.jpg"),
          require("../assets/gallery/Honda/Masabtank/Picture3.jpg"),
          require("../assets/gallery/Honda/Masabtank/Picture4.jpg"),
          require("../assets/gallery/Honda/Masabtank/Picture5.jpg"),
          require("../assets/gallery/Honda/Masabtank/Picture6.jpg"),
        ],
      },
      {
        showroomName: "Manikonda Asc Pictures",
        img: [
          require("../assets/gallery/Honda/Manikonda/Picture1.jpg"),
          require("../assets/gallery/Honda/Manikonda/Picture2.jpg"),
          require("../assets/gallery/Honda/Manikonda/Picture3.jpg"),
          require("../assets/gallery/Honda/Manikonda/Picture4.jpg"),
          require("../assets/gallery/Honda/Manikonda/Picture5.jpg"),
          require("../assets/gallery/Honda/Manikonda/Picture6.jpg"),
        ],
      },
      {
        showroomName: "Chevella Asc Show room Pictures",
        img: [
          require("../assets/gallery/Honda/Chevella/Picture1.jpg"),
          require("../assets/gallery/Honda/Chevella/Picture2.jpg"),
          require("../assets/gallery/Honda/Chevella/Picture3.jpg"),
          require("../assets/gallery/Honda/Chevella/Picture4.jpg"),
          require("../assets/gallery/Honda/Chevella/Picture5.jpg"),
          require("../assets/gallery/Honda/Chevella/Picture6.jpg"),
        ],
      },
      {
        showroomName: "Moinabad",
        img: [
          require("../assets/gallery/Honda/Moinabad/Picture1.jpg"),
          require("../assets/gallery/Honda/Moinabad/Picture2.jpg"),
          require("../assets/gallery/Honda/Moinabad/Picture3.jpg"),
          require("../assets/gallery/Honda/Moinabad/Picture4.jpg"),
        ],
      },
    ],
  },
  {
    name: "Tata",
    images: [
      {
        showroomName: "No images",
        img: [require("../assets/gallery/Honda/Masabtank/Picture1.jpg")],
      },
    ],
  },

  {
    name: "Kawasaki",
    images: [
      {
        showroomName: "Kawasaki",
        img: [
          require("../assets/gallery/Kawasaki/hyd ikm sales.jpeg"),
          require("../assets/gallery/Kawasaki/hyd ikm service.jpeg"),
          require("../assets/gallery/Kawasaki/vijayawada ikm showroom.jpeg"),
          require("../assets/gallery/Kawasaki/vizag ikm showroom.jpeg"),
          require("../assets/gallery/Kawasaki/vijayawada ikm service.jpeg"),
        ],
      },
    ],
  },
  {
    name: "Jeep",
    images: [
      {
        showroomName: "Vizag Jeep",
        img: [
          require("../assets/gallery/Jeep/vizag jeep showroom.jpg"),
          require("../assets/gallery/Jeep/vizag ikm service.jpeg"),
        ],
      },
    ],
  },
  {
    name: "Harely Davidson",
    images: [
      {
        showroomName: "Harely Davidson",
        img: [
          require("../assets/gallery/Harely/harly vjy showroom.jpeg"),
          require("../assets/gallery/Harely/harly vjy service.jpeg"),
        ],
      },
    ],
  },
];
