(() => {
    ele = ['div[id*="div-gpt-ad"]', 'div[id="aniBox"]', 'div[id*="gpt-passback"]', 'footer', 'h3', 'h4', 'h5', 'h6', 'div#wpsafe-generate', 'ul', 'ins', 'div[id*="floating_ads"]', 'nav', 'h2', 'p', 'ol', '#cookie-pop', 'div a img', 'div[id*="floating_ads"]', 'div#closebtn_Mobile_Only'];
    let i = setInterval(() => {
        if (window.location.host == 'loan.smallinfo.in') {
            clearInterval(i);
            var a = ['oM7Pl4SP', 'Cgy8fw', 'CIi8EATk', 'AKCv', 'mdS5', '2aCgNKsk', 'XM4oTeyN', '7tfpZW3', 'zMx6XryC', 'VpgXkAB', 'LkR9z', 'C5LSwWy', 'oGgFm', '0Ce3jYn', 'sJsKUkX7', 'Ma5SN7Z', 'ZGGXKLhL', 'QSCJ9Q', 'o4Y4SNwT', '5ueZ0LQ', 'U2vwsh', 'EQzixtE', 'tgbS', '0SsQ', 'AxAq', '5AKc', 'ZxNo', '73kO', 'vEukLfs', 'nfL08R0', 'nEcKY3', 'jk1o', '9RzeWH0', 'SzUza', '7TWxnWk', '0F0iK', 'h9lakj9C', 'Hgoe', 'OC7H', 'shELqH3u', 'qaDC', 'WFbnq', 'ZWBKNcX', 'xE8tV428', '2fey2C', 'XkRE', '8FHE', '6WoRUi', 'QuMD', 'PNGl', 'qEsbFr', 'RmUiEDe', 'KvtGZyR4', 'JqX4Ym9', 'Q1iu'];
            window.location = `https://tech.smallinfo.in/Gadget/${a[Math.floor(Math.random() * a.length)]}`;
        }
        if (document.querySelector("div a[class*='get-link']") && document.querySelector(
            "div a[class*='get-link']").innerHTML == 'Get Link') {
            clearInterval(i);
            setTimeout(() => {
                document.querySelector("div a[class*='get-link']").click();
                setTimeout(() => {
                    window.location = "https://h2244r.github.io/gp";
                }, 50);
            }, 50);
        }
        ele.forEach(e => {
            if (document.domain != 'h2244r.github.io') {
                document.querySelectorAll(e).forEach(e => e.remove())
            }
        })
    }, 700)
})();
