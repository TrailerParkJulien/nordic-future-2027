
import './styles/main.scss'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="site-logo" href="#" aria-label="Nordic Future – startsida">
      NORDIC FUTURE<span>2027</span>
    </a>

    <nav class="main-nav" aria-label="Huvudnavigation">
      <a href="#about">Om konferensen</a>
      <a href="#schedule">Program</a>
      <a href="#speakers">Talare</a>
      <a href="#tickets">Biljetter</a>
    </nav>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <p class="hero-label">Teknik · Innovation · Framtid</p>

      <h1 id="hero-title">
        Shape the<br />
        <span>Future.</span>
      </h1>

      <p class="hero-description">
        En konferens om idéerna, människorna och tekniken
        som formar morgondagens samhälle.
      </p>

      <a class="hero-button" href="#tickets">
        Upptäck biljetter
      </a>
    </section>

    <section id="about" class="about">
      <h2>En blick mot framtiden</h2>
      <p>
        Nordic Future 2027 samlar innovatörer, kreatörer och
        teknikentusiaster för att utforska vad som väntar runt hörnet.
      </p>
    </section>

    
<section id="schedule" class="schedule">
  <p class="section-label">21 MAJ 2027 · STOCKHOLM</p>
  <h2>Konferensprogram</h2>
  <p class="section-intro">
    En dag fylld av nya perspektiv, inspirerande idéer
    och samtal om framtidens teknik.
  </p>

  <div class="schedule-grid">
    <article class="session">
      <time datetime="09:00">09.00</time>
      <div>
        <h3>Welcome to the Future</h3>
        <p class="session-speaker">Elin Andersson · Framtidsforskare</p>
        <p>En introduktion till de tekniska förändringar som formar vårt samhälle.</p>
      </div>
    </article>

    <article class="session">
      <time datetime="10:00">10.00</time>
      <div>
        <h3>AI & Humanity</h3>
        <p class="session-speaker">Marcus Lind · AI-entreprenör</p>
        <p>Hur kan artificiell intelligens hjälpa oss att skapa en bättre framtid?</p>
      </div>
    </article>

    <article class="session">
      <time datetime="11:30">11.30</time>
      <div>
        <h3>Designing Tomorrow</h3>
        <p class="session-speaker">Sara Nyström · UX-designer</p>
        <p>Om hur mänsklig design och ny teknik kan samverka.</p>
      </div>
    </article>

    <article class="session">
      <time datetime="13:00">13.00</time>
      <div>
        <h3>The Green Revolution</h3>
        <p class="session-speaker">David Berg · Hållbarhetsstrateg</p>
        <p>Tekniska innovationer som kan bidra till en mer hållbar värld.</p>
      </div>
    </article>

    <article class="session">
      <time datetime="14:30">14.30</time>
      <div>
        <h3>Beyond the Horizon</h3>
        <p class="session-speaker">Nora Eriksson · Teknikvisionär</p>
        <p>En blick på nästa generations innovationer och möjligheter.</p>
      </div>
    </article>
  </div>
</section>

    <section id="speakers" class="speakers">
      <h2>Talare</h2>
      <p>Möt människorna som formar framtiden.</p>
    </section>

    <section id="tickets" class="tickets">
      <h2>Biljetter</h2>
      <p>Mer information om biljetter kommer snart.</p>
    </section>
  </main>

  <footer class="site-footer">
    <p>&copy; 2027 Nordic Future. Alla rättigheter förbehållna.</p>
  </footer>
`

