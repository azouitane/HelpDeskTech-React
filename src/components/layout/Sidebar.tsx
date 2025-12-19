import {
  LayoutDashboard,
  Ticket,
  Users
} from "lucide-react";

const menu = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true
  },
  {
    label: "Tickets",
    icon: Ticket,
    active: false
  },
  {
    label: "Users",
    icon: Users,
    active: false
  }
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-16 bg-slate-900 flex flex-col items-center py-2 rounded-3xl">
      {/* Logo / Initial */}
      <div className="mb-10 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500 text-white font-bold">
        K
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-6">
        {menu.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            title={label}
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition
              ${
                active
                  ? "bg-blue-500 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }
            `}
          >
            <Icon size={20} />
          </button>
        ))}
      </nav>
    </aside>
  );
}
