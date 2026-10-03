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
  hero_cta1:"Build my quote", hero_cta2:"Message on WhatsApp",
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
  add_cta:"Add", add_in:"Added",
  pd_title:"Construction materials for your job", pd_lead:"Add what you need to your quote and send it on WhatsApp to confirm availability and price.",
  pd1:"Stone, sand and gravel", pd1d:"Aggregates for concrete, fill and roads.",
  pd2:"Cement and concrete", pd2d:"Cement and mixes for every stage of the job.",
  pd3:"Blocks and precast", pd3d:"Blocks, pillar caps and concrete pieces.",
  pd4:"Steel and rebar", pd4d:"Rebar, mesh and wire for your structure.",
  pd5:"Roofing and sheets", pd5d:"Sheets, gutters and roofing accessories.",
  pd6:"Floors and finishes", pd6d:"Ceramic, porcelain, paint and more.",
  p_title:"Completed projects", p_lead:"Browse by project type. More work and job progress on our Instagram.", p_ig:"See more on Instagram", p_ph:"Sample photo",
  pr_kicker:"Process", pr_title:"How we work",
  st1:"Build your quote", st1d:"Pick what you need and send it on WhatsApp, with photos, measurements or plans if you have them.",
  st2:"Visit and budget", st2d:"We review the site, answer your questions and give you a clear budget.",
  st3:"Execution", st3d:"We work in an orderly way and keep you informed of progress.",
  st4:"Handover", st4d:"We review the result together before closing the project.",
  q_title:"Build your quote and send it on WhatsApp",
  q_lead:"Pick what you need, tell us about your project and WhatsApp will open with everything ready to send. No sign-up, no commitment.",
  qb1:"What do you need?", qb2:"Your project", qb3:"Your details", tab_srv:"Services", tab_mat:"Materials",
  q_empty:"Nothing added yet. Pick above or tell us in “Details”.",
  pt_res:"Residential", pt_com:"Commercial", pt_ofi:"Offices", pt_otro:"Other",
  f_name:"Name", f_phone:"Phone", f_zone:"Project area or address", f_zone_ph:"e.g. Puerto Viejo, Limón",
  f_budget:"Estimated budget", b0:"Please suggest one", b1:"Under ₡500 000", b2:"₡500 000 – ₡2 000 000", b3:"₡2 000 000 – ₡10 000 000", b4:"Over ₡10 000 000",
  f_when:"When do you need it?", w0:"As soon as possible", w1:"This month", w2:"In 1 to 3 months", w3:"Just getting quotes",
  f_desc:"Details (measurements, materials, photos to send…)", f_send:"Send via WhatsApp", f_mail:"Send by email",
  qs_title:"Your quote", qs_prev:"Message preview", qs_clear:"Clear all",
  qs_fine:"WhatsApp will open with your request ready to send. Your details are only used to build the message.",
  cb_text:"My quote",
  r_title:"Reviews and community", r_h:"Your opinion helps us grow",
  r_lead:"Worked with us? Tell us about your experience on Google. Your review helps more people find us.", r_cta:"See our Google reviews",
  ig_t:"Instagram followers", ig_d:"See our work, materials and job progress day by day.",
  l_title:"Where we are", l_lead:"We are in Puerto Viejo de Limón and serve nearby areas. Message us to confirm coverage in your area.", l_cta:"Get directions",
  faq_kicker:"Questions", faq_title:"Frequently asked questions",
  fq1:"Is the quote free?", fq1a:"Yes. We quote for free with no commitment.",
  fq2:"What kind of projects do you do?", fq2a:"Construction and remodeling of residential, commercial and office projects.",
  fq3:"Do you sell construction materials?", fq3a:"Yes. Add them to your quote and we'll confirm availability and price on WhatsApp.",
  fq4:"Which areas do you cover?", fq4a:"We are in Puerto Viejo de Limón and serve nearby areas. Ask us about your area.",
  fq5:"How do I get started?", fq5a:"Build your quote on this page (pick services or materials and send it on WhatsApp) or message us directly with photos, measurements or plans of your project.",
  foot_t:"Construction, remodeling and construction materials in Puerto Viejo de Limón, Costa Rica.",
  bot_open:"24h Assistant", bot_title:"Santa Clara Assistant", bot_ph:"Type your question…"
};

const CATS = { res:["Residencial","Residential"], com:["Comercial","Commercial"], ofi:["Oficinas","Offices"], rem:["Remodelación","Remodeling"] };
const MARQUEE = {
  es:["CONSTRUCCIÓN","REMODELACIÓN","RESIDENCIAL","COMERCIAL","OFICINAS","MATERIALES"],
  en:["CONSTRUCTION","REMODELING","RESIDENTIAL","COMMERCIAL","OFFICES","MATERIALS"]
};

/* Textos dinámicos (cotizador, avisos, mensaje de WhatsApp) */
const MSG = {
  es:{ greet:"Hola, quisiera información sobre sus servicios.",
       title:"Multiservicios Santa Clara | Construcción y remodelación en Puerto Viejo de Limón", map:"Mapa de Puerto Viejo de Limón",
       added:"Agregado", removed:"Quitado", sent:"Se abrió WhatsApp con tu cotización. ¡Gracias!", cleared:"Cotización vaciada",
       addAria:"Agregar a la cotización", inAria:"Quitar de la cotización", less:"Menos", more:"Más", qty:"Cantidad", remove:"Quitar", notePh:"Medidas o cantidad (opcional)", emptySum:"Tu lista está vacía.",
       errItems:"Agrega al menos un servicio o material, o cuéntanos qué necesitas en «Detalles».", errName:"Escribe tu nombre.", errPhone:"Escribe un teléfono válido.",
       quoteSubject:"Solicitud de cotización", intro:"Hola, quiero una cotización desde la página web.",
       client:"Cliente", project:"Proyecto", zone:"Zona", budget:"Presupuesto", when:"Plazo", items:"Lo que necesito", details:"Detalles",
       types:{ res:"Residencial", com:"Comercial", ofi:"Oficinas", otro:"Otro" } },
  en:{ greet:"Hello, I'd like information about your services.",
       title:"Multiservicios Santa Clara | Construction and remodeling in Puerto Viejo de Limón", map:"Map of Puerto Viejo de Limón",
       added:"Added", removed:"Removed", sent:"WhatsApp opened with your quote. Thank you!", cleared:"Quote cleared",
       addAria:"Add to quote", inAria:"Remove from quote", less:"Less", more:"More", qty:"Quantity", remove:"Remove", notePh:"Measurements or quantity (optional)", emptySum:"Your list is empty.",
       errItems:"Add at least one service or material, or tell us what you need in “Details”.", errName:"Please enter your name.", errPhone:"Please enter a valid phone number.",
       quoteSubject:"Quote request", intro:"Hello, I'd like a quote from the website.",
       client:"Client", project:"Project", zone:"Area", budget:"Budget", when:"Timeline", items:"What I need", details:"Details",
       types:{ res:"Residential", com:"Commercial", ofi:"Offices", otro:"Other" } }
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

/* Catálogo del cotizador. `k` = clave de texto (mismo nombre que las tarjetas).
   kind "srv": nota libre (medidas); kind "mat": cantidad + unidad [es, en]. */
const ITEMS = [
  { id:"obra",    kind:"srv", ic:"hat",    k:"sv1" },
  { id:"remod",   kind:"srv", ic:"roller", k:"sv2" },
  { id:"gris",    kind:"srv", ic:"bricks", k:"sv3" },
  { id:"acab",    kind:"srv", ic:"tile",   k:"sv4" },
  { id:"cielos",  kind:"srv", ic:"panel",  k:"sv5" },
  { id:"inst",    kind:"srv", ic:"bolt",   k:"sv6" },
  { id:"techos",  kind:"srv", ic:"truss",  k:"sv7" },
  { id:"piedra",  kind:"mat", ic:"stone",  k:"pd1", unit:{ es:["m³","m³"], en:["m³","m³"] } },
  { id:"cemento", kind:"mat", ic:"bag",    k:"pd2", unit:{ es:["saco","sacos"], en:["bag","bags"] } },
  { id:"block",   kind:"mat", ic:"bricks", k:"pd3", unit:{ es:["unidad","unidades"], en:["unit","units"] } },
  { id:"acero",   kind:"mat", ic:"rebar",  k:"pd4", unit:{ es:["varilla","varillas"], en:["rebar","rebars"] } },
  { id:"laminas", kind:"mat", ic:"sheet",  k:"pd5", unit:{ es:["lámina","láminas"], en:["sheet","sheets"] } },
  { id:"pisos",   kind:"mat", ic:"tile",   k:"pd6", unit:{ es:["m²","m²"], en:["m²","m²"] } }
];
const ITEM = Object.fromEntries(ITEMS.map(i => [i.id, i]));
const unitOf = (d, qty, lg = lang) => d.unit[lg][qty === 1 ? 0 : 1];   // "1 saco" / "3 sacos"

/* Asistente 24 h: respuestas por palabra clave (ES + EN) */
const BOT = {
  es:{ hi:"¡Hola! Soy el asistente de Multiservicios Santa Clara. Te ayudo con servicios, materiales, cotizaciones y ubicación.",
       chips:[["Servicios","svc"],["Materiales","mat"],["Cotizar","quo"],["Ubicación","loc"],["Horario","hrs"],["WhatsApp","wa"]],
       a:{
         svc:()=>`Hacemos construcción y remodelación de proyectos residenciales, comerciales y oficinas. <a href="#servicios" data-go>Ver servicios</a>`,
         mat:()=>`También tenemos materiales de construcción para tu obra. <a href="#productos" data-go>Ver productos</a> o agrégalos a tu <a href="#cotizar" data-go>cotización</a>.`,
         quo:()=>`Puedes armar tu cotización en la página: elige lo que necesitas y envíala por WhatsApp, gratis y sin compromiso. <a href="#cotizar" data-go>Armar cotización</a>`,
         loc:()=>`Estamos en Puerto Viejo de Limón, Costa Rica. <a href="#ubicacion" data-go>Ver mapa</a>`,
         hrs:()=>CONFIG.hours ? `Nuestro horario: ${CONFIG.hours}. Este asistente responde 24 h.` : `Este asistente responde 24 h. Escríbenos por <a data-wa>WhatsApp</a> y te respondemos lo antes posible.`,
         wa:()=>`Escríbenos por <a data-wa>WhatsApp</a> o llama al <a href="tel:+${CONFIG.whatsapp}">${CONFIG.phoneDisplay}</a>.`,
         def:()=>`Gracias por tu mensaje. Para atenderte mejor, escríbenos por <a data-wa>WhatsApp</a>.`
       } },
  en:{ hi:"Hi! I'm the Multiservicios Santa Clara assistant. I can help with services, materials, quotes and location.",
       chips:[["Services","svc"],["Materials","mat"],["Get a quote","quo"],["Location","loc"],["Hours","hrs"],["WhatsApp","wa"]],
       a:{
         svc:()=>`We do construction and remodeling for residential, commercial and office projects. <a href="#servicios" data-go>See services</a>`,
         mat:()=>`We also have construction materials for your job. <a href="#productos" data-go>See products</a> or add them to your <a href="#cotizar" data-go>quote</a>.`,
         quo:()=>`You can build your quote on this page: pick what you need and send it on WhatsApp, free and with no commitment. <a href="#cotizar" data-go>Build my quote</a>`,
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
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
let lang = "es";
try { lang = localStorage.getItem("lang") === "en" ? "en" : "es"; } catch (e) {}
let cat = "all";
const Q = () => MSG[lang];
const L = () => (lang === "es" ? 0 : 1);

/* El español es el texto original del HTML: se guarda y se restaura al cambiar de idioma */
const ES = {};
$$("[data-i18n],[data-i18n-html]").forEach(el => {
  el._es = el.hasAttribute("data-i18n-html") ? el.innerHTML : el.textContent;
  ES[el.dataset.i18n || el.dataset.i18nHtml] = el._es;
});
$$("[data-i18n-ph]").forEach(el => { el._es = el.placeholder; });
const tr = k => (lang === "es" ? (ES[k] ?? EN[k] ?? k) : (EN[k] ?? ES[k] ?? k));

function applyLang() {
  document.documentElement.lang = lang;
  document.title = Q().title;
  $$("[data-i18n],[data-i18n-html]").forEach(el => {
    const html = el.hasAttribute("data-i18n-html");
    const v = lang === "es" ? el._es : EN[el.dataset.i18n || el.dataset.i18nHtml];
    if (v == null) return;
    html ? (el.innerHTML = v) : (el.textContent = v);
  });
  $$("[data-i18n-ph]").forEach(el => { el.placeholder = lang === "es" ? el._es : EN[el.dataset.i18nPh]; });
  $("#lang").textContent = lang === "es" ? "ES | en" : "es | EN";
  $("#mapFrame").title = Q().map;
  $("#mapFrame").src = `https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.mapQuery)}&hl=${lang}&z=14&output=embed`;
  splitHeadings(); renderMarquee(); renderFilters(); renderProjects(); renderTestimonials(); wireWhatsApp(); initBot();
  renderChips(); syncList(true); renderSummary(); syncAdd();
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
  $$("[data-wa]", root).forEach(a => { a.href = waUrl(Q().greet); a.target = "_blank"; a.rel = "noopener"; });
}

/* ---------- navegación ---------- */
const nav = $("#nav"), burger = $("#burger"), links = $("#links");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", links.classList.toggle("open")));
links.addEventListener("click", e => { if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

/* ---------- títulos: revelado palabra por palabra ---------- */
function splitWords(el) {
  let i = 0;
  const walk = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(tok => {
        if (!tok) return;
        if (/^\s+$/.test(tok)) { frag.append(document.createTextNode(" ")); return; }
        const w = document.createElement("span"), wi = document.createElement("span");
        w.className = "w"; wi.className = "wi"; wi.textContent = tok; wi.style.setProperty("--i", i++);
        w.append(wi); frag.append(w);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) walk(n);
  });
  walk(el);
}
function splitHeadings() { $$("[data-split]").forEach(splitWords); }

/* ---------- marquee ---------- */
function renderMarquee() {
  const w = MARQUEE[lang];
  $("#marquee").innerHTML = [...w, ...w, ...w, ...w].map(x => `<span>${x}</span>`).join("");
}

/* ---------- portafolio ---------- */
const catLabel = c => c === "all" ? (lang === "es" ? "Todos" : "All") : CATS[c][L()];
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
    .map((p, idx) => {
      const [t, d] = p[lang];
      return `<article class="proj" style="--i:${idx}"><div class="ph" data-ph="${ph}">
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
  box.innerHTML = TESTIMONIALS.map(t => `<blockquote class="card"><div class="stars stars-sm" aria-hidden="true">${'<svg class="ic fill"><use href="#i-star"/></svg>'.repeat(5)}</div><p>“${esc(t[lang])}”</p><cite>— ${esc(t.name)}</cite></blockquote>`).join("");
}

/* ==========================================================
   COTIZADOR: el cliente arma su lista y se envía por WhatsApp
   ========================================================== */
const form = $("#quoteForm");
let tab = "srv";
let lastCount = -1;
let quoteInView = false;
const loadCart = () => {
  try {
    return (JSON.parse(localStorage.getItem("msc_cart") || "[]") || [])
      .filter(x => x && ITEM[x.id])
      .map(x => ({ id: x.id, qty: Math.min(99999, Math.max(1, parseInt(x.qty, 10) || 1)), note: String(x.note || "").slice(0, 80) }));
  } catch (e) { return []; }
};
let cart = loadCart();
const saveCart = () => { try { localStorage.setItem("msc_cart", JSON.stringify(cart)); } catch (e) {} };
const find = id => cart.find(x => x.id === id);
const checkedType = () => (form.querySelector("input[name=ptype]:checked") || {}).value;
const selText = n => (form.elements[n].value ? form.elements[n].selectedOptions[0].textContent.trim() : "");

/* paso 1: pestañas + fichas */
function renderChips() {
  $("#chips").innerHTML = ITEMS.filter(i => i.kind === tab).map((i, n) =>
    `<button type="button" class="chip" data-id="${i.id}" style="--i:${n}" aria-pressed="${!!find(i.id)}"><span class="hex"><svg class="ic"><use href="#i-${i.ic}"/></svg></span><span class="t">${esc(tr(i.k))}</span><span class="chk"><svg class="ic"><use href="#i-check"/></svg></span></button>`).join("");
  syncChips();
}
function syncChips() {
  $$("#chips .chip").forEach(c => c.setAttribute("aria-pressed", !!find(c.dataset.id)));
  $$(".tabs [data-tab]").forEach(b => {
    const n = cart.filter(x => ITEM[x.id].kind === b.dataset.tab).length, c = $(".cnt", b);
    c.hidden = !n; c.textContent = n;
  });
}
$(".tabs").addEventListener("click", e => {
  const b = e.target.closest("[data-tab]"); if (!b) return;
  tab = b.dataset.tab;
  $$(".tabs [data-tab]").forEach(x => x.setAttribute("aria-selected", x === b));
  renderChips();
});
$("#chips").addEventListener("click", e => { const c = e.target.closest(".chip"); if (c) toggleItem(c.dataset.id); });
function syncAdd() {
  $$("[data-add]").forEach(b => {
    const on = !!find(b.dataset.add);
    b.setAttribute("aria-pressed", on);
    b.setAttribute("aria-label", `${on ? Q().inAria : Q().addAria}: ${tr(ITEM[b.dataset.add].k)}`);
  });
}
document.addEventListener("click", e => { const b = e.target.closest("[data-add]"); if (b) toggleItem(b.dataset.add); });

/* lista editable (cantidad / medidas) */
function rowEl(it) {
  const d = ITEM[it.id], li = document.createElement("li");
  li.className = "qrow"; li.dataset.id = it.id;
  const ctl = d.kind === "mat"
    ? `<div class="qty"><button type="button" data-step="-1" aria-label="${Q().less}">−</button><input type="number" min="1" max="99999" inputmode="numeric" value="${it.qty}" aria-label="${Q().qty}: ${esc(tr(d.k))}"><button type="button" data-step="1" aria-label="${Q().more}">+</button></div><span class="qunit">${unitOf(d, it.qty)}</span>`
    : `<input class="qnote" type="text" maxlength="80" placeholder="${esc(Q().notePh)}" aria-label="${esc(tr(d.k))}: ${esc(Q().notePh)}">`;
  li.innerHTML = `<span class="hex"><svg class="ic"><use href="#i-${d.ic}"/></svg></span><div class="qi"><b>${esc(tr(d.k))}</b></div><div class="qctl">${ctl}</div><button type="button" class="rm" aria-label="${Q().remove}: ${esc(tr(d.k))}"><svg class="ic"><use href="#i-x"/></svg></button>`;
  if (d.kind === "srv") $(".qnote", li).value = it.note;
  return li;
}
function syncList(rebuild) {
  const ul = $("#qlist");
  if (rebuild) ul.innerHTML = "";
  const have = new Set([...ul.children].map(li => li.dataset.id));
  cart.forEach(it => { if (!have.has(it.id)) ul.append(rowEl(it)); });
  [...ul.children].forEach(li => { if (!find(li.dataset.id)) li.remove(); });
}
function commit() { saveCart(); renderSummary(); updateProgress(); }
$("#qlist").addEventListener("click", e => {
  const li = e.target.closest(".qrow"); if (!li) return;
  const id = li.dataset.id;
  if (e.target.closest(".rm")) { toggleItem(id); return; }
  const st = e.target.closest("[data-step]");
  if (st) {
    const it = find(id); it.qty = Math.min(99999, Math.max(1, (+it.qty || 1) + (+st.dataset.step)));
    $("input", li).value = it.qty; $(".qunit", li).textContent = unitOf(ITEM[id], it.qty); commit();
  }
});
$("#qlist").addEventListener("input", e => {
  const li = e.target.closest(".qrow"); if (!li) return;
  const it = find(li.dataset.id); if (!it) return;
  if (e.target.matches(".qty input")) { const v = parseInt(e.target.value, 10); it.qty = v > 0 ? Math.min(v, 99999) : 1; $(".qunit", li).textContent = unitOf(ITEM[it.id], it.qty); }
  else if (e.target.matches(".qnote")) it.note = e.target.value;
  commit();
});
$("#qlist").addEventListener("focusout", e => {
  if (!e.target.matches(".qty input")) return;
  const it = find(e.target.closest(".qrow").dataset.id); if (it) e.target.value = it.qty;
});

/* agregar / quitar */
function toggleItem(id) {
  const i = cart.findIndex(x => x.id === id), name = tr(ITEM[id].k);
  if (i >= 0) { cart.splice(i, 1); toast(`${Q().removed}: ${name}`); }
  else { cart.push({ id, qty: 1, note: "" }); toast(`${Q().added}: ${name}`); bump(); }
  syncChips(); syncList(); syncAdd(); commit(); updateCartBar();
}

/* mensaje de WhatsApp */
function msgItem(it) {
  const d = ITEM[it.id], es = ES[d.k];
  const name = lang === "es" ? es : `${EN[d.k]} / ${es}`;   // en inglés se agrega el nombre en español para el negocio
  if (d.kind === "mat") {
    const es_u = unitOf(d, it.qty, "es"), en_u = unitOf(d, it.qty, "en");
    const u = lang === "es" || es_u === en_u ? es_u : `${en_u} / ${es_u}`;
    return `${name} — ${it.qty} ${u}`;
  }
  return it.note.trim() ? `${name} — ${it.note.trim()}` : name;
}
function buildMessage() {
  const q = Q(), f = form.elements, t = checkedType();
  const lines = [q.intro, ""];
  const who = [f.name.value.trim(), f.phone.value.trim()].filter(Boolean).join(" · ");
  if (who) lines.push(`*${q.client}:* ${who}`);
  if (t) lines.push(`*${q.project}:* ${q.types[t]}`);
  if (f.zone.value.trim()) lines.push(`*${q.zone}:* ${f.zone.value.trim()}`);
  if (selText("budget")) lines.push(`*${q.budget}:* ${selText("budget")}`);
  if (selText("when")) lines.push(`*${q.when}:* ${selText("when")}`);
  if (cart.length) { lines.push("", `*${q.items}:*`); cart.forEach(it => lines.push("• " + msgItem(it))); }
  if (f.desc.value.trim()) lines.push("", `*${q.details}:* ${f.desc.value.trim().slice(0, 700)}`);
  return lines.join("\n");
}

/* resumen lateral */
function renderSummary() {
  const q = Q(), f = form.elements, t = checkedType();
  $("#qcount").textContent = cart.length;
  const ul = $("#qsItems");
  ul.classList.toggle("anim", cart.length !== lastCount); lastCount = cart.length;
  ul.innerHTML = cart.length
    ? cart.map(it => {
        const d = ITEM[it.id], extra = d.kind === "mat" ? `${it.qty} ${unitOf(d, it.qty)}` : it.note.trim();
        return `<li><span>${esc(tr(d.k))}</span><span>${esc(extra)}</span></li>`;
      }).join("")
    : `<li class="qs-empty">${esc(q.emptySum)}</li>`;
  const rows = [[q.project, t && q.types[t]], [q.zone, f.zone.value.trim()], [q.budget, selText("budget")], [q.when, selText("when")]].filter(r => r[1]);
  $("#qsInfo").innerHTML = rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  $("#qPrev").textContent = buildMessage();
}

/* avance de los 3 pasos */
function updateProgress() {
  const f = form.elements, segs = $$(".qprogress i"), blocks = $$(".qblock");
  const ok = [
    cart.length > 0 || f.desc.value.trim().length >= 5,
    !!checkedType() && f.zone.value.trim().length > 0,
    f.name.value.trim().length >= 2 && f.phone.value.replace(/\D/g, "").length >= 7
  ];
  ok.forEach((v, i) => { segs[i].classList.toggle("on", v); blocks[i].classList.toggle("done", v); });
}
form.addEventListener("input", () => { renderSummary(); updateProgress(); });
form.addEventListener("change", () => { renderSummary(); updateProgress(); });

/* validación + envío */
function validate() {
  const f = form.elements;
  const hasContent = cart.length > 0 || f.desc.value.trim().length >= 5;
  const nameOk = f.name.value.trim().length >= 2;
  const phoneOk = f.phone.value.replace(/\D/g, "").length >= 7;
  [f.name, f.phone, f.desc].forEach(el => el.removeAttribute("aria-invalid"));
  const errs = [];
  if (!hasContent) { errs.push(Q().errItems); f.desc.setAttribute("aria-invalid", "true"); }
  if (!nameOk) { errs.push(Q().errName); f.name.setAttribute("aria-invalid", "true"); }
  if (!phoneOk) { errs.push(Q().errPhone); f.phone.setAttribute("aria-invalid", "true"); }
  const box = $("#formErr");
  box.hidden = !errs.length; box.innerHTML = errs.map(e => `• ${esc(e)}`).join("<br>");
  if (errs.length) {
    const target = !hasContent ? $("#qb1t") : !nameOk ? f.name : f.phone;
    target.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
    if (hasContent) target.focus({ preventScroll: true });
  }
  return !errs.length;
}
form.addEventListener("submit", e => {
  e.preventDefault(); if (!validate()) return;
  const url = waUrl(buildMessage());
  const w = window.open(url, "_blank");
  if (w) { try { w.opener = null; } catch (err) {} } else location.href = url;
  toast(Q().sent);
});
$("#mailQuote").addEventListener("click", () => {
  if (!validate()) return;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(Q().quoteSubject)}&body=${encodeURIComponent(buildMessage())}`;
});
$("#qClear").addEventListener("click", () => {
  cart = []; form.reset(); $("#formErr").hidden = true;
  [...form.elements].forEach(el => el.removeAttribute && el.removeAttribute("aria-invalid"));
  syncChips(); syncList(); syncAdd(); commit(); updateCartBar(); toast(Q().cleared);
});

/* botón flotante "Mi cotización" + avisos */
const cartBar = $("#cartBar");
function updateCartBar() { $("#cbCount").textContent = cart.length; cartBar.hidden = !(cart.length && !quoteInView); }
function bump() { cartBar.classList.remove("bump"); void cartBar.offsetWidth; cartBar.classList.add("bump"); }
cartBar.addEventListener("click", () => $("#cotizar").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }));
new IntersectionObserver(es => { quoteInView = es[0].isIntersecting; updateCartBar(); }, { threshold: .15 }).observe($("#cotizar"));
let toastTimer;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2300);
}

/* ---------- asistente 24 h ---------- */
const botEl = $("#bot"), msgs = $("#msgs"), quick = $("#quick");
function add(content, who, html) {
  const d = document.createElement("div"); d.className = "m " + who;
  html ? (d.innerHTML = content) : (d.textContent = content);
  msgs.append(d); msgs.scrollTop = msgs.scrollHeight;
  if (html) wireWhatsApp(d);
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

/* ==========================================================
   MOVIMIENTO
   ========================================================== */
const hero = $("#inicio"), prog = $("#progress"), mqEl = $("#marquee");
let lastY = scrollY, ticking = false, mqRate = 1, mqTarget = 1, mqRaf = 0;

/* la marquesina se acelera con el scroll */
function mqLoop() {
  mqRate += (mqTarget - mqRate) * .1; mqTarget += (1 - mqTarget) * .05;
  const a = mqEl.getAnimations()[0]; if (a) a.playbackRate = mqRate;
  if (Math.abs(mqRate - 1) > .02 || mqTarget > 1.02) mqRaf = requestAnimationFrame(mqLoop);
  else { if (a) a.playbackRate = 1; mqRaf = 0; }
}
/* progreso de lectura, header inteligente y parallax */
function onScroll() {
  ticking = false;
  const y = scrollY, max = document.documentElement.scrollHeight - innerHeight, dy = y - lastY;
  prog.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  nav.classList.toggle("scrolled", y > 24);
  if (!reduce) {
    if (y > 160 && dy > 6 && !links.classList.contains("open") && !nav.matches(":focus-within")) nav.classList.add("hide");
    else if (dy < -6 || y <= 160) nav.classList.remove("hide");
    if (y < innerHeight * 1.4) hero.style.setProperty("--py", (y * .18) + "px");
    if (Math.abs(dy) > 2) { mqTarget = Math.min(7, 1 + Math.abs(dy) / 10); if (!mqRaf) mqRaf = requestAnimationFrame(mqLoop); }
  }
  lastY = y;
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

/* efectos con puntero (solo mouse/trackpad) */
if (finePointer && !reduce) {
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, first = true;
  function follow() {
    cx += (tx - cx) * .14; cy += (ty - cy) * .14;
    hero.style.setProperty("--mx", cx + "px"); hero.style.setProperty("--my", cy + "px");
    raf = Math.abs(tx - cx) + Math.abs(ty - cy) > .5 ? requestAnimationFrame(follow) : 0;
  }
  hero.addEventListener("pointermove", e => {                  // luz roja que sigue al cursor
    const r = hero.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top;
    if (first) { cx = tx; cy = ty; first = false; }
    if (!raf) raf = requestAnimationFrame(follow);
  });
  document.addEventListener("pointermove", e => {              // brillo en tarjetas
    const t = e.target.closest && e.target.closest(".card,.type,.panel");
    if (t) { const r = t.getBoundingClientRect(); t.style.setProperty("--mx", (e.clientX - r.left) + "px"); t.style.setProperty("--my", (e.clientY - r.top) + "px"); }
  }, { passive: true });
  const hc = $(".hero-card");                                  // inclinación 3D de la tarjeta de contacto
  hc.addEventListener("pointermove", e => {
    const r = hc.getBoundingClientRect();
    hc.style.setProperty("--ry", (((e.clientX - r.left) / r.width - .5) * 10) + "deg");
    hc.style.setProperty("--rx", ((.5 - (e.clientY - r.top) / r.height) * 8) + "deg");
  });
  hc.addEventListener("pointerleave", () => { hc.style.removeProperty("--rx"); hc.style.removeProperty("--ry"); });
  $$(".hero .btn,.qsum .btn").forEach(b => {                   // botones magnéticos
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty("--tx", (((e.clientX - r.left) / r.width - .5) * 10) + "px");
      b.style.setProperty("--ty", (((e.clientY - r.top) / r.height - .5) * 8) + "px");
    });
    b.addEventListener("pointerleave", () => { b.style.removeProperty("--tx"); b.style.removeProperty("--ty"); });
  });
}

/* revelado al hacer scroll + contadores */
if (!reduce && "IntersectionObserver" in window) {
  [".cards", ".types", ".grid"].forEach(sel => $$(sel).forEach(g => [...g.children].forEach((c, i) => c.style.setProperty("--i", i % 4))));
  $(".qsum").style.setProperty("--i", 2);
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
  $$(".card,.type,.steps,.panel,.map,.qmain,.qsum,.kicker,.sub,#faq details").forEach(el => { el.classList.add("rv"); io.observe(el); });
  const ioH = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); ioH.unobserve(en.target); } }), { threshold: .4 });
  $$(".h2[data-split]").forEach(el => ioH.observe(el));
  const fmt = n => n.toLocaleString(lang === "es" ? "es-CR" : "en-US");
  const co = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; co.unobserve(en.target);
    const el = en.target, end = +el.dataset.count, t0 = performance.now();
    const step = t => { const p = Math.min((t - t0) / 1400, 1); el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3)))) + "+"; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: .5 });
  $$("[data-count]").forEach(el => { el.textContent = "0"; co.observe(el); });
} else {
  $$("[data-count]").forEach(el => { el.textContent = (+el.dataset.count).toLocaleString("es-CR") + "+"; });
  $$(".h2[data-split]").forEach(el => el.classList.add("in"));
}

wireStatic();
applyLang();
syncAdd(); updateProgress(); updateCartBar();
requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("ready")));   // entrada del hero
