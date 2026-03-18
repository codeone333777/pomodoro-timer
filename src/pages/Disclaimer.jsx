function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-6 py-20">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-6">免責事項</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            当サイトの情報について
          </h2>
          <p className="leading-relaxed">
            当サイトのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めておりますが、
            正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            リンク先の情報について
          </h2>
          <p className="leading-relaxed">
            当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、
            サービス等について一切の責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            タイマーの精度について
          </h2>
          <p className="leading-relaxed">
            当サイトのタイマー機能は、ブラウザの仕様やデバイスの性能により、
            若干の誤差が生じる場合があります。重要な用途での使用は推奨いたしません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            データの保存について
          </h2>
          <p className="leading-relaxed">
            当サイトでは、ブラウザのローカルストレージを使用してユーザーの設定情報を保存しています。
            ブラウザのキャッシュクリアやデバイスの変更により、保存されたデータが失われる場合があります。
            データの損失について、当サイトは一切の責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            サービスの中断・停止について
          </h2>
          <p className="leading-relaxed">
            当サイトは、メンテナンスや不測の事態により、予告なくサービスを中断・停止する場合があります。
            これにより生じた損害について、当サイトは一切の責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            広告について
          </h2>
          <p className="leading-relaxed">
            当サイトでは、第三者配信の広告サービス（Google
            AdSense等）を利用しています。
            広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            広告内容について、当サイトは一切の責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            著作権・肖像権について
          </h2>
          <p className="leading-relaxed">
            当サイトで掲載している文章や画像などにつきましては、著作権は放棄しておりません。
            当サイトに存在する、文章・画像・動画等の著作物の情報を無断転載することを禁止します。
            引用の範囲を超えるものについては、法的処置を行います。
          </p>
        </section>

        <div className="mt-8 text-right text-gray-600">
          <p>制定日：2026年2月4日</p>
          <p>最終更新日：2026年2月4日</p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
