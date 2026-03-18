function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-6 py-20">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-6">
          プライバシーポリシー
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            個人情報の管理
          </h2>
          <p className="leading-relaxed">
            個人情報を取り扱うにあたっては、「個人情報の保護に関する法律」をはじめとする
            個人情報の保護に関する法令、ガイドラインおよび本プライバシーポリシーを遵守いたします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            個人情報の利用目的
          </h2>
          <p className="leading-relaxed">
            当サイトでは、お問い合わせの際に名前・メールアドレス等の個人情報をご登録いただく場合がございます。
            これらの取得した個人情報は、質問に対する回答や必要な情報を提供する目的で利用し、
            ご本人の同意なく、これらの目的以外で第三者に個人情報を開示いたしません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            個人情報の第三者提供について
          </h2>
          <p className="leading-relaxed">
            当サイトでは、個人情報は適切に管理し、法律の適用を受ける場合や法的強制力のある
            請求の場合を除いて、第三者に開示することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Cookie(クッキー)について
          </h2>
          <p className="leading-relaxed">
            当サイトでは、ユーザーの利便性向上のためにCookieを使用しています。
            Cookieとは、WebサーバーからWebブラウザに送信されるデータのことであり、
            ユーザーがサイトを訪れた際に、そのユーザーのコンピュータ内に記録されます。
            ただし、当サイトが使用するCookieは、
            ユーザーの設定情報（作業時間、休憩時間など）を保存するために使用され、
            個人を特定する情報は含まれません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            広告配信について
          </h2>
          <p className="leading-relaxed mb-4">
            当サイトでは、第三者配信の広告サービス（Google
            AdSense）を利用しています。
            このような広告配信事業者は、ユーザーの興味に応じた広告を表示するために
            Cookieを使用することがあります。GoogleでCookieを使用することにより、
            インターネットにおけるご自身のサイトや他のサイトへのアクセス情報に基づいて
            ユーザーに広告を配信することが可能になります。
          </p>
          <p className="leading-relaxed mb-4">
            Cookieを無効にする設定およびGoogleアドセンスに関する詳細は
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              className="text-red-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              広告 – ポリシーと規約 – Google
            </a>
            をご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            アクセス解析ツールについて
          </h2>
          <p className="leading-relaxed mb-4">
            当サイトでは、Googleアナリティクスを利用してアクセス解析を行っています。
            アクセス解析ツールは、トラフィックデータの収集のためにCookieを使用しています。
            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p className="leading-relaxed mb-4">
            この機能はCookieを無効にすることで収集を拒否することができますので、
            お使いのブラウザの設定をご確認ください。
          </p>
          <p className="leading-relaxed">
            このGoogleアナリティクスの規約に関する詳細は
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              className="text-red-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google アナリティクス利用規約
            </a>
            をご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            著作権について
          </h2>
          <p className="leading-relaxed">
            当サイトに掲載されている情報についての著作権は放棄しておりません。
            著作権法により認められている引用の範囲である場合を除き、「内容、テキスト、画像等」
            の無断転載・使用を固く禁じます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            プライバシーポリシーの変更について
          </h2>
          <p className="leading-relaxed">
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、
            本プライバシーポリシーの内容を適宜見直しその改善に努めます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
        </section>

        <div className="mt-8 text-right text-gray-600">
          <p>制定日：2026年2月3日</p>
          <p>最終更新日：2026年2月3日</p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
