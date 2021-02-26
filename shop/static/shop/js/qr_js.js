const CONTAINER = document.getElementById("abonementScanResult");
const SUUCCESS_SVG = `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 69.6792C0.942439 46.2847 13.3319 23.823 38.7487 9.78626C63.6074 -3.95398 88.901 -2.97046 113.586 11.1097C118.66 14.0023 118.74 15.738 114.477 19.7877C108.968 25.0596 108.366 24.9801 101.544 21.8126C78.7444 11.2543 56.8653 13.1707 37.3931 28.9647C17.8193 44.8745 10.7945 66.1574 17.3481 90.4342C23.9017 114.711 40.6626 129.84 65.7822 133.904C102.798 139.892 135.733 110.546 134.711 73.2155C134.653 71.046 134.341 68.8765 134.073 66.7576C133.391 61.3555 137.016 54.0226 141.924 51.5132C144.918 49.9873 146.172 52.3014 146.89 54.536C148.357 59.2517 149.262 64.1233 149.587 69.0501C152.378 105.859 128.563 138.959 92.9897 147.767C45.672 159.483 0 123.801 0 69.6792Z" fill="#7DBF05"/>
<path d="M45.4908 55.8939C50.6524 55.3009 54.1902 58.3526 57.525 61.4912C63.8538 67.4357 69.9217 73.6477 74.5469 81.0674C75.8518 83.1719 76.9682 83.5479 78.2659 81.1325C82.1444 73.9008 87.6903 67.79 92.4025 61.0862C99.9275 50.3182 108.518 40.4325 117.442 30.8216C119.987 28.0807 122.59 25.3688 125.816 23.4018C132.891 19.099 140.039 19.2508 147.042 23.4597C150.667 25.6292 150.957 28.2688 147.948 31.0964C125.439 52.2274 107.445 76.9309 90.9598 102.799C87.2481 108.584 82.0429 111.31 75.5473 112.294C71.1396 112.959 67.7178 111.52 65.3327 107.738C63.0709 104.173 60.896 100.521 58.5907 97.0423C51.798 86.9387 43.9114 77.6116 35.0732 69.2291C28.4979 62.9159 29.2736 59.6182 38.0238 56.9352C40.4152 56.0825 42.9566 55.7281 45.4908 55.8939Z" fill="#7DBF05"/>
</svg>`;
const ERROR_SVG = `<svg width="150" height="151" viewBox="0 0 150 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.019276 73.0884C1.58456 46.0221 13.4618 24.7749 36.8323 10.7671C57.3042 -1.54498 79.1094 -3.08852 101.56 5.06398C103.378 5.72342 105.379 6.22344 105.574 8.68731C105.741 10.8613 104.125 11.8106 102.581 12.8179C93.6027 18.7457 96.1028 18.5718 84.8125 16.4412C51.5721 9.99171 19.3099 34.6521 15.6576 68.3563C12.0922 101.191 35.0062 130.214 67.9133 134.562C99.458 138.729 129.169 116.054 134.097 83.8352C135.75 73.2782 134.436 62.4695 130.3 52.6166C127.778 46.5221 131.648 40.0871 138.307 39.2972C140.721 39.0074 141.634 40.7466 142.503 42.551C150.148 58.6168 151.975 75.3856 147.851 92.6254C139.554 127.344 108.625 150.86 72.7685 150.062C38.115 149.294 8.37468 124.098 1.51934 89.6688C0.395236 84.2163 -0.107988 78.6541 0.019276 73.0884V73.0884Z" fill="#EF0405"/>
<path d="M92.5737 61.2691C101.658 69.924 109.397 79.8898 115.531 90.8355C120.075 99.0315 118.495 106.778 111.314 112.786C107.161 116.235 104.792 115.981 102.052 111.235C95.5794 100.206 88.1573 89.7629 79.8703 80.0235C77.5296 77.2335 76.0948 77.7915 74.2179 80.0235C66.2466 89.4442 58.2172 98.8648 51.0286 108.923C49.712 110.799 48.238 112.559 46.6226 114.184C43.5717 117.221 41.4702 117.032 38.8542 113.735C32.3322 105.496 32.3974 96.2053 38.5063 87.7557C44.6153 79.3061 51.6445 71.813 58.7318 64.3345C60.9058 62.0735 60.384 61.1314 58.21 59.5299C51.712 54.7342 44.8559 50.4437 37.7019 46.6961C32.8757 44.1525 32.5133 41.7466 36.3468 37.8262C42.6587 31.3766 50.6227 29.9345 58.8694 33.855C64.5726 36.5652 69.5728 40.377 74.4208 44.3482C76.3267 45.8989 77.3774 45.7468 79.1456 44.167C90.0156 34.4347 101.139 24.9923 113.683 17.3543C121.075 12.8686 128.278 13.0063 135.474 17.5427C141.271 21.1661 141.467 24.1952 135.815 28.1519C126.147 34.9492 116.14 41.2973 107.009 48.7904C102.103 52.834 97.3782 57.1023 92.5737 61.2691Z" fill="#EF0405"/>
</svg>`;

const postVisit = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");

  fetch(
    `https://spartagym.com.kg/subscription-check/?user=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
    response.json().then((data) => {
      let userData = { ...data[0] };
      let today = Date();
      function formatDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();

          if (month.length < 2)
              month = '0' + month;
          if (day.length < 2)
              day = '0' + day;

          return [year, month, day].join('-');
      }
      let formattedToday = formatDate(today)

      fetch(`https://spartagym.com.kg/subscription/${userData.customer}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: userData.customer,
          id: userData.id,
          visits: userData.visits - 1,
          visit_dates: userData.visit_dates ? [...userData.visit_dates, formattedToday] : [formattedToday],
        }),
      })
        .then((response) => {
          response.json().then((data) => {
            render(true, data);
          });
        })
        .catch((e) => {
          render(false, {
            end_date: "123",
            visits: "123",
          });
        });
    });
  });
};

const render = (isSuccess, data) => {
  console.log(data);
  let date = new Date(data.end_date);
  let visits = data.visits;

  CONTAINER.innerHTML = `
  ${
    isSuccess
      ? SUUCCESS_SVG +
        `<div class="result-container__info">
      <h2>Успешно</h2>
      <p>у Вас осталось ${visits} посещений до ${
          date.getDate() +
          "." +
          date.getMonth() +
          "." +
          date.getFullYear()
        }</p>
    </div>`
      : ERROR_SVG +
        `<div class="result-container__info">
      <h2>Ошибка</h2>
    </div>`
  }`;
};

window.onload = () => {
  postVisit();
};