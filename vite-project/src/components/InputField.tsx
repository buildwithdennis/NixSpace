
type InputProps = {
    companyName?: string;
    setCompanyName: (name: string) => void;
    focused: boolean;
    setFocused: (focused: boolean) => void;
}

const InputField = ({ companyName, setCompanyName, focused, setFocused }: InputProps) => {
  return (
      <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="eg. Jacob Construction"
                className={`w-full px-4 py-3 rounded-lg border-2 text-lg text-gray-700 font-satoshi font-bold placeholder-gray-300 outline-none transition-all duration-200 ${
                  focused
                    ? "border-purple-500 shadow-md shadow-purple-100"
                    : "border-gray-200"
                }`}
              />
         
  )
}

export default InputField