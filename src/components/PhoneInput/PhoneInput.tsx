import { forwardRef, useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'

const PhoneInput = (props: any, ref: any) => {
    const [value, setValue] = useState('')
    const handleChange = (newValue: any) => {
        setValue(newValue)
    }

    return (
        <MuiTelInput
            {...props}
            inputRef={ref}
            variant="outlined"
            defaultCountry='US'
            onlyCountries={['US', 'CA']}
            value={value}

            onChange={handleChange}
        />
    )
}
//export default PhoneInput
export default forwardRef(PhoneInput)




