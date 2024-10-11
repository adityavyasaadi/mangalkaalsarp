import React from "react";

const Keyfeatures = () => {
  const testimonials = [
    {
      icon: "/assets/icon/quick_solution.svg",
      name: "Quick Solution",
      desc: "Our team of expert astrologers brings years of experience and knowledge to provide accurate readings and impactful consultations.",
    },
    {
      icon: "/assets/icon/trusted_work.svg",
      name: "Trusted Work",
      desc: "We believe in tailoring our solutions to meet your unique needs, offering personalized recommendations and guidance for your spiritual journey.",
    },
    {
      icon: "/assets/icon/customer_satisfaction.svg",
      name: "Customer Satisfaction",
      desc: "Customer satisfaction is our priority. We are dedicated to delivering exceptional service and ensuring that our clients receive the support they need.",
    },
    {
      icon: "/assets/icon/confidential_knowledge.svg",
      name: "Confidentiali Knowledge",
      desc: "Rest assured that your information is safe with us. We uphold strict confidentiality standards to protect your privacy and data security.",
    },
    {
      icon: "/assets/icon/diverse_services.svg",
      name: "Diverse Services",
      desc: "Explore a diverse range of services that cater to a variety of needs, ensuring that you find the solutions that resonate with you.",
    },
    {
      icon: "/assets/icon/global_reach.svg",
      name: "Global Reach",
      desc: "With a global clientele, Mangaldoshpoojan has established a reputation for excellence in astrology and Poojanvidhi services worldwide.",
    },
  ];
  return (
    <div className="grid key-features-grid">
      {testimonials.map(({ icon, name, desc }, idx) => (
        <div key={idx}>
          <div className="flex title">
            <img src={icon} className="images" />
            <h3>{name}</h3>
          </div>

          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Keyfeatures;
