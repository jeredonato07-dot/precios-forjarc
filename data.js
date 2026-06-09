const PRICING_DATA = {
  stock: {
    title: "Lentes de Stock Rango Extendido",
    description: "Lentes monofocales listos para entrega inmediata o en rango extendido de stock.",
    headers: ["Descripción", "Precio", "Parámetros de Graduación"],
    items: [
      {
        index: "1.56",
        brand: "ORGANICO BLUE LIGHT C/AR",
        name: "Organico Blue Light Cut con Antirreflex",
        type: "Stock",
        params: "Esf +/- 6.00 // Esf/Cil +6.00 / -2.00 // -6.00 / +2.00",
        price: "$6,775"
      },
      {
        index: "1.56",
        brand: "ORGANICO BLUE LIGHT C/AR",
        name: "Organico Blue Light Cut con Antirreflex",
        type: "Rango Extendido",
        params: "Esf/Cil +4.00 / -4.00 // -4.00 / -4.00",
        price: "$14,750"
      },
      {
        index: "1.60",
        brand: "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        name: "Organico Super Blue Asférico C/AR Super Hidrofóbico",
        type: "Stock",
        params: "Esf +/- 6.00 // Esf/Cil +4.00 / +2.00 // -6.00 / +2.00",
        price: "$20,899",
        featured: true
      },
      {
        index: "1.60",
        brand: "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        name: "Organico Super Blue Asférico C/AR Super Hidrofóbico",
        type: "Rango Extendido",
        params: "Esf/Cil -10.00 / -2.00 // +6.00 / -4.00 // -7.00 / -4.00",
        price: "$23,313",
        featured: true
      },
      {
        index: "1.74",
        brand: "ORGANICO SUPER BLUE 1.60 ASFERICO AR SUPER HIDROFOBICO",
        name: "Organico Super Blue Asférico C/AR Super Hidrofóbico",
        type: "Rango Extendido Plus",
        params: "Esf/Cil -10.25 / -2.00 // -12.00 / -2.00 // -12.25 / -15.00",
        price: "$218,813",
        featured: true
      },
      {
        index: "1.56",
        brand: "ORGANICO FOTOCROMATICO C/AR",
        name: "Organico Fotocromático C/AR Gris",
        type: "Stock",
        params: "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        price: "$18,840"
      },

      {
        index: "1.56",
        brand: "ORGANICO FOTOCROMATICO BLUE C/AR",
        name: "Blue Fotocromático C/AR Gris",
        type: "Stock",
        params: "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        price: "$41,800"
      },
      {
        index: "1.60",
        brand: "ORGANICO FOTOCROMATICO BLUE C/AR",
        name: "Super Blue Fotocromático C/AR Gris",
        type: "Stock",
        params: "Esf +/- 4.00 // Esf/Cil +4.00 / -2.00 // -4.00 / +2.00",
        price: "$66,500"
      }
    ]
  },
  monofocal_lab: {
    title: "Monofocal Laboratorio",
    description: "Lentes monofocales fabricadas a medida en laboratorio. Diferencia de precio según método de tallado.",
    headers: ["Descripción", "Tallado Tradicional CNC", "Tallado Digital", "Rango Esférico", "Rango Cilíndrico"],
    items: [
      {
        name: "1.56 Orgánico Blue Light",
        sphRange: "+8.00 a -12.00",
        cylRange: "+/- 6.00",
        traditionalPrice: "$38,316",
        digitalPrice: "$60,014"
      },
      {
        name: "1.56 Orgánico Blue Light Antirreflex BLOCK",
        sphRange: "+8.00 a -12.00",
        cylRange: "+/- 6.00",
        traditionalPrice: "$60,260",
        digitalPrice: "$90,095"
      },
      {
        name: "1.60 Orgánico Super Blue Light",
        sphRange: "+8.00 a -12.00",
        cylRange: "+/- 6.00",
        traditionalPrice: "$68,780",
        digitalPrice: "$102,833"
      },
      {
        name: "1.60 Orgánico Super Blue Light Antirreflex BLOCK",
        sphRange: "+8.00 a -12.00",
        cylRange: "+/- 6.00",
        traditionalPrice: "$90,409",
        digitalPrice: "$135,171"
      },
      {
        name: "1.56 Orgánico Fotocromático Gris",
        sphRange: "8.00 a -12.00",
        cylRange: "+/- 6.00",
        traditionalPrice: "$56,563",
        digitalPrice: "$84,567"
      },
      {
        name: "1.56 Orgánico Fotocromático BLUE",
        sphRange: "8.00 a -12.00",
        cylRange: "+/- 6.00",
        traditionalPrice: "$79,055",
        digitalPrice: "$123,823"
      },
      {
        name: "1.56 Orgánico Fotocromático BLUE Antirreflex BLOCK",
        sphRange: "8.00 a -12.00",
        cylRange: "+/- 6.00",
        traditionalPrice: "$96,437",
        digitalPrice: "$151,432"
      },
      {
        name: "1.56 Orgánico Fotocromático Smart Color",
        colors: ["Brown", "Green", "Blue", "Pink", "Purple"],
        sphRange: "+5.00 a -8.00",
        cylRange: "+/- 5.00",
        traditionalPrice: "$124,000",
        digitalPrice: "$158,000"
      }
    ]
  },
  bifocal: {
    title: "Bifocal",
    description: "Lentes de laboratorio con dos focos para visión lejana y cercana.",
    headers: ["Descripción", "Precio", "Rango Esférico", "Rango Cilíndrico", "Rango Adición"],
    items: [
      {
        name: "Orgánico Blue Light Cut",
        sphRange: "+5.50 a -4.00",
        cylRange: "+/- 4.00",
        addRange: "1.00 a 3.50",
        price: "$43,000"
      },
      {
        name: "Orgánico Fotocromático",
        sphRange: "+5.50 a -4.00",
        cylRange: "+/- 4.00",
        addRange: "1.00 a 3.50",
        price: "$60,520"
      }
    ]
  },
  multifocal_digital: {
    title: "Multifocales Digitales",
    description: "Lentes progresivas de tallado digital con tecnologías adaptadas a diferentes exigencias.",
    headers: ["Descripción", "ONE (HD Clásico)", "NEW (HD Plus)", "FREE (HD Premium)", "PRO (HD Élite)"],
    subheaders: {
      "ONE (HD Clásico)": "El punto de entrada a la tecnología digital.",
      "NEW (HD Plus)": "Mejora en la amplitud del corredor visual.",
      "FREE (HD Premium)": "Minimización de aberraciones laterales y transición suave.",
      "PRO (HD Élite)": "Tallado de máxima precisión, diseño personalizado."
    },
    items: [
      {
        name: "Orgánico BLUE LIGHT",
        index: "1.56",
        one: "$71,148",
        new: "$111,020",
        free: "$155,428",
        pro: "$171,385"
      },
      {
        name: "Orgánico BLUE LIGHT ANTIRREFLEX BLOCK",
        index: "1.56",
        one: "$91,580",
        new: "$130,852",
        free: "$175,260",
        pro: "$191,217"
      },
      {
        name: "Org Fotocromático Grey",
        index: "1.56",
        one: "$84,964",
        new: "$131,465",
        free: "$184,050",
        pro: "$202,946"
      },
      {
        name: "Org Fotocromático Grey ANTIRREFLEX BLOCK",
        index: "1.56",
        one: "$104,796",
        new: "$151,297",
        free: "$203,882",
        pro: "$222,778"
      },
      {
        name: "Org Fotocromático BLUELIGHT Grey",
        index: "1.56",
        one: "$103,789",
        new: "$160,586",
        free: "$208,754",
        pro: "$230,202"
      },
      {
        name: "Org Fotocromático BLUELIGHT",
        index: "1.56",
        one: "$123,621",
        new: "$180,418",
        free: "$228,586",
        pro: "$250,234"
      },
      {
        name: "Policarbonato BLUE LIGHT",
        index: "1.59",
        one: "$94,550",
        new: "$146,296",
        free: "$204,815",
        pro: "$225,844"
      },
      {
        name: "Orgánico Super BlueLight",
        index: "1.60",
        one: "$89,071",
        new: "$112,885",
        free: "$158,039",
        pro: "$174,268"
      },
      {
        name: "Orgánico Super BlueLight ANTIRREFLEX BLOCK",
        index: "1.60",
        one: "$108,003",
        new: "$131,817",
        free: "$176,971",
        pro: "$193,200"
      }
    ]
  },
  ocupacional_digital: {
    title: "Ocupacional Digital",
    description: "Lentes diseñadas para trabajo en oficina y pantallas a distancias intermedias y cercanas.",
    headers: ["Descripción", "Precio"],
    items: [
      {
        name: "Orgánico Blue Light",
        index: "1.56",
        price: "$60,113"
      },
      {
        name: "Orgánico Blue Light, ANTIRREFLEX BLOCK",
        index: "1.56",
        price: "$79,945"
      },
      {
        name: "Orgánico Blanco Alto Índice",
        index: "1.60",
        price: "$70,177"
      },
      {
        name: "Orgánico Super Blue Light ANTIRREFLEX BLOCK",
        index: "1.60",
        price: "$85,762"
      }
    ]
  },
  tratamientos: {
    title: "Tratamientos Adicionales",
    description: "Capas y filtros adicionales aplicables a las lentes.",
    headers: ["Nombre del Tratamiento/Filtro", "Precio"],
    items: [
      {
        name: "Antireflejo SMART Ultra Layer",
        price: "$54,850"
      },
      {
        name: "Antireflejo SMART Element",
        price: "$39,664"
      },
      {
        name: "Teñido Compacto",
        price: "$8,396"
      },
      {
        name: "Teñido Degradé",
        price: "$9,505"
      }
    ]
  },
  calibrados_trabajos: {
    title: "Calibrados y Trabajos de Taller",
    description: "Montaje, biselado y acabados especiales para armar los anteojos.",
    headers: ["Tipo de Cristal", "Aro Completo", "Ranurado", "Perforado"],
    items: [
      {
        name: "ORGANICO STOCK",
        fullRim: "$2,670",
        grooved: "$4,180",
        drilled: "$8,979"
      },
      {
        name: "ORGANICO LABORATORIO",
        fullRim: "$4,475",
        grooved: "$5,819",
        drilled: "$13,958"
      },
      {
        name: "PASE DE CRISTALES (Precio Único)",
        fullRim: "$6,414",
        grooved: "-",
        drilled: "-"
      }
    ]
  }
};
