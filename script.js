var a = document.getElementById('btn');
a.addEventListener('click',()=>{
    async function call(){
        console.log("cl")
    var n = document.getElementById('input').value;
    var wrd = n.toLowerCase();

    var nm= document.getElementById('wrd');
    nm.innerText=`${wrd}`

    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${wrd}`;

    var F_url=fetch(url);
    var one = await F_url;
    var data= await one.json();
    var obj=data[0];
    console.log(obj);
    console.log(Object.keys(data[0]))
    console.log(obj.meanings[1])
    var mean = obj.meanings[1];
    var definition_1=mean.definitions[0].definition;
    
    console.log(definition_1);
    var ap = document.getElementById('1');
    ap.innerText=`${definition_1}`
    }
    call()
})

var cl=document.querySelector('#clr');
cl.addEventListener('click',()=>{
    var s = document.getElementById('input');
  console.log(s)
  s.value="";
  var ap = document.getElementById('1');
    ap.innerText="";
    var nm= document.getElementById('wrd');
    nm.innerText="";

})