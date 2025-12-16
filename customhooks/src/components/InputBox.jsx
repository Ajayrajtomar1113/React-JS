import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency ,
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountId = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex shadow-sm">
      
      <div className="w-1/2 pr-2">
        <label
          htmlFor={amountId}
          className="text-black/60 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5 text-black border-b"
          type="number"
          value={amount}
          disabled={amountDisable}
          aria-label={label}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

    
      <div className="w-1/2 flex flex-col items-end">
        <p className="text-black/40 mb-2 w-full text-right">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none text-black"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
