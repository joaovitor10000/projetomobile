//Esse Java vai muda algumas palavras.//
function cripto(){
    //O text do Html vai se trasfomar em valor.//
    let text= document.getElementById('text').value
     //Aqui são as palavras fatiadas.//
     let split= text.split("")
     //a gente vai contar quantas partes fatiadas tem no texto.//
     let chars= split.length
     //esse dois são um array //
     const pre=['Z','E','N','I','T','P','O','L','A','R','z','e','n','i','t','p','o','l','a','r',]
     const pos=['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','a',]
    
     let rslt = document.getElementById('result')
      // eu acho que esse código vai aparecer o resultado final//
      for (i = 0 ; i < chars; i++ ) {
        let index = pre. indexOf(split[i])
        //esse dois são os index //
        if (index ===-1 ){
        split[i] = split [i]
        } else {
         // eu acho que esse código vai outra o idioma das letras//
            split[i] = pos [index]
        }
        // esse é o join//
        const toString = split.join('')
        // aqui fiqua o final //
        rslt.innerText = toString
        //console.log(split[i])
      }

     
     

}