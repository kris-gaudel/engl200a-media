import beachBirdImage from "../../media/ENGL200A_1.jpeg";
import sunHorizonImage from "../../media/ENGL200A-2.jpeg";
import mountainImage from "../../media/ENGL200A-3.jpeg";
import benchImage from "../../media/ENGL200A-4.jpeg";
import valleyPathImage from "../../media/ENGL200A-5.jpeg";

export type Chapter = {
  id: string;
  marker: string;
  line: string;
  translation: string;
  gloss: string;
  explanation: string;
  image: string;
  alt: string;
  align: "left" | "right" | "center";
  objectPosition: string;
  overlayClassName: string;
};

export type GalleryImage = {
  image: string;
  alt: string;
  title: string;
  note: string;
  span: string;
};

export const siteMeta = {
  creator: "Kristofer Gaudel",
  heroImage: sunHorizonImage,
  heroAlt:
    "Sunlight breaking over the ocean horizon, reflected across a quiet shoreline at dawn.",
  title: "Pilgrimage",
  subtitle:
    "A visual remediation of five lines from Geoffrey Chaucer's General Prologue, translated through original landscape photography.",
  intro:
    "This project recasts Chaucer's call to pilgrimage as a contemporary passage through weather, distance, shoreline, and open ground. The readings begin from the original Middle English text, then are translated into modern English and visualized through original landscape photography.",
  closing:
    "What begins as longing becomes movement. In these landscapes, pilgrimage is less a medieval route than a contemporary act of attention: a turning toward distance, light, and the quiet force of going on.",
};

export const chapters: Chapter[] = [
  {
    id: "chapter-1",
    marker: "I",
    line: "Thanne longen folk to goon on pilgrimages,",
    translation: "Then people begin to long to go on pilgrimages.",
    gloss: "The journey opens first as desire: a hush before departure.",
    explanation:
      "The bench and forked path translate longing into stillness before motion. Rather than depicting pilgrims directly, the image holds the inward pause in which the wish to leave first gathers.",
    image: benchImage,
    alt: "A solitary bench beside a winding dirt path under a fading pink dusk sky.",
    align: "left",
    objectPosition: "center 68%",
    overlayClassName:
      "bg-gradient-to-r from-[#080b10]/88 via-[#080b10]/52 to-[#080b10]/14",
  },
  {
    id: "chapter-2",
    marker: "II",
    line: "And palmeres for to seken straunge strondes,",
    translation: "And pilgrims set out to seek distant and unfamiliar shores.",
    gloss: "The coast appears as a threshold, luminous and unfamiliar.",
    explanation:
      "The shoreline renders Chaucer's 'straunge strondes' through light, tide, and the solitary shorebird. The scene suggests encounter with the unknown through atmosphere and edge rather than literal travel narrative.",
    image: beachBirdImage,
    alt: "Low waves at sunset with a lone shorebird crossing wet sand and a distant headland on the horizon.",
    align: "right",
    objectPosition: "center center",
    overlayClassName:
      "bg-gradient-to-l from-[#060a10]/88 via-[#060a10]/48 to-[#060a10]/12",
  },
  {
    id: "chapter-3",
    marker: "III",
    line: "To ferne halwes, kowthe in sondry londes;",
    translation: "To far-off holy places, known in many different lands.",
    gloss: "Distance lifts into rock and sky, where the destination remains unnamed.",
    explanation:
      "The mountainside converts the idea of remote holy destinations into scale and elevation. The upward reach of stone into open sky gives the line a sense of reverence without relying on religious iconography.",
    image: mountainImage,
    alt: "A rocky mountainside catching the last light beneath a wide, pale evening sky.",
    align: "left",
    objectPosition: "center 38%",
    overlayClassName:
      "bg-gradient-to-r from-[#05070d]/90 via-[#05070d]/46 to-transparent",
  },
  {
    id: "chapter-4",
    marker: "IV",
    line: "And specially from every shires ende",
    translation: "And especially from the farthest edges of every shire.",
    gloss: "Many points of origin gather into one widening landscape.",
    explanation:
      "The broad valley and receding path suggest many starting points feeding into one larger movement. The composition translates Chaucer's collective geography into an open field of possible arrivals and departures.",
    image: valleyPathImage,
    alt: "An earthen trail winding through a broad valley toward dark hills at dusk.",
    align: "center",
    objectPosition: "center 58%",
    overlayClassName:
      "bg-gradient-to-t from-[#05070d]/90 via-[#05070d]/34 to-transparent",
  },
  {
    id: "chapter-5",
    marker: "V",
    line: "Of Engelond to Caunterbury they wende,",
    translation: "From across England they travel toward Canterbury.",
    gloss: "The final movement narrows into direction, light, and a horizon to follow.",
    explanation:
      "Returning to the bright horizon turns the final line into a destination image. The path of reflected light across the water stands in for the act of going onward toward a named end point.",
    image: sunHorizonImage,
    alt: "Sunrise over a calm shoreline, with light reflected in a long vertical path across the water.",
    align: "right",
    objectPosition: "center 58%",
    overlayClassName:
      "bg-gradient-to-l from-[#06080f]/86 via-[#06080f]/42 to-[#06080f]/08",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    image: sunHorizonImage,
    alt: "Bright sunrise over still ocean water and a reflective shoreline.",
    title: "Toward light",
    note: "A horizon held in gold and slate.",
    span: "md:col-span-5 md:row-span-2",
  },
  {
    image: benchImage,
    alt: "A bench facing a dirt path and open brushland under a lavender sky.",
    title: "Threshold",
    note: "A place to pause before moving on.",
    span: "md:col-span-3",
  },
  {
    image: beachBirdImage,
    alt: "A shorebird on wet sand beside gentle evening waves.",
    title: "Strange strand",
    note: "The shoreline as crossing and encounter.",
    span: "md:col-span-4",
  },
  {
    image: mountainImage,
    alt: "A mountain slope lit warmly at dusk beneath an expansive sky.",
    title: "Far country",
    note: "Distance rising into stone and air.",
    span: "md:col-span-4",
  },
  {
    image: valleyPathImage,
    alt: "A path curving through a valley toward low mountains in fading evening light.",
    title: "Wayfaring",
    note: "The line of travel disappearing ahead.",
    span: "md:col-span-4",
  },
];

export const sectionLinks = [
  { id: "hero", label: "Home" },
  { id: "intro", label: "Statement" },
  ...chapters.map(({ id, marker }) => ({ id, label: marker })),
  { id: "closing", label: "Closing" },
  { id: "portfolio", label: "Portfolio" },
];
