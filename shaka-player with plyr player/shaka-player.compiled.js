/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
(function() {
	var innerGlobal = typeof window != "undefined" ? window : global;
	var exportTo = {};
	(function(window, global, module) {
		/*

		 Copyright The Closure Library Authors.
		 SPDX-License-Identifier: Apache-2.0
		*/
		var r;

		function aa(a) {
			var b = 0;
			return function() {
				return b < a.length ? {
					done: !1,
					value: a[b++]
				} : {
					done: !0
				}
			}
		}
		var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
			if (a == Array.prototype || a == Object.prototype) return a;
			a[b] = c.value;
			return a
		};

		function da(a) {
			a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
			for (var b = 0; b < a.length; ++b) {
				var c = a[b];
				if (c && c.Math == Math) return c
			}
			throw Error("Cannot find global object");
		}
		var ea = da(this);

		function fa(a, b) {
			if (b) a: {
				for (var c = ea, d = a.split("."), e = 0; e < d.length - 1; e++) {
					var f = d[e];
					if (!(f in c)) break a;
					c = c[f]
				}
				d = d[d.length - 1];e = c[d];f = b(e);f != e && null != f && ba(c, d, {
					configurable: !0,
					writable: !0,
					value: f
				})
			}
		}
		fa("Symbol", function(a) {
			function b(f) {
				if (this instanceof b) throw new TypeError("Symbol is not a constructor");
				return new c(d + (f || "") + "_" + e++, f)
			}

			function c(f, g) {
				this.g = f;
				ba(this, "description", {
					configurable: !0,
					writable: !0,
					value: g
				})
			}
			if (a) return a;
			c.prototype.toString = function() {
				return this.g
			};
			var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
				e = 0;
			return b
		});
		fa("Symbol.iterator", function(a) {
			if (a) return a;
			a = Symbol("Symbol.iterator");
			for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
				var d = ea[b[c]];
				"function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
					configurable: !0,
					writable: !0,
					value: function() {
						return ha(aa(this))
					}
				})
			}
			return a
		});

		function ha(a) {
			a = {
				next: a
			};
			a[Symbol.iterator] = function() {
				return this
			};
			return a
		}

		function t(a) {
			var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
			return b ? b.call(a) : {
				next: aa(a)
			}
		}

		function ia(a) {
			if (!(a instanceof Array)) {
				a = t(a);
				for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
				a = c
			}
			return a
		}
		var ja = "function" == typeof Object.create ? Object.create : function(a) {
				function b() {}
				b.prototype = a;
				return new b
			},
			ka;
		if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
		else {
			var la;
			a: {
				var ma = {
						a: !0
					},
					na = {};
				try {
					na.__proto__ = ma;
					la = na.a;
					break a
				} catch (a) {}
				la = !1
			}
			ka = la ? function(a, b) {
				a.__proto__ = b;
				if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
				return a
			} : null
		}
		var oa = ka;

		function pa(a, b) {
			a.prototype = ja(b.prototype);
			a.prototype.constructor = a;
			if (oa) oa(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d)
						} else a[c] = b[c];
			a.ah = b.prototype
		}

		function qa() {
			this.o = !1;
			this.l = null;
			this.h = void 0;
			this.g = 1;
			this.j = this.m = 0;
			this.u = this.i = null
		}

		function sa(a) {
			if (a.o) throw new TypeError("Generator is already running");
			a.o = !0
		}
		qa.prototype.s = function(a) {
			this.h = a
		};

		function ta(a, b) {
			a.i = {
				qe: b,
				xe: !0
			};
			a.g = a.m || a.j
		}
		qa.prototype["return"] = function(a) {
			this.i = {
				"return": a
			};
			this.g = this.j
		};

		function u(a, b, c) {
			a.g = c;
			return {
				value: b
			}
		}
		qa.prototype.A = function(a) {
			this.g = a
		};

		function z(a) {
			a.g = 0
		}

		function B(a, b, c) {
			a.m = b;
			void 0 != c && (a.j = c)
		}

		function ua(a) {
			a.m = 0;
			a.j = 2
		}

		function va(a, b) {
			a.g = b;
			a.m = 0
		}

		function F(a) {
			a.m = 0;
			var b = a.i.qe;
			a.i = null;
			return b
		}

		function wa(a) {
			a.u = [a.i];
			a.m = 0;
			a.j = 0
		}

		function xa(a, b) {
			var c = a.u.splice(0)[0];
			(c = a.i = a.i || c) ? c.xe ? a.g = a.m || a.j : void 0 != c.A && a.j < c.A ? (a.g = c.A, a.i = null) : a.g = a.j: a.g = b
		}

		function ya(a) {
			this.g = new qa;
			this.h = a
		}

		function Aa(a, b) {
			sa(a.g);
			var c = a.g.l;
			if (c) return Ca(a, "return" in c ? c["return"] : function(d) {
				return {
					value: d,
					done: !0
				}
			}, b, a.g["return"]);
			a.g["return"](b);
			return Da(a)
		}

		function Ca(a, b, c, d) {
			try {
				var e = b.call(a.g.l, c);
				if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
				if (!e.done) return a.g.o = !1, e;
				var f = e.value
			} catch (g) {
				return a.g.l = null, ta(a.g, g), Da(a)
			}
			a.g.l = null;
			d.call(a.g, f);
			return Da(a)
		}

		function Da(a) {
			for (; a.g.g;) try {
				var b = a.h(a.g);
				if (b) return a.g.o = !1, {
					value: b.value,
					done: !1
				}
			} catch (c) {
				a.g.h = void 0, ta(a.g, c)
			}
			a.g.o = !1;
			if (a.g.i) {
				b = a.g.i;
				a.g.i = null;
				if (b.xe) throw b.qe;
				return {
					value: b["return"],
					done: !0
				}
			}
			return {
				value: void 0,
				done: !0
			}
		}

		function Fa(a) {
			this.next = function(b) {
				sa(a.g);
				a.g.l ? b = Ca(a, a.g.l.next, b, a.g.s) : (a.g.s(b), b = Da(a));
				return b
			};
			this["throw"] = function(b) {
				sa(a.g);
				a.g.l ? b = Ca(a, a.g.l["throw"], b, a.g.s) : (ta(a.g, b), b = Da(a));
				return b
			};
			this["return"] = function(b) {
				return Aa(a, b)
			};
			this[Symbol.iterator] = function() {
				return this
			}
		}

		function Ga(a) {
			function b(d) {
				return a.next(d)
			}

			function c(d) {
				return a["throw"](d)
			}
			return new Promise(function(d, e) {
				function f(g) {
					g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
				}
				f(a.next())
			})
		}

		function K(a) {
			return Ga(new Fa(new ya(a)))
		}

		function Ha() {
			for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
			return b
		}
		fa("Promise", function(a) {
			function b(g) {
				this.h = 0;
				this.i = void 0;
				this.g = [];
				this.o = !1;
				var h = this.j();
				try {
					g(h.resolve, h.reject)
				} catch (k) {
					h.reject(k)
				}
			}

			function c() {
				this.g = null
			}

			function d(g) {
				return g instanceof b ? g : new b(function(h) {
					h(g)
				})
			}
			if (a) return a;
			c.prototype.h = function(g) {
				if (null == this.g) {
					this.g = [];
					var h = this;
					this.i(function() {
						h.l()
					})
				}
				this.g.push(g)
			};
			var e = ea.setTimeout;
			c.prototype.i = function(g) {
				e(g, 0)
			};
			c.prototype.l = function() {
				for (; this.g && this.g.length;) {
					var g = this.g;
					this.g = [];
					for (var h = 0; h < g.length; ++h) {
						var k =
							g[h];
						g[h] = null;
						try {
							k()
						} catch (l) {
							this.j(l)
						}
					}
				}
				this.g = null
			};
			c.prototype.j = function(g) {
				this.i(function() {
					throw g;
				})
			};
			b.prototype.j = function() {
				function g(l) {
					return function(m) {
						k || (k = !0, l.call(h, m))
					}
				}
				var h = this,
					k = !1;
				return {
					resolve: g(this.F),
					reject: g(this.l)
				}
			};
			b.prototype.F = function(g) {
				if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
				else if (g instanceof b) this.I(g);
				else {
					a: switch (typeof g) {
						case "object":
							var h = null != g;
							break a;
						case "function":
							h = !0;
							break a;
						default:
							h = !1
					}
					h ? this.D(g) : this.m(g)
				}
			};
			b.prototype.D = function(g) {
				var h = void 0;
				try {
					h = g.then
				} catch (k) {
					this.l(k);
					return
				}
				"function" == typeof h ? this.L(h, g) : this.m(g)
			};
			b.prototype.l = function(g) {
				this.s(2, g)
			};
			b.prototype.m = function(g) {
				this.s(1, g)
			};
			b.prototype.s = function(g, h) {
				if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
				this.h = g;
				this.i = h;
				2 === this.h && this.G();
				this.u()
			};
			b.prototype.G = function() {
				var g = this;
				e(function() {
					if (g.C()) {
						var h = ea.console;
						"undefined" !== typeof h && h.error(g.i)
					}
				}, 1)
			};
			b.prototype.C =
				function() {
					if (this.o) return !1;
					var g = ea.CustomEvent,
						h = ea.Event,
						k = ea.dispatchEvent;
					if ("undefined" === typeof k) return !0;
					"function" === typeof g ? g = new g("unhandledrejection", {
						cancelable: !0
					}) : "function" === typeof h ? g = new h("unhandledrejection", {
						cancelable: !0
					}) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
					g.promise = this;
					g.reason = this.i;
					return k(g)
				};
			b.prototype.u = function() {
				if (null != this.g) {
					for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
					this.g = null
				}
			};
			var f = new c;
			b.prototype.I = function(g) {
				var h = this.j();
				g.Dc(h.resolve, h.reject)
			};
			b.prototype.L = function(g, h) {
				var k = this.j();
				try {
					g.call(h, k.resolve, k.reject)
				} catch (l) {
					k.reject(l)
				}
			};
			b.prototype.then = function(g, h) {
				function k(n, q) {
					return "function" == typeof n ? function(w) {
						try {
							l(n(w))
						} catch (y) {
							m(y)
						}
					} : q
				}
				var l, m, p = new b(function(n, q) {
					l = n;
					m = q
				});
				this.Dc(k(g, l), k(h, m));
				return p
			};
			b.prototype["catch"] = function(g) {
				return this.then(void 0, g)
			};
			b.prototype.Dc = function(g, h) {
				function k() {
					switch (l.h) {
						case 1:
							g(l.i);
							break;
						case 2:
							h(l.i);
							break;
						default:
							throw Error("Unexpected state: " + l.h);
					}
				}
				var l = this;
				null == this.g ? f.h(k) : this.g.push(k);
				this.o = !0
			};
			b.resolve = d;
			b.reject = function(g) {
				return new b(function(h, k) {
					k(g)
				})
			};
			b.race = function(g) {
				return new b(function(h, k) {
					for (var l = t(g), m = l.next(); !m.done; m = l.next()) d(m.value).Dc(h, k)
				})
			};
			b.all = function(g) {
				var h = t(g),
					k = h.next();
				return k.done ? d([]) : new b(function(l, m) {
					function p(w) {
						return function(y) {
							n[w] = y;
							q--;
							0 == q && l(n)
						}
					}
					var n = [],
						q = 0;
					do n.push(void 0), q++, d(k.value).Dc(p(n.length - 1), m), k = h.next();
					while (!k.done)
				})
			};
			return b
		});

		function Ia(a, b) {
			return Object.prototype.hasOwnProperty.call(a, b)
		}
		fa("WeakMap", function(a) {
			function b(k) {
				this.g = (h += Math.random() + 1).toString();
				if (k) {
					k = t(k);
					for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
				}
			}

			function c() {}

			function d(k) {
				var l = typeof k;
				return "object" === l && null !== k || "function" === l
			}

			function e(k) {
				if (!Ia(k, g)) {
					var l = new c;
					ba(k, g, {
						value: l
					})
				}
			}

			function f(k) {
				var l = Object[k];
				l && (Object[k] = function(m) {
					if (m instanceof c) return m;
					Object.isExtensible(m) && e(m);
					return l(m)
				})
			}
			if (function() {
					if (!a || !Object.seal) return !1;
					try {
						var k = Object.seal({}),
							l = Object.seal({}),
							m = new a([
								[k, 2],
								[l, 3]
							]);
						if (2 != m.get(k) || 3 != m.get(l)) return !1;
						m["delete"](k);
						m.set(l, 4);
						return !m.has(k) && 4 == m.get(l)
					} catch (p) {
						return !1
					}
				}()) return a;
			var g = "$jscomp_hidden_" + Math.random();
			f("freeze");
			f("preventExtensions");
			f("seal");
			var h = 0;
			b.prototype.set = function(k, l) {
				if (!d(k)) throw Error("Invalid WeakMap key");
				e(k);
				if (!Ia(k, g)) throw Error("WeakMap key fail: " + k);
				k[g][this.g] = l;
				return this
			};
			b.prototype.get = function(k) {
				return d(k) && Ia(k, g) ? k[g][this.g] : void 0
			};
			b.prototype.has = function(k) {
				return d(k) &&
					Ia(k, g) && Ia(k[g], this.g)
			};
			b.prototype["delete"] = function(k) {
				return d(k) && Ia(k, g) && Ia(k[g], this.g) ? delete k[g][this.g] : !1
			};
			return b
		});
		fa("Map", function(a) {
			function b() {
				var h = {};
				return h.Ra = h.next = h.head = h
			}

			function c(h, k) {
				var l = h.g;
				return ha(function() {
					if (l) {
						for (; l.head != h.g;) l = l.Ra;
						for (; l.next != l.head;) return l = l.next, {
							done: !1,
							value: k(l)
						};
						l = null
					}
					return {
						done: !0,
						value: void 0
					}
				})
			}

			function d(h, k) {
				var l = k && typeof k;
				"object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
				var m = h.h[l];
				if (m && Ia(h.h, l))
					for (var p = 0; p < m.length; p++) {
						var n = m[p];
						if (k !== k && n.key !== n.key || k === n.key) return {
							id: l,
							list: m,
							index: p,
							fa: n
						}
					}
				return {
					id: l,
					list: m,
					index: -1,
					fa: void 0
				}
			}

			function e(h) {
				this.h = {};
				this.g = b();
				this.size = 0;
				if (h) {
					h = t(h);
					for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
				}
			}
			if (function() {
					if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
					try {
						var h = Object.seal({
								x: 4
							}),
							k = new a(t([
								[h, "s"]
							]));
						if ("s" != k.get(h) || 1 != k.size || k.get({
								x: 4
							}) || k.set({
								x: 4
							}, "t") != k || 2 != k.size) return !1;
						var l = k.entries(),
							m = l.next();
						if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
						m = l.next();
						return m.done || 4 != m.value[0].x ||
							"t" != m.value[1] || !l.next().done ? !1 : !0
					} catch (p) {
						return !1
					}
				}()) return a;
			var f = new WeakMap;
			e.prototype.set = function(h, k) {
				h = 0 === h ? 0 : h;
				var l = d(this, h);
				l.list || (l.list = this.h[l.id] = []);
				l.fa ? l.fa.value = k : (l.fa = {
					next: this.g,
					Ra: this.g.Ra,
					head: this.g,
					key: h,
					value: k
				}, l.list.push(l.fa), this.g.Ra.next = l.fa, this.g.Ra = l.fa, this.size++);
				return this
			};
			e.prototype["delete"] = function(h) {
				h = d(this, h);
				return h.fa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.fa.Ra.next = h.fa.next, h.fa.next.Ra = h.fa.Ra,
					h.fa.head = null, this.size--, !0) : !1
			};
			e.prototype.clear = function() {
				this.h = {};
				this.g = this.g.Ra = b();
				this.size = 0
			};
			e.prototype.has = function(h) {
				return !!d(this, h).fa
			};
			e.prototype.get = function(h) {
				return (h = d(this, h).fa) && h.value
			};
			e.prototype.entries = function() {
				return c(this, function(h) {
					return [h.key, h.value]
				})
			};
			e.prototype.keys = function() {
				return c(this, function(h) {
					return h.key
				})
			};
			e.prototype.values = function() {
				return c(this, function(h) {
					return h.value
				})
			};
			e.prototype.forEach = function(h, k) {
				for (var l = this.entries(),
						m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
			};
			e.prototype[Symbol.iterator] = e.prototype.entries;
			var g = 0;
			return e
		});
		fa("Set", function(a) {
			function b(c) {
				this.g = new Map;
				if (c) {
					c = t(c);
					for (var d; !(d = c.next()).done;) this.add(d.value)
				}
				this.size = this.g.size
			}
			if (function() {
					if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
					try {
						var c = Object.seal({
								x: 4
							}),
							d = new a(t([c]));
						if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
								x: 4
							}) != d || 2 != d.size) return !1;
						var e = d.entries(),
							f = e.next();
						if (f.done || f.value[0] != c || f.value[1] != c) return !1;
						f = e.next();
						return f.done || f.value[0] == c || 4 != f.value[0].x ||
							f.value[1] != f.value[0] ? !1 : e.next().done
					} catch (g) {
						return !1
					}
				}()) return a;
			b.prototype.add = function(c) {
				c = 0 === c ? 0 : c;
				this.g.set(c, c);
				this.size = this.g.size;
				return this
			};
			b.prototype["delete"] = function(c) {
				c = this.g["delete"](c);
				this.size = this.g.size;
				return c
			};
			b.prototype.clear = function() {
				this.g.clear();
				this.size = 0
			};
			b.prototype.has = function(c) {
				return this.g.has(c)
			};
			b.prototype.entries = function() {
				return this.g.entries()
			};
			b.prototype.values = function() {
				return this.g.values()
			};
			b.prototype.keys = b.prototype.values;
			b.prototype[Symbol.iterator] = b.prototype.values;
			b.prototype.forEach = function(c, d) {
				var e = this;
				this.g.forEach(function(f) {
					return c.call(d, f, f, e)
				})
			};
			return b
		});

		function Ja(a, b, c) {
			a instanceof String && (a = String(a));
			for (var d = a.length, e = 0; e < d; e++) {
				var f = a[e];
				if (b.call(c, f, e, a)) return {
					ve: e,
					v: f
				}
			}
			return {
				ve: -1,
				v: void 0
			}
		}
		fa("Array.prototype.findIndex", function(a) {
			return a ? a : function(b, c) {
				return Ja(this, b, c).ve
			}
		});
		fa("Object.is", function(a) {
			return a ? a : function(b, c) {
				return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
			}
		});
		fa("Array.prototype.includes", function(a) {
			return a ? a : function(b, c) {
				var d = this;
				d instanceof String && (d = String(d));
				var e = d.length,
					f = c || 0;
				for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
					var g = d[f];
					if (g === b || Object.is(g, b)) return !0
				}
				return !1
			}
		});

		function La(a, b, c) {
			if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
			if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
			return a + ""
		}
		fa("String.prototype.includes", function(a) {
			return a ? a : function(b, c) {
				return -1 !== La(this, b, "includes").indexOf(b, c || 0)
			}
		});
		fa("Array.prototype.find", function(a) {
			return a ? a : function(b, c) {
				return Ja(this, b, c).v
			}
		});
		fa("String.prototype.startsWith", function(a) {
			return a ? a : function(b, c) {
				for (var d = La(this, b, "startsWith"), e = d.length, f = b.length, g = Math.max(0, Math.min(c | 0, d.length)), h = 0; h < f && g < e;)
					if (d[g++] != b[h++]) return !1;
				return h >= f
			}
		});

		function Ma(a, b) {
			a instanceof String && (a += "");
			var c = 0,
				d = !1,
				e = {
					next: function() {
						if (!d && c < a.length) {
							var f = c++;
							return {
								value: b(f, a[f]),
								done: !1
							}
						}
						d = !0;
						return {
							done: !0,
							value: void 0
						}
					}
				};
			e[Symbol.iterator] = function() {
				return e
			};
			return e
		}
		fa("Array.prototype.keys", function(a) {
			return a ? a : function() {
				return Ma(this, function(b) {
					return b
				})
			}
		});
		var Na = "function" == typeof Object.assign ? Object.assign : function(a, b) {
			for (var c = 1; c < arguments.length; c++) {
				var d = arguments[c];
				if (d)
					for (var e in d) Ia(d, e) && (a[e] = d[e])
			}
			return a
		};
		fa("Object.assign", function(a) {
			return a || Na
		});
		fa("Array.from", function(a) {
			return a ? a : function(b, c, d) {
				c = null != c ? c : function(h) {
					return h
				};
				var e = [],
					f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
				if ("function" == typeof f) {
					b = f.call(b);
					for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
				} else
					for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
				return e
			}
		});
		fa("Array.prototype.values", function(a) {
			return a ? a : function() {
				return Ma(this, function(b, c) {
					return c
				})
			}
		});
		fa("Promise.prototype.finally", function(a) {
			return a ? a : function(b) {
				return this.then(function(c) {
					return Promise.resolve(b()).then(function() {
						return c
					})
				}, function(c) {
					return Promise.resolve(b()).then(function() {
						throw c;
					})
				})
			}
		});
		fa("Array.prototype.entries", function(a) {
			return a ? a : function() {
				return Ma(this, function(b, c) {
					return [b, c]
				})
			}
		});
		fa("String.prototype.repeat", function(a) {
			return a ? a : function(b) {
				var c = La(this, null, "repeat");
				if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
				b |= 0;
				for (var d = ""; b;)
					if (b & 1 && (d += c), b >>>= 1) c += c;
				return d
			}
		});
		fa("Number.isNaN", function(a) {
			return a ? a : function(b) {
				return "number" === typeof b && isNaN(b)
			}
		});
		fa("Object.values", function(a) {
			return a ? a : function(b) {
				var c = [],
					d;
				for (d in b) Ia(b, d) && c.push(b[d]);
				return c
			}
		});
		fa("Math.log2", function(a) {
			return a ? a : function(b) {
				return Math.log(b) / Math.LN2
			}
		});
		fa("Math.trunc", function(a) {
			return a ? a : function(b) {
				b = Number(b);
				if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
				var c = Math.floor(Math.abs(b));
				return 0 > b ? -c : c
			}
		});
		fa("Object.entries", function(a) {
			return a ? a : function(b) {
				var c = [],
					d;
				for (d in b) Ia(b, d) && c.push([d, b[d]]);
				return c
			}
		});
		var Oa = this || self;

		function M(a, b) {
			var c = a.split("."),
				d = Oa;
			c[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + c[0]);
			for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {} : d[e] = b
		};
		/*
		 @license
		 Shaka Player
		 Copyright 2016 Google LLC
		 SPDX-License-Identifier: Apache-2.0
		*/
		function Pa(a) {
			this.g = Math.exp(Math.log(.5) / a);
			this.i = this.h = 0
		}
		Pa.prototype.sample = function(a, b) {
			var c = Math.pow(this.g, a);
			c = b * (1 - c) + c * this.h;
			isNaN(c) || (this.h = c, this.i += a)
		};

		function Qa(a) {
			return a.h / (1 - Math.pow(a.g, a.i))
		};

		function Sa() {
			this.h = new Pa(2);
			this.j = new Pa(5);
			this.g = 0;
			this.i = 128E3;
			this.l = 16E3
		}
		Sa.prototype.configure = function(a) {
			this.i = a.minTotalBytes;
			this.l = a.minBytes;
			this.h.g = Math.exp(Math.log(.5) / a.fastHalfLife);
			this.j.g = Math.exp(Math.log(.5) / a.slowHalfLife)
		};
		Sa.prototype.sample = function(a, b) {
			if (!(b < this.l)) {
				var c = 8E3 * b / a,
					d = a / 1E3;
				this.g += b;
				this.h.sample(d, c);
				this.j.sample(d, c)
			}
		};
		Sa.prototype.getBandwidthEstimate = function(a) {
			return this.g < this.i ? a : Math.min(Qa(this.h), Qa(this.j))
		};

		function Ta() {}

		function Ua() {}

		function Va() {}

		function Wa(a) {
			var b = Ha.apply(1, arguments);
			Xa.has(a) || (Xa.add(a), Va.apply(Ta, ia(b)))
		}

		function Ya() {}

		function Za() {}

		function $a() {}

		function ab() {}
		var Xa = new Set;
		if (window.console && window.console.log.bind) {
			var bb = {},
				cb = (bb[1] = console.error.bind(console), bb[2] = console.warn.bind(console), bb[3] = console.info.bind(console), bb[4] = console.log.bind(console), bb[5] = console.debug.bind(console), bb[6] = console.debug.bind(console), bb);
			Va = cb[2];
			Ua = cb[1]
		};

		function db(a, b) {
			return "number" === typeof a && "number" === typeof b && isNaN(a) && isNaN(b) ? !0 : a === b
		}

		function eb(a, b) {
			var c = a.indexOf(b); - 1 < c && a.splice(c, 1)
		}

		function fb(a, b, c) {
			c || (c = db);
			if (a.length != b.length) return !1;
			b = b.slice();
			var d = {};
			a = t(a);
			for (var e = a.next(); !e.done; d = {
					gd: d.gd
				}, e = a.next()) {
				d.gd = e.value;
				e = b.findIndex(function(f) {
					return function(g) {
						return c(f.gd, g)
					}
				}(d));
				if (-1 == e) return !1;
				b[e] = b[b.length - 1];
				b.pop()
			}
			return 0 == b.length
		}

		function gb(a, b, c) {
			c || (c = db);
			if (a.length != b.length) return !1;
			for (var d = 0; d < a.length; d++)
				if (!c(a[d], b[d])) return !1;
			return !0
		};

		function ib(a, b, c) {
			this.startTime = a;
			this.direction = jb;
			this.endTime = b;
			this.payload = c;
			this.region = new kb;
			this.position = null;
			this.positionAlign = lb;
			this.size = 0;
			this.textAlign = mb;
			this.writingMode = nb;
			this.lineInterpretation = ob;
			this.line = null;
			this.lineHeight = "";
			this.lineAlign = pb;
			this.displayAlign = qb;
			this.fontSize = this.textStrokeWidth = this.textStrokeColor = this.textShadow = this.border = this.backgroundImage = this.backgroundColor = this.color = "";
			this.fontWeight = rb;
			this.fontStyle = sb;
			this.linePadding = this.letterSpacing =
				this.fontFamily = "";
			this.opacity = 1;
			this.textDecoration = [];
			this.wrapLine = !0;
			this.id = "";
			this.nestedCues = [];
			this.lineBreak = this.isContainer = !1;
			this.cellResolution = {
				columns: 32,
				rows: 15
			}
		}
		ib.prototype.clone = function() {
			var a = new ib(0, 0, ""),
				b;
			for (b in this) a[b] = this[b], a[b] && a[b].constructor == Array && (a[b] = a[b].slice());
			return a
		};

		function tb(a, b) {
			if (a.startTime != b.startTime || a.endTime != b.endTime || a.payload != b.payload) return !1;
			for (var c in a)
				if ("startTime" != c && "endTime" != c && "payload" != c)
					if ("nestedCues" == c) {
						if (!gb(a.nestedCues, b.nestedCues, tb)) return !1
					} else if ("region" == c || "cellResolution" == c)
				for (var d in a[c]) {
					if (a[c][d] != b[c][d]) return !1
				} else if (Array.isArray(a[c])) {
					if (!gb(a[c], b[c])) return !1
				} else if (a[c] != b[c]) return !1;
			return !0
		}
		M("shaka.text.Cue", ib);
		var lb = "auto";
		ib.positionAlign = {
			LEFT: "line-left",
			RIGHT: "line-right",
			CENTER: "center",
			AUTO: lb
		};
		var mb = "center",
			ub = {
				LEFT: "left",
				RIGHT: "right",
				CENTER: mb,
				START: "start",
				END: "end"
			};
		ib.textAlign = ub;
		var qb = "after",
			vb = {
				BEFORE: "before",
				CENTER: "center",
				AFTER: qb
			};
		ib.displayAlign = vb;
		var jb = "ltr";
		ib.direction = {
			HORIZONTAL_LEFT_TO_RIGHT: jb,
			HORIZONTAL_RIGHT_TO_LEFT: "rtl"
		};
		var nb = "horizontal-tb";
		ib.writingMode = {
			HORIZONTAL_TOP_TO_BOTTOM: nb,
			VERTICAL_LEFT_TO_RIGHT: "vertical-lr",
			VERTICAL_RIGHT_TO_LEFT: "vertical-rl"
		};
		var ob = 0;
		ib.lineInterpretation = {
			LINE_NUMBER: ob,
			PERCENTAGE: 1
		};
		var pb = "start",
			wb = {
				CENTER: "center",
				START: pb,
				END: "end"
			};
		ib.lineAlign = wb;
		var xb = {
			white: "#FFF",
			lime: "#0F0",
			cyan: "#0FF",
			red: "#F00",
			yellow: "#FF0",
			magenta: "#F0F",
			blue: "#00F",
			black: "#000"
		};
		ib.defaultTextColor = xb;
		var yb = {
			bg_white: "#FFF",
			bg_lime: "#0F0",
			bg_cyan: "#0FF",
			bg_red: "#F00",
			bg_yellow: "#FF0",
			bg_magenta: "#F0F",
			bg_blue: "#00F",
			bg_black: "#000"
		};
		ib.defaultTextBackgroundColor = yb;
		var rb = 400;
		ib.fontWeight = {
			NORMAL: rb,
			BOLD: 700
		};
		var sb = "normal",
			zb = {
				NORMAL: sb,
				ITALIC: "italic",
				OBLIQUE: "oblique"
			};
		ib.fontStyle = zb;
		ib.textDecoration = {
			UNDERLINE: "underline",
			LINE_THROUGH: "lineThrough",
			OVERLINE: "overline"
		};

		function kb() {
			this.id = "";
			this.regionAnchorY = this.regionAnchorX = this.viewportAnchorY = this.viewportAnchorX = 0;
			this.height = this.width = 100;
			this.viewportAnchorUnits = this.widthUnits = this.heightUnits = Ab;
			this.scroll = Bb
		}
		M("shaka.text.CueRegion", kb);
		var Ab = 1;
		kb.units = {
			PX: 0,
			PERCENTAGE: Ab,
			LINES: 2
		};
		var Bb = "";
		kb.scrollMode = {
			NONE: Bb,
			UP: "up"
		};

		function Cb() {}

		function Db(a, b) {
			if (!a && !b) return !0;
			if (!a || !b || a.byteLength != b.byteLength) return !1;
			if (Eb(a) == Eb(b) && (a.byteOffset || 0) == (b.byteOffset || 0)) return !0;
			for (var c = Fb(a), d = Fb(b), e = 0; e < a.byteLength; e++)
				if (c[e] != d[e]) return !1;
			return !0
		}

		function Eb(a) {
			return a instanceof ArrayBuffer ? a : a.buffer
		}

		function Gb(a) {
			return a instanceof ArrayBuffer ? a : 0 == a.byteOffset && a.byteLength == a.buffer.byteLength ? a.buffer : (new Uint8Array(a)).buffer
		}

		function Fb(a, b, c) {
			c = void 0 === c ? Infinity : c;
			return Hb(a, void 0 === b ? 0 : b, c, Uint8Array)
		}

		function Ib(a, b, c) {
			c = void 0 === c ? Infinity : c;
			return Hb(a, void 0 === b ? 0 : b, c, DataView)
		}

		function Hb(a, b, c, d) {
			var e = (a.byteOffset || 0) + a.byteLength;
			b = Math.max(0, Math.min((a.byteOffset || 0) + b, e));
			return new d(Eb(a), b, Math.min(b + Math.max(c, 0), e) - b)
		}
		M("shaka.util.BufferUtils", Cb);
		Cb.toDataView = Ib;
		Cb.toUint8 = Fb;
		Cb.toArrayBuffer = Gb;
		Cb.equal = Db;

		function Jb() {}
		M("shaka.dependencies", Jb);
		Jb.has = function(a) {
			return Kb.has(a)
		};
		Jb.add = function(a, b) {
			if (!Lb[a]) throw Error(a + " is not supported");
			Kb.set(a, function() {
				return b
			})
		};
		var Lb = {
			muxjs: "muxjs"
		};
		Jb.Allowed = Lb;
		var Kb = new Map([
			["muxjs", function() {
				return window.muxjs
			}]
		]);

		function N(a, b, c) {
			var d = Ha.apply(3, arguments);
			this.severity = a;
			this.category = b;
			this.code = c;
			this.data = d;
			this.handled = !1
		}
		N.prototype.toString = function() {
			return "shaka.util.Error " + JSON.stringify(this, null, "  ")
		};
		M("shaka.util.Error", N);
		N.Severity = {
			RECOVERABLE: 1,
			CRITICAL: 2
		};
		N.Category = {
			NETWORK: 1,
			TEXT: 2,
			MEDIA: 3,
			MANIFEST: 4,
			STREAMING: 5,
			DRM: 6,
			PLAYER: 7,
			CAST: 8,
			STORAGE: 9,
			ADS: 10
		};
		N.Code = {
			UNSUPPORTED_SCHEME: 1E3,
			BAD_HTTP_STATUS: 1001,
			HTTP_ERROR: 1002,
			TIMEOUT: 1003,
			MALFORMED_DATA_URI: 1004,
			REQUEST_FILTER_ERROR: 1006,
			RESPONSE_FILTER_ERROR: 1007,
			MALFORMED_TEST_URI: 1008,
			UNEXPECTED_TEST_REQUEST: 1009,
			ATTEMPTS_EXHAUSTED: 1010,
			SEGMENT_MISSING: 1011,
			INVALID_TEXT_HEADER: 2E3,
			INVALID_TEXT_CUE: 2001,
			UNABLE_TO_DETECT_ENCODING: 2003,
			BAD_ENCODING: 2004,
			INVALID_XML: 2005,
			INVALID_MP4_TTML: 2007,
			INVALID_MP4_VTT: 2008,
			UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
			INVALID_MP4_CEA: 2010,
			TEXT_COULD_NOT_GUESS_MIME_TYPE: 2011,
			CANNOT_ADD_EXTERNAL_TEXT_TO_SRC_EQUALS: 2012,
			TEXT_ONLY_WEBVTT_SRC_EQUALS: 2013,
			MISSING_TEXT_PLUGIN: 2014,
			CHAPTERS_TRACK_FAILED: 2015,
			BUFFER_READ_OUT_OF_BOUNDS: 3E3,
			JS_INTEGER_OVERFLOW: 3001,
			EBML_OVERFLOW: 3002,
			EBML_BAD_FLOATING_POINT_SIZE: 3003,
			MP4_SIDX_WRONG_BOX_TYPE: 3004,
			MP4_SIDX_INVALID_TIMESCALE: 3005,
			MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
			WEBM_CUES_ELEMENT_MISSING: 3007,
			WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
			WEBM_SEGMENT_ELEMENT_MISSING: 3009,
			WEBM_INFO_ELEMENT_MISSING: 3010,
			WEBM_DURATION_ELEMENT_MISSING: 3011,
			WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
			WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
			MEDIA_SOURCE_OPERATION_FAILED: 3014,
			MEDIA_SOURCE_OPERATION_THREW: 3015,
			VIDEO_ERROR: 3016,
			QUOTA_EXCEEDED_ERROR: 3017,
			TRANSMUXING_FAILED: 3018,
			CONTENT_TRANSFORMATION_FAILED: 3019,
			UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
			DASH_INVALID_XML: 4001,
			DASH_NO_SEGMENT_INFO: 4002,
			DASH_EMPTY_ADAPTATION_SET: 4003,
			DASH_EMPTY_PERIOD: 4004,
			DASH_WEBM_MISSING_INIT: 4005,
			DASH_UNSUPPORTED_CONTAINER: 4006,
			DASH_PSSH_BAD_ENCODING: 4007,
			DASH_NO_COMMON_KEY_SYSTEM: 4008,
			DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
			DASH_CONFLICTING_KEY_IDS: 4010,
			RESTRICTIONS_CANNOT_BE_MET: 4012,
			HLS_PLAYLIST_HEADER_MISSING: 4015,
			INVALID_HLS_TAG: 4016,
			HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
			DASH_DUPLICATE_REPRESENTATION_ID: 4018,
			HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
			HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
			HLS_REQUIRED_TAG_MISSING: 4024,
			HLS_COULD_NOT_GUESS_CODECS: 4025,
			HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
			DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
			DASH_XLINK_DEPTH_LIMIT: 4028,
			CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
			CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
			HLS_AES_128_ENCRYPTION_NOT_SUPPORTED: 4034,
			HLS_INTERNAL_SKIP_STREAM: 4035,
			NO_VARIANTS: 4036,
			PERIOD_FLATTENING_FAILED: 4037,
			INCONSISTENT_DRM_ACROSS_PERIODS: 4038,
			HLS_VARIABLE_NOT_FOUND: 4039,
			HLS_MSE_ENCRYPTED_MP2T_NOT_SUPPORTED: 4040,
			STREAMING_ENGINE_STARTUP_INVALID_STATE: 5006,
			NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
			REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
			FAILED_TO_CREATE_CDM: 6002,
			FAILED_TO_ATTACH_TO_VIDEO: 6003,
			INVALID_SERVER_CERTIFICATE: 6004,
			FAILED_TO_CREATE_SESSION: 6005,
			FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
			LICENSE_REQUEST_FAILED: 6007,
			LICENSE_RESPONSE_REJECTED: 6008,
			ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
			NO_LICENSE_SERVER_GIVEN: 6012,
			OFFLINE_SESSION_REMOVED: 6013,
			EXPIRED: 6014,
			SERVER_CERTIFICATE_REQUIRED: 6015,
			INIT_DATA_TRANSFORM_ERROR: 6016,
			SERVER_CERTIFICATE_REQUEST_FAILED: 6017,
			LOAD_INTERRUPTED: 7E3,
			OPERATION_ABORTED: 7001,
			NO_VIDEO_ELEMENT: 7002,
			OBJECT_DESTROYED: 7003,
			CONTENT_NOT_LOADED: 7004,
			CAST_API_UNAVAILABLE: 8E3,
			NO_CAST_RECEIVERS: 8001,
			ALREADY_CASTING: 8002,
			UNEXPECTED_CAST_ERROR: 8003,
			CAST_CANCELED_BY_USER: 8004,
			CAST_CONNECTION_TIMED_OUT: 8005,
			CAST_RECEIVER_APP_UNAVAILABLE: 8006,
			STORAGE_NOT_SUPPORTED: 9E3,
			INDEXED_DB_ERROR: 9001,
			DEPRECATED_OPERATION_ABORTED: 9002,
			REQUESTED_ITEM_NOT_FOUND: 9003,
			MALFORMED_OFFLINE_URI: 9004,
			CANNOT_STORE_LIVE_OFFLINE: 9005,
			NO_INIT_DATA_FOR_OFFLINE: 9007,
			LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
			NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
			KEY_NOT_FOUND: 9012,
			MISSING_STORAGE_CELL: 9013,
			STORAGE_LIMIT_REACHED: 9014,
			DOWNLOAD_SIZE_CALLBACK_ERROR: 9015,
			MODIFY_OPERATION_NOT_SUPPORTED: 9016,
			CS_IMA_SDK_MISSING: 1E4,
			CS_AD_MANAGER_NOT_INITIALIZED: 10001,
			SS_IMA_SDK_MISSING: 10002,
			SS_AD_MANAGER_NOT_INITIALIZED: 10003,
			CURRENT_DAI_REQUEST_NOT_FINISHED: 10004
		};
		/*
		 @license
		 Copyright 2008 The Closure Library Authors
		 SPDX-License-Identifier: Apache-2.0
		*/
		var Mb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
		/*
		 @license
		 Copyright 2006 The Closure Library Authors
		 SPDX-License-Identifier: Apache-2.0
		*/
		function Nb(a) {
			var b;
			a instanceof Nb ? (Ob(this, a.Ea), this.nb = a.nb, this.Fa = a.Fa, Pb(this, a.Gb), this.ta = a.ta, Qb(this, a.g.clone()), this.fb = a.fb) : a && (b = String(a).match(Mb)) ? (Ob(this, b[1] || "", !0), this.nb = Rb(b[2] || ""), this.Fa = Rb(b[3] || "", !0), Pb(this, b[4]), this.ta = Rb(b[5] || "", !0), Qb(this, b[6] || "", !0), this.fb = Rb(b[7] || "")) : this.g = new Sb(null)
		}
		r = Nb.prototype;
		r.Ea = "";
		r.nb = "";
		r.Fa = "";
		r.Gb = null;
		r.ta = "";
		r.fb = "";
		r.toString = function() {
			var a = [],
				b = this.Ea;
			b && a.push(Tb(b, Ub, !0), ":");
			if (b = this.Fa) {
				a.push("//");
				var c = this.nb;
				c && a.push(Tb(c, Ub, !0), "@");
				a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
				b = this.Gb;
				null != b && a.push(":", String(b))
			}
			if (b = this.ta) this.Fa && "/" != b.charAt(0) && a.push("/"), a.push(Tb(b, "/" == b.charAt(0) ? Vb : Wb, !0));
			(b = this.g.toString()) && a.push("?", b);
			(b = this.fb) && a.push("#", Tb(b, Xb));
			return a.join("")
		};
		r.resolve = function(a) {
			var b = this.clone();
			"data" === b.Ea && (b = new Nb);
			var c = !!a.Ea;
			c ? Ob(b, a.Ea) : c = !!a.nb;
			c ? b.nb = a.nb : c = !!a.Fa;
			c ? b.Fa = a.Fa : c = null != a.Gb;
			var d = a.ta;
			if (c) Pb(b, a.Gb);
			else if (c = !!a.ta) {
				if ("/" != d.charAt(0))
					if (this.Fa && !this.ta) d = "/" + d;
					else {
						var e = b.ta.lastIndexOf("/"); - 1 != e && (d = b.ta.substr(0, e + 1) + d)
					} if (".." == d || "." == d) d = "";
				else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
					e = 0 == d.lastIndexOf("/", 0);
					d = d.split("/");
					for (var f = [], g = 0; g < d.length;) {
						var h = d[g++];
						"." == h ? e && g == d.length && f.push("") : ".." ==
							h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(h), e = !0)
					}
					d = f.join("/")
				}
			}
			c ? b.ta = d : c = "" !== a.g.toString();
			c ? Qb(b, a.g.clone()) : c = !!a.fb;
			c && (b.fb = a.fb);
			return b
		};
		r.clone = function() {
			return new Nb(this)
		};

		function Ob(a, b, c) {
			a.Ea = c ? Rb(b, !0) : b;
			a.Ea && (a.Ea = a.Ea.replace(/:$/, ""))
		}

		function Pb(a, b) {
			if (b) {
				b = Number(b);
				if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
				a.Gb = b
			} else a.Gb = null
		}

		function Qb(a, b, c) {
			b instanceof Sb ? a.g = b : (c || (b = Tb(b, Yb)), a.g = new Sb(b))
		}

		function Rb(a, b) {
			return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
		}

		function Tb(a, b, c) {
			return null != a ? (a = encodeURI(a).replace(b, Zb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
		}

		function Zb(a) {
			a = a.charCodeAt(0);
			return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
		}
		var Ub = /[#\/\?@]/g,
			Wb = /[#\?:]/g,
			Vb = /[#\?]/g,
			Yb = /[#\?@]/g,
			Xb = /#/g;

		function Sb(a) {
			this.g = a || null
		}

		function $b(a) {
			if (!a.na && (a.na = {}, a.Fc = 0, a.g))
				for (var b = a.g.split("&"), c = 0; c < b.length; c++) {
					var d = b[c].indexOf("="),
						e = null;
					if (0 <= d) {
						var f = b[c].substring(0, d);
						e = b[c].substring(d + 1)
					} else f = b[c];
					f = decodeURIComponent(f.replace(/\+/g, " "));
					e = e || "";
					a.add(f, decodeURIComponent(e.replace(/\+/g, " ")))
				}
		}
		r = Sb.prototype;
		r.na = null;
		r.Fc = null;
		r.add = function(a, b) {
			$b(this);
			this.g = null;
			var c = this.na.hasOwnProperty(a) && this.na[a];
			c || (this.na[a] = c = []);
			c.push(b);
			this.Fc++;
			return this
		};
		r.set = function(a, b) {
			$b(this);
			this.g = null;
			this.na.hasOwnProperty(a) ? this.na[a] = [b] : this.add(a, b);
			return this
		};
		r.toString = function() {
			if (this.g) return this.g;
			if (!this.na) return "";
			var a = [],
				b;
			for (b in this.na)
				for (var c = encodeURIComponent(b), d = this.na[b], e = 0; e < d.length; e++) {
					var f = c;
					"" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
					a.push(f)
				}
			return this.g = a.join("&")
		};
		r.clone = function() {
			var a = new Sb;
			a.g = this.g;
			if (this.na) {
				var b = {},
					c;
				for (c in this.na) b[c] = this.na[c].concat();
				a.na = b;
				a.Fc = this.Fc
			}
			return a
		};

		function ac(a, b) {
			return a.concat(b)
		}

		function bc() {}

		function cc(a) {
			return null != a
		};

		function dc(a, b) {
			if (0 == b.length) return a;
			var c = b.map(function(d) {
				return new Nb(d)
			});
			return a.map(function(d) {
				return new Nb(d)
			}).map(function(d) {
				return c.map(function(e) {
					return d.resolve(e)
				})
			}).reduce(ac, []).map(function(d) {
				return d.toString()
			})
		}

		function hc(a, b) {
			return {
				keySystem: a,
				licenseServerUri: "",
				distinctiveIdentifierRequired: !1,
				persistentStateRequired: !1,
				audioRobustness: "",
				videoRobustness: "",
				serverCertificate: null,
				serverCertificateUri: "",
				sessionType: "",
				initData: b || [],
				keyIds: new Set
			}
		}

		function ic(a, b) {
			if (1 == b.length) return b[0];
			var c = jc(a, b);
			if (null != c) return c;
			throw new N(2, 4, 4025, b);
		}

		function jc(a, b) {
			for (var c = t(kc[a]), d = c.next(); !d.done; d = c.next()) {
				d = d.value;
				for (var e = t(b), f = e.next(); !f.done; f = e.next())
					if (f = f.value, d.test(f.trim())) return f.trim()
			}
			return a == lc ? "" : null
		}
		var lc = "text",
			mc = {
				va: "video",
				cb: "audio",
				X: lc,
				Sb: "image",
				ng: "application"
			},
			kc = {
				audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
				video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av01/],
				text: [/^vtt$/, /^wvtt/, /^stpp/]
			};

		function nc() {
			var a, b, c = new Promise(function(d, e) {
				a = d;
				b = e
			});
			c.resolve = a;
			c.reject = b;
			return c
		}
		nc.prototype.resolve = function() {};
		nc.prototype.reject = function() {};

		function oc(a) {
			this.h = a;
			this.g = void 0
		}
		oc.prototype.value = function() {
			void 0 == this.g && (this.g = this.h());
			return this.g
		};

		function pc(a) {
			this.h = a;
			this.g = null
		}
		pc.prototype.S = function(a) {
			var b = this;
			this.stop();
			var c = !0,
				d = null;
			this.g = function() {
				window.clearTimeout(d);
				c = !1
			};
			d = window.setTimeout(function() {
				c && b.h()
			}, 1E3 * a);
			return this
		};
		pc.prototype.stop = function() {
			this.g && (this.g(), this.g = null)
		};

		function O(a) {
			this.h = a;
			this.g = null
		}
		O.prototype.Jb = function() {
			this.stop();
			this.h();
			return this
		};
		O.prototype.S = function(a) {
			var b = this;
			this.stop();
			this.g = (new pc(function() {
				b.h()
			})).S(a);
			return this
		};
		O.prototype.Ca = function(a) {
			var b = this;
			this.stop();
			this.g = (new pc(function() {
				b.g.S(a);
				b.h()
			})).S(a);
			return this
		};
		O.prototype.stop = function() {
			this.g && (this.g.stop(), this.g = null)
		};
		M("shaka.util.Timer", O);
		O.prototype.stop = O.prototype.stop;
		O.prototype.tickEvery = O.prototype.Ca;
		O.prototype.tickAfter = O.prototype.S;
		O.prototype.tickNow = O.prototype.Jb;

		function qc() {
			return window.MediaSource && MediaSource.isTypeSupported ? !0 : !1
		}

		function rc(a) {
			return "" != sc().canPlayType(a)
		}

		function tc() {
			return uc("Xbox One")
		}

		function vc() {
			return uc("Tizen")
		}

		function wc() {
			return uc("Web0S") && uc("Chrome/38.0.2125.122 Safari/537.36")
		}

		function xc() {
			return uc("CrKey")
		}

		function yc() {
			return !!navigator.vendor && navigator.vendor.includes("Apple") && !vc() && !uc("PC=EOS") && !zc()
		}

		function zc() {
			return uc("PlayStation 4")
		}

		function Ac() {
			if (!yc()) return null;
			var a = navigator.userAgent.match(/Version\/(\d+)/);
			return a ? parseInt(a[1], 10) : (a = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/)) ? parseInt(a[1], 10) : null
		}

		function uc(a) {
			return (navigator.userAgent || "").includes(a)
		}

		function sc() {
			if (Bc) return Bc;
			Cc || (Cc = new O(function() {
				Bc = null
			}));
			(Bc = document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0]) || (Bc = document.createElement("video"));
			Cc.S(1);
			return Bc
		}
		var Cc = null,
			Bc = null;

		function Ec() {}

		function Fc(a) {
			if (!a) return "";
			a = Fb(a);
			239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
			if (window.TextDecoder && !zc()) return a = (new TextDecoder).decode(a), a.includes("\ufffd") && Ua('Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!'), a;
			a = Gc(a);
			a = escape(a);
			try {
				return decodeURIComponent(a)
			} catch (b) {
				throw new N(2, 2, 2004);
			}
		}

		function Hc(a, b, c) {
			if (!a) return "";
			if (!c && 0 != a.byteLength % 2) throw new N(2, 2, 2004);
			c = Math.floor(a.byteLength / 2);
			var d = new Uint16Array(c);
			a = Ib(a);
			for (var e = 0; e < c; e++) d[e] = a.getUint16(2 * e, b);
			return Gc(d)
		}

		function Ic(a) {
			function b(d) {
				return c.byteLength <= d || 32 <= c[d] && 126 >= c[d]
			}
			if (!a) return "";
			var c = Fb(a);
			if (239 == c[0] && 187 == c[1] && 191 == c[2]) return Fc(c);
			if (254 == c[0] && 255 == c[1]) return Hc(c.subarray(2), !1);
			if (255 == c[0] && 254 == c[1]) return Hc(c.subarray(2), !0);
			if (0 == c[0] && 0 == c[2]) return Hc(a, !1);
			if (0 == c[1] && 0 == c[3]) return Hc(a, !0);
			if (b(0) && b(1) && b(2) && b(3)) return Fc(a);
			throw new N(2, 2, 2003);
		}

		function Jc(a) {
			if (window.TextEncoder && !zc()) {
				var b = new TextEncoder;
				return Gb(b.encode(a))
			}
			a = encodeURIComponent(a);
			a = unescape(a);
			b = new Uint8Array(a.length);
			for (var c = 0; c < a.length; c++) b[c] = a[c].charCodeAt(0);
			return Gb(b)
		}

		function Kc(a, b) {
			for (var c = new ArrayBuffer(2 * a.length), d = new DataView(c), e = 0; e < a.length; ++e) d.setUint16(2 * e, a.charCodeAt(e), b);
			return c
		}

		function Gc(a) {
			return Lc.value()(a)
		}
		M("shaka.util.StringUtils", Ec);
		Ec.resetFromCharCode = function() {
			Lc.g = void 0
		};
		Ec.toUTF16 = Kc;
		Ec.toUTF8 = Jc;
		Ec.fromBytesAutoDetect = Ic;
		Ec.fromUTF16 = Hc;
		Ec.fromUTF8 = Fc;
		var Lc = new oc(function() {
			function a(c) {
				try {
					var d = new Uint8Array(c);
					return 0 < String.fromCharCode.apply(null, d).length
				} catch (e) {
					return !1
				}
			}
			for (var b = {
					Va: 65536
				}; 0 < b.Va; b = {
					Va: b.Va
				}, b.Va /= 2)
				if (a(b.Va)) return function(c) {
					return function(d) {
						for (var e = "", f = 0; f < d.length; f += c.Va) e += String.fromCharCode.apply(null, d.subarray(f, f + c.Va));
						return e
					}
				}(b);
			return null
		});

		function Mc() {}

		function Nc(a) {
			a = Gc(Fb(a));
			return btoa(a)
		}

		function Oc(a, b) {
			b = void 0 == b ? !0 : b;
			var c = Nc(a).replace(/\+/g, "-").replace(/\//g, "_");
			return b ? c : c.replace(/[=]*$/, "")
		}

		function Pc(a) {
			a = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
			for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
			return b
		}

		function Qc(a) {
			for (var b = a.length / 2, c = new Uint8Array(b), d = 0; d < b; d++) c[d] = window.parseInt(a.substr(2 * d, 2), 16);
			return c
		}

		function Rc(a) {
			var b = Fb(a);
			a = "";
			b = t(b);
			for (var c = b.next(); !c.done; c = b.next()) c = c.value, c = c.toString(16), 1 == c.length && (c = "0" + c), a += c;
			return a
		}

		function Sc() {
			for (var a = Ha.apply(0, arguments), b = 0, c = t(a), d = c.next(); !d.done; d = c.next()) b += d.value.byteLength;
			b = new Uint8Array(b);
			c = 0;
			a = t(a);
			for (d = a.next(); !d.done; d = a.next()) d = d.value, b.set(Fb(d), c), c += d.byteLength;
			return b
		}
		M("shaka.util.Uint8ArrayUtils", Mc);
		Mc.concat = Sc;
		Mc.toHex = Rc;
		Mc.fromHex = Qc;
		Mc.fromBase64 = Pc;
		Mc.toBase64 = Oc;
		Mc.toStandardBase64 = Nc;

		function Tc() {
			var a = this;
			this.o = Kb.get("muxjs")();
			this.g = new this.o.mp4.Transmuxer({
				keepOriginalTimestamps: !0
			});
			this.h = null;
			this.m = [];
			this.j = [];
			this.i = [];
			this.l = !1;
			this.g.on("data", function(b) {
				a.j = b.captions;
				a.i = b.metadata;
				a.m.push(Sc(b.initSegment, b.data))
			});
			this.g.on("done", function() {
				var b = {
					data: Sc.apply(Mc, ia(a.m)),
					captions: a.j,
					metadata: a.i
				};
				a.h.resolve(b);
				a.l = !1
			})
		}
		Tc.prototype.destroy = function() {
			this.g.dispose();
			this.g = null;
			return Promise.resolve()
		};

		function Uc(a, b) {
			if (!Kb.get("muxjs")() || !Vc(a)) return !1;
			if (b) return MediaSource.isTypeSupported(Wc(b, a));
			var c = Wc("audio", a),
				d = Wc("video", a);
			return MediaSource.isTypeSupported(c) || MediaSource.isTypeSupported(d)
		}

		function Vc(a) {
			return "mp2t" == a.toLowerCase().split(";")[0].split("/")[1]
		}

		function Wc(a, b) {
			var c = b.replace(/mp2t/i, "mp4");
			"audio" == a && (c = c.replace("video", "audio"));
			var d = /avc1\.(66|77|100)\.(\d+)/.exec(c);
			if (d) {
				var e = "avc1.",
					f = d[1],
					g = Number(d[2]);
				e = ("66" == f ? e + "4200" : "77" == f ? e + "4d00" : e + "6400") + (g >> 4).toString(16);
				e += (g & 15).toString(16);
				c = c.replace(d[0], e)
			}
			return c
		}

		function Xc(a, b) {
			a.l = !0;
			a.h = new nc;
			a.m = [];
			a.j = [];
			a.i = [];
			var c = Fb(b);
			a.g.push(c);
			a.g.flush();
			a.l && a.h.reject(new N(2, 3, 3018));
			return a.h
		};

		function Yc() {}

		function Zc(a, b) {
			var c = a;
			b && (c += '; codecs="' + b + '"');
			return c
		}

		function $c(a, b, c) {
			a = Zc(a, b);
			if (Vc(a)) {
				if (Kb.get("muxjs")()) return Wc(c, a)
			} else if ("audio" == c) return a.replace("video", "audio");
			return a
		}

		function ad(a) {
			var b = bd(a);
			a = b[0];
			b = b[1].toLowerCase();
			switch (!0) {
				case "mp4a" === a && "69" === b:
				case "mp4a" === a && "6b" === b:
					return "mp3";
				case "mp4a" === a && "66" === b:
				case "mp4a" === a && "67" === b:
				case "mp4a" === a && "68" === b:
				case "mp4a" === a && "40.2" === b:
				case "mp4a" === a && "40.02" === b:
				case "mp4a" === a && "40.5" === b:
				case "mp4a" === a && "40.05" === b:
				case "mp4a" === a && "40.29" === b:
				case "mp4a" === a && "40.42" === b:
					return "aac";
				case "mp4a" === a && "a5" === b:
					return "ac-3";
				case "mp4a" === a && "a6" === b:
					return "ec-3";
				case "mp4a" === a && "b2" === b:
					return "dtsx";
				case "mp4a" === a && "a9" === b:
					return "dtsc";
				case "avc1" === a:
				case "avc3" === a:
					return "avc";
				case "hvc1" === a:
				case "hev1" === a:
					return "hevc";
				case "dvh1" === a:
				case "dvhe" === a:
					return "dovi"
			}
			return a
		}

		function cd(a) {
			a = a.split(/ *; */);
			a.shift();
			return (a = a.find(function(b) {
				return b.startsWith("codecs=")
			})) ? a.split("=")[1].replace(/^"|"$/g, "") : ""
		}

		function bd(a) {
			a = a.split(".");
			var b = a[0];
			a.shift();
			return [b, a.join(".")]
		}
		M("shaka.util.MimeUtils", Yc);
		Yc.getFullType = Zc;
		(new Map).set("codecs", "codecs").set("frameRate", "framerate").set("bandwidth", "bitrate").set("width", "width").set("height", "height").set("channelsCount", "channels");

		function dd(a) {
			this.j = null;
			this.i = a;
			this.u = !1;
			this.l = this.s = 0;
			this.m = Infinity;
			this.h = this.g = null;
			this.C = "";
			this.o = new Map
		}

		function ed(a) {
			return fd[a] || "application/cea-608" == a || "application/cea-708" == a ? !0 : !1
		}
		dd.prototype.destroy = function() {
			this.i = this.j = null;
			this.o.clear();
			return Promise.resolve()
		};

		function gd(a, b, c, d) {
			var e, f, g, h;
			return K(function(k) {
				if (1 == k.g) return u(k, Promise.resolve(), 2);
				if (!a.j || !a.i) return k["return"]();
				if (null == c || null == d) return a.j.parseInit(Fb(b)), k["return"]();
				e = a.u ? c : a.s;
				f = {
					periodStart: a.s,
					segmentStart: c,
					segmentEnd: d,
					vttOffset: e
				};
				g = a.j.parseMedia(Fb(b), f);
				h = g.filter(function(l) {
					return l.startTime >= a.l && l.startTime < a.m
				});
				a.i.append(h);
				null == a.g && (a.g = Math.max(c, a.l));
				a.h = Math.min(d, a.m);
				z(k)
			})
		}
		dd.prototype.remove = function(a, b) {
			var c = this;
			return K(function(d) {
				if (1 == d.g) return u(d, Promise.resolve(), 2);
				!c.i || !c.i.remove(a, b) || null == c.g || b <= c.g || a >= c.h || (a <= c.g && b >= c.h ? c.g = c.h = null : a <= c.g && b < c.h ? c.g = b : a > c.g && b >= c.h && (c.h = a));
				z(d)
			})
		};

		function hd(a, b, c) {
			a.l = b;
			a.m = c
		}

		function id(a, b, c) {
			a.C = b;
			if (b = a.o.get(b))
				for (var d = t(b.keys()), e = d.next(); !e.done; e = d.next())(e = b.get(e.value).filter(function(f) {
					return f.endTime <= c
				})) && a.i.append(e)
		}

		function jd(a) {
			var b = [];
			a = t(a);
			for (var c = a.next(); !c.done; c = a.next()) c = c.value, b.push({
				stream: c.stream,
				cue: new ib(c.startTime, c.endTime, c.text)
			});
			return b
		}

		function nd(a, b, c) {
			b.startTime += c;
			b.endTime += c;
			b = t(b.nestedCues);
			for (var d = b.next(); !d.done; d = b.next()) nd(a, d.value, c)
		}

		function od(a, b, c, d, e) {
			var f = c + " " + d,
				g = new Map;
			b = t(b);
			for (var h = b.next(); !h.done; h = b.next()) {
				var k = h.value;
				h = k.stream;
				k = k.cue;
				g.has(h) || g.set(h, new Map);
				g.get(h).has(f) || g.get(h).set(f, []);
				nd(a, k, e);
				k.startTime >= a.l && k.startTime < a.m && (g.get(h).get(f).push(k), h == a.C && a.i.append([k]))
			}
			e = t(g.keys());
			for (f = e.next(); !f.done; f = e.next())
				for (f = f.value, a.o.has(f) || a.o.set(f, new Map), b = t(g.get(f).keys()), h = b.next(); !h.done; h = b.next()) h = h.value, k = g.get(f).get(h), a.o.get(f).set(h, k);
			a.g = null == a.g ? Math.max(c,
				a.l) : Math.min(a.g, Math.max(c, a.l));
			a.h = Math.max(a.h, Math.min(d, a.m))
		}
		M("shaka.text.TextEngine", dd);
		dd.prototype.destroy = dd.prototype.destroy;
		dd.findParser = function(a) {
			return fd[a]
		};
		dd.unregisterParser = function(a) {
			delete fd[a]
		};
		dd.registerParser = function(a, b) {
			fd[a] = b
		};
		var fd = {};

		function pd() {}

		function qd(a, b) {
			a = Q(a);
			b = Q(b);
			return a.split("-")[0] == b.split("-")[0]
		}

		function rd(a, b) {
			a = Q(a);
			b = Q(b);
			var c = a.split("-"),
				d = b.split("-");
			return c[0] == d[0] && 1 == c.length && 2 == d.length
		}

		function sd(a, b) {
			a = Q(a);
			b = Q(b);
			var c = a.split("-"),
				d = b.split("-");
			return 2 == c.length && 2 == d.length && c[0] == d[0]
		}

		function Q(a) {
			var b = a.split("-");
			a = b[0] || "";
			b = b[1] || "";
			a = a.toLowerCase();
			a = td.get(a) || a;
			return (b = b.toUpperCase()) ? a + "-" + b : a
		}

		function ud(a, b) {
			a = Q(a);
			b = Q(b);
			return b == a ? 4 : rd(b, a) ? 3 : sd(b, a) ? 2 : rd(a, b) ? 1 : 0
		}

		function vd(a) {
			var b = a.indexOf("-");
			a = 0 <= b ? a.substring(0, b) : a;
			a = a.toLowerCase();
			return a = td.get(a) || a
		}

		function wd(a) {
			return a.language ? Q(a.language) : a.audio && a.audio.language ? Q(a.audio.language) : a.video && a.video.language ? Q(a.video.language) : "und"
		}

		function xd(a, b) {
			for (var c = Q(a), d = new Set, e = t(b), f = e.next(); !f.done; f = e.next()) d.add(Q(f.value));
			e = t(d);
			for (f = e.next(); !f.done; f = e.next())
				if (f = f.value, f == c) return f;
			e = t(d);
			for (f = e.next(); !f.done; f = e.next())
				if (f = f.value, rd(f, c)) return f;
			e = t(d);
			for (f = e.next(); !f.done; f = e.next())
				if (f = f.value, sd(f, c)) return f;
			d = t(d);
			for (f = d.next(); !f.done; f = d.next())
				if (f = f.value, rd(c, f)) return f;
			return null
		}
		M("shaka.util.LanguageUtils", pd);
		pd.findClosestLocale = xd;
		pd.getLocaleForVariant = wd;
		pd.getLocaleForText = function(a) {
			return Q(a.language || "und")
		};
		pd.getBase = vd;
		pd.relatedness = ud;
		pd.areSiblings = function(a, b) {
			var c = vd(a),
				d = vd(b);
			return a != c && b != d && c == d
		};
		pd.normalize = Q;
		pd.isSiblingOf = sd;
		pd.isParentOf = rd;
		pd.areLanguageCompatible = qd;
		pd.areLocaleCompatible = function(a, b) {
			a = Q(a);
			b = Q(b);
			return a == b
		};
		var td = new Map([
			["aar", "aa"],
			["abk", "ab"],
			["afr", "af"],
			["aka", "ak"],
			["alb", "sq"],
			["amh", "am"],
			["ara", "ar"],
			["arg", "an"],
			["arm", "hy"],
			["asm", "as"],
			["ava", "av"],
			["ave", "ae"],
			["aym", "ay"],
			["aze", "az"],
			["bak", "ba"],
			["bam", "bm"],
			["baq", "eu"],
			["bel", "be"],
			["ben", "bn"],
			["bih", "bh"],
			["bis", "bi"],
			["bod", "bo"],
			["bos", "bs"],
			["bre", "br"],
			["bul", "bg"],
			["bur", "my"],
			["cat", "ca"],
			["ces", "cs"],
			["cha", "ch"],
			["che", "ce"],
			["chi", "zh"],
			["chu", "cu"],
			["chv", "cv"],
			["cor", "kw"],
			["cos", "co"],
			["cre", "cr"],
			["cym", "cy"],
			["cze",
				"cs"
			],
			["dan", "da"],
			["deu", "de"],
			["div", "dv"],
			["dut", "nl"],
			["dzo", "dz"],
			["ell", "el"],
			["eng", "en"],
			["epo", "eo"],
			["est", "et"],
			["eus", "eu"],
			["ewe", "ee"],
			["fao", "fo"],
			["fas", "fa"],
			["fij", "fj"],
			["fin", "fi"],
			["fra", "fr"],
			["fre", "fr"],
			["fry", "fy"],
			["ful", "ff"],
			["geo", "ka"],
			["ger", "de"],
			["gla", "gd"],
			["gle", "ga"],
			["glg", "gl"],
			["glv", "gv"],
			["gre", "el"],
			["grn", "gn"],
			["guj", "gu"],
			["hat", "ht"],
			["hau", "ha"],
			["heb", "he"],
			["her", "hz"],
			["hin", "hi"],
			["hmo", "ho"],
			["hrv", "hr"],
			["hun", "hu"],
			["hye", "hy"],
			["ibo", "ig"],
			["ice",
				"is"
			],
			["ido", "io"],
			["iii", "ii"],
			["iku", "iu"],
			["ile", "ie"],
			["ina", "ia"],
			["ind", "id"],
			["ipk", "ik"],
			["isl", "is"],
			["ita", "it"],
			["jav", "jv"],
			["jpn", "ja"],
			["kal", "kl"],
			["kan", "kn"],
			["kas", "ks"],
			["kat", "ka"],
			["kau", "kr"],
			["kaz", "kk"],
			["khm", "km"],
			["kik", "ki"],
			["kin", "rw"],
			["kir", "ky"],
			["kom", "kv"],
			["kon", "kg"],
			["kor", "ko"],
			["kua", "kj"],
			["kur", "ku"],
			["lao", "lo"],
			["lat", "la"],
			["lav", "lv"],
			["lim", "li"],
			["lin", "ln"],
			["lit", "lt"],
			["ltz", "lb"],
			["lub", "lu"],
			["lug", "lg"],
			["mac", "mk"],
			["mah", "mh"],
			["mal", "ml"],
			["mao",
				"mi"
			],
			["mar", "mr"],
			["may", "ms"],
			["mkd", "mk"],
			["mlg", "mg"],
			["mlt", "mt"],
			["mon", "mn"],
			["mri", "mi"],
			["msa", "ms"],
			["mya", "my"],
			["nau", "na"],
			["nav", "nv"],
			["nbl", "nr"],
			["nde", "nd"],
			["ndo", "ng"],
			["nep", "ne"],
			["nld", "nl"],
			["nno", "nn"],
			["nob", "nb"],
			["nor", "no"],
			["nya", "ny"],
			["oci", "oc"],
			["oji", "oj"],
			["ori", "or"],
			["orm", "om"],
			["oss", "os"],
			["pan", "pa"],
			["per", "fa"],
			["pli", "pi"],
			["pol", "pl"],
			["por", "pt"],
			["pus", "ps"],
			["que", "qu"],
			["roh", "rm"],
			["ron", "ro"],
			["rum", "ro"],
			["run", "rn"],
			["rus", "ru"],
			["sag", "sg"],
			["san",
				"sa"
			],
			["sin", "si"],
			["slk", "sk"],
			["slo", "sk"],
			["slv", "sl"],
			["sme", "se"],
			["smo", "sm"],
			["sna", "sn"],
			["snd", "sd"],
			["som", "so"],
			["sot", "st"],
			["spa", "es"],
			["sqi", "sq"],
			["srd", "sc"],
			["srp", "sr"],
			["ssw", "ss"],
			["sun", "su"],
			["swa", "sw"],
			["swe", "sv"],
			["tah", "ty"],
			["tam", "ta"],
			["tat", "tt"],
			["tel", "te"],
			["tgk", "tg"],
			["tgl", "tl"],
			["tha", "th"],
			["tib", "bo"],
			["tir", "ti"],
			["ton", "to"],
			["tsn", "tn"],
			["tso", "ts"],
			["tuk", "tk"],
			["tur", "tr"],
			["twi", "tw"],
			["uig", "ug"],
			["ukr", "uk"],
			["urd", "ur"],
			["uzb", "uz"],
			["ven", "ve"],
			["vie",
				"vi"
			],
			["vol", "vo"],
			["wel", "cy"],
			["wln", "wa"],
			["wol", "wo"],
			["xho", "xh"],
			["yid", "yi"],
			["yor", "yo"],
			["zha", "za"],
			["zho", "zh"],
			["zul", "zu"]
		]);

		function yd() {
			this.g = {}
		}
		r = yd.prototype;
		r.push = function(a, b) {
			this.g.hasOwnProperty(a) ? this.g[a].push(b) : this.g[a] = [b]
		};
		r.get = function(a) {
			return (a = this.g[a]) ? a.slice() : null
		};
		r.remove = function(a, b) {
			a in this.g && (this.g[a] = this.g[a].filter(function(c) {
				return c != b
			}), 0 == this.g[a].length && delete this.g[a])
		};

		function zd(a, b) {
			for (var c in a.g) b(c, a.g[c])
		}
		r.size = function() {
			return Object.keys(this.g).length
		};
		r.keys = function() {
			return Object.keys(this.g)
		};

		function Ad(a, b, c, d, e) {
			var f = a.variants;
			if (b.length || c.length) f = Bd(f, b, c);
			f = Cd(f, d);
			b = Dd(f);
			b = Ed(b);
			var g = Fd(b, e);
			a.variants = a.variants.filter(function(h) {
				return Gd(h) == g ? !0 : !1
			})
		}

		function Dd(a) {
			var b = new yd;
			a = t(a);
			for (var c = a.next(); !c.done; c = a.next()) {
				c = c.value;
				var d = Gd(c);
				b.push(d, c)
			}
			return b
		}

		function Ed(a) {
			var b = 0,
				c = new Map,
				d = a.size();
			zd(a, function(e, f) {
				for (var g = t(f), h = g.next(); !h.done; h = g.next()) {
					h = h.value;
					var k = h.video;
					if (k && k.width && k.height) {
						k = k.width * k.height * (k.frameRate || 1);
						c.has(k) || c.set(k, new yd);
						var l = c.get(k);
						l.push(e, h);
						l.size() === d && (b = Math.max(b, k))
					}
				}
			});
			return b ? c.get(b) : a
		}

		function Bd(a, b, c) {
			var d = {};
			b = t(b);
			for (var e = b.next(); !e.done; d = {
					sd: d.sd
				}, e = b.next())
				if (d.sd = e.value, e = a.filter(function(f) {
						return function(g) {
							return g.video && g.video.codecs.startsWith(f.sd)
						}
					}(d)), e.length) {
					a = e;
					break
				} d = {};
			c = t(c);
			for (b = c.next(); !b.done; d = {
					dd: d.dd
				}, b = c.next())
				if (d.dd = b.value, b = a.filter(function(f) {
						return function(g) {
							return g.audio && g.audio.codecs.startsWith(f.dd)
						}
					}(d)), b.length) {
					a = b;
					break
				} return a
		}

		function Fd(a, b) {
			for (var c = t(b), d = c.next(); !d.done; d = c.next())
				if (d = d.value, d == Hd || d == Id) {
					if (a = Jd(a, d), 1 == a.size()) return a.keys()[0]
				} else if (d == Kd) break;
			return Ld(a)
		}

		function Jd(a, b) {
			var c = 0,
				d = new yd;
			zd(a, function(e, f) {
				for (var g = 0, h = 0, k = t(f), l = k.next(); !l.done; l = k.next()) l = l.value, l.decodingInfos.length && (g += l.decodingInfos[0][b] ? 1 : 0, h++);
				g /= h;
				g > c ? (d.g = {}, d.push(e, f), c = g) : g == c && d.push(e, f)
			});
			return d
		}

		function Ld(a) {
			var b = "",
				c = Infinity;
			zd(a, function(d, e) {
				for (var f = 0, g = 0, h = t(e), k = h.next(); !k.done; k = h.next()) f += k.value.bandwidth || 0, ++g;
				f /= g;
				f < c && (b = d, c = f)
			});
			return b
		}

		function Gd(a) {
			var b = "";
			a.video && (b = ad(a.video.codecs));
			var c = "";
			a.audio && (c = ad(a.audio.codecs));
			return b + "-" + c
		}

		function Md(a, b, c) {
			a.variants = a.variants.filter(function(d) {
				return Nd(d, b, c)
			})
		}

		function Nd(a, b, c) {
			function d(f, g, h) {
				return f >= g && f <= h
			}
			var e = a.video;
			if (0 != a.disabledUntilTime) {
				if (a.disabledUntilTime > Date.now() / 1E3) return !1;
				a.disabledUntilTime = 0
			}
			return e && e.width && e.height && (!d(e.width, b.minWidth, Math.min(b.maxWidth, c.width)) || !d(e.height, b.minHeight, Math.min(b.maxHeight, c.height)) || !d(e.width * e.height, b.minPixels, b.maxPixels)) || a && a.video && a.video.frameRate && !d(a.video.frameRate, b.minFrameRate, b.maxFrameRate) || !d(a.bandwidth, b.minBandwidth, b.maxBandwidth) ? !1 : !0
		}

		function Od(a, b, c) {
			var d = !1;
			a = t(a);
			for (var e = a.next(); !e.done; e = a.next()) {
				e = e.value;
				var f = e.allowedByApplication;
				e.allowedByApplication = Nd(e, b, c);
				f != e.allowedByApplication && (d = !0)
			}
			return d
		}

		function Pd(a, b) {
			return K(function(c) {
				if (1 == c.g) return u(c, Qd(b, 0 < b.offlineSessionIds.length), 2);
				Rd(a, b);
				Sd(b);
				return u(c, Td(b), 0)
			})
		}

		function Qd(a, b) {
			return K(function(c) {
				if (1 == c.g) return u(c, Ud(a.variants, b, !1), 2);
				a.variants = a.variants.filter(function(d) {
					var e = d.video;
					if (e) {
						var f = Vd(e.codecs);
						if (e.codecs.includes(",")) {
							var g = e.codecs.split(",");
							f = ic("video", g);
							g = ic("audio", g);
							g = $c(e.mimeType, g, "audio");
							if (!MediaSource.isTypeSupported(g)) return !1
						}
						f = $c(e.mimeType, f, "video");
						if (!MediaSource.isTypeSupported(f)) return !1
					}
					if (f = d.audio)
						if (g = Wd(f.codecs), f = $c(f.mimeType, g, "audio"), !MediaSource.isTypeSupported(f)) return !1;
					if (tc() && e && (e.width &&
							1920 < e.width || e.height && 1080 < e.height) && e.codecs.includes("avc1.")) return Za(Xd(d)), !1;
					(e = d.decodingInfos.some(function(h) {
						return h.supported
					})) || Za(Xd(d));
					return e
				});
				z(c)
			})
		}

		function Ud(a, b, c) {
			var d, e, f, g, h, k, l, m, p, n, q;
			return K(function(w) {
				if (d = a.some(function(y) {
						return y.decodingInfos.length
					})) return w["return"]();
				e = navigator.mediaCapabilities;
				f = [];
				g = function(y, x) {
					var v;
					return K(function(D) {
						if (1 == D.g) return B(D, 2), u(D, e.decodingInfo(x), 4);
						if (2 != D.g) return v = D.h, y.decodingInfos.push(v), va(D, 0);
						F(D);
						JSON.stringify(x);
						z(D)
					})
				};
				h = t(a);
				for (k = h.next(); !k.done; k = h.next())
					for (l = k.value, m = Yd(l, b, c), p = t(m), n = p.next(); !n.done; n = p.next()) q = n.value, f.push(g(l, q));
				return u(w, Promise.all(f),
					0)
			})
		}

		function Yd(a, b, c) {
			var d = a.audio,
				e = a.video;
			c = {
				type: c ? "file" : "media-source"
			};
			if (e) {
				var f = e.codecs;
				if (e.codecs.includes(",")) {
					var g = e.codecs.split(",");
					f = ic("video", g);
					f = Vd(f);
					g = ic("audio", g);
					g = $c(e.mimeType, g, "audio");
					c.audio = {
						contentType: g,
						channels: 2,
						bitrate: a.bandwidth || 1,
						samplerate: 1,
						spatialRendering: !1
					}
				}
				f = Vd(f);
				f = $c(e.mimeType, f, "video");
				c.video = {
					contentType: f,
					width: e.width || 1,
					height: e.height || 1,
					bitrate: e.bandwidth || a.bandwidth || 1,
					framerate: e.frameRate || 1
				};
				if (e.hdr) switch (e.hdr) {
					case "SDR":
						c.video.transferFunction = "srgb";
						break;
					case "PQ":
						c.video.transferFunction = "pq";
						break;
					case "HLG":
						c.video.transferFunction = "hlg"
				}
			}
			d && (f = Wd(d.codecs), f = $c(d.mimeType, f, "audio"), c.audio = {
				contentType: f,
				channels: d.channelsCount || 2,
				bitrate: d.bandwidth || a.bandwidth || 1,
				samplerate: d.audioSamplingRate || 1,
				spatialRendering: d.spatialAudio
			});
			g = (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : []);
			if (!g.length) return [c];
			a = [];
			f = new Map;
			g = t(g);
			for (var h = g.next(); !h.done; h = g.next()) {
				var k = h.value;
				f.get(k.keySystem) || f.set(k.keySystem, []);
				f.get(k.keySystem).push(k)
			}
			g = b ? "required" : "optional";
			b = b ? ["persistent-license"] : ["temporary"];
			k = t(f.keys());
			for (var l = k.next(); !l.done; l = k.next()) {
				var m = l.value;
				l = Object.assign({}, c);
				var p = f.get(m);
				m = {
					keySystem: m,
					initDataType: "cenc",
					persistentState: g,
					distinctiveIdentifier: "optional",
					sessionTypes: b
				};
				p = t(p);
				for (h = p.next(); !h.done; h = p.next()) {
					h = h.value;
					if (h.initData && h.initData.length) {
						for (var n = new Set, q = t(h.initData), w = q.next(); !w.done; w = q.next()) n.add(w.value.initDataType);
						m.initDataType = h.initData[0].initDataType
					}
					h.distinctiveIdentifierRequired &&
						(m.distinctiveIdentifier = "required");
					h.persistentStateRequired && (m.persistentState = "required");
					h.sessionType && (m.sessionTypes = [h.sessionType]);
					d && (m.audio ? m.audio.robustness = m.audio.robustness || h.audioRobustness : m.audio = {
						robustness: h.audioRobustness
					});
					e && (m.video ? m.video.robustness = m.video.robustness || h.videoRobustness : m.video = {
						robustness: h.videoRobustness
					})
				}
				l.keySystemConfiguration = m;
				a.push(l)
			}
			return a
		}

		function Wd(a) {
			return vc() ? "ac-3" == a.toLowerCase() ? "ec-3" : a : a
		}

		function Vd(a) {
			return "vp9" == a ? "vp09.00.10.08" : a
		}

		function Rd(a, b) {
			b.variants = b.variants.filter(function(c) {
				var d = c.audio;
				c = c.video;
				return d && a && a.audio && !Zd(d, a.audio) || c && a && a.video && !Zd(c, a.video) ? !1 : !0
			})
		}

		function Sd(a) {
			a.textStreams = a.textStreams.filter(function(b) {
				return ed(Zc(b.mimeType, b.codecs))
			})
		}

		function Td(a) {
			var b, c, d, e, f, g, h, k;
			return K(function(l) {
				switch (l.g) {
					case 1:
						b = [], c = t(a.imageStreams), d = c.next();
					case 2:
						if (d.done) {
							l.A(4);
							break
						}
						e = d.value;
						f = e.mimeType;
						if ($d.has(f)) {
							l.A(5);
							break
						}
						g = ae.get(f);
						if (!g) {
							$d.set(f, !1);
							l.A(5);
							break
						}
						return u(l, be(g), 7);
					case 7:
						h = l.h, $d.set(f, h);
					case 5:
						(k = $d.get(f)) && b.push(e);
						d = c.next();
						l.A(2);
						break;
					case 4:
						a.imageStreams = b, z(l)
				}
			})
		}

		function be(a) {
			return new Promise(function(b) {
				var c = new Image;
				c.src = a;
				"decode" in c ? c.decode().then(function() {
					b(!0)
				})["catch"](function() {
					b(!1)
				}) : c.onload = c.onerror = function() {
					b(2 === c.height)
				}
			})
		}

		function Zd(a, b) {
			return a.mimeType != b.mimeType || a.codecs.split(".")[0] != b.codecs.split(".")[0] ? !1 : !0
		}

		function ce(a) {
			var b = a.audio,
				c = a.video,
				d = b ? b.mimeType : null,
				e = c ? c.mimeType : null,
				f = b ? b.codecs : null,
				g = c ? c.codecs : null,
				h = [];
			g && h.push(g);
			f && h.push(f);
			var k = [];
			c && k.push(c.mimeType);
			b && k.push(b.mimeType);
			k = k[0] || null;
			var l = [];
			b && l.push(b.kind);
			c && l.push(c.kind);
			l = l[0] || null;
			var m = new Set;
			if (b)
				for (var p = t(b.roles), n = p.next(); !n.done; n = p.next()) m.add(n.value);
			if (c)
				for (p = t(c.roles), n = p.next(); !n.done; n = p.next()) m.add(n.value);
			a = {
				id: a.id,
				active: !1,
				type: "variant",
				bandwidth: a.bandwidth,
				language: a.language,
				label: null,
				kind: l,
				width: null,
				height: null,
				frameRate: null,
				pixelAspectRatio: null,
				hdr: null,
				mimeType: k,
				audioMimeType: d,
				videoMimeType: e,
				codecs: h.join(", "),
				audioCodec: f,
				videoCodec: g,
				primary: a.primary,
				roles: Array.from(m),
				audioRoles: null,
				forced: !1,
				videoId: null,
				audioId: null,
				channelsCount: null,
				audioSamplingRate: null,
				spatialAudio: !1,
				tilesLayout: null,
				audioBandwidth: null,
				videoBandwidth: null,
				originalVideoId: null,
				originalAudioId: null,
				originalTextId: null,
				originalImageId: null
			};
			c && (a.videoId = c.id, a.originalVideoId = c.originalId,
				a.width = c.width || null, a.height = c.height || null, a.frameRate = c.frameRate || null, a.pixelAspectRatio = c.pixelAspectRatio || null, a.videoBandwidth = c.bandwidth || null);
			b && (a.audioId = b.id, a.originalAudioId = b.originalId, a.channelsCount = b.channelsCount, a.audioSamplingRate = b.audioSamplingRate, a.audioBandwidth = b.bandwidth || null, a.spatialAudio = b.spatialAudio, a.label = b.label, a.audioRoles = b.roles);
			return a
		}

		function de(a) {
			return {
				id: a.id,
				active: !1,
				type: lc,
				bandwidth: 0,
				language: a.language,
				label: a.label,
				kind: a.kind || null,
				width: null,
				height: null,
				frameRate: null,
				pixelAspectRatio: null,
				hdr: null,
				mimeType: a.mimeType,
				audioMimeType: null,
				videoMimeType: null,
				codecs: a.codecs || null,
				audioCodec: null,
				videoCodec: null,
				primary: a.primary,
				roles: a.roles,
				audioRoles: null,
				forced: a.forced,
				videoId: null,
				audioId: null,
				channelsCount: null,
				audioSamplingRate: null,
				spatialAudio: !1,
				tilesLayout: null,
				audioBandwidth: null,
				videoBandwidth: null,
				originalVideoId: null,
				originalAudioId: null,
				originalTextId: a.originalId,
				originalImageId: null
			}
		}

		function ee(a) {
			var b = a.width || null,
				c = a.height || null,
				d = null;
			a.segmentIndex && (d = a.segmentIndex.get(0));
			var e = a.tilesLayout;
			d && (e = d.tilesLayout || e);
			e && null != b && (b /= Number(e.split("x")[0]));
			e && null != c && (c /= Number(e.split("x")[1]));
			return {
				id: a.id,
				active: !1,
				type: "image",
				bandwidth: a.bandwidth || 0,
				language: "",
				label: null,
				kind: null,
				width: b,
				height: c,
				frameRate: null,
				pixelAspectRatio: null,
				hdr: null,
				mimeType: a.mimeType,
				audioMimeType: null,
				videoMimeType: null,
				codecs: null,
				audioCodec: null,
				videoCodec: null,
				primary: !1,
				roles: [],
				audioRoles: null,
				forced: !1,
				videoId: null,
				audioId: null,
				channelsCount: null,
				audioSamplingRate: null,
				spatialAudio: !1,
				tilesLayout: e || null,
				audioBandwidth: null,
				videoBandwidth: null,
				originalVideoId: null,
				originalAudioId: null,
				originalTextId: null,
				originalImageId: a.originalId
			}
		}

		function fe(a) {
			a.__shaka_id || (a.__shaka_id = he++);
			return a.__shaka_id
		}

		function ie(a) {
			var b = je(a);
			b.active = "disabled" != a.mode;
			b.type = "text";
			b.originalTextId = a.id;
			"captions" == a.kind && (b.mimeType = "application/cea-608");
			a.kind && (b.roles = [a.kind]);
			"forced" == a.kind && (b.forced = !0);
			return b
		}

		function ke(a) {
			var b = je(a);
			b.active = a.enabled;
			b.type = "variant";
			b.originalAudioId = a.id;
			"main" == a.kind && (b.primary = !0);
			a.kind && (b.roles = [a.kind], b.audioRoles = [a.kind], b.label = a.label);
			return b
		}

		function je(a) {
			return {
				id: fe(a),
				active: !1,
				type: "",
				bandwidth: 0,
				language: Q(a.language),
				label: a.label,
				kind: a.kind,
				width: null,
				height: null,
				frameRate: null,
				pixelAspectRatio: null,
				hdr: null,
				mimeType: null,
				audioMimeType: null,
				videoMimeType: null,
				codecs: null,
				audioCodec: null,
				videoCodec: null,
				primary: !1,
				roles: [],
				forced: !1,
				audioRoles: null,
				videoId: null,
				audioId: null,
				channelsCount: null,
				audioSamplingRate: null,
				spatialAudio: !1,
				tilesLayout: null,
				audioBandwidth: null,
				videoBandwidth: null,
				originalVideoId: null,
				originalAudioId: null,
				originalTextId: null,
				originalImageId: null
			}
		}

		function le(a) {
			return a.allowedByApplication && a.allowedByKeySystem
		}

		function me(a) {
			return a.filter(function(b) {
				return le(b)
			})
		}

		function Cd(a, b) {
			var c = a.filter(function(g) {
					return g.audio && g.audio.channelsCount
				}),
				d = new Map;
			c = t(c);
			for (var e = c.next(); !e.done; e = c.next()) {
				e = e.value;
				var f = e.audio.channelsCount;
				d.has(f) || d.set(f, []);
				d.get(f).push(e)
			}
			c = Array.from(d.keys());
			if (0 == c.length) return a;
			e = c.filter(function(g) {
				return g <= b
			});
			return e.length ? d.get(Math.max.apply(Math, ia(e))) : d.get(Math.min.apply(Math, ia(c)))
		}

		function ne(a, b, c, d) {
			var e = a,
				f = a.filter(function(k) {
					return k.primary
				});
			f.length && (e = f);
			var g = e.length ? e[0].language : "";
			e = e.filter(function(k) {
				return k.language == g
			});
			if (b) {
				var h = xd(Q(b), a.map(function(k) {
					return k.language
				}));
				h && (e = a.filter(function(k) {
					return Q(k.language) == h
				}))
			}
			e = e.filter(function(k) {
				return k.forced == d
			});
			if (c) {
				if (a = oe(e, c), a.length) return a
			} else if (a = e.filter(function(k) {
					return 0 == k.roles.length
				}), a.length) return a;
			a = e.map(function(k) {
				return k.roles
			}).reduce(ac, []);
			return a.length ?
				oe(e, a[0]) : e
		}

		function oe(a, b) {
			return a.filter(function(c) {
				return c.roles.includes(b)
			})
		}

		function Xd(a) {
			var b = [];
			a.audio && b.push(pe(a.audio));
			a.video && b.push(pe(a.video));
			return b.join(", ")
		}

		function pe(a) {
			return "audio" == a.type ? "type=audio codecs=" + a.codecs + " bandwidth=" + a.bandwidth + " channelsCount=" + a.channelsCount + " audioSamplingRate=" + a.audioSamplingRate : "video" == a.type ? "type=video codecs=" + a.codecs + " bandwidth=" + a.bandwidth + " frameRate=" + a.frameRate + " width=" + a.width + " height=" + a.height : "unexpected stream type"
		}
		var he = 0,
			Hd = "smooth",
			Id = "powerEfficient",
			Kd = "bandwidth",
			$d = (new Map).set("image/svg+xml", !0).set("image/png", !0).set("image/jpeg", !0).set("image/jpg", !0),
			ae = (new Map).set("image/webp", "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA").set("image/avif", "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=");

		function qe() {
			var a = this;
			this.l = null;
			this.j = !1;
			this.h = new Sa;
			navigator.connection && navigator.connection.addEventListener("change", function() {
				if (a.g.useNetworkInformation && a.j) {
					a.h = new Sa;
					a.g && a.h.configure(a.g.advanced);
					var b = a.chooseVariant();
					b && a.l(b)
				}
			});
			this.i = [];
			this.o = 1;
			this.s = !1;
			this.g = this.m = null
		}
		r = qe.prototype;
		r.stop = function() {
			this.l = null;
			this.j = !1;
			this.i = [];
			this.o = 1;
			this.m = null
		};
		r.init = function(a) {
			this.l = a
		};
		r.chooseVariant = function() {
			var a = re(this.g.restrictions, this.i),
				b = this.h.getBandwidthEstimate(se(this));
			this.i.length && !a.length && (a = re(null, this.i), a = [a[0]]);
			for (var c = a[0] || null, d = 0; d < a.length; d++) {
				for (var e = a[d], f = isNaN(this.o) ? 1 : Math.abs(this.o), g = f * e.bandwidth / this.g.bandwidthDowngradeTarget, h = {
						bandwidth: Infinity
					}, k = d + 1; k < a.length; k++)
					if (e.bandwidth != a[k].bandwidth) {
						h = a[k];
						break
					} f = f * h.bandwidth / this.g.bandwidthUpgradeTarget;
				b >= g && b <= f && c.bandwidth != e.bandwidth && (c = e)
			}
			this.m = Date.now();
			return c
		};
		r.enable = function() {
			this.j = !0
		};
		r.disable = function() {
			this.j = !1
		};
		r.segmentDownloaded = function(a, b) {
			this.h.sample(a, b);
			if (null != this.m && this.j) a: {
				if (!this.s) {
					var c = this.h;
					if (!(c.g >= c.i)) break a;
					this.s = !0
				} else if (Date.now() - this.m < 1E3 * this.g.switchInterval) break a;c = this.chooseVariant();this.h.getBandwidthEstimate(se(this));c && this.l(c)
			}
		};
		r.getBandwidthEstimate = function() {
			return this.h.getBandwidthEstimate(se(this))
		};
		r.setVariants = function(a) {
			this.i = a
		};
		r.playbackRateChanged = function(a) {
			this.o = a
		};
		r.configure = function(a) {
			this.g = a;
			this.h && this.g && this.h.configure(this.g.advanced)
		};

		function se(a) {
			var b = a.g.defaultBandwidthEstimate;
			navigator.connection && navigator.connection.downlink && a.g.useNetworkInformation && (b = 1E6 * navigator.connection.downlink);
			return b
		}

		function re(a, b) {
			a && (b = b.filter(function(c) {
				return Nd(c, a, {
					width: Infinity,
					height: Infinity
				})
			}));
			return b.sort(function(c, d) {
				return c.bandwidth - d.bandwidth
			})
		}
		M("shaka.abr.SimpleAbrManager", qe);
		qe.prototype.configure = qe.prototype.configure;
		qe.prototype.playbackRateChanged = qe.prototype.playbackRateChanged;
		qe.prototype.setVariants = qe.prototype.setVariants;
		qe.prototype.getBandwidthEstimate = qe.prototype.getBandwidthEstimate;
		qe.prototype.segmentDownloaded = qe.prototype.segmentDownloaded;
		qe.prototype.disable = qe.prototype.disable;
		qe.prototype.enable = qe.prototype.enable;
		qe.prototype.chooseVariant = qe.prototype.chooseVariant;
		qe.prototype.init = qe.prototype.init;
		qe.prototype.stop = qe.prototype.stop;

		function te(a, b) {
			this.h = a;
			this.g = new Set([a]);
			b = b || [];
			for (var c = t(b), d = c.next(); !d.done; d = c.next()) this.add(d.value)
		}
		te.prototype.add = function(a) {
			return ue(this.h, a) ? (this.g.add(a), !0) : !1
		};

		function ue(a, b) {
			var c;
			if (!(c = !!a.audio != !!b.audio || !!a.video != !!b.video || a.language != b.language) && (c = a.audio && b.audio)) {
				c = a.audio;
				var d = b.audio;
				c = !((!(!c.channelsCount || !d.channelsCount || 2 < c.channelsCount || 2 < d.channelsCount) || c.channelsCount == d.channelsCount) && ve(c, d) && we(c.roles, d.roles))
			}!c && (c = a.video && b.video) && (c = a.video, d = b.video, c = !(ve(c, d) && we(c.roles, d.roles)));
			return c ? !1 : !0
		}
		te.prototype.values = function() {
			return this.g.values()
		};

		function ve(a, b) {
			if (a.mimeType != b.mimeType) return !1;
			var c = a.codecs.split(",").map(function(f) {
					return bd(f)[0]
				}),
				d = b.codecs.split(",").map(function(f) {
					return bd(f)[0]
				});
			if (c.length != d.length) return !1;
			c.sort();
			d.sort();
			for (var e = 0; e < c.length; e++)
				if (c[e] != d[e]) return !1;
			return !0
		}

		function we(a, b) {
			var c = new Set(a),
				d = new Set(b);
			c["delete"]("main");
			d["delete"]("main");
			if (c.size != d.size) return !1;
			c = t(c);
			for (var e = c.next(); !e.done; e = c.next())
				if (!d.has(e.value)) return !1;
			return !0
		};

		function xe(a) {
			this.g = a;
			this.h = new ye(a.language, "", a.audio && a.audio.channelsCount ? a.audio.channelsCount : 0, "")
		}
		xe.prototype.create = function(a) {
			var b = this,
				c = a.filter(function(d) {
					return ue(b.g, d)
				});
			return c.length ? new te(c[0], c) : this.h.create(a)
		};

		function ye(a, b, c, d) {
			this.i = a;
			this.j = b;
			this.g = c;
			this.h = void 0 === d ? "" : d
		}
		ye.prototype.create = function(a) {
			var b = [];
			b = ze(a, this.i);
			var c = a.filter(function(d) {
				return d.primary
			});
			b = b.length ? b : c.length ? c : a;
			a = Ae(b, this.j);
			a.length && (b = a);
			this.g && (a = Cd(b, this.g), a.length && (b = a));
			this.h && (a = Be(b, this.h), a.length && (b = a));
			a = new te(b[0]);
			b = t(b);
			for (c = b.next(); !c.done; c = b.next()) c = c.value, ue(a.h, c) && a.add(c);
			return a
		};

		function ze(a, b) {
			var c = Q(b),
				d = xd(c, a.map(function(e) {
					return wd(e)
				}));
			return d ? a.filter(function(e) {
				return d == wd(e)
			}) : []
		}

		function Ae(a, b) {
			return a.filter(function(c) {
				return c.audio ? b ? c.audio.roles.includes(b) : 0 == c.audio.roles.length : !1
			})
		}

		function Be(a, b) {
			return a.filter(function(c) {
				return c.audio ? c.audio.label.toLowerCase() == b.toLowerCase() : !1
			})
		};

		function Ce() {
			this.g = De;
			this.h = (new Map).set(De, 2).set(Ee, 1)
		}

		function Fe(a, b, c) {
			a.h.set(De, c).set(Ee, b)
		}
		var Ee = 0,
			De = 1;

		function Ge(a, b) {
			var c = He();
			this.l = null == a.maxAttempts ? c.maxAttempts : a.maxAttempts;
			this.j = null == a.baseDelay ? c.baseDelay : a.baseDelay;
			this.o = null == a.fuzzFactor ? c.fuzzFactor : a.fuzzFactor;
			this.m = null == a.backoffFactor ? c.backoffFactor : a.backoffFactor;
			this.g = 0;
			this.h = this.j;
			if (this.i = void 0 === b ? !1 : b) this.g = 1
		}

		function Ie(a) {
			var b, c;
			return K(function(d) {
				if (1 == d.g) {
					if (a.g >= a.l)
						if (a.i) a.g = 1, a.h = a.j;
						else throw new N(2, 7, 1010);
					b = a.g;
					a.g++;
					if (0 == b) return d["return"]();
					c = a.h * (1 + (2 * Math.random() - 1) * a.o);
					return u(d, new Promise(function(e) {
						(new O(e)).S(c / 1E3)
					}), 2)
				}
				a.h *= a.m;
				z(d)
			})
		}

		function He() {
			return {
				maxAttempts: 2,
				baseDelay: 1E3,
				backoffFactor: 2,
				fuzzFactor: .5,
				timeout: 3E4,
				stallTimeout: 5E3,
				connectionTimeout: 1E4
			}
		};

		function Je(a, b) {
			this.promise = a;
			this.i = b;
			this.g = !1
		}

		function Ke(a) {
			return new Je(Promise.reject(a), function() {
				return Promise.resolve()
			})
		}

		function Le() {
			var a = Promise.reject(new N(2, 7, 7001));
			a["catch"](function() {});
			return new Je(a, function() {
				return Promise.resolve()
			})
		}

		function Me(a) {
			return new Je(Promise.resolve(a), function() {
				return Promise.resolve()
			})
		}

		function Ne(a) {
			return new Je(a, function() {
				return a["catch"](function() {})
			})
		}
		Je.prototype.abort = function() {
			this.g = !0;
			return this.i()
		};

		function Oe(a) {
			return new Je(Promise.all(a.map(function(b) {
				return b.promise
			})), function() {
				return Promise.all(a.map(function(b) {
					return b.abort()
				}))
			})
		}
		Je.prototype["finally"] = function(a) {
			this.promise.then(function() {
				return a(!0)
			}, function() {
				return a(!1)
			});
			return this
		};
		Je.prototype.Z = function(a, b) {
			function c(h) {
				return function(k) {
					if (e.g && h) f.reject(g);
					else {
						var l = h ? a : b;
						l ? d = Pe(l, k, f) : (h ? f.resolve : f.reject)(k)
					}
				}
			}

			function d() {
				f.reject(g);
				return e.abort()
			}
			var e = this,
				f = new nc,
				g = new N(2, 7, 7001);
			this.promise.then(c(!0), c(!1));
			return new Je(f, function() {
				return d()
			})
		};

		function Pe(a, b, c) {
			try {
				var d = a(b);
				if (d && d.promise && d.abort) return c.resolve(d.promise),
					function() {
						return d.abort()
					};
				c.resolve(d);
				return function() {
					return Promise.resolve(d).then(function() {}, function() {})
				}
			} catch (e) {
				return c.reject(e),
					function() {
						return Promise.resolve()
					}
			}
		}
		M("shaka.util.AbortableOperation", Je);
		Je.prototype.chain = Je.prototype.Z;
		Je.prototype["finally"] = Je.prototype["finally"];
		Je.all = Oe;
		Je.prototype.abort = Je.prototype.abort;
		Je.notAbortable = Ne;
		Je.completed = Me;
		Je.aborted = Le;
		Je.failed = Ke;

		function R(a, b) {
			if (b)
				if (b instanceof Map)
					for (var c = t(b.keys()), d = c.next(); !d.done; d = c.next()) d = d.value, Object.defineProperty(this, d, {
						value: b.get(d),
						writable: !0,
						enumerable: !0
					});
				else
					for (c in b) Object.defineProperty(this, c, {
						value: b[c],
						writable: !0,
						enumerable: !0
					});
			this.defaultPrevented = this.cancelable = this.bubbles = !1;
			this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
			this.type = a;
			this.isTrusted = !1;
			this.target = this.currentTarget = null;
			this.g = !1
		}

		function Qe(a) {
			var b = new R(a.type),
				c;
			for (c in a) Object.defineProperty(b, c, {
				value: a[c],
				writable: !0,
				enumerable: !0
			});
			return b
		}
		R.prototype.preventDefault = function() {
			this.cancelable && (this.defaultPrevented = !0)
		};
		R.prototype.stopImmediatePropagation = function() {
			this.g = !0
		};
		R.prototype.stopPropagation = function() {};
		M("shaka.util.FakeEvent", R);
		var Re = {
			pg: "abrstatuschanged",
			qg: "adaptation",
			rg: "buffering",
			tg: "downloadfailed",
			ug: "downloadheadersreceived",
			vg: "drmsessionupdate",
			xg: "emsg",
			Error: "error",
			yg: "expirationupdated",
			zg: "gapjumped",
			Bg: "loaded",
			Cg: "loading",
			Eg: "manifestparsed",
			Fg: "mediaqualitychanged",
			Metadata: "metadata",
			Hg: "onstatechange",
			Ig: "onstateidle",
			Jg: "ratechange",
			Lg: "sessiondata",
			Mg: "stalldetected",
			Ng: "streaming",
			Og: "textchanged",
			Pg: "texttrackvisibility",
			Qg: "timelineregionadded",
			Rg: "timelineregionenter",
			Sg: "timelineregionexit",
			Tg: "trackschanged",
			Vg: "unloading",
			Wg: "variantchanged"
		};

		function Se() {
			this.da = new yd;
			this.Ic = this
		}
		Se.prototype.addEventListener = function(a, b) {
			this.da && this.da.push(a, b)
		};
		Se.prototype.removeEventListener = function(a, b) {
			this.da && this.da.remove(a, b)
		};
		Se.prototype.dispatchEvent = function(a) {
			if (!this.da) return !0;
			var b = this.da.get(a.type) || [],
				c = this.da.get("All");
			c && (b = b.concat(c));
			b = t(b);
			for (c = b.next(); !c.done; c = b.next()) {
				c = c.value;
				a.target = this.Ic;
				a.currentTarget = this.Ic;
				try {
					c.handleEvent ? c.handleEvent(a) : c.call(this, a)
				} catch (d) {}
				if (a.g) break
			}
			return a.defaultPrevented
		};
		Se.prototype.release = function() {
			this.da = null
		};

		function Te(a) {
			function b(d) {
				switch (typeof d) {
					case "undefined":
					case "boolean":
					case "number":
					case "string":
					case "symbol":
					case "function":
						return d;
					default:
						if (!d || d.buffer && d.buffer.constructor == ArrayBuffer) return d;
						if (c.has(d)) return null;
						var e = d.constructor == Array;
						if (d.constructor != Object && !e) return null;
						c.add(d);
						var f = e ? [] : {},
							g;
						for (g in d) f[g] = b(d[g]);
						e && (f.length = d.length);
						return f
				}
			}
			var c = new Set;
			return b(a)
		}

		function Ue(a) {
			var b = {},
				c;
			for (c in a) b[c] = a[c];
			return b
		};

		function Ve() {
			this.g = []
		}

		function We(a, b) {
			a.g.push(b["finally"](function() {
				eb(a.g, b)
			}))
		}
		Ve.prototype.destroy = function() {
			for (var a = [], b = t(this.g), c = b.next(); !c.done; c = b.next()) c = c.value, c.promise["catch"](function() {}), a.push(c.abort());
			this.g = [];
			return Promise.all(a)
		};

		function Xe(a, b, c) {
			Se.call(this);
			this.i = !1;
			this.m = new Ve;
			this.g = new Set;
			this.h = new Set;
			this.l = a || null;
			this.j = b || null;
			this.s = c || null;
			this.o = !1
		}
		pa(Xe, Se);
		r = Xe.prototype;
		r.Yd = function(a) {
			this.o = a
		};

		function Ye(a, b, c, d) {
			c = c || Ze;
			var e = $e[a];
			if (!e || c >= e.priority) $e[a] = {
				priority: c,
				Qf: b,
				Rf: void 0 === d ? !1 : d
			}
		}
		r.Sf = function(a) {
			this.g.add(a)
		};
		r.ig = function(a) {
			this.g["delete"](a)
		};
		r.$e = function() {
			this.g.clear()
		};
		r.Tf = function(a) {
			this.h.add(a)
		};
		r.jg = function(a) {
			this.h["delete"](a)
		};
		r.af = function() {
			this.h.clear()
		};

		function af(a, b, c) {
			return {
				uris: a,
				method: "GET",
				body: null,
				headers: {},
				allowCrossSiteCredentials: !1,
				retryParameters: b,
				licenseRequestType: null,
				sessionId: null,
				drmInfo: null,
				initData: null,
				initDataType: null,
				streamDataCallback: void 0 === c ? null : c
			}
		}
		r.destroy = function() {
			this.i = !0;
			this.g.clear();
			this.h.clear();
			Se.prototype.release.call(this);
			return this.m.destroy()
		};
		r.request = function(a, b) {
			var c = this,
				d = new bf;
			if (this.i) {
				var e = Promise.reject(new N(2, 7, 7001));
				e["catch"](function() {});
				return new cf(e, function() {
					return Promise.resolve()
				}, d)
			}
			b.method = b.method || "GET";
			b.headers = b.headers || {};
			b.retryParameters = b.retryParameters ? Te(b.retryParameters) : He();
			b.uris = Te(b.uris);
			e = df(this, a, b);
			var f = e.Z(function() {
					return ef(c, a, b, new Ge(b.retryParameters, !1), 0, null, d)
				}),
				g = f.Z(function(p) {
					return ff(c, a, p)
				}),
				h = Date.now(),
				k = 0;
			e.promise.then(function() {
				k = Date.now() - h
			}, function() {});
			var l = 0;
			f.promise.then(function() {
				l = Date.now()
			}, function() {});
			var m = g.Z(function(p) {
				var n = Date.now() - l,
					q = p.response;
				q.timeMs += k;
				q.timeMs += n;
				p.Ff || !c.l || q.fromCache || a != gf || c.l(q.timeMs, q.data.byteLength);
				return q
			}, function(p) {
				p && (p.severity = 2);
				throw p;
			});
			e = new cf(m.promise, function() {
				return m.abort()
			}, d);
			We(this.m, e);
			return e
		};

		function df(a, b, c) {
			var d = Me(void 0),
				e = {};
			a = t(a.g);
			for (var f = a.next(); !f.done; e = {
					nd: e.nd
				}, f = a.next()) e.nd = f.value, d = d.Z(function(g) {
				return function() {
					c.body && (c.body = Gb(c.body));
					return g.nd(b, c)
				}
			}(e));
			return d.Z(void 0, function(g) {
				if (g instanceof N && 7001 == g.code) throw g;
				throw new N(2, 1, 1006, g);
			})
		}

		function ef(a, b, c, d, e, f, g) {
			a.o && (c.uris[e] = c.uris[e].replace("http://", "https://"));
			var h = new Nb(c.uris[e]),
				k = h.Ea,
				l = !1;
			k || (k = location.protocol, k = k.slice(0, -1), Ob(h, k), c.uris[e] = h.toString());
			k = k.toLowerCase();
			var m = (k = $e[k]) ? k.Qf : null;
			if (!m) return Ke(new N(2, 1, 1E3, h));
			var p = k.Rf,
				n = null,
				q = null,
				w = !1,
				y = !1,
				x;
			return Ne(Ie(d)).Z(function() {
				if (a.i) return Le();
				x = Date.now();
				var v = m(c.uris[e], c, b, function(A, G, E) {
					n && n.stop();
					q && q.S(C / 1E3);
					a.l && b == gf && (a.l(A, G), l = !0, g.g = E)
				}, function(A) {
					a.j && a.j(A, c, b);
					y = !0
				});
				if (!p) return v;
				var D = c.retryParameters.connectionTimeout;
				D && (n = new O(function() {
					w = !0;
					v.abort()
				}), n.S(D / 1E3));
				var C = c.retryParameters.stallTimeout;
				C && (q = new O(function() {
					w = !0;
					v.abort()
				}));
				return v
			}).Z(function(v) {
				n && n.stop();
				q && q.stop();
				void 0 == v.timeMs && (v.timeMs = Date.now() - x);
				var D = {
					response: v,
					Ff: l
				};
				!y && a.j && a.j(v.headers, c, b);
				return D
			}, function(v) {
				n && n.stop();
				q && q.stop();
				if (a.s) {
					var D = null,
						C = 0;
					v instanceof N && (D = v, 1001 == v.code && (C = v.data[1]));
					a.s(c, D, C, w)
				}
				if (a.i) return Le();
				w && (v = new N(1, 1, 1003,
					c.uris[e], b));
				if (v instanceof N) {
					if (7001 == v.code) throw v;
					if (1010 == v.code) throw f;
					if (1 == v.severity) return D = (new Map).set("error", v), D = new R("retry", D), a.dispatchEvent(D), e = (e + 1) % c.uris.length, ef(a, b, c, d, e, v, g)
				}
				throw v;
			})
		}

		function ff(a, b, c) {
			var d = Me(void 0),
				e = {};
			a = t(a.h);
			for (var f = a.next(); !f.done; e = {
					od: e.od
				}, f = a.next()) e.od = f.value, d = d.Z(function(g) {
				return function() {
					var h = c.response;
					h.data && (h.data = Gb(h.data));
					return g.od(b, h)
				}
			}(e));
			return d.Z(function() {
				return c
			}, function(g) {
				var h = 2;
				if (g instanceof N) {
					if (7001 == g.code) throw g;
					h = g.severity
				}
				throw new N(h, 1, 1007, g);
			})
		}
		M("shaka.net.NetworkingEngine", Xe);
		Xe.prototype.request = Xe.prototype.request;
		Xe.prototype.destroy = Xe.prototype.destroy;
		Xe.makeRequest = af;
		Xe.defaultRetryParameters = function() {
			return He()
		};
		Xe.prototype.clearAllResponseFilters = Xe.prototype.af;
		Xe.prototype.unregisterResponseFilter = Xe.prototype.jg;
		Xe.prototype.registerResponseFilter = Xe.prototype.Tf;
		Xe.prototype.clearAllRequestFilters = Xe.prototype.$e;
		Xe.prototype.unregisterRequestFilter = Xe.prototype.ig;
		Xe.prototype.registerRequestFilter = Xe.prototype.Sf;
		Xe.unregisterScheme = function(a) {
			delete $e[a]
		};
		Xe.registerScheme = Ye;
		Xe.prototype.setForceHTTPS = Xe.prototype.Yd;

		function bf() {
			this.g = 0
		}
		Xe.NumBytesRemainingClass = bf;

		function cf(a, b, c) {
			Je.call(this, a, b);
			this.h = c
		}
		pa(cf, Je);
		Xe.PendingRequest = cf;
		var gf = 1;
		Xe.RequestType = {
			MANIFEST: 0,
			SEGMENT: gf,
			LICENSE: 2,
			APP: 3,
			TIMING: 4,
			SERVER_CERTIFICATE: 5
		};
		var Ze = 3;
		Xe.PluginPriority = {
			FALLBACK: 1,
			PREFERRED: 2,
			APPLICATION: Ze
		};
		var $e = {};

		function hf(a) {
			this.g = !1;
			this.h = new nc;
			this.i = a
		}
		hf.prototype.destroy = function() {
			var a = this;
			if (this.g) return this.h;
			this.g = !0;
			return this.i().then(function() {
				a.h.resolve()
			}, function() {
				a.h.resolve()
			})
		};

		function jf(a, b) {
			if (a.g) {
				if (b instanceof N && 7003 == b.code) throw b;
				throw new N(2, 7, 7003, b);
			}
		};

		function kf() {
			this.g = new yd
		}
		r = kf.prototype;
		r.release = function() {
			this.oc();
			this.g = null
		};
		r.B = function(a, b, c, d) {
			this.g && (a = new lf(a, b, c, d), this.g.push(b, a))
		};
		r.oa = function(a, b, c, d) {
			function e(g) {
				f.uc(a, b, e);
				c(g)
			}
			var f = this;
			this.B(a, b, e, d)
		};
		r.uc = function(a, b, c) {
			if (this.g) {
				var d = this.g.get(b) || [];
				d = t(d);
				for (var e = d.next(); !e.done; e = d.next()) e = e.value, e.target != a || c != e.listener && c || (e.uc(), this.g.remove(b, e))
			}
		};
		r.oc = function() {
			if (this.g) {
				var a = this.g,
					b = [],
					c;
				for (c in a.g) b.push.apply(b, ia(a.g[c]));
				a = t(b);
				for (b = a.next(); !b.done; b = a.next()) b.value.uc();
				this.g.g = {}
			}
		};
		M("shaka.util.EventManager", kf);
		kf.prototype.removeAll = kf.prototype.oc;
		kf.prototype.unlisten = kf.prototype.uc;
		kf.prototype.listenOnce = kf.prototype.oa;
		kf.prototype.listen = kf.prototype.B;
		kf.prototype.release = kf.prototype.release;

		function lf(a, b, c, d) {
			this.target = a;
			this.type = b;
			this.listener = c;
			this.g = mf(a, d);
			this.target.addEventListener(b, c, this.g)
		}
		lf.prototype.uc = function() {
			this.target.removeEventListener(this.type, this.listener, this.g);
			this.listener = this.target = null;
			this.g = !1
		};

		function mf(a, b) {
			if (void 0 == b) return !1;
			if ("boolean" == typeof b) return b;
			var c = new Set(["passive", "capture"]);
			Object.keys(b).filter(function(d) {
				return !c.has(d)
			});
			return nf(a) ? b : b.capture || !1
		}

		function nf(a) {
			var b = of ;
			if (void 0 == b) {
				b = !1;
				try {
					var c = {},
						d = {
							get: function() {
								b = !0;
								return !1
							}
						};
					Object.defineProperty(c, "passive", d);
					Object.defineProperty(c, "capture", d);
					d = function() {};
					a.addEventListener("test", d, c);
					a.removeEventListener("test", d, c)
				} catch (e) {
					b = !1
				} of = b
			}
			return b || !1
		}
		var of = void 0;

		function pf(a, b) {
			for (var c = [], d = t(a), e = d.next(); !e.done; e = d.next()) c.push(b(e.value));
			return c
		}

		function qf(a, b) {
			for (var c = t(a), d = c.next(); !d.done; d = c.next())
				if (!b(d.value)) return !1;
			return !0
		};

		function rf(a) {
			for (var b = new Map, c = t(Object.keys(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b.set(d, a[d]);
			return b
		}

		function sf(a) {
			var b = {};
			a.forEach(function(c, d) {
				b[d] = c
			});
			return b
		}

		function tf(a, b) {
			if (a || b) {
				if (a && !b || b && !a) return !1
			} else return !0;
			if (a.size != b.size) return !1;
			for (var c = t(a), d = c.next(); !d.done; d = c.next()) {
				var e = t(d.value);
				d = e.next().value;
				e = e.next().value;
				if (!b.has(d)) return !1;
				d = b.get(d);
				if (d != e || void 0 == d) return !1
			}
			return !0
		};

		function uf(a, b) {
			var c = this;
			b = void 0 === b ? 1 : b;
			this.D = a;
			this.G = new Set;
			this.l = this.s = null;
			this.ha = this.ca = !1;
			this.I = 0;
			this.g = null;
			this.o = new kf;
			this.i = new Map;
			this.C = [];
			this.u = new nc;
			this.h = null;
			this.m = function(d) {
				c.u.reject(d);
				a.onError(d)
			};
			this.ia = new Map;
			this.da = new Map;
			this.T = new O(function() {
				return vf(c)
			});
			this.M = !1;
			this.L = [];
			this.O = !1;
			this.ea = (new O(function() {
				wf(c)
			})).Ca(b);
			this.u["catch"](function() {});
			this.j = new hf(function() {
				return xf(c)
			});
			this.Y = !1;
			this.F = null
		}
		r = uf.prototype;
		r.destroy = function() {
			return this.j.destroy()
		};

		function xf(a) {
			return K(function(b) {
				switch (b.g) {
					case 1:
						return a.o.release(), a.o = null, a.u.reject(), a.ea.stop(), a.ea = null, a.T.stop(), a.T = null, u(b, yf(a), 2);
					case 2:
						if (!a.l) {
							b.A(3);
							break
						}
						B(b, 4);
						return u(b, a.l.setMediaKeys(null), 6);
					case 6:
						va(b, 5);
						break;
					case 4:
						F(b);
					case 5:
						a.l = null;
					case 3:
						a.g = null, a.G.clear(), a.s = null, a.C = [], a.h = null, a.m = function() {}, a.D = null, a.Y = !1, a.F = null, z(b)
				}
			})
		}
		r.configure = function(a) {
			this.h = a
		};

		function zf(a, b, c) {
			a.ha = !0;
			a.C = [];
			a.M = c;
			return Af(a, b)
		}

		function Bf(a, b, c) {
			a.C = c;
			a.M = 0 < c.length;
			return Af(a, b)
		}

		function Cf(a, b, c, d, e, f) {
			var g = new Map;
			e = {
				audioCapabilities: e,
				videoCapabilities: f,
				distinctiveIdentifier: "optional",
				persistentState: "required",
				sessionTypes: ["persistent-license"],
				label: b
			};
			e.drmInfos = [{
				keySystem: b,
				licenseServerUri: c,
				distinctiveIdentifierRequired: !1,
				persistentStateRequired: !0,
				audioRobustness: "",
				videoRobustness: "",
				serverCertificate: d,
				serverCertificateUri: "",
				initData: null,
				keyIds: null
			}];
			g.set(b, e);
			return Df(a, g, [])
		}

		function Af(a, b) {
			var c, d, e, f, g, h, k, l, m, p, n, q, w, y;
			return K(function(x) {
				if (1 == x.g) {
					if (c = Gf(a))
						for (d = t(b), e = d.next(); !e.done; e = d.next()) f = e.value, f.video && (f.video.drmInfos = [c]), f.audio && (f.audio.drmInfos = [c]);
					g = b.some(function(v) {
						return v.video && v.video.drmInfos.length || v.audio && v.audio.drmInfos.length ? !0 : !1
					});
					g || (h = rf(a.h.servers), Hf(b, h));
					k = t(b);
					for (e = k.next(); !e.done; e = k.next())
						for (l = e.value, m = If(l), p = t(m), n = p.next(); !n.done; n = p.next()) q = n.value, Jf(q, rf(a.h.servers), rf(a.h.advanced || {}), a.h.keySystemsMapping);
					return u(x, Ud(b, a.M, a.Y), 2)
				}
				w = g || Object.keys(a.h.servers).length;
				if (!w) return a.ca = !0, x["return"](Promise.resolve());
				y = Df(a, void 0, b);
				return x["return"](g ? y : y["catch"](function() {}))
			})
		}

		function Kf(a) {
			var b;
			return K(function(c) {
				switch (c.g) {
					case 1:
						if (a.l.mediaKeys) return c["return"]();
						if (!a.F) {
							c.A(2);
							break
						}
						return u(c, a.F, 3);
					case 3:
						return c["return"]();
					case 2:
						return B(c, 4), a.F = a.l.setMediaKeys(a.s), u(c, a.F, 6);
					case 6:
						va(c, 5);
						break;
					case 4:
						b = F(c), a.m(new N(2, 6, 6003, b.message));
					case 5:
						jf(a.j), z(c)
				}
			})
		}

		function Lf(a, b) {
			return K(function(c) {
				if (1 == c.g) return u(c, Kf(a), 2);
				Mf(a, b.initDataType, Fb(b.initData));
				z(c)
			})
		}
		r.Wb = function(a) {
			var b = this,
				c;
			return K(function(d) {
				if (1 == d.g) {
					if (!b.s) return b.o.oa(a, "encrypted", function() {
						b.m(new N(2, 6, 6010))
					}), d["return"]();
					b.l = a;
					b.o.oa(b.l, "play", function() {
						for (var e = t(b.L), f = e.next(); !f.done; f = e.next()) Nf(b, f.value);
						b.O = !0;
						b.L = []
					});
					"webkitCurrentPlaybackTargetIsWireless" in b.l && b.o.B(b.l, "webkitcurrentplaybacktargetiswirelesschanged", function() {
						return yf(b)
					});
					return (c = b.g.initData.find(function(e) {
						return 0 < e.initData.length
					})) || window.shakaMediaKeysPolyfill || b.C.length ? u(d,
						Kf(b), 2) : d.A(2)
				}
				Of(b);
				c || b.C.length || b.o.B(b.l, "encrypted", function(e) {
					return Lf(b, e)
				});
				z(d)
			})
		};

		function Pf(a) {
			var b, c, d, e, f;
			return K(function(g) {
				switch (g.g) {
					case 1:
						if (!a.s || !a.g) return g["return"]();
						if (!a.g.serverCertificateUri || a.g.serverCertificate && a.g.serverCertificate.length) {
							g.A(2);
							break
						}
						b = af([a.g.serverCertificateUri], a.h.retryParameters);
						B(g, 3);
						c = a.D.kb.request(5, b);
						return u(g, c.promise, 5);
					case 5:
						d = g.h;
						a.g.serverCertificate = Fb(d.data);
						va(g, 4);
						break;
					case 3:
						throw e = F(g), new N(2, 6, 6017, e);
					case 4:
						if (a.j.g) return g["return"]();
					case 2:
						if (!a.g.serverCertificate || !a.g.serverCertificate.length) return g["return"]();
						B(g, 6);
						return u(g, a.s.setServerCertificate(a.g.serverCertificate), 8);
					case 8:
						va(g, 0);
						break;
					case 6:
						throw f = F(g), new N(2, 6, 6004, f.message);
				}
			})
		}

		function Qf(a, b) {
			var c, d, e;
			return K(function(f) {
				if (1 == f.g) return u(f, Rf(a, b), 2);
				if (3 != f.g) {
					c = f.h;
					if (!c) return f["return"]();
					d = [];
					if (e = a.i.get(c)) e.Ja = new nc, d.push(e.Ja);
					d.push(c.remove());
					return u(f, Promise.all(d), 3)
				}
				a.i["delete"](c);
				z(f)
			})
		}

		function Of(a) {
			for (var b = (a.g ? a.g.initData : []) || [], c = t(b), d = c.next(); !d.done; d = c.next()) d = d.value, Mf(a, d.initDataType, d.initData);
			c = t(a.C);
			for (d = c.next(); !d.done; d = c.next()) Rf(a, d.value);
			b.length || a.C.length || a.u.resolve();
			return a.u
		}

		function Mf(a, b, c) {
			if (c.length) {
				var d = a.i.values();
				d = t(d);
				for (var e = d.next(); !e.done; e = d.next())
					if (Db(c, e.value.initData) && !uc("Tizen 2")) return;
				Sf(a, b, c, a.g.sessionType)
			}
		}

		function Tf(a) {
			return a ? !!a.match(/^com\.(microsoft|chromecast)\.playready/) : !1
		}

		function Uf(a) {
			a = a.i.keys();
			a = pf(a, function(b) {
				return b.sessionId
			});
			return Array.from(a)
		}
		r.cc = function() {
			var a = Infinity,
				b = this.i.keys();
			b = t(b);
			for (var c = b.next(); !c.done; c = b.next()) c = c.value, isNaN(c.expiration) || (a = Math.min(a, c.expiration));
			return a
		};
		r.Kc = function() {
			return sf(this.da)
		};

		function Df(a, b, c) {
			var d, e, f, g, h, k, l, m, p, n, q, w, y;
			return K(function(x) {
				switch (x.g) {
					case 1:
						d = new Map;
						if (c.length) {
							e = Vf(a, c, d);
							x.A(2);
							break
						}
						return u(x, Wf(a, b), 3);
					case 3:
						e = x.h;
					case 2:
						f = e;
						if (!f) throw new N(2, 6, 6001);
						jf(a.j);
						B(x, 4);
						a.G.clear();
						g = f.getConfiguration();
						h = g.audioCapabilities || [];
						k = g.videoCapabilities || [];
						l = t(h);
						for (m = l.next(); !m.done; m = l.next()) p = m.value, a.G.add(p.contentType.toLowerCase());
						n = t(k);
						for (m = n.next(); !m.done; m = n.next()) q = m.value, a.G.add(q.contentType.toLowerCase());
						if (c.length) {
							var v =
								f.keySystem;
							var D = d.get(f.keySystem);
							var C = [],
								A = [],
								G = [],
								E = [],
								H = new Set;
							Xf(D, C, G, A, E, H);
							var L = a.M ? "persistent-license" : "temporary";
							v = {
								keySystem: v,
								licenseServerUri: C[0],
								distinctiveIdentifierRequired: D[0].distinctiveIdentifierRequired,
								persistentStateRequired: D[0].persistentStateRequired,
								sessionType: D[0].sessionType || L,
								audioRobustness: D[0].audioRobustness || "",
								videoRobustness: D[0].videoRobustness || "",
								serverCertificate: G[0],
								serverCertificateUri: A[0],
								initData: E,
								keyIds: H
							};
							D = t(D);
							for (C = D.next(); !C.done; C =
								D.next()) C = C.value, C.distinctiveIdentifierRequired && (v.distinctiveIdentifierRequired = C.distinctiveIdentifierRequired), C.persistentStateRequired && (v.persistentStateRequired = C.persistentStateRequired);
							D = v
						} else D = f.keySystem, v = b.get(f.keySystem), C = [], A = [], G = [], E = [], H = new Set, Xf(v.drmInfos, C, G, A, E, H), D = {
							keySystem: D,
							licenseServerUri: C[0],
							distinctiveIdentifierRequired: "required" == v.distinctiveIdentifier,
							persistentStateRequired: "required" == v.persistentState,
							sessionType: v.sessionTypes[0] || "temporary",
							audioRobustness: (v.audioCapabilities ?
								v.audioCapabilities[0].robustness : "") || "",
							videoRobustness: (v.videoCapabilities ? v.videoCapabilities[0].robustness : "") || "",
							serverCertificate: G[0],
							serverCertificateUri: A[0],
							initData: E,
							keyIds: H
						};
						a.g = D;
						if (!a.g.licenseServerUri) throw new N(2, 6, 6012, a.g.keySystem);
						return u(x, f.createMediaKeys(), 6);
					case 6:
						return w = x.h, jf(a.j), a.s = w, a.ca = !0, u(x, Pf(a), 7);
					case 7:
						jf(a.j);
						va(x, 0);
						break;
					case 4:
						y = F(x);
						jf(a.j, y);
						a.g = null;
						a.G.clear();
						if (y instanceof N) throw y;
						throw new N(2, 6, 6002, y.message);
				}
			})
		}

		function Vf(a, b, c) {
			for (var d = t(b), e = d.next(); !e.done; e = d.next()) {
				var f = t(If(e.value));
				for (e = f.next(); !e.done; e = f.next()) e = e.value, c.has(e.keySystem) || c.set(e.keySystem, []), c.get(e.keySystem).push(e)
			}
			if (1 == c.size && c.has("")) throw new N(2, 6, 6E3);
			d = {};
			a = t(a.h.preferredKeySystems);
			for (e = a.next(); !e.done; d = {
					ld: d.ld
				}, e = a.next())
				for (d.ld = e.value, f = t(b), e = f.next(); !e.done; e = f.next())
					if (e = e.value.decodingInfos.find(function(l) {
							return function(m) {
								return m.supported && null != m.keySystemAccess && m.keySystemAccess.keySystem ==
									l.ld
							}
						}(d))) return e.keySystemAccess;
			a = t([!0, !1]);
			for (e = a.next(); !e.done; e = a.next())
				for (d = e.value, f = t(b), e = f.next(); !e.done; e = f.next()) {
					var g = t(e.value.decodingInfos);
					for (e = g.next(); !e.done; e = g.next()) {
						var h = e.value;
						if (h.supported && h.keySystemAccess) {
							e = c.get(h.keySystemAccess.keySystem);
							var k = t(e);
							for (e = k.next(); !e.done; e = k.next())
								if (!!e.value.licenseServerUri == d) return h.keySystemAccess
						}
					}
				}
			return null
		}

		function Wf(a, b) {
			var c, d, e, f, g, h, k, l, m, p, n, q, w, y, x;
			return K(function(v) {
				switch (v.g) {
					case 1:
						if (1 == b.size && b.has("")) throw new N(2, 6, 6E3);
						d = t(b.values());
						for (e = d.next(); !e.done; e = d.next()) f = e.value, 0 == f.audioCapabilities.length && delete f.audioCapabilities, 0 == f.videoCapabilities.length && delete f.videoCapabilities;
						g = t(a.h.preferredKeySystems);
						h = g.next();
					case 2:
						if (h.done) {
							v.A(4);
							break
						}
						k = h.value;
						if (!b.has(k)) {
							v.A(3);
							break
						}
						l = b.get(k);
						B(v, 6);
						return u(v, navigator.requestMediaKeySystemAccess(k, [l]), 8);
					case 8:
						return c =
							v.h, v["return"](c);
					case 6:
						F(v);
					case 7:
						jf(a.j);
					case 3:
						h = g.next();
						v.A(2);
						break;
					case 4:
						m = t([!0, !1]), p = m.next();
					case 9:
						if (p.done) {
							v.A(11);
							break
						}
						n = p.value;
						q = t(b.keys());
						h = q.next();
					case 12:
						if (h.done) {
							p = m.next();
							v.A(9);
							break
						}
						w = h.value;
						y = b.get(w);
						x = y.drmInfos.some(function(D) {
							return !!D.licenseServerUri
						});
						if (x != n) {
							v.A(13);
							break
						}
						B(v, 15);
						return u(v, navigator.requestMediaKeySystemAccess(w, [y]), 17);
					case 17:
						return c = v.h, v["return"](c);
					case 15:
						F(v);
					case 16:
						jf(a.j);
					case 13:
						h = q.next();
						v.A(12);
						break;
					case 11:
						return v["return"](c)
				}
			})
		}

		function Gf(a) {
			a = rf(a.h.clearKeys);
			if (0 == a.size) return null;
			var b = [],
				c = [];
			a.forEach(function(e, f) {
				var g = Qc(f),
					h = Qc(e);
				g = {
					kty: "oct",
					kid: Oc(g, !1),
					k: Oc(h, !1)
				};
				b.push(g);
				c.push(g.kid)
			});
			a = JSON.stringify({
				keys: b
			});
			var d = JSON.stringify({
				kids: c
			});
			d = [{
				initData: Fb(Jc(d)),
				initDataType: "keyids"
			}];
			return {
				keySystem: "org.w3.clearkey",
				licenseServerUri: "data:application/json;base64," + window.btoa(a),
				distinctiveIdentifierRequired: !1,
				persistentStateRequired: !1,
				audioRobustness: "",
				videoRobustness: "",
				serverCertificate: null,
				serverCertificateUri: "",
				sessionType: "",
				initData: d,
				keyIds: new Set(c)
			}
		}

		function Rf(a, b) {
			var c, d, e, f, g;
			return K(function(h) {
				switch (h.g) {
					case 1:
						try {
							c = a.s.createSession("persistent-license")
						} catch (k) {
							return d = new N(2, 6, 6005, k.message), a.m(d), h["return"](Promise.reject(d))
						}
						a.o.B(c, "message", function(k) {
							a.l && a.h.delayLicenseRequestUntilPlayed && a.l.paused && !a.O ? a.L.push(k) : Nf(a, k)
						});
						a.o.B(c, "keystatuseschange", function(k) {
							return Yf(a, k)
						});
						e = {
							initData: null,
							initDataType: null,
							loaded: !1,
							Md: Infinity,
							Ja: null,
							type: "persistent-license"
						};
						a.i.set(c, e);
						B(h, 2);
						return u(h, c.load(b), 4);
					case 4:
						f = h.h;
						jf(a.j);
						if (!f) return a.i["delete"](c), a.m(new N(2, 6, 6013)), h["return"](Promise.resolve());
						e.loaded = !0;
						Zf(a) && a.u.resolve();
						return h["return"](c);
					case 2:
						g = F(h), jf(a.j, g), a.i["delete"](c), a.m(new N(2, 6, 6005, g.message));
					case 3:
						return h["return"](Promise.resolve())
				}
			})
		}

		function Sf(a, b, c, d) {
			try {
				var e = a.s.createSession(d)
			} catch (f) {
				a.m(new N(2, 6, 6005, f.message));
				return
			}
			a.o.B(e, "message", function(f) {
				a.l && a.h.delayLicenseRequestUntilPlayed && a.l.paused && !a.O ? a.L.push(f) : Nf(a, f)
			});
			a.o.B(e, "keystatuseschange", function(f) {
				return Yf(a, f)
			});
			a.i.set(e, {
				initData: c,
				initDataType: b,
				loaded: !1,
				Md: Infinity,
				Ja: null,
				type: d
			});
			try {
				c = a.h.initDataTransform(c, b, a.g)
			} catch (f) {
				b = f;
				f instanceof N || (b = new N(2, 6, 6016, f));
				a.m(b);
				return
			}
			a.h.logLicenseExchange && Oc(c);
			e.generateRequest(b, c)["catch"](function(f) {
				if (!a.j.g) {
					a.i["delete"](e);
					var g = f.errorCode;
					if (g && g.systemCode) {
						var h = g.systemCode;
						0 > h && (h += Math.pow(2, 32));
						h = "0x" + h.toString(16)
					}
					a.m(new N(2, 6, 6006, f.message, f, h))
				}
			})
		}

		function Nf(a, b) {
			var c, d, e, f, g, h, k, l, m, p, n, q, w, y;
			K(function(x) {
				switch (x.g) {
					case 1:
						return c = b.target, a.h.logLicenseExchange && Oc(b.message), d = a.i.get(c), e = a.g.licenseServerUri, f = a.h.advanced[a.g.keySystem], "individualization-request" == b.messageType && f && f.individualizationServer && (e = f.individualizationServer), g = af([e], a.h.retryParameters), g.body = b.message, g.method = "POST", g.licenseRequestType = b.messageType, g.sessionId = c.sessionId, g.drmInfo = a.g, d && (g.initData = d.initData, g.initDataType = d.initDataType),
							Tf(a.g.keySystem) && $f(g), h = Date.now(), B(x, 2), l = a.D.kb.request(2, g), u(x, l.promise, 4);
					case 4:
						k = x.h;
						va(x, 3);
						break;
					case 2:
						return m = F(x), p = new N(2, 6, 6007, m), a.m(p), d && d.Ja && d.Ja.reject(p), x["return"]();
					case 3:
						if (a.j.g) return x["return"]();
						a.I += (Date.now() - h) / 1E3;
						a.h.logLicenseExchange && Oc(k.data);
						B(x, 5);
						return u(x, c.update(k.data), 7);
					case 7:
						va(x, 6);
						break;
					case 5:
						return n = F(x), q = new N(2, 6, 6008, n.message), a.m(q), d && d.Ja && d.Ja.reject(q), x["return"]();
					case 6:
						if (a.j.g) return x["return"]();
						w = new R("drmsessionupdate");
						a.D.onEvent(w);
						d && (d.Ja && d.Ja.resolve(), y = new O(function() {
							d.loaded = !0;
							Zf(a) && a.u.resolve()
						}), y.S(ag));
						z(x)
				}
			})
		}

		function $f(a) {
			var b = Hc(a.body, !0, !0);
			if (b.includes("PlayReadyKeyMessage")) {
				b = (new DOMParser).parseFromString(b, "application/xml");
				for (var c = t(b.getElementsByTagName("HttpHeader")), d = c.next(); !d.done; d = c.next()) d = d.value, a.headers[d.getElementsByTagName("name")[0].textContent] = d.getElementsByTagName("value")[0].textContent;
				a.body = Pc(b.getElementsByTagName("Challenge")[0].textContent)
			} else a.headers["Content-Type"] = "text/xml; charset=utf-8"
		}

		function Yf(a, b) {
			var c = b.target,
				d = a.i.get(c),
				e = !1;
			c.keyStatuses.forEach(function(g, h) {
				if ("string" == typeof h) {
					var k = h;
					h = g;
					g = k
				}
				if (Tf(a.g.keySystem) && 16 == h.byteLength && navigator.userAgent.match(/Edge?\//)) {
					k = Ib(h);
					var l = k.getUint32(0, !0),
						m = k.getUint16(4, !0),
						p = k.getUint16(6, !0);
					k.setUint32(0, l, !1);
					k.setUint16(4, m, !1);
					k.setUint16(6, p, !1)
				}
				"status-pending" != g && (d.loaded = !0);
				"expired" == g && (e = !0);
				k = Rc(h);
				a.ia.set(k, g)
			});
			var f = c.expiration - Date.now();
			(0 > f || e && 1E3 > f) && d && !d.Ja && (a.i["delete"](c), c.close()["catch"](function() {}));
			Zf(a) && (a.u.resolve(), a.T.S(bg))
		}

		function vf(a) {
			var b = a.ia,
				c = a.da;
			c.clear();
			b.forEach(function(d, e) {
				return c.set(e, d)
			});
			b = Array.from(c.values());
			b.length && b.every(function(d) {
				return "expired" == d
			}) && a.m(new N(2, 6, 6014));
			a.D.Vc(sf(c))
		}

		function cg() {
			var a, b, c, d, e, f, g, h;
			return K(function(k) {
				return 1 == k.g ? (a = "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.microsoft.playready.recommendation com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" "), b = [{
					contentType: 'video/mp4; codecs="avc1.42E01E"'
				}, {
					contentType: 'video/webm; codecs="vp8"'
				}], c = {
					initDataTypes: ["cenc"],
					videoCapabilities: b
				}, d = {
					videoCapabilities: b,
					persistentState: "required",
					sessionTypes: ["persistent-license"]
				}, e = [d,
					c
				], f = new Map, g = function(l) {
					var m, p, n;
					return K(function(q) {
						switch (q.g) {
							case 1:
								B(q, 2);
								if ("org.w3.clearkey" === l && Ac()) throw Error("Unsupported keySystem");
								return u(q, navigator.requestMediaKeySystemAccess(l, e), 4);
							case 4:
								return m = q.h, n = (p = m.getConfiguration().sessionTypes) ? p.includes("persistent-license") : !1, uc("Tizen 3") && (n = !1), f.set(l, {
									persistentState: n
								}), u(q, m.createMediaKeys(), 5);
							case 5:
								va(q, 0);
								break;
							case 2:
								F(q), f.set(l, null), z(q)
						}
					})
				}, h = a.map(function(l) {
					return g(l)
				}), u(k, Promise.all(h), 2)) : k["return"](sf(f))
			})
		}

		function dg(a) {
			var b;
			return K(function(c) {
				if (1 == c.g) return b = new Promise(function(d, e) {
					(new O(e)).S(eg)
				}), B(c, 2), u(c, Promise.race([Promise.all([a.close(), a.closed]), b]), 4);
				if (2 != c.g) return va(c, 0);
				F(c);
				z(c)
			})
		}

		function yf(a) {
			var b;
			return K(function(c) {
				b = Array.from(a.i.entries());
				a.i.clear();
				return u(c, Promise.all(b.map(function(d) {
					d = t(d);
					var e = d.next().value,
						f = d.next().value;
					return K(function(g) {
						if (1 == g.g) return B(g, 2), a.ha || a.C.includes(e.sessionId) || "persistent-license" !== f.type ? u(g, dg(e), 5) : u(g, e.remove(), 5);
						if (2 != g.g) return va(g, 0);
						F(g);
						z(g)
					})
				})), 0)
			})
		}

		function fg(a, b) {
			if (!a.length) return b;
			if (!b.length) return a;
			for (var c = [], d = t(a), e = d.next(); !e.done; e = d.next()) {
				e = e.value;
				for (var f = {}, g = t(b), h = g.next(); !h.done; f = {
						Da: f.Da
					}, h = g.next())
					if (h = h.value, e.keySystem == h.keySystem) {
						f.Da = [];
						f.Da = f.Da.concat(e.initData || []);
						f.Da = f.Da.concat(h.initData || []);
						f.Da = f.Da.filter(function(k) {
							return function(l, m) {
								return void 0 === l.keyId || m === k.Da.findIndex(function(p) {
									return p.keyId === l.keyId
								})
							}
						}(f));
						g = e.keyIds && h.keyIds ? new Set([].concat(ia(e.keyIds), ia(h.keyIds))) :
							e.keyIds || h.keyIds;
						c.push({
							keySystem: e.keySystem,
							licenseServerUri: e.licenseServerUri || h.licenseServerUri,
							distinctiveIdentifierRequired: e.distinctiveIdentifierRequired || h.distinctiveIdentifierRequired,
							persistentStateRequired: e.persistentStateRequired || h.persistentStateRequired,
							videoRobustness: e.videoRobustness || h.videoRobustness,
							audioRobustness: e.audioRobustness || h.audioRobustness,
							serverCertificate: e.serverCertificate || h.serverCertificate,
							serverCertificateUri: e.serverCertificateUri || h.serverCertificateUri,
							initData: f.Da,
							keyIds: g
						});
						break
					}
			}
			return c
		}

		function If(a) {
			return (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : [])
		}

		function wf(a) {
			a.i.forEach(function(b, c) {
				var d = b.Md,
					e = c.expiration;
				isNaN(e) && (e = Infinity);
				e != d && (a.D.onExpirationUpdated(c.sessionId, e), b.Md = e)
			})
		}

		function Zf(a) {
			a = a.i.values();
			return qf(a, function(b) {
				return b.loaded
			})
		}

		function Hf(a, b) {
			var c = [];
			b.forEach(function(f, g) {
				c.push({
					keySystem: g,
					licenseServerUri: f,
					distinctiveIdentifierRequired: !1,
					persistentStateRequired: !1,
					audioRobustness: "",
					videoRobustness: "",
					serverCertificate: null,
					serverCertificateUri: "",
					initData: [],
					keyIds: new Set
				})
			});
			for (var d = t(a), e = d.next(); !e.done; e = d.next()) e = e.value, e.video && (e.video.drmInfos = c), e.audio && (e.audio.drmInfos = c)
		}

		function Xf(a, b, c, d, e, f) {
			var g = {};
			a = t(a);
			for (var h = a.next(); !h.done; g = {
					qa: g.qa
				}, h = a.next()) {
				g.qa = h.value;
				b.includes(g.qa.licenseServerUri) || b.push(g.qa.licenseServerUri);
				d.includes(g.qa.serverCertificateUri) || d.push(g.qa.serverCertificateUri);
				g.qa.serverCertificate && (c.some(function(m) {
					return function(p) {
						return Db(p, m.qa.serverCertificate)
					}
				}(g)) || c.push(g.qa.serverCertificate));
				if (g.qa.initData) {
					h = {};
					for (var k = t(g.qa.initData), l = k.next(); !l.done; h = {
							xc: h.xc
						}, l = k.next()) h.xc = l.value, e.some(function(m) {
						return function(p) {
							var n =
								m.xc;
							return p.keyId && p.keyId == n.keyId ? !0 : p.initDataType == n.initDataType && Db(p.initData, n.initData)
						}
					}(h)) || e.push(h.xc)
				}
				if (g.qa.keyIds)
					for (h = t(g.qa.keyIds), k = h.next(); !k.done; k = h.next()) f.add(k.value)
			}
		}

		function Jf(a, b, c, d) {
			var e = a.keySystem;
			if (e && ("org.w3.clearkey" != e || !a.licenseServerUri)) {
				b.size && (b = b.get(e) || "", a.licenseServerUri = b);
				a.keyIds || (a.keyIds = new Set);
				if (c = c.get(e)) a.distinctiveIdentifierRequired || (a.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), a.persistentStateRequired || (a.persistentStateRequired = c.persistentStateRequired), a.videoRobustness || (a.videoRobustness = c.videoRobustness), a.audioRobustness || (a.audioRobustness = c.audioRobustness), a.serverCertificate || (a.serverCertificate =
					c.serverCertificate), c.sessionType && (a.sessionType = c.sessionType), a.serverCertificateUri || (a.serverCertificateUri = c.serverCertificateUri);
				d[e] && (a.keySystem = d[e]);
				window.cast && window.cast.__platform__ && "com.microsoft.playready" == e && (a.keySystem = "com.chromecast.playready")
			}
		}
		var eg = 1,
			ag = 5,
			bg = .5,
			gg = new oc(function() {
				return Gb(new Uint8Array([0]))
			});

		function hg() {}

		function ig(a, b, c, d) {
			var e, f, g, h;
			return K(function(k) {
				if (1 == k.g) {
					if (d && (e = jg[d.toLowerCase()])) return k["return"](e);
					if (f = kg(a))
						if (g = lg[f]) return k["return"](g);
					return d ? k.A(2) : u(k, mg(a, b, c), 3)
				}
				if (2 != k.g && (d = k.h) && (h = jg[d])) return k["return"](h);
				throw new N(2, 4, 4E3, a);
			})
		}

		function mg(a, b, c) {
			var d, e, f;
			return K(function(g) {
				if (1 == g.g) return d = af([a], c), d.method = "HEAD", u(g, b.request(0, d).promise, 2);
				e = g.h;
				f = e.headers["content-type"];
				return g["return"](f ? f.toLowerCase().split(";").shift() : "")
			})
		}

		function kg(a) {
			a = (new Nb(a)).ta.split("/").pop().split(".");
			return 1 == a.length ? "" : a.pop().toLowerCase()
		}
		M("shaka.media.ManifestParser", hg);
		hg.unregisterParserByMime = function(a) {
			delete jg[a]
		};
		hg.registerParserByMime = function(a, b) {
			jg[a] = b
		};
		hg.registerParserByExtension = function(a, b) {
			lg[a] = b
		};
		var jg = {},
			lg = {};

		function ng(a, b) {
			this.R = Ib(a);
			this.h = b == og;
			this.g = 0
		}
		r = ng.prototype;
		r.ma = function() {
			return this.g < this.R.byteLength
		};
		r.$ = function() {
			return this.g
		};
		r.mf = function() {
			return this.R.byteLength
		};
		r.Sa = function() {
			try {
				var a = this.R.getUint8(this.g);
				this.g += 1;
				return a
			} catch (b) {
				throw pg();
			}
		};
		r.Pd = function() {
			try {
				var a = this.R.getUint16(this.g, this.h);
				this.g += 2;
				return a
			} catch (b) {
				throw pg();
			}
		};
		r.N = function() {
			try {
				var a = this.R.getUint32(this.g, this.h);
				this.g += 4;
				return a
			} catch (b) {
				throw pg();
			}
		};
		r.Ee = function() {
			try {
				var a = this.R.getInt32(this.g, this.h);
				this.g += 4;
				return a
			} catch (b) {
				throw pg();
			}
		};
		r.Hb = function() {
			try {
				if (this.h) {
					var a = this.R.getUint32(this.g, !0);
					var b = this.R.getUint32(this.g + 4, !0)
				} else b = this.R.getUint32(this.g, !1), a = this.R.getUint32(this.g + 4, !1)
			} catch (c) {
				throw pg();
			}
			if (2097151 < b) throw new N(2, 3, 3001);
			this.g += 8;
			return b * Math.pow(2, 32) + a
		};
		r.$a = function(a) {
			if (this.g + a > this.R.byteLength) throw pg();
			var b = Fb(this.R, this.g, a);
			this.g += a;
			return b
		};
		r.skip = function(a) {
			if (this.g + a > this.R.byteLength) throw pg();
			this.g += a
		};
		r.Zf = function(a) {
			if (this.g < a) throw pg();
			this.g -= a
		};
		r.seek = function(a) {
			if (0 > a || a > this.R.byteLength) throw pg();
			this.g = a
		};
		r.nc = function() {
			for (var a = this.g; this.ma() && 0 != this.R.getUint8(this.g);) this.g += 1;
			a = Fb(this.R, a, this.g - a);
			this.g += 1;
			return Fc(a)
		};

		function pg() {
			return new N(2, 3, 3E3)
		}
		M("shaka.util.DataViewReader", ng);
		ng.prototype.readTerminatedString = ng.prototype.nc;
		ng.prototype.seek = ng.prototype.seek;
		ng.prototype.rewind = ng.prototype.Zf;
		ng.prototype.skip = ng.prototype.skip;
		ng.prototype.readBytes = ng.prototype.$a;
		ng.prototype.readUint64 = ng.prototype.Hb;
		ng.prototype.readInt32 = ng.prototype.Ee;
		ng.prototype.readUint32 = ng.prototype.N;
		ng.prototype.readUint16 = ng.prototype.Pd;
		ng.prototype.readUint8 = ng.prototype.Sa;
		ng.prototype.getLength = ng.prototype.mf;
		ng.prototype.getPosition = ng.prototype.$;
		ng.prototype.hasMoreData = ng.prototype.ma;
		var og = 1;
		ng.Endianness = {
			BIG_ENDIAN: 0,
			LITTLE_ENDIAN: og
		};

		function qg() {
			this.i = [];
			this.h = [];
			this.g = !1
		}
		r = qg.prototype;
		r.box = function(a, b) {
			var c = rg(a);
			this.i[c] = sg;
			this.h[c] = b;
			return this
		};
		r.U = function(a, b) {
			var c = rg(a);
			this.i[c] = tg;
			this.h[c] = b;
			return this
		};
		r.stop = function() {
			this.g = !0
		};
		r.parse = function(a, b, c) {
			a = new ng(a, 0);
			for (this.g = !1; a.ma() && !this.g;) this.Xc(0, a, b, c)
		};
		r.Xc = function(a, b, c, d) {
			var e = b.$();
			if (d && e + 8 > b.R.byteLength) this.g = !0;
			else {
				var f = b.N(),
					g = b.N(),
					h = !1;
				switch (f) {
					case 0:
						f = b.R.byteLength - e;
						break;
					case 1:
						if (d && b.$() + 8 > b.R.byteLength) {
							this.g = !0;
							return
						}
						f = b.Hb();
						h = !0
				}
				var k = this.h[g];
				if (k) {
					var l = null,
						m = null;
					if (this.i[g] == tg) {
						if (d && b.$() + 4 > b.R.byteLength) {
							this.g = !0;
							return
						}
						m = b.N();
						l = m >>> 24;
						m &= 16777215
					}
					g = e + f;
					c && g > b.R.byteLength && (g = b.R.byteLength);
					d && g > b.R.byteLength ? this.g = !0 : (d = g - b.$(), b = 0 < d ? b.$a(d) : new Uint8Array(0), b = new ng(b, 0), k({
						parser: this,
						partialOkay: c ||
							!1,
						version: l,
						flags: m,
						reader: b,
						size: f,
						start: e + a,
						has64BitSize: h
					}))
				} else b.skip(Math.min(e + f - b.$(), b.R.byteLength - b.$()))
			}
		};

		function ug(a) {
			for (var b = vg(a); a.reader.ma() && !a.parser.g;) a.parser.Xc(a.start + b, a.reader, a.partialOkay)
		}

		function wg(a) {
			for (var b = vg(a), c = a.reader.N(), d = 0; d < c && (a.parser.Xc(a.start + b, a.reader, a.partialOkay), !a.parser.g); d++);
		}

		function xg(a) {
			return function(b) {
				a(b.reader.$a(b.reader.R.byteLength - b.reader.$()))
			}
		}

		function rg(a) {
			var b = 0;
			a = t(a);
			for (var c = a.next(); !c.done; c = a.next()) b = b << 8 | c.value.charCodeAt(0);
			return b
		}

		function yg(a) {
			return String.fromCharCode(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255)
		}

		function vg(a) {
			return 8 + (a.has64BitSize ? 8 : 0) + (null != a.flags ? 4 : 0)
		}
		M("shaka.util.Mp4Parser", qg);
		qg.headerSize = vg;
		qg.typeToString = yg;
		qg.allData = xg;
		qg.sampleDescription = wg;
		qg.children = ug;
		qg.prototype.parseNext = qg.prototype.Xc;
		qg.prototype.parse = qg.prototype.parse;
		qg.prototype.stop = qg.prototype.stop;
		qg.prototype.fullBox = qg.prototype.U;
		qg.prototype.box = qg.prototype.box;
		var sg = 0,
			tg = 1;

		function zg(a) {
			function b() {
				d = !0
			}

			function c(l) {
				f.push(l);
				ug(l)
			}
			a = Fb(a);
			var d = !1,
				e, f = [],
				g = [];
			(new qg).box("moov", c).box("trak", c).box("mdia", c).box("minf", c).box("stbl", c).U("stsd", function(l) {
				e = l;
				f.push(l);
				wg(l)
			}).U("encv", b).U("enca", b).U("avc1", function(l) {
				g.push({
					box: l,
					lc: 1701733238
				})
			}).U("avc3", function(l) {
				g.push({
					box: l,
					lc: 1701733238
				})
			}).U("ac-3", function(l) {
				g.push({
					box: l,
					lc: 1701733217
				})
			}).U("ec-3", function(l) {
				g.push({
					box: l,
					lc: 1701733217
				})
			}).U("mp4a", function(l) {
				g.push({
					box: l,
					lc: 1701733217
				})
			}).parse(a);
			if (d) return a;
			if (0 == g.length || !e) throw ab(Rc(a)), new N(2, 3, 3019);
			g.reverse();
			for (var h = t(g), k = h.next(); !k.done; k = h.next()) k = k.value, a = Ag(a, e, k.box, f, k.lc);
			return a
		}

		function Ag(a, b, c, d, e) {
			var f = Bg.value(),
				g = a.subarray(c.start, c.start + c.size),
				h = Ib(g),
				k = new Uint8Array(c.size + f.byteLength);
			k.set(g, 0);
			g = Ib(k);
			g.setUint32(4, e);
			k.set(f, c.size);
			e = h.getUint32(4);
			g.setUint32(c.size + 16, e);
			Cg(k, 0, k.byteLength);
			e = new Uint8Array(a.byteLength + k.byteLength);
			c = tc() ? c.start : c.start + c.size;
			f = a.subarray(c);
			e.set(a.subarray(0, c));
			e.set(k, c);
			e.set(f, c + k.byteLength);
			a = t(d);
			for (d = a.next(); !d.done; d = a.next()) d = d.value, Cg(e, d.start, d.size + k.byteLength);
			k = Ib(e, b.start);
			b = vg(b);
			a = k.getUint32(b);
			k.setUint32(b, a + 1);
			return e
		}

		function Cg(a, b, c) {
			a = Ib(a, b);
			b = a.getUint32(0);
			0 != b && (1 == b ? (a.setUint32(8, c >> 32), a.setUint32(12, c & 4294967295)) : a.setUint32(0, c))
		}
		var Bg = new oc(function() {
			return new Uint8Array([0, 0, 0, 80, 115, 105, 110, 102, 0, 0, 0, 12, 102, 114, 109, 97, 0, 0, 0, 0, 0, 0, 0, 20, 115, 99, 104, 109, 0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0, 0, 0, 0, 40, 115, 99, 104, 105, 0, 0, 0, 32, 116, 101, 110, 99, 0, 0, 0, 0, 0, 0, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
		});

		function Dg(a, b, c, d, e) {
			if (d >= e) return null;
			for (var f = -1, g = -1, h = 0; h < c.length; h++)
				if (c[h].some(function(A) {
						return null != A && "" != A.g.trim()
					})) {
					f = h;
					break
				} for (h = c.length - 1; 0 <= h; h--)
				if (c[h].some(function(A) {
						return null != A && "" != A.g.trim()
					})) {
					g = h;
					break
				} if (-1 === f || -1 === g) return null;
			for (var k = h = !1, l = "white", m = "black", p = Eg(d, e, h, k, l, m); f <= g; f++) {
				for (var n = c[f], q = -1, w = -1, y = 0; y < n.length; y++)
					if (null != n[y] && "" !== n[y].g.trim()) {
						q = y;
						break
					} for (y = n.length - 1; 0 <= y; y--)
					if (null != n[y] && "" !== n[y].g.trim()) {
						w = y;
						break
					} if (-1 ===
					q || -1 === w) n = Fg(d, e), a.nestedCues.push(n);
				else {
					for (; q <= w; q++)
						if (y = n[q]) {
							var x = y.l,
								v = y.i,
								D = y.j,
								C = y.h;
							if (x != h || v != k || D != l || C != m) p.payload && a.nestedCues.push(p), p = Eg(d, e, x, v, D, C), h = x, k = v, l = D, m = C;
							p.payload += y.g
						} else p.payload += " ";
					p.payload && a.nestedCues.push(p);
					f !== g && (p = Fg(d, e), a.nestedCues.push(p));
					p = Eg(d, e, h, k, l, m)
				}
			}
			return a.nestedCues.length ? {
				cue: a,
				stream: b
			} : null
		}

		function Eg(a, b, c, d, e, f) {
			a = new ib(a, b, "");
			c && a.textDecoration.push("underline");
			d && (a.fontStyle = "italic");
			a.color = e;
			a.backgroundColor = f;
			return a
		}

		function Fg(a, b) {
			var c = new ib(a, b, "");
			c.lineBreak = !0;
			return c
		}

		function Gg(a, b, c, d, e) {
			this.g = a;
			this.l = b;
			this.i = c;
			this.h = d;
			this.j = e
		};

		function Hg(a, b) {
			this.i = [];
			this.g = 1;
			this.h = 0;
			this.u = a;
			this.s = b;
			this.j = this.m = !1;
			this.l = "white";
			this.o = "black";
			Ig(this)
		}

		function Jg(a, b, c) {
			return Dg(new ib(b, c, ""), "CC" + (a.u << 1 | a.s + 1), a.i, b, c)
		}

		function Ig(a) {
			Kg(a, 0, 15);
			a.g = 1
		}

		function Lg(a, b, c) {
			if (!(32 > c || 127 < c)) {
				var d = "";
				switch (b) {
					case Mg:
						d = Ng.has(c) ? Ng.get(c) : String.fromCharCode(c);
						break;
					case Og:
						d = Pg.get(c);
						break;
					case Qg:
						a.i[a.g].pop();
						d = Rg.get(c);
						break;
					case Sg:
						a.i[a.g].pop(), d = Tg.get(c)
				}
				d && a.i[a.g].push(new Gg(d, a.m, a.j, a.o, a.l))
			}
		}

		function Ug(a, b, c, d) {
			if (b >= c)
				for (--d; 0 <= d; d--) a.i[b + d] = a.i[c + d].map(function(f) {
					return f
				});
			else
				for (var e = 0; e < d; e++) a.i[b + e] = a.i[c + e].map(function(f) {
					return f
				})
		}

		function Kg(a, b, c) {
			for (var d = 0; d <= c; d++) a.i[b + d] = []
		}
		var Mg = 0,
			Og = 1,
			Qg = 2,
			Sg = 3,
			Ng = new Map([
				[39, "\u2019"],
				[42, "\u00e1"],
				[92, "\u00e9"],
				[92, "\u00e9"],
				[94, "\u00ed"],
				[95, "\u00f3"],
				[96, "\u00fa"],
				[123, "\u00e7"],
				[124, "\u00f7"],
				[125, "\u00d1"],
				[126, "\u00f1"],
				[127, "\u2588"]
			]),
			Pg = new Map([
				[48, "\u00ae"],
				[49, "\u00b0"],
				[50, "\u00bd"],
				[51, "\u00bf"],
				[52, "\u2122"],
				[53, "\u00a2"],
				[54, "\u00a3"],
				[55, "\u266a"],
				[56, "\u00e0"],
				[57, "\u2800"],
				[58, "\u00e8"],
				[59, "\u00e2"],
				[60, "\u00ea"],
				[61, "\u00ee"],
				[62, "\u00f4"],
				[63, "\u00fb"]
			]),
			Rg = new Map([
				[32, "\u00c1"],
				[33, "\u00c9"],
				[34, "\u00d3"],
				[35, "\u00da"],
				[36, "\u00dc"],
				[37, "\u00fc"],
				[38, "\u2018"],
				[39, "\u00a1"],
				[40, "*"],
				[41, "'"],
				[42, "\u2500"],
				[43, "\u00a9"],
				[44, "\u2120"],
				[45, "\u00b7"],
				[46, "\u201c"],
				[47, "\u201d"],
				[48, "\u00c0"],
				[49, "\u00c2"],
				[50, "\u00c7"],
				[51, "\u00c8"],
				[52, "\u00ca"],
				[53, "\u00cb"],
				[54, "\u00eb"],
				[55, "\u00ce"],
				[56, "\u00cf"],
				[57, "\u00ef"],
				[58, "\u00d4"],
				[59, "\u00d9"],
				[60, "\u00f9"],
				[61, "\u00db"],
				[62, "\u00ab"],
				[63, "\u00bb"]
			]),
			Tg = new Map([
				[32, "\u00c3"],
				[33, "\u00e3"],
				[34, "\u00cd"],
				[35, "\u00cc"],
				[36, "\u00ec"],
				[37, "\u00d2"],
				[38, "\u00f2"],
				[39, "\u00d5"],
				[40, "\u00f5"],
				[41, "{"],
				[42, "}"],
				[43, "\\"],
				[44, "^"],
				[45, "_"],
				[46, "|"],
				[47, "~"],
				[48, "\u00c4"],
				[49, "\u00e4"],
				[50, "\u00d6"],
				[51, "\u00f6"],
				[52, "\u00df"],
				[53, "\u00a5"],
				[54, "\u00a4"],
				[55, "\u2502"],
				[56, "\u00c5"],
				[57, "\u00e5"],
				[58, "\u00d8"],
				[59, "\u00f8"],
				[60, "\u250c"],
				[61, "\u2510"],
				[62, "\u2514"],
				[63, "\u2518"]
			]);

		function Vg(a, b) {
			this.h = Wg;
			this.o = new Hg(a, b);
			this.i = new Hg(a, b);
			this.l = new Hg(a, b);
			this.g = this.i;
			this.j = 0;
			this.m = null
		}

		function Xg(a, b, c) {
			a.g = a.i;
			var d = a.g,
				e = null;
			a.h !== Yg && a.h !== Zg && (e = Jg(d, a.j, c), c = a.i, c.g = 0 < c.h ? c.h : 0, Kg(c, 0, 15), c = a.l, c.g = 0 < c.h ? c.h : 0, Kg(c, 0, 15), d.g = 15);
			a.h = Yg;
			d.h = b;
			return e
		}

		function $g(a) {
			a.h = ah;
			a.g = a.l;
			a.g.h = 0
		}

		function bh(a) {
			Wa("Cea608DataChannel", "CEA-608 text mode entered, but is unsupported");
			a.g = a.o;
			a.h = Zg
		}
		var Wg = 0,
			ah = 1,
			Yg = 3,
			Zg = 4,
			ch = "black green blue cyan red yellow magenta black".split(" "),
			dh = "white green blue cyan red yellow magenta white_italics".split(" ");

		function eh() {
			this.l = !1;
			this.C = this.F = 0;
			this.D = fh;
			this.i = [];
			this.g = this.h = this.j = 0;
			this.u = this.o = !1;
			this.s = "white";
			this.m = "black";
			gh(this)
		}

		function gh(a) {
			a.i = [];
			for (var b = 0; 15 > b; b++) a.i.push(hh())
		}

		function hh() {
			for (var a = [], b = 0; 42 > b; b++) a.push(null);
			return a
		}

		function ih(a, b) {
			jh(a) && (a.i[a.h][a.g] = new Gg(b, a.u, a.o, a.m, a.s), a.g++)
		}

		function jh(a) {
			var b = a.g < a.C && 0 <= a.g;
			return a.h < a.F && 0 <= a.h && b
		}
		eh.prototype.isVisible = function() {
			return this.l
		};

		function kh(a, b, c) {
			var d = new ib(a.j, b, "");
			d.textAlign = a.D === lh ? "left" : a.D === mh ? "right" : mb;
			if (c = Dg(d, "svc" + c, a.i, a.j, b)) a.j = b;
			return c
		}
		var lh = 0,
			mh = 1,
			fh = 2;

		function nh() {
			this.i = [];
			this.h = null;
			this.g = 0
		}

		function oh(a, b) {
			3 === b.type ? (a.g = 2 * (b.value & 63) - 1, a.h = []) : a.h && (0 < a.g && (a.h.push(b), a.g--), 0 === a.g && (a.i.push(new ph(a.h)), a.h = null, a.g = 0))
		}

		function ph(a) {
			this.g = 0;
			this.h = a
		}
		ph.prototype.ma = function() {
			return this.g < this.h.length
		};
		ph.prototype.$ = function() {
			return this.g
		};

		function qh(a) {
			if (!a.ma()) throw new N(2, 2, 3E3);
			return a.h[a.g++]
		}
		ph.prototype.skip = function(a) {
			if (this.g + a > this.h.length) throw new N(2, 2, 3E3);
			this.g += a
		};

		function rh(a) {
			this.i = a;
			this.h = [null, null, null, null, null, null, null, null];
			this.g = null
		}

		function sh(a, b, c, d) {
			if (128 <= c && 135 >= c) d = c & 7, a.h[d] && (a.g = a.h[d]);
			else {
				if (136 === c) {
					c = qh(b).value;
					b = null;
					c = t(th(a, c));
					for (var e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() && (b = kh(e, d, a.i)), gh(e);
					return b
				}
				if (137 === c)
					for (b = qh(b).value, b = t(th(a, b)), c = b.next(); !c.done; c = b.next()) c = a.h[c.value], c.isVisible() || (c.j = d), c.l = !0;
				else {
					if (138 === c) {
						c = qh(b).value;
						b = null;
						c = t(th(a, c));
						for (e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() && (b = kh(e, d, a.i)), e.l = !1;
						return b
					}
					if (139 === c) {
						c = qh(b).value;
						b = null;
						c = t(th(a, c));
						for (e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() ? b = kh(e, d, a.i) : e.j = d, e.l = !e.l;
						return b
					}
					if (140 === c) return b = qh(b).value, uh(a, b, d);
					if (143 === c) return d = uh(a, 255, d), vh(a), d;
					if (144 === c) b.skip(1), d = qh(b).value, a.g && (a.g.o = 0 < (d & 128), a.g.u = 0 < (d & 64));
					else if (145 === c) d = qh(b).value, c = qh(b).value, b.skip(1), a.g && (b = wh((c & 48) >> 4, (c & 12) >> 2, c & 3), a.g.s = wh((d & 48) >> 4, (d & 12) >> 2, d & 3), a.g.m = b);
					else if (146 === c) d = qh(b).value, b = qh(b).value, a.g && (a = a.g, a.h = d & 15, a.g = b & 63);
					else if (151 === c) b.skip(1),
						b.skip(1), d = qh(b).value, b.skip(1), a.g && (a.g.D = d & 3);
					else if (152 <= c && 159 >= c) {
						c = (c & 15) - 8;
						e = null !== a.h[c];
						if (!e) {
							var f = new eh;
							f.j = d;
							a.h[c] = f
						}
						d = qh(b).value;
						qh(b);
						qh(b);
						f = qh(b).value;
						var g = qh(b).value;
						b = qh(b).value;
						e && 0 === (b & 7) || (b = a.h[c], b.h = 0, b.g = 0, b.u = !1, b.o = !1, b.s = "white", b.m = "black");
						b = a.h[c];
						b.l = 0 < (d & 32);
						b.F = (f & 15) + 1;
						b.C = (g & 63) + 1;
						a.g = a.h[c]
					}
				}
			}
			return null
		}

		function th(a, b) {
			for (var c = [], d = 0; 8 > d; d++) 1 === (b & 1) && a.h[d] && c.push(d), b >>= 1;
			return c
		}

		function uh(a, b, c) {
			var d = null;
			b = t(th(a, b));
			for (var e = b.next(); !e.done; e = b.next()) {
				e = e.value;
				var f = a.h[e];
				f.isVisible() && (d = kh(f, c, a.i));
				a.h[e] = null
			}
			return d
		}

		function vh(a) {
			a.g = null;
			a.h = [null, null, null, null, null, null, null, null]
		}

		function wh(a, b, c) {
			var d = {
				0: 0,
				1: 0,
				2: 1,
				3: 1
			};
			a = d[a];
			b = d[b];
			c = d[c];
			return xh[a << 2 | b << 1 | c]
		}
		var yh = new Map([
				[32, " "],
				[33, "\u00a0"],
				[37, "\u2026"],
				[42, "\u0160"],
				[44, "\u0152"],
				[48, "\u2588"],
				[49, "\u2018"],
				[50, "\u2019"],
				[51, "\u201c"],
				[52, "\u201d"],
				[53, "\u2022"],
				[57, "\u2122"],
				[58, "\u0161"],
				[60, "\u0153"],
				[61, "\u2120"],
				[63, "\u0178"],
				[118, "\u215b"],
				[119, "\u215c"],
				[120, "\u215d"],
				[121, "\u215e"],
				[122, "\u2502"],
				[123, "\u2510"],
				[124, "\u2514"],
				[125, "\u2500"],
				[126, "\u2518"],
				[127, "\u250c"]
			]),
			xh = "black blue green cyan red magenta yellow white".split(" ");

		function zh() {
			this.h = [];
			this.g = [];
			this.i = new nh;
			this.l = 0;
			this.s = new Map([
				["CC1", new Vg(0, 0)],
				["CC2", new Vg(0, 1)],
				["CC3", new Vg(1, 0)],
				["CC4", new Vg(1, 1)]
			]);
			this.o = this.m = 0;
			this.j = new Map;
			Ah(this)
		}

		function Ah(a) {
			a.m = 0;
			a.o = 0;
			a = t(a.s.values());
			for (var b = a.next(); !b.done; b = a.next()) b = b.value, b.h = 2, b.g = b.i, b.m = null, Ig(b.i), Ig(b.l), Ig(b.o)
		}

		function Bh(a) {
			function b(f, g) {
				return f.pts - g.pts || f.order - g.order
			}
			var c = [];
			a.h.sort(b);
			a.g.sort(b);
			for (var d = t(a.h), e = d.next(); !e.done; e = d.next())(e = Ch(a, e.value)) && c.push(e);
			d = t(a.g);
			for (e = d.next(); !e.done; e = d.next()) oh(a.i, e.value);
			d = t(a.i.i);
			for (e = d.next(); !e.done; e = d.next()) e = Dh(a, e.value), c.push.apply(c, ia(e));
			a.i.i = [];
			a.h = [];
			a.g = [];
			return c
		}

		function Ch(a, b) {
			var c = b.type;
			if (16 === (b.xa & 112)) {
				var d = b.xa >> 3 & 1;
				0 === c ? a.m = d : a.o = d
			}
			c = a.s.get("CC" + (c << 1 | (c ? a.o : a.m) + 1));
			if (255 === b.xa && 255 === b.Na || !b.xa && !b.Na || !Eh(b.xa) || !Eh(b.Na)) return 45 <= ++a.l && Ah(a), null;
			a.l = 0;
			b.xa &= 127;
			b.Na &= 127;
			if (!b.xa && !b.Na) return null;
			d = null;
			if (16 === (b.xa & 112)) a: {
				var e = b.xa;d = b.Na;
				if (c.m === (e << 8 | d)) c.m = null;
				else if (c.m = e << 8 | d, 16 === (e & 240) && 64 === (d & 192)) {
					e = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | d >> 5 & 1];
					var f = (d & 30) >> 1,
						g = "white",
						h = !1;
					7 > f ? g = dh[f] : 7 === f && (h = !0);
					d = 1 === (d & 1);
					if (c.h !== Zg) {
						f = c.g;
						if (c.h === Yg && e !== f.g) {
							var k = 1 + e - f.h;
							Ug(f, k, 1 + f.g - f.h, f.h);
							Kg(f, 0, k - 1);
							Kg(f, e + 1, 15 - e)
						}
						f.g = e;
						c.g.m = d;
						c.g.j = h;
						c.g.l = g;
						c.g.o = "black"
					}
				} else if (17 === (e & 247) && 32 === (d & 240)) c.g.m = !1,
				c.g.j = !1,
				c.g.l = "white",
				Lg(c.g, Mg, 32),
				g = !1,
				e = dh[(d & 14) >> 1],
				"white_italics" === e && (e = "white", g = !0),
				c.g.m = 1 === (d & 1),
				c.g.j = g,
				c.g.l = e;
				else if (16 === (e & 247) && 32 === (d & 240) || 23 === (e & 247) && 45 === (d & 255)) g = "black",
				0 === (e & 7) && (g = ch[(d & 14) >> 1]),
				c.g.o = g;
				else if (17 === (e & 247) && 48 === (d & 240)) Lg(c.g, Og, d);
				else if (18 ===
					(e & 246) && 32 === (d & 224)) Lg(c.g, e & 1 ? Sg : Qg, d);
				else if (20 === (e & 246) && 32 === (d & 240)) {
					d = b.pts;
					e = null;
					switch (b.Na) {
						case 32:
							$g(c);
							break;
						case 33:
							c = c.g;
							c.i[c.g].pop();
							break;
						case 37:
							e = Xg(c, 2, d);
							break;
						case 38:
							e = Xg(c, 3, d);
							break;
						case 39:
							e = Xg(c, 4, d);
							break;
						case 40:
							Lg(c.g, Mg, 32);
							break;
						case 41:
							c.h = 2;
							c.g = c.i;
							c.g.h = 0;
							c.j = d;
							break;
						case 42:
							Ig(c.o);
							bh(c);
							break;
						case 43:
							bh(c);
							break;
						case 44:
							e = c.i;
							g = null;
							c.h !== Zg && (g = Jg(e, c.j, d));
							Kg(e, 0, 15);
							e = g;
							break;
						case 45:
							e = c.g;
							c.h !== Yg ? e = null : (g = Jg(e, c.j, d), h = e.g - e.h + 1, Ug(e, h - 1, h, e.h), Kg(e,
								0, h - 1), Kg(e, e.g, 15 - e.g), c.j = d, e = g);
							break;
						case 46:
							Kg(c.l, 0, 15);
							break;
						case 47:
							e = null, c.h !== Zg && (e = Jg(c.i, c.j, d)), g = c.l, c.l = c.i, c.i = g, $g(c), c.j = d
					}
					d = e;
					break a
				}
				d = null
			}
			else e = b.Na, Lg(c.g, Mg, b.xa), Lg(c.g, Mg, e);
			return d
		}

		function Dh(a, b) {
			var c = [];
			try {
				for (; b.ma();) {
					var d = qh(b).value,
						e = (d & 224) >> 5,
						f = d & 31;
					7 === e && 0 != f && (e = qh(b).value & 63);
					if (0 != e) {
						a.j.has(e) || a.j.set(e, new rh(e));
						for (var g = a.j.get(e), h = b.$(); b.$() - h < f;) {
							e = b;
							var k = qh(e),
								l = k.value,
								m = k.pts;
							if (16 === l) {
								var p = qh(e);
								l = l << 16 | p.value
							}
							if (0 <= l && 31 >= l) {
								var n = m;
								if (g.g) {
									var q = g.g;
									e = null;
									switch (l) {
										case 8:
											!jh(q) || 0 >= q.g && 0 >= q.h || (0 >= q.g ? (q.g = q.C - 1, q.h--) : q.g--, q.i[q.h][q.g] = null);
											break;
										case 13:
											q.isVisible() && (e = kh(q, n, g.i));
											if (q.h + 1 >= q.F) {
												n = q;
												for (var w = 0, y = 1; 15 > y; y++,
													w++) n.i[w] = n.i[y];
												for (y = 0; 1 > y; y++, w++) n.i[w] = hh()
											} else q.h++;
											q.g = 0;
											break;
										case 14:
											q.isVisible() && (e = kh(q, n, g.i));
											q.i[q.h] = hh();
											q.g = 0;
											break;
										case 12:
											q.isVisible() && (e = kh(q, n, g.i)), gh(q), n = q, n.h = 0, n.g = 0
									}
									var x = e
								} else x = null
							} else if (128 <= l && 159 >= l) x = sh(g, e, l, m);
							else {
								if (4096 <= l && 4127 >= l) n = l & 255, 8 <= n && 15 >= n ? e.skip(1) : 16 <= n && 23 >= n ? e.skip(2) : 24 <= n && 31 >= n && e.skip(3);
								else if (4224 <= l && 4255 >= l) n = l & 255, 128 <= n && 135 >= n ? e.skip(4) : 136 <= n && 143 >= n && e.skip(5);
								else if (32 <= l && 127 >= l) e = l, g.g && (127 === e ? ih(g.g, "\u266a") : ih(g.g,
									String.fromCharCode(e)));
								else if (160 <= l && 255 >= l) g.g && ih(g.g, String.fromCharCode(l));
								else if (4128 <= l && 4223 >= l) {
									if (e = l & 255, g.g)
										if (yh.has(e)) {
											var v = yh.get(e);
											ih(g.g, v)
										} else ih(g.g, "_")
								} else 4256 <= l && 4351 >= l && g.g && (160 != (l & 255) ? ih(g.g, "_") : ih(g.g, "[CC]"));
								x = null
							}(e = x) && c.push(e)
						}
					}
				}
			} catch (D) {
				if (D instanceof N && 3E3 === D.code) Wa("CEA708_INVALID_DATA", "Buffer read out of bounds / invalid CEA-708 Data.");
				else throw D;
			}
			return c
		}

		function Eh(a) {
			for (var b = 0; a;) b ^= a & 1, a >>= 1;
			return 1 === b
		};

		function Fh(a, b) {
			var c = null,
				d = null,
				e = a.N();
			b & 1 && a.skip(8);
			b & 2 && a.skip(4);
			b & 8 && (c = a.N());
			b & 16 && (d = a.N());
			return {
				trackId: e,
				oe: c,
				cf: d
			}
		}

		function Gh(a, b) {
			return {
				ie: 1 == b ? a.Hb() : a.N()
			}
		}

		function Hh(a, b) {
			1 == b ? (a.skip(8), a.skip(8)) : (a.skip(4), a.skip(4));
			return {
				timescale: a.N()
			}
		}

		function Ih(a, b, c) {
			var d = a.N(),
				e = [];
			c & 1 && a.skip(4);
			c & 4 && a.skip(4);
			for (var f = 0; f < d; f++) {
				var g = {
					Td: null,
					sampleSize: null,
					Zc: null
				};
				c & 256 && (g.Td = a.N());
				c & 512 && (g.sampleSize = a.N());
				c & 1024 && a.skip(4);
				c & 2048 && (g.Zc = 0 == b ? a.N() : a.Ee());
				e.push(g)
			}
			return {
				$g: d,
				Ge: e
			}
		};

		function Jh() {
			this.i = new Map;
			this.h = this.g = 0
		}
		Jh.prototype.init = function(a) {
			var b = this,
				c = [],
				d = [];
			(new qg).box("moov", ug).box("mvex", ug).U("trex", function(e) {
				var f = e.reader;
				f.skip(4);
				f.skip(4);
				e = f.N();
				f = f.N();
				b.g = e;
				b.h = f
			}).box("trak", ug).U("tkhd", function(e) {
				var f = e.reader;
				1 == e.version ? (f.skip(8), f.skip(8)) : (f.skip(4), f.skip(4));
				e = f.N();
				c.push(e)
			}).box("mdia", ug).U("mdhd", function(e) {
				e = Hh(e.reader, e.version);
				d.push(e.timescale)
			}).parse(a, !0);
			if (!c.length || !d.length || c.length != d.length) throw new N(2, 2, 2010);
			c.forEach(function(e, f) {
				b.i.set(e, d[f])
			})
		};
		Jh.prototype.parse = function(a) {
			var b = this,
				c = [],
				d = this.g,
				e = this.h,
				f = [],
				g = null,
				h = 9E4;
			(new qg).box("moof", ug).box("traf", ug).U("trun", function(k) {
				f = Ih(k.reader, k.version, k.flags).Ge
			}).U("tfhd", function(k) {
				k = Fh(k.reader, k.flags);
				d = k.oe || b.g;
				e = k.cf || b.h;
				k = k.trackId;
				b.i.has(k) && (h = b.i.get(k))
			}).U("tfdt", function(k) {
				g = Gh(k.reader, k.version).ie
			}).box("mdat", function(k) {
				if (null === g) throw new N(2, 2, 2010);
				k = k.reader;
				var l = g,
					m = h,
					p = d,
					n = e,
					q = f,
					w = 0,
					y = n;
				for (q.length && (y = q[0].sampleSize || n); k.ma();) {
					var x = k.N();
					if (6 ==
						(k.Sa() & 31)) {
						var v = 0;
						q.length > w && (v = q[w].Zc || 0);
						v = (l + v) / m;
						for (var D = [], C, A = k.$a(x - 1), G = C = 0; G < A.length;) 2 == C && 3 == A[G] ? (C = 0, A = [].concat(ia(A)), A.splice(G, 1), A = new Uint8Array(A)) : 0 == A[G] ? C++ : C = 0, G++;
						C = A;
						for (G = 0; G < C.length;) {
							for (A = 0; 255 == C[G];) A += 255, G++;
							A += C[G++];
							for (var E = 0; 255 == C[G];) E += 255, G++;
							E += C[G++];
							4 == A && D.push(C.subarray(G, G + E));
							G += E
						}
						D = t(D);
						for (C = D.next(); !C.done; C = D.next()) c.push({
							Pf: C.value,
							pts: v
						})
					} else try {
						k.skip(x - 1)
					} catch (H) {
						break
					}
					y -= x + 4;
					0 == y && (l = q.length > w ? l + (q[w].Td || p) : l + p, w++, y = q.length >
						w ? q[w].sampleSize || n : n)
				}
			}).parse(a, !1);
			return c
		};

		function Kh() {
			this.h = new Jh;
			this.g = new zh
		}
		Kh.prototype.init = function(a) {
			this.h.init(a)
		};

		function Lh(a, b) {
			var c = a.h.parse(b);
			c = t(c);
			for (var d = c.next(); !d.done; d = c.next()) {
				var e = d.value,
					f = Fb(e.Pf);
				if (0 < f.length && (d = a.g, e = e.pts, f = new ng(f, 0), 181 === f.Sa() && 49 === f.Pd() && 1195456820 === f.N() && 3 === f.Sa())) {
					var g = f.Sa();
					if (0 !== (g & 64)) {
						g &= 31;
						f.skip(1);
						for (var h = 0; h < g; h++) {
							var k = f.Sa(),
								l = (k & 4) >> 2,
								m = f.Sa(),
								p = f.Sa();
							l && (k &= 3, 0 === k || 1 === k ? d.h.push({
								pts: e,
								type: k,
								xa: m,
								Na: p,
								order: d.h.length
							}) : (d.g.push({
								pts: e,
								type: k,
								value: m,
								order: d.g.length
							}), d.g.push({
								pts: e,
								type: 2,
								value: p,
								order: d.g.length
							})))
						}
					}
				}
			}
			return Bh(a.g)
		};

		function Mh(a, b, c, d) {
			this.ya = a;
			this.Ba = b;
			this.la = c;
			this.Gd = void 0 === d ? null : d
		}
		Mh.prototype.fc = function() {
			return this.Ba
		};
		Mh.prototype.bc = function() {
			return this.la
		};

		function Nh(a, b) {
			return a && b ? a.fc() == b.fc() && a.bc() == b.bc() && gb(a.ya(), b.ya()) : a == b
		}
		M("shaka.media.InitSegmentReference", Mh);
		Mh.prototype.getEndByte = Mh.prototype.bc;
		Mh.prototype.getStartByte = Mh.prototype.fc;

		function Oh(a, b, c, d, e, f, g, h, k, l, m, p, n, q) {
			l = void 0 === l ? [] : l;
			q = void 0 === q ? Ph : q;
			this.startTime = a;
			this.j = this.endTime = b;
			this.m = c;
			this.Ba = d;
			this.la = e;
			this.i = f;
			this.timestampOffset = g;
			this.appendWindowStart = h;
			this.appendWindowEnd = k;
			this.h = l;
			this.tilesLayout = void 0 === m ? "" : m;
			this.l = void 0 === p ? null : p;
			this.g = void 0 === n ? null : n;
			this.status = q
		}
		r = Oh.prototype;
		r.ya = function() {
			return this.m()
		};
		r.getStartTime = function() {
			return this.startTime
		};
		r.kf = function() {
			return this.endTime
		};
		r.fc = function() {
			return this.Ba
		};
		r.bc = function() {
			return this.la
		};
		r.Cf = function() {
			return this.tilesLayout
		};
		r.Bf = function() {
			return this.l
		};
		r.Oc = function() {
			return this.status
		};
		r.Jf = function() {
			this.status = Qh
		};
		M("shaka.media.SegmentReference", Oh);
		Oh.prototype.markAsUnavailable = Oh.prototype.Jf;
		Oh.prototype.getStatus = Oh.prototype.Oc;
		Oh.prototype.getTileDuration = Oh.prototype.Bf;
		Oh.prototype.getTilesLayout = Oh.prototype.Cf;
		Oh.prototype.getEndByte = Oh.prototype.bc;
		Oh.prototype.getStartByte = Oh.prototype.fc;
		Oh.prototype.getEndTime = Oh.prototype.kf;
		Oh.prototype.getStartTime = Oh.prototype.getStartTime;
		Oh.prototype.getUris = Oh.prototype.ya;
		var Ph = 0,
			Qh = 1;
		Oh.Status = {
			og: Ph,
			Ug: Qh,
			Dg: 2
		};

		function Rh(a) {
			return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : 1 == a.length && 0 > a.start(0) ? 0 : a.length ? a.start(0) : null
		}

		function Sh(a) {
			return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : a.length ? a.end(a.length - 1) : null
		}

		function Th(a, b) {
			return !a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0) || b > a.end(a.length - 1) ? !1 : b >= a.start(0)
		}

		function Uh(a, b) {
			if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return 0;
			for (var c = 0, d = t(Vh(a)), e = d.next(); !e.done; e = d.next()) {
				var f = e.value;
				e = f.start;
				f = f.end;
				f > b && (c += f - Math.max(e, b))
			}
			return c
		}

		function Wh(a, b, c) {
			if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return null;
			a = Vh(a).findIndex(function(d, e, f) {
				return d.start > b && (0 == e || f[e - 1].end - b <= c)
			});
			return 0 <= a ? a : null
		}

		function Vh(a) {
			if (!a) return [];
			for (var b = [], c = 0; c < a.length; c++) b.push({
				start: a.start(c),
				end: a.end(c)
			});
			return b
		};

		function Xh(a, b, c, d) {
			var e = this;
			this.j = a;
			this.m = c;
			this.h = {};
			this.M = {};
			this.L = {};
			this.g = null;
			this.F = !1;
			this.T = d || function() {};
			this.i = {};
			this.o = new kf;
			this.u = {};
			this.C = b;
			this.G = new nc;
			this.l = Yh(this, this.G);
			this.D = new hf(function() {
				return Zh(e)
			});
			this.I = "";
			this.s = !1;
			this.O = new nc
		}

		function Yh(a, b) {
			var c = new MediaSource;
			a.o.oa(c, "sourceopen", function() {
				URL.revokeObjectURL(a.I);
				b.resolve()
			});
			a.I = $h(c);
			a.j.src = a.I;
			return c
		}
		r = Xh.prototype;
		r.destroy = function() {
			return this.D.destroy()
		};

		function Zh(a) {
			var b, c, d, e, f, g, h, k;
			return K(function(l) {
				if (1 == l.g) {
					b = [];
					for (c in a.i)
						for (d = a.i[c], e = d[0], a.i[c] = d.slice(0, 1), e && b.push(e.p["catch"](bc)), f = t(d.slice(1)), g = f.next(); !g.done; g = f.next()) h = g.value, h.p.reject(new N(2, 7, 7003, void 0));
					a.g && b.push(a.g.destroy());
					a.m && b.push(a.m.destroy());
					for (k in a.u) b.push(a.u[k].destroy());
					return u(l, Promise.all(b), 2)
				}
				a.o && (a.o.release(), a.o = null);
				a.j && (a.j.removeAttribute("src"), a.j.load(), a.j = null);
				a.l = null;
				a.g = null;
				a.m = null;
				a.h = {};
				a.u = {};
				a.C = null;
				a.i = {};
				z(l)
			})
		}
		r.init = function(a, b, c) {
			c = void 0 === c ? !1 : c;
			var d = this,
				e, f, g, h, k, l, m;
			return K(function(p) {
				if (1 == p.g) return e = mc, u(p, d.G, 2);
				d.s = c;
				f = {};
				g = t(a.keys());
				for (h = g.next(); !h.done; f = {
						pa: f.pa
					}, h = g.next()) f.pa = h.value, k = a.get(f.pa), l = Zc(k.mimeType, k.codecs), f.pa == e.X ? ai(d, l, c) : (!b && MediaSource.isTypeSupported(l) || !Uc(l, f.pa) || (d.u[f.pa] = new Tc, l = Wc(f.pa, l)), m = d.l.addSourceBuffer(l), d.o.B(m, "error", function(n) {
					return function() {
						d.i[n.pa][0].p.reject(new N(2, 3, 3014, d.j.error ? d.j.error.code : 0))
					}
				}(f)), d.o.B(m, "updateend",
					function(n) {
						return function() {
							return bi(d, n.pa)
						}
					}(f)), d.h[f.pa] = m, d.M[f.pa] = l, d.i[f.pa] = [], d.L[f.pa] = !!k.drmInfos.length);
				z(p)
			})
		};

		function ai(a, b, c) {
			a.g || (a.g = new dd(a.m));
			var d = a.g;
			a = a.F;
			"application/cea-608" != b && "application/cea-708" != b && (d.j = (0, fd[b])(), d.j.setSequenceMode ? d.j.setSequenceMode(c) : Va('Text parsers should have a "setSequenceMode" method!'), d.u = a)
		}

		function ci(a) {
			return a.l ? "ended" == a.l.readyState : !0
		}

		function di(a, b) {
			return b == lc ? a.g.g : Rh(ei(a, b))
		}

		function fi(a, b) {
			return b == lc ? a.g.h : Sh(ei(a, b))
		}

		function gi(a, b, c) {
			if (b == lc) return a = a.g, null == a.h || a.h < c ? 0 : a.h - Math.max(c, a.g);
			a = ei(a, b);
			return Uh(a, c)
		}
		r.Oa = function() {
			var a = {
				total: Vh(this.j.buffered),
				audio: Vh(ei(this, "audio")),
				video: Vh(ei(this, "video")),
				text: []
			};
			if (this.g) {
				var b = this.g.g,
					c = this.g.h;
				null != b && null != c && a.text.push({
					start: b,
					end: c
				})
			}
			return a
		};

		function ei(a, b) {
			try {
				return a.h[b].buffered
			} catch (c) {
				return null
			}
		}

		function hi(a, b, c, d, e, f) {
			var g, h, k, l, m, p, n, q, w, y, x, v, D, C, A, G;
			return K(function(E) {
				switch (E.g) {
					case 1:
						g = mc;
						if (b != g.X) {
							E.A(2);
							break
						}
						if (!a.s) {
							E.A(3);
							break
						}
						return u(E, a.O, 4);
					case 4:
						h = E.h, a.g.s = h;
					case 3:
						return u(E, gd(a.g, c, d ? d.startTime : null, d ? d.endTime : null), 5);
					case 5:
						return E["return"]();
					case 2:
						if (!a.u[b]) {
							e && (a.g || ai(a, "text/vtt", a.s), d ? (k = Lh(a.C, c), k.length && (l = a.h[g.va].timestampOffset, od(a.g, k, d.startTime, d.endTime, l))) : a.C.init(c));
							E.A(6);
							break
						}
						return u(E, Xc(a.u[b], c), 7);
					case 7:
						m = E.h, a.g || ai(a,
							"text/vtt", a.s), m.metadata && (p = a.h[b].timestampOffset, a.T(m.metadata, p, d ? d.endTime : null)), m.captions && m.captions.length && (n = a.h[g.va].timestampOffset, q = jd(m.captions), od(a.g, q, d ? d.startTime : null, d ? d.endTime : null, n)), c = m.data;
					case 6:
						c = ii(a, c, d ? d.startTime : null, b);
						w = a.h[b];
						y = ji;
						if (!a.s || w.mode == y || !d) {
							E.A(8);
							break
						}
						x = b == g.va || !(g.va in a.h);
						if (!x) {
							E.A(9);
							break
						}
						v = [w.appendWindowStart, w.appendWindowEnd];
						w.appendWindowStart = 0;
						w.appendWindowEnd = Infinity;
						D = w.timestampOffset;
						w.timestampOffset = 0;
						return u(E,
							ki(a, b, function() {
								a.h[b].appendBuffer(c)
							}), 10);
					case 10:
						return w.timestampOffset = D, w.appendWindowStart = v[0], w.appendWindowEnd = v[1], C = Rh(ei(a, b)), A = (d.startTime || 0) - (C || 0), a.O.resolve(A), u(E, ki(a, b, function() {
							return li(a, b, 0, a.l.duration)
						}), 9);
					case 9:
						w.mode = y;
					case 8:
						return d && a.s && b != g.X && f && (G = d.startTime, ki(a, b, function() {
							var H = G;
							0 > H && (H += .001);
							a.h[b].timestampOffset = H;
							bi(a, b)
						})), u(E, ki(a, b, function() {
							a.h[b].appendBuffer(c)
						}), 12);
					case 12:
						z(E)
				}
			})
		}

		function mi(a, b) {
			var c = fi(a, "video") || 0;
			id(a.g, b, c)
		}

		function ni(a) {
			a.g && id(a.g, "", 0)
		}
		r.remove = function(a, b, c) {
			var d = this,
				e;
			return K(function(f) {
				e = mc;
				return a == e.X ? u(f, d.g.remove(b, c), 0) : u(f, ki(d, a, function() {
					return li(d, a, b, c)
				}), 0)
			})
		};

		function oi(a, b) {
			var c;
			return K(function(d) {
				c = mc;
				return b == c.X ? a.g ? u(d, a.g.remove(0, Infinity), 0) : d["return"]() : u(d, ki(a, b, function() {
					return li(a, b, 0, a.l.duration)
				}), 0)
			})
		}
		r.flush = function(a) {
			var b = this,
				c;
			return K(function(d) {
				c = mc;
				return a == c.X ? d["return"]() : u(d, ki(b, a, function() {
					b.j.currentTime -= .001;
					bi(b, a)
				}), 0)
			})
		};

		function pi(a, b, c, d, e, f) {
			var g;
			return K(function(h) {
				g = mc;
				return b == g.X ? (f || (a.g.s = c), hd(a.g, d, e), h["return"]()) : u(h, Promise.all([ki(a, b, function() {
					var k = a.h[b].appendWindowStart,
						l = a.h[b].appendWindowEnd;
					a.h[b].abort();
					a.h[b].appendWindowStart = k;
					a.h[b].appendWindowEnd = l;
					bi(a, b)
				}), f ? Promise.resolve() : ki(a, b, function() {
					var k = c;
					0 > k && (k += .001);
					a.h[b].timestampOffset = k;
					bi(a, b)
				}), ki(a, b, function() {
					a.h[b].appendWindowStart = 0;
					a.h[b].appendWindowEnd = e;
					a.h[b].appendWindowStart = d;
					bi(a, b)
				})]), 0)
			})
		}
		r.endOfStream = function(a) {
			var b = this;
			return K(function(c) {
				return u(c, qi(b, function() {
					ci(b) || (a ? b.l.endOfStream(a) : b.l.endOfStream())
				}), 0)
			})
		};
		r.Ia = function(a) {
			var b = this;
			return K(function(c) {
				return u(c, qi(b, function() {
					b.l.duration = a
				}), 0)
			})
		};
		r.getDuration = function() {
			return this.l.duration
		};

		function li(a, b, c, d) {
			d <= c ? bi(a, b) : a.h[b].remove(c, d)
		}

		function bi(a, b) {
			var c = a.i[b][0];
			c && (c.p.resolve(), ri(a, b))
		}

		function ki(a, b, c) {
			jf(a.D);
			c = {
				start: c,
				p: new nc
			};
			a.i[b].push(c);
			1 == a.i[b].length && si(a, b);
			return c.p
		}

		function qi(a, b) {
			var c, d, e, f, g, h;
			return K(function(k) {
				switch (k.g) {
					case 1:
						jf(a.D);
						c = [];
						d = {};
						for (e in a.h) d.Qb = new nc, f = {
							start: function(l) {
								return function() {
									return l.Qb.resolve()
								}
							}(d),
							p: d.Qb
						}, a.i[e].push(f), c.push(d.Qb), 1 == a.i[e].length && f.start(), d = {
							Qb: d.Qb
						};
						B(k, 2);
						return u(k, Promise.all(c), 4);
					case 4:
						va(k, 3);
						break;
					case 2:
						throw g = F(k), g;
					case 3:
						try {
							b()
						} catch (l) {
							throw new N(2, 3, 3015, l);
						} finally {
							for (h in a.h) ri(a, h)
						}
						z(k)
				}
			})
		}

		function ri(a, b) {
			a.i[b].shift();
			si(a, b)
		}

		function si(a, b) {
			var c = a.i[b][0];
			if (c) try {
				c.start()
			} catch (d) {
				"QuotaExceededError" == d.name ? c.p.reject(new N(2, 3, 3017, b)) : c.p.reject(new N(2, 3, 3015, d)), ri(a, b)
			}
		}

		function ii(a, b, c, d) {
			var e = a.L[d];
			null == c && e && (vc() || tc()) && "mp4" == a.M[d].split(";")[0].split("/")[1] && (b = zg(b));
			return b
		}
		var $h = window.URL.createObjectURL,
			ji = "sequence",
			ti = ["audio/aac", "audio/ac3", "audio/ec3", "audio/mpeg"];

		function T(a, b, c) {
			this.l = a;
			this.Yc = b;
			this.m = this.i = Infinity;
			this.g = 1;
			this.h = this.j = null;
			this.o = 0;
			this.s = !0;
			this.u = 0;
			this.C = void 0 === c ? !0 : c;
			this.D = 0;
			this.F = !1
		}
		r = T.prototype;
		r.getDuration = function() {
			return this.i
		};
		r.rf = function() {
			return this.g
		};
		r.Ia = function(a) {
			this.i = a
		};
		r.xf = function() {
			return this.l
		};
		r.Ke = function(a) {
			this.o = a
		};
		r.tc = function(a) {
			this.s = a
		};
		r.ae = function(a) {
			this.m = a
		};
		r.eg = function(a) {
			this.Yc = a
		};
		r.jf = function() {
			return this.Yc
		};
		r.Eb = function(a) {
			if (0 != a.length) {
				var b = a[a.length - 1].endTime;
				this.Kd(a[0].startTime);
				this.g = a.reduce(function(c, d) {
					return Math.max(c, d.endTime - d.startTime)
				}, this.g);
				this.h = Math.max(this.h, b);
				null != this.l && this.C && !this.F && (this.l = (Date.now() + this.o) / 1E3 - this.h - this.g)
			}
		};
		r.Dd = function() {
			this.F = !0
		};
		r.Kd = function(a) {
			this.j = null == this.j ? a : Math.min(this.j, a)
		};
		r.Jd = function(a) {
			this.g = Math.max(this.g, a)
		};
		r.offset = function(a) {
			null != this.j && (this.j += a);
			null != this.h && (this.h += a)
		};
		r.V = function() {
			return Infinity == this.i && !this.s
		};
		r.jb = function() {
			return Infinity != this.i && !this.s
		};
		r.Qa = function() {
			return Math.max(this.u, this.gb() - this.m)
		};
		r.Le = function(a) {
			this.u = a
		};
		r.gb = function() {
			return this.V() || this.jb() ? Math.min(Math.max(0, (Date.now() + this.o) / 1E3 - this.g - this.l) + this.D, this.i) : this.h ? Math.min(this.h, this.i) : this.i
		};
		r.ec = function(a) {
			var b = Math.max(this.j, this.u);
			return Infinity == this.m ? Math.ceil(1E3 * b) / 1E3 : Math.max(b, Math.min(this.gb() - this.m + a, this.Pa()))
		};
		r.Ab = function() {
			return this.ec(0)
		};
		r.Pa = function() {
			return Math.max(0, this.gb() - (this.V() || this.jb() ? this.Yc : 0))
		};
		r.Oe = function() {
			return null == this.l || null != this.h && this.C ? !1 : !0
		};
		r.Je = function(a) {
			this.D = a
		};
		M("shaka.media.PresentationTimeline", T);
		T.prototype.setAvailabilityTimeOffset = T.prototype.Je;
		T.prototype.usingPresentationStartTime = T.prototype.Oe;
		T.prototype.getSeekRangeEnd = T.prototype.Pa;
		T.prototype.getSeekRangeStart = T.prototype.Ab;
		T.prototype.getSafeSeekRangeStart = T.prototype.ec;
		T.prototype.getSegmentAvailabilityEnd = T.prototype.gb;
		T.prototype.setUserSeekStart = T.prototype.Le;
		T.prototype.getSegmentAvailabilityStart = T.prototype.Qa;
		T.prototype.isInProgress = T.prototype.jb;
		T.prototype.isLive = T.prototype.V;
		T.prototype.offset = T.prototype.offset;
		T.prototype.notifyMaxSegmentDuration = T.prototype.Jd;
		T.prototype.notifyMinSegmentStartTime = T.prototype.Kd;
		T.prototype.lockStartTime = T.prototype.Dd;
		T.prototype.notifySegments = T.prototype.Eb;
		T.prototype.getDelay = T.prototype.jf;
		T.prototype.setDelay = T.prototype.eg;
		T.prototype.setSegmentAvailabilityDuration = T.prototype.ae;
		T.prototype.setStatic = T.prototype.tc;
		T.prototype.setClockOffset = T.prototype.Ke;
		T.prototype.getPresentationStartTime = T.prototype.xf;
		T.prototype.setDuration = T.prototype.Ia;
		T.prototype.getMaxSegmentDuration = T.prototype.rf;
		T.prototype.getDuration = T.prototype.getDuration;

		function ui(a, b, c) {
			this.l = c;
			this.j = a;
			this.s = vi(a);
			this.g = a.g.currentTime;
			this.m = Date.now() / 1E3;
			this.h = !1;
			this.o = 0;
			this.u = b;
			this.i = function() {}
		}
		ui.prototype.release = function() {
			this.l = this.j = null;
			this.i = function() {}
		};

		function wi(a, b) {
			a.i = b
		}

		function xi(a) {
			this.g = a
		}

		function vi(a) {
			if (a.g.paused || 0 == a.g.playbackRate || 0 == a.g.buffered.length) var b = !1;
			else a: {
				b = a.g.currentTime;a = t(Vh(a.g.buffered));
				for (var c = a.next(); !c.done; c = a.next())
					if (c = c.value, !(b < c.start - .1 || b > c.end - .5)) {
						b = !0;
						break a
					} b = !1
			}
			return b
		};

		function yi(a, b, c, d, e) {
			var f = this;
			this.o = e;
			this.g = a;
			this.s = b;
			this.D = c;
			this.i = new kf;
			this.m = !1;
			this.C = a.readyState;
			this.u = 0;
			this.h = d;
			this.l = !1;
			this.i.B(a, "waiting", function() {
				return zi(f)
			});
			this.j = (new O(function() {
				zi(f)
			})).Ca(.25)
		}
		yi.prototype.release = function() {
			this.i && (this.i.release(), this.i = null);
			null != this.j && (this.j.stop(), this.j = null);
			this.h && (this.h.release(), this.h = null);
			this.g = this.s = this.o = null
		};
		yi.prototype.Nd = function() {
			this.l = !0;
			zi(this)
		};

		function zi(a) {
			if (0 != a.g.readyState) {
				if (a.g.seeking) {
					if (!a.m) return
				} else a.m = !1;
				if (!a.g.paused || 0 == a.g.currentTime && (a.g.autoplay || 0 != a.g.currentTime)) {
					a.g.readyState != a.C && (a.C = a.g.readyState);
					var b;
					if (!(b = !a.h)) {
						b = a.h;
						var c = b.j,
							d = vi(c),
							e = c.g.currentTime,
							f = Date.now() / 1E3;
						if (b.g != e || b.s != d) b.m = f, b.g = e, b.s = d, b.h = !1;
						e = f - b.m;
						if (d = e >= b.u && d && !b.h) b.i(b.g, e), b.h = !0, b.g = c.g.currentTime, b.o++, b.l(new R("stalldetected"));
						b = !d
					}
					b && (b = a.g.currentTime, c = a.g.buffered, d = Wh(c, b, a.D.gapDetectionThreshold), null ==
						d || 0 == d && !a.l || (e = c.start(d), e >= a.s.Pa() || .001 > e - b || (0 != d && c.end(d - 1), a.g.currentTime = e, a.u++, a.o(new R("gapjumped")))))
				}
			}
		};

		function Ai(a, b, c, d) {
			b == HTMLMediaElement.HAVE_NOTHING || a.readyState >= b ? d() : (b = Bi.value().get(b), c.oa(a, b, d))
		}
		var Bi = new oc(function() {
			return new Map([
				[HTMLMediaElement.HAVE_METADATA, "loadedmetadata"],
				[HTMLMediaElement.HAVE_CURRENT_DATA, "loadeddata"],
				[HTMLMediaElement.HAVE_FUTURE_DATA, "canplay"],
				[HTMLMediaElement.HAVE_ENOUGH_DATA, "canplaythrough"]
			])
		});

		function Ci(a, b, c) {
			var d = this;
			this.g = a;
			this.l = b;
			this.j = c;
			this.m = !1;
			this.h = new kf;
			this.i = new Di(a);
			Ai(this.g, HTMLMediaElement.HAVE_METADATA, this.h, function() {
				Ei(d, d.j)
			})
		}
		Ci.prototype.release = function() {
			this.h && (this.h.release(), this.h = null);
			null != this.i && (this.i.release(), this.i = null);
			this.l = function() {};
			this.g = null
		};

		function Fi(a) {
			return a.m ? a.g.currentTime : a.j
		}

		function Gi(a, b) {
			0 < a.g.readyState ? Hi(a.i, b) : Ai(a.g, HTMLMediaElement.HAVE_METADATA, a.h, function() {
				Ei(a, a.j)
			})
		}

		function Ei(a, b) {
			.001 > Math.abs(a.g.currentTime - b) ? Ii(a) : (a.h.oa(a.g, "seeking", function() {
				Ii(a)
			}), Hi(a.i, 0 == a.g.currentTime ? b : a.g.currentTime))
		}

		function Ii(a) {
			a.m = !0;
			a.h.B(a.g, "seeking", function() {
				return a.l()
			})
		}

		function Di(a) {
			var b = this;
			this.h = a;
			this.m = 10;
			this.l = this.j = this.i = 0;
			this.g = new O(function() {
				0 >= b.i ? b.g.stop() : b.h.currentTime != b.j ? b.g.stop() : (b.h.currentTime = b.l, b.i--)
			})
		}
		Di.prototype.release = function() {
			this.g && (this.g.stop(), this.g = null);
			this.h = null
		};

		function Hi(a, b) {
			a.j = a.h.currentTime;
			a.l = b;
			a.i = a.m;
			a.h.currentTime = b;
			a.g.Ca(.1)
		};

		function Ji(a) {
			function b() {
				null == c.h || 0 == c.h ? c.j = !0 : (c.i.oa(c.g, "seeking", function() {
					c.j = !0
				}), c.g.currentTime = Math.max(0, c.g.currentTime + c.h))
			}
			var c = this;
			this.g = a;
			this.j = !1;
			this.h = null;
			this.i = new kf;
			Ai(this.g, HTMLMediaElement.HAVE_CURRENT_DATA, this.i, function() {
				b()
			})
		}
		r = Ji.prototype;
		r.release = function() {
			this.i && (this.i.release(), this.i = null);
			this.g = null
		};
		r.td = function(a) {
			this.h = this.j ? this.h : a
		};
		r.Bc = function() {
			return (this.j ? this.g.currentTime : this.h) || 0
		};
		r.he = function() {
			return 0
		};
		r.ge = function() {
			return 0
		};
		r.Ae = function() {};

		function Ki(a, b, c, d, e, f) {
			var g = this;
			this.i = a;
			this.g = b.presentationTimeline;
			this.C = b.minBufferTime || 0;
			this.l = c;
			this.s = e;
			this.o = null;
			this.u = Li(a, c, f);
			this.j = new yi(a, b.presentationTimeline, c, this.u, f);
			this.h = new Ci(a, function() {
				a: {
					var h = g.j;h.m = !0;h.l = !1;
					var k = Fi(g.h);h = Mi(g, k);
					if (.001 < Math.abs(h - k) && (k = Date.now() / 1E3, !g.o || g.o < k - 1)) {
						g.o = k;
						Gi(g.h, h);
						h = void 0;
						break a
					}
					g.s();h = void 0
				}
				return h
			}, Ni(this, d));
			this.m = (new O(function() {
				if (0 != g.i.readyState && !g.i.paused) {
					var h = Fi(g.h),
						k = g.g.Ab(),
						l = g.g.Pa();
					3 >
						l - k && (k = l - 3);
					h < k && (h = Mi(g, h), g.i.currentTime = h)
				}
			})).Ca(.25)
		}
		r = Ki.prototype;
		r.release = function() {
			this.h && (this.h.release(), this.h = null);
			this.j && (this.j.release(), this.j = null);
			this.m && (this.m.stop(), this.m = null);
			this.i = this.h = this.g = this.l = null;
			this.s = function() {}
		};
		r.td = function(a) {
			Gi(this.h, a)
		};
		r.Bc = function() {
			var a = Fi(this.h);
			return 0 < this.i.readyState && !this.i.paused ? Oi(this, a) : a
		};
		r.he = function() {
			return this.u.o
		};
		r.ge = function() {
			return this.j.u
		};

		function Ni(a, b) {
			null == b ? b = Infinity > a.g.getDuration() ? a.g.Ab() : a.g.Pa() : 0 > b && (b = a.g.Pa() + b);
			return Pi(a, Oi(a, b))
		}
		r.Ae = function() {
			this.j.Nd()
		};

		function Pi(a, b) {
			var c = a.g.getDuration();
			return b >= c ? c - a.l.durationBackoff : b
		}

		function Mi(a, b) {
			var c = Math.max(a.C, a.l.rebufferingGoal),
				d = a.l.safeSeekOffset,
				e = a.g.Ab(),
				f = a.g.Pa(),
				g = a.g.getDuration();
			3 > f - e && (e = f - 3);
			var h = a.g.ec(c),
				k = a.g.ec(d);
			c = a.g.ec(c + d);
			return b >= g ? Pi(a, b) : b > f ? f : b < e ? Th(a.i.buffered, k) ? k : c : b >= h || Th(a.i.buffered, b) ? b : c
		}

		function Oi(a, b) {
			var c = a.g.Ab();
			if (b < c) return c;
			c = a.g.Pa();
			return b > c ? c : b
		}

		function Li(a, b, c) {
			if (!b.stallEnabled) return null;
			var d = b.stallSkip;
			b = new ui(new xi(a), b.stallThreshold, c);
			wi(b, function() {
				d ? a.currentTime += d : (a.pause(), a.play())
			});
			return b
		};

		function Qi(a) {
			this.J = a;
			this.g = null;
			this.h = 0;
			this.i = !1
		}
		r = Qi.prototype;
		r.release = function() {
			this.i || (this.J = [], this.g && this.g.stop(), this.g = null)
		};
		r.Kf = function() {
			this.i = !0
		};
		r.find = function(a) {
			for (var b = this.J.length - 1, c = b; 0 <= c; --c) {
				var d = this.J[c],
					e = c < b ? this.J[c + 1].startTime : d.endTime;
				if (a >= d.startTime && a < e) return c + this.h
			}
			return this.J.length && a < this.J[0].startTime ? this.h : null
		};
		r.get = function(a) {
			if (0 == this.J.length) return null;
			a -= this.h;
			return 0 > a || a >= this.J.length ? null : this.J[a]
		};
		r.offset = function(a) {
			if (!this.i)
				for (var b = t(this.J), c = b.next(); !c.done; c = b.next()) {
					c = c.value;
					c.startTime += a;
					c.endTime += a;
					c.j += a;
					c = t(c.h);
					for (var d = c.next(); !d.done; d = c.next()) d = d.value, d.startTime += a, d.endTime += a, d.j += a
				}
		};
		r.kc = function(a) {
			!this.i && a.length && (this.J = this.J.filter(function(b) {
				return b.startTime < a[0].startTime
			}), this.J.push.apply(this.J, ia(a)))
		};
		r.Db = function(a, b) {
			var c = this;
			a = a.filter(function(d) {
				return d.endTime > b && (0 == c.J.length || d.endTime > c.J[0].startTime)
			});
			this.kc(a);
			this.eb(b)
		};
		r.eb = function(a) {
			if (!this.i) {
				var b = this.J.length;
				this.J = this.J.filter(function(c) {
					return c.endTime > a
				});
				this.h += b - this.J.length
			}
		};
		r.Ya = function(a, b, c) {
			c = void 0 === c ? !1 : c;
			if (!this.i) {
				for (; this.J.length;)
					if (this.J[this.J.length - 1].startTime >= b) this.J.pop();
					else break;
				for (; this.J.length;)
					if (this.J[0].endTime <= a) this.J.shift(), c || this.h++;
					else break;
				0 != this.J.length && (a = this.J[this.J.length - 1], this.J[this.J.length - 1] = new Oh(a.startTime, b, a.m, a.Ba, a.la, a.i, a.timestampOffset, a.appendWindowStart, a.appendWindowEnd, a.h, a.tilesLayout, a.l, a.g))
			}
		};
		r.$c = function(a, b) {
			var c = this;
			this.i || (this.g && this.g.stop(), this.g = new O(function() {
				var d = b();
				d ? c.J.push.apply(c.J, ia(d)) : (c.g.stop(), c.g = null)
			}), this.g.Ca(a))
		};
		Qi.prototype[Symbol.iterator] = function() {
			return this.zb(0)
		};
		Qi.prototype.zb = function(a) {
			var b = this.find(a);
			if (null == b) return null;
			b--;
			var c = this.get(b + 1),
				d = -1;
			if (c && 0 < c.h.length)
				for (var e = c.h.length - 1; 0 <= e; --e) {
					var f = c.h[e];
					if (a >= f.startTime && a < f.endTime) {
						b++;
						d = e - 1;
						break
					}
				}
			return new Ri(this, b, d)
		};

		function Si(a, b, c) {
			return new Qi([new Oh(a, a + b, function() {
				return c
			}, 0, null, null, a, a, a + b)])
		}
		M("shaka.media.SegmentIndex", Qi);
		Qi.forSingleSegment = Si;
		Qi.prototype.getIteratorForTime = Qi.prototype.zb;
		Qi.prototype.updateEvery = Qi.prototype.$c;
		Qi.prototype.fit = Qi.prototype.Ya;
		Qi.prototype.evict = Qi.prototype.eb;
		Qi.prototype.mergeAndEvict = Qi.prototype.Db;
		Qi.prototype.offset = Qi.prototype.offset;
		Qi.prototype.get = Qi.prototype.get;
		Qi.prototype.find = Qi.prototype.find;
		Qi.prototype.markImmutable = Qi.prototype.Kf;
		Qi.prototype.release = Qi.prototype.release;

		function Ri(a, b, c) {
			this.i = a;
			this.h = b;
			this.g = c
		}
		Ri.prototype.current = function() {
			var a = this.i.get(this.h);
			a && 0 < a.h.length && a.ya().length && this.g >= a.h.length && (this.h++, this.g = 0, a = this.i.get(this.h));
			return a && 0 < a.h.length ? a.h[this.g] : a
		};
		Ri.prototype.next = function() {
			var a = this.i.get(this.h);
			a && 0 < a.h.length ? (this.g++, a.ya().length && this.g == a.h.length && (this.h++, this.g = 0)) : (this.h++, this.g = 0);
			a = this.current();
			return {
				value: a,
				done: !a
			}
		};
		M("shaka.media.SegmentIterator", Ri);
		Ri.prototype.next = Ri.prototype.next;
		Ri.prototype.current = Ri.prototype.current;

		function Ti() {
			Qi.call(this, []);
			this.j = []
		}
		pa(Ti, Qi);
		r = Ti.prototype;
		r.clone = function() {
			var a = new Ti;
			a.j = this.j.slice();
			return a
		};
		r.release = function() {
			for (var a = t(this.j), b = a.next(); !b.done; b = a.next()) b.value.release();
			this.j = []
		};
		r.find = function(a) {
			for (var b = 0, c = t(this.j), d = c.next(); !d.done; d = c.next()) {
				d = d.value;
				var e = d.find(a);
				if (null != e) return e + b;
				b += d.h + d.J.length
			}
			return null
		};
		r.get = function(a) {
			for (var b = 0, c = t(this.j), d = c.next(); !d.done; d = c.next()) {
				d = d.value;
				var e = d.get(a - b);
				if (e) return e;
				b += d.h + d.J.length
			}
			return null
		};
		r.offset = function() {};
		r.kc = function() {};
		r.eb = function() {};
		r.Db = function() {};
		r.Ya = function() {};
		r.$c = function() {};
		M("shaka.media.MetaSegmentIndex", Ti);
		Ti.prototype.updateEvery = Ti.prototype.$c;
		Ti.prototype.fit = Ti.prototype.Ya;
		Ti.prototype.mergeAndEvict = Ti.prototype.Db;
		Ti.prototype.evict = Ti.prototype.eb;
		Ti.prototype.merge = Ti.prototype.kc;
		Ti.prototype.offset = Ti.prototype.offset;
		Ti.prototype.get = Ti.prototype.get;
		Ti.prototype.find = Ti.prototype.find;
		Ti.prototype.release = Ti.prototype.release;

		function Ui(a) {
			var b = this;
			this.g = a;
			this.j = !1;
			this.i = this.g.Nc();
			this.h = new O(function() {
				b.g.ze(.25 * b.i)
			})
		}
		Ui.prototype.release = function() {
			this.h && (this.h.stop(), this.h = null);
			this.g = null
		};
		Ui.prototype.set = function(a) {
			this.i = a;
			Vi(this)
		};
		Ui.prototype.Jc = function() {
			return this.g.Jc()
		};

		function Vi(a) {
			a.h.stop();
			var b = a.j ? 0 : a.i;
			if (0 <= b) try {
				a.g.Nc() != b && a.g.$d(b);
				return
			} catch (c) {}
			a.h.Ca(.25);
			0 != a.g.Nc() && a.g.$d(0)
		};

		function Wi(a) {
			var b = this;
			this.h = a;
			this.g = new Set;
			this.i = (new O(function() {
				Xi(b, !1)
			})).Ca(.25)
		}
		Wi.prototype.release = function() {
			this.i.stop();
			for (var a = t(this.g), b = a.next(); !b.done; b = a.next()) b.value.release();
			this.g.clear()
		};

		function Xi(a, b) {
			for (var c = t(a.g), d = c.next(); !d.done; d = c.next()) d.value.j(a.h.currentTime, b)
		};

		function Yi(a) {
			Se.call(this);
			this.g = new Map;
			this.h = a
		}
		pa(Yi, Se);
		Yi.prototype.release = function() {
			this.g.clear();
			Se.prototype.release.call(this)
		};

		function Zi(a, b) {
			var c = a.g.get(b);
			c || (c = {
				mc: [],
				me: null,
				contentType: b
			}, a.g.set(b, c));
			return c
		}

		function $i(a, b, c) {
			var d = Zi(a, b.contentType);
			aj(a, d);
			a = {
				Gd: b,
				position: c
			};
			d = d.mc;
			b = d.findIndex(function(e) {
				return e.position >= c
			});
			0 <= b ? d.splice(b, d[b].position == c ? 1 : 0, a) : d.push(a)
		}
		Yi.prototype.j = function(a) {
			for (var b = t(this.g.values()), c = b.next(); !c.done; c = b.next()) {
				c = c.value;
				a: {
					var d = c.mc;
					for (var e = d.length - 1; 0 <= e; e--) {
						var f = d[e];
						if (f.position <= a) {
							d = f.Gd;
							break a
						}
					}
					d = null
				}
				if (e = d) e = c.me, e = !(e === d || e && d && e.bandwidth == d.bandwidth && e.audioSamplingRate == d.audioSamplingRate && e.codecs == d.codecs && e.contentType == d.contentType && e.frameRate == d.frameRate && e.height == d.height && e.mimeType == d.mimeType && e.channelsCount == d.channelsCount && e.pixelAspectRatio == d.pixelAspectRatio && e.width == d.width);
				if (e) a: {
					e = a;f = d.contentType;
					if ((f = this.h()[f]) && 0 < f.length) {
						var g = f[f.length - 1].end;
						if (e >= f[0].start && e < g) {
							e = !0;
							break a
						}
					}
					e = !1
				}
				e && (c.me = d, JSON.stringify(d), c = new R("qualitychange", new Map([
					["quality", d],
					["position", a]
				])), this.dispatchEvent(c))
			}
		};

		function aj(a, b) {
			var c = a.h()[b.contentType];
			if (c && 0 < c.length) {
				var d = c[0].start,
					e = c[c.length - 1].end,
					f = b.mc;
				b.mc = f.filter(function(g, h) {
					return g.position <= d && h + 1 < f.length && f[h + 1].position <= d || g.position >= e ? !1 : !0
				})
			} else b.mc = []
		};

		function bj(a) {
			Se.call(this);
			var b = this;
			this.g = new Set;
			this.i = a;
			this.h = (new O(function() {
				for (var c = b.i(), d = t(b.g), e = d.next(); !e.done; e = d.next()) e = e.value, e.endTime < c.start && (b.g["delete"](e), e = new R("regionremove", new Map([
					["region", e]
				])), b.dispatchEvent(e))
			})).Ca(2)
		}
		pa(bj, Se);
		bj.prototype.release = function() {
			this.g.clear();
			this.h.stop();
			Se.prototype.release.call(this)
		};

		function cj(a) {
			Se.call(this);
			var b = this;
			this.i = a;
			this.g = new Map;
			this.l = [{
				qb: null,
				pb: dj,
				ib: function(c, d) {
					return ej(b, "enter", c, d)
				}
			}, {
				qb: fj,
				pb: dj,
				ib: function(c, d) {
					return ej(b, "enter", c, d)
				}
			}, {
				qb: gj,
				pb: dj,
				ib: function(c, d) {
					return ej(b, "enter", c, d)
				}
			}, {
				qb: dj,
				pb: fj,
				ib: function(c, d) {
					return ej(b, "exit", c, d)
				}
			}, {
				qb: dj,
				pb: gj,
				ib: function(c, d) {
					return ej(b, "exit", c, d)
				}
			}, {
				qb: fj,
				pb: gj,
				ib: function(c, d) {
					return ej(b, "skip", c, d)
				}
			}, {
				qb: gj,
				pb: fj,
				ib: function(c, d) {
					return ej(b, "skip", c, d)
				}
			}];
			this.h = new kf;
			this.h.B(this.i, "regionremove",
				function(c) {
					b.g["delete"](c.region)
				})
		}
		pa(cj, Se);
		cj.prototype.release = function() {
			this.i = null;
			this.g.clear();
			this.h.release();
			this.h = null;
			Se.prototype.release.call(this)
		};
		cj.prototype.j = function(a, b) {
			for (var c = t(this.i.g), d = c.next(); !d.done; d = c.next()) {
				d = d.value;
				var e = this.g.get(d),
					f = a < d.startTime ? fj : a > d.endTime ? gj : dj;
				this.g.set(d, f);
				for (var g = t(this.l), h = g.next(); !h.done; h = g.next()) h = h.value, h.qb == e && h.pb == f && h.ib(d, b)
			}
		};

		function ej(a, b, c, d) {
			b = new R(b, new Map([
				["region", c],
				["seeking", d]
			]));
			a.dispatchEvent(b)
		}
		var fj = 1,
			dj = 2,
			gj = 3;

		function hj(a, b, c, d, e) {
			a = af(a, d, e);
			if (0 != b || null != c) a.headers.Range = c ? "bytes=" + b + "-" + c : "bytes=" + b + "-";
			return a
		};

		function ij(a, b) {
			var c = this;
			this.g = b;
			this.m = a;
			this.i = null;
			this.u = 1;
			this.o = this.l = null;
			this.h = new Map;
			this.C = !1;
			this.D = null;
			this.s = !1;
			this.j = new hf(function() {
				return jj(c)
			})
		}
		ij.prototype.destroy = function() {
			return this.j.destroy()
		};

		function jj(a) {
			var b, c, d, e;
			return K(function(f) {
				if (1 == f.g) {
					b = [];
					c = t(a.h.values());
					for (d = c.next(); !d.done; d = c.next()) e = d.value, kj(e), b.push(lj(e));
					return u(f, Promise.all(b), 2)
				}
				a.h.clear();
				a.g = null;
				a.m = null;
				a.i = null;
				z(f)
			})
		}
		ij.prototype.configure = function(a) {
			this.i = a;
			this.D = new Ge({
				maxAttempts: Math.max(a.retryParameters.maxAttempts, 2),
				baseDelay: a.retryParameters.baseDelay,
				backoffFactor: a.retryParameters.backoffFactor,
				fuzzFactor: a.retryParameters.fuzzFactor,
				timeout: 0,
				stallTimeout: 0,
				connectionTimeout: 0
			}, !0)
		};
		ij.prototype.start = function() {
			var a = this;
			return K(function(b) {
				if (1 == b.g) return u(b, mj(a), 2);
				jf(a.j);
				a.C = !0;
				z(b)
			})
		};

		function nj(a, b) {
			var c, d, e, f, g, h;
			K(function(k) {
				switch (k.g) {
					case 1:
						return c = mc, B(k, 2), u(k, oi(a.g.P, c.X), 4);
					case 4:
						va(k, 3);
						break;
					case 2:
						if (d = F(k), a.g) a.g.onError(d);
					case 3:
						e = Zc(b.mimeType, b.codecs);
						ai(a.g.P, e, a.m.sequenceMode);
						f = a.g.P.m;
						if (g = f.isTextVisible() || a.i.alwaysStreamText) h = oj(b), a.h.set(c.X, h), pj(a, h, 0);
						z(k)
				}
			})
		}

		function qj(a) {
			var b = a.h.get(lc);
			b && (kj(b), lj(b)["catch"](function() {}), a.h["delete"](lc));
			a.o = null
		}

		function rj(a, b) {
			var c = a.h.get("video");
			if (c) {
				var d = c.stream;
				if (d)
					if (b) {
						var e = d.trickModeVideo;
						e && !c.mb && (sj(a, e, !1, 0, !1), c.mb = d)
					} else if (d = c.mb) c.mb = null, sj(a, d, !0, 0, !1)
			}
		}

		function tj(a, b, c, d, e) {
			c = void 0 === c ? !1 : c;
			d = void 0 === d ? 0 : d;
			e = void 0 === e ? !1 : e;
			a.l = b;
			a.C && (b.video && sj(a, b.video, c, d, e), b.audio && sj(a, b.audio, c, d, e))
		}

		function uj(a, b) {
			a.o = b;
			a.C && sj(a, b, !0, 0, !1)
		}

		function sj(a, b, c, d, e) {
			var f = a.h.get(b.type);
			f || b.type != lc ? f && (f.mb && (b.trickModeVideo ? (f.mb = b, b = b.trickModeVideo) : f.mb = null), f.stream != b || e) && (b.type == lc && ai(a.g.P, Zc(b.mimeType, b.codecs), a.m.sequenceMode), f.stream.closeSegmentIndex && f.stream.closeSegmentIndex(), f.stream = b, f.ba = null, c && (f.Zb ? f.cd = !0 : f.Ha ? (f.ob = !0, f.Ec = d, f.cd = !0) : (kj(f), vj(a, f, !0, d)["catch"](function(g) {
				if (a.g) a.g.onError(g)
			}))), wj(a, f)["catch"](function(g) {
				if (a.g) a.g.onError(g)
			})) : nj(a, b)
		}

		function wj(a, b) {
			var c, d;
			return K(function(e) {
				if (1 == e.g) {
					if (!b.sa) return e["return"]();
					c = b.stream;
					d = b.sa;
					return c.segmentIndex ? e.A(2) : u(e, c.createSegmentIndex(), 2)
				}
				if (b.sa != d || b.stream != c) return e["return"]();
				var f = a.g.Mc();
				var g = fi(a.g.P, b.type),
					h = b.stream.segmentIndex.find(b.za ? b.za.endTime : f),
					k = null == h ? null : b.stream.segmentIndex.get(h);
				h = k ? k.la ? k.la - k.Ba : null : null;
				k && !h && (h = (k.endTime - k.getStartTime()) * (b.stream.bandwidth || 0) / 8);
				h ? ((k = k.i) && (h += (k.la ? k.la - k.Ba : null) || 0), k = a.g.getBandwidthEstimate(),
					f = 8 * h / k < (g || 0) - f - Math.max(a.m.minBufferTime || 0, a.i.rebufferingGoal) || b.sa.h.g > h ? !0 : !1) : f = !1;
				f && b.sa.abort();
				z(e)
			})
		}
		ij.prototype.qc = function() {
			for (var a = this.g.Mc(), b = t(this.h.keys()), c = b.next(); !c.done; c = b.next()) {
				var d = c.value;
				c = this.h.get(d);
				c.ba = null;
				var e = this.g.P;
				d == lc ? (e = e.g, e = null == e.g || null == e.h ? !1 : a >= e.g && a < e.h) : (e = ei(e, d), e = Th(e, a));
				if (!e) {
					(null != fi(this.g.P, d) || c.Ha) && xj(this, c);
					c.sa && (c.sa.abort(), c.sa = null);
					if (d === lc)
						for (d = this.g.P.C.g, d.l = 0, d.h = [], d.g = [], e = d.i, e.i = [], e.h = [], e.g = 0, Ah(d), d = t(d.j.values()), e = d.next(); !e.done; e = d.next()) vh(e.value);
					c.qc = !0
				}
			}
		};

		function xj(a, b) {
			b.Zb || b.ob || (b.Ha ? (b.ob = !0, b.Ec = 0) : null == di(a.g.P, b.type) ? null == b.Ka && pj(a, b, 0) : (kj(b), vj(a, b, !1, 0)["catch"](function(c) {
				if (a.g) a.g.onError(c)
			})))
		}

		function mj(a) {
			var b, c, d, e, f, g, h, k, l, m;
			return K(function(p) {
				if (1 == p.g) {
					b = mc;
					if (!a.l) throw new N(2, 5, 5006);
					c = new Map;
					d = new Set;
					a.l.audio && (c.set(b.cb, a.l.audio), d.add(a.l.audio));
					a.l.video && (c.set(b.va, a.l.video), d.add(a.l.video));
					a.o && (c.set(b.X, a.o), d.add(a.o));
					e = a.g.P;
					f = a.i.forceTransmuxTS;
					return u(p, e.init(c, f, a.m.sequenceMode), 2)
				}
				jf(a.j);
				var n = a.m.presentationTimeline.getDuration();
				Infinity > n ? a.g.P.Ia(n) : a.g.P.Ia(Math.pow(2, 32));
				g = t(c.keys());
				for (h = g.next(); !h.done; h = g.next()) k = h.value, l = c.get(k),
					a.h.has(k) || (m = oj(l), a.h.set(k, m), pj(a, m, 0));
				z(p)
			})
		}

		function oj(a) {
			return {
				stream: a,
				type: a.type,
				ba: null,
				za: null,
				Sc: null,
				Cd: null,
				Bd: null,
				zd: null,
				mb: null,
				endOfStream: !1,
				Ha: !1,
				Ka: null,
				ob: !1,
				Ec: 0,
				cd: !1,
				Zb: !1,
				qc: !0,
				Rd: !1,
				hc: !1,
				sa: null
			}
		}

		function yj(a, b) {
			var c, d, e, f, g;
			return K(function(h) {
				switch (h.g) {
					case 1:
						jf(a.j);
						if (b.Ha || null == b.Ka || b.Zb) return h["return"]();
						b.Ka = null;
						if (!b.ob) {
							h.A(2);
							break
						}
						return u(h, vj(a, b, b.cd, b.Ec), 3);
					case 3:
						return h["return"]();
					case 2:
						if (b.stream.segmentIndex) {
							h.A(4);
							break
						}
						c = b.stream;
						return u(h, b.stream.createSegmentIndex(), 5);
					case 5:
						if (c != b.stream) return c.closeSegmentIndex && c.closeSegmentIndex(), null == b.Ka && pj(a, b, 0), h["return"]();
					case 4:
						B(h, 6);
						d = zj(a, b);
						null != d && (pj(a, b, d), b.hc = !1);
						va(h, 7);
						break;
					case 6:
						return e =
							F(h), u(h, Aj(a, e), 8);
					case 8:
						return h["return"]();
					case 7:
						f = Array.from(a.h.values());
						if (!a.C || !f.every(function(k) {
								return k.endOfStream
							})) {
							h.A(0);
							break
						}
						return u(h, a.g.P.endOfStream(), 10);
					case 10:
						jf(a.j), g = a.g.P.getDuration(), 0 != g && g < a.m.presentationTimeline.getDuration() && a.m.presentationTimeline.Ia(g), z(h)
				}
			})
		}

		function zj(a, b) {
			if (Bj(b)) return mi(a.g.P, b.stream.originalId || ""), null;
			b.type == lc && ni(a.g.P);
			var c = a.g.Mc(),
				d = b.za ? b.za.endTime : c,
				e = gi(a.g.P, b.type, c),
				f = Math.max(a.m.minBufferTime || 0, a.i.rebufferingGoal, a.i.bufferingGoal) * a.u;
			if (1E-6 > a.m.presentationTimeline.getDuration() - d) return b.endOfStream = !0, "video" == b.type && (c = a.h.get(lc)) && Bj(c) && (c.endOfStream = !0), null;
			b.endOfStream = !1;
			if (e >= f) return a.i.updateIntervalSeconds / 2;
			e = fi(a.g.P, b.type);
			e = Cj(a, b, c, e);
			if (!e) return a.i.updateIntervalSeconds;
			f = Infinity;
			var g = Array.from(a.h.values());
			g = t(g);
			for (var h = g.next(); !h.done; h = g.next()) h = h.value, Bj(h) || h.ba && !h.ba.current() || (f = Math.min(f, h.za ? h.za.endTime : c));
			if (d >= f + a.m.presentationTimeline.g) return a.i.updateIntervalSeconds;
			Dj(a, b, c, e)["catch"](function() {});
			return null
		}

		function Cj(a, b, c, d) {
			if (b.ba) return b.ba.current();
			if (b.za || d) return b.ba = b.stream.segmentIndex.zb(b.za ? b.za.endTime : d), b.ba && b.ba.next().value;
			a = a.i.inaccurateManifestTolerance;
			d = Math.max(c - a, 0);
			var e = null;
			a && (b.ba = b.stream.segmentIndex.zb(d), e = b.ba && b.ba.next().value);
			e || (b.ba = b.stream.segmentIndex.zb(c), e = b.ba && b.ba.next().value);
			return e
		}

		function Dj(a, b, c, d) {
			var e, f, g, h, k, l, m, p, n, q, w, y;
			return K(function(x) {
				switch (x.g) {
					case 1:
						e = mc;
						f = b.stream;
						g = b.ba;
						b.Ha = !0;
						B(x, 2);
						if (2 == d.Oc()) throw new N(1, 1, 1011);
						return u(x, Ej(a, b, d), 4);
					case 4:
						jf(a.j);
						if (a.s) return x["return"]();
						h = "video/mp4" == f.mimeType || "audio/mp4" == f.mimeType;
						k = window.ReadableStream;
						if (a.i.lowLatencyMode && k && h) return p = new Uint8Array(0), n = function(v) {
							var D, C, A;
							return K(function(G) {
								jf(a.j);
								if (a.s) return G["return"]();
								p = Fj(p, v);
								D = !1;
								C = 0;
								(new qg).box("mdat", function(E) {
									C = E.size + E.start;
									D = !0
								}).parse(p, !1, !0);
								if (!D) return G.A(0);
								A = p.subarray(0, C);
								p = p.subarray(C);
								return u(G, Gj(a, b, c, f, d, A), 0)
							})
						}, u(x, Hj(a, b, d, n), 6);
						l = Hj(a, b, d);
						return u(x, l, 7);
					case 7:
						return m = x.h, jf(a.j), a.s ? x["return"]() : b.ob ? (b.Ha = !1, pj(a, b, 0), x["return"]()) : u(x, Gj(a, b, c, f, d, m), 6);
					case 6:
						jf(a.j);
						if (a.s) return x["return"]();
						b.za = d;
						g.next();
						b.Ha = !1;
						b.Rd = !1;
						q = a.g.P.Oa();
						w = q[b.type];
						$a(JSON.stringify(w));
						b.ob || a.g.Nd();
						pj(a, b, 0);
						va(x, 0);
						break;
					case 2:
						y = F(x);
						jf(a.j, y);
						if (a.s) return x["return"]();
						b.Ha = !1;
						if (7001 == y.code) b.Ha = !1, b.Ka = null, pj(a, b, 0), x.A(0);
						else if (b.type == e.X && a.i.ignoreTextStreamFailures) a.h["delete"](e.X), x.A(0);
						else if (3017 == y.code) Ij(a, b, y), x.A(0);
						else if (1001 == y.code && y.data && 404 == y.data[1]) b.Ha = !1, b.Ka = null, pj(a, b, 1), x.A(0);
						else return b.hc = !0, y.severity = 2, u(x, Aj(a, y), 0)
				}
			})
		}

		function Fj(a, b) {
			var c = new Uint8Array(a.length + b.length);
			c.set(a);
			c.set(b, a.length);
			return c
		}

		function Ij(a, b, c) {
			if (!Array.from(a.h.values()).some(function(e) {
					return e != b && e.Rd
				})) {
				var d = Math.round(100 * a.u);
				if (20 < d) a.u -= .2;
				else if (4 < d) a.u -= .04;
				else {
					b.hc = !0;
					a.s = !0;
					a.g.onError(c);
					return
				}
				b.Rd = !0
			}
			pj(a, b, 4)
		}

		function Ej(a, b, c) {
			var d, e, f, g, h, k, l;
			return K(function(m) {
				d = [];
				e = Math.max(0, c.appendWindowStart - .1);
				f = c.appendWindowEnd + .01;
				g = c.timestampOffset;
				if (g != b.Cd || e != b.Bd || f != b.zd) h = function() {
					var p;
					return K(function(n) {
						if (1 == n.g) return B(n, 2), b.Bd = e, b.zd = f, b.Cd = g, u(n, pi(a.g.P, b.type, g, e, f, a.m.sequenceMode), 4);
						if (2 != n.g) return va(n, 0);
						p = F(n);
						b.Bd = null;
						b.zd = null;
						b.Cd = null;
						throw p;
					})
				}, d.push(h());
				!Nh(c.i, b.Sc) && (b.Sc = c.i) && (k = Hj(a, b, c.i), l = function() {
					var p, n, q;
					return K(function(w) {
						switch (w.g) {
							case 1:
								return B(w,
									2), u(w, k, 4);
							case 4:
								return p = w.h, jf(a.j), n = b.stream.closedCaptions && 0 < b.stream.closedCaptions.size, u(w, hi(a.g.P, b.type, p, null, n), 5);
							case 5:
								va(w, 0);
								break;
							case 2:
								throw q = F(w), b.Sc = null, q;
						}
					})
				}, a.g.Nf(c.startTime, c.i), d.push(l()));
				return u(m, Promise.all(d), 0)
			})
		}

		function Gj(a, b, c, d, e, f) {
			var g, h;
			return K(function(k) {
				if (1 == k.g) return g = d.closedCaptions && 0 < d.closedCaptions.size, (null != d.emsgSchemeIdUris && 0 < d.emsgSchemeIdUris.length || a.i.dispatchAllEmsgBoxes) && (new qg).U("emsg", function(l) {
					var m = d.emsgSchemeIdUris;
					if (0 === l.version) {
						var p = l.reader.nc();
						var n = l.reader.nc();
						var q = l.reader.N();
						var w = l.reader.N();
						var y = l.reader.N();
						var x = l.reader.N();
						var v = e.startTime + w / q
					} else q = l.reader.N(), v = l.reader.Hb() / q + e.timestampOffset, w = v - e.startTime, y = l.reader.N(), x = l.reader.N(),
						p = l.reader.nc(), n = l.reader.nc();
					l = l.reader.$a(l.reader.R.byteLength - l.reader.$());
					if (m && m.includes(p) || a.i.dispatchAllEmsgBoxes) "urn:mpeg:dash:event:2012" == p ? a.g.Of() : (m = (new Map).set("detail", {
						startTime: v,
						endTime: v + y / q,
						schemeIdUri: p,
						value: n,
						timescale: q,
						presentationTimeDelta: w,
						eventDuration: y,
						id: x,
						messageData: l
					}), m = new R("emsg", m), a.g.onEvent(m))
				}).parse(f), u(k, Jj(a, b, c), 2);
				if (3 != k.g) return jf(a.j), h = b.qc, b.qc = !1, u(k, hi(a.g.P, b.type, f, e, g, h), 3);
				jf(a.j);
				z(k)
			})
		}

		function Jj(a, b, c) {
			var d, e, f, g;
			return K(function(h) {
				if (1 == h.g) {
					d = Math.max(a.i.bufferBehind, a.m.presentationTimeline.g);
					e = di(a.g.P, b.type);
					if (null == e) return h["return"]();
					f = c - e;
					g = f - d;
					return .01 >= g ? h["return"]() : u(h, a.g.P.remove(b.type, e, e + g), 2)
				}
				jf(a.j);
				z(h)
			})
		}

		function Bj(a) {
			return a && a.type == lc && ("application/cea-608" == a.stream.mimeType || "application/cea-708" == a.stream.mimeType)
		}

		function Hj(a, b, c, d) {
			var e, f, g, h, k;
			return K(function(l) {
				if (1 == l.g) return e = gf, f = hj(c.ya(), c.Ba, c.la, a.i.retryParameters, d), g = b.stream, a.g.modifySegmentRequest(f, {
					type: g.type,
					init: c instanceof Mh,
					duration: c.endTime - c.startTime,
					mimeType: g.mimeType,
					codecs: g.codecs,
					bandwidth: g.bandwidth
				}), h = a.g.kb.request(e, f), b.sa = h, u(l, h.promise, 2);
				k = l.h;
				b.sa = null;
				return l["return"](k.data)
			})
		}

		function vj(a, b, c, d) {
			var e, f;
			return K(function(g) {
				if (1 == g.g) return b.ob = !1, b.cd = !1, b.Ec = 0, b.Zb = !0, b.za = null, b.Sc = null, b.ba = null, d ? (e = a.g.Mc(), f = a.g.P.getDuration(), u(g, a.g.P.remove(b.type, e + d, f), 3)) : u(g, oi(a.g.P, b.type), 4);
				if (3 != g.g) return jf(a.j), c ? u(g, a.g.P.flush(b.type), 3) : g.A(3);
				jf(a.j);
				b.Zb = !1;
				b.endOfStream = !1;
				pj(a, b, 0);
				z(g)
			})
		}

		function pj(a, b, c) {
			var d = b.type;
			if (d != lc || a.h.has(d)) b.Ka = (new pc(function() {
				var e;
				return K(function(f) {
					if (1 == f.g) return B(f, 2), u(f, yj(a, b), 4);
					if (2 != f.g) return va(f, 0);
					e = F(f);
					if (a.g) a.g.onError(e);
					z(f)
				})
			})).S(c)
		}

		function kj(a) {
			null != a.Ka && (a.Ka.stop(), a.Ka = null)
		}

		function lj(a) {
			return K(function(b) {
				return a.sa ? u(b, a.sa.abort(), 0) : b.A(0)
			})
		}

		function Aj(a, b) {
			return K(function(c) {
				if (1 == c.g) return u(c, Ie(a.D), 2);
				jf(a.j);
				a.g.onError(b);
				b.handled || a.i.failureCallback(b);
				z(c)
			})
		};

		function Kj(a, b) {
			var c = Lj(),
				d = this;
			this.j = b;
			this.i = a;
			this.l = c;
			this.o = null;
			this.m = [];
			this.h = this.g = null;
			this.u = Promise.resolve().then(function() {
				return Mj(d)
			});
			this.s = new hf(function() {
				return Nj(d)
			})
		}
		Kj.prototype.destroy = function() {
			return this.s.destroy()
		};

		function Nj(a) {
			var b, c, d;
			return K(function(e) {
				if (1 == e.g) return a.h && a.h.abort(), Oj(a), u(e, a.u, 2);
				a.g && a.g.Ga.lb();
				b = t(a.m);
				for (c = b.next(); !c.done; c = b.next()) d = c.value, d.Ga.lb();
				a.g = null;
				a.m = [];
				a.j = null;
				z(e)
			})
		}

		function Pj(a, b) {
			var c = {
				Fb: function() {},
				Uc: function() {},
				lb: function() {},
				onError: function() {},
				Wc: function() {},
				Zg: function() {}
			};
			a.m.push({
				create: b,
				Ga: c
			});
			a.h && a.h.abort();
			Oj(a);
			return c
		}

		function Mj(a) {
			return K(function(b) {
				if (a.s.g) b = b.A(0);
				else {
					if (0 == a.m.length || a.g && !a.g.hb) var c = !1;
					else {
						a.g && (a.g.Ga.lb(), a.g = null);
						c = a.m.shift();
						var d = c.create(a.l);
						d ? (c.Ga.Fb(), a.g = {
							node: d.node,
							payload: d.payload,
							hb: d.hb,
							Ga: c.Ga
						}) : c.Ga.Wc();
						c = !0
					}
					c ? c = Promise.resolve() : a.g ? c = Qj(a) : (a.j.Mf(a.i), a.o = new nc, c = a.o);
					b = u(b, c, 1)
				}
				return b
			})
		}

		function Qj(a) {
			var b, c;
			return K(function(d) {
				switch (d.g) {
					case 1:
						return a.i = a.j.uf(a.i, a.l, a.g.node, a.g.payload), B(d, 2), a.h = a.j.df(a.i, a.l, a.g.payload), u(d, a.h.promise, 4);
					case 4:
						a.h = null;
						a.i == a.g.node && (a.g.Ga.Uc(), a.g = null);
						va(d, 0);
						break;
					case 2:
						b = F(d);
						if (7001 == b.code) a.g.Ga.lb();
						else a.g.Ga.onError(b);
						a.g = null;
						a.h = null;
						c = a;
						return u(d, a.j.handleError(a.l, b), 5);
					case 5:
						c.i = d.h, z(d)
				}
			})
		}

		function Oj(a) {
			a.o && (a.o.resolve(), a.o = null)
		};

		function Rj(a) {
			this.g = null;
			for (var b = t(Array.from(a.textTracks)), c = b.next(); !c.done; c = b.next()) c = c.value, c.mode = "disabled", "Shaka Player TextTrack" == c.label && (this.g = c);
			this.g || (this.g = a.addTextTrack("subtitles", "Shaka Player TextTrack"));
			this.g.mode = "hidden"
		}
		r = Rj.prototype;
		r.remove = function(a, b) {
			if (!this.g) return !1;
			Sj(this.g, function(c) {
				return c.startTime < b && c.endTime > a
			});
			return !0
		};
		r.append = function(a) {
			function b(g) {
				var h = [],
					k = 700 <= g.fontWeight,
					l = "italic" == g.fontStyle,
					m = g.textDecoration.includes("underline");
				k && h.push("b");
				l && h.push("i");
				m && h.push("u");
				k = h.reduce(function(p, n) {
					return p + "<" + n + ">"
				}, "");
				h = h.reduceRight(function(p, n) {
					return p + "</" + n + ">"
				}, "");
				return g.lineBreak ? "\n" : g.nestedCues.length ? g.nestedCues.map(b).join("") : k + g.payload + h
			}
			var c = a.map(function(g) {
					if (g.nestedCues.length) {
						var h = g.clone();
						h.nestedCues = [];
						h.payload = b(g);
						return h
					}
					return g
				}),
				d = [];
			a = this.g.cues ? Array.from(this.g.cues) : [];
			var e = {};
			c = t(c);
			for (var f = c.next(); !f.done; e = {
					rb: e.rb
				}, f = c.next()) e.rb = f.value, a.some(function(g) {
				return function(h) {
					return h.startTime == g.rb.startTime && h.endTime == g.rb.endTime && h.text == g.rb.payload ? !0 : !1
				}
			}(e)) || (f = Tj(e.rb)) && d.push(f);
			a = d.slice().sort(function(g, h) {
				return g.startTime != h.startTime ? g.startTime - h.startTime : g.endTime != h.endTime ? g.endTime - h.startTime : "line" in VTTCue.prototype ? d.indexOf(h) - d.indexOf(g) : d.indexOf(g) - d.indexOf(h)
			});
			a = t(a);
			for (e = a.next(); !e.done; e = a.next()) this.g.addCue(e.value)
		};
		r.destroy = function() {
			this.g && (Sj(this.g, function() {
				return !0
			}), this.g.mode = "disabled");
			this.g = null;
			return Promise.resolve()
		};
		r.isTextVisible = function() {
			return "showing" == this.g.mode
		};
		r.setTextVisibility = function(a) {
			this.g.mode = a ? "showing" : "hidden"
		};

		function Tj(a) {
			if (a.startTime >= a.endTime) return null;
			var b = new VTTCue(a.startTime, a.endTime, a.payload);
			b.lineAlign = a.lineAlign;
			b.positionAlign = a.positionAlign;
			a.size && (b.size = a.size);
			try {
				b.align = a.textAlign
			} catch (c) {}
			"center" == a.textAlign && "center" != b.align && (b.align = "middle");
			"vertical-lr" == a.writingMode ? b.vertical = "lr" : "vertical-rl" == a.writingMode && (b.vertical = "rl");
			1 == a.lineInterpretation && (b.snapToLines = !1);
			null != a.line && (b.line = a.line);
			null != a.position && (b.position = a.position);
			return b
		}

		function Sj(a, b) {
			var c = a.mode;
			a.mode = "showing" == c ? "showing" : "hidden";
			for (var d = t(Array.from(a.cues)), e = d.next(); !e.done; e = d.next())(e = e.value) && b(e) && a.removeCue(e);
			a.mode = c
		}
		M("shaka.text.SimpleTextDisplayer", Rj);
		Rj.prototype.setTextVisibility = Rj.prototype.setTextVisibility;
		Rj.prototype.isTextVisible = Rj.prototype.isTextVisible;
		Rj.prototype.destroy = Rj.prototype.destroy;
		Rj.prototype.append = Rj.prototype.append;
		Rj.prototype.remove = Rj.prototype.remove;

		function Uj() {}

		function Vj(a) {
			for (; a.firstChild;) a.removeChild(a.firstChild)
		}
		M("shaka.util.Dom", Uj);
		Uj.removeAllChildren = Vj;

		function Wj(a, b) {
			var c = this;
			this.j = !1;
			this.i = [];
			this.u = a;
			this.m = b;
			this.g = document.createElement("div");
			this.g.classList.add("shaka-text-container");
			this.g.style.textAlign = "center";
			this.g.style.display = "flex";
			this.g.style.flexDirection = "column";
			this.g.style.alignItems = "center";
			this.g.style.justifyContent = "flex-end";
			this.m.appendChild(this.g);
			this.s = (new O(function() {
				Xj(c)
			})).Ca(.25);
			this.h = new Map;
			this.o = new kf;
			this.o.B(document, "fullscreenchange", function() {
				Xj(c, !0)
			});
			this.l = null;
			"ResizeObserver" in
			window && (this.l = new ResizeObserver(function() {
				Xj(c, !0)
			}), this.l.observe(this.g))
		}
		r = Wj.prototype;
		r.append = function(a) {
			var b = [].concat(ia(this.i)),
				c = {};
			a = t(a);
			for (var d = a.next(); !d.done; c = {
					wc: c.wc
				}, d = a.next()) c.wc = d.value, b.some(function(e) {
				return function(f) {
					return tb(f, e.wc)
				}
			}(c)) || this.i.push(c.wc);
			Xj(this)
		};
		r.destroy = function() {
			this.m.removeChild(this.g);
			this.g = null;
			this.j = !1;
			this.i = [];
			this.s && this.s.stop();
			this.h.clear();
			this.o && (this.o.release(), this.o = null);
			this.l && (this.l.disconnect(), this.l = null)
		};
		r.remove = function(a, b) {
			if (!this.g) return !1;
			var c = this.i.length;
			this.i = this.i.filter(function(d) {
				return d.startTime < a || d.endTime >= b
			});
			Xj(this, c > this.i.length);
			return !0
		};
		r.isTextVisible = function() {
			return this.j
		};
		r.setTextVisibility = function(a) {
			this.j = a
		};

		function Yj(a, b, c, d, e) {
			var f = !1,
				g = [],
				h = [];
			b = t(b);
			for (var k = b.next(); !k.done; k = b.next()) {
				k = k.value;
				e.push(k);
				var l = a.h.get(k),
					m = k.startTime <= d && k.endTime > d,
					p = l ? l.Pe : null;
				l && (g.push(l.le), m || (f = !0, a.h["delete"](k), l = null));
				m && (h.push(k), l || (Zj(a, k, e), l = a.h.get(k), p = l.Pe, f = !0));
				0 < k.nestedCues.length && p && Yj(a, k.nestedCues, p, d, e);
				e.pop()
			}
			if (f) {
				d = t(g);
				for (e = d.next(); !e.done; e = d.next()) c.removeChild(e.value);
				h.sort(function(n, q) {
					return n.startTime != q.startTime ? n.startTime - q.startTime : n.endTime - q.endTime
				});
				h = t(h);
				for (k = h.next(); !k.done; k = h.next()) d = a.h.get(k.value), c.appendChild(d.le)
			}
		}

		function Xj(a, b) {
			if (a.g) {
				var c = a.u.currentTime;
				(!a.j || (void 0 === b ? 0 : b)) && 0 < a.h.size && (Vj(a.g), a.h.clear());
				if (a.j) {
					for (var d = new Map, e = t(a.h.keys()), f = e.next(); !f.done; f = e.next()) f = f.value, d.set(f, a.h.get(f));
					Yj(a, a.i, a.g, c, [])
				}
			}
		}

		function Zj(a, b, c) {
			var d = 1 < c.length,
				e = d ? "span" : "div";
			b.lineBreak && (e = "br");
			d = !d && 0 < b.nestedCues.length;
			var f = document.createElement(e);
			"br" != e && ak(a, f, b, c, d);
			c = f;
			d && (c = document.createElement("span"), c.classList.add("shaka-text-wrapper"), c.style.backgroundColor = b.backgroundColor, f.appendChild(c));
			a.h.set(b, {
				le: f,
				Pe: c
			})
		}

		function ak(a, b, c, d, e) {
			var f = b.style,
				g = 0 == c.nestedCues.length,
				h = 1 < d.length;
			f.whiteSpace = "pre-wrap";
			var k = c.payload.replace(/\s+$/g, function(m) {
				return "\u00a0".repeat(m.length)
			});
			f.webkitTextStrokeColor = c.textStrokeColor;
			f.webkitTextStrokeWidth = c.textStrokeWidth;
			f.color = c.color;
			f.direction = c.direction;
			f.opacity = c.opacity;
			f.paddingLeft = bk(c.linePadding, c, a.m);
			f.paddingRight = bk(c.linePadding, c, a.m);
			f.textShadow = c.textShadow;
			if (c.backgroundImage) f.backgroundImage = "url('" + c.backgroundImage + "')", f.backgroundRepeat =
				"no-repeat", f.backgroundSize = "contain", f.backgroundPosition = "center";
			else {
				if (c.nestedCues.length) var l = b;
				else l = document.createElement("span"), b.appendChild(l);
				c.border && (l.style.border = c.border);
				e || ((b = ck(d, function(m) {
					return m.backgroundColor
				})) ? l.style.backgroundColor = b : k && (l.style.backgroundColor = "rgba(0, 0, 0, 0.8)"));
				k && (l.textContent = k)
			}
			h && !d[d.length - 1].isContainer ? f.display = "inline" : (f.display = "flex", f.flexDirection = "column", f.alignItems = "center", f.justifyContent = "before" == c.displayAlign ?
				"flex-start" : "center" == c.displayAlign ? "center" : "flex-end");
			g || (f.margin = "0");
			f.fontFamily = c.fontFamily;
			f.fontWeight = c.fontWeight.toString();
			f.fontStyle = c.fontStyle;
			f.letterSpacing = c.letterSpacing;
			f.fontSize = bk(c.fontSize, c, a.m);
			c.line ? 1 == c.lineInterpretation && (f.position = "absolute", f.left = "0", f.top = "0", c.writingMode == nb ? (f.width = "100%", c.lineAlign == pb ? f.top = c.line + "%" : "end" == c.lineAlign && (f.bottom = c.line + "%")) : "vertical-lr" == c.writingMode ? (f.height = "100%", c.lineAlign == pb ? f.left = c.line + "%" : "end" ==
				c.lineAlign && (f.right = c.line + "%")) : (f.height = "100%", c.lineAlign == pb ? f.right = c.line + "%" : "end" == c.lineAlign && (f.left = c.line + "%"))) : c.region && c.region.id && (a = c.region.widthUnits == Ab ? "%" : "px", d = c.region.viewportAnchorUnits == Ab ? "%" : "px", f.height = c.region.height + (c.region.heightUnits == Ab ? "%" : "px"), f.width = c.region.width + a, f.position = "absolute", f.top = c.region.viewportAnchorY + d, f.left = c.region.viewportAnchorX + d);
			f.lineHeight = c.lineHeight;
			c.position && (c.writingMode == nb ? f.paddingLeft = c.position : f.paddingTop =
				c.position);
			"line-left" == c.positionAlign ? f.cssFloat = "left" : "line-right" == c.positionAlign && (f.cssFloat = "right");
			f.textAlign = c.textAlign;
			f.textDecoration = c.textDecoration.join(" ");
			f.writingMode = c.writingMode;
			"writingMode" in document.documentElement.style && f.writingMode == c.writingMode || (f.webkitWritingMode = c.writingMode);
			c.size && (c.writingMode == nb ? f.width = c.size + "%" : f.height = c.size + "%")
		}

		function bk(a, b, c) {
			var d = (d = (new RegExp(/(\d*\.?\d+)([a-z]+|%+)/)).exec(a)) ? {
				value: Number(d[1]),
				unit: d[2]
			} : null;
			if (!d) return a;
			var e = d.value;
			switch (d.unit) {
				case "%":
					return e / 100 * c.clientHeight / b.cellResolution.rows + "px";
				case "c":
					return c.clientHeight * e / b.cellResolution.rows + "px";
				default:
					return a
			}
		}

		function ck(a, b) {
			for (var c = a.length - 1; 0 <= c; c--) {
				var d = b(a[c]);
				if (d || 0 === d) return d
			}
			return null
		}
		M("shaka.text.UITextDisplayer", Wj);
		Wj.prototype.setTextVisibility = Wj.prototype.setTextVisibility;
		Wj.prototype.isTextVisible = Wj.prototype.isTextVisible;
		Wj.prototype.remove = Wj.prototype.remove;
		Wj.prototype.destroy = Wj.prototype.destroy;
		Wj.prototype.append = Wj.prototype.append;

		function dk(a, b) {
			function c(h) {
				for (var k = h, l = t(b), m = l.next(); !m.done; m = l.next()) m = m.value, m.end && m.start < h && (k += m.end - m.start);
				h = Math.floor(k / 3600);
				l = Math.floor(k / 60 % 60);
				m = Math.floor(k % 60);
				k = Math.floor(1E3 * k % 1E3);
				return (10 > h ? "0" : "") + h + ":" + (10 > l ? "0" : "") + l + ":" + (10 > m ? "0" : "") + m + "." + (100 > k ? 10 > k ? "00" : "0" : "") + k
			}

			function d(h) {
				var k = [],
					l = 700 <= h.fontWeight,
					m = "italic" == h.fontStyle,
					p = h.textDecoration.includes("underline");
				l && k.push("b");
				m && k.push("i");
				p && k.push("u");
				l = k.reduce(function(n, q) {
						return n + "<" + q + ">"
					},
					"");
				k = k.reduceRight(function(n, q) {
					return n + "</" + q + ">"
				}, "");
				return h.lineBreak ? "\n" : h.nestedCues.length ? h.nestedCues.map(d).join("") : l + h.payload + k
			}
			var e = a.map(function(h) {
					if (h.nestedCues.length) {
						var k = h.clone();
						k.nestedCues = [];
						k.payload = d(h);
						return k
					}
					return h
				}),
				f = "WEBVTT\n\n";
			e = t(e);
			for (var g = e.next(); !g.done; g = e.next()) g = g.value, f += c(g.startTime) + " --\x3e " + c(g.endTime) + function(h) {
				var k = [];
				switch (h.textAlign) {
					case "left":
						k.push("align:left");
						break;
					case "right":
						k.push("align:right");
						break;
					case mb:
						k.push("align:middle");
						break;
					case "start":
						k.push("align:start");
						break;
					case "end":
						k.push("align:end")
				}
				switch (h.writingMode) {
					case "vertical-lr":
						k.push("vertical:lr");
						break;
					case "vertical-rl":
						k.push("vertical:rl")
				}
				return k.length ? " " + k.join(" ") : ""
			}(g) + "\n", f += g.payload + "\n\n";
			return f
		}
		M("shaka.text.WebVttGenerator", function() {});

		function ek(a, b) {
			this.h = a;
			this.g = b;
			this.j = "";
			this.o = void 0;
			this.i = !1;
			this.m = !0;
			this.l = !1
		}

		function fk(a, b, c) {
			try {
				if (a.g.enabled) {
					var d = {
						d: 1E3 * c.duration,
						st: a.h.V() ? gk : hk
					};
					d.ot = ik(c);
					var e = d.ot === jk || d.ot === kk || d.ot === lk || d.ot === mk;
					e && (d.bl = nk(a, c.type));
					c.bandwidth && (d.br = c.bandwidth / 1E3);
					e && d.ot !== mk && (d.tb = ok(a, d.ot) / 1E3);
					pk(a, b, d)
				}
			} catch (f) {
				Wa("CMCD_SEGMENT_ERROR", "Could not generate segment CMCD data.", f)
			}
		}

		function qk(a, b, c) {
			try {
				if (!a.g.enabled) return b;
				var d = rk(a);
				a: {
					switch (c) {
						case "video/webm":
						case "video/mp4":
							var e = lk;
							break a;
						case "application/x-mpegurl":
							e = sk;
							break a
					}
					e = void 0
				}
				d.ot = e;
				d.su = !0;
				var f = tk(d);
				return uk(b, f)
			} catch (g) {
				return Wa("CMCD_SRC_ERROR", "Could not generate src CMCD data.", g), b
			}
		}

		function rk(a) {
			a.j || (a.j = a.g.sessionId || window.crypto.randomUUID());
			return {
				v: 1,
				sf: a.o,
				sid: a.j,
				cid: a.g.contentId,
				mtp: a.h.getBandwidthEstimate() / 1E3
			}
		}

		function pk(a, b, c) {
			c = void 0 === c ? {} : c;
			var d = void 0 === d ? a.g.useHeaders : d;
			if (a.g.enabled) {
				Object.assign(c, rk(a));
				c.pr = a.h.Lc();
				var e = c.ot === jk || c.ot === lk;
				a.l && e && (c.bs = !0, c.su = !0, a.l = !1);
				null == c.su && (c.su = a.m);
				if (d) a = vk(c), Object.keys(a).length && Object.assign(b.headers, a);
				else {
					var f = tk(c);
					f && (b.uris = b.uris.map(function(g) {
						return uk(g, f)
					}))
				}
			}
		}

		function ik(a) {
			var b = a.type;
			if (a.init) return wk;
			if ("video" == b) return a.codecs.includes(",") ? lk : jk;
			if ("audio" == b) return kk;
			if ("text" == b) return "application/mp4" === a.mimeType ? mk : xk
		}

		function nk(a, b) {
			var c = a.h.Oa()[b];
			if (!c.length) return NaN;
			var d = a.h.getCurrentTime();
			return (c = c.find(function(e) {
				return e.start <= d && e.end >= d
			})) ? 1E3 * (c.end - d) : NaN
		}

		function ok(a, b) {
			var c = a.h.Za();
			if (!c.length) return NaN;
			var d = c[0];
			c = t(c);
			for (var e = c.next(); !e.done; e = c.next()) e = e.value, "variant" === e.type && e.bandwidth > d.bandwidth && (d = e);
			switch (b) {
				case jk:
					return d.videoBandwidth || NaN;
				case kk:
					return d.audioBandwidth || NaN;
				default:
					return d.bandwidth
			}
		}

		function tk(a) {
			function b(p) {
				return 100 * c(p / 100)
			}

			function c(p) {
				return Math.round(p)
			}

			function d(p) {
				return !Number.isNaN(p) && null != p && "" !== p && !1 !== p
			}
			var e = [],
				f = {
					br: c,
					d: c,
					bl: b,
					dl: b,
					mtp: b,
					nor: function(p) {
						return encodeURIComponent(p)
					},
					rtp: b,
					tb: c
				},
				g = Object.keys(a || {}).sort();
			g = t(g);
			for (var h = g.next(); !h.done; h = g.next()) {
				h = h.value;
				var k = a[h];
				if (d(k) && ("v" !== h || 1 !== k) && ("pr" != h || 1 !== k)) {
					var l = f[h];
					l && (k = l(k));
					l = typeof k;
					var m = void 0;
					m = "string" === l && "ot" !== h && "sf" !== h && "st" !== h ? h + "=" + JSON.stringify(k) : "boolean" ===
						l ? h : "symbol" === l ? h + "=" + k.description : h + "=" + k;
					e.push(m)
				}
			}
			return e.join(",")
		}

		function vk(a) {
			var b = Object.keys(a),
				c = {},
				d = ["Object", "Request", "Session", "Status"],
				e = [{}, {}, {}, {}],
				f = {
					br: 0,
					d: 0,
					ot: 0,
					tb: 0,
					bl: 1,
					dl: 1,
					mtp: 1,
					nor: 1,
					nrr: 1,
					su: 1,
					cid: 2,
					pr: 2,
					sf: 2,
					sid: 2,
					st: 2,
					v: 2,
					bs: 3,
					rtp: 3
				};
			b = t(b);
			for (var g = b.next(); !g.done; g = b.next()) g = g.value, e[null != f[g] ? f[g] : 1][g] = a[g];
			for (a = 0; a < e.length; a++)(f = tk(e[a])) && (c["CMCD-" + d[a]] = f);
			return c
		}

		function uk(a, b) {
			if (!b || a.includes("offline:")) return a;
			var c = new Nb(a);
			c.g.set("CMCD", b);
			return c.toString()
		}
		var sk = "m",
			kk = "a",
			jk = "v",
			lk = "av",
			wk = "i",
			xk = "c",
			mk = "tt",
			hk = "v",
			gk = "l";
		M("shaka.util.CmcdManager.StreamingFormat", {
			sg: "d",
			Ag: "h",
			Kg: "s",
			Gg: "o"
		});

		function yk() {}

		function zk(a, b, c, d, e) {
			var f = e in d,
				g = !0,
				h;
			for (h in b) {
				var k = e + "." + h,
					l = f ? d[e] : c[h];
				f || h in c ? void 0 === b[h] ? void 0 === l || f ? delete a[h] : a[h] = Te(l) : l.constructor == Object && b[h] && b[h].constructor == Object ? (a[h] || (a[h] = Te(l)), k = zk(a[h], b[h], l, d, k), g = g && k) : typeof b[h] != typeof l || null == b[h] || "function" != typeof b[h] && b[h].constructor != l.constructor ? (Ua("Invalid config, wrong type for " + k), g = !1) : ("function" == typeof c[h] && c[h].length != b[h].length && Va("Unexpected number of arguments for " + k), a[h] = b[h]) : (Ua("Invalid config, unrecognized key " +
					k), g = !1)
			}
			return g
		}

		function Ak(a, b) {
			for (var c = {}, d = c, e = 0, f = 0;;) {
				e = a.indexOf(".", e);
				if (0 > e) break;
				if (0 == e || "\\" != a[e - 1]) f = a.substring(f, e).replace(/\\\./g, "."), d[f] = {}, d = d[f], f = e + 1;
				e += 1
			}
			d[a.substring(f).replace(/\\\./g, ".")] = b;
			return c
		}

		function Bk(a, b) {
			return a && b
		}
		M("shaka.util.ConfigUtils", yk);
		yk.convertToConfigObject = Ak;
		yk.mergeConfigObjects = zk;

		function Ck() {}

		function Dk() {
			var a = Infinity;
			navigator.connection && navigator.connection.saveData && (a = 360);
			var b = {
					retryParameters: He(),
					servers: {},
					clearKeys: {},
					advanced: {},
					delayLicenseRequestUntilPlayed: !1,
					initDataTransform: function(g, h, k) {
						return Bk([g, h, k], g)
					},
					logLicenseExchange: !1,
					updateExpirationTime: 1,
					preferredKeySystems: [],
					keySystemsMapping: {}
				},
				c = {
					retryParameters: He(),
					availabilityWindowOverride: NaN,
					disableAudio: !1,
					disableVideo: !1,
					disableText: !1,
					disableThumbnails: !1,
					defaultPresentationDelay: 0,
					segmentRelativeVttTiming: !1,
					dash: {
						clockSyncUri: "",
						ignoreDrmInfo: !1,
						disableXlinkProcessing: !1,
						xlinkFailGracefully: !1,
						ignoreMinBufferTime: !1,
						autoCorrectDrift: !0,
						initialSegmentLimit: 1E3,
						ignoreSuggestedPresentationDelay: !1,
						ignoreEmptyAdaptationSet: !1,
						ignoreMaxSegmentDuration: !1,
						keySystemsByURI: {
							"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
							"urn:uuid:e2719d58-a985-b3c9-781a-b030af78d30e": "org.w3.clearkey",
							"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
							"urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
							"urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95": "com.microsoft.playready",
							"urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
						},
						manifestPreprocessor: function(g) {
							return Bk([g], g)
						}
					},
					hls: {
						ignoreTextStreamFailures: !1,
						ignoreImageStreamFailures: !1,
						defaultAudioCodec: "mp4a.40.2",
						defaultVideoCodec: "avc1.42E01E",
						ignoreManifestProgramDateTime: !1,
						mediaPlaylistFullMimeType: 'video/mp2t; codecs="avc1.42E01E, mp4a.40.2"'
					}
				},
				d = {
					retryParameters: He(),
					failureCallback: function(g) {
						return Bk([g], void 0)
					},
					rebufferingGoal: 2,
					bufferingGoal: 10,
					bufferBehind: 30,
					ignoreTextStreamFailures: !1,
					alwaysStreamText: !1,
					startAtSegmentBoundary: !1,
					gapDetectionThreshold: .1,
					durationBackoff: 1,
					forceTransmuxTS: !1,
					safeSeekOffset: 5,
					stallEnabled: !0,
					stallThreshold: 1,
					stallSkip: .1,
					useNativeHlsOnSafari: !0,
					inaccurateManifestTolerance: 2,
					lowLatencyMode: !1,
					autoLowLatencyMode: !1,
					forceHTTPS: !1,
					preferNativeHls: !1,
					updateIntervalSeconds: 1,
					dispatchAllEmsgBoxes: !1,
					observeQualityChanges: !1,
					maxDisabledTime: 30
				};
			if (navigator.userAgent.match(/Edge\//) ||
				vc() || xc()) d.gapDetectionThreshold = .5;
			if (uc("Web0S") || vc() || xc()) d.stallSkip = 0;
			var e = {
					trackSelectionCallback: function(g) {
						return K(function(h) {
							return h["return"](g)
						})
					},
					downloadSizeCallback: function(g) {
						var h;
						return K(function(k) {
							if (1 == k.g) return navigator.storage && navigator.storage.estimate ? u(k, navigator.storage.estimate(), 3) : k["return"](!0);
							h = k.h;
							return k["return"](h.usage + g < .95 * h.quota)
						})
					},
					progressCallback: function(g, h) {
						return Bk([g, h], void 0)
					},
					usePersistentLicense: !0,
					numberOfParallelDownloads: 5
				},
				f = {
					drm: b,
					manifest: c,
					streaming: d,
					offline: e,
					abrFactory: function() {
						return new qe
					},
					abr: {
						enabled: !0,
						useNetworkInformation: !0,
						defaultBandwidthEstimate: 1E6,
						switchInterval: 8,
						bandwidthUpgradeTarget: .85,
						bandwidthDowngradeTarget: .95,
						restrictions: {
							minWidth: 0,
							maxWidth: Infinity,
							minHeight: 0,
							maxHeight: a,
							minPixels: 0,
							maxPixels: Infinity,
							minFrameRate: 0,
							maxFrameRate: Infinity,
							minBandwidth: 0,
							maxBandwidth: Infinity
						},
						advanced: {
							minTotalBytes: 128E3,
							minBytes: 16E3,
							fastHalfLife: 2,
							slowHalfLife: 5
						}
					},
					preferredAudioLanguage: "",
					preferredTextLanguage: "",
					preferredVariantRole: "",
					preferredTextRole: "",
					preferredAudioChannelCount: 2,
					preferredVideoCodecs: [],
					preferredAudioCodecs: [],
					preferForcedSubs: !1,
					preferredDecodingAttributes: [],
					restrictions: {
						minWidth: 0,
						maxWidth: Infinity,
						minHeight: 0,
						maxHeight: Infinity,
						minPixels: 0,
						maxPixels: Infinity,
						minFrameRate: 0,
						maxFrameRate: Infinity,
						minBandwidth: 0,
						maxBandwidth: Infinity
					},
					playRangeStart: 0,
					playRangeEnd: Infinity,
					textDisplayFactory: function() {
						return null
					},
					cmcd: {
						enabled: !1,
						sessionId: "",
						contentId: "",
						useHeaders: !1
					}
				};
			e.trackSelectionCallback =
				function(g) {
					return K(function(h) {
						return h["return"](Ek(g, f.preferredAudioLanguage))
					})
				};
			return f
		}

		function Fk(a, b, c) {
			var d = {
				".drm.servers": "",
				".drm.clearKeys": "",
				".drm.advanced": {
					distinctiveIdentifierRequired: !1,
					persistentStateRequired: !1,
					videoRobustness: "",
					audioRobustness: "",
					sessionType: "",
					serverCertificate: new Uint8Array(0),
					serverCertificateUri: "",
					individualizationServer: ""
				}
			};
			return zk(a, b, c || Dk(), d, "")
		}

		function Ek(a, b) {
			var c = a.filter(function(h) {
					return "variant" == h.type
				}),
				d = [],
				e = xd(b, c.map(function(h) {
					return h.language
				}));
			e && (d = c.filter(function(h) {
				return Q(h.language) == e
			}));
			0 == d.length && (d = c.filter(function(h) {
				return h.primary
			}));
			0 == d.length && (c.map(function(h) {
				return h.language
			}), d = c);
			var f = d.filter(function(h) {
				return h.height && 480 >= h.height
			});
			f.length && (f.sort(function(h, k) {
				return k.height - h.height
			}), d = f.filter(function(h) {
				return h.height == f[0].height
			}));
			c = [];
			if (d.length) {
				var g = Math.floor(d.length /
					2);
				d.sort(function(h, k) {
					return h.bandwidth - k.bandwidth
				});
				c.push(d[g])
			}
			d = t(a);
			for (g = d.next(); !g.done; g = d.next()) g = g.value, g.type != lc && "image" != g.type || c.push(g);
			return c
		}
		M("shaka.util.PlayerConfiguration", Ck);
		Ck.mergeConfigObjects = Fk;
		Ck.createDefault = Dk;

		function Gk() {
			this.g = null;
			this.h = []
		}

		function Hk(a, b) {
			if (null == a.g) a.g = {
				timestamp: Date.now() / 1E3,
				state: b,
				duration: 0
			};
			else {
				var c = Date.now() / 1E3;
				a.g.duration = c - a.g.timestamp;
				a.g.state != b && (a.h.push(a.g), a.g = {
					timestamp: c,
					state: b,
					duration: 0
				})
			}
		}

		function Ik(a, b) {
			var c = 0;
			a.g && a.g.state == b && (c += a.g.duration);
			for (var d = t(a.h), e = d.next(); !e.done; e = d.next()) e = e.value, c += e.state == b ? e.duration : 0;
			return c
		}

		function Jk(a) {
			function b(f) {
				return {
					timestamp: f.timestamp,
					state: f.state,
					duration: f.duration
				}
			}
			for (var c = [], d = t(a.h), e = d.next(); !e.done; e = d.next()) c.push(b(e.value));
			a.g && c.push(b(a.g));
			return c
		};

		function Kk() {
			this.i = this.h = null;
			this.g = []
		}

		function Lk(a, b, c) {
			a.i != b && (a.i = b, a.g.push({
				timestamp: Date.now() / 1E3,
				id: b.id,
				type: "text",
				fromAdaptation: c,
				bandwidth: null
			}))
		};

		function Mk() {
			this.o = this.s = this.F = this.C = this.m = this.j = this.D = this.l = this.i = this.M = this.O = this.G = this.I = this.L = this.u = this.T = NaN;
			this.g = new Gk;
			this.h = new Kk
		};

		function U(a, b) {
			Se.call(this);
			var c = this;
			this.l = Nk;
			this.Gc = this.g = null;
			this.ha = !1;
			this.Pc = new kf;
			this.Ub = new kf;
			this.o = new kf;
			this.xd = this.u = this.Tb = this.i = this.Qc = this.I = this.j = this.ia = this.T = this.Rc = this.M = this.Hc = this.G = this.ub = this.C = this.L = this.m = this.F = null;
			this.De = 1E9;
			this.h = Ok(this);
			this.Yb = {
				width: Infinity,
				height: Infinity
			};
			this.s = null;
			this.La = new ye(this.h.preferredAudioLanguage, this.h.preferredVariantRole, this.h.preferredAudioChannelCount);
			this.Ma = this.h.preferredTextLanguage;
			this.Xb = this.h.preferredTextRole;
			this.Vb = this.h.preferForcedSubs;
			this.Kb = [];
			this.ac = null;
			b && b(this);
			this.F = Pk(this);
			this.F.Yd(this.h.streaming.forceHTTPS);
			this.D = null;
			Qk && (this.D = Qk());
			this.Pc.B(window, "online", function() {
				c.Sd()
			});
			this.O = {
				name: "detach"
			};
			this.Y = {
				name: "attach"
			};
			this.ea = {
				name: "unload"
			};
			this.Ld = {
				name: "manifest-parser"
			};
			this.Id = {
				name: "manifest"
			};
			this.sb = {
				name: "media-source"
			};
			this.yd = {
				name: "drm-engine"
			};
			this.ca = {
				name: "load"
			};
			this.Od = {
				name: "src-equals-drm-engine"
			};
			this.vb = {
				name: "src-equals"
			};
			var d = new Map;
			d.set(this.Y,
				function(e, f) {
					return Ne(Rk(c, e, f))
				});
			d.set(this.O, function(e) {
				e.K && (c.Ub.oc(), e.K = null);
				c.D && c.D.release();
				c.g = null;
				e = Promise.resolve();
				return Ne(e)
			});
			d.set(this.ea, function(e) {
				return Ne(Sk(c, e))
			});
			d.set(this.sb, function(e) {
				e = Tk(c, e);
				return Ne(e)
			});
			d.set(this.Ld, function(e, f) {
				var g = Uk(c, e, f);
				return Ne(g)
			});
			d.set(this.Id, function(e) {
				return Vk(c, e)
			});
			d.set(this.yd, function(e) {
				e = Wk(c, e);
				return Ne(e)
			});
			d.set(this.ca, function(e, f) {
				return Ne(Xk(c, e, f))
			});
			d.set(this.Od, function(e, f) {
				var g = Yk(c, e, f);
				return Ne(g)
			});
			d.set(this.vb, function(e, f) {
				return Zk(c, e, f)
			});
			this.ua = new Kj(this.O, {
				uf: function(e, f, g, h) {
					var k = null;
					e == c.O && (k = g == c.O ? c.O : c.Y);
					e == c.Y && (k = g == c.O || f.K != h.K ? c.O : g == c.Y ? c.Y : g == c.sb || g == c.ca ? c.sb : g == c.vb ? c.Od : null);
					e == c.sb && (k = g == c.ca && f.K == h.K ? c.Ld : c.ea);
					e == c.Ld && (k = $k(c.ca, c.Id, c.ea, g, f, h));
					e == c.Id && (k = $k(c.ca, c.yd, c.ea, g, f, h));
					e == c.yd && (k = $k(c.ca, c.ca, c.ea, g, f, h));
					e == c.Od && (k = g == c.vb && f.K == h.K ? c.vb : c.ea);
					if (e == c.ca || e == c.vb) k = c.ea;
					e == c.ea && (k = h.K && f.K == h.K ? c.Y : c.O);
					return k
				},
				df: function(e, f, g) {
					c.dispatchEvent(al("onstatechange",
						(new Map).set("state", e.name)));
					return d.get(e)(f, g)
				},
				handleError: function(e) {
					return K(function(f) {
						return 1 == f.g ? u(f, Sk(c, e), 2) : f["return"](e.K ? c.Y : c.O)
					})
				},
				Mf: function(e) {
					c.dispatchEvent(al("onstateidle", (new Map).set("state", e.name)))
				}
			});
			this.Ce = new O(function() {
				Od(c.i.variants, c.h.restrictions, c.Yb) && bl(c)
			});
			a && this.Wb(a, !0)
		}
		pa(U, Se);

		function al(a, b) {
			return new R(a, b)
		}
		r = U.prototype;
		r.destroy = function() {
			var a = this,
				b;
			return K(function(c) {
				switch (c.g) {
					case 1:
						if (a.l == cl) return c["return"]();
						a.l = cl;
						b = Pj(a.ua, function() {
							return {
								node: a.O,
								payload: Lj(),
								hb: !1
							}
						});
						return u(c, new Promise(function(d) {
							b.Fb = function() {};
							b.Uc = function() {
								d()
							};
							b.lb = function() {
								d()
							};
							b.onError = function() {
								d()
							};
							b.Wc = function() {
								d()
							}
						}), 2);
					case 2:
						return u(c, a.ua.destroy(), 3);
					case 3:
						a.Pc && (a.Pc.release(), a.Pc = null);
						a.Ub && (a.Ub.release(), a.Ub = null);
						a.o && (a.o.release(), a.o = null);
						a.xd = null;
						a.u = null;
						a.h = null;
						a.s = null;
						a.Gc = null;
						a.T = null;
						if (!a.F) {
							c.A(4);
							break
						}
						return u(c, a.F.destroy(), 5);
					case 5:
						a.F = null;
					case 4:
						Se.prototype.release.call(a), z(c)
				}
			})
		};
		r.Wb = function(a, b) {
			b = void 0 === b ? !0 : b;
			if (this.l == cl) return Promise.reject(dl());
			var c = Lj();
			c.K = a;
			qc() || (b = !1);
			var d = b ? this.sb : this.Y,
				e = Pj(this.ua, function() {
					return {
						node: d,
						payload: c,
						hb: !1
					}
				});
			e.Fb = function() {};
			return el(e)
		};
		r.detach = function() {
			var a = this;
			if (this.l == cl) return Promise.reject(dl());
			var b = Pj(this.ua, function() {
				return {
					node: a.O,
					payload: Lj(),
					hb: !1
				}
			});
			b.Fb = function() {};
			return el(b)
		};
		r.ee = function(a) {
			var b = this;
			a = void 0 === a ? !0 : a;
			if (this.l == cl) return Promise.reject(dl());
			qc() || (a = !1);
			var c = Lj(),
				d = Pj(this.ua, function(e) {
					var f = e.K && a ? b.sb : e.K ? b.Y : b.O;
					c.K = e.K;
					return {
						node: f,
						payload: c,
						hb: !1
					}
				});
			d.Fb = function() {};
			return el(d)
		};
		r.mg = function(a) {
			this.ac = a
		};
		r.load = function(a, b, c) {
			var d = this;
			this.ac = null;
			if (this.l == cl) return Promise.reject(dl());
			this.dispatchEvent(al("loading"));
			var e = Lj();
			e.uri = a;
			e.be = Date.now() / 1E3;
			c && (e.mimeType = c);
			void 0 !== b && (e.startTime = b);
			var f = fl(this, e) ? this.vb : this.ca,
				g = Pj(this.ua, function(h) {
					if (null == h.K) return null;
					e.K = h.K;
					return {
						node: f,
						payload: e,
						hb: !0
					}
				});
			this.s = new Mk;
			this.T = gl(this);
			g.Fb = function() {};
			return new Promise(function(h, k) {
				g.Wc = function() {
					return k(new N(2, 7, 7002))
				};
				g.Uc = function() {
					h();
					d.dispatchEvent(al("loaded"))
				};
				g.lb = function() {
					return k(dl())
				};
				g.onError = function(l) {
					return k(l)
				}
			})
		};

		function fl(a, b) {
			if (!qc()) return !0;
			var c = b.mimeType,
				d = b.uri || "";
			c || (c = kg(d), c = hl[c]);
			if (c) {
				if ("" == (b.K || sc()).canPlayType(c)) return !1;
				if (!qc() || !(c in jg || kg(d) in lg) || a.h.streaming.preferNativeHls) return !0;
				if (yc()) return a.h.streaming.useNativeHlsOnSafari
			}
			return !1
		}

		function Rk(a, b, c) {
			null == b.K && (b.K = c.K, a.Ub.B(b.K, "error", function() {
				var d = il(a);
				d && jl(a, d)
			}));
			a.g = b.K;
			return Promise.resolve()
		}

		function Sk(a, b) {
			var c, d, e, f, g, h, k, l, m;
			return K(function(p) {
				switch (p.g) {
					case 1:
						return a.l != cl && (a.l = Nk), c = a.Kb.map(function(n) {
							return n()
						}), a.Kb = [], u(p, Promise.all(c), 2);
					case 2:
						a.dispatchEvent(al("unloading"));
						b.mimeType = null;
						b.startTime = null;
						b.uri = null;
						b.K && a.o.oc();
						a.Ce.stop();
						a.ub && (a.ub.release(), a.ub = null);
						a.Hc && (a.Hc.stop(), a.Hc = null);
						if (!a.I) {
							p.A(3);
							break
						}
						return u(p, a.I.stop(), 4);
					case 4:
						a.I = null, a.Qc = null;
					case 3:
						if (!a.u) {
							p.A(5);
							break
						}
						return u(p, a.u.stop(), 5);
					case 5:
						if (!a.j) {
							p.A(7);
							break
						}
						return u(p,
							a.j.destroy(), 8);
					case 8:
						a.j = null;
					case 7:
						a.G && (a.G.release(), a.G = null);
						a.C && (a.C.release(), a.C = null);
						if (!a.L) {
							p.A(9);
							break
						}
						return u(p, a.L.destroy(), 10);
					case 10:
						a.L = null;
					case 9:
						if (a.D) a.D.onAssetUnload();
						if (!b.K || !b.K.src) {
							p.A(11);
							break
						}
						return u(p, new Promise(function(n) {
							return (new O(n)).S(.1)
						}), 12);
					case 12:
						for (b.K.removeAttribute("src"), b.K.load(); b.K.lastChild;) b.K.removeChild(b.K.firstChild);
					case 11:
						if (!a.m) {
							p.A(13);
							break
						}
						return u(p, a.m.destroy(), 14);
					case 14:
						a.m = null;
					case 13:
						a.Tb = null;
						a.M = null;
						if (a.i) {
							d =
								t(a.i.variants);
							for (e = d.next(); !e.done; e = d.next())
								for (f = e.value, g = t([f.audio, f.video]), h = g.next(); !h.done; h = g.next())(k = h.value) && k.segmentIndex && k.segmentIndex.release();
							l = t(a.i.textStreams);
							for (h = l.next(); !h.done; h = l.next()) m = h.value, m.segmentIndex && m.segmentIndex.release()
						}
						a.i = null;
						a.s = new Mk;
						a.Ed = null;
						kl(a);
						z(p)
				}
			})
		}

		function Tk(a, b) {
			var c, d, e, f, g, h;
			return K(function(k) {
				if (1 == k.g) return c = new Kh, d = a.h.textDisplayFactory, e = d(), a.Ed = d, f = ll(b.K, c, e, function(l, m, p) {
					l = t(l);
					for (var n = l.next(); !n.done; n = l.next())
						if (n = n.value, n.data && n.cueTime && n.frames) {
							for (var q = n.cueTime + m, w = p, y = t(n.frames), x = y.next(); !x.done; x = y.next()) ml(a, q, w, "ID3", x.value);
							if (a.D) a.D.onHlsTimedMetadata(n, q)
						}
				}), g = a.h.manifest, h = g.segmentRelativeVttTiming, f.F = h, u(k, f.G, 2);
				a.L = f;
				z(k)
			})
		}

		function Uk(a, b, c) {
			var d, e, f, g;
			return K(function(h) {
				if (1 == h.g) return b.mimeType = c.mimeType, b.uri = c.uri, d = b.uri, e = a.F, a.Tb = d, f = a, u(h, ig(d, e, a.h.manifest.retryParameters, b.mimeType), 2);
				f.Qc = h.h;
				a.I = a.Qc();
				g = Te(a.h.manifest);
				c.K && "AUDIO" === c.K.nodeName && (g.disableVideo = !0);
				a.I.configure(g);
				z(h)
			})
		}

		function Vk(a, b) {
			var c = b.uri,
				d = a.F;
			a.Rc = new bj(function() {
				return a.pc()
			});
			a.Rc.addEventListener("regionadd", function(g) {
				g = g.region;
				nl(a, "timelineregionadded", g);
				if (a.D) a.D.onDashTimedMetadata(g)
			});
			a.ia = null;
			a.h.streaming.observeQualityChanges && (a.ia = new Yi(function() {
				return a.Oa()
			}), a.ia.addEventListener("qualitychange", function(g) {
				var h = g.quality;
				g = g.position;
				h = (new Map).set("mediaQuality", {
					bandwidth: h.bandwidth,
					audioSamplingRate: h.audioSamplingRate,
					codecs: h.codecs,
					contentType: h.contentType,
					frameRate: h.frameRate,
					height: h.height,
					mimeType: h.mimeType,
					channelsCount: h.channelsCount,
					pixelAspectRatio: h.pixelAspectRatio,
					width: h.width
				}).set("position", g);
				a.dispatchEvent(al("mediaqualitychanged", h))
			}));
			var e = {
					networkingEngine: d,
					modifyManifestRequest: function(g, h) {
						var k = a.T;
						try {
							k.g.enabled && (k.o = h.format, pk(k, g, {
								ot: sk,
								su: !k.i
							}))
						} catch (l) {
							Wa("CMCD_MANIFEST_ERROR", "Could not generate manifest CMCD data.", l)
						}
					},
					modifySegmentRequest: function(g, h) {
						fk(a.T, g, h)
					},
					filter: function(g) {
						return ol(a, g)
					},
					makeTextStreamsForClosedCaptions: function(g) {
						return pl(a,
							g)
					},
					onTimelineRegionAdded: function(g) {
						var h = a.Rc;
						a: {
							var k = t(h.g);
							for (var l = k.next(); !l.done; l = k.next())
								if (l = l.value, l.schemeIdUri == g.schemeIdUri && l.id == g.id && l.startTime == g.startTime && l.endTime == g.endTime) {
									k = l;
									break a
								} k = null
						}
						null == k && (h.g.add(g), g = new R("regionadd", new Map([
							["region", g]
						])), h.dispatchEvent(g))
					},
					onEvent: function(g) {
						return a.dispatchEvent(g)
					},
					onError: function(g) {
						return jl(a, g)
					},
					isLowLatencyMode: function() {
						return a.h.streaming.lowLatencyMode
					},
					isAutoLowLatencyMode: function() {
						return a.h.streaming.autoLowLatencyMode
					},
					enableLowLatencyMode: function() {
						a.configure("streaming.lowLatencyMode", !0)
					}
				},
				f = Date.now() / 1E3;
			return new Je(function() {
				var g, h, k, l;
				return K(function(m) {
					if (1 == m.g) return g = a, u(m, a.I.start(c, e), 2);
					g.i = m.h;
					h = al("manifestparsed");
					a.dispatchEvent(h);
					if (0 == a.i.variants.length) throw new N(2, 4, 4036);
					ql(a.i);
					k = Date.now() / 1E3;
					l = k - f;
					a.s.D = l;
					z(m)
				})
			}(), function() {
				return a.I.stop()
			})
		}

		function Wk(a, b) {
			var c, d;
			return K(function(e) {
				return 1 == e.g ? (c = Date.now() / 1E3, d = !0, a.m = rl(a, {
					kb: a.F,
					onError: function(f) {
						jl(a, f)
					},
					Vc: function(f) {
						sl(a, f)
					},
					onExpirationUpdated: function(f, g) {
						tl(a, f, g)
					},
					onEvent: function(f) {
						a.dispatchEvent(f);
						"drmsessionupdate" == f.type && d && (d = !1, a.s.j = Date.now() / 1E3 - c)
					}
				}), a.m.configure(a.h.drm), u(e, Bf(a.m, a.i.variants, a.i.offlineSessionIds), 2)) : 3 != e.g ? u(e, a.m.Wb(b.K), 3) : u(e, ol(a, a.i), 0)
			})
		}

		function Xk(a, b, c) {
			var d, e, f, g, h, k, l, m, p, n, q, w;
			return K(function(y) {
				switch (y.g) {
					case 1:
						b.startTime = c.startTime;
						null != a.ac && (b.startTime = a.ac, a.ac = null);
						d = b.K;
						e = b.uri;
						a.Tb = e;
						a.G = new Ui({
							Nc: function() {
								return d.playbackRate
							},
							Jc: function() {
								return d.defaultPlaybackRate
							},
							$d: function(x) {
								d.playbackRate = x
							},
							ze: function(x) {
								d.currentTime += x
							}
						});
						f = function() {
							return ul(a)
						};
						g = function() {
							return vl(a)
						};
						a.o.B(d, "playing", f);
						a.o.B(d, "pause", f);
						a.o.B(d, "ended", f);
						a.o.B(d, "ratechange", g);
						h = a.h.abrFactory;
						a.u && a.xd == h ||
							(a.xd = h, a.u = h(), a.u.configure(a.h.abr));
						a.La = new ye(a.h.preferredAudioLanguage, a.h.preferredVariantRole, a.h.preferredAudioChannelCount);
						a.Ma = a.h.preferredTextLanguage;
						a.Xb = a.h.preferredTextRole;
						a.Vb = a.h.preferForcedSubs;
						wl(a.i.presentationTimeline, a.h.playRangeStart, a.h.playRangeEnd);
						a.u.init(function(x, v, D) {
							a.j && x != a.j.l && xl(a, x, !0, void 0 === v ? !1 : v, void 0 === D ? 0 : D)
						});
						a.C = yl(a, b.startTime);
						a.ub = zl(a);
						k = Math.max(a.i.minBufferTime, a.h.streaming.rebufferingGoal);
						Al(a, k);
						Ad(a.i, a.h.preferredVideoCodecs,
							a.h.preferredAudioCodecs, a.h.preferredAudioChannelCount, a.h.preferredDecodingAttributes);
						a.j = Bl(a);
						a.j.configure(a.h.streaming);
						a.l = Cl;
						d.textTracks && a.o.B(d.textTracks, "addtrack", function(x) {
							if (x.track) switch (x = x.track, x.kind) {
								case "chapters":
									Dl(a, x)
							}
						});
						a.dispatchEvent(al("streaming"));
						l = null;
						if (m = a.Za().find(function(x) {
								return x.active
							})) {
							y.A(2);
							break
						}
						l = bl(a);
						xl(a, l, !0, !1, 0);
						if (!a.h.streaming.startAtSegmentBoundary) {
							y.A(3);
							break
						}
						p = a.C.Bc();
						return u(y, El(l, p), 4);
					case 4:
						n = y.h, a.C.td(n);
					case 3:
						Fl(a,
							null, ce(l));
					case 2:
						return q = a.Bb().find(function(x) {
							return x.active
						}), q || ((w = ne(a.i.textStreams, a.Ma, a.Xb, a.Vb)[0] || null) && Lk(a.s.h, w, !0), l && (w ? (l.audio && Gl(a, l.audio, w) && (a.ha = !0), a.ha && a.L.m.setTextVisibility(!0), Hl(a)) : a.ha = !1), w && (a.h.streaming.alwaysStreamText || a.wd()) && uj(a.j, w)), u(y, a.j.start(), 5);
					case 5:
						a.h.abr.enabled && (a.u.enable(), Il(a)), Rd(a.j ? a.j.l : null, a.i), Jl(a.i), Kl(a), Ll(a), a.i.variants.some(function(x) {
							return x.primary
						}), a.o.oa(d, "loadedmetadata", function() {
							a.s.l = Date.now() / 1E3 -
								c.be
						}), z(y)
				}
			})
		}

		function Yk(a, b, c) {
			var d, e, f, g, h, k, l;
			return K(function(m) {
				return 1 == m.g ? (d = mc, e = Date.now() / 1E3, f = !0, a.m = rl(a, {
						kb: a.F,
						onError: function(p) {
							jl(a, p)
						},
						Vc: function(p) {
							sl(a, p)
						},
						onExpirationUpdated: function(p, n) {
							tl(a, p, n)
						},
						onEvent: function(p) {
							a.dispatchEvent(p);
							"drmsessionupdate" == p.type && f && (f = !1, a.s.j = Date.now() / 1E3 - e)
						}
					}), a.m.configure(a.h.drm), g = c.uri || "", h = kg(g), k = hl[h], "application/x-mpegurl" == k && yc() && (k = "application/vnd.apple.mpegurl"), k || (k = "video/mp4"), l = {
						id: 0,
						language: "und",
						disabledUntilTime: 0,
						primary: !1,
						audio: null,
						video: {
							id: 0,
							originalId: null,
							createSegmentIndex: function() {
								return Promise.resolve()
							},
							segmentIndex: null,
							mimeType: c.mimeType ? c.mimeType.split(";")[0] : k,
							codecs: c.mimeType ? cd(c.mimeType) : "",
							encrypted: !0,
							drmInfos: [],
							keyIds: new Set,
							language: "und",
							label: null,
							type: d.va,
							primary: !1,
							trickModeVideo: null,
							emsgSchemeIdUris: null,
							roles: [],
							forced: !1,
							channelsCount: null,
							audioSamplingRate: null,
							spatialAudio: !1,
							closedCaptions: null
						},
						bandwidth: 100,
						allowedByApplication: !0,
						allowedByKeySystem: !0,
						decodingInfos: []
					},
					a.m.Y = !0, u(m, Bf(a.m, [l], []), 2)) : u(m, a.m.Wb(b.K), 0)
			})
		}

		function Zk(a, b, c) {
			function d() {
				return ul(a)
			}
			b.uri = c.uri;
			b.startTime = c.startTime;
			a.Tb = b.uri;
			var e = b.K;
			a.C = new Ji(e);
			var f = !1;
			a.Kb.push(function() {
				f = !0
			});
			null != b.startTime && a.C.td(b.startTime);
			a.G = new Ui({
				Nc: function() {
					return e.playbackRate
				},
				Jc: function() {
					return e.defaultPlaybackRate
				},
				$d: function(k) {
					e.playbackRate = k
				},
				ze: function(k) {
					e.currentTime += k
				}
			});
			Al(a, a.h.streaming.rebufferingGoal);
			a.o.B(e, "playing", d);
			a.o.B(e, "pause", d);
			a.o.B(e, "ended", d);
			a.o.B(e, "ratechange", function() {
				return vl(a)
			});
			"none" !=
			e.preload && a.o.oa(e, "loadedmetadata", function() {
				a.s.l = Date.now() / 1E3 - c.be
			});
			e.audioTracks && (a.o.B(e.audioTracks, "addtrack", function() {
				return Kl(a)
			}), a.o.B(e.audioTracks, "removetrack", function() {
				return Kl(a)
			}), a.o.B(e.audioTracks, "change", function() {
				return Kl(a)
			}));
			e.textTracks && (a.o.B(e.textTracks, "addtrack", function(k) {
				if (k.track) switch (k = k.track, k.kind) {
					case "metadata":
						Ml(a, k);
						break;
					case "chapters":
						Dl(a, k);
						break;
					default:
						Kl(a)
				}
			}), a.o.B(e.textTracks, "removetrack", function() {
				return Kl(a)
			}), a.o.B(e.textTracks,
				"change",
				function() {
					return Kl(a)
				}));
			var g = kg(b.uri);
			e.src = qk(a.T, b.uri, hl[g]);
			(vc() || uc("Web0S")) && e.load();
			a.l = Nl;
			a.dispatchEvent(al("streaming"));
			var h = new nc;
			Ai(e, HTMLMediaElement.HAVE_METADATA, a.o, function() {
				h.resolve()
			});
			Ai(e, HTMLMediaElement.HAVE_CURRENT_DATA, a.o, function() {
				var k;
				return K(function(l) {
					if (1 == l.g) return Ol(a), k = Pl(a), k.find(function(m) {
						return "disabled" != m.mode
					}) ? l.A(2) : u(l, new Promise(function(m) {
						a.o.oa(e.textTracks, "change", m);
						(new O(m)).S(1)
					}), 2);
					if (f) return l["return"]();
					Ql(a);
					z(l)
				})
			});
			e.error ? h.reject(il(a)) : "none" == e.preload && (Va('With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'), h.resolve());
			a.o.oa(e, "error", function() {
				h.reject(il(a))
			});
			return new Je(h, function() {
				h.reject(new N(2, 7, 7001));
				return Promise.resolve()
			})
		}

		function Ol(a) {
			var b = a.h.preferredAudioLanguage;
			if ("" != b) {
				a.Vd(b);
				var c = a.h.preferredVariantRole;
				"" != c && a.Vd(b, c)
			}
		}

		function Ql(a) {
			var b = a.h.preferredTextLanguage,
				c = a.h.preferForcedSubs;
			if ("" != b) {
				a.Wd(b, "", c);
				var d = a.h.preferredTextRole;
				"" != d && a.Wd(b, d, c)
			}
		}

		function Ml(a, b) {
			if ("metadata" == b.kind) {
				b.mode = "hidden";
				a.o.B(b, "cuechange", function() {
					if (b.activeCues)
						for (var d = t(b.activeCues), e = d.next(); !e.done; e = d.next())
							if (e = e.value, ml(a, e.startTime, e.endTime, e.type, e.value), a.D) a.D.onCueMetadataChange(e.value)
				});
				var c = (new O(function() {
					var d = Rl(a);
					d = t(d);
					for (var e = d.next(); !e.done; e = d.next()) e.value.mode = "hidden"
				})).Jb().S(.5);
				a.Kb.push(function() {
					c.stop()
				})
			}
		}

		function ml(a, b, c, d, e) {
			b = (new Map).set("startTime", b).set("endTime", c).set("metadataType", d).set("payload", e);
			a.dispatchEvent(al("metadata", b))
		}

		function Dl(a, b) {
			if (b && "chapters" == b.kind) {
				b.mode = "hidden";
				var c = (new O(function() {
					b.mode = "hidden"
				})).Jb().S(.5);
				a.Kb.push(function() {
					c.stop()
				})
			}
		}

		function ql(a) {
			function b(c) {
				return c.video && c.audio || c.video && c.video.codecs.includes(",")
			}
			a.variants.some(b) && (a.variants = a.variants.filter(b))
		}

		function rl(a, b) {
			return new uf(b, a.h.drm.updateExpirationTime)
		}

		function Pk(a) {
			return new Xe(function(b, c) {
				a.u && a.u.segmentDownloaded(b, c)
			}, function(b, c, d) {
				b = (new Map).set("headers", b).set("request", c).set("requestType", d);
				a.dispatchEvent(al("downloadheadersreceived", b))
			}, function(b, c, d, e) {
				b = (new Map).set("request", b).set("error", c).set("httpResponseCode", d).set("aborted", e);
				a.dispatchEvent(al("downloadfailed", b))
			})
		}

		function yl(a, b) {
			return new Ki(a.g, a.i, a.h.streaming, b, function() {
				a.ub && Xi(a.ub, !0);
				a.j && a.j.qc();
				a.M && Sl(a)
			}, function(c) {
				return a.dispatchEvent(c)
			})
		}

		function zl(a) {
			var b = new cj(a.Rc);
			b.addEventListener("enter", function(d) {
				nl(a, "timelineregionenter", d.region)
			});
			b.addEventListener("exit", function(d) {
				nl(a, "timelineregionexit", d.region)
			});
			b.addEventListener("skip", function(d) {
				var e = d.region;
				d.seeking || (nl(a, "timelineregionenter", e), nl(a, "timelineregionexit", e))
			});
			var c = new Wi(a.g);
			c.g.add(b);
			a.ia && c.g.add(a.ia);
			return c
		}

		function Al(a, b) {
			a.M = new Ce;
			a.M.g = Ee;
			Fe(a.M, b, Math.min(.5, b / 2));
			kl(a);
			a.Hc = (new O(function() {
				Sl(a)
			})).Ca(.25)
		}

		function Sl(a) {
			switch (a.l) {
				case Nl:
					if (a.g.ended) var b = !0;
					else {
						var c = Sh(a.g.buffered);
						b = null != c && c >= a.g.duration - 1
					}
					break;
				case Cl:
					a: if (a.g.ended || ci(a.L)) b = !0;
						else {
							if (a.i.presentationTimeline.V()) {
								c = a.i.presentationTimeline.gb();
								var d = Sh(a.g.buffered);
								if (null != d && d >= c) {
									b = !0;
									break a
								}
							}
							b = !1
						}
					break;
				default:
					b = !1
			}
			d = Uh(a.g.buffered, a.g.currentTime);
			c = a.M;
			var e = b,
				f = c.h.get(c.g);
			b = c.g;
			d = e || d >= f ? De : Ee;
			c.g = d;
			b != d && kl(a)
		}

		function ll(a, b, c, d) {
			return new Xh(a, b, c, d)
		}

		function gl(a) {
			return new ek({
				getBandwidthEstimate: function() {
					return a.u ? a.u.getBandwidthEstimate() : NaN
				},
				Oa: function() {
					return a.Oa()
				},
				getCurrentTime: function() {
					return a.g ? a.g.currentTime : 0
				},
				Za: function() {
					return a.Za()
				},
				Lc: function() {
					return a.Lc()
				},
				V: function() {
					return a.V()
				}
			}, a.h.cmcd)
		}

		function Bl(a) {
			return new ij(a.i, {
				Mc: function() {
					return a.C.Bc()
				},
				getBandwidthEstimate: function() {
					return a.u.getBandwidthEstimate()
				},
				modifySegmentRequest: function(b, c) {
					fk(a.T, b, c)
				},
				P: a.L,
				kb: a.F,
				onError: function(b) {
					return jl(a, b)
				},
				onEvent: function(b) {
					return a.dispatchEvent(b)
				},
				Of: function() {
					a.I && a.I.update && a.I.update()
				},
				Nd: function() {
					a.C && a.C.Ae();
					Sl(a)
				},
				Nf: function(b, c) {
					var d = c.Gd;
					d && a.ia && $i(a.ia, d, b)
				}
			})
		}
		r.configure = function(a, b) {
			2 == arguments.length && "string" == typeof a && (a = Ak(a, b));
			a.streaming && a.streaming.lowLatencyMode && (void 0 == a.streaming.inaccurateManifestTolerance && (a.streaming.inaccurateManifestTolerance = 0), void 0 == a.streaming.rebufferingGoal && (a.streaming.rebufferingGoal = .01));
			var c = Fk(this.h, a, Ok(this));
			Tl(this);
			return c
		};

		function Tl(a) {
			if (a.I) {
				var b = Te(a.h.manifest);
				a.g && "AUDIO" === a.g.nodeName && (b.disableVideo = !0);
				a.I.configure(b)
			}
			a.m && a.m.configure(a.h.drm);
			if (a.j) {
				a.j.configure(a.h.streaming);
				try {
					Ul(a, a.i)
				} catch (f) {
					jl(a, f)
				}
				a.u && Ll(a);
				b = a.j.l;
				!b || b.allowedByApplication && b.allowedByKeySystem || Vl(a)
			}
			a.F && a.F.Yd(a.h.streaming.forceHTTPS);
			if (a.L && (a.L.F = a.h.manifest.segmentRelativeVttTiming, b = a.h.textDisplayFactory, a.Ed != b)) {
				var c = b(),
					d = a.L,
					e = d.m;
				d.m = c;
				e && (c.setTextVisibility(e.isTextVisible()), e.destroy());
				d.g && (d.g.i =
					c);
				a.Ed = b;
				a.j && (b = a.j, (c = b.h.get(lc)) && sj(b, c.stream, !0, 0, !0))
			}
			a.u && (a.u.configure(a.h.abr), a.h.abr.enabled ? a.u.enable() : a.u.disable(), Il(a));
			a.M && (b = a.h.streaming.rebufferingGoal, a.i && (b = Math.max(b, a.i.minBufferTime)), Fe(a.M, b, Math.min(.5, b / 2)));
			a.i && wl(a.i.presentationTimeline, a.h.playRangeStart, a.h.playRangeEnd)
		}
		r.getConfiguration = function() {
			var a = Ok(this);
			Fk(a, this.h, Ok(this));
			return a
		};
		r.gf = function() {
			if (this.g) {
				var a = this.g.buffered.length;
				a = a ? this.g.buffered.end(a - 1) : 0;
				var b = this.getConfiguration().streaming.bufferingGoal;
				b = Math.min(this.g.currentTime + b, this.pc().end);
				if (a >= b) return 1;
				if (!(a <= this.g.currentTime) && a < b) return (a - this.g.currentTime) / (b - this.g.currentTime)
			}
			return 0
		};
		r.Yf = function() {
			for (var a in this.h) delete this.h[a];
			Fk(this.h, Ok(this), Ok(this));
			Tl(this)
		};
		r.nf = function() {
			return this.l
		};
		r.tf = function() {
			return this.g
		};
		r.dc = function() {
			return this.F
		};
		r.ud = function() {
			return this.Tb
		};
		r.se = function() {
			return this.D ? this.D : null
		};
		r.V = function() {
			return this.i ? this.i.presentationTimeline.V() : this.g && this.g.src ? Infinity == this.g.duration : !1
		};
		r.jb = function() {
			return this.i ? this.i.presentationTimeline.jb() : !1
		};
		r.Gf = function() {
			if (this.i) {
				var a = this.i.variants;
				return a.length ? !a[0].video : !1
			}
			return this.g && this.g.src ? this.g.videoTracks ? 0 == this.g.videoTracks.length : 0 == this.g.videoHeight : !1
		};
		r.pc = function() {
			if (this.i) {
				var a = this.i.presentationTimeline;
				return {
					start: a.Ab(),
					end: a.Pa()
				}
			}
			return this.g && this.g.src && (a = this.g.seekable, a.length) ? {
				start: a.start(0),
				end: a.end(a.length - 1)
			} : {
				start: 0,
				end: 0
			}
		};
		r.Ef = function() {
			this.V() && (this.g.currentTime = this.pc().end)
		};
		r.keySystem = function() {
			var a = this.drmInfo();
			return a ? a.keySystem : ""
		};
		r.drmInfo = function() {
			return this.m ? this.m.g : null
		};
		r.cc = function() {
			return this.m ? this.m.cc() : Infinity
		};
		r.Kc = function() {
			return this.m ? this.m.Kc() : {}
		};
		r.vd = function() {
			return this.M ? this.M.g == Ee : !1
		};
		r.Lc = function() {
			return this.g ? this.G ? this.G.i : 1 : 0
		};
		r.hg = function(a) {
			0 == a ? Va("A trick play rate of 0 is unsupported!") : (this.g.paused && this.g.play(), this.G.set(a), this.l == Cl && (this.u.playbackRateChanged(a), rj(this.j, 1 < Math.abs(a))))
		};
		r.Ye = function() {
			var a = this.G.Jc();
			this.l == Nl && this.G.set(a);
			this.l == Cl && (this.G.set(a), this.u.playbackRateChanged(a), rj(this.j, !1))
		};
		r.Za = function() {
			if (this.i) {
				for (var a = this.j ? this.j.l : null, b = [], c = 0, d = t(this.i.variants), e = d.next(); !e.done; e = d.next())
					if (e = e.value, le(e)) {
						var f = ce(e);
						f.active = e == a;
						f.active || 1 == c || null == a || e.video != a.video || e.audio != a.audio || (f.active = !0);
						f.active && c++;
						b.push(f)
					} return b
			}
			return this.g && this.g.audioTracks ? Array.from(this.g.audioTracks).map(function(g) {
				return ke(g)
			}) : []
		};
		r.Bb = function() {
			if (this.i) {
				for (var a = this.j ? this.j.o : null, b = [], c = t(this.i.textStreams), d = c.next(); !d.done; d = c.next()) {
					d = d.value;
					var e = de(d);
					e.active = d == a;
					b.push(e)
				}
				return b
			}
			return this.g && this.g.src && this.g.textTracks ? Pl(this).map(function(f) {
				return ie(f)
			}) : []
		};
		r.lf = function() {
			return this.i ? this.i.imageStreams.map(function(a) {
				return ee(a)
			}) : []
		};
		r.Af = function(a, b) {
			var c = this,
				d, e, f, g, h, k, l, m, p, n, q, w, y, x, v, D, C, A;
			return K(function(G) {
				if (1 == G.g) return c.i ? (d = c.i.imageStreams.find(function(E) {
					return E.id == a
				})) ? d.segmentIndex ? G.A(3) : u(G, d.createSegmentIndex(), 3) : G["return"](null) : G.A(2);
				if (2 != G.g) {
					e = d.segmentIndex.find(b);
					if (null == e) return G["return"](null);
					f = d.segmentIndex.get(e);
					g = f.tilesLayout || d.tilesLayout;
					h = /(\d+)x(\d+)/.exec(g);
					if (!h) return G["return"](null);
					k = d.width || 0;
					l = d.height || 0;
					m = parseInt(h[1], 10);
					p = parseInt(h[2], 10);
					n = k / m;
					q = l / p;
					w = m * p;
					y = f.j - f.startTime;
					x = f.l || y / w;
					v = f.startTime;
					C = D = 0;
					1 < w && (A = Math.floor((b - f.startTime) / x), v = f.startTime + A * x, D = A % m * n, C = Math.floor(A / m) * q);
					return G["return"]({
						imageHeight: l,
						imageWidth: k,
						height: q,
						positionX: D,
						positionY: C,
						startTime: v,
						duration: x,
						uris: f.ya(),
						width: n
					})
				}
				return G["return"](null)
			})
		};
		r.He = function(a) {
			if (this.i && this.j) {
				var b = this.i.textStreams.find(function(d) {
					return d.id == a.id
				});
				b && b != this.j.o && (Lk(this.s.h, b, !1), uj(this.j, b), Wl(this), this.Ma = b.language)
			} else if (this.g && this.g.src && this.g.textTracks) {
				b = Pl(this);
				b = t(b);
				for (var c = b.next(); !c.done; c = b.next()) c = c.value, fe(c) == a.id ? c.mode = this.ha ? "showing" : "hidden" : c.mode = "disabled";
				Wl(this)
			}
		};
		r.Ie = function(a, b, c) {
			b = void 0 === b ? !1 : b;
			c = void 0 === c ? 0 : c;
			if (this.i && this.j) {
				this.h.abr.enabled && Va("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");
				var d = this.i.variants.find(function(e) {
					return e.id == a.id
				});
				d && le(d) && (xl(this, d, !1, b, c), this.La = new xe(d), Ll(this))
			} else if (this.g && this.g.audioTracks)
				for (b = Array.from(this.g.audioTracks), b = t(b), c = b.next(); !c.done; c = b.next())
					if (c = c.value,
						fe(c) == a.id) {
						Xl(this, c);
						break
					}
		};
		r.ff = function() {
			return Yl(this.Za())
		};
		r.zf = function() {
			return Yl(this.Bb())
		};
		r.ef = function() {
			return Array.from(Zl(this.Za()))
		};
		r.yf = function() {
			return Array.from(Zl(this.Bb()))
		};
		r.Vd = function(a, b) {
			if (this.i && this.C) {
				this.La = new ye(a, b || "", 0, "");
				var c = function(k, l) {
						return k.video || l.video ? k.video && l.video ? Math.abs((k.video.height || 0) - (l.video.height || 0)) + Math.abs((k.video.width || 0) - (l.video.width || 0)) : Infinity : 0
					},
					d = this.j.l,
					e = this.La.create(this.i.variants),
					f = null;
				e = t(e.values());
				for (var g = e.next(); !g.done; g = e.next())
					if (g = g.value, !f || c(f, d) > c(g, d)) f = g;
				f ? (c = ce(f), this.Ie(c, !0)) : Vl(this)
			} else if (this.g && this.g.audioTracks) {
				e = Array.from(this.g.audioTracks);
				c = Q(a);
				f = d = null;
				e =
					t(e);
				for (g = e.next(); !g.done; g = e.next()) {
					g = g.value;
					var h = ke(g);
					Q(h.language) == c && (d = g, b ? h.roles.includes(b) && (f = g) : 0 == h.roles.length && (f = g))
				}
				f ? Xl(this, f) : d && Xl(this, d)
			}
		};
		r.Wd = function(a, b, c) {
			c = void 0 === c ? !1 : c;
			if (this.i && this.C) {
				if (this.Ma = a, this.Xb = b || "", this.Vb = c, (a = ne(this.i.textStreams, this.Ma, this.Xb, this.Vb)[0] || null) && a != this.j.o && (Lk(this.s.h, a, !1), this.h.streaming.alwaysStreamText || this.wd())) uj(this.j, a), Wl(this)
			} else {
				var d = Q(a);
				(a = this.Bb().find(function(e) {
					return Q(e.language) == d && (!b || e.roles.includes(b)) && e.forced == c
				})) && this.He(a)
			}
		};
		r.$f = function(a) {
			if (this.i && this.C) {
				for (var b = null, c = t(this.i.variants), d = c.next(); !d.done; d = c.next())
					if (d = d.value, d.audio.label == a) {
						b = d;
						break
					} null != b && (this.La = new ye(b.language, "", 0, a), Vl(this))
			}
		};
		r.wd = function() {
			var a = this.ha;
			return this.L ? this.L.m.isTextVisible() : this.g && this.g.src && this.g.textTracks ? Pl(this).some(function(b) {
				return "showing" == b.mode
			}) : a
		};
		r.te = function() {
			return this.g && this.g.src && this.g.textTracks ? $l(this).map(function(a) {
				return ie(a)
			}) : []
		};
		r.hf = function(a) {
			var b = Q(a),
				c = $l(this).filter(function(g) {
					return Q(g.language) == b
				});
			if (!c || !c.length) return [];
			a = [];
			c = t(c);
			for (var d = c.next(); !d.done; d = c.next())
				if ((d = d.value) && d.cues) {
					d = t(d.cues);
					for (var e = d.next(); !e.done; e = d.next()) {
						e = e.value;
						var f = e.id;
						f && "" != f || (f = e.startTime + "-" + e.endTime + "-" + e.text);
						a.push({
							id: f,
							title: e.text,
							startTime: e.startTime,
							endTime: e.endTime
						})
					}
				} return a
		};

		function Pl(a) {
			return Array.from(a.g.textTracks).filter(function(b) {
				return "metadata" != b.kind && "chapters" != b.kind && "Shaka Player TextTrack" != b.label
			})
		}

		function Rl(a) {
			return Array.from(a.g.textTracks).filter(function(b) {
				return "metadata" == b.kind
			})
		}

		function $l(a) {
			return Array.from(a.g.textTracks).filter(function(b) {
				return "chapters" == b.kind
			})
		}
		r.fg = function(a) {
			a = !!a;
			if (this.ha != a) {
				this.ha = a;
				if (this.l == Cl) this.L.m.setTextVisibility(a), this.h.streaming.alwaysStreamText || (a ? this.j.o || (a = ne(this.i.textStreams, this.Ma, this.Xb, this.Vb), 0 < a.length && (uj(this.j, a[0]), Wl(this))) : qj(this.j));
				else if (this.g && this.g.src && this.g.textTracks) {
					var b = Pl(this);
					b = t(b);
					for (var c = b.next(); !c.done; c = b.next()) c = c.value, "disabled" != c.mode && (c.mode = a ? "showing" : "hidden")
				}
				Hl(this)
			}
		};
		r.wf = function() {
			if (!this.V()) return null;
			var a = this.ua.l,
				b = 0;
			if (this.C) b = this.C.Bc();
			else if (a) {
				if (null == a.startTime) return new Date;
				b = a.startTime
			}
			return this.i ? new Date(1E3 * (this.i.presentationTimeline.l + b)) : this.g && this.g.getStartDate ? (a = this.g.getStartDate(), isNaN(a.getTime()) ? null : new Date(a.getTime() + 1E3 * b)) : null
		};
		r.ue = function() {
			if (!this.V()) return null;
			if (this.i) return new Date(1E3 * this.i.presentationTimeline.l);
			if (this.g && this.g.getStartDate) {
				var a = this.g.getStartDate();
				return isNaN(a.getTime()) ? null : a
			}
			return null
		};
		r.Oa = function() {
			if (this.l == Cl) return this.L.Oa();
			var a = {
				total: [],
				audio: [],
				video: [],
				text: []
			};
			this.l == Nl && (a.total = Vh(this.g.buffered));
			return a
		};
		r.getStats = function() {
			if (this.l != Cl && this.l != Nl) return {
				width: NaN,
				height: NaN,
				streamBandwidth: NaN,
				decodedFrames: NaN,
				droppedFrames: NaN,
				corruptedFrames: NaN,
				stallsDetected: NaN,
				gapsJumped: NaN,
				estimatedBandwidth: NaN,
				completionPercent: NaN,
				loadLatency: NaN,
				manifestTimeSeconds: NaN,
				drmTimeSeconds: NaN,
				playTime: NaN,
				pauseTime: NaN,
				bufferingTime: NaN,
				licenseTime: NaN,
				liveLatency: NaN,
				maxSegmentDuration: NaN,
				switchHistory: [],
				stateHistory: []
			};
			ul(this);
			var a = this.g,
				b = a.currentTime / a.duration;
			if (!isNaN(b)) {
				var c = this.s;
				b =
					Math.round(100 * b);
				c.i = isNaN(c.i) ? b : Math.max(c.i, b)
			}
			this.C && (this.s.M = this.C.ge(), this.s.O = this.C.he());
			a.getVideoPlaybackQuality && (a = a.getVideoPlaybackQuality(), c = this.s, b = Number(a.totalVideoFrames), c.L = Number(a.droppedVideoFrames), c.I = b, this.s.G = Number(a.corruptedVideoFrames));
			this.m ? (a = this.m, a = a.I ? a.I : NaN) : a = NaN;
			this.s.m = a;
			if (this.l == Cl) {
				if (a = this.j.l) this.s.s = (this.G ? this.G.i : 1) * a.bandwidth;
				a && a.video && (c = this.s, b = a.video.height || NaN, c.T = a.video.width || NaN, c.u = b);
				this.V() && (a = this.ue().valueOf() +
					1E3 * this.pc().end, this.s.C = (Date.now() - a) / 1E3);
				this.i && this.i.presentationTimeline && (this.s.F = this.i.presentationTimeline.g);
				a = this.u.getBandwidthEstimate();
				this.s.o = a
			}
			var d = this.s;
			a = d.T;
			c = d.u;
			b = d.s;
			var e = d.I,
				f = d.L,
				g = d.G,
				h = d.O,
				k = d.M,
				l = d.o,
				m = d.i,
				p = d.l,
				n = d.D,
				q = d.j,
				w = Ik(d.g, "playing"),
				y = Ik(d.g, "paused"),
				x = Ik(d.g, "buffering"),
				v = d.m,
				D = d.C,
				C = d.F,
				A = Jk(d.g),
				G = [];
			d = t(d.h.g);
			for (var E = d.next(); !E.done; E = d.next()) E = E.value, G.push({
				timestamp: E.timestamp,
				id: E.id,
				type: E.type,
				fromAdaptation: E.fromAdaptation,
				bandwidth: E.bandwidth
			});
			return {
				width: a,
				height: c,
				streamBandwidth: b,
				decodedFrames: e,
				droppedFrames: f,
				corruptedFrames: g,
				stallsDetected: h,
				gapsJumped: k,
				estimatedBandwidth: l,
				completionPercent: m,
				loadLatency: p,
				manifestTimeSeconds: n,
				drmTimeSeconds: q,
				playTime: w,
				pauseTime: y,
				bufferingTime: x,
				licenseTime: v,
				liveLatency: D,
				maxSegmentDuration: C,
				stateHistory: A,
				switchHistory: G
			}
		};
		r.Ue = function(a, b, c, d, e, f, g) {
			g = void 0 === g ? !1 : g;
			var h = this,
				k, l, m, p, n, q, w, y, x, v, D;
			return K(function(C) {
				switch (C.g) {
					case 1:
						if (h.l != Cl && h.l != Nl) throw new N(1, 7, 7004);
						if (d) {
							C.A(2);
							break
						}
						return u(C, am(h, a), 3);
					case 3:
						d = C.h;
					case 2:
						k = [];
						if (h.D) try {
							k = h.D.getServerSideCuePoints()
						} catch (A) {}
						if (h.l != Nl) {
							C.A(4);
							break
						}
						g && (c = "forced");
						return u(C, bm(h, a, b, c, d, f || "", k), 5);
					case 5:
						l = h.Bb();
						if (m = l.find(function(A) {
								return A.language == b && A.label == (f || "") && A.kind == c
							})) return Kl(h), C["return"](m);
						throw new N(1, 2, 2012);
					case 4:
						p =
							mc;
						n = h.i.presentationTimeline.getDuration();
						if (Infinity == n) throw new N(1, 4, 4033);
						if (!k.length) {
							C.A(6);
							break
						}
						return u(C, cm(h, a, h.F, h.h.streaming.retryParameters), 7);
					case 7:
						q = C.h, w = dm(h, q, d, k), y = new Blob([w], {
							type: "text/vtt"
						}), a = $h(y), d = "text/vtt";
					case 6:
						x = {
							id: h.De++,
							originalId: null,
							createSegmentIndex: function() {
								return Promise.resolve()
							},
							segmentIndex: Si(0, n, [a]),
							mimeType: d || "",
							codecs: e || "",
							kind: c,
							encrypted: !1,
							drmInfos: [],
							keyIds: new Set,
							language: b,
							label: f || null,
							type: p.X,
							primary: !1,
							trickModeVideo: null,
							emsgSchemeIdUris: null,
							roles: [],
							forced: !!g,
							channelsCount: null,
							audioSamplingRate: null,
							spatialAudio: !1,
							closedCaptions: null
						};
						v = Zc(x.mimeType, x.codecs);
						D = ed(v);
						if (!D) throw new N(2, 2, 2014, d);
						h.i.textStreams.push(x);
						Kl(h);
						return C["return"](de(x))
				}
			})
		};
		r.Te = function(a, b, c) {
			var d = this,
				e, f, g, h;
			return K(function(k) {
				switch (k.g) {
					case 1:
						if (d.l != Cl && d.l != Nl) throw new N(1, 7, 7004);
						if (c) {
							k.A(2);
							break
						}
						return u(k, am(d, a), 3);
					case 3:
						c = k.h;
					case 2:
						e = [];
						if (d.D) try {
							e = d.D.getServerSideCuePoints()
						} catch (l) {}
						return u(k, bm(d, a, b, "chapters", c, "", e), 4);
					case 4:
						f = k.h;
						g = d.te();
						h = g.find(function(l) {
							return l.language == b
						});
						if (!h) {
							k.A(5);
							break
						}
						return u(k, new Promise(function(l, m) {
							d.o.oa(f, "load", l);
							d.o.oa(f, "error", function() {
								m(new N(1, 2, 2015))
							})
						}), 6);
					case 6:
						return k["return"](h);
					case 5:
						throw new N(1, 2, 2012);
				}
			})
		};

		function am(a, b) {
			var c, d;
			return K(function(e) {
				switch (e.g) {
					case 1:
						c = kg(b);
						if (d = em[c]) return e["return"](d);
						B(e, 2);
						return u(e, mg(b, a.F, a.h.streaming.retryParameters), 4);
					case 4:
						d = e.h;
						va(e, 3);
						break;
					case 2:
						F(e);
					case 3:
						if (d) return e["return"](d);
						throw new N(1, 2, 2011, c);
				}
			})
		}

		function bm(a, b, c, d, e, f, g) {
			var h, k, l, m;
			return K(function(p) {
				if (1 == p.g) return "text/vtt" != e || g.length ? u(p, cm(a, b, a.F, a.h.streaming.retryParameters), 3) : p.A(2);
				2 != p.g && (h = p.h, k = dm(a, h, e, g), l = new Blob([k], {
					type: "text/vtt"
				}), b = $h(l), e = "text/vtt");
				m = document.createElement("track");
				var n = a.T,
					q = b;
				try {
					if (n.g.enabled) {
						var w = rk(n);
						w.ot = xk;
						w.su = !0;
						var y = tk(w);
						var x = uk(q, y)
					} else x = q
				} catch (v) {
					Wa("CMCD_TEXT_TRACK_ERROR", "Could not generate text track CMCD data.", v), x = q
				}
				m.src = x;
				m.label = f;
				m.kind = d;
				m.srclang = c;
				a.g.getAttribute("crossorigin") ||
					a.g.setAttribute("crossorigin", "anonymous");
				a.g.appendChild(m);
				return p["return"](m)
			})
		}

		function cm(a, b, c, d) {
			var e, f, g;
			return K(function(h) {
				if (1 == h.g) {
					e = gf;
					f = af([b], d);
					f.method = "GET";
					var k = a.T;
					try {
						k.g.enabled && pk(k, f, {
							ot: xk,
							su: !0
						})
					} catch (l) {
						Wa("CMCD_TEXT_ERROR", "Could not generate text CMCD data.", l)
					}
					return u(h, c.request(e, f).promise, 2)
				}
				g = h.h;
				return h["return"](g.data)
			})
		}

		function dm(a, b, c, d) {
			var e = fd[c];
			if (e) return c = e(), a = {
				periodStart: 0,
				segmentStart: 0,
				segmentEnd: a.g.duration,
				vttOffset: 0
			}, b = Fb(b), b = c.parseMedia(b, a), dk(b, d);
			throw new N(2, 2, 2014, c);
		}
		r.Zd = function(a, b) {
			this.Yb.width = a;
			this.Yb.height = b
		};
		r.Sd = function() {
			if (this.l == Cl) {
				var a = this.j;
				if (a.j.g) a = !1;
				else if (a.s) a = !1;
				else {
					for (var b = t(a.h.values()), c = b.next(); !c.done; c = b.next()) c = c.value, c.hc && (c.hc = !1, pj(a, c, .1));
					a = !0
				}
			} else a = !1;
			return a
		};
		r.pf = function() {
			Va("Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for.");
			return this.i
		};
		r.qf = function() {
			return this.Qc
		};

		function Ok(a) {
			var b = Dk();
			b.streaming.failureCallback = function(c) {
				var d = [1001, 1002, 1003];
				a.V() && d.includes(c.code) && (c.severity = 1, a.Sd())
			};
			b.textDisplayFactory = function() {
				return a.Gc ? new Wj(a.g, a.Gc) : new Rj(a.g)
			};
			return b
		}
		r.Me = function(a) {
			this.Gc = a
		};

		function pl(a, b) {
			for (var c = new Set, d = t(b.textStreams), e = d.next(); !e.done; e = d.next()) e = e.value, "application/cea-608" != e.mimeType && "application/cea-708" != e.mimeType || c.add(e.originalId);
			d = t(b.variants);
			for (e = d.next(); !e.done; e = d.next())
				if ((e = e.value.video) && e.closedCaptions)
					for (var f = t(e.closedCaptions.keys()), g = f.next(); !g.done; g = f.next())
						if (g = g.value, !c.has(g)) {
							var h = g.startsWith("CC") ? "application/cea-608" : "application/cea-708",
								k = new Ti;
							h = {
								id: a.De++,
								originalId: g,
								createSegmentIndex: function() {
									return Promise.resolve()
								},
								segmentIndex: k,
								mimeType: h,
								codecs: "",
								kind: "caption",
								encrypted: !1,
								drmInfos: [],
								keyIds: new Set,
								language: e.closedCaptions.get(g),
								label: null,
								type: lc,
								primary: !1,
								trickModeVideo: null,
								emsgSchemeIdUris: null,
								roles: e.roles,
								forced: !1,
								channelsCount: null,
								audioSamplingRate: null,
								spatialAudio: !1,
								closedCaptions: null
							};
							b.textStreams.push(h);
							c.add(g)
						}
		}

		function ol(a, b) {
			return K(function(c) {
				if (1 == c.g) return u(c, fm(a, b), 2);
				Ul(a, b);
				z(c)
			})
		}

		function fm(a, b) {
			var c;
			return K(function(d) {
				if (1 == d.g) return c = a.j ? a.j.l : null, u(d, Pd(c, b), 2);
				Jl(b);
				z(d)
			})
		}

		function Ul(a, b) {
			if (a.l != cl) {
				Od(b.variants, a.h.restrictions, a.Yb) && a.j && Kl(a);
				var c = a.m ? a.m.g : null;
				if (c && a.m.s)
					for (var d = t(b.variants), e = d.next(); !e.done; e = d.next()) {
						e = e.value;
						e = t((e.video ? e.video.drmInfos : []).concat(e.audio ? e.audio.drmInfos : []));
						for (var f = e.next(); !f.done; f = e.next())
							if (f = f.value, f.keySystem == c.keySystem) {
								f = t(f.initData || []);
								for (var g = f.next(); !g.done; g = f.next()) g = g.value, Mf(a.m, g.initDataType, g.initData)
							}
					}
				gm(a, b)
			}
		}

		function El(a, b) {
			var c, d, e, f, g;
			return K(function(h) {
				if (1 == h.g) return c = a.audio, d = a.video, e = function(k, l) {
					var m, p, n;
					return K(function(q) {
						if (1 == q.g) return k ? u(q, k.createSegmentIndex(), 2) : q["return"](null);
						p = (m = k.segmentIndex.zb(l)) ? m.next().value : null;
						if (!p) return q["return"](null);
						n = p.startTime;
						return q["return"](n)
					})
				}, u(h, e(c, b), 2);
				if (3 != h.g) return f = h.h, u(h, e(d, b), 3);
				g = h.h;
				return null != g && null != f ? h["return"](Math.max(g, f)) : null != g ? h["return"](g) : null != f ? h["return"](f) : h["return"](b)
			})
		}

		function kl(a) {
			var b = a.vd();
			if (a.s && a.M && a.C) {
				var c = a.G;
				c.j = b;
				Vi(c);
				a.T && (c = a.T, b || c.i || (c.i = !0), c.i && b && (c.l = !0), c.m = b);
				ul(a)
			}
			b = (new Map).set("buffering", b);
			a.dispatchEvent(al("buffering", b))
		}

		function vl(a) {
			var b = a.g.playbackRate;
			0 != b && (a.G && a.G.set(b), b = al("ratechange"), a.dispatchEvent(b))
		}

		function ul(a) {
			if (a.s && a.M) {
				var b = a.s.g;
				a.M.g == Ee ? Hk(b, "buffering") : a.g.paused ? Hk(b, "paused") : a.g.ended ? Hk(b, "ended") : Hk(b, "playing")
			}
		}

		function Ll(a) {
			try {
				gm(a, a.i)
			} catch (c) {
				return jl(a, c), !1
			}
			var b = a.i.variants.filter(function(c) {
				return le(c)
			});
			b = a.La.create(b);
			a.u.setVariants(Array.from(b.values()));
			return !0
		}

		function bl(a) {
			return Ll(a) ? a.u.chooseVariant() : null
		}

		function Vl(a) {
			var b = bl(a);
			b && xl(a, b, !0, !0, 0)
		}

		function xl(a, b, c, d, e) {
			var f = a.j.l;
			if (b == f) d && tj(a.j, b, d, e, !0);
			else {
				var g = a.s.h;
				g.h != b && (g.h = b, g.g.push({
					timestamp: Date.now() / 1E3,
					id: b.id,
					type: "variant",
					fromAdaptation: c,
					bandwidth: b.bandwidth
				}));
				tj(a.j, b, d, e);
				d = null;
				f && (d = ce(f));
				b = ce(b);
				c ? Fl(a, d, b) : hm(a, d, b)
			}
		}

		function Xl(a, b) {
			var c = Array.from(a.g.audioTracks).find(function(e) {
				return e.enabled
			});
			b.enabled = !0;
			b.id !== c.id && (c.enabled = !1);
			c = ke(c);
			var d = ke(b);
			hm(a, c, d)
		}

		function Gl(a, b, c) {
			a = Q(a.h.preferredTextLanguage);
			b = Q(b.language);
			c = Q(c.language);
			return qd(c, a) && !qd(b, c)
		}

		function Fl(a, b, c) {
			b = (new Map).set("oldTrack", b).set("newTrack", c);
			b = al("adaptation", b);
			im(a, b)
		}

		function Kl(a) {
			var b = al("trackschanged");
			im(a, b)
		}

		function hm(a, b, c) {
			b = (new Map).set("oldTrack", b).set("newTrack", c);
			b = al("variantchanged", b);
			im(a, b)
		}

		function Wl(a) {
			var b = al("textchanged");
			im(a, b)
		}

		function Hl(a) {
			var b = al("texttrackvisibility");
			im(a, b)
		}

		function Il(a) {
			var b = (new Map).set("newStatus", a.h.abr.enabled);
			im(a, al("abrstatuschanged", b))
		}

		function jm(a, b) {
			if (1002 != b.code && 1011 != b.code || 1 != b.category) return !1;
			var c = a.h.streaming.maxDisabledTime;
			if (0 == c)
				if (1011 == b.code) c = 1;
				else return !1;
			for (var d = a.Za().find(function(h) {
					return h.active
				}), e = a.i, f = t(e.variants), g = f.next(); !g.done; g = f.next()) g = g.value, g.id === d.id && (g.disabledUntilTime = Date.now() / 1E3 + c);
			Od(e.variants, a.h.restrictions, a.Yb);
			d = bl(a);
			if (!d) return !1;
			e = a.Oa().video.reduce(function(h, k) {
				return h + k.end - k.start
			}, 0);
			xl(a, d, !1, !0, e);
			a.Ce.S(c);
			return !0
		}

		function jl(a, b) {
			if (a.l != cl)
				if (jm(a, b)) b.handled = !0;
				else {
					var c = al("error", (new Map).set("detail", b));
					a.dispatchEvent(c);
					c.defaultPrevented && (b.handled = !0)
				}
		}

		function nl(a, b, c) {
			c = (new Map).set("detail", {
				schemeIdUri: c.schemeIdUri,
				value: c.value,
				startTime: c.startTime,
				endTime: c.endTime,
				id: c.id,
				eventElement: c.eventElement
			});
			a.dispatchEvent(al(b, c))
		}

		function il(a) {
			if (!a.g.error) return null;
			var b = a.g.error.code;
			if (1 == b) return null;
			var c = a.g.error.msExtendedCode;
			c && (0 > c && (c += Math.pow(2, 32)), c = c.toString(16));
			return new N(2, 3, 3016, b, c, a.g.error.message)
		}

		function sl(a, b) {
			if (a.j) {
				var c = Object.keys(b),
					d = 1 == c.length && "00" == c[0],
					e = !1;
				if (c.length) {
					c = t(a.i.variants);
					for (var f = c.next(); !f.done; f = c.next()) {
						f = f.value;
						var g = [];
						f.audio && g.push(f.audio);
						f.video && g.push(f.video);
						g = t(g);
						for (var h = g.next(); !h.done; h = g.next()) {
							var k = h.value;
							h = f.allowedByKeySystem;
							if (k.keyIds.size) {
								f.allowedByKeySystem = !0;
								k = t(k.keyIds);
								for (var l = k.next(); !l.done; l = k.next()) l = l.value, l = b[d ? "00" : l], f.allowedByKeySystem = f.allowedByKeySystem && !!l && !km.includes(l)
							}
							h != f.allowedByKeySystem &&
								(e = !0)
						}
					}
				}
				if (!e || Ll(a))(d = a.j.l) && !d.allowedByKeySystem && Vl(a), e && Kl(a)
			}
		}

		function tl(a, b, c) {
			if (a.I && a.I.onExpirationUpdated) a.I.onExpirationUpdated(b, c);
			b = al("expirationupdated");
			a.dispatchEvent(b)
		}

		function wl(a, b, c) {
			0 < b && (a.V() || a.Le(b));
			b = a.getDuration();
			c < b && (a.V() || a.Ia(c))
		}

		function gm(a, b) {
			var c = a.m ? a.m.Kc() : {},
				d = Object.keys(c);
			d = d.length && "00" == d[0];
			for (var e = !1, f = !1, g = new Set, h = new Set, k = t(b.variants), l = k.next(); !l.done; l = k.next()) {
				l = l.value;
				var m = [];
				l.audio && m.push(l.audio);
				l.video && m.push(l.video);
				m = t(m);
				for (var p = m.next(); !p.done; p = m.next())
					if (p = p.value, p.keyIds.size) {
						p = t(p.keyIds);
						for (var n = p.next(); !n.done; n = p.next()) {
							n = n.value;
							var q = c[d ? "00" : n];
							q ? km.includes(q) && h.add(q) : g.add(n)
						}
					} l.allowedByApplication ? l.allowedByKeySystem && (e = !0) : f = !0
			}
			if (!e) throw c = {
				hasAppRestrictions: f,
				missingKeys: Array.from(g),
				restrictedKeyStatuses: Array.from(h)
			}, new N(2, 4, 4012, c);
		}

		function Jl(a) {
			if (!a.variants.some(le)) throw new N(2, 4, 4032);
		}

		function im(a, b) {
			K(function(c) {
				if (1 == c.g) return u(c, Promise.resolve(), 2);
				a.l != cl && a.dispatchEvent(b);
				z(c)
			})
		}

		function Zl(a) {
			var b = new Set;
			a = t(a);
			for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.language ? b.add(Q(c.language)) : b.add("und");
			return b
		}

		function Yl(a) {
			var b = new Map,
				c = new Map;
			a = t(a);
			for (var d = a.next(); !d.done; d = a.next()) {
				d = d.value;
				var e = "und",
					f = [];
				d.language && (e = Q(d.language));
				"variant" == d.type ? f = d.audioRoles : f = d.roles;
				f && f.length || (f = [""]);
				b.has(e) || b.set(e, new Set);
				f = t(f);
				for (var g = f.next(); !g.done; g = f.next()) g = g.value, b.get(e).add(g), d.label && (c.has(e) || c.set(e, new Map), c.get(e).set(g, d.label))
			}
			var h = [];
			b.forEach(function(k, l) {
				for (var m = t(k), p = m.next(); !p.done; p = m.next()) {
					p = p.value;
					var n = null;
					c.has(l) && c.get(l).has(p) && (n = c.get(l).get(p));
					h.push({
						language: l,
						role: p,
						label: n
					})
				}
			});
			return h
		}

		function dl() {
			return new N(2, 7, 7E3)
		}

		function $k(a, b, c, d, e, f) {
			return d == a && e.K == f.K && e.uri == f.uri && e.mimeType == f.mimeType ? b : c
		}

		function Lj() {
			return {
				K: null,
				mimeType: null,
				startTime: null,
				be: NaN,
				uri: null
			}
		}

		function el(a) {
			return new Promise(function(b, c) {
				a.lb = function() {
					return c(dl())
				};
				a.Uc = function() {
					return b()
				};
				a.onError = function(d) {
					return c(d)
				};
				a.Wc = function() {
					return c(dl())
				}
			})
		}
		M("shaka.Player", U);
		U.prototype.setVideoContainer = U.prototype.Me;
		U.prototype.getManifestParserFactory = U.prototype.qf;
		U.prototype.getManifest = U.prototype.pf;
		U.prototype.retryStreaming = U.prototype.Sd;
		U.prototype.setMaxHardwareResolution = U.prototype.Zd;
		U.prototype.addChaptersTrack = U.prototype.Te;
		U.prototype.addTextTrackAsync = U.prototype.Ue;
		U.prototype.getStats = U.prototype.getStats;
		U.prototype.getBufferedInfo = U.prototype.Oa;
		U.prototype.getPresentationStartTimeAsDate = U.prototype.ue;
		U.prototype.getPlayheadTimeAsDate = U.prototype.wf;
		U.prototype.setTextTrackVisibility = U.prototype.fg;
		U.prototype.getChapters = U.prototype.hf;
		U.prototype.getChaptersTracks = U.prototype.te;
		U.prototype.isTextTrackVisible = U.prototype.wd;
		U.prototype.selectVariantsByLabel = U.prototype.$f;
		U.prototype.selectTextLanguage = U.prototype.Wd;
		U.prototype.selectAudioLanguage = U.prototype.Vd;
		U.prototype.getTextLanguages = U.prototype.yf;
		U.prototype.getAudioLanguages = U.prototype.ef;
		U.prototype.getTextLanguagesAndRoles = U.prototype.zf;
		U.prototype.getAudioLanguagesAndRoles = U.prototype.ff;
		U.prototype.selectVariantTrack = U.prototype.Ie;
		U.prototype.selectTextTrack = U.prototype.He;
		U.prototype.getThumbnails = U.prototype.Af;
		U.prototype.getImageTracks = U.prototype.lf;
		U.prototype.getTextTracks = U.prototype.Bb;
		U.prototype.getVariantTracks = U.prototype.Za;
		U.prototype.cancelTrickPlay = U.prototype.Ye;
		U.prototype.trickPlay = U.prototype.hg;
		U.prototype.getPlaybackRate = U.prototype.Lc;
		U.prototype.isBuffering = U.prototype.vd;
		U.prototype.getKeyStatuses = U.prototype.Kc;
		U.prototype.getExpiration = U.prototype.cc;
		U.prototype.drmInfo = U.prototype.drmInfo;
		U.prototype.keySystem = U.prototype.keySystem;
		U.prototype.goToLive = U.prototype.Ef;
		U.prototype.seekRange = U.prototype.pc;
		U.prototype.isAudioOnly = U.prototype.Gf;
		U.prototype.isInProgress = U.prototype.jb;
		U.prototype.isLive = U.prototype.V;
		U.prototype.getAdManager = U.prototype.se;
		U.prototype.getAssetUri = U.prototype.ud;
		U.prototype.getNetworkingEngine = U.prototype.dc;
		U.prototype.getMediaElement = U.prototype.tf;
		U.prototype.getLoadMode = U.prototype.nf;
		U.prototype.resetConfiguration = U.prototype.Yf;
		U.prototype.getBufferFullness = U.prototype.gf;
		U.prototype.getConfiguration = U.prototype.getConfiguration;
		U.prototype.configure = U.prototype.configure;
		U.prototype.load = U.prototype.load;
		U.prototype.updateStartTime = U.prototype.mg;
		U.prototype.unload = U.prototype.ee;
		U.prototype.detach = U.prototype.detach;
		U.prototype.attach = U.prototype.Wb;
		U.probeSupport = function(a) {
			a = void 0 === a ? !0 : a;
			var b, c, d, e, f, g;
			return K(function(h) {
				if (1 == h.g) return b = {}, a ? u(h, cg(), 3) : h.A(2);
				2 != h.g && (b = h.h);
				var k = {};
				if (qc()) {
					for (var l in jg) k[l] = !0;
					for (var m in lg) k[m] = !0
				}
				l = {
					mpd: "application/dash+xml",
					m3u8: "application/x-mpegurl",
					ism: "application/vnd.ms-sstr+xml"
				};
				m = t(["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"]);
				for (var p = m.next(); !p.done; p = m.next()) p = p.value, k[p] = qc() ? !!jg[p] : rc(p);
				for (var n in l) k[n] =
					qc() ? !!lg[n] : rc(l[n]);
				c = k;
				n = 'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").concat(ia(ti));
				k = {};
				n = t(n);
				for (l = n.next(); !l.done; l = n.next()) l = l.value, k[l] = qc() ? ed(l) ? !0 : MediaSource.isTypeSupported(l) || Uc(l) : rc(l), m = l.split(";")[0], k[m] = k[m] || k[l];
				d = k;
				e = {
					manifest: c,
					media: d,
					drm: b
				};
				f = lm;
				for (g in f) e[g] = f[g]();
				return h["return"](e)
			})
		};
		U.isBrowserSupported = function() {
			window.Promise || Va("A Promise implementation or polyfill is required");
			window.TextDecoder && window.TextEncoder || Va("A TextDecoder/TextEncoder implementation or polyfill is required");
			if (!(window.Promise && window.Uint8Array && window.TextDecoder && window.TextEncoder && Array.prototype.forEach) || uc("Trident/")) return !1;
			var a = Ac();
			return a && 13 > a || !(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration) ?
				!1 : qc() ? !0 : rc("application/x-mpegurl")
		};
		U.setAdManagerFactory = function(a) {
			Qk = a
		};
		U.registerSupportPlugin = function(a, b) {
			lm[a] = b
		};
		U.prototype.destroy = U.prototype.destroy;
		var cl = 0,
			Nk = 1,
			Cl = 2,
			Nl = 3;
		U.LoadMode = {
			DESTROYED: cl,
			NOT_LOADED: Nk,
			MEDIA_SOURCE: Cl,
			SRC_EQUALS: Nl
		};
		U.version = "v4.1.2";
		var km = ["output-restricted", "internal-error"],
			lm = {},
			Qk = null,
			hl = {
				mp4: "video/mp4",
				m4v: "video/mp4",
				m4a: "audio/mp4",
				webm: "video/webm",
				weba: "audio/webm",
				mkv: "video/webm",
				ts: "video/mp2t",
				ogv: "video/ogg",
				ogg: "audio/ogg",
				mpg: "video/mpeg",
				mpeg: "video/mpeg",
				m3u8: "application/x-mpegurl",
				mpd: "application/dash+xml",
				mp3: "audio/mpeg",
				aac: "audio/aac",
				flac: "audio/flac",
				wav: "audio/wav"
			},
			em = {
				sbv: "text/x-subviewer",
				srt: "text/srt",
				vtt: "text/vtt",
				webvtt: "text/vtt",
				ttml: "application/ttml+xml",
				lrc: "application/x-subtitle-lrc",
				ssa: "text/x-ssa",
				ass: "text/x-ssa"
			};

		function mm() {
			this.h = [];
			this.j = this.i = this.g = 0
		};

		function V(a, b, c) {
			var d = this;
			this.h = a;
			this.g = b;
			this.m = c;
			this.i = !1;
			this.l = this.g.getVolume();
			this.j = new kf;
			this.j.B(this.g, google.ima.AdEvent.Type.PAUSED, function() {
				d.i = !0
			});
			this.j.B(this.g, google.ima.AdEvent.Type.RESUMED, function() {
				d.i = !1
			})
		}
		r = V.prototype;
		r.getDuration = function() {
			return this.h.getDuration()
		};
		r.getMinSuggestedDuration = function() {
			return this.h.getMinSuggestedDuration()
		};
		r.getRemainingTime = function() {
			return this.g.getRemainingTime()
		};
		r.isPaused = function() {
			return this.i
		};
		r.isSkippable = function() {
			return 0 <= this.h.getSkipTimeOffset()
		};
		r.getTimeUntilSkippable = function() {
			var a = this.h.getSkipTimeOffset();
			a = this.getRemainingTime() - a;
			return Math.max(a, 0)
		};
		r.canSkipNow = function() {
			return this.g.getAdSkippableState()
		};
		r.skip = function() {
			return this.g.skip()
		};
		r.pause = function() {
			return this.g.pause()
		};
		r.play = function() {
			return this.g.resume()
		};
		r.getVolume = function() {
			return this.g.getVolume()
		};
		r.setVolume = function(a) {
			return this.g.setVolume(a)
		};
		r.isMuted = function() {
			return 0 == this.g.getVolume()
		};
		r.isLinear = function() {
			return this.h.isLinear()
		};
		r.resize = function(a, b) {
			var c = !1,
				d = this.m;
			document.fullscreenEnabled ? c = !!document.fullscreenElement : d.webkitSupportsFullscreen && (c = d.webkitDisplayingFullscreen);
			this.g.resize(a, b, c ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
		};
		r.setMuted = function(a) {
			a ? (this.l = this.getVolume(), this.setVolume(0)) : this.setVolume(this.l)
		};
		r.getSequenceLength = function() {
			var a = this.h.getAdPodInfo();
			return null == a ? 1 : a.getTotalAds()
		};
		r.getPositionInSequence = function() {
			var a = this.h.getAdPodInfo();
			return null == a ? 1 : a.getAdPosition()
		};
		r.release = function() {
			this.g = this.h = null
		};
		M("shaka.ads.ClientSideAd", V);
		V.prototype.release = V.prototype.release;
		V.prototype.getPositionInSequence = V.prototype.getPositionInSequence;
		V.prototype.getSequenceLength = V.prototype.getSequenceLength;
		V.prototype.setMuted = V.prototype.setMuted;
		V.prototype.resize = V.prototype.resize;
		V.prototype.isLinear = V.prototype.isLinear;
		V.prototype.isMuted = V.prototype.isMuted;
		V.prototype.setVolume = V.prototype.setVolume;
		V.prototype.getVolume = V.prototype.getVolume;
		V.prototype.play = V.prototype.play;
		V.prototype.pause = V.prototype.pause;
		V.prototype.skip = V.prototype.skip;
		V.prototype.canSkipNow = V.prototype.canSkipNow;
		V.prototype.getTimeUntilSkippable = V.prototype.getTimeUntilSkippable;
		V.prototype.isSkippable = V.prototype.isSkippable;
		V.prototype.isPaused = V.prototype.isPaused;
		V.prototype.getRemainingTime = V.prototype.getRemainingTime;
		V.prototype.getMinSuggestedDuration = V.prototype.getMinSuggestedDuration;
		V.prototype.getDuration = V.prototype.getDuration;

		function nm(a, b, c, d) {
			var e = this;
			this.o = a;
			this.i = b;
			this.s = null;
			this.u = NaN;
			this.j = d;
			this.m = null;
			this.h = new kf;
			google.ima.settings.setLocale(c);
			a = new google.ima.AdDisplayContainer(this.o, this.i);
			a.initialize();
			this.l = new google.ima.AdsLoader(a);
			this.l.getSettings().setPlayerType("shaka-player");
			this.l.getSettings().setPlayerVersion("v4.1.2");
			this.g = null;
			this.h.oa(this.l, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(f) {
				om(e, f)
			});
			this.h.B(this.l, google.ima.AdErrorEvent.Type.AD_ERROR,
				function(f) {
					pm(e, f)
				});
			this.i.onended = function() {
				e.l.contentComplete()
			}
		}
		nm.prototype.stop = function() {
			this.g && this.g.stop();
			this.o && Vj(this.o)
		};
		nm.prototype.release = function() {
			this.stop();
			this.s && this.s.disconnect();
			this.h && this.h.release();
			this.g && this.g.destroy();
			this.l.destroy()
		};

		function pm(a, b) {
			b.getError();
			qm(a, null);
			a.j(new R("ad-cue-points-changed", (new Map).set("cuepoints", [])))
		}

		function om(a, b) {
			a.j(new R("ads-loaded", (new Map).set("loadTime", Date.now() / 1E3 - a.u)));
			a.g = b.getAdsManager(a.i);
			a.j(new R("ima-ad-manager-loaded", (new Map).set("imaAdManager", a.g)));
			var c = a.g.getCuePoints();
			if (c.length) {
				var d = [];
				c = t(c);
				for (var e = c.next(); !e.done; e = c.next()) d.push({
					start: e.value,
					end: null
				});
				a.j(new R("ad-cue-points-changed", (new Map).set("cuepoints", d)))
			}
			rm(a);
			try {
				a.g.init(a.i.offsetWidth, a.i.offsetHeight, sm(a) ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL), a.h.B(a.i, "loadeddata",
					function() {
						a.g.resize(a.i.offsetWidth, a.i.offsetHeight, sm(a) ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
					}), "ResizeObserver" in window && (a.s = new ResizeObserver(function() {
					a.g.resize(a.i.offsetWidth, a.i.offsetHeight, sm(a) ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
				}), a.s.observe(a.i)), a.g.start()
			} catch (f) {
				qm(a, null)
			}
		}

		function sm(a) {
			if (document.fullscreenEnabled) return !!document.fullscreenElement;
			a = a.i;
			return a.webkitSupportsFullscreen ? a.webkitDisplayingFullscreen : !1
		}

		function rm(a) {
			function b(c, d) {
				var e = (new Map).set("originalEvent", c);
				a.j(new R(d, e))
			}
			a.h.B(a.g, google.ima.AdErrorEvent.Type.AD_ERROR, function(c) {
				pm(a, c)
			});
			a.h.B(a.g, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function(c) {
				tm(a, c)
			});
			a.h.B(a.g, google.ima.AdEvent.Type.STARTED, function(c) {
				tm(a, c)
			});
			a.h.B(a.g, google.ima.AdEvent.Type.FIRST_QUARTILE, function(c) {
				b(c, "ad-first-quartile")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.MIDPOINT, function(c) {
				b(c, "ad-midpoint")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.THIRD_QUARTILE,
				function(c) {
					b(c, "ad-third-quartile")
				});
			a.h.B(a.g, google.ima.AdEvent.Type.COMPLETE, function(c) {
				b(c, "ad-complete")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function(c) {
				qm(a, c)
			});
			a.h.B(a.g, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function(c) {
				qm(a, c)
			});
			a.h.B(a.g, google.ima.AdEvent.Type.SKIPPED, function(c) {
				b(c, "ad-skipped")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.VOLUME_CHANGED, function(c) {
				b(c, "ad-volume-changed")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.VOLUME_MUTED, function(c) {
				b(c, "ad-muted")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.PAUSED, function(c) {
				a.m.i = !0;
				b(c, "ad-paused")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.RESUMED, function(c) {
				a.m.i = !1;
				b(c, "ad-resumed")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, function(c) {
				b(c, "ad-skip-state-changed")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.CLICK, function(c) {
				b(c, "ad-clicked")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.AD_PROGRESS, function(c) {
				b(c, "ad-progress")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.AD_BUFFERING, function(c) {
				b(c, "ad-buffering")
			});
			a.h.B(a.g,
				google.ima.AdEvent.Type.IMPRESSION,
				function(c) {
					b(c, "ad-impression")
				});
			a.h.B(a.g, google.ima.AdEvent.Type.DURATION_CHANGE, function(c) {
				b(c, "ad-duration-changed")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.USER_CLOSE, function(c) {
				b(c, "ad-closed")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.LOADED, function(c) {
				b(c, "ad-loaded")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function(c) {
				b(c, "all-ads-completed")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.LINEAR_CHANGED, function(c) {
				b(c, "ad-linear-changed")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.AD_METADATA,
				function(c) {
					b(c, "ad-metadata")
				});
			a.h.B(a.g, google.ima.AdEvent.Type.LOG, function(c) {
				b(c, "ad-recoverable-error")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.AD_BREAK_READY, function(c) {
				b(c, "ad-break-ready")
			});
			a.h.B(a.g, google.ima.AdEvent.Type.INTERACTION, function(c) {
				b(c, "ad-interaction")
			})
		}

		function tm(a, b) {
			var c = b.getAd();
			a.m = new V(c, a.g, a.i);
			c = (new Map).set("ad", a.m).set("sdkAdObject", c).set("originalEvent", b);
			a.j(new R("ad-started", c));
			a.m.isLinear() && (a.o.setAttribute("ad-active", "true"), a.i.pause())
		}

		function qm(a, b) {
			a.j(new R("ad-stopped", (new Map).set("originalEvent", b)));
			a.m.isLinear() && (a.o.removeAttribute("ad-active"), a.i.play())
		};

		function W(a, b) {
			this.i = a;
			this.h = null;
			this.g = b
		}
		r = W.prototype;
		r.getDuration = function() {
			return this.h ? this.h.duration : -1
		};
		r.getMinSuggestedDuration = function() {
			return this.getDuration()
		};
		r.getRemainingTime = function() {
			return this.h ? this.h.duration - this.h.currentTime : -1
		};
		r.isPaused = function() {
			return this.g.paused
		};
		r.isSkippable = function() {
			return this.i.isSkippable()
		};
		r.getTimeUntilSkippable = function() {
			var a = this.i.getSkipTimeOffset();
			a = this.getRemainingTime() - a;
			return Math.max(a, 0)
		};
		r.canSkipNow = function() {
			return 0 == this.getTimeUntilSkippable()
		};
		r.skip = function() {
			this.g.currentTime += this.getRemainingTime()
		};
		r.pause = function() {
			return this.g.pause()
		};
		r.play = function() {
			return this.g.play()
		};
		r.getVolume = function() {
			return this.g.volume
		};
		r.setVolume = function(a) {
			this.g.volume = a
		};
		r.isMuted = function() {
			return this.g.muted
		};
		r.isLinear = function() {
			return !0
		};
		r.resize = function() {};
		r.setMuted = function(a) {
			this.g.muted = a
		};
		r.getSequenceLength = function() {
			var a = this.i.getAdPodInfo();
			return null == a ? 1 : a.getTotalAds()
		};
		r.getPositionInSequence = function() {
			var a = this.i.getAdPodInfo();
			return null == a ? 1 : a.getAdPosition()
		};
		r.release = function() {
			this.g = this.h = this.i = null
		};
		M("shaka.ads.ServerSideAd", W);
		W.prototype.release = W.prototype.release;
		W.prototype.getPositionInSequence = W.prototype.getPositionInSequence;
		W.prototype.getSequenceLength = W.prototype.getSequenceLength;
		W.prototype.setMuted = W.prototype.setMuted;
		W.prototype.resize = W.prototype.resize;
		W.prototype.isLinear = W.prototype.isLinear;
		W.prototype.isMuted = W.prototype.isMuted;
		W.prototype.setVolume = W.prototype.setVolume;
		W.prototype.getVolume = W.prototype.getVolume;
		W.prototype.play = W.prototype.play;
		W.prototype.pause = W.prototype.pause;
		W.prototype.skip = W.prototype.skip;
		W.prototype.canSkipNow = W.prototype.canSkipNow;
		W.prototype.getTimeUntilSkippable = W.prototype.getTimeUntilSkippable;
		W.prototype.isSkippable = W.prototype.isSkippable;
		W.prototype.isPaused = W.prototype.isPaused;
		W.prototype.getRemainingTime = W.prototype.getRemainingTime;
		W.prototype.getMinSuggestedDuration = W.prototype.getMinSuggestedDuration;
		W.prototype.getDuration = W.prototype.getDuration;

		function um(a, b, c, d) {
			var e = this;
			this.s = a;
			this.l = b;
			this.j = null;
			this.G = NaN;
			this.i = d;
			this.F = !1;
			this.u = this.m = this.o = null;
			this.C = "";
			this.D = [];
			this.h = new kf;
			a = new google.ima.dai.api.UiSettings;
			a.setLocale(c);
			this.g = new google.ima.dai.api.StreamManager(this.l, this.s, a);
			this.i(new R("ima-stream-manager-loaded", (new Map).set("imaStreamManager", this.g)));
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.LOADED, function(f) {
				vm(e, f)
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.ERROR, function() {
				e.C.length ?
					e.j.resolve(e.C) : e.j.reject("IMA Stream request returned an error and there was no backup asset uri provided.");
				e.j = null
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED, function() {});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.STARTED, function(f) {
				f = f.getAd();
				e.m = new W(f, e.l);
				e.u && (e.m.h = e.u);
				e.i(new R("ad-started", (new Map).set("ad", e.m)));
				e.s.setAttribute("ad-active", "true")
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED, function() {
				e.s.removeAttribute("ad-active");
				var f = e.l.currentTime;
				e.o && e.o > f && (e.l.currentTime = e.o, e.o = null)
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.AD_PROGRESS, function(f) {
				e.u = f.getStreamData().adProgressData;
				e.m && (e.m.h = e.u)
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.FIRST_QUARTILE, function() {
				e.i(new R("ad-first-quartile"))
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.MIDPOINT, function() {
				e.i(new R("ad-midpoint"))
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.THIRD_QUARTILE, function() {
				e.i(new R("ad-third-quartile"))
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.COMPLETE, function() {
				e.i(new R("ad-complete"));
				e.i(new R("ad-stopped"));
				e.s.removeAttribute("ad-active");
				e.m = null
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.SKIPPED, function() {
				e.i(new R("ad-skipped"));
				e.i(new R("ad-stopped"))
			});
			this.h.B(this.g, google.ima.dai.api.StreamEvent.Type.CUEPOINTS_CHANGED, function(f) {
				var g = f.getStreamData();
				f = [];
				g = t(g.cuepoints);
				for (var h = g.next(); !h.done; h = g.next()) h = h.value, f.push({
					start: h.start,
					end: h.end
				});
				e.D =
					f;
				e.i(new R("ad-cue-points-changed", (new Map).set("cuepoints", f)))
			})
		}
		um.prototype.stop = function() {
			this.C = "";
			this.o = null;
			this.D = []
		};
		um.prototype.release = function() {
			this.stop();
			this.h && this.h.release()
		};
		um.prototype.onCueMetadataChange = function(a) {
			if (a.key && a.data) {
				var b = {};
				b[a.key] = a.data;
				this.g.onTimedMetadata(b)
			}
		};

		function vm(a, b) {
			a.i(new R("ads-loaded", (new Map).set("loadTime", Date.now() / 1E3 - a.G)));
			var c = b.getStreamData().url;
			a.j.resolve(c);
			a.j = null;
			a.F || a.h.B(a.l, "seeked", function() {
				var d = a.l.currentTime;
				if (0 != d) {
					a.g.streamTimeForContentTime(d);
					var e = a.g.previousCuePointForStreamTime(d);
					e && !e.played && (a.o = d, a.l.currentTime = e.start)
				}
			})
		};

		function X() {
			Se.call(this);
			this.g = this.i = null;
			this.h = new mm;
			this.j = navigator.language
		}
		pa(X, Se);
		r = X.prototype;
		r.setLocale = function(a) {
			this.j = a
		};
		r.initClientSide = function(a, b) {
			var c = this;
			if (!window.google || !google.ima || !google.ima.AdsLoader) throw new N(2, 10, 1E4);
			this.i && this.i.release();
			this.i = new nm(a, b, this.j, function(d) {
				if (d && d.type) switch (d.type) {
					case "ads-loaded":
						c.h.h.push(d.loadTime);
						break;
					case "ad-started":
						c.h.g++;
						break;
					case "ad-complete":
						c.h.i++;
						break;
					case "ad-skipped":
						c.h.j++
				}
				c.dispatchEvent(d)
			})
		};
		r.release = function() {
			this.i && (this.i.release(), this.i = null);
			this.g && (this.g.release(), this.g = null);
			Se.prototype.release.call(this)
		};
		r.onAssetUnload = function() {
			this.i && this.i.stop();
			this.g && this.g.stop();
			this.dispatchEvent(new R("ad-stopped"));
			this.h = new mm
		};
		r.requestClientSideAds = function(a) {
			if (!this.i) throw new N(1, 10, 10001);
			var b = this.i;
			b.u = Date.now() / 1E3;
			b.l.requestAds(a)
		};
		r.initServerSide = function(a, b) {
			var c = this;
			if (!window.google || !google.ima || !google.ima.dai) throw new N(2, 10, 10002);
			this.g && this.g.release();
			this.g = new um(a, b, this.j, function(d) {
				if (d && d.type) switch (d.type) {
					case "ads-loaded":
						c.h.h.push(d.loadTime);
						break;
					case "ad-started":
						c.h.g++;
						break;
					case "ad-complete":
						c.h.i++;
						break;
					case "ad-skipped":
						c.h.j++
				}
				c.dispatchEvent(d)
			})
		};
		r.requestServerSideStream = function(a, b) {
			b = void 0 === b ? "" : b;
			if (!this.g) throw new N(1, 10, 10003);
			a.adTagParameters || (a.adTagParameters = {});
			var c = a.adTagParameters;
			(c.mpt || c.mpv) && Va('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');
			a.adTagParameters.mpt = "shaka-player";
			a.adTagParameters.mpv = "v4.1.2";
			c = this.g;
			var d = b;
			c.j ? c = Promise.reject(new N(1, 10, 10004)) : (a instanceof google.ima.dai.api.LiveStreamRequest &&
				(c.F = !0), c.j = new nc, c.g.requestStream(a), c.C = d || "", c.G = Date.now() / 1E3, c = c.j);
			return c
		};
		r.replaceServerSideAdTagParameters = function(a) {
			if (!this.g) throw new N(1, 10, 10003);
			(a.mpt || a.mpv) && Va('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');
			a.mpt = "Shaka Player";
			a.mpv = "v4.1.2";
			this.g.g.replaceAdTagParameters(a)
		};
		r.getServerSideCuePoints = function() {
			if (!this.g) throw new N(1, 10, 10003);
			return this.g.D
		};
		r.getStats = function() {
			var a = this.h;
			return {
				loadTimes: a.h,
				started: a.g,
				playedCompletely: a.i,
				skipped: a.j
			}
		};
		r.onDashTimedMetadata = function(a) {
			if (this.g && "urn:google:dai:2018" == a.schemeIdUri) {
				var b = a.schemeIdUri,
					c = a.eventElement ? a.eventElement.getAttribute("messageData") : null;
				this.g.g.processMetadata(b, c, a.startTime)
			}
		};
		r.onHlsTimedMetadata = function(a, b) {
			this.g && this.g.g.processMetadata("ID3", a.data, b)
		};
		r.onCueMetadataChange = function(a) {
			if (this.g) this.g.onCueMetadataChange(a)
		};
		M("shaka.ads.AdManager", X);
		X.prototype.onCueMetadataChange = X.prototype.onCueMetadataChange;
		X.prototype.onHlsTimedMetadata = X.prototype.onHlsTimedMetadata;
		X.prototype.onDashTimedMetadata = X.prototype.onDashTimedMetadata;
		X.prototype.getStats = X.prototype.getStats;
		X.prototype.getServerSideCuePoints = X.prototype.getServerSideCuePoints;
		X.prototype.replaceServerSideAdTagParameters = X.prototype.replaceServerSideAdTagParameters;
		X.prototype.requestServerSideStream = X.prototype.requestServerSideStream;
		X.prototype.initServerSide = X.prototype.initServerSide;
		X.prototype.requestClientSideAds = X.prototype.requestClientSideAds;
		X.prototype.onAssetUnload = X.prototype.onAssetUnload;
		X.prototype.release = X.prototype.release;
		X.prototype.initClientSide = X.prototype.initClientSide;
		X.prototype.setLocale = X.prototype.setLocale;
		X.ADS_LOADED = "ads-loaded";
		X.AD_STARTED = "ad-started";
		X.AD_FIRST_QUARTILE = "ad-first-quartile";
		X.AD_MIDPOINT = "ad-midpoint";
		X.AD_THIRD_QUARTILE = "ad-third-quartile";
		X.AD_COMPLETE = "ad-complete";
		X.AD_STOPPED = "ad-stopped";
		X.AD_SKIPPED = "ad-skipped";
		X.AD_VOLUME_CHANGED = "ad-volume-changed";
		X.AD_MUTED = "ad-muted";
		X.AD_PAUSED = "ad-paused";
		X.AD_RESUMED = "ad-resumed";
		X.AD_SKIP_STATE_CHANGED = "ad-skip-state-changed";
		X.CUEPOINTS_CHANGED = "ad-cue-points-changed";
		X.IMA_AD_MANAGER_LOADED = "ima-ad-manager-loaded";
		X.IMA_STREAM_MANAGER_LOADED = "ima-stream-manager-loaded";
		X.AD_CLICKED = "ad-clicked";
		X.AD_PROGRESS = "ad-progress";
		X.AD_BUFFERING = "ad-buffering";
		X.AD_IMPRESSION = "ad-impression";
		X.AD_DURATION_CHANGED = "ad-duration-changed";
		X.AD_CLOSED = "ad-closed";
		X.AD_LOADED = "ad-loaded";
		X.ALL_ADS_COMPLETED = "all-ads-completed";
		X.AD_LINEAR_CHANGED = "ad-linear-changed";
		X.AD_METADATA = "ad-metadata";
		X.AD_RECOVERABLE_ERROR = "ad-recoverable-error";
		X.AD_BREAK_READY = "ad-break-ready";
		X.AD_INTERACTION = "ad-interaction";
		Qk = function() {
			return new X
		};

		function wm(a) {
			return JSON.stringify(a, function(b, c) {
				if ("function" != typeof c) {
					if (c instanceof Event || c instanceof R) {
						var d = {};
						for (f in c) {
							var e = c[f];
							e && "object" == typeof e ? "detail" == f && (d[f] = e) : f in Event || (d[f] = e)
						}
						return d
					}
					if (c instanceof Error) {
						var f = new Set(["name", "message", "stack"]);
						for (d in c) f.add(d);
						e = t(Object.getOwnPropertyNames(c));
						for (d = e.next(); !d.done; d = e.next()) f.add(d.value);
						e = {};
						f = t(f);
						for (d = f.next(); !d.done; d = f.next()) d = d.value, e[d] = c[d];
						f = {
							__type__: "Error",
							contents: e
						}
					} else if (c instanceof TimeRanges)
						for (f = {
								__type__: "TimeRanges",
								length: c.length,
								start: [],
								end: []
							}, d = t(Vh(c)), e = d.next(); !e.done; e = d.next()) {
							e = e.value;
							var g = e.end;
							f.start.push(e.start);
							f.end.push(g)
						} else f = c instanceof Uint8Array ? {
							__type__: "Uint8Array",
							entries: Array.from(c)
						} : "number" == typeof c ? isNaN(c) ? "NaN" : isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c;
					return f
				}
			})
		}

		function xm(a) {
			return JSON.parse(a, function(b, c) {
				if ("NaN" == c) var d = NaN;
				else if ("-Infinity" == c) d = -Infinity;
				else if ("Infinity" == c) d = Infinity;
				else if (c && "object" == typeof c && "TimeRanges" == c.__type__) d = ym(c);
				else if (c && "object" == typeof c && "Uint8Array" == c.__type__) d = new Uint8Array(c.entries);
				else if (c && "object" == typeof c && "Error" == c.__type__) {
					d = c.contents;
					var e = Error(d.message),
						f;
					for (f in d) e[f] = d[f];
					d = e
				} else d = c;
				return d
			})
		}

		function ym(a) {
			return {
				length: a.length,
				start: function(b) {
					return a.start[b]
				},
				end: function(b) {
					return a.end[b]
				}
			}
		}
		var zm = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
			Am = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
			Bm = ["loop", "playbackRate"],
			Cm = ["pause", "play"],
			Dm = {
				getAssetUri: 2,
				getAudioLanguages: 4,
				getAudioLanguagesAndRoles: 4,
				getBufferFullness: 1,
				getBufferedInfo: 2,
				getConfiguration: 4,
				getExpiration: 2,
				getKeyStatuses: 2,
				getPlaybackRate: 2,
				getTextLanguages: 4,
				getTextLanguagesAndRoles: 4,
				getTextTracks: 2,
				getStats: 5,
				getVariantTracks: 2,
				getImageTracks: 2,
				getThumbnails: 2,
				isAudioOnly: 10,
				isBuffering: 1,
				isInProgress: 1,
				isLive: 10,
				isTextTrackVisible: 1,
				keySystem: 10,
				seekRange: 1,
				getLoadMode: 10
			},
			Em = {
				getPlayheadTimeAsDate: 1,
				getPresentationStartTimeAsDate: 20
			},
			Fm = [
				["getConfiguration", "configure"]
			],
			Gm = [
				["isTextTrackVisible", "setTextTrackVisibility"]
			],
			Hm = "addChaptersTrack addTextTrackAsync cancelTrickPlay configure getChapters getChaptersTracks resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay updateStartTime goToLive".split(" "),
			Im = ["attach", "detach", "load", "unload"];

		function Jm(a, b, c, d, e, f, g) {
			var h = this;
			this.G = a;
			this.O = g;
			this.j = new O(b);
			this.T = c;
			this.u = !1;
			this.s = d;
			this.F = e;
			this.L = f;
			this.h = this.m = !1;
			this.M = "";
			this.o = null;
			this.C = function() {
				return Km(h)
			};
			this.D = function(k, l) {
				var m = xm(l);
				switch (m.type) {
					case "event":
						var p = m.targetName;
						m = Qe(m.event);
						h.s(p, m);
						break;
					case "update":
						p = m.update;
						for (var n in p) {
							m = h.g[n] || {};
							for (var q in p[n]) m[q] = p[n][q]
						}
						h.u && (h.T(), h.u = !1);
						break;
					case "asyncComplete":
						if (n = m.id, m = m.error, q = h.i[n], delete h.i[n], q)
							if (m) {
								n = new N(m.severity, m.category,
									m.code);
								for (p in m) n[p] = m[p];
								q.reject(n)
							} else q.resolve()
				}
			};
			this.g = {
				video: {},
				player: {}
			};
			this.I = 0;
			this.i = {};
			this.l = null;
			Lm.add(this)
		}
		r = Jm.prototype;
		r.destroy = function() {
			Lm["delete"](this);
			Mm(this);
			Nm && Om(this);
			this.j && (this.j.stop(), this.j = null);
			this.F = this.s = null;
			this.h = this.m = !1;
			this.D = this.C = this.l = this.i = this.g = this.o = null;
			return Promise.resolve()
		};
		r.ra = function() {
			return this.h
		};
		r.Qd = function() {
			return this.M
		};
		r.init = function() {
			if (this.G.length)
				if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
					this.m = !0;
					this.j.Jb();
					var a = new chrome.cast.SessionRequest(this.G, [], null, this.O, null);
					a = new chrome.cast.ApiConfig(a, function(b) {
						for (var c = t(Lm), d = c.next(); !d.done; d = c.next()) Pm(d.value, b)
					}, function(b) {
						for (var c = t(Lm), d = c.next(); !d.done; d = c.next()) d = d.value, Qm = "available" == b, d.j.Jb()
					}, "origin_scoped");
					chrome.cast.initialize(a, function() {}, function() {});
					Qm && this.j.S(Rm);
					(a = Nm) && a.status != chrome.cast.SessionStatus.STOPPED ?
						Pm(this, a) : Nm = null
				} else window.__onGCastApiAvailable || (window.__onGCastApiAvailable = Sm), window.__onGCastApiAvailable != Sm && Va("A global Cast SDK hook is already installed! Shaka Player will be unable to receive a notification when the Cast SDK is ready.")
		};
		r.Xd = function(a) {
			this.o = a;
			this.h && Tm(this, {
				type: "appData",
				appData: this.o
			})
		};
		r.cast = function(a) {
			var b = this;
			return K(function(c) {
				if (!b.m) throw new N(1, 8, 8E3);
				if (!Qm) throw new N(1, 8, 8001);
				if (b.h) throw new N(1, 8, 8002);
				b.l = new nc;
				chrome.cast.requestSession(function(d) {
					return Um(b, a, d)
				}, function(d) {
					return Vm(b, d)
				});
				return u(c, b.l, 0)
			})
		};

		function Wm(a) {
			if (a.h) {
				var b = a.L();
				chrome.cast.requestSession(function(c) {
					return Um(a, b, c)
				}, function(c) {
					return Vm(a, c)
				})
			}
		}
		r.xb = function() {
			if (this.h) {
				Mm(this);
				if (Nm) {
					Om(this);
					try {
						Nm.stop(function() {}, function() {})
					} catch (a) {}
					Nm = null
				}
				Km(this)
			}
		};
		r.get = function(a, b) {
			var c = this;
			if ("video" == a) {
				if (Cm.includes(b)) return function() {
					return c.Fe.apply(c, [a, b].concat(ia(Ha.apply(0, arguments))))
				}
			} else if ("player" == a) {
				if (Em[b] && !this.get("player", "isLive")()) return function() {};
				if (Hm.includes(b)) return function() {
					return c.Fe.apply(c, [a, b].concat(ia(Ha.apply(0, arguments))))
				};
				if (Im.includes(b)) return function() {
					return c.Vf.apply(c, [a, b].concat(ia(Ha.apply(0, arguments))))
				};
				if (Dm[b]) return function() {
					return c.g[a][b]
				}
			}
			return this.g[a][b]
		};
		r.set = function(a, b, c) {
			this.g[a][b] = c;
			Tm(this, {
				type: "set",
				targetName: a,
				property: b,
				value: c
			})
		};

		function Um(a, b, c) {
			Nm = c;
			c.addUpdateListener(a.C);
			c.addMessageListener("urn:x-cast:com.google.shaka.v2", a.D);
			Km(a);
			Tm(a, {
				type: "init",
				initState: b,
				appData: a.o
			});
			a.l.resolve()
		}

		function Vm(a, b) {
			var c = 8003;
			switch (b.code) {
				case "cancel":
					c = 8004;
					break;
				case "timeout":
					c = 8005;
					break;
				case "receiver_unavailable":
					c = 8006
			}
			a.l.reject(new N(2, 8, c, b))
		}
		r.Fe = function(a, b) {
			Tm(this, {
				type: "call",
				targetName: a,
				methodName: b,
				args: Ha.apply(2, arguments)
			})
		};
		r.Vf = function(a, b) {
			var c = Ha.apply(2, arguments),
				d = new nc,
				e = this.I.toString();
			this.I++;
			this.i[e] = d;
			try {
				Tm(this, {
					type: "asyncCall",
					targetName: a,
					methodName: b,
					args: c,
					id: e
				})
			} catch (f) {
				d.reject(f)
			}
			return d
		};

		function Pm(a, b) {
			var c = a.L();
			a.l = new nc;
			a.u = !0;
			Um(a, c, b)
		}

		function Om(a) {
			var b = Nm;
			b.removeUpdateListener(a.C);
			b.removeMessageListener("urn:x-cast:com.google.shaka.v2", a.D)
		}

		function Km(a) {
			var b = Nm ? "connected" == Nm.status : !1;
			if (a.h && !b) {
				a.F();
				for (var c in a.g) a.g[c] = {};
				Mm(a)
			}
			a.h = b;
			a.M = b ? Nm.receiver.friendlyName : "";
			a.j.Jb()
		}

		function Mm(a) {
			for (var b in a.i) {
				var c = a.i[b];
				delete a.i[b];
				c.reject(new N(1, 7, 7E3))
			}
		}

		function Tm(a, b) {
			var c = wm(b),
				d = Nm;
			try {
				d.sendMessage("urn:x-cast:com.google.shaka.v2", c, function() {}, Ya)
			} catch (e) {
				throw c = new N(2, 8, 8005, e), d = new R("error", (new Map).set("detail", c)), a.s("player", d), a.xb(), c;
			}
		}
		var Rm = .02,
			Qm = !1,
			Nm = null,
			Lm = new Set;

		function Sm(a) {
			if (a) {
				a = t(Lm);
				for (var b = a.next(); !b.done; b = a.next()) b.value.init()
			}
		};

		function Xm(a, b, c, d) {
			d = void 0 === d ? !1 : d;
			Se.call(this);
			var e = this;
			this.i = a;
			this.h = b;
			this.m = this.o = this.j = this.s = this.l = null;
			this.D = c;
			this.C = d;
			this.u = new Map;
			this.g = new Jm(c, function() {
				return Zm(e)
			}, function() {
				return $m(e)
			}, function(f, g) {
				return an(e, f, g)
			}, function() {
				return bn(e)
			}, function() {
				return cn(e)
			}, d);
			dn(this)
		}
		pa(Xm, Se);
		r = Xm.prototype;
		r.destroy = function(a) {
			a && this.g.xb();
			this.m && (this.m.release(), this.m = null);
			a = [];
			this.h && (a.push(this.h.destroy()), this.h = null);
			this.g && (a.push(this.g.destroy()), this.g = null);
			this.s = this.l = this.i = null;
			Se.prototype.release.call(this);
			return Promise.all(a)
		};
		r.Df = function() {
			return this.l
		};
		r.vf = function() {
			return this.s
		};
		r.We = function() {
			return this.g.m && Qm
		};
		r.ra = function() {
			return this.g.ra()
		};
		r.Qd = function() {
			return this.g.Qd()
		};
		r.cast = function() {
			var a = this,
				b;
			return K(function(c) {
				return 1 == c.g ? (b = cn(a), u(c, a.g.cast(b), 2)) : a.h ? u(c, a.h.ee(), 0) : c["return"]()
			})
		};
		r.Xd = function(a) {
			this.g.Xd(a)
		};
		r.gg = function() {
			Wm(this.g)
		};
		r.xb = function() {
			this.g.xb()
		};
		r.Ze = function(a, b) {
			b = void 0 === b ? !1 : b;
			var c = this;
			return K(function(d) {
				if (1 == d.g) {
					if (a == c.D && b == c.C) return d["return"]();
					c.D = a;
					c.C = b;
					c.g.xb();
					return u(d, c.g.destroy(), 2)
				}
				c.g = null;
				c.g = new Jm(a, function() {
					return Zm(c)
				}, function() {
					return $m(c)
				}, function(e, f) {
					return an(c, e, f)
				}, function() {
					return bn(c)
				}, function() {
					return cn(c)
				}, b);
				c.g.init();
				z(d)
			})
		};

		function dn(a) {
			a.g.init();
			a.m = new kf;
			for (var b = t(zm), c = b.next(); !c.done; c = b.next()) a.m.B(a.i, c.value, function(f) {
				a.g.ra() || (f = Qe(f), a.j.dispatchEvent(f))
			});
			for (var d in Re) a.m.B(a.h, Re[d], function(f) {
				a.g.ra() || a.o.dispatchEvent(f)
			});
			a.l = {};
			b = {};
			for (var e in a.i) b.Ob = e, Object.defineProperty(a.l, b.Ob, {
				configurable: !1,
				enumerable: !0,
				get: function(f) {
					return function() {
						return en(a, f.Ob)
					}
				}(b),
				set: function(f) {
					return function(g) {
						var h = f.Ob;
						a.g.ra() ? a.g.set("video", h, g) : a.i[h] = g
					}
				}(b)
			}), b = {
				Ob: b.Ob
			};
			a.s = {};
			fn(a,
				function(f) {
					Object.defineProperty(a.s, f, {
						configurable: !1,
						enumerable: !0,
						get: function() {
							return gn(a, f)
						}
					})
				});
			hn(a);
			a.j = new Se;
			a.j.Ic = a.l;
			a.o = new Se;
			a.o.Ic = a.s
		}

		function hn(a) {
			var b = new Map;
			fn(a, function(c, d) {
				if (b.has(d)) {
					var e = b.get(d);
					c.length < e.length ? a.u.set(c, e) : a.u.set(e, c)
				} else b.set(d, c)
			})
		}

		function fn(a, b) {
			function c(l) {
				return "constructor" == l || "function" != typeof d[l] ? !1 : !e.has(l)
			}
			var d = a.h,
				e = new Set;
			for (f in d) c(f) && (e.add(f), b(f, d[f]));
			var f = Object.getPrototypeOf(d);
			for (var g = Object.getPrototypeOf({}); f && f != g;) {
				for (var h = t(Object.getOwnPropertyNames(f)), k = h.next(); !k.done; k = h.next()) k = k.value, c(k) && (e.add(k), b(k, d[k]));
				f = Object.getPrototypeOf(f)
			}
		}

		function cn(a) {
			var b = {
				video: {},
				player: {},
				playerAfterLoad: {},
				manifest: a.h.ud(),
				startTime: null
			};
			a.i.pause();
			for (var c = t(Bm), d = c.next(); !d.done; d = c.next()) d = d.value, b.video[d] = a.i[d];
			a.i.ended || (b.startTime = a.i.currentTime);
			c = t(Fm);
			for (d = c.next(); !d.done; d = c.next()) {
				var e = d.value;
				d = e[1];
				e = a.h[e[0]]();
				b.player[d] = e
			}
			c = t(Gm);
			for (d = c.next(); !d.done; d = c.next()) e = d.value, d = e[1], e = a.h[e[0]](), b.playerAfterLoad[d] = e;
			return b
		}

		function Zm(a) {
			var b = new R("caststatuschanged");
			a.dispatchEvent(b)
		}

		function $m(a) {
			var b = new R(a.l.paused ? "pause" : "play");
			a.j.dispatchEvent(b)
		}

		function bn(a) {
			for (var b = t(Fm), c = b.next(); !c.done; c = b.next()) {
				var d = c.value;
				c = d[1];
				d = a.g.get("player", d[0])();
				a.h[c](d)
			}
			var e = a.g.get("player", "getAssetUri")();
			c = a.g.get("video", "ended");
			b = Promise.resolve();
			var f = a.i.autoplay;
			d = null;
			c || (d = a.g.get("video", "currentTime"));
			e && (a.i.autoplay = !1, b = a.h.load(e, d));
			var g = {};
			c = t(Bm);
			for (d = c.next(); !d.done; d = c.next()) d = d.value, g[d] = a.g.get("video", d);
			b.then(function() {
				if (a.i) {
					for (var h = t(Bm), k = h.next(); !k.done; k = h.next()) k = k.value, a.i[k] = g[k];
					h = t(Gm);
					for (k =
						h.next(); !k.done; k = h.next()) {
						var l = k.value;
						k = l[1];
						l = a.g.get("player", l[0])();
						a.h[k](l)
					}
					a.i.autoplay = f;
					e && a.i.play()
				}
			}, function(h) {
				h = (new Map).set("detail", h);
				h = new R("error", h);
				a.h.dispatchEvent(h)
			})
		}

		function en(a, b) {
			if ("addEventListener" == b) return function(d, e, f) {
				return a.j.addEventListener(d, e, f)
			};
			if ("removeEventListener" == b) return function(d, e, f) {
				return a.j.removeEventListener(d, e, f)
			};
			if (a.g.ra() && 0 == Object.keys(a.g.g.video).length) {
				var c = a.i[b];
				if ("function" != typeof c) return c
			}
			return a.g.ra() ? a.g.get("video", b) : (c = a.i[b], "function" == typeof c && (c = c.bind(a.i)), c)
		}

		function gn(a, b) {
			a.u.has(b) && (b = a.u.get(b));
			if ("addEventListener" == b) return function(c, d, e) {
				return a.o.addEventListener(c, d, e)
			};
			if ("removeEventListener" == b) return function(c, d, e) {
				return a.o.removeEventListener(c, d, e)
			};
			if ("getMediaElement" == b) return function() {
				return a.l
			};
			if ("getSharedConfiguration" == b) return a.g.get("player", "getConfiguration");
			if ("getNetworkingEngine" == b) return function() {
				return a.h.dc()
			};
			if ("getDrmEngine" == b) return function() {
				return a.h.m
			};
			if ("getAdManager" == b) return function() {
				return a.h.se()
			};
			if ("setVideoContainer" == b) return function(c) {
				return a.h.Me(c)
			};
			if (a.g.ra()) {
				if ("getManifest" == b || "drmInfo" == b) return function() {
					Va(b + "() does not work while casting!");
					return null
				};
				if ("attach" == b || "detach" == b) return function() {
					Va(b + "() does not work while casting!");
					return Promise.resolve()
				}
			}
			return a.g.ra() && 0 == Object.keys(a.g.g.video).length && Dm[b] || !a.g.ra() ? a.h[b].bind(a.h) : a.g.get("player", b)
		}

		function an(a, b, c) {
			a.g.ra() && ("video" == b ? a.j.dispatchEvent(c) : "player" == b && a.o.dispatchEvent(c))
		}
		M("shaka.cast.CastProxy", Xm);
		Xm.prototype.changeReceiverId = Xm.prototype.Ze;
		Xm.prototype.forceDisconnect = Xm.prototype.xb;
		Xm.prototype.suggestDisconnect = Xm.prototype.gg;
		Xm.prototype.setAppData = Xm.prototype.Xd;
		Xm.prototype.cast = Xm.prototype.cast;
		Xm.prototype.receiverName = Xm.prototype.Qd;
		Xm.prototype.isCasting = Xm.prototype.ra;
		Xm.prototype.canCast = Xm.prototype.We;
		Xm.prototype.getPlayer = Xm.prototype.vf;
		Xm.prototype.getVideo = Xm.prototype.Df;
		Xm.prototype.destroy = Xm.prototype.destroy;

		function jn(a, b, c, d) {
			Se.call(this);
			var e = this;
			this.g = a;
			this.h = b;
			this.j = new kf;
			this.I = {
				video: a,
				player: b
			};
			this.D = c || function() {};
			this.L = d || function(f) {
				return f
			};
			this.i = null;
			this.F = !1;
			this.o = !0;
			this.m = 0;
			this.C = !1;
			this.u = !0;
			this.s = this.l = null;
			this.G = new O(function() {
				kn(e)
			});
			ln(this)
		}
		pa(jn, Se);
		r = jn.prototype;
		r.isConnected = function() {
			return this.F
		};
		r.Hf = function() {
			return this.o
		};
		r.cg = function(a) {
			this.i = a
		};
		r.bf = function() {
			this.i = null
		};
		r.dg = function(a) {
			this.i || (this.i = {
				metadataType: cast.receiver.media.MetadataType.GENERIC
			});
			this.i.title = a
		};
		r.bg = function(a) {
			this.i || (this.i = {
				metadataType: cast.receiver.media.MetadataType.GENERIC
			});
			this.i.images = [{
				url: a
			}]
		};
		r.ag = function(a) {
			this.i || (this.i = {});
			this.i.artist = a;
			this.i.metadataType = cast.receiver.media.MetadataType.MUSIC_TRACK
		};
		r.destroy = function() {
			var a = this,
				b, c;
			return K(function(d) {
				if (1 == d.g) return a.j && (a.j.release(), a.j = null), b = [], a.h && (b.push(a.h.destroy()), a.h = null), a.G && (a.G.stop(), a.G = null), a.g = null, a.I = null, a.D = null, a.F = !1, a.o = !0, a.l = null, a.s = null, Se.prototype.release.call(a), u(d, Promise.all(b), 2);
				c = cast.receiver.CastReceiverManager.getInstance();
				c.stop();
				z(d)
			})
		};

		function ln(a) {
			var b = cast.receiver.CastReceiverManager.getInstance();
			b.onSenderConnected = function() {
				return mn(a)
			};
			b.onSenderDisconnected = function() {
				return mn(a)
			};
			b.onSystemVolumeChanged = function() {
				var e = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
				e && nn(a, {
					type: "update",
					update: {
						video: {
							volume: e.level,
							muted: e.muted
						}
					}
				}, a.l);
				nn(a, {
					type: "event",
					targetName: "video",
					event: {
						type: "volumechange"
					}
				}, a.l)
			};
			a.s = b.getCastMessageBus("urn:x-cast:com.google.cast.media");
			a.s.onMessage = function(e) {
				return on(a,
					e)
			};
			a.l = b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");
			a.l.onMessage = function(e) {
				return pn(a, e)
			};
			b.start();
			b = t(zm);
			for (var c = b.next(); !c.done; c = b.next()) a.j.B(a.g, c.value, function(e) {
				return qn(a, "video", e)
			});
			for (var d in Re) a.j.B(a.h, Re[d], function(e) {
				return qn(a, "player", e)
			});
			cast.__platform__ && cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160') ? a.h.Zd(3840, 2160) : a.h.Zd(1920, 1080);
			a.j.B(a.g, "loadeddata", function() {
				a.C = !0
			});
			a.j.B(a.h, "loading", function() {
				a.o = !1;
				rn(a)
			});
			a.j.B(a.g, "playing", function() {
				a.o = !1;
				rn(a)
			});
			a.j.B(a.g, "pause", function() {
				rn(a)
			});
			a.j.B(a.h, "unloading", function() {
				a.o = !0;
				rn(a)
			});
			a.j.B(a.g, "ended", function() {
				(new O(function() {
					a.g && a.g.ended && (a.o = !0, rn(a))
				})).S(sn)
			})
		}

		function mn(a) {
			a.m = 0;
			a.u = !0;
			a.F = 0 != cast.receiver.CastReceiverManager.getInstance().getSenders().length;
			rn(a)
		}

		function rn(a) {
			var b;
			K(function(c) {
				if (1 == c.g) return u(c, Promise.resolve(), 2);
				if (!a.h) return c["return"]();
				b = new R("caststatuschanged");
				a.dispatchEvent(b);
				tn(a) || un(a);
				z(c)
			})
		}

		function vn(a, b, c) {
			var d, e, f, g, h, k, l, m, p, n;
			K(function(q) {
				switch (q.g) {
					case 1:
						for (d in b.player) e = b.player[d], a.h[d](e);
						a.D(c);
						f = a.g.autoplay;
						return b.manifest ? (a.g.autoplay = !1, B(q, 5), u(q, a.h.load(b.manifest, b.startTime), 7)) : u(q, Promise.resolve(), 3);
					case 7:
						va(q, 3);
						break;
					case 5:
						return g = F(q), h = (new Map).set("detail", g), k = new R("error", h), a.h && a.h.dispatchEvent(k), q["return"]();
					case 3:
						if (!a.h) return q["return"]();
						for (l in b.video) m = b.video[l], a.g[l] = m;
						for (p in b.playerAfterLoad) n = b.playerAfterLoad[p],
							a.h[p](n);
						a.g.autoplay = f;
						b.manifest && (a.g.play(), un(a));
						z(q)
				}
			})
		}

		function qn(a, b, c) {
			a.h && (kn(a), nn(a, {
				type: "event",
				targetName: b,
				event: c
			}, a.l))
		}

		function kn(a) {
			a.G.S(wn);
			for (var b = {
					video: {},
					player: {}
				}, c = t(Am), d = c.next(); !d.done; d = c.next()) d = d.value, b.video[d] = a.g[d];
			if (a.h.V())
				for (var e in Em) 0 == a.m % Em[e] && (b.player[e] = a.h[e]());
			for (var f in Dm) 0 == a.m % Dm[f] && (b.player[f] = a.h[f]());
			if (c = cast.receiver.CastReceiverManager.getInstance().getSystemVolume()) b.video.volume = c.level, b.video.muted = c.muted;
			a.C && (a.m += 1);
			nn(a, {
				type: "update",
				update: b
			}, a.l);
			tn(a)
		}

		function tn(a) {
			return a.u && (a.g.duration || a.h.V()) ? (xn(a), a.u = !1, !0) : !1
		}

		function xn(a, b) {
			var c = {
				contentId: a.h.ud(),
				streamType: a.h.V() ? "LIVE" : "BUFFERED",
				contentType: ""
			};
			a.h.V() || (c.duration = a.g.duration);
			a.i && (c.metadata = a.i);
			un(a, void 0 === b ? 0 : b, c)
		}

		function pn(a, b) {
			var c = xm(b.data);
			switch (c.type) {
				case "init":
					a.m = 0;
					a.C = !1;
					a.u = !0;
					vn(a, c.initState, c.appData);
					kn(a);
					break;
				case "appData":
					a.D(c.appData);
					break;
				case "set":
					var d = c.targetName,
						e = c.property;
					c = c.value;
					if ("video" == d) {
						var f = cast.receiver.CastReceiverManager.getInstance();
						if ("volume" == e) {
							f.setSystemVolumeLevel(c);
							break
						} else if ("muted" == e) {
							f.setSystemVolumeMuted(c);
							break
						}
					}
					a.I[d][e] = c;
					break;
				case "call":
					d = a.I[c.targetName];
					d[c.methodName].apply(d, c.args);
					break;
				case "asyncCall":
					d = c.targetName;
					e =
						c.methodName;
					"player" == d && "load" == e && (a.m = 0, a.C = !1);
					var g = c.id,
						h = b.senderId;
					f = a.I[d];
					c = f[e].apply(f, c.args);
					"player" == d && "load" == e && (c = c.then(function() {
						a.u = !0
					}));
					c.then(function() {
						return yn(a, h, g, null)
					}, function(k) {
						return yn(a, h, g, k)
					})
			}
		}

		function on(a, b) {
			var c = xm(b.data);
			switch (c.type) {
				case "PLAY":
					a.g.play();
					un(a);
					break;
				case "PAUSE":
					a.g.pause();
					un(a);
					break;
				case "SEEK":
					var d = c.currentTime,
						e = c.resumeState;
					null != d && (a.g.currentTime = Number(d));
					e && "PLAYBACK_START" == e ? (a.g.play(), un(a)) : e && "PLAYBACK_PAUSE" == e && (a.g.pause(), un(a));
					break;
				case "STOP":
					a.h.ee().then(function() {
						a.h && un(a)
					});
					break;
				case "GET_STATUS":
					xn(a, Number(c.requestId));
					break;
				case "VOLUME":
					e = c.volume;
					d = e.level;
					e = e.muted;
					var f = a.g.volume,
						g = a.g.muted;
					null != d && (a.g.volume = Number(d));
					null != e && (a.g.muted = e);
					f == a.g.volume && g == a.g.muted || un(a);
					break;
				case "LOAD":
					a.m = 0;
					a.C = !1;
					a.u = !1;
					d = c.media;
					e = c.currentTime;
					f = a.L(d.contentId);
					g = c.autoplay || !0;
					a.D(d.customData);
					g && (a.g.autoplay = !0);
					a.h.load(f, e).then(function() {
						a.h && xn(a)
					})["catch"](function(h) {
						var k = "LOAD_FAILED";
						7 == h.category && 7E3 == h.code && (k = "LOAD_CANCELLED");
						nn(a, {
							requestId: Number(c.requestId),
							type: k
						}, a.s)
					});
					break;
				default:
					nn(a, {
						requestId: Number(c.requestId),
						type: "INVALID_REQUEST",
						reason: "INVALID_COMMAND"
					}, a.s)
			}
		}

		function yn(a, b, c, d) {
			a.h && nn(a, {
				type: "asyncComplete",
				id: c,
				error: d
			}, a.l, b)
		}

		function nn(a, b, c, d) {
			a.F && (a = wm(b), d ? c.getCastChannel(d).send(a) : c.broadcast(a))
		}

		function un(a, b, c) {
			c = void 0 === c ? null : c;
			var d = {
				mediaSessionId: 0,
				playbackRate: a.g.playbackRate,
				playerState: a.o ? zn : a.h.vd() ? An : a.g.paused ? Bn : Cn,
				currentTime: a.g.currentTime,
				supportedMediaCommands: 63,
				volume: {
					level: a.g.volume,
					muted: a.g.muted
				}
			};
			c && (d.media = c);
			nn(a, {
				requestId: void 0 === b ? 0 : b,
				type: "MEDIA_STATUS",
				status: [d]
			}, a.s)
		}
		M("shaka.cast.CastReceiver", jn);
		jn.prototype.destroy = jn.prototype.destroy;
		jn.prototype.setContentArtist = jn.prototype.ag;
		jn.prototype.setContentImage = jn.prototype.bg;
		jn.prototype.setContentTitle = jn.prototype.dg;
		jn.prototype.clearContentMetadata = jn.prototype.bf;
		jn.prototype.setContentMetadata = jn.prototype.cg;
		jn.prototype.isIdle = jn.prototype.Hf;
		jn.prototype.isConnected = jn.prototype.isConnected;
		var wn = .5,
			sn = 5,
			zn = "IDLE",
			Cn = "PLAYING",
			An = "BUFFERING",
			Bn = "PAUSED";

		function Dn(a) {
			var b = this;
			this.g = [];
			this.h = [];
			this.data = [];
			(new qg).box("moov", ug).U("pssh", function(c) {
				if (!(1 < c.version)) {
					var d = Fb(c.reader.R, -12, c.size);
					b.data.push(d);
					b.g.push(Rc(c.reader.$a(16)));
					if (0 < c.version) {
						d = c.reader.N();
						for (var e = 0; e < d; e++) {
							var f = Rc(c.reader.$a(16));
							b.h.push(f)
						}
					}
				}
			}).parse(a)
		}

		function En(a, b, c, d) {
			var e = a.length,
				f = b.length + 16 + e;
			0 < d && (f += 4 + 16 * c.size);
			var g = new Uint8Array(f),
				h = Ib(g),
				k = 0;
			h.setUint32(k, f);
			k += 4;
			h.setUint32(k, 1886614376);
			k += 4;
			1 > d ? h.setUint32(k, 0) : h.setUint32(k, 16777216);
			k += 4;
			g.set(b, k);
			k += b.length;
			if (0 < d)
				for (h.setUint32(k, c.size), k += 4, b = t(c), c = b.next(); !c.done; c = b.next()) c = Qc(c.value), g.set(c, k), k += c.length;
			h.setUint32(k, e);
			g.set(a, k + 4);
			return g
		};

		function Fn(a, b) {
			var c = Gn(a, b);
			return 1 != c.length ? null : c[0]
		}

		function Hn(a, b, c) {
			a = In(a, b, c);
			return 1 != a.length ? null : a[0]
		}

		function Gn(a, b) {
			for (var c = [], d = t(a.childNodes), e = d.next(); !e.done; e = d.next()) e = e.value, e instanceof Element && e.tagName == b && c.push(e);
			return c
		}

		function Jn(a) {
			return Array.from(a.childNodes).filter(function(b) {
				return b instanceof Element
			})
		}

		function In(a, b, c) {
			var d = [];
			a = t(a.childNodes);
			for (var e = a.next(); !e.done; e = a.next()) e = e.value, e instanceof Element && e.localName == c && e.namespaceURI == b && d.push(e);
			return d
		}

		function Kn(a, b, c) {
			return a.hasAttributeNS(b, c) ? a.getAttributeNS(b, c) : null
		}

		function Ln(a, b, c) {
			b = t(b);
			for (var d = b.next(); !d.done; d = b.next())
				if (d = d.value, a.hasAttributeNS(d, c)) return a.getAttributeNS(d, c);
			return null
		}

		function Mn(a) {
			return Array.from(a.childNodes).every(Nn) ? a.textContent.trim() : null
		}

		function Nn(a) {
			return a.nodeType == Node.TEXT_NODE || a.nodeType == Node.CDATA_SECTION_NODE
		}

		function On(a, b, c, d) {
			d = void 0 === d ? null : d;
			var e = null;
			a = a.getAttribute(b);
			null != a && (e = c(a));
			return null == e ? d : e
		}

		function Pn(a) {
			if (!a) return null;
			/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a) && (a += "Z");
			a = Date.parse(a);
			return isNaN(a) ? null : a / 1E3
		}

		function Qn(a) {
			if (!a) return null;
			a = RegExp("^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$").exec(a);
			if (!a) return null;
			a = 31536E3 * Number(a[1] || null) + 2592E3 * Number(a[2] || null) + 86400 * Number(a[3] || null) + 3600 * Number(a[4] || null) + 60 * Number(a[5] || null) + Number(a[6] || null);
			return isFinite(a) ? a : null
		}

		function Rn(a) {
			var b = /([0-9]+)-([0-9]+)/.exec(a);
			if (!b) return null;
			a = Number(b[1]);
			if (!isFinite(a)) return null;
			b = Number(b[2]);
			return isFinite(b) ? {
				start: a,
				end: b
			} : null
		}

		function Sn(a) {
			a = Number(a);
			return 0 === a % 1 ? a : null
		}

		function Tn(a) {
			a = Number(a);
			return 0 === a % 1 && 0 < a ? a : null
		}

		function Un(a) {
			a = Number(a);
			return 0 === a % 1 && 0 <= a ? a : null
		}

		function Vn(a) {
			a = Number(a);
			return isNaN(a) ? null : a
		}

		function Wn(a) {
			var b;
			var c = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1]) / Number(b[2]) : Number(a);
			return isNaN(c) ? null : c
		}

		function Xn(a, b) {
			var c = new DOMParser,
				d = null;
			try {
				d = c.parseFromString(a, "text/xml")
			} catch (e) {
				return null
			}
			c = d.documentElement;
			return !c || c.getElementsByTagName("parsererror").length || d.documentElement.tagName != b ? null : c
		}

		function Yn(a, b) {
			try {
				var c = Fc(a);
				return Xn(c, b)
			} catch (d) {
				return null
			}
		};

		function Zn(a, b, c) {
			var d = $n(a),
				e = null;
			a = [];
			var f = [],
				g = new Set(d.map(function(h) {
					return h.keyId
				}));
			g["delete"](null);
			if (1 < g.size) throw new N(2, 4, 4010);
			b || (f = d.filter(function(h) {
				return "urn:mpeg:dash:mp4protection:2011" == h.Ud ? (e = h.init || e, !1) : !0
			}), f.length && (a = ao(e, f, c, g), 0 == a.length && (a = [hc("", e)])));
			if (d.length && (b || !f.length))
				for (a = [], b = t(Object.values(c)), c = b.next(); !c.done; c = b.next()) c = c.value, "org.w3.clearkey" != c && a.push(hc(c, e));
			if (g = Array.from(g)[0] || null)
				for (b = t(a), c = b.next(); !c.done; c = b.next())
					for (c =
						t(c.value.initData), d = c.next(); !d.done; d = c.next()) d.value.keyId = g;
			return {
				ne: g,
				Xg: e,
				drmInfos: a,
				re: !0
			}
		}

		function bo(a, b, c, d) {
			var e = Zn(a, c, d);
			if (b.re) {
				a = 1 == b.drmInfos.length && !b.drmInfos[0].keySystem;
				c = 0 == e.drmInfos.length;
				if (0 == b.drmInfos.length || a && !c) b.drmInfos = e.drmInfos;
				b.re = !1
			} else if (0 < e.drmInfos.length && (b.drmInfos = b.drmInfos.filter(function(f) {
					return e.drmInfos.some(function(g) {
						return g.keySystem == f.keySystem
					})
				}), 0 == b.drmInfos.length)) throw new N(2, 4, 4008);
			return e.ne || b.ne
		}

		function co(a) {
			var b = 0,
				c = Ib(a),
				d = c.getUint32(b, !0);
			if (d != a.byteLength) return [];
			a: {
				a = b + 6;
				for (b = []; a < c.byteLength - 1;) {
					d = c.getUint16(a, !0);
					a += 2;
					var e = c.getUint16(a, !0);
					a += 2;
					if (0 != (e & 1) || e + a > c.byteLength) {
						c = [];
						break a
					}
					var f = Fb(c, a, e);
					b.push({
						type: d,
						value: f
					});
					a += e
				}
				c = b
			}
			return c
		}

		function eo(a) {
			a = t(a.getElementsByTagName("DATA"));
			for (var b = a.next(); !b.done; b = a.next()) {
				b = t(b.value.childNodes);
				for (var c = b.next(); !c.done; c = b.next())
					if (c = c.value, c instanceof Element && "LA_URL" == c.tagName) return c.textContent
			}
			return ""
		}

		function fo(a) {
			a = Hn(a.node, "urn:microsoft:playready", "pro");
			if (!a) return "";
			a = Pc(a.textContent);
			a = co(a).filter(function(b) {
				return b.type === go
			})[0];
			if (!a) return "";
			a = Hc(a.value, !0);
			return (a = Xn(a, "WRMHEADER")) ? eo(a) : ""
		}

		function ao(a, b, c, d) {
			var e = [];
			b = t(b);
			for (var f = b.next(); !f.done; f = b.next()) {
				f = f.value;
				var g = c[f.Ud];
				if (g) {
					var h;
					if (h = Hn(f.node, "urn:microsoft:playready", "pro")) {
						h = Pc(h.textContent);
						var k = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
						h = [{
							initData: En(h, k, new Set, 0),
							initDataType: "cenc",
							keyId: f.keyId
						}]
					} else h = null;
					k = null;
					if ("urn:uuid:e2719d58-a985-b3c9-781a-b030af78d30e" === f.Ud)
						if (k = d, 0 == k.size) k = null;
						else {
							var l = new Uint8Array([16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82,
									226, 251, 75
								]),
								m = new Uint8Array([]);
							k = [{
								initData: En(m, l, k, 1),
								initDataType: "cenc",
								keyId: f.keyId
							}]
						} h = hc(g, f.init || a || h || k);
					if (g = ho.get(g)) h.licenseServerUri = g(f);
					e.push(h)
				}
			}
			return e
		}

		function $n(a) {
			var b = [];
			a = t(a);
			for (var c = a.next(); !c.done; c = a.next())(c = io(c.value)) && b.push(c);
			return b
		}

		function io(a) {
			var b = a.getAttribute("schemeIdUri"),
				c = Kn(a, "urn:mpeg:cenc:2013", "default_KID"),
				d = In(a, "urn:mpeg:cenc:2013", "pssh").map(Mn);
			if (!b) return null;
			b = b.toLowerCase();
			if (c && (c = c.replace(/-/g, "").toLowerCase(), c.includes(" "))) throw new N(2, 4, 4009);
			var e = [];
			try {
				e = d.map(function(f) {
					return {
						initDataType: "cenc",
						initData: Pc(f),
						keyId: null
					}
				})
			} catch (f) {
				throw new N(2, 4, 4007);
			}
			return {
				node: a,
				Ud: b,
				keyId: c,
				init: 0 < e.length ? e : null
			}
		}
		var go = 1,
			ho = (new Map).set("com.widevine.alpha", function(a) {
				return (a = Hn(a.node, "urn:microsoft", "laurl")) ? a.getAttribute("licenseUrl") || "" : ""
			}).set("com.microsoft.playready", fo).set("com.microsoft.playready.recommendation", fo).set("com.microsoft.playready.software", fo).set("com.microsoft.playready.hardware", fo).set("org.w3.clearkey", function(a) {
				return (a = Hn(a.node, "http://dashif.org/guidelines/clearKey", "Laurl")) && "EME-1.0" === a.getAttribute("Lic_type") && a.textContent ? a.textContent : ""
			});

		function jo(a, b, c, d, e) {
			var f = {
				RepresentationID: b,
				Number: c,
				Bandwidth: d,
				Time: e
			};
			return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g, function(g, h, k, l) {
				if ("$$" == g) return "$";
				var m = f[h];
				if (null == m) return g;
				"RepresentationID" == h && k && (k = void 0);
				"Time" == h && (m = Math.round(m));
				switch (l) {
					case void 0:
					case "d":
					case "i":
					case "u":
						g = m.toString();
						break;
					case "o":
						g = m.toString(8);
						break;
					case "x":
						g = m.toString(16);
						break;
					case "X":
						g = m.toString(16).toUpperCase();
						break;
					default:
						g = m.toString()
				}
				k =
					window.parseInt(k, 10) || 1;
				return Array(Math.max(0, k - g.length) + 1).join("0") + g
			})
		}

		function ko(a, b) {
			var c = lo(a, b, "timescale"),
				d = 1;
			c && (d = Tn(c) || 1);
			var e = lo(a, b, "duration");
			c = Tn(e || "");
			"image" == a.H.contentType && (c = Vn(e || ""));
			c && (c /= d);
			var f = lo(a, b, "startNumber");
			e = Number(lo(a, b, "presentationTimeOffset")) || 0;
			var g = Un(f || "");
			if (null == f || null == g) g = 1;
			var h = mo(a, b, "SegmentTimeline");
			f = null;
			if (h) {
				f = d;
				var k = a.W.duration || Infinity;
				h = Gn(h, "S");
				for (var l = [], m = -e, p = 0; p < h.length; ++p) {
					var n = h[p],
						q = h[p + 1],
						w = On(n, "t", Un),
						y = On(n, "d", Un);
					n = On(n, "r", Sn);
					null != w && (w -= e);
					if (!y) break;
					w = null != w ? w : m;
					n =
						n || 0;
					if (0 > n)
						if (q) {
							q = On(q, "t", Un);
							if (null == q) break;
							else if (w >= q) break;
							n = Math.ceil((q - w) / y) - 1
						} else {
							if (Infinity == k) break;
							else if (w / f >= k) break;
							n = Math.ceil((k * f - w) / y) - 1
						} 0 < l.length && w != m && (l[l.length - 1].end = w / f);
					for (q = 0; q <= n; ++q) m = w + y, l.push({
						start: w / f,
						end: m / f,
						kg: w
					}), w = m
				}
				f = l
			}
			return {
				timescale: d,
				ga: c,
				Ib: g,
				Ta: e / d || 0,
				fe: e,
				timeline: f
			}
		}

		function lo(a, b, c) {
			return [b(a.H), b(a.ja), b(a.aa)].filter(cc).map(function(d) {
				return d.getAttribute(c)
			}).reduce(function(d, e) {
				return d || e
			})
		}

		function mo(a, b, c) {
			return [b(a.H), b(a.ja), b(a.aa)].filter(cc).map(function(d) {
				return Fn(d, c)
			}).reduce(function(d, e) {
				return d || e
			})
		}

		function no(a, b, c, d, e, f) {
			for (var g = Kn(a, "http://www.w3.org/1999/xlink", "href"), h = Kn(a, "http://www.w3.org/1999/xlink", "actuate") || "onRequest", k = t(Array.from(a.attributes)), l = k.next(); !l.done; l = k.next()) l = l.value, "http://www.w3.org/1999/xlink" == l.namespaceURI && a.removeAttributeNS(l.namespaceURI, l.localName);
			if (5 <= f) return Ke(new N(2, 4, 4028));
			if ("onLoad" != h) return Ke(new N(2, 4, 4027));
			var m = dc([d], [g]);
			return e.request(0, af(m, b)).Z(function(p) {
				p = Yn(p.data, a.tagName);
				if (!p) return Ke(new N(2, 4, 4001, g));
				for (; a.childNodes.length;) a.removeChild(a.childNodes[0]);
				for (; p.childNodes.length;) {
					var n = p.childNodes[0];
					p.removeChild(n);
					a.appendChild(n)
				}
				p = t(Array.from(p.attributes));
				for (n = p.next(); !n.done; n = p.next()) a.setAttributeNode(n.value.cloneNode(!1));
				return oo(a, b, c, m[0], e, f + 1)
			})
		}

		function oo(a, b, c, d, e, f) {
			f = void 0 === f ? 0 : f;
			if (Kn(a, "http://www.w3.org/1999/xlink", "href")) {
				var g = no(a, b, c, d, e, f);
				c && (g = g.Z(void 0, function() {
					return oo(a, b, c, d, e, f)
				}));
				return g
			}
			g = [];
			for (var h = t(Array.from(a.childNodes)), k = h.next(); !k.done; k = h.next()) k = k.value, k instanceof Element && ("urn:mpeg:dash:resolve-to-zero:2013" == Kn(k, "http://www.w3.org/1999/xlink", "href") ? a.removeChild(k) : "SegmentTimeline" != k.tagName && g.push(oo(k, b, c, d, e, f)));
			return Oe(g).Z(function() {
				return a
			})
		};

		function po(a, b, c, d, e, f, g) {
			var h, k = (new qg).U("sidx", function(l) {
				h = qo(b, d, e, f, g, c, l)
			});
			a && k.parse(a);
			if (h) return h;
			throw new N(2, 3, 3004);
		}

		function qo(a, b, c, d, e, f, g) {
			var h = [];
			g.reader.skip(4);
			var k = g.reader.N();
			if (0 == k) throw new N(2, 3, 3005);
			if (0 == g.version) {
				var l = g.reader.N();
				var m = g.reader.N()
			} else l = g.reader.Hb(), m = g.reader.Hb();
			g.reader.skip(2);
			var p = g.reader.Pd();
			a = a + g.size + m;
			for (m = 0; m < p; m++) {
				var n = g.reader.N(),
					q = (n & 2147483648) >>> 31;
				n &= 2147483647;
				var w = g.reader.N();
				g.reader.skip(4);
				if (1 == q) throw new N(2, 3, 3006);
				h.push(new Oh(l / k + c, (l + w) / k + c, function() {
					return f
				}, a, a + n - 1, b, c, d, e));
				l += w;
				a += n
			}
			g.parser.stop();
			return h
		};

		function ro(a) {
			this.h = Ib(a);
			this.g = new ng(this.h, 0)
		}
		ro.prototype.ma = function() {
			return this.g.ma()
		};

		function so(a) {
			var b = to(a);
			if (7 < b.length) throw new N(2, 3, 3002);
			var c = 0;
			b = t(b);
			for (var d = b.next(); !d.done; d = b.next()) c = 256 * c + d.value;
			b = to(a);
			a: {
				d = t(uo);
				for (var e = d.next(); !e.done; e = d.next())
					if (Db(b, new Uint8Array(e.value))) {
						d = !0;
						break a
					} d = !1
			}
			if (d) b = a.h.byteLength - a.g.$();
			else {
				if (8 == b.length && b[1] & 224) throw new N(2, 3, 3001);
				for (e = d = 0; e < b.length; e++) {
					var f = b[e];
					d = 0 == e ? f & (1 << 8 - b.length) - 1 : 256 * d + f
				}
				b = d
			}
			b = a.g.$() + b <= a.h.byteLength ? b : a.h.byteLength - a.g.$();
			d = Ib(a.h, a.g.$(), b);
			a.g.skip(b);
			return new vo(c, d)
		}

		function to(a) {
			var b = a.g.$(),
				c = a.g.Sa();
			if (0 == c) throw new N(2, 3, 3002);
			c = 8 - Math.floor(Math.log2(c));
			a.g.skip(c - 1);
			return Fb(a.h, b, c)
		}
		var uo = [
			[255],
			[127, 255],
			[63, 255, 255],
			[31, 255, 255, 255],
			[15, 255, 255, 255, 255],
			[7, 255, 255, 255, 255, 255],
			[3, 255, 255, 255, 255, 255, 255],
			[1, 255, 255, 255, 255, 255, 255, 255]
		];

		function vo(a, b) {
			this.id = a;
			this.g = b
		}

		function wo(a) {
			if (8 < a.g.byteLength) throw new N(2, 3, 3002);
			if (8 == a.g.byteLength && a.g.getUint8(0) & 224) throw new N(2, 3, 3001);
			for (var b = 0, c = 0; c < a.g.byteLength; c++) {
				var d = a.g.getUint8(c);
				b = 256 * b + d
			}
			return b
		};

		function xo(a, b, c, d, e, f, g, h, k) {
			function l() {
				return e
			}
			var m = [];
			a = new ro(a.g);
			for (var p = null, n = null; a.ma();) {
				var q = so(a);
				if (187 == q.id) {
					var w = yo(q);
					w && (q = c * w.lg, w = b + w.Uf, null != p && m.push(new Oh(p + g, q + g, l, n, w - 1, f, g, h, k)), p = q, n = w)
				}
			}
			null != p && m.push(new Oh(p + g, d + g, l, n, null, f, g, h, k));
			return m
		}

		function yo(a) {
			var b = new ro(a.g);
			a = so(b);
			if (179 != a.id) throw new N(2, 3, 3013);
			a = wo(a);
			b = so(b);
			if (183 != b.id) throw new N(2, 3, 3012);
			b = new ro(b.g);
			for (var c = 0; b.ma();) {
				var d = so(b);
				if (241 == d.id) {
					c = wo(d);
					break
				}
			}
			return {
				lg: a,
				Uf: c
			}
		};

		function zo(a, b) {
			var c = mo(a, b, "Initialization");
			if (!c) return null;
			var d = a.H.wa,
				e = c.getAttribute("sourceURL");
			e && (d = dc(a.H.wa, [e]));
			e = 0;
			var f = null;
			if (c = On(c, "range", Rn)) e = c.start, f = c.end;
			return new Mh(function() {
				return d
			}, e, f, Ao(a))
		}

		function Bo(a, b) {
			var c = Number(lo(a, Co, "presentationTimeOffset")) || 0,
				d = lo(a, Co, "timescale"),
				e = 1;
			d && (e = Tn(d) || 1);
			var f = c / e || 0,
				g = zo(a, Co);
			Do(a, g);
			var h = Ue(a);
			return {
				yb: function() {
					var k = mo(h, Co, "RepresentationIndex"),
						l = h.H.wa;
					k && (k = k.getAttribute("sourceURL")) && (l = dc(h.H.wa, [k]));
					k = Eo(h);
					return Fo(h, b, g, l, k.start, k.end, f)
				}
			}
		}

		function Fo(a, b, c, d, e, f, g) {
			var h, k, l, m, p, n, q, w, y, x, v, D, C, A, G;
			return K(function(E) {
				if (1 == E.g) return h = a.presentationTimeline, k = !a.Xa || !a.W.ye, l = a.W.start, m = a.W.duration, p = a.H.mimeType.split("/")[1], n = b, q = null, w = [n(d, e, f), "webm" == p ? n(c.ya(), c.Ba, c.la) : null], n = null, u(E, Promise.all(w), 2);
				y = E.h;
				x = y[0];
				v = y[1] || null;
				D = null;
				C = l - g;
				A = l;
				G = m ? l + m : Infinity;
				if ("mp4" == p) var H = po(x, e, d, c, C, A, G);
				else {
					H = new ro(v);
					if (440786851 != so(H).id) throw new N(2, 3, 3008);
					var L = so(H);
					if (408125543 != L.id) throw new N(2, 3, 3009);
					H = L.g.byteOffset;
					L = new ro(L.g);
					for (var I = null; L.ma();) {
						var J = so(L);
						if (357149030 == J.id) {
							I = J;
							break
						}
					}
					if (!I) throw new N(2, 3, 3010);
					I = new ro(I.g);
					J = 1E6;
					for (L = null; I.ma();) {
						var P = so(I);
						if (2807729 == P.id) J = wo(P);
						else if (17545 == P.id)
							if (4 == P.g.byteLength) L = P.g.getFloat32(0);
							else if (8 == P.g.byteLength) L = P.g.getFloat64(0);
						else throw new N(2, 3, 3003);
					}
					if (null == L) throw new N(2, 3, 3011);
					I = J / 1E9;
					L *= I;
					J = so(new ro(x));
					if (475249515 != J.id) throw new N(2, 3, 3007);
					H = xo(J, H, I, L, d, c, C, A, G)
				}
				D = H;
				h.Eb(D);
				q = new Qi(D);
				k && q.Ya(A, G, !0);
				return E["return"](q)
			})
		}

		function Co(a) {
			return a.rc
		}

		function Eo(a) {
			var b = mo(a, Co, "RepresentationIndex");
			a = lo(a, Co, "indexRange");
			a = Rn(a || "");
			b && (a = On(b, "range", Rn, a));
			return a
		}

		function Do(a, b) {
			Go(a, b);
			if (!Eo(a)) throw new N(2, 4, 4002);
		}

		function Go(a, b) {
			var c = a.H.mimeType.split("/")[1];
			if (a.H.contentType != lc && "mp4" != c && "webm" != c) throw new N(2, 4, 4006);
			if ("webm" == c && !b) throw new N(2, 4, 4005);
		}

		function Ao(a) {
			var b = a.H;
			return {
				bandwidth: a.bandwidth,
				audioSamplingRate: b.audioSamplingRate,
				codecs: b.codecs,
				contentType: b.contentType,
				frameRate: b.frameRate || null,
				height: b.height || null,
				mimeType: b.mimeType,
				channelsCount: b.Tc,
				pixelAspectRatio: b.pixelAspectRatio || null,
				width: b.width || null
			}
		};

		function Ho(a, b) {
			var c = zo(a, Io),
				d = Jo(a);
			if (!d.ga && !d.timeline && 1 < d.Cb.length) throw new N(2, 4, 4002);
			if (!d.ga && !a.W.duration && !d.timeline && 1 == d.Cb.length) throw new N(2, 4, 4002);
			if (d.timeline && 0 == d.timeline.length) throw new N(2, 4, 4002);
			var e = null,
				f = null;
			a.aa.id && a.H.id && (f = b[a.aa.id + "," + a.H.id]) && (e = f.segmentIndex);
			var g = Ko(a.W.start, a.W.duration, a.H.wa, d, c);
			c = !e;
			e ? e.Db(g, a.presentationTimeline.Qa()) : e = new Qi(g);
			a.presentationTimeline.Eb(g);
			a.Xa && a.W.ye || e.Ya(a.W.start, a.W.duration ? a.W.start + a.W.duration :
				Infinity, c);
			f && (f.segmentIndex = e);
			return {
				yb: function() {
					e && 0 != e.J.length || e.kc(g);
					return Promise.resolve(e)
				}
			}
		}

		function Io(a) {
			return a.ab
		}

		function Jo(a) {
			var b = Lo(a);
			a = ko(a, Io);
			var c = a.Ib;
			0 == c && (c = 1);
			var d = 0;
			a.ga ? d = a.ga * (c - 1) : a.timeline && 0 < a.timeline.length && (d = a.timeline[0].start);
			return {
				ga: a.ga,
				startTime: d,
				Ib: c,
				Ta: a.Ta,
				timeline: a.timeline,
				Cb: b
			}
		}

		function Ko(a, b, c, d, e) {
			var f = d.Cb.length;
			d.timeline && d.timeline.length != d.Cb.length && (f = Math.min(d.timeline.length, d.Cb.length));
			for (var g = a - d.Ta, h = b ? a + b : Infinity, k = [], l = d.startTime, m = {}, p = 0; p < f; m = {
					jd: m.jd
				}, p++) {
				var n = d.Cb[p];
				m.jd = dc(c, [n.Lf]);
				var q = void 0;
				q = null != d.ga ? l + d.ga : d.timeline ? d.timeline[p].end : l + b;
				k.push(new Oh(a + l, a + q, function(w) {
					return function() {
						return w.jd
					}
				}(m), n.start, n.end, e, g, a, h));
				l = q
			}
			return k
		}

		function Lo(a) {
			return [a.H.ab, a.ja.ab, a.aa.ab].filter(cc).map(function(b) {
				return Gn(b, "SegmentURL")
			}).reduce(function(b, c) {
				return 0 < b.length ? b : c
			}).map(function(b) {
				b.getAttribute("indexRange") && !a.we && (a.we = !0);
				var c = b.getAttribute("media");
				b = On(b, "mediaRange", Rn, {
					start: 0,
					end: null
				});
				return {
					Lf: c,
					start: b.start,
					end: b.end
				}
			})
		};

		function Mo(a, b, c, d, e, f) {
			var g = No(a),
				h = Oo(a);
			Po(h);
			var k = Ue(a);
			if (h.ic) return Go(a, g), {
				yb: function() {
					var q = jo(h.ic, k.H.id, null, k.bandwidth || null, null);
					q = dc(k.H.wa, [q]);
					return Fo(k, b, g, q, 0, null, h.Ta)
				}
			};
			if (h.ga) return d || (a.presentationTimeline.Jd(h.ga), a.presentationTimeline.Kd(a.W.start)), {
				yb: function() {
					return Qo(k, h, e, g, f)
				}
			};
			var l = null;
			d = d = null;
			a.aa.id && a.H.id && (d = a.aa.id + "," + a.H.id, d = c[d]) && (l = d.segmentIndex);
			var m = Ro(k, h, g);
			c = a.W.start;
			var p = a.W.duration ? a.W.start + a.W.duration : Infinity,
				n = Infinity !=
				p;
			l ? (n && (new Qi(m)).Ya(c, p, !0), l.Db(m, a.presentationTimeline.Qa())) : l = new Qi(m);
			a.presentationTimeline.Eb(m);
			n && l.Ya(c, p);
			d && a.Xa && (d.segmentIndex = l);
			return {
				yb: function() {
					l && 0 != l.J.length || l.kc(m);
					return Promise.resolve(l)
				}
			}
		}

		function So(a) {
			return a.sc
		}

		function Oo(a) {
			var b = ko(a, So),
				c = lo(a, So, "media");
			a = lo(a, So, "index");
			return {
				ga: b.ga,
				timescale: b.timescale,
				Ib: b.Ib,
				Ta: b.Ta,
				fe: b.fe,
				timeline: b.timeline,
				Hd: c,
				ic: a
			}
		}

		function Po(a) {
			var b = a.ic ? 1 : 0;
			b += a.timeline ? 1 : 0;
			b += a.ga ? 1 : 0;
			if (0 == b) throw new N(2, 4, 4002);
			1 != b && (a.ic && (a.timeline = null), a.ga = null);
			if (!a.ic && !a.Hd) throw new N(2, 4, 4002);
		}

		function Qo(a, b, c, d, e) {
			function f(I) {
				var J = (I - q) * n,
					P = J + b.Ta,
					S = J + l;
				J = S + n;
				var Y = Math.min(J, h());
				S = new Oh(S, Y, function() {
					var ca = jo(y, v, I, x, P * w);
					return dc(D, [ca])
				}, 0, null, d, C, l, h());
				S.j = J;
				return S
			}

			function g() {
				var I = [Math.max(k.Qa(), l), Math.min(k.gb(), h())].map(function(J) {
					return J - l
				});
				return [Math.ceil(I[0] / n), Math.ceil(I[1] / n) - 1].map(function(J) {
					return J + q
				})
			}

			function h() {
				var I = null != m && e[m] || p;
				return I ? l + I : Infinity
			}
			var k = a.presentationTimeline,
				l = a.W.start,
				m = a.aa.id,
				p = a.W.duration,
				n = b.ga,
				q = b.Ib,
				w = b.timescale,
				y = b.Hd,
				x = a.bandwidth || null,
				v = a.H.id,
				D = a.H.wa,
				C = l - b.Ta,
				A = g();
			a = a.Xa ? Math.max(A[0], A[1] - c + 1) : A[0];
			A = A[1];
			c = [];
			for (var G = a; G <= A; ++G) {
				var E = f(G);
				c.push(E)
			}
			var H = new Qi(c);
			c = k.gb() < h();
			G = k.V();
			if (c || G) {
				var L = Math.max(a, A + 1);
				H.$c(n, function() {
					var I = k.Qa();
					H.eb(I);
					var J = t(g());
					J.next();
					J = J.next().value;
					for (var P = []; L <= J;) {
						var S = f(L);
						P.push(S);
						L++
					}
					return I > h() && !P.length ? null : P
				})
			}
			return Promise.resolve(H)
		}

		function Ro(a, b, c) {
			var d = a.W.start,
				e = a.W.duration,
				f = d - b.Ta;
			e = e ? d + e : Infinity;
			for (var g = [], h = {}, k = 0; k < b.timeline.length; h = {
					hd: h.hd,
					md: h.md,
					pd: h.pd,
					ed: h.ed,
					rd: h.rd,
					fd: h.fd
				}, k++) {
				var l = b.timeline[k],
					m = l.start,
					p = l.kg;
				l = l.end;
				h.pd = k + b.Ib;
				h.rd = p + b.fe;
				h.md = a.H.id;
				h.ed = a.bandwidth || null;
				h.hd = b.Hd;
				h.fd = a.H.wa;
				g.push(new Oh(d + m, d + l, function(n) {
					return function() {
						var q = jo(n.hd, n.md, n.pd, n.ed || null, n.rd);
						return dc(n.fd, [q]).map(function(w) {
							return w.toString()
						})
					}
				}(h), 0, null, c, f, d, e))
			}
			return g
		}

		function No(a) {
			var b = lo(a, So, "initialization");
			if (!b) return null;
			var c = a.H.id,
				d = a.bandwidth || null,
				e = a.H.wa;
			return new Mh(function() {
				var f = jo(b, c, null, d, null);
				return dc(e, [f])
			}, 0, null, Ao(a))
		};

		function To() {
			this.l = [];
			this.g = [];
			this.h = [];
			this.j = [];
			this.i = [];
			this.m = new Set
		}
		To.prototype.release = function() {
			for (var a = t(this.g.concat(this.h, this.j, this.i)), b = a.next(); !b.done; b = a.next()) b = b.value, b.segmentIndex && b.segmentIndex.release();
			this.g = [];
			this.h = [];
			this.j = [];
			this.i = [];
			this.l = []
		};

		function Uo(a, b, c) {
			var d, e, f, g, h, k, l, m, p, n, q, w, y, x, v, D, C, A, G, E, H, L, I, J, P, S, Y, ca, ra, Ea;
			return K(function(za) {
				switch (za.g) {
					case 1:
						d = mc;
						Vo(b);
						Wo(b);
						Xo(b);
						Yo(b);
						if (!c && 1 == b.length) {
							e = b[0];
							a.g = e.Cc;
							a.h = e.bd;
							a.j = e.textStreams;
							a.i = e.imageStreams;
							za.A(2);
							break
						}
						f = -1;
						for (g = 0; g < b.length; g++) h = b[g], a.m.has(h.id) || (a.m.add(h.id), -1 == f && (f = g));
						if (-1 == f) return za["return"]();
						k = b.map(function(Ka) {
							return Ka.Cc
						});
						l = b.map(function(Ka) {
							return Ka.bd
						});
						m = b.map(function(Ka) {
							return Ka.textStreams
						});
						p = b.map(function(Ka) {
							return Ka.imageStreams
						});
						n = t(m);
						for (q = n.next(); !q.done; q = n.next()) w = q.value, w.push(Zo(d.X));
						y = t(p);
						for (x = y.next(); !x.done; x = y.next()) v = x.value, v.push(Zo(d.Sb));
						return u(za, $o(a.g, k, f, ap, bp), 3);
					case 3:
						return u(za, $o(a.h, l, f, ap, bp), 4);
					case 4:
						return u(za, $o(a.j, m, f, ap, bp), 5);
					case 5:
						return u(za, $o(a.i, p, f, ap, bp), 2);
					case 2:
						D = 0;
						C = [];
						if (a.h.length && a.g.length)
							for (I = t(a.g), J = I.next(); !J.done; J = I.next())
								for (P = J.value, S = t(a.h), Y = S.next(); !Y.done; Y = S.next()) ca = Y.value, ra = fg(P.drmInfos, ca.drmInfos), P.drmInfos.length && ca.drmInfos.length &&
									!ra.length || (Ea = D++, C.push({
										id: Ea,
										language: P.language,
										primary: P.primary,
										audio: P,
										video: ca,
										bandwidth: (P.bandwidth || 0) + (ca.bandwidth || 0),
										drmInfos: ra,
										allowedByApplication: !0,
										allowedByKeySystem: !0,
										decodingInfos: []
									}));
						else
							for (A = a.h.concat(a.g), G = t(A), E = G.next(); !E.done; E = G.next()) H = E.value, L = D++, C.push({
								id: L,
								language: H.language,
								primary: H.primary,
								audio: H.type == d.cb ? H : null,
								video: H.type == d.va ? H : null,
								bandwidth: H.bandwidth || 0,
								drmInfos: H.drmInfos,
								allowedByApplication: !0,
								allowedByKeySystem: !0,
								decodingInfos: []
							});
						a.l = C;
						z(za)
				}
			})
		}

		function Vo(a) {
			a = t(a);
			for (var b = a.next(); !b.done; b = a.next()) {
				b = b.value;
				for (var c = [], d = t(b.Cc), e = d.next(); !e.done; e = d.next()) {
					e = e.value;
					for (var f = !1, g = t(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.channelsCount == h.channelsCount && e.language == h.language && e.bandwidth == h.bandwidth && e.label == h.label && e.codecs == h.codecs && e.mimeType == h.mimeType && fb(e.roles, h.roles) && e.audioSamplingRate == h.audioSamplingRate && e.primary == h.primary && (f = !0);
					f || c.push(e)
				}
				b.Cc = c
			}
		}

		function Xo(a) {
			a = t(a);
			for (var b = a.next(); !b.done; b = a.next()) {
				b = b.value;
				for (var c = [], d = t(b.textStreams), e = d.next(); !e.done; e = d.next()) {
					e = e.value;
					for (var f = !1, g = t(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.language == h.language && e.label == h.label && e.codecs == h.codecs && e.mimeType == h.mimeType && e.bandwidth == h.bandwidth && fb(e.roles, h.roles) && (f = !0);
					f || c.push(e)
				}
				b.textStreams = c
			}
		}

		function Wo(a) {
			a = t(a);
			for (var b = a.next(); !b.done; b = a.next()) {
				b = b.value;
				for (var c = [], d = t(b.bd), e = d.next(); !e.done; e = d.next()) {
					e = e.value;
					for (var f = !1, g = t(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.width == h.width && e.frameRate == h.frameRate && e.codecs == h.codecs && e.mimeType == h.mimeType && e.label == h.label && fb(e.roles, h.roles) && tf(e.closedCaptions, h.closedCaptions) && e.bandwidth == h.bandwidth && (f = !0);
					f || c.push(e)
				}
				b.bd = c
			}
		}

		function Yo(a) {
			a = t(a);
			for (var b = a.next(); !b.done; b = a.next()) {
				b = b.value;
				for (var c = [], d = t(b.imageStreams), e = d.next(); !e.done; e = d.next()) {
					e = e.value;
					for (var f = !1, g = t(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.width == h.width && e.codecs == h.codecs && e.mimeType == h.mimeType && (f = !0);
					f || c.push(e)
				}
				b.imageStreams = c
			}
		}

		function cp(a) {
			var b, c, d, e, f, g, h, k, l, m, p, n, q, w, y, x, v, D, C, A, G, E, H, L, I, J, P;
			return K(function(S) {
				switch (S.g) {
					case 1:
						b = mc;
						if (1 == a.length) return S["return"](a[0]);
						c = a.map(function(Y) {
							return Y.filter(function(ca) {
								return ca.type == b.cb
							})
						});
						d = a.map(function(Y) {
							return Y.filter(function(ca) {
								return ca.type == b.va
							})
						});
						e = a.map(function(Y) {
							return Y.filter(function(ca) {
								return ca.type == b.X
							})
						});
						f = a.map(function(Y) {
							return Y.filter(function(ca) {
								return ca.type == b.Sb
							})
						});
						g = t(e);
						for (h = g.next(); !h.done; h = g.next()) k = h.value,
							k.push(dp(b.X));
						l = t(f);
						for (m = l.next(); !m.done; m = l.next()) p = m.value, p.push(dp(b.Sb));
						return u(S, $o([], c, 0, ep, fp), 2);
					case 2:
						return n = S.h, u(S, $o([], d, 0, ep, fp), 3);
					case 3:
						return q = S.h, u(S, $o([], e, 0, ep, fp), 4);
					case 4:
						return w = S.h, u(S, $o([], f, 0, ep, fp), 5);
					case 5:
						y = S.h;
						x = 0;
						if (q.length && n.length)
							for (G = t(n), E = G.next(); !E.done; E = G.next())
								for (H = E.value, L = t(q), I = L.next(); !I.done; I = L.next()) J = I.value, P = x++, J.variantIds.push(P), H.variantIds.push(P);
						else
							for (v = q.concat(n), D = t(v), C = D.next(); !C.done; C = D.next()) A = C.value,
								A.variantIds = [x++];
						return S["return"](q.concat(n).concat(w).concat(y))
				}
			})
		}

		function $o(a, b, c, d, e) {
			var f, g, h, k, l, m, p, n, q, w, y, x, v, D, C, A, G, E, H, L, I;
			return K(function(J) {
				switch (J.g) {
					case 1:
						f = mc;
						g = [];
						for (h = 0; h < b.length; h++) h >= c ? g.push(new Set(b[h])) : g.push(new Set);
						k = t(a);
						l = k.next();
					case 2:
						if (l.done) {
							J.A(4);
							break
						}
						m = l.value;
						return u(J, gp(m, b, c, e, g), 5);
					case 5:
						p = J.h;
						if (!p) throw new N(2, 4, 4037);
						l = k.next();
						J.A(2);
						break;
					case 4:
						n = t(g);
						for (q = n.next(); !q.done; q = n.next())
							for (w = q.value, y = t(w), x = y.next(); !x.done; x = y.next()) v = x.value, (D = hp(v, b, d, e, g)) && a.push(D);
						C = t(g);
						for (q = C.next(); !q.done; q =
							C.next())
							for (A = q.value, G = {}, E = t(A), x = E.next(); !x.done; G = {
									Wa: G.Wa
								}, x = E.next())
								if (G.Wa = x.value, H = G.Wa.type == f.X && !G.Wa.language, L = G.Wa.type == f.Sb && !G.Wa.tilesLayout, !H && !L && (I = a.some(function(P) {
										return function(S) {
											return S.mimeType == P.Wa.mimeType && ad(S.codecs) == ad(P.Wa.codecs)
										}
									}(G)))) throw new N(2, 4, 4037);
						return J["return"](a)
				}
			})
		}

		function gp(a, b, c, d, e) {
			return K(function(f) {
				if (1 == f.g) return ip(b, a), a.matchedStreams ? a.segmentIndex ? u(f, jp(a, c), 2) : f.A(2) : f["return"](!1);
				kp(a, c, d, e);
				return f["return"](!0)
			})
		}

		function jp(a, b) {
			var c, d, e, f, g, h, k;
			return K(function(l) {
				if (1 == l.g) {
					c = [];
					d = a.matchedStreams;
					e = t(d);
					for (f = e.next(); !f.done; f = e.next()) g = f.value, c.push(g.createSegmentIndex()), g.trickModeVideo && !g.trickModeVideo.segmentIndex && c.push(g.trickModeVideo.createSegmentIndex());
					return u(l, Promise.all(c), 2)
				}
				if (a.segmentIndex instanceof Ti)
					for (h = 0; h < d.length; h++) k = d[h], k.segmentIndex && h >= b && a.segmentIndex.j.push(k.segmentIndex);
				z(l)
			})
		}

		function hp(a, b, c, d, e) {
			var f = c(a);
			ip(b, f);
			f.createSegmentIndex && (f.createSegmentIndex = function() {
				return K(function(g) {
					if (f.segmentIndex) return g.A(0);
					f.segmentIndex = new Ti;
					return u(g, jp(f, 0), 0)
				})
			});
			if (!f.matchedStreams) return null;
			kp(f, 0, d, e);
			return f
		}

		function kp(a, b, c, d) {
			for (var e = a.matchedStreams, f = 0; f < e.length; f++)
				if (f >= b) {
					var g = e[f];
					c(a, g);
					var h = !0;
					"audio" == a.type && 0 == ud(a.language, g.language) && (h = !1);
					h && d[f]["delete"](g)
				}
		}

		function ap(a) {
			var b = Object.assign({}, a);
			b.originalId = null;
			b.createSegmentIndex = function() {
				return Promise.resolve()
			};
			b.closeSegmentIndex = function() {
				b.segmentIndex && (b.segmentIndex.release(), b.segmentIndex = null);
				if (b.matchedStreams)
					for (var c = t(b.matchedStreams), d = c.next(); !d.done; d = c.next()) d = d.value, d.segmentIndex && (d.segmentIndex.release(), d.segmentIndex = null)
			};
			b.segmentIndex = null;
			b.emsgSchemeIdUris = [];
			b.keyIds = new Set;
			b.closedCaptions = null;
			b.trickModeVideo = null;
			return b
		}

		function ep(a) {
			a = Object.assign({}, a);
			a.keyIds = new Set;
			a.segments = [];
			a.variantIds = [];
			a.closedCaptions = null;
			return a
		}

		function bp(a, b) {
			a.roles = Array.from(new Set(a.roles.concat(b.roles)));
			b.emsgSchemeIdUris && (a.emsgSchemeIdUris = Array.from(new Set(a.emsgSchemeIdUris.concat(b.emsgSchemeIdUris))));
			a.keyIds = function(f, g) {
				return new Set([].concat(ia(f), ia(g)))
			}(a.keyIds, b.keyIds);
			null == a.originalId ? a.originalId = b.originalId : a.originalId += "," + (b.originalId || "");
			var c = fg(a.drmInfos, b.drmInfos);
			if (b.drmInfos.length && a.drmInfos.length && !c.length) throw new N(2, 4, 4038);
			a.drmInfos = c;
			a.encrypted = a.encrypted || b.encrypted;
			if (b.closedCaptions) {
				a.closedCaptions ||
					(a.closedCaptions = new Map);
				c = t(b.closedCaptions);
				for (var d = c.next(); !d.done; d = c.next()) {
					var e = t(d.value);
					d = e.next().value;
					e = e.next().value;
					a.closedCaptions.set(d, e)
				}
			}
			b.trickModeVideo ? (a.trickModeVideo || (a.trickModeVideo = ap(b.trickModeVideo), a.trickModeVideo.createSegmentIndex = function() {
				a.trickModeVideo.segmentIndex = a.segmentIndex.clone();
				return Promise.resolve()
			}), bp(a.trickModeVideo, b.trickModeVideo)) : a.trickModeVideo && bp(a.trickModeVideo, b)
		}

		function fp(a, b) {
			a.roles = Array.from(new Set(a.roles.concat(b.roles)));
			var c = b.keyIds;
			c = new Set([].concat(ia(a.keyIds), ia(c)));
			a.keyIds = c;
			a.encrypted = a.encrypted && b.encrypted;
			a.segments.push.apply(a.segments, ia(b.segments));
			if (b.closedCaptions) {
				a.closedCaptions || (a.closedCaptions = new Map);
				c = t(b.closedCaptions);
				for (var d = c.next(); !d.done; d = c.next()) {
					var e = t(d.value);
					d = e.next().value;
					e = e.next().value;
					a.closedCaptions.set(d, e)
				}
			}
		}

		function ip(a, b) {
			for (var c = [], d = t(a), e = d.next(); !e.done; e = d.next()) {
				var f = b,
					g = {
						audio: lp,
						video: lp,
						text: mp,
						image: np
					} [f.type],
					h = {
						audio: op,
						video: pp,
						text: qp,
						image: rp
					} [f.type],
					k = null;
				e = t(e.value);
				for (var l = e.next(); !l.done; l = e.next()) l = l.value, !g(f, l) || k && !h(f, k, l) || (k = l);
				f = k;
				if (!f) return;
				c.push(f)
			}
			b.matchedStreams = c
		}

		function lp(a, b) {
			var c;
			if (!(c = b.mimeType != a.mimeType || ad(b.codecs) != ad(a.codecs)) && (c = a.drmInfos)) {
				c = a.drmInfos;
				var d = b.drmInfos;
				c = !(c.length && d.length ? 0 < fg(c, d).length : 1)
			}
			return c ? !1 : !0
		}

		function mp(a, b) {
			return a.language ? b.language ? 0 == ud(a.language, b.language) || b.kind != a.kind ? !1 : !0 : !0 : !1
		}

		function np(a) {
			return a.tilesLayout ? !0 : !1
		}

		function op(a, b, c) {
			if (a.id == c.id) return !0;
			var d = ud(a.language, b.language),
				e = ud(a.language, c.language);
			if (e > d) return !0;
			if (e < d) return !1;
			if (!b.primary && c.primary) return !0;
			if (b.primary && !c.primary) return !1;
			if (a.roles.length) return d = b.roles.filter(function(f) {
				return a.roles.includes(f)
			}), e = c.roles.filter(function(f) {
				return a.roles.includes(f)
			}), e.length > d.length ? !0 : e.length < d.length ? !1 : c.roles.length < b.roles.length;
			if (!c.roles.length && b.roles.length) return !0;
			if (c.roles.length && !b.roles.length) return !1;
			d = sp(a.channelsCount, b.channelsCount, c.channelsCount);
			if (d == tp) return !0;
			if (d == up) return !1;
			d = sp(a.audioSamplingRate, b.audioSamplingRate, c.audioSamplingRate);
			return d == tp ? !0 : d == up ? !1 : a.bandwidth && vp(a.bandwidth, b.bandwidth, c.bandwidth) == tp ? !0 : !1
		}

		function pp(a, b, c) {
			if (a.id == c.id) return !0;
			var d = sp(a.width * a.height, b.width * b.height, c.width * c.height);
			if (d == tp) return !0;
			if (d == up) return !1;
			if (a.frameRate) {
				d = sp(a.frameRate, b.frameRate, c.frameRate);
				if (d == tp) return !0;
				if (d == up) return !1
			}
			return a.bandwidth && vp(a.bandwidth, b.bandwidth, c.bandwidth) == tp ? !0 : !1
		}

		function qp(a, b, c) {
			if (a.id == c.id) return !0;
			var d = ud(a.language, b.language),
				e = ud(a.language, c.language);
			if (e > d) return !0;
			if (e < d) return !1;
			if (!b.primary && c.primary) return !0;
			if (b.primary && !c.primary) return !1;
			if (a.roles.length) {
				d = b.roles.filter(function(f) {
					return a.roles.includes(f)
				});
				e = c.roles.filter(function(f) {
					return a.roles.includes(f)
				});
				if (e.length > d.length) return !0;
				if (e.length < d.length) return !1
			} else {
				if (!c.roles.length && b.roles.length) return !0;
				if (c.roles.length && !b.roles.length) return !1
			}
			return c.mimeType !=
				a.mimeType || c.codecs != a.codecs || b.mimeType == a.mimeType && b.codecs == a.codecs ? !1 : !0
		}

		function rp(a, b, c) {
			return a.id == c.id ? !0 : sp(a.width * a.height, b.width * b.height, c.width * c.height) == tp ? !0 : !1
		}

		function dp(a) {
			return {
				id: 0,
				originalId: "",
				primary: !1,
				type: a,
				mimeType: "",
				codecs: "",
				language: "",
				label: null,
				width: null,
				height: null,
				encrypted: !1,
				keyIds: new Set,
				segments: [],
				variantIds: [],
				roles: [],
				forced: !1,
				channelsCount: null,
				audioSamplingRate: null,
				spatialAudio: !1,
				closedCaptions: null
			}
		}

		function Zo(a) {
			return {
				id: 0,
				originalId: "",
				createSegmentIndex: function() {
					return Promise.resolve()
				},
				segmentIndex: new Qi([]),
				mimeType: "",
				codecs: "",
				encrypted: !1,
				drmInfos: [],
				keyIds: new Set,
				language: "",
				label: null,
				type: a,
				primary: !1,
				trickModeVideo: null,
				emsgSchemeIdUris: null,
				roles: [],
				forced: !1,
				channelsCount: null,
				audioSamplingRate: null,
				spatialAudio: !1,
				closedCaptions: null
			}
		}

		function sp(a, b, c) {
			if (b == a && a != c) return up;
			if (c == a && a != b) return tp;
			if (b > a) {
				if (c <= a || c - a < b - a) return tp;
				if (c - a > b - a) return up
			} else {
				if (c > a) return up;
				if (a - c < a - b) return tp;
				if (a - c > a - b) return up
			}
			return wp
		}

		function vp(a, b, c) {
			b = Math.abs(a - b);
			a = Math.abs(a - c);
			return a < b ? tp : b < a ? up : wp
		}
		var tp = 1,
			wp = 0,
			up = -1;

		function xp() {
			var a = this;
			this.h = this.g = null;
			this.m = [];
			this.i = null;
			this.G = 1;
			this.l = {};
			this.M = {};
			this.j = new To;
			this.F = 0;
			this.I = new Pa(5);
			this.D = new O(function() {
				yp(a)
			});
			this.o = new Ve;
			this.s = null;
			this.L = [];
			this.u = Infinity;
			this.C = !1
		}
		r = xp.prototype;
		r.configure = function(a) {
			this.g = a
		};
		r.start = function(a, b) {
			var c = this,
				d;
			return K(function(e) {
				if (1 == e.g) return c.C = b.isLowLatencyMode(), c.m = [a], c.h = b, u(e, zp(c), 2);
				d = e.h;
				c.h && Ap(c, d);
				if (!c.h) throw new N(2, 7, 7001);
				return e["return"](c.i)
			})
		};
		r.stop = function() {
			for (var a = t(Object.values(this.l)), b = a.next(); !b.done; b = a.next()) b = b.value, b.segmentIndex && b.segmentIndex.release();
			this.j && this.j.release();
			this.g = this.h = null;
			this.m = [];
			this.i = null;
			this.l = {};
			this.j = null;
			null != this.D && (this.D.stop(), this.D = null);
			return this.o.destroy()
		};
		r.update = function() {
			var a = this,
				b;
			return K(function(c) {
				if (1 == c.g) return B(c, 2), u(c, zp(a), 4);
				if (2 != c.g) return va(c, 0);
				b = F(c);
				if (!a.h || !b) return c["return"]();
				a.h.onError(b);
				z(c)
			})
		};
		r.onExpirationUpdated = function() {};

		function zp(a) {
			var b, c, d, e, f, g, h;
			return K(function(k) {
				if (1 == k.g) return b = af(a.m, a.g.retryParameters), c = a.h.networkingEngine, a.h.modifyManifestRequest(b, {
					format: "d"
				}), d = Date.now(), e = c.request(0, b), We(a.o, e), u(k, e.promise, 2);
				if (3 != k.g) {
					f = k.h;
					if (!a.h) return k["return"](0);
					f.uri && !a.m.includes(f.uri) && a.m.unshift(f.uri);
					return u(k, Bp(a, f.data, f.uri), 3)
				}
				g = Date.now();
				h = (g - d) / 1E3;
				a.I.sample(1, h);
				return k["return"](h)
			})
		}

		function Bp(a, b, c) {
			var d, e, f, g, h;
			return K(function(k) {
				if (1 == k.g) {
					d = Yn(b, "MPD");
					if (!d) throw new N(2, 4, 4001, c);
					if (e = a.g.dash.disableXlinkProcessing) return k["return"](Cp(a, d, c));
					f = a.g.dash.xlinkFailGracefully;
					g = oo(d, a.g.retryParameters, f, c, a.h.networkingEngine);
					We(a.o, g);
					return u(k, g.promise, 2)
				}
				h = k.h;
				return k["return"](Cp(a, h, c))
			})
		}

		function Cp(a, b, c) {
			var d, e, f, g, h, k, l, m, p, n, q, w, y, x, v, D, C, A, G, E, H, L, I, J, P, S, Y, ca, ra, Ea, za, Ka;
			return K(function(Ba) {
				switch (Ba.g) {
					case 1:
						(d = a.g.dash.manifestPreprocessor) && d(b);
						e = [c];
						f = Gn(b, "Location").map(Mn).filter(cc);
						0 < f.length && (g = dc(e, f), e = a.m = g);
						h = Gn(b, "BaseURL");
						k = h.map(Mn);
						l = dc(e, k);
						m = 0;
						h && h.length && (m = On(h[0], "availabilityTimeOffset", Vn) || 0);
						p = a.g.dash.ignoreMinBufferTime;
						n = 0;
						p || (n = On(b, "minBufferTime", Qn) || 0);
						a.F = On(b, "minimumUpdatePeriod", Qn, -1);
						q = On(b, "availabilityStartTime", Pn);
						w = On(b,
							"timeShiftBufferDepth", Qn);
						y = a.g.dash.ignoreSuggestedPresentationDelay;
						x = null;
						y || (x = On(b, "suggestedPresentationDelay", Qn));
						v = a.g.dash.ignoreMaxSegmentDuration;
						D = null;
						v || (D = On(b, "maxSegmentDuration", Qn));
						C = b.getAttribute("type") || "static";
						if (a.i)
							for (A = a.i.presentationTimeline, G = t(Object.values(a.l)), E = G.next(); !E.done; E = G.next()) H = E.value, H.segmentIndex && H.segmentIndex.eb(A.Qa());
						else L = a.g.defaultPresentationDelay || 1.5 * n, I = null != x ? x : L, A = new T(q, I, a.g.dash.autoCorrectDrift);
						A.tc("static" == C);
						(J = A.V()) &&
						!isNaN(a.g.availabilityWindowOverride) && (w = a.g.availabilityWindowOverride);
						null == w && (w = Infinity);
						A.ae(w);
						P = b.getAttribute("profiles") || "";
						S = {
							Xa: "static" != C,
							presentationTimeline: A,
							aa: null,
							W: null,
							ja: null,
							H: null,
							bandwidth: 0,
							we: !1,
							wb: m,
							profiles: P.split(",")
						};
						Y = Dp(a, S, l, b);
						ca = Y.duration;
						ra = Y.periods;
						"static" != C && Y.pe || A.Ia(ca || Infinity);
						a.u && !a.C && (Ea = a.h.isAutoLowLatencyMode()) && (a.h.enableLowLatencyMode(), a.C = a.h.isLowLatencyMode());
						a.C ? A.Je(a.u) : a.u && Va("Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");
						A.Jd(D || 1);
						return u(Ba, Uo(a.j, ra, S.Xa), 2);
					case 2:
						if (a.i) {
							a.i.variants = a.j.l;
							a.i.textStreams = a.j.j.slice();
							a.i.imageStreams = a.j.i;
							a.h.filter(a.i);
							Ba.A(3);
							break
						}
						a.i = {
							presentationTimeline: A,
							variants: a.j.l,
							textStreams: a.j.j.slice(),
							imageStreams: a.j.i,
							offlineSessionIds: [],
							minBufferTime: n || 0,
							sequenceMode: !1
						};
						if (!A.Oe()) {
							Ba.A(4);
							break
						}
						za = Gn(b, "UTCTiming");
						return u(Ba, Ep(a, l, za), 5);
					case 5:
						Ka = Ba.h;
						if (!a.h) return Ba["return"]();
						A.Ke(Ka);
					case 4:
						A.Dd();
					case 3:
						a.h.makeTextStreamsForClosedCaptions(a.i), z(Ba)
				}
			})
		}

		function Dp(a, b, c, d) {
			var e = On(d, "mediaPresentationDuration", Qn),
				f = [],
				g = 0;
			d = Gn(d, "Period");
			for (var h = 0; h < d.length; h++) {
				var k = d[h],
					l = d[h + 1],
					m = On(k, "start", Qn, g),
					p = k.id,
					n = On(k, "duration", Qn),
					q = null;
				if (l) {
					var w = On(l, "start", Qn);
					null != w && (q = w - m)
				} else null != e && (q = e - m);
				null == q && (q = n);
				if (!(null !== a.s && null !== p && null !== m && m < a.s) || a.L.includes(p) || h + 1 == d.length) {
					null !== m && (null === a.s || m > a.s) && (a.s = m);
					g = Fp(a, b, c, {
						start: m,
						duration: q,
						node: k,
						ye: null == q || !l
					});
					f.push(g);
					b.aa.id && q && (a.M[b.aa.id] = q);
					if (null == q) {
						g =
							null;
						break
					}
					g = m + q
				}
			}
			a.L = f.map(function(y) {
				return y.id
			});
			return null != e ? {
				periods: f,
				duration: e,
				pe: !1
			} : {
				periods: f,
				duration: g,
				pe: !0
			}
		}

		function Fp(a, b, c, d) {
			b.aa = Gp(d.node, null, c);
			b.W = d;
			b.aa.wb = b.wb;
			b.aa.id || (b.aa.id = "__shaka_period_" + d.start);
			var e = Gn(d.node, "EventStream");
			c = b.presentationTimeline.Qa();
			e = t(e);
			for (var f = e.next(); !f.done; f = e.next()) Hp(a, d.start, d.duration, f.value, c);
			c = Gn(d.node, "AdaptationSet").map(function(m) {
				return Ip(a, b, m)
			}).filter(cc);
			if (b.Xa) {
				d = [];
				e = t(c);
				for (f = e.next(); !f.done; f = e.next()) {
					f = t(f.value.Xf);
					for (var g = f.next(); !g.done; g = f.next()) d.push(g.value)
				}
				if (d.length != (new Set(d)).size) throw new N(2, 4, 4018);
			}
			d = c.filter(function(m) {
				return !m.de
			});
			c = c.filter(function(m) {
				return m.de
			});
			c = t(c);
			for (e = c.next(); !e.done; e = c.next()) {
				e = e.value;
				f = e.de.split(" ");
				g = t(d);
				for (var h = g.next(); !h.done; h = g.next()) {
					var k = h.value;
					if (f.includes(k.id)) {
						h = {};
						k = t(k.streams);
						for (var l = k.next(); !l.done; h = {
								Ac: h.Ac
							}, l = k.next()) h.Ac = l.value, h.Ac.trickModeVideo = e.streams.find(function(m) {
							return function(p) {
								return ad(m.Ac.codecs) == ad(p.codecs)
							}
						}(h))
					}
				}
			}
			e = a.g.disableAudio ? [] : Jp(d, "audio");
			g = a.g.disableVideo ? [] : Jp(d, "video");
			f = a.g.disableText ? [] : Jp(d, lc);
			c = a.g.disableThumbnails ? [] : Jp(d, "image");
			if (!g.length && !e.length) throw new N(2, 4, 4004);
			d = [];
			e = t(e);
			for (h = e.next(); !h.done; h = e.next()) d.push.apply(d, ia(h.value.streams));
			e = [];
			g = t(g);
			for (h = g.next(); !h.done; h = g.next()) e.push.apply(e, ia(h.value.streams));
			g = [];
			f = t(f);
			for (h = f.next(); !h.done; h = f.next()) g.push.apply(g, ia(h.value.streams));
			f = [];
			c = t(c);
			for (h = c.next(); !h.done; h = c.next()) f.push.apply(f, ia(h.value.streams));
			return {
				id: b.aa.id,
				Cc: d,
				bd: e,
				textStreams: g,
				imageStreams: f
			}
		}

		function Jp(a, b) {
			return a.filter(function(c) {
				return c.contentType == b
			})
		}

		function Ip(a, b, c) {
			function d(E) {
				switch (E) {
					case 1:
					case 6:
					case 13:
					case 14:
					case 15:
						return "SDR";
					case 16:
						return "PQ";
					case 18:
						return "HLG"
				}
			}
			b.ja = Gp(c, b.aa, null);
			var e = !1,
				f = Gn(c, "Role"),
				g = f.map(function(E) {
					return E.getAttribute("value")
				}).filter(cc),
				h = void 0,
				k = b.ja.contentType == lc;
			k && (h = "subtitle");
			f = t(f);
			for (var l = f.next(); !l.done; l = f.next()) {
				l = l.value;
				var m = l.getAttribute("schemeIdUri");
				if (null == m || "urn:mpeg:dash:role:2011" == m) switch (l = l.getAttribute("value"), l) {
					case "main":
						e = !0;
						break;
					case "caption":
					case "subtitle":
						h =
							l
				}
			}
			var p;
			m = Gn(c, "EssentialProperty");
			f = null;
			l = !1;
			m = t(m);
			for (var n = m.next(); !n.done; n = m.next()) {
				n = n.value;
				var q = n.getAttribute("schemeIdUri");
				"http://dashif.org/guidelines/trickmode" == q ? f = n.getAttribute("value") : "urn:mpeg:mpegB:cicp:TransferCharacteristics" == q ? p = d(parseInt(n.getAttribute("value"), 10)) : l = !0
			}
			m = Gn(c, "SupplementalProperty");
			m = t(m);
			for (n = m.next(); !n.done; n = m.next()) n = n.value, "urn:mpeg:mpegB:cicp:TransferCharacteristics" == n.getAttribute("schemeIdUri") && (p = d(parseInt(n.getAttribute("value"),
				10)));
			m = Gn(c, "Accessibility");
			var w = new Map;
			m = t(m);
			for (n = m.next(); !n.done; n = m.next())
				if (q = n.value, n = q.getAttribute("schemeIdUri"), q = q.getAttribute("value"), "urn:scte:dash:cc:cea-608:2015" == n)
					if (n = 1, null != q) {
						q = q.split(";");
						for (var y = t(q), x = y.next(); !x.done; x = y.next()) {
							var v = x.value,
								D = x = void 0;
							v.includes("=") ? (v = v.split("="), x = v[0].startsWith("CC") ? v[0] : "CC" + v[0], D = v[1] || "und") : (x = "CC" + n, 2 == q.length ? n += 2 : n++, D = v);
							w.set(x, Q(D))
						}
					} else w.set("CC1", "und");
			else if ("urn:scte:dash:cc:cea-708:2015" == n)
				if (n =
					1, null != q)
					for (q = t(q.split(";")), x = q.next(); !x.done; x = q.next()) x = x.value, v = y = void 0, x.includes("=") ? (x = x.split("="), y = "svc" + x[0], v = x[1].split(",")[0].split(":").pop()) : (y = "svc" + n, n++, v = x), w.set(y, Q(v));
				else w.set("svc1", "und");
			else "urn:mpeg:dash:role:2011" == n && null != q && (g.push(q), "captions" == q && (h = "caption"));
			if (l) return null;
			l = Gn(c, "ContentProtection");
			var C = Zn(l, a.g.dash.ignoreDrmInfo, a.g.dash.keySystemsByURI),
				A = Q(c.getAttribute("lang") || "und"),
				G = c.getAttribute("label");
			(l = Gn(c, "Label")) && l.length &&
				(l = l[0], l.textContent && (G = l.textContent));
			l = Gn(c, "Representation");
			c = l.map(function(E) {
				if (E = Kp(a, b, C, h, A, G, e, g, w, E)) E.hdr = E.hdr || p;
				return E
			}).filter(function(E) {
				return !!E
			});
			if (0 == c.length) {
				f = "image" == b.ja.contentType;
				if (a.g.dash.ignoreEmptyAdaptationSet || k || f) return null;
				throw new N(2, 4, 4003);
			}
			if (!b.ja.contentType || "application" == b.ja.contentType)
				for (b.ja.contentType = Lp(c[0].mimeType, c[0].codecs), k = t(c), m = k.next(); !m.done; m = k.next()) m.value.type = b.ja.contentType;
			k = t(c);
			for (m = k.next(); !m.done; m = k.next())
				for (m =
					m.value, n = t(C.drmInfos), q = n.next(); !q.done; q = n.next()) q = q.value, q.keyIds = q.keyIds && m.keyIds ? new Set([].concat(ia(q.keyIds), ia(m.keyIds))) : q.keyIds || m.keyIds;
			k = l.map(function(E) {
				return E.getAttribute("id")
			}).filter(cc);
			return {
				id: b.ja.id || "__fake__" + a.G++,
				contentType: b.ja.contentType,
				language: A,
				Yg: e,
				streams: c,
				drmInfos: C.drmInfos,
				de: f,
				Xf: k
			}
		}

		function Kp(a, b, c, d, e, f, g, h, k, l) {
			b.H = Gp(l, b.ja, null);
			a.u = Math.min(a.u, b.H.wb);
			if (!Mp(b.H)) return null;
			var m = b.W.start;
			b.bandwidth = On(l, "bandwidth", Tn) || 0;
			var p = b.H.contentType,
				n = p == lc || "application" == p;
			p = "image" == p;
			try {
				var q = function(H, L, I) {
					return Np(a, H, L, I)
				};
				if (b.H.rc) var w = Bo(b, q);
				else if (b.H.ab) w = Ho(b, a.l);
				else if (b.H.sc) w = Mo(b, q, a.l, !!a.i, a.g.dash.initialSegmentLimit, a.M);
				else {
					var y = b.H.wa,
						x = b.W.duration || 0;
					w = {
						yb: function() {
							return Promise.resolve(Si(m, x, y))
						}
					}
				}
			} catch (H) {
				if ((n || p) && 4002 == H.code) return null;
				throw H;
			}
			q = Gn(l, "ContentProtection");
			q = bo(q, c, a.g.dash.ignoreDrmInfo, a.g.dash.keySystemsByURI);
			q = new Set(q ? [q] : []);
			var v = !1;
			Gn(l, "SupplementalProperty").some(function(H) {
				return "tag:dolby.com,2018:dash:EC3_ExtensionType:2018" == H.getAttribute("schemeIdUri") && "JOC" == H.getAttribute("value")
			}) && (v = !0);
			var D = !1;
			n && (D = h.includes("forced_subtitle") || h.includes("forced-subtitle"));
			var C;
			if (p && ((l = Gn(l, "EssentialProperty").find(function(H) {
						return ["http://dashif.org/thumbnail_tile", "http://dashif.org/guidelines/thumbnail_tile"].includes(H.getAttribute("schemeIdUri"))
					})) &&
					(C = l.getAttribute("value")), !C)) return null;
			var A;
			l = b.H.codecs;
			b.profiles.includes("http://dashif.org/guidelines/dash-if-uhd#hevc-hdr-pq10") && (l.includes("hvc1.2.4.L153.B0") || l.includes("hev1.2.4.L153.B0")) && (A = "PQ");
			var G = b.H.id ? b.aa.id + "," + b.H.id : "",
				E = {
					id: a.G++,
					originalId: b.H.id,
					createSegmentIndex: function() {
						var H, L, I;
						return K(function(J) {
							if (1 == J.g) {
								L = (H = G && b.Xa && a.l[G]) ? a.l[G] : E;
								if (L.segmentIndex) return J.A(0);
								I = L;
								return u(J, w.yb(), 3)
							}
							I.segmentIndex = J.h;
							z(J)
						})
					},
					closeSegmentIndex: function() {
						E.segmentIndex &&
							(E.segmentIndex.release(), E.segmentIndex = null)
					},
					segmentIndex: null,
					mimeType: b.H.mimeType,
					codecs: b.H.codecs,
					frameRate: b.H.frameRate,
					pixelAspectRatio: b.H.pixelAspectRatio,
					bandwidth: b.bandwidth,
					width: b.H.width,
					height: b.H.height,
					kind: d,
					encrypted: 0 < c.drmInfos.length,
					drmInfos: c.drmInfos,
					keyIds: q,
					language: e,
					label: f,
					type: b.ja.contentType,
					primary: g,
					trickModeVideo: null,
					emsgSchemeIdUris: b.H.emsgSchemeIdUris,
					roles: h,
					forced: D,
					channelsCount: b.H.Tc,
					audioSamplingRate: b.H.audioSamplingRate,
					spatialAudio: v,
					closedCaptions: k,
					hdr: A,
					tilesLayout: C,
					matchedStreams: []
				};
			G && b.Xa && !a.l[G] && (a.l[G] = E);
			return E
		}

		function yp(a) {
			var b, c;
			K(function(d) {
				switch (d.g) {
					case 1:
						return b = 0, B(d, 2), u(d, zp(a), 4);
					case 4:
						b = d.h;
						va(d, 3);
						break;
					case 2:
						c = F(d), a.h && (c.severity = 1, a.h.onError(c));
					case 3:
						if (!a.h) return d["return"]();
						Ap(a, b);
						z(d)
				}
			})
		}

		function Ap(a, b) {
			0 > a.F || a.D.S(Math.max(3, a.F - b, Qa(a.I)))
		}

		function Gp(a, b, c) {
			b = b || {
				contentType: "",
				mimeType: "",
				codecs: "",
				emsgSchemeIdUris: [],
				frameRate: void 0,
				pixelAspectRatio: void 0,
				Tc: null,
				audioSamplingRate: null,
				wb: 0
			};
			c = c || b.wa;
			var d = Gn(a, "BaseURL"),
				e = d.map(Mn),
				f = a.getAttribute("contentType") || b.contentType,
				g = a.getAttribute("mimeType") || b.mimeType,
				h = a.getAttribute("codecs") || b.codecs,
				k = On(a, "frameRate", Wn) || b.frameRate,
				l = a.getAttribute("sar") || b.pixelAspectRatio,
				m = Gn(a, "InbandEventStream"),
				p = b.emsgSchemeIdUris.slice();
			m = t(m);
			for (var n = m.next(); !n.done; n =
				m.next()) n = n.value.getAttribute("schemeIdUri"), p.includes(n) || p.push(n);
			m = Gn(a, "AudioChannelConfiguration");
			m = Op(m) || b.Tc;
			n = On(a, "audioSamplingRate", Un) || b.audioSamplingRate;
			f || (f = Lp(g, h));
			var q = Fn(a, "SegmentBase"),
				w = Fn(a, "SegmentTemplate"),
				y = q ? On(q, "availabilityTimeOffset", Vn) || 0 : 0,
				x = w ? On(w, "availabilityTimeOffset", Vn) || 0 : 0;
			d = d && d.length ? On(d[0], "availabilityTimeOffset", Vn) || 0 : 0;
			d = b.wb + d + y + x;
			return {
				wa: dc(c, e),
				rc: q || b.rc,
				ab: Fn(a, "SegmentList") || b.ab,
				sc: w || b.sc,
				width: On(a, "width", Un) || b.width,
				height: On(a,
					"height", Un) || b.height,
				contentType: f,
				mimeType: g,
				codecs: h,
				frameRate: k,
				pixelAspectRatio: l,
				emsgSchemeIdUris: p,
				id: a.getAttribute("id"),
				Tc: m,
				audioSamplingRate: n,
				wb: d
			}
		}

		function Op(a) {
			a = t(a);
			for (var b = a.next(); !b.done; b = a.next()) {
				var c = b.value;
				if (b = c.getAttribute("schemeIdUri"))
					if (c = c.getAttribute("value")) switch (b) {
						case "urn:mpeg:dash:outputChannelPositionList:2012":
							return c.trim().split(/ +/).length;
						case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
						case "urn:dts:dash:audio_channel_configuration:2012":
							b = parseInt(c, 10);
							if (!b) continue;
							return b;
						case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
						case "urn:dolby:dash:audio_channel_configuration:2011":
							b =
								parseInt(c, 16);
							if (!b) continue;
							for (a = 0; b;) b & 1 && ++a, b >>= 1;
							return a;
						case "urn:mpeg:mpegB:cicp:ChannelConfiguration":
							if (b = [0, 1, 2, 3, 4, 5, 6, 8, 2, 3, 4, 7, 8, 24, 8, 12, 10, 12, 14, 12, 14], (c = parseInt(c, 10)) && 0 < c && c < b.length) return b[c]
					}
			}
			return null
		}

		function Mp(a) {
			var b = a.rc ? 1 : 0;
			b += a.ab ? 1 : 0;
			b += a.sc ? 1 : 0;
			if (0 == b) return a.contentType == lc || "application" == a.contentType ? !0 : !1;
			1 != b && (a.rc && (a.ab = null), a.sc = null);
			return !0
		}

		function Pp(a, b, c, d) {
			var e, f, g, h, k, l;
			return K(function(m) {
				if (1 == m.g) return e = dc(b, [c]), f = af(e, a.g.retryParameters), f.method = d, g = a.h.networkingEngine.request(4, f), We(a.o, g), u(m, g.promise, 2);
				h = m.h;
				if ("HEAD" == d) {
					if (!h.headers || !h.headers.date) return m["return"](0);
					k = h.headers.date
				} else k = Fc(h.data);
				l = Date.parse(k);
				return isNaN(l) ? m["return"](0) : m["return"](l - Date.now())
			})
		}

		function Ep(a, b, c) {
			var d, e, f, g, h, k, l, m;
			return K(function(p) {
				switch (p.g) {
					case 1:
						d = c.map(function(n) {
							return {
								scheme: n.getAttribute("schemeIdUri"),
								value: n.getAttribute("value")
							}
						}), e = a.g.dash.clockSyncUri, !d.length && e && d.push({
							scheme: "urn:mpeg:dash:utc:http-head:2014",
							value: e
						}), f = t(d), g = f.next();
					case 2:
						if (g.done) {
							p.A(4);
							break
						}
						h = g.value;
						B(p, 5);
						k = h.scheme;
						l = h.value;
						switch (k) {
							case "urn:mpeg:dash:utc:http-head:2014":
							case "urn:mpeg:dash:utc:http-head:2012":
								return p.A(7);
							case "urn:mpeg:dash:utc:http-xsdate:2014":
							case "urn:mpeg:dash:utc:http-iso:2014":
							case "urn:mpeg:dash:utc:http-xsdate:2012":
							case "urn:mpeg:dash:utc:http-iso:2012":
								return p.A(8);
							case "urn:mpeg:dash:utc:direct:2014":
							case "urn:mpeg:dash:utc:direct:2012":
								return m = Date.parse(l), p["return"](isNaN(m) ? 0 : m - Date.now());
							case "urn:mpeg:dash:utc:http-ntp:2014":
							case "urn:mpeg:dash:utc:ntp:2014":
							case "urn:mpeg:dash:utc:sntp:2014":
								Va("NTP UTCTiming scheme is not supported");
								break;
							default:
								Va("Unrecognized scheme in UTCTiming element", k)
						}
						p.A(9);
						break;
					case 7:
						return u(p, Pp(a, b, l, "HEAD"), 10);
					case 10:
						return p["return"](p.h);
					case 8:
						return u(p, Pp(a, b, l, "GET"), 11);
					case 11:
						return p["return"](p.h);
					case 9:
						va(p, 3);
						break;
					case 5:
						F(p);
					case 3:
						g = f.next();
						p.A(2);
						break;
					case 4:
						return Va("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"), p["return"](0)
				}
			})
		}

		function Hp(a, b, c, d, e) {
			var f = d.getAttribute("schemeIdUri") || "",
				g = d.getAttribute("value") || "",
				h = On(d, "timescale", Un) || 1;
			d = t(Gn(d, "Event"));
			for (var k = d.next(); !k.done; k = d.next()) {
				k = k.value;
				var l = On(k, "presentationTime", Un) || 0,
					m = On(k, "duration", Un) || 0;
				l = l / h + b;
				m = l + m / h;
				null != c && (l = Math.min(l, b + c), m = Math.min(m, b + c));
				m < e || (k = {
					schemeIdUri: f,
					value: g,
					startTime: l,
					endTime: m,
					id: k.getAttribute("id") || "",
					eventElement: k
				}, a.h.onTimelineRegionAdded(k))
			}
		}

		function Np(a, b, c, d) {
			var e, f, g, h, k;
			return K(function(l) {
				if (1 == l.g) return e = gf, f = hj(b, c, d, a.g.retryParameters), g = a.h.networkingEngine, h = g.request(e, f), We(a.o, h), u(l, h.promise, 2);
				k = l.h;
				return l["return"](k.data)
			})
		}

		function Lp(a, b) {
			return ed(Zc(a, b)) ? lc : a.split("/")[0]
		}
		M("shaka.dash.DashParser", xp);
		lg.mpd = function() {
			return new xp
		};
		jg["application/dash+xml"] = function() {
			return new xp
		};
		jg["video/vnd.mpeg.dash.mpd"] = function() {
			return new xp
		};

		function Qp(a, b, c, d) {
			this.h = a;
			this.type = b;
			this.g = c;
			this.segments = d || null
		}

		function Rp(a, b, c, d) {
			this.id = a;
			this.name = b;
			this.g = c;
			this.value = void 0 === d ? null : d
		}
		Rp.prototype.toString = function() {
			function a(d) {
				return d.name + "=" + (isNaN(Number(d.value)) ? '"' + d.value + '"' : d.value)
			}
			var b = "#" + this.name,
				c = this.g ? this.g.map(a) : [];
			this.value && c.unshift(this.value);
			0 < c.length && (b += ":" + c.join(","));
			return b
		};
		Rp.prototype.getAttribute = function(a) {
			var b = this.g.filter(function(c) {
				return c.name == a
			});
			return b.length ? b[0] : null
		};

		function Z(a, b, c) {
			return (a = a.getAttribute(b)) ? a.value : c || null
		}

		function Sp(a, b) {
			var c = a.getAttribute(b);
			if (!c) throw new N(2, 4, 4023, b);
			return c.value
		}

		function Tp(a, b, c) {
			c = void 0 === c ? [] : c;
			this.h = b;
			this.i = a;
			this.g = c
		}

		function Up(a, b) {
			this.name = a;
			this.value = b
		};

		function Vp(a, b) {
			return a.filter(function(c) {
				return c.name == b
			})
		}

		function Wp(a, b) {
			return a.filter(function(c) {
				return Sp(c, "TYPE") == b
			})
		}

		function Xp(a, b) {
			var c = Vp(a, b);
			return c.length ? c[0] : null
		}

		function Yp(a) {
			var b = 0;
			b = void 0 === b ? 0 : b;
			return (a = Xp(a, "EXT-X-MEDIA-SEQUENCE")) ? Number(a.value) : b
		};

		function Zp(a) {
			this.h = a;
			this.g = 0
		}

		function $p(a) {
			aq(a, /[ \t]+/gm)
		}

		function aq(a, b) {
			b.lastIndex = a.g;
			var c = b.exec(a.h);
			c = null == c ? null : {
				position: c.index,
				length: c[0].length,
				results: c
			};
			if (a.g == a.h.length || null == c || c.position != a.g) return null;
			a.g += c.length;
			return c.results
		}

		function bq(a) {
			return a.g == a.h.length ? null : (a = aq(a, /[^ \t\n]*/gm)) ? a[0] : null
		};

		function cq() {
			this.g = 0
		}

		function dq(a, b, c) {
			b = Fc(b);
			b = b.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim();
			var d = b.split(/\n+/m);
			if (!/^#EXTM3U($|[ \t\n])/m.test(d[0])) throw new N(2, 4, 4015);
			b = 0;
			for (var e = !0, f = t(d), g = f.next(); !g.done; g = f.next())
				if (g = g.value, /^#(?!EXT)/m.test(g) || e) e = !1;
				else if (g = eq(a, g), --a.g, fq.includes(g.name)) {
				b = 1;
				break
			} else "EXT-X-STREAM-INF" == g.name && (e = !0);
			f = [];
			e = !0;
			for (g = 0; g < d.length; g++) {
				var h = d[g],
					k = d[g + 1];
				if (/^#(?!EXT)/m.test(h) || e) e = !1;
				else {
					h = eq(a, h);
					if (gq.includes(h.name)) {
						if (1 != b) throw new N(2, 4, 4017);
						var l = d.splice(g, d.length - g);
						d = c;
						e = [];
						g = [];
						k = [];
						h = null;
						l = t(l);
						for (var m = l.next(); !m.done; m = l.next()) m = m.value, /^(#EXT)/.test(m) ? (m = eq(a, m), fq.includes(m.name) ? f.push(m) : "EXT-X-MAP" == m.name ? h = m : "EXT-X-PART" == m.name ? k.push(m) : "EXT-X-PRELOAD-HINT" == m.name ? "PART" == Z(m, "TYPE") ? k.push(m) : "MAP" == Z(m, "TYPE") && (m.name = "EXT-X-MAP", h = m) : g.push(m)) : /^#(?!EXT)/m.test(m) || (m = dc([d], [m.trim()])[0], h && g.push(h), e.push(new Tp(m, g, k)), g = [], k = []);
						k.length && (h && g.push(h), e.push(new Tp("", g, k)));
						return new Qp(c, b, f, e)
					}
					f.push(h);
					"EXT-X-STREAM-INF" == h.name && (h.g.push(new Up("URI", k)), e = !0)
				}
			}
			return new Qp(c, b, f)
		}

		function eq(a, b) {
			var c = a.g++,
				d = b.match(/^#(EXT[^:]*)(?::(.*))?$/);
			if (!d) throw new N(2, 4, 4016, b);
			var e = d[1],
				f = d[2];
			d = [];
			var g;
			if (f) {
				f = new Zp(f);
				var h;
				(h = aq(f, /^([^,=]+)(?:,|$)/g)) && (g = h[1]);
				for (var k = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; h = aq(f, k);) d.push(new Up(h[1], h[2] || h[3])), $p(f)
			}
			return new Rp(c, e, d, g)
		}
		var fq = "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST EXT-X-SERVER-CONTROL EXT-X-SKIP".split(" "),
			gq = "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP".split(" ");

		function hq() {}

		function iq(a) {
			try {
				var b = jq(a);
				return Me({
					uri: a,
					Be: a,
					data: b.data,
					headers: {
						"content-type": b.contentType
					}
				})
			} catch (c) {
				return Ke(c)
			}
		}

		function jq(a) {
			var b = a.split(":");
			if (2 > b.length || "data" != b[0]) throw new N(2, 1, 1004, a);
			b = b.slice(1).join(":").split(",");
			if (2 > b.length) throw new N(2, 1, 1004, a);
			var c = b[0];
			a = window.decodeURIComponent(b.slice(1).join(","));
			b = c.split(";");
			c = b[0];
			var d = !1;
			1 < b.length && "base64" == b[b.length - 1] && (d = !0, b.pop());
			var e;
			d ? e = Pc(a) : e = Jc(a);
			return {
				data: e,
				contentType: c
			}
		}
		M("shaka.net.DataUriPlugin", hq);
		hq.parse = iq;
		Ye("data", iq);

		function kq() {
			var a = this;
			this.h = this.j = null;
			this.La = 1;
			this.o = new Map;
			this.u = new Map;
			this.ua = new Set;
			this.g = new Map;
			this.i = null;
			this.L = "";
			this.ca = new cq;
			this.ia = 0;
			this.T = !1;
			this.M = null;
			this.C = new O(function() {
				lq(a)
			});
			this.m = mq;
			this.G = null;
			this.ea = 0;
			this.F = Infinity;
			this.Y = this.ha = 0;
			this.D = new Ve;
			this.O = [];
			this.I = new Map;
			this.Ma = !1;
			this.s = new Map;
			this.da = new Map;
			this.l = !1
		}
		r = kq.prototype;
		r.configure = function(a) {
			this.h = a
		};
		r.start = function(a, b) {
			var c = this,
				d, e;
			return K(function(f) {
				if (1 == f.g) return c.j = b, c.l = b.isLowLatencyMode(), u(f, nq(c, a), 2);
				if (3 != f.g) return d = f.h, c.L = d.uri, u(f, oq(c, d.data, a), 3);
				e = c.ia;
				0 < e && c.C.S(e);
				return f["return"](c.G)
			})
		};
		r.stop = function() {
			this.C && (this.C.stop(), this.C = null);
			var a = [];
			this.D && (a.push(this.D.destroy()), this.D = null);
			this.h = this.j = null;
			this.ua.clear();
			this.G = null;
			this.g.clear();
			this.u.clear();
			this.s.clear();
			this.o.clear();
			return Promise.all(a)
		};
		r.update = function() {
			var a = this,
				b, c, d;
			return K(function(e) {
				if (1 == e.g) {
					if (a.m == mq) return e["return"]();
					b = [];
					c = Array.from(a.g.values());
					return c.length ? u(e, pq(a, c[0]), 2) : e.A(2)
				}
				for (d = 1; d < c.length; d++) b.push(pq(a, c[d]));
				return u(e, Promise.all(b), 0)
			})
		};

		function pq(a, b) {
			var c, d, e, f, g, h, k, l, m, p, n, q, w;
			return K(function(y) {
				if (1 == y.g) return c = qq, d = b.Se, e = new Nb(d), a.l && b.Xe && Qb(e, new Sb("_HLS_skip=YES")), u(y, nq(a, e.toString()), 2);
				f = y.h;
				g = dq(a.ca, f.data, f.uri);
				if (1 != g.type) throw new N(2, 4, 4017);
				h = Vp(g.g, "EXT-X-DEFINE");
				k = rq(a, h);
				l = b.stream;
				m = sq(a, g, l.type, b.jc, k);
				l.segmentIndex.Db(m, a.i.Qa());
				m.length && (p = Yp(g.g), n = b.jc.get(p), l.segmentIndex.eb(n));
				q = m[m.length - 1];
				if (w = Xp(g.g, "EXT-X-ENDLIST")) tq(a, c.Re), a.i.Ia(q.endTime);
				z(y)
			})
		}
		r.onExpirationUpdated = function() {};

		function uq(a) {
			if (!a.T) {
				for (var b = -1, c = new Map, d = t(a.g.values()), e = d.next(); !e.done; e = d.next()) {
					e = e.value;
					var f = e.stream.segmentIndex;
					if (f && (f = f.J[0] || null))
						for (var g = t(e.jc), h = g.next(); !h.done; h = g.next()) {
							h = t(h.value);
							var k = h.next().value;
							if (h.next().value == f.startTime) {
								c.set(e, k);
								b = Math.max(b, k);
								break
							}
						}
				}
				if (!(0 > b)) {
					a.M = b;
					b = t(a.g.values());
					for (e = b.next(); !e.done; e = b.next())
						if (d = e.value, e = d.stream.segmentIndex) f = a.M - c.get(d), e.J.splice(0, f), (e = e.J[0] || null) && vq(d, -e.startTime);
					a.T = !0
				}
			}
		}

		function wq(a) {
			if (!a.T) {
				for (var b = Infinity, c = t(a.g.values()), d = c.next(); !d.done; d = c.next())
					if (d = d.value.stream.segmentIndex) d = d.J[0] || null, null != d && null != d.g && (b = Math.min(b, d.g));
				if (Infinity != b) {
					c = t(a.g.values());
					for (d = c.next(); !d.done; d = c.next()) {
						d = d.value;
						var e = d.stream.segmentIndex;
						null != e && (e = e.J[0] || null, null == e.g ? Ua("Missing EXT-X-PROGRAM-DATE-TIME for stream", d.ad, "Expect AV sync issues!") : vq(d, e.g - b - e.startTime))
					}
					a.T = !0
				}
			}
		}

		function vq(a, b) {
			a.stream.segmentIndex.offset(b);
			a.Fd += b;
			for (var c = t(a.jc), d = c.next(); !d.done; d = c.next()) {
				var e = t(d.value);
				d = e.next().value;
				e = e.next().value;
				a.jc.set(d, e + b)
			}
		}

		function oq(a, b, c) {
			var d, e, f, g, h, k, l, m, p, n, q, w, y, x, v, D, C, A, G, E, H, L, I, J, P, S, Y, ca, ra, Ea, za, Ka, Ba, ec, Dc, kd, ld, hb, md, fc, ge;
			return K(function(Ra) {
				switch (Ra.g) {
					case 1:
						d = dq(a.ca, b, a.L);
						e = Vp(d.g, "EXT-X-DEFINE");
						xq(a, e);
						f = [];
						g = [];
						h = [];
						if (1 == d.type) return G = a.h.hls.mediaPlaylistFullMimeType, E = G.split(";")[0], H = E.split("/")[0], L = cd(G), I = new Map, u(Ra, yq(a, d, c, c, L, H, "", !0, "Media Playlist", null, I, null, !1, !1, E), 8);
						k = Vp(d.g, "EXT-X-MEDIA");
						l = Vp(d.g, "EXT-X-STREAM-INF");
						m = Vp(d.g, "EXT-X-IMAGE-STREAM-INF");
						zq(a, l);
						p =
							Vp(d.g, "EXT-X-SESSION-DATA");
						n = t(p);
						for (q = n.next(); !q.done; q = n.next())
							if (w = q.value, y = Z(w, "DATA-ID"), x = Z(w, "URI"), v = Z(w, "LANGUAGE"), D = Z(w, "VALUE"), C = (new Map).set("id", y), x && C.set("uri", dc([a.L], [x])[0]), v && C.set("language", v), D && C.set("value", D), A = new R("sessiondata", C), a.j) a.j.onEvent(A);
						return u(Ra, Aq(a, k), 4);
					case 4:
						return Bq(a, k), u(Ra, Cq(a, l), 5);
					case 5:
						return f = Ra.h, u(Ra, Dq(a, k), 6);
					case 6:
						return g = Ra.h, u(Ra, Eq(a, m), 7);
					case 7:
						h = Ra.h;
						Ra.A(3);
						break;
					case 8:
						J = Ra.h, a.g.set(c, J), f.push({
							id: 0,
							language: "und",
							disabledUntilTime: 0,
							primary: !0,
							audio: "audio" == H ? J.stream : null,
							video: "video" == H ? J.stream : null,
							bandwidth: 0,
							allowedByApplication: !0,
							allowedByKeySystem: !0,
							decodingInfos: []
						});
					case 3:
						if (!a.j) throw new N(2, 7, 7001);
						a.h.hls.ignoreManifestProgramDateTime ? uq(a) : wq(a);
						if (a.Ma && 0 == f.length) throw new N(2, 4, 4034);
						P = Infinity;
						S = t(a.g.values());
						for (Y = S.next(); !Y.done; Y = S.next()) ca = Y.value, "text" != ca.stream.type && (P = Math.min(P, ca.Fd));
						a.m != mq ? (a.i = new T(0, a.h.defaultPresentationDelay ? a.h.defaultPresentationDelay : a.Y ?
							a.Y : 3 * a.ea), a.i.tc(!1)) : (a.i = new T(null, 0), a.i.tc(!0));
						if (a.m != mq) a.ia = a.F, ra = qq, a.m == ra.Qe && (Ea = a.i.Yc, isNaN(a.h.availabilityWindowOverride) || (Ea = a.h.availabilityWindowOverride), a.i.ae(Ea));
						else
							for (a.i.Ia(P), za = t(a.g.values()), Y = za.next(); !Y.done; Y = za.next()) Ka = Y.value, Ka.stream.segmentIndex.Ya(0, P);
						a.O = [];
						Ba = [];
						ec = t(f);
						for (Dc = ec.next(); !Dc.done; Dc = ec.next())
							for (kd = Dc.value, ld = t([kd.video, kd.audio]), hb = ld.next(); !hb.done; hb = ld.next())(md = hb.value) && Ba.push(md);
						return u(Ra, Promise.all(Ba.map(function(Ef) {
							return K(function(Ff) {
								return u(Ff,
									Ef.createSegmentIndex(), 0)
							})
						})), 9);
					case 9:
						fc = t(Ba);
						for (hb = fc.next(); !hb.done; hb = fc.next()) ge = hb.value, a.O.push(ge.segmentIndex.J);
						Fq(a);
						a.i.Dd();
						a.G = {
							presentationTimeline: a.i,
							variants: f,
							textStreams: g,
							imageStreams: h,
							offlineSessionIds: [],
							minBufferTime: 0,
							sequenceMode: !0
						};
						a.j.makeTextStreamsForClosedCaptions(a.G);
						z(Ra)
				}
			})
		}

		function xq(a, b) {
			for (var c = t(b), d = c.next(); !d.done; d = c.next()) {
				var e = d.value;
				d = Z(e, "NAME");
				e = Z(e, "VALUE");
				d && e && (a.o.has(d) || a.o.set(d, e))
			}
		}

		function rq(a, b) {
			for (var c = new Map, d = t(b), e = d.next(); !e.done; e = d.next()) {
				var f = e.value;
				e = Z(f, "NAME");
				var g = Z(f, "VALUE");
				f = Z(f, "IMPORT");
				e && g && c.set(e, g);
				f && (e = a.o.get(f)) && c.set(f, e)
			}
			return c
		}

		function zq(a, b) {
			for (var c = t(b), d = c.next(); !d.done; d = c.next()) {
				var e = d.value,
					f = Z(e, "AUDIO");
				d = Z(e, "VIDEO");
				var g = Z(e, "SUBTITLES");
				e = Gq(a, e);
				if (g) {
					var h = jc(lc, e);
					a.s.set(g, h);
					eb(e, h)
				}
				f && (g = ic("audio", e), a.s.set(f, g));
				d && (f = ic("video", e), a.s.set(d, f))
			}
		}

		function Dq(a, b) {
			var c, d, e, f, g, h, k, l, m, p, n, q;
			return K(function(w) {
				if (1 == w.g) return c = Wp(b, "SUBTITLES"), d = c.map(function(y) {
					var x, v, D;
					return K(function(C) {
						if (1 == C.g) {
							if (x = a.h.disableText) return C["return"](null);
							B(C, 2);
							return u(C, Hq(a, y), 4)
						}
						if (2 != C.g) return v = C.h, C["return"](v.stream);
						D = F(C);
						if (a.h.hls.ignoreTextStreamFailures) return C["return"](null);
						throw D;
					})
				}), u(w, Promise.all(d), 2);
				e = w.h;
				f = t(c);
				for (g = f.next(); !g.done; g = f.next())
					if (h = g.value, k = Sp(h, "GROUP-ID"), l = a.s.get(k))
						if (m = a.u.get(k))
							for (p =
								t(m), n = p.next(); !n.done; n = p.next()) q = n.value, q.stream.codecs = l;
				return w["return"](e.filter(function(y) {
					return y
				}))
			})
		}

		function Eq(a, b) {
			var c, d;
			return K(function(e) {
				if (1 == e.g) return c = b.map(function(f) {
					var g, h, k;
					return K(function(l) {
						if (1 == l.g) {
							if (g = a.h.disableThumbnails) return l["return"](null);
							B(l, 2);
							return u(l, Iq(a, f), 4)
						}
						if (2 != l.g) return h = l.h, l["return"](h.stream);
						k = F(l);
						if (a.h.hls.ignoreImageStreamFailures) return l["return"](null);
						throw k;
					})
				}), u(e, Promise.all(c), 2);
				d = e.h;
				return e["return"](d.filter(function(f) {
					return f
				}))
			})
		}

		function Aq(a, b) {
			var c;
			return K(function(d) {
				b = b.filter(function(e) {
					var f = Z(e, "URI") || "";
					return "SUBTITLES" != Z(e, "TYPE") && "" != f
				});
				c = b.map(function(e) {
					return Hq(a, e)
				});
				return u(d, Promise.all(c), 0)
			})
		}

		function Cq(a, b) {
			var c, d, e;
			return K(function(f) {
				if (1 == f.g) return c = b.map(function(g) {
					var h, k, l, m, p, n, q, w;
					return K(function(y) {
						if (1 == y.g) return h = Z(g, "FRAME-RATE"), k = Number(Z(g, "AVERAGE-BANDWIDTH")) || Number(Sp(g, "BANDWIDTH")), l = Z(g, "RESOLUTION"), m = t(l ? l.split("x") : [null, null]), p = m.next().value, n = m.next().value, q = Z(g, "VIDEO-RANGE"), u(y, Jq(a, g), 2);
						if (w = y.h) {
							for (var x = y["return"], v = w.audio, D = w.video, C = t(D), A = C.next(); !A.done; A = C.next())
								if (A = A.value.stream) A.width = Number(p) || void 0, A.height = Number(n) ||
									void 0, A.frameRate = Number(h) || void 0, A.hdr = q || void 0;
							C = a.h.disableAudio;
							if (!v.length || C) v = [null];
							C = a.h.disableVideo;
							if (!D.length || C) D = [null];
							C = [];
							v = t(v);
							for (A = v.next(); !A.done; A = v.next()) {
								A = A.value;
								for (var G = t(D), E = G.next(); !E.done; E = G.next()) {
									var H = E.value;
									E = A ? A.stream : null;
									var L = H ? H.stream : null,
										I = A ? A.stream.drmInfos : null,
										J = H ? H.stream.drmInfos : null;
									H = (H ? H.ad : "") + " - " + (A ? A.ad : "");
									E && L && I.length && J.length && !(0 < fg(I, J).length) || a.ua.has(H) || (E = {
										id: a.La++,
										language: E ? E.language : "und",
										primary: !!E && E.primary ||
											!!L && L.primary,
										audio: E,
										video: L,
										bandwidth: k,
										allowedByApplication: !0,
										allowedByKeySystem: !0,
										decodingInfos: []
									}, C.push(E), a.ua.add(H))
								}
							}
							y = x.call(y, C)
						} else y = y["return"]([]);
						return y
					})
				}), u(f, Promise.all(c), 2);
				d = f.h;
				e = d.reduce(ac, []);
				e = e.filter(function(g) {
					return null != g
				});
				return f["return"](e)
			})
		}

		function Jq(a, b) {
			var c, d, e, f, g, h, k, l, m, p, n, q, w, y;
			return K(function(x) {
				if (1 == x.g) return c = mc, d = Gq(a, b), e = Z(b, "AUDIO"), f = Z(b, "VIDEO"), h = (g = e || f) && a.u.has(g) ? a.u.get(g) : [], k = {
					audio: e ? h : [],
					video: f ? h : []
				}, m = !1, p = Sp(b, "URI"), n = k.audio.find(function(v) {
					return v && v.ad == p
				}), q = jc(c.va, d), (w = jc(c.cb, d)) && !q ? l = c.cb : !h.length && w && q ? (l = c.va, d = [
					[q, w].join()
				]) : k.audio.length && n ? (l = c.cb, m = !0) : l = k.video.length ? c.cb : c.va, m ? x.A(2) : u(x, Kq(a, b, d, l), 3);
				2 != x.g && (y = x.h);
				if (y) k[y.stream.type] = [y];
				else if (null === y) return x["return"](null);
				Lq(k);
				return x["return"](k)
			})
		}

		function Gq(a, b) {
			var c = [];
			a.h.disableVideo || c.push(a.h.hls.defaultVideoCodec);
			a.h.disableAudio || c.push(a.h.hls.defaultAudioCodec);
			var d = Z(b, "CODECS", c.join(",")).split(/\s*,\s*/);
			c = new Set;
			var e = [];
			d = t(d);
			for (var f = d.next(); !f.done; f = d.next()) {
				f = f.value;
				var g = bd(f)[0];
				c.has(g) || (e.push(f), c.add(g))
			}
			return e
		}

		function Mq(a) {
			a = Z(a, "LANGUAGE") || "und";
			return Q(a)
		}

		function Lq(a) {
			a = t(a.audio.concat(a.video));
			for (var b = a.next(); !b.done; b = a.next())
				if (b = b.value) {
					var c = b.stream.codecs.split(",");
					c = c.filter(function(d) {
						return "mp4a.40.34" != d
					});
					b.stream.codecs = c.join(",")
				}
		}

		function Bq(a, b) {
			var c = Wp(b, "CLOSED-CAPTIONS");
			c = t(c);
			for (var d = c.next(); !d.done; d = c.next()) {
				var e = d.value;
				d = Mq(e);
				var f = Sp(e, "GROUP-ID");
				e = Sp(e, "INSTREAM-ID");
				a.I.get(f) || a.I.set(f, new Map);
				a.I.get(f).set(e, d)
			}
		}

		function Hq(a, b) {
			var c, d, e, f, g, h, k, l, m, p, n, q, w, y;
			return K(function(x) {
				if (1 == x.g) {
					c = Sp(b, "GROUP-ID");
					d = "";
					var v = Sp(b, "TYPE").toLowerCase();
					"subtitles" == v && (v = lc);
					e = v;
					e != lc && c && a.s.has(c) && (d = a.s.get(c));
					f = Nq(Sp(b, "URI"), a.o);
					if (a.g.has(f)) return x["return"](a.g.get(f));
					g = Mq(b);
					h = Z(b, "NAME");
					k = Z(b, "DEFAULT");
					l = "YES" == k;
					"audio" == e ? v = (v = Z(b, "CHANNELS")) ? parseInt(v.split("/")[0], 10) : null : v = null;
					m = v;
					"audio" == e ? v = (v = Z(b, "CHANNELS")) ? v.includes("/JOC") : !1 : v = !1;
					p = v;
					n = Z(b, "CHARACTERISTICS");
					q = Z(b, "FORCED");
					w = "YES" == q;
					return u(x, Oq(a, f, d, e, g, l, h, m, null, n, w, p), 2)
				}
				y = x.h;
				a.u.has(c) ? a.u.get(c).push(y) : a.u.set(c, [y]);
				if (null == y) return x["return"](null);
				if (a.g.has(f)) return x["return"](a.g.get(f));
				a.g.set(f, y);
				return x["return"](y)
			})
		}

		function Iq(a, b) {
			var c, d, e, f, g, h, k, l, m, p;
			return K(function(n) {
				if (1 == n.g) {
					c = Nq(Sp(b, "URI"), a.o);
					d = Z(b, "CODECS", "jpeg") || "";
					if (a.g.has(c)) return n["return"](a.g.get(c));
					e = Mq(b);
					f = Z(b, "NAME");
					g = Z(b, "CHARACTERISTICS");
					return u(n, Oq(a, c, d, "image", e, !1, f, null, null, g, !1, !1), 2)
				}
				h = n.h;
				if (null == h) return n["return"](null);
				if (a.g.has(c)) return n["return"](a.g.get(c));
				if (k = Z(b, "RESOLUTION"))
					if (l = h.stream.segmentIndex.get(0), m = l.tilesLayout) h.stream.width = Number(k.split("x")[0]) * Number(m.split("x")[0]), h.stream.height =
						Number(k.split("x")[1]) * Number(m.split("x")[1]);
				if (p = Z(b, "BANDWIDTH")) h.stream.bandwidth = Number(p);
				a.g.set(c, h);
				return n["return"](h)
			})
		}

		function Kq(a, b, c, d) {
			var e, f, g, h;
			return K(function(k) {
				if (1 == k.g) {
					e = Nq(Sp(b, "URI"), a.o);
					if (a.g.has(e)) return k["return"](a.g.get(e));
					var l = Z(b, "CLOSED-CAPTIONS");
					f = "video" == d && l && "NONE" != l ? a.I.get(l) : null;
					g = ic(d, c);
					return u(k, Oq(a, e, g, d, "und", !1, null, null, f, null, !1, !1), 2)
				}
				h = k.h;
				if (null == h) return k["return"](null);
				if (a.g.has(e)) return k["return"](a.g.get(e));
				a.g.set(e, h);
				return k["return"](h)
			})
		}

		function Oq(a, b, c, d, e, f, g, h, k, l, m, p) {
			var n, q, w;
			return K(function(y) {
				if (1 == y.g) return n = dc([a.L], [b])[0], u(y, nq(a, n), 2);
				q = y.h;
				n = q.uri;
				w = dq(a.ca, q.data, n);
				return y["return"](yq(a, w, b, n, c, d, e, f, g, h, k, l, m, p))
			})
		}

		function yq(a, b, c, d, e, f, g, h, k, l, m, p, n, q, w) {
			var y, x, v, D, C, A, G, E, H, L, I, J, P, S, Y, ca, ra, Ea, za, Ka, Ba, ec, Dc, kd, ld, hb, md, fc, ge, Ra, Ef, Ff;
			return K(function(gc) {
				if (1 == gc.g) {
					if (1 != b.type) throw new N(2, 4, 4017);
					y = Vp(b.g, "EXT-X-DEFINE");
					x = rq(a, y);
					Pq(a, b);
					return w ? gc.A(2) : u(gc, Qq(a, f, e, b, x), 3)
				}
				2 != gc.g && (w = gc.h);
				v = [];
				if (b.segments)
					for (D = t(b.segments), C = D.next(); !C.done; C = D.next()) A = C.value, G = Vp(A.h, "EXT-X-KEY"), v.push.apply(v, ia(G));
				E = !1;
				H = [];
				L = new Set;
				I = t(v);
				for (J = I.next(); !J.done; J = I.next())
					if (P = J.value, S = Sp(P,
							"METHOD"), "NONE" != S) {
						E = !0;
						if ("AES-128" == S) return a.Ma = !0, gc["return"](null);
						Y = Sp(P, "KEYFORMAT");
						if (ra = (ca = Rq[Y]) ? ca(P, w) : null) {
							if (ra.keyIds)
								for (Ea = t(ra.keyIds), za = Ea.next(); !za.done; za = Ea.next()) Ka = za.value, L.add(Ka);
							H.push(ra)
						}
					} if (E && !H.length) throw new N(2, 4, 4026);
				ti.includes(w) && (e = "");
				Ba = new Map;
				try {
					ec = sq(a, b, f, Ba, x)
				} catch (Ym) {
					if (4035 == Ym.code) return Va("Skipping unsupported HLS stream", w, c), gc["return"](null);
					throw Ym;
				}
				Dc = ec[ec.length - 1].endTime;
				kd = new Qi(ec);
				ld = f == lc ? "subtitle" : void 0;
				hb = [];
				if (p)
					for (md = t(p.split(",")), fc = md.next(); !fc.done; fc = md.next()) ge = fc.value, hb.push(ge);
				Ef = (Ra = Xp(b.g, "EXT-X-SERVER-CONTROL")) ? null != Ra.getAttribute("CAN-SKIP-UNTIL") : !1;
				Ff = {
					id: a.La++,
					originalId: k,
					createSegmentIndex: function() {
						return Promise.resolve()
					},
					segmentIndex: kd,
					mimeType: w,
					codecs: e,
					kind: ld,
					encrypted: E,
					drmInfos: H,
					keyIds: L,
					language: g,
					label: k,
					type: f,
					primary: h,
					trickModeVideo: null,
					emsgSchemeIdUris: null,
					frameRate: void 0,
					pixelAspectRatio: void 0,
					width: void 0,
					height: void 0,
					bandwidth: void 0,
					roles: hb,
					forced: n,
					channelsCount: l,
					audioSamplingRate: null,
					spatialAudio: q,
					closedCaptions: m,
					hdr: void 0,
					tilesLayout: void 0
				};
				return gc["return"]({
					stream: Ff,
					ad: c,
					Se: d,
					Fd: Dc,
					jc: Ba,
					Xe: Ef
				})
			})
		}

		function Pq(a, b) {
			var c = Xp(b.g, "EXT-X-PLAYLIST-TYPE"),
				d = Xp(b.g, "EXT-X-ENDLIST");
			d = c && "VOD" == c.value || d;
			c = c && "EVENT" == c.value && !d;
			c = !d && !c;
			if (d) tq(a, mq);
			else {
				c ? tq(a, Sq) : tq(a, Tq);
				d = Xp(b.g, "EXT-X-TARGETDURATION");
				if (!d) throw new N(2, 4, 4024, "EXT-X-TARGETDURATION");
				d = Number(d.value);
				c = Xp(b.g, "EXT-X-PART-INF");
				a.l && c ? (a.ha = Number(Sp(c, "PART-TARGET")), a.F = Math.min(a.ha, a.F), c = Xp(b.g, "EXT-X-SERVER-CONTROL"), a.Y = c ? Number(Sp(c, "PART-HOLD-BACK")) : 0) : a.F = Math.min(d, a.F);
				a.ea = Math.max(d, a.ea)
			}
		}

		function Uq(a, b, c, d) {
			c = Xp(c, "EXT-X-MAP");
			if (!c) return null;
			var e = Sp(c, "URI");
			d = Nq(dc([b], [e])[0], d);
			b = [d, Z(c, "BYTERANGE", "")].join("-");
			a.da.has(b) || (c = Vq(d, c), a.da.set(b, c));
			return a.da.get(b)
		}

		function Vq(a, b) {
			var c = 0,
				d = null,
				e = Z(b, "BYTERANGE");
			e && (c = e.split("@"), d = Number(c[0]), c = Number(c[1]), d = c + d - 1);
			return new Mh(function() {
				return [a]
			}, c, d)
		}

		function Wq(a, b, c, d, e, f, g, h) {
			var k = d.h,
				l = Nq(d.i, f),
				m = Xp(k, "EXTINF"),
				p = f = 0,
				n = null;
			d.g.length && !a.l && Va("Low-latency HLS live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");
			var q = null;
			if (!a.h.hls.ignoreManifestProgramDateTime) {
				var w = Xp(k, "EXT-X-PROGRAM-DATE-TIME");
				w && w.value && (q = Pn(w.value))
			}
			w = Ph;
			Xp(k, "EXT-X-GAP") && (w = 2);
			if (!m) {
				if (0 == d.g.length) throw new N(2, 4, 4024, "EXTINF");
				if (!a.l) return null
			}
			var y = [];
			if (a.l)
				for (var x = {}, v = 0; v < d.g.length; x = {
						kd: x.kd
					}, v++) {
					var D = d.g[v],
						C = 0 == v ? c : y[y.length - 1],
						A = 0 == v ? e : C.endTime,
						G = Number(Z(D, "DURATION")) || a.ha;
					if (G) {
						G = A + G;
						var E = 0,
							H = null;
						"EXT-X-PRELOAD-HINT" == D.name ? E = (E = Z(D, "BYTERANGE-START")) ? Number(E) : 0 : (E = Z(D, "BYTERANGE"), H = t(Xq(C, E)), E = H.next().value, H = H.next().value);
						if (C = Z(D, "URI")) x.kd = dc([g], [C])[0], C = Ph, "YES" == Z(D, "GAP") && (C = 2), y.push(new Oh(A, G, function(L) {
								return function() {
									return [L.kd]
								}
							}(x), E, H, b, 0, 0, Infinity, [], "", null, null,
							C))
					}
				}
			m ? f = e + Number(m.value.split(",")[0]) : f = y[y.length - 1].endTime;
			(a = Xp(k, "EXT-X-BYTERANGE")) ? (n = t(Xq(c, a.value)), p = n.next().value, n = n.next().value) : y.length && (p = y[0].Ba, n = y[y.length - 1].la);
			c = "";
			a = null;
			"image" == h && (c = "1x1", h = Xp(k, "EXT-X-TILES")) && (c = Sp(h, "LAYOUT"), (h = Z(h, "DURATION")) && (a = Number(h)));
			return new Oh(e, f, function() {
				return l.length ? [l] : []
			}, p, n, b, 0, 0, Infinity, y, c, a, q, w)
		}

		function Xq(a, b) {
			var c = 0,
				d = null;
			b && (c = b.split("@"), d = Number(c[0]), c = c[1] ? Number(c[1]) : a.la + 1, d = c + d - 1);
			return [c, d]
		}

		function Fq(a) {
			if (a.i) {
				for (var b = t(a.O), c = b.next(); !c.done; c = b.next()) a.i.Eb(c.value);
				a.O = []
			}
		}

		function sq(a, b, c, d, e) {
			var f = b.segments,
				g = Yp(b.g),
				h = Xp(b.g, "EXT-X-SKIP");
			h = h ? Number(Z(h, "SKIPPED-SEGMENTS")) : 0;
			var k = g + h,
				l = 0;
			a.m != mq && d.has(k) && (l = d.get(k));
			for (var m = [], p = null, n = 0; n < f.length; n++) {
				var q = f[n],
					w = 0 == n ? l : p.endTime;
				k = g + h + n;
				d.set(k, w);
				var y = Uq(a, b.h, q.h, e);
				!a.l && a.j.isAutoLowLatencyMode() && (a.j.enableLowLatencyMode(), a.l = a.j.isLowLatencyMode());
				(p = y = Wq(a, y, p, q, w, e, b.h, c)) && (a.h.hls.ignoreManifestProgramDateTime && null != a.M && k < a.M || m.push(y))
			}
			if (a = m.some(function(x) {
					return null != x.g
				}))
				for (b = {}, c = 0; c < m.length; b = {
						Nb: b.Nb,
						Mb: b.Mb,
						vc: b.vc,
						Ua: b.Ua,
						Lb: b.Lb
					}, c++)
					if (b.Ua = m[c], null == b.Ua.g)
						for (b.Mb = 0, b.Nb = c, d = function(x) {
								return function() {
									var v = m[x.Nb];
									if (v) {
										if (null != v.g) return v.g + x.Mb;
										x.Mb -= v.endTime - v.startTime;
										x.Nb += 1
									}
									return null
								}
							}(b), b.Lb = 0, b.vc = c, e = function(x) {
								return function() {
									var v = m[x.vc];
									if (v) {
										v != x.Ua && (x.Lb += v.endTime - v.startTime);
										if (null != v.g) return v.g + x.Lb;
										--x.vc
									}
									return null
								}
							}(b); null == b.Ua.g;) b.Ua.g = e(), null == b.Ua.g && (b.Ua.g = d());
			if (a)
				for (a = t(m), b = a.next(); !b.done; b = a.next())
					for (c =
						b.value, b = c.g, c = t(c.h), d = c.next(); !d.done; d = c.next()) d = d.value, d.g = b, b += d.endTime - d.startTime;
			return m
		}

		function Nq(a, b) {
			var c = String(a).replace(/%7B/g, "{").replace(/%7D/g, "}"),
				d = c.match(/{\$\w*}/g);
			if (d) {
				d = t(d);
				for (var e = d.next(); !e.done; e = d.next()) {
					e = e.value;
					var f = e.slice(2, e.length - 1),
						g = b.get(f);
					if (g) c = c.replace(e, g);
					else throw new N(2, 4, 4039, f);
				}
			}
			return c
		}

		function Qq(a, b, c, d, e) {
			var f, g, h, k, l, m, p, n, q, w, y, x;
			return K(function(v) {
				if (1 == v.g) {
					f = mc;
					g = gf;
					h = Math.trunc((d.segments.length - 1) / 2);
					k = Nq(d.segments[h].i, e);
					l = new Nb(k);
					m = l.ta.split(".").pop();
					p = Yq[b];
					if (n = p[m]) return v["return"](n);
					if (b == f.X) {
						if ("vtt" == c || "wvtt" == c) return v["return"]("text/vtt");
						if (c && "" !== c) return v["return"]("application/mp4")
					}
					if (b == f.Sb && (!c || "jpeg" == c)) return v["return"]("image/jpeg");
					q = af([k], a.h.retryParameters);
					q.method = "HEAD";
					return u(v, Zq(a, q, g), 2)
				}
				w = v.h;
				y = w.headers["content-type"];
				if (!y) {
					if (b == f.X) return v["return"]("text/vtt");
					x = p.mp4;
					return v["return"](x)
				}
				return v["return"](y.split(";")[0])
			})
		}

		function nq(a, b) {
			var c = af([b], a.h.retryParameters);
			a.j.modifyManifestRequest(c, {
				format: "h"
			});
			return Zq(a, c, 0)
		}

		function lq(a) {
			var b, c;
			K(function(d) {
				if (1 == d.g) {
					if (!a.j) return d["return"]();
					B(d, 2);
					return u(d, a.update(), 4)
				}
				if (2 != d.g) return b = a.ia, a.C.S(b), va(d, 0);
				c = F(d);
				if (!a.j) return d["return"]();
				c.severity = 1;
				a.j.onError(c);
				a.C.S(.1);
				z(d)
			})
		}

		function tq(a, b) {
			a.m = b;
			a.i && a.i.tc(a.m == mq);
			a.m != mq || a.C.stop()
		}

		function Zq(a, b, c) {
			if (!a.D) throw new N(2, 7, 7001);
			b = a.j.networkingEngine.request(c, b);
			We(a.D, b);
			return b.promise
		}
		M("shaka.hls.HlsParser", kq);
		var Yq = {
				audio: {
					mp4: "audio/mp4",
					mp4a: "audio/mp4",
					m4s: "audio/mp4",
					m4i: "audio/mp4",
					m4a: "audio/mp4",
					m4f: "audio/mp4",
					cmfa: "audio/mp4",
					ts: "video/mp2t",
					aac: "audio/aac",
					ac3: "audio/ac3",
					ec3: "audio/ec3",
					mp3: "audio/mpeg"
				},
				video: {
					mp4: "video/mp4",
					mp4v: "video/mp4",
					m4s: "video/mp4",
					m4i: "video/mp4",
					m4v: "video/mp4",
					m4f: "video/mp4",
					cmfv: "video/mp4",
					ts: "video/mp2t"
				},
				text: {
					mp4: "application/mp4",
					m4s: "application/mp4",
					m4i: "application/mp4",
					m4f: "application/mp4",
					cmft: "application/mp4",
					vtt: "text/vtt",
					ttml: "application/ttml+xml"
				},
				image: {
					jpg: "image/jpeg",
					png: "image/png",
					svg: "image/svg+xml",
					webp: "image/webp",
					avif: "image/avif"
				}
			},
			Rq = {
				"com.apple.streamingkeydelivery": function(a, b) {
					if ("video/mp2t" == b) throw new N(2, 4, 4040);
					return hc("com.apple.fps", [{
						initDataType: "sinf",
						initData: new Uint8Array(0)
					}])
				},
				"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function(a) {
					var b = Sp(a, "METHOD");
					if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(b)) return null;
					b = Sp(a, "URI");
					b = jq(b);
					b = Fb(b.data);
					b = hc("com.widevine.alpha", [{
						initDataType: "cenc",
						initData: b
					}]);
					if (a = Z(a, "KEYID")) b.keyIds = new Set([a.toLowerCase().substr(2)]);
					return b
				},
				"com.microsoft.playready": function(a) {
					var b = Sp(a, "METHOD");
					if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(b)) return null;
					a = Sp(a, "URI");
					a = jq(a);
					a = Fb(a.data);
					b = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
					a = En(a, b, new Set, 0);
					return hc("com.microsoft.playready", [{
						initDataType: "cenc",
						initData: a
					}])
				}
			},
			mq = "VOD",
			Tq = "EVENT",
			Sq = "LIVE",
			qq = {
				Re: mq,
				wg: Tq,
				Qe: Sq
			};
		uc("Tizen 3") || uc("Tizen 2") || wc() || (lg.m3u8 = function() {
			return new kq
		}, jg["application/x-mpegurl"] = function() {
			return new kq
		}, jg["application/vnd.apple.mpegurl"] = function() {
			return new kq
		});

		function $q(a, b, c, d, e, f) {
			if (200 <= c && 299 >= c && 202 != c) return {
				uri: e || d,
				Be: d,
				data: b,
				status: c,
				headers: a,
				fromCache: !!a["x-shaka-from-cache"]
			};
			e = null;
			try {
				e = Ic(b)
			} catch (g) {}
			throw new N(401 == c || 403 == c ? 2 : 1, 1, 1001, d, c, e, a, f);
		};

		function ar() {}

		function br(a, b, c, d, e) {
			var f = new cr;
			rf(b.headers).forEach(function(l, m) {
				f.append(m, l)
			});
			var g = new dr,
				h = {
					je: !1,
					Ne: !1
				};
			a = er(a, c, {
				body: b.body || void 0,
				headers: f,
				method: b.method,
				signal: g.signal,
				credentials: b.allowCrossSiteCredentials ? "include" : void 0
			}, h, d, e, b.streamDataCallback);
			a = new Je(a, function() {
				h.je = !0;
				g.abort();
				return Promise.resolve()
			});
			if (b = b.retryParameters.timeout) {
				var k = new O(function() {
					h.Ne = !0;
					g.abort()
				});
				k.S(b / 1E3);
				a["finally"](function() {
					k.stop()
				})
			}
			return a
		}

		function er(a, b, c, d, e, f, g) {
			var h, k, l, m, p, n, q, w, y, x, v, D, C;
			return K(function(A) {
				switch (A.g) {
					case 1:
						return h = fr, k = gr, n = p = 0, q = Date.now(), B(A, 2), u(A, h(a, c), 4);
					case 4:
						return l = A.h, f(hr(l.headers)), w = l.clone().body.getReader(), x = (y = l.headers.get("Content-Length")) ? parseInt(y, 10) : 0, v = function(G) {
							function E() {
								var H, L;
								return K(function(I) {
									switch (I.g) {
										case 1:
											return B(I, 2), u(I, w.read(), 4);
										case 4:
											H = I.h;
											va(I, 3);
											break;
										case 2:
											return F(I), I["return"]();
										case 3:
											if (H.done) {
												I.A(5);
												break
											}
											p += H.value.byteLength;
											if (!g) {
												I.A(5);
												break
											}
											return u(I, g(H.value), 5);
										case 5:
											L = Date.now();
											if (100 < L - q || H.done) e(L - q, p - n, x - p), n = p, q = L;
											H.done ? G.close() : (G.enqueue(H.value), E());
											z(I)
									}
								})
							}
							E()
						}, new k({
							start: v
						}), u(A, l.arrayBuffer(), 5);
					case 5:
						m = A.h;
						va(A, 3);
						break;
					case 2:
						D = F(A);
						if (d.je) throw new N(1, 1, 7001, a, b);
						if (d.Ne) throw new N(1, 1, 1003, a, b);
						throw new N(1, 1, 1002, a, D, b);
					case 3:
						return C = hr(l.headers), A["return"]($q(C, m, l.status, a, l.url, b))
				}
			})
		}

		function hr(a) {
			var b = {};
			a.forEach(function(c, d) {
				b[d.trim()] = c
			});
			return b
		}

		function ir() {
			if (window.ReadableStream) try {
				new ReadableStream({})
			} catch (a) {
				return !1
			} else return !1;
			return !(!window.fetch || !window.AbortController)
		}
		M("shaka.net.HttpFetchPlugin", ar);
		ar.isSupported = ir;
		ar.parse = br;
		var fr = window.fetch,
			dr = window.AbortController,
			gr = window.ReadableStream,
			cr = window.Headers;
		ir() && (Ye("http", br, 2, !0), Ye("https", br, 2, !0), Ye("blob", br, 2, !0));

		function jr() {}

		function kr(a, b, c, d, e) {
			var f = new lr,
				g = Date.now(),
				h = 0,
				k = new Promise(function(l, m) {
					f.open(b.method, a, !0);
					f.responseType = "arraybuffer";
					f.timeout = b.retryParameters.timeout;
					f.withCredentials = b.allowCrossSiteCredentials;
					f.onabort = function() {
						m(new N(1, 1, 7001, a, c))
					};
					var p = !1;
					f.onreadystatechange = function() {
						if (2 == f.readyState && !p) {
							var q = mr(f);
							e(q);
							p = !0
						}
					};
					f.onload = function() {
						var q = mr(f),
							w = f.response;
						try {
							var y = $q(q, w, f.status, a, f.responseURL, c);
							l(y)
						} catch (x) {
							m(x)
						}
					};
					f.onerror = function(q) {
						m(new N(1, 1, 1002, a, q,
							c))
					};
					f.ontimeout = function() {
						m(new N(1, 1, 1003, a, c))
					};
					f.onprogress = function(q) {
						var w = Date.now();
						if (100 < w - g || q.lengthComputable && q.loaded == q.total) d(w - g, q.loaded - h, q.total - q.loaded), h = q.loaded, g = w
					};
					for (var n in b.headers) f.setRequestHeader(n.toLowerCase(), b.headers[n]);
					f.send(b.body)
				});
			return new Je(k, function() {
				f.abort();
				return Promise.resolve()
			})
		}

		function mr(a) {
			var b = a.getAllResponseHeaders().trim().split("\r\n");
			a = {};
			b = t(b);
			for (var c = b.next(); !c.done; c = b.next()) c = c.value.split(": "), a[c[0].toLowerCase()] = c.slice(1).join(": ");
			return a
		}
		M("shaka.net.HttpXHRPlugin", jr);
		jr.parse = kr;
		var lr = window.XMLHttpRequest;
		Ye("http", kr, 1, !0);
		Ye("https", kr, 1, !0);
		Ye("blob", kr, 1, !0);

		function nr(a, b, c, d) {
			this.g = a;
			this.i = b;
			this.groupId = c;
			this.h = d
		}

		function or(a) {
			return a.ya().map(function(b) {
				return "{" + encodeURI(b) + "}"
			}).join("") + ":" + a.Ba + ":" + a.la
		}

		function pr(a, b) {
			return hj(a.g.ya(), a.g.Ba, a.g.la, b.streaming.retryParameters)
		};

		function qr() {
			this.h = this.j = this.i = 0;
			this.g = new Map;
			this.l = 0
		}

		function rr(a, b) {
			a.i += b;
			var c = a.l;
			a.l++;
			a.g.set(c, b);
			return c
		}
		qr.prototype.close = function(a, b) {
			if (this.g.has(a)) {
				var c = this.g.get(a);
				this.g["delete"](a);
				this.j += c;
				this.h += b
			}
		};

		function sr(a) {
			var b = this;
			this.o = a;
			this.j = new Map;
			this.i = new hf(function() {
				return tr(b)["catch"](function() {})
			});
			this.h = [];
			this.m = function() {};
			this.l = function() {};
			this.g = new qr
		}
		sr.prototype.destroy = function() {
			return this.i.destroy()
		};

		function ur(a, b, c) {
			a.m = b;
			a.l = c
		}

		function tr(a) {
			var b = a.h.map(function(c) {
				return c()
			});
			a.h = [];
			return Promise.all(b)
		}

		function vr(a, b, c, d, e, f) {
			jf(a.i);
			var g = (a.j.get(b) || Promise.resolve()).then(function() {
				var h, k, l, m, p, n, q;
				return K(function(w) {
					if (1 == w.g) return u(w, wr(a, c), 2);
					h = w.h;
					if (a.i.g) throw new N(2, 9, 7001);
					if (e)
						for (m in k = Fb(h), l = new Dn(k), l.data) p = Number(m), n = l.data[p], q = l.g[p], a.l(n, q);
					a.g.close(d, h.byteLength);
					var y = a.g;
					a.m(0 == y.i ? 0 : y.j / y.i, a.g.h);
					return w["return"](f(h))
				})
			});
			a.j.set(b, g)
		}

		function xr(a) {
			return K(function(b) {
				return 1 == b.g ? u(b, Promise.all(a.j.values()), 2) : b["return"](a.g.h)
			})
		}

		function wr(a, b) {
			var c, d, e, f;
			return K(function(g) {
				if (1 == g.g) return c = gf, d = a.o.request(c, b), e = function() {
					return d.abort()
				}, a.h.push(e), u(g, d.promise, 2);
				f = g.h;
				eb(a.h, e);
				return g["return"](f.data)
			})
		};

		function yr(a, b) {
			var c = this;
			this.i = a;
			this.h = a.objectStore(b);
			this.g = new nc;
			a.onabort = function(d) {
				d.preventDefault();
				c.g.reject()
			};
			a.onerror = function(d) {
				d.preventDefault();
				c.g.reject()
			};
			a.oncomplete = function() {
				c.g.resolve()
			}
		}
		yr.prototype.abort = function() {
			var a = this;
			return K(function(b) {
				if (1 == b.g) {
					try {
						a.i.abort()
					} catch (c) {}
					B(b, 2);
					return u(b, a.g, 4)
				}
				if (2 != b.g) return va(b, 0);
				F(b);
				z(b)
			})
		};

		function zr(a, b) {
			return new Promise(function(c, d) {
				var e = a.h.openCursor();
				e.onerror = d;
				e.onsuccess = function() {
					var f;
					return K(function(g) {
						if (1 == g.g) {
							if (null == e.result) return c(), g["return"]();
							f = e.result;
							return u(g, b(f.key, f.value, f), 2)
						}
						f["continue"]();
						z(g)
					})
				}
			})
		}
		yr.prototype.store = function() {
			return this.h
		};
		yr.prototype.promise = function() {
			return this.g
		};

		function Ar(a) {
			this.h = a;
			this.g = []
		}
		Ar.prototype.destroy = function() {
			return Promise.all(this.g.map(function(a) {
				return a.abort()
			}))
		};

		function Br(a, b) {
			return Cr(a, b, "readwrite")
		}

		function Cr(a, b, c) {
			c = a.h.transaction([b], c);
			var d = new yr(c, b);
			a.g.push(d);
			d.promise().then(function() {
				eb(a.g, d)
			}, function() {
				eb(a.g, d)
			});
			return d
		};

		function Dr(a, b, c) {
			this.h = new Ar(a);
			this.i = b;
			this.g = c
		}
		r = Dr.prototype;
		r.destroy = function() {
			return this.h.destroy()
		};
		r.hasFixedKeySpace = function() {
			return !0
		};
		r.addSegments = function() {
			return Er(this.i)
		};
		r.removeSegments = function(a, b) {
			return Fr(this, this.i, a, b)
		};
		r.getSegments = function(a) {
			var b = this,
				c;
			return K(function(d) {
				if (1 == d.g) return u(d, Gr(b, b.i, a), 2);
				c = d.h;
				return d["return"](c.map(function(e) {
					return b.ke(e)
				}))
			})
		};
		r.addManifests = function() {
			return Er(this.g)
		};
		r.updateManifest = function() {
			return Promise.reject(new N(2, 9, 9016, "Cannot modify values in " + this.g))
		};

		function Hr(a, b, c) {
			a = Br(a.h, a.g);
			var d = a.store();
			d.get(b).onsuccess = function() {
				d.put(c, b)
			};
			return a.promise()
		}
		r.updateManifestExpiration = function(a, b) {
			var c = Br(this.h, this.g),
				d = c.store();
			d.get(a).onsuccess = function(e) {
				if (e = e.target.result) e.expiration = b, d.put(e, a)
			};
			return c.promise()
		};
		r.removeManifests = function(a, b) {
			return Fr(this, this.g, a, b)
		};
		r.getManifests = function(a) {
			var b = this,
				c;
			return K(function(d) {
				if (1 == d.g) return u(d, Gr(b, b.g, a), 2);
				c = d.h;
				return d["return"](Promise.all(c.map(function(e) {
					return b.$b(e)
				})))
			})
		};
		r.getAllManifests = function() {
			var a = this,
				b, c;
			return K(function(d) {
				return 1 == d.g ? (b = Cr(a.h, a.g, "readonly"), c = new Map, u(d, zr(b, function(e, f) {
					var g;
					return K(function(h) {
						if (1 == h.g) return u(h, a.$b(f), 2);
						g = h.h;
						c.set(e, g);
						z(h)
					})
				}), 2)) : 3 != d.g ? u(d, b.promise(), 3) : d["return"](c)
			})
		};
		r.ke = function(a) {
			return a
		};
		r.$b = function(a) {
			return Promise.resolve(a)
		};

		function Er(a) {
			return Promise.reject(new N(2, 9, 9011, "Cannot add new value to " + a))
		}
		r.add = function(a, b) {
			var c = this,
				d, e, f, g, h, k, l;
			return K(function(m) {
				if (1 == m.g) {
					d = Br(c.h, a);
					e = d.store();
					f = [];
					g = {};
					h = t(b);
					for (k = h.next(); !k.done; g = {
							zc: g.zc
						}, k = h.next()) l = k.value, g.zc = e.add(l), g.zc.onsuccess = function(p) {
						return function() {
							f.push(p.zc.result)
						}
					}(g);
					return u(m, d.promise(), 2)
				}
				return m["return"](f)
			})
		};

		function Fr(a, b, c, d) {
			a = Br(a.h, b);
			b = a.store();
			var e = {};
			c = t(c);
			for (var f = c.next(); !f.done; e = {
					yc: e.yc
				}, f = c.next()) e.yc = f.value, b["delete"](e.yc).onsuccess = function(g) {
				return function() {
					return d(g.yc)
				}
			}(e);
			return a.promise()
		}

		function Gr(a, b, c) {
			var d, e, f, g, h, k, l;
			return K(function(m) {
				if (1 == m.g) {
					d = Cr(a.h, b, "readonly");
					e = d.store();
					f = {};
					g = [];
					h = {};
					k = t(c);
					for (l = k.next(); !l.done; h = {
							Rb: h.Rb,
							Pb: h.Pb
						}, l = k.next()) h.Pb = l.value, h.Rb = e.get(h.Pb), h.Rb.onsuccess = function(p) {
						return function() {
							void 0 == p.Rb.result && g.push(p.Pb);
							f[p.Pb] = p.Rb.result
						}
					}(h);
					return u(m, d.promise(), 2)
				}
				if (g.length) throw new N(2, 9, 9012, "Could not find values for " + g);
				return m["return"](c.map(function(p) {
					return f[p]
				}))
			})
		};

		function Ir(a) {
			this.g = new Ar(a)
		}
		Ir.prototype.destroy = function() {
			return this.g.destroy()
		};
		Ir.prototype.getAll = function() {
			var a = this,
				b, c;
			return K(function(d) {
				return 1 == d.g ? (b = Cr(a.g, "session-ids", "readonly"), c = [], u(d, zr(b, function(e, f) {
					c.push(f)
				}), 2)) : 3 != d.g ? u(d, b.promise(), 3) : d["return"](c)
			})
		};
		Ir.prototype.add = function(a) {
			var b = Br(this.g, "session-ids"),
				c = b.store();
			a = t(a);
			for (var d = a.next(); !d.done; d = a.next()) c.add(d.value);
			return b.promise()
		};
		Ir.prototype.remove = function(a) {
			var b = this,
				c;
			return K(function(d) {
				return 1 == d.g ? (c = Br(b.g, "session-ids"), u(d, zr(c, function(e, f, g) {
					a.includes(f.sessionId) && g["delete"]()
				}), 2)) : u(d, c.promise(), 0)
			})
		};

		function Jr() {
			this.g = new Map
		}
		Jr.prototype.destroy = function() {
			for (var a = [], b = t(this.g.values()), c = b.next(); !c.done; c = b.next()) a.push(c.value.destroy());
			this.g.clear();
			return Promise.all(a)
		};
		Jr.prototype.init = function() {
			var a = this;
			Kr.forEach(function(e, f) {
				var g = e();
				g && a.g.set(f, g)
			});
			for (var b = [], c = t(this.g.values()), d = c.next(); !d.done; d = c.next()) b.push(d.value.init());
			return Promise.all(b)
		};

		function Lr(a) {
			var b = null;
			a.g.forEach(function(c, d) {
				c.getCells().forEach(function(e, f) {
					e.hasFixedKeySpace() || b || (b = {
						path: {
							Aa: d,
							ka: f
						},
						ka: e
					})
				})
			});
			if (b) return b;
			throw new N(2, 9, 9013, "Could not find a cell that supports add-operations");
		}

		function Mr(a, b) {
			a.g.forEach(function(c, d) {
				c.getCells().forEach(function(e, f) {
					b({
						Aa: d,
						ka: f
					}, e)
				})
			})
		}

		function Nr(a, b, c) {
			a = a.g.get(b);
			if (!a) throw new N(2, 9, 9013, "Could not find mechanism with name " + b);
			b = a.getCells().get(c);
			if (!b) throw new N(2, 9, 9013, "Could not find cell with name " + c);
			return b
		}

		function Or(a, b) {
			a.g.forEach(function(c) {
				b(c.getEmeSessionCell())
			})
		}

		function Pr(a) {
			var b = Array.from(a.g.keys());
			if (!b.length) throw new N(2, 9, 9E3, "No supported storage mechanisms found");
			return a.g.get(b[0]).getEmeSessionCell()
		}

		function Qr(a) {
			var b, c, d;
			return K(function(e) {
				return 1 == e.g ? (b = Array.from(a.g.values()), c = 0 < b.length, c || (d = Kr, d.forEach(function(f) {
					(f = f()) && b.push(f)
				})), u(e, Promise.all(b.map(function(f) {
					return f.erase()
				})), 2)) : c ? e.A(0) : u(e, Promise.all(b.map(function(f) {
					return f.destroy()
				})), 0)
			})
		}

		function Rr(a, b) {
			Kr.set(a, b)
		}
		M("shaka.offline.StorageMuxer", Jr);
		Jr.unregister = function(a) {
			Kr["delete"](a)
		};
		Jr.register = Rr;
		Jr.prototype.destroy = Jr.prototype.destroy;
		var Kr = new Map;

		function Sr() {
			Dr.apply(this, arguments)
		}
		pa(Sr, Dr);
		Sr.prototype.updateManifestExpiration = function(a, b) {
			var c = this,
				d, e, f;
			return K(function(g) {
				d = Br(c.h, c.g);
				e = d.store();
				f = new nc;
				e.get(a).onsuccess = function(h) {
					(h = h.target.result) ? (h.expiration = b, e.put(h), f.resolve()) : f.reject(new N(2, 9, 9012, "Could not find values for " + a))
				};
				return u(g, Promise.all([d.promise(), f]), 0)
			})
		};
		Sr.prototype.$b = function(a) {
			var b, c, d, e, f, g;
			return K(function(h) {
				if (1 == h.g) {
					b = [];
					for (c = 0; c < a.periods.length; ++c) d = c == a.periods.length - 1 ? a.duration : a.periods[c + 1].startTime, e = d - a.periods[c].startTime, f = Tr(a.periods[c], e), b.push(f);
					return u(h, cp(b), 2)
				}
				g = h.h;
				return h["return"]({
					creationTime: 0,
					originalManifestUri: a.originalManifestUri,
					duration: a.duration,
					size: a.size,
					expiration: null == a.expiration ? Infinity : a.expiration,
					streams: g,
					sessionIds: a.sessionIds,
					drmInfo: a.drmInfo,
					appMetadata: a.appMetadata,
					sequenceMode: !1
				})
			})
		};

		function Tr(a, b) {
			Ur(a);
			for (var c = t(a.streams), d = c.next(); !d.done; d = c.next());
			return a.streams.map(function(e) {
				return Vr(e, a.startTime, b)
			})
		}

		function Vr(a, b, c) {
			var d = a.initSegmentUri ? Wr(a.initSegmentUri) : null,
				e = b + a.presentationTimeOffset,
				f = b + c;
			return {
				id: a.id,
				originalId: null,
				primary: a.primary,
				type: a.contentType,
				mimeType: a.mimeType,
				codecs: a.codecs,
				frameRate: a.frameRate,
				pixelAspectRatio: void 0,
				hdr: void 0,
				kind: a.kind,
				language: a.language,
				label: a.label,
				width: a.width,
				height: a.height,
				initSegmentKey: d,
				encrypted: a.encrypted,
				keyIds: new Set([a.keyId]),
				segments: a.segments.map(function(g) {
					var h = Wr(g.uri);
					return {
						startTime: b + g.startTime,
						endTime: b + g.endTime,
						dataKey: h,
						initSegmentKey: d,
						appendWindowStart: b,
						appendWindowEnd: f,
						timestampOffset: e,
						tilesLayout: ""
					}
				}),
				variantIds: a.variantIds,
				roles: [],
				forced: !1,
				audioSamplingRate: null,
				channelsCount: null,
				spatialAudio: !1,
				closedCaptions: null,
				tilesLayout: void 0
			}
		}
		Sr.prototype.ke = function(a) {
			return {
				data: a.data
			}
		};

		function Wr(a) {
			var b;
			if ((b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) || (b = /^offline:segment\/([0-9]+)$/.exec(a))) return Number(b[1]);
			throw new N(2, 9, 9004, "Could not parse uri " + a);
		}

		function Ur(a) {
			var b = a.streams.filter(function(h) {
				return "audio" == h.contentType
			});
			a = a.streams.filter(function(h) {
				return "video" == h.contentType
			});
			if (!b.every(function(h) {
					return h.variantIds
				}) || !a.every(function(h) {
					return h.variantIds
				})) {
				for (var c = t(b), d = c.next(); !d.done; d = c.next()) d.value.variantIds = [];
				c = t(a);
				for (d = c.next(); !d.done; d = c.next()) d.value.variantIds = [];
				c = 0;
				if (a.length && !b.length) {
					var e = c++,
						f = t(a);
					for (d = f.next(); !d.done; d = f.next()) d.value.variantIds.push(e)
				}
				if (!a.length && b.length)
					for (e = c++,
						f = t(b), d = f.next(); !d.done; d = f.next()) d.value.variantIds.push(e);
				if (a.length && b.length)
					for (b = t(b), d = b.next(); !d.done; d = b.next())
						for (d = d.value, e = t(a), f = e.next(); !f.done; f = e.next()) {
							f = f.value;
							var g = c++;
							d.variantIds.push(g);
							f.variantIds.push(g)
						}
			}
		};

		function Xr() {
			Dr.apply(this, arguments)
		}
		pa(Xr, Dr);
		Xr.prototype.$b = function(a) {
			var b, c, d, e, f, g;
			return K(function(h) {
				if (1 == h.g) {
					b = [];
					for (c = 0; c < a.periods.length; ++c) {
						d = c == a.periods.length - 1 ? a.duration : a.periods[c + 1].startTime;
						e = d - a.periods[c].startTime;
						for (var k = a.periods[c], l = [], m = t(k.streams), p = m.next(); !p.done; p = m.next()) p = p.value, 0 != p.variantIds.length && l.push(Yr(p, k.startTime, k.startTime + e));
						f = l;
						b.push(f)
					}
					return u(h, cp(b), 2)
				}
				g = h.h;
				return h["return"]({
					appMetadata: a.appMetadata,
					creationTime: 0,
					drmInfo: a.drmInfo,
					duration: a.duration,
					expiration: null ==
						a.expiration ? Infinity : a.expiration,
					originalManifestUri: a.originalManifestUri,
					sessionIds: a.sessionIds,
					size: a.size,
					streams: g,
					sequenceMode: !1
				})
			})
		};

		function Yr(a, b, c) {
			return {
				id: a.id,
				originalId: a.originalId,
				primary: a.primary,
				type: a.contentType,
				mimeType: a.mimeType,
				codecs: a.codecs,
				frameRate: a.frameRate,
				pixelAspectRatio: a.pixelAspectRatio,
				hdr: void 0,
				kind: a.kind,
				language: a.language,
				label: a.label,
				width: a.width,
				height: a.height,
				encrypted: a.encrypted,
				keyIds: new Set([a.keyId]),
				segments: a.segments.map(function(d) {
					return {
						startTime: b + d.startTime,
						endTime: b + d.endTime,
						initSegmentKey: a.initSegmentKey,
						appendWindowStart: b,
						appendWindowEnd: c,
						timestampOffset: b - a.presentationTimeOffset,
						dataKey: d.dataKey,
						tilesLayout: ""
					}
				}),
				variantIds: a.variantIds,
				roles: [],
				forced: !1,
				audioSamplingRate: null,
				channelsCount: null,
				spatialAudio: !1,
				closedCaptions: null,
				tilesLayout: void 0
			}
		};

		function Zr() {
			Dr.apply(this, arguments)
		}
		pa(Zr, Dr);
		r = Zr.prototype;
		r.hasFixedKeySpace = function() {
			return !1
		};
		r.addSegments = function(a) {
			return this.add(this.i, a)
		};
		r.addManifests = function(a) {
			return this.add(this.g, a)
		};
		r.updateManifest = function(a, b) {
			return Hr(this, a, b)
		};
		r.$b = function(a) {
			null == a.expiration && (a.expiration = Infinity);
			return Promise.resolve(a)
		};

		function $r() {
			this.m = this.j = this.i = this.h = this.g = this.l = null
		}
		r = $r.prototype;
		r.init = function() {
			var a = this,
				b = new nc,
				c = window.indexedDB.open("shaka_offline_db", 5);
			c.onsuccess = function() {
				var d = c.result;
				a.l = d;
				var e = d.objectStoreNames;
				e = e.contains("manifest") && e.contains("segment") ? new Sr(d, "segment", "manifest") : null;
				a.g = e;
				e = d.objectStoreNames;
				e = e.contains("manifest-v2") && e.contains("segment-v2") ? new Xr(d, "segment-v2", "manifest-v2") : null;
				a.h = e;
				e = d.objectStoreNames;
				e = e.contains("manifest-v3") && e.contains("segment-v3") ? new Xr(d, "segment-v3", "manifest-v3") : null;
				a.i = e;
				e = d.objectStoreNames;
				e = e.contains("manifest-v5") && e.contains("segment-v5") ? new Zr(d, "segment-v5", "manifest-v5") : null;
				a.j = e;
				d = d.objectStoreNames.contains("session-ids") ? new Ir(d) : null;
				a.m = d;
				b.resolve()
			};
			c.onupgradeneeded = function() {
				for (var d = c.result, e = t(["segment-v5", "manifest-v5", "session-ids"]), f = e.next(); !f.done; f = e.next()) f = f.value, d.objectStoreNames.contains(f) || d.createObjectStore(f, {
					autoIncrement: !0
				})
			};
			c.onerror = function(d) {
				b.reject(new N(2, 9, 9001, c.error));
				d.preventDefault()
			};
			return b
		};
		r.destroy = function() {
			var a = this;
			return K(function(b) {
				switch (b.g) {
					case 1:
						if (!a.g) {
							b.A(2);
							break
						}
						return u(b, a.g.destroy(), 2);
					case 2:
						if (!a.h) {
							b.A(4);
							break
						}
						return u(b, a.h.destroy(), 4);
					case 4:
						if (!a.i) {
							b.A(6);
							break
						}
						return u(b, a.i.destroy(), 6);
					case 6:
						if (!a.j) {
							b.A(8);
							break
						}
						return u(b, a.j.destroy(), 8);
					case 8:
						if (!a.m) {
							b.A(10);
							break
						}
						return u(b, a.m.destroy(), 10);
					case 10:
						a.l && a.l.close(), z(b)
				}
			})
		};
		r.getCells = function() {
			var a = new Map;
			this.g && a.set("v1", this.g);
			this.h && a.set("v2", this.h);
			this.i && a.set("v3", this.i);
			this.j && a.set("v5", this.j);
			return a
		};
		r.getEmeSessionCell = function() {
			return this.m
		};
		r.erase = function() {
			var a = this;
			return K(function(b) {
				switch (b.g) {
					case 1:
						if (!a.g) {
							b.A(2);
							break
						}
						return u(b, a.g.destroy(), 2);
					case 2:
						if (!a.h) {
							b.A(4);
							break
						}
						return u(b, a.h.destroy(), 4);
					case 4:
						if (!a.i) {
							b.A(6);
							break
						}
						return u(b, a.i.destroy(), 6);
					case 6:
						if (!a.j) {
							b.A(8);
							break
						}
						return u(b, a.j.destroy(), 8);
					case 8:
						return a.l && a.l.close(), u(b, as(), 10);
					case 10:
						return a.l = null, a.g = null, a.h = null, a.i = null, a.j = null, u(b, a.init(), 0)
				}
			})
		};

		function as() {
			var a = new nc,
				b = window.indexedDB.deleteDatabase("shaka_offline_db");
			b.onblocked = function() {};
			b.onsuccess = function() {
				a.resolve()
			};
			b.onerror = function(c) {
				a.reject(new N(2, 9, 9001, b.error));
				c.preventDefault()
			};
			return a
		}
		Rr("idb", function() {
			return xc() || tc() || !window.indexedDB ? null : new $r
		});

		function bs(a, b, c, d) {
			this.g = a;
			this.i = b;
			this.h = c;
			this.l = d;
			this.j = ["offline:", a, "/", b, "/", c, "/", d].join("")
		}
		bs.prototype.Aa = function() {
			return this.i
		};
		bs.prototype.ka = function() {
			return this.h
		};
		bs.prototype.key = function() {
			return this.l
		};
		bs.prototype.toString = function() {
			return this.j
		};

		function cs(a) {
			a = /^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(a);
			if (null == a) return null;
			var b = a[1];
			if ("manifest" != b && "segment" != b) return null;
			var c = a[2];
			if (!c) return null;
			var d = a[3];
			return d && null != b ? new bs(b, c, d, Number(a[4])) : null
		};

		function ds(a, b) {
			this.h = a;
			this.g = b
		}

		function es(a, b) {
			var c = new T(null, 0);
			c.Ia(b.duration);
			var d = b.streams.filter(function(l) {
					return "audio" == l.type
				}),
				e = b.streams.filter(function(l) {
					return "video" == l.type
				});
			d = fs(a, d, e, c);
			e = b.streams.filter(function(l) {
				return l.type == lc
			}).map(function(l) {
				return gs(a, l, c)
			});
			var f = b.streams.filter(function(l) {
					return "image" == l.type
				}).map(function(l) {
					return gs(a, l, c)
				}),
				g = b.drmInfo ? [b.drmInfo] : [];
			if (b.drmInfo)
				for (var h = t(d.values()), k = h.next(); !k.done; k = h.next()) k = k.value, k.audio && k.audio.encrypted && (k.audio.drmInfos =
					g), k.video && k.video.encrypted && (k.video.drmInfos = g);
			return {
				presentationTimeline: c,
				minBufferTime: 2,
				offlineSessionIds: b.sessionIds,
				variants: Array.from(d.values()),
				textStreams: e,
				imageStreams: f,
				sequenceMode: b.sequenceMode || !1
			}
		}

		function fs(a, b, c, d) {
			for (var e = new Set, f = t(b), g = f.next(); !g.done; g = f.next()) {
				var h = t(g.value.variantIds);
				for (g = h.next(); !g.done; g = h.next()) e.add(g.value)
			}
			f = t(c);
			for (g = f.next(); !g.done; g = f.next())
				for (h = t(g.value.variantIds), g = h.next(); !g.done; g = h.next()) e.add(g.value);
			f = new Map;
			e = t(e);
			for (g = e.next(); !g.done; g = e.next()) g = g.value, f.set(g, {
				id: g,
				language: "",
				disabledUntilTime: 0,
				primary: !1,
				audio: null,
				video: null,
				bandwidth: 0,
				allowedByApplication: !0,
				allowedByKeySystem: !0,
				decodingInfos: []
			});
			b = t(b);
			for (e = b.next(); !e.done; e =
				b.next())
				for (e = e.value, g = gs(a, e, d), h = t(e.variantIds), e = h.next(); !e.done; e = h.next()) e = f.get(e.value), e.language = g.language, e.primary = e.primary || g.primary, e.audio = g;
			c = t(c);
			for (b = c.next(); !b.done; b = c.next())
				for (e = b.value, b = gs(a, e, d), g = t(e.variantIds), e = g.next(); !e.done; e = g.next()) e = f.get(e.value), e.primary = e.primary || b.primary, e.video = b;
			return f
		}

		function gs(a, b, c) {
			var d = b.segments.map(function(e) {
				return hs(a, e)
			});
			c.Eb(d);
			return {
				id: b.id,
				originalId: b.originalId,
				createSegmentIndex: function() {
					return Promise.resolve()
				},
				segmentIndex: new Qi(d),
				mimeType: b.mimeType,
				codecs: b.codecs,
				width: b.width || void 0,
				height: b.height || void 0,
				frameRate: b.frameRate,
				pixelAspectRatio: b.pixelAspectRatio,
				hdr: b.hdr,
				kind: b.kind,
				encrypted: b.encrypted,
				drmInfos: [],
				keyIds: b.keyIds,
				language: b.language,
				label: b.label,
				type: b.type,
				primary: b.primary,
				trickModeVideo: null,
				emsgSchemeIdUris: null,
				roles: b.roles,
				forced: b.forced,
				channelsCount: b.channelsCount,
				audioSamplingRate: b.audioSamplingRate,
				spatialAudio: b.spatialAudio,
				closedCaptions: b.closedCaptions,
				tilesLayout: b.tilesLayout
			}
		}

		function hs(a, b) {
			var c = new bs("segment", a.h, a.g, b.dataKey);
			return new Oh(b.startTime, b.endTime, function() {
				return [c.toString()]
			}, 0, null, null != b.initSegmentKey ? is(a, b.initSegmentKey) : null, b.timestampOffset, b.appendWindowStart, b.appendWindowEnd, [], b.tilesLayout || "")
		}

		function is(a, b) {
			var c = new bs("segment", a.h, a.g, b);
			return new Mh(function() {
				return [c.toString()]
			}, 0, null)
		};

		function js() {
			this.g = null
		}
		r = js.prototype;
		r.configure = function() {};
		r.start = function(a, b) {
			var c = this,
				d, e, f, g, h, k, l;
			return K(function(m) {
				switch (m.g) {
					case 1:
						d = cs(a);
						c.g = d;
						if (null == d || "manifest" != d.g) throw new N(2, 1, 9004, a);
						e = new Jr;
						ua(m);
						return u(m, e.init(), 4);
					case 4:
						return u(m, Nr(e, d.Aa(), d.ka()), 5);
					case 5:
						return f = m.h, u(m, f.getManifests([d.key()]), 6);
					case 6:
						return g = m.h, h = g[0], k = new ds(d.Aa(), d.ka()), l = es(k, h), b.makeTextStreamsForClosedCaptions(l), m["return"](l);
					case 2:
						return wa(m), u(m, e.destroy(), 7);
					case 7:
						xa(m, 0)
				}
			})
		};
		r.stop = function() {
			return Promise.resolve()
		};
		r.update = function() {};
		r.onExpirationUpdated = function(a, b) {
			var c = this,
				d, e, f, g, h, k, l;
			return K(function(m) {
				switch (m.g) {
					case 1:
						return d = c.g, e = new Jr, B(m, 2, 3), u(m, e.init(), 5);
					case 5:
						return u(m, Nr(e, d.Aa(), d.ka()), 6);
					case 6:
						return f = m.h, u(m, f.getManifests([d.key()]), 7);
					case 7:
						g = m.h;
						h = g[0];
						k = h.sessionIds.includes(a);
						l = void 0 == h.expiration || h.expiration > b;
						if (!k || !l) {
							m.A(3);
							break
						}
						return u(m, f.updateManifestExpiration(d.key(), b), 3);
					case 3:
						return wa(m), u(m, e.destroy(), 10);
					case 10:
						xa(m, 0);
						break;
					case 2:
						F(m), m.A(3)
				}
			})
		};
		jg["application/x-offline-manifest"] = function() {
			return new js
		};

		function ks() {}

		function ls(a) {
			var b = cs(a);
			b && "manifest" == b.g ? (a = {
				uri: a,
				Be: a,
				data: new ArrayBuffer(0),
				headers: {
					"content-type": "application/x-offline-manifest"
				}
			}, a = Me(a)) : a = b && "segment" == b.g ? ms(b.key(), b) : Ke(new N(2, 1, 9004, a));
			return a
		}

		function ms(a, b) {
			var c = new Jr;
			return Me(void 0).Z(function() {
				return c.init()
			}).Z(function() {
				return Nr(c, b.Aa(), b.ka())
			}).Z(function(d) {
				return d.getSegments([b.key()])
			}).Z(function(d) {
				return {
					uri: b,
					data: d[0].data,
					headers: {}
				}
			})["finally"](function() {
				return c.destroy()
			})
		}
		M("shaka.offline.OfflineScheme", ks);
		ks.plugin = ls;
		Ye("offline", ls);

		function ns(a, b, c) {
			var d, e, f, g, h, k;
			return K(function(l) {
				switch (l.g) {
					case 1:
						d = [];
						for (var m = [], p = t(c), n = p.next(); !n.done; n = p.next()) {
							n = n.value;
							for (var q = !1, w = t(m), y = w.next(); !y.done; y = w.next())
								if (y = y.value, os(y.info, n)) {
									y.sessionIds.push(n.sessionId);
									q = !0;
									break
								} q || m.push({
								info: n,
								sessionIds: [n.sessionId]
							})
						}
						e = t(m);
						f = e.next();
					case 2:
						if (f.done) {
							l.A(4);
							break
						}
						g = f.value;
						h = ps(a, b, g);
						return u(l, h, 5);
					case 5:
						k = l.h;
						d = d.concat(k);
						f = e.next();
						l.A(2);
						break;
					case 4:
						return l["return"](d)
				}
			})
		}

		function ps(a, b, c) {
			var d, e;
			return K(function(f) {
				switch (f.g) {
					case 1:
						return d = new uf({
							kb: b,
							onError: function() {},
							Vc: function() {},
							onExpirationUpdated: function() {},
							onEvent: function() {}
						}), B(f, 2), d.configure(a), u(f, Cf(d, c.info.keySystem, c.info.licenseUri, c.info.serverCertificate, c.info.audioCapabilities, c.info.videoCapabilities), 4);
					case 4:
						va(f, 3);
						break;
					case 2:
						return F(f), u(f, d.destroy(), 5);
					case 5:
						return f["return"]([]);
					case 3:
						return B(f, 6), u(f, Pf(d), 8);
					case 8:
						va(f, 7);
						break;
					case 6:
						return F(f), u(f, d.destroy(),
							9);
					case 9:
						return f["return"]([]);
					case 7:
						return e = [], u(f, Promise.all(c.sessionIds.map(function(g) {
							return K(function(h) {
								if (1 == h.g) return B(h, 2), u(h, Qf(d, g), 4);
								if (2 != h.g) return e.push(g), va(h, 0);
								F(h);
								z(h)
							})
						})), 10);
					case 10:
						return u(f, d.destroy(), 11);
					case 11:
						return f["return"](e)
				}
			})
		}

		function os(a, b) {
			function c(d, e) {
				return d.robustness == e.robustness && d.contentType == e.contentType
			}
			return a.keySystem == b.keySystem && a.licenseUri == b.licenseUri && fb(a.audioCapabilities, b.audioCapabilities, c) && fb(a.videoCapabilities, b.videoCapabilities, c)
		};

		function qs(a, b, c) {
			var d = b.presentationTimeline.getDuration();
			b = rs(b);
			return {
				offlineUri: null,
				originalManifestUri: a,
				duration: d,
				size: 0,
				expiration: Infinity,
				tracks: b,
				appMetadata: c,
				isIncomplete: !1
			}
		}

		function ss(a, b) {
			var c = es(new ds(a.Aa(), a.ka()), b),
				d = b.appMetadata || {};
			c = rs(c);
			return {
				offlineUri: a.toString(),
				originalManifestUri: b.originalManifestUri,
				duration: b.duration,
				size: b.size,
				expiration: b.expiration,
				tracks: c,
				appMetadata: d,
				isIncomplete: b.isIncomplete || !1
			}
		}

		function rs(a) {
			var b = [],
				c = me(a.variants);
			c = t(c);
			for (var d = c.next(); !d.done; d = c.next()) b.push(ce(d.value));
			a = t(a.textStreams);
			for (c = a.next(); !c.done; c = a.next()) b.push(de(c.value));
			return b
		};

		function ts() {
			this.g = {}
		}

		function us(a, b) {
			var c = b.audio,
				d = b.video;
			c && !d && (a.g[c.id] = c.bandwidth || b.bandwidth);
			!c && d && (a.g[d.id] = d.bandwidth || b.bandwidth);
			if (c && d) {
				var e = c.bandwidth || 393216,
					f = d.bandwidth || b.bandwidth - e;
				0 >= f && (f = b.bandwidth);
				a.g[c.id] = e;
				a.g[d.id] = f
			}
		}

		function vs(a, b) {
			a.g[b.id] = b.bandwidth || 2048
		}

		function ws(a, b) {
			var c = a.g[b];
			null == c && (c = 0);
			return c
		};

		function xs(a) {
			var b = this;
			if (a && a.constructor != U) throw new N(2, 9, 9008);
			this.g = this.h = null;
			a ? (this.h = a.h, this.g = a.dc()) : (this.h = Dk(), this.g = new Xe);
			this.i = [];
			this.j = [];
			var c = !a;
			this.l = new hf(function() {
				var d, e, f, g, h;
				return K(function(k) {
					switch (k.g) {
						case 1:
							return u(k, Promise.all(b.j.map(function(l) {
								return tr(l)
							})), 2);
						case 2:
							d = function() {};
							e = [];
							f = t(b.i);
							for (g = f.next(); !g.done; g = f.next()) h = g.value, e.push(h.then(d, d));
							return u(k, Promise.all(e), 3);
						case 3:
							if (!c) {
								k.A(4);
								break
							}
							return u(k, b.g.destroy(), 4);
						case 4:
							b.h = null, b.g = null, z(k)
					}
				})
			})
		}

		function ys() {
			if (qc()) a: {
				var a = t(Kr.values());
				for (var b = a.next(); !b.done; b = a.next())
					if (b = b.value, b = b()) {
						b.destroy();
						a = !0;
						break a
					} a = !1
			}
			else a = !1;
			return a
		}
		r = xs.prototype;
		r.destroy = function() {
			return this.l.destroy()
		};
		r.configure = function(a, b) {
			2 == arguments.length && "string" == typeof a && (a = Ak(a, b));
			return Fk(this.h, a)
		};
		r.getConfiguration = function() {
			var a = Dk();
			Fk(a, this.h, Dk());
			return a
		};
		r.dc = function() {
			return this.g
		};
		r.store = function(a, b, c) {
			var d = this,
				e = this.getConfiguration(),
				f = new sr(this.g);
			this.j.push(f);
			b = zs(this, a, b || {}, function() {
				var g;
				return K(function(h) {
					if (1 == h.g) return u(h, ig(a, d.g, e.manifest.retryParameters, c || null), 2);
					g = h.h;
					return h["return"](g())
				})
			}, e, f);
			b = new Je(b, function() {
				return tr(f)
			});
			b["finally"](function() {
				eb(d.j, f)
			});
			return As(this, b)
		};

		function zs(a, b, c, d, e, f) {
			var g, h, k, l, m, p, n, q, w, y, x, v, D, C;
			return K(function(A) {
				switch (A.g) {
					case 1:
						return Bs(), h = g = null, k = new Jr, p = m = l = null, B(A, 2, 3), u(A, d(), 5);
					case 5:
						return g = A.h, u(A, Cs(a, b, g, e), 6);
					case 6:
						n = A.h;
						Ds(a);
						q = !n.presentationTimeline.V() && !n.presentationTimeline.jb();
						if (!q) throw new N(2, 9, 9005, b);
						return u(A, Es(a, n, function(G) {
							p = p || G
						}, e), 7);
					case 7:
						h = A.h;
						Ds(a);
						if (p) throw p;
						return u(A, Fs(n, e), 8);
					case 8:
						return u(A, k.init(), 9);
					case 9:
						return Ds(a), u(A, Lr(k), 10);
					case 10:
						return l = A.h, Ds(a), w = Gs(h,
							n, b, c, e, f), y = w.If, x = w.ce, u(A, l.ka.addManifests([y]), 11);
					case 11:
						v = A.h;
						Ds(a);
						m = v[0];
						Ds(a);
						if (p) throw p;
						return u(A, Hs(a, x, m, y, f, e, l.ka, n, h), 12);
					case 12:
						return Ds(a), D = new bs("manifest", l.path.Aa, l.path.ka, m), A["return"](ss(D, y));
					case 3:
						return wa(A), u(A, k.destroy(), 13);
					case 13:
						if (!g) {
							A.A(14);
							break
						}
						return u(A, g.stop(), 14);
					case 14:
						if (!h) {
							A.A(16);
							break
						}
						return u(A, h.destroy(), 16);
					case 16:
						xa(A, 0);
						break;
					case 2:
						C = F(A);
						if (null == m) {
							A.A(18);
							break
						}
						return u(A, Is(m), 18);
					case 18:
						throw p || C;
				}
			})
		}

		function Hs(a, b, c, d, e, f, g, h, k) {
			var l, m, p, n, q, w, y, x, v, D;
			return K(function(C) {
				switch (C.g) {
					case 1:
						l = {};
						m = 0;
						p = function(A, G) {
							var E, H, L, I, J, P, S;
							return K(function(Y) {
								if (1 == Y.g) {
									E = {};
									H = t(A);
									for (L = H.next(); !L.done; E = {
											bb: E.bb
										}, L = H.next()) E.bb = L.value, I = pr(E.bb, f), J = E.bb.i, P = E.bb.h, S = function(ca) {
										return function(ra) {
											var Ea, za, Ka;
											return K(function(Ba) {
												if (1 == Ba.g) return u(Ba, g.addSegments([{
													data: ra
												}]), 2);
												Ea = Ba.h;
												Ds(a);
												za = ca.bb.g;
												Ka = or(za);
												l[Ka] = Ea[0];
												m += ra.byteLength;
												z(Ba)
											})
										}
									}(E), vr(e, E.bb.groupId, I, J, P, S);
									return u(Y,
										xr(e), 2)
								}
								if (!G) return Y.A(0);
								Ds(a);
								Js(h, d, k, f);
								return u(Y, g.updateManifest(c, d), 0)
							})
						};
						n = !1;
						B(C, 2);
						if (!Ks(h) || !n || Ls(h)) {
							C.A(4);
							break
						}
						return u(C, p(b.filter(function(A) {
							return A.h
						}), !0), 5);
					case 5:
						return Ds(a), b = b.filter(function(A) {
							return !A.h
						}), q = l, w = m, l = {}, m = 0, u(C, Ms(g, c, d, q, w, function() {
							return Ds(a)
						}), 6);
					case 6:
						Ds(a);
					case 4:
						if (n) {
							C.A(7);
							break
						}
						return u(C, p(b, !1), 8);
					case 8:
						return Ds(a), y = l, x = m, l = {}, m = 0, u(C, Ms(g, c, d, y, x, function() {
							return Ds(a)
						}), 9);
					case 9:
						Ds(a);
					case 7:
						va(C, 0);
						break;
					case 2:
						return v = F(C),
							D = Object.values(l), u(C, g.removeSegments(D, function() {}), 10);
					case 10:
						throw v;
				}
			})
		}

		function Is(a) {
			var b, c, d, e;
			return K(function(f) {
				switch (f.g) {
					case 1:
						return b = new Jr, u(f, b.init(), 2);
					case 2:
						return u(f, Lr(b), 3);
					case 3:
						return c = f.h, d = new bs("manifest", c.path.Aa, c.path.ka, a), u(f, b.destroy(), 4);
					case 4:
						return e = new xs, u(f, e.remove(d.toString()), 0)
				}
			})
		}

		function Ms(a, b, c, d, e, f) {
			var g, h, k, l, m, p, n, q, w, y, x;
			return K(function(v) {
				switch (v.g) {
					case 1:
						g = !1;
						B(v, 2);
						h = !0;
						k = t(c.streams);
						for (l = k.next(); !l.done; l = k.next())
							for (m = l.value, p = t(m.segments), n = p.next(); !n.done; n = p.next()) q = n.value, w = q.pendingSegmentRefId ? d[q.pendingSegmentRefId] : null, null != w && (q.dataKey = w, q.pendingSegmentRefId = void 0), w = q.pendingInitSegmentRefId ? d[q.pendingInitSegmentRefId] : null, null != w && (q.initSegmentKey = w, q.pendingInitSegmentRefId = void 0), q.pendingSegmentRefId && (h = !1), q.pendingInitSegmentRefId &&
								(h = !1);
						c.size += e;
						h && (c.isIncomplete = !1);
						return u(v, a.updateManifest(b, c), 4);
					case 4:
						g = !0;
						f();
						va(v, 0);
						break;
					case 2:
						return y = F(v), u(v, Is(b), 5);
					case 5:
						if (g) {
							v.A(6);
							break
						}
						x = Object.values(d);
						return u(v, a.removeSegments(x, function() {}), 6);
					case 6:
						throw y;
				}
			})
		}

		function Fs(a, b) {
			var c, d, e, f, g, h, k, l, m, p, n, q, w, y, x, v, D, C, A, G, E, H, L, I, J, P, S, Y, ca;
			return K(function(ra) {
				switch (ra.g) {
					case 1:
						return c = {
							width: Infinity,
							height: Infinity
						}, Md(a, b.restrictions, c), u(ra, Qd(a, b.offline.usePersistentLicense), 2);
					case 2:
						d = [];
						e = b.preferredAudioChannelCount;
						f = b.preferredDecodingAttributes;
						g = b.preferredVideoCodecs;
						h = b.preferredAudioCodecs;
						Ad(a, g, h, e, f);
						k = t(a.variants);
						for (l = k.next(); !l.done; l = k.next()) m = l.value, d.push(ce(m));
						p = t(a.textStreams);
						for (n = p.next(); !n.done; n = p.next()) q = n.value,
							d.push(de(q));
						w = t(a.imageStreams);
						for (y = w.next(); !y.done; y = w.next()) x = y.value, d.push(ee(x));
						return u(ra, b.offline.trackSelectionCallback(d), 3);
					case 3:
						v = ra.h;
						D = a.presentationTimeline.getDuration();
						C = 0;
						A = t(v);
						for (G = A.next(); !G.done; G = A.next()) E = G.value, H = E.bandwidth * D / 8, C += H;
						B(ra, 4);
						return u(ra, b.offline.downloadSizeCallback(C), 6);
					case 6:
						L = ra.h;
						if (!L) throw new N(2, 9, 9014);
						va(ra, 5);
						break;
					case 4:
						I = F(ra);
						if (I instanceof N) throw I;
						throw new N(2, 9, 9015);
					case 5:
						J = new Set;
						P = new Set;
						S = new Set;
						Y = t(v);
						for (G =
							Y.next(); !G.done; G = Y.next()) ca = G.value, "variant" == ca.type && J.add(ca.id), "text" == ca.type && P.add(ca.id), "image" == ca.type && S.add(ca.id);
						a.variants = a.variants.filter(function(Ea) {
							return J.has(Ea.id)
						});
						a.textStreams = a.textStreams.filter(function(Ea) {
							return P.has(Ea.id)
						});
						a.imageStreams = a.imageStreams.filter(function(Ea) {
							return S.has(Ea.id)
						});
						Ns(a);
						z(ra)
				}
			})
		}

		function Gs(a, b, c, d, e, f) {
			var g = qs(c, b, d),
				h = e.offline.progressCallback;
			ur(f, function(q, w) {
				g.size = w;
				h(g, q)
			}, function(q, w) {
				k && e.offline.usePersistentLicense && l == w && Mf(a, "cenc", q)
			});
			var k = Ks(b) && !Ls(b),
				l = null;
			k && (l = Os.get(a.g.keySystem));
			for (var m = new ts, p = t(b.textStreams), n = p.next(); !n.done; n = p.next()) m.g[n.value.id] = 52;
			p = t(b.imageStreams);
			for (n = p.next(); !n.done; n = p.next()) vs(m, n.value);
			n = t(b.variants);
			for (p = n.next(); !p.done; p = n.next()) us(m, p.value);
			m = Ps(f, m, b, e);
			f = m.streams;
			m = m.ce;
			n = a.g;
			p = e.offline.usePersistentLicense;
			n && p && (n.initData = []);
			return {
				If: {
					creationTime: Date.now(),
					originalManifestUri: c,
					duration: b.presentationTimeline.getDuration(),
					size: 0,
					expiration: a.cc(),
					streams: f,
					sessionIds: p ? Uf(a) : [],
					drmInfo: n,
					appMetadata: d,
					isIncomplete: !0,
					sequenceMode: b.sequenceMode
				},
				ce: m
			}
		}

		function Ks(a) {
			return a.variants.some(function(b) {
				var c = b.audio && b.audio.encrypted;
				return b.video && b.video.encrypted || c
			})
		}

		function Ls(a) {
			return a.variants.some(function(b) {
				return (b.video ? b.video.drmInfos : []).concat(b.audio ? b.audio.drmInfos : []).some(function(c) {
					return c.initData && c.initData.length
				})
			})
		}

		function Js(a, b, c, d) {
			b.expiration = c.cc();
			c = Uf(c);
			b.sessionIds = d.offline.usePersistentLicense ? c : [];
			if (Ks(a) && d.offline.usePersistentLicense && !c.length) throw new N(2, 9, 9007);
		}
		r.remove = function(a) {
			return Qs(this, Rs(this, a))
		};

		function Rs(a, b) {
			var c, d, e, f, g, h;
			return K(function(k) {
				switch (k.g) {
					case 1:
						Bs();
						c = cs(b);
						if (null == c || "manifest" != c.g) throw new N(2, 9, 9004, b);
						d = c;
						e = new Jr;
						ua(k);
						return u(k, e.init(), 4);
					case 4:
						return u(k, Nr(e, d.Aa(), d.ka()), 5);
					case 5:
						return f = k.h, u(k, f.getManifests([d.key()]), 6);
					case 6:
						return g = k.h, h = g[0], u(k, Promise.all([Ss(a, h, e), Ts(f, d, h)]), 2);
					case 2:
						return wa(k), u(k, e.destroy(), 8);
					case 8:
						xa(k, 0)
				}
			})
		}

		function Us(a, b) {
			for (var c = [], d = t(a.streams), e = d.next(); !e.done; e = d.next()) e = e.value, b && "video" == e.type ? c.push({
				contentType: Zc(e.mimeType, e.codecs),
				robustness: a.drmInfo.videoRobustness
			}) : b || "audio" != e.type || c.push({
				contentType: Zc(e.mimeType, e.codecs),
				robustness: a.drmInfo.audioRobustness
			});
			return c
		}

		function Ss(a, b, c) {
			return K(function(d) {
				return u(d, Vs(a.g, a.h.drm, c, b), 0)
			})
		}

		function Ts(a, b, c) {
			function d() {}
			var e = Ws(c);
			ss(b, c);
			return Promise.all([a.removeSegments(e, d), a.removeManifests([b.key()], d)])
		}
		r.Wf = function() {
			return Qs(this, Xs(this))
		};

		function Xs(a) {
			var b, c, d, e, f, g, h, k, l, m;
			return K(function(p) {
				switch (p.g) {
					case 1:
						return Bs(), b = a.g, c = a.h.drm, d = new Jr, e = !1, ua(p), u(p, d.init(), 4);
					case 4:
						f = [], Or(d, function(n) {
							return f.push(n)
						}), g = t(f), h = g.next();
					case 5:
						if (h.done) {
							p.A(2);
							break
						}
						k = h.value;
						return u(p, k.getAll(), 8);
					case 8:
						return l = p.h, u(p, ns(c, b, l), 9);
					case 9:
						return m = p.h, u(p, k.remove(m), 10);
					case 10:
						m.length != l.length && (e = !0);
						h = g.next();
						p.A(5);
						break;
					case 2:
						return wa(p), u(p, d.destroy(), 11);
					case 11:
						xa(p, 3);
						break;
					case 3:
						return p["return"](!e)
				}
			})
		}
		r.list = function() {
			return Qs(this, Ys())
		};

		function Ys() {
			var a, b, c;
			return K(function(d) {
				switch (d.g) {
					case 1:
						return Bs(), a = [], b = new Jr, ua(d), u(d, b.init(), 4);
					case 4:
						return c = Promise.resolve(), Mr(b, function(e, f) {
							c = c.then(function() {
								var g;
								return K(function(h) {
									if (1 == h.g) return u(h, f.getAllManifests(), 2);
									g = h.h;
									g.forEach(function(k, l) {
										var m = ss(new bs("manifest", e.Aa, e.ka, l), k);
										a.push(m)
									});
									z(h)
								})
							})
						}), u(d, c, 2);
					case 2:
						return wa(d), u(d, b.destroy(), 6);
					case 6:
						xa(d, 3);
						break;
					case 3:
						return d["return"](a)
				}
			})
		}

		function Cs(a, b, c, d) {
			var e, f, g, h, k;
			return K(function(l) {
				if (1 == l.g) return e = null, f = a.g, g = {
					networkingEngine: f,
					modifyManifestRequest: function() {},
					modifySegmentRequest: function() {},
					filter: function() {
						return Promise.resolve()
					},
					makeTextStreamsForClosedCaptions: function() {},
					onTimelineRegionAdded: function() {},
					onEvent: function() {},
					onError: function(m) {
						e = m
					},
					isLowLatencyMode: function() {
						return !1
					},
					isAutoLowLatencyMode: function() {
						return !1
					},
					enableLowLatencyMode: function() {}
				}, c.configure(d.manifest), Ds(a), u(l, c.start(b,
					g), 2);
				if (3 != l.g) return h = l.h, Ds(a), k = Zs(h), u(l, Promise.all(pf(k, function(m) {
					return m.createSegmentIndex()
				})), 3);
				Ds(a);
				if (e) throw e;
				return l["return"](h)
			})
		}

		function Es(a, b, c, d) {
			var e;
			return K(function(f) {
				switch (f.g) {
					case 1:
						return e = new uf({
							kb: a.g,
							onError: c,
							Vc: function() {},
							onExpirationUpdated: function() {},
							onEvent: function() {}
						}), e.configure(d.drm), u(f, zf(e, b.variants, d.offline.usePersistentLicense), 2);
					case 2:
						return u(f, Pf(e), 3);
					case 3:
						return u(f, Of(e), 4);
					case 4:
						return f["return"](e)
				}
			})
		}

		function Ps(a, b, c, d) {
			var e = new Map,
				f = Zs(c),
				g = new Map;
			f = t(f);
			for (var h = f.next(); !h.done; h = f.next()) {
				h = h.value;
				var k = $s(a, b, c, h, d, e);
				g.set(h.id, k)
			}
			a = t(c.variants);
			for (b = a.next(); !b.done; b = a.next()) b = b.value, b.audio && g.get(b.audio.id).variantIds.push(b.id), b.video && g.get(b.video.id).variantIds.push(b.id);
			return {
				streams: Array.from(g.values()),
				ce: Array.from(e.values())
			}
		}

		function $s(a, b, c, d, e, f) {
			var g = {
					id: d.id,
					originalId: d.originalId,
					primary: d.primary,
					type: d.type,
					mimeType: d.mimeType,
					codecs: d.codecs,
					frameRate: d.frameRate,
					pixelAspectRatio: d.pixelAspectRatio,
					hdr: d.hdr,
					kind: d.kind,
					language: d.language,
					label: d.label,
					width: d.width || null,
					height: d.height || null,
					encrypted: d.encrypted,
					keyIds: d.keyIds,
					segments: [],
					variantIds: [],
					roles: d.roles,
					forced: d.forced,
					channelsCount: d.channelsCount,
					audioSamplingRate: d.audioSamplingRate,
					spatialAudio: d.spatialAudio,
					closedCaptions: d.closedCaptions,
					tilesLayout: d.tilesLayout
				},
				h = e.offline.numberOfParallelDownloads,
				k = 0;
			at(d, c.presentationTimeline.Qa(), function(l) {
				var m = or(l),
					p = void 0;
				if (!f.has(m)) {
					var n = l.endTime - l.startTime;
					n = ws(b, d.id) * n;
					n = rr(a.g, n);
					f.set(m, new nr(l, n, k, !1))
				}
				l.i && (p = or(l.i), f.has(p) || (n = .5 * ws(b, d.id), n = rr(a.g, n), f.set(p, new nr(l.i, n, k, !0))));
				g.segments.push({
					pendingInitSegmentRefId: p,
					initSegmentKey: p ? 0 : null,
					startTime: l.startTime,
					endTime: l.endTime,
					appendWindowStart: l.appendWindowStart,
					appendWindowEnd: l.appendWindowEnd,
					timestampOffset: l.timestampOffset,
					tilesLayout: l.tilesLayout,
					pendingSegmentRefId: m,
					dataKey: 0
				});
				k = (k + 1) % h
			});
			return g
		}

		function at(a, b, c) {
			b = a.segmentIndex.find(b);
			if (null != b)
				for (var d = a.segmentIndex.get(b); d;) c(d), d = a.segmentIndex.get(++b)
		}

		function Ds(a) {
			if (a.l.g) throw new N(2, 9, 7001);
		}

		function Bs() {
			if (!ys()) throw new N(2, 9, 9E3);
		}

		function Qs(a, b) {
			return K(function(c) {
				if (1 == c.g) return a.i.push(b), ua(c), u(c, b, 4);
				if (2 != c.g) return c["return"](c.h);
				wa(c);
				eb(a.i, b);
				return xa(c, 0)
			})
		}

		function As(a, b) {
			var c = b.promise;
			a.i.push(c);
			return b["finally"](function() {
				eb(a.i, c)
			})
		}

		function Ws(a) {
			var b = new Set;
			a = t(a.streams);
			for (var c = a.next(); !c.done; c = a.next()) {
				c = t(c.value.segments);
				for (var d = c.next(); !d.done; d = c.next()) d = d.value, null != d.initSegmentKey && b.add(d.initSegmentKey), b.add(d.dataKey)
			}
			return Array.from(b)
		}

		function Vs(a, b, c, d) {
			var e, f, g;
			return K(function(h) {
				if (1 == h.g) {
					if (!d.drmInfo) return h["return"]();
					e = Pr(c);
					f = d.sessionIds.map(function(k) {
						return {
							sessionId: k,
							keySystem: d.drmInfo.keySystem,
							licenseUri: d.drmInfo.licenseServerUri,
							serverCertificate: d.drmInfo.serverCertificate,
							audioCapabilities: Us(d, !1),
							videoCapabilities: Us(d, !0)
						}
					});
					return u(h, ns(b, a, f), 2)
				}
				return 3 != h.g ? (g = h.h, u(h, e.remove(g), 3)) : u(h, e.add(f.filter(function(k) {
					return !g.includes(k.sessionId)
				})), 0)
			})
		}

		function Zs(a) {
			for (var b = new Set, c = t(a.textStreams), d = c.next(); !d.done; d = c.next()) b.add(d.value);
			c = t(a.imageStreams);
			for (d = c.next(); !d.done; d = c.next()) b.add(d.value);
			a = t(a.variants);
			for (c = a.next(); !c.done; c = a.next()) c = c.value, c.audio && b.add(c.audio), c.video && b.add(c.video);
			return b
		}

		function Ns(a) {
			a.variants.map(function(f) {
				return f.video
			});
			var b = new Set(a.variants.map(function(f) {
				return f.audio
			}));
			a = a.textStreams;
			for (var c = t(b), d = c.next(); !d.done; d = c.next()) {
				d = t(b);
				for (var e = d.next(); !e.done; e = d.next());
			}
			b = t(a);
			for (c = b.next(); !c.done; c = b.next())
				for (c = t(a), d = c.next(); !d.done; d = c.next());
		}
		M("shaka.offline.Storage", xs);
		xs.deleteAll = function() {
			var a;
			return K(function(b) {
				return 1 == b.g ? (a = new Jr, ua(b), u(b, Qr(a), 2)) : 5 != b.g ? (wa(b), u(b, a.destroy(), 5)) : xa(b, 0)
			})
		};
		xs.prototype.list = xs.prototype.list;
		xs.prototype.removeEmeSessions = xs.prototype.Wf;
		xs.prototype.remove = xs.prototype.remove;
		xs.prototype.store = xs.prototype.store;
		xs.prototype.getNetworkingEngine = xs.prototype.dc;
		xs.prototype.getConfiguration = xs.prototype.getConfiguration;
		xs.prototype.configure = xs.prototype.configure;
		xs.prototype.destroy = xs.prototype.destroy;
		xs.support = ys;
		var Os = (new Map).set("org.w3.clearkey", "1077efecc0b24d02ace33c1e52e2fb4b").set("com.widevine.alpha", "edef8ba979d64acea3c827dcd51d21ed").set("com.microsoft.playready", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.recommendation", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.software", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.hardware", "9a04f07998404286ab92e65be0885f95").set("com.adobe.primetime", "f239e769efa348509c16a903c6932efb");
		lm.offline = ys;

		function bt() {}

		function ct(a, b) {
			for (var c = {
					priority: b || 0,
					Ve: a
				}, d = 0; d < dt.length; d++)
				if (dt[d].priority < c.priority) {
					dt.splice(d, 0, c);
					return
				} dt.push(c)
		}
		M("shaka.polyfill", bt);
		bt.register = ct;
		bt.installAll = function() {
			for (var a = t(dt), b = a.next(); !b.done; b = a.next()) {
				b = b.value;
				try {
					b.Ve()
				} catch (c) {
					Va("Error installing polyfill!", c)
				}
			}
		};
		var dt = [];

		function et() {}

		function ft() {
			if (!Object.getOwnPropertyDescriptor(Element.prototype, "ariaHidden"))
				for (var a = t(["ariaHidden", "ariaLabel", "ariaPressed", "ariaSelected"]), b = a.next(); !b.done; b = a.next()) gt(b.value)
		}

		function gt(a) {
			var b = "aria-" + a.toLowerCase().replace(/^aria/, "");
			Object.defineProperty(Element.prototype, a, {
				get: function() {
					return this.getAttribute(b)
				},
				set: function(c) {
					null == c || void 0 == c ? this.removeAttribute(b) : this.setAttribute(b, c)
				}
			})
		}
		bt.Aria = et;
		et.install = ft;
		ct(ft);

		function ht() {}

		function it() {
			jt()
		}
		bt.EncryptionScheme = ht;
		ht.install = it;
		ct(it, -2);

		function kt() {}

		function lt() {
			if (window.Document) {
				var a = Element.prototype;
				a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
				a = Document.prototype;
				a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitCancelFullScreen;
				"fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
						get: function() {
							return document.mozFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement
						}
					}),
					Object.defineProperty(document, "fullscreenEnabled", {
						get: function() {
							return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
						}
					}));
				document.addEventListener("webkitfullscreenchange", mt);
				document.addEventListener("webkitfullscreenerror", mt);
				document.addEventListener("mozfullscreenchange", mt);
				document.addEventListener("mozfullscreenerror", mt);
				document.addEventListener("MSFullscreenChange", mt);
				document.addEventListener("MSFullscreenError", mt)
			}
		}

		function mt(a) {
			var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(),
				c = document.createEvent("Event");
			c.initEvent(b, a.bubbles, a.cancelable);
			a.target.dispatchEvent(c)
		}
		bt.Fullscreen = kt;
		kt.install = lt;
		ct(lt);

		function nt() {}

		function ot() {
			var a = !0;
			if (yc() || uc("PlayStation 5") || zc() || xc()) a = !1;
			xc() && uc("Android") && (a = !0);
			a && navigator.mediaCapabilities || (navigator.mediaCapabilities || (navigator.mediaCapabilities = {}), pt = navigator.mediaCapabilities, navigator.mediaCapabilities.decodingInfo = qt)
		}

		function qt(a) {
			var b, c, d, e, f, g, h, k, l, m, p, n, q, w, y, x;
			return K(function(v) {
				switch (v.g) {
					case 1:
						b = {
							supported: !1,
							powerEfficient: !0,
							smooth: !0,
							keySystemAccess: null,
							configuration: a
						};
						if (!a) return v["return"](b);
						if ("media-source" == a.type) {
							if (!qc() || a.video && (c = a.video.contentType, d = MediaSource.isTypeSupported(c), !d) || a.audio && (e = a.audio.contentType, f = MediaSource.isTypeSupported(e), !f)) return v["return"](b)
						} else if ("file" == a.type) {
							if (a.video && (g = a.video.contentType, h = rc(g), !h) || a.audio && (k = a.audio.contentType,
									l = rc(k), !l)) return v["return"](b)
						} else return v["return"](b);
						if (!a.keySystemConfiguration) return b.supported = !0, v["return"](Promise.resolve(b));
						m = a.keySystemConfiguration;
						p = [];
						n = [];
						m.audio && (q = {
							robustness: m.audio.robustness || "",
							contentType: a.audio.contentType
						}, p.push(q));
						m.video && (w = {
							robustness: m.video.robustness || "",
							contentType: a.video.contentType
						}, n.push(w));
						y = {
							initDataTypes: [m.initDataType],
							distinctiveIdentifier: m.distinctiveIdentifier,
							persistentState: m.persistentState,
							sessionTypes: m.sessionTypes
						};
						p.length && (y.audioCapabilities = p);
						n.length && (y.videoCapabilities = n);
						B(v, 3);
						return u(v, navigator.requestMediaKeySystemAccess(m.keySystem, [y]), 5);
					case 5:
						x = v.h;
						va(v, 4);
						break;
					case 3:
						F(v);
					case 4:
						x && (b.supported = !0, b.keySystemAccess = x);
					case 2:
						return v["return"](b)
				}
			})
		}
		bt.MediaCapabilities = nt;
		nt.install = ot;
		var pt = null;
		nt.originalMcap = pt;
		ct(ot, -1);

		function rt() {}

		function st() {
			var a = Ac();
			window.MediaSource && (window.cast && cast.__platform__ && cast.__platform__.canDisplayType ? tt() : a ? 12 >= a ? (ut(), vt()) : ut() : (uc("Tizen 2") || uc("Tizen 3") || uc("Tizen 4")) && wt());
			window.MediaSource && MediaSource.isTypeSupported('video/webm; codecs="vp9"') && !MediaSource.isTypeSupported('video/webm; codecs="vp09.00.10.08"') && xt()
		}

		function ut() {
			var a = MediaSource.prototype.addSourceBuffer;
			MediaSource.prototype.addSourceBuffer = function() {
				var b = a.apply(this, Ha.apply(0, arguments));
				b.abort = function() {};
				return b
			}
		}

		function vt() {
			var a = SourceBuffer.prototype.remove;
			SourceBuffer.prototype.remove = function(b, c) {
				return a.call(this, b, c - .001)
			}
		}

		function wt() {
			var a = MediaSource.isTypeSupported;
			MediaSource.isTypeSupported = function(b) {
				return "opus" != bd(b)[0] && a(b)
			}
		}

		function tt() {
			var a = MediaSource.isTypeSupported;
			MediaSource.isTypeSupported = function(b) {
				var c = b.split(/ *; */);
				c.shift();
				return c.some(function(d) {
					return d.startsWith("codecs=")
				}) ? cast.__platform__.canDisplayType(b) : a(b)
			}
		}

		function xt() {
			var a = MediaSource.isTypeSupported;
			uc("Web0S") || (MediaSource.isTypeSupported = function(b) {
				var c = b.split(/ *; */),
					d = c.findIndex(function(g) {
						return g.startsWith("codecs=")
					});
				if (0 > d) return a(b);
				var e = c[d].replace("codecs=", "").replace(/"/g, "").split(/\s*,\s*/),
					f = e.findIndex(function(g) {
						return g.startsWith("vp09")
					});
				0 <= f && (e[f] = "vp9", c[d] = 'codecs="' + e.join(",") + '"', b = c.join("; "));
				return a(b)
			})
		}
		bt.MediaSource = rt;
		rt.install = st;
		ct(st);

		function yt() {}

		function zt() {
			screen.orientation || void 0 != window.orientation && At()
		}

		function At() {
			function a() {
				switch (window.orientation) {
					case -90:
						b.type = "landscape-secondary";
						b.angle = 270;
						break;
					case 0:
						b.type = "portrait-primary";
						b.angle = 0;
						break;
					case 90:
						b.type = "landscape-primary";
						b.angle = 90;
						break;
					case 180:
						b.type = "portrait-secondary", b.angle = 180
				}
			}
			var b = new Bt;
			screen.orientation = b;
			a();
			window.addEventListener("orientationchange", function() {
				a();
				var c = new R("change");
				b.dispatchEvent(c)
			})
		}
		bt.Orientation = yt;
		yt.install = zt;

		function Bt() {
			Se.call(this);
			this.type = "";
			this.angle = 0
		}
		pa(Bt, Se);
		Bt.prototype.lock = function(a) {
			function b(d) {
				return screen.lockOrientation ? screen.lockOrientation(d) : screen.mozLockOrientation ? screen.mozLockOrientation(d) : screen.msLockOrientation ? screen.msLockOrientation(d) : !1
			}
			var c = !1;
			switch (a) {
				case "natural":
					c = b("default");
					break;
				case "any":
					c = !0;
					this.unlock();
					break;
				default:
					c = b(a)
			}
			if (c) return Promise.resolve();
			a = Error("screen.orientation.lock() is not available on this device");
			a.name = "NotSupportedError";
			a.code = DOMException.NOT_SUPPORTED_ERR;
			return Promise.reject(a)
		};
		Bt.prototype.unlock = function() {
			screen.unlockOrientation ? screen.unlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
		};
		ct(zt);

		function Ct() {}

		function Dt() {
			!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (navigator.requestMediaKeySystemAccess = Et, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Ft, window.MediaKeys = Gt, window.MediaKeySystemAccess = Ht, window.shakaMediaKeysPolyfill = !0)
		}

		function Et() {
			return Promise.reject(Error("The key system specified is not supported."))
		}

		function Ft(a) {
			return null == a ? Promise.resolve() : Promise.reject(Error("MediaKeys not supported."))
		}
		bt.PatchedMediaKeysNop = Ct;
		Ct.install = Dt;

		function Gt() {
			throw new TypeError("Illegal constructor.");
		}
		Gt.prototype.createSession = function() {};
		Gt.prototype.setServerCertificate = function() {};

		function Ht() {
			this.keySystem = "";
			throw new TypeError("Illegal constructor.");
		}
		Ht.prototype.getConfiguration = function() {};
		Ht.prototype.createMediaKeys = function() {};
		ct(Dt, -10);

		function It() {}

		function Jt() {
			if (!(!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration)) {
				if (HTMLMediaElement.prototype.webkitGenerateKeyRequest) Kt = "webkit";
				else if (!HTMLMediaElement.prototype.generateKeyRequest) return;
				navigator.requestMediaKeySystemAccess = Lt;
				delete HTMLMediaElement.prototype.mediaKeys;
				HTMLMediaElement.prototype.mediaKeys = null;
				HTMLMediaElement.prototype.setMediaKeys = Mt;
				window.MediaKeys = Nt;
				window.MediaKeySystemAccess = Ot;
				window.shakaMediaKeysPolyfill = !0
			}
		}

		function Pt(a) {
			var b = Kt;
			return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a
		}

		function Lt(a, b) {
			try {
				var c = new Ot(a, b);
				return Promise.resolve(c)
			} catch (d) {
				return Promise.reject(d)
			}
		}

		function Mt(a) {
			var b = this.mediaKeys;
			b && b != a && Qt(b, null);
			delete this.mediaKeys;
			(this.mediaKeys = a) && Qt(a, this);
			return Promise.resolve()
		}
		bt.PatchedMediaKeysWebkit = It;
		It.install = Jt;

		function Ot(a, b) {
			this.g = this.keySystem = a;
			var c = !1;
			"org.w3.clearkey" == a && (this.g = "webkit-org.w3.clearkey", c = !1);
			var d = !1;
			var e = document.getElementsByTagName("video");
			e = e.length ? e[0] : document.createElement("video");
			for (var f = t(b), g = f.next(); !g.done; g = f.next()) {
				g = g.value;
				var h = {
						audioCapabilities: [],
						videoCapabilities: [],
						persistentState: "optional",
						distinctiveIdentifier: "optional",
						initDataTypes: g.initDataTypes,
						sessionTypes: ["temporary"],
						label: g.label
					},
					k = !1;
				if (g.audioCapabilities)
					for (var l = t(g.audioCapabilities),
							m = l.next(); !m.done; m = l.next()) m = m.value, m.contentType && (k = !0, e.canPlayType(m.contentType.split(";")[0], this.g) && (h.audioCapabilities.push(m), d = !0));
				if (g.videoCapabilities)
					for (l = t(g.videoCapabilities), m = l.next(); !m.done; m = l.next()) m = m.value, m.contentType && (k = !0, e.canPlayType(m.contentType, this.g) && (h.videoCapabilities.push(m), d = !0));
				k || (d = e.canPlayType("video/mp4", this.g) || e.canPlayType("video/webm", this.g));
				"required" == g.persistentState && (c ? (h.persistentState = "required", h.sessionTypes = ["persistent-license"]) :
					d = !1);
				if (d) {
					this.h = h;
					return
				}
			}
			c = "Unsupported keySystem";
			if ("org.w3.clearkey" == a || "com.widevine.alpha" == a) c = "None of the requested configurations were supported.";
			c = Error(c);
			c.name = "NotSupportedError";
			c.code = DOMException.NOT_SUPPORTED_ERR;
			throw c;
		}
		Ot.prototype.createMediaKeys = function() {
			var a = new Nt(this.g);
			return Promise.resolve(a)
		};
		Ot.prototype.getConfiguration = function() {
			return this.h
		};

		function Nt(a) {
			this.l = a;
			this.h = null;
			this.g = new kf;
			this.i = [];
			this.j = new Map
		}

		function Qt(a, b) {
			a.h = b;
			a.g.oc();
			var c = Kt;
			b && (a.g.B(b, c + "needkey", function(d) {
				var e = new CustomEvent("encrypted");
				e.initDataType = "cenc";
				e.initData = Gb(d.initData);
				a.h.dispatchEvent(e)
			}), a.g.B(b, c + "keymessage", function(d) {
				var e = Rt(a, d.sessionId);
				e && (d = (new Map).set("messageType", void 0 == e.keyStatuses.Oc() ? "licenserequest" : "licenserenewal").set("message", d.message), d = new R("message", d), e.h && (e.h.resolve(), e.h = null), e.dispatchEvent(d))
			}), a.g.B(b, c + "keyadded", function(d) {
				if (d = Rt(a, d.sessionId)) St(d, "usable"),
					d.g && d.g.resolve(), d.g = null
			}), a.g.B(b, c + "keyerror", function(d) {
				var e = Rt(a, d.sessionId);
				e && e.handleError(d)
			}))
		}
		Nt.prototype.createSession = function(a) {
			a = a || "temporary";
			if ("temporary" != a && "persistent-license" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
			var b = this.h || document.createElement("video");
			b.src || (b.src = "about:blank");
			a = new Tt(b, this.l, a);
			this.i.push(a);
			return a
		};
		Nt.prototype.setServerCertificate = function() {
			return Promise.resolve(!1)
		};

		function Rt(a, b) {
			var c = a.j.get(b);
			return c ? c : (c = a.i.shift()) ? (c.sessionId = b, a.j.set(b, c), c) : null
		}

		function Tt(a, b, c) {
			Se.call(this);
			this.j = a;
			this.m = !1;
			this.g = this.h = null;
			this.i = b;
			this.l = c;
			this.sessionId = "";
			this.expiration = NaN;
			this.closed = new nc;
			this.keyStatuses = new Ut
		}
		pa(Tt, Se);
		r = Tt.prototype;
		r.handleError = function(a) {
			var b = Error("EME v0.1b key error"),
				c = a.errorCode;
			c.systemCode = a.systemCode;
			b.errorCode = c;
			!a.sessionId && this.h ? (45 == a.systemCode && (b.message = "Unsupported session type."), this.h.reject(b), this.h = null) : a.sessionId && this.g ? (this.g.reject(b), this.g = null) : (b = a.systemCode, a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? St(this, "output-restricted") : 1 == b ? St(this, "expired") : St(this, "internal-error"))
		};

		function Vt(a, b, c) {
			if (a.m) return Promise.reject(Error("The session is already initialized."));
			a.m = !0;
			try {
				if ("persistent-license" == a.l)
					if (c) var d = Fb(Jc("LOAD_SESSION|" + c));
					else {
						var e = Jc("PERSISTENT|");
						d = Sc(e, b)
					}
				else d = Fb(b)
			} catch (g) {
				return Promise.reject(g)
			}
			a.h = new nc;
			var f = Pt("generateKeyRequest");
			try {
				a.j[f](a.i, d)
			} catch (g) {
				if ("InvalidStateError" != g.name) return a.h = null, Promise.reject(g);
				(new O(function() {
					try {
						a.j[f](a.i, d)
					} catch (h) {
						a.h.reject(h), a.h = null
					}
				})).S(.01)
			}
			return a.h
		}

		function Wt(a, b, c) {
			if (a.g) a.g.then(function() {
				return Wt(a, b, c)
			})["catch"](function() {
				return Wt(a, b, c)
			});
			else {
				a.g = b;
				if ("webkit-org.w3.clearkey" == a.i) {
					var d = Fc(c);
					var e = JSON.parse(d);
					"oct" != e.keys[0].kty && (a.g.reject(Error("Response is not a valid JSON Web Key Set.")), a.g = null);
					d = Pc(e.keys[0].k);
					e = Pc(e.keys[0].kid)
				} else d = Fb(c), e = null;
				var f = Pt("addKey");
				try {
					a.j[f](a.i, d, e, a.sessionId)
				} catch (g) {
					a.g.reject(g), a.g = null
				}
			}
		}

		function St(a, b) {
			var c = a.keyStatuses;
			c.size = void 0 == b ? 0 : 1;
			c.g = b;
			c = new R("keystatuseschange");
			a.dispatchEvent(c)
		}
		r.generateRequest = function(a, b) {
			return Vt(this, b, null)
		};
		r.load = function(a) {
			return "persistent-license" == this.l ? Vt(this, null, a) : Promise.reject(Error("Not a persistent session."))
		};
		r.update = function(a) {
			var b = new nc;
			Wt(this, b, a);
			return b
		};
		r.close = function() {
			if ("persistent-license" != this.l) {
				if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
				var a = Pt("cancelKeyRequest");
				try {
					this.j[a](this.i, this.sessionId)
				} catch (b) {}
			}
			this.closed.resolve();
			return this.closed
		};
		r.remove = function() {
			return "persistent-license" != this.l ? Promise.reject(Error("Not a persistent session.")) : this.close()
		};

		function Ut() {
			this.size = 0;
			this.g = void 0
		}
		r = Ut.prototype;
		r.Oc = function() {
			return this.g
		};
		r.forEach = function(a) {
			this.g && a(this.g, gg.value())
		};
		r.get = function(a) {
			if (this.has(a)) return this.g
		};
		r.has = function(a) {
			var b = gg.value();
			return this.g && Db(a, b) ? !0 : !1
		};
		r.entries = function() {};
		r.keys = function() {};
		r.values = function() {};
		var Kt = "";
		ct(Jt);

		function Xt() {}

		function Yt() {
			if (window.HTMLVideoElement) {
				var a = HTMLVideoElement.prototype;
				a.requestPictureInPicture && document.exitPictureInPicture || !a.webkitSupportsPresentationMode || (document.pictureInPictureEnabled = !0, document.pictureInPictureElement = null, a.requestPictureInPicture = Zt, Object.defineProperty(a, "disablePictureInPicture", {
					get: $t,
					set: au,
					enumerable: !0,
					configurable: !0
				}), document.exitPictureInPicture = bu, document.addEventListener("webkitpresentationmodechanged", cu, !0))
			}
		}

		function cu(a) {
			a = a.target;
			if ("picture-in-picture" == a.webkitPresentationMode) {
				document.pictureInPictureElement = a;
				var b = new Event("enterpictureinpicture");
				a.dispatchEvent(b)
			} else document.pictureInPictureElement == a && (document.pictureInPictureElement = null), b = new Event("leavepictureinpicture"), a.dispatchEvent(b)
		}

		function Zt() {
			return this.webkitSupportsPresentationMode("picture-in-picture") ? (this.webkitSetPresentationMode("picture-in-picture"), document.pictureInPictureElement = this, Promise.resolve()) : Promise.reject(Error("PiP not allowed by video element"))
		}

		function bu() {
			var a = document.pictureInPictureElement;
			return a ? (a.webkitSetPresentationMode("inline"), document.pictureInPictureElement = null, Promise.resolve()) : Promise.reject(Error("No picture in picture element found"))
		}

		function $t() {
			return this.hasAttribute("disablePictureInPicture") ? !0 : !this.webkitSupportsPresentationMode("picture-in-picture")
		}

		function au(a) {
			a ? this.setAttribute("disablePictureInPicture", "") : this.removeAttribute("disablePictureInPicture")
		}
		bt.PiPWebkit = Xt;
		Xt.install = Yt;
		ct(Yt);

		function du() {}

		function eu() {
			window.crypto && ("randomUUID" in window.crypto || (window.crypto.randomUUID = fu))
		}

		function fu() {
			var a = URL.createObjectURL(new Blob),
				b = a.toString();
			URL.revokeObjectURL(a);
			return b.substr(b.lastIndexOf("/") + 1)
		}
		bt.RandomUUID = du;
		du.install = eu;
		ct(eu);

		function gu() {}

		function hu() {
			navigator.storage && navigator.storage.estimate || !navigator.webkitTemporaryStorage || !navigator.webkitTemporaryStorage.queryUsageAndQuota || ("storage" in navigator || (navigator.storage = {}), navigator.storage.estimate = iu)
		}

		function iu() {
			return new Promise(function(a, b) {
				navigator.webkitTemporaryStorage.queryUsageAndQuota(function(c, d) {
					a({
						usage: c,
						quota: d
					})
				}, b)
			})
		}
		bt.StorageEstimate = gu;
		gu.install = hu;
		ct(hu);

		function ju() {}

		function ku() {
			var a = Symbol.prototype;
			"description" in a || Object.defineProperty(a, "description", {
				get: lu
			})
		}

		function lu() {
			var a = /\((.*)\)/.exec(this.toString());
			return a ? a[1] : void 0
		}
		bt.Symbol = ju;
		ju.install = ku;
		ct(ku);

		function mu() {}

		function nu() {
			if (window.HTMLMediaElement) {
				var a = HTMLMediaElement.prototype.play;
				HTMLMediaElement.prototype.play = function() {
					var b = a.apply(this);
					b && b["catch"](function() {});
					return b
				}
			}
		}
		bt.VideoPlayPromise = mu;
		mu.install = nu;
		ct(nu);

		function ou() {}

		function pu() {
			if (window.HTMLVideoElement) {
				var a = HTMLVideoElement.prototype;
				!a.getVideoPlaybackQuality && ("webkitDroppedFrameCount" in a || wc()) && (a.getVideoPlaybackQuality = qu)
			}
		}

		function qu() {
			return {
				droppedVideoFrames: this.webkitDroppedFrameCount,
				totalVideoFrames: this.webkitDecodedFrameCount,
				corruptedVideoFrames: 0,
				creationTime: NaN,
				totalFrameDelay: 0
			}
		}
		bt.VideoPlaybackQuality = ou;
		ou.install = pu;
		ct(pu);

		function ru() {}

		function su() {
			if (!window.VTTCue && window.TextTrackCue) {
				var a = null,
					b = TextTrackCue.length;
				if (3 == b) a = tu;
				else if (6 == b) a = uu;
				else {
					try {
						var c = !!tu(1, 2, "")
					} catch (d) {
						c = !1
					}
					c && (a = tu)
				}
				a && (window.VTTCue = function(d, e, f) {
					return a(d, e, f)
				})
			}
		}

		function tu(a, b, c) {
			return new window.TextTrackCue(a, b, c)
		}

		function uu(a, b, c) {
			return new window.TextTrackCue(a + "-" + b + "-" + c, a, b, c)
		}
		bt.VTTCue = ru;
		ru.install = su;
		ct(su);

		function vu() {}
		vu.prototype.parseInit = function() {};
		vu.prototype.setSequenceMode = function() {};
		vu.prototype.parseMedia = function(a, b) {
			var c = null,
				d = [],
				e = Fc(a).split(/\r?\n/);
			e = t(e);
			for (var f = e.next(); !f.done; f = e.next())
				if ((f = f.value) && !/^\s+$/.test(f) && (f = wu.exec(f))) {
					var g = xu.exec(f[1]);
					g = 60 * parseInt(g[1], 10) + parseFloat(g[2].replace(",", "."));
					f = new ib(g, b.segmentEnd ? b.segmentEnd : g + 2, f[2]);
					c && (c.endTime = g, d.push(c));
					c = f
				} c && d.push(c);
			return d
		};
		M("shaka.text.LrcTextParser", vu);
		vu.prototype.parseMedia = vu.prototype.parseMedia;
		vu.prototype.setSequenceMode = vu.prototype.setSequenceMode;
		vu.prototype.parseInit = vu.prototype.parseInit;
		var wu = /^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)/,
			xu = /^(\d+):(\d{1,2}(?:[.,]\d{1,3})?)$/;
		fd["application/x-subtitle-lrc"] = function() {
			return new vu
		};

		function yu() {}
		yu.prototype.parseInit = function() {};
		yu.prototype.setSequenceMode = function() {};
		yu.prototype.parseMedia = function(a, b) {
			var c = Fc(a),
				d = [],
				e = new DOMParser,
				f = null;
			if ("" == c) return d;
			try {
				f = e.parseFromString(c, "text/xml")
			} catch (C) {
				throw new N(2, 2, 2005, "Failed to parse TTML.");
			}
			if (f) {
				if (c = f.getElementsByTagName("parsererror")[0]) throw new N(2, 2, 2005, c.textContent);
				var g = f.getElementsByTagName("tt")[0];
				if (!g) throw new N(2, 2, 2005, "TTML does not contain <tt> tag.");
				f = g.getElementsByTagName("body")[0];
				if (!f) return [];
				var h = Ln(g, zu, "frameRate"),
					k = Ln(g, zu, "subFrameRate"),
					l = Ln(g, zu, "frameRateMultiplier"),
					m = Ln(g, zu, "tickRate"),
					p = Ln(g, zu, "cellResolution");
				c = g.getAttribute("xml:space") || "default";
				e = Ln(g, Au, "extent");
				if ("default" != c && "preserve" != c) throw new N(2, 2, 2005, "Invalid xml:space value: " + c);
				c = "default" == c;
				h = new Bu(h, k, l, m);
				p = p ? (p = /^(\d+) (\d+)$/.exec(p)) ? {
					columns: parseInt(p[1], 10),
					rows: parseInt(p[2], 10)
				} : null : null;
				k = (k = g.getElementsByTagName("metadata")[0]) ? Jn(k) : [];
				l = Array.from(g.getElementsByTagName("style"));
				g = Array.from(g.getElementsByTagName("region"));
				m = [];
				for (var n = t(g), q = n.next(); !q.done; q =
					n.next()) {
					var w = q.value;
					q = new kb;
					var y = w.getAttribute("xml:id");
					if (y) {
						q.id = y;
						var x = null;
						e && (x = Cu.exec(e) || Du.exec(e));
						y = x ? Number(x[1]) : null;
						x = x ? Number(x[2]) : null;
						var v, D;
						if (v = Eu(w, l, "extent")) v = (D = Cu.exec(v)) || Du.exec(v), null != v && (q.width = Number(v[1]), q.height = Number(v[2]), D || (null != y && (q.width = 100 * q.width / y), null != x && (q.height = 100 * q.height / x)), q.widthUnits = D || null != y ? Ab : 0, q.heightUnits = D || null != x ? Ab : 0);
						if (w = Eu(w, l, "origin")) v = (D = Cu.exec(w)) || Du.exec(w), null != v && (q.viewportAnchorX = Number(v[1]), q.viewportAnchorY =
							Number(v[2]), D || (null != x && (q.viewportAnchorY = 100 * q.viewportAnchorY / x), null != y && (q.viewportAnchorX = 100 * q.viewportAnchorX / y)), q.viewportAnchorUnits = D || null != y ? Ab : 0)
					} else q = null;
					q && m.push(q)
				}
				if (Gn(f, "p").length) throw new N(2, 2, 2001, "<p> can only be inside <div> in TTML");
				e = t(Gn(f, "div"));
				for (n = e.next(); !n.done; n = e.next())
					if (Gn(n.value, "span").length) throw new N(2, 2, 2001, "<span> can only be inside <p> in TTML");
				(f = Fu(f, b.periodStart, h, k, l, g, m, c, p, null, !1)) && d.push(f)
			}
			return d
		};

		function Fu(a, b, c, d, e, f, g, h, k, l, m) {
			var p = a.parentNode;
			if (a.nodeType == Node.COMMENT_NODE) return null;
			if (a.nodeType == Node.TEXT_NODE) {
				if (!m) return null;
				var n = document.createElement("span");
				n.textContent = a.textContent
			} else n = a;
			for (var q = null, w = t(Gu), y = w.next(); !y.done && !(q = Hu(n, "backgroundImage", d, "#", y.value)[0]); y = w.next());
			w = m;
			if ("p" == a.nodeName || q) m = !0;
			h = "default" == (n.getAttribute("xml:space") || (h ? "default" : "preserve"));
			y = Array.from(n.childNodes).every(function(A) {
				return A.nodeType == Node.TEXT_NODE
			});
			a = [];
			if (!y)
				for (var x = t(n.childNodes), v = x.next(); !v.done; v = x.next())(v = Fu(v.value, b, c, d, e, f, g, h, k, n, m)) && a.push(v);
			d = null != l;
			x = /\S/.test(n.textContent);
			var D = n.hasAttribute("begin") || n.hasAttribute("end") || n.hasAttribute("dur");
			if (!(D || x || "br" == n.tagName || 0 != a.length || d && !h)) return null;
			v = Iu(n, c);
			x = v.start;
			for (v = v.end; p && p.nodeType == Node.ELEMENT_NODE && "tt" != p.tagName;) v = Ju(p, c, x, v), x = v.start, v = v.end, p = p.parentNode;
			null == x && (x = 0);
			x += b;
			v = null == v ? Infinity : v + b;
			if (!D && 0 < a.length)
				for (x = Infinity, v = 0, b = t(a),
					c = b.next(); !c.done; c = b.next()) c = c.value, x = Math.min(x, c.startTime), v = Math.max(v, c.endTime);
			if ("br" == n.tagName) return e = new ib(x, v, ""), e.lineBreak = !0, e;
			b = "";
			y && (b = n.textContent, h && (b = b.trim(), b = b.replace(/\s+/g, " ")));
			b = new ib(x, v, b);
			b.nestedCues = a;
			m || (b.isContainer = !0);
			k && (b.cellResolution = k);
			k = Hu(n, "region", f, "")[0];
			if (n.hasAttribute("region") && k && k.getAttribute("xml:id")) {
				var C = k.getAttribute("xml:id");
				b.region = g.filter(function(A) {
					return A.id == C
				})[0]
			}
			g = k;
			l && d && !n.getAttribute("region") && !n.getAttribute("style") &&
				(g = Hu(l, "region", f, "")[0]);
			Ku(b, n, g, q, e, w, 0 == a.length);
			return b
		}

		function Ku(a, b, c, d, e, f, g) {
			f = f || g;
			"rtl" == Lu(b, c, e, "direction", f) && (a.direction = "rtl");
			g = Lu(b, c, e, "writingMode", f);
			"tb" == g || "tblr" == g ? a.writingMode = "vertical-lr" : "tbrl" == g ? a.writingMode = "vertical-rl" : "rltb" == g || "rl" == g ? a.direction = "rtl" : g && (a.direction = jb);
			(g = Lu(b, c, e, "textAlign", !0)) ? (a.positionAlign = Mu[g], a.lineAlign = Nu[g], a.textAlign = ub[g.toUpperCase()]) : a.textAlign = mb;
			if (g = Lu(b, c, e, "displayAlign", !0)) a.displayAlign = vb[g.toUpperCase()];
			if (g = Lu(b, c, e, "color", f)) a.color = g;
			if (g = Lu(b, c, e, "backgroundColor",
					f)) a.backgroundColor = g;
			if (g = Lu(b, c, e, "border", f)) a.border = g;
			if (g = Lu(b, c, e, "fontFamily", f)) a.fontFamily = g;
			(g = Lu(b, c, e, "fontWeight", f)) && "bold" == g && (a.fontWeight = 700);
			g = Lu(b, c, e, "wrapOption", f);
			a.wrapLine = g && "noWrap" == g ? !1 : !0;
			(g = Lu(b, c, e, "lineHeight", f)) && g.match(Ou) && (a.lineHeight = g);
			(g = Lu(b, c, e, "fontSize", f)) && (g.match(Ou) || g.match(Pu)) && (a.fontSize = g);
			if (g = Lu(b, c, e, "fontStyle", f)) a.fontStyle = zb[g.toUpperCase()];
			if (d) {
				g = d.getAttribute("imageType") || d.getAttribute("imagetype");
				var h = d.getAttribute("encoding");
				d = d.textContent.trim();
				"PNG" == g && "Base64" == h && d && (a.backgroundImage = "data:image/png;base64," + d)
			}
			if (d = Lu(b, c, e, "textOutline", f)) d = d.split(" "), d[0].match(Ou) ? a.textStrokeColor = a.color : (a.textStrokeColor = d[0], d.shift()), d[0] && d[0].match(Ou) ? a.textStrokeWidth = d[0] : a.textStrokeColor = "";
			(d = Lu(b, c, e, "letterSpacing", f)) && d.match(Ou) && (a.letterSpacing = d);
			(d = Lu(b, c, e, "linePadding", f)) && d.match(Ou) && (a.linePadding = d);
			if (f = Lu(b, c, e, "opacity", f)) a.opacity = parseFloat(f);
			(c = Eu(c, e, "textDecoration")) && Qu(a, c);
			(b =
				Ru(b, e, "textDecoration")) && Qu(a, b)
		}

		function Qu(a, b) {
			for (var c = t(b.split(" ")), d = c.next(); !d.done; d = c.next()) switch (d.value) {
				case "underline":
					a.textDecoration.includes("underline") || a.textDecoration.push("underline");
					break;
				case "noUnderline":
					a.textDecoration.includes("underline") && eb(a.textDecoration, "underline");
					break;
				case "lineThrough":
					a.textDecoration.includes("lineThrough") || a.textDecoration.push("lineThrough");
					break;
				case "noLineThrough":
					a.textDecoration.includes("lineThrough") && eb(a.textDecoration, "lineThrough");
					break;
				case "overline":
					a.textDecoration.includes("overline") ||
						a.textDecoration.push("overline");
					break;
				case "noOverline":
					a.textDecoration.includes("overline") && eb(a.textDecoration, "overline")
			}
		}

		function Lu(a, b, c, d, e) {
			e = void 0 === e ? !0 : e;
			return (a = Ru(a, c, d)) ? a : e ? Eu(b, c, d) : null
		}

		function Eu(a, b, c) {
			if (!a) return null;
			var d = Ln(a, Au, c);
			return d ? d : Su(a, b, c)
		}

		function Ru(a, b, c) {
			var d = Ln(a, Au, c);
			return d ? d : Su(a, b, c)
		}

		function Su(a, b, c) {
			a = Hu(a, "style", b, "");
			for (var d = null, e = 0; e < a.length; e++) {
				var f = Kn(a[e], "urn:ebu:tt:style", c);
				f || (f = Ln(a[e], Au, c));
				f || (f = Ru(a[e], b, c));
				f && (d = f)
			}
			return d
		}

		function Hu(a, b, c, d, e) {
			var f = [];
			if (!a || 1 > c.length) return f;
			var g = a;
			for (a = null; g && !(a = e ? Kn(g, e, b) : g.getAttribute(b)) && (g = g.parentNode, g instanceof Element););
			if (b = a)
				for (b = t(b.split(" ")), e = b.next(); !e.done; e = b.next())
					for (e = e.value, a = t(c), g = a.next(); !g.done; g = a.next())
						if (g = g.value, d + g.getAttribute("xml:id") == e) {
							f.push(g);
							break
						} return f
		}

		function Ju(a, b, c, d) {
			a = Iu(a, b);
			null == c ? c = a.start : null != a.start && (c += a.start);
			null == d ? d = a.end : null != a.start && (d += a.start);
			return {
				start: c,
				end: d
			}
		}

		function Iu(a, b) {
			var c = Tu(a.getAttribute("begin"), b),
				d = Tu(a.getAttribute("end"), b),
				e = Tu(a.getAttribute("dur"), b);
			null == d && null != e && (d = c + e);
			return {
				start: c,
				end: d
			}
		}

		function Tu(a, b) {
			var c = null;
			if (Uu.test(a)) {
				c = Uu.exec(a);
				var d = Number(c[1]),
					e = Number(c[2]),
					f = Number(c[3]),
					g = Number(c[4]);
				g += (Number(c[5]) || 0) / b.h;
				f += g / b.frameRate;
				c = f + 60 * e + 3600 * d
			} else if (Vu.test(a)) c = Wu(Vu, a);
			else if (Xu.test(a)) c = Wu(Xu, a);
			else if (Yu.test(a)) c = Yu.exec(a), c = Number(c[1]) / b.frameRate;
			else if (Zu.test(a)) c = Zu.exec(a), c = Number(c[1]) / b.g;
			else if ($u.test(a)) c = Wu($u, a);
			else if (a) throw new N(2, 2, 2001, "Could not parse cue time range in TTML");
			return c
		}

		function Wu(a, b) {
			var c = a.exec(b);
			return null == c || "" == c[0] ? null : (Number(c[4]) || 0) / 1E3 + (Number(c[3]) || 0) + 60 * (Number(c[2]) || 0) + 3600 * (Number(c[1]) || 0)
		}
		M("shaka.text.TtmlTextParser", yu);
		yu.prototype.parseMedia = yu.prototype.parseMedia;
		yu.prototype.setSequenceMode = yu.prototype.setSequenceMode;
		yu.prototype.parseInit = yu.prototype.parseInit;

		function Bu(a, b, c, d) {
			this.frameRate = Number(a) || 30;
			this.h = Number(b) || 1;
			this.g = Number(d);
			0 == this.g && (this.g = a ? this.frameRate * this.h : 1);
			c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= Number(a[1]) / Number(a[2]))
		}
		var Cu = /^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/,
			Pu = /^(\d{1,2}(?:\.\d+)?|100)%$/,
			Ou = /^(\d+px|\d+em|\d*\.?\d+c)$/,
			Du = /^(\d+)px (\d+)px$/,
			Uu = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
			Vu = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
			Xu = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
			Yu = /^(\d*(?:\.\d*)?)f$/,
			Zu = /^(\d*(?:\.\d*)?)t$/,
			$u = RegExp("^(?:(\\d*(?:\\.\\d*)?)h)?(?:(\\d*(?:\\.\\d*)?)m)?(?:(\\d*(?:\\.\\d*)?)s)?(?:(\\d*(?:\\.\\d*)?)ms)?$"),
			Nu = {
				left: pb,
				center: "center",
				right: "end",
				start: pb,
				end: "end"
			},
			Mu = {
				left: "line-left",
				center: "center",
				right: "line-right"
			},
			zu = ["http://www.w3.org/ns/ttml#parameter", "http://www.w3.org/2006/10/ttaf1#parameter"],
			Au = ["http://www.w3.org/ns/ttml#styling", "http://www.w3.org/2006/10/ttaf1#styling"],
			Gu = ["http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt", "http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt"];
		fd["application/ttml+xml"] = function() {
			return new yu
		};

		function av() {
			this.g = new yu
		}
		av.prototype.parseInit = function(a) {
			var b = !1;
			(new qg).box("moov", ug).box("trak", ug).box("mdia", ug).box("minf", ug).box("stbl", ug).U("stsd", wg).box("stpp", function(c) {
				b = !0;
				c.parser.stop()
			}).parse(a);
			if (!b) throw new N(2, 2, 2007);
		};
		av.prototype.setSequenceMode = function() {};
		av.prototype.parseMedia = function(a, b) {
			var c = this,
				d = !1,
				e = [];
			(new qg).box("mdat", xg(function(f) {
				d = !0;
				e = e.concat(c.g.parseMedia(f, b))
			})).parse(a, !1);
			if (!d) throw new N(2, 2, 2007);
			return e
		};
		M("shaka.text.Mp4TtmlParser", av);
		av.prototype.parseMedia = av.prototype.parseMedia;
		av.prototype.setSequenceMode = av.prototype.setSequenceMode;
		av.prototype.parseInit = av.prototype.parseInit;
		fd['application/mp4; codecs="stpp"'] = function() {
			return new av
		};
		fd['application/mp4; codecs="stpp.ttml"'] = function() {
			return new av
		};
		fd['application/mp4; codecs="stpp.ttml.im1t"'] = function() {
			return new av
		};
		fd['application/mp4; codecs="stpp.TTML.im1t"'] = function() {
			return new av
		};

		function bv() {
			this.g = !1
		}
		bv.prototype.parseInit = function() {};
		bv.prototype.setSequenceMode = function(a) {
			this.g = a
		};
		bv.prototype.parseMedia = function(a, b) {
			var c = Fc(a);
			c = c.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
			var d = c.split(/\n{2,}/m);
			if (!/^WEBVTT($|[ \t\n])/m.test(d[0])) throw new N(2, 2, 2E3);
			c = b.vttOffset;
			if (d[0].includes("X-TIMESTAMP-MAP") && this.g) {
				var e = d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),
					f = d[0].match(/MPEGTS:(\d+)/m);
				if (e && f) {
					c = cv(new Zp(e[1]));
					if (null == c) throw new N(2, 2, 2E3);
					f = Number(f[1]);
					for (e = b.segmentStart; 95443.7176888889 <= e;) e -= 95443.7176888889, f += 8589934592;
					c = b.periodStart + f / 9E4 -
						c
				}
			}
			f = [];
			e = t(d[0].split("\n"));
			for (var g = e.next(); !g.done; g = e.next())
				if (g = g.value, /^Region:/.test(g)) {
					g = new Zp(g);
					var h = new kb;
					bq(g);
					$p(g);
					for (var k = bq(g); k;) {
						var l = h,
							m = k;
						(k = /^id=(.*)$/.exec(m)) ? l.id = k[1]: (k = /^width=(\d{1,2}|100)%$/.exec(m)) ? l.width = Number(k[1]) : (k = /^lines=(\d+)$/.exec(m)) ? (l.height = Number(k[1]), l.heightUnits = 2) : (k = /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m)) ? (l.regionAnchorX = Number(k[1]), l.regionAnchorY = Number(k[2])) : (k = /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m)) ?
							(l.viewportAnchorX = Number(k[1]), l.viewportAnchorY = Number(k[2])) : /^scroll=up$/.exec(m) && (l.scroll = "up");
						$p(g);
						k = bq(g)
					}
					f.push(h)
				} e = new Map;
			dv(e);
			g = [];
			d = t(d.slice(1));
			for (h = d.next(); !h.done; h = d.next()) {
				h = h.value.split("\n");
				if ((1 != h.length || h[0]) && !/^NOTE($|[ \t])/.test(h[0]) && "STYLE" == h[0] && h[1].includes("::cue")) {
					l = "global";
					(k = h[1].match(/\((.*)\)/)) && (l = k.pop());
					k = h.slice(2, -1);
					h[1].includes("}") && (m = /\{(.*?)\}/.exec(h[1])) && (k = m[1].split(";"));
					m = new ib(0, 0, "");
					for (var p = !1, n = 0; n < k.length; n++) {
						var q =
							/^\s*([^:]+):\s*(.*)/.exec(k[n]);
						if (q) {
							var w = q[2].trim().replace(";", "");
							switch (q[1].trim()) {
								case "background-color":
									p = !0;
									m.backgroundColor = w;
									break;
								case "color":
									p = !0;
									m.color = w;
									break;
								case "font-family":
									p = !0;
									m.fontFamily = w;
									break;
								case "font-size":
									p = !0;
									m.fontSize = w;
									break;
								case "font-weight":
									700 <= parseInt(w, 10) && (p = !0, m.fontWeight = 700);
									break;
								case "font-style":
									switch (w) {
										case "normal":
											p = !0;
											m.fontStyle = sb;
											break;
										case "italic":
											p = !0;
											m.fontStyle = "italic";
											break;
										case "oblique":
											p = !0, m.fontStyle = "oblique"
									}
									break;
								case "opacity":
									p = !0;
									m.opacity = parseFloat(w);
									break;
								case "text-shadow":
									p = !0;
									m.textShadow = w;
									break;
								case "white-space":
									p = !0, m.wrapLine = "noWrap" != w
							}
						}
					}
					p && e.set(l, m)
				}
				n = c;
				if (1 == h.length && !h[0] || /^NOTE($|[ \t])/.test(h[0]) || "STYLE" == h[0]) h = null;
				else {
					l = null;
					h[0].includes("--\x3e") || (l = h[0], h.splice(0, 1));
					k = new Zp(h[0]);
					m = cv(k);
					q = aq(k, /[ \t]+--\x3e[ \t]+/g);
					p = cv(k);
					if (null == m || null == q || null == p) throw new N(2, 2, 2001, "Could not parse cue time range in WebVTT");
					m += n;
					p += n;
					n = h.slice(1).join("\n").trim();
					e.has("global") ? (h = e.get("global").clone(),
						h.startTime = m, h.endTime = p, h.payload = "") : h = new ib(m, p, "");
					ev(n, h, e);
					$p(k);
					for (m = bq(k); m;) fv(h, m, f), $p(k), m = bq(k);
					null != l && (h.id = l)
				}
				h && g.push(h)
			}
			return g
		};

		function dv(a) {
			for (var b = t(Object.entries(xb)), c = b.next(); !c.done; c = b.next()) {
				var d = t(c.value);
				c = d.next().value;
				d = d.next().value;
				var e = new ib(0, 0, "");
				e.color = d;
				a.set(c, e)
			}
			b = t(Object.entries(yb));
			for (c = b.next(); !c.done; c = b.next()) d = t(c.value), c = d.next().value, d = d.next().value, e = new ib(0, 0, ""), e.backgroundColor = d, a.set(c, e)
		}

		function ev(a, b, c) {
			0 === c.size && dv(c);
			a = gv(a);
			var d = Xn("<span>" + a + "</span>", "span");
			if (d) {
				var e = [];
				d = d.childNodes;
				if (1 == d.length) {
					var f = d[0];
					if (f.nodeType == Node.TEXT_NODE || f.nodeType == Node.CDATA_SECTION_NODE) {
						b.payload = a;
						return
					}
				}
				a = t(d);
				for (d = a.next(); !d.done; d = a.next()) hv(d.value, b, e, c);
				b.nestedCues = e
			} else b.payload = a
		}

		function gv(a) {
			for (var b = [], c = -1, d = "", e = 0; e < a.length; e++)
				if ("/" === a[e]) {
					var f = a.indexOf(">", e);
					if (f <= e) return a;
					f = a.substring(e + 1, f);
					var g = b.pop();
					if (f && g) {
						if (g === f) d += "/" + f + ">";
						else {
							if (!g.startsWith("c.") || "c" !== f) return a;
							d += "/" + g + ">"
						}
						e += f.length + 1
					} else return a
				} else "<" === a[e] ? c = e + 1 : ">" === a[e] && 0 < c && (b.push(a.substr(c, e - c)), c = -1), d += a[e];
			return d
		}

		function iv(a, b) {
			return a && 0 < a.length ? a : b
		}

		function hv(a, b, c, d) {
			var e = b.clone();
			if (a.nodeType === Node.ELEMENT_NODE && a.nodeName)
				for (var f = t(a.nodeName.split(/[ .]+/)), g = f.next(); !g.done; g = f.next()) {
					g = g.value;
					if (d.has(g)) {
						var h = d.get(g);
						h && (e.backgroundColor = iv(h.backgroundColor, e.backgroundColor), e.color = iv(h.color, e.color), e.fontFamily = iv(h.fontFamily, e.fontFamily), e.fontSize = iv(h.fontSize, e.fontSize), e.fontWeight = h.fontWeight, e.fontStyle = h.fontStyle, e.opacity = h.opacity, e.wrapLine = h.wrapLine)
					}
					switch (g) {
						case "b":
							e.fontWeight = 700;
							break;
						case "i":
							e.fontStyle =
								"italic";
							break;
						case "u":
							e.textDecoration.push("underline")
					}
				}
			if (Nn(a))
				for (f = !0, d = t(a.textContent.split("\n")), a = d.next(); !a.done; a = d.next()) a = a.value, f || (f = b.clone(), f.lineBreak = !0, c.push(f)), 0 < a.length && (f = e.clone(), f.payload = a, c.push(f)), f = !1;
			else
				for (b = t(a.childNodes), a = b.next(); !a.done; a = b.next()) hv(a.value, e, c, d)
		}

		function fv(a, b, c) {
			var d;
			if (d = /^align:(start|middle|center|end|left|right)$/.exec(b)) b = d[1], "middle" == b ? a.textAlign = mb : a.textAlign = ub[b.toUpperCase()];
			else if (d = /^vertical:(lr|rl)$/.exec(b)) a.writingMode = "lr" == d[1] ? "vertical-lr" : "vertical-rl";
			else if (d = /^size:([\d.]+)%$/.exec(b)) a.size = Number(d[1]);
			else if (d = /^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(b)) a.position = Number(d[1]), d[2] && (b = d[2], a.positionAlign = "line-left" == b || "start" == b ? "line-left" : "line-right" == b || "end" ==
				b ? "line-right" : "center");
			else if (d = /^region:(.*)$/.exec(b)) {
				if (b = jv(c, d[1])) a.region = b
			} else if (c = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = 1, a.line = Number(c[1]), c[2] && (a.lineAlign = wb[c[2].toUpperCase()]);
			else if (c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = ob, a.line = Number(c[1]), c[2] && (a.lineAlign = wb[c[2].toUpperCase()])
		}

		function jv(a, b) {
			var c = a.filter(function(d) {
				return d.id == b
			});
			return c.length ? c[0] : null
		}

		function cv(a) {
			a = aq(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
			if (null == a) return null;
			var b = Number(a[2]),
				c = Number(a[3]);
			return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
		}
		M("shaka.text.VttTextParser", bv);
		bv.prototype.parseMedia = bv.prototype.parseMedia;
		bv.prototype.setSequenceMode = bv.prototype.setSequenceMode;
		bv.prototype.parseInit = bv.prototype.parseInit;
		fd["text/vtt"] = function() {
			return new bv
		};
		fd['text/vtt; codecs="vtt"'] = function() {
			return new bv
		};
		fd['text/vtt; codecs="wvtt"'] = function() {
			return new bv
		};

		function kv() {
			this.g = null
		}
		kv.prototype.parseInit = function(a) {
			var b = this,
				c = !1;
			(new qg).box("moov", ug).box("trak", ug).box("mdia", ug).U("mdhd", function(d) {
				d = Hh(d.reader, d.version);
				b.g = d.timescale
			}).box("minf", ug).box("stbl", ug).U("stsd", wg).box("wvtt", function() {
				c = !0
			}).parse(a);
			if (!this.g) throw new N(2, 2, 2008);
			if (!c) throw new N(2, 2, 2008);
		};
		kv.prototype.setSequenceMode = function() {};
		kv.prototype.parseMedia = function(a, b) {
			if (!this.g) throw new N(2, 2, 2008);
			var c = 0,
				d = [],
				e, f = [],
				g = !1,
				h = !1,
				k = !1,
				l = null;
			(new qg).box("moof", ug).box("traf", ug).U("tfdt", function(A) {
				g = !0;
				c = Gh(A.reader, A.version).ie
			}).U("tfhd", function(A) {
				l = Fh(A.reader, A.flags).oe
			}).U("trun", function(A) {
				h = !0;
				d = Ih(A.reader, A.version, A.flags).Ge
			}).box("mdat", xg(function(A) {
				k = !0;
				e = A
			})).parse(a, !1);
			if (!k && !g && !h) throw new N(2, 2, 2008);
			for (var m = c, p = new ng(e, 0), n = t(d), q = n.next(); !q.done; q = n.next()) {
				q = q.value;
				var w = q.Td || l,
					y = q.Zc ?
					c + q.Zc : m;
				m = y + (w || 0);
				var x = 0;
				do {
					var v = p.N();
					x += v;
					var D = p.N(),
						C = null;
					"vttc" == yg(D) ? 8 < v && (C = p.$a(v - 8)) : p.skip(v - 8);
					w && C && (v = lv(C, b.periodStart + y / this.g, b.periodStart + m / this.g), f.push(v))
				} while (q.sampleSize && x < q.sampleSize)
			}
			return f.filter(cc)
		};

		function lv(a, b, c) {
			var d, e, f;
			(new qg).box("payl", xg(function(g) {
				d = Fc(g)
			})).box("iden", xg(function(g) {
				e = Fc(g)
			})).box("sttg", xg(function(g) {
				f = Fc(g)
			})).parse(a);
			return d ? mv(d, e, f, b, c) : null
		}

		function mv(a, b, c, d, e) {
			d = new ib(d, e, "");
			ev(a, d, new Map);
			b && (d.id = b);
			if (c)
				for (a = new Zp(c), b = bq(a); b;) fv(d, b, []), $p(a), b = bq(a);
			return d
		}
		M("shaka.text.Mp4VttParser", kv);
		kv.prototype.parseMedia = kv.prototype.parseMedia;
		kv.prototype.setSequenceMode = kv.prototype.setSequenceMode;
		kv.prototype.parseInit = kv.prototype.parseInit;
		fd['application/mp4; codecs="wvtt"'] = function() {
			return new kv
		};

		function nv() {}
		nv.prototype.parseInit = function() {};
		nv.prototype.setSequenceMode = function() {};
		nv.prototype.parseMedia = function(a) {
			var b = Fc(a).replace(/\r+/g, "");
			b = b.trim();
			a = [];
			if ("" == b) return a;
			b = t(b.split("\n\n"));
			for (var c = b.next(); !c.done; c = b.next()) {
				c = c.value.split("\n");
				var d = new Zp(c[0]),
					e = ov(d),
					f = aq(d, /,/g);
				d = ov(d);
				if (null == e || null == f || null == d) throw new N(2, 2, 2001, "Could not parse cue time range in SubViewer");
				a.push(new ib(e, d, c.slice(1).join("\n").trim()))
			}
			return a
		};

		function ov(a) {
			a = aq(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
			if (null == a) return null;
			var b = Number(a[2]),
				c = Number(a[3]);
			return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
		}
		M("shaka.text.SbvTextParser", nv);
		nv.prototype.parseMedia = nv.prototype.parseMedia;
		nv.prototype.setSequenceMode = nv.prototype.setSequenceMode;
		nv.prototype.parseInit = nv.prototype.parseInit;
		fd["text/x-subviewer"] = function() {
			return new nv
		};

		function pv() {
			this.g = new bv
		}
		pv.prototype.parseInit = function() {};
		pv.prototype.setSequenceMode = function() {};
		pv.prototype.parseMedia = function(a, b) {
			var c = Fc(a);
			c = qv(c);
			c = Fb(Jc(c));
			return this.g.parseMedia(c, b)
		};

		function qv(a) {
			var b = "WEBVTT\n\n";
			if ("" == a) return b;
			a = a.replace(/\r+/g, "");
			a = a.trim();
			a = t(a.split("\n\n"));
			for (var c = a.next(); !c.done; c = a.next()) c = c.value.split(/\n/), c[0].match(/\d+/) && c.shift(), c[0] = c[0].replace(/,/g, "."), b += c.join("\n") + "\n\n";
			return b
		}
		M("shaka.text.SrtTextParser", pv);
		pv.srt2webvtt = qv;
		pv.prototype.parseMedia = pv.prototype.parseMedia;
		pv.prototype.setSequenceMode = pv.prototype.setSequenceMode;
		pv.prototype.parseInit = pv.prototype.parseInit;
		fd["text/srt"] = function() {
			return new pv
		};

		function rv() {}
		rv.prototype.parseInit = function() {};
		rv.prototype.setSequenceMode = function() {};
		rv.prototype.parseMedia = function(a) {
			var b = "",
				c = "";
			a = Fc(a).split(/\r?\n\s*\r?\n/);
			a = t(a);
			for (var d = a.next(); !d.done; d = a.next()) {
				var e = sv.exec(d.value);
				e && (d = e[1], e = e[2], "V4 Styles" == d || "V4+ Styles" == d ? b = e : "Events" == d && (c = e))
			}
			a = [];
			d = null;
			b = t(b.split(/\r?\n/));
			for (var f = b.next(); !f.done; f = b.next())
				if (e = f.value, !/^\s*;/.test(e) && (f = tv.exec(e)))
					if (e = f[1].trim(), f = f[2].trim(), "Format" == e) d = f.split(uv);
					else if ("Style" == e) {
				e = f.split(uv);
				f = {};
				for (var g = 0; g < d.length && g < e.length; g++) f[d[g]] = e[g];
				a.push(f)
			}
			d = [];
			b = null;
			e = {};
			c = t(c.split(/\r?\n/));
			for (f = c.next(); !f.done; e = {
					qd: e.qd
				}, f = c.next())
				if (f = f.value, !/^\s*;/.test(f) && (g = tv.exec(f)))
					if (f = g[1].trim(), g = g[2].trim(), "Format" == f) b = g.split(uv);
					else if ("Dialogue" == f) {
				g = g.split(uv);
				f = {};
				for (var h = 0; h < b.length && h < g.length; h++) f[b[h]] = g[h];
				h = vv(f.Start);
				var k = vv(f.End);
				g = new ib(h, k, g.slice(b.length - 1).join(",").replace(/\\N/g, "\n").replace(/\{[^}]+\}/g, ""));
				e.qd = f.Style;
				(f = a.find(function(l) {
					return function(m) {
						return m.Name == l.qd
					}
				}(e))) && wv(g, f);
				d.push(g)
			}
			return d
		};

		function wv(a, b) {
			var c = b.Fontname;
			c && (a.fontFamily = c);
			if (c = b.Fontsize) a.fontSize = c + "px";
			if (c = b.PrimaryColour)
				if (c = xv(c)) a.color = c;
			if (c = b.BackColour)
				if (c = xv(c)) a.backgroundColor = c;
			b.Bold && (a.fontWeight = 700);
			b.Italic && (a.fontStyle = "italic");
			b.Underline && a.textDecoration.push("underline");
			if (c = b.Spacing) a.letterSpacing = c + "px";
			if (c = b.Alignment) switch (parseInt(c, 10)) {
				case 1:
					a.displayAlign = qb;
					a.textAlign = "start";
					break;
				case 2:
					a.displayAlign = qb;
					a.textAlign = mb;
					break;
				case 3:
					a.displayAlign = qb;
					a.textAlign = "end";
					break;
				case 5:
					a.displayAlign = "before";
					a.textAlign = "start";
					break;
				case 6:
					a.displayAlign = "before";
					a.textAlign = mb;
					break;
				case 7:
					a.displayAlign = "before";
					a.textAlign = "end";
					break;
				case 9:
					a.displayAlign = "center";
					a.textAlign = "start";
					break;
				case 10:
					a.displayAlign = "center";
					a.textAlign = mb;
					break;
				case 11:
					a.displayAlign = "center", a.textAlign = "end"
			}
			if (c = b.AlphaLevel) a.opacity = parseFloat(c)
		}

		function xv(a) {
			a = parseInt(a.replace("&H", ""), 16);
			return 0 <= a ? "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255 ^ 255) / 255 + ")" : null
		}

		function vv(a) {
			a = yv.exec(a);
			return 3600 * (a[1] ? parseInt(a[1].replace(":", ""), 10) : 0) + 60 * parseInt(a[2], 10) + parseFloat(a[3])
		}
		M("shaka.text.SsaTextParser", rv);
		rv.prototype.parseMedia = rv.prototype.parseMedia;
		rv.prototype.setSequenceMode = rv.prototype.setSequenceMode;
		rv.prototype.parseInit = rv.prototype.parseInit;
		var sv = /^\s*\[([^\]]+)\]\r?\n([\s\S]*)/,
			tv = /^\s*([^:]+):\s*(.*)/,
			uv = /\s*,\s*/,
			yv = /^(\d+:)?(\d{1,2}):(\d{1,2}(?:[.]\d{1,3})?)?$/;
		fd["text/x-ssa"] = function() {
			return new rv
		};

		function zv() {}
		M("shaka.util.FairPlayUtils", zv);
		zv.commonFairPlayResponse = function(a, b) {
			if (2 === a) {
				try {
					var c = Fc(b.data)
				} catch (f) {
					return
				}
				var d = !1;
				c = c.trim();
				"<ckc>" === c.substr(0, 5) && "</ckc>" === c.substr(-6) && (c = c.slice(5, -6), d = !0);
				try {
					var e = JSON.parse(c);
					e.ckc && (c = e.ckc, d = !0);
					e.CkcMessage && (c = e.CkcMessage, d = !0);
					e.License && (c = e.License, d = !0)
				} catch (f) {}
				d && (b.data = Gb(Pc(c)))
			}
		};
		zv.spcFairPlayRequest = function(a, b) {
			if (2 === a) {
				var c = Fb(b.body);
				c = Oc(c);
				b.headers["Content-Type"] = "application/x-www-form-urlencoded";
				b.body = Jc("spc=" + c)
			}
		};
		zv.initDataTransform = function(a, b, c) {
			function d(h) {
				Ib(f).setUint32(g, h.byteLength, !0);
				g += 4;
				f.set(Fb(h), g);
				g += h.byteLength
			}
			if (!c || !c.byteLength) throw new N(2, 6, 6015);
			var e;
			"string" == typeof b ? e = Kc(b, !0) : e = b;
			a = Ic(a);
			a = Kc(a, !0);
			var f = new Uint8Array(12 + a.byteLength + e.byteLength + c.byteLength),
				g = 0;
			d(a);
			d(e);
			d(c);
			return f
		};
		zv.defaultGetContentId = function(a) {
			a = Ic(a);
			return (new Nb(a)).Fa
		};
		zv.isFairPlaySupported = function() {
			var a;
			return K(function(b) {
				if (1 == b.g) return a = {
					initDataTypes: ["cenc", "sinf", "skd"],
					videoCapabilities: [{
						contentType: 'video/mp4; codecs="avc1.42E01E"'
					}]
				}, B(b, 2), u(b, navigator.requestMediaKeySystemAccess("com.apple.fps", [a]), 4);
				if (2 != b.g) return b["return"](!0);
				F(b);
				return b["return"](!1)
			})
		};
		/*
		 @license
		 EME Encryption Scheme Polyfill
		 Copyright 2019 Google LLC
		 SPDX-License-Identifier: Apache-2.0
		*/
		function Av() {}
		var Bv;

		function Cv() {
			Bv ? console.debug("EmeEncryptionSchemePolyfill: Already installed.") : navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration ? (Bv = navigator.requestMediaKeySystemAccess, console.debug("EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.requestMediaKeySystemAccess = Dv) : console.debug("EmeEncryptionSchemePolyfill: EME not found")
		}

		function Dv(a, b) {
			var c = this,
				d;
			return K(function(e) {
				if (1 == e.g) return console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess'), u(e, Bv.call(c, a, b), 2);
				d = e.h;
				if (Ev(d)) return console.debug("EmeEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.requestMediaKeySystemAccess = Bv, e["return"](d);
				console.debug("EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
				navigator.requestMediaKeySystemAccess = Fv;
				return e["return"](Fv.call(c,
					a, b))
			})
		}

		function Fv(a, b) {
			var c = this,
				d, e, f, g, h, k, l, m, p, n;
			return K(function(q) {
				if (1 == q.g) {
					console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess');
					d = Gv(a);
					e = [];
					f = t(b);
					for (g = f.next(); !g.done; g = f.next()) h = g.value, k = Hv(h.videoCapabilities, d), l = Hv(h.audioCapabilities, d), h.videoCapabilities && h.videoCapabilities.length && !k.length || h.audioCapabilities && h.audioCapabilities.length && !l.length || (m = Object.assign({}, h), m.videoCapabilities = k, m.audioCapabilities = l, e.push(m));
					if (!e.length) throw p = Error("Unsupported keySystem or supportedConfigurations."),
						p.name = "NotSupportedError", p.code = DOMException.NOT_SUPPORTED_ERR, p;
					return u(q, Bv.call(c, a, e), 2)
				}
				n = q.h;
				return q["return"](new Iv(n, d))
			})
		}

		function Hv(a, b) {
			return a ? a.filter(function(c) {
				return !c.encryptionScheme || c.encryptionScheme == b
			}) : a
		}
		M("EmeEncryptionSchemePolyfill", Av);
		Av.install = Cv;

		function Jv() {}
		var Kv;

		function Lv() {
			Kv ? console.debug("McEncryptionSchemePolyfill: Already installed.") : navigator.mediaCapabilities ? (Kv = navigator.mediaCapabilities.decodingInfo, console.debug("McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.mediaCapabilities.decodingInfo = Mv) : console.debug("McEncryptionSchemePolyfill: MediaCapabilities not found")
		}

		function Mv(a) {
			var b = this,
				c, d, e;
			return K(function(f) {
				switch (f.g) {
					case 1:
						return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), u(f, Kv.call(b, a), 2);
					case 2:
						c = f.h;
						if (!a.keySystemConfiguration) return f["return"](c);
						if ((d = c.keySystemAccess) && Ev(d)) return console.debug("McEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.mediaCapabilities.decodingInfo = Kv, f["return"](c);
						console.debug("McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
						navigator.mediaCapabilities.decodingInfo = Nv;
						if (d) {
							f.A(3);
							break
						}
						e = c;
						return u(f, Ov(a), 4);
					case 4:
						return e.keySystemAccess = f.h, f["return"](c);
					case 3:
						return f["return"](Nv.call(b, a))
				}
			})
		}

		function Nv(a) {
			var b = this,
				c, d, e, f, g, h, k, l;
			return K(function(m) {
				switch (m.g) {
					case 1:
						return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), c = null, a.keySystemConfiguration && (d = a.keySystemConfiguration, e = d.keySystem, f = d.audio && d.audio.encryptionScheme, g = d.video && d.video.encryptionScheme, c = Gv(e), h = {
							powerEfficient: !1,
							smooth: !1,
							supported: !1,
							keySystemAccess: null,
							configuration: a
						}, f && f != c || g && g != c) ? m["return"](h) : u(m, Kv.call(b, a), 2);
					case 2:
						k = m.h;
						if (k.keySystemAccess) {
							k.keySystemAccess =
								new Iv(k.keySystemAccess, c);
							m.A(3);
							break
						}
						if (!a.keySystemConfiguration) {
							m.A(3);
							break
						}
						l = k;
						return u(m, Ov(a), 5);
					case 5:
						l.keySystemAccess = m.h;
					case 3:
						return m["return"](k)
				}
			})
		}

		function Ov(a) {
			var b, c;
			return K(function(d) {
				if (1 == d.g) {
					var e = a.keySystemConfiguration,
						f = [],
						g = [];
					e.audio && f.push({
						robustness: e.audio.robustness || "",
						contentType: a.audio.contentType
					});
					e.video && g.push({
						robustness: e.video.robustness || "",
						contentType: a.video.contentType
					});
					e = {
						initDataTypes: e.initDataType ? [e.initDataType] : [],
						distinctiveIdentifier: e.distinctiveIdentifier,
						persistentState: e.persistentState,
						sessionTypes: e.sessionTypes
					};
					f.length && (e.audioCapabilities = f);
					g.length && (e.videoCapabilities = g);
					b = e;
					return u(d,
						navigator.requestMediaKeySystemAccess(a.keySystemConfiguration.keySystem, [b]), 2)
				}
				c = d.h;
				return d["return"](c)
			})
		}
		M("McEncryptionSchemePolyfill", Jv);
		Jv.install = Lv;

		function Iv(a, b) {
			this.h = a;
			this.g = b;
			this.keySystem = a.keySystem
		}
		Iv.prototype.getConfiguration = function() {
			var a = this.h.getConfiguration();
			if (a.videoCapabilities)
				for (var b = t(a.videoCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.g;
			if (a.audioCapabilities)
				for (b = t(a.audioCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.g;
			return a
		};
		Iv.prototype.createMediaKeys = function() {
			return this.h.createMediaKeys()
		};

		function Gv(a) {
			if (a.startsWith("com.widevine") || a.startsWith("com.microsoft") || a.startsWith("com.adobe") || a.startsWith("org.w3")) return "cenc";
			if (a.startsWith("com.apple")) return "cbcs-1-9";
			console.warn("EmeEncryptionSchemePolyfill: Unknown key system:", a, "Please contribute!");
			return null
		}

		function Ev(a) {
			a = a.getConfiguration();
			var b = a.audioCapabilities && a.audioCapabilities[0];
			return (a = a.videoCapabilities && a.videoCapabilities[0] || b) && void 0 !== a.encryptionScheme ? !0 : !1
		}

		function Pv() {}

		function jt() {
			Cv();
			Lv()
		}
		M("EncryptionSchemePolyfills", Pv);
		Pv.install = jt;
		"undefined" !== typeof module && module.exports && (module.exports = Pv);
	}).call(exportTo, innerGlobal, innerGlobal, undefined);
	if (typeof exports != "undefined")
		for (var k in exportTo.shaka) exports[k] = exportTo.shaka[k];
	else if (typeof define == "function" && define.amd) define(function() {
		return exportTo.shaka
	});
	else innerGlobal.shaka = exportTo.shaka
})();

//# sourceMappingURL=shaka-player.compiled.map