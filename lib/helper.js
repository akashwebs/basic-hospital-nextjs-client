const base_url = "https://basic-hospital-server.vercel.app";

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
export const healthTips = async () => {
  const response = await fetch(`${base_url}/all-post`);
  const json = await response.json();
  return json;
};
export const healthSinglePost = async (id) => {
  const response = await fetch(`${base_url}/single-page-post/${id}`);
  const json = await response.json();

  if (json) return json;
  return { json };
};
