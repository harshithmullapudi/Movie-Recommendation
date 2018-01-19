
var final = []
var total = {}
var csvdata = ''
ratings = {}
var qrcount = 0;
var movielis = ''
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "./assets/movies.csv",
        dataType: "text",
        success: function(data) {
            csvdata = data.split(/\r\n|\n/)
            processData(csvdata);
        }
    });
});
function next() {
   for(var i=0;i<10;i++)
   {
       if($(".movie" + i).is(":checked"))
       {
           if(ratings[i]) {
               final.push($(".movie" + i).data("attribute") + "@" + ratings[i])
           }
           else
           {
               final.push($(".movie" + i).data("attribute") + "@" + 0)
           }
           console.log(final)

       }
   }
   processData(csvdata)
}
function selec(a,b) {
    ratings[a] = b+1
    var color = ['#ff7252','#ffb252','#ffe10d','#a5ec35','#00ff00']
    for(var j=0;j<5;j++)
    {
        $("." + j + a).css({
            "background-color" : '#E8E8E8'
        })
    }
    $("." + b + a).css({
        "background-color" : color[b]
    })
}
function qrr()
{
    console.log(qrcount)
    if(qrcount == 10) {
        $(".qrheading").css({
            "display" : "block"
        })
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: "http://jindo.dev.naver.com/collie",
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrcode.clear(); // clear the code.
        qrcode.makeCode(movielis); // make another code.
    }
}
function processData(allText) {
    if(final.length < 10) {
        var allTextLines = allText;
        var headers = allTextLines[0].split(',');
        var lines = [];
        var arr = []
        while (arr.length < 10) {
            var randomnumber = Math.floor(Math.random() * 176279) + 1;

            if (arr.indexOf(randomnumber) > -1 || allTextLines[randomnumber] == undefined) continue;
            arr[arr.length] = randomnumber;

        }
        str = ''
        for (var i = 0; i < arr.length; i++) {
            str = str + '<div class="col-lg-12" style="font-size: 200%;"><div class="pretty p-round p-fill p-icon"> <input type="checkbox" class="movie' + i + '" data-attribute="'+allTextLines[arr[i]].split(",")[0]+'"/> <div class="state p-info"> <i class="icon mdi mdi-check"></i> <label style="color: #0043A7;"><span class="questionname" style="font-size: 110%;' + "font-family: 'Kanit', sans-serif;" + ';padding-left: 1%;">'

            str = str + allTextLines[arr[i]].split(",")[1]
            total[allTextLines[arr[i]].split(",")[1]] = allTextLines[arr[i]].split(",")[0]
            str = str + '</span> </label> </div></div></div>  <div class="offset-lg-8 col-lg-4" style="font-size: 140%;"> <div class="ui circular labels"> <a style="font-size: 80%;" class="ui label 0'+i+'"  onclick="selec('+i+',0)"> 1 </a> <a style="font-size: 80%;" class="ui label 1'+i+'" onclick="selec('+i+',1)"> 2 </a> <a style="font-size: 80%;" class="ui label 2'+i+'" onclick="selec('+i+',2)"> 3 </a> <a style="font-size: 80%;" class="ui label 3'+i+'" onclick="selec('+i+',3)"> 4 </a> <a style="font-size: 80%;" class="ui label 4'+i+'" onclick="selec('+i+',4)"> 5 </a></div></div>'

        }

        $(".questionname").css({
            'font-family': "font-family: 'Lobster', cursive;"
        })
        $(".questions").empty();
        $(".questions").append(str)
    }
    else
    {
        var number = Math.floor((Math.random() * 100000) + 200000);
        var movlist  = final.join("_")
        var datatosent = number + "-" + movlist
        $.ajax({
            url:"http://localhost:63342/outreach-master/daksh/form/connect.php",
            type : "get",
            data : {
                data :datatosent
            },
            success:function (data) {
                console.log(data)
                datli = data.split("-");
                console.log(datli)
                str = ''
                for(var kj=0;kj<datli.length-1;kj++)
                {
                    $.ajax({
                        type: "GET",
                        dataType: "jsonp",
                        url: "https://www.omdbapi.com/?apikey=a0243c8d&t=" + datli[kj].split("@")[0].split("(")[0],
                        success: function(data){
                            qrcount = qrcount + 1
                            if(data.Response && data.Poster && data.Title && data.Plot && data.Poster != 'N/A') {
                               movielis = movielis + "," + data.Title
                                str = str + ' <div class="col-md-3"> <div class="card h-100" style="margin: 1%;"> <img class="card-img-top" src="' + data.Poster + '" alt="Card image cap"> <div class="card-body"> <h4 class="card-title">' + data.Title + '</h4><p class="card-text">' + data.Plot + '</p> </div> </div> </div>'
                                $(".questions").empty();
                                $(".questions").append(str)
                            }
                            qrr()

                        },
                        async:false,
                        error: function() {
                            return "Image not found.";
                        }


                    })
                    setTimeout(function () {
                        console.log()
                    },1000
                    )

                }




            }

        })
        var str = "<h1 style='text-align: center;padding:2%;color:#0043A7;font-family: myfont'>Hey Cinephile!! We are analysing your data. Kindly bear with us.</h1>"
        $(".nexts").hide()
        $(".questions").empty();
        $(".questions").append(str)
    }
}