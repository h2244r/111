var arr = ['ffworld.xyz', 'ctdbihar.in', 'thebookaholics.in', 'tecnicalboy.com', 'doibihar.org', 'ciick.in'];

function r(e) {
    function a(e) {
        if (document.querySelector(e)) {
            document.querySelectorAll(e).forEach(a => {
                a.remove();
            })
        }
    }
    return a(e)
}

function count_script() {
    let i = setInterval(() => {
        if (arr.includes(window.location.host)) {
            clearInterval(i);
            setTimeout(() => {
                if (document.querySelector('script')) {
                    document.querySelectorAll("script").forEach(e => {
                        if (!window.location.href.includes(".php")) {
                            if (e.outerText.replaceAll(" ", "").replaceAll("\n", "")
                                .includes("varcount=")) {
                                var s, h;
                                e.remove();
                                s = document.createElement("script");
                                h = document.getElementsByTagName("head")[0];
                                t = document.createTextNode(
                                    'var count=0,counter=setInterval(timer,0);function timer(){return--count,0>=count?(document.getElementById("tp-wait1")&&(document.getElementById("tp-wait1").style.display="none"),document.getElementById("tp-generate")&&(document.getElementById("tp-generate").style.display="block"),document.getElementById("tp-snp2")&&(document.getElementById("tp-snp2").style.display="block"),void clearInterval(counter)):void(document.getElementById("tp-time")&&(document.getElementById("tp-time").innerHTML=count))}'
                                );
                                s.appendChild(t);
                                h.appendChild(s);
                            }
                        }
                    })
                }
            }, 500);
        }
    }, 50)
}

function last_page() {
    let i = setInterval(() => {
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
    }, 1200)
}

function auto_run() {
    let i = setInterval(() => {
        if (window.location.host == 'www.google.com' && document.querySelector(
            "span[class][role=\"text\"]")) {
            clearInterval(i);
            document.querySelectorAll("span[class][role=\"text\"]")[0].parentElement.click();
        }
        if (arr.includes(window.location.host)) {
            setTimeout(() => {
                if (document.querySelector("#tp-snp2")) {
                    clearInterval(i);
                    setTimeout(() => {
                        document.querySelector("#tp-snp2").click();
                        setTimeout(() => {
                            document.querySelector("#dismiss-button").click();
                        }, 700);
                    }, 500);
                }
            }, 500)
        }
    }, 500);
}
setInterval(() => {
    if (!window.location.href.includes('.php')) {
        r('header.mh-header');
        r('div[id*="div-gpt-ad"]');
        r('.mh-wrapper.mh-clearfix');
        r('.tp-top.text-center');
        r('.mh-copyright-wrap');
        r('div[id*="floating_ads"]');
        r('ins[class*="adsbygoogle"]');
        r('.mh-container.mh-container-outer center');
        r('.mh-container.mh-container-outer div[class*="mh-clearfix"]');
        r('header[role="banner"]');
        r('main#maincontent[role="main"]');
        r('footer');
        r('header#navbar-spy');
        r('div.box-main p')
        r('div.box-main a img')
        r('svg');
        r('br');
        r('a[href*="t.me"]')
    }
}, 10)
setTimeout(() => {
    count_script(), auto_run(), last_page();
}, 500);
