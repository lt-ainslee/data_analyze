import { useEffect, useState } from "react";

import ChartViewer from "../components/ChartViewer.jsx";
import ModuleSelector from "../components/ModuleSelector.jsx";
import UploadForm from "../components/UploadForm.jsx";
import { fetchModules, runAnalysis, uploadFile } from "../services/api.js";

const AnalysisPage = () => {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState("");
  const [chartOption, setChartOption] = useState(null);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetchModules().then((data) => {
      setModules(data);
      setSelectedModule(data[0]?.name ?? "");
    });
  }, []);

  const handleUpload = async (file) => {
    const uploadResult = await uploadFile(file);
    const analysisResult = await runAnalysis(selectedModule, uploadResult.file_id);
    setChartOption(analysisResult.chart_config);
    setSummary(analysisResult.summary);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
      <div className="space-y-6">
        <UploadForm onUpload={handleUpload} />
        {chartOption && <ChartViewer option={chartOption} />}
      </div>
      <aside className="space-y-6">
        <ModuleSelector
          modules={modules}
          selected={selectedModule}
          onSelect={setSelectedModule}
        />
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-500">分析摘要</h3>
          {summary ? (
            <dl className="mt-3 space-y-2 text-sm text-slate-600">
              {Object.entries(summary).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <dt className="font-medium text-slate-500">{key}</dt>
                  <dd>{String(value)}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-3 text-sm text-slate-500">等待分析结果...</p>
          )}
        </div>
      </aside>
    </div>
  );
};

export default AnalysisPage;
