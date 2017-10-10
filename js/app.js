//creamos una variable que guarde el tipo de operación que va realizar el usuario 1. cifarr, 2. descifrar
do{
    var typeoper=0;
    var strMenu = prompt("Que operación desea realizar \n 1. Cifrar \n 2. Descifrar \n 3. Salir")
    typeoper = parseInt(strMenu);
    
    if (typeoper === 1){// Ingresando a la operación cifrar
        //creamos una variable que guarde el texto que ingresará el usuario          
        var str= prompt("Ingrese el texto a encripar")
       var typestr=parseInt(str);
        // antes de ingresar a la función creamos una condición que solo permita string
        if(Number.isInteger(typestr) != true && str !== ""){
            //si es string ingresará a la función al cual llamaremos cipher
            function cipher(str){
            //creamos un array para guardar cada letra encriptada
             var newarr=[];
             //creamos un for que recorra cada letra del texto
             for(i=0; i< str.length;i++){
                //para proceder según la frase sea mayúscula o minúscula
                //creamos un if si el codigo ASCII de la letra es <=90, estonces es mayúscula
                    if( str.charCodeAt(i) <= 90){
                
                        //obtenemos el número ASCII de cada letra
                        var codAscii= str.charCodeAt(i);
                        // calculamos el código Ascii de la letra
                        var letterCipher= ((codAscii -65) + 33)%26 +65;
                        //obtenemos la letra del codigo encriptado
                        var getLetter = String.fromCharCode(letterCipher);
                        // guardamos cada letra en un array con el método push
                        newarr.push(getLetter);
                        //creamos una variable que guarde la phase encriptada como cadena
                        var phraseCipher = newarr.join("");
    
                    }
                    //para el caso que el código sea mayor a 90, entonces será minúscula
                    else{
                    
                        //obtenemos el número ASCII de cada letra
                        var codAscii= str.charCodeAt(i);
                        // calculamos el código Ascii de la letra
                        var letterCipher= ((codAscii -97) + 33)%26 +97;
                        //obtenemos la letra del codigo encriptado
                        var getLetter = String.fromCharCode(letterCipher);
                            // guardamos cada letra en un array con el método push
                        newarr.push(getLetter);
                        //creamos una variable que guarde la phase encriptada
                        var phraseCipher = newarr.join("");
    

                    }
                }
             // Imprimimos el texto encriptado
            alert(phraseCipher);
            }
            //Asignamos el valor de str a la función cipher
            cipher(str);
        }
        else{ // Si el valor str no cumple con la condición:
        alert("Debe ingresar un texto")
        }
    
    }
    else if( typeoper === 2){
        var str= prompt("Ingrese el texto a desencriptar") // obtenemos el texto a desencriptar
        var typestr=parseInt(str);
        if(Number.isInteger(typestr) != true && str !== ""){
            //si es string ingresará a la función al cual llamaremos decipher
            function decipher(str){
                //creamos un array para guardar cada letra desencriptada
                var newarr=[];
             //creamos un for que recorra cada letra del texto
             for(i=0; i< str.length;i++){
                    //para proceder según la frase sea mayúscula o minúscula
                    //creamos un if si el codigo ASCII de la letra es <=90, estonces es mayúscula
                    if( str.charCodeAt(i) <= 90){
                
                        //obtenemos el número ASCII de cada letra
                        var codAscii= str.charCodeAt(i);
                        // calculamos el código Ascii de la letra
                        var letterDecipher= ((codAscii +65) - 33)%26 +65;
                        //obtenemos la letra del codigo desencriptado
                        var getLetter = String.fromCharCode(letterDecipher);
                        // guardamos cada letra en un array con el método push
                        newarr.push(getLetter);
                        //creamos una variable que guarde la phase desencriptada
                        var phraseDecipher = newarr.join("");
            
                    }
                    else{ //para el caso que el código sea mayor a 90, entonces será minúscula
                    
                        //obtenemos el número ASCII de cada letra
                        var codAscii= str.charCodeAt(i);
                        // calculamos el código Ascii de la letra
                        var letterDecipher= ((codAscii + 97) + 33)%26 +97;
                        //obtenemos la letra del codigo desencriptado
                        var getLetter = String.fromCharCode(letterDecipher);
                        // guardamos cada letra en un array con el método push
                        newarr.push(getLetter);
                        //creamos una variable que guarde la phase desencriptada
                        var phraseDecipher = newarr.join("");
    

                    }
                }
             // Imprimimos el texto desencriptado
            alert(phraseDecipher);
            }
            decipher(str);
        }
        else{
        alert("Debe ingresar un texto")
        }
    
    }
    
    else if (typeoper === 3){ // si el usuario ingresa 3  para salir, imprimirenmos "Gracias por su visita"
        alert("Gracias por su visita");
    }
    else{ // si el usuario no ingresa un dato se imprimirá "Debe ingresar un texto"
        alert("Debe ingresar un número de operación")
        
    }
}
while(typeoper !== 3);
