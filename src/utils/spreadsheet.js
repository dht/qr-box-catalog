import { useEffect, useState } from "react";

const apiKey = 'GOOGLE_SHEET_API_KEY';

export const getData =(spreadsheetId, range) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!${range}?key=${apiKey}`;
    return fetch(url).then(res => res.json()).then(res => res.values);
}

export const useSpreadSheet = (spreadsheetId, range) => {
  const [data, setData] = useState([]);

  async function loadData(spreadsheetId, range) {
    const allData = await getData(spreadsheetId, range);
    
    const parsedData = allData.map(line => {
      const code = line[3];
      const title = line[4];
      const subtitle = line[5];

      return {
          code,
          title,
          subtitle
        }
        });

        setData(parsedData);
    }

    useEffect(() => {
        loadData(spreadsheetId, range);
    }, [spreadsheetId, range]);

    return [data]
}