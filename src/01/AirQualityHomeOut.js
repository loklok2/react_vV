
export function AirQualityHomeOut({ id, setIsLogin }) {
  
  const handleLogOut = () => {
   
    setIsLogin(false);
    alert("환영합니다.");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <section className="w-80 h-80 bg-slate-300">
        <div>
          <form>
            <div className="flex flex-col justify-center items-center m-5">
              id: {id}
              <div className="flex flex-col justify-center items-center">
                <button
                  onClick={() => {
                    alert("이용해주셔서 감사합니다.");
                  }}
                  className="bg-white inline-flex px-6 py-3 
                        rounded-md
                        justify-center items-center
                        text-black font-bold"
                >
                  이용하기
                </button>
                <button
                  onClick={handleLogOut}
                  className="bg-white inline-flex px-6 py-3 
                        rounded-md
                        justify-center items-center
                        text-black font-bold"
                >
                  Logout
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}