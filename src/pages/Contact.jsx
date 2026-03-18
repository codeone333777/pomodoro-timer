import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJSで送信
    emailjs
      .send(
        "service_tj6aws7", //Service ID
        "template_wvezkgb", //Template ID
        formData,
        "H-fajXtsOdzDwYfm-", //Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitStatus("success");
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setSubmitStatus("error");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-6 py-20">
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-6 flex items-center gap-3">
          <FontAwesomeIcon icon={faEnvelope} /> お問い合わせ
        </h1>

        <p className="text-gray-700 mb-8">
          ご質問、ご要望、不具合の報告など、お気軽にお問い合わせください。
        </p>

        {/* 成功メッセージ */}
        {submitStatus === "success" && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded flex items-center gap-3">
            <FontAwesomeIcon icon={faCheckCircle} className="text-2xl" />
            <div>
              <p className="font-bold">送信完了</p>
              <p className="text-sm">
                お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
              </p>
            </div>
          </div>
        )}

        {/* エラーメッセージ */}
        {submitStatus === "error" && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <p className="font-bold">送信エラー</p>
            <p className="text-sm">
              申し訳ございません。送信に失敗しました。もう一度お試しください。
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* お名前 */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              お名前 <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
              placeholder="山田太郎"
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              メールアドレス <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
              placeholder="example@email.com"
            />
          </div>

          {/* 件名 */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              件名 <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
              placeholder="お問い合わせの件名"
            />
          </div>

          {/* お問い合わせ内容 */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              お問い合わせ内容 <span className="text-red-600">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows="6"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white font-bold py-3 px-6 rounded-lg transition transform shadow-lg flex items-center justify-center gap-2 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 hover:scale-105"
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⏳</span>
                送信中...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                送信する
              </>
            )}
          </button>
        </form>

        {/* 注意事項 */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>注意事項：</strong>
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside mt-2 space-y-1">
            <li>通常、1〜3営業日以内に返信いたします</li>
            <li>迷惑メール設定により返信が届かない場合があります</li>
            <li>個人情報は適切に管理し、第三者に提供することはありません</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
