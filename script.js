$(".changeTitle").click(function(){
    let testOptions = {};
    testOptions["title"] = $('.inputTitle')[0].value;
    if ($('.inputPercentage')[0].value){
        testOptions["percentage"] = $('.inputPercentage')[0].value + '%';
    }
    testOptions["position"] = $('.inputPosition')[0].value;
    console.log(testOptions);
    changeTitle(testOptions);
});

const changeTitle = (function(obj){
    let className = '.' + obj["title"]
    if(obj["percentage"]){
        $(className).css("width", obj["percentage"]);
        let className1 = 'skills ' + obj["title"];
        document.getElementsByClassName(className1)[0].innerHTML = obj["percentage"];
    }
    if (obj["position"]){
        $(className).css("text-align", obj["position"]);
    }
});

$(".add").click(function(){
    let addBar = {};
    addBar["title"] = $('.title')[0].value;
    addBar["percentage"] = $('.percentage')[0].value + '%';
    addBar["color"] = $('.color')[0].value;
    addBar["position"] = $('.addPosition')[0].value;
    add(addBar);
});

const add = (function(obj){
    if (obj["title"] && obj["percentage"]){
        let className = '.' + obj["title"];
        // add the bar in HTML
        let p = `<li id = ${obj["title"]}><p>${obj["title"]}</p>
        <div class="container">
        <div class="skills ${obj["title"]}">${obj["percentage"]}</div></div></li>`;
        $("ol").append(p);
        // add the length in css
        $(className).width(obj["percentage"]);
        // add into change slections
        $(".inputTitle").append(`<option id = ${obj["title"]} value=${obj["title"]}>${obj["title"]}</option>`);
        $(".deleteTitle").append(`<option id = ${obj["title"]} value=${obj["title"]}>${obj["title"]}</option>`);

        if (obj["color"]){
            $(className).css("background-color", obj["color"]);
        } else {
            // default color is black
            $(className).css("background-color", 'black');
        }
        if (obj["position"]){
            $(className).css("text-align", obj["position"]);
        }
    } else {
        $('.show').text('please enter the title and the percentage of the bar.');
    }
});

$(".changeBar").click(function(){
    let title = $('.bartitle')[0].value;
    document.getElementById("bar_title").innerHTML = title;
});

$('.deletetitle').click(function(){
    let testAdd = {};
    let title = $('.deleteTitle')[0].value;
    testAdd[".title"] = '.' + title;
    testAdd["#title"] = '#' + title;
    console.log(title);
    $(testAdd["#title"]).remove();
    $("option").remove(testAdd["#title"]);
});