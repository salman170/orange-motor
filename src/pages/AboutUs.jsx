import React from "react";
import Breadcrumb from "../components/breadcrumb";

const AboutUs = () => {
  const sections = [
    {
      title: "Our Journey:",
      content:
        "Incorporated in September 2004, Orange Group began its remarkable journey with a General Motors dealership in Banjara Hills, Hyderabad. Over the years, our dedication to quality and customer-centric approach led to significant expansions. We spread our wings to Vishakhapatnam, Malkpet Hyderabad, Rajahmundry (AP), Balanagar Hyderabad, Bhimavaram (AP), and Khammam, establishing a strong presence across Andhra Pradesh and Telangana.",
    },
    {
      title: "Expanding Horizons:",
      content:
        "Orange Auto Group's commitment to diversification and customer service led to strategic partnerships. We ventured into Honda motorcycles and scooters in 2009, offering exceptional products and services to our valued customers. Our growth story continued with the introduction of Honda Motorcycle & Scooters branches, and 3S facilities for FCA (JEEP), Tata Motors, Indian Kawasaki Motors, and Harley Davidson, ensuring a comprehensive automotive experience.",
    },
    {
      title: "Our Achievements:",
      content:
        "Orange Group proudly boasts a sales volume of 14,500+vehicles and a customer base of over 1,00,000+ satisfied patrons. These achievements stand as a testament to our dedication to quality, reliability, and customer delight.",
    },
  ];

  const swot = [
    {
      title: "Strengths",
      points: [
        "Best Prices",
        "Innovative Mindset",
        "Recently Built Platform & Website",
        "Strong Brand Image & Equity",
        "Good Quality of After-Sales",
      ],
    },
    {
      title: "Weaknesses",
      points: [
        "Long Term Investment",
        "Product Insurance Costs are Raising",
        "High Level of Third-Party Turnover Due To Price Competition",
        "Public Policies and Procedures",
      ],
    },
    {
      title: "Opportunities",
      points: [
        "New Market Target",
        "Public Awareness",
        "New Public Infrastructure",
        "5G Connection Implementation",
      ],
    },
    {
      title: "Threats    ",
      points: [
        "High Level of Employee Turnover",
        "New Competitors From Other States",
        "Impact of Climate Change",
      ],
    },
  ];

  return (
    <div>
      <img
        src={require("../assets/others/corporate-culture2.png")}
        className="object-cover w-full h-[40vh]"
        alt=""
      />
      <Breadcrumb pageName="About Us" />

      <div className="container px-1 py-10 mx-auto lg:py-24 lg:max-w-7xl">
        <h1 className="mb-4 text-4xl font-semibold">Our Company</h1>
        <div className="h-0.5 w-20 bg-secondary lg:w-40 "></div>
        <p className="pb-6 mt-4 text-base text-gray-500">
          Welcome to Orange Auto, where passion for automobiles meets
          unparalleled service and customer satisfaction. Established in 2004,
          Orange Auto has evolved into a trusted name in the automotive
          industry, setting high standards of excellence and commitment.
        </p>

        {sections.map((section, index) => (
          <section key={index}>
            {" "}
            <h1 className="mb-4 text-2xl font-semibold text-secondary">
              {section.title}
            </h1>
            <p className="pb-6 mt-4 text-base text-gray-500">
              {section.content}
            </p>{" "}
          </section>
        ))}
      </div>
      <div className="bg-gray-100">
        <div className="container px-1 py-10 mx-auto lg:py-24 lg:max-w-7xl">
          <h1 className="mb-4 text-4xl font-semibold">About Us</h1>
          <div className="h-0.5 w-20 bg-secondary lg:w-40 "></div>
          <p className="pb-6 mt-4 text-base text-gray-500">
            Orange Auto Pvt Ltd, established on 22nd September 2004, has grown
            to be a prominent name in the automobile industry. The company
            embarked on its journey with a General Motors dealership in 2005 in
            Banjara Hills, Hyderabad. Over the years, Orange Auto expanded its
            footprint, establishing dealerships in key locations such as
            Vishakhapatnam, Malkpet Hyderabad, Rajahmundry (AP), Balanagar
            Hyderabad, Bhimavaram (AP), and Khammam.
          </p>
          <p className="pb-6 mt-4 text-base text-gray-500">
            In addition to General Motors, Orange Auto became a dealership for
            Honda Motorcycles and Scooters in 2009. Since then, the company has
            consistently grown, adding new facilities and brands to its
            portfolio. Orange Auto now operates multiple showrooms and
            workshops, including those for FCA, TATA, Indian Kawasaki Motors,
            and Harley Davidson, providing comprehensive services to its
            customers.
          </p>

          <h1 className="mb-4 text-2xl font-semibold text-secondary">
            Directors:
          </h1>
          <h1 className="mb-4 text-xl font-semibold text-secondary">
            Mr. Y. RamaKoteswara Rao:
          </h1>

          <p className="pb-6 mt-4 text-base text-gray-500">
            The Dealer Principal, holds an MBA in Marketing and Management from
            MIT, Pune, India. He began his career in the family business and
            later worked as an Executive Director at Varun Motors Pvt Ltd, a
            Maruti Dealership in Hyderabad. Since 2005, he has been instrumental
            in the growth of Orange Auto, expanding its reach and services. With
            26 years of experience in the automobile industry, he oversees the
            day-to-day operations and ensures customer satisfaction across all
            Orange Auto outlets.
          </p>
          <h1 className="mb-4 text-xl font-semibold text-secondary">
            Mrs. Y. Rama,
          </h1>

          <p className="pb-6 mt-4 text-base text-gray-500">
            A B.Sc. graduate, has been a director at Orange Auto Pvt Ltd since
            2005. Her contributions have played a vital role in the company's
            success, ensuring its steady growth and customer-centric approach. A
            Legacy of Trust and Excellence: Under the guidance of Mrs. Y. Rama,
            Orange Auto Pvt Ltd continues to thrive, delivering exceptional
            services to its valued customers. Her unwavering dedication and
            leadership have significantly contributed to the company's success
            and position in the competitive automobile market.
          </p>
          <h1 className="mb-4 text-xl font-semibold text-secondary">
            Mr. Rahul Yalamanchili
          </h1>

          <p className="pb-6 mt-4 text-base text-gray-500">
            Holds an MBA (MFAB) from ISB (Indian School of Business), has been a
            director at Orange Auto Pvt Ltd. Under the astute leadership and
            commitment to quality of Mr. Rahul Yalamanchili, Orange Auto Pvt Ltd
            has been instrumental in shaping its reputation as a reliable and
            customer-focused entity. A legacy of trust and excellence persists,
            guided by Mr. Rahul Yalamanchili, wherein Orange Auto Pvt Ltd
            continues to thrive, delivering exceptional services to its valued
            customers. His unwavering dedication and leadership have
            significantly contributed to the company's success and position in
            the competitive automobile market.
          </p>
        </div>
      </div>
      <div className="container px-1 py-10 mx-auto lg:py-24 lg:max-w-7xl">
        <h1 className="mb-4 text-4xl font-semibold">SWOT</h1>
        <div className="h-0.5 w-20 bg-secondary lg:w-40 mb-6"></div>
        <div className="container grid gap-4 mx-auto md:grid-cols-2">
          {swot.map((item, index) => (
            <div key={index} className="mb-4">
              <h2 className="mb-4 text-2xl font-semibold text-secondary">
                {item.title}
              </h2>
              <ul className="pl-4 list-disc">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
