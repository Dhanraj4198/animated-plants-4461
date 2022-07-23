let productArr = [
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2_360x.jpg?v=1656934686',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'20% Vitamin C Serum with Blood Orange | For Skin Glow | Fades Pigmentation & Dark Spots| Combination, Oily, Dry Skin | Women and Men',
    strikedPrice:665,
    Price:499,
    category:'SERUM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vit_c_1_ebdbf467-a1d3-454f-a18f-e9e753de65c8_360x.png?v=1657950494',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Vitamin C Moisturizer With Kakadu Plum & Vitamin E| Fades Pigmentation & Dark Spots| Oily & Dry Skin| Women and Men',
    strikedPrice:700,
    Price:599,
    category:'MOISTURIZER'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_2_360x.jpg?v=1656934758',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Cica + Niacinamide Face Sunscreen SPF 50 PA+++| Broad Spectrum UV Protection Sunscreen| Oily & Acne Prone Skin| Ultra Matte Finish With No White Cast| Women & Men',
    strikedPrice:595,
    Price:536,
    category:'SUNSCREEN'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_360x.jpg?v=1657950474',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water| For Healthy,Soft Skin| Combination, Dry Skin| Women & Men',
    strikedPrice:745,
    Price:633,
    category:'MOISTURIZER'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2_360x.jpg?v=1657950488',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Retinol & Ceramide Age Defense Night Cream For Face| Treats Fine Lines & Wrinkles | Mature, Combination, Dry Skin| Women & Men',
    strikedPrice:945,
    Price:709,
    category:'NIGHT CREAM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1_360x.jpg?v=1656934364',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'10% Niacinamide Face Serum With Zinc & Antioxidants| Treats Acne, Dark Spots & Acne Scars| For Oily, Sensitive ,Acne Prone Skin| Women & Men',
    strikedPrice:665,
    Price:499,
    category:'SERUM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERMELONWASH_1_360x.jpg?v=1656934311',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Watermelon Super Glow Vitamin C Face Wash Gel| For Oil Control & Deep Cleansing | Combination & Oily Skin |100% Sulphate Free| Women and Men',
    strikedPrice:395,
    Price:296,
    category:'FACE WASH'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/moringashampoo_6fc70634-479a-4d4f-82dd-bb6de9fbeb89_360x.jpg?v=1656935714',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Argan Oil Anti Hairfall Shampoo With Moringa & Keratin| Helps Reduce Hair Fall & Breakage |For Silky, Smooth Hair| Frizzy,Dry Hair| 100% Sulphate Free| Women & Men',
    strikedPrice:695,
    Price:556,
    category:'SHAMPOO'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicafacewash_12daa62a-9f18-4d9f-bacb-1ba15a1f4fad_360x.jpg?v=1656935431',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Cica & Green Tea Face Wash With Salicylic| Treats Acne & Acne Scars| Oily, Acne Prone Skin| 100% Sulphate Free| Women & Men',
    strikedPrice:395,
    Price:356,
    category:'FACE WASH'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1_360x.jpg?v=1656934490',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Vitamin C Lip Mask With Vitamin E, Shea Butter, Hyaluronic & Almond Oil | Treats Pigmented Dark Lips | Women & Men',
    strikedPrice:445,
    Price:387,
    category:'LIP MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicatoner_3_8fce9e22-c2b3-4cb9-87a6-7eb973679cf6_360x.jpg?v=1656935406',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'CICA & Niacinamide Face Toner With Green Tea & Tea Tree Oil| Reduces Acne & Dark Spots| For Oil Control & Skin Irritation | Oily, Sensitive & Acne Prone Skin| 100% Alcohol Free| Women & Men',
    strikedPrice:395,
    Price:316,
    category:'FACE TONER'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_4_360x.png?v=1657603288',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Vitamin C++ Glow Face Serum With Hyaluronic & Kakadu Plum| For Skin Glow| Fades Pigmentation & Dark Spots| Oily,Dry Skin| Women & Men',
    strikedPrice:795,
    Price:599,
    category:'SERUM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask_360x.jpg?v=1656420733',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Salicylic & French Green Clay Face Mask With Match Tea| Reduces Acne, Dark Spots & Blemishes| Oily & Acne Prone Skin| Women & Men',
    strikedPrice:695,
    Price:499,
    category:'FACE MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pinkclaymask_1f29e041-04b7-4b13-875e-0ffa582f92e2_360x.jpg?v=1656935595',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Vitamin C Pink Clay Face Mask With Kakadu Plum| For Skin Glow| Fades Pigmentation & Dark Spots, Boosts Collagen| Oily,Normal & Dry Skin| Women & Men',
    strikedPrice:695,
    Price:499,
    category:'FACE MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER_2_360x.jpg?v=1656934635',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Watermelon Skin Glow Face Toner With Glycolic + Lactic| For Pore Tightening| Treats Pigmentation & Unclogs Pores| Oily skin| 100% Alcohol Free| Women & Men',
    strikedPrice:395,
    Price:316,
    category:'FACE TONER'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/retinolserum_360x.jpg?v=1656934971',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'RETINOL TIME REVERSE FACE SERUM',
    strikedPrice:795,
    Price:599,
    category:'FACE SERUM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-15_360x.jpg?v=1655309841',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Sunscreen SPF 50 PA+++| Ultralight, Oil-Free | No White Cast',
    strikedPrice:795,
    Price:715,
    category:'SUN SCREEN'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LEMONSCRUB_46c4269e-7ae2-4d1e-8985-60d38e636be7_360x.jpg?v=1656935501',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'VITAMIN C AVALON LEMON SUGAR BODY SCRUB',
    strikedPrice:545,
    Price:463,
    category:'SCRUB'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_85b8fcfc-89a1-49d0-bc95-e4d49dfd6619_360x.jpg?v=1655954865',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'WATERMELON LIP MASK WITH 20% SHEA',
    strikedPrice:645,
    Price:581,
    category:'LIP MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vitcsleepmask_0b41297c-7c94-4e9c-b99a-b65fe22d6f6b_360x.jpg?v=1656935552',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Pineapple & Vitamin C Face Sleep Mask With Hyaluronic| For Skin Glow| Fades Pigmentation & Dark Spots| Oily, Dry & Combination Skin| Women & Men',
    strikedPrice:625,
    Price:499,
    category:'FACE MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_3_40c5e702-0b60-49a1-abb2-812d62d223c0_360x.jpg?v=1648088715',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'CHOCOLATE GLOW MOUSSE FACE MASK',
    strikedPrice:745,
    Price:499,
    category:'FACE MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2_360x.jpg?v=1656934686',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'20% Vitamin C Serum with Blood Orange | For Skin Glow | Fades Pigmentation & Dark Spots| Combination, Oily, Dry Skin | Women and Men',
    strikedPrice:665,
    Price:499,
    category:'SERUM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vit_c_1_ebdbf467-a1d3-454f-a18f-e9e753de65c8_360x.png?v=1657950494',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Vitamin C Moisturizer With Kakadu Plum & Vitamin E| Fades Pigmentation & Dark Spots| Oily & Dry Skin| Women and Men',
    strikedPrice:700,
    Price:599,
    category:'MOISTURIZER'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_2_360x.jpg?v=1656934758',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Cica + Niacinamide Face Sunscreen SPF 50 PA+++| Broad Spectrum UV Protection Sunscreen| Oily & Acne Prone Skin| Ultra Matte Finish With No White Cast| Women & Men',
    strikedPrice:595,
    Price:536,
    category:'SUNSCREEN'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_360x.jpg?v=1657950474',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water| For Healthy,Soft Skin| Combination, Dry Skin| Women & Men',
    strikedPrice:745,
    Price:633,
    category:'MOISTURIZER'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2_360x.jpg?v=1657950488',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Retinol & Ceramide Age Defense Night Cream For Face| Treats Fine Lines & Wrinkles | Mature, Combination, Dry Skin| Women & Men',
    strikedPrice:945,
    Price:709,
    category:'NIGHT CREAM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1_360x.jpg?v=1656934364',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'10% Niacinamide Face Serum With Zinc & Antioxidants| Treats Acne, Dark Spots & Acne Scars| For Oily, Sensitive ,Acne Prone Skin| Women & Men',
    strikedPrice:665,
    Price:499,
    category:'SERUM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERMELONWASH_1_360x.jpg?v=1656934311',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Watermelon Super Glow Vitamin C Face Wash Gel| For Oil Control & Deep Cleansing | Combination & Oily Skin |100% Sulphate Free| Women and Men',
    strikedPrice:395,
    Price:296,
    category:'FACE WASH'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/moringashampoo_6fc70634-479a-4d4f-82dd-bb6de9fbeb89_360x.jpg?v=1656935714',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Argan Oil Anti Hairfall Shampoo With Moringa & Keratin| Helps Reduce Hair Fall & Breakage |For Silky, Smooth Hair| Frizzy,Dry Hair| 100% Sulphate Free| Women & Men',
    strikedPrice:695,
    Price:556,
    category:'SHAMPOO'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicafacewash_12daa62a-9f18-4d9f-bacb-1ba15a1f4fad_360x.jpg?v=1656935431',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Cica & Green Tea Face Wash With Salicylic| Treats Acne & Acne Scars| Oily, Acne Prone Skin| 100% Sulphate Free| Women & Men',
    strikedPrice:395,
    Price:356,
    category:'FACE WASH'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1_360x.jpg?v=1656934490',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Vitamin C Lip Mask With Vitamin E, Shea Butter, Hyaluronic & Almond Oil | Treats Pigmented Dark Lips | Women & Men',
    strikedPrice:445,
    Price:387,
    category:'LIP MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicatoner_3_8fce9e22-c2b3-4cb9-87a6-7eb973679cf6_360x.jpg?v=1656935406',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'CICA & Niacinamide Face Toner With Green Tea & Tea Tree Oil| Reduces Acne & Dark Spots| For Oil Control & Skin Irritation | Oily, Sensitive & Acne Prone Skin| 100% Alcohol Free| Women & Men',
    strikedPrice:395,
    Price:316,
    category:'FACE TONER'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_4_360x.png?v=1657603288',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Vitamin C++ Glow Face Serum With Hyaluronic & Kakadu Plum| For Skin Glow| Fades Pigmentation & Dark Spots| Oily,Dry Skin| Women & Men',
    strikedPrice:795,
    Price:599,
    category:'SERUM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask_360x.jpg?v=1656420733',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Salicylic & French Green Clay Face Mask With Match Tea| Reduces Acne, Dark Spots & Blemishes| Oily & Acne Prone Skin| Women & Men',
    strikedPrice:695,
    Price:499,
    category:'FACE MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pinkclaymask_1f29e041-04b7-4b13-875e-0ffa582f92e2_360x.jpg?v=1656935595',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Vitamin C Pink Clay Face Mask With Kakadu Plum| For Skin Glow| Fades Pigmentation & Dark Spots, Boosts Collagen| Oily,Normal & Dry Skin| Women & Men',
    strikedPrice:695,
    Price:499,
    category:'FACE MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER_2_360x.jpg?v=1656934635',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Watermelon Skin Glow Face Toner With Glycolic + Lactic| For Pore Tightening| Treats Pigmentation & Unclogs Pores| Oily skin| 100% Alcohol Free| Women & Men',
    strikedPrice:395,
    Price:316,
    category:'FACE TONER'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/retinolserum_360x.jpg?v=1656934971',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'RETINOL TIME REVERSE FACE SERUM',
    strikedPrice:795,
    Price:599,
    category:'FACE SERUM'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-15_360x.jpg?v=1655309841',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Sunscreen SPF 50 PA+++| Ultralight, Oil-Free | No White Cast',
    strikedPrice:795,
    Price:715,
    category:'SUN SCREEN'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LEMONSCRUB_46c4269e-7ae2-4d1e-8985-60d38e636be7_360x.jpg?v=1656935501',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'VITAMIN C AVALON LEMON SUGAR BODY SCRUB',
    strikedPrice:545,
    Price:463,
    category:'SCRUB'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_85b8fcfc-89a1-49d0-bc95-e4d49dfd6619_360x.jpg?v=1655954865',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'WATERMELON LIP MASK WITH 20% SHEA',
    strikedPrice:645,
    Price:581,
    category:'LIP MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vitcsleepmask_0b41297c-7c94-4e9c-b99a-b65fe22d6f6b_360x.jpg?v=1656935552',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'Pineapple & Vitamin C Face Sleep Mask With Hyaluronic| For Skin Glow| Fades Pigmentation & Dark Spots| Oily, Dry & Combination Skin| Women & Men',
    strikedPrice:625,
    Price:499,
    category:'FACE MASK'},
    {image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_3_40c5e702-0b60-49a1-abb2-812d62d223c0_360x.jpg?v=1648088715',
    rating:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR651m6dbzhAjE7E4u3ZZ9ZetD58IDWJe1Mv3Dk84vAb6R76ExmMA_bvD6vfzytnDYmyg&usqp=CAU',
    name:'CHOCOLATE GLOW MOUSSE FACE MASK',
    strikedPrice:745,
    Price:499,
    category:'FACE MASK'},
]

localStorage.setItem('productData',JSON.stringify(productArr))
displayProducts(productArr)
function displayProducts(productArr){
    document.querySelector('#allProducts').innerHTML = ''
    productArr.forEach(function(el){
        let oneProduct = document.createElement('div')
        oneProduct.setAttribute('class','product')
        let data = document.createElement('div')
        data.setAttribute('class','data')
        let image = document.createElement('img')
        image.setAttribute('src',el.image)
        let stars = document.createElement('img')
        stars.setAttribute('src',el.rating)
        stars.setAttribute('id','rating')
        let name = document.createElement('p')
        name.innerText = el.name
        let strikedPrice = document.createElement('p')
        strikedPrice.style.color = '#50504b'
        strikedPrice.innerText ='RS: '+ el.strikedPrice + '.00'
        let price = document.createElement('p')
        price.innerText ='RS: ' + el.Price + '.00'
        let cost = document.createElement('div')
        let cartbtn = document.createElement('button')
        cartbtn.setAttribute('class','cart')
        cartbtn.innerText = 'ADD TO CART'
        cartbtn.addEventListener('click',function(){
            addToCart(el)
        })
        cost.append(strikedPrice,price)
        data.append(image,stars,name,cost)
        oneProduct.append(data,cartbtn)
        document.querySelector('#allProducts').append(oneProduct)
    })
}

document.querySelector('#filter').addEventListener('change',handleFilter)
document.querySelector('#sort').addEventListener('change',handleSort)
function handleFilter(){
    let selected = document.querySelector('#filter').value;
    let filterArr = productArr.filter(function(el){
        return el.category ==selected
    })
    if(selected==''){
        displayProducts(productArr)
    }else{
        displayProducts(filterArr)
    }
}
function handleSort(){
    let selected = document.querySelector('#sort').value
    console.log(selected);
    if(selected == 'ASCENDING'){
        productArr.sort(function(a,b){
            let x = a.name.toUpperCase()
            let y = b.name.toUpperCase()
            if(x > y) return 1;
            if(x < y) return -1
            return 0;
        })
        console.log(productArr);
        displayProducts(productArr)
    }
    if(selected == ''){
        displayProducts(productArr)
    }
    if(selected == 'DESCENDING'){
        productArr.sort(function(a,b){
            let x = a.name.toUpperCase()
            let y = b.name.toUpperCase()
            if(x > y) return -1;
            if(x < y) return 1
            return 0;
        })
        displayProducts(productArr)
    }
    if(selected == 'LOW - HIGH'){
        productArr.sort(function(a,b){
            if(a.Price>b.Price) return 1;
            if(a.Price<b.Price) return -1
            return 0
        })
        console.log(productArr);
        displayProducts(productArr)
    }
    if(selected == 'HIGH - LOW'){
        productArr.sort(function(a,b){
         
            if(a.Price>b.Price) return -1;
            if(a.Price<b.Price) return 1
            return 0
        })
        displayProducts(productArr)
    }
    
}
let cartArr =JSON.parse(localStorage.getItem('cartEle'))|| []

function addToCart(el){
    cartArr.push(el)
    localStorage.setItem('cartEle',JSON.stringify(cartArr))
    location.reload()
    
}
