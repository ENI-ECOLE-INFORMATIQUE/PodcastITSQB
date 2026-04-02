const podcasts = [
  {
    title: "01 - Les fondamentaux du test logiciel",
    img: "./media/img/01-les-fondamentaux-de-l'ingénierie-du-test-logiciel.png",
    description: `Cet audio est une **session de révision approfondie destinée aux étudiants** portant sur les fondamentaux du test logiciel, visant à déconstruire les mythes de ce métier et à clarifier le vocabulaire pour éviter les pièges d'examen. 

Voici les concepts clés qui y sont détaillés :

**1. La déconstruction du cliché du testeur et la préparation**
Contrairement à l'image classique d'une personne qui clique au hasard sur son écran en espérant faire planter le système, le test logiciel est **un ensemble d'activités extrêmement structuré**. L'exécution physique des tests n'est que la pointe de l'iceberg. Une grande partie du travail réside dans la **phase d'analyse et de conception en amont**, où le testeur évalue la clarté et la testabilité des exigences (comme les *user stories*) avant même que le code ne soit écrit. Trouver un problème sur papier coûte infiniment moins cher que de modifier le code une fois l'application terminée. 

**2. Le véritable objectif du test**
Le but fondamental n'est pas seulement de vérifier que tout fonctionne bien, mais de **chercher activement à provoquer des défaillances** pour révéler les défauts cachés du produit. En poussant le système dans ses retranchements, le testeur agit comme un gestionnaire de risques dont l'objectif est de **réduire le risque d'échec** et d'offrir un niveau de confiance raisonnable aux parties prenantes avant la sortie du logiciel.

**3. La maîtrise de la chaîne causale**
L'audio insiste sur un vocabulaire ultra précis pour définir comment naît un bug, étape par étape :
*   **L'erreur :** C'est **l'action humaine incorrecte**, comme un développeur fatigué qui fait une faute de frappe en écrivant 10000 au lieu de 1000.
*   **Le défaut :** C'est **l'anomalie physique matérielle** (le code défectueux) introduite par l'erreur dans un artefact. Un défaut peut rester silencieusement endormi dans le code pendant des années s'il n'est pas stimulé.
*   **La défaillance :** C'est **le comportement incorrect et visible** par l'utilisateur lorsque le logiciel s'exécute dans des conditions bien précises. 
*   **La cause racine :** C'est le **mal profond ou la raison systémique** (souvent liée à l'organisation, comme une pression excessive sur les délais) qui a poussé le développeur à faire l'erreur initiale.

**4. Les distinctions fondamentales de l'industrie**
Les intervenants clarifient des confusions fréquentes en entreprise :
*   **Test vs Assurance Qualité (QA) :** Le test est du contrôle qualité **orienté vers le produit** (on cherche les défauts sur un logiciel fini), tandis que l'assurance qualité est **orientée vers le processus et purement préventive** (on met en place des règles, comme des revues de code, pour empêcher les erreurs d'arriver). L'audio compare la QA à la sécurité routière (prévention) et le test au contrôle technique (vérification à un instant T).
*   **Test vs Débogage :** Le testeur révèle et documente la défaillance, mais c'est le développeur qui fait le débogage en modifiant le code pour corriger le défaut. Après la correction, le testeur effectue un **test de confirmation** (pour vérifier que le bug a disparu) et des **tests de régression** (pour s'assurer que la correction n'a pas accidentellement cassé une autre partie du logiciel).

**5. L'illusion de la perfection**
L'audio se termine sur un principe fondamental et contre-intuitif : **le test peut démontrer la présence de défauts, mais il ne peut jamais prouver leur absence totale**. Il est matériellement impossible de tester toutes les combinaisons infinies d'utilisations possibles. Le rôle du test n'est donc pas d'atteindre le risque zéro, ce qui serait une perte de temps, mais d'être pragmatique en concentrant les efforts sur les zones les plus critiques pour l'entreprise.`,
    audio: "./media/audio/01-Les-Fondamentaux-du-Test-Logiciel.mp3",
  },
  {
    title: "02 - Les 7 principes du test logiciel",
    description: `Cet audio est une analyse approfondie des concepts clés du "syllabus d'introduction au test logiciel", pensée comme une session de révision stratégique pour préparer les étudiants à un examen exigeant. Il se concentre spécifiquement sur la psychologie du testeur, l'organisation de son travail et les pièges conceptuels à éviter lors de l'examen.

Voici les principaux concepts décortiqués par les intervenants :

**1. Les 7 principes fondamentaux du test logiciel**
Ces principes constituent le socle de la pensée du testeur pour formater son esprit :
*   **Le test montre la présence de défauts, non leur absence :** Il est mathématiquement et matériellement impossible de certifier le "zéro bug". Le but est d'adopter un rôle d'investigateur et de chercher la faille.
*   **Le test exhaustif est impossible :** À cause de "l'explosion combinatoire" de tous les paramètres (navigateurs, systèmes, textes), tester toutes les configurations prendrait des années. Il faut donc faire des choix et prioriser les tests selon la gestion des risques.
*   **Tester tôt :** Une erreur interceptée dès la phase des exigences initiales se corrige d'un simple "coup de gomme" en 5 minutes. Si elle est découverte tard, l'impact est désastreux (effets boule de neige nécessitant de tout recoder).
*   **Le regroupement des défauts :** À l'image de termites grignotant une seule et même poutre, le principe de Pareto s'applique : 80 % des bugs se cachent souvent dans seulement 20 % des modules, généralement les plus complexes ou les plus modifiés.
*   **L'usure des tests (Le paradoxe du pesticide) :** Répéter aveuglément les mêmes scénarios finit par ne plus rien détecter, car le logiciel évolue et le testeur s'habitue. Il faut donc régulièrement renouveler sa stratégie pour ne pas devenir aveugle aux nouveaux défauts.
*   **Le test dépend du contexte :** La rigueur déployée ne sera pas la même pour une application de recettes de cuisine que pour le système de freinage critique d'un TGV où des vies humaines sont en jeu.
*   **L'illusion de l'absence de défaut :** Obtenir un logiciel techniquement parfait et fluide est inutile s'il est incompréhensible ou s'il ne répond à aucun besoin réel de l'utilisateur final. Ce manque d'empathie représente un échec cuisant.

**2. Le Processus de test et le "Testware"**
L'exécution (le fait de cliquer sur son écran pour débusquer le bug) n'est que la "pointe de l'iceberg" du travail. En réalité, le processus inclut en amont la planification, l'analyse (qui définit **quoi** tester) et la conception (qui définit **comment** tester). 
Ces différentes phases produisent ce qu'on appelle le **Testware**. C'est la documentation, comparable au carnet de laboratoire d'un scientifique scientifique, qui sert de preuve tangible que le travail a été réalisé avec rigueur. 
*   **Piège d'examen :** L'audio met en garde contre la confusion entre l'**activité** (un verbe d'action physique ou mental, comme exécuter ou planifier) et le **Testware** (un livrable ou nom commun, comme un plan de test ou un rapport).

**3. La puissance de la traçabilité**
Bien plus qu'un simple rapport pour la direction, la traçabilité est un "fil d'Ariane" opérationnel reliant les exigences du client aux documents de test et aux bugs trouvés. Elle permet deux choses majeures : évaluer la couverture du logiciel (pour voir s'il reste des angles morts) et analyser instantanément l'impact lorsqu'une règle métier est modifiée, évitant au testeur de tout relire.

**4. Les rôles et l'indépendance du testeur**
L'audio distingue deux rôles clairs : le **Test Manager**, qui est la vigie naviguant sur la stratégie globale, et le **Testeur**, qui est l'artisan plongeant dans le code et les environnements techniques.
Enfin, il souligne l'importance de l'**indépendance** : un testeur sans attachement émotionnel au code verra les failles que le développeur a survolées par habitude. Cependant, un piège classique est de croire que cette indépendance signifie l'isolement total ; le testeur doit posséder l'intelligence relationnelle nécessaire pour communiquer les problèmes sans heurter les égos et déclencher des guerres de tranchées.`,
    audio: "./media/audio/02-Les-7-Principes-du-Test-Logiciel.mp3",
  },
  {
    title: "03 - Test dans le Cycle de Vie Logiciel",
    description: `Cet audio est une analyse approfondie du **test dans le cycle de vie logiciel**, conçue pour démystifier la place du testeur et aider les étudiants, notamment ceux préparant la certification ISTQB Fondation. L'idée centrale est que le test n'est pas un examen final isolé, mais un "compagnon de voyage" qui s'adapte au rythme de l'équipe de développement.

Voici les concepts clés qui y sont détaillés :

**1. Le Cycle en V (La rigueur séquentielle)**
C'est un modèle traditionnel où l'on descend d'abord la branche gauche (du besoin client jusqu'au code), puis on remonte la branche droite en testant, chaque niveau de conception correspondant à un niveau de validation (par exemple, le code pur correspond aux tests unitaires). 
*   **La traçabilité comme pilier :** Ce modèle repose sur des matrices de traçabilité strictes reliant chaque exigence métier à un test documenté précis.
*   **Le paradoxe de la lenteur :** Bien que découvrir une erreur d'architecture très tardivement coûte très cher, cette méthode lourde et lente est une question de survie pour les systèmes critiques (comme l'aéronautique ou un pacemaker), où les autorités de régulation exigent des preuves irréfutables pour chaque ligne de code.

**2. L'Agilité et le "Shift Left"**
À l'inverse, l'agilité découpe le temps en "sprints" rapides (ex: 2 semaines). Le testeur ne peut plus attendre la fin du processus sous peine de bloquer toute l'entreprise.
*   **Le Shift Left :** Il s'agit de "décaler vers la gauche" (sur une frise chronologique) l'intervention du testeur, qui rejoint l'équipe dès la définition des besoins. L'intervenant compare cela à "goûter la soupe pendant qu'elle cuit" plutôt que d'attendre de la servir. 
*   Avant même d'écrire du code, le testeur fait des **revues statiques** sur les *user stories* pour traquer les ambiguïtés, transformant le test en un véritable outil de conception.

**3. Les pratiques de conception guidées par le test (TDD, ATDD, BDD)**
L'audio décortique cette fameuse "soupe de lettres" :
*   **TDD (Test Driven Development) :** Le développeur écrit le test automatisé avant le code. Il passe par une boucle "Rouge" (le test échoue, prouvant qu'il marche), "Vert" (on écrit le code minimum pour le réussir), et "Remaniement" (on nettoie le code en sécurité).
*   **ATDD (Acceptance TDD) :** Basé sur la collaboration des "Trois Amigos" (le métier qui sait ce qu'il veut, le dev qui code, le testeur qui anticipe les failles), ils définissent ensemble les critères d'acceptation.
*   **BDD (Behavior Driven Development) :** Utilise un langage naturel standardisé (*Étant donné, quand, alors*) qui sert simultanément de cahier des charges, de guide pour coder et de script de test automatisé, détruisant ainsi les barrières de traduction entre les équipes.

**4. DevOps et l'Intégration Continue (CI/CD)**
Avec des milliers de tests (TDD, BDD) exécutés en agile, le travail humain manuel ferait s'effondrer l'usine logicielle. 
*   L'intégration continue agit comme un **tapis roulant virtuel** : dès qu'un développeur sauvegarde son code, des scripts le compilent, lancent les tests unitaires et déploient l'interface en quelques minutes, sans intervention humaine.
*   **Le rôle humain renforcé :** L'automatisation ne remplace pas le testeur, elle s'occupe de la corvée pour libérer son "temps de cerveau" afin qu'il se concentre sur l'exploration de l'inconnu, l'analyse des risques et le nettoyage des tests instables (la *flakiness*) lors des rétrospectives.

**5. La Maintenance et la Spirale de la Régression**
Contrairement aux idées reçues, la mise en production n'est que le premier jour de la vie du logiciel, qui entre dans sa phase la plus longue : la maintenance.
Chaque modification impose une double mission :
*   **Les tests de confirmation :** Vérifier que la nouvelle fonctionnalité marche (comme vérifier qu'une nouvelle fenêtre s'ouvre bien).
*   **Les tests de régression :** Protéger le reste du système (s'assurer qu'en perçant le mur pour la fenêtre, on n'a pas sectionné les câbles électriques de la maison). Sans automatisation, la quantité colossale d'anciennes fonctionnalités à revérifier crée un "cauchemar financier".

L'audio se conclut sur une réflexion vertigineuse concernant l'avenir : l'Intelligence Artificielle générative, capable d'écrire du code et des tests instantanément, pourrait bientôt réduire l'écart entre l'idée et la production à zéro, remettant potentiellement en cause l'existence même des "rythmes" et des "sprints" humains.`,
    audio: "./media/audio/03-Test-dans-le-Cycle-de-Vie-Logiciel.mp3",
  },
  {
    title: "04 - Niveaux et Types de Tests",
    description: `Cet audio est une exploration approfondie de l'architecture mentale du test logiciel, structurée pour déjouer les pièges classiques de la certification ISTQB Fondation et clarifier le vocabulaire professionnel. L'épisode utilise d'emblée l'exemple tragique du crash de la sonde Mars Climate Orbiter en 1999 (dû à un défaut de communication entre un code en unités métriques et un code en unités anglo-saxonnes) pour illustrer les conséquences désastreuses d'une mauvaise stratégie de test.

Le cœur de l'audio s'articule autour d'une matrice fondamentale divisée en deux dimensions clés :

**1. Les Niveaux de test (Le "Où" géographique)**
Les niveaux définissent la strate du logiciel que l'on est en train d'examiner. L'audio en détaille quatre, du plus bas vers le plus haut :
*   **Le test de composant :** C'est l'échelle microscopique, au plus près des développeurs. On teste une fonction isolée artificiellement à l'aide de "bouchons" (stubs) pour s'assurer que son algorithme de base est correct, sans influence extérieure.
*   **Le test d'intégration :** C'est le moment de la collision. On ne teste plus les composants eux-mêmes, mais **leurs jointures et les flux de données entre eux**. C'est à ce niveau précis que l'erreur de la sonde martienne aurait dû être détectée.
*   **Le test système :** On prend du recul pour analyser le produit complet et traquer les **comportements émergents**, c'est-à-dire les défauts qui n'apparaissent que lorsque tout fonctionne ensemble, comme la saturation de la mémoire après plusieurs heures d'utilisation.
*   **Le test d'acceptation :** La responsabilité passe du côté des utilisateurs ou du client. La question n'est plus "le logiciel respecte-t-il les spécifications techniques ?", mais **"résout-il le vrai problème dans le monde réel ?"**. L'audio illustre cela avec l'analogie d'une voiture de sport techniquement parfaite (niveau système validé), mais inutile si le client voulait emmener ses enfants et leurs violoncelles à l'école (niveau acceptation échoué).

**2. Les Types de test (Le "Quoi" ou l'angle d'observation)**
Les types définissent l'objectif précis de l'observation à un instant donné :
*   **Le type fonctionnel :** On évalue **ce que** le système est censé faire (ex: cliquer sur "ajouter au panier" fait bien apparaître l'article).
*   **Le type non-fonctionnel :** On évalue **comment** le système s'y prend. Cela concerne les caractéristiques de qualité mesurables comme la rapidité, la robustesse sous une lourde charge (ex: simuler 10 000 utilisateurs pendant le Black Friday) ou la sécurité.
*   **Le type structurel :** Connu sous le nom de "boîte blanche", ce test ignore l'interface pour se plonger dans la couverture de l'architecture interne du code. Il vérifie que toutes les branches (comme les carrefours "si/sinon" d'un algorithme) ont bien été testées, afin d'éviter de laisser des zones d'ombre qui pourraient se transformer en failles de sécurité.

**3. Le croisement des dimensions et la phase critique de l'après-correction**
L'audio insiste sur le fait que la vraie puissance réside dans le croisement de cette matrice : on peut tout à fait réaliser un test non-fonctionnel (mesurer le temps de calcul) au niveau le plus bas du composant.

Enfin, l'épisode met en garde contre la phase la plus dangereuse du cycle de vie : le moment où le développeur annonce qu'un bug est corrigé. Les intervenants distinguent strictement deux actions qui s'ensuivent :
*   **Le test de confirmation :** Action chirurgicale consistant à rejouer le scénario exact du bug pour s'assurer qu'il a bien disparu.
*   **Le test de régression :** Action consistant à scruter tout le reste du système pour s'assurer que la réparation n'a pas provoqué d'**effet de bord** destructeur ailleurs. Comparé au jeu de Jenga, c'est l'activité numéro un que les équipes automatisent massivement la nuit pour survivre aux déploiements continus.

L'audio se conclut sur une réflexion ouverte : bien que toute cette architecture garantisse que le logiciel fait ce qui est prévu, le prochain défi de l'esprit humain est d'utiliser les tests exploratoires pour traquer l'inconcevable et l'imprévisible.`,
    audio: "./media/audio/04-Niveaux-et-Types-de-Tests.mp3",
  },
  {
    title: "05 - Test Statique et Revues",
    description: "Comment tester en Scrum",
    audio: "./media/audio/05-Test-Statique-et-Revues.mp3",
  },
  {
    title: "06 - Techniques de test boîte noire",
    description: "Comment tester en Scrum",
    audio: "./media/audio/06-Techniques-de-test-boîte-noire.mp3",
  },
  {
    title: "07 - Techniques de test boîte blanche",
    description: "Comment tester en Scrum",
    audio: "./media/audio/07-Techniques-de-test-boîte-blanche.mp3",
  },
  {
    title: "08 - Techniques basées sur l'expérience",
    description: "Comment tester en Scrum",
    audio: "./media/audio/08-Techniques-basées-sur-lexpérience.mp3",
  },
  {
    title: "09 - Gestion des tests et planification",
    description: "Comment tester en Scrum",
    audio: "./media/audio/09-Gestion-des-tests-et-planification.mp3",
  },
  {
    title: "10 - Gestion des défauts",
    description: "Comment tester en Scrum",
    audio: "./media/audio/10-Gestion-des-défauts.mp3",
  },
  {
    title: "11 - Outils de test",
    description: "Comment tester en Scrum",
    audio: "./media/audio/11-Outils-de-test.mp3",
  },
  {
    title: "12 - Récapitulatif final",
    description: "Comment tester en Scrum",
    audio: "./media/audio/12-Récapitulatif-final.mp3",
  },
];

const container = document.getElementById("podcast-list");
const menuContainer = document.getElementById("podcast-menu");

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^ -]/g, "")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function markdownToHtml(markdown) {
  if (!markdown) return "";

  let escaped = markdown
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Simple markdown inline styles (bold, italic)
  escaped = escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");

  const lines = escaped.split(/\r?\n/);
  let html = "";
  let inList = false;

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (/^(\*|-|\+)\s+/.test(trimmed)) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      const itemContent = trimmed.replace(/^(\*|-|\+)\s+/, "");
      html += `<li>${itemContent}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }

      if (trimmed === "") {
        html += "";
      } else {
        html += `<p>${trimmed}</p>`;
      }
    }
  });

  if (inList) {
    html += "</ul>";
  }

  return html;
}

let totalDuration = 0;
let loadedCount = 0;

function updateStats() {
  const totalDurationSpan = document.getElementById("total-duration");
  if (totalDurationSpan && loadedCount === podcasts.length) {
    const minutes = Math.floor(totalDuration / 60);
    const seconds = Math.floor(totalDuration % 60);
    totalDurationSpan.textContent = `${minutes}m ${seconds}s`;
  }
}

podcasts.forEach((p) => {
  const id = slugify(p.title);

  const card = document.createElement("div");
  card.className = "card";
  card.id = id;

  const imgHtml = p.img
    ? `<img src="${p.img}" alt="${p.title}" class="podcast-img" />`
    : "";

  const htmlDescription = markdownToHtml(p.description);

  card.innerHTML = `
    ${imgHtml}
    <div class="title">${p.title}</div>
    <div class="desc">${htmlDescription}</div>
    <audio controls>
      <source src="${p.audio}" type="audio/mpeg">
    </audio>
  `;

  // Add click event to image for modal
  const imgElement = card.querySelector('.podcast-img');
  if (imgElement) {
    imgElement.style.cursor = 'pointer';
    imgElement.addEventListener('click', () => {
      const modal = document.getElementById('image-modal');
      const modalImg = document.getElementById('modal-img');
      modalImg.src = p.img;
      modalImg.alt = p.title;
      modal.style.display = 'flex';
    });
  }

  container.appendChild(card);

  const audio = card.querySelector('audio');
  if (audio) {
    audio.addEventListener('loadedmetadata', () => {
      totalDuration += audio.duration;
      loadedCount++;
      updateStats();
    });
  }

  if (menuContainer) {
    const item = document.createElement("a");
    item.href = `#${id}`;
    item.textContent = p.title;
    item.className = "menu-item";
    menuContainer.appendChild(item);
  }
});

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const podcastCount = document.getElementById("podcast-count");
if (podcastCount) {
  podcastCount.textContent = podcasts.length;
}

// Modal close functionality
const modal = document.getElementById('image-modal');
const modalClose = document.querySelector('.modal-close');

if (modalClose) {
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}
