const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

const USERNAME = "coalition";
const PASSWORD = "skills-test";

export async function fetchPatientData() {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
    },
  });

  const data = await response.json();

  // Get only Jessica Taylor
  const patient = data.find((item) => item.name === "Jessica Taylor");

  return patient;
}
