import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faVolumeXmark,
  faPlay,
  faArrowRotateRight,
  faMugSaucer,
  faPencil,
  faChartColumn,
  faTrashCan,
  faGear,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const getInitialWorkTime = () => {
    const saved = localStorage.getItem("workTime");
    return saved ? parseInt(saved) : 25;
  };

  const getInitialBreakTime = () => {
    const saved = localStorage.getItem("breakTime");
    return saved ? parseInt(saved) : 5;
  };

  const [workMinutes, setWorkMinutes] = useState(getInitialWorkTime());
  const [breakMinutes, setBreakMinutes] = useState(getInitialBreakTime());
  const [timeLeft, setTimeLeft] = useState(workMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [workSessions, setWorkSessions] = useState(0);
  const [breakSessions, setBreakSessions] = useState(0);
  const [sessionHistory, setSessionHistory] = useState([]);
  const intervalRef = useRef(null);

  const WORK_TIME = (typeof workMinutes === "number" ? workMinutes : 25) * 60;
  const BREAK_TIME = (typeof breakMinutes === "number" ? breakMinutes : 5) * 60;

  useEffect(() => {
    if (typeof workMinutes === "number") {
      localStorage.setItem("workTime", workMinutes.toString());
    }
    if (typeof breakMinutes === "number") {
      localStorage.setItem("breakTime", breakMinutes.toString());
    }
  }, [workMinutes, breakMinutes]);

  const playSound = useCallback(
    (soundFile) => {
      if (isMuted) return;

      try {
        const audio = new Audio(soundFile);
        audio.volume = volume;
        audio.play().catch((error) => {
          console.warn("Audio playback failed:", error);
        });
      } catch (error) {
        console.warn("Audio loading failed:", error);
      }
    },
    [isMuted, volume],
  );

  const playNotification = useCallback(
    (mode) => {
      if (mode === "work") {
        // 作業終了音
        playSound("/sounds/work_end.mp3");
      } else {
        // 休憩終了音
        playSound("/sounds/break_end.mp3");
      }
    },
    [playSound],
  );

  const addSessionToHistory = (sessionMode) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setSessionHistory((prev) => [
      ...prev,
      { mode: sessionMode, time: timeString },
    ]);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      playNotification(mode);

      if (mode === "work") {
        setWorkSessions((prev) => prev + 1);
        addSessionToHistory("work");
        setMode("break");
        setTimeLeft(BREAK_TIME);
      } else {
        setBreakSessions((prev) => prev + 1);
        addSessionToHistory("break");
        setMode("work");
        setTimeLeft(WORK_TIME);
      }
    }

    return () => clearInterval(intervalRef.current);
  }, [
    isRunning,
    timeLeft,
    mode,
    isMuted,
    volume,
    WORK_TIME,
    BREAK_TIME,
    playNotification,
  ]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(mode === "work" ? WORK_TIME : BREAK_TIME);
  };

  const handleModeSwitch = () => {
    setIsRunning(false);
    if (mode === "work") {
      setMode("break");
      setTimeLeft(BREAK_TIME);
    } else {
      setMode("work");
      setTimeLeft(WORK_TIME);
    }
  };

  const handleResetStats = () => {
    setWorkSessions(0);
    setBreakSessions(0);
    setSessionHistory([]);
  };

  const handleWorkTimeChange = (value) => {
    // 空欄を許可（入力中）
    if (value === "") {
      setWorkMinutes("");
      return;
    }

    // 数字以外を除外
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "") {
      setWorkMinutes("");
      return;
    }

    const numValue = parseInt(numericValue);
    if (isNaN(numValue)) return;

    const newValue = Math.max(1, Math.min(60, numValue));
    setWorkMinutes(newValue);
    if (mode === "work" && !isRunning) {
      setTimeLeft(newValue * 60);
    }
  };

  const handleBreakTimeChange = (value) => {
    // 空欄を許可（入力中）
    if (value === "") {
      setBreakMinutes("");
      return;
    }

    // 数字以外を除外
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "") {
      setBreakMinutes("");
      return;
    }

    const numValue = parseInt(numericValue);
    if (isNaN(numValue)) return;

    const newValue = Math.max(1, Math.min(30, numValue));
    setBreakMinutes(newValue);
    if (mode === "break" && !isRunning) {
      setTimeLeft(newValue * 60);
    }
  };

  const modeText = mode === "work" ? "作業中" : "休憩中";

  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center p-6 py-32 relative overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col items-center gap-8">
        {/* メイントマト */}
        <div className="relative">
          {/* トマトのへた */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 py-10 z-10">
            <svg
              width="200"
              height="120"
              viewBox="0 0 200 120"
              className="drop-shadow-xl"
            >
              {/* ギザギザのへた */}
              <path
                d="
				M100 10
				L85 35
				L55 25
				L70 55
				L40 65
				L75 75
				L65 105
				L100 85
				L135 105
				L125 75
				L160 65
				L130 55
				L145 25
				L115 35
				Z
			"
                fill="#2f7d32"
                stroke="#1b5e20"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              {/* 中央の茎 */}
              <rect
                x="92"
                y="30"
                width="16"
                height="40"
                rx="6"
                fill="#1b5e20"
              />
            </svg>
          </div>

          {/* トマト本体 */}
          <div className="w-96 h-96 rounded-[90%/100%] bg-gradient-to-br from-red-500 via-red-600 to-red-700 shadow-2xl relative flex items-center justify-center border-8 border-red-400">
            {/* トマトのハイライト */}
            <div className="absolute top-8 left-12 w-20 h-16 bg-white opacity-30 rounded-full blur-xl"></div>

            {/* タイマー表示 */}
            <div className="text-center z-10">
              <div className="text-8xl font-mono font-bold text-white mb-4 drop-shadow-lg">
                {formatTime(timeLeft)}
              </div>
              <div className="text-2xl font-semibold text-red-100">
                {modeText}
              </div>
            </div>
          </div>

          {/* トマトの下の影 */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-80 h-8 bg-black opacity-20 rounded-full blur-xl"></div>
        </div>

        {/* コントロールボタン */}
        <div className="flex gap-4 justify-center z-10">
          {!isRunning ? (
            <button
              onClick={handleStart}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-110 shadow-lg text-lg"
            >
              <FontAwesomeIcon icon={faPlay} /> スタート
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-110 shadow-lg text-lg"
            >
              <FontAwesomeIcon icon={faPause} /> 一時停止
            </button>
          )}

          <button
            onClick={handleReset}
            className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-110 shadow-lg text-lg"
          >
            <FontAwesomeIcon icon={faArrowRotateRight} /> リセット
          </button>
        </div>

        <button
          onClick={handleModeSwitch}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-md"
        >
          {mode === "work" ? (
            <>
              <FontAwesomeIcon icon={faMugSaucer} /> 休憩モードへ
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPencil} /> 作業モードへ
            </>
          )}
        </button>

        {/* 下部セクション（2カラム） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* 進捗カード */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faChartColumn} /> 今日の進捗
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-red-100 rounded-xl p-4 border-2 border-red-300">
                <div className="text-3xl font-bold text-red-700">
                  {workSessions}
                </div>
                <div className="text-sm text-red-600">作業セッション</div>
              </div>
              <div className="bg-green-100 rounded-xl p-4 border-2 border-green-300">
                <div className="text-3xl font-bold text-green-700">
                  {breakSessions}
                </div>
                <div className="text-sm text-green-600">休憩セッション</div>
              </div>
            </div>

            {sessionHistory.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  履歴（最新5件）
                </h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {sessionHistory
                    .slice(-5)
                    .reverse()
                    .map((session, index) => (
                      <div
                        key={index}
                        className="text-xs text-gray-600 flex items-center gap-2 bg-gray-50 rounded px-2 py-1"
                      >
                        <span>{session.mode === "work" ? "💼" : "☕"}</span>
                        <span>{session.time}</span>
                        <span>
                          {session.mode === "work" ? "作業終了" : "休憩終了"}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            <button
              onClick={handleResetStats}
              className="text-sm text-gray hover:text-red-800 w-full"
            >
              <FontAwesomeIcon icon={faTrashCan} /> 進捗をリセット
            </button>
          </div>

          {/* 設定カード */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
            <h3 className="text-xl mb-4 font-bold flex items-center gap-2">
              <FontAwesomeIcon icon={faGear} /> 設定
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FontAwesomeIcon icon={faPencil} /> 作業時間（1～60分）
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={workMinutes}
                onChange={(e) => handleWorkTimeChange(e.target.value)}
                onFocus={(e) => e.target.select()}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    handleWorkTimeChange("1");
                  }
                }}
                disabled={isRunning}
                placeholder="1-60"
                className="w-full px-4 py-2 border-2 border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FontAwesomeIcon icon={faMugSaucer} /> 休憩時間（1～30分）
              </label>
              <input
                type="text"
                inputMode="nemeric"
                pattern="[0-9]*"
                value={breakMinutes}
                onChange={(e) => handleBreakTimeChange(e.target.value)}
                onFocus={(e) => e.target.select()}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    handleWorkTimeChange("1");
                  }
                }}
                disabled={isRunning}
                placeholder="1-30"
                className="w-full px-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
              />
            </div>
            <p className="text-xs text-gray-500 mb-4">
              ※タイマー停止時のみ時間変更が可能です
            </p>

            <div className="border-t-2 border-gray-200 pt-4 mt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-semibold">
                  <FontAwesomeIcon icon={faVolumeHigh} /> 音量
                </span>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    isMuted
                      ? "bg-gray-400 text-white"
                      : "bg-orange-600 text-white hover:bg-orange-700"
                  }`}
                >
                  {isMuted ? (
                    <>
                      <FontAwesomeIcon icon={faVolumeXmark} /> ミュート
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faVolumeHigh} /> オン
                    </>
                  )}
                </button>
              </div>

              {!isMuted && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">小</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="flex-1 accent-orange-600"
                  />
                  <span className="text-sm text-gray-500">大</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
