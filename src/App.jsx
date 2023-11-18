import "./App.css";
import React from 'react'

function Arama(props){
  
  function handleChange(event){
    props.onSearch(event);
  };
  return(
    <div>
       <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={handleChange} value={props.aramaMetni}/>
    
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
  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React");
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
    {
      baslik: "Linkedin Hesabı",
      url: "https://www.linkedin.com/in/emine-aydınlı-462204267/",
      yazar: "Emine Aydınlı",
      yorum_sayisi: 20,
      puan: 4.5,
      id: 2,
    },
    {
      baslik: "JavaScript Öğreniyorum",
      url: "https://www.google.com.tr/?hl=tr",
      yazar: "Alperen Akal",
      yorum_sayisi: 2,
      puan: 5,
      id: 3,
    },
    {
    baslik: "Dil ve Konuşma Terapistliği Eğitimi",
    url: "https://www.google.com.tr/?hl=tr",
    yazar: "Ece Su Esirgemez",
    yorum_sayisi: 2,
    puan: 5,
    id: 3,
  },
  ];
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  const arananYazilar=yaziListesi.filter(
    (item) =>
      item.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      item.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  //birinci aşama callback handler metodu oluşturma
  function handlerSearch(event){
    console.log(event.target.value);
    setAramaMetni(event.target.value);
  }
  return (
   <>
      <h1>Yazılar</h1>
     <Arama aramaMetni={aramaMetni} onSearch={handlerSearch} />
     <p>
      <strong> {aramaMetni} aranıyor...</strong>
    </p>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </>
  );
}
export default App;
