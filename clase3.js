 var students  = [ "One", "Two"]; //objeto literal
 //console.log( students)


 var studentsTwo = new Array( "One", "Two" );
 // en los arrays en JS el índice del array comienzan en 0
 //console.log( studentsTwo );
 //console.log( typeof studentsTwo) ;
 //console.log( studentsTwo instanceof Array);
 

 // Sets

 var nums = new Set();

 nums.add( "One" );
 nums.add( "Two" );
 nums.add( "Three" );
 nums.add( "Three" );
 nums.add( "Five" );

 var teachers = new Map();

 teachers.set("Yoshue", "Master") ;
 teachers.set("Peter", "Teacher") ;
 teachers.set("John", "Learner") ;
// console.log("teachers");


 // json
 // estructura de información

// 1 er forma de crear un json
// 

var o = {
    name: "Joshua",
    age: 33
}

var j={
    data: ["Joshua", 33, [true, false],  {x : 10, y: 30}],
    info: [1, true],
    value: {a:1, b:2, c:true}
};

var months= new Map();

months.set('1',"Enero");
months.set('2',"Febrero");
months.set('3',"Marzo");
months.set('4',"Abril");
months.set('5',"Mayo");
months.set('6',"Junio");
months.set('7',"Julio");
months.set('8',"Agosto");
months.set('9',"Septiembre");
months.set('10',"Octubre");
months.set('11',"Noviembre");
months.set('12',"Diciembre");



function getDate(objeto , n) {
    if (n ==1 ){ return months.get('1')    }
    else if (n==2) { return months.get('2')}
    else if (n==3) { return months.get('3')}
    else if (n==4) { return months.get('4')}
    else if (n==5) { return months.get('5')}
    else if (n==6) { return months.get('6')}
    else if (n==7) { return months.get('7')}
    else if (n==8) { return months.get('8')}
    else if (n==9) { return months.get('9')}
    else if (n==10){ return months.get('10')}
    else if (n==11){ return months.get('11')}
    else if (n==12){ return months.get('12')}
    else {return undefined};
}

function getDate2(objeto, n){
    for (i in [1,2,3,4,5,6,7,8,9,10,11,12]){
        if (n==i){
            return(months.get(i.toString()));
        }
    }
}
var i = 5;
/*console.log(getDate2(months,i));*/
/****************************************************************************************************************************************************************
 * 
 ***************************************************************************************************************************************************************/

for(i = 1; i < 6 ; i++ ){

    for(j=1; j <=i ; j++){
            
            console.log("#");
            
        }
    console.log("\n");

}

/*intenta el llamdo de una función*/
try{

    findplace();

}

/*si el bloque try genera un error entonces se ejecuta catch*/

catch( e ){

    //console.log( e.message );
    if ( e.message == "finplace is not defined"){
        console.log( "La función findplace no se puede utilizar") ;
    }
}

// los bloques try catch tienen un bloque finally siempre se ejecuta y
finally{
    console.log("Finnaly Block performed");

}
/*
try -catch son muy tardados evitar uso en bucles u otros controles


JS llama objeto a cualquier archuvi
*/
/*etiqueta
<span script>*/












var title = document.getElementById( 'title3');

/* Eventos: acciones que suceden k */

function clickPerformed( e ){

}



/*<div id="holder"></div>;
<div></div>;
*/


var dataDOM = ["Yellow", "Red"]
var holder = document.getElementsByTagName( "div")[0]
// holder.inner.HMTL = "<strong>HELLO</strong>"
var domContent = "";
for (var i = 0; i < dataDOM.length;  i++){

    console.log( dataDOM[ i ]);
    domContent += "<p>" + dataDOM[ i ];
}
domContent +="</p>";
holder.innerHTML = domContent;
console.log(domContent);






'Evemts'

/*ayuda a agregar e
https://github.com/josegreg/JS_EDC.git
*/
