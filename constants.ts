
import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Immeuble Résidentiel 'Le Panorama'",
    domain: "Structure Béton",
    imageUrl: "https://picsum.photos/seed/panorama/600/400",
    description: "Conception et supervision de la structure en béton armé pour un immeuble de 12 étages en zone urbaine dense.",
    challenges: "Optimisation des portées pour maximiser l'espace habitable tout en respectant des contraintes sismiques strictes. Intégration des fondations profondes complexes."
  },
  {
    id: 2,
    title: "Rénovation d'un Bâtiment Industriel",
    domain: "Réhabilitation",
    imageUrl: "https://picsum.photos/seed/industrial/600/400",
    description: "Transformation d'un ancien entrepôt en un espace de bureaux modernes et un centre de co-working.",
    challenges: "Renforcement de la structure métallique existante pour supporter de nouvelles charges et mise aux normes de sécurité incendie sans dénaturer le caractère industriel du lieu."
  },
  {
    id: 3,
    title: "Pont Haubané 'La Traversée'",
    domain: "Ouvrage d'Art",
    imageUrl: "https://picsum.photos/seed/bridge/600/400",
    description: "Participation à l'étude d'exécution pour un pont haubané de 300 mètres de portée principale.",
    challenges: "Analyse dynamique sous l'effet du vent et des charges de trafic. Conception des ancrages de haubans et phasage de construction complexe."
  },
  {
    id: 4,
    title: "Centre Commercial 'Grand-Place'",
    domain: "Structure Mixte Acier-Béton",
    imageUrl: "https://picsum.photos/seed/mall/600/400",
    description: "Ingénierie de la charpente métallique de la toiture et des planchers collaborants pour un centre commercial de 50 000 m².",
    challenges: "Conception d'une verrière de grande portée et gestion des interfaces entre les différents corps de métier. Respect d'un calendrier de construction très serré."
  },
  {
    id: 5,
    title: "Villa Contemporaine 'Vue Mer'",
    domain: "Résidentiel Haut de Gamme",
    imageUrl: "https://picsum.photos/seed/villa/600/400",
    description: "Étude structurelle pour une villa d'architecte avec de larges porte-à-faux et des façades entièrement vitrées.",
    challenges: "Gestion des déformations pour garantir la pérennité des menuiseries de grande dimension. Conception de murs de soutènement discrets dans un terrain en forte pente."
  },
  {
    id: 6,
    title: "Diagnostic d'un Bâtiment Historique",
    domain: "Expertise & Diagnostic",
    imageUrl: "https://picsum.photos/seed/historic/600/400",
    description: "Évaluation de l'état structurel d'un édifice du 18ème siècle et préconisations de renforcement.",
    challenges: "Utilisation de méthodes de diagnostic non-destructives pour préserver l'intégrité du bâtiment. Conception de solutions de renforcement réversibles et compatibles avec les matériaux d'époque."
  },
];
