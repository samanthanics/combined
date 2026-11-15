/* ============================================================
   EDIT HERE: replace every bracketed placeholder with real data.
   - members: keep `initial` equal to the first letter of the member's SURNAME.
   - photo: path or data URI of the member's photo (optional).
   - umakLogo / theoristPhoto: path or data URI of the image.
   - videoSrc: path to a 1 to 3 minute video file (mp4 or webm).
   ============================================================ */
const CONFIG = {
  company: "Combined Group",
  wordmark: "COMBINED",
  section: "Group Section: II-ACSAD",
  umakLogo: "assets/images/umak-logo.png",
  theoristPhoto: "",
  videoSrc: "",
  members: [
    { initial:"C", full:"Samantha Nicole Cummins", position:"President and Chief Executive Officer", reportsTo:"Faculty Adviser (advisory line)", photo:"",
      summary:"Sets the direction of the company, gives final approval on major decisions, and represents Combined Group to clients and partners.",
      duties:["Chairs the weekly management meeting","Approves all client deliverables before release","Maintains the company policy manual"],
      reflection:"Organizational Communication taught me that every company runs on the quality of its conversations. A clear message saves time, prevents mistakes, and protects relationships between coworkers. Before this subject, I assumed communication was simply talking and listening. Now I see it as a skill that must be planned, practiced, and improved. I will carry this lesson into every team and workplace I join." },
    { initial:"B", full:"Edward Raphael Balmaceda", position:"Director for Internal Communication", reportsTo:"President and CEO", photo:"",
      summary:"Leads how information moves inside the company and inside client organizations.",
      duties:["Runs internal communication audits","Prepares newsletters, memos, and meeting guides","Keeps the feedback channel open for all members"],
      reflection:"This subject showed me how information travels through the structure of an organization. Messages that move up, down, and across a company each need a different tone and purpose. Understanding these channels helps a team avoid confusion and duplicated work. It also made me more careful about how I write emails, reports, and announcements. I now believe that a well-informed team is a more confident and productive team." },
    { initial:"D", full:"Zuriel Dwyth M. Delcano", position:"Director for Client and Public Relations", reportsTo:"President and CEO", photo:"",
      summary:"Owns every relationship with clients, partners, and the public, and protects the company's reputation.",
      duties:["Logs and assigns all client requests","Writes corporate messages and brand voice guides","Leads stakeholder and crisis communication plans"],
      reflection:"Studying Organizational Communication helped me understand the human side of business. Behind every policy and process are people who need to feel heard and respected. Listening carefully can resolve a conflict before it becomes a larger problem. This subject also improved my confidence in speaking during group discussions and presentations. I am grateful for the lessons because they prepare me to lead with empathy." },
    { initial:"N", full:"Zedric Lewis I. Noora", position:"Director for Operations, Quality and Finance", reportsTo:"President and CEO", photo:"",
      summary:"Keeps projects on schedule, makes sure every deliverable meets the company standard, and manages the budget and records.",
      duties:["Maintains standard workflows and checklists","Schedules projects and tracks tasks","Conducts the quality review before release","Prepares budgets, billing, and company records"],
      reflection:"Working on this company project proved that good communication is the foundation of teamwork. Our group had to agree on goals, divide tasks, and give each other honest feedback. When we communicated clearly, our work moved faster and our results improved. When we did not, we quickly saw how misunderstandings can slow a whole team down. That experience made the lessons of this subject real to me." }
  ],
  adviser: { position:"Faculty Adviser", full:"Prof. Cris Monroe", summary:"Provides academic guidance on the Organizational Communication subject and reviews the company's progress." }
};

const PAGES = [
  { id:"organizational-chart",  title:"Organizational Chart",   short:"Organizational Chart",  blurb:"Structure, positions, and reporting lines" },
  { id:"organizational-theory", title:"Organizational Theory",  short:"Organizational Theory", blurb:"Weber's Bureaucratic Theory at work" },
  { id:"members-reflection",    title:"Members' Reflection",    short:"Members' Reflection",   blurb:"Why the subject matters, in our words" },
  { id:"company-details",       title:"Company Details",        short:"Company Details",       blurb:"Mission, vision, values, and goals" },
  { id:"about-contact",         title:"About Us / Contact Information", short:"About / Contact", blurb:"Our story, services, and how to reach us" }
];

const $ = (s, r=document) => r.querySelector(s);
const M = CONFIG.members;

/* ---------- Company logo: monogram of member surname initials ---------- */
function wordmarkHTML(){
  return [...CONFIG.wordmark].map(ch => "CBND".includes(ch) ? `<span class="wm-gold">${ch}</span>` : ch).join("");
}

function logoSVG(){
  const L = M.slice(0,4).map(m=>m.initial);
  const pos = [[75,84],[268,84],[75,246],[268,246]];
  const letters = L.map((c,i)=>`<text class="lg-letter" x="${pos[i][0]}" y="${pos[i][1]}" text-anchor="middle" dominant-baseline="central">${c}</text>`).join("");
  const label = `${CONFIG.company} logo: four overlapping circles with the surname initials ${L.join(", ")}`;
  return `<svg viewBox="0 0 344 344" role="img" aria-label="${label}">
    <g class="lg-circles">
      <circle cx="125" cy="125" r="112"/><circle cx="219" cy="125" r="112"/>
      <circle cx="125" cy="219" r="112"/><circle cx="219" cy="219" r="112"/>
    </g>
    ${letters}
    <rect class="lg-diamond" x="155.5" y="155.5" width="33" height="33" transform="rotate(45 172 172)"/>
  </svg>`;
}

/* ---------- Header ---------- */
function buildHeader(){
  $("#co-name").innerHTML = wordmarkHTML(); $("#co-name").setAttribute("aria-label", CONFIG.company);
  $("#co-section").textContent = CONFIG.section;
  $("#company-logo").innerHTML = logoSVG();
  $("#foot-logo").innerHTML = logoSVG();
  $("#umak-logo").innerHTML = CONFIG.umakLogo
    ? `<img src="${CONFIG.umakLogo}" alt="University of Makati official logo">`
    : `<div class="umak-ph" role="img" aria-label="Placeholder for the official University of Makati logo"><span>UMak<small>Official logo here</small></span></div>`;
  /* Thin line made of member names; readable when zoomed in */
  const unit = M.map(m=>m.full).join("   •   ") + "   •   ";
  const text = unit.repeat(Math.max(1, Math.ceil(620/unit.length))).trim();
  $("#member-line").innerHTML =
    `<rect x="0" y="0" width="1200" height="0.7"/><text x="0" y="4.9" textLength="1200" lengthAdjust="spacing">${text}</text>`;
  $("#foot-name").innerHTML = wordmarkHTML(); $("#foot-name").setAttribute("aria-label", CONFIG.company);
  $("#foot-legal").textContent = `© 2026 ${CONFIG.company}. Organizational Communication, University of Makati.`;
}

/* ---------- Navigation ---------- */
function buildNav(){
  $("#topnav-list").innerHTML =
    `<li><a href="index.html" data-nav="home">Home</a></li>` +
    PAGES.map(p=>`<li><a href="${p.id}.html" data-nav="${p.id}">${p.short}</a></li>`).join("");
  if ($("#side-nav-list")) $("#side-nav-list").innerHTML = PAGES.map(p =>
    `<li><a href="${p.id}.html"><span><strong>${p.title}</strong><small>${p.blurb}</small></span><span class="arrow" aria-hidden="true">→</span></a></li>`).join("");
  $("#foot-links").innerHTML =
    `<li><a href="index.html">Home</a></li>` + PAGES.map(p=>`<li><a href="${p.id}.html">${p.short}</a></li>`).join("");
}

/* ---------- Home ---------- */
function buildHome(){
  if ($("#home-intro")) $("#home-intro").textContent = `Welcome to ${CONFIG.company}. We are a corporate communication consultancy based in Makati City. We help organizations improve how information flows between leaders, teams, and the public by auditing communication, shaping clear messages, and training people to communicate well.`;
}

/* ---------- Video ---------- */
function checkLength(video){
  const note = $("#video-note");
  const d = video.duration;
  if (!isFinite(d)) return;
  const mm = Math.floor(d/60), ss = String(Math.round(d%60)).padStart(2,"0");
  note.textContent = (d < 60 || d > 180) ? `This video is ${mm}:${ss}. The required length is 1 to 3 minutes.` : "";
}
function mountVideo(src){
  const frame = $("#video-frame");
  frame.innerHTML = `<video controls preload="metadata" playsinline src="${src}" aria-label="Company introduction video"></video>`;
  const v = $("video", frame);
  v.addEventListener("loadedmetadata", ()=>checkLength(v));
}
function buildVideo(){
  const frame = $("#video-frame");
  if (!frame) return;
  if (CONFIG.videoSrc){ mountVideo(CONFIG.videoSrc); return; }
  frame.innerHTML = `<div class="video-ph">
      <div class="play" aria-hidden="true"></div>
      <h3>Company introduction video</h3>
      <p>The company video appears here. Choose the video file to preview it on this page.</p>
      <label class="btn" for="video-file" tabindex="0" id="video-btn">Choose video file</label>
      <input id="video-file" type="file" accept="video/*" hidden>
    </div>`;
  const input = $("#video-file");
  input.addEventListener("change", ()=>{
    const f = input.files && input.files[0];
    if (f) mountVideo(URL.createObjectURL(f));
  });
  $("#video-btn").addEventListener("keydown", e=>{ if (e.key==="Enter"||e.key===" "){ e.preventDefault(); input.click(); }});
}

/* ---------- Organizational chart ---------- */
function avatar(m){
  return `<div class="avatar">${m.photo ? `<img src="${m.photo}" alt="Photo of ${m.full}">` : `<span aria-hidden="true">${m.initial}</span>`}</div>`;
}
function buildChart(){
  if (!$("#chart")) return;
  const ceo = M[0], dirs = M.slice(1);
  $("#chart").innerHTML = `
    <div class="node advisor"><div class="avatar"><span aria-hidden="true">★</span></div><h3>${CONFIG.adviser.position}</h3><p class="person">${CONFIG.adviser.full}</p></div>
    <div class="stem dashed" aria-hidden="true"></div>
    <div class="node top">${avatar(ceo)}<h3>${ceo.position}</h3><p class="person">${ceo.full}</p></div>
    <div class="stem" aria-hidden="true"></div>
    <div class="branches">
      ${dirs.map(d=>`<div class="branch"><div class="node">${avatar(d)}<h3>${d.position}</h3><p class="person">${d.full}</p></div></div>`).join("")}
    </div>`;
  const cards = [{position:CONFIG.adviser.position, summary:CONFIG.adviser.summary, reportsTo:"University of Makati faculty", duties:["Reviews progress reports","Gives guidance on theory and practice","Evaluates the final output"], full:CONFIG.adviser.full}, ...M];
  $("#positions").innerHTML = cards.map(c=>`
    <article class="card hoverable">
      <p class="pos-meta">${c.full}</p>
      <h3>${c.position}</h3>
      <p style="margin-top:8px">${c.summary}</p>
      <ul class="tick">${c.duties.map(d=>`<li>${d}</li>`).join("")}</ul>
      <span class="reports">Reports to: ${c.reportsTo}</span>
    </article>`).join("");
}

/* ---------- Theory portrait ---------- */
function buildTheory(){
  if (!$("#theorist-portrait")) return;
  $("#theorist-portrait").innerHTML = CONFIG.theoristPhoto
    ? `<img src="${CONFIG.theoristPhoto}" alt="Portrait of Max Weber">`
    : `<div><b>MW</b><small>Portrait of Max Weber</small></div>`;
}

/* ---------- Reflections ---------- */
function buildReflections(){
  if (!$("#reflections")) return;
  $("#reflections").innerHTML = M.map(m=>`
    <figure class="card reflect hoverable" style="margin:0">
      <span class="quote-mark" aria-hidden="true">“</span>
      <blockquote>${m.reflection}</blockquote>
      <figcaption><b>${m.full}</b>${m.position}</figcaption>
    </figure>`).join("");
}

/* ---------- Company details ---------- */
function buildDetails(){ if (!$("#fact-team")) return; $("#fact-team").textContent = `${M.length} members`; }

/* ---------- Contact ---------- */
function wireContact(){
  document.querySelectorAll(".copy").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const el = document.getElementById(btn.dataset.copy);
      try{
        await navigator.clipboard.writeText(el.textContent.trim());
        btn.textContent = "Copied";
      }catch(e){
        const r = document.createRange(); r.selectNodeContents(el);
        const s = getSelection(); s.removeAllRanges(); s.addRange(r);
        btn.textContent = "Selected";
      }
      setTimeout(()=>btn.textContent="Copy", 1600);
    });
  });
  if ($("#contact-form")) $("#contact-form").addEventListener("submit", e=>{
    e.preventDefault();
    const f = e.target, st = $("#form-status");
    if (!f.checkValidity()){ f.reportValidity(); st.textContent = "Please complete your name, a valid email, and a message."; return; }
    st.textContent = `Thank you, ${f.name.value.trim()}. This form is a demonstration for a school project, so your message was not sent.`;
    f.reset();
  });
}

/* ---------- Highlight the current page in the menu ---------- */
function markActive(){
  const id = document.body.dataset.page || "home";
  document.querySelectorAll("[data-nav]").forEach(a=>{
    if (a.dataset.nav === id) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
  });
}

buildHeader(); buildNav(); buildHome(); buildVideo(); buildChart(); buildTheory(); buildReflections(); buildDetails(); wireContact(); markActive();
