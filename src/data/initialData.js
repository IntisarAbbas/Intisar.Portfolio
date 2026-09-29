export const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Fix Auth Token Refresh Bug', priority: 'High', category: 'Bug' },
    'task-2': { id: 'task-2', title: 'Implement Dark Mode Theme', priority: 'Medium', category: 'Feature' },
    'task-3': { id: 'task-3', title: 'Optimize Landing Page Images', priority: 'Low', category: 'Perf' },
  },
  columns: {
    'col-1': { id: 'col-1', title: 'Backlog 📋', taskIds: ['task-1', 'task-2'] },
    'col-2': { id: 'col-2', title: 'In Progress ⚙️', taskIds: ['task-3'] },
    'col-3': { id: 'col-3', title: 'Completed 🎉', taskIds: [] },
  },
  columnOrder: ['col-1', 'col-2', 'col-3'],
};