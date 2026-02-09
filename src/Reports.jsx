import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  RefreshCw,
  MoreVertical,
  FileText,
  Filter,
  Download,
  Trash2,
  Edit,
  Settings,
  AlertCircle,
  Clock,
  CheckCircle,
} from 'lucide-react';

const Reports = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const reports = [
    {
      id: 1,
      name: 'mktg-16-grouping-testing-for-soa-1',
      description: 'flat report created with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Feb 1, 2026',
    },
    {
      id: 2,
      name: 'mktg-16-grouping-testing-for-soa',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 31, 2026',
    },
    {
      id: 3,
      name: 'mktg-18-inv-5.1-create-measure-5.3',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 22, 2026',
    },
    {
      id: 4,
      name: 'mktg-17-invoice-profitability',
      description: 'flat report created with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 22, 2026',
    },
    {
      id: 5,
      name: 'mktg-16-grouping-testing-for-soa-3',
      description: 'flat report created with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 21, 2026',
    },
    {
      id: 6,
      name: 'mktg-16-grouping-testing-for-soa-2',
      description: 'flat report created with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 21, 2026',
    },
    {
      id: 7,
      name: 'mktg-test-2-soa',
      description: 'flat report created with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 21, 2026',
    },
    {
      id: 8,
      name: 'mktg-15-pb-7.1-create-measure',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 19, 2026',
    },
    {
      id: 9,
      name: 'mktg-13-poa-6.1-create-measure',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 19, 2026',
    },
    {
      id: 10,
      name: 'mktg-14-purchase-bills',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 19, 2026',
    },
    {
      id: 11,
      name: 'purchase-analysis-grouping',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 19, 2026',
    },
    {
      id: 12,
      name: 'mktg-12-purchase-order-analysis',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 19, 2026',
    },
    {
      id: 13,
      name: 'mktg-10-soa-2.5-rank-measure',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 14, 2026',
    },
    {
      id: 14,
      name: 'mktg-11-soa-2.6-filter-measure',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 14, 2026',
    },
    {
      id: 15,
      name: 'mktg-9-soa-2.4-time-intel-measure',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 14, 2026',
    },
    {
      id: 16,
      name: 'mktg-8-soa-2.3-ratio-measure',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 14, 2026',
    },
    {
      id: 17,
      name: 'mktg-7-soa-2.2-calculate-measure',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 14, 2026',
    },
    {
      id: 18,
      name: 'mktg-6-soa-2.1-create-measure',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 14, 2026',
    },
    {
      id: 19,
      name: 'mktg-5-sales-order-analysis',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 14, 2026',
    },
    {
      id: 20,
      name: 'mktg-4-sales-order-analysis-city-wise',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 13, 2026',
    },
    {
      id: 21,
      name: 'mktg-3-sales-order-analysis-country-wise',
      description: 'flat report updated with modern designer',
      groups: '',
      status: 'Draft',
      updated: 'Jan 13, 2026',
    },
  ];

  const filters = ['All', 'Active', 'Draft', 'Archived'];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'draft':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'archived':
        return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400';
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (report.description && report.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = activeFilter === 'All' || 
                         report.status.toLowerCase() === activeFilter.toLowerCase();
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
            Reports
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Create and manage your reports
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
                placeholder="Search reports..."
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
              title="Filter by groups"
            >
              <Filter className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl ${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-colors`}
              title="Settings"
            >
              <Settings className="w-5 h-5" />
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
                  Description
                </th>
                <th className={`px-6 py-4 text-left text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Groups
                </th>
                <th className={`px-6 py-4 text-left text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-4 text-left text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Updated
                </th>
                <th className={`px-6 py-4 text-right text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredReports.map((report, index) => (
                <motion.tr
                  key={report.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.02 }}
                  className={`${darkMode ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'} transition-colors group`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-md">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {report.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {report.description || '—'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {report.groups || '—'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${getStatusColor(report.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        report.status === 'Active' ? 'bg-green-500' :
                        report.status === 'Draft' ? 'bg-orange-500' : 'bg-slate-500'
                      }`}></span>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {report.updated}
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

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className={`w-16 h-16 ${darkMode ? 'text-slate-600' : 'text-slate-300'} mx-auto mb-4`} />
            <p className="text-slate-500 dark:text-slate-400">No reports found</p>
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
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Reports</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>{reports.length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Active</p>
          <p className="text-2xl font-bold text-green-500">0</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Draft</p>
          <p className="text-2xl font-bold text-orange-500">{reports.filter(r => r.status === 'Draft').length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Archived</p>
          <p className="text-2xl font-bold text-slate-500">0</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;