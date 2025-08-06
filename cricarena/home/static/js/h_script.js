    

document.addEventListener("DOMContentLoaded", () => {
   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
   // Hamburger logic
const toggleBtn = document.querySelector(".toggle-btn");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const iplToggle = document.querySelector(".hamburger-ipl-toggle");
const iplDropdown = document.querySelector(".hamburger .dropdown-menu");
const arrow = document.querySelector(".dropdown-arrow");
const profarrow=document.querySelector(".dropdown-arrow-profile");

toggleBtn?.addEventListener("click", () => {
  hamburger?.classList.add("open");
  document.body.style.overflow = 'hidden';
});

closeBtn?.addEventListener("click", () => {
  hamburger?.classList.remove("open");
  document.body.style.overflow = 'auto';
});

iplToggle?.addEventListener("click", () => {
  iplDropdown?.classList.toggle("open");
  arrow?.classList.toggle("rotate");
});

// Profile dropdown toggle
const profileToggle = document.getElementById("profileDropdownToggle");
const profileDropdown = document.getElementById("profileDropdown");

profileToggle?.addEventListener("click", () => {
  profarrow?.classList.toggle("rotate");
  if (profileDropdown.style.display === "none") {
    profileDropdown.style.display = "flex";
  } else {
    profileDropdown.style.display = "none";
  }
});


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

  // ✅ Caching Logic (localStorage for 24 hours)
  const CACHE_KEY = "cricapi_data";
  const CACHE_TIME_KEY = "cricapi_timestamp";

  const isCacheValid = () => {
    const timestamp = localStorage.getItem(CACHE_TIME_KEY);
    if (!timestamp) return false;
    const now = Date.now();
    return now - parseInt(timestamp) < 24 * 60 * 60 * 1000; // 24 hours
  };

  const renderMatches = (matches) => {
    if (!matches.length) {
      track.innerHTML = '<div class="live-box">No live ICC matches</div>';
      return;
    }

    matches.forEach(match => {
      const div = document.createElement("div");
      div.className = "live-box";
      div.style.minWidth = "270px";

      const [team1, team2] = match.teamInfo || [];
      let [score1, score2] = match.score || [];

      // Fix: Ensure score1 matches team1 and score2 matches team2 by comparing team names
      if (score1 && score2 && team1 && team2) {
        // Sometimes the API returns scores in the reverse order
        if (score1.inning && !score1.inning.toLowerCase().includes(team1.shortname?.toLowerCase() || team1.name?.toLowerCase())) {
          // Swap scores if the first score does not belong to team1
          [score1, score2] = [score2, score1];
        }
      }

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
  };

  const loadMatches = async () => {
    if (isCacheValid()) {
      const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
      renderMatches(cachedData);
      console.log("✅ Loaded data from cache");
    } else {
      try {
        // ✅ Updated Fetch: Get live matches from CricAPI
        const res = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=cbf98794-920a-4c3d-93d2-551987040cca&offset=0");
        const data = await res.json();
        const matches = (data.data || []).filter(
          match => match.matchType === "odi" || match.matchType === "t20" || match.matchType === "test"
        );

        localStorage.setItem(CACHE_KEY, JSON.stringify(matches));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());

        renderMatches(matches);
        console.log("📡 Fetched fresh data from API");
      } catch (err) {
        track.innerHTML = '<div class="live-box">Error loading scores</div>';
        console.error("❌ API Error:", err);
      }
    }
  };

  loadMatches();
});

async function askGemini() {
  const prompt = document.getElementById("geminiPrompt").value.trim();
  const responseDiv = document.getElementById("geminiResponse");

  if (!prompt) {
    responseDiv.innerHTML = "❌ Please enter a question.";
    return;
  }

  const API_KEY = "AIzaSyDM96fK4qToFjS0vqxt_1mXlg0TgGAb4PE"; // Replace with your Gemini API key

  const headers = {
    "Content-Type": "application/json",
    "x-goog-api-key": API_KEY
  };

  // Gemini expects this format
  const body = {
    contents: [{
      parts: [{
        text: `You are a cricket expert. 
Only answer cricket-related questions. 
If the question is not about cricket, reply: "❌ Please ask only cricket-related questions."

User question: ${prompt}`
      }]
    }]
  };

  responseDiv.innerHTML = "⏳ Thinking...";

  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemma-3n-e4b-it:generateContent",
      {
        method: "POST",
        headers,
        body: JSON.stringify(body)
      }
    );

    const data = await res.json();
    console.log("Gemini response:", data);

    if (data.error) {
      responseDiv.innerHTML = `❌ Error: ${data.error.message}`;
      return;
    }

    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    responseDiv.innerHTML = answer || "❌ No response from Gemini.";
  } catch (err) {
    console.error("Gemini error:", err);
    responseDiv.innerHTML = "❌ Error talking to Gemini AI.";
  }
}

// Scroll Animation using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: window.innerWidth < 768 ? 0.05 : 0.2,
    rootMargin: "0px 0px -10% 0px"
  });

  revealElements.forEach(el => observer.observe(el));
    const userAvatar = document.getElementById("userAvatar");
const userDropdown = document.getElementById("userDropdown");

if (userAvatar && userDropdown) {
  userAvatar.addEventListener("click", () => {
    userDropdown.style.display = userDropdown.style.display === "block" ? "none" : "block";
  });

  // Optional: hide when clicking outside
  document.addEventListener("click", (e) => {
    if (!userAvatar.contains(e.target) && !userDropdown.contains(e.target)) {
      userDropdown.style.display = "none";
    }
  });
}

});
