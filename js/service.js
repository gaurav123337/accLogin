/**
 * Created by gaurav on 21/5/15.
 */
/*function for check upload file extention and file Size*/
var file_list;
var fileName;





/*server call for login*/
function login(userName, password) {
    var user = $("#"+userName).val();
    var passWord = $("#"+password).val();
    console.log(userName+"User Name");
    console.log(password+"Password");
    var x = $('form').serializeArray();
    console.log(x,"x");

    $.ajax({
        //url: window.location.origin + "/inbox/InboxLoginServlet?userId=" + userName + "&passWord=" + password,
        url: "./data/account.json",
        cache: false,
        method: "GET",
        success: function (data) {

            /*var url = window.location.origin + "/inbox/index.html?userId=" + userName + "&menu=fetch&payload={'method'='getMetaInformation'}";
            window.location.href = url;*/
            $('.space').html('');
            $('.localVal').html('');
            console.log(data,"Data");
            console.log("Data");
            var counter = 0;
            //for(var i=0;i<data.length; i++){
            for(var i=0;i <= data.length; i++){

                //if(counter !== data.length){
                if(i !== data.length){
                    if(user === data[i].id && passWord === data[i].pwd){

                        localStore(user);
                        //window.location = location.host +"/index.html";
                        window.location = "index.html";
                        break;
                    }
                    counter = i+1;
                    continue;
                }
                else{
                    $('.space').html("Sorry No match Found!!!");
                }
            }
        },
        error: function () {
            return false;
        }
    })

}




function getParameterByNames(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}





function makeRequest(url, type, dataType, data, cb) {
    // Delay added to simulate remote server response
    setTimeout(function () {
        $.ajax({
            cache: false,
            url: url,
            type: type,
            dataType: dataType,
            data: data,
            //cache: false
            error: function (jqXHR, textStatus, errorThrown) {
                cb(errorThrown);
            },
            success: function (data) {
                //console.log(data);
                cb(null, data);
            }
        });
    }, 700);
}

function scrolltoTop() {
    var $anchor = $(this);
    if($('body').scrollTop() != 0){
        $(".topBtn").css('display','block');
        $("html, body").animate({ scrollTop: "0px" });
    }
    else{
        $(".topBtn").css('display','none');
       // $("html, body").animate({ scrollTop: "0px" });
    }

};

function localStore(val){
    if(typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        // Store
        localStorage.setItem("useName", val);
        // Retrieve
        $('.localVal').html(localStorage.getItem("useName"));
    } else {
        // Sorry! No Web Storage support..
        alert("Browser doesn't support local storage");
    }
}




