const ModuleSelector = ({ modules, selected, onSelect }) => (
  <div className="rounded-lg bg-white p-6 shadow-sm">
    <h3 className="text-sm font-semibold text-slate-500">分析模块</h3>
    <select
      className="mt-3 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
      value={selected}
      onChange={(event) => onSelect(event.target.value)}
    >
      {modules.map((module) => (
        <option key={module.name} value={module.name}>
          {module.title}
        </option>
      ))}
    </select>
  </div>
);

export default ModuleSelector;
