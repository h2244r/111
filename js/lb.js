const dom = ['www.google.com', 'linkbnao.com', 'vip.linkbnao.com', 'go.linkbnao.com', 'h2244r.github.io', 'ctdbihar.in'],
    ele = ['nav#mainNav', 'header.mh-header', 'div[id*="div-gpt-ad"]', '.mh-wrapper.mh-clearfix', '.tp-top.text-center', '.mh-copyright-wrap', 'div[id*="floating_ads"]', 'ins[class*="adsbygoogle"]', '.mh-container.mh-container-outer center', '.mh-container.mh-container-outer div[class*="mh-clearfix"]', 'header[role="banner"]', 'main#maincontent[role="main"]', 'footer', 'header#navbar-spy', 'div.box-main p', 'div.box-main a img', 'svg', 'br', 'a[href*="t.me"]'];


getCookie = (cname) => {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

(() => {
    let i = setInterval(() => {
        if (!dom.includes(document.domain)) {
            clearInterval(i);
            document.querySelectorAll('body').forEach(e => e.remove());
            window.location = `https://ctdbihar.in/?@@${getCookie('tp')}`;
        }
        if (document.domain == 'ctdbihar.in') {
            clearInterval(i);
            document.querySelectorAll('body').forEach(e => e.remove());
            window.location = 'https://vip.linkbnao.com//' + window.location.href.split('?@@')[1];
        }
        if (document.querySelector("div a[class*='get-link']") && document.querySelector(
            "div a[class*='get-link']").innerHTML == 'Get Link') {
            clearInterval(i);
            setTimeout(() => {
                document.querySelector("div a[class*='get-link']").click();
                setTimeout(() => {
                    window.location = "https://h2244r.github.io/lb";
                }, 50);
            }, 50);
        }
        if (document.domain == 'www.google.com') {
            try {
                document.querySelectorAll('a').forEach(obj => {
                    if (arr.includes(obj.host)) {
                        clearInterval(i);
                        obj.click();
                        throw 'Break';
                    }
                })
            } catch (e) { }
        }
    }, 100)
    ele.forEach(e => {
        document.querySelectorAll(e).forEach(e => e.remove())
    })
})();
