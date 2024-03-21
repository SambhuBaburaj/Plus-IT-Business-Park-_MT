import Instance from "./Axios";

export const RegisterDatacall = async (data) => {
  return await Instance.post("/register", data);
};
export const Validate = async (data) => {
  return await Instance.get(`/userregister?user=${data}`);
};
export const LoginUserdata = async (data) => {
  console.log(data);
  return await Instance.post("/login", data);
};

export const getItemsApi = async () => {
  return await Instance.get("/items");
};
export const ProtectApi = async () => {
  return await Instance.get("/protected");
};

export const updateProfileApi = async (data) => {
  return await Instance.put("/update-user",data);
};
export const DeactivateApi = async () => {
  return await Instance.delete("/delete-user");
};