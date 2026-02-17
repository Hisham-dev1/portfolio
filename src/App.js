import "./App.css";
import MyBody from "./MyBody";
import MyInfo from "./MyInfo";
import MyNavbar from "./MyNavbar";
import "./MyBody.css";
import MyProjects from "./MyProjects";
import MyFooter from "./MyFooter";

function App() {
  return (
    <div>
      <html dir="rtl"></html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      ></link>
      <MyNavbar />
      <div className="container" style={{ display: "flex" }}>
        <div style={{ width: "60%", padding: "16px" }}>
          <MyBody />
        </div>
        <div style={{ width: "40%", marginTop: "60px" }}>
          <MyInfo />
        </div>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div className="section-divider"></div>
      </div>
      <div>
        <section id="projects">
          <MyProjects />
        </section>
      </div>
      <MyFooter/>
    </div>
  );
}

export default App;
