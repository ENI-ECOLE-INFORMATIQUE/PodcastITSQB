const podcasts = [
  {
    title: "Introduction au test logiciel",
    description: "Comprendre les bases de l'ISTQB",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Les niveaux de test",
    description: "Unitaires, intégration, système",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Tests Agile",
    description: "Comment tester en Scrum",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

const container = document.getElementById("podcast-list");

podcasts.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="title">${p.title}</div>
    <div class="desc">${p.description}</div>
    <audio controls>
      <source src="${p.audio}" type="audio/mpeg">
    </audio>
  `;

  container.appendChild(card);
});
