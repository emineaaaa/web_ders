import "./App.css";
import React from 'react'

function Arama(){
  const [aramaMetni,setAramaMetni]=React.useState(" ");
  function handleChange(event){
    setAramaMetni(event.target.value);
  }
  return(
    <div>
       <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={handleChange}/>
    <p>
      <strong> {aramaMetni} aranıyor...</strong>
    </p>
    </div>
   
  );
}
function Yazi(props){
  return(
    <li key={props.yazi.id}>
        <span>
          <a href={props.yazi.url}>{props.yazi.baslik}</a>, 
        </span>
        <span><b>Yazar:</b> {props.yazi.yazar}, </span>
        <span><b>Yorum Sayısı:</b> {props.yazi.yorum_sayisi}, </span>
        <span><b>Puan:</b> {props.yazi.puan}</span>
      </li>
  )
}
function Liste(props){
  return (
  <ul>
  {props.yazilar.map(function (yazi) {
    return(
      <Yazi key={yazi.id} yazi={yazi}/>
    );
  })}{" "}
</ul>
);
}
function App() {
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
  ];
  return (
    <div>
      <h1>Yazılar</h1>
     <Arama/>
      <hr />
      <Liste yazilar={yaziListesi}/>
    </div>
  );
}
export default App;
