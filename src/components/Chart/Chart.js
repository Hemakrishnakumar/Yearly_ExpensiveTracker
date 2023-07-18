import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const barData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let max = 0;
  props.expenses.forEach((element) => {
    const x = element.date.getMonth();
    barData[x] += +element.amount;
    if (barData[x] > max) max = barData[x];
  });

  return (
    <div className="chart">
      {barData.map((e, i) => (
        <ChartBar key={months[i]} value={e} label={months[i]} maxValue={max} />
      ))}
    </div>
  );
}

export default Chart;
