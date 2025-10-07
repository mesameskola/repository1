const root = document.querySelector("#root");
// import Test from "script1.js"
// // const title = document.createElement("h1");

// // title.innerText = "Hello World";
// // console.log(title);
// // console.dir(title);
// // root.appendChild(title);

const icons = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-school-icon lucide-school"
      >
        <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
        <path d="M18 5v16" />
        <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
        <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
        <path d="M6 5v16" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    title: "School",
    about: "A school is an institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-linkedin-icon lucide-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: "LinkedIn",
    about: "LinkedIn is a professional networking platform that connects individuals and businesses worldwide.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-twitter-icon lucide-twitter"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    title: "Twitter",
    about: "Twitter is a social media platform where users post and interact with messages known as 'tweets'.",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-dribbble-icon lucide-dribbble"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
      </svg>
    ),
    title: "Dribbble",
    about: "Dribbble is a community of designers sharing screenshots of their work, process, and projects.",
  },
];

const links = [
  {
    title: "Home",
    
  },
  {
    title: "About Us",
  },
  {
    title: "Services",
  },
  {
    title: "Blog",
  },
  {
    title: "Contact Us",
  },
    {
    title: "Menu",
  }
];
const icon= "./image/facebook.svg"
 


const div = (
  <div className="max-w-[1445px] m-auto flex flex-col gap-[48px] items-center p-[96px]">
    <h1 className="text-[33px] font-bold text-[#cccccc]">Logo Template</h1>
    <ul className="flex gap-[32px]">
      {links.map((misamartebi, index) => (
        <li key={misamartebi} className="mx-[16px] text-[#8E8E8E]">
          {misamartebi.title}
        </li>
      ))}
    </ul>
    <ul className="flex gap-[25px]">
      {icons.map((abrama, index) => (
        <li key={abrama} className="flex flex-col items-center mx-[16px]">
         <p > {abrama.icon}</p>
         <p className=" text-[30px]"> {abrama.title}</p>
          <p>{abrama.about}</p>
        </li>
      ))}
    </ul>
     <hr className="w-full border-[#8e8e8e]" />
    <p className="text-[#8E8E8E]">Copyright © 2023 - All rights Reserved</p>
  </div>
);

ReactDOM.createRoot(root).render(div);


const user = {
  name: "John Doe",
  age: 30}


  console.log(user.name)