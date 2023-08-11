const ball = document.getElementById("all");
const btop = document.getElementById("top");
const bjg = document.getElementById("jg");
const bmid = document.getElementById("mid");
const bbot = document.getElementById("bot");

const campeones = [
    "Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Belveth",
    "Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana","DrMundo","Draven","Ekko","Elise","Evelynn",
    "Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Illaoi","Irelia",
    "Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","KSante","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn",
    "Kennen","Khazix","Kindred","Kled","KogMaw","Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","MasterYi","Malphite","Malzahar",
    "Maokai","Milio","MissFortune","Mordekaiser","Morgana","Naafiri","Nami","Nasus","Nautilus","Neeko","Nidalee","Nilah","Nocturne","Nunu",
    "Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renata", "Renekton","Rengar","Riven","Rumble",
    "Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra",
    "TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne",
    "Veigar","Velkoz","Vex","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","MonkeyKing","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick","Yuumi",
    "Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra"
  ];
const campeonestop = [
    "Aatrox","Camille","Chogath","Darius","DrMundo","Fiora","Gangplank","Garen","Gnar","Gragas","Gwen","Illaoi","Irelia","Jax","Jayce","Kayle",
    "Kennen","Kled","KSante","Malphite","Mordekaiser","Nasus","Olaf","Ornn","Pantheon","Poppy","Quinn","Renekton","Riven","Rumble","Sett",
    "Shen","Singed","Sion","TahmKench","Teemo","Trundle","Tryndamere","Urgot","Volibear","Yasuo","Yone","Yorick"
];
const campeonesjg = [
    "Amumu","Belveth","Diana","Ekko","Elise","Evelynn","Fiddlesticks","Gragas","Graves","Hecarim","Ivern","JarvanIV","Karthus","Kayn","Khazix",
    "Kindred","LeeSin","Lillia","MasterYi","Maokai","Naafiri","Nidalee","Nocturne","Nunu","Poppy","Rammus","RekSai","Rengar","Sejuani","Shaco",
    "Shyvana","Skarner","Sylas","Trundle","Udyr","Vi","Viego","Warwick","MonkeyKing","XinZhao","Zac"
];
const campeonesmid = [
    "Ahri","Akali","Akshan","Anivia","Annie","AurelionSol","Azir","Cassiopeia","Corki","Ekko","Fizz","Galio","Irelia","Kaisa","Kassadin","Katarina",
    "Leblanc","Lissandra","Lux","Malzahar","Naafiri","Neecko","Orianna","Pantheon","Qiyana","Ryze","Sylas","Syndra","Taliyah","Talon","Tristana",
    "TwistedFate","Veigar","Vex","Viktor","Vladimir","Xerath","Yasuo","Yone","Zed","Ziggs","Zoe"
];
const campeonesbot = [
    "Aphelios","Ashe","Caitlyn","Draven","Ezreal","Jhin","Jinx","Kaisa","Kalista","KogMaw","Lucian","MissFortune","Nilah","Samira"
];

function randomizar(lista){
    const campeon = Math.floor(Math.random()*lista.length);
    return campeon;
}
function cambiarimg(pclave){
    spritechamp.src = `https://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/${pclave}.png`
    spritechamp.style.display = 'flex'
    textchamp.style.display='none'
    Scampeones.style.padding = '0'
}
const rall = function(){
    const resall = randomizar(campeones);
    cambiarimg(campeones[resall])
}
const  rtop = function(){
    const restop = randomizar(campeonestop)
    cambiarimg(campeonestop[restop])
}
const rjg = function(){
    const resjg = randomizar(campeonesjg)
    cambiarimg(campeonesjg[resjg])
}
const rmid = function(){
    const resmid = randomizar(campeonesmid)
    cambiarimg(campeonesmid[resmid])
}
ball.addEventListener("click", rall)
btop.addEventListener("click", rtop)
bjg.addEventListener("click", rjg)
bmid.addEventListener("click", rmid)