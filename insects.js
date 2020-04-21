var insectes = [
    {
        src: "img2/AbeilleNaine.webp",
        nom: "Abeille naine",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        quand_mois:"de mars à juillet",
        lieu: [0],
        price: "200",
        rarete: 0
    },
    {
        src: "img2/AcridaCinerea.webp",
        nom: "Acrida cinerea",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"8h - 19h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"d'avril à novembre",
        lieu: [1],
        price: "200",
        rarete: 0
    },
    {
        src: "img2/Agrias.webp",
        nom: "Agrias",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"d'avril à septembre",
        lieu: [0],
        price: "3000",
        rarete: 1
    },
    {
        src: "img2/AnaxNapolitain.webp",
        nom: "Anax napolitain",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"d'avril à octobre",
        lieu: [0],
        price: "230",
        rarete: 0
    },
    {
        src: "img2/Araignée.webp",
        nom: "Araignée",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 8h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [2],
        price: "600",
        rarete: 0
    },
    {
        src: "img2/AttacusAtlas.webp",
        nom: "Attacus Atlas",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 4h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"d'avril à septembre",
        lieu: [2],
        price: "3000",
        rarete: 1
    },
    {
        src: "img2/Bernard-lErmite.webp",
        nom: "Bernard-l'ermite",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 8h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [3],
        price: "1000",
        rarete: 1
    },
    {
        src: "img2/Bousier.webp",
        nom: "Bousier",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        quand_mois:"de décembre à février",
        lieu: [4],
        price: "2500",
        rarete: 1
    },
    {
        src: "img2/Bupreste.webp",
        nom: "Bupreste",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_mois:"d'avril à août",
        lieu: [2],
        price: "2400",
        rarete: 0
    },
    {
        src: "img2/CapricorneDesAgrumes.webp",
        nom: "Capricorne des agrumes",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [5],
        price: "350",
        rarete: 0
    },
    {
        src: "img2/Catacanthus.webp",
        nom: "Catacanthus",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 8h",
        month: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mars à octobre",
        lieu: [6],
        price: "1000",
        rarete: 0
    },/*
    {
        src: "img2/CétoineDorée.webp",
        nom: "Cétoine dorée",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"de juin à août",
        lieu: [2],
        price: "200",
        rarete: 0
    },*/
    {
        src: "img2/ChrysiridiaRhipheus.webp",
        nom: "Chrysiridia rhipheus",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 16h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"d'avril à septembre",
        lieu: [0],
        price: "2500",
        rarete: 1
    },
    {
        src: "img2/Cicindèle.webp",
        nom: "Cicindèle",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de février à octobre",
        lieu: [1],
        price: "1500",
        rarete: 1
    },
    {
        src: "img2/CigaleCercope.webp",
        nom: "Cigale cercope",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "250",
        rarete: 0
    },
    {
        src: "img2/CigaleCicadelle.webp",
        nom: "Cigale cicadelle",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        quand_mois:"d'août à septembre",
        lieu: [2],
        price: "400",
        rarete: 0
    },
    {
        src: "img2/CigaleGéante.webp",
        nom: "Cigale géante",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "500",
        rarete: 0
    },
    {
        src: "img2/CigaleHigurashi.webp",
        nom: "Cigale higurashi",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"4h - 8h / 16h - 19h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "550",
        rarete: 0
    },
    {
        src: "img2/CigaleHyalessa.webp",
        nom: "Cigale hyalessa",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "300",
        rarete: 0
    },
    {
        src: "img2/Citrin.webp",
        nom: "Citrin",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"4h - 19h",
        month: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        quand_mois:"de mars à juin et de septembre à octobre",
        lieu: [0],
        price: "160",
        rarete: 0
    },
    {
        src: "img2/Cloporte.webp",
        nom: "Cloporte",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        quand_heure:"23h - 16h",
        month: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        quand_mois:"de septembre à juin",
        lieu: [7],
        price: "250",
        rarete: 0
    },
    {
        src: "img2/Coccinelle.webp",
        nom: "Coccinelle",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        quand_mois:"de mars à juin et en octobre",
        lieu: [6],
        price: "200",
        rarete: 0
    },
    {
        src: "img2/Cordulégastre.webp",
        nom: "Cordulégastre",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mai à octobre",
        lieu: [0],
        price: "4500",
        rarete: 0
    },
    {
        src: "img2/Criquet.webp",
        nom: "Criquet",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"8h - 19h",
        month: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        quand_mois:"d'août à novembre",
        lieu: [1],
        price: "400",
        rarete: 0
    },
    {
        src: "img2/CriquetPèlerin.webp",
        nom: "Criquet pèlerin",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"8h - 19h",
        month: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        quand_mois:"d'août à novembre",
        lieu: [1],
        price: "600",
        rarete: 0
    },
    {
        src: "img2/Demoiselle.webp",
        nom: "Demoiselle",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        quand_mois:"de novembre à février",
        lieu: [0],
        price: "500",
        rarete: 0
    },
    {
        src: "img2/Dytique.webp",
        nom: "Dytique",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"8h - 19h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de mai à septembre",
        lieu: [8],
        price: "800",
        rarete: 0
    },
    {
        src: "img2/Escargot.webp",
        nom: "Escargot",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [7,9],
        price: "250",
        rarete: 0
    },
    {
        src: "img2/Fourmi.webp",
        nom: "Fourmi",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [10],
        price: "80",
        rarete: 0
    },
    {
        src: "img2/Geotrupidae.webp",
        nom: "Geotrupidae",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juillet à septembre",
        lieu: [2],
        price: "300",
        rarete: 0
    },/*
    {
        src: "img2/GrandPapillonPourpre.webp",
        nom: "Grand papillon pourpre",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"4h - 19h",
        month: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"de mai à août",
        lieu: [0],
        price: "3000",
        rarete: 0
    },*/
    {
        src: "img2/GrandPlaneur.webp",
        nom: "Grand planeur",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"8h - 19h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [0],
        price: "1000",
        rarete: 1
    },
    {
        src: "img2/GraphiumSarpedon.webp",
        nom: "Graphium sarpedon",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"4h - 19h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_mois:"d'avril à août",
        lieu: [0],
        price: "300",
        rarete: 0
    },
    {
        src: "img2/GrillonDesPrès.webp",
        nom: "Grillon des prés",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        quand_mois:"de septembre à novembre",
        lieu: [1],
        price: "130",
        rarete: 0
    },
    {
        src: "img2/GrillonDuMidi.webp",
        nom: "Grillon du midi",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        quand_mois:"de septembre à octobre",
        lieu: [1],
        price: "430",
        rarete: 0
    },
    {
        src: "img2/Guêpe.webp",
        nom: "Guêpe",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [2],
        price: "2500",
        rarete: 1
    },
    {
        src: "img2/Ligie.webp",
        nom: "Ligie",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [3],
        price: "200",
        rarete: 0
    },
    {
        src: "img2/LucaneCerf-volant.webp",
        nom: "Lucane cerf-volant",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        quand_heure:"23h - 8h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "10000",
        rarete: 2
    },
    {
        src: "img2/LucaneCoprisIrisé.webp",
        nom: "Lucane copris irisé",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 8h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [2],
        price: "6000",
        rarete: 2
    },
    {
        src: "img2/LucaneCyclommatus.webp",
        nom: "Lucane cyclommatus",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [14],
        price: "8000",
        rarete: 2
    },
    {
        src: "img2/LucaneGirafe.webp",
        nom: "Lucane girafe",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "12000",
        rarete: 1
    },
    {
        src: "img2/LucaneInclinatus.webp",
        nom: "Lucane inclinatus",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "2000",
        rarete: 1
    },
    {
        src: "img2/LucaneLamprima.webp",
        nom: "Lucane lamprima",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [14],
        price: "12000",
        rarete: 2
    },
    {
        src: "img2/LucaneMiyama.webp",
        nom: "Lucane miyama",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "1000",
        rarete: 1
    },
    {
        src: "img2/Luciole.webp",
        nom: "Luciole",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 4h",
        month: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        quand_mois:"juin",
        lieu: [16],
        price: "300",
        rarete: 0
    },
    {
        src: "img2/Machaon.webp",
        nom: "Machaon",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"4h - 19h",
        month: [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de mars à septembre",
        lieu: [0],
        price: "240",
        rarete: 1
    },
    {
        src: "img2/ManteOrchidée.webp",
        nom: "Mante orchidée",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"de mars à novembre",
        lieu: [11],
        price: "2400",
        rarete: 1
    },
    {
        src: "img2/ManteReligieuse.webp",
        nom: "Mante religieuse",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"de mars à novembre",
        lieu: [6],
        price: "430",
        rarete: 0
    },
    {
        src: "img2/Mille-pattes.webp",
        nom: "Mille-pattes",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 23h",
        month: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        quand_mois:"de septembre à juin",
        lieu: [7],
        price: "300",
        rarete: 0
    },
    {
        src: "img2/Monarque.webp",
        nom: "Monarque",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"4h - 17h",
        month: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        quand_mois:"de septembre à novembre",
        lieu: [0],
        price: "140",
        rarete: 0
    },
    {
        src: "img2/Mormolyce.webp",
        nom: "Mormolyce",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
        quand_mois:"de mai à juin / de septembre à novembre",
        lieu: [5],
        price: "450",
        rarete: 0
    },
    {
        src: "img2/MorphoBleu.webp",
        nom: "Morpho bleu",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        quand_mois:"de juin à septembre et de décembre à mars",
        lieu: [0],
        price: "4000",
        rarete: 1
    },
    {
        src: "img2/Mouche.webp",
        nom: "Mouche",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [10],
        price: "60",
        rarete: 0
    },
    {
        src: "img2/Moustique.webp",
        nom: "Moustique",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 4h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [0],
        price: "130",
        rarete: 0
    },
    {
        src: "img2/MueDeCigale.webp",
        nom: "Mue de cigale",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "10",
        rarete: 1
    },
    {
        src: "img2/PapilioBianor.webp",
        nom: "Papilio bianor",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"4h - 19h",
        month: [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_mois:"de mars à juin",
        lieu: [0],
        price: "2500",
        rarete: 1
    },
    {
        src: "img2/PapillonDeNuit.webp",
        nom: "Papillon de nuit",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 4h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [12],
        price: "130",
        rarete: 0
    },
    {
        src: "img2/Patineur.webp",
        nom: "Patineur",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"8h - 19h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de mai à septembre",
        lieu: [8],
        price: "130",
        rarete: 0
    },
    {
        src: "img2/Phasme.webp",
        nom: "Phasme",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"4h - 8h / 17h - 19h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        quand_mois:"de juillet à novembre",
        lieu: [2],
        price: "600",
        rarete: 0
    },
    {
        src: "img2/Phyllie.webp",
        nom: "Phyllie",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juillet à septembre",
        lieu: [1],
        price: "600",
        rarete: 0
    },
    {
        src: "img2/PiérideDeLaRave.webp",
        nom: "Piéride de la rave",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"4h - 19h",
        month: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        quand_mois:"de septembre à juin",
        lieu: [0],
        price: "160",
        rarete: 0
    },
    {
        src: "img2/Psyché.webp",
        nom: "Psyché",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [2],
        price: "600",
        rarete: 1
    },
    {
        src: "img2/Puce.webp",
        nom: "Puce",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"d'avril à novembre",
        lieu: [13],
        price: "70",
        rarete: 0
    },
    {
        src: "img2/Punaise.webp",
        nom: "Punaise",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mars à octobre",
        lieu: [6],
        price: "120",
        rarete: 0
    },
    {
        src: "img2/PunaiseDEauGéante.webp",
        nom: "Punaise d'eau géante",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 8h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"d'avril à septembre",
        lieu: [8],
        price: "2000",
        rarete: 1
    },
    {
        src: "img2/RosaliaBatesi.webp",
        nom: "Rosalia batesi",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_mois:"de mai à juin",
        lieu: [5],
        price: "3000",
        rarete: 1
    },
    {
        src: "img2/Sauterelle.webp",
        nom: "Sauterelle",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juillet à septembre",
        lieu: [1],
        price: "160",
        rarete: 0
    },
    {
        src: "img2/Scarabée.webp",
        nom: "Scarabée",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        quand_heure:"23h - 8h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "10000",
        rarete: 2
    },
    {
        src: "img2/ScarabéeAtlas.webp",
        nom: "Scarabée atlas",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [14],
        price: "8000",
        rarete: 2
    },/*
    {
        src: "img2/ScarabéeBleu.webp",
        nom: "Scarabée bleu",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "800",
        rarete: 1
    },*/
    {
        src: "img2/ScarabéeEléphant.webp",
        nom: "Scarabée éléphant",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [14],
        price: "8000",
        rarete: 2
    },
    {
        src: "img2/ScarabéeGoliath.webp",
        nom: "Scarabée goliath",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [14],
        price: "8000",
        rarete: 2
    },
    {
        src: "img2/ScarabéeHercule.webp",
        nom: "Scarabée hercule",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [14],
        price: "12000",
        rarete: 2
    },
    {
        src: "img2/ScarabéeKabuto.webp",
        nom: "Scarabée kabuto",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"17h - 8h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [2],
        price: "1350",
        rarete: 2
    },
    {
        src: "img2/Scorpion.webp",
        nom: "Scorpion",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 4h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mai à octobre",
        lieu: [1],
        price: "8000",
        rarete: 2
    },
    {
        src: "img2/Sympetrum.webp",
        nom: "Sympetrum",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_heure:"8h - 19h",
        month: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        quand_mois:"de septembre à octobre",
        lieu: [0],
        price: "180",
        rarete: 0
    },
    {
        src: "img2/Tarentule.webp",
        nom: "Tarentule",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        quand_heure:"19h - 4h",
        month: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        quand_mois:"de novembre à avril",
        lieu: [1],
        price: "8000",
        rarete: 2
    },
    {
        src: "img2/Taupe-grillon.webp",
        nom: "Taupe-grillon",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        quand_mois:"de novembre à mai",
        lieu: [15],
        price: "500",
        rarete: 0
    },
    {
        src: "img2/TroidesAlexandrae.webp",
        nom: "Troides alexandrae",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 16h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de mai à septembre",
        lieu: [0],
        price: "4000",
        rarete: 1
    },
    {
        src: "img2/TroidesBrookiana.webp",
        nom: "Troides Brookiana",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        quand_heure:"8h - 17h",
        month: [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        quand_mois:"d'avril à septembre et de décembre à février",
        lieu: [0],
        price: "2500",
        rarete: 1
    }

];
var source = insectes.slice();
var tmp_source = source.slice();

const lieu = [
    "Ciel",//0
    "Sol",//1
    "Arbres",//2
    "Plage",//3
    "Boules de neige",//4
    "Souches d'arbres",//5
    "Fleurs",//6
    "Rochers",//7
    "Surface de l'eau",//8
    "Rochers (pluie)",//9
    "Navets pourris",//10
    "Fleurs blanches",//11
    "Lumières",//12
    "Sur les villageois",//13
    "Palmiers",//14
    "Sous la terre",//15
    "Au bord de l\'eau"
];

var heure_filtre =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var mois_filtre =[0,0,0,0,0,0,0,0,0,0,0,0];

var clear_filter = function(){
    tmp_source = source.slice();
    document.getElementById("suppr_filtres").setAttribute("style", "display:none;");
    afficher();
};

window.onload = function () {
    afficher();

    var filtring = document.getElementById("les_filtres");
    filtring.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = new FormData(e.target);
        var date = new Date();
        var month = -1;
        var hour = -1;
        for (var value of data.values()){
            console.log(value);
            if(value==="Aujourdhui"){
                month = date.getMonth();
            }else if(value==="Maintenant"){
                month = date.getMonth();
                hour = date.getHours();
                console.log(month, hour);
            }
        }
        var heure_a_filtrer = -1;
        var mois_a_filtrer = -1;
        for(let i=0 ; i<heure_filtre.length ; i++){
            if(heure_filtre[i]===1){
                heure_a_filtrer = 1;
            }
        }
        for(let i=0 ; i<mois_filtre.length ; i++){
            if(mois_filtre[i]===1){
                mois_a_filtrer = 1;
            }
        }
        console.log(mois_filtre);
        var select = document.getElementById("lieu");
        var lieu = parseInt(select.options[select.selectedIndex].value);
        tmp_source = source.slice();
        for (let i = 0; i < tmp_source.length; i++){
            let poisson = tmp_source[i];
            var suppr = 1;
            for(let j=0 ; j<poisson.lieu.length ; j++) {
                if (lieu !== -1) {
                    if (poisson.lieu[j] === lieu) {
                        suppr=0;
                        break;
                    }
                }else {
                    suppr=0;
                    break;
                }
            }
            if(month !== -1){
                if(poisson.month[month] !== 1){
                    suppr=1;
                }
            }
            if(hour !== -1){
                if(poisson.hour[hour] !== 1){
                    suppr=1;
                }
            }
            if(suppr === 1){
                tmp_source.splice(i, 1);
                i--;
                continue;
            }
            suppr = 1;
            if(heure_a_filtrer === 1){
                for(let k=0 ; k<heure_filtre.length ; k++){
                    if(heure_filtre[k]===1 && poisson.hour[k]===1){
                        suppr=0;
                        break;
                    }
                }
                if(suppr===1){
                    tmp_source.splice(i, 1);
                    i--;
                    continue;
                }
            }
            suppr = 1;
            if(mois_a_filtrer === 1){
                for(let k=0 ; k<mois_filtre.length ; k++){
                    if(mois_filtre[k]===1 && poisson.month[k]===1){
                        suppr=0;
                        break;
                    }
                }
                if(suppr===1){
                    tmp_source.splice(i, 1);
                    i--;
                }
            }
        }
        if(mois_a_filtrer!==-1 || heure_a_filtrer!==-1 || month!==-1 || hour!==-1 || lieu!==-1){
            document.getElementById("suppr_filtres").setAttribute("style", "display:block;");
        }
        afficher();
    });

    var trs = document.getElementById("tableau_heure").childNodes.item(1).childNodes;
    trs.forEach(function (currentValue, currentIndex, listObj) {
        if(currentValue.nodeType !== 3){
            var tds = currentValue.childNodes;
            tds.forEach(function (currentValue,currentIndex,listObj) {
                if(currentValue.nodeType !== 3){
                    var button = currentValue.firstChild;

                    button.addEventListener("click", function(e){
                        e.preventDefault();
                        var y = parseInt(button.innerText);
                        if(heure_filtre[y]===0){
                            heure_filtre[y]=1;
                            button.setAttribute("style", "background-color: #89b043");
                        }else if(heure_filtre[y]===1){
                            heure_filtre[y]=0;
                            button.setAttribute("style", "none");
                        }
                    });
                }
            });
        }
    });

    trs = document.getElementById("tableau_mois").childNodes.item(1).childNodes;
    trs.forEach(function (currentValue, currentIndex, listObj) {
        if(currentValue.nodeType !== 3){
            var tds = currentValue.childNodes;
            tds.forEach(function (currentValue,currentIndex,listObj) {
                if(currentValue.nodeType !== 3){
                    var button = currentValue.firstChild;

                    button.addEventListener("click", function(e){
                        e.preventDefault();
                        var y = parseInt(button.getAttribute("value"));
                        if(mois_filtre[y]===0){
                            mois_filtre[y]=1;
                            button.setAttribute("style", "background-color: #89b043");
                        }else if(mois_filtre[y]===1){
                            mois_filtre[y]=0;
                            button.setAttribute("style", "none");
                        }
                    });
                }
            });
        }
    });
};

var alf=1;
var afficherLesFiltres = function(){
    var button = document.getElementById("buttonExtend");
    var form = document.getElementById("les_filtres");
    if(alf===0){
        form.setAttribute("style", "display:none;");
        button.innerText="+";
        alf=1;
    }else {
        form.setAttribute("style", "display:block;");
        button.innerText="-";
        heure_filtre=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        mois_filtre =[0,0,0,0,0,0,0,0,0,0,0,0];
        alf=0;
        var trs = document.getElementById("tableau_heure").childNodes.item(1).childNodes;
        trs.forEach(function (currentValue, currentIndex, listObj) {
            if(currentValue.nodeType !== 3){
                var tds = currentValue.childNodes;
                tds.forEach(function (currentValue,currentIndex,listObj) {
                    if(currentValue.nodeType !== 3){
                        currentValue.firstChild.setAttribute("style", "none");
                    }
                });
            }
        });
        trs = document.getElementById("tableau_mois").childNodes.item(1).childNodes;
        trs.forEach(function (currentValue, currentIndex, listObj) {
            if(currentValue.nodeType !== 3){
                var tds = currentValue.childNodes;
                tds.forEach(function (currentValue,currentIndex,listObj) {
                    if(currentValue.nodeType !== 3){
                        currentValue.firstChild.setAttribute("style", "none");
                    }
                });
            }
        });
    }
};

var tPR_reverse = 0;
var trierParRarete = function () {
    if(tPR_reverse===0){
        tPR_reverse = 1;
    }else if(tPR_reverse ===1){
        tPR_reverse=0;
    }
    tmp_source.sort((a,b) => a.rarete-b.rarete);
    if(tPR_reverse===1){
        tmp_source.reverse();
    }
    afficher();
};

var tPN_reverse = 1;
var trierParNom = function () {
    if(tPN_reverse===0){
        tPN_reverse = 1;
    }else if(tPN_reverse ===1){
        tPN_reverse=0;
    }
    tmp_source.sort(function (a,b) {
        if(a.nom > b.nom){
            return -1;
        }else if (a.nom < b.nom){
            return 1;
        }else {
            return 0;
        }
    });
    if(tPN_reverse===1){
        tmp_source.reverse();
    }
    afficher();
};

var tPL_reverse = 0;
var trierParLieu = function () {
    if(tPL_reverse===0){
        tPL_reverse = 1;
    }else if(tPL_reverse ===1){
        tPL_reverse=0;
    }
    tmp_source.sort((a,b)=>(a.lieu[0]-b.lieu[0]));
    if(tPL_reverse===1){
        tmp_source.reverse();
    }
    afficher();
};

var tPP_reverse = 0;
var trierParPrix = function () {
    if(tPP_reverse===0){
        tPP_reverse = 1;
    }else if(tPP_reverse ===1){
        tPP_reverse=0;
    }
    tmp_source.sort((a,b) => parseInt(a.price.replace(/\s/g, ''))-parseInt(b.price.replace(/\s/g, '')));
    if(tPP_reverse===1){
        tmp_source.reverse();
    }
    afficher();
};

var afficher = function(){
    var tableau = document.getElementById("tab");
    tableau.innerHTML = "";
    let tlA;
    for (let i = 0; i < tmp_source.length; i++) {
        let poisson = tmp_source[i];
        var tr = document.createElement("tr");
        var td = document.createElement("td");

        var img = document.createElement("img");
        img.setAttribute("src", poisson.src);
        img.setAttribute("class", "poisson_icon");
        td.appendChild(img);
        if(poisson.rarete === 0){
            td.setAttribute("style", "background-color: #ffd700; width:4em; height: 4em;");
        }else if(poisson.rarete === 1){
            td.setAttribute("style", "background-color: #ff7c47; width:4em; height: 4em;");
        }else if(poisson.rarete === 2){
            td.setAttribute("style", "background-color: #ff3030; width:4em; height: 4em;");
        }
        tr.appendChild(td);

        td = document.createElement("td");
        let p = document.createElement("p");
        p.innerText = poisson.nom;
        td.appendChild(p);
        tr.appendChild(td);

        td = document.createElement("td");
        p = document.createElement("p");
        p.innerText=poisson.quand_mois;
        td.appendChild(p);
        tr.appendChild(td);

        td = document.createElement("td");
        p = document.createElement("p");
        p.innerText = poisson.quand_heure;
        td.appendChild(p);
        tr.appendChild(td);

        td = document.createElement("td");
        p = document.createElement("p");
        p.innerText = "" + lieu[poisson.lieu[0]];
        for (let j=1 ; j<poisson.lieu.length ; j++){
            p.innerText=p.innerText+" / "+lieu[poisson.lieu[j]];
        }
        td.appendChild(p);
        tr.appendChild(td);

        td = document.createElement("td");
        p = document.createElement("p");
        p.innerText=poisson.price;
        td.appendChild(p);
        tr.appendChild(td);

        if (i % 2 === 1) {
            tr.setAttribute("style", "background-color: #76c3f9;");
        } else {
            tr.setAttribute("style", "background-color: #b1e2ff;");
        }
        tableau.appendChild(tr);
    }
};