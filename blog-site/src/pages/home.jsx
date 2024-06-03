import IntroPost from "../components/intropost";
import Blogs from "../components/blogs";
import Search from "../components/search";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
    return (
        <div>
            {/* Header */}
            <Header />
            {/*Search */}
            <Search />
            {/*IntroPOst */}
            <IntroPost />
            {/*Blogs*/}
            <Blogs />
            {/*Footer*/}
            <Footer />
        </div>
    )
}

export default Home