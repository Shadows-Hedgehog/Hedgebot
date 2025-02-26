module.exports = {
  config: {
    name: "emoji_react",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses aux emojis variés",
    longDescription: "Réponses provocantes et humoristiques adaptées aux emojis",
    category: "reply",
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const emoji = event.body.trim();

    const responses = {
      "🙈": [
        "T’as fermé les yeux ? C’est pas ça qui va te rendre plus intelligent.",
        "On dirait que tu fuis la réalité, comme d’habitude.",
        "Cacher tes yeux ne cache pas ton échec.",
        "Tu fermes les yeux, mais ton problème est toujours là.",
        "Tu veux pas voir ? Trop tard, t’es déjà dans la merde.",
        "Ferme les yeux, peut-être que le monde sera moins moche… ou pas.",
        "Arrête de jouer à cache-cache, personne te cherche.",
        "T’as vu quelque chose d’horrible ? T’inquiète, t’es déjà dedans.",
        "T’as fermé les yeux, mais ton cerveau est déjà déconnecté.",
        "Tu crois que fermer les yeux te rendra invisible ? Raté.",
      ],
      "🙉": [
        "T’entends rien ? Normal, y’a jamais rien d’intelligent autour de toi.",
        "T’as bloqué tes oreilles ? Dommage, ça bloque pas les insultes.",
        "Évite d’écouter, comme ça t’éviteras d’avoir une opinion.",
        "Boucher tes oreilles, c’est ta stratégie pour ignorer tes problèmes ?",
        "T’entends rien, mais on entend ton inutilité de loin.",
        "T’as coupé le son, mais t’es toujours bruyant dans ton inutilité.",
        "Arrête de faire genre, t’écoutes toujours les ragots.",
        "T’entends rien ? T’inquiète, personne te parle.",
        "Boucher tes oreilles, c’est mignon, mais ça empêche pas la honte.",
        "T’es sourd ou t’es juste idiot ? Les deux, peut-être.",
      ],
      "🙊": [
        "Tu veux pas parler ? Ça nous fait des vacances.",
        "Le silence te va bien, reste comme ça.",
        "Si t’as rien à dire, c’est mieux que d’entendre tes bêtises.",
        "Tais-toi, on préfère le bruit du vent.",
        "T’as mis un cadenas sur ta bouche ? Enfin une bonne idée.",
        "Tu parles pas ? Garde ça comme une habitude.",
        "Le silence est d’or, et toi t’es fauché.",
        "Tu veux pas parler ? Parfait, personne voulait t’écouter.",
        "Tu fermes ta bouche, mais ton visage parle pour toi… et c’est pas glorieux.",
        "On dirait que t’as enfin compris que tes mots valent rien.",
      ],
      "🔥": [
        "Oh, du feu ! Fais gaffe, t’es déjà cramé dans la vie.",
        "Tu veux brûler quoi ? Tes rêves ? C’est déjà fait.",
        "T’es en feu ? Plutôt en train de fumer ton échec.",
        "Arrête de jouer avec le feu, t’es déjà en cendres.",
        "Flamme ou pas, t’éclaires toujours rien.",
        "T’as mis le feu, mais pas à ton avenir.",
        "Un feu de joie ou juste un feu de honte ?",
        "T’es chaud comme la braise, mais aussi inutile qu’une cendre.",
        "Le feu, c’est impressionnant. Toi ? Beaucoup moins.",
        "Fais gaffe, à force de brûler, t’auras plus rien à perdre.",
      ],
      "👀": [
        "T’as vu quoi ? Ton reflet dans un miroir cassé ?",
        "Tu regardes quoi ? Y’a rien d’intéressant, comme toi.",
        "T’as les yeux ouverts, mais toujours rien dans le cerveau.",
        "Fixe bien, peut-être que tu comprendras enfin quelque chose.",
        "Arrête de mater, t’as déjà assez vu de bêtises.",
        "Tes yeux sont grands ouverts, mais ta vision est limitée.",
        "Tu veux voir quoi ? Une amélioration ? Bonne chance.",
        "Regarder ne suffit pas, faut aussi réfléchir… Désolé pour toi.",
        "Tes yeux brillent, mais c’est sûrement la fatigue.",
        "T’as l’air curieux, mais t’apprends jamais rien.",
      ],
      "🖕": [
        "Oh, le majeur ! Classe. T’as appris ça à l’école ?",
        "T’es vulgaire, mais toujours aussi pathétique.",
        "Un doigt levé ? C’est tout ce que t’as dans ton arsenal ?",
        "Un geste puissant, mais venant de toi, ça fait rire.",
        "T’as levé le doigt ? On s’en fout.",
        "Ton majeur est impressionnant, contrairement à ton QI.",
        "Tu veux provoquer ? Essaye avec des mots, si t’en connais.",
        "Un doigt levé, mais t’es toujours à genoux dans la vie.",
        "Oh, un rebelle. Retourne dans ta grotte.",
        "T’es autant insultant qu’un chaton qui miaule.",
      ],
      "✍️": [
        "Tu prends des notes ? Enfin, une bonne idée.",
        "T’écris quoi ? Tes excuses pour être si nul ?",
        "Note bien, ça pourrait te servir, pour une fois.",
        "T’as un stylo, mais pas de cerveau.",
        "Tu dessines ? On sait tous que c’est des gribouillages.",
        "Prends des notes, mais n’oublie pas de les lire un jour.",
        "Un écrivain en herbe ? Plutôt un clown avec un stylo.",
        "T’écris quoi ? Ton testament ? Trop tôt.",
        "Ton écriture est sûrement aussi moche que ta vie.",
        "Prends des notes, mais arrête d’écrire des conneries.",
      ],
      "🙏": [
        "Tu pries ? Ça changera pas grand-chose.",
        "Demande pardon, mais le karma t’a déjà abandonné.",
        "La prière, c’est bien. L’action, c’est mieux.",
        "T’es en train de supplier ? Pour quoi, cette fois ?",
        "Tu pries pour un miracle ? Désolé, y’en aura pas.",
        "Les mains jointes, mais le cœur vide.",
        "Arrête de prier et commence à travailler sur toi.",
        "Dieu t’entend, mais il doit bien rigoler.",
        "Tu demandes pardon ? C’est pas suffisant.",
        "La prière, c’est ton dernier espoir. Bon courage.",
      ],
      "🤦": [
        "Tu te tapes le front ? On dirait que t’as enfin compris quelque chose.",
        "Un facepalm, c’est bien, mais réfléchis un peu.",
        "T’es déçu de toi-même ? Nous aussi.",
        "Frapper ton front, ça réveillera pas ton cerveau.",
        "Un geste désespéré, à ton image.",
        "T’as honte ? C’est un bon début.",
        "Un facepalm, mais t’oublies de travailler sur toi.",
        "T’es fatigué de tes conneries ? Bienvenue au club.",
        "Arrête de te plaindre, ça changera rien.",
        "Un geste pour cacher ta nullité, bravo.",
      ],
      "🤷": [
        "Tu sais pas ? Comme d’habitude.",
        "Un haussement d’épaules, classique de quelqu’un qui abandonne.",
        "T’as aucune idée ? C’est pas nouveau.",
        "Ignorance ou indifférence, t’es doué pour les deux.",
        "Un geste vide, comme ta tête.",
        "T’es perdu ? C’était prévisible.",
        "Tu t’en fiches ? C’est bien ton style.",
        "Un haussement d’épaules, mais pas de solutions.",
        "T’as abandonné ? Enfin une décision cohérente.",
        "Un signe d’impuissance, rien de surprenant.",
      ],
    };

    if (responses[emoji]) {
      const randomResponse =
        responses[emoji][Math.floor(Math.random() * responses[emoji].length)];
      return message.reply(randomResponse);
    }
  },
};
