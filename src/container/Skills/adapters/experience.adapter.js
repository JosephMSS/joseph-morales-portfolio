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
