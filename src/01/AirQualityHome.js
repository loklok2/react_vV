import React, { useState } from "react";
import { AirQualityHomeOut } from "./AirQualityHomeOut";

export default function AirQualityHome() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSignIn = async () => {
    try {
      if (!id || !password) {
        alert("아이디와 패스워드를 입력해주세요.");
        return;
      }

      const response = await fetch("http://localhost:3005/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.duplicate) {
          alert("중복된 아이디가 있습니다.");
        } else {
          setIsLogin(true);
          alert("가입이 완료되었습니다.");
        }
      } else {
        alert("제대로된 아이디와 패스워드를 입력해주세요.");
      }
    } catch (error) {
      console.error("가입 에러:", error);
    }
  };

  const handleLogIn = async () => {
    try {
      if (!id || !password) {
        alert("아이디와 패스워드를 입력해주세요.");
        return;
      }

      const response = await fetch(`http://localhost:3005/accounts?id=${id}&password=${password}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("환영합니다.");
      } else {
        alert("잘못된 아이디와 패스워드가 입력되었습니다.");
        return; // 로그인 실패 시 더 이상 진행하지 않음
      }
      
      setIsLogin(true); // 로그인 성공 시 상태를 true로 설정
      
    } catch (error) {
      console.error("로그인 정보 찾을 수 없음:", error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <section className="w-80 h-80 bg-slate-300">
        <div>
          <form>
            <div className="flex flex-col justify-center items-center m-5">
              id
              <div className="flex flex-col justify-center items-center">
                <input
                  type="id"
                  id="email"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                pw
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 m-8">
                <button
                  className="bg-white inline-flex px-6 py-3 
                        rounded-md
                        justify-center items-center
                        text-black font-bold"
                  onClick={handleSignIn}
                >
                  Sign in
                </button>
                <button
                  className="bg-white inline-flex px-6 py-3 
                        rounded-md
                        justify-center items-center
                        text-black font-bold"
                  onClick={handleLogIn}
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
        {isLogin && <AirQualityHomeOut/>}
      </section>
    </div>
  );
}
