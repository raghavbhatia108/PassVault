import React, { useEffect, useState, useCallback } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Eye, EyeOff, Copy, Trash2, Edit2, Github, Moon, Sun, Globe, User, Lock } from "lucide-react";


const LordIconLoader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    document.body.appendChild(script);
  }, []);
  return null;
};



const InteractiveIcon = ({ src, trigger = "hover", colors, size = "24px", onClick }) => (
  <div 
    onClick={onClick} 
    className="cursor-pointer flex items-center justify-center hover:scale-110 transition-transform duration-200"
    style={{ width: size, height: size }}
  >
    <lord-icon
      src={src}
      trigger={trigger}
      colors={colors}
      style={{ width: "100%", height: "100%" }}
    />
  </div>
);

const ActionButton = ({ onClick, children, className, title }) => (
  <button
    onClick={onClick}
    title={title}
    className={`p-2 rounded-full transition-all duration-200 active:scale-95 flex items-center justify-center ${className}`}
  >
    {children}
  </button>
);

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const isDark = theme === "dark";

  const [form, setForm] = useState({
    id: null,
    website: "",
    username: "",
    password: "",
  });
  const [passwords, setPasswords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState({});


  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("passwords")) || [];
    setPasswords(saved);
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = useCallback((text, type) => {
    if (!text) return;
    
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
             showToast(type);
        }).catch(() => fallbackCopy(text, type));
    } else {
        fallbackCopy(text, type);
    }
  }, [isDark]);

  const fallbackCopy = (text, type) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    showToast(type);
  };

  const showToast = (type) => {
    const isMobile = window.innerWidth < 640;
    toast.success(`${type} Copied!`, {
      position: isMobile ? "bottom-center" : "top-center",
      style: {
        background: isDark ? "#374151" : "#2563eb",
        color: "#fff",
        borderRadius: "12px",
      },
      iconTheme: {
        primary: "#fff",
        secondary: isDark ? "#374151" : "#2563eb",
      },
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.website || !form.username || !form.password) {
      toast.error("Please fill in all fields", {
        style: { background: isDark ? "#ef4444" : "#ef4444", color: "white" },
        position: "bottom-center"
      });
      return;
    }

    let newPasswords;
    if (isEditing) {
      newPasswords = passwords.map((p) => (p.id === form.id ? form : p));
      setIsEditing(false);
      toast.success("Entry Updated!", { icon: "🔄" });
    } else {
      const newEntry = { ...form, id: Date.now() };
      newPasswords = [...passwords, newEntry];
      toast.success("Entry Saved!", { icon: "💾" });
    }

    setPasswords(newPasswords);
    localStorage.setItem("passwords", JSON.stringify(newPasswords));
    setForm({ id: null, website: "", username: "", password: "" });
  };

  const handleEdit = (item) => {
    setForm(item);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    const newPasswords = passwords.filter((p) => p.id !== id);
    setPasswords(newPasswords);
    localStorage.setItem("passwords", JSON.stringify(newPasswords));
    toast.success("Deleted successfully");
  };

  // Styling Variables
  const lordIconColors = isDark ? "primary:#60a5fa,secondary:#fca5a5" : "primary:#2563eb,secondary:#ef4444";
  const cardBg = isDark ? "bg-gray-800/60" : "bg-white/80";
  const inputBg = isDark ? "bg-gray-900/50 border-gray-700 text-white focus:border-blue-500" : "bg-white border-gray-300 text-gray-800 focus:border-blue-600";
  const borderColor = isDark ? "border-gray-700" : "border-blue-100";

  return (
    <>
      <LordIconLoader />
      <Toaster />
      
      <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
             <div className={`absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${isDark ? "bg-purple-900" : "bg-blue-200"}`}></div>
             <div className={`absolute top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${isDark ? "bg-blue-900" : "bg-purple-200"}`}></div>
             <div className={`absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 ${isDark ? "bg-indigo-900" : "bg-pink-200"}`}></div>
        </div>

        {/* Navbar */}
        <nav className={`w-full px-6 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-lg border-b ${borderColor} ${isDark ? "bg-gray-900/80" : "bg-white/80"}`}>
          <div className="flex items-center gap-2">
            <div className="relative group">
                <div className={`absolute inset-0 bg-blue-500 blur-lg opacity-50 rounded-full group-hover:opacity-75 transition-opacity`}></div>
                <img src="/logo.png" alt="Logo" className="w-10 h-10 relative rounded-xl shadow-lg" />
            </div>
            <span className="text-2xl font-black tracking-tight hidden sm:block">
              <span className="text-blue-500">&lt;Pass</span>
              <span className="text-rose-500">Vault/&gt;</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
                href="https://github.com/raghavbhatia108/PassVault"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? "hover:bg-gray-800 text-gray-300" : "hover:bg-blue-50 text-gray-600"}`}
            >
                <Github size={24} />
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-transform hover:rotate-12 ${isDark ? "bg-gray-800 text-yellow-400" : "bg-blue-100 text-blue-600"}`}
            >
              {isDark ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
          
          {/* Header Text */}
          <div className="text-center mb-10 space-y-2">
            <h1 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
              Secure your digital life.
            </h1>
            <p className={`text-sm md:text-base ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Store your passwords locally with military-grade... localStorage.
            </p>
          </div>

          {/* Input Form Card */}
          <div className={`p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md border ${borderColor} ${cardBg} mb-12 transition-all duration-300`}>
            <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-bold flex items-center gap-2 ${isDark ? "text-gray-100" : "text-gray-800"}`}>
                    <lord-icon
                        src="https://cdn.lordicon.com/pithnlch.json"
                        trigger="hover"
                        colors={lordIconColors}
                        style={{width: '32px', height: '32px'}}
                    />
                    {isEditing ? "Edit Credentials" : "Add New Credentials"}
                </h2>
            </div>

            <div className="space-y-5">
                {/* Website Input */}
                <div className="relative group">
                    <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${isDark ? "text-gray-400" : "text-blue-500"}`}>
                        <Globe size={20} />
                    </div>
                    <input
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        placeholder="Website URL (e.g. netflix.com)"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none border transition-all focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 ${inputBg}`}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Username Input */}
                    <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${isDark ? "text-gray-400" : "text-blue-500"}`}>
                            <User size={20} />
                        </div>
                        <input
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Username / Email"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none border transition-all focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 ${inputBg}`}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${isDark ? "text-gray-400" : "text-blue-500"}`}>
                            <Lock size={20} />
                        </div>
                        <input
                            name="password"
                            type={showPasswordInput ? "text" : "password"}
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className={`w-full pl-10 pr-12 py-3 rounded-xl outline-none border transition-all focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 ${inputBg}`}
                        />
                        <div 
                            className={`absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer ${isDark ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-blue-600"}`}
                            onClick={() => setShowPasswordInput(!showPasswordInput)}
                        >
                            {showPasswordInput ? <EyeOff size={20} /> : <Eye size={20} />}
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    className={`w-full py-3 rounded-xl font-bold text-white shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2
                    ${isDark 
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600" 
                        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500"
                    }`}
                >
                    <span>{isEditing ? "Update Password" : "Save Password"}</span>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{width: '24px', height: '24px'}}
                    />
                </button>
            </div>
          </div>

          {/* Data Display Section */}
          <div className="mt-8">
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                <span className="text-blue-500">Saved Passwords</span>
                <span className={`text-sm font-normal px-2 py-1 rounded-md ${isDark ? "bg-gray-800 text-gray-400" : "bg-blue-100 text-blue-600"}`}>
                    {passwords.length}
                </span>
            </h2>

            {passwords.length === 0 ? (
                 <div className={`flex flex-col items-center justify-center py-12 rounded-2xl border border-dashed ${borderColor} ${isDark ? "bg-gray-800/30 text-gray-400" : "bg-blue-50/50 text-gray-500"}`}>
                    <lord-icon
                        src="https://cdn.lordicon.com/ulnswmkk.json"
                        trigger="loop"
                        delay="2000"
                        colors={lordIconColors}
                        style={{width: '60px', height: '60px'}}
                    />
                    <p className="mt-4 font-medium">No passwords saved yet.</p>
                 </div>
            ) : (
                <>
                    {/* --- DESKTOP VIEW (Table) --- */}
                    <div className="hidden md:block overflow-hidden rounded-2xl border shadow-lg backdrop-blur-sm transition-colors duration-300" style={{ borderColor: isDark ? '#374151' : '#bfdbfe' }}>
                        <table className={`w-full text-left border-collapse ${isDark ? "bg-gray-800/50" : "bg-white"}`}>
                            <thead className={`${isDark ? "bg-gray-900/80 text-gray-300" : "bg-blue-50 text-blue-700"} uppercase text-xs font-semibold tracking-wider`}>
                                <tr>
                                    <th className="p-4">Website</th>
                                    <th className="p-4">Username</th>
                                    <th className="p-4">Password</th>
                                    <th className="p-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className={`divide-y ${isDark ? "divide-gray-700 text-gray-300" : "divide-blue-100 text-gray-700"}`}>
                                {passwords.map((item) => (
                                    <tr key={item.id} className={`group transition-colors ${isDark ? "hover:bg-gray-700/50" : "hover:bg-blue-50/50"}`}>
                                        <td className="p-4">
                                            <div className="flex items-center justify-between gap-2 max-w-[200px]">
                                                <span className="truncate font-medium">{item.website}</span>
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <InteractiveIcon 
                                                        src="https://cdn.lordicon.com/jectmwqf.json" 
                                                        colors={lordIconColors} 
                                                        size="20px"
                                                        onClick={() => handleCopy(item.website, "Website")} 
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-between gap-2 max-w-[200px]">
                                                <span className="truncate">{item.username}</span>
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <InteractiveIcon 
                                                        src="https://cdn.lordicon.com/jectmwqf.json" 
                                                        colors={lordIconColors} 
                                                        size="20px"
                                                        onClick={() => handleCopy(item.username, "Username")} 
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <span className="font-mono text-lg tracking-widest">
                                                    {visiblePasswords[item.id] ? item.password : "••••••••"}
                                                </span>
                                                <button onClick={() => togglePasswordVisibility(item.id)} className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-blue-600"}`}>
                                                    {visiblePasswords[item.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                                                </button>
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <InteractiveIcon 
                                                        src="https://cdn.lordicon.com/jectmwqf.json" 
                                                        colors={lordIconColors} 
                                                        size="20px"
                                                        onClick={() => handleCopy(item.password, "Password")} 
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <ActionButton onClick={() => handleEdit(item)} className={isDark ? "hover:bg-blue-900/30 text-blue-400" : "hover:bg-blue-100 text-blue-600"}>
                                                    <Edit2 size={18} />
                                                </ActionButton>
                                                <ActionButton onClick={() => handleDelete(item.id)} className={isDark ? "hover:bg-red-900/30 text-red-400" : "hover:bg-red-100 text-red-600"}>
                                                    <Trash2 size={18} />
                                                </ActionButton>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* --- MOBILE VIEW (Cards) --- */}
                    <div className="grid md:hidden gap-4">
                        {passwords.map((item) => (
                            <div key={item.id} className={`relative p-5 rounded-2xl border shadow-md backdrop-blur-md ${isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/90 border-blue-100"}`}>
                                
                                {/* Header: Website & Actions */}
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <div className={`p-2 rounded-full ${isDark ? "bg-gray-700 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                                            <Globe size={16} />
                                        </div>
                                        <span className={`font-bold text-lg truncate ${isDark ? "text-gray-100" : "text-gray-800"}`}>
                                            {item.website}
                                        </span>
                                    </div>
                                    <div className="flex gap-1">
                                        <ActionButton onClick={() => handleEdit(item)} className={isDark ? "text-blue-400" : "text-blue-600"}>
                                            <Edit2 size={18} />
                                        </ActionButton>
                                        <ActionButton onClick={() => handleDelete(item.id)} className={isDark ? "text-red-400" : "text-red-500"}>
                                            <Trash2 size={18} />
                                        </ActionButton>
                                    </div>
                                </div>

                                {/* Username Row */}
                                <div className={`flex items-center justify-between p-3 rounded-xl mb-2 ${isDark ? "bg-gray-900/50" : "bg-gray-50"}`}>
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <User size={14} className={isDark ? "text-gray-500" : "text-gray-400"} />
                                        <span className={`text-sm truncate ${isDark ? "text-gray-300" : "text-gray-700"}`}>{item.username}</span>
                                    </div>
                                    <button onClick={() => handleCopy(item.username, "Username")} className={isDark ? "text-gray-500" : "text-gray-400"}>
                                        <Copy size={14} />
                                    </button>
                                </div>

                                {/* Password Row */}
                                <div className={`flex items-center justify-between p-3 rounded-xl ${isDark ? "bg-gray-900/50" : "bg-gray-50"}`}>
                                    <div className="flex items-center gap-2">
                                        <Lock size={14} className={isDark ? "text-gray-500" : "text-gray-400"} />
                                        <span className={`font-mono text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            {visiblePasswords[item.id] ? item.password : "••••••••"}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => togglePasswordVisibility(item.id)} className={isDark ? "text-gray-400" : "text-gray-500"}>
                                            {visiblePasswords[item.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                        <button onClick={() => handleCopy(item.password, "Password")} className={isDark ? "text-gray-400" : "text-gray-500"}>
                                            <Copy size={14} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </>
            )}
          </div>

        </main>

        {/* Footer */}
        <footer className={`py-6 text-center border-t ${isDark ? "bg-gray-900 border-gray-800 text-gray-500" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
           <div className="flex items-center justify-center gap-2 text-sm">
             <span>Securely built by</span> 
             <span className={`font-bold ${isDark ? "text-gray-300" : "text-gray-800"}`}>Raghav Bhatia</span>
             <lord-icon
                src="https://cdn.lordicon.com/pithnlch.json"
                trigger="hover"
                colors={lordIconColors}
                style={{width: '20px', height: '20px'}}
            />
           </div>
        </footer>

      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default App;