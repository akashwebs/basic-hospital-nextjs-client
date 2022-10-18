const base_url = "http://localhost:5000";

export const banners = async () => {
  const response = await fetch(`${base_url}/banner`);
  const json = await response.json();
  return json;
};

export const allDoctors = async () => {
  const response = await fetch(`${base_url}/allDoctor/all`);
  const json = await response.json();
  return json;
};

export const aboutEmployee = async () => {
  const response = await fetch(`${base_url}/all-employee-member`);
  const json = await response.json();
  return json;
};
export const gallaryImages = async () => {
  const response = await fetch(`${base_url}/all-image-gallary`);
  const json = await response.json();
  return json;
};
