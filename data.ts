export interface Recipe {
    id: string,
    category: string,
    name: string,
    description: string,
    ingredients: string[],
    instructions: string[],
    imageUrl: string
}

export interface Catagory {
    id: string,
    filterName: string,
    textName: string,
    image: string
}

export const recipeArray: Recipe[] = [
    {
        id: '1',
        category: 'pie',
        name: 'Melon- och myntapaj',
        description: 'Lyxig och god melon- och myntapaj som passar perfekt till efterrätt. Den söta piel de sapomelonen balanseras fint in i fyllningen med saft från limen och rostad kokos. ',
        ingredients: ['3 dl vetemjöl', '100 g smör eller margarin', '2 msk strösocker', '2 msk vatten', '1-2 lime', '1 1/2 dl vitt vin eller matlagningsvin', '1 dl vatten', '1/2 dl flytande honung', '2 1/2 msk majsstärkelse', '1 dl riven kokos', '1 piel de sapomelon (1 melon motsvarar ca 1 kg)', '1 kruka mynta', '2 msk finstrimlad samt till garnering', '2 dl crème fraiche', '1 msk florsocker', '1/2 tsk vaniljsocker'],
        instructions: ['Sätt ugnen på 225°C.', 'Blanda samman mjöl, matfett och socker. Tillsätt vatten och arbeta snabbt ihop till en deg.', 'Kavla eller tryck ut degen i en form med löstagbar kant, 23 cm diameter. Degen ska gå upp 3-4 cm upp på kanterna.', 'Grädda pajskalet mitt i ugnen 12-15 min. Låt kallna.', 'Fyllning: Tvätta och riv det yttersta skalet av limen. Pressa ut 2 msk saft(för 6 port). Koka upp vin, vatten, limesaft, honung och majsstärkelse i en kastrull under vispning.', 'Sjud i 1-2 minuter. Ta av kastrullen från värmen och låt krämen svalna.', 'Rosta kokosen i en torr stekpanna. Låt kokosen svalna. Skala och kärna ur melonen. Skär den i små tärningar. Strimla 2 msk mynta(för 6 port). Blanda melontärningar, kokos, mynta och lime- honungskrämen.', ' Vispa crème friache så att den blir fast tillsammans med florsocker och vaniljsocker. Lägg i en engångsspritspåse.', 'Häll fyllningen i pajskalet. Spritsa crème fraiche på fyllningen. Garnera med myntablad och finrivet limeskal.'],
        imageUrl: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_231009/cf_259/melon-_och_myntapaj.jpg'
    },
    {
        id: '2',
        category: 'cookie',
        name: 'Sega kolakakor',
        description: 'Goda kolakakor är gärna lite sega i bettet, och det blir kakorna med det här enkla receptet. Sirap, farin och vanilj ger småkakorna den rätta smaken av kola. En populär kaka som går snabbt att baka och gillas av både stora och små.',
        ingredients: ['100 g smör eller margarin', '1 dl brun farin strö', '2 msk sirap', '2-3 tsk vaniljsocker', '1/2 tsk bikarbonat', '2dl vetemjöl (2 dl motsvarar 120 g'],
        instructions: ['Sätt ugnen på 175C', 'Rör matfettet med farin, sirap och vanilj. Blanda mjölet med bikarbonaten och rör ner det och arbeta ihop till en deg.', 'Dela degen i 3 delar. Rulla ut varje del till en rulle ca 35 cm lång. Lägg dem på en plåt med bakplåtspapper. Tryck till rullarna med en gaffel.', 'Grädda mitt i ugnen ca 10 minuter. Skär dem i sneda bitar medans de är varma. Låt svalna på plåten.'],
        imageUrl: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_62604/cf_259/sega_kolakakor.jpg'
    },
    {
        id: '3',
        category: 'pie',
        name: 'Äppelpaj med mandelsmul',
        description: 'Snacka om paj på direkten! Strössla havregryn och mandelmassa över äppelklyftorna. Hyvla över smör och grädda. Variera smaken på äppelsmulpajen genom att byta ut kardemumma och kanel mot rivet skal av en citron eller strö över en näve russin.',
        ingredients: ['6 äpplen', '1/2 tsk stötta kardemummakärnor', '1/2tsk malen kanel', '200 g riven mandelmassa', '1 dl havregryn', '75 g smör'],
        instructions: ['Sätt ugnen på 175°C.', 'Dela, kärna ur och skär äpplena i klyftor. Lägg i en ugnssäker form och strö över kardemumma och kanel.', 'Varva riven mandelmassa och havregryn ovanpå äpplena. Hyvla över smöret.', 'Grädda i mitten av ugnen 30-40 minuter.', 'Servera pajen med vaniljglass eller en klick vispad grädde.'],
        imageUrl: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_103080/cf_259/appelpaj_med_mandelsmul.jpg'
    },
    {
        id: '4',
        category: 'cookie',
        name: 'Chocolate chip cookies',
        description: 'Baka dessa underbara chocolate chip cookies med hasselnötter när du är sugen på riktigt goda kakor som har kort tillagningstid. Choklad och grovhackade nötter gör dessa chokladkakor ljuvliga.',
        ingredients: [' 100 g margarin (rumsvarmt)', '1 dl brun farin', '1/2 tsk vaniljsocker', '1 ägg', ' 2 dl vetemjöl', '1 tsk bakpulver', '1 krm salt', ' 100 g mörk blockchoklad', '50 g hasselnötter'],
        instructions: ['Sätt ugnen på 200°C.', 'Arbeta margarin, farin eller socker och vaniljsocker med elvisp i en skål. Tillsätt ägget och blanda väl. Blanda mjöl, bakpulver och salt och tillsätt det.', 'Grovhacka blockchokladen och hasselnötterna. Rör ner dem i smeten.', 'Klicka 1-2 msk smet med ett par centimeters mellanrum på plåtar med bakdduk/bakpapper. Grädda ca 10 minuter. Låt svalna på ugnsgaller.'],
        imageUrl: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_30072/cf_259/chocolate_chip_cookies.jpg'
    },
    {
        id: '5',
        category: 'cookie',
        name: 'Sommarskorpor',
        description: 'Om du tycker om knapriga, goda och perfekta skorpor så ska du testa det här receptet på sommarskorpor. Antingen bakar du efter grundreceptet eller utgår från det och smaksätter med till exempel mandel och choklad. Försvinnande gott!',
        ingredients: ['4 dl vetemjöl', '2 dl ljust muscovadoråsocker', '1 tsk bakpulver', '2 ägg', '75 g smör eller margarin'],
        instructions: ['Sätt ugnen på 200°C.', 'Blanda mjöl, socker och bakpulver i en matberedare eller bunke. Tillsätt ägg och matfettet skuret i mindre bitar. Blanda snabbt ihop till en deg. Lägg upp degen på en mjölad arbetsbänk och arbeta in någon av smaksättningarna.', 'Dela degen i 4 bitar och rulla ut till rullar ca 30 cm. Lägg på en plåt med bakplåtspapper.', 'Grädda mitt i ugnen ca 20 minuter.', 'Sänk värmen till 100°C. Skär rullarna medan de är varma i sneda bitar direkt på plåten. Sätt in mitt i ugnen för att torka skorporna, ca 30 minuter med ugnsluckan på glänt.', 'Olika smaksättningar: 1 dl pinjenötter och rivet skal från 2 citroner eller 1 dl solroskärnor och 1-2 tsk stötta kardemummakärnor eller 1 dl grovhackad mandel och 100 g mörk choklad (för 30 stycken)'],
        imageUrl: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_63269/cf_259/sommarskorpor.jpg'
    }
]

export const categories : Catagory[] = [
    {
        id: '0',
        filterName: 'all',
        textName: 'Alla recept',
        image: 'https://blog.hotelspecials.se/wp-content/uploads/sites/8/2017/08/afternoon-tea_foto_bjornolfenius.jpg'
    },
    {
        id: '1',
        filterName: 'pie',
        textName: 'Pajer',
        image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_103080/cf_259/appelpaj_med_mandelsmul.jpg'
    },
    {
        id: '2',
        filterName: 'cookie',
        textName: 'Kakor',
        image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_30072/cf_259/chocolate_chip_cookies.jpg'
    },
    {
        id: '3',
        filterName: 'cake',
        textName: 'Tårtor',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg?quality=90&resize=500,454'
    }
]
