import React from 'react';
import { PageView } from '../types';
import { Briefcase, FolderKanban, Tag, ShoppingCart, Menu } from 'lucide-react';

interface BottomNavProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  onOpenMenuModal: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentView,
  setCurrentView,
  onOpenMenuModal
}) => {
  const items: { label: string; view: PageView | 'menu'; icon: React.FC<{ className?: string }> }[] = [
    { label: 'SERVICES', view: 'services', icon: Briefcase },
    { label: 'PORTFOLIO', view: 'portfolio', icon: FolderKanban },
    { label: 'PRICING', view: 'pricing', icon: Tag },
    { label: 'ORDER', view: 'order', icon: ShoppingCart },
    { label: 'MENU', view: 'menu', icon: Menu },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-lg border-t border-[#FFD700]/30 shadow-2xl py-1 px-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.view !== 'menu' && currentView === item.view;

          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.view === 'menu') {
                  onOpenMenuModal();
                } else {
                  setCurrentView(item.view);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-lg transition-all ${
                isActive
                  ? 'text-[#FFD700] font-bold scale-105'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#FFD700]' : 'text-gray-400'}`} />
              <span className="text-[10px] tracking-wider mt-0.5 font-sora font-semibold">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
