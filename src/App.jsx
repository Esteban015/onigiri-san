import React from 'react'
import './index.css'
import { Instagram, Phone, CheckCircle } from 'lucide-react'

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>🍙 Onigiri San</h1>
        <p>Onigiris caseros desde Jujuy</p>
        <div className="hero-buttons">
          <a href="https://wa.me/..." className="btn whatsapp"><Phone /> Pedido WhatsApp</a>
          <a href="https://instagram.com..." className="btn instagram"><Instagram /> Instagram</a>
        </div>
      </header>

      <section className="menu">
        <h2>Menú de la semana</h2>
        <div className="cards">
          {[
            { title: 'Combo Clásico', price: '$3000' },
            { title: 'Combo XL', price: '$4500' },
            { title: 'Sorpresa San', price: '$2800' },
          ].map((c, i) => (
            <div key={i} className="card">
              <h3>{c.title}</h3>
              <p className="price">{c.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li><CheckCircle /> 100% caseros</li>
          <li><CheckCircle /> Salsita propia</li>
          <li><CheckCircle /> Packaging reutilizable</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Listo para ordenar?</h2>
        <a href="https://forms.gle/..." className="btn order">Hacer pedido</a>
      </section>

      <footer className="footer">
        <p>© 2025 Onigiri San – Jujuy, Argentina</p>
      </footer>
    </div>
  )
}