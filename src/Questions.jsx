import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  RefreshCw,
  MoreVertical,
  HelpCircle,
  Filter,
  Settings,
  AlertCircle,
  BarChart3,
  PieChart,
  LineChart,
  AreaChart,
} from 'lucide-react';

const Questions = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const questions = [
    {
      id: 1,
      name: 'm102-quantity by party',
      description: '',
      groups: '',
      chartType: 'Bar',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 2,
      name: 'm101-classwise projection-partywise...',
      description: '',
      groups: '',
      chartType: 'Pie',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 3,
      name: 'Highest Quantity Party',
      description: '',
      groups: '',
      chartType: 'Bar',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 4,
      name: 'Highest Quantity Parties-3',
      description: '',
      groups: '',
      chartType: 'Area',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 5,
      name: 'Top 5 Parties with Highest Quantity',
      description: '',
      groups: '',
      chartType: 'Pie',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 6,
      name: 'Monthwise Basic Items for one Party',
      description: '',
      groups: '',
      chartType: 'Line',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 7,
      name: 'Highest Quantity Parties-2',
      description: '',
      groups: '',
      chartType: 'Line',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 8,
      name: 'Party wise Quantity',
      description: '',
      groups: '',
      chartType: 'Bar',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 9,
      name: 'party wise volume',
      description: '',
      groups: '',
      chartType: 'Bar',
      status: 'Draft',
      updated: 'Never',
    },
    {
      id: 10,
      name: 'TOP 10 PARTY WISE SALES',
      description: '',
      groups: '',
      chartType: 'Bar',
      status: 'Draft',
      updated: 'Never',
    },
  ];

  const filters = ['All', 'Draft', 'Published', 'Archived'];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'published':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'draft':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'archived':
        return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400';
    }
  };

  const getChartIcon = (chartType) => {
    switch (chartType.toLowerCase()) {
      case 'bar':
        return BarChart3;
      case 'pie':
        return PieChart;
      case 'line':
        return LineChart;
      case 'area':
        return AreaChart;
      default:
        return BarChart3;
    }
  };

  const getChartColor = (chartType) => {
    switch (chartType.toLowerCase()) {
      case 'bar':
        return 'from-blue-500 to-cyan-500';
      case 'pie':
        return 'from-purple-500 to-pink-500';
      case 'line':
        return 'from-green-500 to-emerald-500';
      case 'area':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-blue-500 to-cyan-500';
    }
  };

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (question.description && question.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = activeFilter === 'All' || 
                         question.status.toLowerCase() === activeFilter.toLowerCase();
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
            Questions
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Create and manage your analytical questions
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
                placeholder="Search questions..."
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
                  Chart Type
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
              {filteredQuestions.map((question, index) => {
                const ChartIcon = getChartIcon(question.chartType);
                const chartGradient = getChartColor(question.chartType);
                
                return (
                  <motion.tr
                    key={question.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className={`${darkMode ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'} transition-colors group`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${chartGradient} flex items-center justify-center shadow-md`}>
                          <ChartIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                            {question.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {question.description || '—'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {question.groups || '—'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <ChartIcon className={`w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                        <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          {question.chartType}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${getStatusColor(question.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          question.status === 'Published' ? 'bg-green-500' :
                          question.status === 'Draft' ? 'bg-orange-500' : 'bg-slate-500'
                        }`}></span>
                        {question.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {question.updated}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
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
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className={`w-16 h-16 ${darkMode ? 'text-slate-600' : 'text-slate-300'} mx-auto mb-4`} />
            <p className="text-slate-500 dark:text-slate-400">No questions found</p>
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
        className="grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Questions</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>{questions.length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Bar Charts</p>
          <p className="text-2xl font-bold text-blue-500">{questions.filter(q => q.chartType === 'Bar').length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Pie Charts</p>
          <p className="text-2xl font-bold text-purple-500">{questions.filter(q => q.chartType === 'Pie').length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Line Charts</p>
          <p className="text-2xl font-bold text-green-500">{questions.filter(q => q.chartType === 'Line').length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Area Charts</p>
          <p className="text-2xl font-bold text-orange-500">{questions.filter(q => q.chartType === 'Area').length}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Questions;