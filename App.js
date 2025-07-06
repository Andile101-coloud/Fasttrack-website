import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    phone: "",
    loanType: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully. We'll contact you soon.");
    setFormData({ name: "", idNumber: "", phone: "", loanType: "", amount: "", message: "" });
  };

  return (
    <div className="container">
      <header>
        <h1>Fast Track Capital</h1>
        <p>Your Financial Boost – Quick & Reliable Loans</p>
      </header>

      <section className="form-section">
        <h2>Apply for a Loan</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input name="idNumber" placeholder="ID/Passport Number" value={formData.idNumber} onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input name="loanType" placeholder="Loan Type" value={formData.loanType} onChange={handleChange} required />
          <input name="amount" placeholder="Loan Amount (P)" value={formData.amount} onChange={handleChange} required />
          <textarea name="message" placeholder="Additional Info" value={formData.message} onChange={handleChange} />
          <button type="submit">Submit Application</button>
        </form>
      </section>

      <footer>
        <p>Phone/WhatsApp: +267 71 234 567 | Email: info@fasttrackcapital.co.bw</p>
        <small>&copy; {new Date().getFullYear()} Fast Track Capital</small>
      </footer>
    </div>
  );
}

export default App;
