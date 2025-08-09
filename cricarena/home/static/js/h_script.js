    

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
let autoSlideInterval;
let isHovered = false;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    showSlide(i);
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  if (!isHovered) {
    index = (index + 1) % slides.length;
    showSlide(index);
  }
}

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
  resetAutoSlide();
});

// Autoplay
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000);
}

document.querySelector(".slides").addEventListener("mouseenter", () => {
  isHovered = true;
});
document.querySelector(".slides").addEventListener("mouseleave", () => {
  isHovered = false;
});

// Touch swipe
let startX = 0;
document.querySelector(".slides").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
document.querySelector(".slides").addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 50) {
    index--;
    showSlide(index);
  } else if (diff < -50) {
    index++;
    showSlide(index);
  }
  resetAutoSlide();
});

showSlide(0);
resetAutoSlide();

// Live Score Carousel (Responsive)
function initLiveScoreCarousel() {
  const track = document.getElementById("liveTrack");
  const prevBtn = document.querySelector(".live-prev");
  const nextBtn = document.querySelector(".live-next");
  let scrollIndex = 0;

  function getBoxWidth() {
    const box = document.querySelector(".live-box");
    return box ? box.offsetWidth + parseInt(getComputedStyle(box).marginRight) : 270+24;
  }

function getVisibleCount() {
  const container = document.querySelector(".live-container"); // now matches HTML
  if (!container) return 1;
  return Math.floor(container.offsetWidth / getBoxWidth());
}

  function updateScroll() {
    const boxWidth = getBoxWidth();
    track.style.transform = `translateX(-${scrollIndex * boxWidth}px)`;
  }

  nextBtn?.addEventListener("click", () => {
    const totalItems = document.querySelectorAll(".live-box").length;
    const visibleCount = getVisibleCount();
    const maxIndex = totalItems - visibleCount;
    if (scrollIndex < maxIndex) {
      scrollIndex++;
      updateScroll();
    }
  });

  prevBtn?.addEventListener("click", () => {
    if (scrollIndex > 0) {
      scrollIndex--;
      updateScroll();
    }
  });

  window.addEventListener("resize", updateScroll);
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
  const track = document.getElementById("liveTrack");
  track.innerHTML = ""; // clear previous

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

    if (score1 && score2 && team1 && team2) {
      if (
        score1.inning &&
        !score1.inning.toLowerCase().includes(team1.shortname?.toLowerCase() || team1.name?.toLowerCase())
      ) {
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

  // ✅ Now initialize carousel AFTER DOM is updated
  initLiveScoreCarousel();
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

  const body = {
    contents: [{
      parts: [{
       text: `You are a witty, energetic cricket expert and die-hard fan. 
Answer cricket-related questions in a fun, chatty tone, mixing real cricket knowledge with playful banter. 
You can use emojis, short exclamations, and friendly humor like a cricket commentator or a fan in the stands. 
Be accurate with cricket facts, but make the answers exciting and engaging.

If the question is not about cricket, reply in a funny, lighthearted way: "❌ That's off the pitch! Let's stick to cricket, champ 🏏."

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

    if (answer) {
      // Convert markdown → HTML
      const html = marked.parse(answer);
      // Sanitize the HTML
      const safeHTML = DOMPurify.sanitize(html);
      // Render the formatted text
      responseDiv.innerHTML = safeHTML;
    } else {
      responseDiv.innerHTML = "❌ No response from Gemini.";
    }
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
const loader = document.getElementById("page-loader");
const nextPageName = document.getElementById("next-page-name");

// Mark page as JS-ready so CSS flex works
document.documentElement.classList.add("js-loader-ready");

// Handle link clicks for forward navigation
document.querySelectorAll("a").forEach(link => {
  if (
    link.hostname === window.location.hostname &&
    link.getAttribute("href") &&
    !link.href.includes("#")
  ) {
    link.addEventListener("click", e => {
      if (e.ctrlKey || e.metaKey || link.target === "_blank") return;

      e.preventDefault();

      // Set loading page name
      const pageName = link.getAttribute("data-page") || link.textContent.trim() || "Loading";
      nextPageName.textContent = pageName;

      // Show loader animation
      loader.classList.remove("hide");
      loader.classList.add("active");

      // Navigate after short delay
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  }
});

// On page load
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
    loader.classList.remove("active");
  }, 300);
});

// Detect browser back/forward and disable animation
window.addEventListener("pageshow", (event) => {
  if (
    event.persisted ||
    performance.getEntriesByType("navigation")[0]?.type === "back_forward"
  ) {
    loader.style.transition = "none"; // kill animation
    loader.classList.add("hide");
    loader.classList.remove("active");
    // Restore animation for future forward nav
    requestAnimationFrame(() => {
      loader.style.transition = "";
    });
  }
});

});
