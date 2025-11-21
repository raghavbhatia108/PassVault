// import React, { useEffect, useState } from "react";
// import { toast } from 'react-hot-toast';

// const Manager = () => {
//   const [form, setForm] = useState({
//     website: "",
//     username: "",
//     password: "",
//   });

//   const [passwords, setPasswords] = useState([]);

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         // ✅ Check device width
//         const isMobile = window.innerWidth < 640; // sm breakpoint (Tailwind)
        
//         toast.success("Copied to clipboard!", {
//           position: isMobile ? "bottom-center" : "top-center",
//           duration: 2000,
//           style: {
//             background: "#0025dfff",
//             color: "#fff",
//           },
//         });
//       })
//       .catch(() => {
//         toast.error("Failed to copy!", {
//           position: "bottom-center",
//         });
//   });
// }

//   // Load saved passwords from localStorage on first render
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("passwords")) || [];
//     setPasswords(saved);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     if (!form.website || !form.username || !form.password) return;

//     const newPasswords = [...passwords, form];
//     setPasswords(newPasswords);
//     localStorage.setItem("passwords", JSON.stringify(newPasswords));

//     setForm({ website: "", username: "", password: "" });
//   };

//   return (
//     <div className="relative min-h-screen">
//       {/* Background */}
//       <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] -z-10"></div>

//       {/* Main container */}
//       <div className="p-6 sm:p-10 md:p-16 lg:p-14">
//         {/* Logo */}
//         <div className="mt-4 flex justify-center items-center gap-2 flex-wrap text-center">
//           <img src="/logo.png" alt="Logo" className="w-10 sm:w-12" />
//           <p className="text-[1.5rem] sm:text-[2rem] font-semibold">
//             <span className="text-blue-600">&lt;Pass</span>
//             <span className="text-red-500">Vault/&gt;</span>
//           </p>
//         </div>

//         {/* Heading */}
//         <div className="flex justify-center items-center mt-3 text-center">
//           <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
//             Your own Password Manager
//           </h1>
//         </div>

//         {/* Input Fields */}
//         <div className="inputs w-[90%] sm:w-3/4 md:w-1/2 mx-auto mt-8 space-y-4 flex flex-col justify-center">
//           <input
//             name="website"
//             type="text"
//             value={form.website}
//             onChange={handleChange}
//             placeholder="Enter Website URL"
//             className="border border-blue-400 rounded-3xl p-3 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
//           />

//           <div className="flex flex-col sm:flex-row gap-3">
//             <input
//               name="username"
//               type="text"
//               placeholder="Enter Username"
//               value={form.username}
//               onChange={handleChange}
//               className="border border-blue-400 rounded-3xl p-3 w-full sm:w-1/2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
//             />

//             <div className="relative w-full sm:w-1/2">
//               <input
//                 name="password"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="border border-blue-400 rounded-3xl p-3 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
//               />
//               <div className="absolute inset-y-0 right-3 flex items-center">
//                 <lord-icon
//                   src="https://cdn.lordicon.com/dicvhxpz.json"
//                   trigger="click"
//                   stroke="bold"
//                   colors="primary:#1b1091,secondary:#1b1091"
//                   style={{ width: "24px", height: "24px" }}
//                   className="cursor-pointer"
//                 ></lord-icon>
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={handleSave}
//             className="bg-blue-600 mx-auto w-1/2 sm:w-1/3 md:w-1/6 h-12 border border-blue-400 rounded-3xl flex justify-center items-center cursor-pointer text-lg sm:text-xl font-semibold text-white gap-2 hover:bg-blue-700 transition-all"
//           >
//             Save
//             <lord-icon
//               src="https://cdn.lordicon.com/vjgknpfx.json"
//               trigger="hover"
//               colors="primary:#ffffff,secondary:#ffffff"
//               stroke="bold"
//               style={{ width: "30px", height: "30px" }}
//             ></lord-icon>
//           </button>
//         </div>

//         {/* Table Section */}
//         <div className="mt-10 w-full">
//           <h2 className="text-black font-bold text-center text-2xl sm:text-3xl">
//             Your Passwords
//           </h2>

//           {passwords.length > 0 ? (
//             <table className="bg-blue-600 m-auto mt-4 border border-blue-800 w-[95%] sm:w-[90%] text-sm sm:text-base">
//               <thead>
//                 <tr>
//                   <th className="px-3 sm:px-4 py-2 border text-center">
//                     Website
//                   </th>
//                   <th className="px-3 sm:px-4 py-2 border text-center">
//                     Username
//                   </th>
//                   <th className="px-3 sm:px-4 py-2 border text-center">
//                     Password
//                   </th>
//                   <th className="px-3 sm:px-4 py-2 border text-center">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="bg-white text-blue-600">
//                 {passwords.map((item, index) => (
//                   <tr key={index}>
//                  <td className="px-3 py-2 border text-center align-middle max-w-[200px]">
//   <div className="flex items-center justify-center gap-2 break-words text-center w-full overflow-hidden">
//     <span className="whitespace-normal break-words w-full break-all truncate">
//       {item.website}
//     </span>
//     <lord-icon
//       src="https://cdn.lordicon.com/jectmwqf.json"
//       trigger="click"
//       stroke="bold"
//       colors="primary:#2516c7,secondary:#c71f16"
//       style={{ width: "22px" }}
//       onClick={() => handleCopy(item.website)}
//     ></lord-icon>
//   </div>
// </td>



//                     <td className="px-3 py-2 border text-center break-all">
//                       <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
//                         <span>{item.username}</span>
//                         <lord-icon
//                           src="https://cdn.lordicon.com/jectmwqf.json"
//                           trigger="click"
//                           stroke="bold"
//                           colors="primary:#2516c7,secondary:#c71f16"
//                           style={{ width: "22px" }}
//                         ></lord-icon>
//                       </div>
//                     </td>

//                     <td className="px-3 py-2 border text-center break-all">
//                       <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
//                         <span>{item.password}</span>
//                         <lord-icon
//                           src="https://cdn.lordicon.com/jectmwqf.json"
//                           trigger="click"
//                           stroke="bold"
//                           colors="primary:#2516c7,secondary:#c71f16"
//                           style={{ width: "22px" }}
//                         ></lord-icon>
//                       </div>
//                     </td>

//                     <td className="px-3 py-2 border text-center">
//                       <div className="flex justify-center gap-3">
//                         <button>
//                           <lord-icon
//                             src="https://cdn.lordicon.com/fikcyfpp.json"
//                             trigger="hover"
//                             stroke="bold"
//                             colors="primary:#2516c7,secondary:#c71f16"
//                             style={{ width: "25px" }}
//                           ></lord-icon>
//                         </button>
//                         <button>
//                           <lord-icon
//                             src="https://cdn.lordicon.com/jzinekkv.json"
//                             trigger="hover"
//                             stroke="bold"
//                             colors="primary:#2516c7,secondary:#c71f16"
//                             style={{ width: "25px" }}
//                           ></lord-icon>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-center mt-4 text-gray-700">
//               No passwords saved yet.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Manager;


import React, { useEffect, useState, useCallback } from "react";
import { toast, Toaster } from 'react-hot-toast';

// Load the Lordicon script once
const LordIcon = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    document.body.appendChild(script);
  }, []);
  return null;
};

// --- Custom Components for Icons based on Theme ---

const PasswordIcon = ({ isDark }) => (
    <lord-icon
        src="https://cdn.lordicon.com/dicvhxpz.json"
        trigger="click"
        stroke="bold"
        colors={isDark ? "primary:#a8a29e,secondary:#a8a29e" : "primary:#1b1091,secondary:#1b1091"}
        style={{ width: "24px", height: "24px" }}
        className="cursor-pointer"
    />
);

const SaveIcon = ({ isDark }) => (
    <lord-icon
        src="https://cdn.lordicon.com/vjgknpfx.json"
        trigger="hover"
        colors={isDark ? "primary:#f8f9fa,secondary:#f8f9fa" : "primary:#ffffff,secondary:#ffffff"}
        stroke="bold"
        style={{ width: "30px", height: "30px" }}
    />
);

const ActionIcon = ({ src, colors, onClick }) => (
    <button onClick={onClick} className="p-1 rounded-full hover:bg-opacity-20 transition-colors duration-200">
        <lord-icon
            src={src}
            trigger="hover"
            stroke="bold"
            colors={colors}
            style={{ width: "25px", height: "25px" }}
        />
    </button>
);

const GithubIcon = ({ isDark }) => (
    <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`flex items-center gap-1 p-2 rounded-xl transition-colors duration-500 ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'}`}
        aria-label="View PassVault on GitHub"
    >
        <img src="/github.png" alt="GitHub" className="w-10 sm:w-14" />
        <span className="text-sm font-medium hidden sm:inline">GitHub</span>
    </a>
);

const App = () => {
    
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const isDark = theme === 'dark';

    const [form, setForm] = useState({ id: null, website: "", username: "", password: "" });
    const [passwords, setPasswords] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    // State to track which passwords should be visible in the table
    const [visiblePasswords, setVisiblePasswords] = useState({});

    // Apply or remove 'dark' class on the HTML element
    useEffect(() => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Load saved passwords from localStorage on first render
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("passwords")) || [];
        setPasswords(saved);
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    // Toggle visibility for a specific password row
    const togglePasswordVisibility = (id) => {
        setVisiblePasswords(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleCopy = useCallback((text, type) => {
        // Fallback for document.execCommand in case navigator.clipboard is restricted
        const copyToClipboard = (str) => {
            const el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            const selected =
                document.getSelection().rangeCount > 0
                    ? document.getSelection().getRangeAt(0)
                    : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected) {
                document.getSelection().removeAllRanges();
                document.getSelection().addRange(selected);
            }
        };
        
        copyToClipboard(text);

        const isMobile = window.innerWidth < 640; 
        toast.success(`${type} Copied!`, {
            position: isMobile ? "bottom-center" : "top-center",
            duration: 2000,
            style: {
                background: isDark ? "#4b5563" : "#0025dfff",
                color: "#fff",
            },
        });
    }, [isDark]);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (!form.website || !form.username || !form.password) {
            toast.error("All fields are required.", {
                style: { background: isDark ? '#ef4444' : '#f87171', color: 'white' }
            });
            return;
        }

        let newPasswords;

        if (isEditing) {
            // Edit existing password
            newPasswords = passwords.map(p => p.id === form.id ? form : p);
            setIsEditing(false);
            toast.success("Password Updated!", {
                style: { background: isDark ? '#10b981' : '#059669', color: 'white' }
            });
        } else {
            // Add new password
            const newEntry = { ...form, id: Date.now() };
            newPasswords = [...passwords, newEntry];
            toast.success("Password Saved!", {
                style: { background: isDark ? '#3b82f6' : '#2563eb', color: 'white' }
            });
        }

        setPasswords(newPasswords);
        localStorage.setItem("passwords", JSON.stringify(newPasswords));

        // Reset form (except for clearing the ID which needs to be explicitly set to null)
        setForm({ id: null, website: "", username: "", password: "" });
    };

    const handleEdit = (passwordItem) => {
        setForm(passwordItem);
        setIsEditing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for editing
    };

    const handleDelete = (id) => {
        const newPasswords = passwords.filter(p => p.id !== id);
        setPasswords(newPasswords);
        localStorage.setItem("passwords", JSON.stringify(newPasswords));
        toast.success("Password Deleted!", {
            style: { background: isDark ? '#ef4444' : '#dc2626', color: 'white' }
        });
    };

    // Style constants based on theme
    const bgPrimary = isDark ? "bg-gray-900" : "bg-white";
    const textPrimary = isDark ? "text-gray-100" : "text-gray-800";
    const textSecondary = isDark ? "text-gray-400" : "text-gray-500";
    const bgContainer = isDark ? "bg-gray-800/80 backdrop-blur-sm" : "bg-white shadow-xl";
    const inputBorder = isDark ? "border-gray-700 bg-gray-700/50 text-gray-200 placeholder-gray-400" : "border-blue-400 text-gray-700 placeholder-gray-400";
    const tableHeaderBg = isDark ? "bg-gray-700 text-white" : "bg-blue-600 text-white";
    const tableRowBg = isDark ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-gray-50 text-blue-600 hover:bg-gray-100";
    
    // Modified table border style for clearer cell and row separation
    const tableBorder = isDark ? "border-gray-600" : "border-blue-800";
    const tableRowDivider = isDark ? "border-gray-700" : "border-gray-300"; 

    const lordIconColors = isDark ? "primary:#3b82f6,secondary:#fca5a5" : "primary:#2516c7,secondary:#c71f16";
    const editIconColors = isDark ? "primary:#fde047" : "primary:#2516c7"; 
    const deleteIconColors = isDark ? "primary:#f87171" : "primary:#dc2626"; 

    return (
        <>
            <LordIcon />
            <Toaster />
            <div className={`flex flex-col min-h-screen ${bgPrimary} transition-colors duration-500`}>
                {/* Background Pattern/Gradient */}
                <div className="absolute inset-0 -z-10" style={{
                    background: isDark 
                        ? 'radial-gradient(125% 125% at 50% 10%, #111827 40%, #1f2937 100%)' 
                        : 'radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)'
                }}></div>

                {/* Main content container (flexible height) */}
                <div className="flex-grow p-4 sm:p-8 md:p-12 max-w-7xl mx-auto w-full">
                    
                    {/* Header: Logo, Title, GitHub, and Theme Toggle */}
                    <div className="flex justify-between items-center mb-6">
                        {/* Logo and Title */}
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Logo" className="w-10 sm:w-12 rounded-lg" />
                            <p className={`text-[1.5rem] sm:text-[2rem] font-extrabold ${textPrimary} transition-colors duration-500`}>
                                <span className="text-blue-500">&lt;Pass</span>
                                <span className="text-red-400">Vault/&gt;</span>
                            </p>
                        </div>
                        
                        {/* Action Icons: GitHub and Theme Toggle */}
                        <div className="flex items-center gap-3">
                            <GithubIcon isDark={isDark} />
                            {/* Theme Toggle Button */}
                            <button 
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-colors duration-500 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-yellow-600'}`}
                                aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
                            >
                                {isDark ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg> // Moon Icon
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> // Sun Icon
                                )}
                            </button>
                        </div>
                    </div>


                    {/* Heading */}
                    <div className="flex justify-center items-center mt-3 text-center">
                        <h1 className={`text-xl sm:text-2xl font-semibold ${textPrimary} transition-colors duration-500`}>
                            Your own Password Manager
                        </h1>
                    </div>

                    {/* Input Fields Card */}
                    <div className={`inputs w-full md:w-3/4 lg:w-1/2 mx-auto mt-8 p-6 rounded-xl ${bgContainer} space-y-4 flex flex-col transition-colors duration-500`}>
                        <h2 className={`text-xl font-bold ${textPrimary}`}>{isEditing ? 'Edit Password' : 'Add New Password'}</h2>
                        
                        <input
                            name="website"
                            type="text"
                            value={form.website}
                            onChange={handleChange}
                            placeholder="Enter Website URL"
                            className={`border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${inputBorder}`}
                        />

                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                name="username"
                                type="text"
                                placeholder="Enter Username"
                                value={form.username}
                                onChange={handleChange}
                                className={`border rounded-xl p-3 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${inputBorder}`}
                            />

                            <div className="relative w-full sm:w-1/2">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className={`border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${inputBorder} pr-12`}
                                />
                                <div className="absolute inset-y-0 right-3 flex items-center">
                                    <PasswordIcon isDark={isDark} />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleSave}
                            // Ensuring Update button is the same primary blue as Save button
                            className={`mx-auto w-1/2 sm:w-1/3 md:w-1/4 h-12 border rounded-xl flex justify-center items-center cursor-pointer text-lg sm:text-xl font-semibold text-white gap-2 transition-all duration-300 bg-blue-600 hover:bg-blue-700 border-blue-400`}
                        >
                            {isEditing ? 'Update' : 'Save'}
                            <SaveIcon isDark={isDark} />
                        </button>
                    </div>

                    {/* Table Section */}
                    <div className="mt-12 w-full">
                        <h2 className={`font-bold text-center text-2xl sm:text-3xl ${textPrimary}`}>
                            Your Saved Passwords ({passwords.length})
                        </h2>

                        {passwords.length > 0 ? (
                            <div className="overflow-x-auto mt-6 rounded-xl border-t-2">
                                <table className={`m-auto w-full text-sm sm:text-base ${textPrimary} rounded-xl overflow-hidden`}>
                                    <thead>
                                        <tr className={`${tableHeaderBg} transition-colors duration-500`}>
                                            <th className={`px-4 py-3 ${tableBorder} border-r`}>Website</th>
                                            <th className={`px-4 py-3 ${tableBorder} border-r`}>Username</th>
                                            <th className={`px-4 py-3 ${tableBorder} border-r`}>Password</th>
                                            <th className={`px-4 py-3 ${tableBorder}`}>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {passwords.map((item, index) => (
                                            <tr 
                                                key={item.id} 
                                                // Added border-b for row partition and updated light mode background
                                                className={`${tableRowBg} transition-colors duration-500 border-b ${tableRowDivider} ${index === passwords.length - 1 ? 'border-b-0' : ''}`}
                                            >
                                                
                                                <td className={`px-4 py-3 ${tableBorder} border-r text-center align-middle whitespace-normal break-all`}>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <span className={`w-full text-center ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{item.website}</span>
                                                        <ActionIcon 
                                                            src="https://cdn.lordicon.com/jectmwqf.json" 
                                                            colors={lordIconColors}
                                                            onClick={() => handleCopy(item.website, 'Website')}
                                                        />
                                                    </div>
                                                </td>

                                                <td className={`px-4 py-3 ${tableBorder} border-r text-center align-middle whitespace-normal break-all`}>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <span className={`${textSecondary}`}>{item.username}</span>
                                                        <ActionIcon 
                                                            src="https://cdn.lordicon.com/jectmwqf.json" 
                                                            colors={lordIconColors}
                                                            onClick={() => handleCopy(item.username, 'Username')}
                                                        />
                                                    </div>
                                                </td>

                                                <td className={`px-4 py-3 ${tableBorder} border-r text-center align-middle whitespace-normal break-all`}>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <span className={`${textSecondary}`}>
                                                            {visiblePasswords[item.id] ? item.password : '••••••••'}
                                                        </span>
                                                        
                                                        {/* Password Visibility Toggle */}
                                                        <button onClick={() => togglePasswordVisibility(item.id)} className="p-1 rounded-full hover:bg-opacity-20 transition-colors duration-200">
                                                            <lord-icon
                                                                src={visiblePasswords[item.id] ? "https://cdn.lordicon.com/mjmrmyzg.json" : "https://cdn.lordicon.com/lzzzsvqj.json"}
                                                                trigger="click"
                                                                stroke="bold"
                                                                colors={isDark ? "primary:#a8a29e" : "primary:#1b1091"}
                                                                style={{ width: "22px", height: "22px" }}
                                                                className="cursor-pointer"
                                                            />
                                                        </button>

                                                        {/* Copy Password Button */}
                                                        <ActionIcon 
                                                            src="https://cdn.lordicon.com/jectmwqf.json" 
                                                            colors={lordIconColors}
                                                            onClick={() => handleCopy(item.password, 'Password')}
                                                        />
                                                    </div>
                                                </td>

                                                <td className={`px-4 py-3 text-center`}>
                                                    <div className="flex justify-center gap-3">
                                                        {/* Edit Button */}
                                                        <ActionIcon
                                                            src="https://cdn.lordicon.com/fikcyfpp.json" // Edit icon
                                                            colors={editIconColors}
                                                            onClick={() => handleEdit(item)}
                                                        />
                                                        
                                                        {/* Delete Button */}
                                                        <ActionIcon
                                                            src="https://cdn.lordicon.com/jzinekkv.json" // Delete icon
                                                            colors={deleteIconColors}
                                                            onClick={() => handleDelete(item.id)}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className={`text-center mt-6 p-4 rounded-lg ${isDark ? 'bg-gray-700/50 text-gray-400' : 'bg-blue-100 text-gray-700'} transition-colors duration-500`}>
                                No passwords saved yet. Start by adding one above!
                            </p>
                        )}
                    </div>
                </div>

                {/* FOOTER - Integrated and Theme-Aware */}
                <footer className={`py-4 px-4 mt-auto border-t transition-colors duration-500 ${isDark ? 'bg-gray-800 border-gray-700 shadow-lg shadow-gray-900/50' : 'bg-gray-100 border-gray-200 shadow-md'}`}>
                    <div className="flex flex-col items-center justify-center text-center space-y-3">
                        {/* Logo and Brand */}
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                            <p className={`text-[1.2rem] sm:text-[1.5rem] font-extrabold ${textPrimary} transition-colors duration-500`}>
                                <span className="text-blue-500">&lt;Pass</span>
                                <span className="text-red-400">Vault/&gt;</span>
                            </p>
                        </div>

                        {/* Made With Love */}
                        <div className={`flex flex-wrap justify-center items-center gap-2 font-semibold text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span>Made with</span>
                            <lord-icon
                                src="https://cdn.lordicon.com/ajzwsrcs.json"
                                trigger="hover"
                                // Adjusted colors for better contrast in both modes
                                colors={isDark ? "primary:#ef4444,secondary:#374151" : "primary:#dc2626,secondary:#fca5a5"}
                                style={{ width: 20, height: 20 }}
                            ></lord-icon>
                            <span>by Raghav Bhatia</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default App;