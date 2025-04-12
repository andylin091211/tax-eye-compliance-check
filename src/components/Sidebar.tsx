import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  Upload, 
  CheckSquare, 
  FileSpreadsheet, 
  DollarSign,
  ShoppingCart,
  Receipt,
  CreditCard,
  FileText,
  AlertTriangle,
  Settings,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavItem = ({ to, icon, label, onClick }: NavItemProps) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        isActive 
          ? "bg-taxeye-primary text-white" 
          : "text-gray-700 hover:bg-gray-100"
      )}
      onClick={onClick}
    >
      <span className="text-current">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const isMobile = useIsMobile();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  const sidebarClasses = cn(
    "bg-sidebar h-screen fixed top-0 left-0 z-20 flex flex-col transition-all duration-300 ease-in-out shadow-md",
    isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0",
    isMobile ? "w-64" : "w-56"
  );

  const closeSidebar = () => {
    if (isMobile) {
      onClose();
    }
  };
  
  return (
    <>
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={onClose}></div>
      )}
      
      <aside className={sidebarClasses}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <FileSpreadsheet className="h-6 w-6 text-taxeye-primary" />
            <h2 className="ml-2 text-lg font-semibold">流程力财税风险</h2>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={18} />
            </Button>
          )}
        </div>
        
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          <NavItem 
            to="/" 
            icon={<BarChart3 size={18} />} 
            label="风险仪表板" 
            onClick={closeSidebar}
          />
          
          <NavItem 
            to="/data-import" 
            icon={<Upload size={18} />} 
            label="数据导入" 
            onClick={closeSidebar}
          />
          
          <NavItem 
            to="/verification" 
            icon={<CheckSquare size={18} />} 
            label="核销匹配" 
            onClick={closeSidebar}
          />
          
          <div className="pt-2 pb-1 border-t border-gray-200 mt-2">
            <p className="px-3 py-1 text-xs text-gray-500">业务数据</p>
          </div>
          
          <NavItem 
            to="/sales" 
            icon={<DollarSign size={18} />} 
            label="销售流程" 
            onClick={closeSidebar}
          />
          
          <NavItem 
            to="/purchase" 
            icon={<ShoppingCart size={18} />} 
            label="采购流程" 
            onClick={closeSidebar}
          />
          
          <NavItem 
            to="/expense" 
            icon={<FileText size={18} />} 
            label="费用报销" 
            onClick={closeSidebar}
          />
          
          <div className="pt-2 pb-1 border-t border-gray-200 mt-2">
            <p className="px-3 py-1 text-xs text-gray-500">单据凭证</p>
          </div>
          
          <NavItem 
            to="/invoices" 
            icon={<Receipt size={18} />} 
            label="发票管理" 
            onClick={closeSidebar}
          />
          
          <NavItem 
            to="/payments" 
            icon={<CreditCard size={18} />} 
            label="资金流水" 
            onClick={closeSidebar}
          />
          
          <NavItem 
            to="/risks" 
            icon={<AlertTriangle size={18} />} 
            label="风险项目" 
            onClick={closeSidebar}
          />
        </nav>
        
        <div className="p-3 border-t border-gray-200">
          <NavItem 
            to="/settings" 
            icon={<Settings size={18} />} 
            label="系统设置" 
            onClick={closeSidebar}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
