const modalcontent = {
  about: {
    title: `A <span>Passionate</span> Self-Taught Frontend Developer`,
    text: `  <p>
      I'm Feihuan, a self-taught frontend developer with an unwavering
      love for coding. From the very first line of code I wrote, I knew I
      had found my true calling—a career that I am dedicated to pursuing
      for a lifetime.
    </p>
    <br />
    <p>
      The ever-evolving world of technology never fails to ignite my
      curiosity. With each new advancement, I eagerly dive in, excited to
      learn and adapt. As a frontend developer, I revel in the opportunity
      to design innovative projects and solve intricate coding puzzles.
      HTML, CSS, and JavaScript are the foundations of my knowledge, and I
      have also explored powerful libraries like React, jQuery, and
      Bootstrap.
    </p>
    <br />
    <p>
      But my thirst for knowledge doesn't end there. I am committed to
      learning new things on a daily basis, keeping up with the latest
      trends and techniques in the industry. Challenges and problems fuel
      my enthusiasm, as I provide me with the chance to sharpen my
      skills and find creative solutions.
    </p>
    <br />
    <p>
      Collaboration is another aspect that drives my passion. Working
      alongside like-minded individuals who share the same love for coding
      brings out the best in me. I thrive in an environment where ideas
      are shared, challenges are faced together, and a sense of
      camaraderie fuels the team's success.
    </p>
    <br />
    <p>
      In this vast digital landscape, I look forward to making meaningful
      connections and collaborating with more people who share my passion
      for coding. Let's create something incredible together!
    </p>`,
  },
  skills: {
    skillWeb: {
      title: `Igniting Creativity, Passion, and <span>Lifelong Learning</span>`,
      text: ` <p>Step into my world as a passionate and self-taught frontend developer with a deep love for build different projects. With exploring in HTML, CSS, and JavaScript, I have the skills to transform designs into captivating websites. My proficiency extends to utilizing popular frontend libraries and frameworks like Bootstrap, jQuery, and React to build dynamic and responsive interfaces.</p><br>
      <p>But my thirst for knowledge doesn't stop there. With a basic understanding of backend technologies, including Node.js, express, mongoDB, I have a solid foundation to collaborate effectively with backend developers. This enables seamless integration between frontend and backend systems, ensuring the smooth functionality of my projects.</p><br>
      <p>Driven by an insatiable curiosity and a relentless pursuit of growth, I dedicate myself to learning new codes and staying up-to-date with the latest trends in the ever-evolving tech industry. My willingness to learn and adapt makes me a valuable asset in an industry where innovation is paramount.</p><br>
      <p>As a self-taught developer, my journey is a testament to my passion, determination, and relentless pursuit of excellence. With each line of code I write, I strive to create remarkable digital experiences that leave a lasting impact on users.</p><br>`,
    },
    skillVideo: {
      title: `Video Editing: A <span>Creative Journey</span>`,
      text: `<p>Video editing is one of my true passion, and I've developed a strong skill set to bring stories to life. With expertise in Adobe Premiere Pro, Final Cut Pro, and Wondershare Filmora, I have a keen eye for detail and excel in crafting visually captivating narratives. What sets me apart is my unwavering dedication to the craft. I constantly explore new techniques, stay up-to-date with industry trends, and push the boundaries of creativity. Video editing isn't just a job for me; it's my creative outlet and the driving force behind my commitment to deliver exceptional visual experiences.</p><br>`,
    },
    skillGraphic: {
      title: `Creative <span>Design</span> Maestro`,
      text: `<p>Graphic design is one of my true calling, and I've cultivated a strong skill set to bring ideas to life visually. With proficiency in Photoshop and GIMP, I possess a meticulous attention to detail and a knack for creating stunning visuals. What truly drives me is my unwavering passion for the art form. I find immense joy in crafting visually captivating designs that evoke emotions and leave a lasting impact. I constantly seek inspiration, stay abreast of design trends, and strive to push the boundaries of creativity. Graphic design isn't just a job for me; it's an integral part of who I am, and I am driven by the opportunity to create meaningful and memorable visual experiences.</p><br>`,
    },
  },
};



const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector("#menu-icon");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modal .dialog-container h2");
const modalText = document.querySelector("#modal .dialog-container article");
const aboutBtn = document.querySelector("#modal-about");
const skillOneBtn = document.querySelector("#modal-skill-1");
const skillTwoBtn = document.querySelector("#modal-skill-2");
const skillThreeBtn = document.querySelector("#modal-skill-3");
const closeModal = document.querySelector('dialog i');
let layers = document.querySelectorAll('.projects-layer')

const navbarToggle = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const scollDownChange = () => {
  layers.forEach(layer => {
    layer.classList.remove('slide')
  })
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    const id = sec.id;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        let currSectionIcon = document.querySelector(
          `header nav a[href*=${id}]`
        );
        link.classList.remove("active");
        currSectionIcon.classList.add("active");
      });
    }
  });

  //add border bottom after scroll
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //   remove navbar on scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//  nav bar toggle on small screen
menuIcon.addEventListener("click", navbarToggle);

// activate right nav link among scroll and make a border on bottom navbar also remove navbar in small screen
window.addEventListener("scroll", scollDownChange);

//open modal 


// modal.showModal();
aboutBtn.addEventListener("click", () => {
  modalTitle.innerHTML = modalcontent.about.title;
  modalText.innerHTML = modalcontent.about.text;
  modal.showModal();
});
skillOneBtn.addEventListener("click", () => {
  modalTitle.innerHTML = modalcontent.skills.skillWeb.title;
  modalText.innerHTML = modalcontent.skills.skillWeb.text;
  modal.showModal();
});
skillTwoBtn.addEventListener("click", () => {
  modalTitle.innerHTML = modalcontent.skills.skillVideo.title;
  modalText.innerHTML = modalcontent.skills.skillVideo.text;
  modal.showModal();
});
skillThreeBtn.addEventListener("click", () => {
  modalTitle.innerHTML = modalcontent.skills.skillGraphic.title;
  modalText.innerHTML = modalcontent.skills.skillGraphic.text;
  modal.showModal();
});
closeModal.addEventListener('click', () => {
  modal.close()
})

// toggle layer on project section for mobile, phone dont trigger :hover


layers.forEach(layer => {
  let box = layer.parentElement;
  box.addEventListener('click', () => {
    if(window.innerWidth < 768){
      layer.classList.toggle('slide')
    }
  })
})






// ----------------------------libraries------------------
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .projects-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".typed", {
  strings: [
    "Frontend Developer.",
    "Video Editor.",
    "Graphic Designer.",
    "Musician.",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
