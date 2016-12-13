var z = Object.getOwnPropertyNames(Math);for (i in z) "function" == typeof Math[z[i]] && (window[z[i]] = Math[z[i]]);
