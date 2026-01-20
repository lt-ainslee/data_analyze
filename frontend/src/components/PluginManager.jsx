const PluginManager = ({ plugins, onToggle }) => (
  <div className="space-y-4">
    {plugins.map((plugin) => (
      <div
        key={plugin.name}
        className="rounded-lg border border-slate-200 bg-white p-5"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold">{plugin.title}</h3>
            <p className="text-sm text-slate-500">{plugin.description}</p>
          </div>
          <button
            type="button"
            className={`rounded-full px-4 py-1 text-xs font-medium ${
              plugin.enabled
                ? "bg-emerald-100 text-emerald-700"
                : "bg-slate-100 text-slate-600"
            }`}
            onClick={() => onToggle(plugin.name)}
          >
            {plugin.enabled ? "启用" : "停用"}
          </button>
        </div>
        <div className="mt-3 text-xs text-slate-500">
          参数配置: {plugin.parametersSummary}
        </div>
      </div>
    ))}
  </div>
);

export default PluginManager;
