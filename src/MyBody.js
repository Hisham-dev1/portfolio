import MyAbout from "./MyAbout";
import './MyBody.css'
export default function MyBody() {
  return (
    <div>
      <p style={{ fontSize: "30px" }}>
        أهلًا ، انا <u style={{color:'#7a8b5a'}}>هشام الصالح</u>
      </p>
      <MyAbout />
    </div>
  );
}
