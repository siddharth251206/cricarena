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

  // ✅ Updated Fetch: Get live matches from your own Django backend
  fetch("/live-matches/")
    .then(res => res.json())
    .then(data => {
      const matches = data.matches;

      if (!matches.length) {
        track.innerHTML = `<div class="live-box">No live ICC matches</div>`;
        return;
      }

      matches.forEach(match => {
        const div = document.createElement("div");
        div.className = "live-box";

        const [team1, team2] = match.teamInfo || [];
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
// 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
async function askGroq() {
  const prompt = document.getElementById("groqPrompt").value.trim();
  const responseDiv = document.getElementById("groqResponse");

  const cricketKeywords = ["cricket", "odi", "t20", "ipl", "test", "batsman", "bowler", "world cup", "innings", "wicket"];
  if (!cricketKeywords.some(word => prompt.toLowerCase().includes(word))) {
    responseDiv.innerHTML = "❌ Please ask only cricket-related questions.";
    return;
  }

  const API_KEY = "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";  // 🔁 Replace this with your real Groq key

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  };

  const body = {
    model: "llama3-70b-8192",
    messages: [
      {
        role: "system",
        content: "You are a cricket expert. Only answer cricket-related questions. If the question is not about cricket, politely refuse."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  };

  responseDiv.innerHTML = "⏳ Thinking...";

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });

    const data = await res.json();
    console.log("Groq response:", data);

    const answer = data?.choices?.[0]?.message?.content;
    responseDiv.innerHTML = answer || "❌ No response.";
  } catch (err) {
    console.error("Groq error:", err);
    responseDiv.innerHTML = "❌ Error talking to Groq AI.";
  }
}
