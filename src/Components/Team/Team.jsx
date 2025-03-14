import Image from "next/image";
import React from "react";
import Image1 from "../../images/sharjeel3.jpeg"
const teamMembers = [
  {
    name: "Shahid Hameed",
    role: "CEO & Founder",
    image: "/path-to-image.jpg", 
    description: "Shahid has over 20 years of experience in the printing industry and is passionate about innovation.",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "https://via.placeholder.com/150",
    description: "Jane leads our R&D team, driving the development of next-gen printing technologies.",
  },
  {
    name: "Sharjeel Shahid",
    role: "Head of Operations & Co-Founder",
    image: {Image1},
    description: "Sharjeel ensures our operations run smoothly and efficiently.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden text-center p-6 transition transform hover:scale-105 hover:shadow-2xl">
              <div className="relative w-32 h-32 mx-auto">
                <Image src={member.image} alt={member.name} width={128} height={128} className="rounded-full object-cover" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-indigo-600 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
