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
        "price": "$7,249"
      },
      {
        "index": "1.56",
        "brand": "ORGANICO BLUE LIGHT C/AR",
        "name": "Organico Blue Light Cut c/ Antirreflex",
        "type": "Rango Extendido",
        "params": "Esf/Cil +4.00 / -4.00 // -4.00 / -4.00",
        "price": "$15,783"
      },
      {
        "index": "1.60",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Stock",
        "params": "Esf +/- 6.00 // Esf/Cil +4.00 / +2.00 // -6.00 / +2.00",
        "price": "$22,362",
        "featured": true
      },
      {
        "index": "1.60",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Rango Extendido",
        "params": "Esf/Cil -10.00 / -2.00 // +6.00 / -4.00 // -7.00 / -4.00",
        "price": "$24,945",
        "featured": true
      },
      {
        "index": "1.74",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Rango Extendido Plus",
        "params": "Esf/Cil -10.25 / -2.00 // -12.00 / -2.00 // -12.25 / -15.00",
        "price": "$234,130",
        "featured": true
      },
      {
        "index": "1.56",
        "brand": "ORGANICO FOTOCROMATICO C/AR",
        "name": "Organico Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$20,159"
      },
      {
        "index": "1.56",
        "brand": "ORGANICO FOTOCROMATICO BLUE C/AR",
        "name": "Blue Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$44,726"
      },
      {
        "index": "1.60",
        "brand": "ORGANICO FOTOCROMATICO BLUE C/AR",
        "name": "Super Blue Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$71,155"
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
        "traditionalPrice": "$40,998",
        "digitalPrice": "$64,215"
      },
      {
        "name": "1.56 Orgánico Blue Light c/ Antirreflex Block",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$64,478",
        "digitalPrice": "$96,402"
      },
      {
        "name": "1.60 Orgánico Super Blue Light",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$73,595",
        "digitalPrice": "$110,031"
      },
      {
        "name": "1.60 Orgánico Super Blue Light c/ Antirreflex Block",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$96,738",
        "digitalPrice": "$144,633"
      },
      {
        "name": "1.56 Orgánico Fotocromático Gris",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$60,522",
        "digitalPrice": "$90,487"
      },
      {
        "name": "1.56 Orgánico Fotocromático BLUE",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$84,589",
        "digitalPrice": "$132,491"
      },
      {
        "name": "1.56 Orgánico Fotocromático BLUE c/ Antirreflex Block",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$103,188",
        "digitalPrice": "$162,032"
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
        "traditionalPrice": "$132,680",
        "digitalPrice": "$169,060"
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
        "price": "$46,010",
        "group": "Bifocales Flap Top"
      },
      {
        "name": "Bif. Flap Top Orgánico Fotocromático Gris",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$64,756",
        "group": "Bifocales Flap Top"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Cut",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$69,800",
        "group": "Bifocal Digital Invisible"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Cut c/ Antirreflex",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$89,900",
        "group": "Bifocal Digital Invisible"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Fotocromático Gris",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$93,800",
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
        "one": "$76,128",
        "new": "$118,791",
        "free": "$166,308",
        "pro": "$183,382"
      },
      {
        "name": "Orgánico BLUE LIGHT c/ Antirreflex Block",
        "index": "1.56",
        "one": "$97,991",
        "new": "$140,012",
        "free": "$187,528",
        "pro": "$204,602"
      },
      {
        "name": "Org Fotocromático Grey",
        "index": "1.56",
        "one": "$90,911",
        "new": "$140,668",
        "free": "$196,934",
        "pro": "$217,152"
      },
      {
        "name": "Org Fotocromático Grey c/ Antirreflex Block",
        "index": "1.56",
        "one": "$112,132",
        "new": "$161,888",
        "free": "$218,154",
        "pro": "$238,372"
      },
      {
        "name": "Org Fotocromático BLUELIGHT Grey",
        "index": "1.56",
        "one": "$111,054",
        "new": "$171,827",
        "free": "$223,367",
        "pro": "$246,316"
      },
      {
        "name": "Org Fotocromático BLUELIGHT",
        "index": "1.56",
        "one": "$132,274",
        "new": "$193,047",
        "free": "$244,587",
        "pro": "$267,750"
      },
      {
        "name": "Policarbonato BLUE LIGHT",
        "index": "1.59",
        "one": "$101,169",
        "new": "$156,537",
        "free": "$219,152",
        "pro": "$241,653"
      },
      {
        "name": "Orgánico Super BlueLight",
        "index": "1.60",
        "one": "$95,306",
        "new": "$120,787",
        "free": "$169,102",
        "pro": "$186,467"
      },
      {
        "name": "Orgánico Super BlueLight c/ Antirreflex Block",
        "index": "1.60",
        "one": "$115,563",
        "new": "$141,044",
        "free": "$189,359",
        "pro": "$206,724"
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
        "price": "$64,321"
      },
      {
        "name": "Orgánico Blue Light c/ Antirreflex Block",
        "index": "1.56",
        "price": "$85,541"
      },
      {
        "name": "Orgánico Blanco Alto Índice",
        "index": "1.60",
        "price": "$75,089"
      },
      {
        "name": "Orgánico Super Blue Light c/ Antirreflex Block",
        "index": "1.60",
        "price": "$91,765"
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
        "price": "$58,690"
      },
      {
        "name": "Antireflejo SMART Element",
        "price": "$42,440"
      },
      {
        "name": "Teñido Compacto",
        "price": "$8,984"
      },
      {
        "name": "Teñido Degradé",
        "price": "$10,170"
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
        "fullRim": "$2,857",
        "grooved": "$4,473",
        "drilled": "$9,608"
      },
      {
        "name": "ORGANICO LABORATORIO",
        "fullRim": "$4,788",
        "grooved": "$6,226",
        "drilled": "$14,935"
      },
      {
        "name": "PASE DE CRISTALES (Precio Único)",
        "fullRim": "$6,863",
        "grooved": "-",
        "drilled": "-"
      }
    ]
  }
};
