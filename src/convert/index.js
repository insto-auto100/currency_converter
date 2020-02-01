import {CONVERSION_RATES, LOOKUP_VALUES} from "./constants";

export default function convert(sourceCurrency) {

    return {
        to: (targetCurrencyCode) => {
            let lookUpValue = LOOKUP_VALUES[sourceCurrency.currency][targetCurrencyCode];
            if (lookUpValue === 1) {
                return sourceCurrency
            }
            let value;
            switch (lookUpValue) {
                case "D":
                    value = sourceCurrency.value * CONVERSION_RATES[sourceCurrency.currency][targetCurrencyCode];
                    return {value, currency: targetCurrencyCode};
                    break;
                case "INV":
                    value = sourceCurrency.value * 1 / CONVERSION_RATES[targetCurrencyCode][sourceCurrency.currency];
                    return {value, currency: targetCurrencyCode};
                    break;
                default:
                    let intermediateCurrencyObject = convert(sourceCurrency).to(lookUpValue);
                    return convert(intermediateCurrencyObject).to(targetCurrencyCode);
            }
        }
    }
}
