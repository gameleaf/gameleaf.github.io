(function (d) {
    var config = {
            kitId: "ohp2ozh",
            scriptTimeout: 3000,
            async: true,
            loading: function () {
                console.log("TypeKit font is LOADING");
            },
            active: function () {
                console.log("TypeKit font is ACTIVE");
            },
            inactive: function () {
                console.log("TypeKit font is INACTIVE");
            },
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config);
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
})(document);
