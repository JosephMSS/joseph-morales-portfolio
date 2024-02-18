class Experience {
  constructor({ name, company, description, date}) {
    this.name = name;
    this.company = company;
    this.description = description;
    this.date = date;
  }
}
const createExperience = ({ name, company, description }) =>
  new Experience({ name, company, description });
export const experienceData = [
  {
    year: "2020-2023",
    works: [
      createExperience({
        company: "Hubex",
        name: "Full stack developer",
        description: "I worked as a Full stack developer at Hubex",
      }),
      createExperience({
        company: "202Labs",
        name: "Backend developer",
        description:
          "I'm responsible for creating APIs with Nest.js and deploying applications.",
      }),
    ],
  },
];
const experience=[]