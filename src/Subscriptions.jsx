import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Mail,
  FileText,
  Layout,
  MoreVertical,
  Clock,
  Users,
  Calendar,
  Download,
  AlertCircle,
} from 'lucide-react';

const Subscriptions = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('my-subscriptions');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const subscriptions = [
    {
      id: 1,
      name: 'mktg-test-2-soa - Daily Report',
      type: 'report',
      reportName: 'mktg-test-2-soa',
      status: 'ACTIVE',
      schedule: 'Daily at 08:00',
      format: 'EXCEL',
      recipients: '1 recipient(s)',
      nextSend: 'In 2 hours',
      lastSent: '2/10/2026',
    },
  ];

  const tabs = [
    { id: 'my-subscriptions', label: 'My Subscriptions', icon: Mail },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'dashboards', label: 'Dashboards', icon: Layout },
  ];

  const getStatusColor = (status) => {
    switch (status.toUpperCase()) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'PAUSED':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'INACTIVE':
        return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400';
      default:
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    }
  };

  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sub.reportName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'All' || sub.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              Email Subscriptions
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Manage your email subscriptions for reports and dashboards
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className={`flex items-center gap-2 p-2 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex-1 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-700/50'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Search and Filter Bar */}
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
                placeholder="Search subscriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-11 pr-4 py-3 bg-transparent ${darkMode ? 'text-white placeholder-slate-400' : 'text-slate-800 placeholder-slate-500'} outline-none`}
              />
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`px-4 py-3 rounded-xl font-medium text-sm ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'} outline-none cursor-pointer transition-colors hover:${darkMode ? 'bg-slate-600' : 'bg-slate-200'}`}
            >
              <option value="All">All</option>
              <option value="ACTIVE">Active</option>
              <option value="PAUSED">Paused</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'my-subscriptions' && (
          <motion.div
            key="my-subscriptions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {filteredSubscriptions.length > 0 ? (
              filteredSubscriptions.map((subscription, index) => (
                <motion.div
                  key={subscription.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                            {subscription.name}
                          </h3>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(subscription.status)}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            {subscription.status}
                          </span>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          report: {subscription.reportName}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-100 text-slate-600'} transition-colors`}
                    >
                      <MoreVertical className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Subscription Details */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">Schedule</p>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {subscription.schedule}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">Format</p>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-green-500" />
                        <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {subscription.format}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">Recipients</p>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-500" />
                        <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {subscription.recipients}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">Next Send</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {subscription.nextSend}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">Last Sent</p>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-slate-500" />
                        <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {subscription.lastSent}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-12 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl text-center`}
              >
                <AlertCircle className={`w-16 h-16 ${darkMode ? 'text-slate-600' : 'text-slate-300'} mx-auto mb-4`} />
                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">No subscriptions found</p>
                <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
                  Try adjusting your search or create a new subscription
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {activeTab === 'reports' && (
          <motion.div
            key="reports"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-12 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl text-center`}
          >
            <FileText className={`w-16 h-16 ${darkMode ? 'text-slate-600' : 'text-slate-300'} mx-auto mb-4`} />
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">No report subscriptions</p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
              Subscribe to reports to receive them via email
            </p>
          </motion.div>
        )}

        {activeTab === 'dashboards' && (
          <motion.div
            key="dashboards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-12 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl text-center`}
          >
            <Layout className={`w-16 h-16 ${darkMode ? 'text-slate-600' : 'text-slate-300'} mx-auto mb-4`} />
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">No dashboard subscriptions</p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
              Subscribe to dashboards to receive them via email
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Subscriptions</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>{subscriptions.length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Active</p>
          <p className="text-2xl font-bold text-green-500">{subscriptions.filter(s => s.status === 'ACTIVE').length}</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Paused</p>
          <p className="text-2xl font-bold text-orange-500">0</p>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-lg`}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Recipients</p>
          <p className="text-2xl font-bold text-blue-500">1</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Subscriptions;