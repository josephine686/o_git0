import Header from "../component/Header"
import Footer from "../component/Footer"
import iconMoney from "../assets/icon-money.webp"
import iconChat from "../assets/icon-chat.webp"
import iconSecurity from "../assets/icon-security.webp"
import HomeElement from "../component/HomeElement"

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>

                    <HomeElement
                        imgSrc={iconMoney}
                        imgAlt="icone money"
                        titre="You are our #1 priority"
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <HomeElement
                        imgSrc={iconChat}
                        imgAlt="icone chat"
                        titre="More savings means higher rates"
                        description="The more you save with us, the higher your interest rate will be!"
                    />
                    <HomeElement
                        imgSrc={iconSecurity}
                        imgAlt="icone security"
                        titre="Security you can trust"
                        description="We use top of the line encryption to make sure your data and money is always safe."
                    />
                    
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home