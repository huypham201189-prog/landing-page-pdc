import React from 'react';
import Chatbot from '@/components/Chatbot';


export default function LandingPage() {
  return (
    <main>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0px_12px_32px_rgba(27,28,28,0.06)]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <div className="text-2xl font-black tracking-tighter text-[#006d31]">PDC</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="font-semibold text-sm tracking-wide uppercase text-[#006d31] border-b-2 border-[#006d31] pb-1 hover:text-[#00a950] transition-colors duration-300" href="#">Trang chủ</a>
            <a className="font-semibold text-sm tracking-wide uppercase text-zinc-600 hover:text-[#00a950] transition-colors duration-300" href="#">Dịch vụ</a>
            <a className="font-semibold text-sm tracking-wide uppercase text-zinc-600 hover:text-[#00a950] transition-colors duration-300" href="#">Về chúng tôi</a>
            <a className="font-semibold text-sm tracking-wide uppercase text-zinc-600 hover:text-[#00a950] transition-colors duration-300" href="#">Dự án</a>
            <a className="font-semibold text-sm tracking-wide uppercase text-zinc-600 hover:text-[#00a950] transition-colors duration-300" href="#">Liên hệ</a>
          </div>
          <button className="bg-[#006d31] hover:bg-[#00a950] text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all scale-95 active:opacity-80">
            Bắt đầu ngay
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block py-1 px-3 mb-6 bg-zinc-200 text-[#006d31] font-bold text-[0.75rem] tracking-[0.05em] uppercase rounded-sm">Phát triển & Quản trị</span>
              <h1 className="text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1b1c1c] mb-8">
                Kiến tạo sản phẩm <br />
                <span className="text-[#00a950]">Số hóa bền vững.</span>
              </h1>
              <p className="text-[1.125rem] leading-[1.6] text-zinc-600 max-w-xl mb-12">
                Sứ mệnh của chúng tôi là phát triển các giải pháp phần mềm hiện đại, tối ưu hóa quy trình quản trị dự án để mang lại giá trị thực chất cho hệ thống ngân hàng và đối tác.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-[#006d31] text-white px-8 py-4 rounded-md font-bold text-base shadow-lg shadow-[#006d31]/20 hover:scale-105 transition-transform">
                  Khám phá giải pháp
                </button>
                <button className="text-[#006d31] font-bold px-8 py-4 flex items-center gap-2 group transition-all">
                  Xem dự án thực tế
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[24px]">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  alt="PDC Workspace" 
                  className="w-full h-[500px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK1GbQYCYcpipRW9xJxziylaS4peQIXZOjN_EI-9c7EoDHBUoG3RO_Qywp8tSXv5jHtYo_fsqVuUqX8GgLqveTt3N3hCwDDjhFRqrKn5_NZ19YEPufxEzbIKSOYknhEIoiVq7zS_wHFznIBu81rxxqVud8NCVSaRQo5sYmNSqrTB5hEuJHI843IxR3RfOycNy0Lzir7XwO5PnKLPSZhgcksEIpwDQgg-u_3efMDL5S9w13dWf7OFvhWJRHSxzfAf1R7cAiZgl82Gpr"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-lg shadow-xl z-20 border-l-4 border-[#006d31]">
                <div className="text-4xl font-black text-[#1b1c1c] mb-1">98%</div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Dự án hoàn thành đúng hạn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f6f3f2]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[2rem] font-bold tracking-tight text-[#1b1c1c] mb-4">Dịch vụ cốt lõi</h2>
              <p className="text-zinc-600 leading-relaxed">
                Chúng tôi tập trung vào việc hiện thực hóa các ý tưởng phức tạp thành những sản phẩm tinh tế, dễ sử dụng và đạt hiệu suất cao.
              </p>
            </div>
            <div className="text-[#006d31] font-bold uppercase text-xs tracking-widest pb-2 border-b-2 border-[#00a950]">
              Lĩnh vực hoạt động
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-lg group hover:bg-[#006d31] transition-all duration-500">
              <div className="w-12 h-12 bg-[#00a950]/10 flex items-center justify-center mb-8 rounded group-hover:bg-white/20">
                <span className="material-symbols-outlined text-[#006d31] group-hover:text-white">terminal</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Phát triển phần mềm</h3>
              <p className="text-zinc-600 group-hover:text-white/80 text-sm leading-relaxed mb-6">
                Xây dựng ứng dụng Web & Mobile với kiến trúc scalable và bảo mật tiêu chuẩn ngân hàng.
              </p>
              <ul className="space-y-3 text-sm font-medium text-[#006d31] group-hover:text-white">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#006d31] group-hover:bg-white rounded-full"></span> Mobile Banking</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#006d31] group-hover:bg-white rounded-full"></span> Enterprise Web</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-10 rounded-lg group hover:bg-[#006d31] transition-all duration-500">
              <div className="w-12 h-12 bg-[#00a950]/10 flex items-center justify-center mb-8 rounded group-hover:bg-white/20">
                <span className="material-symbols-outlined text-[#006d31] group-hover:text-white">account_tree</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Quản trị dự án</h3>
              <p className="text-zinc-600 group-hover:text-white/80 text-sm leading-relaxed mb-6">
                Tư vấn và thực hiện quản trị dự án theo chuẩn Agile/Scrum, đảm bảo tiến độ và chất lượng.
              </p>
              <ul className="space-y-3 text-sm font-medium text-[#006d31] group-hover:text-white">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#006d31] group-hover:bg-white rounded-full"></span> Agile Coaching</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#006d31] group-hover:bg-white rounded-full"></span> Risk Management</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-10 rounded-lg group hover:bg-[#006d31] transition-all duration-500">
              <div className="w-12 h-12 bg-[#00a950]/10 flex items-center justify-center mb-8 rounded group-hover:bg-white/20">
                <span className="material-symbols-outlined text-[#006d31] group-hover:text-white">digital_out_of_home</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Giải pháp số hóa</h3>
              <p className="text-zinc-600 group-hover:text-white/80 text-sm leading-relaxed mb-6">
                Tái cấu trúc và số hóa quy trình nghiệp vụ, giúp doanh nghiệp vận hành linh hoạt hơn.
              </p>
              <ul className="space-y-3 text-sm font-medium text-[#006d31] group-hover:text-white">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#006d31] group-hover:bg-white rounded-full"></span> Process Automation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#006d31] group-hover:bg-white rounded-full"></span> Data Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-32">
              <h2 className="text-[2rem] font-bold tracking-tight text-[#1b1c1c] mb-8">Quy trình làm việc chuẩn Agile</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="text-[#00a950] font-black text-5xl opacity-20">01</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Khám phá & Ý tưởng</h4>
                    <p className="text-zinc-600 text-sm">Thấu hiểu nhu cầu người dùng và xác định các bài toán then chốt cần giải quyết.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-[#00a950] font-black text-5xl opacity-20">02</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Thiết kế & Prototype</h4>
                    <p className="text-zinc-600 text-sm">Xây dựng giao diện và luồng trải nghiệm người dùng (UX) tối ưu nhất.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-[#00a950] font-black text-5xl opacity-20">03</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Phát triển Sprints</h4>
                    <p className="text-zinc-600 text-sm">Lập trình theo từng chu kỳ ngắn, liên tục cập nhật và cải thiện sản phẩm.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img alt="Design process" className="rounded-lg shadow-lg w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxn8APCc_ykNUccSLA5e3autAHNUTJwxorLZ4h244TgA1BicTo12vyV9IDu2Snr1JaWiY6AXUfd00ONTztYWudQy5QLD8gwlyrN5gAl31K3Xjw7YfelTtmeH1ltoIDkoRC3qXxlOWbkchQHO2YmQT7_Lc6gR1O_JkrGzVwZODNcOEtmL5BBMVqA3NBcI1JlB0LXq_ztME24X8uaUPRgBujuLGNkxZjTiQakkKO-ypckqzRUTAfIDp1HOfMbB7TpV8yVKfRvOQiOdne" />
                <img alt="Agile team" className="rounded-lg shadow-lg w-full h-80 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6izP402CwwPe3pQoOzaPDRsnfk-ZjovxfSqQO_XT9xgVcq7LjbaQ8MAE5iVk9aBA3LWfyFKqBXxsy5GRp6vDQJxbLePYtHkiURReYRPl-3B1fNSZfv2loXFV8M5JlEtIZK8ufOXJ8kKp8V61nMVNeSA6QeDV_HfN-0GuArUcBRtI1__hbnZigeuZ-oSWtb3BvLJ9TMt8ESZnCsYeUGNAH7p6R9npO4OfJzwhldwA0u6KyRJfUvB3ysWBoUFCuIU4iyiUJ1YvKwgAb" />
              </div>
              <div className="space-y-4">
                <img alt="Analytics" className="rounded-lg shadow-lg w-full h-96 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQhgqv8lUCY54sni9l-oAwaOXj3mAflTKFa9BaPlwQcrlH2LhCocnK-oYR0z_e9-kJLoBoS-NrcMOwGARqKmVH_4lKmDszrcR2_slAzEwuKEB18hsIn0mzmm-G9idMzYF3OOErOI13LGV0aE_PXQpS0nurekSVIS-N4RVzFxzLsJ__YP-ePwFEzDAm0naqYnfnEhWev3hIV4soyWx4LLRhHqfxjRv8lTq3ZQq9f35JTETr1oh8QwnhMa8Jx2O7GqWwfGsKO4U1QqEP" />
                <img alt="Infrastructure" className="rounded-lg shadow-lg w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgCbQIKOkxD_SPRgSt-sMTdN1NgCDiyLKcS91NSc0EZsIekgI-lILCpVpK56zypuv3b089F2Obaz45eeM95DSne3fN6Kcl4B62jlUDkDhET3Jbb6UxozXjer853ogI4qLZv6se2Fnzbi9itgNdOTMaKzcWIS43P_7bihgxV5t6g8Tdq1JoFMm6ee4y2xfW64erq3CqKi_BfjCoza9a-x6EexPVgxzaEOL3QhOjg46KAM67C3ApFa0ZhHsYLNZaolAcxlytIeEeocER" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#f6f3f2]">
        <div className="max-w-7xl mx-auto px-8 text-center mb-16">
          <h2 className="text-[2rem] font-bold tracking-tight text-[#1b1c1c] mb-4">Đội ngũ chuyên nghiệp</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">Tập hợp những chuyên gia hàng đầu trong lĩnh vực phát triển phần mềm và quản lý dự án.</p>
        </div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-white p-8 rounded-lg flex gap-6 items-center">
            <img alt="Team member" className="w-32 h-32 rounded-full object-cover shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlYDpm3Wtm6UxUIEtsy31fD961P4yuQj7nppPrJkpRytCtMLRfDU-54KUnimzPGu_SSwQIyOtyB4AAPkjp1o7965HJeKw6QeULqXKkFvAr_YbVja94yhxLVfVgAHXkIQCuNeoJqvTnXvyOiI_DJmfB1_fGf6o2RRzDFkDgtOkiX5fVeDbCEepdIbUKXbMQ7c4sSDB-2PSfW-34Cv1wYUlg0iuQwHDi9d5beUlm31IYT1mzJm6HgK1Sgk29vY84WMsNtUIJSKeYkD7N" />
            <div className="text-left">
              <h4 className="font-bold text-lg">Nguyễn Văn A</h4>
              <p className="text-[#006d31] text-sm font-semibold mb-2">Giám đốc Trung tâm</p>
              <p className="text-xs text-zinc-600 leading-relaxed">Hơn 15 năm kinh nghiệm trong kiến trúc hệ thống tài chính.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <img alt="Team member" className="w-24 h-24 rounded-full object-cover mx-auto mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATGa96_Aw8VDkM8kDUskA3ZjXXIl9WEPfqMcfjneuShbFYkxBE42076LfnXmBlVBlb3UgPDVZgSRHOzgHQsQhH6hEm2GK4z9_gnAYtUGAJodLb96Xi-dEFAISRs7MlqwAJtRcz2ToJV1BftI9n1gH0FIKB5MLnh2i6_p8TTPF2j7FBi1qKvhWuKX7irLlZQigAv5UfJiKDc8ikCXfGNBbRgYrVC3dzF0svFNUO26VpBPP3POcm2cnPSly4Cltz0r8z4YxikU9rQ1JI" />
            <h4 className="font-bold">Trần Thị B</h4>
            <p className="text-[#006d31] text-xs font-semibold">Head of PMO</p>
          </div>
          <div className="bg-[#006d31] p-8 rounded-lg text-white flex flex-col justify-center">
            <div className="text-3xl font-black mb-2">50+</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-80">Kỹ sư & Chuyên gia</div>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <img alt="Team member" className="w-24 h-24 rounded-full object-cover mx-auto mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBczPEzhdyT6mP3mbK2AHi4ukP6D5JJfePN3Mdyr17KwK3UQjIayfomkMnyJIwQ6wDC43EyaaUzzmLHKXkX_x96I0qt3sLov1__fvGqK0pdRWF9zmgt1v0hviqqg27sTWkRigYINvK5gVM7a0U_94CDD0uY5lG4anfNyxqKb-pOWYV65Lkxi1XH6MAEQPQOe-7KKjl7FqmEL9FXIGOpDeqnQQo31HhiWzxrKU2Xtxp38uiZVzH_etmi5EWqe2pukjSBHS7DdnP6UZLO" />
            <h4 className="font-bold">Lê Văn C</h4>
            <p className="text-[#006d31] text-xs font-semibold">Technical Lead</p>
          </div>
          <div className="md:col-span-2 bg-zinc-200 p-8 rounded-lg flex items-center justify-between">
            <div className="text-left">
              <h4 className="font-bold text-lg mb-1">Môi trường sáng tạo</h4>
              <p className="text-zinc-600 text-sm">Chúng tôi luôn chào đón những tài năng mới gia nhập.</p>
            </div>
            <button className="bg-white text-[#006d31] px-6 py-2 rounded font-bold text-xs shadow-sm">Gia nhập ngay</button>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <img alt="Team member" className="w-24 h-24 rounded-full object-cover mx-auto mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_riUF2yF5QBSWdbsAaboEVA9fJEZzELYKEPN7g99SrvoGSieP5P2tnENEpeLWracypLpYeu5Jsgq2sL9smFeuj64kdp9skTFVwmbEEM7pxyYk7RrZ3_mkDziJXqMPY9AywB9Cq6u8fODaOvzfnDL2psO_eyEBX7GH9QdfFru4Ejo5CfaqJDtGM3fobAn2zKqmBu43Qd5cv36ENC4TwRL8YxA6LMCW_OwR124Ybl71jk4bF9B1Y0fqLWtFgco1KFU49XQbMXaj4ecs" />
            <h4 className="font-bold">Phạm Thị D</h4>
            <p className="text-[#006d31] text-xs font-semibold">Product Owner</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-center text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-12">Đối tác chiến lược</h3>
          <div className="flex flex-wrap justify-center gap-16 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-2xl font-black text-[#006d31]">Vietcombank</span>
            <span className="text-2xl font-bold text-zinc-800">VCB Securities</span>
            <span className="text-2xl font-bold text-zinc-800">VCB Leasing</span>
            <span className="text-2xl font-bold text-zinc-800">VCB Fund</span>
            <span className="text-2xl font-bold text-zinc-800">VCB Tower</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f6f3f2] w-full mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
          <div className="space-y-6">
            <div className="text-xl font-bold text-[#1b1c1c] uppercase tracking-tighter">PDC Center</div>
            <p className="text-sm leading-relaxed text-zinc-500">
              Phòng Quản trị dự án - Trung tâm Phát triển sản phẩm. Đơn vị tiên phong trong đổi mới sáng tạo số.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#006d31] cursor-pointer hover:opacity-70">language</span>
              <span className="material-symbols-outlined text-[#006d31] cursor-pointer hover:opacity-70">mail</span>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#006d31]">Khám phá</h4>
            <ul className="space-y-4 text-sm">
              <li><a className="text-zinc-500 hover:underline decoration-2 underline-offset-4 transition-opacity" href="#">Chương trình đào tạo</a></li>
              <li><a className="text-zinc-500 hover:underline decoration-2 underline-offset-4 transition-opacity" href="#">Văn hóa PDC</a></li>
              <li><a className="text-zinc-500 hover:underline decoration-2 underline-offset-4 transition-opacity" href="#">Cơ hội nghề nghiệp</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#006d31]">Pháp lý</h4>
            <ul className="space-y-4 text-sm">
              <li><a className="text-[#006d31] font-bold hover:underline decoration-2 underline-offset-4 transition-opacity" href="#">Chính sách bảo mật</a></li>
              <li><a className="text-zinc-500 hover:underline decoration-2 underline-offset-4 transition-opacity" href="#">Điều khoản sử dụng</a></li>
              <li><a className="text-zinc-500 hover:underline decoration-2 underline-offset-4 transition-opacity" href="#">Sơ đồ trang</a></li>
              <li><a className="text-zinc-500 hover:underline decoration-2 underline-offset-4 transition-opacity" href="#">Hỗ trợ kỹ thuật</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#006d31]">Liên hệ</h4>
            <p className="text-sm leading-relaxed text-zinc-500">
              Tòa nhà Vietcombank, 198 Trần Quang Khải, Hoàn Kiếm, Hà Nội.
            </p>
            <p className="text-sm font-bold text-[#1b1c1c]">
              pdc.info@vietcombank.com.vn
            </p>
          </div>
        </div>
        <div className="border-t border-zinc-200 py-8 px-8 text-center">
          <p className="text-xs text-zinc-500">
            © 2024 Trung tâm Phát triển Sản phẩm - Ban Quản lý Dự án. Bảo lưu mọi quyền.
          </p>
        </div>
      </footer>
      <Chatbot />
    </main>
  );
}
