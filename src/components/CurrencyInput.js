import React from "react";
import {MDBCol, MDBInput} from "mdbreact";

export default class CurrencyInput extends React.Component {

    static currencies = [
        {text: "AUD", value: "AUD"},
        {text: "CAD", value: "CAD"},
        {text: "CNY", value: "CNY"},
        {text: "CZK", value: "CZK"},
        {text: "DKK", value: "DKK"},
        {text: "EUR", value: "EUR"},
        {text: "GBP", value: "GBP"},
        {text: "JPY", value: "JPY"},
        {text: "NOK", value: "NOK"},
        {text: "NZD", value: "NZD"},
        {text: "USD", value: "USD"},
        ];

    onChangeCurrency = (event) => {
        this.props.onChangeCurrency(event);
    }

    onChangeValue = (event) => {
        this.props.onChangeValue(event);
    }

    render() {
        return <React.Fragment>
            <MDBCol>
                <select name={this.props.name} className="browser-default custom-select"
                        onChange={this.onChangeCurrency}
                        value={this.props.currency}>
                    {
                        CurrencyInput.currencies.map(currency =>
                            <option value={currency.value}>{currency.text}</option>
                        )
                    }
                </select>
                <MDBInput value={this.props.value} name={this.props.name} label={this.props.label} onChange={this.onChangeValue}/>
            </MDBCol>
        </React.Fragment>
    }
}
