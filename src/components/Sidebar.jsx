import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faInfoCircle,
  faShieldAlt,
  faFileContract,
  faExclamationTriangle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { path: "/", icon: faHome, label: "ホーム" },
    { path: "/about", icon: faInfoCircle, label: "このサイトについて" },
    { path: "/privacy", icon: faShieldAlt, label: "プライバシーポリシー" },
    { path: "/terms", icon: faFileContract, label: "利用規約" },
    { path: "/disclaimer", icon: faExclamationTriangle, label: "免責事項" },
    { path: "/contact", icon: faEnvelope, label: "お問い合わせ" },
  ];

  return (
    <>
      {/* ハンバーガーメニューボタン */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        aria-label="メニュー"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* オーバーレイ（背景クリックで閉じる） */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        />
      )}

      {/* サイドバー */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Flexboxで縦方向のレイアウト管理 */}
        <div className="h-full flex flex-col">
          {/* ヘッダー部分（固定） */}
          <div className="flex-shrink-0 p-6 mt-2 ml-16">
            <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
              メニュー
            </h2>
          </div>

          {/* メニュー部分（スクロール可能） */}
          <nav className="flex-1 overflow-y-auto px-6 pb-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeSidebar}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* フッター部分（固定） */}
          <div className="flex-shrink-0 p-6 border-t bg-white">
            <p className="text-xs text-gray-500 text-center">
              © 2024 ポモドーロタイマー
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
