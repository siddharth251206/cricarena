    

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

// 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
async function askGroq() {
  //prompt thi user input lidhu 
  const prompt = document.getElementById("groqPrompt").value.trim();
  //groq na response ne responseDiv ma store karva mate
  const responseDiv = document.getElementById("groqResponse");
//aa keywords cricket na related hoy te check karva mate
  const cricketKeywords = ["cricket", "odi", "t20", "ipl", "test", "batsman", "bowler", "world cup", "innings", "wicket","Virat Kohli","Rohit Sharma","MS Dhoni","Sachin Tendulkar","AB de Villiers",
"Jacques Kallis","Kane Williamson","Steve Smith","Joe Root","Babar Azam",
"Shubman Gill","Ruturaj Gaikwad","Faf du Plessis","David Warner","Ricky Ponting",
"Glenn Maxwell","Yuvraj Singh","Rahul Dravid","Suresh Raina","Hardik Pandya",
"Ben Stokes","Jos Buttler","KL Rahul","Quinton de Kock","Mohammad Rizwan",
"Suryakumar Yadav","Rashid Khan","Sanju Samson","Dinesh Karthik","Andre Russell",
"Kieron Pollard","Shakib Al Hasan","Mohammed Shami","Jasprit Bumrah","Trent Boult",
"Pat Cummins","Shaheen Afridi","Mitchell Starc","Brett Lee","Zaheer Khan",
"Irfan Pathan","Wasim Akram","Muttiah Muralitharan","Shane Warne","Anil Kumble",
"Ravindra Jadeja","Yuzvendra Chahal","Ravi Bishnoi","Kuldeep Yadav","Harbhajan Singh",
"Varun Chakravarthy","Umesh Yadav","Bhuvneshwar Kumar","Lungi Ngidi","Kagiso Rabada",
"Tim Southee","James Anderson","Stuart Broad","Nathan Lyon","R Ashwin",
"Alastair Cook","Hashim Amla","Michael Hussey","Matthew Hayden","Adam Gilchrist",
"Kumar Sangakkara","Mahela Jayawardene","Inzamam-ul-Haq","Shoaib Malik","Imran Khan",
"Saqlain Mushtaq","Ajinkya Rahane","Cheteshwar Pujara","Marnus Labuschagne","Usman Khawaja",
"Dean Elgar","Tamim Iqbal","Fakhar Zaman","Imam-ul-Haq","Litton Das",
"Paul Stirling","Mohammad Nabi","Najibullah Zadran","Hazratullah Zazai","Sam Curran",
"Chris Woakes","Mark Wood","Jonny Bairstow","Rassie van der Dussen","Heinrich Klaasen",
"Rilee Rossouw","David Miller","Tim David","Marcus Stoinis","Mitchell Marsh",
"Aaron Finch","Jason Roy","Alex Hales","Phil Salt","Liam Livingstone","cricket","bat","ball","wicket","umpire","batsman","bowler","allrounder","fielder","catch",
"run","boundary","six","four","over","maiden","no ball","wide","free hit","innings",
"powerplay","super over","duck","golden duck","century","half-century","double century","not out","strike rate","average",
"economy rate","yorker","bouncer","googly","doosra","leg spin","off spin","arm ball","reverse swing","seam",
"slip","gully","point","cover","mid off","mid on","long off","long on","third man","fine leg",
"square leg","deep mid wicket","deep cover","silly point","short leg","wicketkeeper","stumps","bails","crease","pitch",
"leg side","off side","front foot","back foot","lbw","appeal","review","DRS","umpire's call","ball tracking",
"hotspot","snickometer","helmet","pads","gloves","jersey","match","toss","captain","vice-captain",
"team","scorecard","live score","scoreboard","runs per over","overs remaining","required run rate","net run rate","test match","odi",
"t20","ipl","bbl","psl","cpl","asia cup","world cup","super six","qualifier","eliminator","trophies","trophy","age","birthday","birthdate"

];
//If none match, it shows a warning and exits the function early using return
  if (!cricketKeywords.some(word => prompt.toLowerCase().includes(word))) {
    responseDiv.innerHTML = "❌ Please ask only cricket-related questions.";
    return;
  }

  // aa aapdi api key chhe je aa project ne groq saathe connect karva mate use thase
  const API_KEY = "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";  

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  };

  // model: Chooses the model (llama3-70b-8192) from Groq.
  // messages: Standard Chat API format:
  // system: Sets up the behavior of the assistant.
  // user: Sends the user's question.

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

  // Display a loading message while waiting for the response
  responseDiv.innerHTML = "⏳ Thinking...";

  //api post request kare groq ai ne
  //ema headers and body pass karva ma aavse as request
  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });

    //je response aave ene data variable ma store karva ma aavse
    const data = await res.json();
    console.log("Groq response:", data);

    //agar aapde response ma content chhe to ene answer variable ma store karva ma aavse
    const answer = data?.choices?.[0]?.message?.content;

    //agar answer variable ma koi value hoy to ene responseDiv ma store karva ma aavse
    //nahi to "No response" message aavse
    responseDiv.innerHTML = answer || "❌ No response.";
  } catch (err) {
    console.error("Groq error:", err);
    responseDiv.innerHTML = "❌ Error talking to Groq AI.";
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