export const loadData=(token) =>{
  try {
    let data = localStorage.getItem(token);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return err;
  }
}

export const saveData=(key, data)=> {
  localStorage.setItem(key, JSON.stringify(data));
}