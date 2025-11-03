"use client";
import Image from "next/image";

export default function Home() {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main id="home">
      {/* Hero Section */}
      <section className="hero">
        <div>
          <h1>ONDE O ESTILO<br />PISA FORTE</h1>
          <p>Mais que sneakers, atitude.</p>
          <button onClick={scrollToProducts}>VER COLEÇÃO</button>
        </div>
        <Image src="/shoe.png" alt="Sneaker" width={400} height={200} />
      </section>

      {/* Featured Products */}
      <section id="products" className="products">
        <h2>FEATURED PRODUCTS</h2>
        <div className="grid">
          <div><Image src="/shoe.png" alt="Sneaker" width={200} height={200} /><p>Air Force 1</p></div>
          <div><Image src="/tshirt.png" alt="T-shirt" width={200} height={200} /><p>Classic Tee</p></div>
          <div><Image src="/hoodie.png" alt="Hoodie" width={200} height={200} /><p>Grey Hoodie</p></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>ABOUT US</h2>
        <p>
          Sneakers on the Weri nasceu com a ideia de unir estilo, autenticidade e atitude.
          Somos mais que uma loja, somos uma expressão de cultura streetwear.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>CONTACT</h2>
        <p>info@sneakersontheweri.com</p>
        <div className="socials">
          <span>📸</span>
          <span>🐦</span>
          <span>📘</span>
        </div>
      </section>
    </main>
  );
}
