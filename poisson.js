var poissons = [
    {
        src: "img/Anchois.png",
        nom: "Anchois",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_heure:"4h - 21h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [0],
        price: "200",
        taille: [1],
        rarete: 1
    },
    {
        src: "img/Arapaima.png",
        nom: "Arapaïma",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juillet à septembre",
        lieu: [1],
        price: "10 000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/Arowana.webp",
        nom: "Arowana",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juillet à septembre",
        lieu: [1],
        price: "10 000",
        taille: [2],
        rarete: 2
    },
    {
        src: "img/Ayu.webp",
        nom: "Ayu",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juillet à septembre",
        lieu: [1],
        price: "900",
        taille: [1, 2],
        rarete: 0
    },
    {
        src: "img/Bar.webp",
        nom: "Bar",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [1],
        price: "400",
        taille: [3],
        rarete: 0
    },
    {
        src: "img/BarCommun.webp",
        nom: "Bar Commun",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [0],
        price: "400",
        taille: [4],
        rarete: 0
    },
    {
        src: "img/Bichir.webp",
        nom: "Bichir",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        quand_heure:"21h - 4h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [1],
        price: "4 000",
        taille: [3],
        rarete: 1
    },
    {
        src: "img/Bouvière.webp",
        nom: "Bouvière",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de novembre à mars",
        lieu: [1],
        price: "900",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/Brochet.webp",
        nom: "Brochet",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        quand_mois:"de septembre à décembre",
        lieu: [1],
        price: "1800",
        taille: [2,3],
        rarete: 1
    },
    {
        src: "img/Calamar.webp",
        nom: "Calamar",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        quand_mois:"de décembre à août",
        lieu: [0],
        price: "500",
        taille: [2],
        rarete: 1
    },
    {
        src: "img/CarangueGrosseTête.webp",
        nom: "Carangue grosse tête",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mai à octobre",
        lieu: [0],
        price: "4500",
        taille: [5],
        rarete: 1
    },
    {
        src: "img/Carassin.webp",
        nom: "Carassin",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [1],
        price: "160",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/Cardeau.webp",
        nom: "Cardeau",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [0],
        price: "800",
        taille: [3],
        rarete: 1
    },
    {
        src: "img/Carpe.webp",
        nom: "Carpe",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [2],
        price: "300",
        taille: [2],
        rarete: 0
    },
    {
        src: "img/CarpeKoi.webp",
        nom: "Carpe koï",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [2],
        price: "4000",
        taille: [2],
        rarete: 1
    },
    {
        src: "img/Chevaine.webp",
        nom: "Chevaine",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [1],
        price: "200",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/Chinchard.webp",
        nom: "Chinchard",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [0],
        price: "150",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/Clione.webp",
        nom: "Clione",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        quand_mois:"de décembre à mars",
        lieu: [0],
        price: "1000",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/Combattant.webp",
        nom: "Combattant",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mai à octobre",
        lieu: [1],
        price: "2500",
        taille: [1],
        rarete: 1
    },
    {
        src: "img/Coryphène.webp",
        nom: "Coryphène",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mai à octobre",
        lieu: [0,6],
        price: "6000",
        taille: [4],
        rarete: 1
    },
    {
        src: "img/CrabeChinois.webp",
        nom: "Crabe chinois",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        quand_mois:"de septembre à novembre",
        lieu: [1],
        price: "2000",
        taille: [1],
        rarete: 1
    },
    {
        src: "img/Crapet.webp",
        nom: "Crapet",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [1],
        price: "180",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/CyprinDoré.webp",
        nom: "Cyprin doré",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [2],
        price: "1300",
        taille: [0],
        rarete: 2
    },
    {
        src: "img/Coelacanthe.webp",
        nom: "Coelacanthe",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [0,5],
        price: "15000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/DaiYu.webp",
        nom: "Dai yu",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        quand_mois:"de décembre à mars",
        lieu: [1,3],
        price: "15000",
        taille: [3],
        rarete: 2
    },
    {
        src: "img/Daurade.webp",
        nom: "Daurade",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_heure:"4h - 21h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [1],
        price: "15000",
        taille: [4],
        rarete: 2
    },
    {
        src: "img/Ecrevisse.webp",
        nom: "Ecrevisse",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"d'avril à septembre",
        lieu: [2],
        price: "200",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/Eperlan.webp",
        nom: "Eperlan",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        quand_mois:"de décembre à février",
        lieu: [1],
        price: "320",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/Esturgeons.webp",
        nom: "Esturgeons",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        quand_mois:"de septembre à mars",
        lieu: [4],
        price: "10000",
        taille: [4],
        rarete: 2
    },
    {
        src: "img/FonduleBarré.webp",
        nom: "Fondule barré",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_mois:"d'avril à août",
        lieu: [2],
        price: "300",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/Gar.webp",
        nom: "Gar",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [2],
        price: "6000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/GobieDEauDouce.webp",
        nom: "Gobie d'eau douce",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [1],
        price: "400",
        taille: [1],
        rarete: 1
    },
    {
        src: "img/GrandRequinBlanc.webp",
        nom: "Grand requin blanc",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [0],
        price: "15000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/Grenouille.webp",
        nom: "Grenouille",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        quand_mois:"de mai à août",
        lieu: [2],
        price: "120",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/Guppy.webp",
        nom: "Guppy",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"d'avril à novembre",
        lieu: [1],
        price: "1300",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/Hippocampe.webp",
        nom: "Hippocampe",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"d'avril à novembre",
        lieu: [0],
        price: "1100",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/Limande.webp",
        nom: "Limande",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        quand_mois:"d'octobre à avril",
        lieu: [0],
        price: "300",
        taille: [2],
        rarete: 0
    },
    {
        src: "img/LocheDEtang.webp",
        nom: "Loche d'étang",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_mois:"de mars à mai",
        lieu: [1],
        price: "400",
        taille: [1,2],
        rarete: 0
    },
    {
        src: "img/LuneDeMer.webp",
        nom: "Lune de mer",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_heure:"4h - 21h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juillet à septembre",
        lieu: [0],
        price: "4000",
        taille: [5],
        rarete: 1
    },
    {
        src: "img/Macropinna.webp",
        nom: "Macropinna",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        quand_heure:"21h - 4h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [0],
        price: "15000",
        taille: [1],
        rarete: 2
    },
    {
        src: "img/MarlinBleu.webp",
        nom: "Marlin bleu",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
        quand_mois:"de juillet à septembre et de novembre à avril",
        lieu: [0,6],
        price: "10000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/Murène.webp",
        nom: "Murène",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        quand_mois:"d'août à octobre",
        lieu: [0],
        price: "2000",
        taille: [4],
        rarete: 2
    },
    {
        src: "img/MurèneRubanBleue.webp",
        nom: "Murène ruban bleue",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de juin à octobre",
        lieu: [0],
        price: "600",
        taille: [0],//"Fine"
        rarete: 0
    },
    {
        src: "img/Napoléon.webp",
        nom: "Napoléon",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_heure:"4h - 21h",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juillet à août",
        lieu: [0],
        price: "10000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/NéonBleu.webp",
        nom: "Néon bleu",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"d'avril à novembre",
        lieu: [1],
        price: "500",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/Omble.webp",
        nom: "Omble",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        quand_mois:"de mars à juin / de septembre à novembre",
        lieu: [1,3],
        price: "3800",
        taille: [1,2],
        rarete: 1
    },
    {
        src: "img/PercheJaune.webp",
        nom: "Perche jaune",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        quand_mois:"d'octobre à mars",
        lieu: [1],
        price: "300",
        taille: [1,2],
        rarete: 0
    },
    {
        src: "img/Piranha.webp",
        nom: "Piranha",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        quand_heure:"9h - 16h / 21h - 4h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [1],
        price: "2500",
        taille: [1],
        rarete: 1
    },
    {
        src: "img/PoissonArc-en-ciel.webp",
        nom: "Poisson arc-en-ciel",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mai à octobre",
        lieu: [1],
        price: "800",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/PoissonChirurgien.webp",
        nom: "Poisson chirurgien",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"d'avril à septembre",
        lieu: [0],
        price: "1000",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/PoissonDocteur.webp",
        nom: "Poisson docteur",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de mai à septembre",
        lieu: [1],
        price: "1500",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/PoissonLanterne.webp",
        nom: "Poisson lanterne",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        quand_mois:"de novembre à mars",
        lieu: [0],
        price: "2500",
        taille: [3],
        rarete: 1
    },
    {
        src: "img/PoissonRouge.webp",
        nom: "Poisson rouge",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [2],
        price: "1300",
        taille: [0],
        rarete: 2
    },
    {
        src: "img/Poisson-ange.webp",
        nom: "Poisson-ange",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mai à octobre",
        lieu: [1],
        price: "3000",
        taille: [1],
        rarete: 1
    },
    {
        src: "img/Poisson-ballon.webp",
        nom: "Poisson-ballon",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        quand_heure:"21h - 4h",
        month: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        quand_mois:"de novembre à février",
        lieu: [0],
        price: "5000",
        taille: [2],
        rarete: 1
    },
    {
        src: "img/Poisson-clown.webp",
        nom: "Poisson-clown",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"d'avril à septembre",
        lieu: [0],
        price: "650",
        taille: [0],
        rarete: 0
    },
    {
        src: "img/Poisson-papillon.webp",
        nom: "Poisson-papillon",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"d'avril à septembre",
        lieu: [0],
        price: "1000",
        taille: [1],
        rarete: 0
    },
    {
        src: "img/Poisson-porc-épic.webp",
        nom: "Poisson-porc-épic",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juillet à septembre",
        lieu: [0],
        price: "250",
        taille: [2],
        rarete: 0
    },
    {
        src: "img/Poisson-ruban.webp",
        nom: "Poisson-ruban",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        quand_mois:"de décembre à mai",
        lieu: [0],
        price: "9000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/Poisson-scorpion.webp",
        nom: "Poisson-scorpion",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"d'avril à novembre",
        lieu: [0],
        price: "500",
        taille: [2],
        rarete: 0
    },
    {
        src: "img/Raie.webp",
        nom: "Raie",
        hour: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_heure:"4h - 21h",
        month: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        quand_mois:"d'août à novembre",
        lieu: [0],
        price: "3000",
        taille: [5],
        rarete: 1
    },
    {
        src: "img/Ranchu.webp",
        nom: "Ranchu",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [2],
        price: "4500",
        taille: [1],
        rarete: 2
    },
    {
        src: "img/RémoraRayé.webp",
        nom: "Rémora rayé",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [0],
        price: "1500",
        taille: [2],
        rarete: 1
    },
    {
        src: "img/RequinMarteau.webp",
        nom: "Requin marteau",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [0],
        price: "8000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/RequinScie.webp",
        nom: "Requin scie",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [0],
        price: "12000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/Requin-baleine.webp",
        nom: "Requin-baleine",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        quand_mois:"de juin à septembre",
        lieu: [0],
        price: "13000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/Saumon.webp",
        nom: "Saumon",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        quand_mois:"septembre",
        lieu: [4],
        price: "700",
        taille: [3],
        rarete: 0
    },
    {
        src: "img/SaumonMasou.webp",
        nom: "Saumon masou",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        quand_mois:"de mars à juin et de septembre à novembre",
        lieu: [1,3],
        price: "1000",
        taille: [1,2],
        rarete: 0
    },
    {
        src: "img/SaumonRoi.webp",
        nom: "Saumon roi",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        quand_mois:"septembre",
        lieu: [4],
        price: "10000",
        taille: [5],
        rarete: 1
    },
    {
        src: "img/Scarus.webp",
        nom: "Scarus",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        quand_mois:"de mars à novembre",
        lieu: [0],
        price: "5000",
        taille: [2],
        rarete: 1
    },
    {
        src: "img/Silure.webp",
        nom: "Silure",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de mai à octobre",
        lieu: [2],
        price: "800",
        taille: [2],
        rarete: 0
    },
    {
        src: "img/Têtard.webp",
        nom: "Têtard",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        quand_mois:"de mars à juillet",
        lieu: [2],
        price: "100",
        taille: [0],
        rarete: 1
    },
    {
        src: "img/Tête-de-serpent.webp",
        nom: "Tête-de-serpent",
        hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        quand_heure:"9h - 16h",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        quand_mois:"de juin à août",
        lieu: [2],
        price: "5500",
        taille: [3],
        rarete: 1
    },
    {
        src: "img/Thon.webp",
        nom: "Thon",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        quand_mois:"de novembre à avril",
        lieu: [0,6],
        price: "7000",
        taille: [5],
        rarete: 2
    },
    {
        src: "img/Tilapia.webp",
        nom: "Tilapia",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        quand_mois:"de juin à octobre",
        lieu: [1],
        price: "800",
        taille: [2],
        rarete: 0
    },
    {
        src: "img/TortueSerpentine.webp",
        nom: "Tortue serpentine",
        hour: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        quand_heure:"21h - 4h",
        month: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        quand_mois:"d'avril à octobre",
        lieu: [1],
        price: "5000",
        taille: [2],
        rarete: 1
    },
    {
        src: "img/TortueTrionyx.webp",
        nom: "Tortue trionyx",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        quand_mois:"d'août à septembre",
        lieu: [2],
        price: "3750",
        taille: [0],
        rarete: 1
    },
    {
        src: "img/Vandoise.webp",
        nom: "Vandoise",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"16h - 9h",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [1],
        price: "240",
        taille: [2],
        rarete: 0
    },
    {
        src: "img/Vivaneau.webp",
        nom: "Vivaneau",
        hour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_heure:"Toute la journée",
        month: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        quand_mois:"Toute l'année",
        lieu: [0],
        price: "3000",
        taille: [2],
        rarete: 1
    }
];
var source = poissons.slice();
var tmp_source = source.slice();

const taille = [
    "Minuscule",//0
    "Petite",//1
    "Moyenne",//2
    "Grande",//3
    "Très Grande",//4
    "Enorme" //5
];
const lieu = [
    "Océan",
    "Rivière",
    "Etang",
    "Chute d\'eau",//3
    "Estuaire",
    "Pluie ou Neige",
    "Ponton"//6
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

var tPT_reverse = 0;
var trierParTaille = function () {
    if(tPT_reverse===0){
        tPT_reverse = 1;
    }else if(tPT_reverse ===1){
        tPT_reverse=0;
    }
    tmp_source.sort((a,b) => a.taille[0]-b.taille[0]);
    if(tPT_reverse===1){
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
            td.setAttribute("style", "background-color: #ffd700");
        }else if(poisson.rarete === 1){
            td.setAttribute("style", "background-color: #ff7c47");
        }else if(poisson.rarete === 2){
            td.setAttribute("style", "background-color: #ff3030");
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

        td = document.createElement("td");
        p = document.createElement("p");
        p.innerText = "" + taille[poisson.taille[0]];
        for (let j=1 ; j<poisson.taille.length ; j++){
            p.innerText=p.innerText+" / "+taille[poisson.taille[j]];
        }
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