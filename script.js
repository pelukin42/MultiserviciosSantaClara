/* ===== CONFIG: editar con los datos reales del cliente (TODO) ===== */
const CONFIG = {
  whatsapp: "50600000000",            // TODO: número con código de país, sin + ni espacios
  phoneDisplay: "+506 0000 0000",     // TODO
  email: "tucorreo@tudominio.com",    // TODO: correo profesional
  instagram: "https://www.instagram.com/santaclara_multiservicios",
  facebook: "https://www.facebook.com/",   // TODO
  tiktok: "https://www.tiktok.com/",       // TODO
  googleReviews: "https://www.google.com/search?q=Multiservicios+Santa+Clara+rese%C3%B1as" // TODO: enlace directo de reseñas
};

const I18N = { en: {
  skip:"Skip to content", nav_services:"Services", nav_projects:"Projects", nav_process:"Process", nav_reviews:"Reviews", nav_quote:"Get a quote",
  hero_tag:"Free quote · Same-day reply", hero_h1:"Your home, <em>done right</em> the first time.",
  hero_lead:"Remodeling, painting, electrical, plumbing, ceilings and floors. One trusted team for everything your home or business needs.",
  hero_cta1:"Request a quote", hero_cta2:"Message on WhatsApp", t1:"years of experience", t2:"projects delivered", t3:"guaranteed work",
  hc_title:"Direct contact", call:"Call now", hours:"Mon–Sat · 7:00 a.m. – 6:00 p.m.",
  s_title:"Everything in one place",
  sv1:"Remodeling", sv1d:"Kitchens, bathrooms, extensions and full space renovations.",
  sv2:"Painting", sv2d:"Interior and exterior, fine finishes, sealing and waterproofing.",
  sv3:"Electrical", sv3d:"Installations, panels, lighting and fault repairs.",
  sv4:"Plumbing", sv4d:"Leaks, pipes, fixtures, toilets and drains.",
  sv5:"Ceilings & drywall", sv5d:"Suspended ceilings, partitions and drywall finishes.",
  sv6:"Floors & tiling", sv6d:"Porcelain, ceramic, laminate and floor polishing.",
  sv7:"Maintenance", sv7d:"Plans for homes, shops and condos. Scheduled visits.",
  sv8:"Roofing & welding", sv8d:"Roof repairs, gutters, gates and metal structures.",
  p_title:"Completed projects", p_note:"Sample images. Replace each card with real photos of your work (assets/projects folder).",
  pr_title:"How we work", st1:"Tell us", st1d:"Send the form or message us on WhatsApp with photos of the space.",
  st2:"Visit & quote", st2d:"We measure, answer questions and give a clear budget, no surprises.",
  st3:"Execution", st3d:"We work clean, on schedule, with progress updates.",
  st4:"Handover & warranty", st4d:"We review the result together and stand behind our work.",
  q_title:"Get your free quote", q_lead:"Fill in the details and WhatsApp will open with your request ready to send. We reply the same day.",
  q_c1:"No commitment", q_c2:"Detailed budget", q_c3:"Site visit if needed",
  f_name:"Name", f_phone:"Phone", f_project:"Project type", f_zone:"Area / address", f_budget:"Estimated budget", b0:"Please suggest one",
  f_when:"When do you need it?", w0:"As soon as possible", w1:"This month", w2:"In 1–3 months", w3:"Just getting quotes",
  f_desc:"Details (measurements, materials, etc.)", f_send:"Send via WhatsApp", f_mail:"or send by email",
  r_title:"What our clients say", rv1:"“They remodeled my kitchen on time and it came out better than expected.”",
  rv2:"“Punctual, tidy and clear pricing. I've already recommended them to my neighbors.”", rv3:"“They fixed an electrical fault the same day. Excellent service.”",
  r_note:"Sample testimonials: replace with real reviews.", r_cta:"See our Google reviews ★",
  faq_title:"FAQ", fq1:"Is the quote free?", fq1a:"Yes. We quote for free with no commitment.",
  fq2:"Which areas do you cover?", fq2a:"Santa Clara and nearby communities. Ask us about your area.",
  fq3:"Do you offer a warranty?", fq3a:"Yes, all jobs include a workmanship warranty.",
  fq4:"Do you take small jobs?", fq4a:"Of course: from a single repair to a full remodel.",
  foot_t:"Remodeling, construction and maintenance with warranty.", bot_open:"24h Assistant", bot_title:"Santa Clara Assistant",
  err:"Please complete name, phone, project type and area.",
  cats:{all:"All", Remodelación:"Remodeling", Pintura:"Painting", Eléctrico:"Electrical", Plomería:"Plumbing", Pisos:"Floors"}
}};

const PROJECTS = [
  {cat:"Remodelación", es:["Cocina moderna","Gabinetes, cubierta y enchape nuevo."], en:["Modern kitchen","New cabinets, countertop and tiling."], c:"#8a5a2b", i:"🍳"},
  {cat:"Remodelación", es:["Baño completo","Cambio de sanitarios, ducha y piso."], en:["Full bathroom","New fixtures, shower and floor."], c:"#2b6a8a", i:"🛁"},
  {cat:"Pintura", es:["Fachada residencial","Pintura exterior con sellador."], en:["House facade","Exterior paint with sealer."], c:"#a8452b", i:"🎨"},
  {cat:"Pintura", es:["Interior de oficina","Acabado liso en 3 días."], en:["Office interior","Smooth finish in 3 days."], c:"#4b6b3a", i:"🖌️"},
  {cat:"Eléctrico", es:["Tablero y cableado","Actualización completa de instalación."], en:["Panel & wiring","Full electrical upgrade."], c:"#8a7a1f", i:"⚡"},
  {cat:"Eléctrico", es:["Iluminación LED","Luminarias en local comercial."], en:["LED lighting","Fixtures for a retail shop."], c:"#5a3a8a", i:"💡"},
  {cat:"Plomería", es:["Reparación de fugas","Tubería nueva y drenajes."], en:["Leak repair","New piping and drains."], c:"#1f6f6a", i:"🚰"},
  {cat:"Pisos", es:["Porcelanato sala","60x60 cm con sisa mínima."], en:["Living room porcelain","60x60 cm with minimal grout."], c:"#6a6a6a", i:"🧱"}
];

const BOT = {
  es:{hi:"¡Hola! Soy el asistente de Multiservicios Santa Clara. ¿En qué te ayudo?",
    q:[["Servicios","Hacemos remodelaciones, pintura, electricidad, plomería, cielos, pisos, mantenimiento y soldadura."],
       ["Precios","Cada trabajo es distinto. La cotización es gratis: usa el formulario o escríbenos por WhatsApp."],
       ["Zonas","Atendemos Santa Clara y comunidades cercanas. Consúltanos por tu zona."],
       ["Horario","Lun–Sáb de 7:00 a.m. a 6:00 p.m. Este asistente responde las 24 h."]],
    wa:"Hablar con una persona", def:"Gracias por tu mensaje. Para atenderte mejor, escríbenos por WhatsApp:"},
  en:{hi:"Hi! I'm the Multiservicios Santa Clara assistant. How can I help?",
    q:[["Services","We do remodeling, painting, electrical, plumbing, ceilings, floors, maintenance and welding."],
       ["Pricing","Every job is different. Quotes are free: use the form or message us on WhatsApp."],
       ["Areas","We serve Santa Clara and nearby communities. Ask us about your area."],
       ["Hours","Mon–Sat 7:00 a.m.–6:00 p.m. This assistant replies 24/7."]],
    wa:"Talk to a person", def:"Thanks for your message. To help you better, message us on WhatsApp:"}
};

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
let lang = "es";
try { lang = localStorage.getItem("lang") || "es"; } catch(e){}
const waUrl = t => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
const GREET = {es:"Hola, quisiera información sobre sus servicios.", en:"Hello, I'd like information about your services."};

/* i18n: el español es el texto original del HTML */
$$("[data-i18n],[data-i18n-html]").forEach(el => {
  el._es = el.hasAttribute("data-i18n-html") ? el.innerHTML : el.textContent;
});
const CATS_ES = ["Remodelación","Pintura","Eléctrico","Plomería","Pisos"];

function applyLang(){
  document.documentElement.lang = lang;
  $$("[data-i18n],[data-i18n-html]").forEach(el => {
    const k = el.dataset.i18n || el.dataset.i18nHtml;
    const v = lang==="es" ? el._es : I18N.en[k];
    if (v==null) return;
    el.hasAttribute("data-i18n-html") ? el.innerHTML = v : el.textContent = v;
  });
  $("#lang").textContent = lang==="es" ? "ES | en" : "es | EN";
  renderFilters(); renderProjects(); fillProjectSelect(); initBot();
  $$("[data-wa]").forEach(a => a.href = waUrl(GREET[lang]));
  $("#quoteForm [name=zone]").placeholder = lang==="es" ? "Ej: Santa Clara, centro" : "e.g. Santa Clara, downtown";
}
$("#lang").onclick = () => { lang = lang==="es" ? "en" : "es"; try{localStorage.setItem("lang",lang)}catch(e){} applyLang(); };

/* links config */
$("#phoneTxt").textContent = CONFIG.phoneDisplay;
$("#callLink").href = "tel:+" + CONFIG.whatsapp;
$("#mailLink").href = "mailto:" + CONFIG.email; $("#mailTxt").textContent = CONFIG.email;
["#igLink","#igLink2"].forEach(s => $(s).href = CONFIG.instagram);
$("#fbLink").href = CONFIG.facebook; $("#tkLink").href = CONFIG.tiktok; $("#gLink").href = CONFIG.googleReviews;
$("#yr").textContent = new Date().getFullYear();

/* nav */
const burger = $("#burger"), links = $("#links");
burger.onclick = () => { const o = links.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
links.addEventListener("click", e => { if (e.target.tagName==="A") { links.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

/* projects */
let cat = "all";
function catLabel(c){ return lang==="en" ? (I18N.en.cats[c]||c) : (c==="all" ? "Todos" : c); }
function renderFilters(){
  $("#filters").innerHTML = ["all",...CATS_ES].map(c => `<button role="tab" data-c="${c}" aria-selected="${c===cat}">${catLabel(c)}</button>`).join("");
  $$("#filters button").forEach(b => b.onclick = () => { cat = b.dataset.c; renderFilters(); renderProjects(); });
}
function renderProjects(){
  $("#grid").innerHTML = PROJECTS.filter(p => cat==="all" || p.cat===cat).map(p => {
    const [t,d] = p[lang];
    return `<article class="proj"><div class="ph" data-type="${catLabel(p.cat)}" style="--c1:${p.c}"><span>${p.i}</span></div><div class="t"><h3>${t}</h3><p>${d}</p></div></article>`;
  }).join("");
}
function fillProjectSelect(){
  const sel = $("#projectSel"), cur = sel.value;
  sel.innerHTML = `<option value="">${lang==="es"?"Selecciona…":"Select…"}</option>` +
    [...CATS_ES,"Otro"].map(c => `<option value="${c}">${c==="Otro"?(lang==="es"?"Otro":"Other"):catLabel(c)}</option>`).join("");
  sel.value = cur;
}

/* quote form */
function quoteText(f){
  const L = lang==="es"
    ? ["Hola, quiero una cotización.","Nombre","Teléfono","Proyecto","Zona","Presupuesto","Cuándo","Detalles"]
    : ["Hello, I'd like a quote.","Name","Phone","Project","Area","Budget","When","Details"];
  const sel = $("#quoteForm");
  const opt = n => sel[n].selectedOptions[0].textContent;
  return [L[0], `${L[1]}: ${f.name}`, `${L[2]}: ${f.phone}`, `${L[3]}: ${opt("project")}`, `${L[4]}: ${f.zone}`,
    `${L[5]}: ${opt("budget")}`, `${L[6]}: ${opt("when")}`, f.desc && `${L[7]}: ${f.desc}`].filter(Boolean).join("\n");
}
function formData(){ const fd = Object.fromEntries(new FormData($("#quoteForm"))); return fd; }
function validate(f){ const ok = f.name.trim() && f.phone.trim() && f.project && f.zone.trim();
  const e = $("#formErr"); e.hidden = !!ok; e.textContent = lang==="es" ? "Completa nombre, teléfono, tipo de proyecto y zona." : I18N.en.err; return !!ok; }
$("#quoteForm").addEventListener("submit", e => { e.preventDefault(); const f = formData(); if (validate(f)) window.open(waUrl(quoteText(f)), "_blank", "noopener"); });
$("#mailQuote").addEventListener("click", e => { e.preventDefault(); const f = formData(); if (!validate(f)) return;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(lang==="es"?"Solicitud de cotización":"Quote request")}&body=${encodeURIComponent(quoteText(f))}`; });

/* chatbot */
const botEl = $("#bot"), msgs = $("#msgs"), quick = $("#quick");
const add = (t, w, html) => { const d = document.createElement("div"); d.className = "m " + w; html ? d.innerHTML = t : d.textContent = t; msgs.append(d); msgs.scrollTop = msgs.scrollHeight; };
function waReply(){ add(`${BOT[lang].def} <a href="${waUrl(GREET[lang])}" target="_blank" rel="noopener">${BOT[lang].wa}</a>`, "b", true); }
function initBot(){
  msgs.innerHTML = ""; add(BOT[lang].hi, "b");
  quick.innerHTML = "";
  BOT[lang].q.forEach(([l, a]) => { const b = document.createElement("button"); b.textContent = l; b.onclick = () => { add(l, "u"); setTimeout(() => add(a, "b"), 350); }; quick.append(b); });
  const w = document.createElement("button"); w.textContent = "WhatsApp"; w.onclick = () => { add("WhatsApp", "u"); setTimeout(waReply, 350); }; quick.append(w);
}
function toggleBot(open){ botEl.hidden = !open; $("#botBtn").setAttribute("aria-expanded", open); }
$("#botBtn").onclick = () => toggleBot(botEl.hidden);
$("#botClose").onclick = () => toggleBot(false);

/* reveal + counters */
$$(".card,.steps li,.sec .h2,details").forEach(el => el.classList.add("rv"));
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), {threshold:.15});
$$(".rv").forEach(el => io.observe(el));
const co = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; co.unobserve(en.target);
  const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix||"", t0 = performance.now();
  const step = t => { const p = Math.min((t-t0)/1200,1); el.textContent = Math.round(end*p) + suf; if (p<1) requestAnimationFrame(step); };
  matchMedia("(prefers-reduced-motion:reduce)").matches ? el.textContent = end+suf : requestAnimationFrame(step); }), {threshold:.5});
$$("[data-count]").forEach(el => co.observe(el));

applyLang();
