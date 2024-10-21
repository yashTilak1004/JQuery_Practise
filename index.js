/*
$(document).ready(function(){
    
    $('#button').click(function(){
        $('p').hide();
        console.log("Hidden");
    });

    $('p').mouseenter(function(){
        //$(this).hide();
        console.log("Mouse enter hidden");
    });

    $('p').mouseleave(function(){
        console.log("Mouse left");
    })
});
*/
/*
$("p").on({
    mouseenter:function(){
        $(this).css('color','red');
    },
    mouseleave:function(){
        $(this).css('color','grey');
    },
    click:function(){
        alert("Clicked");
    }
})
*/

//hide and show stuff
/*
$(function(){
    $('#hide').click(function(){
        $('#b_box').fadeIn(2000);
        console.log("Clicked");
    });
    //toggle for both show and hide
   
})
*/

//fade to dims
/*
$(document).ready(function(){
    $("#hide").click(function(){
        $("#b_box").fadeTo(2000,0.3);
        $("#l_box").fadeTo(3000,0.4);
    });
});
*/

//sliding - slideDown,slideUp,slideToggle
/*
$(document).ready(function(){
    $("#hide").click(function(){
        $("#l_box").slideToggle(3000);
});});
*/

//$(selector).animate({params},speed,callback)->parameters are css tag that will change and speed
//stop method to stop animations before they're completion
/*
$(document).ready(function(){
    $("#hide").click(function(){
        $("#l_box").animate(
            {
                height:'300px',opacity:'0.6'
            },3000,function(){
                console.log("first step");
            })
        $("#l_box").animate(
            {
                width:'300px',opacity:'0.2'
            },3000,function(){
                console.log("second step");
            })    
        $("#l_box").animate(
            {
                height:'100px',opacity:'0.4'
            },3000,function(){
                console.log("Evening lotus");
            })
    });
    $("#stop").click(function(){
        $("#l_box").stop();
    });
})
*/

//method chaining
/*
$(document).ready(function(){
    $("#hide").click(function(){
        $("#l_box").css("color","red")
        .css("backgroundColor","green")
        .slideUp(2000)
        .slideDown(2000);
    });
});
*/

//dom methods->test(text in b/w tags)
/*
$(document).ready(function(){
    $("#hide").click(function(){
        alert("Text:"+$("a").attr("href"));//first anchor tag->data inside its attribute href.
        alert("Text:"+$("#l_box").attr("style"));
    })
    //for set text and html,leaving it empty is considered as output
    //attributes too can be changed by just typing it beside the attribute name.->(attribute,value)
    $("#hide").click(function(){
        $("#l_box").html("<h3>Jiren the grey</h3>");
        $("a").attr("href","https://Bing.com");
    })
})
*/

//append->add text at the end.Prepend->add text at the beginning.
/*
$(document).ready(function(){
    $("#hide").click(function()
    {
        $("p").append("LMAO even");
        //create new element with JQuery->1.store it in a variable:"$(open and close tags).text("content");",2.then body.append(that variable)
        //let res = $("<h1></h1>").text("New element right here.");
        //$('body').append(res);
        //insert content before pushing the button.insert content after pusing the button.
    });
});
*/

/*
$(document).ready(function(){
    $("#hide").click(function()
    {
        //gives access to the first box
        ($('div').first());
    });
});
*/

//Ajax(Asynchronus Javascript and XML)->module to communicate with server
//to load data in the background and display it without reloading the whole page.
//$(selector).load(url,data,callback);
/*
$(document).ready(function(){
    $("#hide").click(function(){
        $('#l_box').load("https://fake-json-api.mock.beeceptor.com/users");
    });
})
*/
/*
$(document).read(function(){
    $('#submitButton').click(function(e){
        e.preventDefault();
        url = $("#formId").attr('action');
        $.ajax({
            type:"POST",
            url:url,
            data:$('#formId').serialize(),
            success: function (data) {
                alert("Form Submitted Successfully");
            },
            error: function (data) {
                alert("Error occurred while submitting the form");
            }
        });
    });
});
*/