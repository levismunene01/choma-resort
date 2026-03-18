function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h3>Luxury Restaurant</h3>
          <p>Premium dining experience</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Phone: +254700000000</p>
          <p>
            Email:{" "}
            <a href="mailto:restaurant@email.com" className="email-link">
              restaurant@email.com
            </a>
          </p>
        </div>

      </div>

      <p className="copyright">
        © 2026 Luxury Restaurant
      </p>
    </footer>
  );
}

export default Footer;