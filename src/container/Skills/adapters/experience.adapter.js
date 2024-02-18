import { DateTime } from "luxon";
export const worksAdapter = (work) => {
  return {
    name: work?.name,
    desc: work?.description,
    company: work?.company,
  };
};
export const experienceDataAdapter = (data) => {
  const response = data.map((experience) => {
    const adaptedExperience = {
      year: experience.year,
      works: experience.works.map(worksAdapter),
    };
    return adaptedExperience;
  });
  return response;
};
const formatDate = (date) => {
  const FORMAT = "dd/MM/yyyy";
  return DateTime.fromISO(date).toFormat(FORMAT);
};
export const experienceAdapter = (experiences) => {
  const experiencesData = experiences.map((experience) => {
    const from = formatDate(experience.from);
    const to = formatDate(experience.to);
    return {
      company: experience.company,
      jobTitle: experience.jobTitle,
      description: experience.description,
      from,
      to: experience.isCurrent ? "Present" : to,
      isCurrent: experience.isCurrent,
    };
  });
  return experiencesData;
};
