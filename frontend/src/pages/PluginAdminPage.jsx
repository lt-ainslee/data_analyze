import { useEffect, useState } from "react";

import PluginManager from "../components/PluginManager.jsx";
import { fetchPlugins, togglePlugin } from "../services/api.js";

const PluginAdminPage = () => {
  const [plugins, setPlugins] = useState([]);

  const loadPlugins = () => {
    fetchPlugins().then((data) => setPlugins(data));
  };

  useEffect(() => {
    loadPlugins();
  }, []);

  const handleToggle = async (name) => {
    await togglePlugin(name);
    loadPlugins();
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">插件管理</h2>
        <p className="text-sm text-slate-500">
          启用或停用分析插件，并查看默认参数配置。
        </p>
      </div>
      <PluginManager plugins={plugins} onToggle={handleToggle} />
    </div>
  );
};

export default PluginAdminPage;
