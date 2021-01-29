import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

function MediaCard({ profile, titel, body, imgUrl, text}) {
  return <div className="main">
    <div>
      <div className="profile"> <img src={profile} /></div>
      <div className="div">
        <p className="titel"> {titel}  </p>
        <p className="body"> {body}  </p>
        <div className="clear"></div>
      </div>
    </div>
    <div>
      <p>{text}</p>
    </div>
    <div className="img"><img src={imgUrl} /></div>

  </div>
}
ReactDOM.render(<div><MediaCard text="25 December 1876 – 11 September 1948) was a barrister, politician and the founder of Pakistan." profile="https://upload.wikimedia.org/wikipedia/commons/c/cc/Jinnah1945c.jpg" titel="Quaid-E-Azam" body={new Date().toLocaleTimeString()} imgUrl="https://upload.wikimedia.org/wikipedia/commons/c/cc/Jinnah1945c.jpg" />
<MediaCard text="Sir Muhammad Iqbal (Urdu: محمد اقبال‎; 9 November 1877 – 21 April 1938) was a poet, philosopher, lawyer, theorist and politician from Punjab." profile="https://img.dunyanews.tv/news/2017/November/11-09-17/news_big_images/413576_22615425.jpg" titel="Allama Iqbal" body={new Date().toLocaleTimeString()} imgUrl="https://img.dunyanews.tv/news/2017/November/11-09-17/news_big_images/413576_22615425.jpg" /> 
<MediaCard text="Nawabzada Liaquat Ali Khan (Næʍābzādāh Liāqat Alī Khān About this soundlisten (help·info), Urdu: لِیاقت علی خان‎ ; 1 October 1895 – 16 October 1951)."profile="https://i.pinimg.com/originals/4f/dc/56/4fdc569d7fe2ab76e5eef6c1553a50e0.jpg" titel="Liaquat Ali Khan" body= {new Date().toLocaleTimeString()}  imgUrl="https://i.pinimg.com/originals/4f/dc/56/4fdc569d7fe2ab76e5eef6c1553a50e0.jpg" /></div>, document.getElementById("root"));
