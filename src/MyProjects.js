import "./MyProjects.css";
export default function MyProjects() {
  return (
    <div>
      <p className="text">أعمالي</p>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Card>
          <img src="plc.png" alt="صورة" />
          <p>
            نظام تحكم صناعي لتشغيل أنظمة الجاكوزي آليًا باستخدام PLC وواجهة HMI
            تعمل باللمس.
          </p>
        </Card>
        <Card framework={"ASP.NET CORE MVC"}>
          <img src="evaapp.png" alt="صورة" />
          <p>نظام ويب لتقييم أداء الموظفين بشكل منظم مع تقارير ورسوم بيانية.</p>
        </Card>
        <Card framework={"ASP.NET CORE MVC"}>
          <img src="contractel.png" alt="صورة" />
          <p>
            نظام ويب لإنشاء العقود الإلكترونية مع إمكانية تصديرها بصيغة
            PDF.
          </p>
        </Card>
        <Card framework={"ASP.NET CORE MVC"}>
          <img src="appo.png" alt="صورة" />
          <p>نظام إلكتروني لتنظيم وإدارة المواعيد وربطها بالموظفين.</p>
        </Card>
        <Card framework={"Flutter"}>
          <img src="calc.png" alt="صورة" />
          <p>
            تطبيق جوال لحساب تكاليف إنشاء المسابح بناءً على الأبعاد الهندسية.
          </p>
        </Card>
      </div>
    </div>
  );
}

function Card({ children , framework }) {
  return <div className="Card">{children}
  <div><b style={{fontFamily:'JetBrains Mono'}}>{framework}</b></div>
  </div>;
}
