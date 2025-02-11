import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        let url = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])

    return data;
}

export default useCurrencyInfo;
