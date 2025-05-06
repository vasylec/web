document.querySelector('#reset-filters').addEventListener('click', () => {
    location.reload();
});



window.items = [
    {
        title: 'Placă Video ASUS ROG-ASTRAL-RTX5080-O16G-GAMING, 16GB GDDR7 256bit',
        name: 'GeForce RTX 5080',
        prod: 'NVIDIA',
        mem: 16,
        mem_mhz: 30000,
        resolution: '7680x4320',
        connection: '2x HDMI 2.1, 3x DP 2.1',
        psu: '850 W',
        v: 3,
        l: 35.76,
        price: 40490,
        img: 'https://cdn-ultra.esempla.com/storage/webp/36801b06-7673-42ff-a852-25c8709a69f7.webp',
        brand: 'ASUS'
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 22673,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "750 W",
        "v": 3,
        "l": 35.65,
        "price": 35344,
        "img": 'https://cdn-ultra.esempla.com/storage/webp/463c4fcc-2b79-460b-8d57-1926ebd68a7b.webp',
        "brand": 'ASRock'
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "NVIDIA",
        "mem": 16,
        "mem_mhz": 31528,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 3,
        "l": 20.34,
        "price": 3885,
        "img": 'https://alo.md/media/products/accent.md/205729/4.webp',
        "brand": 'Generic'
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 12,
        "mem_mhz": 16422,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "850 W",
        "v": 3,
        "l": 38.92,
        "price": 22742,
        "img": 'https://xstore.md/images/product/2023/04/xstore.md-Plac%C4%83-video-MSI-Suprim-X-GeForce-RTX-4090-(1).png',
        "brand": 'MSI'
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "NVIDIA",
        "mem": 12,
        "mem_mhz": 29243,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "1000 W",
        "v": 3,
        "l": 22.44,
        "price": 41174,
        "img": "https://m.media-amazon.com/images/I/81H75Xsj4hL._AC_UF894,1000_QL80_.jpg",
        "brand": 'Generic'
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "NVIDIA",
        "mem": 16,
        "mem_mhz": 15880,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "1000 W",
        "v": 3,
        "l": 35.05,
        "price": 74021,
        "img": "https://media.spdigital.cl/thumbnails/products/z7x6q7t1_dd952f11_thumbnail_512.jpg",
        "brand": 'ASUS'
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 24,
        "mem_mhz": 15687,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "1000 W",
        "v": 3,
        "l": 39.05,
        "price": 8335,
        "img": "https://xstore.md/images/product/2023/04/xstore.md-Plac%C4%83-video-MSI-Suprim-X-GeForce-RTX-4090-(1).png",
        "brand": 'MSI'
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "NVIDIA",
        "mem": 12,
        "mem_mhz": 25119,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 3,
        "l": 25.31,
        "price": 41340,
        "img": "https://media.ldlc.com/r1600/ld/products/00/06/20/52/LD0006205279.jpg",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "NVIDIA",
        "mem": 12,
        "mem_mhz": 31638,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "1000 W",
        "v": 3,
        "l": 28.74,
        "price": 70184,
        "img": "https://media.ldlc.com/r1600/ld/products/00/06/20/52/LD0006205279.jpg",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 23874,
        "resolution": "3840x2160",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "1000 W",
        "v": 2,
        "l": 31.32,
        "price": 30862,
        "img": "https://atehno.md/files/items/asrock-challenger-radeon-rx-7600-8gb-9857901757295.png",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 16217,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 2,
        "l": 27.42,
        "price": 35120,
        "img": "data:image/jpeg;base64,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",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 25603,
        "resolution": "3840x2160",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "750 W",
        "v": 2,
        "l": 29.33,
        "price": 66099,
        "img": "https://mobileplanet.ua/uploads/product/2023-11-8/asrock-radeon-rx-7600-challenger-oc-8gb-gddr6-rx76-293403.webp",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 18475,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "650 W",
        "v": 3,
        "l": 25.97,
        "price": 64538,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgQH65hk8VlOQA8HB9D0KiI_R_t7ohMcmrA&s",
        "brand": 'MSI'
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 20942,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "1000 W",
        "v": 3,
        "l": 21.48,
        "price": 46732,
        "img": "https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/RTX-4090-SUPRIM-CLASSIC-24G/4090-suprim-classic.png",
        "brand": 'MSI'
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 15864,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "650 W",
        "v": 3,
        "l": 29.34,
        "price": 64176,
        "img": "data:image/jpeg;base64,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",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 16,
        "mem_mhz": 23258,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "1000 W",
        "v": 1,
        "l": 30.41,
        "price": 10328,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 16831,
        "resolution": "3840x2160",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 3,
        "l": 28.82,
        "price": 24976,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "AMD",
        "mem": 10,
        "mem_mhz": 20876,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 2,
        "l": 33.75,
        "price": 34666,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 16369,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "750 W",
        "v": 3,
        "l": 23.43,
        "price": 41456,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "NVIDIA",
        "mem": 10,
        "mem_mhz": 32528,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 3,
        "l": 34.83,
        "price": 43722,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "AMD",
        "mem": 10,
        "mem_mhz": 21979,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 3,
        "l": 29.85,
        "price": 42660,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 19637,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "750 W",
        "v": 1,
        "l": 39.97,
        "price": 22230,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 17499,
        "resolution": "3840x2160",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "850 W",
        "v": 3,
        "l": 36.48,
        "price": 68569,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "NVIDIA",
        "mem": 16,
        "mem_mhz": 20459,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "750 W",
        "v": 1,
        "l": 22.82,
        "price": 68109,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "NVIDIA",
        "mem": 10,
        "mem_mhz": 30156,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "850 W",
        "v": 2,
        "l": 31.24,
        "price": 14717,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 29231,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "850 W",
        "v": 1,
        "l": 37.8,
        "price": 40971,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 15857,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "750 W",
        "v": 1,
        "l": 22.05,
        "price": 28563,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 12,
        "mem_mhz": 24926,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 3,
        "l": 33.09,
        "price": 67147,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 33658,
        "resolution": "3840x2160",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 1,
        "l": 37.41,
        "price": 5486,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "AMD",
        "mem": 10,
        "mem_mhz": 16698,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 2,
        "l": 37.69,
        "price": 54502,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 24690,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 1,
        "l": 31.04,
        "price": 35131,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 19383,
        "resolution": "3840x2160",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "750 W",
        "v": 3,
        "l": 21.12,
        "price": 16254,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 32172,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "650 W",
        "v": 1,
        "l": 37.57,
        "price": 48805,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 18510,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "1000 W",
        "v": 2,
        "l": 31.04,
        "price": 36684,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 17678,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "850 W",
        "v": 3,
        "l": 25.22,
        "price": 8848,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 16709,
        "resolution": "3840x2160",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "650 W",
        "v": 1,
        "l": 23.55,
        "price": 31700,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 27159,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 3,
        "l": 32.41,
        "price": 14477,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 22566,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "850 W",
        "v": 2,
        "l": 31.5,
        "price": 34613,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 10,
        "mem_mhz": 23177,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "850 W",
        "v": 2,
        "l": 32.93,
        "price": 4200,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 12,
        "mem_mhz": 25656,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "1000 W",
        "v": 3,
        "l": 39.21,
        "price": 27527,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 18077,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "850 W",
        "v": 2,
        "l": 36.25,
        "price": 65262,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 30137,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "650 W",
        "v": 1,
        "l": 35.01,
        "price": 38667,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 25545,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "850 W",
        "v": 3,
        "l": 21.54,
        "price": 34623,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "NVIDIA",
        "mem": 10,
        "mem_mhz": 21882,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "650 W",
        "v": 3,
        "l": 23.94,
        "price": 40489,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 30516,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "850 W",
        "v": 2,
        "l": 37.1,
        "price": 51564,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 28761,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 2,
        "l": 23.14,
        "price": 8789,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 16,
        "mem_mhz": 21328,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "750 W",
        "v": 2,
        "l": 37.86,
        "price": 61143,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 14137,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "850 W",
        "v": 1,
        "l": 29.65,
        "price": 12487,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 14752,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 2,
        "l": 26.03,
        "price": 74459,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 18789,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 3,
        "l": 22.9,
        "price": 10567,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "NVIDIA",
        "mem": 16,
        "mem_mhz": 27717,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "650 W",
        "v": 2,
        "l": 39.86,
        "price": 56442,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 31676,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 1,
        "l": 29.24,
        "price": 24618,
        "img": "",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 24278,
        "resolution": "3840x2160",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "750 W",
        "v": 2,
        "l": 21.3,
        "price": 23260,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 33344,
        "resolution": "3840x2160",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "850 W",
        "v": 3,
        "l": 34.15,
        "price": 27540,
        "img": "",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 23833,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "650 W",
        "v": 1,
        "l": 21.47,
        "price": 59696,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "NVIDIA",
        "mem": 10,
        "mem_mhz": 29028,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 1,
        "l": 30.37,
        "price": 32296,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 18977,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "750 W",
        "v": 3,
        "l": 34.91,
        "price": 46512,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "NVIDIA",
        "mem": 12,
        "mem_mhz": 16174,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "1000 W",
        "v": 1,
        "l": 22.59,
        "price": 32326,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 19932,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 3,
        "l": 29.12,
        "price": 12149,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 12,
        "mem_mhz": 30700,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 2,
        "l": 21.59,
        "price": 5564,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 10,
        "mem_mhz": 32697,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "850 W",
        "v": 1,
        "l": 28.71,
        "price": 5137,
        "img": "",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 10,
        "mem_mhz": 26320,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 2,
        "l": 29.66,
        "price": 27918,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 29737,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "750 W",
        "v": 3,
        "l": 38.44,
        "price": 37693,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 18093,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "750 W",
        "v": 2,
        "l": 28.46,
        "price": 13900,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 27446,
        "resolution": "3840x2160",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 3,
        "l": 22.23,
        "price": 57733,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 17001,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "650 W",
        "v": 2,
        "l": 32.27,
        "price": 16142,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 26341,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 3,
        "l": 38.91,
        "price": 48128,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "AMD",
        "mem": 10,
        "mem_mhz": 25602,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "750 W",
        "v": 3,
        "l": 32.87,
        "price": 16625,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 26348,
        "resolution": "3840x2160",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 3,
        "l": 28.02,
        "price": 53966,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "AMD",
        "mem": 12,
        "mem_mhz": 15454,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "1000 W",
        "v": 2,
        "l": 28.39,
        "price": 8575,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 22216,
        "resolution": "3840x2160",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 1,
        "l": 33.6,
        "price": 65801,
        "img": "",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 15874,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "850 W",
        "v": 1,
        "l": 34.49,
        "price": 13661,
        "img": "",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 15322,
        "resolution": "3840x2160",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "650 W",
        "v": 1,
        "l": 21.02,
        "price": 44440,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 22137,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "1000 W",
        "v": 1,
        "l": 22.29,
        "price": 59174,
        "img": "",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video ASUS TUF GeForce RTX 3080",
        "name": "GeForce RTX 3080",
        "prod": "NVIDIA",
        "mem": 24,
        "mem_mhz": 32139,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "650 W",
        "v": 2,
        "l": 30.92,
        "price": 10018,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 15257,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 2,
        "l": 34.96,
        "price": 12934,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 26947,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 1,
        "l": 25.57,
        "price": 5533,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 29195,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "850 W",
        "v": 3,
        "l": 34.56,
        "price": 12363,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 10,
        "mem_mhz": 25218,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "1000 W",
        "v": 1,
        "l": 30.81,
        "price": 72710,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video Gigabyte GAMING OC GeForce RTX 4070 Ti",
        "name": "GeForce RTX 4070 Ti",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 27056,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "1000 W",
        "v": 2,
        "l": 36.97,
        "price": 56427,
        "img": "",
        "brand": "Gigabyte"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "NVIDIA",
        "mem": 24,
        "mem_mhz": 27838,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "650 W",
        "v": 2,
        "l": 23.99,
        "price": 22845,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 32060,
        "resolution": "3840x2160",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 2,
        "l": 34.87,
        "price": 39808,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "AMD",
        "mem": 12,
        "mem_mhz": 19170,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 1,
        "l": 29.44,
        "price": 45535,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 10,
        "mem_mhz": 17701,
        "resolution": "3840x2160",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "750 W",
        "v": 3,
        "l": 29.71,
        "price": 10339,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "AMD",
        "mem": 8,
        "mem_mhz": 15511,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "1000 W",
        "v": 3,
        "l": 26.6,
        "price": 36623,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 27648,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "650 W",
        "v": 2,
        "l": 27.97,
        "price": 24154,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 25100,
        "resolution": "7680x4320",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "750 W",
        "v": 2,
        "l": 22.15,
        "price": 64756,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 16,
        "mem_mhz": 26422,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "750 W",
        "v": 3,
        "l": 28.52,
        "price": 33692,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video MSI SUPRIM X GeForce RTX 4090",
        "name": "GeForce RTX 4090",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 25184,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "650 W",
        "v": 2,
        "l": 38.71,
        "price": 29180,
        "img": "",
        "brand": "MSI"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 29737,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 1,
        "l": 39.49,
        "price": 5609,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "NVIDIA",
        "mem": 8,
        "mem_mhz": 21972,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "750 W",
        "v": 3,
        "l": 24.96,
        "price": 15312,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "AMD",
        "mem": 16,
        "mem_mhz": 18863,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "750 W",
        "v": 1,
        "l": 30.73,
        "price": 6491,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 24709,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "1000 W",
        "v": 3,
        "l": 26.7,
        "price": 26866,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "NVIDIA",
        "mem": 24,
        "mem_mhz": 22485,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "650 W",
        "v": 3,
        "l": 29.66,
        "price": 54495,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 20,
        "mem_mhz": 14059,
        "resolution": "3840x2160",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "850 W",
        "v": 1,
        "l": 29.93,
        "price": 74805,
        "img": "",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video PowerColor Red Devil Radeon RX 7800",
        "name": "Radeon RX 7800",
        "prod": "NVIDIA",
        "mem": 16,
        "mem_mhz": 19123,
        "resolution": "7680x4320",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "750 W",
        "v": 2,
        "l": 33.96,
        "price": 20815,
        "img": "",
        "brand": "Generic"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 25048,
        "resolution": "2560x1440",
        "connection": "1x HDMI 2.1, 3x DP 1.4",
        "psu": "750 W",
        "v": 3,
        "l": 25.75,
        "price": 52200,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video ASRock Challenger Radeon RX 7600",
        "name": "Radeon RX 7600",
        "prod": "AMD",
        "mem": 24,
        "mem_mhz": 26691,
        "resolution": "2560x1440",
        "connection": "1x HDMI, 2x DP, 1x USB-C",
        "psu": "650 W",
        "v": 1,
        "l": 21.32,
        "price": 66177,
        "img": "",
        "brand": "ASRock"
    },
    {
        "title": "Placă Video ASUS ROG-STRIX GeForce RTX 5080",
        "name": "GeForce RTX 5080",
        "prod": "NVIDIA",
        "mem": 20,
        "mem_mhz": 14020,
        "resolution": "7680x4320",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "850 W",
        "v": 3,
        "l": 34.02,
        "price": 41311,
        "img": "",
        "brand": "ASUS"
    },
    {
        "title": "Placă Video Sapphire NITRO+ Radeon RX 7900",
        "name": "Radeon RX 7900",
        "prod": "NVIDIA",
        "mem": 24,
        "mem_mhz": 21877,
        "resolution": "2560x1440",
        "connection": "2x HDMI 2.1, 3x DP 2.1",
        "psu": "750 W",
        "v": 1,
        "l": 31.59,
        "price": 29397,
        "img": "",
        "brand": "Generic"
    }
]

const submitFilter = document.querySelector('#submit-filters');
const productList = document.querySelector('.product-list');


window.filteredItems = [];

submitFilter.addEventListener('click', () => {
    const minM = Number(document.querySelector('#min-m').value);
    const maxM = Number(document.querySelector('#max-m').value);

    const minP = Number(document.querySelector('#min-number-p').value);
    const maxP = Number(document.querySelector('#max-number-p').value);
    
    const minF = Number(document.querySelector('#min-f').value);
    const maxF = Number(document.querySelector('#max-f').value);
    
    const minV = Number(document.querySelector('#min-v').value);
    const maxV = Number(document.querySelector('#max-v').value);
    
    const minL = Number(document.querySelector('#min-l').value);
    const maxL = Number(document.querySelector('#max-l').value);
    
    const asus = document.querySelector('#asus-cbox');
    const gigabyte = document.querySelector('#gigabyte-cbox');
    const asrock = document.querySelector('#asrock-cbox');
    const msi = document.querySelector('#msi-cbox');
    const other = document.querySelector('#other-cbox');
    
    const nvidia = document.querySelector('#nvidia-cbox');
    const amd = document.querySelector('#amd-cbox');

    filteredItems.splice(0, filteredItems.length);
    productList.innerHTML = '';
    items.forEach((element,index) => {
        if(
            (
                minM <= element.mem && maxM >= element.mem &&
                minP <= element.price && maxP >= element.price &&
                minF <= (element.mem_mhz)/10 && maxF >= (element.mem_mhz)/10 &&
                minV <= element.v && maxV >= element.v &&
                minL <= (element.l * 10).toFixed() && maxL >= (element.l * 10).toFixed()
            )
            &&
            (
                (
                    asus.checked && element.brand == 'ASUS' ||
                    msi.checked && element.brand == 'MSI' ||
                    asrock.checked && element.brand == 'ASRock' ||
                    gigabyte.checked && element.brand == 'Gigabyte' ||
                    other.checked && element.brand == 'Generic'
                )
                ||
                (
                    !asus.checked && !msi.checked && !asrock.checked && !gigabyte.checked && !other.checked
                )
            )
            &&
            (
                (
                    nvidia.checked && element.prod == 'NVIDIA' ||
                    amd.checked && element.prod == 'AMD'
                )
                ||
                (
                    !nvidia.checked && !amd.checked
                )
            )
        ){
            
            filteredItems.push(element);
            
            
            // const div = document.createElement('div');
            // const img = document.createElement('img');
            // const h4 = document.createElement('h4');
            // const p = document.createElement('p');
            // const button = document.createElement('button');


            // img.src = element.img;
            // h4.textContent = element.title;
            // p.innerHTML = element.price + ' <span>lei</span>';
            // button.textContent = 'În coș';

            // div.appendChild(img);
            // div.appendChild(h4);
            // div.appendChild(p);
            // div.appendChild(button);

            // productList.append(div);
        }
    });

    setPag(1);
    render();
});


// items.forEach((element) => {
    
    
//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     const h4 = document.createElement('h4');
//     const p = document.createElement('p');
//     const button = document.createElement('button');


//     img.src = element.img;
//     h4.textContent = element.title;
//     p.innerHTML = element.price + ' <span>lei</span>';
//     button.textContent = 'În coș';

//     div.appendChild(img);
//     div.appendChild(h4);
//     div.appendChild(p);
//     div.appendChild(button);

//     productList.append(div);
// });



const ul = document.querySelector('.filter').querySelectorAll('li');
ul.forEach((element) => {
    const divs = element.querySelectorAll('div');
    
    if(divs[0] != null){
        divs[0].addEventListener("click", () => {            
            const i = divs[0].getElementsByTagName('i')[0];

            if(i.classList.contains('fa-circle-chevron-down')){
                divs[1].style.display = 'block';
                i.classList.add('fa-circle-xmark');
                i.classList.remove('fa-circle-chevron-down');
            }
            else{
                divs[1].style.display = 'none';
                i.classList.add('fa-circle-chevron-down');
                i.classList.remove('fa-circle-xmark');
            }            
        });
    }
});

