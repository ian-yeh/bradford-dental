import React from "react";

const testimonials = [
  {
    name: "Natasha Flemming",
    since: 2007,
    quote:
      "Having a family of 7 makes it tough to find a good dental practice for everyone. Bradford Dental Care has been nothing but supportive and welcoming. I would highly recommend Dr. Chow & Dr. Yeh to all.",
  },
  {
    name: "Tina Hewwet",
    since: 2011,
    quote:
      "My entire family sees Dr. Chow. My husband was terrified of dentists and refused to go but after seeing Dr. Chow he is completely at ease. The staff is very helpful and the assistants are very reassuring. All the receptionists are on the ball and they keep me well informed of all my families appointments.",
  },
  {
    name: "Mark Lee",
    since: 2008,
    quote:
      "Dr. Yeh is an awesome dentist. He backs up his diagnosis with proof! His chairside skills are amazing, but what makes him most amazing is his heart. Dr. Yeh is an upstanding, ethical dentist with compassion for those who walk into his clinic.",
  },
];

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const Testimonials = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug mb-4">
            What Our Patients Think
          </h2>
          <p className="font-poppins text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are welcoming new patients! If you are considering a new dentist
            for you and your family, we invite you to call us today to schedule
            your next appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 text-purple font-bold font-josefin w-16 h-16 rounded-full flex items-center justify-center text-xl shrink-0">
                  {initialsOf(t.name)}
                </div>
                <div>
                  <h3 className="font-josefin font-bold text-gray-800 text-lg">
                    {t.name}
                  </h3>
                  <p className="font-josefin text-xs font-bold tracking-widest text-amber-500 uppercase mt-1">
                    Patient Since {t.since}
                  </p>
                </div>
              </div>
              <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
