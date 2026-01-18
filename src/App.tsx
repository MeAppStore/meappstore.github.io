import { Download, Star, Grid3X3, Copy, Zap, ArrowRight } from 'lucide-react';

function App() {
  const appName = "KeepAppsPosition";
  const appTagline = "这是一款专为追求极致效率的 macOS 用户打造的窗口布局管理工具。";
  const appDescription = "引入创新的\"实时取景器\"概念，让管理窗口像拍照一样直观。实时捕捉 (Live Viewfinder)： 拥有精美的实时预览界面，像相机取景框一样，随时展现当前桌面的窗口分布状态。一键定格 (Layout Capture)： 无论是分屏办公、设计绘图还是代码开发，只需点击保存，当前的窗口位置、大小和图层顺序即刻被精准记录。毫秒级恢复 (Instant Restore)： 无论窗口被如何拖动或关闭，只需一键，所有应用将瞬间各就各位，找回您最舒适的工作模式。视觉化管理： 采用现代感十足的深色系 UI 设计，支持网格与列表切换，每一个布局都配有缩略图预览，让恢复不再靠猜。";
  const downloadUrl = "https://meappstore.github.io/";

  const features = [
    {
      icon: Grid3X3,
      title: "支持布局保存和恢复",
      description: "精准记录窗口位置、大小和图层顺序，一键恢复工作状态"
    },
    {
      icon: Copy,
      title: "支持多存多个布局",
      description: "创建并管理多个自定义布局，适应不同的工作场景"
    },
    {
      icon: Zap,
      title: "一键恢复保存布局",
      description: "毫秒级响应速度，瞬间恢复您最舒适的工作模式"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {appName}
              </span>
            </div>
            <a
              href={downloadUrl}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Download Now</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" fill="currentColor" />
                <span>macOS 效率工具</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
                  {appTagline}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {appDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={downloadUrl}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  <Download className="w-6 h-6" />
                  <span>Download Free</span>
                </a>
                <button className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">5.0 Rating</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10M+</p>
                  <p className="text-sm text-gray-600">Downloads</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 aspect-[9/16] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl mx-auto flex items-center justify-center">
                      <Star className="w-12 h-12 text-blue-600" />
                    </div>
                    <p className="text-gray-400 text-sm">App Screenshot</p>
                    <p className="text-xs text-gray-300">Replace with actual app images</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              核心功能
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              为您的 macOS 工作流程带来前所未有的效率提升
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              立即开始使用
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              让您的 macOS 工作效率瞬间提升，体验完美的窗口管理
            </p>
            <a
              href={downloadUrl}
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              <Download className="w-6 h-6" />
              <span>Download Now</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 {appName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
