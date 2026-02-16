import "./MyNavbar.css";
export default function MyNavbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="right-item">هِــشــام</div>
        <div class="left-items">
          <a href="Hisham_Alsaleh_CV.pdf" target="_blank">الـسيـرة الـذاتـيــة</a>
          <a href="#projects">مــشــاريـعـي</a>
          <button class="lang-btn">English</button>
        </div>
      </nav>
    </div>
  );
}
