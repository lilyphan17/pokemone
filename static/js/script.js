$(document).ready(function () {
    let activeurl = window.location.pathname;
    let score = 0;
    let highscore = 0
    const img = ['/static/images/1.png', '/static/images/2.png', '/static/images/3.png', '/static/images/4.png', '/static/images/5.png', '/static/images/6.png', '/static/images/7.png', '/static/images/8.png', '/static/images/9.png', '/static/images/10.png', '/static/images/11.png', '/static/images/12.png', '/static/images/13.png', '/static/images/14.png', '/static/images/15.png', '/static/images/16.png', '/static/images/17.png', '/static/images/18.png', '/static/images/19.png', '/static/images/20.png', '/static/images/21.png', '/static/images/22.png', '/static/images/23.png', '/static/images/24.png', '/static/images/25.png', '/static/images/26.png', '/static/images/27.png', '/static/images/28.png', '/static/images/29.png', '/static/images/30.png']

    $('.nav-item').each(function () {
        if ($(this).children().attr('href') == activeurl) {
            $(this).addClass('active');
        }
    })

    function random() {
        return Math.floor(Math.random() * (31));
    }

    var name = '';
    let attempt = 1;

    //general compare------------------------------------------------------------------------
    function compare(i, j) {
        return !(String(i).localeCompare(String(j)));
    }

    //buttons to show once answer is correct-------------------------------------------------
    function success() {
        $('#correct').attr('style', '');
        $('#s').text(score);
        $('#score').attr('style', '');
        $('#pic').attr('style', '');
        $('#sub').attr('style', 'display: none');
        $('#fo').attr('style', 'display: none');
        $('#reload').attr('style', '');
        $('#incorrect').attr('style', 'display: none');
        $('#retry').attr('style', 'display: none');
    }

    if(highscore != 0) {
        $('#hscore').attr('style', '');
    }
    else $('#hscore').attr('style', 'display: none');

    //takes care of checking attempts and displaying correct info depending on attempts
    function attempts(cur) {
        if (cur < 3) {
            $('#incorrect').attr('style', '');
            $('#incorrect').html("Attempt " + cur + " of 3");
            $('#retry').attr('style', '');
            if(score>0) score--;
            $('#s').text(score);
            $('#score').attr('style', '');

        } else if (cur === 3) {
            $('#incorrect').html("Last attempt!");
            cur++;
            attempts(cur);
            if(score>0) score--;
            $('#s').text(score);
            $('#score').attr('style', '');
        } else {
            attempt = 1;
            $('#incorrect').html("Failed!");
            $('#retry').attr('style', 'display: none');
            $('#reload').attr('style', '');
            $('#fo').attr('style', 'display: none');
            if(score>0) score--;
            $('#s').text(score);
            $('#score').attr('style', '');
        }
    }

    //Cycle through image and get the answer into a global variable------------------------------
    function getNa() {
        $.get('test', function (data) {
            name = '' + data;
            let rand = random();

            console.log(data);
            console.log(name);
            console.log(name);

            $('#pic').attr('style', 'filter: contrast(0)');
            $('#fo').attr('style', 'display: none');
            $('#incorrect').attr('style', 'display: none');
            $('#correct').attr('style', 'display: none');
            $('#reload').attr('style', 'display: none');
            $('#sub').attr('style', 'display: none');
            $('#retry').attr('style', 'display: none');
            $('#start').attr('style', 'display: none');

            let url = 'https://pokeapi.co/api/v2/pokemon/' + String(name);

            console.log(url)

            $.get(url, function (data1) {
                $('#pic').attr('src', img[++rand]);
                let t1 = 15;
                let timer;
                let counter = 0;
                let gotpic = data1['sprites']['front_default']
                if (!(gotpic.length)) {
                    getNa();
                }
                timer = setInterval(myFunction, 50);

                function myFunction() {
                    $('#pic').attr('src', img[++rand]);
                    if (rand > 30) {
                        rand = 0;
                        $('#pic').attr('src', img[0]);
                    }
                    counter++;
                    if (counter === t1) {
                        clearInterval(timer);
                        counter = 0;
                        $('#pic').attr('src', gotpic);
                        $('#fo').attr('style', '');
                        $('#sub').attr('style', '');
                    }
                }
            })
        })
    }

    //General hiding-------------------------------------------------------------------------
    $('#pic').attr('style', 'filter: contrast(0)');
    $('#fo').attr('style', 'display: none');
    $('#incorrect').attr('style', 'display: none');
    $('#correct').attr('style', 'display: none');
    $('#reload').attr('style', 'display: none');
    $('#sub').attr('style', 'display: none');
    $('#retry').attr('style', 'display: none');
    $('#score').attr('style', 'display: none');

    //Submit the current form---------------------------------------------------------------
    $('#sub').click(function () {
        let d = $('form').serializeArray();
        $('form')[0].reset();
        if (compare(d[0]["value"], name)) {
            success();
            score += 10;
            $('#s').text(score);
            $('#score').attr('style', '');
        } else {
            $('form')[0].reset();
            $('#sub').attr('style', 'display: none');
            attempts(attempt);
            if(score>0) score--;
            $('#s').text(score);
            $('#score').attr('style', '');
        }
    })

    //Retry with the same pokemon if answer is incorrect and attempts < 3---------------------
    $('#retry').click(function () {
        let d = $('form').serializeArray()
        $('form')[0].reset();
        if (compare(d[0]["value"], name)) {
            success();
            attempt = 1;
            score +=7;
            $('#s').text(score);
            $('#score').attr('style', '');
        } else {
            attempt++;
            attempts(attempt);
            if(score>0) score--;
            $('#s').text(score);
            $('#score').attr('style', '');
        }
    })

    //Reload once answer is correct or attempts consumed-------------------------------------
    $('#reload').click(function () {
        $('form')[0].reset();
        getNa();
    });

    //Start the quiz-------------------------------------------------------------------------
    $('#start').click(function () {
        getNa();
    });
})