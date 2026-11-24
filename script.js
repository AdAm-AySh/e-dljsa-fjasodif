function toggleMenu() {
  document.getElementById("mobileLinks").classList.toggle("open");
}

// إظهار تنبيه بسيط للأقسام التي لم يُضف محتواها بعد.
function showNotice(message) {
  alert(message);
}

const examsData = [
  {
    img: "images/امتحان دراسات الوحدة التالتة.png",
    title: "امتحان دراسات على الوحدة التالتة",
    kind: "دراسات",
    link: "https://forms.gle/RQEZa6uAtXrym4wX7",
  },
];

function createExam() {
  const socialExams = document.querySelector(".exam-card-wrapper.derasat");
  for (let i = 0; i < examsData.length; i++) {
    if (examsData[i].kind === "دراسات") {
      let a = document.createElement("a");
      a.href = examsData[i].link;

      let examCard = document.createElement("div");
      examCard.classList.add("exam-card");

      let top = document.createElement("div");
      top.classList.add("top");

      let img = document.createElement("img");
      img.src = examsData[i].img;

      let bottom = document.createElement("div");
      bottom.classList.add("bottom");

      let h4 = document.createElement("h4");
      h4.textContent = examsData[i].title;

      top.appendChild(img);
      examCard.appendChild(top);

      bottom.appendChild(h4);
      examCard.appendChild(bottom);

      a.appendChild(examCard);

      socialExams.querySelector(".content").appendChild(a);
    }
  }
}

createExam();

const examSearch = document.getElementById("examSearch");
const examSearchEmpty = document.getElementById("examSearchEmpty");

examSearch.addEventListener("input", () => {
  const query = examSearch.value.trim().toLocaleLowerCase();
  let visibleExams = 0;

  document.querySelectorAll(".exam-card-wrapper").forEach((wrapper) => {
    const category = wrapper
      .querySelector("h2")
      .textContent.toLocaleLowerCase();
    let visibleInCategory = 0;

    wrapper.querySelectorAll(".content > *").forEach((exam) => {
      const title = exam.textContent.toLocaleLowerCase();
      const matches =
        !query || category.includes(query) || title.includes(query);

      exam.hidden = !matches;
      if (matches) visibleInCategory++;
    });

    wrapper.hidden = visibleInCategory === 0;
    visibleExams += visibleInCategory;
  });

  examSearchEmpty.hidden = visibleExams > 0;
});

// examSearch.addEventListener("input", () => {
//   examSearch.value === "Adam" ? console.log("Yes") : false;

// })

function switchModels(subject) {
  const derasat = document.querySelector(".molakhasat.derasat");
  const olom = document.querySelector(".molakhasat.olom");
  const arabic = document.querySelector(".molakhasat.arabic");
  const math = document.querySelector(".molakhasat.math");
  const english = document.querySelector(".molakhasat.english");
  const files = document.querySelector(".files");
  const body = document.body;
  switch (subject) {
    case "دراسات":
      derasat.style.display = "block";
      break;
    case "علوم":
      olom.style.display = "block";
      break;
    case "لغة عربية":
      arabic.style.display = "block";
      break;
    case "رياضيات":
      math.style.display = "block";
      break;
    case "english":
      english.style.display = "block";
      break;
    case "files":
      files.style.display = "block";
      break;
    default:
      break;
  }
  document.querySelectorAll(".molakhasat").forEach((one) => {
    one.style.overflow = "auto";
  });
  files.style.overflow = "auto";
  body.style.overflow = "hidden";
}

function closeSubject() {
  document.querySelectorAll(".molakhasat").forEach((one) => {
    one.style.display = "none";
  });
  document.querySelector(".files").style.display = "none";
  document.body.style.overflow = "auto";
}
