import "./MyAbout.css";
export default function MyAbout() {
  return (
    <div>
      <p style={{ fontSize: "24px" }}>نبذةعني</p>
      <div
        style={{
          width: "600px",
          // boxShadow: "2px 3px 5px 2px rgba(214, 196, 161)",
          borderRadius: "16px",
          padding: "10px",
          //backgroundColor:'rgba(214, 196, 161,0.2)'
        }}
      >
        <p style={{ fontSize: "20px" }}>
          أنا خريج تقنية البرمجة وتطوير الويب مهتم بمجال تكنولوجيا المعلومات
          وتطوير التطبيقات. أمتلك خبرة في تطوير تطبيقات الويب باستخدام{" "}
          <b style={{ color: "#7A8B5A" }}>ASP.NET Core MVC</b>، وتصميم واجهات
          المستخدم، بالإضافة إلى الدعم التقني وحل المشكلات. عملت على عدة مشاريع
          عملية مثل أنظمة إدارة المواعيد وتقييم الموظفين، كما طورت تطبيقات
          بواجهات حديثة باستخدام <b style={{ color: "#7A8B5A" }}>Flutter</b>.
          أهتم بتطوير مهاراتي بشكل مستمر، خاصة في مجالات تطوير الويب، تصميم
          الواجهات، والتقنيات الحديثة، وأسعى لبناء حلول تقنية عملية تساعد على
          تحسين كفاءة العمل وتقديم تجربة مستخدم أفضل.
        </p>
      </div>
      <p style={{ fontSize: "24px" }}>المهارات</p>
      <div style={{ display: "flex" }}>
        <MySkills className={"btn-1"} skill="إطار عمل React.js" />
        <MySkills className={"btn-2asp"} skill="إطار عمل ASP.NET CORE MVC" />
        <MySkills className={"btn-1fi"} skill="Figma" />
      </div>
      <p style={{ fontSize: "24px" }}>اللغات</p>
      <div style={{ display: "flex", width:'' }}>
        <MySkills className={"btn-2"} skill="لغة C#"/>
        <MySkills className={"btn-1"} skill="لغة Python"/>
        <MySkills className={"btn-2"} skill="لغة Dart"/>
      </div>
    </div>
  );
}

function MySkills({ skill , className}) {
  return <div className={className}>{skill}</div>;
}