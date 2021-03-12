import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import LayoutBg2 from "./assets/bg2.jpg";
import LayoutBg3 from "./assets/bg3.jpg";

const App = () => {

    return (
        <>
            <Header title='This is title' descr='This is Description!' />
            <Layout title='This is Layout 1 title' descr='This is Layout 1 Description!' urlBg={LayoutBg3}/>
            <Layout title='This is Layout 2 title' descr='This is Layout 2 Description!' colorBg='rgba(220, 204, 129, 0.52)' />
            <Layout title='This is Layout 3 title' descr='This is Layout 3 Description!' urlBg={LayoutBg2}/>
            <Footer />
        </>
    );
}

export default App;
