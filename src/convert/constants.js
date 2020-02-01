export const LOOKUP_VALUES = {
    "AUD": {
        "AUD": 1, "CAD": "USD", "CNY": "USD", "CZK": "USD", "DKK": "USD", "EUR": "USD",
        "GBP": "USD", "JPY": "USD", "NOK": "USD", "NZD": "USD", "USD": "D"
    },
    "CAD": {
        "AUD": "USD", "CAD": 1, "CNY": "USD", "CZK": "USD", "DKK": "USD", "EUR": "USD",
        "GBP": "USD", "JPY": "USD", "NOK": "USD", "NZD": "USD", "USD": "D"
    },
    "CNY": {
        "AUD": "USD", "CAD": "USD", "CNY": 1, "CZK": "USD", "DKK": "USD", "EUR": "USD",
        "GBP": "USD", "JPY": "USD", "NOK": "USD", "NZD": "USD", "USD": "D"
    },
    "CZK": {
        "AUD": "USD", "CAD": "USD", "CNY": "USD", "CZK": 1, "DKK": "EUR", "EUR": "INV",
        "GBP": "USD", "JPY": "USD", "NOK": "EUR", "NZD": "USD", "USD": "EUR"
    },
    "DKK": {
        "AUD": "USD", "CAD": "USD", "CNY": "USD", "CZK": "EUR", "DKK": 1, "EUR": "INV",
        "GBP": "USD", "JPY": "USD", "NOK": "EUR", "NZD": "USD", "USD": "EUR"
    },
    "EUR": {
        "AUD": "USD", "CAD": "USD", "CNY": "USD", "CZK": "D", "DKK": "D", "EUR": 1,
        "GBP": "USD", "JPY": "USD", "NOK": "D", "NZD": "USD", "USD": "D"
    },
    "GBP": {
        "AUD": "USD", "CAD": "USD", "CNY": "USD", "CZK": "USD", "DKK": "USD", "EUR": "USD",
        "GBP": 1, "JPY": "USD", "NOK": "USD", "NZD": "USD", "USD": "D"
    },
    "JPY": {
        "AUD": "USD", "CAD": "USD", "CNY": "USD", "CZK": "USD", "DKK": "USD", "EUR": "USD",
        "GBP": "USD", "JPY": 1, "NOK": "USD", "NZD": "USD", "USD": "INV"
    },
    "NOK": {
        "AUD": "USD", "CAD": "USD", "CNY": "USD", "CZK": "EUR", "DKK": "EUR", "EUR": "INV",
        "GBP": "USD", "JPY": "USD", "NOK": 1, "NZD": "USD", "USD": "EUR"
    },
    "NZD": {
        "AUD": "USD", "CAD": "USD", "CNY": "USD", "CZK": "USD", "DKK": "USD", "EUR": "USD",
        "GBP": "USD", "JPY": "USD", "NOK": "USD", "NZD": 1, "USD": "D"
    },
    "USD": {
        "AUD": "INV", "CAD": "INV", "CNY": "INV", "CZK": "EUR", "DKK": "EUR", "EUR": "INV",
        "GBP": "INV", "JPY": "D", "NOK": "EUR", "NZD": "INV", "USD": 1
    },
};

export const CONVERSION_RATES = {
    "AUD": {"USD": 0.8371},
    "CAD": {"USD": 0.8711},
    "USD": {"CNY": 6.1715, "JPY": 119.95},
    "EUR": {"USD": 1.2315, "CZK": 27.6028, "DKK": 7.4405, "NOK": 8.6651},
    "GBP": {"USD": 1.5683},
    "NZD": {"USD": 0.7750},
};

export const PRECISION = {
    "AUD": 2,
    "CAD": 2,
    "CNY": 2,
    "CZK": 2,
    "DKK": 2,
    "EUR": 2,
    "GBP": 2,
    "JPY": 0,
    "NOK": 2,
    "NZD": 2,
    "USD": 2,
};
