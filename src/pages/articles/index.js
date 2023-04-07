import Navigation from "@/components/Layout/Navigation/Navigation";
import Article from "@/components/Article/Article";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SuggestedArticles from "@/components/SuggestedArticles/SuggestedArticles";
import styles from "./index.module.scss";
import Head from "next/head";
export default function Home() {
  let articles = [
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
  ];
  const article = {
    title: "E prea târziu să-ți găsești dragostea?",
    intro:
      "Dragostea transforma viața într-o poveste frumoasă plină de iubire, romantism și aventură - indiferent de câți ani ai și de câte ori ai crezut că ai ratat șansa de a găsi pe cineva special",
    fullIntro: `Simți că ai ratat șansa de a-ți găsi sufletul pereche? Ei bine, nu
    ești singurul. Dar, stai liniștit, pentru că nu e niciodată prea
    târziu pentru a te îndrăgosti din nou. Chiar dacă ai trecut de 40, 50
    sau chiar mai mult, dragostea poate face parte din viața ta și acum.
    Haide să vedem de ce nu e niciodată prea târziu pentru dragoste și cum
    poți să găsești partenerul perfect, chiar și dacă ai trecut de prima
    tinetețe.`,
    sections: [
      {
        title: "De ce să-ți găsești iubirea mai târziu în viață",
        text: [
          `Găsirea dragostei la o vârstă mai matură poate aduce o mulțime de beneficii și avantaje unice. Deși poate părea că oamenii mai în vârstă sunt mai puțin dispuși să își mai găsească un partener romantic, realitatea este că mulți oameni descoperă că a găsi dragoste mai târziu în viață poate fi un lucru minunat și îi poate aduce multe beneficii.`,
          `Unul dintre principalele beneficii ale găsirii dragostei mai târziu în viață este că, odată cu înaintarea în vârstă, oamenii ajung să înțeleagă mai bine ei înșiși și ce își doresc de la o relație. Cu ani de experiență în spate, ei sunt mai puțin dispuși să se mai joace jocuri sau să își piardă timpul cu persoane care nu sunt potrivite pentru ei. În plus, oamenii care găsesc dragoste mai târziu în viață au tendința să fie mai stabili emoțional și mai maturi, ceea ce poate fi o bază solidă pentru o relație de durată.`,
        ],
      },
      {
        title: "Provocările pe care le poți întâmpina",
        text: [
          `Deși există multe beneficii ale găsirii iubirii la o vârstă mai înaintată, există și unele provocări specifice care trebuie luate în considerare. După ce ai trecut de 40 de ani, întâlnirile romantice pot părea mai dificile decât atunci când erai mai tânăr.`,
          `Unul dintre principalele provocări ale întâlnirilor după 40 de ani este faptul că mulți oameni sunt deja însurați sau în relații stabile. Astfel, numărul potențialilor parteneri disponibili poate fi mult mai mic decât în trecut. În plus, unii oameni care sunt singuri după 40 de ani pot fi mai reticenți să se implice într-o relație serioasă, din cauza experiențelor negative din trecut sau a altor motive personale.`,
          `Un alt obstacol poate fi, de asemenea, faptul că mulți oameni după 40 de ani au deja o viață foarte ocupată și responsabilă, cu familie, carieră și alte obligații importante. Găsirea timpului pentru întâlniri romantice și dezvoltarea unei noi relații poate fi o provocare semnificativă.`,
        ],
      },
      {
        title: "Cum să le depășești",
        text: [
          `Explorează mai multe opțiuni: Participă la evenimente sociale, înscrie-te la cursuri sau la activități care te pasionează și încearcă să întâlnești oameni noi într-un mod natural și confortabil.`,
          `Fii deschis și sincer: Când te implici într-o nouă relație, este important să fii deschis și sincer cu potențialul partener. Discută despre așteptările tale și ascultă cu atenție cerințele și dorințele lor.`,
          `Fă-ți timp pentru întâlniri romantice: În ciuda responsabilităților și programelor încărcate, încearcă să găsești timp pentru întâlniri romantice. Planifică întâlniri în avans și găsește o modalitate de a-ți organiza programul astfel încât să ai suficient timp pentru a construi o relație nouă.`,
          `Nu lua decizii pripite: Este important să nu te grăbești în a lua decizii importante într-o nouă relație. Fii sigur că cunoști suficient de bine persoana înainte de a lua o decizie legată de o posibilă căsătorie sau altă formă de angajament serios.`,
        ],
      },
      {
        title: "Încă ceva...",
        text: [
          `Nu uitați că fiecare persoană are o poveste unică și oportunități diferite de a întâlni pe cineva special. Indiferent de cât de ocupat sau de dificil ar putea părea, există întotdeauna timp și moduri de a găsi pe cineva care să vă completeze viața și să vă facă să vă simțiți iubiți și valoroși.`,
          `Gândiți-vă la toate experiențele de viață și la toate lecțiile pe care le-ați învățat. Nu vă fie teamă să fiți vulnerabili și autentici în căutarea dvs. de iubire. Încercați să fiți deschiși și să vă concentrați asupra conexiunilor reale și autentice cu oameni care împărtășesc valorile și interesele dvs.`,
          `Niciodată nu este prea târziu pentru a găsi dragostea și a începe o nouă aventură în viață. În curând, veți realiza că este una dintre cele mai frumoase experiențe și că iubirea este cu adevărat atemporală.`,
        ],
      },
    ],
  };
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta property="og:title" content={`${article.title}`} key="title" />
        <meta name="description" content={article.intro} key="desc" />

        <meta
          key="image"
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3"
        />
      </Head>
      <Navigation />
      <Container className={styles.wrapper}>
        <Row>
          <Article article={article} />
        </Row>
        <Row>
          <SuggestedArticles articles={articles}></SuggestedArticles>
        </Row>
      </Container>
    </>
  );
}
