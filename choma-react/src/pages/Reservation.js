function Reservation() {
  return (
    <section className="reservation">
      <h2>Book a Table</h2>

      <form
        className="reservation-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Reservation request received. We will contact you shortly.");
        }}
      >
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="date" required />
        <input type="time" required />
        <button type="submit">Reserve Table</button>
      </form>
    </section>
  );
}

export default Reservation;