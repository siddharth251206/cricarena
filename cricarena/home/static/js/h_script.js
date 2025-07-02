document.addEventListener("DOMContentLoaded", () => {
  // Image Carousel
  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function showSlide(i) {
    index = i;
    document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");
  }

  document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);

  showSlide(0);

  // Live Score Carousel
  let scrollIndex = 0;
  const track = document.getElementById("liveTrack");

  document.querySelector(".live-prev").addEventListener("click", () => {
    scrollIndex = Math.max(scrollIndex - 1, 0);
    updateScroll();
  });

  document.querySelector(".live-next").addEventListener("click", () => {
    scrollIndex++;
    updateScroll();
  });

  function updateScroll() {
    const boxWidth = 270;
    track.style.transform = `translateX(-${scrollIndex * boxWidth}px)`;
  }

  // Fetch and Display Live Matches
  fetch("https://api.cricapi.com/v1/currentMatches?apikey=cbf98794-920a-4c3d-93d2-551987040cca&offset=0")
    .then(res => res.json())
    .then(data => {
      const matches = data.data.filter(
        match => match.matchType === "odi" || match.matchType === "t20" || match.matchType === "test"
      );

      if (!matches.length) {
        track.innerHTML = `<div class="live-box">No live ICC matches</div>`;
        return;
      }

      matches.forEach(match => {
        const div = document.createElement("div");
        div.className = "live-box";

        const [team1, team2] = match.teamInfo;
        const [score1, score2] = match.score || [];

        div.innerHTML = `
          <div style="display: flex; justify-content: space-around; align-items: center; margin-bottom: 5px;">
            <div style="text-align: center;">
              <img src="${team1?.img || ''}" alt="${team1?.name || ''}" style="width: 30px; height: 30px;" />
              <div style="font-size: 12px;">${team1?.name || 'N/A'}</div>
              <div style="font-size: 14px; font-weight: bold;">${score1?.r || '-'} / ${score1?.w || '-'} (${score1?.o || '-'} ov)</div>
            </div>
            <div style="font-weight: bold;">VS</div>
            <div style="text-align: center;">
              <img src="${team2?.img || ''}" alt="${team2?.name || ''}" style="width: 30px; height: 30px;" />
              <div style="font-size: 12px;">${team2?.name || 'N/A'}</div>
              <div style="font-size: 14px; font-weight: bold;">${score2?.r || '-'} / ${score2?.w || '-'} (${score2?.o || '-'} ov)</div>
            </div>
          </div>
          <div style="font-size: 13px; margin-top: 5px;">${match.status}</div>
        `;

        track.appendChild(div);
      });
    })
    .catch(err => {
      track.innerHTML = `<div class="live-box">Error loading scores</div>`;
      console.error(err);
    });
});
