const Universities = [
  {
    id: 1,
    name: "University of Toronto",
    about:
      "Established in 1827, as a colonial college by the Church of England, the University of Toronto (popularly known as 'U of T') is a Canadian public research university in Toronto, Ontario. U of T is known to be a birthplace of insulin and stem cell research. It is one of the two Canadian universities to be members of Association of American Universities. It ranks 2nd in the world in academics oriented research.",
    campuses: [
      "Downtown Toronto Campus (St. George)",
      "Scarborough Campus (UTSC)",
      "Mississauga Campus",
    ],
    location: {
      city: "Ontario",
      country: "Canada",
    },
    rank: "26",
    programs: {
      undergrads: 8,
      postgrads: 178,
    },
  },
  {
    id: 2,
    name: "University of British Columbia",
    about:
      "The University of British Columbia is a public research university with campuses near Vancouver and in Kelowna, British Columbia. Established in 1908, UBC is British Columbia's oldest university. The university ranks among the top three universities in Canada.",
    campuses: ["Vancouver Campus", "Okanagan Campus"],
    location: {
      city: "British Columbia",
      country: "Canada",
    },
    rank: "46",
    programs: {
      undergrads: 254,
      postgrads: 244,
    },
  },
  {
    id: 3,
    name: "University of Waterloo",
    about:
      "Founded in 1957 (in the age of Cold War) in Ontario, Canada, University of Waterloo was established by a group of business leaders to tackle the world's most daunting challenges. The courses offered are in Applied Health Sciences, Arts, Engineering, Mathematics and Sciences. Today, Waterloo is known to have the world's largest post-secondary co-operative education programs with over 19000 co-op students and over 5200 employers, which allow students to integrate academics with relevant work experiences. ",
    campuses: ["Cambridge Campus", "Kitchener Campus", "Stratford Campus"],
    location: {
      city: "Ontario",
      country: "Canada",
    },
    rank: "149",
    programs: {
      undergrads: 94,
      postgrads: 115,
    },
  },
];

export default Universities;
