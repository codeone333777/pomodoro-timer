import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCheckCircle,
  faSignsPost,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="min-h-screen bg-orange-100 p-6 py-20">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-6 flex items-center justify-center gap-3">
          このサイトについて
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <FontAwesomeIcon icon={faClock} className="text-red-600" />{" "}
            ポモドーロ・テクニックとは
          </h2>
          <p className="leading-relaxed mb-4">
            ポモドーロ・テクニックとは、1980年代にイタリア人フランチェスコ・シリロによって考案された時間管理術です。
            このテクニックではタイマーを使用し、一般的には25分間の作業時間と5分間の休憩時間に分割します。
            これによって、長時間の集中が維持されると言われています。また、「ポモドーロ」という単語は、
            イタリア語で「トマト」を意味し、当時シリロが使っていたキッチンタイマーがトマト型であったことが由来とされています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <FontAwesomeIcon icon={faSignsPost} className="text-blue-600" />{" "}
            効果的な使い方
          </h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li>取り組むタスクを決める</li>
            <li>タイマーを25分間に設定して作業開始</li>
            <li>タイマーが鳴るまで一つの作業に集中</li>
            <li>タイマーが鳴ったら5分間の休憩をとる</li>
            <li>4ポモドーロごとに15～30分間の長い休憩をとる</li>
            <li>1～5を繰り返す</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-yellow-500"
            />{" "}
            注意点
          </h2>
          <ol className="space-y-3 list-disc list-inside">
            <li>
              作業中に急用などが入りタスクが中断された場合は、そのポモドーロは終了とみなして、
              はじめから新しいポモドーロを開始する
            </li>
            <li>作業中は基本的に1つの作業に集中する</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />{" "}
            主な機能
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>カスタマイズ可能な作業時間・休憩時間</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>セッション記録機能で進捗を可視化</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>音声通知でタイマー終了のお知らせ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>シンプルかつ分かりやすいデザイン</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>設定の自動保存（次回利用時もそのまま）</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
