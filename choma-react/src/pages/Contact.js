function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>We would love to serve you</p>

      <div className="contact-buttons">
        <a href="tel:+254700000000" className="contact-btn call">Call Us</a>
        <a href="mailto:restaurant@email.com" className="contact-btn email">Send Email</a>
        <a href="/reservation" className="contact-btn reserve">Reserve Table</a>
      </div>
    </section>
  );
}

export default Contact;