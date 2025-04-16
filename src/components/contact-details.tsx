export default function ContactDetails() {
  return (
    <div className="w-full p-6  shadow-lg rounded-lg text-center lg:text-left pl-10 pt-10 text-accent">
      <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
      <p className="mb-2">
        Email:{" "}
        <a
          href="mailto:service@sgperformance.co.za"
          className="text-blue-600 hover:text-blue-800"
        >
          service@sgperformance.co.za
        </a>
      </p>
      <p className="mb-2">
        Phone:{" "}
        <a
          href="tel:+27712917178"
          className="text-blue-600 hover:text-blue-800"
        >
          071 291 7178
        </a>
      </p>
      <p className="mb-2">
        Address: Unit 12 Tungstenworks Office Park, Inospace, Randburg,
        Johannesburg, South Africa, 2169
      </p>
      <p className="mb-2">
        Instagram:{" "}
        <a
          href="https://www.instagram.com/sg_performance_pty"
          className="text-blue-600 hover:text-blue-800"
        >
          sg_performance_pty
        </a>
      </p>
      <p className="mb-2">
        Facebook:{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61550915442389"
          className="text-blue-600 hover:text-blue-800"
        >
          sg_performance_pty
        </a>
      </p>
    </div>
  );
}
