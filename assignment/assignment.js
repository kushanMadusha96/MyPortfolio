// for menu btn
let count = 0;

function onBtn() {
    document.getElementById('menuBar').style.height = '370px';
    document.getElementById('pages').style.visibility = 'visible' ;
}
function offBtn() {
    document.getElementById('menuBar').style.height = '70px';
    document.getElementById('pages').style.visibility = 'hidden' ;
}
offBtn();
document.getElementById('menuBtn').addEventListener('click', (event) => {
    count++;
    0 != count % 2  ? onBtn() : offBtn();
})
document.getElementById('mobile').addEventListener('click', function() {
    offBtn()
});

//..............//

const pdf = ["pdf/3.pdf","pdf/4.pdf","pdf/8.pdf","pdf/9.pdf","pdf/5.pdf","pdf/11.pdf"];

const  web_links = ["https://kushanmadusha96.github.io/assignment-03-case-01/",
    "https://kushanmadusha96.github.io/assignment-03-case-02/",
    "https://kushanmadusha96.github.io/assignment-03-case-03/",
    "https://kushanmadusha96.github.io/assignment-03-case-04/",
    "https://kushanmadusha96.github.io/assignment-03-case-05/",
    "https://kushanmadusha96.github.io/assignment-03-case-06/",
    "https://kushanmadusha96.github.io/assignment-04-case-01/",
    "https://kushanmadusha96.github.io/assignment-04-case-02/",
    "https://kushanmadusha96.github.io/assignment-04-case-03/",
    "https://kushanmadusha96.github.io/assignment-04-case-04/",
    "https://kushanmadusha96.github.io/assignment-05-case-05/",
    "https://kushanmadusha96.github.io/assignment-04-case-06/",
    "https://kushanmadusha96.github.io/assignment-08-case-01/",
    "https://kushanmadusha96.github.io/assignment-09/",
    "http://kushanmadusha.infinityfreeapp.com/?i=1",
    "https://kushanmadusha96.github.io/assignment_06/"

];

const  github_links = ["https://github.com/kushanMadusha96/assignment-03-case-01",
    "https://github.com/kushanMadusha96/assignment-03-case-02",
    "https://github.com/kushanMadusha96/assignment-03-case-03",
    "https://github.com/kushanMadusha96/assignment-03-case-04",
    "https://github.com/kushanMadusha96/assignment-03-case-05",
    "https://github.com/kushanMadusha96/assignment-03-case-06",
    "https://github.com/kushanMadusha96/assignment-04-case-01",
    "https://github.com/kushanMadusha96/assignment-04-case-02",
    "https://github.com/kushanMadusha96/assignment-04-case-03",
    "https://github.com/kushanMadusha96/assignment-04-case-04",
    "https://github.com/kushanMadusha96/assignment-05-case-05",
    "https://github.com/kushanMadusha96/assignment-04-case-06",
    "https://github.com/kushanMadusha96/assignment-08-case-01",
    "https://github.com/kushanMadusha96/assignment-09",
    "https://github.com/kushanMadusha96/MyPortfolio",
    "https://github.com/kushanMadusha96/assignment_06"
];

//selector for lap
$("#selectorLap").change(function () {

    $("#pdf-container").empty();

    const value = $("#selectorLap").val();

    if(value.startsWith("c3")) {
        $("#pdf-container").append(`<embed src="${pdf[0]}" type="application/pdf" width="100%" height="100%">`);
        if(value === "c31") {
            $("#git").attr("href",github_links[0]);
            $("#veb").attr("href",web_links[0]);
        }
        else if(value === "c32") {
            $("#git").attr("href",github_links[1]);
            $("#veb").attr("href",web_links[1]);
        }
        else if(value === "c33") {
            $("#git").attr("href",github_links[2]);
            $("#veb").attr("href",web_links[2]);
        }
        else if(value === "c34") {
            $("#git").attr("href",github_links[3]);
            $("#veb").attr("href",web_links[3]);
        }
        else if(value === "c35") {
            $("#git").attr("href",github_links[4]);
            $("#veb").attr("href",web_links[4]);
        }
        else if(value === "c36") {
            $("#git").attr("href",github_links[5]);
            $("#veb").attr("href",web_links[5]);
        }
    }
    else if (value.startsWith("c4")) {
        $("#pdf-container").append(`<embed src="${pdf[1]}" type="application/pdf" width="100%" height="100%">`);
        if(value === "c41") {
            $("#git").attr("href",github_links[6]);
            $("#veb").attr("href",web_links[6]);
        }
        else if (value === "c42") {
            $("#git").attr("href",github_links[7]);
            $("#veb").attr("href",web_links[7]);
        }
        else if (value === "c43") {
            $("#git").attr("href",github_links[8]);
            $("#veb").attr("href",web_links[8]);
        }
        else if (value === "c44") {
            $("#git").attr("href",github_links[9]);
            $("#veb").attr("href",web_links[9]);
        }
        else if (value === "c45") {
            $("#git").attr("href",github_links[10]);
            $("#veb").attr("href",web_links[10]);
        }
        else if (value === "c46") {
            $("#git").attr("href",github_links[11]);
            $("#veb").attr("href",web_links[11]);
        }
    }
    else if (value === "a8") {
        $("#pdf-container").append(`<embed src="${pdf[2]}" type="application/pdf" width="100%" height="100%">`);
        $("#git").attr("href",github_links[12]);
        $("#veb").attr("href",web_links[12]);
    }
    else if (value === "a9") {
        $("#pdf-container").append(`<embed src="${pdf[3]}" type="application/pdf" width="100%" height="100%">`);
        $("#git").attr("href",github_links[13]);
        $("#veb").attr("href",web_links[13]);
    }
    else if (value === "a5") {
        $("#pdf-container").append(`<embed src="${pdf[4]}" type="application/pdf" width="100%" height="100%">`);
        $("#git").attr("href",github_links[14]);
        $("#veb").attr("href",web_links[14]);
    }
    else if (value === "a11") {
        $("#pdf-container").append(`<embed src="${pdf[5]}" type="application/pdf" width="100%" height="100%">`);
        $("a").attr("href","https://github.com/kushanMadusha96/assignment_06");
        $("#git").attr("href",github_links[15]);
        $("#veb").attr("href",web_links[15]);
    }
});

//selector for mobile
$("#selector").change(function () {

    $("#pdf-container-mobile").empty();

    const value = $("#selector").val();

    if(value.startsWith("c3")) {
        $("#pdf-container-mobile").append(`<embed src="${pdf[0]}" type="application/pdf" width="100%" height="100%">`);
        if(value === "c31") {
            $("#git-m").attr("href",github_links[0]);
            $("#veb-m").attr("href",web_links[0]);
        }
        else if(value === "c32") {
            $("#git-m").attr("href",github_links[1]);
            $("#veb-m").attr("href",web_links[1]);
        }
        else if(value === "c33") {
            $("#git-m").attr("href",github_links[2]);
            $("#veb-m").attr("href",web_links[2]);
        }
        else if(value === "c34") {
            $("#git-m").attr("href",github_links[3]);
            $("#veb-m").attr("href",web_links[3]);
        }
        else if(value === "c35") {
            $("#git-m").attr("href",github_links[4]);
            $("#veb-m").attr("href",web_links[4]);
        }
        else if(value === "c36") {
            $("#git-m").attr("href",github_links[5]);
            $("#veb-m").attr("href",web_links[5]);
        }
    }
    else if (value.startsWith("c4")) {
        $("#pdf-container-mobile").append(`<embed src="${pdf[1]}" type="application/pdf" width="100%" height="100%">`);
        if(value === "c41") {
            $("#git-m").attr("href",github_links[6]);
            $("#veb-m").attr("href",web_links[6]);
        }
        else if (value === "c42") {
            $("#git-m").attr("href",github_links[7]);
            $("#veb-m").attr("href",web_links[7]);
        }
        else if (value === "c43") {
            $("#git-m").attr("href",github_links[8]);
            $("#veb-m").attr("href",web_links[8]);
        }
        else if (value === "c44") {
            $("#git-m").attr("href",github_links[9]);
            $("#veb-m").attr("href",web_links[9]);
        }
        else if (value === "c45") {
            $("#git-m").attr("href",github_links[10]);
            $("#veb-m").attr("href",web_links[10]);
        }
        else if (value === "c46") {
            $("#git-m").attr("href",github_links[11]);
            $("#veb-m").attr("href",web_links[11]);
        }
    }
    else if (value === "a8") {
        $("#pdf-container-mobile").append(`<embed src="${pdf[2]}" type="application/pdf" width="100%" height="100%">`);
        $("#git-m").attr("href",github_links[12]);
        $("#veb-m").attr("href",web_links[12]);
    }
    else if (value === "a9") {
        $("#pdf-container-mobile").append(`<embed src="${pdf[3]}" type="application/pdf" width="100%" height="100%">`);
        $("#git-m").attr("href",github_links[13]);
        $("#veb-m").attr("href",web_links[13]);
    }
    else if (value === "a5") {
        $("#pdf-container-mobile").append(`<embed src="${pdf[4]}" type="application/pdf" width="100%" height="100%">`);
        $("#git-m").attr("href",github_links[14]);
        $("#veb-m").attr("href",web_links[14]);
    }
    else if (value === "a11") {
        $("#pdf-container-mobile").append(`<embed src="${pdf[5]}" type="application/pdf" width="100%" height="100%">`);
        $("a").attr("href","https://github.com/kushanMadusha96/assignment_06");
        $("#git-m").attr("href",github_links[15]);
        $("#veb-m").attr("href",web_links[15]);
    }
});
