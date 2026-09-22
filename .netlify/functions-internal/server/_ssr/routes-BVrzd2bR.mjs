import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Instagram, i as Menu, n as X, o as Facebook, r as Play, t as Youtube } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BVrzd2bR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var members = [
	{
		name: "ARIEL K.",
		role: "Guitarra",
		image: "/assets/member-guitar-BDVQAVcH.jpg"
	},
	{
		name: "NN",
		role: "Bajo",
		image: "/assets/member-bass--LTT_fP6.jpg"
	},
	{
		name: "GINO B.",
		role: "Batería",
		image: "/assets/member-drums-DiR9e8_l.jpg"
	},
	{
		name: "GERMAN T. S.",
		role: "Voz",
		image: "/assets/member-voice-9Cvd74Fw.jpg"
	}
];
var tracks = [
	[
		"01",
		"Ritual de Viento",
		"07:42"
	],
	[
		"02",
		"Colapso Estelar",
		"06:15"
	],
	[
		"03",
		"El Gran Humo",
		"09:03"
	],
	[
		"04",
		"Horizonte Rojo",
		"05:58"
	],
	[
		"05",
		"Manto de Tierra",
		"11:20"
	]
];
var dunas_de_sangre_default = "/assets/dunas-de-sangre-2YEH1pMm.jpg";
var ruido_amps_default = "/assets/ruido-amps-ov7zexPe.jpg";
var logoFinal_png_asset_default = {
	version: 1,
	asset_id: "fd26880c-365f-4e69-8d98-2191f70c565c",
	project_id: "20af9d0a-64d0-4eae-9e93-eea65ed0c5f3",
	url: "/__l5e/assets-v1/fd26880c-365f-4e69-8d98-2191f70c565c/logoFinal.png",
	r2_key: "a/v1/20af9d0a-64d0-4eae-9e93-eea65ed0c5f3/fd26880c-365f-4e69-8d98-2191f70c565c/logoFinal.png",
	original_filename: "logoFinal.png",
	size: 286442,
	content_type: "image/png",
	created_at: "2026-09-22T16:32:13Z"
};
var nav = [
	["Historia", "#historia"],
	["Somos RUIDO", "#banda"],
	["Música", "#musica"],
	["Contacto", "#contacto"]
];
var logoFinal_default = "/assets/logoFinal-xiZVFKO5.png";
function MainHeader() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					"aria-label": "R U I D O — Inicio",
					className: "block w-36 md:w-44",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logoFinal_default,
						alt: "R U I D O",
						width: 877,
						height: 278,
						className: "h-auto w-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Navegación principal",
					className: "hidden items-center gap-8 md:flex",
					children: nav.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "nav-link",
						children: label
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "icon-button md:hidden",
					"aria-label": menuOpen ? "Cerrar menú" : "Abrir menú",
					onClick: () => setMenuOpen((open) => !open),
					children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
				})
			]
		}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Navegación móvil",
			className: "border-t border-border bg-background px-5 py-5 md:hidden",
			children: nav.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				className: "block border-b border-border py-4 font-display text-lg uppercase",
				onClick: () => setMenuOpen(false),
				children: label
			}, href))
		})]
	});
}
var ruido_hero_default = "/assets/ruido-hero-C2_Y0e2z.jpg";
function HeroBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "hero-section relative flex min-h-[92svh] items-end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: ruido_hero_default,
				alt: "Ruinas bajo un sol rojo en el desierto",
				width: 1920,
				height: 1080,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker mb-10",
						children: "Argentina · Mendoza· Stoner / Doom / Desert Rock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "max-w-5xl font-display text-5xl font-black uppercase leading-[0.88] sm:text-8xl lg:text-[9rem]",
						children: [
							"Aún de",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "pie"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg",
						children: "Poesia densa. Distorsión infinita. Cuatro partes de un mismo sonido."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 right-0 hidden border-l border-t border-border bg-background/75 px-7 py-4 font-mono text-[10px] uppercase text-muted-foreground lg:block",
				children: "Vol. I · MMXXVI"
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-shell min-h-screen overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "historia",
					className: "section-grid mx-auto grid max-w-7xl gap-14 px-5 py-28 md:grid-cols-2 md:px-8 md:py-40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl md:pt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-kicker",
								children: "01 — Historia"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "section-title mt-6",
								children: [
									"El eco",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"del vacío"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 space-y-6 text-base leading-8 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Formados entre el concreto de Buenos Aires y el polvo de las rutas del norte, R U I D O nace como una necesidad de materializar el peso de la tierra." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nuestra música no busca la velocidad, sino la gravedad. Cada riff es una piedra; cada golpe de batería, un pulso tectónico que resuena en el pecho." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-20 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase text-muted-foreground",
									children: "Desde las profundidades"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "image-frame md:ml-auto md:max-w-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ruido_amps_default,
							alt: "Amplificadores y pedales en la sala de ensayo",
							width: 800,
							height: 1e3,
							loading: "lazy",
							className: "h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "absolute bottom-4 left-4 font-mono text-[9px] uppercase text-foreground/70",
							children: "Sala de ensayo · Registro 01"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "banda",
					className: "border-y border-border bg-secondary/40 py-28 md:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5 md:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-14 flex items-end justify-between gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-kicker",
								children: "02 — Integrantes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-title mt-5",
								children: "Somos RUIDO"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hidden max-w-xs text-right text-sm leading-6 text-muted-foreground md:block",
								children: "Cuatro fuerzas. Una sola masa de aire desplazándose."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
							children: members.map((member, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "member-card group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[3/4] overflow-hidden bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: member.image,
										alt: `${member.name}, ${member.role}`,
										width: 768,
										height: 1024,
										loading: "lazy",
										className: "h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute left-3 top-3 font-mono text-[9px] text-foreground/60",
										children: ["0", index + 1]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border px-1 py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-sm font-black uppercase md:text-base",
										children: member.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs uppercase text-primary",
										children: member.role
									})]
								})]
							}, member.role))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "musica",
					className: "mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker mb-12",
						children: "03 — Música"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-14 md:grid-cols-2 md:gap-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "album-frame",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: dunas_de_sangre_default,
								alt: "Portada de Dunas de Sangre",
								width: 1200,
								height: 1200,
								loading: "lazy",
								className: "h-auto w-full"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs font-semibold uppercase text-primary",
								children: "Primer larga duración · 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl font-black uppercase leading-none md:text-6xl",
								children: "Dunas de sangre"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-10 border-t border-border",
								children: tracks.map(([number, title, duration]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "track-row grid grid-cols-[2.5rem_1fr_auto] items-center border-b border-border py-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-primary",
											children: number
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-muted-foreground",
											children: duration
										})
									]
								}, number))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://open.spotify.com",
									target: "_blank",
									rel: "noreferrer",
									className: "music-button music-button-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										size: 15,
										fill: "currentColor"
									}), " Spotify"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://youtube.com",
									target: "_blank",
									rel: "noreferrer",
									className: "music-button music-button-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { size: 16 }), " YouTube"]
								})]
							})
						] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "contacto",
					className: "contact-band border-t border-border py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col justify-between gap-12 px-5 md:flex-row md:items-end md:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "04 — Contacto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-6",
							children: "Hacé ruido."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 md:text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:hola@ruidobanda.com.ar",
									className: "block font-display text-xl hover:text-primary md:text-3xl",
									children: "hola@ruidobanda.com.ar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+5491112345678",
									className: "block font-mono text-sm text-muted-foreground hover:text-primary",
									children: "+54 9 11 1234 5678"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase text-muted-foreground",
									children: "Fechas · Prensa · Contrataciones"
								})
							]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-background px-5 py-10 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoFinal_png_asset_default.url,
							alt: "R U I D O",
							width: 877,
							height: 278,
							loading: "lazy",
							className: "w-32"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "social-link",
									href: "https://facebook.com",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Facebook",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 17 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "social-link",
									href: "https://instagram.com",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 17 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "social-link",
									href: "https://youtube.com",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "YouTube",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { size: 18 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "social-link",
									href: "https://open.spotify.com",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Spotify",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										size: 17,
										fill: "currentColor"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase text-muted-foreground",
							children: "© 2026 R U I D O · Argentina"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
