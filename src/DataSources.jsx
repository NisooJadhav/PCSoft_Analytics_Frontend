import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  RefreshCw,
  MoreVertical,
  Database,
  Filter,
  Download,
  Trash2,
  Edit,
  Check,
  X as XIcon,
  AlertCircle,
} from 'lucide-react';

const DataSources = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const dataSources = [
    {
      id: 1,
      name: 'sql19',
      type: 'SQL Server',
      database: 'esbee',
      status: 'disconnected',
      lastSynced: 'Never',
      description: '',
    },
    {
      id: 2,
      name: 'sql',
      type: 'SQL Server',
      database: 'PCSOFT',
      status: 'disconnected',
      lastSynced: 'Never',
      description: '',
    },
    {
      id: 3,
      name: 'BINEW',
      type: 'SQL Server',
      database: 'DW_AICATEST',
      status: 'disconnected',
      lastSynced: 'Never',
      description: 'testing erp data analytics',
    },
    {
      id: 4,
      name: 'VISION - SQL19',
      type: 'SQL Server',
      database: 'VISION_CRP',
      status: 'disconnected',
      lastSynced: 'Never',
      description: 'Data source for Vision infra on SQL19',
    },
  ];

  const filters = ['All', 'Connected', 'Disconnected', 'Error'];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'connected':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'disconnected':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'error':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400';
    }
  };

  const filteredDataSources = dataSources.filter(source => {
    const matchesSearch = source.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         source.database.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || 
                         source.status.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Data Sources
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Connect and manage your data sources
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create
        </motion.button>
      </motion.div>

      {/* Controls Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`p-4 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl`}
      >
        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="flex-1 min-w-[300px]">
            <div className={`relative rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} overflow-hidden`}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search data sources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-11 pr-4 py-3 bg-transparent ${darkMode ? 'text-white placeholder-slate-400' : 'text-slate-800 placeholder-slate-500'} outline-none`}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : darkMode
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl ${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-colors`}
              title="Refresh"
            >
              <RefreshCw className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl ${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-colors`}
              title="Filter"
            >
              <Filter className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl overflow-hidden`}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`${darkMode ? 'bg-slate-700/50' : 'bg-slate-50'} border-b ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`px-6 py-4 text-left text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Name
                </th>
                <th className={`px-6 py-4 text-left text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Type
                </th>
                <th className={`px-6 py-4 text-left text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Database
                </th>
                <th className={`px-6 py-4 text-left text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-4 text-left text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Last Synced
                </th>
                <th className={`px-6 py-4 text-right text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredDataSources.map((source, index) => (
                <motion.tr
                  key={source.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className={`${darkMode ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'} transition-colors group`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
                        <Database className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {source.name}
                        </p>
                        {source.description && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {source.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-slate-400" />
                      <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {source.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {source.database}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${getStatusColor(source.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        source.status === 'connected' ? 'bg-green-500' :
                        source.status === 'disconnected' ? 'bg-red-500' : 'bg-orange-500'
                      }`}></span>
                      {source.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {source.lastSynced}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700 text-slate-400 hover:text-slate-300' : 'hover:bg-slate-100 text-slate-600 hover:text-slate-800'} transition-colors`}
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700 text-slate-400 hover:text-slate-300' : 'hover:bg-slate-100 text-slate-600 hover:text-slate-800'} transition-colors`}
                        title="More"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredDataSources.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className={`w-16 h-16 ${darkMode ? 'text-slate-600' : 'text-slate-300'} mx-auto mb-4`} />
            <p className="text-slate-500 dark:text-slate-400">No data sources found</p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </motion.div>

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Sources</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>{dataSources.length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Connected</p>
          <p className="text-2xl font-bold text-green-500">0</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Disconnected</p>
          <p className="text-2xl font-bold text-red-500">{dataSources.length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Errors</p>
          <p className="text-2xl font-bold text-orange-500">0</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DataSources;