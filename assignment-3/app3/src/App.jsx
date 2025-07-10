import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Page from './pages/Page';


import './index.css';

function App() {

  const getJson = () => {
    return {
      about: `Miso adalah kucing kartun yang ramping dan minimalis dengan kepribadian yang tenang dan penasaran. Dengan garis-garis sederhana dan kehadiran yang hangat, Miso memberikan sentuhan ramah pada lingkungan digital tanpa terlalu menarik perhatian. Wajahnya yang ekspresif dan suasana santai membuatnya menjadi teman yang ideal untuk platform kreatif, aplikasi, atau komunitas online.
      Baik diam-diam mengamati atau bermain-main menilai dari sudut layar, Miso menambahkan karakter dan pesona ke antarmuka apa pun. Ini bukan hanya maskot—ini adalah sentuhan kepribadian yang halus di dunia piksel dan produktivitas.
      Miso dirancang untuk menjadi serbaguna, cocok dengan berbagai konteks sambil mempertahankan identitas uniknya. Kesederhanaannya memungkinkan Miso untuk menyatu dengan berbagai tema, menjadikannya pilihan yang sempurna untuk estetika digital modern.`,

      experience: `Miso diam-diam telah dikenal sebagai pendamping digital yang sederhana, menawan, dan penuh perhatian. Dengan desain minimalis yang menyatu dengan mulus ke dalam antarmuka modern, Miso lebih dari sekadar elemen visual—ini adalah kepribadian yang beresonansi di berbagai platform kreatif, teknologi, dan berfokus pada pengguna. Penampilannya yang bersih dan ekspresi yang ramah membantu membangun rasa keramahan dan kenyamanan, terutama di lingkungan digital yang biasanya steril.
      Seiring waktu, Miso telah menjadi wajah yang akrab di ruang-ruang di mana kejelasan dan karakter sangat penting. Baik duduk diam-diam di sudut dashboard, menyapa pengguna di layar login, atau menambahkan kehidupan ke konsol pengembang, kehadiran Miso selalu memiliki tujuan. Miso dirancang untuk menyeimbangkan utilitas dengan emosi, menawarkan momen ringan tanpa mengorbankan fokus atau alur kerja.
      Pengalaman Miso tidak didefinisikan oleh animasi mencolok atau trik, tetapi oleh kemampuannya menciptakan koneksi melalui kesederhanaan. Miso unggul dalam keterlibatan yang tenang—membangun kepercayaan melalui konsistensi, harmoni desain, dan sedikit kecerdasan yang halus. Baik dalam produk yang menjangkau ribuan orang atau ruang kerja pribadi, Miso secara alami cocok, menawarkan kepribadian dan ketenangan di mana pun ia muncul.`,

      education: `Miso memiliki latar belakang pendidikan dalam desain minimalis dan interaksi pengguna. Ia dirancang untuk menjadi intuitif dan mudah dipahami, menjadikannya pendamping yang ideal untuk berbagai aplikasi dan platform.`,

      skill: `Keahlian Miso meliputi kemampuan untuk beradaptasi dengan berbagai tema digital, memberikan sentuhan estetika yang menyenangkan, dan menciptakan pengalaman pengguna yang ramah dan menarik.`,

      interest: `Miso tertarik pada dunia digital yang kreatif, termasuk desain, seni, dan teknologi. Ia senang menjelajahi cara baru untuk meningkatkan interaksi pengguna dan memberikan nilai tambah pada platform digital.`,

      award: `Miso diam-diam telah mengumpulkan sejumlah penghargaan atas kemampuannya meningkatkan ruang digital dengan pesona dan kehadiran yang halus. Diakui oleh komunitas desain atas garis-garisnya yang bersih dan minimalisme yang ekspresif, Miso dianugerahi Golden Pixel Award untuk Desain Maskot Terbaik dalam Kerangka UI. Integrasinya yang mudah diberbagai platform juga membuatnya mendapatkan nominasi untuk Elemen Branding Ringan Terbaik di berbagai pameran produk indie.
      Di luar desain, pendekatan unik Miso terhadap interaksi pengguna—hadir tanpa mengganggu—memenangkan UX Companion Distinction di Calm Tech Summit. Para juri memuji kemampuan Miso menciptakan kehangatan emosional sambil mempertahankan jejak yang tidak mengganggu di lingkungan produk. Para pengembang dan desainer sama-sama mencatat bagaimana Miso berkontribusi pada nada, suasana, dan identitas merek tanpa pernah menuntut perhatian.
      Baru-baru ini, Miso menerima Silent Impact Honor dari Minimal Creators Guild, yang menyoroti kehadirannya yang konsisten di sistem desain, alur onboarding, dan halaman arahan. Ini adalah pengingat bahwa kesederhanaan, ketika dipadukan dengan karakter, tetap dapat menonjol—dan bahwa tidak semua maskot perlu berbicara untuk memberikan kesan yang abadi.
      atau mungkin dia berbicara..?`,
    };
  };

  return (
    <>

      <Router>
        <Routes>
          <Route element={<Layout />}>

            <Route
              path="/"
              element={<Page name="About" content={getJson().about} />}
            />
            {Object.keys(getJson()).map((key) => (
              <Route
                key={key}
                path={`/${key}`}
                element={<Page name={key.charAt(0).toUpperCase() + key.slice(1)} content={getJson()[key]} />}
              />
            ))}
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
