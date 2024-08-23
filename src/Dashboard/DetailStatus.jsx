import { detailStatistics } from "../constants";

const DetailStatus = () => {
  return (
    <div className="border p-4 rounded-xl  bg-[#01192F] mb-4">
      <h1 className="font-semibold text-lg text-center">Detail Statistics</h1>
      <div>
        {detailStatistics.map((detail, index) => (
          <div
            key={index}
            className="flex justify-between mt-1.5  p-1"
            style={{ backgroundColor: detail.color }}
          >
            <div className="flex gap-2 ">
              <img src={detail.icon} alt="" />
              <p>{detail.title}</p>
            </div>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailStatus;
