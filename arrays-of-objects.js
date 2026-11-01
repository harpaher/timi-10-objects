let matsedill = [
  {
    id: 1,
    nafn: "Rúgbrauð með síld",
    verd: 1890,
    flokkur: "Forréttur",
    vegan: false,
  },
  {
    id: 2,
    nafn: "Grænmetissúpa",
    verd: 1690,
    flokkur: "Forréttur",
    vegan: true,
  },
  {
    id: 3,
    nafn: "Plokkfiskur",
    verd: 2890,
    flokkur: "Aðalréttur",
    vegan: false,
  },
  {
    id: 4,
    nafn: "Lambakjötsúpa",
    verd: 2490,
    flokkur: "Aðalréttur",
    vegan: false,
  },
  {
    id: 5,
    nafn: "Linsubaunakarrí",
    verd: 2690,
    flokkur: "Aðalréttur",
    vegan: true,
  },
  { id: 6, nafn: "Skyrkaka", verd: 1490, flokkur: "Eftirréttur", vegan: false },
  { id: 7, nafn: "Sorbet", verd: 1290, flokkur: "Eftirréttur", vegan: true },
];
console.log(matsedill.length);
console.log(matsedill[0]);
console.log(matsedill[0].nafn);
console.log(matsedill[matsedill.length - 1].nafn);

// setjum - 1 og þar sem 0 í lista er atriði nr 1 bakkar hún um einn og fer í aftasta.
for (const rettur of matsedill) {
  console.log(`${rettur.nafn} - ${rettur.verd} kr.`);
}
// þetta fyrir ofan er listi af arrayum getum við gert console.log eða console.table og seð þetta í töflu. (tafla sjá fyrir neðan)
console.table(matsedill);
// til að fá lista yfir alla rétti (nofn) get ég const breytu og svo console log breytuna til að fá listann. r þýðir réttur

const nofn = matsedill.map((r) => r.nafn);
console.log(nofn);

// `til að fá bara rétti sem eru vega: byrja á því að búa til breytu
// const veganRettir = matsedill.filter.apply((r) => r.vegan) gæti sett ! fyrir frama r.vegan sem þýðir ekki það sem er vegna.
// svo console.log(veganRettir); til að fá kóðan fram á síðunni.
const veganRettir = matsedill.filter((r) => r.vegan);
console.log(veganRettir);

// til að taka saman verð á öllum veganréttum: kennarinn setti veganRettir en þar sem ég vil halda kóðanum fyrir ofan
// og ég fékk villu fyrir að nota const 2x í sama gildi breyti ég veganRettir í samtalsVegan
const samtalsVegan = matsedill
  .filter((r) => r.vegan)
  .reduce((sum, acc) => sum + acc.verd, 0);
console.log(samtalsVegan);

// finna alla rétti sem eru aðalréttir:
const adalrettir = matsedill.filter((r) => r.flokkur === "Aðalréttur");
console.log(adalrettir);

// ef við viljum loopa í gegnum listann og finna 3 réttinn á listanum:
const plokkari = matsedill.find((r) => r.id === 3);
console.log(plokkari);
// gæti líka gert þetta svona en verðum að eyða því sem er fyrir ofan af því plokkar er alredy declared þar.
// const plokkari = matsedill.find((r) => r.nafn === "Plokkfiskur");
// console.log(plokkari);

// ef ég geri sveppasalat kemur undefinde því það er ekki til.
const sveppasalat = matsedill.find((r) => r.nafn === "Sveppasalat");
console.log(sveppasalat);

// reduce, notandi sem er að leggja inn pöntun
const pontun = [matsedill[0], matsedill[2], matsedill[5]];

// til að finna summuna fyrir pöntunina:
// hér erum við að taka (sum,rettur,) 3x ss matsedill 0, 2 og 5, lagt saman og byrjað á 0 kr. (sum + rettur.verd, 0)
const samtals = pontun.reduce((sum, rettur) => sum + rettur.verd, 0);
console.log(pontun);
console.log(samtals);

// flokka eftir verði: með því að gera ...matsedill er ég að gera afrit af matseðlinum en ekki breyta matseðlinum sjálfum.
const eftirVerdi = [...matsedill].sort((a, b) => a.verd - b.verd);
console.log(eftirVerdi);

// get spurt hvort einhver réttur sér vegan, ekki að fá lista yfir vegan rétti, bara true or false:
const erVegan = matsedill.some((r) => r.vegan);
// get líka spurt hvort allir réttir séu vegan:
const erAlltVegan = matsedill.every((r) => r.vegan);

// get srkifað þetta til að athug hvort einhverjir réttir seú undir 3000 kr:
// const erAlltVegan = matsedill.every((r) => r.verd < 3000);
console.log(erVegan);
console.log(erAlltVegan);

// fara í gegnum alla veganréttir, fá sortaða lista eftir ódýrasta réttinum, ef hæsta fyrst þá a.verd + b.verd:
const veganNofn = matsedill.filter((r) => r.vegan).sort((a, b) => a.verd - b.verd).map((r) => r.nafn);
console.log(veganNofn);

// þetta allt fyrir ofan eru þessi array methoods/hjálpargögn