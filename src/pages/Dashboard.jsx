// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// import {
//   getTasks,
//   createTask,
//   deleteTask,
// } from "../services/taskService";

// export default function Dashboard() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const [tasks, setTasks] = useState([]);

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("Medium");
//   const [status, setStatus] = useState("Pending");
//   const [dueDate, setDueDate] = useState("");

//   async function loadTasks() {
//     if (!user) return;

//     const data = await getTasks(user.uid);
//     setTasks(data);
//   }

//   useEffect(() => {
//     if (user) {
//       loadTasks();
//     }
//   }, [user]);

//   async function addTask(e) {
//     e.preventDefault();

//     if (!title.trim()) return;

//     await createTask({
//       title,
//       description,
//       priority,
//       status,
//       dueDate,
//       createdBy: user.uid,
//       createdAt: new Date(),
//     });

//     setTitle("");
//     setDescription("");
//     setPriority("Medium");
//     setStatus("Pending");
//     setDueDate("");

//     loadTasks();
//   }

//   async function removeTask(id) {
//     await deleteTask(id);
//     loadTasks();
//   }

//   async function handleLogout() {
//     await logout();
//     navigate("/login");
//   }

//   const totalTasks = tasks.length;
//   const pendingTasks = tasks.filter(
//     (task) => task.status === "Pending"
//   ).length;
//   const completedTasks = tasks.filter(
//     (task) => task.status === "Completed"
//   ).length;

//   return (
//     <div className="min-h-screen bg-slate-100">

//       {/* Header */}
//       <div className="bg-blue-600 text-white p-5 flex justify-between items-center">

//         <div>
//           <h1 className="text-3xl font-bold">
//             Task Management System
//           </h1>

//           <p className="mt-2">
//             Welcome back, <strong>{user?.displayName}</strong> 👋
//           </p>
//         </div>

//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded"
//         >
//           Logout
//         </button>

//       </div>

//       <div className="max-w-6xl mx-auto p-8">

//         {/* Statistics */}

//         <div className="grid md:grid-cols-3 gap-5 mb-8">

//           <div className="bg-white rounded-xl shadow p-5">
//             <h3 className="text-gray-500">Total Tasks</h3>
//             <h1 className="text-4xl font-bold">
//               {totalTasks}
//             </h1>
//           </div>

//           <div className="bg-white rounded-xl shadow p-5">
//             <h3 className="text-gray-500">Pending</h3>
//             <h1 className="text-4xl font-bold text-orange-500">
//               {pendingTasks}
//             </h1>
//           </div>

//           <div className="bg-white rounded-xl shadow p-5">
//             <h3 className="text-gray-500">Completed</h3>
//             <h1 className="text-4xl font-bold text-green-600">
//               {completedTasks}
//             </h1>
//           </div>

//         </div>

//         {/* Add Task */}

//         <form
//           onSubmit={addTask}
//           className="bg-white rounded-xl shadow p-6 mb-8 space-y-4"
//         >

//           <input
//             className="border rounded p-3 w-full"
//             placeholder="Task Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />

//           <textarea
//             className="border rounded p-3 w-full"
//             placeholder="Description"
//             rows="3"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <div className="grid md:grid-cols-3 gap-4">

//             <select
//               className="border rounded p-3"
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//             >
//               <option>High</option>
//               <option>Medium</option>
//               <option>Low</option>
//             </select>

//             <select
//               className="border rounded p-3"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//             >
//               <option>Pending</option>
//               <option>In Progress</option>
//               <option>Completed</option>
//             </select>

//             <input
//               type="date"
//               className="border rounded p-3"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//             />

//           </div>

//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
//             Add Task
//           </button>

//         </form>

//         {/* Tasks */}

//         <div className="space-y-4">

//           {tasks.length === 0 ? (
//             <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
//               No tasks yet.
//             </div>
//           ) : (
//             tasks.map((task) => (
//               <div
//                 key={task.id}
//                 className="bg-white rounded-xl shadow p-5 flex justify-between items-start"
//               >
//                 <div>

//                   <h2 className="text-xl font-bold">
//                     {task.title}
//                   </h2>

//                   <p className="text-gray-600 mt-2">
//                     {task.description}
//                   </p>

//                   <div className="flex flex-wrap gap-3 mt-4">

//                     <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
//                       {task.priority}
//                     </span>

//                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
//                       {task.status}
//                     </span>

//                     <span className="bg-gray-100 px-3 py-1 rounded-full">
//                       📅 {task.dueDate || "No Date"}
//                     </span>

//                   </div>

//                 </div>

//                 <button
//                   onClick={() => removeTask(task.id)}
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//                 >
//                   Delete
//                 </button>

//               </div>
//             ))
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  async function loadTasks() {
    if (!user) return;

    const data = await getTasks(user.uid);
    setTasks(data);
  }

  useEffect(() => {
    if (user) {
      loadTasks();
    }
  }, [user]);

  async function addTask(e) {
    e.preventDefault();

    if (!title.trim()) return;

    const taskData = {
      title,
      description,
      priority,
      status,
      dueDate,
      createdBy: user.uid,
    };

    if (editingId) {
      await updateTask(editingId, taskData);
      setEditingId(null);
    } else {
      await createTask({
        ...taskData,
        createdAt: new Date(),
      });
    }

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setStatus("Pending");
    setDueDate("");

    loadTasks();
  }

  async function removeTask(id) {
    await deleteTask(id);
    loadTasks();
  }

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        (task.description || "")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        filterStatus === "All" || task.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, search, filterStatus]);

  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (t) => t.status === "Pending"
  ).length;

  const completedTasks = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="bg-blue-600 text-white p-5 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Task Management System
          </h1>

          <p className="mt-2">
            Welcome back, <strong>{user?.displayName}</strong> 👋
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <div className="max-w-6xl mx-auto p-8">

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-gray-500">Total Tasks</h3>
            <h1 className="text-4xl font-bold">{totalTasks}</h1>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-gray-500">Pending</h3>
            <h1 className="text-4xl font-bold text-orange-500">
              {pendingTasks}
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-gray-500">Completed</h3>
            <h1 className="text-4xl font-bold text-green-600">
              {completedTasks}
            </h1>
          </div>

        </div>

                {/* Search & Filter */}

        <div className="bg-white rounded-xl shadow p-6 mb-8">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="🔍 Search tasks..."
              className="border rounded-lg p-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="border rounded-lg p-3"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Tasks</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

          </div>

        </div>

        {/* Add / Edit Task */}

        <form
          onSubmit={addTask}
          className="bg-white rounded-xl shadow p-6 mb-8 space-y-4"
        >

          <input
            className="border rounded-lg p-3 w-full"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="border rounded-lg p-3 w-full"
            rows="3"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="grid md:grid-cols-3 gap-4">

            <select
              className="border rounded-lg p-3"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <select
              className="border rounded-lg p-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <input
              type="date"
              className="border rounded-lg p-3"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            {editingId ? "Update Task" : "Add Task"}
          </button>

        </form>

        {/* Task List */}

        <div className="space-y-5">

          {filteredTasks.length === 0 ? (

            <div className="bg-white rounded-xl shadow p-8 text-center">

              <h2 className="text-xl font-semibold text-gray-600">
                No Tasks Found
              </h2>

              <p className="text-gray-400 mt-2">
                Create a task to get started.
              </p>

            </div>

          ) : (

            filteredTasks.map((task) => (

              <div
                key={task.id}
                className="bg-white rounded-xl shadow p-6 flex justify-between items-start"
              >

                <div className="space-y-3">

                  <h2 className="text-2xl font-bold">
                    {task.title}
                  </h2>

                  <p className="text-gray-600">
                    {task.description}
                  </p>

                  <div className="flex flex-wrap gap-3">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {task.priority}
                    </span>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {task.status}
                    </span>

                    <span className="bg-gray-200 px-3 py-1 rounded-full">
                      📅 {task.dueDate || "No Due Date"}
                    </span>

                  </div>

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => {
                      setEditingId(task.id);
                      setTitle(task.title);
                      setDescription(task.description || "");
                      setPriority(task.priority || "Medium");
                      setStatus(task.status || "Pending");
                      setDueDate(task.dueDate || "");
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => removeTask(task.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

                       ))
          )}

        </div>

      </div>

    </div>
  );
}