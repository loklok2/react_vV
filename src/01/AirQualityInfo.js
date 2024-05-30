import { useState, useEffect } from "react";

export default function AirQualityInfo() {
    const [tdata, setTdata] = useState([]);
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedData, setSelectedData] = useState();

    useEffect(() => {
        const getFetchData = (url) => {
            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    console.log("fetch", data);
                    setTdata(data.getIndoorAirQualityByStation.body.items.item);
                });
        };

        let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
        url += `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=100`;
        url += `&resultType=json&controlnumber=2024052910`;
        getFetchData(url);
    }, []);

    useEffect(() => {
        const tm = tdata.filter(item=>item.site === selectedArea)[0];
        setSelectedData(tm)
    }, [tdata,selectedArea]);

    const handleChange = (e) => {
        setSelectedArea(e.target.value);
    }

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <div>
                지역선택
                <select id="지역선택"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={handleChange}
                    value={selectedArea}>
                    <option value="">지역을 선택하세요</option>
                    {tdata.map((item, index) => (
                        <option key={index} value={item.site}>{item.site}</option>
                    ))}
                </select>
            </div>
            <table className="w-11/12 text-left text-sm font-light text-surface">
                <thead className="border-b border-neutral-900 font-medium">
                    <tr className="bg-slate-500 text-white font-bold text-center">
                        <th scope="col" className="px-6 py-3">pm10</th>
                        <th scope="col" className="px-6 py-3">co2</th>
                        <th scope="col" className="px-6 py-3">co</th>
                        <th scope="col" className="px-6 py-3">no2</th>
                        <th scope="col" className="px-6 py-3">no</th>
                        <th scope="col" className="px-6 py-3">nox</th>
                        <th scope="col" className="px-6 py-3">o3</th>
                        <th scope="col" className="px-6 py-3">pm25</th>
                        <th scope="col" className="px-6 py-3">fad</th>
                    </tr>
                </thead>
                <tbody>
                  {selectedData && (
                        <tr className="text-center">
                            <td>{selectedData.pm10}</td>
                            <td>{selectedData.co2}</td>
                            <td>{selectedData.co}</td>
                            <td>{selectedData.no2}</td>
                            <td>{selectedData.no}</td>
                            <td>{selectedData.nox}</td>
                            <td>{selectedData.o3}</td>
                            <td>{selectedData.pm25}</td>
                            <td>{selectedData.fad}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}