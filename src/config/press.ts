export type PressCategory = "nota" | "entrevista" | "podcast";

export type PressItem = {
  outlet: string;
  country: string;
  url: string;
  category: PressCategory;
};

export const press: PressItem[] = [
  {
    outlet: "Doomed Nation",
    country: "Eslovenia",
    url: "https://doomed-nation.com/argentinian-stoner-doom-metal-band-r-u-i-d-o-presents-their-debut-ep-seis-monedas-para-caronte-available-now-on-all-major-streaming-platforms/",
    category: "nota",
  },
  {
    outlet: "Del Otro Lado Metal",
    country: "Argentina",
    url: "https://www.delotroladometal.com.ar/2026/02/04/graves-riffs-desde-el-desierto-cuyano/",
    category: "nota",
  },
  {
    outlet: "Metal Hammer España",
    country: "España",
    url: "https://metalhammer.es/miss-may-i-empire-of-disease-ruido/",
    category: "nota",
  },
  {
    outlet: "Mr Music",
    country: "Argentina",
    url: "https://www.youtube.com/watch?v=vQXeNi_v4O0&t=189s",
    category: "entrevista",
  },
  {
    outlet: "Metalcry",
    country: "Argentina",
    url: "https://www.youtube.com/watch?v=JSF4xL4hWMk",
    category: "entrevista",
  },
  {
    outlet: "Doomed Nation",
    country: "Eslovenia",
    url: "https://doomed-nation.com/doomed-confessionary-ariel-rober-german-emir-r-u-i-d-o/",
    category: "entrevista",
  },
  {
    outlet: "Planeta Tentaciones Radio Show",
    country: "España",
    url: "https://open.spotify.com/episode/4PxeFRyhqI6oTtvoTskbBv?si=2920c9ffe54a452b",
    category: "podcast",
  },
  {
    outlet: "Elektroshock - Metal Radio Show",
    country: "España",
    url: "https://go.ivoox.com/sq/917911",
    category: "podcast",
  },
  {
    outlet: "El Cuartelillo",
    country: "España",
    url: "https://elcuartelillo.lacotorra.org/2026/02/12/discazo-recibido-y-conciertazo-a-la-vista/",
    category: "podcast",
  },
  {
    outlet: "Rock en Llamas",
    country: "España",
    url: "https://open.spotify.com/episode/02JqRyoVbclu8poctZI0mr?si=9e78f22227f747b9",
    category: "podcast",
  },
  {
    outlet: "Aquí Musica",
    country: "Argentina",
    url: "https://aqui-musica.com/noticias/r-u-i-d-o-stoner-pesado-desde-el-desierto-cuyano/",
    category: "nota",
  },
  {
    outlet: "Radio Sonata",
    country: "Chile",
    url: "https://www.radiosonata.cl/ruido-stoner-argentino/",
    category: "nota",
  },
  {
    outlet: "Metal Cry",
    country: "España",
    url: "https://metalcry.com/los-argentinos-ruido-nos-hacen-saber-el-nombre-y-la-portada-de-su-primer-ep/",
    category: "nota",
  },
  {
    outlet: "Bad Music Radio",
    country: "España",
    url: "https://badmusicradio.com/2026/03/01/ruido-stoner-rock-desde-argentina/",
    category: "nota",
  },
  {
    outlet: "Metal Mania",
    country: "Chile",
    url: "https://metalmania.cl/r-u-i-d-o-presenta-su-ep-debut-6-monedas-para-caronte-y-consolida-su-identidad-stoner-desde-el-desierto-argentino/",
    category: "nota",
  },
  {
    outlet: "Solo Rock Uruguay",
    country: "Uruguay",
    url: "https://solorock-uruguay.com/2026/03/08/ruido/",
    category: "nota",
  },
  {
    outlet: "Triunfo Rock",
    country: "Argentina",
    url: "https://triunforock.com.ar/ruido-debuta-con-%C2%A8seis-monedas-para-caronte%C2%A8-identidad-cruda-y-psicodelica/",
    category: "nota",
  },
];
