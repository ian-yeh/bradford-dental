"use client";
import { useEffect, useState, type ReactNode } from "react";

const BookAppointmentButton = ({
  className = "btn bg-purple text-white hover:bg-purple-dark",
  children = "Book an Appointment",
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSend = () => {
    const body = `Name: ${name}\nPhone: ${phone}\n\n${message}`;
    window.location.href = `mailto:info@bradforddental.com?subject=${encodeURIComponent(
      "Appointment Request"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Book an appointment"
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-6 font-josefin font-semibold text-purple hover:underline"
              onClick={() => setOpen(false)}
            >
              Close
            </button>

            {/* Contact shortcuts */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mt-4 mb-8">
              <a
                href="tel:905-775-5553"
                className="group flex items-center gap-3"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-yellow-100 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="font-josefin font-bold text-purple">
                  905-775-5553
                </span>
              </a>
              <a
                href="mailto:info@bradforddental.com"
                className="group flex items-center gap-3"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-yellow-100 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <span className="font-josefin font-bold text-purple break-all">
                  info@bradforddental.com
                </span>
              </a>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold font-josefin text-purple mb-3">
                Book An Appointment
              </h2>
              <p className="font-poppins text-gray-600">
                Please fill out our contact form, email us, or call us directly
                to book an appointment.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border border-purple/25 rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-purple"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="border border-purple/25 rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-purple"
                />
              </div>
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="border border-purple/25 rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-purple resize-y"
              />
              <button
                type="submit"
                className="btn self-center px-8 bg-purple text-white border-2 border-purple hover:bg-purple-dark"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookAppointmentButton;
