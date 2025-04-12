import { useState } from 'react';
import { Bell, FileSpreadsheet, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
            <Menu size={20} />
          </Button>
        )}
        <div className="flex items-center">
          <FileSpreadsheet className="h-6 w-6 text-taxeye-primary" />
          <h1 className="text-xl font-semibold ml-2 text-taxeye-primary">
            流程力财税风险分析
          </h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <div className="px-4 py-2 font-medium">
              通知
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-2">
              <div>
                <p className="font-medium text-sm">发现新的高风险异常</p>
                <p className="text-xs text-gray-500">10分钟前</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2">
              <div>
                <p className="font-medium text-sm">采购发票待核销</p>
                <p className="text-xs text-gray-500">30分钟前</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2">
              <div>
                <p className="font-medium text-sm">系统更新完成</p>
                <p className="text-xs text-gray-500">1小时前</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-taxeye-primary">
              查看全部
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>个人信息</DropdownMenuItem>
            <DropdownMenuItem>设置</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>退出登录</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
