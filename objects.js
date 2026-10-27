console.log("Hello world");

let retturNafn = "Stöppuð ýsa með tómatsósu";
let retturVerd = 1990;

console.log(`Réttur dagsins er ${retturNafn} - Verð: ${retturVerd}`);
// get gert þetta eins og að neðan en auðveldara að sætkja strax strengi í javaskript
console.log(
  "Réttur dagsins er " + retturNafn + "- verð: " + retturVerd + " kr. ",
);
let lykill = "nafn";

const rettur = {
  nafn: "Stöppuð ýsa með tómatsósu",
  verd: 1990,
  flokkur: "Aðalréttur",
  vegan: false,
};
console.log(rettur["nafn"]);
// `skoða á mínútu 38 í fyrri upptöku tími 10 hverju hann breytir til að skrifa yfir og sannreyna true og false
// prófar að setja nafn "jón" í staðin fyrir "Stöppuð ýsa með tómatsósu og delete því svo

const rettur2 = {
  nafn: "Nautasteik",
  verd: 5990,
  flokkur: "Aðalréttur",
  vegan: false,
  ofnæmi: ["sellerí"],
  naeringagildi: { kcal: 520, protein: 32 },
};

console.log(rettur2.ofnæmi[0]);
console.log(rettur2.naeringagildi.kcal);

console.log(rettur2);
// ef ég geri þetta þá get ég fengið hvaða lyklar eru í þessum Opject
// án þess að fá allan objectinn með öllum value-unum
console.log(Object.keys(rettur2));
console.log(Object.values(rettur2));
console.log(Object.keys(rettur2.naeringagildi));
// þegar maður velur Object koma upp hugmyndir af því sem ég get valið til viðbótar
// líka ef ég set rettur2. þá kemur t.d. naeringargildi, ofnæmi ofl.

for ([lykill, gildi] of Object.entries(rettur2)) {
  console.log(`${lykill},${gildi}`);
}
// er að spyrja hvort það sé réttur í rettur2 sem heitir vegan.
// kemur þá true þegar búið er að skrifa í node í terminal (node .\objects.js)
console.log("vegan" in rettur2);
