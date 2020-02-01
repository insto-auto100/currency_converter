import React from "react";
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import "./currency-converter.css";
import CurrencyInput from "./CurrencyInput";
import convert from "../convert";
import {formatToDecimalPlaces} from "../utils";
import {PRECISION} from "../convert/constants";


export default class CurrencyConverter extends React.Component {

    constructor() {
        super();
        this.state = {
            currencyInput1: {currency: "AUD", value: "1"},
            currencyInput2: {currency: "AUD", value: "1"}
        }
    }

    onChangeSourceCurrency = (event) => {
        let currencyInput1 = {...this.state.currencyInput1, currency: event.target.value};
        let currencyInput2 = this.state.currencyInput2;
        try {
            currencyInput2 = convert(currencyInput1).to(currencyInput2.currency);
            currencyInput2.value = formatToDecimalPlaces(currencyInput2.value, PRECISION[currencyInput2.currency]);
        } catch (e) {
            if (e.name === "TypeError") {
                alert(`cannot convert ${currencyInput1.currency} to  ${currencyInput2.currency}`)
            }
            return;

        }
        this.setState({
            currencyInput1,
            currencyInput2
        })
    };

    onChangeSourceValue = (event) => {
        let currencyInput1 = {...this.state.currencyInput1, value: event.target.value};
        let currencyInput2 = this.state.currencyInput2;
        try {
            currencyInput2 = convert(currencyInput1).to(currencyInput2.currency);
            currencyInput2.value = formatToDecimalPlaces(currencyInput2.value, PRECISION[currencyInput2.currency]);
        } catch (e) {
            if (e.name === "TypeError") {
                alert(`cannot convert ${currencyInput1.currency} to  ${currencyInput2.currency}`)
            }
            return;
        }
        this.setState({
            currencyInput1,
            currencyInput2
        })
    };

    onChangeTargetCurrency = (event) => {
        let currencyInput1 = this.state.currencyInput1;
        let currencyInput2 = {...this.state.currencyInput2, currency: event.target.value};
        try {
            currencyInput2 = convert(currencyInput1).to(currencyInput2.currency);
            currencyInput2.value = formatToDecimalPlaces(currencyInput2.value, PRECISION[currencyInput2.currency]);
        } catch (e) {
            if (e.name === "TypeError") {
                alert(`cannot convert ${currencyInput1.currency} to  ${currencyInput2.currency}`)
            }
            return;
        }
        this.setState({
            currencyInput1,
            currencyInput2
        })
    }

    onChangeTargetValue = (event) => {
        let currencyInput1 = this.state.currencyInput1;
        let currencyInput2 = {...this.state.currencyInput2, value: event.target.value};
        try {
            currencyInput1 = convert(currencyInput2).to(currencyInput1.currency);
            currencyInput1.value = formatToDecimalPlaces(currencyInput1.value, PRECISION[currencyInput1.currency]);
        } catch (e) {
            if (e.name === "TypeError") {
                alert(`cannot convert ${currencyInput1.currency} to  ${currencyInput2.currency}`)
            }
            return;
        }
        this.setState({
            currencyInput1,
            currencyInput2
        })
    }


    render() {

        return (<MDBContainer className="currency-converter">

            <MDBRow>
                <MDBCol className="offset-md-2" md="8">
                    <MDBJumbotron>
                        <MDBRow>
                            <h2>Currency Converter</h2>
                        </MDBRow>
                        <MDBRow>
                            <CurrencyInput name="currencyInput1" label="Amount"
                                           currency={this.state.currencyInput1.currency}
                                           value={this.state.currencyInput1.value}
                                           onChangeCurrency={this.onChangeSourceCurrency}
                                           onChangeValue={this.onChangeSourceValue}/>

                            <CurrencyInput name="currencyInput2" label="Amount"
                                           currency={this.state.currencyInput2.currency}
                                           value={this.state.currencyInput2.value}
                                           onChangeCurrency={this.onChangeTargetCurrency}
                                           onChangeValue={this.onChangeTargetValue}/>

                        </MDBRow>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>)

    }
}