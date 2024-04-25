import React from "react";



const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zX38KaJpj7a6_ZH9NNuBLEOxIEqNbbEQ1moFx3li7Q&s",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxEG-GqThoam-ocuw9OYg5FW5vo7rQv0waCzYb4RVQw&s",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFj6Qse4wbEwy1FFDasayILFETEY3NrE7NHDnj6q-_Zu9SUzJKuabXychwc48klg0FdU&usqp=CAU",
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbDenzbnE2XNk-xz-a2sqt_U9axDXn0F3BmnDagmdnQ&s",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxl3A4MLzJGXkotfrdLSTrzFeYxZq9FLRjEBgdPZ89QA&s",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://media.istockphoto.com/id/858135870/tr/vekt%C3%B6r/gen%C3%A7-adam-modeli-avatar-karakter.jpg?s=1024x1024&w=is&k=20&c=iKR_AwUqn3GDPF4_6EHxOZrQvIthMDHoJ4Bp2wq2lHA=",
  },
];

const About= ()=> {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
