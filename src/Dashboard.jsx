import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Database,
  Layers,
  FileText,
  HelpCircle,
  BarChart3,
  Send,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Users,
  Activity,
  Moon,
  Sun,
  Bell,
  MessageSquare,
  User,
  Search,
} from 'lucide-react';
import DataSources from './DataSources';
import DataSets from './DataSets';
import Reports from './Reports';
import Questions from './Questions';
import DashboardsPage from './Dashboards';
import Subscriptions from './Subscriptions';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home', badge: null },
    { id: 'data-sources', icon: Database, label: 'Data Sources', badge: '3' },
    { id: 'data-sets', icon: Layers, label: 'Data Sets', badge: null },
    { id: 'reports', icon: FileText, label: 'Reports', badge: '12' },
    { id: 'questions', icon: HelpCircle, label: 'Questions', badge: null },
    { id: 'dashboards', icon: BarChart3, label: 'Dashboards', badge: '5' },
    { id: 'subscriptions', icon: Send, label: 'Subscriptions', badge: null },
  ];

  const statsCards = [
    {
      title: 'Total Data Sources',
      value: '24',
      change: '+12%',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Active Data Sets',
      value: '156',
      change: '+8%',
      icon: Layers,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Reports Generated',
      value: '1,234',
      change: '+23%',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Active Users',
      value: '89',
      change: '+5%',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const quickActions = [
    {
      title: 'Data Sources',
      description: 'Connect and manage your data sources',
      icon: Database,
      color: 'blue',
      page: 'data-sources',
    },
    {
      title: 'Data Sets',
      description: 'Create and manage your data sets',
      icon: Layers,
      color: 'purple',
      page: 'data-sets',
    },
    {
      title: 'Get Started',
      description: 'Learn how to use PCSoft Analytics',
      icon: Sparkles,
      color: 'pink',
      page: 'get-started',
    },
  ];

  const recentActivity = [
    {
      action: 'New report generated',
      user: 'Sarah Johnson',
      time: '5 minutes ago',
      icon: FileText,
    },
    {
      action: 'Data source connected',
      user: 'Mike Chen',
      time: '12 minutes ago',
      icon: Database,
    },
    {
      action: 'Dashboard updated',
      user: 'Emma Wilson',
      time: '1 hour ago',
      icon: BarChart3,
    },
    {
      action: 'New user joined',
      user: 'Alex Rodriguez',
      time: '2 hours ago',
      icon: Users,
    },
  ];

  const handleNavigation = (pageId) => {
    setActivePage(pageId);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'data-sources':
        return <DataSources darkMode={darkMode} />;
      case 'data-sets':
        return <DataSets darkMode={darkMode} />;
      case 'reports':
        return <Reports darkMode={darkMode} />;
      case 'questions':
        return <Questions darkMode={darkMode} />;
      case 'dashboards':
        return <DashboardsPage darkMode={darkMode} />;
      case 'subscriptions':
        return <Subscriptions darkMode={darkMode} />;
      case 'home':
      default:
        return (
          <main className="p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">
                        {stat.title}
                      </p>
                      <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-2`}>
                        {stat.value}
                      </h3>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-500">{stat.change}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">vs last month</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => action.page && handleNavigation(action.page)}
                    className={`group p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${action.color === 'blue' ? 'from-blue-500/10 to-cyan-500/10' : action.color === 'purple' ? 'from-purple-500/10 to-pink-500/10' : 'from-pink-500/10 to-orange-500/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color === 'blue' ? 'from-blue-500 to-cyan-500' : action.color === 'purple' ? 'from-purple-500 to-pink-500' : 'from-pink-500 to-orange-500'} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-2`}>
                        {action.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                        {action.description}
                      </p>
                      <motion.div
                        className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
                        whileHover={{ x: 5 }}
                      >
                        Explore
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
                Recent Activity
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl`}
              >
                {recentActivity.length > 0 ? (
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50'} transition-colors cursor-pointer group`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <activity.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-800'} mb-1`}>
                            {activity.action}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            by {activity.user}
                          </p>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {activity.time}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Activity className={`w-16 h-16 ${darkMode ? 'text-slate-600' : 'text-slate-300'} mx-auto mb-4`} />
                    <p className="text-slate-500 dark:text-slate-400">No recent activity to display</p>
                  </div>
                )}
              </motion.div>
            </div>
          </main>
        );
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'} transition-colors duration-300`}>
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        <motion.aside
          initial={false}
          animate={{ width: sidebarOpen ? '280px' : '80px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed left-0 top-0 h-screen ${darkMode ? 'bg-slate-800/95' : 'bg-white/95'} backdrop-blur-xl shadow-2xl z-50 border-r ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
        >
          {/* Logo - Always Visible */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <Activity className="w-6 h-6 text-white" />
              </motion.div>
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} whitespace-nowrap`}>
                      PCSoft Analytics
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Search - Only when open */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 py-4"
              >
                <div className={`relative rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'} overflow-hidden`}>
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className={`w-full pl-10 pr-4 py-2.5 bg-transparent ${darkMode ? 'text-white placeholder-slate-400' : 'text-slate-800 placeholder-slate-500'} outline-none text-sm`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Menu Items */}
          <nav className="px-3 py-2 space-y-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)' }}>
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: sidebarOpen ? 4 : 0 }}
                onClick={() => handleNavigation(item.id)}
                title={!sidebarOpen ? item.label : ''}
                className={`w-full flex items-center ${sidebarOpen ? 'gap-3 px-4' : 'justify-center px-2'} py-3 rounded-xl transition-all duration-200 group relative ${
                  activePage === item.id
                    ? darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : darkMode
                    ? 'text-slate-300 hover:bg-slate-700/50'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${activePage === item.id ? 'text-white' : ''}`} />
                <AnimatePresence>
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="font-medium text-sm flex-1 text-left whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {item.badge && sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      activePage === item.id
                        ? 'bg-white/20 text-white'
                        : darkMode
                        ? 'bg-slate-700 text-slate-300'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {item.badge}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </nav>

          {/* User Profile */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 border-t ${darkMode ? 'border-slate-700 bg-slate-800/95' : 'border-slate-200 bg-white/95'} backdrop-blur-xl`}>
            <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg flex-shrink-0">
                JD
              </div>
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex-1"
                  >
                    <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-800'} whitespace-nowrap`}>John Doe</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Admin</p>
                  </motion.div>
                )}
              </AnimatePresence>
              {sidebarOpen && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.aside>
      </AnimatePresence>

      {/* Main Content */}
      <div
        className="transition-all duration-300"
        style={{ marginLeft: sidebarOpen ? '280px' : '80px' }}
      >
        {/* Header */}
        <header className={`sticky top-0 ${darkMode ? 'bg-slate-800/80' : 'bg-white/80'} backdrop-blur-xl border-b ${darkMode ? 'border-slate-700' : 'border-slate-200'} z-40`}>
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded-xl ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-100'} transition-colors`}
              >
                {sidebarOpen ? (
                  <X className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
                )}
              </motion.button>
              <div>
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  {activePage === 'home' ? 'Welcome back, John! 👋' : 
                   activePage === 'data-sources' ? 'Data Sources' :
                   activePage === 'data-sets' ? 'Data Sets' : 
                   activePage === 'reports' ? 'Reports' :
                   activePage === 'questions' ? 'Questions' :
                   activePage === 'dashboards' ? 'Dashboards' :
                   activePage === 'subscriptions' ? 'Email Subscriptions' :
                   menuItems.find(item => item.id === activePage)?.label || 'Dashboard'}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {activePage === 'home' ? "Here's what's happening with your analytics today" :
                   activePage === 'data-sources' ? 'Connect and manage your data sources' :
                   activePage === 'data-sets' ? 'Create and manage your data sets' :
                   activePage === 'reports' ? 'Create and manage your reports' :
                   activePage === 'questions' ? 'Create and manage your analytical questions' :
                   activePage === 'dashboards' ? 'Create and manage your dashboards' :
                   activePage === 'subscriptions' ? 'Manage your email subscriptions for reports and dashboards' :
                   'Manage your analytics platform'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl ${darkMode ? 'bg-slate-700 text-yellow-400' : 'bg-slate-100 text-slate-600'} transition-colors`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'} relative`}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}
              >
                <MessageSquare className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg"
              >
                JD
              </motion.button>
            </div>
          </div>
        </header>

        {/* Content */}
        {renderPage()}
      </div>
    </div>
  );
};

export default Dashboard;