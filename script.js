/* ==========================================================
   CONFIG — todo lo editable del cliente vive aquí.
   Los valores marcados TODO deben confirmarse con el cliente.
   Si una red social / dato queda vacío (""), su botón se oculta.
   ========================================================== */
const CONFIG = {
  whatsapp: "50660256104",                 // del perfil de Instagram (código país + número, sin +)
  phoneDisplay: "+506 6025 6104",
  email: "tucorreo@tudominio.com",         // TODO: correo profesional del dominio del cliente
  instagram: "https://www.instagram.com/santaclara_multiservicios",
  threads: "https://www.threads.com/@santaclara_multiservicios",
  facebook: "",                            // TODO: URL de Facebook (vacío = oculto)
  tiktok: "",                              // TODO: URL de TikTok (vacío = oculto)
  googleReviews: "",                       // TODO: enlace directo a reseñas de Google (g.page/r/.../review)
  mapQuery: "Puerto Viejo de Limón, Costa Rica", // TODO: dirección exacta para el mapa y "Cómo llegar"
  hours: ""                                // TODO: ej. "Lun–Sáb 7:00 a.m. – 5:00 p.m." (vacío = no se muestra)
};

/* Testimonios reales (vacío = se oculta el bloque). Formato:
   { name: "Nombre", es: "Texto en español", en: "Text in English" } */
const TESTIMONIALS = [];

/* ---------- textos en inglés (el español es el HTML original) ---------- */
const EN = {
  skip:"Skip to content", nav_services:"Services", nav_products:"Products", nav_projects:"Projects", nav_location:"Location", nav_quote:"Get a quote", nav_reviews:"Reviews",
  hero_tag:"Free quote · Puerto Viejo de Limón, CR",
  hero_h1:"Construction and remodeling <em>built to last</em>",
  hero_lead:"Residential, commercial and office projects, plus construction materials for your job. From Puerto Viejo de Limón, Costa Rica.",
  hero_cta1:"Request a quote", hero_cta2:"Message on WhatsApp",
  t1:"Instagram followers", t2:"project types: residential, commercial and offices", t3:"virtual assistant",
  hc_title:"Direct contact", hc_sub:"We reply on WhatsApp", call:"Call now",
  l_addr:"Puerto Viejo de Limón, Costa Rica",
  s_title:"What we do",
  ty1:"Residential", ty1d:"New homes, extensions and remodels for your home.",
  ty2:"Commercial", ty2d:"Shops, warehouses and spaces designed for your business.",
  ty3:"Offices", ty3d:"Partitions, ceilings and finishes for workspaces.", ty_more:"See projects",
  sv1:"New construction", sv1d:"Houses, shops and buildings from the foundations to the finishes.",
  sv2:"Remodels and extensions", sv2d:"We renovate and extend kitchens, bathrooms, facades and more.",
  sv3:"Structure and concrete", sv3d:"Structure, walls, slabs and retaining walls with quality materials.",
  sv4:"Finishes", sv4d:"Floors, tiling, paint and the final details of your project.",
  sv5:"Ceilings and partitions", sv5d:"Drywall and fiber-cement for offices, shops and homes.",
  sv6:"Installations", sv6d:"Electrical and plumbing for your home or business.",
  sv7:"Roofs and structures", sv7d:"Roofing, gutters, gates and metal structures.",
  sv8:"Construction materials", sv8d:"Everything your job needs, with expert advice.",
  pd_title:"Construction materials for your job", pd_lead:"Ask about availability and price for what you need. We reply on WhatsApp.",
  pd1:"Stone, sand and gravel", pd1d:"Aggregates for concrete, fill and roads.",
  pd2:"Cement and concrete", pd2d:"Cement and mixes for every stage of the job.",
  pd3:"Blocks and precast", pd3d:"Blocks, pillar caps and concrete pieces.",
  pd4:"Steel and rebar", pd4d:"Rebar, mesh and wire for your structure.",
  pd5:"Roofing and sheets", pd5d:"Sheets, gutters and roofing accessories.",
  pd6:"Floors and finishes", pd6d:"Ceramic, porcelain, paint and more.",
  pd_cta:"Ask for price",
  p_title:"Completed projects", p_lead:"Browse by project type. More work and job progress on our Instagram.", p_ig:"See more on Instagram", p_ph:"Sample photo",
  pr_kicker:"Process", pr_title:"How we work",
  st1:"Tell us about your project", st1d:"Send the form or message us on WhatsApp with photos, measurements or plans.",
  st2:"Visit and quote", st2d:"We review the site, answer your questions and give you a clear budget.",
  st3:"Execution", st3d:"We work in an orderly way and keep you informed of progress.",
  st4:"Handover", st4d:"We review the result together before closing the project.",
  q_title:"Get your free quote", q_lead:"Tell us what you need and WhatsApp will open with your request ready to send. We reply as soon as possible.",
  q_c1:"No commitment", q_c2:"Detailed budget", q_c3:"Residential, commercial and office projects", q_follow:"Follow us",
  f_name:"Name", f_phone:"Phone", f_project:"Project type",
  pj0:"Select…", pj1:"Residential construction", pj2:"Remodel or extension", pj3:"Commercial project", pj4:"Offices", pj5:"Construction materials", pj6:"Other",
  f_zone:"Project area or address", f_zone_ph:"e.g. Puerto Viejo, Limón",
  f_budget:"Estimated budget", b0:"Please suggest one", b1:"Under ₡500 000", b2:"₡500 000 – ₡2 000 000", b3:"₡2 000 000 – ₡10 000 000", b4:"Over ₡10 000 000",
  f_when:"When do you need it?", w0:"As soon as possible", w1:"This month", w2:"In 1 to 3 months", w3:"Just getting quotes",
  f_desc:"Details (measurements, materials, photos to send…)", f_send:"Send via WhatsApp", f_mail:"or send by email",
  r_title:"Reviews and community", r_h:"Your opinion helps us grow",
  r_lead:"Worked with us? Tell us about your experience on Google. Your review helps more people find us.", r_cta:"See our Google reviews",
  ig_t:"Instagram followers", ig_d:"See our work, materials and job progress day by day.",
  l_title:"Where we are", l_lead:"We are in Puerto Viejo de Limón and serve nearby areas. Message us to confirm coverage in your area.", l_cta:"Get directions",
  faq_kicker:"Questions", faq_title:"Frequently asked questions",
  fq1:"Is the quote free?", fq1a:"Yes. We quote for free with no commitment.",
  fq2:"What kind of projects do you do?", fq2a:"Construction and remodeling of residential, commercial and office projects.",
  fq3:"Do you sell construction materials?", fq3a:"Yes. Ask us on WhatsApp about availability and price for what you need.",
  fq4:"Which areas do you cover?", fq4a:"We are in Puerto Viejo de Limón and serve nearby areas. Ask us about your area.",
  fq5:"How do I get started?", fq5a:"Fill in the quote form or message us on WhatsApp with photos, measurements or plans of your project.",
  foot_t:"Construction, remodeling and construction materials in Puerto Viejo de Limón, Costa Rica.",
  bot_open:"24h Assistant", bot_title:"Santa Clara Assistant", bot_ph:"Type your question…"
};

const CATS = { res:["Residencial","Residential"], com:["Comercial","Commercial"], ofi:["Oficinas","Offices"], rem:["Remodelación","Remodeling"] };
const MARQUEE = {
  es:["CONSTRUCCIÓN","REMODELACIÓN","RESIDENCIAL","COMERCIAL","OFICINAS","MATERIALES"],
  en:["CONSTRUCTION","REMODELING","RESIDENTIAL","COMMERCIAL","OFFICES","MATERIALS"]
};
const MSG = {
  es:{ greet:"Hola, quisiera información sobre sus servicios.", prod:"Hola, quiero consultar precio y disponibilidad de: ",
       title:"Multiservicios Santa Clara | Construcción y remodelación en Puerto Viejo de Limón", map:"Mapa de Puerto Viejo de Limón",
       err:"Completa nombre, teléfono, tipo de proyecto y zona.", quoteSubject:"Solicitud de cotización",
       quote:["Hola, quiero una cotización.","Nombre","Teléfono","Proyecto","Zona","Presupuesto","Cuándo","Detalles"] },
  en:{ greet:"Hello, I'd like information about your services.", prod:"Hello, I'd like to ask about price and availability of: ",
       title:"Multiservicios Santa Clara | Construction and remodeling in Puerto Viejo de Limón", map:"Map of Puerto Viejo de Limón",
       err:"Please complete name, phone, project type and area.", quoteSubject:"Quote request",
       quote:["Hello, I'd like a quote.","Name","Phone","Project","Area","Budget","When","Details"] }
};

/* Proyectos de ejemplo. Para usar fotos reales: guardar assets/projects/01.jpg, 02.jpg… en este mismo orden.
   Si la foto no existe, se muestra la ilustración con la etiqueta "Foto de ejemplo". */
const PROJECTS = [
  { cat:"res", ic:"house",    es:["Vivienda residencial","De la obra gris a los acabados."],       en:["Residential home","From structure to finishes."] },
  { cat:"res", ic:"hat",      es:["Ampliación de casa","Más espacio para tu familia."],            en:["Home extension","More room for your family."] },
  { cat:"com", ic:"building", es:["Local comercial","Espacios listos para tu negocio."],           en:["Commercial space","Spaces ready for your business."] },
  { cat:"com", ic:"truss",    es:["Fachada comercial","Imagen nueva para tu local."],              en:["Commercial facade","A fresh look for your shop."] },
  { cat:"ofi", ic:"office",   es:["Oficinas","Divisiones, cielos y acabados."],                    en:["Offices","Partitions, ceilings and finishes."] },
  { cat:"ofi", ic:"panel",    es:["Remodelación de oficina","Espacios más funcionales."],          en:["Office remodel","More functional spaces."] },
  { cat:"rem", ic:"roller",   es:["Cocina remodelada","Diseño y acabados a tu medida."],           en:["Remodeled kitchen","Design and finishes to your taste."] },
  { cat:"rem", ic:"drop",     es:["Baño renovado","Renovación completa."],                         en:["Renovated bathroom","Complete renovation."] }
];

/* Asistente 24 h: respuestas por palabra clave (ES + EN) */
const BOT = {
  es:{ hi:"¡Hola! Soy el asistente de Multiservicios Santa Clara. Te ayudo con servicios, materiales, cotizaciones y ubicación.",
       chips:[["Servicios","svc"],["Materiales","mat"],["Cotizar","quo"],["Ubicación","loc"],["Horario","hrs"],["WhatsApp","wa"]],
       a:{
         svc:()=>`Hacemos construcción y remodelación de proyectos residenciales, comerciales y oficinas. <a href="#servicios" data-go>Ver servicios</a>`,
         mat:()=>`También tenemos materiales de construcción para tu obra. <a href="#productos" data-go>Ver productos</a> o consulta disponibilidad por <a data-wa>WhatsApp</a>.`,
         quo:()=>`La cotización es gratis y sin compromiso. <a href="#cotizar" data-go>Llena el formulario</a> o escríbenos por <a data-wa>WhatsApp</a>.`,
         loc:()=>`Estamos en Puerto Viejo de Limón, Costa Rica. <a href="#ubicacion" data-go>Ver mapa</a>`,
         hrs:()=>CONFIG.hours ? `Nuestro horario: ${CONFIG.hours}. Este asistente responde 24 h.` : `Este asistente responde 24 h. Escríbenos por <a data-wa>WhatsApp</a> y te respondemos lo antes posible.`,
         wa:()=>`Escríbenos por <a data-wa>WhatsApp</a> o llama al <a href="tel:+${CONFIG.whatsapp}">${CONFIG.phoneDisplay}</a>.`,
         def:()=>`Gracias por tu mensaje. Para atenderte mejor, escríbenos por <a data-wa>WhatsApp</a>.`
       } },
  en:{ hi:"Hi! I'm the Multiservicios Santa Clara assistant. I can help with services, materials, quotes and location.",
       chips:[["Services","svc"],["Materials","mat"],["Get a quote","quo"],["Location","loc"],["Hours","hrs"],["WhatsApp","wa"]],
       a:{
         svc:()=>`We do construction and remodeling for residential, commercial and office projects. <a href="#servicios" data-go>See services</a>`,
         mat:()=>`We also have construction materials for your job. <a href="#productos" data-go>See products</a> or ask about availability on <a data-wa>WhatsApp</a>.`,
         quo:()=>`Quotes are free with no commitment. <a href="#cotizar" data-go>Fill in the form</a> or message us on <a data-wa>WhatsApp</a>.`,
         loc:()=>`We are in Puerto Viejo de Limón, Costa Rica. <a href="#ubicacion" data-go>See map</a>`,
         hrs:()=>CONFIG.hours ? `Our hours: ${CONFIG.hours}. This assistant replies 24/7.` : `This assistant replies 24/7. Message us on <a data-wa>WhatsApp</a> and we'll reply as soon as possible.`,
         wa:()=>`Message us on <a data-wa>WhatsApp</a> or call <a href="tel:+${CONFIG.whatsapp}">${CONFIG.phoneDisplay}</a>.`,
         def:()=>`Thanks for your message. To help you better, message us on <a data-wa>WhatsApp</a>.`
       } }
};
const INTENTS = [  // el orden importa: lo más específico primero
  ["hrs", /horario|hora|abierto|atienden|hours|open|schedule/],
  ["loc", /ubic|direccion|donde|mapa|llegar|location|address|where|map|direction/],
  ["wa",  /whatsapp|telefono|llamar|contacto|numero|correo|phone|call|contact|number|email/],
  ["quo", /cotiz|precio|costo|presupuesto|cuanto|quote|price|cost|budget|how much/],
  ["mat", /material|piedra|arena|cemento|block|varilla|lamina|producto|stone|sand|cement|product|steel/],
  ["svc", /servicio|hacen|ofrecen|construc|remodel|obra|casa|oficina|service|build|offer|house|office/]
];

/* ---------- utilidades ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waUrl = text => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
let lang = "es";
try { lang = localStorage.getItem("lang") === "en" ? "en" : "es"; } catch (e) {}
let cat = "all";

/* El español es el texto original del HTML: se guarda y se restaura al cambiar de idioma */
$$("[data-i18n],[data-i18n-html]").forEach(el => { el._es = el.hasAttribute("data-i18n-html") ? el.innerHTML : el.textContent; });
$$("[data-i18n-ph]").forEach(el => { el._es = el.placeholder; });

function applyLang() {
  document.documentElement.lang = lang;
  document.title = MSG[lang].title;
  $$("[data-i18n],[data-i18n-html]").forEach(el => {
    const html = el.hasAttribute("data-i18n-html");
    const v = lang === "es" ? el._es : EN[el.dataset.i18n || el.dataset.i18nHtml];
    if (v == null) return;
    html ? (el.innerHTML = v) : (el.textContent = v);
  });
  $$("[data-i18n-ph]").forEach(el => { el.placeholder = lang === "es" ? el._es : EN[el.dataset.i18nPh]; });
  $("#lang").textContent = lang === "es" ? "ES | en" : "es | EN";
  $("#mapFrame").title = MSG[lang].map;
  $("#mapFrame").src = `https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.mapQuery)}&hl=${lang}&z=14&output=embed`;
  renderMarquee(); renderFilters(); renderProjects(); renderTestimonials(); wireWhatsApp(); initBot();
}
$("#lang").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  applyLang();
});

/* ---------- enlaces configurables ---------- */
function wireStatic() {
  $("#phoneTxt").textContent = CONFIG.phoneDisplay;
  $("#callLink").href = `tel:+${CONFIG.whatsapp}`;
  $("#locPhone").href = `tel:+${CONFIG.whatsapp}`; $("#locPhone").textContent = CONFIG.phoneDisplay;
  $("#mailLink").href = `mailto:${CONFIG.email}`; $("#mailTxt").textContent = CONFIG.email;
  $("#footPhone").textContent = CONFIG.phoneDisplay; $("#footMail").textContent = CONFIG.email;
  $$("[data-soc]").forEach(a => { const u = CONFIG[a.dataset.soc]; if (u) { a.href = u; a.hidden = false; } else a.hidden = true; });
  $("#gLink").href = CONFIG.googleReviews || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Multiservicios Santa Clara " + CONFIG.mapQuery)}`;
  $("#dirLink").href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONFIG.mapQuery)}`;
  if (CONFIG.hours) { $("#hoursTxt").textContent = CONFIG.hours; $("#hoursLi").hidden = false; }
  $("#yr").textContent = new Date().getFullYear();
}
function wireWhatsApp(root = document) {
  $$("[data-wa]", root).forEach(a => { a.href = waUrl(MSG[lang].greet); a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-prod]", root).forEach(a => {
    a.href = waUrl(MSG[lang].prod + $("h3", a.closest("article")).textContent.trim());
    a.target = "_blank"; a.rel = "noopener";
  });
}

/* ---------- navegación ---------- */
const burger = $("#burger"), links = $("#links");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", links.classList.toggle("open")));
links.addEventListener("click", e => { if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

/* ---------- marquee ---------- */
function renderMarquee() {
  const w = MARQUEE[lang];
  $("#marquee").innerHTML = [...w, ...w, ...w, ...w].map(x => `<span>${x}</span>`).join("");
}

/* ---------- portafolio ---------- */
const catLabel = c => c === "all" ? (lang === "es" ? "Todos" : "All") : CATS[c][lang === "es" ? 0 : 1];
function renderFilters() {
  $("#filters").innerHTML = ["all", ...Object.keys(CATS)].map(c => `<button type="button" data-c="${c}" aria-pressed="${c === cat}">${catLabel(c)}</button>`).join("");
}
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  cat = b.dataset.c; renderFilters(); renderProjects();
});
$$("[data-filter]").forEach(a => a.addEventListener("click", () => { cat = a.dataset.filter; renderFilters(); renderProjects(); }));
function renderProjects() {
  const ph = lang === "es" ? "Foto de ejemplo" : EN.p_ph;
  $("#grid").innerHTML = PROJECTS.map((p, i) => ({ ...p, n: String(i + 1).padStart(2, "0") }))
    .filter(p => cat === "all" || p.cat === cat)
    .map(p => {
      const [t, d] = p[lang];
      return `<article class="proj"><div class="ph" data-ph="${ph}">
        <svg class="ic big" aria-hidden="true"><use href="#i-${p.ic}"/></svg>
        <img src="assets/projects/${p.n}.jpg" alt="${t}" loading="lazy" onload="this.parentNode.classList.add('has-img');this.parentNode.tabIndex=0;this.parentNode.setAttribute('role','button')" onerror="this.remove()">
        <span class="badge">${catLabel(p.cat)}</span></div>
        <div class="t"><h3>${t}</h3><p>${d}</p></div></article>`;
    }).join("");
}
/* lightbox para fotos reales */
const lb = $("#lb");
function openLb(ph) {
  const img = $("img", ph); if (!img) return;
  $("img", lb).src = img.src; $("img", lb).alt = img.alt; $("p", lb).textContent = img.alt; lb.showModal();
}
$("#grid").addEventListener("click", e => { const ph = e.target.closest(".ph.has-img"); if (ph) openLb(ph); });
$("#grid").addEventListener("keydown", e => { const ph = e.target.closest(".ph.has-img"); if (ph && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLb(ph); } });
lb.addEventListener("click", e => { if (e.target === lb || e.target.closest(".lb-x")) lb.close(); });

/* ---------- testimonios (solo si hay reales) ---------- */
function renderTestimonials() {
  const box = $("#testi");
  box.hidden = !TESTIMONIALS.length;
  box.innerHTML = TESTIMONIALS.map(t => `<blockquote class="card"><div class="stars stars-sm" aria-hidden="true">${'<svg class="ic fill"><use href="#i-star"/></svg>'.repeat(5)}</div><p>“${t[lang]}”</p><cite>— ${t.name}</cite></blockquote>`).join("");
}

/* ---------- cotizador ---------- */
const form = $("#quoteForm");
function quoteText() {
  const L = MSG[lang].quote, f = form.elements, opt = n => f[n].selectedOptions[0].textContent;
  return [L[0], `${L[1]}: ${f.name.value.trim()}`, `${L[2]}: ${f.phone.value.trim()}`, `${L[3]}: ${opt("project")}`,
    `${L[4]}: ${f.zone.value.trim()}`, `${L[5]}: ${opt("budget")}`, `${L[6]}: ${opt("when")}`,
    f.desc.value.trim() && `${L[7]}: ${f.desc.value.trim()}`].filter(Boolean).join("\n");
}
function validate() {
  const bad = ["name", "phone", "project", "zone"].filter(n => !form.elements[n].value.trim());
  ["name", "phone", "project", "zone"].forEach(n => form.elements[n].setAttribute("aria-invalid", bad.includes(n)));
  const err = $("#formErr"); err.hidden = !bad.length; err.textContent = MSG[lang].err;
  if (bad.length) form.elements[bad[0]].focus();
  return !bad.length;
}
form.addEventListener("submit", e => { e.preventDefault(); if (validate()) window.open(waUrl(quoteText()), "_blank", "noopener"); });
$("#mailQuote").addEventListener("click", e => {
  e.preventDefault(); if (!validate()) return;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(MSG[lang].quoteSubject)}&body=${encodeURIComponent(quoteText())}`;
});

/* ---------- asistente 24 h ---------- */
const botEl = $("#bot"), msgs = $("#msgs"), quick = $("#quick");
function add(content, who, html) {
  const d = document.createElement("div"); d.className = "m " + who;
  html ? (d.innerHTML = content) : (d.textContent = content);
  msgs.append(d); msgs.scrollTop = msgs.scrollHeight;
  if (html) { wireWhatsApp(d); $$("[data-wa]", d).forEach(a => a.target = "_blank"); }
  return d;
}
function reply(key) { setTimeout(() => add(BOT[lang].a[key](), "b", true), 350); }
function initBot() {
  msgs.innerHTML = ""; add(BOT[lang].hi, "b");
  quick.innerHTML = "";
  BOT[lang].chips.forEach(([label, key]) => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = label;
    b.addEventListener("click", () => { add(label, "u"); reply(key); });
    quick.append(b);
  });
}
function toggleBot(open) { botEl.hidden = !open; $("#botBtn").setAttribute("aria-expanded", open); if (open) $("#botIn").focus(); }
$("#botBtn").addEventListener("click", () => toggleBot(botEl.hidden));
$("#botClose").addEventListener("click", () => toggleBot(false));
msgs.addEventListener("click", e => { if (e.target.closest("[data-go]") && matchMedia("(max-width:700px)").matches) toggleBot(false); });
$("#botForm").addEventListener("submit", e => {
  e.preventDefault();
  const input = $("#botIn"), text = input.value.trim(); if (!text) return;
  add(text, "u"); input.value = "";
  const s = norm(text);
  if (/^(hola|buenas|hello|hi|hey)\b/.test(s)) return reply("svc");
  const hit = INTENTS.find(([, re]) => re.test(s));
  reply(hit ? hit[0] : "def");
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && !botEl.hidden) toggleBot(false); });

/* ---------- animaciones: revelado y contadores ---------- */
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
  $$(".card,.type,.steps,.panel,.map,.sec .h2,.form,details").forEach(el => { el.classList.add("rv"); io.observe(el); });
  const fmt = n => n.toLocaleString(lang === "es" ? "es-CR" : "en-US");
  const co = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; co.unobserve(en.target);
    const el = en.target, end = +el.dataset.count, t0 = performance.now();
    const step = t => { const p = Math.min((t - t0) / 1300, 1); el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3)))) + "+"; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: .5 });
  $$("[data-count]").forEach(el => { el.textContent = "0"; co.observe(el); });
} else {
  $$("[data-count]").forEach(el => { el.textContent = (+el.dataset.count).toLocaleString("es-CR") + "+"; });
}

wireStatic();
applyLang();
