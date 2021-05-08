async function client(endpoint, customConfig = {}) {
  const res = await fetch(`${endpoint}`, customConfig);
  return await res.json();
}

export { client };
