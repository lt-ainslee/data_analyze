const API_BASE = "http://localhost:8000";

const fakeModules = [
  {
    name: "summary",
    title: "基础统计汇总",
  },
];

const fakePlugins = [
  {
    name: "summary",
    title: "基础统计插件",
    description: "示例插件，用于返回基础摘要与图表配置",
    enabled: true,
    parametersSummary: "sample_rate: 1.0",
  },
];

export const uploadFile = async (file) => {
  if (!file) {
    return { file_id: "demo-file" };
  }

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
};

export const fetchModules = async () => fakeModules;

export const runAnalysis = async (module, dataId) => {
  const response = await fetch(`${API_BASE}/analysis`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      module,
      data_id: dataId,
      params: {},
    }),
  });

  if (!response.ok) {
    throw new Error("Analysis failed");
  }

  return response.json();
};

export const fetchPlugins = async () => fakePlugins;

export const togglePlugin = async (name) => {
  const plugin = fakePlugins.find((item) => item.name === name);
  const action = plugin?.enabled ? "disable" : "enable";

  await fetch(`${API_BASE}/plugins/${name}/${action}`, {
    method: "POST",
  });
};
