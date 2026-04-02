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
    description: "Comment tester en Scrum",
    audio: "./media/audio/03-Test-dans-le-Cycle-de-Vie-Logiciel.mp3",
  },
  {
    title: "04 - Niveaux et Types de Tests",
    description: "Comment tester en Scrum",
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
