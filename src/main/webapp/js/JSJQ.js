/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// Opgave 1
$(function (){
    
    $("#firstDiv").on("click", function (){
        
        $(this).hide();
    });
    
    $("secondDiv").hover(
            function() {
                
                $(this).css({
                    
                    "border-style": "solid",
                    "border-width": "4px"
                });
            });
            
            $("#thriDiv").on("click", function () {
                
                $(this).css("font-size", "200%");
    
});

//Opgave 2

$(".numRow").on("click", function() {
    
    var text = $(this).text();
    var number = parseInt(text);
    number = number * number;
    $(this).text(number + "");
});


// opgave 3

var itemsInList = document.getElementById("ulList").getElementsByTagName("li");
$(itemsInList).filter(function (index) {
    
    return index % 2 === 0;
    
    
}).css("background-color", "gray");

$(itemsInList).each(function (index, element) {
    
    var fontSize = $(this).css('font-size');
    var num = parseInt(fontSize);
    var newNum = num + index;
    $(this).css("font-size", newNum + "px");
    
    
});

// Opgave 4

var selected = null;

var imgs = document.getElementById("picDiv").getElementsByTagName("img");


$(imgs).each(function (){
    
    $(this).on("click", function () {
        
        if (selected === null) {
            
            
            selected = $(this);
            
            $(this).css("border", "solid");
            $(this).css("border-color", "green");
            
            
        }
        
        else {
            
            
            var beforeSelected = $(selected).prev("img").get(0);
            
            $(this).after($(selected));
            $(beforeSelected).after($(this));
            $(selected).css("border", "");
            $(selected).css("border-color", "");
            if (beforeSelected === this) {
                
                
                $(this).before($(selected));
                
        }
        
        selected = null;
    }
    });
});

// Opgave 5


$("#subBtn").on("click", function () {
    
    checkIfEmpty();
});

function checkIfEmpty(){
    
    $("#formID").find(":text").each(function (){
        
        if ($(this).val().length === 0){
            
            $(this).val("Put something");
            $(this).css("color", red);
            
        }
    });
}

$("#subBtn").prop("disabled", true);

$("#formID").find(":text").each(function (){
    
    $(this).on("change", function(){
        
        if($(this).val().length === 0){
            
            $("#subBtn").prop("disabled", true);
            
        }
        
        else {
            
            $("#subBtn").prop("disabled", false);
        }
    });
});


// Opgave 6

function Person(name, age){
    
    this.name = name;
    this.age = age;
};

var per1 = new Person("Jan", 2);
var per2 = new Person("Hans", 4);
var per3 = new Person("Gret", 72);

var persons = [p1, p2, p3];

setUpTable();

function setUpTable(){
    
    
    $(persons).each(function (){
        
        
        var tr = "<tr>";
        tr += "<td>" + $(this).attr("name") + "</td>";
        tr += "<td>" + $(this).attr("age") + "</td><tr>";
        $("#tBody").append(tr);
        
    });


var elementsInTable = document.getElementsById("tableid").getElementsByTagName("tr");

$(elementsInTable).each(function (){
    
    $(this).hover(function () {
        
        $(this).css("font-weight", "bold");
        $(this).css("font-style", "italic");
        
    },
    function(){
        
        $(this).css("font-weight", "");
        $(this).css("font-style", "");
        
    });
    
});
}

});