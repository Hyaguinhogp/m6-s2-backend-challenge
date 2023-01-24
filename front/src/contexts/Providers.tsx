import { ReactNode } from "react"
import { ModelProvider } from "./ContextModel"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <ModelProvider>
            {children}
        </ModelProvider>
    )
}

export default Providers