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
        "price": "$7,834"
      },
      {
        "index": "1.56",
        "brand": "ORGANICO BLUE LIGHT C/AR",
        "name": "Organico Blue Light Cut c/ Antirreflex",
        "type": "Rango Extendido",
        "params": "Esf/Cil +4.00 / -4.00 // -4.00 / -4.00",
        "price": "$17,057"
      },
      {
        "index": "1.60",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Stock",
        "params": "Esf +/- 6.00 // Esf/Cil +4.00 / +2.00 // -6.00 / +2.00",
        "price": "$24,166",
        "featured": true
      },
      {
        "index": "1.60",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Rango Extendido",
        "params": "Esf/Cil -10.00 / -2.00 // +6.00 / -4.00 // -7.00 / -4.00",
        "price": "$26,958",
        "featured": true
      },
      {
        "index": "1.74",
        "brand": "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        "name": "Organico Super Blue Asférico c/ Antirreflex Super Hidrofóbico",
        "type": "Rango Extendido Plus",
        "params": "Esf/Cil -10.25 / -2.00 // -12.00 / -2.00 // -12.25 / -15.00",
        "price": "$253,024",
        "featured": true
      },
      {
        "index": "1.56",
        "brand": "ORGANICO FOTOCROMATICO C/AR",
        "name": "Organico Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$21,786"
      },
      {
        "index": "1.56",
        "brand": "ORGANICO FOTOCROMATICO BLUE C/AR",
        "name": "Blue Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$48,336"
      },
      {
        "index": "1.60",
        "brand": "ORGANICO FOTOCROMATICO BLUE C/AR",
        "name": "Super Blue Fotocromático Gris c/ Antirreflex",
        "type": "Stock",
        "params": "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        "price": "$76,897"
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
        "traditionalPrice": "$44,307",
        "digitalPrice": "$69,397"
      },
      {
        "name": "1.56 Orgánico Blue Light c/ Antirreflex Block",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$69,681",
        "digitalPrice": "$104,182"
      },
      {
        "name": "1.60 Orgánico Super Blue Light",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$79,534",
        "digitalPrice": "$118,910"
      },
      {
        "name": "1.60 Orgánico Super Blue Light c/ Antirreflex Block",
        "sphRange": "+8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$104,545",
        "digitalPrice": "$156,305"
      },
      {
        "name": "1.56 Orgánico Fotocromático Gris",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$65,407",
        "digitalPrice": "$97,789"
      },
      {
        "name": "1.56 Orgánico Fotocromático BLUE",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$91,415",
        "digitalPrice": "$143,183"
      },
      {
        "name": "1.56 Orgánico Fotocromático BLUE c/ Antirreflex Block",
        "sphRange": "8.00 a -12.00",
        "cylRange": "+/- 6.00",
        "traditionalPrice": "$111,515",
        "digitalPrice": "$175,108"
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
        "traditionalPrice": "$143,388",
        "digitalPrice": "$182,703"
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
        "price": "$49,723",
        "group": "Bifocales Flap Top"
      },
      {
        "name": "Bif. Flap Top Orgánico Fotocromático Gris",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$69,982",
        "group": "Bifocales Flap Top"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Cut",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$75,433",
        "group": "Bifocal Digital Invisible"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Cut c/ Antirreflex",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$97,155",
        "group": "Bifocal Digital Invisible"
      },
      {
        "name": "Bif. Kriptock Invisible Organico Blue Light Fotocromático Gris",
        "sphRange": "+5.50 a -4.00",
        "cylRange": "+/- 4.00",
        "addRange": "1.00 a 3.50",
        "price": "$101,370",
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
        "one": "$82,272",
        "new": "$128,377",
        "free": "$179,730",
        "pro": "$198,181"
      },
      {
        "name": "Orgánico BLUE LIGHT c/ Antirreflex Block",
        "index": "1.56",
        "one": "$105,899",
        "new": "$151,311",
        "free": "$202,662",
        "pro": "$221,113"
      },
      {
        "name": "Org Fotocromático Grey",
        "index": "1.56",
        "one": "$98,248",
        "new": "$152,020",
        "free": "$212,826",
        "pro": "$234,677"
      },
      {
        "name": "Org Fotocromático Grey c/ Antirreflex Block",
        "index": "1.56",
        "one": "$121,181",
        "new": "$174,952",
        "free": "$235,759",
        "pro": "$257,609"
      },
      {
        "name": "Org Fotocromático BLUELIGHT Grey",
        "index": "1.56",
        "one": "$120,016",
        "new": "$185,694",
        "free": "$241,393",
        "pro": "$266,194"
      },
      {
        "name": "Org Fotocromático BLUELIGHT",
        "index": "1.56",
        "one": "$142,948",
        "new": "$208,626",
        "free": "$264,325",
        "pro": "$289,358"
      },
      {
        "name": "Policarbonato BLUE LIGHT",
        "index": "1.59",
        "one": "$109,334",
        "new": "$169,170",
        "free": "$236,838",
        "pro": "$261,155"
      },
      {
        "name": "Orgánico Super BlueLight",
        "index": "1.60",
        "one": "$102,997",
        "new": "$130,534",
        "free": "$182,748",
        "pro": "$201,515"
      },
      {
        "name": "Orgánico Super BlueLight c/ Antirreflex Block",
        "index": "1.60",
        "one": "$124,889",
        "new": "$152,426",
        "free": "$204,640",
        "pro": "$223,407"
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
        "price": "$69,511"
      },
      {
        "name": "Orgánico Blue Light c/ Antirreflex Block",
        "index": "1.56",
        "price": "$92,444"
      },
      {
        "name": "Orgánico Blanco Alto Índice",
        "index": "1.60",
        "price": "$81,148"
      },
      {
        "name": "Orgánico Super Blue Light c/ Antirreflex Block",
        "index": "1.60",
        "price": "$99,171"
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
        "price": "$63,426"
      },
      {
        "name": "Antireflejo SMART Element",
        "price": "$45,865"
      },
      {
        "name": "Teñido Compacto",
        "price": "$9,709"
      },
      {
        "name": "Teñido Degradé",
        "price": "$10,991"
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
        "fullRim": "$3,088",
        "grooved": "$4,834",
        "drilled": "$10,384"
      },
      {
        "name": "ORGANICO LABORATORIO",
        "fullRim": "$5,174",
        "grooved": "$6,729",
        "drilled": "$16,140"
      },
      {
        "name": "PASE DE CRISTALES (Precio Único)",
        "fullRim": "$7,416",
        "grooved": "-",
        "drilled": "-"
      }
    ]
  }
};
