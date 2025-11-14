export default function DemoSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="relative bg-gradient-to-br from-[#f27d33]/10 to-[#f27d33]/5 rounded-3xl p-8 md:p-12 border border-[#f27d33]/20 shadow-2xl overflow-hidden">
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Free Template</span>
          <span className="text-[#f27d33]">→</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-semibold text-gray-800">Logoipsum</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <div className="flex">
            <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-3">MAIN</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-sm">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-sm">Audience</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-sm">Workflows</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 p-8 bg-white">
              <div className="max-w-2xl">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">|||</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">New Intercom message</h3>
                      <p className="text-sm text-gray-500">trigger</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mb-6">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200 mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-xs">🔍</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Check if existing contact?</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-11">branch-1</p>
                  </div>

                  <div className="flex items-center justify-center mb-6">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-[#f27d33]/10 rounded flex items-center justify-center">
                          <span className="text-xs">💬</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Message sales</p>
                          <p className="text-xs text-gray-500">If yes: hook</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <span className="text-xs">📝</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Create CRM record</p>
                          <p className="text-xs text-gray-500">If not: 2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
