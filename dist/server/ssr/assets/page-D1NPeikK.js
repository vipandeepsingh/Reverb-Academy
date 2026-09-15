import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowDownRight = createLucideIcon("arrow-down-right", [["path", {
	d: "m7 7 10 10",
	key: "1fmybs"
}], ["path", {
	d: "M17 7v10H7",
	key: "6fjiku"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Headphones = createLucideIcon("headphones", [["path", {
	d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
	key: "1xhozi"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Play = createLucideIcon("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Quote = createLucideIcon("quote", [["path", {
	d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "rib7q0"
}], ["path", {
	d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "1ymkrd"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Volume2 = createLucideIcon("volume-2", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["path", {
		d: "M16 9a5 5 0 0 1 0 6",
		key: "1q6k2b"
	}],
	["path", {
		d: "M19.364 18.364a9 9 0 0 0 0-12.728",
		key: "ijwkga"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var VolumeX = createLucideIcon("volume-x", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "9",
		y2: "15",
		key: "1ewh16"
	}],
	["line", {
		x1: "16",
		x2: "22",
		y1: "9",
		y2: "15",
		key: "5ykzw1"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region app/page.tsx
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP = "https://wa.me/917707991919?text=Hi%20Reverb%20Academy%2C%20I%27d%20like%20to%20book%20a%20trial%20class.";
var instruments = [
	{
		number: "01",
		name: "Guitar",
		detail: "Acoustic · Electric",
		copy: "Map the fretboard, understand the chords and turn the songs in your head into music in your hands.",
		image: "/instrument-guitar.png",
		color: "#ffb224"
	},
	{
		number: "02",
		name: "Ukulele",
		detail: "Rhythm · Songs",
		copy: "A joyful first instrument with serious musical foundations—rhythm, melody and complete songs from the start.",
		image: "/instrument-ukulele.png",
		color: "#86e9e1"
	},
	{
		number: "03",
		name: "Piano",
		detail: "Technique · Theory",
		copy: "See harmony laid out in front of you. Build independent hands, musical touch and a deep grasp of theory.",
		image: "/instrument-piano.png",
		color: "#ee8e83"
	},
	{
		number: "04",
		name: "Violin",
		detail: "Foundation · Expression",
		copy: "Shape every note with control and feeling through posture, bowing, intonation and carefully guided repertoire.",
		image: "/instrument-violin.png",
		color: "#c9d675"
	}
];
var testimonials = [
	{
		name: "Apoorva Sasan",
		text: "I had been trying to learn guitar from YouTube for months but was completely stuck. Vipan sir explains the fretboard concepts so clearly instead of just making you memorize things."
	},
	{
		name: "Amrit Bhangu",
		text: "A truly professional guitar instructor in Mohali. The academy setup in Bollywood Green City is organized, focused and distraction-free."
	},
	{
		name: "Nidhi Sharma",
		text: "Finding a reliable teacher for my teenage son was taking forever. The home tuition experience has been incredibly professional."
	}
];
var faqs = [
	{
		question: "Which instruments do you teach?",
		answer: "We teach guitar, ukulele, piano and violin through practical, structured lessons designed around each student’s level and goals."
	},
	{
		question: "Do you offer online music lessons?",
		answer: "Yes. Our live one-to-one online lessons include real-time feedback, a personal learning plan and flexible scheduling."
	},
	{
		question: "Do you provide home music tuition in Chandigarh Tricity?",
		answer: "Yes. Professional home music tuition is available across Chandigarh Tricity, subject to tutor and location availability."
	},
	{
		question: "Where are your Mohali academies?",
		answer: "You can learn with us in Sector 69 at Sovo International School or in Sector 113 at Bollywood Green City, Mohali."
	},
	{
		question: "Can complete beginners book a trial class?",
		answer: "Absolutely. Message or call us and we’ll help you choose the right instrument, learning format and starting point."
	}
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "brand",
		href: "#top",
		"aria-label": "Reverb Academy home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "brand-mark",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["REVERB", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ACADEMY" })] })]
	});
}
function SymphonyRail({ enabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `symphony-rail ${enabled ? "is-playing" : ""}`,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rail-label",
				children: "SCROLL SYMPHONY"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "staff-lines" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "phrase-line",
				viewBox: "0 0 96 760",
				preserveAspectRatio: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 0 C12 70 84 125 42 192 S10 308 54 370 S88 470 45 535 S15 670 52 760" })
			}),
			[
				"♪",
				"♪",
				"♪",
				"♩",
				"♫",
				"♩",
				"♪"
			].map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `rail-note note-${i + 1}`,
				children: note
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rail-light" })
		]
	});
}
function playPianoNote(ctx, frequency, start = ctx.currentTime, strength = .13) {
	const master = ctx.createGain();
	const filter = ctx.createBiquadFilter();
	const delay = ctx.createDelay(.5);
	const wet = ctx.createGain();
	const feedback = ctx.createGain();
	filter.type = "lowpass";
	filter.frequency.value = 2200;
	delay.delayTime.value = .16;
	wet.gain.value = .16;
	feedback.gain.value = .18;
	master.gain.setValueAtTime(1e-4, start);
	master.gain.exponentialRampToValueAtTime(strength, start + .018);
	master.gain.exponentialRampToValueAtTime(1e-4, start + .62);
	master.connect(filter).connect(ctx.destination);
	filter.connect(delay);
	delay.connect(wet).connect(ctx.destination);
	delay.connect(feedback).connect(delay);
	[
		1,
		2,
		3.01
	].forEach((multiple, i) => {
		const oscillator = ctx.createOscillator();
		const partial = ctx.createGain();
		oscillator.type = i === 0 ? "triangle" : "sine";
		oscillator.frequency.value = frequency * multiple;
		partial.gain.value = i === 0 ? 1 : .12 / i;
		oscillator.connect(partial).connect(master);
		oscillator.start(start);
		oscillator.stop(start + .7);
	});
}
function Home() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [soundOn, setSoundOn] = (0, import_react.useState)(false);
	const [activeTestimonial, setActiveTestimonial] = (0, import_react.useState)(0);
	const [morphProgress, setMorphProgress] = (0, import_react.useState)(0);
	const audioRef = (0, import_react.useRef)(null);
	const morphRef = (0, import_react.useRef)(null);
	const lastY = (0, import_react.useRef)(0);
	const lastPlayed = (0, import_react.useRef)(0);
	const noteIndex = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		if (!soundOn) return;
		const ctx = audioRef.current;
		if (!ctx) return;
		const frequencies = [
			392,
			392,
			392,
			311.13,
			349.23,
			349.23,
			349.23,
			293.66,
			392,
			392,
			349.23,
			311.13
		];
		const onScroll = () => {
			const now = performance.now();
			const distance = Math.abs(window.scrollY - lastY.current);
			lastY.current = window.scrollY;
			const wait = Math.max(105, 380 - distance * 6);
			if (distance < 3 || now - lastPlayed.current < wait) return;
			lastPlayed.current = now;
			playPianoNote(ctx, frequencies[noteIndex.current % frequencies.length], ctx.currentTime, Math.min(.16, .095 + distance / 2500));
			noteIndex.current += 1;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [soundOn]);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const update = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const section = morphRef.current;
				if (!section) return;
				const rect = section.getBoundingClientRect();
				const travel = Math.max(1, rect.height - window.innerHeight);
				setMorphProgress(Math.max(0, Math.min(3, -rect.top / travel * 3)));
			});
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);
	const toggleSound = () => {
		if (soundOn) {
			setSoundOn(false);
			return;
		}
		const AudioCtx = window.AudioContext || window.webkitAudioContext;
		const ctx = audioRef.current ?? new AudioCtx();
		audioRef.current = ctx;
		ctx.resume();
		[
			392,
			392,
			392,
			311.13
		].forEach((frequency, i) => playPianoNote(ctx, frequency, ctx.currentTime + i * .22, .15));
		lastY.current = window.scrollY;
		setSoundOn(true);
	};
	const scrollToInstrument = (index) => {
		const section = morphRef.current;
		if (!section) return;
		const top = section.getBoundingClientRect().top + window.scrollY;
		const travel = section.offsetHeight - window.innerHeight;
		window.scrollTo({
			top: top + index / 3 * travel,
			behavior: "smooth"
		});
	};
	const activeInstrument = Math.round(morphProgress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip-link",
			href: "#main-content",
			children: "Skip to main content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymphonyRail, { enabled: soundOn }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "nav-shell",
			"aria-label": "Primary navigation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `nav-links ${menuOpen ? "open" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#courses",
							onClick: () => setMenuOpen(false),
							children: "Courses"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#method",
							onClick: () => setMenuOpen(false),
							children: "Our method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#reviews",
							onClick: () => setMenuOpen(false),
							children: "Stories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#locations",
							onClick: () => setMenuOpen(false),
							children: "Locations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "mobile-cta",
							href: WHATSAPP,
							children: ["Book a trial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nav-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: `sound-toggle ${soundOn ? "active" : ""}`,
							onClick: toggleSound,
							"aria-label": soundOn ? "Turn off symphony scroll" : "Turn on symphony scroll",
							children: [soundOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 17 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: soundOn ? "Sound on · scroll" : "Hear the page" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "button button-small",
							href: WHATSAPP,
							children: ["Book a trial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "menu-button",
							onClick: () => setMenuOpen((v) => !v),
							"aria-label": "Toggle menu",
							"aria-expanded": menuOpen,
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main-content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-image",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Premium music lessons · Mohali & online"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
									"Don't just learn music.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Understand it." })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hero-copy",
									children: "A practical, structured way to play with confidence—without the confusion, clutter or endless memorising."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "button button-primary",
										href: WHATSAPP,
										children: ["Book your trial class ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "text-link",
										href: "#method",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "play-icon",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
												size: 14,
												fill: "currentColor"
											})
										}), " See how we teach"]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-foot",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GUITAR" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "UKULELE" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PIANO" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VIOLIN" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#courses",
									"aria-label": "Scroll to courses",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "floating-notes",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♪" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♩" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♫" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "marquee",
					"aria-label": "Ways to learn",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "marquee-track",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AT THE ACADEMY" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AT YOUR HOME" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ONLINE, ANYWHERE" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AT THE ACADEMY" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AT YOUR HOME" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ONLINE, ANYWHERE" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "programs section",
					"aria-labelledby": "programs-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "MUSIC CLASSES IN MOHALI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "programs-title",
								children: [
									"Four instruments.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "One clear path." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Learn at our Mohali academies, at home across Chandigarh Tricity, or live online with focused guidance and a plan built for steady progress." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "course-grid",
						children: instruments.map((instrument, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `course-card ${[
								"amber",
								"cyan",
								"rose",
								"lime"
							][index]}`,
							id: `${instrument.name.toLowerCase()}-lessons`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "course-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: instrument.number }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: instrument.detail })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [instrument.name, " classes"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: instrument.copy })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "course-arrow",
									href: WHATSAPP,
									"aria-label": `Ask about ${instrument.name.toLowerCase()} classes`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
								})
							]
						}, instrument.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "instrument-journey",
					id: "courses",
					ref: morphRef,
					"aria-label": "Interactive instrument journey",
					style: { "--instrument-color": instruments[activeInstrument].color },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "instrument-sticky",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "instrument-intro",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker light",
										children: "CHOOSE YOUR SOUND"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
										"One method.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Infinite expression." })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Scroll slowly. Watch one musical language take a new shape." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "instrument-stage",
								"aria-live": "polite",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "instrument-halo" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "instrument-images",
										children: instruments.map((instrument, i) => {
											const distance = Math.abs(morphProgress - i);
											const opacity = Math.max(0, 1 - distance);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: instrument.image,
												alt: `${instrument.name} lessons at Reverb Academy`,
												width: "1536",
												height: "1536",
												loading: i === 0 ? "eager" : "lazy",
												fetchPriority: i === 0 ? "high" : "auto",
												style: {
													opacity,
													transform: `translate3d(0, ${(morphProgress - i) * 34}px, 0) scale(${.88 + opacity * .12}) rotate(${(i - morphProgress) * 5}deg)`,
													filter: `blur(${distance * 9}px)`
												}
											}, instrument.name);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "instrument-rings",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "instrument-ghost",
										children: instruments[activeInstrument].name
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "instrument-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "instrument-count",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", activeInstrument + 1] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "04" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "instrument-type",
										children: instruments[activeInstrument].detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: instruments[activeInstrument].name }, instruments[activeInstrument].name),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "instrument-description",
										children: instruments[activeInstrument].copy
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "instrument-link",
										href: WHATSAPP,
										children: [
											"Explore ",
											instruments[activeInstrument].name.toLowerCase(),
											" lessons ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "instrument-tabs",
										children: instruments.map((instrument, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: i === activeInstrument ? "active" : "",
											onClick: () => scrollToInstrument(i),
											"aria-label": instrument.name,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
										}, instrument.name))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "scroll-cue",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SCROLL TO MORPH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "method section",
					id: "method",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "method-intro",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker light",
								children: "WHY REVERB"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Music, made",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "clear." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We remove the guesswork and give you a visual, practical path from where you are to where you want to play." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP,
								className: "text-link light-link",
								children: ["Speak to the tutor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "method-steps",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "method-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "See the pattern" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Visual maps reveal how notes, chords and scales connect—so the theory finally makes sense." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "method-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Train your ear" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hear the relationship between notes and recognise the music before your hands play it." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "method-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Play it for real" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Break songs into manageable parts, build clean technique and finish music you genuinely enjoy." })
							] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "learning section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "learning-card online-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "card-number",
								children: "01 / 03"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "orbit",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♪" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "learning-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker",
										children: "LIVE ONLINE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
										"Your studio,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"wherever you are."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One-to-one live lessons with real-time feedback, structured practice and personal guidance—no matter the distance." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), " Personal learning plan"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), " Live technique correction"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), " Flexible scheduling"] })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "button button-dark",
										href: WHATSAPP,
										children: ["Explore online lessons ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "learning-card home-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "card-number",
								children: "02 / 03"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "learning-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker",
										children: "TRICITY HOME TUITION"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
										"The teacher",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"comes to you."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Focused, professional music tuition in the comfort of your home across the Tricity." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "text-link",
										href: WHATSAPP,
										children: ["Check availability ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "home-note",
								"aria-hidden": "true",
								children: "♩"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "reviews section",
					id: "reviews",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "review-score",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5.0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: [
								1,
								2,
								3,
								4,
								5
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 17,
								fill: "currentColor"
							}, i)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Student stories" })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "review-stage",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "quote-mark" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
									"“",
									testimonials[activeTestimonial].text,
									"”"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "review-footer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "avatar",
										children: testimonials[activeTestimonial].name[0]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: testimonials[activeTestimonial].name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified Google review" })] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "review-controls",
							children: testimonials.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: i === activeTestimonial ? "active" : "",
								onClick: () => setActiveTestimonial(i),
								"aria-label": `Show review from ${item.name}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i + 1 })
							}, item.name))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "locations section",
					id: "locations",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading compact",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "MUSIC ACADEMY IN MOHALI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Two academies.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "One clear method." })
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "location-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "location-card",
								href: "https://maps.app.goo.gl/ZfEFAqYLwfksEDfw5",
								target: "_blank",
								rel: "noreferrer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pin",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "REVERB ACADEMY · SECTOR 69" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "1st Floor, Sovo International School" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", { children: "Sector 69, Sahibzada Ajit Singh Nagar, Punjab 160062" })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "location-card",
								href: "https://www.google.com/maps/search/?api=1&query=Reverb+Academy+Sector+113+Mohali",
								target: "_blank",
								rel: "noreferrer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pin",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "REVERB ACADEMY · SECTOR 113" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "45C, 3rd Floor, Bollywood Green City" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", { children: "Sector 113, Mohali, Punjab" })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "location-contact",
							children: [
								"For guitar, ukulele, piano or violin class availability, call ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+917707991919",
									children: "+91 77079 91919"
								}),
								" or ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP,
									children: "message Reverb Academy on WhatsApp"
								}),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "faq section",
					id: "faq",
					"aria-labelledby": "faq-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faq-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "QUESTIONS, ANSWERED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "faq-title",
								children: [
									"Before your",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "first note." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Everything you need to know about music classes, lesson formats and Reverb Academy locations in Mohali." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "faq-list",
						children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }), faq.question] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: faq.answer })] }, faq.question))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "final-cta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cta-notes",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♪" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♫" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♩" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♪" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker light",
							children: "YOUR FIRST NOTE STARTS HERE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Ready to find",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "your sound?" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tell us what you'd love to play. We'll help you choose the right class, format and starting point." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "button button-primary",
							href: WHATSAPP,
							children: ["Book a trial on WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "phone",
							children: ["or call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+917707991919",
								children: "+91 77079 91919"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Structured guitar, ukulele, piano and violin lessons in Mohali, across Chandigarh Tricity and online." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#courses",
							children: "Courses"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#method",
							children: "Method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#locations",
							children: "Locations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							children: "FAQs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: WHATSAPP,
							children: "Contact"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Reverb Academy"
					] })
				] })
			]
		})
	] });
}
//#endregion
export { Home as default };
