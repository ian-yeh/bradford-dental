import Header from "@/components/Header";
import Testimonials from "@/components/homepage/Testimonials";
import PatientForms from "@/components/homepage/PatientForms";
import Footer from "@/components/homepage/Footer";
import DentistBioCard from "@/components/team/DentistBioCard";
import StaffCard from "@/components/team/StaffCard";

const dentists = [
  {
    name: "Dr. Matthias Yeh",
    role: "Dentist",
    imageSrc: "/images/team/matthias-yeh.jpg",
    bio: [
      "Dr. Matthias Yeh is a graduate of University of Western Ontario in 2002, and enjoys keeping abreast in all aspects of dentistry. He strives to provide exceptional dentistry with the utmost of comfort. In addition, he prides himself on effective communication to educate patients about their oral condition.",
      "Outside Bradford Dental Care he is an active member of the Ontario Dental Association and the Canadian Dental Association.",
    ],
  },
  {
    name: "Dr. Justin Chow",
    role: "Dentist",
    imageSrc: "/images/team/justin-chow.jpg",
    bio: [
      "Dr. Chow earned his bachelors degree from the University of Western Ontario with honors, then earned his dental degree from New York University in 2003. He practiced throughout southern Ontario for 2 years before opening his dream office with Dr. Yeh in Bradford.",
      "He continuously keeps up with the latest treatments in dental implants, general dentistry, and cosmetic dentistry by attending numerous continuing education courses.",
    ],
  },
  {
    name: "Dr. Julia Lai-Tong",
    role: "Dentist",
    imageSrc: "/images/team/julia-lai-tong.jpg",
    bio: [
      "Following the completion of her Bachelor of Science from the University of Waterloo, Dr. Julia Lai-Tong went on to complete her Doctor of Dental Medicine (DMD) from the University of Western Australia. Dr. Lai-Tong was a regular volunteer helping the underprivileged in Perth, Australia maintain their oral health.",
      "Likewise, in Toronto, she regularly volunteers in the city with Yonge Street Mission to provide free dental care to those in need. In her spare time Dr. Lai-Tong enjoys painting, reading and spending time with friends and family.",
    ],
  },
];

const hygienists = [
  { name: "Caroline", imageSrc: "/images/team/caroline.jpg" },
  { name: "Mia", imageSrc: "/images/team/mia.jpg" },
  { name: "Emilia", imageSrc: "/images/team/emilia.jpg" },
  { name: "Kyra", imageSrc: "/images/team/kyra.png" },
];

const assistants: {
  name: string;
  role: string | string[];
  imageSrc: string;
}[] = [
  {
    name: "Mila",
    role: "Certified Dental Assistant",
    imageSrc: "/images/team/mila.jpg",
  },
  {
    name: "Michelle",
    role: ["Certified Dental Assistant", "Treatment Coordinator"],
    imageSrc: "/images/team/michelle.jpg",
  },
  {
    name: "Michele",
    role: ["Certified Dental Assistant", "Patient Care Coordinator"],
    imageSrc: "/images/team/michele.jpg",
  },
  {
    name: "Marisa",
    role: "Certified Dental Assistant",
    imageSrc: "/images/team/marissa.jpg",
  },
];

const TeamPage = () => {
  return (
    <div>
      <Header bgClass="bg-white" />

      <section className="bg-surface py-16 px-4 sm:px-8">
        <div className="w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug mb-6">
              Great People Make A Great Team
            </h1>
            <p className="font-poppins text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe that we have a great team who will make your
              experience in our office a pleasant one every time. Our systems,
              protocols and superior staff have created an environment of trust
              and integrity that keep patients happy, yet we are always willing
              and ready to welcome new and soon to be loyal happy patients!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {dentists.map((d) => (
              <DentistBioCard key={d.name} {...d} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6">
            {hygienists.map((h) => (
              <StaffCard
                key={h.name}
                name={h.name}
                role="Registered Dental Hygienist"
                imageSrc={h.imageSrc}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6">
            {assistants.map((a) => (
              <StaffCard
                key={a.name}
                name={a.name}
                role={a.role}
                imageSrc={a.imageSrc}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="hidden md:block" />
            <StaffCard
              name="Jessica"
              role="Office Manager"
              imageSrc="/images/team/jessica.jpg"
            />
            <div className="hidden md:block" />
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      <Testimonials />
      <PatientForms />
      <Footer />
    </div>
  );
};

export default TeamPage;
