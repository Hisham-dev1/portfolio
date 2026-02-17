import "./MyInfo.css";
export default function MyInfo() {
  return (
    <div className="info">
      <p className="contact">تواصل مــعــي</p>
      <div>
        <MyButton name="Linked in" href="https://www.linkedin.com/in/hisham-alsaleh">
          <i class="bi bi-linkedin" style={{ marginRight: "5px" }}></i>
        </MyButton>
        <MyButton href="tel:+966592752374" name="Phone">
          <i class="bi bi-telephone-fill" style={{ marginRight: "5px" }}></i>
        </MyButton>
        <MyButton href="mailto:hishamsaleh74@outlook.com" name="Email">
          <i class="bi bi-envelope-fill" style={{ marginRight: "5px" }}></i>
        </MyButton>
      </div>
    </div>
  );
}

function MyButton({ name, href, children }) {
  return (
    <button onClick={() => window.open(href, "_blank")} className="my-button">
      {name}
      {children}
    </button>
  );
}
