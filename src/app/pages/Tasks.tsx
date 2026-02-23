import { useState } from 'react';
import { Calendar, User, AlertCircle, CheckCircle2 } from 'lucide-react';
import { mockTasks, TaskPriority } from '../data/mockData';

export function Tasks() {
  const [tasks, setTasks] = useState(mockTasks);
  const [filterPriority, setFilterPriority] = useState<TaskPriority | 'All'>('All');
  const [showCompleted, setShowCompleted] = useState(false);

  const filteredTasks = tasks.filter((task) => {
    const matchesPriority = filterPriority === 'All' || task.priority === filterPriority;
    const matchesCompletion = showCompleted || !task.completed;
    return matchesPriority && matchesCompletion;
  });

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date() && new Date(dueDate).toDateString() !== new Date().toDateString();
  };

  const isDueToday = (dueDate: string) => {
    return new Date(dueDate).toDateString() === new Date().toDateString();
  };

  const pendingTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);
  const overdueTasks = pendingTasks.filter((t) => isOverdue(t.dueDate));
  const dueTodayTasks = pendingTasks.filter((t) => isDueToday(t.dueDate));

  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tasks</h1>
        <p className="text-gray-600">
          Track follow-ups and action items to prevent missed interactions
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-semibold text-gray-900">
            {pendingTasks.length}
          </div>
          <div className="text-sm text-gray-600">Pending Tasks</div>
        </div>
        <div className="bg-white rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="text-2xl font-semibold text-red-700">
            {overdueTasks.length}
          </div>
          <div className="text-sm text-red-600">Overdue</div>
        </div>
        <div className="bg-white rounded-lg border border-orange-200 bg-orange-50 p-4">
          <div className="text-2xl font-semibold text-orange-700">
            {dueTodayTasks.length}
          </div>
          <div className="text-sm text-orange-600">Due Today</div>
        </div>
        <div className="bg-white rounded-lg border border-green-200 bg-green-50 p-4">
          <div className="text-2xl font-semibold text-green-700">
            {completedTasks.length}
          </div>
          <div className="text-sm text-green-600">Completed</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Priority:
            </label>
            <select
              value={filterPriority}
              onChange={(e) =>
                setFilterPriority(e.target.value as TaskPriority | 'All')
              }
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent"
            >
              <option value="All">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showCompleted"
              checked={showCompleted}
              onChange={(e) => setShowCompleted(e.target.checked)}
              className="w-4 h-4 text-[#3F51B5] border-gray-300 rounded focus:ring-[#3F51B5]"
            />
            <label
              htmlFor="showCompleted"
              className="text-sm font-medium text-gray-700"
            >
              Show Completed Tasks
            </label>
          </div>

          <div className="flex-1" />

          <button className="px-4 py-2 bg-[#3F51B5] text-white rounded-lg hover:bg-[#3F51B5]/90 transition-colors font-medium">
            + Add Task
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-500">No tasks found matching your criteria</p>
          </div>
        ) : (
          filteredTasks.map((task) => {
            const overdue = isOverdue(task.dueDate);
            const dueToday = isDueToday(task.dueDate);

            return (
              <div
                key={task.id}
                className={`bg-white rounded-lg border-l-4 p-5 transition-all ${
                  task.completed
                    ? 'border-gray-300 opacity-60'
                    : overdue
                    ? 'border-red-500 shadow-sm'
                    : dueToday
                    ? 'border-orange-500 shadow-sm'
                    : 'border-[#3F51B5]'
                } ${!task.completed && 'hover:shadow-md'}`}
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className="mt-1 shrink-0"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="text-green-600" size={24} />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-[#3F51B5] transition-colors" />
                    )}
                  </button>

                  {/* Task Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3
                          className={`font-semibold text-gray-900 mb-1 ${
                            task.completed ? 'line-through' : ''
                          }`}
                        >
                          {task.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {task.description}
                        </p>
                      </div>

                      {/* Priority Badge */}
                      <span
                        className={`ml-4 px-3 py-1 rounded text-xs font-medium border ${getPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </div>

                    {/* Task Meta */}
                    <div className="flex flex-wrap items-center gap-4 mt-3">
                      {/* Due Date */}
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="text-gray-400" />
                        <span
                          className={`${
                            overdue
                              ? 'text-red-600 font-medium'
                              : dueToday
                              ? 'text-orange-600 font-medium'
                              : 'text-gray-600'
                          }`}
                        >
                          {overdue && '⚠️ '}
                          {new Date(task.dueDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                          {dueToday && ' (Today)'}
                        </span>
                      </div>

                      {/* Assigned To */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={16} className="text-gray-400" />
                        <span>{task.assignedTo}</span>
                      </div>

                      {/* Related To */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <AlertCircle size={16} className="text-gray-400" />
                        <span>
                          {task.relatedType === 'lead' ? '📊' : '👤'}{' '}
                          {task.relatedTo}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
