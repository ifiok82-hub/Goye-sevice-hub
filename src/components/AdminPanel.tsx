import React, { useState, useEffect } from 'react';
import { OrderData } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockData';
import { Lock, ShieldCheck, CheckCircle2, Search, Trash2, Edit3, ArrowLeft, RefreshCw, Key, Download } from 'lucide-react';

interface AdminPanelProps {
  onBackToHome: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onBackToHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [searchTerm, setSearchType] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

  // Load orders from localStorage
  useEffect(() => {
    const loadedJson = localStorage.getItem('goye_orders');
    if (loadedJson) {
      try {
        setOrders(JSON.parse(loadedJson));
      } catch (e) {}
    } else {
      // Pre-populate mock orders if empty
      const defaultMockOrders: OrderData[] = [
        {
          id: 'GOYE-892014',
          fullName: 'Chief Emeka Okafor',
          email: 'emeka@okaforlogistics.com',
          phone: '+2348031234567',
          countryCode: '+234',
          serviceNeeded: 'cac',
          businessName: 'GOYE GLOBAL LOGISTICS LTD',
          message: 'LTD Registration with Tax ID and SCUML',
          status: 'Name Approved',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          paymentMethod: 'Paystack',
          isUnlocked: true
        },
        {
          id: 'GOYE-551029',
          fullName: 'Mrs. Funmi Adebayo',
          email: 'funmi@couture.com',
          phone: '+2348129876543',
          countryCode: '+234',
          serviceNeeded: 'bundle',
          businessName: 'FUNMI LUXE COUTURE',
          message: 'Full 3-in-1 Bundle order',
          status: 'Completed',
          createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
          paymentMethod: 'Pi Network',
          txHash: 'pi_tx_92018340129',
          isUnlocked: true
        }
      ];
      setOrders(defaultMockOrders);
      localStorage.setItem('goye_orders', JSON.stringify(defaultMockOrders));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === COMPANY_INFO.adminSecretKey) {
      setIsAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: OrderData['status']) => {
    const updated = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
    setOrders(updated);
    localStorage.setItem('goye_orders', JSON.stringify(updated));
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const deleteOrder = (orderId: string) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      const updated = orders.filter((o) => o.id !== orderId);
      setOrders(updated);
      localStorage.setItem('goye_orders', JSON.stringify(updated));
      if (selectedOrder?.id === orderId) setSelectedOrder(null);
    }
  };

  const filteredOrders = orders.filter(
    (o) =>
      o.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Stats calculation
  const totalOrders = orders.length;
  const completedOrders = orders.filter((o) => o.status === 'Completed').length;
  const pendingOrders = totalOrders - completedOrders;

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
        <div className="bg-zinc-900 border border-yellow-500/40 rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mx-auto mb-3">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="font-sora font-extrabold text-2xl text-white">
              Admin Portal Login
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Enter secret key to manage client orders ({COMPANY_INFO.entity})
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD700]"
              />
              {passwordError && (
                <p className="text-xs text-red-400 mt-1 font-semibold">
                  Invalid password! Password is <span className="font-mono text-[#FFD700]">GoyeBN3583773</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-extrabold py-3 rounded-xl text-sm transition shadow-lg flex items-center justify-center gap-2"
            >
              <Key className="w-4 h-4" />
              Authenticate Admin
            </button>
          </form>

          <div className="text-center">
            <button
              onClick={onBackToHome}
              className="text-xs text-gray-400 hover:text-white inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-8 text-white">
      {/* Admin Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFD700]">
            <ShieldCheck className="w-4 h-4" /> OFFICIAL ADMIN DASHBOARD
          </div>
          <h2 className="font-sora font-extrabold text-2xl md:text-3xl mt-1">
            GOYE Client Getter Admin Panel
          </h2>
          <p className="text-xs text-gray-400">
            {COMPANY_INFO.entity} ({COMPANY_INFO.rcNumber}) • Live Orders & Status Manager
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              localStorage.removeItem('goye_orders');
              window.location.reload();
            }}
            className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset Orders
          </button>

          <button
            onClick={onBackToHome}
            className="bg-[#FFD700] hover:bg-yellow-400 text-black font-extrabold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Exit Admin
          </button>
        </div>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-zinc-900 border border-gray-800 rounded-2xl">
          <div className="text-xs text-gray-400 font-mono">TOTAL ORDERS RECEIVED</div>
          <div className="font-sora font-extrabold text-3xl text-white mt-1">{totalOrders}</div>
        </div>

        <div className="p-5 bg-zinc-900 border border-gray-800 rounded-2xl">
          <div className="text-xs text-gray-400 font-mono">IN PROGRESS / PENDING</div>
          <div className="font-sora font-extrabold text-3xl text-[#FFD700] mt-1">{pendingOrders}</div>
        </div>

        <div className="p-5 bg-zinc-900 border border-gray-800 rounded-2xl">
          <div className="text-xs text-gray-400 font-mono">COMPLETED & DELIVERED</div>
          <div className="font-sora font-extrabold text-3xl text-emerald-400 mt-1">{completedOrders}</div>
        </div>
      </div>

      {/* Main Order Table & Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Orders Table */}
        <div className="lg:col-span-8 bg-zinc-950 border border-gray-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-sora font-bold text-base">Client Orders List</h3>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchType(e.target.value)}
                placeholder="Search orders..."
                className="bg-zinc-900 border border-gray-700 rounded-xl pl-9 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-[#FFD700]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-800 text-gray-400 font-mono text-[10px] uppercase">
                  <th className="py-2.5 px-3">Order ID</th>
                  <th className="py-2.5 px-3">Client</th>
                  <th className="py-2.5 px-3">Business Name</th>
                  <th className="py-2.5 px-3">Service</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredOrders.map((ord) => {
                  const s = SERVICES_DATA.find((item) => item.id === ord.serviceNeeded);

                  return (
                    <tr
                      key={ord.id}
                      onClick={() => setSelectedOrder(ord)}
                      className={`hover:bg-zinc-900 cursor-pointer transition ${
                        selectedOrder?.id === ord.id ? 'bg-zinc-900 font-semibold' : ''
                      }`}
                    >
                      <td className="py-3 px-3 font-mono text-[#FFD700] font-bold">{ord.id}</td>
                      <td className="py-3 px-3">{ord.fullName}</td>
                      <td className="py-3 px-3">{ord.businessName}</td>
                      <td className="py-3 px-3 uppercase text-[10px] font-mono text-gray-400">
                        {s?.id}
                      </td>
                      <td className="py-3 px-3">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            ord.status === 'Completed'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {ord.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteOrder(ord.id);
                          }}
                          className="text-red-400 hover:text-red-300 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Order Inspector */}
        <div className="lg:col-span-4 bg-zinc-950 border border-gray-800 rounded-3xl p-6 space-y-5">
          {selectedOrder ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <span className="text-xs font-mono text-[#FFD700] font-bold">{selectedOrder.id}</span>
                <span className="text-[11px] text-gray-400">
                  {new Date(selectedOrder.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-gray-500 font-mono text-[10px]">CLIENT NAME:</span>
                  <p className="font-bold text-white text-sm">{selectedOrder.fullName}</p>
                </div>

                <div>
                  <span className="text-gray-500 font-mono text-[10px]">PROPOSED BUSINESS NAME:</span>
                  <p className="font-bold text-[#FFD700] text-sm">{selectedOrder.businessName}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-500 font-mono text-[10px]">EMAIL:</span>
                    <p className="text-gray-300 truncate">{selectedOrder.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-mono text-[10px]">PHONE:</span>
                    <p className="text-gray-300">{selectedOrder.phone}</p>
                  </div>
                </div>

                {selectedOrder.message && (
                  <div>
                    <span className="text-gray-500 font-mono text-[10px]">CLIENT MESSAGE:</span>
                    <p className="p-2.5 bg-black rounded-xl border border-gray-800 text-gray-300 text-xs">
                      {selectedOrder.message}
                    </p>
                  </div>
                )}
              </div>

              {/* Status Updater */}
              <div className="pt-4 border-t border-gray-800 space-y-2">
                <label className="block text-xs font-bold text-gray-300">
                  Update Tracker Status:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  {(['Submitted', 'Name Approved', 'Awaiting Docs', 'Completed'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => updateOrderStatus(selectedOrder.id, st)}
                      className={`p-2 rounded-xl border transition ${
                        selectedOrder.status === st
                          ? 'bg-[#FFD700] text-black font-extrabold border-[#FFD700]'
                          : 'bg-zinc-900 border-gray-800 text-gray-300 hover:border-gray-700'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Contact */}
              <a
                href={`https://wa.me/${selectedOrder.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(selectedOrder.fullName)},%20this%20is%20GOYE%20Services%20Hub%20regarding%20your%20order%20${selectedOrder.id}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                Contact Client on WhatsApp
              </a>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 space-y-2">
              <Edit3 className="w-8 h-8 mx-auto text-gray-700" />
              <p className="text-xs">Select an order from the list to view details and update tracking status.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
