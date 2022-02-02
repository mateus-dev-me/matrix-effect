   //Pegando o elemento do canvas
   const c = document.getElementById("matrix");

   // Definindo o contexto 
   const ctx = c.getContext("2d");

   // definindo o canvas com máximo da tela
   c.height = window.innerHeight;
   c.width = window.innerWidth;

   // símbolos do Matrix
   const letters = [
       "日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ",
       "ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ",
       "ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".",
       "=","*","+","-","<",">","¦","｜","ﾘ"
   ];



   const fontSize = 18;

   // definindo quantas colunas serão necessárias pelo tamanho da tela e fonte
   const columns = c.width/fontSize;

   // criando um arryta para cada gota, sempre iniciando na posição do y=1
   let drops = []

   for (let x = 0; x < columns; x++) drops[x] = 1;

   function draw(){
       ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
       ctx.fillRect(0, 0, c.width, c.height)

       // definindo a cor e estilo da fonte 
       ctx.fillStyle = "#0F3";
       ctx.font = `${fontSize}px arial`;

       for (let i = 0; i < drops.length; i++) {
           // pegando uma letra randomicamente no nosso array
           const text = letters[Math.floor(Math.random() * letters.length)]

           // escrevendo na tela
           ctx.fillText(text, i * fontSize, drops[i] * fontSize)

           // resetando a posição da gota ao chegar no fim
           if (drops[i] * fontSize > c.height && Math.random() > 0.95) {
               drops[i] =  0
           }

           // movendo o código matrix no eixo Y
           drops[i]++;
       }
       window.requestAnimationFrame(draw);
   }

   draw()