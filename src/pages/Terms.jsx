function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-6 py-20">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-6">利用規約</h1>

        <section className="mb-8">
          <p className=" leading-relaxed">
            本利用規約（以下「本規約」）は、当サイト（以下「当サイト」）が提供するサービスの利用条件を定めるものです。
            ユーザーの皆様には、本規約に従って、本サービスをご利用いただきます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            第1条（適用）
          </h2>
          <p className=" leading-relaxed">
            本規約は、ユーザーと当サイトとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            第2条（サービスの提供）
          </h2>
          <p className=" leading-relaxed mb-4">
            当サイトは、ユーザーに対して無料でポモドーロタイマー機能を提供します。
          </p>
          <p className=" leading-relaxed">
            当サイトは、事前の予告なくサービスの内容を変更、追加、または中止することができるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            第3条（禁止事項）
          </h2>
          <p className=" mb-3">
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul className="list-disc list-inside space-y-2 ">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>
              当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
            </li>
            <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            第4条（免責事項）
          </h2>
          <ul className="list-disc list-inside space-y-2 ">
            <li>
              当サイトは、本サービスの内容変更、中断、終了によって生じたいかなる損害についても、一切の責任を負いません。
            </li>
            <li>
              当サイトは、ユーザーのデータの損失について一切の責任を負いません。
            </li>
            <li>当サイトは、タイマーの正確性を保証するものではありません。</li>
            <li>
              当サイトは、本サービスに関してユーザーが被った損害について、一切の責任を負いません。
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            第5条（サービスの停止等）
          </h2>
          <p className=" leading-relaxed">
            当サイトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </p>
          <ul className="list-disc list-inside space-y-2  mt-3">
            <li>
              本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
            </li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当サイトが本サービスの提供が困難と判断した場合</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            第6条（利用規約の変更）
          </h2>
          <p className=" leading-relaxed">
            当サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
            変更後の本規約は、本サイトに掲載したときから効力を生じるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            第7条（準拠法・裁判管轄）
          </h2>
          <p className=" leading-relaxed">
            本規約の解釈にあたっては、日本法を準拠法とします。
            本サービスに関して紛争が生じた場合には、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>

        <div className="mt-8 text-right text-gray-600">
          <p>制定日：2026年2月4日</p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
