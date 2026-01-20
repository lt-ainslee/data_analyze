import ReactECharts from "echarts-for-react";

const ChartViewer = ({ option }) => (
  <div className="rounded-lg bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold text-slate-500">图表预览</h3>
      <button className="rounded-md border border-slate-200 px-3 py-1 text-xs text-slate-600">
        导出图片
      </button>
    </div>
    <div className="mt-4 h-64">
      <ReactECharts option={option} style={{ height: "100%" }} />
    </div>
  </div>
);

export default ChartViewer;
