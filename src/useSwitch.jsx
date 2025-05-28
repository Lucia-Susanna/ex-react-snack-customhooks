import { useState } from "react"

function useSwitch(defaultValue = false) {
    const [isOn, setIsOn] = useState(defaultValue)

    const toggle = () => setIsOn((curr) => !curr)

    return { isOn, toggle }
}

export default useSwitch