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
        "price": "$7,756"
      },
      {
        "index": "1.56",
        "brand": "ORGANICO BLUE LIGHT C/AR",
        "name": "Organico Blue Light Cut c/ Antirreflex",
        "type": "Rango Extendido",
        "params": "Esf/Cil +4.00 / -4.00 // -4.00 / -4.00",
        "price": "$16,888"
      },
      {
        "index": "1.60",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Stock",
        "params": "Esf +/- 6.00 // Esf/Cil +4.00 / +2.00 // -6.00 / +2.00",
        "price": "$23,927",
        "featured": true
      },
      {
        "index": "1.60",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Rango Extendido",
        "params": "Esf/Cil -10.00 / -2.00 // +6.00 / -4.00 // -7.00 / -4.00",
        "price": "$26,691",
        "featured": true
      },
      {
        "index": "1.74",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Rango Extendido Plus",
        "params": "Esf/Cil -10.25 / -2.00 // -12.00 / -2.00 // -12.25 / -15.00",
        "price": "$250,519",
        "featured": true
      },
      {
        "index": "1.56",
        "brand": "ORGANICO FOTOCROMATICO C/AR",
        "name": "Organico Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$21,570"
      },
      {
        "index": "1.56",
        "brand": "ORGANICO FOTOCROMATICO BLUE C/AR",
        "name": "Blue Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$47,857"
      },
      {
        "index": "1.60",
        "brand": "ORGANICO FOTOCROMATICO BLUE C/AR",
        "name": "Super Blue Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$76,136"
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
        "traditionalPrice": "$43,868",
        "digitalPrice": "$68,710"
      },
      {
        "name": "1.56 Orgánico Blue Light c/ Antirreflex Block",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$68,991",
        "digitalPrice": "$103,150"
      },
      {
        "name": "1.60 Orgánico Super Blue Light",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$78,747",
        "digitalPrice": "$117,733"
      },
      {
        "name": "1.60 Orgánico Super Blue Light c/ Antirreflex Block",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$103,510",
        "digitalPrice": "$154,757"
      },
      {
        "name": "1.56 Orgánico Fotocromático Gris",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$64,759",
        "digitalPrice": "$96,821"
      },
      {
        "name": "1.56 Orgánico Fotocromático BLUE",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$90,510",
        "digitalPrice": "$141,765"
      },
      {
        "name": "1.56 Orgánico Fotocromático BLUE c/ Antirreflex Block",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$110,411",
        "digitalPrice": "$173,374"
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
        "traditionalPrice": "$141,968",
        "digitalPrice": "$180,894"
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
        "price": "$49,231",
        "group": "Bifocales Flap Top"
      },
      {
        "name": "Bif. Flap Top Orgánico Fotocromático Gris",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$69,289",
        "group": "Bifocales Flap Top"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Cut",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$74,686",
        "group": "Bifocal Digital Invisible"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Cut c/ Antirreflex",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$96,193",
        "group": "Bifocal Digital Invisible"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Fotocromático Gris",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$100,366",
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
        "one": "$81,457",
        "new": "$127,106",
        "free": "$177,950",
        "pro": "$196,219"
      },
      {
        "name": "Orgánico BLUE LIGHT c/ Antirreflex Block",
        "index": "1.56",
        "one": "$104,850",
        "new": "$149,813",
        "free": "$200,655",
        "pro": "$218,924"
      },
      {
        "name": "Org Fotocromático Grey",
        "index": "1.56",
        "one": "$97,275",
        "new": "$150,515",
        "free": "$210,719",
        "pro": "$232,353"
      },
      {
        "name": "Org Fotocromático Grey c/ Antirreflex Block",
        "index": "1.56",
        "one": "$119,981",
        "new": "$173,220",
        "free": "$233,425",
        "pro": "$255,058"
      },
      {
        "name": "Org Fotocromático BLUELIGHT Grey",
        "index": "1.56",
        "one": "$118,828",
        "new": "$183,855",
        "free": "$239,003",
        "pro": "$263,558"
      },
      {
        "name": "Org Fotocromático BLUELIGHT",
        "index": "1.56",
        "one": "$141,533",
        "new": "$206,560",
        "free": "$261,708",
        "pro": "$286,493"
      },
      {
        "name": "Policarbonato BLUE LIGHT",
        "index": "1.59",
        "one": "$108,251",
        "new": "$167,495",
        "free": "$234,493",
        "pro": "$258,569"
      },
      {
        "name": "Orgánico Super BlueLight",
        "index": "1.60",
        "one": "$101,977",
        "new": "$129,242",
        "free": "$180,939",
        "pro": "$199,520"
      },
      {
        "name": "Orgánico Super BlueLight c/ Antirreflex Block",
        "index": "1.60",
        "one": "$123,652",
        "new": "$150,917",
        "free": "$202,614",
        "pro": "$221,195"
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
        "price": "$68,823"
      },
      {
        "name": "Orgánico Blue Light c/ Antirreflex Block",
        "index": "1.56",
        "price": "$91,529"
      },
      {
        "name": "Orgánico Blanco Alto Índice",
        "index": "1.60",
        "price": "$80,345"
      },
      {
        "name": "Orgánico Super Blue Light c/ Antirreflex Block",
        "index": "1.60",
        "price": "$98,189"
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
        "price": "$62,798"
      },
      {
        "name": "Antireflejo SMART Element",
        "price": "$45,411"
      },
      {
        "name": "Teñido Compacto",
        "price": "$9,613"
      },
      {
        "name": "Teñido Degradé",
        "price": "$10,882"
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
        "fullRim": "$3,057",
        "grooved": "$4,786",
        "drilled": "$10,281"
      },
      {
        "name": "ORGANICO LABORATORIO",
        "fullRim": "$5,123",
        "grooved": "$6,662",
        "drilled": "$15,980"
      },
      {
        "name": "PASE DE CRISTALES (Precio Único)",
        "fullRim": "$7,343",
        "grooved": "-",
        "drilled": "-"
      }
    ]
  }
};
