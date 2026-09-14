const PRICING_DATA = {
  "stock": {
    "title": "Lentes de Stock Rango Extendido",
    "description": "Lentes monofocales listos para entrega inmediata o en rango extendido de stock.",
    "headers": [
      "Descripción",
      "Rango/Tipo",
      "Parámetros de Graduación",
      "Precio"
    ],
    "items": [
      {
        "index": "1.56",
        "brand": "ORGANICO BLUE LIGHT C/AR",
        "name": "Organico Blue Light Cut c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 6.00 // Esf/Cil +6.00 / -2.00 // -6.00 / +2.00",
        "price": "$7,684"
      },
      {
        "index": "1.56",
        "brand": "ORGANICO BLUE LIGHT C/AR",
        "name": "Organico Blue Light Cut c/ Antirreflex",
        "type": "Rango Extendido",
        "params": "Esf/Cil +4.00 / -4.00 // -4.00 / -4.00",
        "price": "$16,730"
      },
      {
        "index": "1.60",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Stock",
        "params": "Esf +/- 6.00 // Esf/Cil +4.00 / +2.00 // -6.00 / +2.00",
        "price": "$23,704",
        "featured": true
      },
      {
        "index": "1.60",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Rango Extendido",
        "params": "Esf/Cil -10.00 / -2.00 // +6.00 / -4.00 // -7.00 / -4.00",
        "price": "$26,442",
        "featured": true
      },
      {
        "index": "1.74",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Rango Extendido Plus",
        "params": "Esf/Cil -10.25 / -2.00 // -12.00 / -2.00 // -12.25 / -15.00",
        "price": "$248,178",
        "featured": true
      },
      {
        "index": "1.56",
        "brand": "ORGANICO FOTOCROMATICO C/AR",
        "name": "Organico Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$21,369"
      },
      {
        "index": "1.56",
        "brand": "ORGANICO FOTOCROMATICO BLUE C/AR",
        "name": "Blue Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$47,410"
      },
      {
        "index": "1.60",
        "brand": "ORGANICO FOTOCROMATICO BLUE C/AR",
        "name": "Super Blue Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$75,424"
      }
    ]
  },
  "monofocal_lab": {
    "title": "Monofocal Laboratorio",
    "description": "Lentes monofocales fabricadas a medida en laboratorio. Diferencia de precio según método de tallado.",
    "headers": [
      "Descripción",
      "Rango Esférico",
      "Rango Cilíndrico",
      "Tallado Tradicional CNC",
      "Tallado Digital"
    ],
    "items": [
      {
        "name": "1.56 Orgánico Blue Light",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$43,458",
        "digitalPrice": "$68,068"
      },
      {
        "name": "1.56 Orgánico Blue Light c/ Antirreflex Block",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$68,347",
        "digitalPrice": "$102,186"
      },
      {
        "name": "1.60 Orgánico Super Blue Light",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$78,011",
        "digitalPrice": "$116,633"
      },
      {
        "name": "1.60 Orgánico Super Blue Light c/ Antirreflex Block",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$102,542",
        "digitalPrice": "$153,311"
      },
      {
        "name": "1.56 Orgánico Fotocromático Gris",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$64,153",
        "digitalPrice": "$95,916"
      },
      {
        "name": "1.56 Orgánico Fotocromático BLUE",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$89,664",
        "digitalPrice": "$140,440"
      },
      {
        "name": "1.56 Orgánico Fotocromático BLUE c/ Antirreflex Block",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$109,379",
        "digitalPrice": "$171,754"
      },
      {
        "name": "1.56 Orgánico Fotocromático Smart Color",
        "colors": [
          "Brown",
          "Green",
          "Blue",
          "Pink",
          "Purple"
        ],
        "sphRange": "+5.00 a -8.00",
        "cylRange": "+/- 5.00",
        "traditionalPrice": "$140,641",
        "digitalPrice": "$179,204"
      }
    ]
  },
  "bifocal": {
    "title": "Bifocal",
    "description": "Lentes de laboratorio con dos focos para visión lejana y cercana.",
    "headers": [
      "Descripción",
      "Rango Esférico",
      "Rango Cilíndrico",
      "Rango Adición",
      "Precio"
    ],
    "items": [
      {
        "name": "Bif. Flap Top Orgánico Blue Light Cut",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$48,771",
        "group": "Bifocales Flap Top"
      },
      {
        "name": "Bif. Flap Top Orgánico Fotocromático Gris",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$68,641",
        "group": "Bifocales Flap Top"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Cut",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$73,988",
        "group": "Bifocal Digital Invisible"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Cut c/ Antirreflex",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$95,294",
        "group": "Bifocal Digital Invisible"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Fotocromático Gris",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$99,428",
        "group": "Bifocal Digital Invisible"
      }
    ]
  },
  "multifocal_digital": {
    "title": "Multifocales Digitales",
    "description": "Lentes progresivas de tallado digital con tecnologías adaptadas a diferentes exigencias.",
    "headers": [
      "Descripción",
      "Índice",
      "ONE (HD Clásico)",
      "NEW (HD Plus)",
      "FREE (HD Premium)",
      "PRO (HD Élite)"
    ],
    "subheaders": {
      "ONE (HD Clásico)": "El punto de entrada a la tecnología digital.",
      "NEW (HD Plus)": "Mejora en la amplitud del corredor visual.",
      "FREE (HD Premium)": "Minimización de aberraciones laterales y transición suave.",
      "PRO (HD Élite)": "Tallado de máxima precisión, diseño personalizado."
    },
    "items": [
      {
        "name": "Orgánico BLUE LIGHT",
        "index": "1.56",
        "one": "$80,696",
        "new": "$125,918",
        "free": "$176,286",
        "pro": "$194,385"
      },
      {
        "name": "Orgánico BLUE LIGHT c/ Antirreflex Block",
        "index": "1.56",
        "one": "$103,870",
        "new": "$148,413",
        "free": "$198,780",
        "pro": "$216,878"
      },
      {
        "name": "Org Fotocromático Grey",
        "index": "1.56",
        "one": "$96,366",
        "new": "$149,108",
        "free": "$208,750",
        "pro": "$230,181"
      },
      {
        "name": "Org Fotocromático Grey c/ Antirreflex Block",
        "index": "1.56",
        "one": "$118,860",
        "new": "$171,601",
        "free": "$231,243",
        "pro": "$252,674"
      },
      {
        "name": "Org Fotocromático BLUELIGHT Grey",
        "index": "1.56",
        "one": "$117,717",
        "new": "$182,137",
        "free": "$236,769",
        "pro": "$261,095"
      },
      {
        "name": "Org Fotocromático BLUELIGHT",
        "index": "1.56",
        "one": "$140,210",
        "new": "$204,630",
        "free": "$259,262",
        "pro": "$283,815"
      },
      {
        "name": "Policarbonato BLUE LIGHT",
        "index": "1.59",
        "one": "$107,239",
        "new": "$165,929",
        "free": "$232,301",
        "pro": "$256,152"
      },
      {
        "name": "Orgánico Super BlueLight",
        "index": "1.60",
        "one": "$101,024",
        "new": "$128,034",
        "free": "$179,248",
        "pro": "$197,655"
      },
      {
        "name": "Orgánico Super BlueLight c/ Antirreflex Block",
        "index": "1.60",
        "one": "$122,497",
        "new": "$149,507",
        "free": "$200,721",
        "pro": "$219,127"
      }
    ]
  },
  "ocupacional_digital": {
    "title": "Ocupacional Digital",
    "description": "Lentes diseñadas para trabajo en oficina y pantallas a distancias intermedias y cercanas.",
    "headers": [
      "Descripción",
      "Índice",
      "Precio"
    ],
    "items": [
      {
        "name": "Orgánico Blue Light",
        "index": "1.56",
        "price": "$68,180"
      },
      {
        "name": "Orgánico Blue Light c/ Antirreflex Block",
        "index": "1.56",
        "price": "$90,673"
      },
      {
        "name": "Orgánico Blanco Alto Índice",
        "index": "1.60",
        "price": "$79,594"
      },
      {
        "name": "Orgánico Super Blue Light c/ Antirreflex Block",
        "index": "1.60",
        "price": "$97,271"
      }
    ]
  },
  "tratamientos": {
    "title": "Tratamientos Adicionales",
    "description": "Capas y filtros adicionales aplicables a las lentes.",
    "headers": [
      "Nombre del Tratamiento/Filtro",
      "Precio"
    ],
    "items": [
      {
        "name": "Antireflejo SMART Ultra Layer",
        "price": "$62,211"
      },
      {
        "name": "Antireflejo SMART Element",
        "price": "$44,986"
      },
      {
        "name": "Teñido Compacto",
        "price": "$9,523"
      },
      {
        "name": "Teñido Degradé",
        "price": "$10,780"
      }
    ]
  },
  "calibrados_trabajos": {
    "title": "Calibrados y Trabajos de Taller",
    "description": "Montaje, biselado y acabados especiales para armar los anteojos.",
    "headers": [
      "Tipo de Cristal",
      "Aro Completo",
      "Ranurado",
      "Perforado"
    ],
    "items": [
      {
        "name": "ORGANICO STOCK",
        "fullRim": "$3,028",
        "grooved": "$4,741",
        "drilled": "$10,184"
      },
      {
        "name": "ORGANICO LABORATORIO",
        "fullRim": "$5,075",
        "grooved": "$6,600",
        "drilled": "$15,831"
      },
      {
        "name": "PASE DE CRISTALES (Precio Único)",
        "fullRim": "$7,275",
        "grooved": "-",
        "drilled": "-"
      }
    ]
  }
};
