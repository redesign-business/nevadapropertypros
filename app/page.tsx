const CTA = "Request a Project Quote";
const CTA_HREF = "mailto:Service@NevadaPropertyPros.com?subject=Project%20Quote%20Request";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Nevada Property Pros home">
          <span className="brandMark">NPP</span>
          <span>Nevada Property Pros<small>Reno + Sparks, Nevada</small></span>
        </a>
        <div className="navLinks">
          <a href="#work">Projects</a>
          <a href="#services">Services</a>
          <a href="#standards">Our standards</a>
        </div>
        <a className="button compact" href={CTA_HREF}>{CTA}</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Property care, proved in the details</p>
          <h1>Reno homes deserve work that holds up.</h1>
          <p className="lede">Repairs, maintenance, and full-room transformations delivered with practical experience, clear communication, and respect for your property.</p>
          <div className="heroActions">
            <a className="button" href={CTA_HREF}>{CTA}</a>
            <span>Serving homeowners &amp; property managers</span>
          </div>
        </div>
        <figure className="heroMedia">
          <img src="/images/house-with-logo_edited_edited-aed222407c.jpg" alt="Nevada Property Pros home project" />
          <figcaption><strong>Local by design.</strong> Built for Northern Nevada properties.</figcaption>
        </figure>
      </section>

      <div className="proofBar" aria-label="Business credentials">
        <span><b>01</b> Licensed Nevada business</span>
        <span><b>02</b> Documented remodels</span>
        <span><b>03</b> 7-day satisfaction policy</span>
      </div>

      <section className="work" id="work">
        <header className="sectionHead">
          <div><p className="eyebrow">Proof, not promises</p><h2>A complete home, reworked.</h2></div>
          <p>New flooring, upgraded kitchen and bathrooms, improved lighting, and greater energy efficiency came together in one cohesive transformation.</p>
        </header>
        <div className="comparison">
          <figure className="projectImage before">
            <img src="/images/480be2_5b2b9db2f7a641909a85b1f451cef35e-mv2-9f5a5214c7.jpg" alt="Living room before the whole-home remodel" />
            <figcaption><span>Before</span> A space ready for a new chapter</figcaption>
          </figure>
          <div className="projectNumber" aria-hidden="true">01</div>
          <figure className="projectImage after">
            <img src="/images/palm-desert-living-room-3-bf7f20a957.webp" alt="Finished living room after the whole-home remodel" />
            <figcaption><span>After</span> Brighter, refined, and made to live in</figcaption>
          </figure>
        </div>
      </section>

      <section className="bathroom">
        <div className="bathVisual" aria-label="Bathroom remodel scope illustration">
          <div className="tile tileOne" />
          <div className="tile tileTwo" />
          <div className="blueprint">
            <span>STUDS</span><i /><span>PLUMBING</span><i /><span>FINISH</span>
          </div>
          <strong>02</strong>
        </div>
        <div className="bathCopy">
          <p className="eyebrow">From the studs up</p>
          <h2>A bathroom rebuilt at the foundation.</h2>
          <p>Not a surface-level refresh. This complete remodel included new plumbing, a modern vanity, bathtub, lighting, and flooring for a room where every layer works together.</p>
          <ul>
            <li>New plumbing</li><li>Modern fixtures</li><li>Lighting + flooring</li>
          </ul>
          <a className="textLink" href={CTA_HREF}>{CTA} <span>↗</span></a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="serviceIntro">
          <p className="eyebrow">One reliable call</p>
          <h2>Care for the whole property.</h2>
          <p>From the nagging fix to ongoing upkeep, professional-grade tools and proven techniques keep your home working as it should.</p>
          <a className="button light" href={CTA_HREF}>{CTA}</a>
        </div>
        <div className="serviceGrid">
          <article><b>01</b><h3>Home repairs</h3><p>Practical solutions for everyday wear, damage, and problem areas.</p></article>
          <article><b>02</b><h3>Property maintenance</h3><p>Routine attention that helps prevent expensive surprises.</p></article>
          <article><b>03</b><h3>Room remodels</h3><p>Coordinated upgrades with function considered from the start.</p></article>
          <article><b>04</b><h3>Property manager support</h3><p>Responsive, professional care for homes across Reno and Sparks.</p></article>
        </div>
      </section>

      <section className="standards" id="standards">
        <div className="licenseCard">
          <span>STATE OF NEVADA</span>
          <div className="seal">NV</div>
          <p>Registered Business</p>
          <strong>#NV20253455341</strong>
          <small>NEVADA PROPERTY PROS, LLC</small>
        </div>
        <div className="standardsCopy">
          <p className="eyebrow">Accountability built in</p>
          <h2>Licensed locally. Standing behind every job.</h2>
          <p>If something doesn’t feel right, contact us within seven days of service completion. We’ll promptly review the concern and determine the right resolution.</p>
          <div className="resolutionRow">
            <span><b>Repair</b>Correct or improve the work</span>
            <span><b>Credit</b>Apply value to future service</span>
            <span><b>Refund</b>Partial refund when appropriate</span>
          </div>
        </div>
      </section>

      <section className="journal">
        <header className="sectionHead">
          <div><p className="eyebrow">Local know-how</p><h2>Notes from the field.</h2></div>
          <p>Straightforward guidance for keeping Northern Nevada homes healthy, safe, and ready for every season.</p>
        </header>
        <div className="articles">
          <article>
            <img src="/images/480be2_9cbf7e389c9641d1a60d24b48aba9f62-mv2-9ce2ef4840.jpg" alt="Reno home maintenance advice" />
            <div><span>4 min read</span><h3>Essential Property Maintenance Tips for Reno Homeowners</h3><p>Regular inspections and timely upkeep can help avoid costly repairs down the line.</p></div>
          </article>
          <article>
            <img src="/images/480be2_43761dc90cac4a7996bfadfaf04c1f85-mv2-8644a4478a.jpg" alt="Professional property maintenance work" />
            <div><span>Local guide</span><h3>How to Choose a Property Maintenance Service in Reno</h3><p>What to look for in a dependable partner for your property.</p></div>
          </article>
        </div>
      </section>

      <section className="faq">
        <div className="faqVisual">
          <span>Reno</span><span className="route" /><span>Sparks</span>
          <strong>39.5° N<br />119.8° W</strong>
        </div>
        <div className="faqList">
          <p className="eyebrow">Good to know</p><h2>Before we get to work.</h2>
          <details open><summary>What kinds of projects do you take on?</summary><p>General home repair, routine property maintenance, handyman work, and larger room or whole-home improvements.</p></details>
          <details><summary>Where do you work?</summary><p>We serve homeowners and property managers throughout Reno and Sparks, Nevada.</p></details>
          <details><summary>What if I have a concern after service?</summary><p>Contact us within seven days. Depending on the situation, we may offer a repair or adjustment, service credit, or partial refund.</p></details>
        </div>
      </section>

      <section className="finalCta">
        <p className="eyebrow">Your property, properly cared for</p>
        <h2>Let’s make the next project the one that lasts.</h2>
        <a className="button light" href={CTA_HREF}>{CTA}</a>
      </section>

      <footer>
        <div className="brand"><span className="brandMark">NPP</span><span>Nevada Property Pros<small>Property repair + maintenance</small></span></div>
        <p>Reno, NV 89506<br />775-781-0209</p>
        <p>Licensed Nevada Business<br />#NV20253455341</p>
        <p>© 2026 Nevada Property Pros, LLC</p>
      </footer>

      <style>{`
        :root{--ink:#17221c;--pine:#173f32;--sage:#90a58f;--cream:#f3f0e8;--sand:#d8c7aa;--rust:#b65335;--white:#fff;--line:rgba(23,34,28,.18)}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}img{display:block;width:100%}p{line-height:1.65}.nav{height:88px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);background:var(--cream);position:relative;z-index:5}.brand{display:flex;align-items:center;gap:12px;font-weight:800;letter-spacing:-.02em}.brand small{display:block;font-size:10px;letter-spacing:.14em;text-transform:uppercase;margin-top:4px;font-weight:500}.brandMark{width:42px;height:42px;border:1px solid var(--ink);display:grid;place-items:center;font-size:11px;letter-spacing:.08em}.navLinks{display:flex;gap:34px;font-size:13px}.navLinks a:hover{color:var(--rust)}.button{display:inline-flex;align-items:center;justify-content:center;background:var(--rust);color:white;padding:17px 24px;font-size:12px;letter-spacing:.09em;text-transform:uppercase;font-weight:800;transition:.2s}.button:hover{background:#91412c;transform:translateY(-2px)}.button.compact{padding:13px 18px}.hero{min-height:670px;display:grid;grid-template-columns:48% 52%;padding-left:7vw}.heroCopy{align-self:center;max-width:650px;padding:80px 6vw 80px 0}.eyebrow{text-transform:uppercase;letter-spacing:.18em;font-size:11px;font-weight:800;color:var(--rust);margin:0 0 24px}.hero h1{font-family:Georgia,serif;font-size:clamp(52px,6vw,94px);font-weight:400;line-height:.94;letter-spacing:-.055em;margin:0}.lede{font-size:17px;max-width:550px;margin:30px 0;color:#4f5a53}.heroActions{display:flex;align-items:center;gap:24px;margin-top:34px}.heroActions span{font-size:12px;color:#687269;max-width:130px}.heroMedia{margin:0;position:relative;overflow:hidden;min-height:600px}.heroMedia img{height:100%;object-fit:cover}.heroMedia:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(23,63,50,.1),transparent 60%);pointer-events:none}.heroMedia figcaption{position:absolute;left:0;bottom:0;background:var(--pine);color:white;padding:24px 30px;width:290px;z-index:1;font-size:12px;line-height:1.5}.heroMedia figcaption strong{display:block;font-family:Georgia,serif;font-size:20px;font-weight:400}.proofBar{min-height:92px;background:var(--pine);color:white;display:grid;grid-template-columns:repeat(3,1fr);padding:0 7vw;align-items:center}.proofBar span{padding:12px 3vw;border-right:1px solid rgba(255,255,255,.18);font-size:13px;letter-spacing:.03em}.proofBar span:last-child{border:0}.proofBar b{color:#c5d3c3;margin-right:15px;font-family:Georgia,serif;font-size:20px}.work,.journal{padding:120px 7vw}.sectionHead{display:grid;grid-template-columns:1fr 1fr;gap:8vw;align-items:end;margin-bottom:60px}.sectionHead h2,.bathCopy h2,.standards h2,.faq h2,.finalCta h2,.serviceIntro h2{font-family:Georgia,serif;font-weight:400;font-size:clamp(42px,5vw,70px);letter-spacing:-.04em;line-height:1;margin:0}.sectionHead>p{max-width:520px;color:#59645c;margin:0}.comparison{display:grid;grid-template-columns:35% 8% 57%;align-items:center}.projectImage{margin:0;position:relative}.projectImage img{height:460px;object-fit:cover}.projectImage.after img{height:600px}.projectImage figcaption{font-size:12px;margin-top:13px;display:flex;justify-content:space-between}.projectImage figcaption span{text-transform:uppercase;letter-spacing:.15em;color:var(--rust);font-weight:800}.projectNumber{font-family:Georgia,serif;font-size:32px;color:var(--rust);text-align:center}.bathroom{display:grid;grid-template-columns:1fr 1fr;min-height:680px;background:#ded8ca}.bathVisual{position:relative;overflow:hidden;background:var(--sand);min-height:630px}.tile{position:absolute;background:#eee9df;border:1px solid rgba(23,34,28,.12)}.tileOne{width:63%;height:62%;left:8%;top:11%}.tileTwo{width:48%;height:52%;right:-5%;bottom:-4%;background:var(--sage)}.blueprint{position:absolute;left:20%;top:25%;width:62%;height:43%;border:2px solid var(--pine);padding:11%;display:flex;align-items:center;justify-content:center;gap:10px;transform:rotate(-3deg)}.blueprint:before,.blueprint:after{content:"";position:absolute;background:var(--pine)}.blueprint:before{width:100%;height:1px;left:0;top:50%}.blueprint:after{height:100%;width:1px;top:0;left:50%}.blueprint span{background:#eee9df;padding:4px;z-index:1;font-size:9px;letter-spacing:.1em}.blueprint i{width:25px;border-top:1px dashed var(--rust);z-index:1}.bathVisual>strong{position:absolute;right:7%;top:5%;font-family:Georgia,serif;font-size:100px;color:rgba(23,63,50,.18);font-weight:400}.bathCopy{padding:10vw 9vw;align-self:center}.bathCopy>p:not(.eyebrow){color:#536057;max-width:560px}.bathCopy ul{display:flex;list-style:none;padding:0;margin:36px 0;gap:24px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}.bathCopy li:before{content:"✓";color:var(--rust);margin-right:7px}.textLink{font-size:12px;text-transform:uppercase;letter-spacing:.12em;font-weight:800;border-bottom:1px solid var(--ink);padding-bottom:7px}.textLink span{color:var(--rust)}.services{background:var(--pine);color:white;display:grid;grid-template-columns:40% 60%;padding:110px 7vw}.serviceIntro{padding-right:7vw}.serviceIntro .eyebrow{color:#d3b394}.serviceIntro>p:not(.eyebrow){color:#bdc8c2}.button.light{background:white;color:var(--pine);margin-top:20px}.serviceGrid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(255,255,255,.24);border-left:1px solid rgba(255,255,255,.24)}.serviceGrid article{padding:40px;border-right:1px solid rgba(255,255,255,.24);border-bottom:1px solid rgba(255,255,255,.24);min-height:225px}.serviceGrid b{color:#9ab4a6;font-family:Georgia,serif}.serviceGrid h3{font-family:Georgia,serif;font-size:27px;font-weight:400;margin:35px 0 10px}.serviceGrid p{font-size:13px;color:#bdc8c2;margin:0}.standards{padding:120px 9vw;display:grid;grid-template-columns:33% 1fr;gap:10vw;align-items:center}.licenseCard{background:#e7e0d2;border:1px solid var(--ink);padding:40px;text-align:center;box-shadow:14px 14px 0 var(--sand);min-height:430px;display:flex;flex-direction:column;align-items:center;justify-content:center}.licenseCard>span,.licenseCard small{font-size:10px;letter-spacing:.2em}.seal{border:1px solid var(--rust);outline:1px solid var(--rust);outline-offset:6px;border-radius:50%;width:92px;height:92px;display:grid;place-items:center;font-family:Georgia,serif;font-size:30px;color:var(--rust);margin:35px}.licenseCard p{margin:0}.licenseCard strong{font-family:Georgia,serif;font-size:22px;margin:9px 0 40px}.standardsCopy>p:not(.eyebrow){color:#566159;max-width:690px}.resolutionRow{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);margin-top:36px}.resolutionRow span{font-size:11px;padding:20px 10px 0 0;color:#647067}.resolutionRow b{display:block;color:var(--ink);font-family:Georgia,serif;font-size:20px;margin-bottom:7px}.journal{background:#e6e1d5}.articles{display:grid;grid-template-columns:1.2fr .8fr;gap:28px}.articles article{background:var(--cream);display:grid;grid-template-columns:48% 52%;min-height:300px}.articles img{height:100%;object-fit:cover}.articles article div{padding:36px}.articles span{color:var(--rust);font-size:10px;letter-spacing:.15em;text-transform:uppercase}.articles h3{font-family:Georgia,serif;font-size:28px;font-weight:400;line-height:1.1}.articles p{font-size:13px;color:#5c675f}.faq{display:grid;grid-template-columns:42% 58%;min-height:690px}.faqVisual{background:var(--rust);color:white;position:relative;display:flex;align-items:center;justify-content:center;gap:18px;text-transform:uppercase;letter-spacing:.15em;font-size:11px}.route{width:130px;border-top:2px dotted white;position:relative}.route:after{content:"";position:absolute;right:0;top:-5px;width:8px;height:8px;border-radius:50%;background:white}.faqVisual strong{position:absolute;bottom:50px;left:50px;font-family:Georgia,serif;font-size:42px;line-height:1;font-weight:400;letter-spacing:-.03em}.faqList{padding:100px 8vw}.faqList details{border-top:1px solid var(--line);padding:23px 0}.faqList details:last-child{border-bottom:1px solid var(--line)}summary{font-family:Georgia,serif;font-size:20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between}summary:after{content:"+";color:var(--rust)}details[open] summary:after{content:"−"}.faqList details p{font-size:13px;color:#5b665e;max-width:570px}.finalCta{background:var(--ink);color:white;text-align:center;padding:120px 8vw}.finalCta .eyebrow{color:#d3b394}.finalCta h2{max-width:850px;margin:0 auto}.finalCta .button{margin-top:40px}footer{background:#111813;color:#ced5d0;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:30px;padding:55px 7vw;align-items:center;font-size:11px}footer p{line-height:1.7}
        @media(max-width:900px){.navLinks{display:none}.nav{padding:0 20px}.nav .button{display:none}.hero{grid-template-columns:1fr;padding:0}.heroCopy{padding:80px 24px}.heroMedia{min-height:430px}.proofBar{grid-template-columns:1fr;padding:18px 24px}.proofBar span{border-right:0;border-bottom:1px solid rgba(255,255,255,.15)}.work,.journal{padding:80px 24px}.sectionHead{grid-template-columns:1fr;gap:24px}.comparison{grid-template-columns:1fr;gap:24px}.projectNumber{display:none}.projectImage img,.projectImage.after img{height:380px}.bathroom,.services,.standards,.faq{grid-template-columns:1fr}.bathCopy,.serviceIntro,.faqList{padding:75px 24px}.services{padding:75px 24px}.serviceGrid{margin-top:50px}.standards{padding:80px 24px}.licenseCard{max-width:430px;margin:auto}.articles{grid-template-columns:1fr}.faqVisual{min-height:420px}footer{grid-template-columns:1fr 1fr}.resolutionRow{grid-template-columns:1fr}.resolutionRow span{padding-bottom:12px}}
        @media(max-width:560px){.hero h1{font-size:52px}.heroActions{align-items:flex-start;flex-direction:column}.heroMedia{min-height:360px}.proofBar{font-size:11px}.comparison .projectImage img,.comparison .projectImage.after img{height:330px}.bathCopy ul{flex-direction:column;gap:9px}.serviceGrid{grid-template-columns:1fr}.serviceGrid article{min-height:auto;padding:28px}.articles article{grid-template-columns:1fr}.articles img{height:220px}.faqVisual{min-height:330px}.finalCta{padding:90px 24px}footer{grid-template-columns:1fr}.sectionHead h2,.bathCopy h2,.standards h2,.faq h2,.finalCta h2,.serviceIntro h2{font-size:42px}}
      `}</style>
    </main>
  );
}
