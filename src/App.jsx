import React from 'react';
import './index.css';
import { Instagram, MapPin, Phone, Menu } from 'lucide-react';

export default function OnigiriSanSPA() {
  return (
    <div className="app">
      {/* Header */}
      <header className="navbar">
        <div className="logo">🍙 Onigiri San</div>
        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Nuestros Productos</a>
          <a href="#nosotros">Sobre Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Inicio */}
      <section id="inicio" className="hero">
        <h1>Bienvenidos a Onigiri San</h1>
        <p>Onigiris caseros desde Jujuy – hechos con amor, sabor y dedicación</p>
        <div className="hero-buttons">
          <a href="https://wa.me/5493880000000" className="btn whatsapp"><Phone /> Pedido WhatsApp</a>
          <a href="https://instagram.com/onigiri_san_jujuy" className="btn instagram"><Instagram /> Instagram</a>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="menu">
        <h2>Menú de la semana</h2>
        <div className="cards">
          {[
            {
              title: 'Combo Clásico',
              desc: '3 onigiris a elección con salsa de soja casera envasada. Ideal para almuerzos o meriendas.',
              price: '$3000',
            },
            {
              title: 'Combo XL',
              desc: '5 onigiris variados + salsa de soja + detalle sorpresa. Perfecto para compartir.',
              price: '$4500',
            },
            {
              title: 'Sorpresa San',
              desc: '3 onigiris seleccionados por nosotros con sabores de temporada.',
              price: '$2800',
            },
          ].map((item, i) => (
            <div key={i} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="about">
        <h2>Sobre Nosotros</h2>
        <p>
          Onigiri San es un pequeño emprendimiento casero nacido en Jujuy, Argentina. Vendemos onigiris, un snack japonés hecho a mano con arroz y rellenos deliciosos, ideal para quienes buscan una comida diferente, casera y práctica.
        </p>
        <p>
          El proyecto comenzó con la idea de ofrecer algo nuevo y sabroso en nuestra comunidad. Nos encargamos de todo el proceso: desde cocinar y armar cada onigiri, hasta diseñar el packaging personalizado y preparar la salsita de soja casera en cada pedido. Todo está pensado para que disfrutes algo especial y único.
        </p>
        <p>
          🛍️ <strong>¿Cómo pedir?</strong> Recibimos pedidos de lunes a jueves por Instagram o WhatsApp. Entregamos los días viernes, sábado y domingo. También podés completar nuestro <a href="https://forms.gle/ejemplo-formulario-onigiri" target="_blank">formulario de pedidos</a>.
        </p>
        <p>
          🕐 <strong>Días de venta:</strong> Viernes, Sábado y Domingo. <br />
          📦 <strong>Recepción de pedidos:</strong> Lunes a Jueves.
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="cta">
        <h2>Contacto</h2>
        <p>¿Querés hacer tu pedido o tenés dudas? Escribinos por WhatsApp o por Instagram.</p>
        <div className="hero-buttons">
          <a href="https://wa.me/5493880000000" className="btn whatsapp"><Phone /> WhatsApp</a>
          <a href="https://instagram.com/onigiri_san_jujuy" className="btn instagram"><Instagram /> Instagram</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Onigiri San – Jujuy, Argentina</p>
      </footer>
    </div>
  );
}
